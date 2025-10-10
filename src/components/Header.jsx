import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
        <nav className="navbar">
        
        <div className="logo">MyLogo</div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" end onClick={() => setIsOpen(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/showreel" onClick={() => setIsOpen(false)}>Showreel</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
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
