import React from 'react';
import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FaTelegram, FaLinkedin } from 'react-icons/fa';

import './Footer.css'

const Footer = () => {
  const footerLinks = [
    {
      title: 'Real Estate',
      links: ['Buy Property', 'Rent Homes', 'Commercial Spaces', 'Vacation Rentals']
    },
    {
      title: 'Vehicles',
      links: ['Purchase Cars', 'Rent Vehicles', 'Sell Your Car']
    },
    {
      title: 'Company',
      links: ['About Us', 'Services', 'Testimonials', 'Careers']
    }
  ];

  const socialLinks = [
    { icon: <FiFacebook />, name: 'Facebook' },
    { icon: <FiTwitter />, name: 'Twitter' },
    { icon: <FiInstagram />, name: 'Instagram' },
    { icon: <FaTelegram />, name: 'Telegram' },
  { icon: <FaLinkedin />, name: 'LinkedIn' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <motion.div 
          className="footer-top"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-brand">
            <p className="footer-tagline">
            Finding a home & car is easy with us!            </p>
          </div>

          <div className="footer-links">
            {footerLinks.map((section) => (
              <div key={section.title} className="link-group">
                <h4 className="link-title">{section.title}</h4>
                <ul className="link-list">
                  {section.links.map((link) => (
                    <motion.li 
                      key={link}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <a href="/" className="footer-link">{link}</a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="footer-contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="contact-methods">
            <div className="contact-item">
              <FiMapPin className="contact-icon" />
              <span>Addis Abeba,Ethiopia</span>
            </div>
            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <a href="tel:+00000000">000-000-000</a>
            </div>
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <a href="mailto:abaMela@gmail.com">AbaMela@gmail.com</a>
            </div>
          </div>

          <div className="social-links">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href="/"
                className="social-icon"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} AbaMela - All rights reserved
          </p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;