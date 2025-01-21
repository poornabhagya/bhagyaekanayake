import React, { useState } from 'react';
import './header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <h1>Bhagya</h1>
      </div>
      <button className="menu-icon" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </button>
      <nav className={`header-nav ${isMenuOpen ? 'show-menu' : ''}`}>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/bhagya-ekanayake-329754215/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://x.com/poorna_bhagya" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://github.com/poornabhagya" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
