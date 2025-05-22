import React from "react";
import Hero from "./Hero";
import Education from "./Education";
import Awards from "./Awards";
import Pricing from "./Pricing";
import Stats from "./Stats";


import OpenAccount from "../OpenAccount";
// Removed incomplete import statement

function HomePage() {
  return (
    <>
     

      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      

      <OpenAccount />
     
    </>
  );
}

export default HomePage;
