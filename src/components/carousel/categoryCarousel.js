import React from "react";
import {Carousel} from "react-bootstrap";
import img1 from "../../assets/images/microwave.jpg";
import img2 from "../../assets/images/printer.jpeg";
import img3 from "../../assets/images/tubelight.jpg";
import img4 from "../../assets/images/monitor.jpg";
import img5 from "../../assets/images/tv.jpg";
import img6 from "../../assets/images/machine.jpg";
import img7 from "../../assets/images/mobile.jpg";

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
