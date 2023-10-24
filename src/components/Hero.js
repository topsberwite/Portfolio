import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const Hero = () => {
  const [hireme, setHireme] = useState("Download CV");

  const clickEvent = () => {
    setHireme("Pls hire me!");
  };

  return (
    <Reveal>
      <div className="hero">
        <div className="hero-heading">
          <h1>Kristoffer AGUZAR</h1>
          <p>
            Welcome to my digital playground, where lines of code come to life
            and ideas take shape.<br></br> I'm <b>Tops</b>, an aspiring web
            developer with a passion for crafting seamless, user-centric
            experiences. Through a blend of creativity and technical prowess, I
            strive to build not just websites, but interactive spaces that leave
            a lasting impression. Join me on this journey as we transform
            concepts into captivating digital realities.
          </p>

          <Link to="https://github.com/topsberwite">
            <BsGithub className="link-icons" />
          </Link>
          <Link to="https://www.linkedin.com/in/topsberwite/">
            <BsLinkedin className="link-icons" />
          </Link>
          <Link to="https://www.facebook.com/topsaguzar/">
            <BsFacebook className="link-icons" />
          </Link>
          <a href="/files/CVKristofferAguzar.pdf" download="Resume">
            <button onClick={clickEvent}>{hireme}</button>
          </a>
        </div>
        <Carousel
          indicators={false}
          pause={false}
          controls={false}
          className="carousel"
        >
          <Carousel.Item interval={1000}>
            <img
              src="/images/react-logo.png"
              alt="HTML"
              height="150px"
              width="150px"
            />
            <p>ReactJS</p>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              src="/images/nodejs-logo.png"
              alt="HTML"
              height="150px"
              width="150px"
            />
            <p>NodeJS</p>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              src="/images/expressjs-logo.png"
              alt="HTML"
              height="150px"
              width="150px"
            />
            <p>ExpressJS</p>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              src="/images/ejs-logo.png"
              alt="HTML"
              height="150px"
              width="150px"
            />
            <p>EJS</p>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              src="/images/mongodb-logo.png"
              alt="HTML"
              height="150px"
              width="150px"
            />
            <p>MongoDB</p>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              src="/images/bootstrap-logo.png"
              alt="JavaScript"
              height="150px"
              width="150px"
            />
            <p>Bootstrap</p>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              src="/images/javascript-logo.png"
              alt="JavaScript"
              height="150px"
              width="150px"
            />
            <p>JavaScript</p>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              src="/images/css-logo.png"
              alt="CSS"
              height="150px"
              width="150px"
            />
            <p>CSS</p>
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              src="/images/html-logo.png"
              alt="HTML"
              height="150px"
              width="150px"
            />
            <p>HTML</p>
          </Carousel.Item>
        </Carousel>
      </div>
    </Reveal>
  );
};

export default Hero;
