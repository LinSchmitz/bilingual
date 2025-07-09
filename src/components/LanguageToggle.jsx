// LanguageToggle.jsx
import React, { useState } from 'react';

export default function LanguageToggle() {
  const [language, setLanguage] = useState('EN');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'EN' ? 'FA' : 'EN'));
  };

  return (
    <button className={`btn btn--outline btn-small`} onClick={toggleLanguage}>
      {language}
    </button>
  );
}
