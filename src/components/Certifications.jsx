import React, { useState } from 'react';
import { 
  Award, 
  Search, 
  FileCheck, 
  Building2, 
  Eye, 
  X, 
  ShieldCheck 
} from 'lucide-react';
import { certificationsData, partnerPlatforms } from '../data/portfolioData';

export default function Certifications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [previewCert, setPreviewCert] = useState(null);

  const categories = ['All', 'AI & Cloud', 'Data & Analytics', 'Software & Web', 'Digital Skills & Design'];

  const filteredCerts = certificationsData.filter((cert) => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          cert.category.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedCategory === 'All') return matchesSearch;
    if (selectedCategory === 'AI & Cloud') {
      return matchesSearch && (cert.category.includes('AI') || cert.category.includes('Cloud'));
    }
    if (selectedCategory === 'Data & Analytics') {
      return matchesSearch && (cert.category.includes('Data') || cert.category.includes('Power BI') || cert.category.includes('Generative AI'));
    }
    if (selectedCategory === 'Software & Web') {
      return matchesSearch && (cert.category.includes('Software') || cert.category.includes('Computer Science') || cert.category.includes('Web') || cert.category.includes('Cybersecurity'));
    }
    if (selectedCategory === 'Digital Skills & Design') {
      return matchesSearch && (cert.category.includes('Digital') || cert.category.includes('Design') || cert.category.includes('Mobile'));
    }
    return matchesSearch;
  });

  return (
    <section id="certifications" className="relative py-12 sm:py-16 lg:py-24 bg-[#050508] border-t border-purple-500/15">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>Continuous Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Over 10 verified courses and simulations completed across AI, cloud computing, data analytics, software development, and digital technologies.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="mb-14 p-6 rounded-2xl bg-[#0c0a1e] border border-purple-500/25">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-4 h-4 text-cyan-400" />
            <h3 className="text-xs font-mono uppercase tracking-wider text-purple-300 font-semibold">
              Certified Platforms & Issuing Organizations
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {partnerPlatforms.map((org) => (
              <div
                key={org}
                className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-gray-300 hover:border-cyan-400/30 transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="font-medium truncate">{org}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-sm font-semibold'
                    : 'bg-[#100e24] text-gray-400 hover:text-white border border-purple-500/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#100e24] border border-purple-500/30 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="group relative rounded-2xl bg-[#0c0a1d] border border-purple-500/20 p-5 flex flex-col justify-between transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(139,92,246,0.2)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-purple-500/15 text-purple-300 border border-purple-500/30">
                    {cert.category}
                  </span>
                  <span className="text-[11px] font-mono text-gray-500">#{cert.id}</span>
                </div>

                <div className="flex items-start gap-3 mt-1">
                  <div className="p-2 rounded-xl bg-purple-600/10 text-cyan-400 border border-purple-500/20 shrink-0 mt-0.5">
                    <FileCheck className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {cert.title}
                  </h4>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-purple-500/15 flex items-center justify-between">
                <span className="text-[11px] font-mono text-gray-400">Status: Verified Course</span>
                <button
                  onClick={() => setPreviewCert(cert)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-white px-2.5 py-1 rounded-lg bg-cyan-950/30 border border-cyan-400/30 hover:border-cyan-400 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {previewCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#0c0a1e] border border-purple-500/40 p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setPreviewCert(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-purple-500/10 text-cyan-400 border border-purple-500/30">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-purple-400">{previewCert.category}</span>
                <h3 className="text-lg font-bold text-white">{previewCert.title}</h3>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#141228] border border-purple-500/25 space-y-2 text-xs text-gray-300">
              <p><span className="text-gray-400 font-mono">Recipient:</span> Abirami R V</p>
              <p><span className="text-gray-400 font-mono">Curriculum:</span> Professional technical course / industry simulation</p>
              <p><span className="text-gray-400 font-mono">Credential Upload:</span> Certificate file can be uploaded to <code className="text-cyan-300">/public/certificates/{previewCert.id}.pdf</code></p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setPreviewCert(null)}
                className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-md transition-all hover:brightness-110 cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
