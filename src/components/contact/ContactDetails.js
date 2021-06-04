import React from "react";
import Container from "react-bootstrap/Container";
import { FiMail } from "react-icons/fi";
import { GiSmartphone } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";

function ContactDetails() {
    return (
        <>
        <Container>
        <div className="d-flex align-items-center">
            <FiMail className="contact-icons"/>
            <span className="ml-3 contact-detail-text">hello@yaycompany.com</span>
        </div>
        <div className="d-flex align-items-center mt-3">
            <GiSmartphone className="contact-icons"/>
            <span className="ml-3 contact-detail-text">555&nbsp;55&nbsp;555</span>
        </div>
        <div className="row rm-margin-left d-flex mt-3"> 
            <ImLocation2 className="contact-icons"/>
            <div className="d-flex flex-column">
            <span className="ml-3 contact-detail-text">555 Barnacle Street</span>
            <span className="ml-3 contact-detail-text">HA9 9NG</span>
            <span className="ml-3 contact-detail-text">London</span>
            <span className="ml-3 contact-detail-text">United Kingdom</span>
            </div>
        </div>

        </Container>
        </>
    );
}

export default ContactDetails;
