import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="banner">
      <Navbar />
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Pizza Delivery</h3>
            <h1>PIZZA HOT</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore quia molestias tempora nam id, dolor, modi omnis alias
              laboriosam nisi iste esse consectetur laborum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
