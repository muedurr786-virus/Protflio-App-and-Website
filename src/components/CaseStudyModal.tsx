import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowUpRight,
  Monitor,
  Tablet,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sliders,
  Layers,
  Palette,
  Eye,
  FileCode2,
  TrendingUp,
  Award
} from 'lucide-react';
import { Project } from '../types';
import { PROJECTS } from '../data/projects';

interface CaseStudyModalProps {
  projectId: string | null;
  onClose: () => void;
  onSelectProject: (id: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  projectId,
  onClose,
  onSelectProject
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'prototype' | 'tokens' | 'gallery'>('overview');
  const [deviceFrame, setDeviceFrame] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Interactive prototype local states
  const [tradingQty, setTradingQty] = useState<number>(50);
  const [orderType, setOrderType] = useState<'limit' | 'market'>('limit');
  const [executedCount, setExecutedCount] = useState<number>(0);
  const [healthCircadianHour, setHealthCircadianHour] = useState<number>(14);
  const [spatialGazeActive, setSpatialGazeActive] = useState<number>(1);

  const currentProject = PROJECTS.find((p) => p.id === projectId);
  const currentIndex = PROJECTS.findIndex((p) => p.id === projectId);
  const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : PROJECTS[PROJECTS.length - 1];
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : PROJECTS[0];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && prevProject) onSelectProject(prevProject.id);
      if (e.key === 'ArrowRight' && nextProject) onSelectProject(nextProject.id);
    };

    if (projectId) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [projectId, prevProject, nextProject, onClose, onSelectProject]);

  if (!currentProject || !projectId) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 lg:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Modal Dialog Container */}
      <div
        className="relative w-full h-full max-w-6xl max-h-[96vh] bg-white dark:bg-slate-950 rounded-none sm:rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl flex flex-col overflow-hidden text-slate-900 dark:text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="case-study-title"
      >
        {/* Modal Top Bar */}
        <div className="h-16 px-4 sm:px-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 bg-slate-50/80 dark:bg-slate-900/60 shrink-0">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="text-xs text-slate-500 dark:text-slate-400 hidden sm:flex items-center gap-1.5 whitespace-nowrap">
              <span>{currentProject.client}</span>
              <span aria-hidden="true">·</span>
              <span>{currentProject.year}</span>
            </div>
            <h2
              id="case-study-title"
              className="text-base sm:text-lg font-bold font-display truncate text-slate-900 dark:text-white"
            >
              {currentProject.title}
            </h2>
          </div>

          {/* Device Frame Switcher (for previewing responsive layout craft) */}
          <div className="hidden md:flex items-center gap-1 p-1 bg-slate-200/60 dark:bg-slate-800/80 rounded-lg text-xs">
            <button
              onClick={() => setDeviceFrame('desktop')}
              className={`p-1.5 rounded transition-colors ${
                deviceFrame === 'desktop'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="Desktop View (100%)"
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDeviceFrame('tablet')}
              className={`p-1.5 rounded transition-colors ${
                deviceFrame === 'tablet'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="Tablet View (768px frame)"
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDeviceFrame('mobile')}
              className={`p-1.5 rounded transition-colors ${
                deviceFrame === 'mobile'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="Mobile View (390px frame)"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Close button with high-contrast affordance */}
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline text-[11px] font-mono text-slate-400">ESC</span>
            <button
              onClick={onClose}
              aria-label="Close Case Study"
              className="p-2 rounded-lg bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-4 sm:px-6 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex items-center gap-6 overflow-x-auto shrink-0 scrollbar-none text-xs sm:text-sm font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 border-b-2 transition-colors whitespace-nowrap shrink-0 ${
              activeTab === 'overview'
                ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Overview & Problem
          </button>
          <button
            onClick={() => setActiveTab('prototype')}
            className={`py-3.5 border-b-2 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'prototype'
                ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Interactive Prototype</span>
          </button>
          <button
            onClick={() => setActiveTab('tokens')}
            className={`py-3.5 border-b-2 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'tokens'
                ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            <span>Design Tokens & Palette</span>
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`py-3.5 border-b-2 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 ${
              activeTab === 'gallery'
                ? 'border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 font-semibold'
                : 'border-transparent text-slate-500 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>High-Res Gallery</span>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-10">
          {/* Active Device Frame Wrapper */}
          <div
            className={`mx-auto transition-all duration-300 ${
              deviceFrame === 'mobile'
                ? 'max-w-md border-x-4 sm:border-8 border-slate-800 rounded-3xl p-3 bg-slate-900/50 shadow-2xl'
                : deviceFrame === 'tablet'
                ? 'max-w-3xl border-x-4 sm:border-8 border-slate-800 rounded-2xl p-4 bg-slate-900/50 shadow-2xl'
                : 'max-w-5xl'
            }`}
          >
            {/* TAB 1: OVERVIEW & PROBLEM */}
            {activeTab === 'overview' && (
              <div className="space-y-10">
                {/* Hero Showcase Image */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 aspect-[16/9] shadow-lg">
                  <img
                    src={currentProject.coverImage}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <div className="text-xs text-indigo-400 font-mono mb-1">
                        {currentProject.caseStudy.duration} · {currentProject.role}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                        {currentProject.subtitle}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Key Metrics Adjacency */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                  {currentProject.metrics.map((metric, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-display tabular-nums">
                        {metric.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                        {metric.label}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {metric.context}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Problem vs Solution 2-Column Split */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 rounded-2xl border border-rose-200/40 dark:border-rose-950/40 bg-rose-50/20 dark:bg-rose-950/10 space-y-3">
                    <div className="text-xs font-bold text-rose-600 dark:text-rose-400 tracking-wider uppercase">
                      The Problem & Friction
                    </div>
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      {currentProject.caseStudy.problem}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl border border-emerald-200/40 dark:border-emerald-950/40 bg-emerald-50/20 dark:bg-emerald-950/10 space-y-3">
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
                      The Design Architecture
                    </div>
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      {currentProject.caseStudy.solution}
                    </p>
                  </div>
                </div>

                {/* Behavioral Research Insights */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
                    <span>Field Research & Cognitive Insights</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {currentProject.caseStudy.researchInsights.map((insight, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-2"
                      >
                        <div className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold">
                          0{idx + 1}. Insight
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {insight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Architectural Features */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                    Core Interaction Capabilities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentProject.caseStudy.keyFeatures.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 space-y-1.5"
                      >
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{feat.title}</span>
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-6">
                          {feat.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Attributable Testimonial */}
                {currentProject.caseStudy.testimonial && (
                  <div className="p-6 rounded-2xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 space-y-4">
                    <p className="text-base sm:text-lg italic text-slate-800 dark:text-slate-200 font-serif leading-relaxed">
                      "{currentProject.caseStudy.testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3 text-xs">
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white">
                          {currentProject.caseStudy.testimonial.author}
                        </div>
                        <div className="text-slate-500 dark:text-slate-400">
                          {currentProject.caseStudy.testimonial.role} · {currentProject.caseStudy.testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: INTERACTIVE PROTOTYPE */}
            {activeTab === 'prototype' && (
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900/40 text-xs sm:text-sm text-indigo-900 dark:text-indigo-200 flex items-center justify-between gap-4">
                  <span>
                    <strong>Interactive Sandbox:</strong> Test live functional state changes, tactile spring response, and responsive component ergonomics.
                  </span>
                  <span className="font-mono text-xs px-2 py-0.5 rounded bg-indigo-600 text-white shrink-0">
                    Live Component
                  </span>
                </div>

                {/* Conditional Live Sandbox based on project */}
                {currentProject.id === 'luminary-financial-os' && (
                  <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-white space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                      <div>
                        <div className="text-xs font-mono text-emerald-400">MARKET: BTC/USD · $94,820.50 (+3.4%)</div>
                        <h4 className="text-base font-bold font-display">Algorithmic Execution Terminal</h4>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setOrderType('limit')}
                          className={`px-3 py-1 text-xs rounded font-medium ${
                            orderType === 'limit' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          Limit Order
                        </button>
                        <button
                          onClick={() => setOrderType('market')}
                          className={`px-3 py-1 text-xs rounded font-medium ${
                            orderType === 'market' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          Market Sweep
                        </button>
                      </div>
                    </div>

                    {/* Order Controls */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs text-slate-400 font-mono">Allocation Size: {tradingQty} Lots</label>
                        <input
                          type="range"
                          min="10"
                          max="250"
                          value={tradingQty}
                          onChange={(e) => setTradingQty(Number(e.target.value))}
                          className="w-full accent-indigo-500"
                        />
                      </div>

                      <div className="space-y-1">
                        <span className="text-xs text-slate-400 font-mono">Simulated Notional Value</span>
                        <div className="text-xl font-bold font-mono text-white tabular-nums">
                          ${(tradingQty * 948.2).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <span className="text-xs text-slate-400 font-mono">Slippage Tolerance</span>
                        <div className="text-xl font-bold font-mono text-emerald-400 tabular-nums">
                          0.02% (Protected)
                        </div>
                      </div>
                    </div>

                    {/* Action Trigger */}
                    <div className="pt-2 flex items-center justify-between gap-4">
                      <div className="text-xs text-slate-400 font-mono">
                        Executed Trades This Session: <span className="text-white font-bold">{executedCount}</span>
                      </div>

                      <button
                        onClick={() => setExecutedCount((c) => c + 1)}
                        className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-all text-xs font-bold text-white shadow-lg shadow-emerald-900/30 flex items-center gap-2"
                      >
                        <TrendingUp className="w-4 h-4" />
                        <span>Execute {tradingQty} Lots</span>
                      </button>
                    </div>
                  </div>
                )}

                {currentProject.id === 'aura-spatial-interface' && (
                  <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-white space-y-6">
                    <div className="text-xs text-slate-400">
                      Hover / Click spatial glass cards to test gaze target convergence and depth parallax:
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[1, 2, 3].map((cardId) => (
                        <div
                          key={cardId}
                          onClick={() => setSpatialGazeActive(cardId)}
                          className={`p-6 rounded-2xl backdrop-blur-xl transition-all duration-300 cursor-pointer text-left border ${
                            spatialGazeActive === cardId
                              ? 'bg-white/15 border-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.35)] scale-105'
                              : 'bg-white/5 border-white/10 hover:border-white/30'
                          }`}
                        >
                          <div className="text-xs font-mono text-sky-400 mb-2">Layer 0{cardId}</div>
                          <h4 className="text-base font-bold mb-1">
                            {cardId === 1 ? 'Spatial Audio Matrix' : cardId === 2 ? 'Eye-Gaze Mesh' : 'Volumetric Canvas'}
                          </h4>
                          <p className="text-xs text-slate-400">
                            Depth Z-plane: {0.6 + cardId * 0.2}m · Refraction: 1.45
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="text-xs font-mono text-slate-400 text-center">
                      Current Focused Gaze Target: <span className="text-sky-300 font-bold">Node 0{spatialGazeActive} (Target Hitbox: 60 arcminutes)</span>
                    </div>
                  </div>
                )}

                {currentProject.id === 'verve-health-ecosystem' && (
                  <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-white space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="text-xs font-mono text-teal-400">CIRCADIAN HORIZON SIMULATOR</div>
                        <h4 className="text-base font-bold">Time of Day: {healthCircadianHour}:00 ({healthCircadianHour < 12 ? 'Morning Alert' : healthCircadianHour < 18 ? 'Focus Peak' : 'Melatonin Wind-down'})</h4>
                      </div>

                      <div className="w-full sm:w-48">
                        <input
                          type="range"
                          min="0"
                          max="23"
                          value={healthCircadianHour}
                          onChange={(e) => setHealthCircadianHour(Number(e.target.value))}
                          className="w-full accent-teal-400"
                        />
                      </div>
                    </div>

                    {/* Biometric Dial Visualizer */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
                        <div className="text-xs text-slate-400 font-mono">Autonomic Recovery</div>
                        <div className="text-3xl font-extrabold text-teal-400 tabular-nums">
                          {Math.round(65 + Math.sin(healthCircadianHour / 3) * 25)}%
                        </div>
                        <div className="text-[11px] text-slate-500">HRV Readiness Score</div>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
                        <div className="text-xs text-slate-400 font-mono">Resting Heart Rate</div>
                        <div className="text-3xl font-extrabold text-white tabular-nums">
                          {Math.round(58 + Math.cos(healthCircadianHour / 4) * 8)} <span className="text-sm font-normal text-slate-400">bpm</span>
                        </div>
                        <div className="text-[11px] text-slate-500">Circadian Wave Tracking</div>
                      </div>

                      <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center space-y-2">
                        <div className="text-xs text-slate-400 font-mono">Cognitive Readiness</div>
                        <div className="text-3xl font-extrabold text-amber-400 tabular-nums">
                          {healthCircadianHour >= 9 && healthCircadianHour <= 17 ? 'Optimal' : 'Resting'}
                        </div>
                        <div className="text-[11px] text-slate-500">Prefrontal Cortical State</div>
                      </div>
                    </div>
                  </div>
                )}

                {currentProject.id !== 'luminary-financial-os' &&
                  currentProject.id !== 'aura-spatial-interface' &&
                  currentProject.id !== 'verve-health-ecosystem' && (
                    <div className="p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-900 text-white space-y-4 text-center">
                      <FileCode2 className="w-8 h-8 text-indigo-400 mx-auto" />
                      <h4 className="text-base font-bold">Interactive Component Playground</h4>
                      <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                        This design system includes pre-compiled design tokens, WCAG contrast curves, and automated Figma sync hooks.
                      </p>
                    </div>
                  )}
              </div>
            )}

            {/* TAB 3: DESIGN TOKENS & PALETTE */}
            {activeTab === 'tokens' && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                    Design System Tokens & Surface Math
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                    Strict contract tokens linking semantic intentions to CSS variables across dark and light canvases.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {currentProject.caseStudy.tokens.map((token, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-semibold text-slate-900 dark:text-slate-100">
                          {token.name}
                        </span>
                        {token.type === 'color' && (
                          <div
                            className="w-5 h-5 rounded-full border border-black/20 dark:border-white/20 shadow-inner"
                            style={{ backgroundColor: token.value }}
                          />
                        )}
                      </div>

                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {token.role}
                      </div>

                      <div className="p-2 rounded bg-slate-100 dark:bg-slate-950 font-mono text-[11px] text-slate-700 dark:text-slate-300 select-all">
                        {token.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Typography Stack */}
                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 space-y-4">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Typographic Contract (The 2+1 Rule)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div>
                      <span className="text-slate-500 block mb-1">Display Headings</span>
                      <span className="font-display font-bold text-base text-slate-900 dark:text-white">
                        Outfit / Bricolage
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        Tight tracking, optical balance
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-500 block mb-1">Body Text</span>
                      <span className="font-sans font-medium text-base text-slate-900 dark:text-white">
                        Plus Jakarta Sans
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        High legibility, 1.6 line height
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-500 block mb-1">Telemetry & Numbers</span>
                      <span className="font-mono font-semibold text-base text-slate-900 dark:text-white">
                        JetBrains Mono
                      </span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">
                        Tabular numbers, zero jitter
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: HIGH-RES GALLERY */}
            {activeTab === 'gallery' && (
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
                  <img
                    src={currentProject.coverImage}
                    alt={`${currentProject.title} Main Stage`}
                    className="w-full h-auto object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {currentProject.secondaryImages && currentProject.secondaryImages.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentProject.secondaryImages.map((img, i) => (
                      <div
                        key={i}
                        className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950"
                      >
                        <img
                          src={img}
                          alt={`${currentProject.title} Detail ${i + 1}`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer / Navigation Between Projects */}
        <div className="h-16 px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-center justify-between shrink-0 text-xs">
          <button
            onClick={() => onSelectProject(prevProject.id)}
            className="flex items-center gap-1.5 font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous:</span>
            <span className="font-semibold text-slate-900 dark:text-slate-200">{prevProject.title}</span>
          </button>

          <span className="text-slate-400 font-mono hidden sm:inline">
            Project {currentIndex + 1} of {PROJECTS.length}
          </span>

          <button
            onClick={() => onSelectProject(nextProject.id)}
            className="flex items-center gap-1.5 font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span className="hidden sm:inline">Next:</span>
            <span className="font-semibold text-slate-900 dark:text-slate-200">{nextProject.title}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
