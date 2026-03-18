import React from "react";
import Navbar from "./components/Navbar";
import ShutterHero from "./components/ShutterHero";
import SceneSettings from "./components/SceneSettings";

const App = () => {
  return(
    <>
    <SceneSettings />
    <Navbar />
    <ShutterHero />
    </>
  )
};

export default App;
