/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { caseStudies } from '../data/caseStudies';
import { Search, SlidersHorizontal, ArrowRight, X, Sparkles, CheckCircle, Database, Layout } from 'lucide-react';
import { CaseStudy } from '../types';

export default function CaseStudiesView({ isDark }: { isDark: boolean }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  const industries = ['All', 'Healthcare', 'Finance', 'Logistics', 'Education', 'Retail', 'Agriculture', 'Automotive', 'Energy', 'Government', 'Insurance', 'Construction', 'Real Estate', 'Telecommunication', 'Hospitality', 'Travel', 'Cyber Security', 'ERP Solutions'];

  const filteredStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          study.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          study.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesInd = selectedIndustry === 'All' || study.industry === selectedIndustry;

    return matchesSearch && matchesInd;
  });

  return (
    <div className="space-y-12 pb-20 pt-10">
      {/* 1. HERO */}
      <section className="text-center max-w-3xl mx-auto space-y-4 px-6">
        <span className="text-xs font-bold font-mono tracking-widest text-primary uppercase bg-primary/10 px-3.5 py-1.5 rounded-full">
          Historical Accomplishments
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight font-display">Enterprise Case Studies</h1>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-350' : 'text-gray-650'}`}>
          Review our 20+ detailed implementation histories. Learn how we optimize databases, scale cloud native systems, and modernize industrial resource planning.
        </p>
      </section>

      {/* 2. SEARCH & FILTERS */}
      <section className="max-w-7xl mx-auto px-6 space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search by client, title, technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-xl outline-none border text-xs transition-all ${
                isDark 
                  ? 'bg-card-dark border-gray-800 focus:border-primary text-white' 
                  : 'bg-white border-gray-200 focus:border-primary text-gray-950 shadow-sm'
              }`}
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
          </div>

          {/* Industry Filter dropdown on mobile, horizontal scroll on desktop */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            <SlidersHorizontal className="w-4 h-4 text-gray-400 flex-shrink-0" />
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className={`px-3 py-2.5 rounded-xl border text-xs outline-none cursor-pointer ${
                isDark ? 'bg-card-dark border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-700'
              }`}
            >
              {industries.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Categories Quick Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {['All', 'Healthcare', 'Finance', 'Logistics', 'ERP Solutions', 'Cyber Security'].map((pill) => (
            <button
              key={pill}
              onClick={() => setSelectedIndustry(pill)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                selectedIndustry === pill
                  ? 'bg-primary text-white shadow-md'
                  : isDark 
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {pill}
            </button>
          ))}
        </div>
      </section>

      {/* 3. CASE STUDIES GRID */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStudies.map((study) => (
          <div 
            key={study.id}
            className={`p-6 rounded-2xl border flex flex-col justify-between space-y-4 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
              isDark ? 'bg-card-dark border-gray-800 hover:border-gray-700' : 'bg-white border-gray-150 shadow-sm hover:shadow-md'
            }`}
            onClick={() => setSelectedStudy(study)}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-mono bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-md uppercase">
                  {study.industry}
                </span>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">{study.timeline}</span>
              </div>
              <h3 className="font-bold text-sm tracking-tight font-display">{study.title}</h3>
              <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                {study.overview}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-gray-800/10 dark:border-gray-100/10 pt-3 text-[11px]">
              <span className="text-gray-400 font-mono font-medium">CLIENT: {study.client}</span>
              <span className="text-primary hover:text-primary/80 transition-colors flex items-center space-x-1 font-semibold">
                <span>View Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* 4. DETAIL MODAL DIALOG */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div 
            className={`w-full max-w-3xl rounded-3xl p-6 md:p-8 border shadow-2xl relative my-8 transition-all max-h-[90vh] overflow-y-auto ${
              isDark ? 'bg-card-dark border-gray-800 text-white' : 'bg-white border-gray-150 text-gray-900'
            }`}
          >
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute right-5 top-5 p-1.5 rounded-lg hover:bg-gray-800/10 dark:hover:bg-white/10 transition-colors cursor-pointer text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-2 border-b border-gray-800/10 dark:border-gray-100/10 pb-4 pr-10">
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-[9px] font-mono bg-primary/10 text-primary font-bold px-2.5 py-0.5 rounded-md uppercase">
                    {selectedStudy.industry}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">Timeline: {selectedStudy.timeline}</span>
                </div>
                <h2 className="text-2xl font-bold tracking-tight font-display">{selectedStudy.title}</h2>
                <span className="text-xs font-semibold text-gray-400 font-mono uppercase">Client Account: {selectedStudy.client}</span>
              </div>

              {/* Core Context */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold font-mono text-primary uppercase tracking-widest">The Problem</h4>
                  <p className="text-gray-400">{selectedStudy.problem}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold font-mono text-primary uppercase tracking-widest">The Solution</h4>
                  <p className="text-gray-400">{selectedStudy.solution}</p>
                </div>
              </div>

              {/* Challenges */}
              <div className="space-y-3.5">
                <h4 className="text-[10px] font-bold font-mono text-primary uppercase tracking-widest">Key Structural Challenges</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedStudy.challenges.map((ch, idx) => (
                    <div key={idx} className={`p-4 rounded-xl border text-xs leading-normal ${
                      isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-gray-50 border-gray-200'
                    }`}>
                      {ch}
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
                {/* Tech & Architecture */}
                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-gray-900/30 border-gray-800' : 'bg-gray-50 border-gray-100'} space-y-4`}>
                  <div className="flex items-center space-x-2 text-primary">
                    <Database className="w-5 h-5" />
                    <h4 className="font-bold font-display">Systems Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedStudy.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded bg-primary/10 text-primary text-[10px] font-mono font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="border-t border-gray-800/10 dark:border-gray-100/10 pt-3">
                    <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block mb-1">Architecture Outline</span>
                    <p className="text-gray-400 text-[11px] leading-relaxed">{selectedStudy.architecture}</p>
                  </div>
                </div>

                {/* Results & ROI */}
                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-gray-900/30 border-gray-800' : 'bg-gray-50 border-gray-100'} space-y-4`}>
                  <div className="flex items-center space-x-2 text-primary">
                    <CheckCircle className="w-5 h-5" />
                    <h4 className="font-bold font-display">Performance Results</h4>
                  </div>
                  <div className="space-y-2">
                    {selectedStudy.results.map((res, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-[11px]">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-gray-400">{res}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-800/10 dark:border-gray-100/10 pt-3">
                    <span className="text-[9px] font-mono text-accent uppercase tracking-widest block mb-1">Financial ROI</span>
                    <p className="text-accent text-[11px] font-bold font-mono">{selectedStudy.roi}</p>
                  </div>
                </div>
              </div>

              {/* Quote Testimonial */}
              {selectedStudy.testimonial && (
                <div className={`p-5 rounded-2xl border italic text-xs leading-relaxed relative ${
                  isDark ? 'bg-primary/5 border-primary/15 text-gray-300' : 'bg-primary/5 border-primary/10 text-gray-700 shadow-sm'
                }`}>
                  <span className="text-3xl font-serif text-primary absolute left-3 top-2 opacity-25">“</span>
                  <p className="pl-6">{selectedStudy.testimonial.quote}</p>
                  <div className="pl-6 mt-3 flex items-center space-x-2 text-[10px] font-mono not-italic uppercase font-bold text-gray-400">
                    <span>{selectedStudy.testimonial.author}</span>
                    <span>&bull;</span>
                    <span>{selectedStudy.testimonial.role}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
