import React from 'react';
import './SearchBar.css';
import { Link } from 'react-router-dom';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <div className="filter-buttons">
                <button className="brown-button">ALL</button>
                <button className="brown-button">BIRDS</button>
                <button className="brown-button">OTHER</button>
            </div>
            <input type="text" placeholder="   Search..." className='srch'/>
            <div className='upload-location-container'>
                <Link to="/upload-location" className='uploadLocation'>Upload Location</Link>
            </div>
        </div>
    );
};

export default SearchBar;
