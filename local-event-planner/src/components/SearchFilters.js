import React from "react";

function SearchFilters({ category, setCategory, searchTerm, setSearchTerm }) {
    return (
        <div className="search-filters">
            <input
                type="text"
                placeholder="Search vendors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar"
            />

            <select onChange={(e) => setCategory(e.target.value)} className="filter-dropdown">
                <option value="all">All Categories</option>
                <option value="weddings">Weddings</option>
                <option value="corporate">Corporate Events</option>
                <option value="entertainment">Entertainment</option>
            </select>
        </div>
    );
}

export default SearchFilters;