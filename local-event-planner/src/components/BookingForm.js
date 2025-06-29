import React, { useState } from "react";
import axios from "axios";
import "./BookingForm.css";

function BookingForm({ vendor }) {
    const [eventDate, setEventDate] = useState("");
    const [budget, setBudget] = useState("");
    const [location, setLocation] = useState("");
    const [message, setMessage] = useState("");
    const [confirmation, setConfirmation] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const bookingData = {
            vendorName: vendor.name,
            category: vendor.category,
            eventDate,
            budget,
            location,
            message,
        };

        try {
            const response = await axios.post("http://localhost:5000/bookings", bookingData);
            setConfirmation(response.data.message);
        } catch (error) {
            setConfirmation("Failed to submit request. Please try again.");
        }
    };

    return (
        <div className="booking-form">
            <h2>Book {vendor.name}</h2>
            <form onSubmit={handleSubmit}>
                <p>Category: {vendor.category}</p>
                <p>Rate: {vendor.ratePerEvent}</p>
                <p>Contact: {vendor.contact}</p>

                <label>Event Date:</label>
                <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />

                <label>Budget (Approximate):</label>
                <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Enter budget" required />

                <label>Event Location:</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="City, Venue, etc." required />

                <label>Additional Message:</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Any special requests?" />

                <button type="submit">Submit Booking</button>
            </form>

            {confirmation && <p className="confirmation-message">{confirmation}</p>}
        </div>
    );
}

export default BookingForm;