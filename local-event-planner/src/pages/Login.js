import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });

    const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:5000/api/users/login", user);
            alert("✅ Login successful!");
            localStorage.setItem("token", data.token); // Store JWT Token
        } catch (error) {
            alert("❌ " + error.response.data.message);
        }
    };

    return (
        <div className="login-container">
            <form className="login-box" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit" className="login-button">Login</button>
                <p className="auth-link">New user? <a href="/signup">Sign Up</a></p>
            </form>
        </div>
    );
};

export default Login;