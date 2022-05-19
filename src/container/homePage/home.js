import React  from "react";
import InfoSection from "../components/infoSection/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
  InfoData,
  InfoDataTwo,
} from "./data";
import Footer from "../components/footer/footer";
import Info from "../components/infoSection/Info";
import Services from "../components/services/services";

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
