import React from "react";
import {Carousel} from "react-bootstrap";
import img1 from "../../container/images/microwave.jpg";
import img2 from "../../container/images/printer.jpeg";
import img3 from "../../container/images/tubelight.jpg";
import img4 from "../../container/images/monitor.jpg";
import img5 from "../../container/images/TV.jpg";
import img6 from "../../container/images/machine.jpg";
import img7 from "../../container/images/mobile.jpg";

const carouselImages = [
  {src: img1, alt: "First Slide"},
  {src: img2, alt: "Secomd Slide"},
  {src: img3, alt: "Third Slide"},
  {src: img4, alt: "Fourth Slide"},
  {src: img5, alt: "Fifth Slide"},
  {src: img6, alt: "Sixth Slide"},
  {src: img7, alt: "Seventh Slide"},
];

const CategoryCarousel = () => {
  return (
    <>
      <Carousel fade>
        {carouselImages.map((image, index) => {
          return (
            <Carousel.Item key={index} interval={2000}>
              <img className="d-block w-100" src={image.src} alt={image.alt} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default CategoryCarousel;
