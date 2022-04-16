import React from 'react';
import Button from "@mui/material/Button";
import "./footer.css";

const FooterTop = () => {

    const customSubscribeButton = {
        backgroundColor:"rgb(108, 92, 231)",
        padding: "0.5vw 2vw",
       }

    return (
        <div id="footerTop">
            <div id="footerTopLeft">
                <h1 style={{lineHeight: "0"}}>Stay up to date.</h1>
                <p className='commonTextStyle'>Join our journey for regular updates on Expertia's products and services</p>
            </div>
            <div id="footerTopRight">
                <input type="email" className='inputEmail' placeholder='Email' />
                <Button variant='contained' style={customSubscribeButton}>Subscribe</Button>
            </div>
        </div>
    );
};

export default FooterTop;