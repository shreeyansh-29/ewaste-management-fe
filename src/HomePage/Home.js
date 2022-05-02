import React  from "react";
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
  // useEffect(() => {
  //   // const tokens = localStorage.getItem("token");
  //   // const email = localStorage.getItem("email");
  //   (async function () {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:8083/login/oauth2/code/google",
  //         {
  //           method: "GET",
  //           // credentials: "same-origin",
           
  //         }
  //       );
  //       // const res = await response.json();
  //       console.log(response.headers);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })();
  // }, []);
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
