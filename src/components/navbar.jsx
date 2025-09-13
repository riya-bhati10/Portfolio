import React, { useState, useEffect } from "react";
import "./navbar.css";

function Navbar() {
  const [activeLink, setActiveLink] = useState("hero-section");

  // Scroll to section on click
  const handleClick = (link) => {
    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // 60% visible to activate
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">Riya Bhati</h2>
        <ul className="nav-links">
          <li
            className={activeLink === "hero-section" ? "active" : ""}
            onClick={() => handleClick("hero-section")}
          >
            Home
          </li>
          <li
            className={activeLink === "about" ? "active" : ""}
            onClick={() => handleClick("about")}
          >
            About
          </li>
          <li
            className={activeLink === "skills" ? "active" : ""}
            onClick={() => handleClick("skills")}
          >
            Skills
          </li>
          <li
            className={activeLink === "projects" ? "active" : ""}
            onClick={() => handleClick("projects")}
          >
            Projects
          </li>
          <li
            className={activeLink === "contact" ? "active" : ""}
            onClick={() => handleClick("contact")}
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
