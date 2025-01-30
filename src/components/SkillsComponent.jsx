import React from 'react';
import './css/skills.css';  // Make sure this path matches where you save the CSS file

const SkillItem = ({ icon, name }) => (
  <div className="skill-item">
    <img
       src={`/assets/${icon}`} 
      alt={name}
      title={name}
      className="skill-icon fade-in"
    />
  </div>
);

const SkillCategory = ({ title, skills }) => (
  <div className="skills-category">
    <h3 className="category-title">{title}</h3>
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <SkillItem key={index} {...skill} />
      ))}
    </div>
  </div>
);

const SkillsComponent = () => {
  const skillsData = {
    frontend: [
      { icon: "html.png", name: "HTML" },
      { icon: "css.png", name: "CSS" },
      { icon: "tailwind.jpg", name: "Tailwind" },
      { icon: "bootstrap.png", name: "Bootstrap" },
    ],
    backend: [
      { icon: "spring-boot-logo.png", name: "Spring Boot" },
      { icon: "php.png", name: "PHP" },
      { icon: "js.png", name: "JavaScript" },
      { icon: "nodejs.png", name: "NodeJS" },
    ],
    database: [
      { icon: "mysql.png", name: "MySQL" },
      { icon: "Postgresql_elephant.png", name: "PostgreSQL" },
      { icon: "MongoDB.png", name: "MongoDB" },
      { icon: "supabase-logo-vector.png", name: "Supabase" },
      { icon: "prisma2244.jpg", name: "Prisma" },
    ],
    tools: [
      { icon: "git_icon.svg.png", name: "Git" },
      { icon: "github.png", name: "GitHub" },
      { icon: "gitlab.jpg", name: "GitLab" },
      { icon: "docker.png", name: "Docker" },
      { icon: "postman.png", name: "Postman" },
      { icon: "sonarqube.png", name: "SonarQube" },
    ],
    learning: [
      { icon: "nestjs.png", name: "Nest.js" },
      { icon: "go.png", name: "Go" },
      { icon: "jenkins-logo.jpg", name: "Jenkins" },
    ],
  };

  return (
    <div className="skills-container">
      <h2 className="skills-title">Technical Skills</h2>
      <div>
        <SkillCategory 
          title="Frontend" 
          skills={skillsData.frontend}
        />
        <SkillCategory 
          title="Backend" 
          skills={skillsData.backend}
        />
        <SkillCategory 
          title="Database" 
          skills={skillsData.database}
        />
        <SkillCategory 
          title="Tools" 
          skills={skillsData.tools}
        />
        <SkillCategory 
          title="Learning" 
          skills={skillsData.learning}
        />
      </div>
    </div>
  );
};

export default SkillsComponent;
