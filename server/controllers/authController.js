import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import transporter from "../config/nodemailer.js";



export const register = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.json({ success: false, message: "Please fill all the fields" });
    }

    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.json({ success: false, message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({
            name,
            email,
            password: hashedPassword
        });

        await user.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? 'none' : 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // fixed this too, was wrong: 160 -> 60
        });


        // Sending welcome email
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: email,
            subject: "Welcome to Our Service",
            text: `Hello ${name},\n\nThank you for registering with us!\n\nBest regards,\nYour Company`
        }
        
        await transporter.sendMail(mailOptions);

        return res.json({ success: true, message: "User registered successfully", user });
        
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Server error" });
    }
};



export const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.json({success: false, message: "Please fill all the fields"});
    }

    try {
        const user = await userModel.findOne({email});
        if(!user) {
            return res.json({success: false, message: "User does not exist"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.json({success: false, message: "Invalid credentials"});
        }
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {
            expiresIn: "1d"
        });
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production"?
            'none' : 'strict',
            maxAge: 7*24*60*60*1000
        });

        return res.json({success: true, message: "Login successful"});
    } catch (error) {
        console.log(error);
        return res.json({success: false, message: "Internal server error"});
    }
}


export const logout = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production"?
            'none' : 'strict',
        });

        return res.json({success: true, message: "Logout successful"});
    } catch (error) {
        console.log(error);
        return res.json({success: false, message: error.message});
    }
}


//Send Verification Otp the User's Email




export const sendVerifyOtp = async (req, res) => {  
    try {  
        const { userId } = req.body;
        const user = await userModel.findById(userId);
        
        
        if (user.isAccountVerified) {
            return res.json({ success: false, message: "Account already verified" });
        }

        const otp = String(Math.floor(100000 + Math.random() * 900000));

        user.verifyOtp = otp;
        user.verifyOtpExpireAt = Date.now() + 5 * 60 * 1000; // 5 minutes expiry
        await user.save();

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: "Verify Your Account",
            text: `Your verification OTP is ${otp}. It is valid for 5 minutes.`
        };

        await transporter.sendMail(mailOptions);

        return res.json({ success: true, message: "OTP sent to your email" });
    } catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
};



export const verifyEmail = async (req, res) => {
    const { userId, otp } = req.body;
    if (!userId || !otp) {
        return res.json({ success: false, message: "Missing Details" });
    }

    try{
        const user = await userModel.findById(userId);
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }
        if (user.verifyOtp !== otp || user.verifyOtp === "") {
            return res.json({ success: false, message: "Invalid OTP" });
        }

        if (Date.now() > user.verifyOtpExpireAt) {
            return res.json({ success: false, message: "OTP expired" });
        }

        user.isAccountVerified = true;
        user.verifyOtp = "";
        user.verifyOtpExpireAt = 0;
        await user.save();

        return res.json({ success: true, message: "Account verified successfully" });

    }

    catch (error) {
        console.log(error);
        return res.json({ success: false, message: error.message });
    }
}