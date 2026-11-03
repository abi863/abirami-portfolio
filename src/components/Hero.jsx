import React from 'react';
import { ArrowDown, FileText, MapPin, Mail, Phone } from 'lucide-react';
import HeroCharacterScene from './LaptopScene';
import { personalData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      const topOffset = 80;
      const elementPosition = projectsEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-10 sm:pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Status Announcement */}
        <div className="flex justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121124]/80 border border-purple-500/30 text-xs text-purple-300 shadow-[0_0_15px_rgba(139,92,246,0.2)] backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="font-mono text-cyan-300 font-medium">Open to SDE & Web Developer Opportunities</span>
            <span className="text-gray-500 hidden sm:inline">•</span>
            <span className="text-gray-400 hidden sm:inline">Tamil Nadu, India</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              {/* Circular Profile Photo */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-400 blur-sm opacity-80 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow" />
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-[#090814] border border-cyan-400/40 overflow-hidden shadow-[0_0_25px_rgba(0,240,255,0.3)]">
                  <img
                    src="/images/profile.jpg"
                    alt="Abirami R V"
                    className="w-full h-full object-cover object-center rounded-full transition-transform duration-500 group-hover:scale-105"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
                <div className="absolute bottom-1 right-2 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#090814] flex items-center justify-center shadow-lg" title="Active">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                </div>
              </div>

              <div>
                <span className="inline-block text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-1">
                  Hello, World! I am
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    {personalData.name}
                  </span>
                </h1>
                <p className="text-lg sm:text-xl font-heading font-semibold bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent mt-1">
                  {personalData.role} • {personalData.tagline}
                </p>
              </div>
            </div>

            {/* About Me Tagline Quote */}
            <div className="relative p-4 sm:p-5 rounded-2xl bg-[#0e0c1f]/80 border border-purple-500/25 backdrop-blur-md shadow-xl">
              <div className="absolute -top-3 left-6 px-2 py-0.5 rounded bg-purple-900/60 text-[11px] font-mono text-purple-300 border border-purple-500/30">
                About Me
              </div>
              <p className="text-base sm:text-lg text-gray-200 font-medium leading-relaxed italic">
                "{personalData.aboutMe}"
              </p>
              <p className="text-xs sm:text-sm text-gray-400 mt-2 leading-relaxed font-normal">
                Passionate about software development, web technologies, and engineering useful applications that bridge software logic with impactful real-world utility.
              </p>
            </div>

            {/* Key Information Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono text-gray-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Rajapalayam, Tamil Nadu</span>
              </div>
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-purple-400" />
                <span>{personalData.email}</span>
              </a>
              <a
                href={`tel:${personalData.phone}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalData.phone}</span>
              </a>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <button
                onClick={onOpenResume}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-heading font-semibold text-sm text-gray-200 bg-[#121024] border border-purple-500/40 hover:border-cyan-400/70 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Core Stack */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs font-mono text-gray-400">
              <span className="text-purple-400">Core Stack:</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">Java</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-300">React.js</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-emerald-300">Spring Boot (Learning)</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-indigo-300">MySQL</span>
              <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-purple-300">ESP32 IoT</span>
            </div>
          </div>

          {/* Right Column: 3D Character */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            <div className="w-full relative">
              <HeroCharacterScene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
