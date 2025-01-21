import React from "react";
import "./footer.css";
import GitHubIcon from "./data/1.svg";
import LinkedInIcon from "./data/4.svg";
import TwitterIcon from "./data/3.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: poornabhagy@gmail.com</p>
          <p>Phone: +94714705382</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://github.com/poornabhagya" target="_blank" rel="noopener noreferrer">
              <img src={GitHubIcon} alt="GitHub" className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/bhagya-ekanayake-329754215/" target="_blank" rel="noopener noreferrer">
              <img src={LinkedInIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <a href="https://x.com/poorna_bhagya" target="_blank" rel="noopener noreferrer">
              <img src={TwitterIcon} alt="Twitter" className="social-icon" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-section">
          <p>© {new Date().getFullYear()} Bhagya Ekanayake. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
