import React from "react";
import Carousel from "react-bootstrap/Carousel";


function Home() {
    return (
    <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/carousel-1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/carousel-2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/carousel-3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
    </div>
);
}

export default Home;