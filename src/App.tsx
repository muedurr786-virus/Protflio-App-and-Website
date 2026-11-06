/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WorkShowcase } from './components/WorkShowcase';
import { CaseStudyModal } from './components/CaseStudyModal';
import { DesignLab } from './components/DesignLab';
import { DesignProcess } from './components/DesignProcess';
import { ExperienceAndAwards } from './components/ExperienceAndAwards';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('work');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Monitor active scroll section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'philosophy', 'lab', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleOpenContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWork = () => {
    const workEl = document.getElementById('work');
    if (workEl) {
      workEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Top Bar Navigation */}
      <Header
        onOpenContact={handleOpenContact}
        activeSection={activeSection}
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          onExploreWork={handleExploreWork}
          onOpenCaseStudy={(id) => setActiveCaseStudyId(id)}
        />

        {/* Selected Works & Systems Showcase */}
        <WorkShowcase
          onOpenCaseStudy={(id) => setActiveCaseStudyId(id)}
        />

        {/* Design Principles & Chapter Structure */}
        <DesignProcess />

        {/* Interactive Micro-Interactions & Token Lab */}
        <DesignLab />

        {/* Experience Timeline & Industry Honors */}
        <ExperienceAndAwards />

        {/* Attributable Client Proof */}
        <TestimonialsSection />

        {/* Project Inquiry & Scope Builder */}
        <ContactSection
          onSuccessToast={() => triggerToast('Project brief received! Check your inbox soon.')}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Case Study Fullscreen Modal */}
      {activeCaseStudyId && (
        <CaseStudyModal
          projectId={activeCaseStudyId}
          onClose={() => setActiveCaseStudyId(null)}
          onSelectProject={(id) => setActiveCaseStudyId(id)}
        />
      )}

      {/* Notification Toast */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold shadow-2xl border border-slate-700 dark:border-slate-200 animate-in fade-in slide-in-from-bottom-2 duration-200">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
