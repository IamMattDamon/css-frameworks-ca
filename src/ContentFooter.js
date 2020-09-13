import React from "react"
import Container from "react-bootstrap/Container";

function ContentFooter() {
    return (
        <>
        <footer className="footer">
            <Container className="container-lg d-flex justify-content-between align-items-center flex-column flex-md-row">
                <span className="py-4 py-md-2">
                    <i className="fa fa-vimeo mr-2" aria-hidden="true"></i>
                    <i className="fa fa-youtube-play ml-2" aria-hidden="true"></i>
                </span>

                <div className="d-flex d-block d-md-none flex-row w-100 justify-content-between">
                    <span>hello@yay.com</span>
                    <span className="ml-auto">Copyright 2020</span>
                </div>

                <span className="d-none d-md-block">hello@yay.com</span>
                <span className="d-none d-md-block">Copyright 2020</span>
            </Container>
        </footer>            
        </>
    );
}

export default ContentFooter;
