import React from 'react';
import './App.css';
import { resumeData } from './data/resumeData';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import ResumeViewer from './components/ResumeViewer';
import Contact from './components/Contact';

function App() {
  const [isResumeOpen, setIsResumeOpen] = React.useState(false);

  return (
    <div className="app-container">
      <Navbar data={resumeData.personalInfo} onOpenResume={() => setIsResumeOpen(true)} />
      <main>
        <Hero data={resumeData} />
        <Experience data={resumeData.experience} currentRole={resumeData.currentRole} />
        <Education education={resumeData.education} projects={resumeData.projects} />
        <Skills skills={resumeData.skills} certifications={resumeData.certifications} />
      </main>
      <ResumeViewer isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <Contact data={resumeData.personalInfo} />
    </div>
  );
}

export default App;
