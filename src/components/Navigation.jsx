import React, { useState } from 'react'
import './style.css';
const Navigation = () => {
  const [activeLink,setActiveLink]=useState('home')
  return (
    <>
  <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
  <a className="navbar-brand mx-5" style={{color:'#149ddd'}} href="#">Anant Prakash</a>
  <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
    </>
  )
}

export default Navigation
