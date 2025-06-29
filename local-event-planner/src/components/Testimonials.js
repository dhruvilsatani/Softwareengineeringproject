import React from "react";
import "./Testimonials.css";

const testimonials = [
    { id: 1, name: "Alice Johnson", review: "Amazing service! Found the perfect wedding planner easily.", rating: 5 },
    { id: 2, name: "Mark Thompson", review: "The entertainment lineup was fantastic. DJ was top-notch!", rating: 4 },
    { id: 3, name: "Sophia Adams", review: "The catering service was excellent! Highly recommend John's Catering.", rating: 5 }
];

function Testimonials() {
    return (
        <div className="testimonials">
            <h2>What Our Clients Say</h2>
            <div className="testimonials-container">
                {testimonials.map(({ id, name, review, rating }) => (
                    <div key={id} className="testimonial-card">
                        <p className="review-text">"{review}"</p>
                        <p className="review-author">- {name}</p>
                        <p className="review-rating">Rating: ⭐ {rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;