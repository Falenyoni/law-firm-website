import React from 'react'
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2>Contacts</h2>
        <p>123 Main St, City</p>
        <p>Email: info@example.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
      <div className="footer-section">
        <h2>Services</h2>
        <ul>
          <li>Legal Consultation</li>
          <li>Court Representation</li>
          <li>Business Law</li>
          <li>Intellectual Property</li>
          <li>Criminal Defense</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer