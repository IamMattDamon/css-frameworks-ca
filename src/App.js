import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, useRouteMatch, useParams } from "react-router-dom";
import "./sass/style.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import Home from "./components/home/Home";
import News from "./components/news/News";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Router>
    <div>
      <Navbar expand="lg">
        <Navbar.Brand href="/">The YAY Company</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavLink exact to="/" className="nav-link">
                    Home
                </NavLink>
                <NavLink to="/news" className="nav-link">
                    News
                </NavLink>
                <NavLink to="/contact" className="nav-link">
                    Contact
                </NavLink>
            </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Go</Button>
        </Form>
        </Navbar.Collapse>
      </Navbar>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/carousel-1.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/carousel-2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../images/carousel-3.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
