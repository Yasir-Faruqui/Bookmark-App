import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Extensions.css";
import img1 from "../../images/chrome.svg";
import img2 from "../../images/firefox.svg";
import img3 from "../../images/opera.svg";

function Extensions() {
  return (
    <>
      <Container>
        <div className="ext-heading">
          <h2>Download the extension</h2>
          <br />
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
          <br />
        </div>
        <Row className="text-center cards">
          <Col md={4} className="card-one mb-5">
            <img src={img1} alt="chrome" />
            <h2 className="pt-4">Add to Chrome</h2>
            <p className="pt-3 pb-5">Minimum version 62</p>
            <button type="submit" className="ext-btn mb-3">
              Add & Install Extension
            </button>
          </Col>
          <Col md={4} className="card-two  mb-5">
            <img src={img2} alt="firefox" />
            <h2 className="pt-4">Add to Firefox</h2>
            <p className="pt-3 pb-5">Minimum version 55</p>
            <button type="submit" className="ext-btn mb-3">
              Add & Install Extension
            </button>
          </Col>
          <Col md={4} className="card-three  mb-5">
            <img src={img3} alt="opera" />
            <h2 className="pt-4">Add to Opera</h2>
            <p className="pt-3 pb-5">Minimum version 46</p>
            <button type="submit" className="ext-btn mb-3">
              Add & Install Extension
            </button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Extensions;
