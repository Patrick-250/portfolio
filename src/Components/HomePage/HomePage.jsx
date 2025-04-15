import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/profilelogo.png";
import coder from "../../assets/images/coder.png";
import coffee from "../../assets/images/coffee.png";
import "./HomePage.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileDownload,
} from "react-icons/fa";

function Star({ top, left, size, duration }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="star"
      style={{
        position: "absolute",
        top: top,
        left: left,
        width: size,
        height: size,
        backgroundColor: "white",
        borderRadius: "50%",
        animation: `twinkle ${duration} infinite ease-in-out`,
      }}
    ></div>
  );
}

function generateStars() {
  const stars = [];
  const numberOfStars = 200;
  for (let i = 0; i < numberOfStars; i++) {
    stars.push({
      top: Math.random() * 100 + "vh",
      left: Math.random() * 100 + "vw",
      size: Math.random() * 3 + 1 + "px",
      duration: Math.random() * 5 + 2 + "s",
    });
  }
  return stars;
}

function HomePage() {
  const [stars, setStars] = useState([]);
  const [typedText, setTypedText] = useState("");
  const starFieldRef = useRef(null);

  const textToType =
    "Made with Passion&Love, Let's build something amazing together!";

  const regenerateStars = () => {
    const generatedStars = generateStars();
    const starElements = generatedStars.map((star, index) => (
      <Star
        key={index}
        top={star.top}
        left={star.left}
        size={star.size}
        duration={star.duration}
      />
    ));
    setStars(starElements);
  };

  useEffect(() => {
    regenerateStars();
    window.addEventListener("resize", regenerateStars);
    return () => {
      window.removeEventListener("resize", regenerateStars);
    };
  }, []);

  useEffect(() => {
    let index = 0;
    let interval;

    const typeAndReset = () => {
      interval = setInterval(() => {
        if (index < textToType.length) {
          setTypedText((prev) => textToType.slice(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setTypedText("");
            index = 0;
            typeAndReset();
          }, 1000);
        }
      }, 100);
    };

    typeAndReset();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page" ref={starFieldRef}>
      <div className="stars">{stars}</div>

      <span className="home-page-content">
        <img
          src={coffee}
          alt="coffee"
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
        ></img>
        <section className="home-page-intro">
          Welcome to my code-fueled world, <br />
          Explore my work, and share your view, <br />
          <br />
          Want to collaborate? Reach out to me, <br />
          Let's craft solutions, as bold as can be. <br />
        </section>
        <img
          src={coder}
          alt="coder"
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
        ></img>
      </span>

      <hr />

      <div className="contact-linkss">
        <a
          href="mailto:tpatrickrumanzi@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="contact-icon" />
        </a>
        <a
          href="https://linkedin.com/in/patricktuyiringirerumanzi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="contact-icon" />
        </a>
        <a
          href="https://github.com/Patrick-250"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="contact-icon" />
        </a>
      </div>
      <p className="typed-text">{typedText}</p>
      <a
        href="/Resume.docx"
        download="Patrick_Resume.docx"
        className="resume-link"
      >
        Download My Resume
        <FaFileDownload
          className="download-icon"
          style={{ marginLeft: "5px" }}
        />
      </a>
    </div>
  );
}

export default HomePage;
