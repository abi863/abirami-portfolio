import React, { useState, useEffect } from 'react';
import { FolderGit2, GitBranch, Eye, X, CheckCircle2, Clock } from 'lucide-react';
import { projectsData } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [githubNotice, setGithubNotice] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
        setGithubNotice(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const handleGithubClick = (projectName) => {
    setGithubNotice(`GitHub repository for "${projectName}" is currently being organized and documented. Link coming soon!`);
    setTimeout(() => {
      setGithubNotice(null);
    }, 4000);
  };

  return (
    <section id="projects" className="relative py-24 bg-[#050508] border-t border-purple-500/15">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2 max-w-2xl mx-auto">
            Practical systems built with modern web technologies, full-stack Java backends, and IoT microcontrollers.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {githubNotice && (
          <div className="fixed bottom-6 right-6 z-50 max-w-md bg-[#13112a] border border-cyan-400/40 text-gray-100 p-4 rounded-2xl shadow-2xl backdrop-blur-xl flex items-start gap-3 animate-bounce">
            <Clock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div className="text-xs">
              <p className="font-semibold text-white">Repository Status</p>
              <p className="text-gray-300 mt-0.5">{githubNotice}</p>
            </div>
            <button
              onClick={() => setGithubNotice(null)}
              className="text-gray-400 hover:text-white ml-auto"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-[#0c0a1d] border border-purple-500/25 overflow-hidden flex flex-col transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(139,92,246,0.25)]"
            >
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#16142a]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a1d] via-[#0c0a1d]/40 to-transparent" />

                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold backdrop-blur-md border ${
                    project.status === 'Completed'
                      ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40 shadow-sm'
                      : 'bg-purple-950/80 text-purple-300 border-purple-500/40'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-[#080714]/80 text-cyan-300 border border-cyan-400/30 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-gray-300 mt-2.5 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/[0.04] text-purple-300 border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-cyan-950/30 text-cyan-400 border border-cyan-400/30">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-purple-500/20 flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleGithubClick(project.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-cyan-300 py-1.5 px-3 rounded-lg bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 transition-colors cursor-pointer"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>GitHub: Coming Soon</span>
                  </button>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-white py-1.5 px-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 hover:brightness-110 shadow-[0_0_12px_rgba(139,92,246,0.3)] transition-all active:scale-95 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-3xl rounded-2xl bg-[#0d0c1e] border border-purple-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(139,92,246,0.3)] my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-cyan-400 transition-colors cursor-pointer"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="pr-12">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  {selectedProject.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                  Status: {selectedProject.status}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {selectedProject.name}
              </h3>
            </div>

            <div className="mt-5 rounded-xl overflow-hidden border border-purple-500/30 max-h-64 sm:max-h-72">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-mono text-cyan-300 uppercase tracking-wider mb-2">
                Overview & Architecture
              </h4>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                {selectedProject.fullDescription}
              </p>
            </div>

            {selectedProject.highlights && (
              <div className="mt-6">
                <h4 className="text-sm font-mono text-purple-300 uppercase tracking-wider mb-3">
                  Core Engineering Highlights
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-6">
              <h4 className="text-sm font-mono text-cyan-300 uppercase tracking-wider mb-2">
                Complete Technologies & Libraries ({selectedProject.technologies.length})
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-purple-900/30 text-purple-200 border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => handleGithubClick(selectedProject.name)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono bg-white/[0.05] border border-white/10 hover:border-cyan-400 text-gray-300 hover:text-white transition-colors cursor-pointer"
              >
                <GitBranch className="w-4 h-4 text-cyan-400" />
                <span>GitHub Repository: Coming Soon</span>
              </button>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-heading font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-600/30 hover:brightness-110 transition-all cursor-pointer"
              >
                Close Details
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
