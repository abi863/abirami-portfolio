import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-24 bg-[#050508] border-t border-purple-500/15">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Formal technical education, foundational school qualifications, and academic milestones.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-400 shadow-[0_0_12px_rgba(139,92,246,0.6)]" />

          <div className="space-y-12">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  } gap-6 sm:gap-10`}
                >
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0a0818] border-2 border-cyan-400 shadow-[0_0_15px_#00f0ff] flex items-center justify-center z-10 transition-transform hover:scale-125">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-pulse" />
                  </div>

                  <div className="hidden sm:block sm:w-1/2" />

                  <div className="pl-12 sm:pl-0 sm:w-1/2 w-full">
                    <div className="group relative p-6 sm:p-7 rounded-2xl bg-[#0c0a1c] border border-purple-500/25 hover:border-cyan-400/50 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(139,92,246,0.2)]">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-500/15 border border-purple-500/30 text-purple-300">
                          <Calendar className="w-3 h-3 text-cyan-400" />
                          <span>{item.period}</span>
                        </span>

                        <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold ${
                          item.status === 'In Progress'
                            ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-400/30'
                            : 'bg-emerald-500/10 text-emerald-300 border border-emerald-400/30'
                        }`}>
                          {item.status}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                        {item.degree}
                      </h3>

                      <div className="flex items-center gap-2 mt-1 text-xs text-purple-400 font-medium">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{item.institution}</span>
                      </div>

                      <div className="mt-4 p-3.5 rounded-xl bg-[#141228] border border-purple-500/20 flex items-center justify-between">
                        <span className="text-xs font-mono text-gray-400">
                          Academic Score ({item.scoreType}):
                        </span>
                        <div className="flex items-center gap-1.5 font-mono font-bold text-cyan-300 text-sm sm:text-base">
                          <Award className="w-4 h-4 text-cyan-400" />
                          <span>{item.score}</span>
                          {item.passYear && (
                            <span className="text-xs text-gray-400 font-normal">
                              ({item.passYear})
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="mt-4 text-xs text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
