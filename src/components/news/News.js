import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ContentPagination from "./ContentPagination";
import ContentCard from "./ContentCard";


function News() {
    return (
        <>
        <Container>
            <h1 className="py-4 ml-3">News</h1>
            
            <div>
            <ContentPagination />
            </div>
            
            <Container className="mt-2">
                <Row className="justify-content-between">
                    <ContentCard />
                </Row>
            </Container>

            <div className="mt-4">
            <ContentPagination />
            </div>
            
        </Container>
        </>
);
}

export default News;