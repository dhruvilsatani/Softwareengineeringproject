import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import "./App.css";
import VendorList from "./components/VendorList";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const eventCategories = [
    { id: 1, name: " Weddings", description: "Expert planners, decorators, and caterers to make your special day unforgettable." },
    { id: 2, name: " Entertainment", description: "Live performances, DJs, and event decorations to bring your celebrations to life." },
    { id: 3, name: " Catering Services", description: "Top-rated caterers offering customized menus for weddings, parties, and corporate gatherings." }
];

function App() {
    const [vendors, setVendors] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!searchTerm.trim()) {
            setVendors([]); 
            setError(" Please enter a category to search.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(`http://localhost:5000/vendors?search=${searchTerm}`);
            setVendors(response.data);
        } catch (error) {
            console.error(" Error fetching vendors:", error);
            setError(" Failed to load vendors. Please try again.");
            setVendors([]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Router>
            <div className="app">
                {/* Sticky Navigation Bar */}
                <nav className="navbar">
                    <h1>Local Event Planner</h1>
                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </nav>

                {/* Routes for Different Pages */}
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>

                {/* Home Section */}
                <section id="home" className="home-section">
                    <h2 className="welcome-heading">Welcome to Local Event Planner</h2>
                    <div className="info-box">
                        <p>
                            Simplify your event planning experience! Explore our platform to connect with
                            top-rated vendors, get expert recommendations, and organize flawless events.
                            From weddings to corporate meetings, we've got you covered!
                        </p>
                    </div>

                    {/* Featured Event Categories */}
                    <section className="event-categories">
                        <h2>Popular Event Categories</h2>
                        <div className="categories-container">
                            {eventCategories.map(category => (
                                <div key={category.id} className="category-card">
                                    <h3>{category.name}</h3>
                                    <p>{category.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Search Bar */}
                    <section className="search-container">
                        <input
                            type="text"
                            placeholder="Search for vendors..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-bar"
                            aria-label="Vendor search bar"
                        />
                        <button onClick={handleSearch} className="search-button">🔍 Search</button>
                    </section>

                    {/* Search Results */}
                    <main className="search-results-container">
                        {loading && <p className="loading-message">⏳ Loading vendors...</p>}
                        {error && <p className="error-message">{error}</p>}
                        {vendors.length > 0 ? (
                            <VendorList vendors={vendors} />
                        ) : (
                            !loading && <p className="no-results">No matching vendors found.</p>
                        )}
                    </main>

                    {/* Testimonials Section */}
                    <Testimonials />
                </section>

                {/* Footer */}
                <footer className="app-footer">
                    <div className="footer-links">
                        <Link to="/about">About Us</Link>
                        <Link to="#">Privacy Policy</Link>
                        <Link to="#">Terms of Service</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                    <p>&copy; 2025 Local Event Planner. All Rights Reserved.</p>
                </footer>
            </div>
        </Router>
    );
}

export default App;