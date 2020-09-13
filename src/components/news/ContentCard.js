import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function ContentCard () {
    return (
        <>
            <Col>
                <Card className="mt-3" id="news-card">
                    <Card.Img variant="top" src="images/old-television-3.jpg" rounded />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                </Card>
            </Col>
                    
            <Col>
                <Card className="mt-3" id="news-card">
                    <Card.Img variant="top" src="images/card-camera-image.jpg" rounded />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                    </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="mt-3" id="news-card">
                    <Card.Img variant="top" src="images/old-television-2.jpg" rounded />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="mt-3" id="news-card">
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
            </Col>
                
            <div className="w-100"></div>

            <Col>
                <Card className="mt-4" id="news-card">
                    <Card.Img variant="top" src="images/card-tv-image.jpg" rounded />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="mt-4" id="news-card">
                    <Card.Img variant="top" src="images/polaroid-camera.jpg" rounded />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="mt-4" id="news-card">
                    <Card.Img variant="top" src="images/cinema-projector.jpg" rounded />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                </Card>
            </Col>

            <Col>
                <Card className="mt-4" id="news-card">
                    <Card.Img variant="top" src="images/vinyl-player.jpg" rounded />
                    <Card.Body>
                        <Card.Title>Nunc porttitor vel</Card.Title>
                        <Card.Text>
                            Nunc malesuada eget est fringilla dapibus.
                        </Card.Text>
                        <Button variant="primary" size="sm" block>MORE</Button>
                    </Card.Body>
                </Card>
            </Col>
        <div className="w-100"></div>
        </>
    );
}

export default ContentCard;