import React, { useState } from 'react';
import { ArrowUpRight, LayoutGrid, Rows, Grid3X3, Layers, Sparkles, Filter } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { PROJECTS } from '../data/projects';

interface WorkShowcaseProps {
  onOpenCaseStudy: (projectId: string) => void;
}

export const WorkShowcase: React.FC<WorkShowcaseProps> = ({ onOpenCaseStudy }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [viewMode, setViewMode] = useState<'bento' | 'editorial' | 'list'>('bento');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: 'All Projects' },
    { key: 'product', label: 'Product & Fintech' },
    { key: 'spatial', label: 'Spatial & 3D' },
    { key: 'mobile', label: 'Mobile & Health' },
    { key: 'branding', label: 'Brand & Motion' },
    { key: 'systems', label: 'Design Systems' },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesQuery =
      searchQuery.trim() === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="work" className="py-20 border-t border-slate-200 dark:border-slate-800/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold tracking-wider text-indigo-600 dark:text-indigo-400 uppercase mb-2">
              Selected Works
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">
              Featured Case Studies & Systems
            </h2>
          </div>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-md">
            Rigorous design engineering across multi-currency financial trading, spatial gaze tracking, and enterprise token architectures.
          </p>
        </div>

        {/* Filter Bar & View Layout Switcher (Interactive controls are allowed functional buttons) */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200 dark:border-slate-800/60">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.key
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-2 shrink-0 self-end lg:self-auto">
            <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
              Layout:
            </span>
            <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <button
                onClick={() => setViewMode('bento')}
                aria-label="Bento Grid View"
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'bento'
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('editorial')}
                aria-label="Editorial Grid View"
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'editorial'
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                aria-label="List View"
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'list'
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Rows className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              No design projects match this category filter.
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-3 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              Reset to all projects
            </button>
          </div>
        )}

        {/* 1. Bento Grid Layout */}
        {viewMode === 'bento' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => onOpenCaseStudy(project.id)}
                className={`group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 flex flex-col cursor-pointer ${
                  project.bentoSpan ? project.bentoSpan : 'col-span-1'
                }`}
              >
                {/* Image Container with Fallback */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback container
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                  {/* Top quick badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">
                      {project.year}
                    </span>
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 group-hover:bg-indigo-600 transition-colors">
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Overlaid Bottom Title on Big Cards */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs text-slate-300 font-medium mb-1">
                      {project.client} · {project.categoryLabel}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content & Metadata */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Key Metrics Strip (Unboxed metadata with separators) */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2 text-xs">
                      <div>
                        <span className="text-base font-bold text-slate-900 dark:text-white font-display tabular-nums">
                          {project.metrics[0].value}
                        </span>
                        <span className="block text-[11px] text-slate-500 dark:text-slate-400">
                          {project.metrics[0].label}
                        </span>
                      </div>

                      {project.metrics[1] && (
                        <div className="hidden sm:block">
                          <span className="text-base font-bold text-slate-900 dark:text-white font-display tabular-nums">
                            {project.metrics[1].value}
                          </span>
                          <span className="block text-[11px] text-slate-500 dark:text-slate-400">
                            {project.metrics[1].label}
                          </span>
                        </div>
                      )}

                      <div className="text-right">
                        <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 justify-end">
                          Read Process
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Unboxed Tags (Anti-slop rule: no static pill capsules) */}
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400 pt-1">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <React.Fragment key={tag}>
                        <span>{tag}</span>
                        {i < Math.min(project.tags.length, 3) - 1 && (
                          <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. Editorial Grid View */}
        {viewMode === 'editorial' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => onOpenCaseStudy(project.id)}
                className="group cursor-pointer space-y-4"
              >
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span>{project.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.client}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display group-hover:text-indigo-500 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500" />
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. Detailed List View */}
        {viewMode === 'list' && (
          <div className="divide-y divide-slate-200 dark:divide-slate-800 border-t border-b border-slate-200 dark:border-slate-800">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onOpenCaseStudy(project.id)}
                className="group py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-900/40 px-3 rounded-lg transition-colors cursor-pointer"
              >
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span>{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.client}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-indigo-600 dark:text-indigo-400">{project.categoryLabel}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-display group-hover:text-indigo-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl line-clamp-1">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-6 self-start md:self-auto shrink-0">
                  <div className="text-right hidden sm:block">
                    <span className="text-sm font-bold text-slate-900 dark:text-white font-display tabular-nums">
                      {project.metrics[0].value}
                    </span>
                    <span className="block text-[11px] text-slate-500">
                      {project.metrics[0].label}
                    </span>
                  </div>

                  <button
                    className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all"
                    aria-label={`Open ${project.title} case study`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
