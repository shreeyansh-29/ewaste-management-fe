import React  from "react";
import InfoSection from "../components/InfoSection/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
  InfoData,
  InfoDataTwo,
} from "./Data";
import Footer from "../components/Footer/Footer";
import Info from "../components/InfoSection/Info";
import Services from "../components/Services/Services";

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
