import React, { useState } from "react";
import Button from "@mui/material/Button";

const Navbar = () => {

    const [hover, setHover] = useState(false)

  const customGetStartedButton = {
    height: "2.8vw",
    border: hover ? "2px solid rgb(108, 92, 231)" : "2px solid rgb(255, 255, 255)",
    backgroundColor: hover ? "transparent" : "rgb(108, 92, 231)",
    borderRadius: "27px",
    color: hover ? "rgb(108, 92, 231)" : "rgb(255, 255, 255)",
    fontWeight: "bold",
    padding: "10px 28px",
    cursor: "pointer",
    transition: "all 300ms ease 0s",
    transform: "scaleZ(1.1)"
  };
  return (
    <div id="navBarDiv">
      <div className="navbar navbar--left">
        <img
          className="logoImg"
          src="https://www.expertia.ai/expertiaLogotext.png"
          alt="logo img"
        />
      </div>
      <div className="navbar navbar--right">
        <h3 className="item">Request a demo</h3>
        <h3 className="item">Jobs</h3>
        <h3 className="item">Login</h3>
        <Button variant="contained" style={customGetStartedButton} onMouseOver={()=> setHover(true)} onMouseOut={()=> setHover(false)}>
          Contained
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
