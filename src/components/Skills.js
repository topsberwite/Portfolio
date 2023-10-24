import ProgressBar from "react-bootstrap/ProgressBar";
import Reveal from "./Reveal";

const Skills = () => {
  const html = 80;
  const css = 80;
  const js = 70;
  const react = 60;
  const node = 80;
  const ejs = 70;
  const mongodb = 70;

  return (
    <div className="skills">
      <Reveal>
        <h1>SKILLS</h1>
      </Reveal>
      <Reveal>
        <div className="programming-skills">
          <div className="front-end">
            <h2>Front-end Programming Skills</h2>
            <ul>
              <li id="html-logo">HTML</li>
              <ProgressBar
                animated
                now={html}
                label={`${html}%`}
                variant="custom"
              />
              <li id="css-logo">CSS / Bootstrap</li>
              <ProgressBar
                animated
                now={css}
                label={`${css}%`}
                variant="custom"
              />
              <li id="javascript-logo">JavaScript</li>
              <ProgressBar
                animated
                now={js}
                label={`${js}%`}
                variant="custom"
              />
              <li id="react-logo">React.JS</li>
              <ProgressBar
                animated
                now={react}
                label={`${react}%`}
                variant="custom"
              />
            </ul>
          </div>
          <div className="back-end">
            <h2>Back-end Programming Skills</h2>
            <ul>
              <li id="node-logo">Node.js / Express.JS</li>
              <ProgressBar
                animated
                now={node}
                label={`${node}%`}
                variant="custom"
              />
              <li id="ejs-logo">EJS</li>
              <ProgressBar
                animated
                now={ejs}
                label={`${ejs}%`}
                variant="custom"
              />
              <li id="mongodb-logo">MongoDB</li>
              <ProgressBar
                animated
                now={mongodb}
                label={`${mongodb}%`}
                variant="custom"
              />
            </ul>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="soft-skills">
          <h2>Soft Skills</h2>
          <ul>
            <li>
              <img
                src="/images/problem-solving.png"
                alt="problem-solving-skills"
              ></img>
              Problem-solving skills
            </li>
            <li>
              <img
                src="/images/decision-making.png"
                alt="decision-making-skills"
              ></img>
              Decision making skills
            </li>
            <li>
              <img
                src="/images/communication.png"
                alt="communication-skills"
              ></img>
              Communication skills
            </li>
            <li>
              <img
                src="/images/flexible.png"
                alt="flexible-adaptable-skills"
              ></img>
              Flexible / Adaptable
            </li>
          </ul>
        </div>
      </Reveal>
      <Reveal>
        <div className="tools">
          <h2>Tools I Use</h2>
          <img src="/images/git-logo.png" alt="git-logo"></img>
          <img src="/images/postman-logo.png" alt="postman-logo"></img>
          <img src="/images/photoshop-logo.png" alt="photoshop-logo"></img>
          <img src="/images/vs-code-logo.png" alt="vs-code-logo"></img>
          <img
            src="/images/mongodb-compass-logo.png"
            alt="mongodb-compass-logo"
          ></img>
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
