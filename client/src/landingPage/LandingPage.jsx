import React from 'react';
import Footer from './footer/Footer';
import HireLikeExpert from './hireLikeExpert/HireLikeExpert';
import MiddleSection from './middleSection/MiddleSection';
import LandingPageTop from './topSection/LandingPageTop';
import WhatsMore from './whatsMore/WhatsMore';

const LandingPage = () => {
    return (
        <div>
            <LandingPageTop />
            <MiddleSection />
            <WhatsMore />
            <HireLikeExpert />
            <Footer />
        </div>
    );
};

export default LandingPage;