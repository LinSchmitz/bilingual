import React, { useState } from 'react';
import Clock from './Clock';
import DarkMode from './DarkMode';
import './NavBar.css';
import LanguageToggle from './LanguageToggle';

function getCurrentSeason() {
  const month = new Date().getMonth(); // 0 = Jan, 11 = Dec
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  if (month >= 8 && month <= 10) return 'autumn';
  if (month === 11 || month <= 1) return 'winter';
}

export function NavBar() {
  const [season] = useState(getCurrentSeason());
  // const [season] = useState('summer');

  return (
    <div className={`navbar navbar--${season}`}>
      {season === 'spring' && <Blossoms />}
      {season === 'summer' && <SunRays />}
      {season === 'autumn' && <Leaves />}
      {season === 'winter' && <Snow />}
      {season === 'rainy' && <Rain />}
      {/* Add summer effect here if needed */}
      <div className="nav-left">
        <DarkMode />
        <LanguageToggle />
      </div>
      <Clock />
      <Links />
      <p className="logo"> خورشیدبان ☀️</p>
    </div>
  );
}

function Links() {
  return (
    <div className="cal">
      <p>اوستایی</p>
      <p>زرتشتی</p>
      <p>شاهنشاهی</p>
      <p>میلادی</p>
      <p>شمسی</p>
    </div>
  );
}

export function Blossoms() {
  return (
    <div className="blossoms">
      {Array.from({ length: 40 }).map((_, i) => (
        <span key={i} className="blossom">
          🌸
        </span>
      ))}
    </div>
  );
}

export function SunRays() {
  return (
    <div className="sunRays">
      {Array.from({ length: 40 }).map((_, i) => (
        <span key={i} className="sunny">
          ☀️
        </span>
      ))}
    </div>
  );
}

export function Leaves() {
  return (
    <div className="leaves">
      {Array.from({ length: 40 }).map((_, i) => (
        <span key={i} className="leaf">
          🍂
        </span>
      ))}
    </div>
  );
}

export function Snow() {
  return (
    <div className="snowflakes">
      {Array.from({ length: 80 }).map((_, i) => (
        <span key={i} className="flake"></span>
      ))}
    </div>
  );
}

export function Rain() {
  return (
    <div className="rain">
      {Array.from({ length: 60 }).map((_, i) => (
        <span key={i} className="raindrop">
          💧
        </span>
      ))}
    </div>
  );
}
