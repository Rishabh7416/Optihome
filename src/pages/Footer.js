import React from 'react';
import '../styles/Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <p>Email: <a href="mailto:optihome@gmail.com">optihome@gmail.com</a></p>
          <p>Contact: <a href="tel:+9310036701">9310036701</a></p>
        </div>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 OptiHome. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
