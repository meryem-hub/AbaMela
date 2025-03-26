import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiChevronDown, FiGlobe, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';
import Logo from '../../assets/logo.png';

const Header = () => {
  const [isMobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [isLangOpen, setIsLangOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {  label :'Home',path:'/',},
 
    { 
      label: 'Vehicles', 
      dropdown: [
        { title: 'Buy Vechicle', path: '/buy-car' },
        { title: 'Rent Vechile', path: '/rent-car' },
      ]
    },
    { 
    
      label: 'Housing', 
      dropdown: [
        { title: 'Buy House', path: '/buy-house' },
        { title: 'Rent House', path: '/rent-house' },
      ]
    },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo-container">
          <img src={Logo} className="logo" />
        </Link>

        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li 
                key={item.label}
                className="nav-item"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.path ? (
                  <Link to={item.path}>{item.label}</Link>
                ) : (
                  <div className="dropdown-trigger">
                    {item.label}
                    <FiChevronDown className="chevron" />
                  </div>
                )}

                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        className="dropdown-content"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        {item.dropdown.map((subItem) => (
                          <Link 
                            key={subItem.title} 
                            to={subItem.path}
                            className="dropdown-item"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-right">

<div className="language-switcher">
  <motion.div 
    className="globe-container"
    onClick={() => setIsLangOpen(!isLangOpen)}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    <FiGlobe className="globe-icon" />
    <div className="active-language">{language}</div>
  </motion.div>

  <AnimatePresence>
    {isLangOpen && (
      <motion.div
        className="language-dropdown"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
      >
        {['EN', 'OR', 'AM'].map((lang) => (
          <motion.div
            key={lang}
            className={`lang-option ${language === lang ? 'active' : ''}`}
            onClick={() => {
              setLanguage(lang);
              setIsLangOpen(false);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="lang-code">{lang}</span>
            <span className="lang-name">
              {lang === 'EN' && 'English'}
              {lang === 'OR' && 'Oromiffa'}
              {lang === 'AM' && 'አማርኛ'}
            </span>
            {language === lang && <div className="selected-indicator">✓</div>}
          </motion.div>
        ))}
      </motion.div>
    )}
  </AnimatePresence>
</div>

       
          <div className="header-auth">
            <Link to="/login" className="auth-btn login-btn">
              Sign In
            </Link>
            <Link to="/register" className="auth-btn register-btn">
            Register
            </Link>
          </div>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileOpen ? <FiX /> : <FiMenu />}
        </button>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.nav 
              className="mobile-nav"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
            >
              {navItems.map((item) => (
                <div key={item.label} className="mobile-nav-item">
                  {item.path ? (
                    <Link to={item.path} onClick={() => setMobileOpen(false)}>
                      {item.label}
                    </Link>
                  ) : (
                    <div className="mobile-dropdown">
                      <div 
                        className="dropdown-header"
                        onClick={() => setActiveDropdown(
                          activeDropdown === item.label ? null : item.label
                        )}
                      >
                        {item.label}
                        <FiChevronDown className={`chevron ${
                          activeDropdown === item.label ? 'open' : ''
                        }`} />
                      </div>
                      {activeDropdown === item.label && (
                        <div className="mobile-dropdown-content">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.title}
                              to={subItem.path}
                              className="dropdown-item"
                              onClick={() => setMobileOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;