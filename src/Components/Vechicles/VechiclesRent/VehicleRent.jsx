import React, { useState } from 'react';
import './VehicleRent.css';
import Ford from '../../../assets/Ford.png'
import Toyota from '../../../assets/Toyota.png'
import Honda from '../../../assets/Honda.png'
import BMW from '../../../assets/BMW.png'
const VehicleRent = () => {
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [vehicleType, setVehicleType] = useState('car');
  const [location, setLocation] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ pickupDate, returnDate, vehicleType, location });
  };

  const vehicles = [
    { id: 1, name: 'Toyota Corolla', type: 'car', price: '$50/day', seats: 5, image: Toyota },
    { id: 2, name: 'Honda CR-V', type: 'suv', price: '$70/day', seats: 7, image:Honda },
    { id: 3, name: 'Ford Transit', type: 'van', price: '$90/day', seats: 12, image: Ford },
    { id: 4, name: 'BMW 3 Series', type: 'luxury', price: '$120/day', seats: 5, image: BMW },
    { id: 5, name: 'BMW 3 Series', type: 'luxury', price: '$120/day', seats: 5, image: BMW },
    { id: 6, name: 'BMW 3 Series', type: 'luxury', price: '$120/day', seats: 5, image: BMW },
    { id: 7, name: 'BMW 3 Series', type: 'luxury', price: '$120/day', seats: 5, image: BMW },
    { id: 8, name: 'Toyota Corolla', type: 'car', price: '$50/day', seats: 5, image: Toyota },



    
  ];

  return (
    <div className="vehicle-rent-container">
      <h2>Rent a Vehicle</h2>
      <div className="search-form">
        <form onSubmit={handleSearch}>
          <div className="form-group">
            <label>Pickup Date</label>
            <input 
              type="date" 
              value={pickupDate} 
              onChange={(e) => setPickupDate(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Return Date</label>
            <input 
              type="date" 
              value={returnDate} 
              onChange={(e) => setReturnDate(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Vehicle Type</label>
            <select 
              value={vehicleType} 
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="car">Car</option>
              <option value="suv">SUV</option>
              <option value="van">Van</option>
              <option value="luxury">Luxury</option>
            </select>
          </div>
          <div className="form-group">
            <label>Location</label>
            <input 
              type="text" 
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
              placeholder="Enter pickup location" 
              required 
            />
          </div>
          <button type="submit" className="search-button">Search Vehicles</button>
        </form>
      </div>

      <div className="vehicle-list">
        <h3>Available Vehicles</h3>
        <div className="vehicles-grid">
          {vehicles.map(vehicle => (
            <div key={vehicle.id} className="vehicle-card">
              <div className="vehicle-image">
                <img src={`${vehicle.image}`} alt={vehicle.name} />
              </div>
              <div className="vehicle-details">
                <h4>{vehicle.name}</h4>
                <p>Type: {vehicle.type.toUpperCase()}</p>
                <p>Seats: {vehicle.seats}</p>
                <p className="price">{vehicle.price}</p>
                <button className="rent-now">Rent Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VehicleRent;