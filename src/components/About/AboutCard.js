import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I am <span className="purple">Jeff Wensley Patrimonio </span>
            from <span className="purple"> Negros Occidental, Philippines.</span>
            <br />
            I am currently unemployed as a fullstack and software developer.
            <br />
            I have completed Bachelor's Degree in Information Technology at STI West Negros University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Web and Mobile Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Editing Highlights & Contents
            </li>
            <li className="about-activity">
              <ImPointRight /> Live Streaming
            </li>
          </ul>

          <p style={{ color: "rgb(167, 199, 231)" }}>
            "I know who I am, and that's enough"{" "}
          </p>
          <footer className="blockquote-footer">Jeff</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
