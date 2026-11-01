import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  MessageSquare,
  Copy,
  Check
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatusMessage({
        type: 'error',
        text: 'Please review and resolve the errors highlighted below.'
      });
      return;
    }

    setErrors({});

    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Abirami,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent via Portfolio Contact Form`
    );
    const mailtoUrl = `mailto:${personalData.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;

    window.location.href = mailtoUrl;

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#00f0ff', '#8b5cf6', '#a855f7']
    });

    setStatusMessage({
      type: 'success',
      text: 'Opening your email client with your message pre-filled to abiramishankar57@gmail.com! You can send it directly with one click.'
    });

    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050508] border-t border-purple-500/15">
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-900/30 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Interested in hiring, collaboration, or software development opportunities? Reach out directly.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-[#0c0a1e] border border-purple-500/30 backdrop-blur-xl shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Contact Channels
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Feel free to email me directly or contact me by phone. Both communication channels are actively monitored.
              </p>

              <div className="p-4 rounded-xl bg-[#141228] border border-purple-500/20 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/15 text-cyan-400 border border-purple-500/30 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-gray-400 block">Email Address</span>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalData.email, 'email')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan-300 transition-colors cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#141228] border border-purple-500/20 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-gray-400 block">Phone Number</span>
                    <a
                      href={`tel:${personalData.phone}`}
                      className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors"
                    >
                      {personalData.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalData.phone, 'phone')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-cyan-300 transition-colors cursor-pointer"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#141228] border border-purple-500/20 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-gray-400 block">Location</span>
                  <span className="text-sm font-semibold text-white">
                    {personalData.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#0c0a1e] border border-purple-500/30 backdrop-blur-xl shadow-xl">
              <h4 className="text-xs font-mono uppercase tracking-wider text-purple-300 mb-4 font-semibold">
                Professional & Social Profiles
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-400/50 hover:bg-white/[0.06] text-gray-300 hover:text-white transition-all group"
                >
                  <GithubIcon className="w-6 h-6 text-gray-400 group-hover:text-cyan-300 transition-colors mb-1.5" />
                  <span className="text-xs font-semibold">GitHub</span>
                  <span className="text-[10px] font-mono text-gray-500">@abi863</span>
                </a>

                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-purple-400/50 hover:bg-white/[0.06] text-gray-300 hover:text-white transition-all group"
                >
                  <LinkedinIcon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors mb-1.5" />
                  <span className="text-xs font-semibold">LinkedIn</span>
                  <span className="text-[10px] font-mono text-gray-500">Abirami R V</span>
                </a>

                <a
                  href={personalData.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-yellow-400/50 hover:bg-white/[0.06] text-gray-300 hover:text-white transition-all group"
                >
                  <LeetcodeIcon className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors mb-1.5" />
                  <span className="text-xs font-semibold">LeetCode</span>
                  <span className="text-[10px] font-mono text-gray-500">@abi_512</span>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-[#0c0a1e] border border-purple-500/30 p-7 sm:p-10 backdrop-blur-xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-gray-400 mb-6">
                Client-validated direct messaging. This form opens your default email client with your exact drafted inquiry.
              </p>

              {statusMessage && (
                <div
                  className={`p-4 rounded-xl mb-6 text-xs flex items-start gap-3 ${
                    statusMessage.type === 'error'
                      ? 'bg-red-950/40 border border-red-500/40 text-red-200'
                      : 'bg-emerald-950/40 border border-emerald-500/40 text-emerald-200'
                  }`}
                >
                  {statusMessage.type === 'error' ? (
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  <p>{statusMessage.text}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">
                      Your Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full bg-[#141228] border rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors ${
                        errors.name ? 'border-red-500' : 'border-purple-500/30 focus:border-cyan-400'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-gray-300 mb-1.5">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full bg-[#141228] border rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500' : 'border-purple-500/30 focus:border-cyan-400'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5">
                    Subject <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Job Opportunity / Project Discussion"
                    className={`w-full bg-[#141228] border rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      errors.subject ? 'border-red-500' : 'border-purple-500/30 focus:border-cyan-400'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 mb-1.5">
                    Your Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`w-full bg-[#141228] border rounded-xl px-4 py-3 text-xs text-white placeholder-gray-500 focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-red-500' : 'border-purple-500/30 focus:border-cyan-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-heading font-semibold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_30px_rgba(0,240,255,0.45)] hover:brightness-110 active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </form>

              <p className="text-[11px] font-mono text-gray-500 mt-4 text-center">
                🛡️ Direct communication without unconfigured third-party API dependencies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
