// App.js or Main Component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home'; // Example page component
import Footer from './Components/Footer/Footer';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <Router>
      <Header />
      <Banner/>

      <Footer/>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
