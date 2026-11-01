import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';
import { personalData, navLinks } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
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
    <footer className="relative bg-[#050508] border-t border-purple-500/20 py-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-r from-purple-600/10 via-cyan-500/10 to-purple-600/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-purple-500/15">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#0a0818] rounded-[7px] flex items-center justify-center">
                  <span className="font-heading font-black text-xs text-cyan-300">AR</span>
                </div>
              </div>
              <span className="font-heading font-bold text-xl text-white tracking-tight">
                {personalData.name}
              </span>
            </div>
            <p className="text-xs font-mono text-purple-400 mt-1">
              {personalData.tagline} • Software Developer
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {personalData.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-gray-400 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-cyan-300 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-cyan-400 text-gray-400 hover:text-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-purple-400 text-gray-400 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="p-2 rounded-xl bg-white/[0.04] border border-white/10 hover:border-yellow-400 text-gray-400 hover:text-white transition-colors"
              >
                <LeetcodeIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-600/30 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <p>© {currentYear} {personalData.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-gray-400">
            <span>Crafted with</span>
            <span className="text-cyan-400">React</span>
            <span>&</span>
            <span className="text-purple-400">Three.js 3D</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
