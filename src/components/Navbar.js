import { HiMiniCodeBracket } from "react-icons/hi2";
import { LiaToolsSolid } from "react-icons/lia";
import { BiBriefcase } from "react-icons/bi";
import { LuContact } from "react-icons/lu";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="hero" spy={true} smooth={true} offset={-50} duration={500}>
          <HiMiniCodeBracket className="navbar-icons" />
          <p>Kristoffer AGUZAR</p>
        </Link>
      </div>
      <ul>
        <li>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <LiaToolsSolid className="navbar-icons" />
            <p>Skills</p>
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <BiBriefcase className="navbar-icons" />
            <p>Projects</p>
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <LuContact className="navbar-icons" />
            <p>Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
