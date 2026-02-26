import React, { useEffect } from "react";
import "./hero-section.css";
import profileImg from "/bg.png";

function HeroSection() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target;
          if (entry.isIntersecting) {
            target.classList.add("animate");
          } else {
            target.classList.remove("animate"); // reset when leaving
          }
        });
      },
      { threshold: 0.2 },
    );

    const elements = document.querySelectorAll(
      ".hero-text .hello, .hero-text .name, .hero-text .role, .hero-text .subtitle, .buttons, .hero-image img",
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="hero-section" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h3 className="hello">Hello!</h3>
          <h1 className="name">
            I'm <span>Riya Bhati</span>
          </h1>
          <h2 className="role">MERN Stack Developer</h2>
          <p className="subtitle">
            MERN stack developer with a strong passion for frontend development,
            crafting intuitive user interfaces while building scalable backend
            solutions with Node.js and MongoDB.
          </p>

          <div className="buttons">
            <a href="/Riya_Bhati_Resume.pdf" download className="btn resume-btn">
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={profileImg} alt="Riya Bhati" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
