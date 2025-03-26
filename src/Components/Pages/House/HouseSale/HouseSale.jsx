import React, { useState } from 'react';
import { housesForSale } from '../../../Data/houses';
import HouseCard from '../../../Housing/HouseCard/HouseCard';
import './HouseSale.css';

const HouseSale = () => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState([100000, 1000000]);
  const [bedrooms, setBedrooms] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Filter logic would go here
    console.log({ location, priceRange, bedrooms, propertyType });
  };

  return (
    <div className="house-sale-container">
      <h2>Find Your Dream Home</h2>
      <div className="search-form">
        <form onSubmit={handleSearch}>
          <div className="form-group">
            <label>Location</label>
            <input 
              type="text" 
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
              placeholder="City, State, or ZIP" 
            />
          </div>
          <div className="form-group">
            <label>Property Type</label>
            <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
              <option value="">Any Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="villa">Villa</option>
            </select>
          </div>
          <div className="form-group">
            <label>Bedrooms</label>
            <select value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>
          <div className="form-group range-group">
            <label>Price Range: ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}</label>
            <div className="range-slider">
              <input 
                type="range" 
                min="100000" 
                max="1000000" 
                step="10000" 
                value={priceRange[0]} 
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])} 
              />
              <input 
                type="range" 
                min="100000" 
                max="1000000" 
                step="10000" 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])} 
              />
            </div>
          </div>
          <button type="submit" className="search-button">Search Properties</button>
        </form>
      </div>

      <div className="house-list">
        <h3>Properties For Sale</h3>
        <div className="houses-grid">
          {housesForSale.map((house) => (
            <HouseCard key={house.id} house={house} isRental={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HouseSale;