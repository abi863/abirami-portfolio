import React from 'react';
import { User, MapPin, Mail, Phone, GraduationCap, Code2, Sparkles, FileText, CheckCircle2, Briefcase, CalendarDays, Laptop } from 'lucide-react';
import { personalData, educationData } from '../data/portfolioData';

export default function About({ onOpenResume }) {
  return (
    <section id="about" className="relative py-24 bg-[#07060f]/60 border-t border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600/40 via-indigo-600/30 to-cyan-400/40 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-2xl bg-[#0c0a1a] border border-purple-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
                <div className="relative w-40 h-40 mx-auto rounded-2xl overflow-hidden border-2 border-cyan-400/40 shadow-[0_0_25px_rgba(0,240,255,0.3)] mb-6">
                  <img
                    src="/images/profile.jpg"
                    alt="Abirami R V"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a1a]/80 via-transparent to-transparent" />
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white tracking-tight">{personalData.name}</h3>
                  <p className="text-sm font-heading font-medium text-purple-400 mt-1">{personalData.role}</p>
                  <p className="text-xs font-mono text-cyan-300 mt-0.5">{personalData.tagline}</p>
                </div>

                <div className="mt-6 pt-6 border-t border-purple-500/20 space-y-3 text-xs text-gray-300">
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{personalData.location}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Ramco Institute of Technology (2024–2028)</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                    <a href={`mailto:${personalData.email}`} className="hover:text-cyan-300 transition-colors">
                      {personalData.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                    <a href={`tel:${personalData.phone}`} className="hover:text-cyan-300 transition-colors">
                      {personalData.phone}
                    </a>
                  </div>
                </div>

                <div className="mt-6">
                  <button
                    onClick={onOpenResume}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 shadow-md shadow-purple-600/30 hover:brightness-110 active:scale-95 transition-all cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>View Resume</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121028] to-[#0a0818] border border-purple-500/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Personal Statement</span>
              </div>
              
              <blockquote className="text-xl sm:text-2xl font-semibold text-white leading-relaxed">
                "{personalData.aboutMe}"
              </blockquote>
              
              <p className="text-sm text-gray-300 leading-relaxed mt-4">
                I am deeply interested in software development, web technologies, and building useful applications that combine efficient engineering with real-world accessibility. Through hands-on coursework, IoT prototyping, and internship experience, I continuously expand my practical engineering skill set across the full web stack.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-4">
              <div className="p-5 rounded-xl bg-[#0d0c1e] border border-purple-500/20 hover:border-cyan-400/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-semibold text-sm text-white">Full Stack & Software</h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Focusing on Java, React.js, MySQL, modern web protocols, and expanding backend capabilities with Spring Boot.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0d0c1e] border border-purple-500/20 hover:border-cyan-400/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-400/30">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-semibold text-sm text-white">B.Tech CSBS</h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Pursuing Computer Science and Business Systems (2024–2028) at Ramco Institute of Technology with a 6.97 CGPA.
                </p>
              </div>

              <div className="h-fit self-start p-5 rounded-xl bg-[#0d0c1e] border border-purple-500/20 hover:border-cyan-400/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-semibold text-sm text-white">Applied Systems</h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Engineered the LIFEConnect blood bank management platform and real-time ESP32 IoT transit notifications.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#0d0c1e] border border-purple-500/20 hover:border-cyan-400/40 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h4 className="font-heading font-semibold text-sm text-white">Industry Experience</h4>
                </div>
                <div className="space-y-3">
                  <article className="rounded-lg border border-purple-500/20 bg-[#090814]/70 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/40">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h5 className="text-sm font-semibold text-white">Trios Technology Pvt. Ltd.</h5>
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-cyan-300">
                          <Briefcase className="h-3.5 w-3.5 shrink-0" />
                          Web Development Intern
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full border border-purple-400/25 bg-purple-500/10 px-2 py-1 text-[10px] font-mono text-purple-200">
                        <CalendarDays className="h-3 w-3" />
                        1 Month
                      </span>
                    </div>
                    <p className="mt-2 flex items-start gap-1.5 text-xs leading-relaxed text-gray-400">
                      <Laptop className="mt-0.5 h-3.5 w-3.5 shrink-0 text-purple-300" />
                      Developed an Online Shopping Website using HTML, CSS, JavaScript, Java, and MySQL.
                    </p>
                  </article>

                  <article className="rounded-lg border border-cyan-500/20 bg-[#090814]/70 p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-400/40">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h5 className="text-sm font-semibold text-white">Infosys</h5>
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-cyan-300">
                          <Briefcase className="h-3.5 w-3.5 shrink-0" />
                          Java Intern
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-2 py-1 text-[10px] font-mono text-cyan-200">
                        <CalendarDays className="h-3 w-3" />
                        1 Month · Online
                      </span>
                    </div>
                    <p className="mt-2 text-xs font-medium text-purple-200">MediSphere Cognitive Twin</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-400">
                      Developed a healthcare dashboard with Patient 360 details, patient monitoring, clinical alerts, and an AI-based risk prediction interface.
                    </p>
                    <p className="mt-2 text-[10px] leading-relaxed text-gray-500">
                      Angular, TypeScript, HTML, CSS, Java, Spring Boot, MongoDB Atlas, REST APIs, Python, Machine Learning, and SHAP.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
