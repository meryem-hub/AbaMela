import React, { useState } from 'react';
import { housesForRent } from '../../../Data/houses';
import HouseCard from '../../../Housing/HouseCard/HouseCard';
import './HouseRent.css';

const HouseRent = () => {
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState([500, 5000]);
  const [bedrooms, setBedrooms] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [filteredHouses, setFilteredHouses] = useState(housesForRent); // state to hold the filtered houses

  const handleSearch = (e) => {
    e.preventDefault();

    // Filter the houses based on the search parameters
    const filteredHouses = housesForRent.filter((house) => {
      const matchesLocation = location ? house.location.toLowerCase().includes(location.toLowerCase()) : true;
      const housePrice = parseInt(house.price.replace(/\D/g, '')); // Remove non-numeric characters from price string
      const matchesPrice = housePrice >= priceRange[0] && housePrice <= priceRange[1];
      const matchesBedrooms = bedrooms ? house.bedrooms >= parseInt(bedrooms) : true;
      const matchesPropertyType = propertyType ? house.type.toLowerCase() === propertyType.toLowerCase() : true;

      return matchesLocation && matchesPrice && matchesBedrooms && matchesPropertyType;
    });

    setFilteredHouses(filteredHouses); // Update the state with the filtered houses
  };

  return (
    <div className="house-rent-container">
      <h2>Find Your Perfect Rental</h2>
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
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="condo">Condo</option>
              <option value="townhouse">Townhouse</option>
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
            <label>Price Range: {priceRange[0]} - {priceRange[1]} ETB</label>
            <div className="range-slider">
              <input 
                type="range" 
                min="500" 
                max="5000" 
                step="100" 
                value={priceRange[0]} 
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])} 
              />
              <input 
                type="range" 
                min="500" 
                max="5000" 
                step="100" 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])} 
              />
            </div>
          </div>
          <button type="submit" className="search-button">Search Rentals</button>
        </form>
      </div>

      <div className="house-list">
        <h3>Available Rentals</h3>
        <div className="houses-grid">
          {filteredHouses.length > 0 ? (
            filteredHouses.map((house) => (
              <HouseCard key={house.id} house={house} isRental={true} />
            ))
          ) : (
            <p>No rentals found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HouseRent;
