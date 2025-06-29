import React, { useState } from "react";
import "./Contact.css";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${name}! We will respond to your inquiry soon.`);
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>Have questions? We're here to help! Send us a message and we'll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="contact-form">
                <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                <button type="submit">Send Message</button>
            </form>

            <h2>Contact Details</h2>
            <p> Location: New York, USA</p>
            <p> Email: support@localeventplanner.com</p>
            <p> Phone: +1 (555) 123-4567</p>
        </div>
    );
}

export default Contact;