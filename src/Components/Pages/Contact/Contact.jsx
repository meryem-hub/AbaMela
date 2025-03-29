import React, { useState } from 'react';
import './Contact.css';

const Contact= () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Rent a Home',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('contact'); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', subject: 'Rent a Home', message: '' });
  };

  return (
    <div className="contact-container">
   

      <div className="tab-container">
        <div className="tab-buttons">
          <button 
            className={`tab-btn ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
          >
            Contact Us
          </button>
          <button 
            className={`tab-btn ${activeTab === 'locations' ? 'active' : ''}`}
            onClick={() => setActiveTab('locations')}
          >
            Our Offices
          </button>
        </div>

        {activeTab === 'contact' ? (
          <div className="contact-form-section">
            {isSubmitted ? (
              <div className="success-message">
                <h3>✅ Thank You!</h3>
                <p>We’ll contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">I'm interested in*</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="Rent a Home">Rent a Home</option>
                    <option value="Buy a Home">Buy a Home</option>
                    <option value="Rent a Car">Rent a Car</option>
                    <option value="Buy a Car">Buy a Car</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            )}
          </div>
        ) : (
          <div className="locations-section">
            <div className="location-card">
              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.923217379673!2d38.75730831478593!3d8.997505693549517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f3a6c6f8a9%3A0x8a5e4e1b3e5e5e5e!2sBole%20Road%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1620000000000!5m2!1sen!2set"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="location-info">
                <h3>Bole Office</h3>
                <p>📌 Bole Road, Addis Ababa, Ethiopia</p>
                <p>📞 +251 911 234 567</p>
                <p>✉️ bole@abamela.com</p>
                <p>🕒 Mon-Sat: 8AM - 6PM</p>
              </div>
            </div>

            <div className="location-card">
              <div className="location-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.923217379673!2d38.75730831478593!3d8.997505693549517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f3a6c6f8a9%3A0x8a5e4e1b3e5e5e5e!2sBole%20Road%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1620000000000!5m2!1sen!2set"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
              <div className="location-info">
                <h3>Kazanches Office</h3>
                <p>📌 Kazanches, Addis Ababa, Ethiopia</p>
                <p>📞 +251 911 987 654</p>
                <p>✉️ kazanches@abamela.com</p>
                <p>🕒 Mon-Sat: 8AM - 6PM</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="agents-section">
        <h2>Meet Our Top Agents in Addis Ababa</h2>
        <div className="agents-grid">
          <div className="agent-card">
            <div className="agent-photo" style={{ backgroundImage: "url('https://randomuser.me/api/portraits/women/44.jpg')" }}></div>
            <h3>Selamawit Kebede</h3>
            <p>🏠Homes Specialist</p>
            <button className="agent-contact-btn">Contact Selam</button>
          </div>
          <div className="agent-card">
            <div className="agent-photo" style={{ backgroundImage: "url('https://randomuser.me/api/portraits/men/32.jpg')" }}></div>
            <h3>Muhammed Habib</h3>
            <p>🚗Vehicles Specialist</p>
            <button className="agent-contact-btn">Contact Muhammed</button>
          </div>
          <div className="agent-card">
            <div className="agent-photo" style={{ backgroundImage: "url('https://randomuser.me/api/portraits/women/68.jpg')" }}></div>
            <h3>Meron Abebe</h3>
            <p>🏡Rental Properties</p>
            <button className="agent-contact-btn">Contact Meron</button>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Contact;