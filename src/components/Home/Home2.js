import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/JWPPToga.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a recent Information Technology graduate with a passion for Full-Stack Development, UI/UX Design, and Data Encoding. I enjoy building functional, user-friendly, and visually engaging digital experiences while ensuring that information is organized, accurate, and efficiently managed.
              <br />
              <br />I have experience working with technologies such as
              <i>
                <b className="purple"> C#, JavaScript, Node.js, and React.js </b>on the front end, and <b className="purple">Firebase, MySQL, and MongoDB </b>on the back end. I also have an interest in technical troubleshooting, system support, and assisting users with IT-related concerns.
              </i>
              <br />
              <br />
              Throughout my projects, I have developed modern applications such as &nbsp;
              <i>
              including &nbsp; 
                <b className="purple">inventory systems</b> and <b className="purple">
               request-processing platforms </b>
                for both web and mobile.
                I also have experience with <b className="purple"> data entry</b> and <b className="purple"> management</b>, allowing me to combine technical skills and support with accuracy, organization, problem-solving and attention to detail. 
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{ marginTop: "-100px" }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <p style={{ fontStyle: 'italic' }}>
              jeffwensley.work@gmail.com     |     (+63)91-8554-9671
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/microwensleyjeff"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/JeffWensley1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jeff-wensley-patrimonio-5430bb327/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/jeffwensley15/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
