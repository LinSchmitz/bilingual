import React, { useState } from 'react';
import DarkMode from './DarkMode';
import './NavBar.css';
import LanguageToggle from './LanguageToggle';

export function NavBar() {
  return (
    <div className="navbar">
      <div className="nav-left">
        <DarkMode />
        <LanguageToggle />
        <h1 data-i18n-key="title"></h1>
        <p data-i18n-key="welcome"></p>
      </div>
      <p className="logo"> </p>
    </div>
  );
}
