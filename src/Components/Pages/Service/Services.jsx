import React from 'react';
import './Services.css';

const Services = () => {
  const realEstateServices = [
    {
      title: "Home Rentals",
      icon: "🏠",
      description: "Find your perfect rental home with our extensive property network",
      features: [
        "Verified property listings",
        "Virtual tours available",
        "Flexible lease terms",
        "Tenant screening services"
      ]
    },
    {
      title: "Home Sales",
      icon: "💰",
      description: "Comprehensive support for buying or selling residential properties",
      features: [
        "Free property valuation",
        "Professional photography",
        "Negotiation expertise",
        "Closing assistance"
      ]
    },
    {
      title: "Luxury Properties",
      icon: "🏰",
      description: "Exclusive access to high-end residential properties",
      features: [
        "Discreet service",
        "Global property network",
        "Concierge services",
        "Investment analysis"
      ]
    }
  ];

  const vehicleServices = [
    {
      title: "Car Rentals",
      icon: "🚗",
      description: "Flexible vehicle rental solutions for all needs",
      features: [
        "Daily/weekly/monthly rentals",
        "All vehicle categories",
        "24/7 roadside assistance",
        "Insurance options"
      ]
    },
    {
      title: "Car Sales",
      icon: "🛒",
      description: "New and pre-owned vehicles with warranty options",
      features: [
        "Certified pre-owned selection",
        "Financing assistance",
        "Vehicle history reports",
        "Test drive arrangements"
      ]
    },
    {
      title: "Fleet Services",
      icon: "🚙",
      description: "Custom solutions for business vehicle needs",
      features: [
        "Corporate discounts",
        "Maintenance packages",
        "Lease management",
        "Replacement vehicles"
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Abamela found me the perfect apartment in just 3 days when I relocated for work. Their service was exceptional!",
      author: "Sarah K.",
      type: "Rental Client"
    },
    {
      quote: "Sold my luxury car through Abamela for 15% above market price. Their network of buyers is impressive.",
      author: "Michael T.",
      type: "Vehicle Seller"
    },
    {
      quote: "Our company has used their fleet services for 5 years. Reliable vehicles and outstanding support.",
      author: "Global Solutions Inc.",
      type: "Corporate Client"
    }
  ];

  return (
    <div className="services-container">
      {/* Hero Section */}
      <div className="services-hero">
        <div className="hero-content">
          <h1>Your Trusted <span className="highlight">Home & Vehicle</span> Broker</h1>
          <p className="hero-subtitle">Simplifying property and automotive transactions since 2015</p>
          <div className="hero-buttons">
            <button className="primary-cta">Browse Listings</button>
            <button className="secondary-cta">Contact Agent</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">5,000+</div>
            <div className="stat-label">Properties Managed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10,000+</div>
            <div className="stat-label">Vehicles Transacted</div>
          </div>
        </div>
      </div>

      {/* Real Estate Services */}
      <section className="services-section real-estate">
        <div className="section-header">
          <h2>Real Estate Services</h2>
          <p className="section-subtitle">Comprehensive solutions for all your property needs</p>
        </div>
        
        <div className="services-grid">
          {realEstateServices.map((service, index) => (
            <div className="service-card" key={`re-${index}`}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={`re-feature-${i}`}>{feature}</li>
                ))}
              </ul>
              <button className="service-cta">View Properties</button>
            </div>
          ))}
        </div>
      </section>

      {/* Vehicle Services */}
      <section className="services-section vehicles">
        <div className="section-header">
          <h2>Vehicle Services</h2>
          <p className="section-subtitle">Mobility solutions tailored to your requirements</p>
        </div>
        
        <div className="services-grid">
          {vehicleServices.map((service, index) => (
            <div className="service-card" key={`vh-${index}`}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={`vh-feature-${i}`}>{feature}</li>
                ))}
              </ul>
              <button className="service-cta">Browse Inventory</button>
            </div>
          ))}
        </div>
      </section>


      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>Client Experiences</h2>
          <p className="section-subtitle">What our clients say about our services</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={`test-${index}`}>
              <div className="testimonial-content">
                "{testimonial.quote}"
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <div className="author-name">{testimonial.author}</div>
                  <div className="author-type">{testimonial.type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>Ready to Find Your Perfect Home or Vehicle?</h2>
        <p>Our expert brokers are standing by to assist you</p>
        <div className="cta-buttons">
          <button className="primary-cta">Get Started Now</button>
          <button className="secondary-cta">Call: (09) 0000-0000</button>
        </div>
      </section>
    </div>
  );
};

export default Services;