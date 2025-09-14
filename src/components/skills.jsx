import React, { useState, useEffect } from "react";
import "./skills.css";

const skillsData = [
  { name: "Java", category: "Languages", percentage: 70, color: "#f89820", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "SQL", category: "Languages", percentage: 65, color: "#00618a", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "JavaScript", category: "Languages", percentage: 80, color: "#f7df1e", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML5", category: "Languages", percentage: 90, color: "#e34f26", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", category: "Languages", percentage: 81, color: "#1572b6", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },

  { name: "OOPs", category: "Concepts", percentage: 75, color: "#4caf50", logo: "https://cdn-icons-png.flaticon.com/512/906/906324.png" },
  { name: "DBMS", category: "Concepts", percentage: 77, color: "#ff9800", logo: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png" },

  { name: "Bootstrap", category: "Framework / Library", percentage: 76, color: "#7952b3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "React.js", category: "Framework / Library", percentage: 85, color: "#61dafb", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },

  { name: "Git", category: "Tools", percentage: 70, color: "#f1502f", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", category: "Tools", percentage: 68, color: "#fff", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },

  { name: "Node.js", category: "Runtime / Environment", percentage: 45, color: "#68a063", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },

  { name: "MySQL", category: "Database", percentage: 65, color: "#00758f", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

const categories = ["All", "Languages", "Concepts", "Framework / Library", "Tools", "Runtime / Environment", "Database"];
const SKILLS_TITLE = "Technical Skills";

function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleSkills, setVisibleSkills] = useState(skillsData);

  useEffect(() => {
    if (selectedCategory === "All") {
      setVisibleSkills(skillsData);
    } else {
      setVisibleSkills(skillsData.filter(skill => skill.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <section id="skills" className="skills">
      <h2 className="skills-title">{SKILLS_TITLE}</h2>

      {/* Filters */}
      <div className="skills-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-container">
        {visibleSkills.map((skill) => (
          <div className="skill-card animate" key={skill.name}>
            <div className="circle">
              <svg className="progress-ring" width="90" height="90">
                <circle
                  className="progress-ring__circle--bg"
                  stroke="#30363D"
                  strokeWidth="8"
                  fill="transparent"
                  r="40"
                  cx="45"
                  cy="45"
                />
                <circle
                  className="progress-ring__circle"
                  stroke={skill.color}
                  strokeWidth="8"
                  fill="transparent"
                  r="40"
                  cx="45"
                  cy="45"
                  strokeDasharray={2 * Math.PI * 40}
                  strokeDashoffset={
                    2 * Math.PI * 40 - (skill.percentage / 100) * (2 * Math.PI * 40)
                  }
                />
              </svg>
              <span className="percentage">{skill.percentage}%</span>
            </div>
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
