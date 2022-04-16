import React from 'react';
import "./whatsmore.css";
import WhatsMoreFeatures from './WhatsMoreFeatures';

const WhatsMore = () => {

    let gifs = ["https://www.expertia.ai/GIfs/icons8-document.gif", "https://www.expertia.ai/GIfs/icons8-done.gif", "https://www.expertia.ai/GIfs/icons8-mind-map.gif",
"https://www.expertia.ai/GIfs/icons8-search%20(1).gif","https://www.expertia.ai/GIfs/icons8-omnichannel.gif","https://www.expertia.ai/GIfs/icons8-share.gif"];

let aboutData = ["Use our Auto Job Description tool to create a custom job description for your company",
"Recommendation Engine to Empower and make accurate, realtime and confident hiring decisions",
"Use our advanced Explainable AI bot to gives reasons for decisions.",
"Widest sourcing in passive and active talent pool to find candidates for Every job and skills ",
"Reduce attrition rate and decrease your employee churn","Easily Integrate to your existing HRMS & ATS platforms"]
    return (
        <div>
            <h1>What's more</h1>

            <div id="whatMoreDiv">
                {gifs.map((item,index)=>{
                    return <div className='whatMoreDivItem'>
                        <img src={item} alt="" />
                        <h3>{aboutData[index]}</h3>
                    </div>
                })}
            </div>

            <WhatsMoreFeatures />
        </div>
    ); 
};

export default WhatsMore;