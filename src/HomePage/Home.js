import React from "react";
import InfoSection from "../Components/InfoSection/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
  InfoData,
  InfoDataTwo,
} from "./Data";
import Footer from "../Components/Footer/Footer";
import Info from "../Components/InfoSection/Info";
import Services from "../Components/Services/Services";

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <Info {...InfoData} />
      <InfoSection {...homeObjTwo} />
      <Info {...InfoDataTwo} />
      <InfoSection {...homeObjThree} />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
