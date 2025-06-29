import React from "react";
import "./VendorProfile.css";

function VendorProfile({ vendor }) {
    return (
        <div className="vendor-profile">
            <img src={vendor.image} alt={vendor.name} className="vendor-image" />
            <h2>{vendor.name}</h2>
            <p><strong>Services:</strong> {vendor.services}</p>
            <p><strong>Rating:</strong> ⭐ {vendor.rating}</p>
        </div>
    );
}

export default VendorProfile;