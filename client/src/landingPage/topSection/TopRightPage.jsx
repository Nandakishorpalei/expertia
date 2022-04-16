import React from 'react';
import Done from '@mui/icons-material/Done';

const TopRightPage = () => {
    return (
        <div id="LandingPageTopSectionRight">
              <div className="landingPageRightImgDiv">
              <button className="landingPageRightImgDivButtons landingPageRightImgDivButtons--1">
              <Done style={{color:"blue"}} />Automated Career Page</button>
              <button className="landingPageRightImgDivButtons landingPageRightImgDivButtons--2">
              <Done style={{color:"blue"}} />  100k+ Professionals</button>
              <button className="landingPageRightImgDivButtons landingPageRightImgDivButtons--3">
              <Done style={{color:"blue"}} /> 50+ Premium Job Boards</button>
              <button className="landingPageRightImgDivButtons landingPageRightImgDivButtons--4">
              <Done style={{color:"blue"}} />AI Screening</button>
              <img src="https://www.expertia.ai/Group%20794.png" alt="" className="landingPageTopRightImg" />
              <div className='speedoImageContainer'>
              <img className='speedo' src="https://www.expertia.ai/speedo.png" alt="" />
              <h4 className='expertiaScore'>Expertia Score</h4>
              </div>

              </div>
            </div>
    );
};

export default TopRightPage;