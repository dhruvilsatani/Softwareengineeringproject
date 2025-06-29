import React, { useState } from "react";
import "./VendorList.css";
import BookingForm from "./BookingForm";

function VendorList({ vendors }) {
    const [selectedVendor, setSelectedVendor] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const handleBookingClick = (vendor) => {
        setSelectedVendor(vendor);
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 2000);
    };

    return (
        <div className="vendor-list">
   
            <div className="vendor-list-container">
                {vendors.map((vendor) => (
                    <div className="vendor-card" key={vendor.id}>
                        <h3>{vendor.name}</h3>
                        <p><strong>Category:</strong> {vendor.category}</p>
                        <p><strong>Location:</strong> {vendor.location}</p>
                        <p><strong>Rating:</strong> ⭐ {vendor.rating}</p>
                        <p><strong>Services:</strong> {vendor.services.join(", ")}</p>
                        <p><strong>Rate Per Event:</strong> {vendor.ratePerEvent}</p>
                        <p><strong>Contact:</strong> {vendor.contact}</p>
                        <button className="book-button" onClick={() => handleBookingClick(vendor)}>📅 Book Now</button>
                    </div>
                ))}
            </div>

            {selectedVendor && <BookingForm vendor={selectedVendor} />}

            {/* Popup Message */}
            {showPopup && (
                <div className="popup">
                    <p>✅ Your vendor has been booked successfully!</p>
                </div>
            )}
        </div>
    );
}

export default VendorList;