import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Header.css";
import img1 from "../../images/illustration-hero.png";

function Header() {
  return (
    <>
      <Container>
        <Row className="desktop-section">
          <Col md={6} className="header-left">
            <h2 className="header-heading">A Simple Bookmark Manager</h2>
            <br />
            <p>
              A clean and simple interface to organize your favourite
              <br /> websites. Open a new browser tab and see your sites load
              instantly.
              <br /> Try it for free.
            </p>
            <div className="header-btn">
              <button type="submit" className="chrome-btn">
                Get it on Chrome
              </button>
              <button type="submit" className="firefox-btn">
                Get it on Firefox
              </button>
            </div>
          </Col>
          <Col md={6} className="header-right">
            <div className="blue-bg"></div>
            <img src={img1} alt="Header-img" className="header-svg" />
          </Col>
        </Row>
        <Row className="res-section">
          <Col md={6} className="header-left">
            <div className="blue-bg"></div>
            <img src={img1} alt="Header-img" className="header-svg" />
          </Col>
          <Col md={6} className="header-right">
            <h2 className="header-heading">A Simple Bookmark Manager</h2>
            <br />
            <p>
              A clean and simple interface to organize your favourite
              <br /> websites. Open a new browser tab and see your sites load
              instantly.
              <br /> Try it for free.
            </p>
            <div className="header-btn">
              <button type="submit" className="chrome-btn">
                Get it on Chrome
              </button>
              <button type="submit" className="firefox-btn">
                Get it on Firefox
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Header;
