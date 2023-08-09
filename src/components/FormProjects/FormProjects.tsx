import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface Project {
  title: string;
  description: string;
  image?: File | null;
  link?: string;
}

interface Props {
  onProjectsSave: (projects: Project[]) => void;
}

const FormProjects: React.FC<Props> = ({ onProjectsSave }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);
  const [link, setLink] = useState<string>('');
  const [projects, setProjects] = useState<Project[]>([]);

  const handleAddProject = () => {
    if (title && description) {
      setProjects(prevProjects => [...prevProjects, { title, description, image, link }]);
      setTitle('');
      setDescription('');
      setImage(null);
      setLink('');
    }
  };

  const handleSubmit = () => {
    onProjectsSave(projects);
  };

  return (
    <div>
      <TextField 
        label="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <TextField 
        label="Description" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
      />
      <TextField 
        label="Link (e.g., GitHub or Live Demo)" 
        value={link} 
        onChange={(e) => setLink(e.target.value)} 
      />
      <input 
        type="file" 
        onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} 
      />

      <Button onClick={handleAddProject}>Add Project</Button>

      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            {project.title} - {project.description} ({project.link})
            {/* You can also display the image or provide an option to view it */}
          </li>
        ))}
      </ul>

      <Button onClick={handleSubmit}>Save Projects</Button>
    </div>
  );
}

export default FormProjects;
