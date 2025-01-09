import { useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Rise of Coding</h1>
        <p>Cryptocurrencies</p>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="">Cryptocurrencies</a>
        </li>
        <li>
          <a href="">Learn</a>
        </li>
        <li>
          <a href="">Individuals</a>
        </li>
        <li>
          <a href="">Businesses</a>
        </li>
        <li>
          <a href="">Developers</a>
        </li>
        <li>
          <a href="">Company</a>
        </li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? (
          <FaTimes size={30} color="white" />
        ) : (
          <FaBars size={30} color="white" />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
