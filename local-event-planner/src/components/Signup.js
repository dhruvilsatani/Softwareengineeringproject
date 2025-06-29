import React, { useState } from "react";
import axios from "axios";
import "./Signup.css";

const Signup = () => {
    const [user, setUser] = useState({ username: "", email: "", password: "" });

    const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/users/signup", user);
            alert(" Signup successful!");
        } catch (error) {
            alert(" " + error.response.data.message);
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-box" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit" className="signup-button">Register</button>
                <p className="auth-link">Already have an account? <a href="/login">Login</a></p>
            </form>
        </div>
    );
};

export default Signup;