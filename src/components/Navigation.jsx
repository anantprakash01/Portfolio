import React, { useState, useEffect } from 'react';
import './style.css';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop-70;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false); // Close the mobile menu when a link is clicked
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand mx-5" style={{ color: '#149ddd' }} href="#home">Anant Prakash</a>
      <button className="navbar-toggler" type="button" onClick={toggleMobileMenu} aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0" onClick={handleLinkClick}>
          <li className={`nav-item active-nav ${activeLink === 'home' ? 'active' : ''}`}>
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className={`nav-item ${activeLink === 'about' ? 'active' : ''}`}>
            <a className="nav-link" href="#about">About</a>
          </li>
          <li className={`nav-item ${activeLink === 'skills' ? 'active' : ''}`}>
            <a className="nav-link" href="#skills">Skills</a>
          </li>
          <li className={`nav-item ${activeLink === 'portfolio' ? 'active' : ''}`}>
            <a className="nav-link" href="#portfolio">Portfolio</a>
          </li>
          <li className={`nav-item ${activeLink === 'contact' ? 'active' : ''}`}>
            <a className="nav-link" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
