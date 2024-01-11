import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import logo from "../../img/logo.png";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
      <img src={logo} alt="" />
  <div className="n-name">CSU - University Student Government</div>
  <Toggle />
</div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Handbook
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
              Committees
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Events
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true}>
                Officers
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
