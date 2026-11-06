import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Layers, ShieldCheck, Eye } from 'lucide-react';
import { HERO_IMAGE } from '../data/projects';

interface HeroSectionProps {
  onExploreWork: () => void;
  onOpenCaseStudy: (projectId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreWork, onOpenCaseStudy }) => {
  const [activePreviewTag, setActivePreviewTag] = useState<'cockpit' | 'tokens' | 'mobile'>('cockpit');

  const previewHighlights = {
    cockpit: {
      title: 'Institutional Wealth Dashboard',
      specs: '1440px Canvas · 28px Tabular Rows · Real-time Liquidity',
      projectId: 'luminary-financial-os'
    },
    tokens: {
      title: 'Multimodal Glass OS Tokens',
      specs: 'VisionOS Spatial Shader · 60 Arcmin Target · Refractive Mesh',
      projectId: 'aura-spatial-interface'
    },
    mobile: {
      title: 'Verve Health & Circadian Flow',
      specs: 'iOS 18 Guidelines · Apple Watch Complications · 4.9★',
      projectId: 'verve-health-ecosystem'
    }
  };

  return (
    <section className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/10 via-purple-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div className="space-y-6">
              {/* Unboxed Metadata Kicker (Anti-slop zero pill rule) */}
              <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-slate-900 dark:text-slate-200">Available for Select Q2/Q3 Projects</span>
                <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
                <span>Product Systems & Visual Craft</span>
              </div>

              {/* Refined Display Headline with text-wrap: balance */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display leading-[1.1] text-balance">
                Designing interfaces that bridge human intuition and engineering rigor.
              </h1>

              {/* Lead Copy */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                Staff Product & Visual Systems Designer crafting fintech cockpits, spatial 3D interfaces, and multi-tier design tokens. Focused on zero-cognitive-friction workflows and tactile motion design.
              </p>
            </div>

            {/* CTAs & Quick Filters */}
            <div className="pt-8 space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={onExploreWork}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-sm transition-all"
                >
                  <span>Explore Selected Work</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                <a
                  href="#lab"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-800 transition-all"
                >
                  <span>Interactive Design Lab</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Clean text separator and key focus areas */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400 pt-2">
                <span className="font-medium text-slate-700 dark:text-slate-300">Core Disciplines:</span>
                <span>Complex Web & Desktop Apps</span>
                <span aria-hidden="true">·</span>
                <span>VisionOS & 3D Spatial UI</span>
                <span aria-hidden="true">·</span>
                <span>Design Tokens & Design QA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container matching height */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/80 bg-slate-900/50 shadow-2xl flex-1 flex flex-col justify-between">
              {/* Media image container */}
              <div className="relative aspect-[16/10] lg:aspect-auto lg:h-[380px] w-full overflow-hidden bg-slate-950">
                <img
                  src={HERO_IMAGE}
                  alt="High-end dark mode product dashboard and mobile UI design showcase"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Overlaid preview badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-md text-[11px] font-mono text-indigo-400 border border-slate-800 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Featured System Artifact</span>
                  </div>
                  <div className="px-2 py-0.5 rounded bg-slate-950/80 backdrop-blur-md text-[11px] font-mono text-slate-300 border border-slate-800">
                    v2.5 Production
                  </div>
                </div>
              </div>

              {/* Bottom Interactive Spec Bar */}
              <div className="p-4 sm:p-5 bg-slate-950/90 dark:bg-slate-950/90 backdrop-blur-sm border-t border-slate-200 dark:border-slate-800 space-y-3">
                {/* Segmented switcher for preview info */}
                <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg">
                  <button
                    onClick={() => setActivePreviewTag('cockpit')}
                    className={`flex-1 py-1 px-2 text-xs font-medium rounded transition-colors ${
                      activePreviewTag === 'cockpit'
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Cockpit OS
                  </button>
                  <button
                    onClick={() => setActivePreviewTag('tokens')}
                    className={`flex-1 py-1 px-2 text-xs font-medium rounded transition-colors ${
                      activePreviewTag === 'tokens'
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Spatial Glass
                  </button>
                  <button
                    onClick={() => setActivePreviewTag('mobile')}
                    className={`flex-1 py-1 px-2 text-xs font-medium rounded transition-colors ${
                      activePreviewTag === 'mobile'
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Mobile Flow
                  </button>
                </div>

                <div className="flex items-center justify-between gap-4 pt-1">
                  <div>
                    <h2 className="text-sm font-semibold text-white">
                      {previewHighlights[activePreviewTag].title}
                    </h2>
                    <p className="text-xs text-slate-400 font-mono">
                      {previewHighlights[activePreviewTag].specs}
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenCaseStudy(previewHighlights[activePreviewTag].projectId)}
                    className="inline-flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300 shrink-0"
                  >
                    <span>View Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metrics Row strictly below the split as required by Portfolio reference */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-display tabular-nums tracking-tight">
              $1.2B+
            </div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
              Asset Volume Transacted
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Through redesigned institutional trading desks
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-display tabular-nums tracking-tight">
              4.9 / 5.0
            </div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
              App Store Rating
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Over 85,000+ member reviews on iOS & WatchOS
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-display tabular-nums tracking-tight">
              14
            </div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
              Design & Industry Honors
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Apple Design Award nominee, Red Dot, Awwwards
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white font-display tabular-nums tracking-tight">
              100%
            </div>
            <div className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
              WCAG AAA Compliance
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Accessible design systems and dark mode contrast
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
