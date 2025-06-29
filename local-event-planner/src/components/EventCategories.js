import React from "react";
import "./EventCategories.css";

const eventCategories = [
    { id: 1, name: "🎉 Weddings", description: "Expert planners, decorators, and caterers for unforgettable wedding experiences." },
    { id: 2, name: "🎭 Entertainment", description: "Live performers, DJs, music bands, and lighting effects to energize your event." },
    { id: 3, name: "🍽 Catering", description: "Top-tier catering teams delivering personalized menus for weddings, parties, and corporate gatherings." }
];

function EventCategories() {
    return (
        <div className="event-categories">
            <h2>Popular Event Categories</h2>
            <div className="categories-container">
                {eventCategories.map(category => (
                    <div key={category.id} className="category-card">
                        <h3>{category.name}</h3>
                        <p>{category.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EventCategories;