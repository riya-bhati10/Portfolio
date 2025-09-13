import React, { useMemo } from "react";
import "./footer.css";

function Footer() {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© {currentYear} Riyaa Bhati | All Rights Reserved</p>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/riya-bhati-4ba307289/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/riya-bhati10" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://instagram.com/your-instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://t.me/your-telegram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-telegram"></i>
          </a>
          <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
