import React from "react";
import '../style/navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <label>Coffee Corner </label>
      <div className="links">
        <Link to={'/'}>Home</Link>
        <Link to={'/about-us'}>About Us</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/gallery'}>Gallery</Link>
        <Link to={'/menu'}>Menu</Link>
      </div>
    </nav>
  );
}

export default Navbar;
