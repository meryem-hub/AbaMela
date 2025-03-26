import React from 'react';
import './VehicleCard.css';

const VehicleCard = ({ vehicle, isPreview = false }) => {
  return (
    <div className="vehicle-card">
      <div className="vehicle-image">
        <img src={vehicle.image} alt={`${vehicle.make} ${vehicle.model}`} />
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
          {!isPreview && <button className="contact-seller">Contact Seller</button>}
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;