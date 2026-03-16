import React from 'react';
import './App.css';
import { resumeData } from './data/resumeData';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import ResumeViewer from './components/ResumeViewer';
import Testimonials from './components/Testimonials';
import TestimonialForm from './components/TestimonialForm';
import Contact from './components/Contact';
import VisitorCounter from './components/VisitorCounter';
import { Heart } from 'lucide-react';

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
      <Testimonials fallbackTestimonials={resumeData.testimonials} />
      <TestimonialForm />

      <footer className="footer" style={{ marginTop: '2rem' }}>
        <div className="container footer-content">
          <p className="copyright">
            © {new Date().getFullYear()} <a href="https://www.linkedin.com/in/poornanandnaik24/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Poornanand</a>. All rights reserved.
          </p>
          <p className="made-with">
            Built with <Heart size={14} className="heart-icon" /> for Sports Physiotherapy
          </p>
          <VisitorCounter />
        </div>
      </footer>
    </div>
  );
}

export default App;
