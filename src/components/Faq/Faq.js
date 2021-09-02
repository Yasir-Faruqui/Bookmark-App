import React from "react";
import "./Faq.css";
import { Accordion, Card, Container } from "react-bootstrap";
import { FaSortDown } from "react-icons/fa";

function Faq() {
  return (
    <>
      <div className="faq-heading">
        <h2>Frequently Asked Questions</h2>
        <br />
        <p>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <Container>
        <Accordion className="accordion">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <h6 className="acc-text">What is a Bookmark?</h6>
              <FaSortDown className="arrow-down" />
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Vivamus luctus eros aliquet convallis ultricies. Mauris augue
                massa, ultricies non ligula. Suspendisse imperdiet. Vivamus
                luctus eros aliquet convallis ultricies. Mauris augue massa,
                ultricies non ligula. Suspendisse imperdie tVivamus luctus eros
                aliquet convallis ultricies. Mauris augue massa, ultricies non
                ligula. Suspendisse imperdiet.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <h6 className="acc-text">How can I request a new browser?</h6>
              <FaSortDown className="arrow-down" />
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt justo eget ultricies fringilla. Phasellus blandit
                ipsum quis quam ornare mattis.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              <h6 className="acc-text">Is there a mobile app?</h6>
              <FaSortDown className="arrow-down" />
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Sed consectetur quam id neque fermentum accumsan. Praesent
                luctus vestibulum dolor, ut condimentum urna vulputate eget.
                Cras in ligula quis est pharetra mattis sit amet pharetra purus.
                Sed sollicitudin ex et ultricies bibendum.
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              <h6 className="acc-text"> What about other Chromium browsers?</h6>
              <FaSortDown className="arrow-down" />
            </Accordion.Toggle>

            <Accordion.Collapse eventKey="3">
              <Card.Body>
                Integer condimentum ipsum id imperdiet finibus. Vivamus in
                placerat mi, at euismod dui. Aliquam vitae neque eget nisl
                gravida pellentesque non ut velit.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <div className="faq-btn">
          <button type="submit" className="info-btn-p2">
            More Info
          </button>
        </div>
      </Container>
    </>
  );
}

export default Faq;
