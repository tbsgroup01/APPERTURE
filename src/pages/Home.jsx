import React from "react";
import Navbar from "../components/Navbar";
import ShutterHero from "../components/ShutterHero";
import SceneSettings from "../components/SceneSettings";
import ExpertiseSection from "../components/ExpertiseSection";
import ImpactSection from "../components/ImpactSection";
import CaseStudies from "../components/CaseStudies";
import TrainingSection from "../components/TrainingSection";
import TestimonialSection from "../components/TestimonialSection";
import Footer from "../components/Footer";
import FocusKinetic from "../components/FocusKinetic";
import WhatWeDo from "../components/WhatWeDo";
import ShutterHeroTwo from "../components/ShutterHeroTwo";

const Home = () => {
  return (
    <>
      <SceneSettings />
      <Navbar />
      <ShutterHero />
      <ShutterHeroTwo />
      <FocusKinetic />
      <WhatWeDo />
      <ExpertiseSection />
      <ImpactSection />
      <CaseStudies />
      <TrainingSection />
      <TestimonialSection />
      <Footer />
    </>
  );
};

export default Home;
