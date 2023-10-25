import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import Reveal from "./Reveal";

const Projects = () => {
  return (
    <div className="projects">
      <Reveal>
        <h1>PROJECTS</h1>
      </Reveal>
      <Reveal>
        <div className="projects-container">
          <Reveal>
            <div className="project">
              <img src="/images/thumbnails/tindog.png" alt="tindog"></img>
              <div className="project-description">
                <h2>TinDOG</h2>
                <p>A static dating website for dogs.</p>
                <p>
                  <span>Stack used:</span> <i>HTML, CSS / Bootstrap</i>
                </p>
                <div className="code">
                  <Link to="https://github.com/topsberwite/Tindog">
                    <BsGithub id="github-icon" />
                  </Link>
                  <Link to="https://topsberwite.github.io/Tindog/">
                    <button>Demo</button>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="secret-project">
              <img
                src="/images/thumbnails/secrets.png"
                alt="secrets-website"
              ></img>
              <div className="project-description">
                <h2>Secrets</h2>
                <p>A website where you can keep your secrets.</p>
                <p>
                  <span>Stack used:</span>{" "}
                  <i>
                    Node.js / Express.js, EJS, CSS, JavaScript, MongoDB /
                    Mongoose
                  </i>
                </p>
                <div className="code">
                  <Link to="https://github.com/topsberwite/Secrets">
                    <BsGithub id="github-icon" />
                  </Link>
                  <Link to="https://secrets-6g8h.onrender.com/">
                    <button>Demo</button>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="project">
              <img
                src="/images/thumbnails/blog-api.png"
                alt="blog-website"
              ></img>
              <div className="project-description">
                <h2>Blog API</h2>
                <p>Blog website utilizing my own RESTful API.</p>
                <p>
                  <span>Stack used:</span>{" "}
                  <i>Node.js / Express.js, EJS, CSS, JavaScript</i>
                </p>
                <div className="code">
                  <Link to="https://github.com/topsberwite/Blog-API">
                    <BsGithub id="github-icon" />
                  </Link>
                  <Link to="https://blog-api-13pz.onrender.com">
                    <button>Demo</button>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="blog-project">
              <img
                src="/images/thumbnails/blog-website.png"
                alt="blog-website"
              ></img>
              <div className="project-description">
                <h2>Blog website</h2>
                <p>
                  A simple blog website where you can use as your daily journal.
                </p>
                <p>
                  <span>Stack used:</span>{" "}
                  <i>
                    Node.js / Express.js, EJS, CSS, JavaScript, MongoDB /
                    Mongoose
                  </i>
                </p>
                <div className="code">
                  <Link to="https://github.com/topsberwite/Blog-website">
                    <BsGithub id="github-icon" />
                  </Link>
                  <Link to="https://blog-website-3ptu.onrender.com/">
                    <button>Demo</button>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="project">
              <img
                src="/images/thumbnails/simon-game.png"
                alt="simon-game"
              ></img>
              <div className="project-description">
                <h2>Simon Game</h2>
                <p>
                  A memory game of lights and sounds in which players must
                  repeat random sequences of flashing lights by pressing the
                  colored pads in the correct order.
                </p>
                <p>
                  <span>Stack used:</span> <i>HTML, CSS, JavaScript</i>
                </p>
                <div className="code">
                  <Link to="https://github.com/topsberwite/simon-game">
                    <BsGithub id="github-icon" />
                  </Link>
                  <Link to="https://topsberwite.github.io/simon-game/">
                    <button>Demo</button>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </div>
  );
};

export default Projects;
