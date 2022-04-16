import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import "./whatsmore.css";

const WhatsMoreFeatures = () => {

    const customMuIcon = {
        fontSize: "2.4vw",
    }

    return (<>
        <div id="WhatsMoreFeatures"></div>
        <div id="whatsMoreFeaturesCardContainer">
            <div className="whatsMoreFeaturesCard whatsMoreFeaturesCard--1">
               <LockOutlinedIcon style={customMuIcon} />
               <p>Security</p>
               <p>Your data is always yours and you have full control of it</p>
            </div>
            <div className="whatsMoreFeaturesCard whatsMoreFeaturesCard--2">
            <PrivacyTipOutlinedIcon style={customMuIcon} />
            <p>Privacy</p>
            <p>We value your privacy very highly and it is built into Expertia from day 1.</p>
            </div>
            <div className="whatsMoreFeaturesCard whatsMoreFeaturesCard--3">
            <AccessTimeOutlinedIcon style={customMuIcon} />
            <p>Time</p>
            <p>Expertia has been able to reduce the hiring time from weeks to under a few days .</p>
            </div>
            <div className="whatsMoreFeaturesCard whatsMoreFeaturesCard--4">
            <AttachMoneyOutlinedIcon style={customMuIcon} />
            <p>Cost</p>
            <p>saving over 85% of the cost and in 50% of the time taken by traditional methods.</p>
            </div>
        </div>
        </>
    );
}; 

export default WhatsMoreFeatures;