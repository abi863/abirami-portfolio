import React from 'react';
import { Trophy, Medal, Sparkles, Star } from 'lucide-react';
import confetti from 'canvas-confetti';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const triggerCelebration = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#8b5cf6', '#00f0ff', '#f59e0b', '#ec4899']
    });
  };

  const prominentAchievements = achievementsData.filter((a) => a.prominent);
  const otherAchievements = achievementsData.filter((a) => !a.prominent);

  return (
    <section id="achievements" className="relative py-12 sm:py-16 lg:py-24 bg-[#07060f]/80 border-t border-purple-500/15">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <Trophy className="w-3.5 h-3.5 text-yellow-400" />
            <span>Honors & Recognitions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Key <span className="bg-gradient-to-r from-yellow-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Competitive ideathons, national mathematical evaluations, and technical competitions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <h3 className="text-sm font-mono uppercase tracking-wider text-yellow-400 font-bold">
              Featured Awards • Second Prize Winner
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prominentAchievements.map((item) => (
              <div
                key={item.id}
                onClick={triggerCelebration}
                className="group relative rounded-2xl bg-gradient-to-br from-[#16122d] via-[#0e0c1f] to-[#0a0818] border-2 border-yellow-500/40 p-7 sm:p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(245,158,11,0.15)] transition-all duration-300 hover:border-yellow-400 hover:-translate-y-2 hover:shadow-[0_15px_45px_rgba(245,158,11,0.25)] cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-purple-600/20 text-yellow-400 border border-yellow-500/40 shadow-inner group-hover:scale-110 transition-transform">
                    <Trophy className="w-8 h-8" />
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-yellow-500/20 text-yellow-300 border border-yellow-400/50 shadow-sm flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    <span>{item.award}</span>
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-purple-300 font-medium">
                    Hackathon / Ideathon • {item.year}
                  </span>
                  <h4 className="text-2xl font-black text-white tracking-tight group-hover:text-yellow-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold text-cyan-300">
                    {item.institution}
                  </p>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-gray-300 leading-relaxed pt-4 border-t border-yellow-500/20">
                  {item.description}
                </p>

                <div className="mt-5 flex items-center justify-between text-xs font-mono text-gray-400">
                  <span className="text-yellow-400/80">Click card for celebration ✨</span>
                  <span className="text-purple-400 font-semibold">2nd Prize Winner</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-6">
            <Medal className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-mono uppercase tracking-wider text-purple-300 font-semibold">
              National & Technical Competitions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherAchievements.map((item) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-[#0c0a1e] border border-purple-500/20 p-6 flex flex-col justify-between transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(139,92,246,0.15)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-purple-500/15 text-purple-300 border border-purple-500/30">
                      Competitive Exam
                    </span>
                    <span className="text-xs font-mono text-gray-500">{item.year}</span>
                  </div>

                  <div className="flex items-start gap-3 mt-1">
                    <div className="p-2.5 rounded-xl bg-purple-600/10 text-cyan-400 border border-purple-500/20 shrink-0">
                      <Medal className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-purple-400 font-medium mt-1">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-4 pt-3 border-t border-purple-500/15 text-xs text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
