import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterBody = () => {

    const col2 = ["Get Started","Jobs", "Request a demo","Pricing","Integrations"];
    const col3 = ["About","Careers","Contact Us", "FAQs"];
    const col4 = ["Terms Of Use","Privacy Policy","Cookie Policy"];


    return (
        <div id="footerBody">
            <div className="footerBodyLeft footerBodyItem">
                <img className='footerExpertiaLogo' src="https://www.expertia.ai/Full-Logo-Black.png" alt="" />
                <p className="commonTextStyle">Expertia AI Technologies Pvt. Ltd, <br /> Sector 1, HSR Layout, Bangalore 560102</p>
                <div className="flexBox" style={{width:"10vw"}}>
                    <div className="circleDiv" style={{backgroundColor:"rgb(67, 95, 178)", color:"white"}}><LinkedInIcon /></div>
                    <div className="circleDiv" style={{backgroundColor:"black", color:"white"}}><EmailIcon /></div>
                    <div className="circleDiv" style={{backgroundColor:"blue", color:"white"}}><TwitterIcon /></div>
                </div>
            </div>
            <div className="footerBodyItem">
                <h3>Product</h3>
                {col2.map((item)=>{
                     return <><span className="commonTextStyle footerBodyItemContent">{item}</span><br /></>
                     })}
            </div>

            <div className="footerBodyItem">
                <h3>Company</h3>
                {col3.map((item)=>{
                     return <><span className="commonTextStyle footerBodyItemContent">{item}</span><br /></>
                     })}
            </div>
            <div className="footerBodyItem">
                <h3>Legal</h3>
                {col4.map((item)=>{
                     return <><span className="commonTextStyle footerBodyItemContent">{item}</span><br /></>
                     })}
            </div>
        </div>
    );
};

export default FooterBody;