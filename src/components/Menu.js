import React from "react";
import MenueImg from "../images/fathul-abrar-Gkl43lgpwrU-unsplash.jpg";

function Menu() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src={MenueImg} alt="Pizza" />
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>The Pizza Menu</h3>
            <h1>VEGGIES THIN CRUST</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              illum eveniet dolor adipisci et error excepturi delectus quam
              quidem minima ipsum est quisquam accusamus eius tenetur.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
