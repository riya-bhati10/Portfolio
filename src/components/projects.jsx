import React, { useEffect, useRef } from "react";
import "./projects.css";

const projects = [

  {
  title: "FixHub – Gadget Repair Service Platform",
  description:
    "A full-stack MERN web application for managing gadget repair services, allowing users to book repairs and track service requests through a clean and responsive interface.",
  image: "/fixhub-thumbnail.png",
  github: "https://github.com/riya-bhati10/FixHub",
},

  {
    title: "Furniture Store Website",
    description:
      "A responsive Furniture E-Commerce Website built with HTML, CSS, Bootstrap, and JavaScript featuring a modern UI, product catalog, and interactive shopping cart functionality.",
    image: "/furniture-thumbnail.png",
    github: "https://github.com/riya-bhati10/Website",
    // demo:"https://furniture-websie.netlify.app/",
  },
  {
    title: "Mystery Mapper Website",
    description:
      "Mystery Mapper lets you pick any state in India and reveals its haunted spots, ghostly tales, and hidden mysteries. made using React.js and CSS.",
    image: "/mystery-mapper.png",
    github: "https://github.com/riya-bhati10/Mystery-Mapper",
    // demo:"https://mystery-mapper.netlify.app/"
  },
  // {
  //   title: "E-Commerce Store",
  //   description:
  //     "A frontend e-commerce web app with product listing, cart, and checkout flow built using React and Redux.",
  //   image: "/images/ecommerce.png",
  //   github: "https://github.com/yourusername/ecommerce-store",
  // },
];

const GITHUB_BUTTON_TEXT = "GitHub Repo";
// const DEMO_BUTTON_TEXT = "Live Demo";

function ProjectsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 } // triggers when 20% of section is visible
    );

    const elements = sectionRef.current.querySelectorAll(
      ".projects-title, .projects-container, .project-card"
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <h2 className="projects-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                {GITHUB_BUTTON_TEXT}
              </a>
               {/* <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                {DEMO_BUTTON_TEXT}
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
