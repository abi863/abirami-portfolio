import React, { useState } from 'react';
import { 
  Code2, 
  Layers, 
  Server, 
  Database, 
  Wrench, 
  Sparkles, 
  Terminal, 
  Cpu, 
  GitBranch, 
  Palette, 
  Coffee, 
  FileCode2, 
  Atom 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Coffee: Coffee,
  FileCode2: FileCode2,
  Code: Code2,
  Palette: Palette,
  Atom: Atom,
  Server: Server,
  Database: Database,
  Layers: Layers,
  Terminal: Terminal,
  GitBranch: GitBranch,
  Cpu: Cpu,
  Sparkles: Sparkles
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillCategories.map((c) => c.category)];

  const filteredCategories = selectedCategory === 'All'
    ? skillCategories
    : skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="relative py-12 sm:py-16 lg:py-24 bg-[#07060f]/80 border-t border-purple-500/15">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <Code2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-2xl mx-auto">
            Practical development skills represented at an intermediate level, covering software development, modern web frontends, relational databases, and expanding backend architectures.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded-xl transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(0,240,255,0.3)] font-semibold'
                  : 'bg-[#0f0d22] text-gray-400 hover:text-white border border-purple-500/20 hover:border-purple-500/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup) => {
            const isBackend = catGroup.category.includes('Backend');

            return (
              <div
                key={catGroup.category}
                className="group relative rounded-2xl bg-[#0b0a1a] border border-purple-500/25 p-6 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(139,92,246,0.2)]"
              >
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-purple-500/15">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-500/10 text-cyan-400 border border-purple-500/30">
                      {catGroup.category.includes('Programming') && <Code2 className="w-5 h-5" />}
                      {catGroup.category.includes('Frontend') && <Layers className="w-5 h-5" />}
                      {catGroup.category.includes('Backend') && <Server className="w-5 h-5" />}
                      {catGroup.category.includes('Databases') && <Database className="w-5 h-5" />}
                      {catGroup.category.includes('Tools') && <Wrench className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-white">
                        {catGroup.category}
                      </h3>
                      <span className="text-[11px] font-mono text-purple-400">
                        Level: {catGroup.level}
                      </span>
                    </div>
                  </div>

                  {isBackend && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-amber-500/15 text-amber-300 border border-amber-400/30 animate-pulse">
                      Learning
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  {catGroup.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    const isLearning = skill.badge === 'In Progress';

                    return (
                      <div
                        key={skill.name}
                        className={`p-3 rounded-xl border transition-all flex items-center justify-between ${
                          isLearning
                            ? 'bg-amber-950/20 border-amber-500/30 text-amber-200'
                            : 'bg-white/[0.02] border-white/5 text-gray-200 hover:border-cyan-400/30 hover:bg-white/[0.05]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent className={`w-4 h-4 ${isLearning ? 'text-amber-400' : 'text-cyan-400'}`} />
                          <span className="text-sm font-medium font-sans">{skill.name}</span>
                        </div>

                        {isLearning ? (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-400/20 text-amber-300 border border-amber-400/40">
                            Currently Learning
                          </span>
                        ) : (
                          <span className="text-[11px] font-mono text-gray-400">
                            {skill.level}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-4 rounded-xl bg-[#0f0d22] border border-purple-500/20 text-center max-w-2xl mx-auto">
          <p className="text-xs font-mono text-gray-400">
            <span className="text-cyan-400 font-semibold">Note for Recruiters:</span> All technical competencies are assessed accurately at an intermediate level. Spring Boot is actively in learning phase.
          </p>
        </div>
      </div>
    </section>
  );
}
