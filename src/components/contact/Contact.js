import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

function Contact() {
    return (
        <>
        <Container className="mt-5 container-lg">
            <h1 className="d-md-block py-4 header-h1">Submit your details</h1>
            <Row className="d-flex">
                <Col lg={6} md={12} sm={12} className="order-sm-1 order-lg-1">
                    <ContactForm />
                </Col>
                <Col lg={6} md={12} sm={12} className="order-sm-1 order-lg-1 mt-5 mt-lg-0">
                    <ContactDetails />
                </Col>
            </Row>
            </Container>
        </>
);
}

export default Contact;