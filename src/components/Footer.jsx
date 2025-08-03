import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <p>
          © {new Date().getFullYear()} Thank you for visiting my portfolio!
        </p>
        <p>
          Built with using React.js | Designed & Developed by Diya Rathore
        </p>
      </div>
    </footer>
  );
}

export default Footer;
