import React from "react";
import { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.png";
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">"Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Hisam `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              I am a dynamic and skilled Computer Science graduate with a B.Tech
              from Rajasthan Technical University. My educational journey
              includes excelling in Class XII (Science) from CBSE Board and
              showcasing proficiency in programming languages such as HTML, CSS,
              JavaScript, C, C++, and Python. I possess a solid foundation in
              frameworks/libraries like Reactjs, Bootstrap, Nodejs, Vite.js,
              Tailwindcss, and Swiperjs, along with expertise in databases like
              MySql and MongoDB.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
