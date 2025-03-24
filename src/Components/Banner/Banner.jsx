import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-background">
        <div className="banner-overlay" />
      </div>
      
      <div className="banner-content">
        <div className="title-wrapper">
          <h1 className="main-title">
            <span className="gradient-text">ABA MELA</span>
            <span className="subtitle">Finding a home & car is easy with us!</span>
          </h1>
        </div>

        <div className="action-grid">
          <div className="action-line" />
          <div className="action-items">
            <span className="action-item">BUY</span>
            <span className="action-item">SELL</span>
            <span className="action-item">RENT</span>
          </div>
          <div className="action-line" />
        </div>
      </div>
    </div>
  );
};

export default Banner;