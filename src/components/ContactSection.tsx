import React, { useState } from 'react';
import { Mail, ArrowUpRight, Send, CheckCircle2, Clock, DollarSign, Calendar } from 'lucide-react';

interface ContactSectionProps {
  onSuccessToast?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSuccessToast }) => {
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    'Product UX/UI Redesign',
  ]);
  const [budgetTier, setBudgetTier] = useState<string>('$30k — $60k');
  const [timeline, setTimeline] = useState<string>('Next 30 Days');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const availableDisciplines = [
    'Product UX/UI Redesign',
    'Design System & Tokens',
    'Spatial 3D & VisionOS',
    'Mobile & Wearable Apps',
    'Brand Identity & Motion',
    'Design Advisory / Fractional',
  ];

  const budgetOptions = ['$15k — $30k', '$30k — $60k', '$60k — $100k', '$100k+'];
  const timelineOptions = ['Immediate', 'Next 30 Days', 'Q3 2026', 'Flexible'];

  const toggleDiscipline = (item: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(item) ? prev.filter((d) => d !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !name.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onSuccessToast) onSuccessToast();
    }, 600);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Inquiries & Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase">
                Initiate Engagement
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-display text-balance">
                Let's engineer your next breakthrough product.
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Currently reviewing enterprise design systems, fintech workbenches, and spatial product contracts. Share your project brief below or reach out directly.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
              <div className="space-y-1">
                <span className="text-xs text-slate-500 block">Direct Inquiries</span>
                <a
                  href="mailto:hridoynecit@gmail.com"
                  className="text-base font-semibold text-slate-900 dark:text-white hover:text-indigo-500 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-indigo-500" />
                  <span>hridoynecit@gmail.com</span>
                </a>
              </div>

              <div className="space-y-1 pt-2">
                <span className="text-xs text-slate-500 block">Availability</span>
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Available for 2 select engagements in Q2/Q3</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-600 dark:text-slate-400">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-950 dark:hover:text-white flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-950 dark:hover:text-white flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href="https://figma.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-950 dark:hover:text-white flex items-center gap-1"
                >
                  <span>Figma Community</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-slate-950 dark:hover:text-white flex items-center gap-1"
                >
                  <span>Dribbble</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-500 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                    Project Brief Received
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-slate-900 dark:text-white">{name}</span>. We've recorded your project requirements for <span className="text-indigo-600 dark:text-indigo-400 font-medium">{selectedDisciplines.join(', ')}</span>. I will review and respond to <span className="font-mono text-slate-900 dark:text-white">{email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setName('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="mt-4 px-5 py-2 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Scope Selector */}
                  <div className="space-y-3">
                    <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                      01. Select Project Disciplines
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {availableDisciplines.map((item) => {
                        const isSelected = selectedDisciplines.includes(item);
                        return (
                          <button
                            type="button"
                            key={item}
                            onClick={() => toggleDiscipline(item)}
                            className={`p-2.5 text-xs text-left rounded-lg border transition-all ${
                              isSelected
                                ? 'bg-indigo-50 border-indigo-600 text-indigo-700 dark:bg-indigo-950/60 dark:border-indigo-500 dark:text-indigo-200 font-semibold'
                                : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                            }`}
                          >
                            {item}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget & Timeline Split */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                        02. Estimated Budget Range
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {budgetOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setBudgetTier(opt)}
                            className={`py-2 px-2.5 text-xs rounded-lg border transition-all text-center ${
                              budgetTier === opt
                                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 font-bold shadow-sm'
                                : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                        03. Target Kickoff
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {timelineOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => setTimeline(opt)}
                            className={`py-2 px-2.5 text-xs rounded-lg border transition-all text-center ${
                              timeline === opt
                                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 font-bold shadow-sm'
                                : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="space-y-4">
                    <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                      04. Your Details
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Name / Organization"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your Work Email"
                          className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me about the product challenge, scope, or timeline goals..."
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-sm font-semibold shadow-md flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Project Brief...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
