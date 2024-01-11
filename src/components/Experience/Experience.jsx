import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>21</div>
        <span  style={{color: darkMode?'white':''}}>USG</span>
        <span>Senators</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>13</div>
        <span  style={{color: darkMode?'white':''}}>Bills</span>
        <span>Implemented</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>56</div>
        <span  style={{color: darkMode?'white':''}}>Held </span>
        <span>Events</span>
      </div>
    </div>
  );
};

export default Experience;
