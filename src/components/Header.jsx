import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../assets/HMR- Logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    {
      name: 'Transfer by Mode',
      // path: '/transferbymode',
      submenu: [
       
        { name: 'Air', path: '/transfer-by-mode/air' },
        { name: 'Road', path: '/transfer-by-mode/road' },
         { name: 'Train', path: '/transfer-by-mode/train' }
      ]
    },
    { name: 'Transfer by Location', path: '/transfer-by-location' },
    { name: 'Contact Us', path: '/contact' },
    
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo-link" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Humancare Logo" className="logo-image" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {menuItems.map((item) => (
              <div key={item.path} className="nav-item">
                <Link to={item.path} className="nav-link">
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="submenu">
                    {item.submenu.map((sub) => (
                      <Link key={sub.path} to={sub.path} className="submenu-link">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Call Now Button */}
          <div className="desktop-only">
            <a href="tel:+919833444040" className="cta-button">
              Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <nav className="mobile-nav">
              {menuItems.map((item) => (
                <div key={item.path} className="mobile-nav-item">
                  <Link
                    to={item.path}
                    className="mobile-nav-link"
                    onClick={() =>
                      item.submenu
                        ? setActiveSubmenu(
                            activeSubmenu === item.path ? null : item.path
                          )
                        : setIsMenuOpen(false)
                    }
                  >
                    {item.name}
                  </Link>
                  {item.submenu && activeSubmenu === item.path && (
                    <div className="mobile-submenu">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="mobile-submenu-link"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href="tel:+919833444040"
                className="mobile-cta-button"
                onClick={() => setIsMenuOpen(false)}
              >
                Call Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
