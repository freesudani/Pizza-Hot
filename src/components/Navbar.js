import React from "react";
import ImageLogo from "../images/369e6801bdef4e2991ba262e48243d21.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src={ImageLogo} alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
