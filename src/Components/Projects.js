import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.jpeg";
import projImg2 from "../assets/img/project-img2.jpeg";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";

const Projects = () => {
  const projects = [
    {
      title: "Ebiz Website",
      description: "Ecommerece Website for Business using React and APIs",
      imgUrl: projImg1,
    },
    {
      title: "Krrunchit",
      description: "Food Ordering Website using React,Redux,SwiperJs",
      imgUrl: projImg2,
    },
    {
      title: "Netflix Clone",
      description:
        "Netlix Clone made using ReactJs,React-router,Slick-Carousel",
      imgUrl: projImg3,
    },
    {
      title: "Resto.",
      description:
        "Restaurant Website built with HTML & CSS, javascript and SwiperJs",
      imgUrl: projImg4,
    },
    {
      title: "RollIt Game",
      description: "Basic  game of rolling dice build in JavaScript",
      imgUrl: projImg5,
    },
    {
      title: "Guess Number",
      description: "Simple game of Guessing made with Javascript",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              In developing diverse web projects, I proficiently utilized a
              range of cutting-edge tools and technologies to create seamless
              and visually appealing user interfaces. Employing React, Redux,
              and Bootstrap, I crafted the Ebiz E-commerce website,
              incorporating Swiper.js for enhanced functionality and integrating
              a React form with a country-state API, ensuring a smooth user
              experience. Through these projects, I honed my skills in React,
              Axios, and various APIs, gaining valuable experience in responsive
              design and dynamic content integration. Looking ahead, I am
              enthusiastic about expanding my repertoire by incorporating new
              web technologies in upcoming projects, further enhancing my
              proficiency and staying abreast of industry trends.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>NEW UPCOMING PROJECTS!!BASED ON NEW TECHNOLOGIES</p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>NEW UPCOMING PROJECTS!!BASED ON NEW TECHNOLOGIES</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

export default Projects;
