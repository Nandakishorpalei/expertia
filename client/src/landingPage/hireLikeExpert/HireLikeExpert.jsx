import React from 'react';
import Button from "@mui/material/Button";
import "./hireLikeExpert.css";


const HireLikeExpert = () => {

    const customGetStartedButton = {
         backgroundColor:"rgb(108, 92, 231)",
         padding: "0.5vw 2vw",
        }

    return (
        <div id="hireLikeExpert">
            <h1 style={{lineHeight: "16px"}}>Hire like an Expert</h1>
            <p className='commonTextStyle' style={{fontSize: "24px"}}>Get started for free and find out how you can resolve your hiring challenges at your fingertips.</p>
            <Button variant='contained' style={customGetStartedButton}>Get started</Button>
        </div>
    );
};

export default HireLikeExpert;