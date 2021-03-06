import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function ContactForm() {
    return (
        <>
            <Form id="formContactBackground">
                <Form.Group controlId="formBasicEmail" className="mt-4">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Group controlId="formBasicText">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                </Form.Group>

                <Form.Group controlId="formBasicLink">
                    <Form.Label>Website</Form.Label>
                    <Form.Control type="link" />
                </Form.Group>

                <Form.Group controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>

                <Form.Check label="Receive copy to your email address once submitted" className="accent-checkbox" />
                <Button size="lg" block className="mt-3 mb-4 btn-cta">SUBMIT</Button>
            </Form>
        </>
    );
}

export default ContactForm;
