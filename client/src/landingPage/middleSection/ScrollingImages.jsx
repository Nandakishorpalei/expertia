import React, { useEffect, useRef, useState } from 'react';

const ScrollingImages = () => {
    const [left, setLeft] = useState(0);
    const scrollRef = useRef(null);

    useEffect(()=>{
        if(left === -1724){
            setLeft(0)
        }
        handleScroll()
    },[left])
    function handleScroll(){
        scrollRef.current = setTimeout(()=>{
            setLeft((l)=> l - 2)            
        }, 15)
    }
    let row1Images = ["https://www.expertia.ai/logosSocial/piggy.png","https://www.expertia.ai/logosSocial/NeuroPixel%20Logo.png",
"https://www.expertia.ai/logosSocial/optiwise.png","https://www.expertia.ai/logosSocial/akvina.png", "https://www.expertia.ai/logosSocial/zluri.png",
"https://www.expertia.ai/logosSocial/tuorem.png", "https://www.expertia.ai/logosSocial/limechat-logo.png","https://www.expertia.ai/logosSocial/unisoninternationsal.png",
"https://www.expertia.ai/logosSocial/spicaworks.png"];


let row2Images = ["https://www.expertia.ai/logosSocial/akvina.png", "https://www.expertia.ai/logosSocial/zluri.png",
"https://www.expertia.ai/logosSocial/optiwise.png","https://www.expertia.ai/logosSocial/piggy.png", "https://www.expertia.ai/logosSocial/tuorem.png",
,"https://www.expertia.ai/logosSocial/spicaworks.pn", "https://www.expertia.ai/logosSocial/spicaworks.png", "https://www.expertia.ai/logosSocial/NeuroPixel%20Logo.png","https://www.expertia.ai/logosSocial/NeuroPixel%20Logo.png"
,"https://www.expertia.ai/logosSocial/limechat-logo.png", "https://www.expertia.ai/logosSocial/unisoninternationsal.png"]
    return (
        <div>
            <div className="scrollingImageTopDiv" style={{width: "82vw", marginLeft: `${left}px`, zIndex: "-1"}}>
               <div style={{display:"flex"}}>
               {row1Images.map((imageUrl)=>(<img src={imageUrl} alt="" />))}
               {row1Images.map((imageUrl)=>(<img src={imageUrl} alt="" />))}
               
                </div>
            </div>

            <div className="scrollingImageTopDiv" style={{width: "82vw", marginLeft: `${left}px`, zIndex: "-1"}}>
               <div style={{display:"flex"}}>
               {row2Images.map((imageUrl)=> <img src={imageUrl} alt="" /> )}
               {row2Images.map((imageUrl)=> <img src={imageUrl} alt="" /> )}
               </div>
            </div>

        </div>
    );
};

export default ScrollingImages;