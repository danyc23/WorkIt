import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <p>Logo</p>
      <Link to="/services">
        <p>Services</p>
      </Link>
      <Link to="/about">
        <p>About us</p>
      </Link>
      <Link to="/contact">
        <p>Contact Us</p>
      </Link>
    </div>
  );
}
