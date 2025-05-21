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