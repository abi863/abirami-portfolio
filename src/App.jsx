import React, { useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Internship from './components/Internship';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050508] text-gray-100 overflow-x-hidden selection:bg-purple-600/30 selection:text-cyan-300">
      {/* Interactive Desktop Custom Cursor */}
      <CustomCursor />

      {/* Fixed Navigation Bar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Portfolio Sections */}
      <main id="main-content">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About onOpenResume={() => setResumeModalOpen(true)} />
        <Education />
        <Skills />
        <Projects />
        <Internship />
        <Certifications />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Handler Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
