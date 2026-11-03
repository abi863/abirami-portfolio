import React, { useEffect } from 'react';
import { Download, ExternalLink, FileText, X } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const resumeUrl = '/resume.pdf';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-0 backdrop-blur-md sm:p-5"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-dialog-title"
        className="flex h-[100dvh] max-h-[100dvh] w-full flex-col overflow-hidden bg-[#0d0c1e] sm:h-[90vh] sm:max-h-[900px] sm:max-w-6xl sm:rounded-2xl sm:border sm:border-purple-500/40 sm:shadow-[0_0_50px_rgba(139,92,246,0.3)]"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="flex shrink-0 items-center justify-between gap-4 border-b border-purple-500/20 bg-[#0d0c1e] px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="hidden rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-600/20 to-cyan-500/20 p-2 text-cyan-400 sm:block">
              <FileText className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h2 id="resume-dialog-title" className="truncate text-base font-bold tracking-tight text-white sm:text-lg">
                Resume Preview
              </h2>
              <p className="truncate text-xs text-gray-400">
                {personalData.name} · {personalData.role}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open PDF in a new tab"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-3 py-2 text-xs font-semibold text-cyan-200 transition-colors hover:border-cyan-300 hover:bg-cyan-400/20"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="hidden sm:inline">Open PDF</span>
              <span className="sm:hidden">Open</span>
            </a>
            <a
              href={resumeUrl}
              download="resume.pdf"
              aria-label="Download Resume"
              className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-cyan-500 px-3 py-2 text-xs font-bold text-white shadow-lg transition-all hover:brightness-110 sm:px-4"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">Download Resume</span>
              <span className="sm:hidden">Download</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume preview"
              className="rounded-lg border border-white/10 bg-white/5 p-2 text-gray-300 transition-colors hover:border-cyan-400/50 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </header>

        <div className="min-h-0 flex-1 bg-[#080811]">
          <iframe
            src={`${resumeUrl}#toolbar=1&navpanes=0&view=FitH`}
            title={`${personalData.name} resume PDF`}
            className="h-full w-full border-0"
          />
        </div>

        <footer className="shrink-0 border-t border-purple-500/20 bg-[#0d0c1e] px-4 py-2 text-center text-[11px] text-gray-500 sm:px-6">
          Use the PDF viewer controls to scroll and zoom. If the preview is unavailable, choose Open PDF.
        </footer>
      </section>
    </div>
  );
}
