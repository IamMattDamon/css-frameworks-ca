import React from "react";
import Container from "react-bootstrap/Container";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

function Contact() {
    return (
        <>
        <Container className="mt-5 container-lg">
            <h1 className="d-none d-md-block py-4">Submit your details</h1>
                <div className="d-flex flex-column-reverse flex-md-row">
                    <div className="col-12 col-md-6">
                        <div>
                            <h1 className="d-block d-md-none py-4">Submit your details</h1>
                        </div>
                        <ContactForm />
                        
                    </div>

                    <div className="col-12 col-md-6 contact-padding ml-5 sm-mb-2">
                        <ContactDetails />
                    </div>
                </div>

            </Container>
        </>
);
}

export default Contact;