import React, { useState } from "react";
import FormPersonalDetails from "./components/FormPersonalDetails/FormPersonalDetails";
import FormSkills from "./components/FormSkills/FormSkills";
import FormProjects from "./components/FormProjects/FormProjects";
import PortfolioPreview from "./components/PortfolioPreview/PortfolioPreview";
import ThemeSelector from "./components/ThemeSelector/ThemeSelector";
import styles from "./themes.module.css";

interface PersonalDetails {
  name: string;
  bio: string;
  // ... Add other fields like profile picture, resume, etc.
}

interface Skill {
  name: string;
  proficiency?: string;
}

interface Project {
  title: string;
  description: string;
  // ... Add other fields like images, links, etc.
}

function App() {
  const [personalDetails, setPersonalDetails] =
    useState<PersonalDetails | null>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [theme, setTheme] = useState<"classic" | "modern">("classic");

  return (
    <div>
      <FormPersonalDetails
        onDetailsSave={(details) => setPersonalDetails(details)}
      />
      <FormSkills onSkillsSave={(skillList) => setSkills(skillList)} />
      <FormProjects
        onProjectsSave={(projectList: Project[]) => setProjects(projectList)}
      />
       
      <ThemeSelector onThemeChange={setTheme} />
      {personalDetails && (
        <PortfolioPreview
          personalDetails={personalDetails}
          skills={skills}
          projects={projects}
          theme={theme}
        />
      )}
    </div>
  );
}

export default App;
