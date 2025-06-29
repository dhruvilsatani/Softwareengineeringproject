import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about-container">
            <h1>About Local Event Planner</h1>
            <p>
                Welcome to <strong>Local Event Planner</strong> – your one-stop destination for 
                organizing unforgettable events! Whether it's a wedding, corporate gathering, or entertainment show, 
                we connect you with **top-rated vendors** to make event planning effortless.
            </p>
            <h2>Our Mission</h2>
            <p>
                Our goal is to simplify the event planning process and provide a seamless experience, 
                ensuring **trust, quality, and convenience** for all users.
            </p>
            <h2>Why Choose Us?</h2>
            <ul>
                <li>✔ Trusted network of professional vendors</li>
                <li>✔ Easy booking and seamless planning</li>
                <li>✔ Personalized recommendations tailored to your needs</li>
            </ul>
        </div>
    );
}

export default About;