import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ChevronRight } from 'lucide-react';
import { navLinks, personalData } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07060f]/85 backdrop-blur-md border-b border-purple-500/20 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="group flex items-center gap-3 cursor-pointer"
            aria-label="Abirami R V Portfolio Homepage"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-400 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              <div className="w-full h-full bg-[#090814] rounded-[10px] flex items-center justify-center">
                <span className="font-heading font-black text-sm tracking-tighter bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
                  AR
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                {personalData.name}
              </span>
              <span className="text-[11px] font-mono tracking-wider text-purple-400/90 uppercase">
                {personalData.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 bg-[#121124]/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-purple-500/20 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-300 font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-cyan-500/20 border border-cyan-400/30 shadow-[0_0_10px_rgba(0,240,255,0.2)] -z-10" />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Download Resume & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(139,92,246,0.35)] hover:shadow-[0_0_25px_rgba(0,240,255,0.45)] hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="xl:hidden p-2 rounded-xl bg-[#121124] border border-purple-500/30 text-gray-200 hover:text-cyan-300 hover:border-cyan-400/50 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-x-0 top-[60px] z-50 p-4 transition-all duration-300 xl:hidden ${
          mobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="max-w-md mx-auto rounded-2xl bg-[#0d0c1e]/95 backdrop-blur-2xl border border-purple-500/30 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-purple-600/30 text-cyan-300 border border-cyan-400/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                      : 'bg-white/[0.03] text-gray-300 hover:bg-white/[0.07] hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-3 h-3 text-gray-500" />
                </a>
              );
            })}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-600/30 active:scale-95 transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>View Resume</span>
          </button>
        </div>
      </div>
    </header>
  );
}
