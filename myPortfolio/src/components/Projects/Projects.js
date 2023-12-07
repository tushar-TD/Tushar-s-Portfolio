import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Bike Doctor"
              description="The Bike Service System is a comprehensive software solution designed to streamline and manage the process of servicing bicycles. It offers a range of features and functionalities that facilitate efficient communication, organization, and tracking of bike service requests and maintenance tasks. Here is a description of the key components and capabilities of the system"
              ghLink="https://github.com/bodkheAkash/BikeDocter.git"
              demoLink="https://github.com/bodkheAkash/BikeDocter.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Art of Welfare"
              description="Welcome to the ArtForWelfare project repository! This initiative leverages the power of art to raise funds for various societal welfare programs. Through the sale of captivating artworks, we aim to directly contribute to the betterment of marginalized communities."
              ghLink="https://github.com/mkmeena97/ArtForWelfare"
              demoLink="https://github.com/mkmeena97/ArtForWelfare"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
