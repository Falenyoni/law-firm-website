import React from 'react'
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">ZMN Attorneys Inc</div>
      <ul className="navbar-links">
      <li className="navbar-link"><a href="#home">Home</a></li>
        <li className="navbar-link"><a href="#about">About</a></li>
        <li className="navbar-link"><a href="#services">Services</a></li>
        {/* <li className="navbar-link"><a href="#testimonials">Testimonials</a></li> */}
        <li className="navbar-link"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar