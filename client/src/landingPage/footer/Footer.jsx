import React, { useState } from 'react';
import FooterBody from './FooterBody';
import FooterTop from './FooterTop';
import Button from "@mui/material/Button";
import "./footer.css";

const Footer = () => {
    const [hover, setHover] = useState(false)

    const customAccessButton = {
        height: "2.8vw",
    border: hover ? "2px solid rgb(218, 218, 218)" : "2px solid rgb(228, 228, 228)",
    backgroundColor: hover ? "rgb(218, 218, 218)" : " rgb(235, 235, 235)",
    borderRadius: "27px",
    color: hover ? "rgb(167, 167, 167)" : "grey",
    fontWeight: "bold",
    padding: "10px 28px",
    cursor: "pointer",
    transition: "all 300ms ease 0s",
    position:"absolute",
    marginLeft:"88vw"
    }

    return (
        <div id="footer">
            <FooterTop />
            <FooterBody />

            <div id="fixedFooter"> 
                <p className="commonTextStyle" >This Website uses cookies. See our privacy policy  for more.</p>
                <Button style={customAccessButton}
                onMouseOver={()=> setHover(true)} onMouseOut={()=> setHover(false)}
                >I Understand</Button>
            </div>
        </div>
    );
};

export default Footer;