import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                Possessing a versatile skill set in programming languages such
                as HTML, CSS, JavaScript, C, C++, and Python, coupled with
                expertise in frameworks like Reactjs, Bootstrap, Nodejs,
                Tailwindcss, and Nextjs, as well as databases including MySql
                and MongoDb, I have successfully developed a spectrum of
                projects that exemplify my proficiency. The incorporation of
                these technologies has empowered me to create dynamic and
                visually appealing web applications, demonstrating a deep
                understanding of both front-end and back-end development.
                Leveraging my core skills in Figma, DBMS, OOPS, and AWS, I have
                seamlessly integrated design thinking with database management
                and cloud services, resulting in projects that not only meet but
                exceed expectations in terms of functionality, scalability, and
                user experience. This comprehensive skill set has been
                instrumental in my ability to navigate diverse project
                requirements, ensuring their successful development and
                deployment.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image"></img>
                  <h5>REACTJS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image"></img>
                  <h5>NODEJS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image"></img>
                  <h5>MongoDb</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image"></img>
                  <h5>HTML & CSS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image"></img>
                  <h5>JAVASCRIPT</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image"></img>
                  <h5>EXPRESSJS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image"></img>
                  <h5>Tailwindcss</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image"></img>
                  <h5>BOOTSTRAP</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image"></img>
                  <h5>APIs</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image"></img>
                  <h5>PYTHON</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp}></img>
    </section>
  );
};

export default Skills;
