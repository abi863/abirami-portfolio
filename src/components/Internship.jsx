import React from 'react';
import { Briefcase, Calendar, Award, FileCode2, Monitor, ShieldCheck } from 'lucide-react';
import { internshipsData } from '../data/portfolioData';

export default function Internship() {
  return (
    <section id="internship" className="relative py-12 sm:py-16 lg:py-24 bg-[#07060f]/60 border-t border-purple-500/15">
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

        <div className="internship-timeline max-w-4xl mx-auto">
          {internshipsData.map((internship, index) => (
            <article
              key={internship.company}
              className={`internship-entry relative pl-12 sm:pl-16 ${internship.featured ? 'internship-entry-featured' : ''}`}
              style={{ '--entry-index': index }}
            >
              <div className="internship-marker" aria-hidden="true">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="internship-card group relative">
                <div className="internship-card-glow absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600/30 via-indigo-600/20 to-cyan-400/30 blur-xl opacity-50 transition duration-500 group-hover:opacity-100" />

                <div className="relative rounded-2xl bg-[#0c0a1d] border border-purple-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-purple-500/20">
                    <div className="flex items-start gap-4">
                      <div className="p-3.5 rounded-2xl bg-purple-600/10 text-cyan-400 border border-purple-500/30 shrink-0">
                        <Briefcase className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {internship.role}
                        </h3>
                        <p className={`text-base font-semibold mt-0.5 ${internship.featured ? 'text-cyan-300' : 'text-purple-400'}`}>
                          {internship.company}
                        </p>
                        {internship.featured && (
                          <span className="inline-flex mt-2 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-cyan-400/10 border border-cyan-300/30 text-cyan-200">
                            Featured Internship
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 sm:justify-end">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/20 border border-purple-500/30 text-purple-200">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{internship.duration}</span>
                      </span>
                      {internship.mode && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-500/15 border border-blue-400/30 text-blue-200">
                          <Monitor className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{internship.mode}</span>
                        </span>
                      )}
                      {internship.certificateAvailable && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                          <Award className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Certificate Available</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 mb-2">
                      Internship Overview
                    </h4>
                    <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                      {internship.description}
                    </p>
                  </div>

                  <div className={`mt-6 p-5 rounded-xl border ${internship.featured ? 'bg-gradient-to-br from-[#121028] to-[#0d1626] border-cyan-400/25' : 'bg-[#121028] border-purple-500/25'}`}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <FileCode2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="text-sm font-bold text-white">Project:</span>
                        <span className="text-sm font-semibold text-cyan-300">{internship.projectWork}</span>
                      </div>
                      <span className="text-[11px] font-mono text-purple-300 bg-purple-900/40 px-2.5 py-0.5 rounded-full border border-purple-500/30 w-fit">
                        {internship.domain}
                      </span>
                    </div>

                    {Array.isArray(internship.projectDescription) ? (
                      <div className="space-y-3 mb-5">
                        {internship.projectDescription.map((paragraph) => (
                          <p key={paragraph} className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                        {internship.projectDescription}
                      </p>
                    )}

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono text-gray-400">Technologies:</span>
                      {internship.technologiesUsed.map((tech) => (
                        <span
                          key={tech}
                          className={`px-2.5 py-1 rounded-lg text-xs font-mono border transition-colors ${internship.featured ? 'bg-[#090814] text-cyan-200 border-cyan-400/30 hover:bg-cyan-400/10' : 'bg-[#090814] text-cyan-300 border-cyan-400/30'}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {internship.certificatePreviewPlaceholder && (
                    <div className="mt-5 flex items-center gap-4 rounded-xl border border-dashed border-emerald-400/30 bg-emerald-400/[0.04] p-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-emerald-400/20 bg-emerald-400/10 text-emerald-300">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-emerald-200">Infosys certificate</p>
                        <p className="text-xs text-gray-400 mt-0.5">Certificate preview placeholder — no certificate image has been added.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
