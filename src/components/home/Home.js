import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function Home() {
    return (
    <>
      <main>
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

        <Container className="container-lg">
            <h1 className="py-4">We do YAY things</h1>
            <p className="pb-4">Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
        </Container>

          <Container className="container-lg mt-4" id="tab-section">
          <div className="tab-item-wrapper">
          <Tabs defaultActiveKey="home" transition={false} id="noanim-tab-example">
              <Tab eventKey="first" title="First" className="px-3">
                
                <div className="d-flex mt-4">
                  <span className="d-lg-flex-row flex-md-column-reverse col-4">
                  <img
                  className="w-100" 
                  src="../images/old-television-1.jpg"
                  alt="First tab image"
                  />
                  </span>
                  <span className="col-8">
                      <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                  </span>
                  <span>
                  
                  </span>
                </div>

              </Tab>


              <Tab eventKey="second" title="Second" className="inactive-tab">
                  
              </Tab>

              <Tab eventKey="third" title="Third" className="inactive-tab">
                  
              </Tab>
          </Tabs>
          </div>
          </Container>

    </main>
    </>
);
}

export default Home;