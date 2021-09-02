import React from "react";
import "./Navbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import img1 from "../../images/logo-bookmark.svg";

function Navigation() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="bg-transparent navbar">
        <Container>
          <Navbar.Brand href="#home">
            <img src={img1} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav">
              <Nav.Link href="#home" className="nav-link">
                Features
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link">
                Pricing
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link">
                Contact
              </Nav.Link>
              <div className="nav-btn">
                <button type="submit" className="login-btn">
                  Login
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
