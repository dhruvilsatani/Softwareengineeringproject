const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log(" MongoDB Connected"))
.catch(err => console.error(" MongoDB Connection Failed:", err));

// Vendor Schema
const vendorSchema = new mongoose.Schema({
    name: String,
    category: String,
    rating: Number,
    location: String,
    ratePerEvent: String,
    contact: String,
    services: [String]
});

const Vendor = mongoose.model("Vendor", vendorSchema);

// Booking Schema
const bookingSchema = new mongoose.Schema({
    category: String,
    eventDate: String,
    budget: String,
    location: String,
    message: String
});

const Booking = mongoose.model("Booking", bookingSchema);

// Fetch Vendors (Searchable)
app.get("/vendors", async (req, res) => {
    try {
        const searchQuery = req.query.search?.toLowerCase();
        console.log("🔎 Search Query:", searchQuery);

        if (!searchQuery) return res.status(400).json({ message: " Please provide a valid search query." });

        const filteredVendors = await Vendor.find({ category: new RegExp(searchQuery, "i") });

        if (filteredVendors.length === 0) {
            console.log(" No vendors found for category:", searchQuery);
            return res.status(404).json({ message: "No vendors found for this category." });
        }

        res.json(filteredVendors);
    } catch (error) {
        console.error(" Error fetching vendors:", error);
        res.status(500).json({ message: " Server error. Please try again later." });
    }
});

// Submit Booking Request
app.post("/bookings", async (req, res) => {
    try {
        const { category, eventDate, budget, location, message } = req.body;

        if (!category || !eventDate || !budget || !location) {
            return res.status(400).json({ message: " Please provide all required details." });
        }

        const booking = new Booking({ category, eventDate, budget, location, message });
        await booking.save();

        console.log(" New Booking Request:", booking);
        res.json({ message: " Booking request submitted successfully!", booking });
    } catch (error) {
        console.error(" Error submitting booking request:", error);
        res.status(500).json({ message: " Server error. Please try again later." });
    }
});

// Fetch All Bookings
app.get("/bookings", async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (error) {
        console.error(" Error fetching bookings:", error);
        res.status(500).json({ message: " Server error. Please try again later." });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));