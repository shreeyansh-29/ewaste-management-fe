import React from "react";
import {Carousel} from "react-bootstrap";
import img1 from "./images/microwave.jpg";
import img2 from "./images/printer1.jpeg";
import img3 from "./images/tubelight1.jpg";
import img4 from "./images/monitor.jpg";
import img5 from "./images/img71.jpg";
import img6 from "./images/machine1.jpg";
import img7 from "./images/mobile1.jpg";
function CategoryCarousel() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img4} alt="Fourth slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img5} alt="Five slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img6} alt="Six slide" />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={img7} alt="Seven slide" />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CategoryCarousel;
