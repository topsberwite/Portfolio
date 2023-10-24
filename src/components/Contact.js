import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Reveal from "./Reveal";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bzav94h",
        "template_mnn297r",
        form.current,
        "lx7WxxHg2LcJXavwY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("Email was submitted! Thank you for reaching out! :)");
  };

  return (
    <div className="contact">
      <Reveal>
        <div className="contact-container">
          <div className="contact-information">
            <p>
              <BsTelephoneFill /> <span>+639475470913</span>
            </p>
            <p>
              <MdEmail /> <span>kris.aguzar27@gmail.com</span>
            </p>
            <p>
              <FaLocationDot />
              <span>
                337 L. Gonzales St., Brgy. Hagdan Bato Libis, Mandaluyong City
              </span>
            </p>
            <p>
              Social Media:
              <Link to="https://www.facebook.com/topsaguzar/">
                <BsFacebook />
              </Link>
              <Link to="https://www.instagram.com/topsberwite/">
                <BsInstagram />
              </Link>
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail} autoComplete="off">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            ></input>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            ></input>
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Message"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Reveal>
    </div>
  );
};

export default Contact;
