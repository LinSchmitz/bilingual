import React from 'react';
import { NavBar } from './NavBar';
import { SideBar } from './SideBar';
import { MainContent } from './MainContent';
import { Footer } from './Footer';

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="main">
        <SideBar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}
