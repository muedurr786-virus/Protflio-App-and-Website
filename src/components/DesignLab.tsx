import React, { useState } from 'react';
import { Sliders, Sparkles, RefreshCw, Check, ArrowRight, Play, Eye } from 'lucide-react';

export const DesignLab: React.FC = () => {
  // Token state
  const [selectedRadius, setSelectedRadius] = useState<'0px' | '6px' | '12px' | '24px'>('12px');
  const [selectedAccent, setSelectedAccent] = useState<string>('#6366F1');
  const [buttonStiffness, setButtonStiffness] = useState<number>(300);
  const [buttonDamping, setButtonDamping] = useState<number>(20);
  const [interactionCount, setInteractionCount] = useState<number>(0);
  const [isPressing, setIsPressing] = useState<boolean>(false);
  const [opticalCompensation, setOpticalCompensation] = useState<boolean>(true);

  const accentPalette = [
    { label: 'Indigo Core', hex: '#6366F1' },
    { label: 'Emerald Yield', hex: '#10B981' },
    { label: 'Cyan Vision', hex: '#0284C7' },
    { label: 'Amber Kinetic', hex: '#F59E0B' },
    { label: 'Rose Accent', hex: '#F43F5E' },
  ];

  return (
    <section id="lab" className="py-20 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-2">
              Design Systems & Physics
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Interactive Design Engineering Lab
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md">
            Test live token bindings, spring damping physics, and dark mode typographic compensation in a real-time reactive sandbox.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Panel */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
                <Sliders className="w-4 h-4 text-indigo-500" />
                <span>Token Variables</span>
              </h3>

              {/* Accent Color Token */}
              <div className="space-y-2.5">
                <label className="text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center justify-between">
                  <span>Semantic Accent Token</span>
                  <span className="font-mono text-slate-400">{selectedAccent}</span>
                </label>
                <div className="flex items-center gap-2.5">
                  {accentPalette.map((item) => (
                    <button
                      key={item.hex}
                      onClick={() => setSelectedAccent(item.hex)}
                      aria-label={item.label}
                      className="w-8 h-8 rounded-full border-2 transition-transform relative flex items-center justify-center"
                      style={{
                        backgroundColor: item.hex,
                        borderColor: selectedAccent === item.hex ? '#ffffff' : 'transparent',
                        transform: selectedAccent === item.hex ? 'scale(1.15)' : 'scale(1)',
                      }}
                    >
                      {selectedAccent === item.hex && (
                        <Check className="w-3.5 h-3.5 text-white" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Corner Radius Math */}
              <div className="space-y-2.5">
                <label className="text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center justify-between">
                  <span>Surface Radius Token</span>
                  <span className="font-mono text-slate-400">{selectedRadius}</span>
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {(['0px', '6px', '12px', '24px'] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => setSelectedRadius(r)}
                      className={`py-2 text-xs font-mono rounded-md border transition-all ${
                        selectedRadius === r
                          ? 'border-indigo-600 bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-500 font-bold'
                          : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              {/* Spring Physics Knobs */}
              <div className="space-y-4 pt-2 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between text-xs font-medium text-slate-700 dark:text-slate-300">
                  <span>Spring Stiffness: {buttonStiffness}</span>
                  <span className="text-slate-400 font-mono">Damping: {buttonDamping}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="range"
                    min="100"
                    max="500"
                    step="20"
                    value={buttonStiffness}
                    onChange={(e) => setButtonStiffness(Number(e.target.value))}
                    className="accent-indigo-500 w-full"
                  />
                  <input
                    type="range"
                    min="10"
                    max="40"
                    step="2"
                    value={buttonDamping}
                    onChange={(e) => setButtonDamping(Number(e.target.value))}
                    className="accent-indigo-500 w-full"
                  />
                </div>
              </div>

              {/* Optical Compensation Toggle */}
              <div className="pt-2 flex items-center justify-between">
                <div className="text-xs">
                  <span className="font-medium text-slate-900 dark:text-white block">
                    Dark Mode Optical Kerning
                  </span>
                  <span className="text-slate-500 text-[11px]">
                    Increases letter spacing by +0.015em to counter dark-mode spindliness
                  </span>
                </div>
                <button
                  onClick={() => setOpticalCompensation(!opticalCompensation)}
                  className={`w-11 h-6 rounded-full transition-colors relative p-0.5 ${
                    opticalCompensation ? 'bg-indigo-600' : 'bg-slate-300 dark:bg-slate-700'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-full bg-white transition-transform ${
                      opticalCompensation ? 'translate-x-5' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
              <span>Token Sync Status</span>
              <span className="font-mono text-emerald-500">Live Reactive State</span>
            </div>
          </div>

          {/* Live Preview Canvas */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-950 text-white flex flex-col justify-between space-y-8">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
                <span>SIMULATED UI COMPONENT ARRAY</span>
                <span>TOKENS APPLIED</span>
              </div>

              {/* Live Rendered Card with user tokens */}
              <div
                className="mt-6 p-6 border transition-all duration-200 space-y-6"
                style={{
                  borderRadius: selectedRadius,
                  borderColor: `${selectedAccent}40`,
                  backgroundColor: '#0c0f1d',
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span
                      className="text-xs font-mono font-semibold"
                      style={{ color: selectedAccent }}
                    >
                      QUANTIFIED PERFORMANCE METRIC
                    </span>
                    <h3
                      className={`text-xl font-bold font-display ${
                        opticalCompensation ? 'tracking-wide' : 'tracking-normal'
                      }`}
                    >
                      Autonomous Portfolio Rebalance
                    </h3>
                  </div>

                  <div className="text-2xl font-extrabold font-mono tabular-nums text-white">
                    $842,500.00
                  </div>
                </div>

                <p
                  className={`text-xs sm:text-sm text-slate-300 leading-relaxed ${
                    opticalCompensation ? 'tracking-wide' : 'tracking-normal'
                  }`}
                >
                  The tokens you adjust on the left instantly govern the geometry, tactile feedback, and visual hierarchy of this production card.
                </p>

                {/* Interactive Spring Button */}
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onMouseDown={() => setIsPressing(true)}
                    onMouseUp={() => {
                      setIsPressing(false);
                      setInteractionCount((c) => c + 1);
                    }}
                    onMouseLeave={() => setIsPressing(false)}
                    style={{
                      borderRadius: selectedRadius,
                      backgroundColor: selectedAccent,
                      transform: isPressing ? 'scale(0.92)' : 'scale(1)',
                      transition: `transform ${1000 / buttonStiffness}s cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
                    }}
                    className="px-6 py-3 text-xs font-bold text-white shadow-lg flex items-center gap-2 select-none active:brightness-95 cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Test Spring Physics Press</span>
                  </button>

                  <div className="text-xs font-mono text-slate-400">
                    Clicks: <span className="text-white font-bold">{interactionCount}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Token Output JSON */}
            <div className="p-4 rounded-xl bg-black/60 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
              <span className="text-slate-500">// Generated CSS Custom Properties:</span>
              <pre className="mt-1 text-[11px] leading-relaxed">
{`:root {
  --token-accent: ${selectedAccent};
  --token-radius: ${selectedRadius};
  --token-physics: spring(${buttonStiffness}, ${buttonDamping});
  --token-kerning: ${opticalCompensation ? '0.015em' : 'normal'};
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
