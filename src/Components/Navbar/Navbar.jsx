import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onto = () => {
    window.location.href = "/";
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={onto}>
        Law Firm
      </div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="burger" onClick={toggleMenu}>
        <div className={isOpen ? "line1 open" : "line1"}></div>
        <div className={isOpen ? "line2 open" : "line2"}></div>
        <div className={isOpen ? "line3 open" : "line3"}></div>
      </div>
    </nav>
  );
};

export default Navbar;
