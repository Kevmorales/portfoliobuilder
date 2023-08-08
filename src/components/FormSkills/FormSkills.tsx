import React, { useState } from 'react';
import { TextField, Button, Chip, Stack } from '@mui/material';

interface Skill {
    name: string;
    proficiency?: string;
  }
  
interface Props {
  onSkillsSave: (skills: Skill[]) => void;
}

const FormSkills: React.FC<Props> = ({ onSkillsSave }) => {
  const [skillName, setSkillName] = useState<string>('');
  const [proficiency, setProficiency] = useState<string>('');
  const [skills, setSkills] = useState<Skill[]>([]);

  const handleAddSkill = () => {
    if (skillName) {
      setSkills(prevSkills => [...prevSkills, { name: skillName, proficiency }]);
      setSkillName('');
      setProficiency('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(prevSkills => prevSkills.filter(skill => skill.name !== skillToRemove));
  };

  const handleSubmit = () => {
    onSkillsSave(skills);
  };

  return (
    <div>
      <TextField 
        label="Skill" 
        value={skillName} 
        onChange={(e) => setSkillName(e.target.value)} 
      />
      {/* For proficiency, you can replace this TextField with a Select dropdown */}
      <TextField 
        label="Proficiency" 
        value={proficiency} 
        onChange={(e) => setProficiency(e.target.value)} 
      />
      <Button onClick={handleAddSkill}>Add Skill</Button>

      <Stack spacing={1} direction="row">
        {skills.map((skill, index) => (
          <Chip
            key={index}
            label={`${skill.name} (${skill.proficiency})`}
            onDelete={() => handleRemoveSkill(skill.name)}
          />
        ))}
      </Stack>

      <Button onClick={handleSubmit}>Save Skills</Button>
    </div>
  );
}

export default FormSkills;
