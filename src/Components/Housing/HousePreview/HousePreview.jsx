import React from 'react';
import { Link } from 'react-router-dom'; // Add this import
import HouseCard from '../HouseCard/HouseCard'; // Assuming HouseCard is correctly imported
import './HousePreview.css'; // Adjust if necessary for your styling

const HousePreview = ({ houses, isRental = false }) => {
  const previewHouses = houses.slice(0, 4);

  return (
    <div className="house-preview">
      <div className="preview-header">
        <h2>{isRental ? 'Featured Rentals' : 'Featured Properties'}</h2>
        <Link to={isRental ? "/rent-house" : "/buy-house"} className="view-all">
          View All {isRental ? 'Rentals' : 'Properties'} →
        </Link>
      </div>

      <div className="houses-grid">
        {previewHouses.map((house) => (
          <HouseCard key={house.id} house={house} isRental={isRental} isPreview={true} />
        ))}
      </div>
    </div>
  );
};

export default HousePreview;
