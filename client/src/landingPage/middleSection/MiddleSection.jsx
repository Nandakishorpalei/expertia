import React from 'react';
import "./middleSection.css";
import ScrollingImages from './ScrollingImages';

const MiddleSection = () => {
    return (
        <div>
            <h1 style={{margin: "5vw 0 2vw"}}>Helping Businesses Grow</h1>
            <div className="flexBox">
            <div style={{height:"30vh", width: "11vw",zIndex:"10", backgroundColor: "white"}}></div>
            <ScrollingImages />
            <div style={{height:"30vh", width: "11vw",zIndex:"10", backgroundColor: "white"}}></div>
            </div>

        </div>
    );
};

export default MiddleSection;