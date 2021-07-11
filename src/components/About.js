import React from "react";
import AboutImg from "../images/klara-kulikova-jvWZYnxBDlQ-unsplash.jpg";

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About us</h3>
            <h1>WELCOME TO PIZZA-HOT</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              illum eveniet dolor adipisci et error excepturi delectus quam
              quidem minima ipsum est quisquam accusamus eius tenetur.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src={AboutImg} alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
