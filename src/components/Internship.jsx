import React from 'react';
import { Briefcase, Calendar, Award, FileCode2 } from 'lucide-react';
import { internshipData } from '../data/portfolioData';

export default function Internship() {
  return (
    <section id="internship" className="relative py-24 bg-[#07060f]/60 border-t border-purple-500/15">
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Internship <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Industry exposure and practical application development completed during internship training.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600/30 via-indigo-600/20 to-cyan-400/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative rounded-2xl bg-[#0c0a1d] border border-purple-500/30 p-7 sm:p-10 backdrop-blur-xl shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-purple-500/20">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-purple-600/10 text-cyan-400 border border-purple-500/30 shrink-0">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {internshipData.domain} Intern
                    </h3>
                    <p className="text-base font-semibold text-purple-400 mt-0.5">
                      {internshipData.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/20 border border-purple-500/30 text-purple-200">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Duration: {internshipData.duration}</span>
                  </span>

                  {internshipData.certificateAvailable && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                      <Award className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Certificate Available</span>
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-2">
                  Role Overview
                </h4>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  {internshipData.description}
                </p>
              </div>

              <div className="mt-6 p-5 rounded-xl bg-[#121028] border border-purple-500/25">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <FileCode2 className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-bold text-white">Project Work:</span>
                    <span className="text-sm font-semibold text-cyan-300">{internshipData.projectWork}</span>
                  </div>
                  <span className="text-[11px] font-mono text-purple-300 bg-purple-900/40 px-2.5 py-0.5 rounded-full border border-purple-500/30">
                    Full Stack Implementation
                  </span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  Contributed to frontend interface design, responsive catalogs, and backend data operations using Java and MySQL.
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-gray-400">Tech Stack:</span>
                  {internshipData.technologiesUsed.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#090814] text-cyan-300 border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
