import React from 'react';

interface Props {
  onThemeChange: (theme: 'classic' | 'modern') => void;
}

const ThemeSelector: React.FC<Props> = ({ onThemeChange }) => {
  return (
    <div>
      <button onClick={() => onThemeChange('classic')}>Classic</button>
      <button onClick={() => onThemeChange('modern')}>Modern</button>
    </div>
  );
}

export default ThemeSelector;
