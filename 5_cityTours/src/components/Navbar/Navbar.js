import React, { Component } from "react";
import "./Navbar.scss";

export default class Navbar extends Component {
  state = {
    activeLink: "Tours",
  };
  handleLinkClick = (e, linkName) => {
    e.preventDefault();
    // Tıklanan öğeyi aktif yapıyoruz
    this.setState({ activeLink: linkName });
  };

  render() {
    console.log(this.state.activeLink);
    return (
      <nav className="navbar">
        <img src="logo.png"></img>
        <ul className="nav-links">
          <li>
            <a
              href="/"
              className={`nav-link ${
                this.state.activeLink === "Home" ? "active" : ""
              }`}
              onClick={(e) => this.handleLinkClick(e, "Home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`nav-link ${
                this.state.activeLink === "About" ? "active" : ""
              }`}
              onClick={(e) => this.handleLinkClick(e, "About")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/"
              className={`nav-link ${
                this.state.activeLink === "Tours" ? "active" : ""
              }`}
              onClick={(e) => this.handleLinkClick(e, "Tours")}
            >
              Tours
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
