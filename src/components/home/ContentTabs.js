import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ContentTabs() {
    return (
        <>
        <Tabs defaultActiveKey="one" id="uncontrolled-tab-example">
            <Tab eventKey="one" title="First">
            <Container className="mt-4 tabs-container">
                <Row>
                    <Col className="col-lg-3">
                        <span className="tab-image">
                            <img src="../images/old-television-1.jpg" className="tab-image" alt="old television"></img>
                        </span>  
                    </Col>
                    <Col className="col-lg-8 col-md-6 ml-4">
                        <span className="tab-paragraph">
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                        </span>
                    <div className="flex-lg-row mt-5">
                        <span className="mr-4">SHARE</span>
                        <span className="mr-4"><i className="fa fa-facebook-f"></i></span>
                        <span className="mr-4"><i className="fa fa-twitter"></i></span>
                    </div>
                </Col>
                </Row>
            </Container>
            </Tab>
            <Tab eventKey="two" title="Second">
            <Container className="mt-4 tabs-container">
                <Row>
                    <Col className="col-md-3">
                        <span className="tab-image">
                            <img src="../images/old-television-2.jpg" className="tab-image" alt="old television"></img>
                        </span>  
                    </Col>
                    <Col className="col-md-8 ml-4">
                        <span className="tab-paragraph">
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                        </span>
                    <div className="flex-lg-row mt-5">
                        <span className="mr-4">SHARE</span>
                        <span className="mr-4"><i className="fa fa-facebook-f"></i></span>
                        <span className="mr-4"><i className="fa fa-twitter"></i></span>
                    </div>
                </Col>
                </Row>
            </Container>
            </Tab>
            <Tab eventKey="three" title="Third">
            <Container className="mt-4 tabs-container">
                <Row>
                    <Col className="col-lg-3">
                        <span className="tab-image">
                            <img src="../images/old-television-3.jpg" className="tab-image" alt="old television"></img>
                        </span>  
                    </Col>
                    <Col className="col-lg-8 col-md-6 ml-4">
                        <span className="tab-paragraph">
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                        </span>
                    <div className="flex-lg-row mt-5">
                        <span className="mr-4">SHARE</span>
                        <span className="mr-4"><i className="fa fa-facebook-f"></i></span>
                        <span className="mr-4"><i className="fa fa-twitter"></i></span>
                    </div>
                </Col>
                </Row>
            </Container>
            </Tab>
        </Tabs>
        </>
    );
}

export default ContentTabs;