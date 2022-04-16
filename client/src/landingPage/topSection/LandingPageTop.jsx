import React, { useLayoutEffect, useRef, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import "./landingPageTop.css";
import Navbar from './Navbar';
import TopRightPage from './TopRightPage';
import TopLeftPage from './TopLeftPage';


const LandingPageTop = () => {
 

    return (
        <div id="LandingPageTopSection">
            <Navbar />
            <div id="LandingPageTopSectionLeft">
             <TopLeftPage />
            </div>
            <TopRightPage />
        </div>
    );
};

export default LandingPageTop;