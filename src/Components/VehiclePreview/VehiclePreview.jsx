import React from 'react';
import { Link } from 'react-router-dom';
import VehicleCard from '../VehicleCard/VehicleCard';
import './VehiclePreview.css';

const VehiclePreview = ({ vehicles = [] }) => {  // Default to an empty array if vehicles is undefined
  const previewVehicles = vehicles.slice(0, 8);

  return (
    <div className="vehicle-preview">
      <div className="preview-header">
        <h2>Featured Vehicles</h2>
        <Link to="/buy-car" className="view-all">View All  →</Link>
      </div>
      
      <div className="vehicles-grid">
        {previewVehicles.map((vehicle, index) => (
          <VehicleCard key={`${vehicle.id}-${index}`} vehicle={vehicle} isPreview={true} />
        ))}
      </div>
    </div>
  );
};
export default VehiclePreview;