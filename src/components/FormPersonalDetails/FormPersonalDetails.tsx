import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface Props {
  onDetailsSave: (details: { name: string, bio: string, profilePicture?: File | null, resume?: File | null }) => void;
}

const FormPersonalDetails: React.FC<Props> = ({ onDetailsSave }) => {
  const [name, setName] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [resume, setResume] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, setFileState: React.Dispatch<React.SetStateAction<File | null>>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setFileState(files[0]);
    }
  };

  const handleSubmit = () => {
    const details = {
      name,
      bio,
      profilePicture,
      resume
    };
    onDetailsSave(details);
  };

  return (
    <div>
      <TextField 
        label="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <TextField 
        label="Bio" 
        multiline 
        rows={4}
        value={bio} 
        onChange={(e) => setBio(e.target.value)} 
      />
      <input 
        type="file" 
        onChange={(e) => handleFileChange(e, setProfilePicture)}
        accept="image/*" 
      />
      <input 
        type="file" 
        onChange={(e) => handleFileChange(e, setResume)}
        accept=".pdf,.doc,.docx"
      />
      <Button onClick={handleSubmit}>Save</Button>
    </div>
  );
}

export default FormPersonalDetails;
