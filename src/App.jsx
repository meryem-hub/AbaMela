import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './app.css'
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home'; 
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';
import VehicleSell from './Components/Vechicles/VechiclesSell/VehicleSell';
import VehicleRent from './Components/Vechicles/VechiclesRent/VehicleRent';
import HouseRent from './Components/Pages/House/HouseRent/HouseRent';
import HouseSale from './Components/Pages/House/HouseSale/HouseSale';
import About from './Components/Pages/About/About';
import Service from './Components/Pages/Service/Services';
import Contact from './Components/Pages/Contact/Contact';
import Login from './Components/Pages/LOGIN/Login';
import Register from './Components/Pages/Register/Register';

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
        <Route path="/rent-house" element={<HouseRent />} />
        <Route path="/buy-house" element={<HouseSale/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Service/>} />
        <Route path="/contact" element={<Contact/>} />

        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />

      </Routes>

      <Footer />
    </Router>
  );
}


export default App;
