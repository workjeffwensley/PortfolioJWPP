import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/home-about1.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I AM</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

       <div className="about-achievements">
          <h2>Achievements</h2>
      <div className="achievements-carousel-wrapper">
          <Carousel interval={3000} pause="hover">
          <Carousel.Item>
          <img
          className="d-block achievements-img"
          src={achievement1}
          alt="Achievement 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block achievements-img"
          src={achievement2}
          alt="Achievement 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block achievements-img"
          src={achievement3}
          alt="Achievement 3"
        />
      </Carousel.Item>
    </Carousel>
  </div>
</div>
    <br></br>
    <br></br>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
