import React from 'react';
import { DESIGN_PHILOSOPHY } from '../data/projects';

export const DesignProcess: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-2">
              Methodology & Principles
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              How Intuition Meets Rigor
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md">
            Four structural tenets that guide every engagement, from initial behavioral discovery to production design token deployment.
          </p>
        </div>

        {/* 4 Clean Editorial Chapters with Whitespace over cards-in-cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {DESIGN_PHILOSOPHY.map((item) => (
            <div
              key={item.number}
              className="space-y-4 pt-6 border-t-2 border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors"
            >
              <div className="text-2xl font-extrabold font-mono text-indigo-600 dark:text-indigo-400 tabular-nums">
                {item.number}
              </div>

              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
