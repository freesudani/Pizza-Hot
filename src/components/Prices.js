import React from "react";
import Pizza1 from "../images/pizza1.png";
import Pizza2 from "../images/pizza2.png";
import Pizza3 from "../images/pizza3.png";
import Pizza4 from "../images/pizza4.png";
import Pizza5 from "../images/pizza5.png";
import Pizza6 from "../images/pizza6.png";

function Prices() {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pizza1} alt="Pizza1" />
              </div>
              <div>
                <h1 className="price__heading">Pizza Margeritta</h1>
                <p className="price__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores dolorum commodi totam suscipit repellat, culpa at,
                  harum laboriosam ab non, soluta tempore explicabo.
                </p>
                <p className="price_rs">$14.09</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pizza2} alt="Pizza2" />
              </div>
              <div>
                <h1 className="price__heading">Beer Pizza Crust</h1>
                <p className="price__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores dolorum commodi totam suscipit repellat, culpa at,
                  harum laboriosam ab non, soluta tempore explicabo.
                </p>
                <p className="price_rs">$16.00</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pizza3} alt="Pizza3" />
              </div>
              <div>
                <h1 className="price__heading">Pizza Biscuit Bake</h1>
                <p className="price__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores dolorum commodi totam suscipit repellat, culpa at,
                  harum laboriosam ab non, soluta tempore explicabo.
                </p>
                <p className="price_rs">$16.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pizza4} alt="Pizza4" />
              </div>
              <div>
                <h1 className="price__heading">Pizza Margeritta</h1>
                <p className="price__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores dolorum commodi totam suscipit repellat, culpa at,
                  harum laboriosam ab non, soluta tempore explicabo.
                </p>
                <p className="price_rs">$14.09</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pizza5} alt="Pizza5" />
              </div>
              <div>
                <h1 className="price__heading">Pizza Margeritta</h1>
                <p className="price__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores dolorum commodi totam suscipit repellat, culpa at,
                  harum laboriosam ab non, soluta tempore explicabo.
                </p>
                <p className="price_rs">$14.09</p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src={Pizza6} alt="Pizza6" />
              </div>
              <div>
                <h1 className="price__heading">Pizza Margeritta</h1>
                <p className="price__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores dolorum commodi totam suscipit repellat, culpa at,
                  harum laboriosam ab non, soluta tempore explicabo.
                </p>
                <p className="price_rs">$14.09</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
