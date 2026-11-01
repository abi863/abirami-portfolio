import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Download, 
  X, 
  AlertCircle, 
  CheckCircle2, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Mail 
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [fileExists, setFileExists] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const checkFile = async () => {
      try {
        const response = await fetch('/resume.pdf', { method: 'HEAD' });
        if (response.ok && response.headers.get('content-type')?.includes('pdf')) {
          setFileExists(true);
        } else {
          setFileExists(false);
        }
      } catch {
        setFileExists(false);
      }
    };

    checkFile();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    if (fileExists) {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'Abirami_R_V_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#0d0c1e] border border-purple-500/40 p-6 sm:p-8 shadow-[0_0_50px_rgba(139,92,246,0.3)] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-cyan-400 transition-colors cursor-pointer"
          aria-label="Close resume modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6 pr-10">
          <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-600/20 to-cyan-500/20 text-cyan-400 border border-purple-500/30">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Curriculum Vitae / Resume
            </h3>
            <p className="text-xs font-mono text-purple-400">
              {personalData.name} • {personalData.role}
            </p>
          </div>
        </div>

        {fileExists ? (
          <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-xs">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Official resume PDF is ready for direct download.</span>
            </div>
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-lg text-xs font-bold bg-emerald-500 text-black hover:bg-emerald-400 transition-colors shrink-0 cursor-pointer"
            >
              Download PDF
            </button>
          </div>
        ) : (
          <div className="mb-6 p-4 rounded-xl bg-purple-950/40 border border-purple-500/40 text-purple-200 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed">
              <p className="font-semibold text-white">Resume File Standby Notice:</p>
              <p className="text-gray-300 mt-1">
                The actual PDF document will be added separately. To attach your resume PDF, simply place your file at <code className="text-cyan-300 bg-black/50 px-1.5 py-0.5 rounded font-mono">/public/resume.pdf</code>.
              </p>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-300 font-semibold">
            Verified Profile Summary
          </h4>

          <div className="p-4 rounded-xl bg-[#141228] border border-purple-500/20 text-xs space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <GraduationCap className="w-4 h-4 text-purple-400" />
              <span>B.Tech Computer Science and Business Systems</span>
            </div>
            <p className="text-gray-300">
              Ramco Institute of Technology (2024–2028) • CGPA: <span className="text-cyan-300 font-bold">6.97</span>
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#141228] border border-purple-500/20 text-xs space-y-2">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Code2 className="w-4 h-4 text-cyan-400" />
              <span>Featured Engineering Projects</span>
            </div>
            <ul className="text-gray-300 space-y-1 list-disc list-inside">
              <li><strong className="text-white">LIFEConnect:</strong> Blood Bank Management System (Java 21, Spring Boot, MySQL)</li>
              <li><strong className="text-white">Smart Bus Stop:</strong> Real-time IoT Transit Information System (ESP32, OLED, WebServer)</li>
              <li><strong className="text-white">Online Shopping Website:</strong> Internship Full Stack Application</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-[#141228] border border-purple-500/20 text-xs space-y-1">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Web Development Internship — Trios Technology Pvt. Ltd. (1 Month)</span>
            </div>
            <p className="text-gray-400">
              Certificate Available • Technologies: HTML, CSS, JavaScript, Java, MySQL
            </p>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-purple-500/20 flex flex-wrap items-center justify-between gap-4">
          <a
            href={`mailto:${personalData.email}?subject=Resume Request - Abirami R V&body=Hello Abirami,%0D%0A%0D%0AI reviewed your portfolio and would like to request a copy of your latest resume.%0D%0A%0D%0ABest regards,`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono bg-white/[0.05] border border-white/10 hover:border-cyan-400 text-gray-300 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4 text-cyan-400" />
            <span>Request via Email</span>
          </a>

          {fileExists ? (
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg hover:brightness-110 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          ) : (
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-xs font-semibold bg-purple-900/40 border border-purple-500/40 text-purple-200 hover:bg-purple-800/40 transition-colors cursor-pointer"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
