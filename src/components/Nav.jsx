import { NavLink } from "react-router-dom"

const Nav = ({ isOpen, handleNavClick, handleScrollLink, toggleMenu }) => {
  return (
     <nav className="navbar">
        <div className="logo">MyLogo</div>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" end onClick={handleNavClick}>
                Home
              </NavLink>
            </li>

            <li>
              <a onClick={() => handleScrollLink("showreel")}>Showreel</a>
            </li>

            <li>
              <a onClick={() => handleScrollLink("about")}>About</a>
            </li>

            <li>
              <NavLink to="/blog" onClick={handleNavClick}>
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" onClick={handleNavClick}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
  )
}

export default Nav