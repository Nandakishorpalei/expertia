import React, { useEffect, useRef, useState, useMemo } from 'react';
import Button from "@mui/material/Button";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const TopLeftPage = () => {
    let Headers = useMemo(()=> { return ["Career Page.", "Talent Advisor.", "Skill Cloud."]});
    const [current, setCurrent] = useState(0);
    const [currentLength, setCurrentLength] = useState(Headers[current % 3].length);
    const [currentWord, setCurrentWord] = useState(Headers[current %3])
    const wordRemoveRef = useRef();
    const [hover, setHover] = useState(false)


    useEffect(()=>{
        handleRemoveCurrent()
    },[currentLength])

    useEffect(()=>{
        setCurrentWord(Headers[current % 3]);
    },[current])

    function handleRemoveCurrent(){
        wordRemoveRef.current = setTimeout(()=>{
        setCurrentLength((currentLength)=> currentLength-1);
        setCurrentWord(Headers[current % 3].substring(0, currentLength))
        if(currentLength === 0){
         setCurrentLength(Headers[((current+1) % 3)].length);
            setCurrent((current)=> current + 1);
        }
       console.log(current)
     },300);
    }

   
    const customFontStyle={
        borderRight: "4px solid blue",
        fontFamily: "Lato,Helvetica Neue,Arial,Helvetica,sans-serif",
        fontSize: "3rem",
        fontWeight:"700",
        color: current % 3 === 0 ? "rgb(66, 197, 138)" : current % 3 === 1 ? "rgb(78, 199, 243)" : "rgb(108, 92, 231)"
    }

    const customAccessButton = {
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
    }

    return (
       <div id="landingPageLeftTopContent">
            <h1 style={{fontSize: "3rem"}}>Your AI Powered</h1>
            <span style={customFontStyle}>{currentWord}</span>
            <h2 style={{lineHeight: "16px"}}>Invite. Identify. Interview.</h2>

            <div class="landingPageLeftTopContent--middle">
                <h2>Qualified Professionals from over 25+ job platforms!</h2>
            </div>

            <div class="landingPageLeftTopContent--bottom">
                <Button startIcon={<PlayCircleOutlineIcon />} style={{color: "black"}}>Watch Intro to Expertia</Button>
                <h4>or</h4>
                <Button endIcon={<DoubleArrowIcon />} style={customAccessButton}
                onMouseOver={()=> setHover(true)} onMouseOut={()=> setHover(false)}
                >Access For Free</Button>
            </div>
       </div>

    );
};

export default TopLeftPage;