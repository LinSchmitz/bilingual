import React, { useState } from 'react';
import { Footer } from './Footer';
import translations from '../data/translationKey';

export default function App() {
  const [language, setLanguage] = useState('FA');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'EN' ? 'FA' : 'EN'));
  };

  const t = translations[language];

  return (
    <div
      className="container"
      dir={language === 'FA' ? 'rtl' : 'ltr'}
      lang={language === 'FA' ? 'fa' : 'en'}
    >
      <LanguageToggle toggleLanguage={toggleLanguage} t={t} />
      <h1>{t.headerTitle}</h1>
      <button className="btn btn--outline btn-small">{t.buttonLabel}</button>

      <Footer t={t} />
    </div>
  );
}

function LanguageToggle({ toggleLanguage, t }) {
  return (
    <button className="btn btn--outline btn-small" onClick={toggleLanguage}>
      {t.toggleLabel}
    </button>
  );
}
