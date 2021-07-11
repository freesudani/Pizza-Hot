import React from "react";
import ImageLogo from "../images/369e6801bdef4e2991ba262e48243d21.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={ImageLogo} alt="logo" className="logo2" />
      </div>
      <div className="copyright">
        <p>All Rights reserved to Pizaa-Hot 2021©</p>
      </div>
      <IconContext.Provider value={{ className: "react-icons" }}>
        <FaPhoneAlt />
      </IconContext.Provider>
      <div className="callus">
        <p> call us in the case suggestion or a complain</p>
        <p>+(012)8051522</p>
        <p>+(011)6255171</p>
        <p>+(010)8051522</p>
      </div>
    </div>
  );
}

export default Footer;
