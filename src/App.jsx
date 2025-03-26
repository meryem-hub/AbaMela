import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home'; 
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import VehicleSell from './Components/Vechicles/VechiclesSell/VehicleSell';
import VehicleRent from './Components/Vechicles/VechiclesRent/VehicleRent';

function App() {
  return (
    <Router>
      <Header />
      
      <Routes>
        <Route path="/" element={<>
          <Banner />
          <Home />
        </>} />
        <Route path="/buy-car" element={<VehicleSell />} />
        <Route path="/rent-car" element={<VehicleRent />} />
      </Routes>

      <Footer />
    </Router>
  );
}


export default App;
