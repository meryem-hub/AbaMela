import React, { useState } from 'react';
import './VehicleSell.css';
import {vehiclesForSale} from '../../Data/vechicles'
import { Link } from 'react-router-dom';
import VehicleCard from '../../VehicleCard/VehicleCard';


const VehicleSell = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log({ make, model, year, priceRange, location });
  };



  return (
    <div className="vehicle-sell-container">
      <h2>Buy a Vehicle</h2>
      <div className="search-form">
        <form onSubmit={handleSearch}>
          <div className="form-group">
            <label>Make</label>
            <input 
              type="text" 
              value={make} 
              onChange={(e) => setMake(e.target.value)} 
              placeholder="Any make" 
            />
          </div>
          <div className="form-group">
            <label>Model</label>
            <input 
              type="text" 
              value={model} 
              onChange={(e) => setModel(e.target.value)} 
              placeholder="Any model" 
            />
          </div>
          <div className="form-group">
            <label>Year</label>
            <select value={year} onChange={(e) => setYear(e.target.value)}>
              <option value="">Any year</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </select>
          </div>
          <div className="form-group range-group">
            <label>Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
            <div className="range-slider">
              <input 
                type="range" 
                min="0" 
                max="100000" 
                step="1000" 
                value={priceRange[0]} 
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])} 
              />
              <input 
                type="range" 
                min="0" 
                max="100000" 
                step="1000" 
                value={priceRange[1]} 
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])} 
              />
            </div>
          </div>
          <div className="form-group">
            {/* <label>Location</label>
            <input 
              type="text" 
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
              placeholder="Any location" 
            /> */}
          </div>
          <button type="submit" className="search-button">Search Vehicles</button>
        </form>
      </div>

      <div className="vehicle-list">
        <h3>Vehicles For Sale</h3>
        <div className="vehicles-grid">
          {vehiclesForSale.map(vehicle => (
            <div key={vehicle.id} className="vehicle-card">
              <div className="vehicle-image">
                <img src={`${vehicle.image}`} alt={`${vehicle.make} ${vehicle.model}`} />
                <span className="price-badge">{vehicle.price}</span>
              </div>
              <div className="vehicle-details">
                <h4>{vehicle.year} {vehicle.make} {vehicle.model}</h4>
                <div className="specs">
                  <div className="spec-item">
                    <span className="spec-label">Mileage:</span>
                    <span>{vehicle.mileage} miles</span>
                  </div>
                </div>
                <div className="action-buttons">
                  <button className="view-details">View Details</button>
                  <button className="contact-seller">Contact Seller</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleSell;