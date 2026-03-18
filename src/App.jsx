import React from "react";
import Navbar from "./components/Navbar";
import ShutterHero from "./components/ShutterHero";
import SceneSettings from "./components/SceneSettings";
import FocusSection from "./components/FocusItem";
import ExpertiseSection from "./components/ExpertiseSection";
import ImpactSection from "./components/ImpactSection";
import CaseStudies from "./components/CaseStudies";
import TrainingSection from "./components/TrainingSection";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <SceneSettings />
      <Navbar />
      <ShutterHero />
      <ExpertiseSection />
      <FocusSection />
      <ImpactSection />
      <CaseStudies />
      <TrainingSection />
      <TestimonialSection />
      <Footer />
    </>
  );
};

export default App;
