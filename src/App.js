import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import "./sass/style.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Home from "./components/home/Home";
import News from "./components/news/News";
import Contact from "./components/contact/Contact";
import ContentFooter from "./ContentFooter";

function App() {
  return (
    <>
    <Router>
    <div className="wrapper">
    <div className="nav-wrapper">
    <Container className="nav-container">
        <Navbar expand="lg" className="navbar navbar-expand-lg py-2">
            <Navbar.Brand href="/" className="heading mr-5">The YAY Company</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="py-3">
                    <Nav className="mr-auto">
                        <NavLink exact to="/" className="nav-link px-5 px-lg-2">
                            Home
                        </NavLink>
                        <NavLink to="/news" className="nav-link px-5 px-lg-2">
                            News
                        </NavLink>
                        <NavLink to="/contact" className="nav-link px-5 px-lg-2">
                            Contact
                        </NavLink>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="sm-2" />
                        <Button variant="outline-success">
                            Go
                        </Button>
                    </Form>
                </Navbar.Collapse>
        </Navbar>
      </Container>
      </div>
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
      
      <ContentFooter />

    </Router>
    </>
  );
}

export default App;
