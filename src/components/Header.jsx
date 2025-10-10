import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header>
        <nav className="navbar">
        
        <div className="logo">MyLogo</div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" end onClick={() => handleNavClick()}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/showreel" onClick={() => handleNavClick()}>Showreel</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => handleNavClick()}>About</NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={() => handleNavClick()}>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => handleNavClick()}>Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
