import React from 'react';
import './PortfolioPreview.module.css';

interface PersonalDetails {
  name: string;
  bio: string;
  profilePicture?: File;
  resume?: File;
}

interface Skill {
    name: string;
    proficiency?: string;
  }
  

interface Project {
  title: string;
  description: string;
  image?: File;
  link?: string;
}

interface Props {
  personalDetails: PersonalDetails;
  skills: Skill[];
  projects: Project[];
}

const PortfolioPreview: React.FC<Props> = ({ personalDetails, skills, projects }) => {
  return (
    <div>
      <header>
        <h1>{personalDetails.name}</h1>
        <p>{personalDetails.bio}</p>
        {/* Display profilePicture and resume link if provided */}
      </header>
      
      <section>
        <h2>Skills</h2>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill.skillName}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {/* Display project.image and project.link if provided */}
          </div>
        ))}
      </section>
    </div>
  );
}

export default PortfolioPreview;
