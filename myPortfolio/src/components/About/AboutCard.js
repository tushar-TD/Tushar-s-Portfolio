import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aniket khavnekar </span>
            from <span className="purple"> Mumbai, India.</span>
            <br />
            I am currently employed as a Associate Engineer at <span  className="purple">Benison Technologies</span>  HQ-Banglore Partially Aquired by <span  className="purple">Google</span>  .
            <br />
            I have completed  PG-DAC from Pune and B.E in <span  className="purple"></span>Computer Science from <span  className="purple">Smt.Indira Gandhi College of Engineering(Ghansoli)</span> 
            <br />
            <br />
            
Key Skills:<br />
<span  className="purple">Java Ecosystem</span>: Maven, Hibernate, Spring Framework<br />
            
<span  className="purple">Database Management</span>: MongoDB, MySQL<br />
            
<span  className="purple">Advanced Java Development</span>: Java, JSP, OOP, Design Patterns, Spring, Spring Boot<br />
<span  className="purple">Cloud Platforms</span>: AWS (Amazon Web Services), GCP (Google Cloud Platform)<br />
<span  className="purple">DevOps</span>:Ansible,Terraform,Docker,Kubernetes, Jenkins,Git,GitLab,Jira, Selenium, Prometheus,Paloalto,CircleCi<br />
<span  className="purple">SDLC Mastery</span>SDLC Mastery: End-to-end software development lifecycle expertise<br />
<span  className="purple">Full-Stack Development</span>: Proficient in MERN (MongoDB, Express.js, React, Node.js) stack<br />
<span  className="purple">RESTful Services</span>: Proficient in designing and implementing Representational State Transfer (REST) APIs<br />
<span  className="purple">Technological Proficiency</span>: Maven, Hibernate, Spring, MongoDB, MySQL, AWS, Docker<br />
<span  className="purple">Continuous Learning</span>: Linux Kernel, Data Structures, Linux admin<br /><br />

Educational Background:<br />
<span  className="purple">Post Graduation</span>: CDAC <br />
<span  className="purple">Bachelor's Degree</span> : Computer Science and Engineering<br /><br />

Let's connect and explore opportunities to collaborate, innovate, and drive technological excellence together!
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
          
              <ImPointRight /><span  className="purple"> Sports and Stuff  </span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span  className="purple">Writing Tech Blogs</span>
            </li>
            <li className="about-activity">
              <ImPointRight /> <span  className="purple">Travelling</span>
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "A dropout will beat a genius through hard work!"{" "}
          </p>
          <footer className="blockquote-footer">Aniket</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
