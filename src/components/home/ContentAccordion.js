import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";


function ContentAccordion() {
    return (
        <>
        <Accordion defaultActiveKey="0" className="d-md-none accordion mt-5">
            <Card>
                <Card.Header className="active-accordion">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        First
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="home-accordion-card">
                        <Container className="flex-md-column justify-content-center">
                            <span className="tab-paragraph">
                                <p className="paragraphs">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                            </span>
                            <span className="tab-image">
                                <img src="../images/old-television-1.jpg" className="accordion-image" alt="old television"></img>
                            </span>
                            <div className="flex-lg-row pt-4 pb-2 tab-icons">
                                <FaShareAlt className="tab-icons" />
                                <FaFacebookF className="tab-icons ml-3"/>
                                <AiOutlineTwitter className="tab-icons ml-3"/>
                            </div>
                        </Container>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Second
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body className="home-accordion-background home-accordion-card">
                        <Container className="flex-md-column justify-content-center">
                            <span className="tab-paragraph">
                                <p className="paragraphs">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                            </span>
                            <span className="tab-image">
                                <img src="../images/old-television-2.jpg" className="accordion-image" alt="old television"></img>
                            </span>
                            <div className="flex-lg-row pt-4 pb-2 tab-icons">
                                <FaShareAlt className="tab-icons" />
                                <FaFacebookF className="tab-icons ml-3"/>
                                <AiOutlineTwitter className="tab-icons ml-3"/>
                            </div>
                        </Container>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Third
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body className="home-accordion-background home-accordion-card">
                        <Container className="flex-md-column">
                            <span className="tab-paragraph">
                                <p className="paragraphs">Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. </p>
                            </span>
                            <span className="tab-image">
                                <img src="../images/old-television-3.jpg" className="accordion-image" alt="old television"></img>
                            </span>
                            <div className="flex-lg-row pt-4 pb-2 tab-icons">
                                <FaShareAlt className="tab-icons" />
                                <FaFacebookF className="tab-icons ml-3"/>
                                <AiOutlineTwitter className="tab-icons ml-3"/>
                            </div>
                        </Container>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
        </>
    );
}

export default ContentAccordion;