import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src="https://i.ibb.co/kD9BR9r/banner1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>first</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src="https://i.ibb.co/VHmL2V4/banner2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>second</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src="https://i.ibb.co/wBtb5hB/banner3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Three</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src="https://i.ibb.co/k5zNZSZ/banner4.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Four </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner"
            src="https://i.ibb.co/cQZh4Q2/banner5.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>fifth</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
