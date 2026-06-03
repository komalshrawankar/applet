import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import DigitalSolutions from '../components/Home/DigitalSolutions'
import DigitalServices from "../components/Home/DigitalServices";
import CurvedSection from "../components/Home/CurvedSection";
import sectionImage from "../assets/images/curved.png";
import bgImage from "../assets/images/curvedbg.png";
import HowWeWork from "../components/Home/HowWeWork";
// Import your icons
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";

// Import connector images
import connectorUp from "../assets/images/up.png";    // upward curve
import connectorDown from "../assets/images/down.png";  // downward curve
import TestimonialSection from '../components/Home/TestimonialSection';
import LatestNews from '../components/Home/LatestNews';
import Footer from '../components/Footer';

const steps = [
  {
    id: 1,
    title: "Understand Your Needs",
    description: "We discuss your business goals and project requirements.",
    icon: <img src={icon1} alt="icon1" className="" />,
    connectorImage: { desktop: connectorUp, mobile: connectorUp },
  },
  {
    id: 2,
    title: "Build the Solution",
    description: "Our team develops your website, app, or marketing campaign with quality.",
    icon: <img src={icon2} alt="icon2" className="" />,
    connectorImage: { desktop: connectorDown, mobile: connectorDown },
  },
  {
    id: 3,
    title: "Test & Improve",
    description: "We test everything carefully to ensure smooth performance.",
    icon: <img src={icon3} alt="icon3" className="" />,
    connectorImage: { desktop: connectorUp, mobile: connectorUp },
  },
  {
    id: 4,
    title: "Launch & Support",
    description: "We help you launch successfully and provide ongoing support.",
    icon: <img src={icon4} alt="icon4" className="" />,
  },
];





const Home = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <DigitalSolutions/>
    <DigitalServices />
     <CurvedSection
        badgeText="Why Choose Us"
        heading="Your Trusted Partner for Digital Growth"
        description="We combine technology, creativity, and expertise to deliver solutions that help businesses succeed in today’s competitive digital world. Our focus is on creating reliable, scalable, and results-driven solutions tailored to your business needs."
        features={[
          "Business-focused digital solutions",
          "Modern design and technology",
          "Transparent communication",
          "On-time project delivery",
          "Dedicated technical support",
          "Scalable solutions for growth",
        ]}
        image={sectionImage}
        bgImage={bgImage}
      />
         <HowWeWork steps={steps} />
         <TestimonialSection/>
         <LatestNews/>
         <Footer/>
    </>
  )
}

export default Home
