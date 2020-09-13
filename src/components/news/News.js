import React from "react";
import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";


function News() {
    return (
        <>
        <Container>
            <h1 className="py-4 ml-3">News</h1>
            
            <div>
            <Pagination className="ml-3">
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>    
            </Pagination>
            </div>
            
            <Container className="mt-2">
                <Row className="ml-1 justify-content-between">
                    
                <Card style={{ width: '14rem' }} className="mt-3">
                        <Card.Img variant="top" src="images/old-television-3.jpg" rounded />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                    </Card>
                    
                    <Card style={{ width: '14rem' }} className="mt-3">
                        <Card.Img variant="top" src="images/card-camera-image.jpg" rounded />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '14rem' }} className="mt-3">
                        <Card.Img variant="top" src="images/old-television-2.jpg" rounded />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '14rem' }} className="mt-3">
                        <Card.Img variant="top" src="images/vintage-camera.jpg" rounded />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="primary" size="sm" block>
                            MORE
                        </Button>
                    </Card.Body>
                    </Card>

                </Row>

                <Row className="ml-1 justify-content-between">
                    <Card style={{ width: '14rem' }} className="mt-4">
                        <Card.Img variant="top" src="images/card-tv-image.jpg" rounded />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '14rem' }} className="mt-4">
                        <Card.Img variant="top" src="images/polaroid-camera.jpg" rounded />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '14rem' }} className="mt-4">
                        <Card.Img variant="top" src="images/cinema-projector.jpg" rounded />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '14rem' }} className="mt-4">
                        <Card.Img variant="top" src="images/vinyl-player.jpg" rounded />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                    </Card>
                </Row>
            </Container>

            <div>
            <Pagination className="ml-3 mt-5">
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>    
            </Pagination>
            </div>
            
        </Container>
        </>
);
}

export default News;