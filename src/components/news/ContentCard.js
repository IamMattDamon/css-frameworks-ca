import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function ContentCard () {
    return (
        <>
        <Row>
            <Col xl={3} lg={4} md={12}>
                <Card className="mt-3" id="news-card">
                    <Card.Img variant="top" src="images/old-television-3.jpg" rounded="true" />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                </Card>
            </Col>
                    
            <Col xl={3} lg={4} md={12}>
                <Card className="mt-3" id="news-card">
                    <Card.Img variant="top" src="images/card-camera-image.jpg" rounded="true" />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col xl={3} lg={4} md={12}>
                <Card className="mt-3" id="news-card">
                    <Card.Img variant="top" src="images/old-television-2.jpg" rounded="true" />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col xl={3} lg={4} md={12}>
                <Card className="mt-3" id="news-card">
                    <Card.Img variant="top" src="images/vintage-camera.jpg" rounded="true" />
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
            </Col>
            
            <Col xl={3} lg={4} md={12}>
                <Card className="mt-4" id="news-card">
                    <Card.Img variant="top" src="images/card-tv-image.jpg" rounded="true" />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col xl={3} lg={4} md={12}>
                <Card className="mt-4" id="news-card">
                    <Card.Img variant="top" src="images/polaroid-camera.jpg" rounded="true" />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col xl={3} lg={4} md={12}>
                <Card className="mt-4" id="news-card">
                    <Card.Img variant="top" src="images/cinema-projector.jpg" rounded="true" />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col xl={3} lg={4} md={12}>
                <Card className="mt-4" id="news-card">
                    <Card.Img variant="top" src="images/vinyl-player.jpg" rounded="true" />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                </Card>
            </Col>
            </Row> 
                

           
        <div className="w-100"></div>
        </>
    );
}

export default ContentCard;