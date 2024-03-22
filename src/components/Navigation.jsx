import React, { useState } from 'react'
import './style.css';
const Navigation = () => {
  const [activeLink,setActiveLink]=useState('home')
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
  <a className="navbar-brand mx-5" style={{color:'#149ddd'}} href="#">Anant Prakash</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav ">
    <ul className="navbar-nav">
      <li className={`nav-item active-nav ${activeLink === 'home'? 'active' : ''}`}>
        <a className="nav-link" href="#" onClick={() => setActiveLink('home')}>Home</a>
      </li>
      <li className={`nav-item ${activeLink === 'about' ? 'active' : ''}`}>
        <a className="nav-link" href="#about" onClick={() => setActiveLink('about')}>About</a>
      </li>
      <li className={`nav-item ${activeLink === 'skills' ? 'active' : ''}`}>
        <a className="nav-link" href="#skills" onClick={() => setActiveLink('skills')}>Skills</a>
      </li>
      <li className={`nav-item ${activeLink === 'portfolio' ? 'active' : ''}`}>
        <a className="nav-link" href="#portfolio" onClick={() => setActiveLink('portfolio')}>Portfolio</a>
      </li>
      <li className={`nav-item ${activeLink === 'contact' ? 'active' : ''}`}>
        <a className="nav-link " href="#contact" onClick={() => setActiveLink('contact')}>Contact</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navigation
