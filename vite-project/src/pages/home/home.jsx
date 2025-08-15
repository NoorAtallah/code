import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../componants/heroSection'
import ServicesSection from '../../componants/service'
import TestimonialsSection from '../../componants/testimonials'
import PortfolioSection from '../../componants/portfolio'
import SmoothScrollSection from '../../componants/feature'
const Home = () => {
    return (
        <>
       <Hero/>
     <ServicesSection/>
     <TestimonialsSection/>
     <PortfolioSection/>
     <SmoothScrollSection/>
      </>
    );
};

export default Home;