import React from 'react';

// Custom components
import About from './components/AboutComponent';
import Experience from './components/ExperienceComponent';
import Header from './components/HeaderComponent';
import Skills from './components/SkillsComponent';
import { SKILLS } from './data/skills';

// Custom CSS
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Experience />
      <Skills skills={SKILLS}/>
    </div>
  );
}

export default App;
