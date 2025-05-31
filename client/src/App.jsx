import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import EmailVerify from "./pages/EmailVerify";
import ResetPassword from "./pages/ResetPassword";
import Help from "./pages/Help";
import Hook from './pages/Hook';
import Dashboard from "./pages/Dashboard";
import PostDetails from "./pages/PostDetails";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/email-verify' element={<EmailVerify />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/help' element={<Help />} />
        <Route path='/hook' element={<Hook/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/post/:id' element={<PostDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/about" element={<About />} />

      </Routes>
      
    </div>
  );
}
export default App;