import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import inventorysystem from "../../Assets/Projects/InventorySystem.png";
import digibarwebsite from "../../Assets/Projects/digibarwebsite.png";
import digibarmobile from "../../Assets/Projects/digibarmobile.png";
import requestsystem from "../../Assets/Projects/RequestSystem.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inventorysystem}
              isBlog={false}
              title="Vallacar Transit Inventory"
              description="The Vallacar Transit Inventory is a trial prototype inventory management website that I was solely responsible for developing, both front end and back end. It allows admin to add employee names along with their unit specifications, as well as search, edit, update, and delete records."
              ghLink="https://github.com/microwensleyjeff/Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={requestsystem}
              isBlog={false}
              title="Vallacar Transit Request"
              description="The Vallacar Transit Request is a trial prototype request-tracking website developed using PHP and MySQL. It enables users to monitor requests, mark them as completed or pending, and record timestamps for each status update."
              ghLink="https://github.com/microwensleyjeff/Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digibarwebsite}
              isBlog={false}
              title="Capstone DIGIBAR Website"
              description="A web system for the barangay officials will enable the barangay to efficiently manage their services, acting as a central hub for administrative tasks such as posting announcements and handling document requests. "
              ghLink="https://github.com/microwensleyjeff/Project"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digibarmobile}
              isBlog={false}
              title="Capstone DIGIBAR Mobile"
              description="A mobile application will provide the users with a user-friendly interface to access barangay services, updates, and document requests without the constant need of visiting the barangay office physically to access these services."
              ghLink="https://github.com/microwensleyjeff/Project" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
