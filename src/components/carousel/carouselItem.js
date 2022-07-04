import React from "react";
import {Carousel} from "react-bootstrap";

const carouselItem = ({item}) => {
  {
    item.map((image, index) => {
      return (
        <Carousel.Item key={index} interval={2000}>
          <img className="d-block w-100" src={image.src} alt={image.alt} />
        </Carousel.Item>
      );
    });
  }
};

export default carouselItem;
