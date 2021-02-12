import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <p className="logo">WorkIt</p>
      </div>
      <section className="navbar-links">
        <Link to="/services">
          <p className="navbar-text">Services</p>
        </Link>
        <Link to="/about">
          <p className="navbar-text">About us</p>
        </Link>
        <Link to="/contact">
          <p className="navbar-text">Contact Us</p>
        </Link>
      </section>
    </nav>
  );
}
