import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Header.scss";
import Nav from "./Nav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingScroll, setPendingScroll] = useState({
    section: null,
    offset: 0,
  });
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = () => {
    setIsOpen(false);
    smoothScrollTo(0);
  };

  const sectionOffsets = {
    showreel: -60,
    about: -80,
  };

  const smoothScrollTo = (targetY, duration = 1800) => {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    let startTime = null;

    const easeInOutQuart = (t) =>
      t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const eased = easeInOutQuart(progress);
      window.scrollTo(0, startY + distance * eased);
      if (timeElapsed < duration) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  const handleScrollLink = (section) => {
    setIsOpen(false);
    const offset = sectionOffsets[section] || 0;

    if (location.pathname === "/") {
      const element = document.getElementById(section);
      if (element) {
        const y =
          element.getBoundingClientRect().top + window.pageYOffset + offset;
        smoothScrollTo(y);
      }
    } else {
      setPendingScroll({ section, offset });
      navigate("/");
    }
  };

  useEffect(() => {
    if (pendingScroll.section && location.pathname === "/") {
      const timer = setTimeout(() => {
        const element = document.getElementById(pendingScroll.section);
        if (element) {
          const y =
            element.getBoundingClientRect().top +
            window.pageYOffset +
            pendingScroll.offset;
          smoothScrollTo(y);
        }
        setPendingScroll({ section: null, offset: 0 });
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [pendingScroll, location.pathname]);

  return (
    <header>
      <Nav
        isOpen={isOpen}
        handleNavClick={handleNavClick}
        handleScrollLink={handleScrollLink}
        toggleMenu={toggleMenu}
      />
    </header>
  );
};

export default Header;
