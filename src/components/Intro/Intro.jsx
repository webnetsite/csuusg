import React, { useContext } from "react";
import "./Intro.css";
import boy from "../../img/boy.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Caraga State University</span>
          <span>University Student Government</span>
          <span style={{ fontSize: '15px' }}>
          The highest student governing body of Caraga State University - Main Campus
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Contact Us</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        
        <img src={boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-76%" }}
          whileInView={{ left: "-10%" }}
          transition={transition}
          alt=""
        />


        <div className="blur" style={{ background: "#ffdfaa" }}></div>
        <div
          className="blur"
          style={{
            background: "#ffdfaa",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
