import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Tabs.css";
import img1 from "../../images/illustration-one.png";
import img2 from "../../images/illustration-two.png";
import img3 from "../../images/illustration-three.png";

function Tabs() {
  function displayTabOne() {
    document.getElementById("tab-content-p1").style.display = "inline-flex";
    document.getElementById("tab-content-p3").style.display = "none";
    document.getElementById("tab-content-p2").style.display = "none";
    document.getElementById("tab-one").style.borderBottom = "2px solid #df0707";
    document.getElementById("tab-one").style.color = "#df0707";
    document.getElementById("tab-two").style.borderBottom = "2px solid #1a1a1a";
    document.getElementById("tab-two").style.color = "#3b3b3b";
    document.getElementById("tab-three").style.borderBottom =
      "2px solid #1a1a1a";
    document.getElementById("tab-three").style.color = "#3b3b3b";
  }
  function displayTabTwo() {
    document.getElementById("tab-content-p1").style.display = "none";
    document.getElementById("tab-content-p2").style.display = "inline-flex";
    document.getElementById("tab-content-p3").style.display = "none";
    document.getElementById("tab-two").style.borderBottom = "2px solid #df0707";
    document.getElementById("tab-two").style.color = "#df0707";
    document.getElementById("tab-one").style.borderBottom = "2px solid #1a1a1a";
    document.getElementById("tab-one").style.color = "#3b3b3b";
    document.getElementById("tab-three").style.borderBottom =
      "2px solid #1a1a1a";
    document.getElementById("tab-three").style.color = "#3b3b3b";
  }
  function displayTabThree() {
    document.getElementById("tab-content-p1").style.display = "none";
    document.getElementById("tab-content-p2").style.display = "none";
    document.getElementById("tab-content-p3").style.display = "inline-flex";
    document.getElementById("tab-three").style.borderBottom =
      "2px solid #df0707";
    document.getElementById("tab-three").style.color = "#df0707";
    document.getElementById("tab-two").style.borderBottom = "2px solid #1a1a1a";
    document.getElementById("tab-two").style.color = "#3b3b3b";
    document.getElementById("tab-one").style.borderBottom = "2px solid #1a1a1a";
    document.getElementById("tab-one").style.color = " #3b3b3b";
  }
  return (
    <>
      <div className="tabs">
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favourite
          websites.
          <br /> Your bookmarks sync between your devices so you can access them
          on the go.
        </p>
      </div>
      <ul className="tabs-content">
        <li onClick={displayTabOne} id="tab-one">
          Simple Bookmarking
        </li>
        <li onClick={displayTabTwo} id="tab-two">
          Speedy Searching
        </li>
        <li onClick={displayTabThree} id="tab-three">
          Easy Sharing
        </li>
      </ul>
      <Container>
        <Row id="tab-content-p1">
          <Col md={5}>
            <img className="img-fluid imgs" src={img1} alt="illustration-one" />
          </Col>
          <Col md={7}>
            <h2>Bookmark in one click</h2>
            <p>
              Organize your bookmarks however you like. Our simple drag-and-drop
              <br />
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <button type="submit" className="info-btn">
              More Info
            </button>
          </Col>
        </Row>
        <Row id="tab-content-p2">
          <Col md={5}>
            <img className="img-fluid imgs" src={img2} alt="illustration-one" />
          </Col>
          <Col md={7}>
            <h2>Intelligent search</h2>
            <p>
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
            <button type="submit" className="info-btn">
              More Info
            </button>
          </Col>
        </Row>
        <Row id="tab-content-p3">
          <Col md={5}>
            <img className="img-fluid imgs" src={img3} alt="illustration-one" />
          </Col>
          <Col md={7}>
            <h2>Share your bookmarks</h2>
            <p>
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
            <button type="submit" className="info-btn">
              More Info
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Tabs;
