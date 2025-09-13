import React, { useEffect } from "react";
import "./about.css";

function AboutSection() {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate"); // add when visible
          } else {
            entry.target.classList.remove("animate"); // remove when hidden
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% visible
    );

    document.querySelectorAll(".about-header, .about-left, .card").forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Header at the top */}
        <div className="about-header">
          <h2 className="about-subtitle">A Passionate Developer</h2>
          <h1 className="about-title">Who Loves to Code</h1>
        </div>

        {/* Content below header */}
        <div className="about-content">
          {/* Left Column */}
          <div className="about-left">
            <div className="bio-section">
              <h3 className="bio-title">ABOUT ME</h3>
              <p className="bio-text">
                I’m a final-year BCA student with a strong foundation in Core
                Java and frontend development. Over the past year, I have built
                several frontend projects, which helped me strengthen my skills
                in HTML, CSS, JavaScript, React, and modern UI design.
                Currently, I am expanding my knowledge into backend technologies
                as I work towards becoming a proficient MERN stack developer. I
                enjoy solving problems and translating ideas into clean,
                responsive, and user-friendly web applications. My goal is to
                continuously learn, improve, and contribute to impactful
                projects that make a difference. I believe in consistent growth,
                adaptability, and teamwork, and I’m excited to start my career
                as a frontend/full-stack developer.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="about-right">
            <div className="card education-card">
              <h3>🎓 Education</h3>
              <p>
                Bachelor of Computer Applications (2023 - 2026)
                <br /> Sant Singaji Engineering College, Sandalpur , Dewas
              </p>
            </div>

            <div className="card goal-card">
              <h3>🎯 Goal</h3>
              <p>
                Build innovative and practical projects that solve real-world
                problems. 
                <br /> Aspire to become a skilled and
                passionate MERN stack developer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
