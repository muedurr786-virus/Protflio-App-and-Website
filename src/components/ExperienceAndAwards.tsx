import React from 'react';
import { Award, Briefcase, Download, ArrowUpRight } from 'lucide-react';
import { EXPERIENCE_ITEMS, AWARDS } from '../data/projects';

export const ExperienceAndAwards: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Career Experience */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-1">
                  Trajectory
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                  Experience & Leadership
                </h2>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <span>Request Detailed CV</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="space-y-8 divide-y divide-slate-200 dark:divide-slate-800/60">
              {EXPERIENCE_ITEMS.map((item, idx) => (
                <div key={idx} className={`space-y-3 ${idx > 0 ? 'pt-8' : ''}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <span className="font-mono tabular-nums text-indigo-600 dark:text-indigo-400 font-semibold">
                      {item.period}
                    </span>
                    <span>{item.location}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                      {item.role}
                    </h3>
                    <div className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {item.company}
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-1.5 pt-1">
                    {item.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 flex items-start gap-2"
                      >
                        <span className="text-indigo-500 mt-1">―</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Awards & Recognition */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-1">
                Recognition
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display">
                Honors & Industry Awards
              </h2>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-6">
              <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {AWARDS.map((award, idx) => (
                  <div key={idx} className={`space-y-1.5 ${idx > 0 ? 'pt-5' : ''} ${idx < AWARDS.length - 1 ? 'pb-5' : ''}`}>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-900 dark:text-white font-display">
                        {award.title}
                      </span>
                      <span className="font-mono text-slate-400 tabular-nums">
                        {award.year}
                      </span>
                    </div>

                    <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                      {award.organization}
                    </div>

                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Project: {award.project}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                  <span>Jury & Advisory:</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">
                    Awwwards Digital Jury (2024–2025)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
