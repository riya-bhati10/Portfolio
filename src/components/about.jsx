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
      { threshold: 0.2 }, // trigger when 20% visible
    );

    document
      .querySelectorAll(".about-header, .about-left, .card")
      .forEach((el) => observer.observe(el));

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
                I’m a final-year BCA student who enjoys building real-world web
                applications using the MERN stack. My primary strength lies in
                frontend development, where I focus on creating clean,
                responsive, and engaging user interfaces using React,
                JavaScript, HTML, and CSS. Over time, I’ve also worked on
                backend development with Node.js, Express.js, and MongoDB, which
                helped me understand how data flows, APIs are designed, and
                complete applications are structured. I like thinking beyond
                just the UI and enjoy connecting frontend logic with backend
                functionality. I’m someone who learns by building, improving,
                and refining projects. I value clarity in code, attention to
                user experience, and teamwork. As I move forward, my goal is to
                grow into a well-rounded MERN stack developer and contribute to
                products that are practical, scalable, and meaningful.
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
                <br /> To grow as a frontend-focused MERN stack developer by
                continuously learning and building meaningful projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
