import React from 'react';
import Header from '../Header/Header';
import VehiclePreview from '../VehiclePreview/VehiclePreview';
import { vehiclesForSale } from '../Data/vechicles.js';
import { housesForRent } from '../Data/houses.js';
import { housesForSale } from '../Data/houses.js';
import HousePreview from '../Housing/HousePreview/HousePreview.jsx'; // Corrected path here

const Home = () => {
  return (
    <div>
      <Header />
      <VehiclePreview vehicles={vehiclesForSale} />
      <HousePreview houses={housesForRent} isRental={true} />
      <HousePreview houses={housesForSale} isRental={false} />
    </div>
  );
};

export default Home;
