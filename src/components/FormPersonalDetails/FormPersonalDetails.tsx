import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

interface Props {
  onDetailsSave: (details: { name: string, bio: string }) => void;
}

const FormPersonalDetails: React.FC<Props> = ({ onDetailsSave }) => {
  // State management for the form fields
  const [name, setName] = useState<string>('');
  const [bio, setBio] = useState<string>('');

  const handleSubmit = () => {
    // Logic to save data
    const details = {
      name,
      bio
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
      <Button onClick={handleSubmit}>Save</Button>
    </div>
  );
}

export default FormPersonalDetails;
