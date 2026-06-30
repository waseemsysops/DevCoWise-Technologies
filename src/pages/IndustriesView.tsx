/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { industriesData } from '../data/industries';
import { Activity, Landmark, ShoppingBag, Cpu, Truck, Check, HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';

interface IndustriesViewProps {
  isDark: boolean;
  setCurrentTab: (tab: string) => void;
  initialSelected?: string;
}

export default function IndustriesView({ isDark, setCurrentTab, initialSelected }: IndustriesViewProps) {
  const [selectedInd, setSelectedInd] = useState<string>(initialSelected || 'healthcare');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  React.useEffect(() => {
    if (initialSelected) {
      setSelectedInd(initialSelected);
    }
  }, [initialSelected]);

  const iconsMap: { [key: string]: any } = {
    healthcare: Activity,
    finance: Landmark,
    retail: ShoppingBag,
    manufacturing: Cpu,
    logistics: Truck
  };

  const current = industriesData.find(ind => ind.id === selectedInd) || industriesData[0];
  const CurrentIcon = iconsMap[current.id] || Activity;

  const faqs = [
    {
      q: "How does DEVCOWISE manage compliance in industry migrations?",
      a: "Our compliance architects review data structures prior to write cycles. We enforce strict data localization, HIPAA boundaries, and GDPR-compliant storage encryption structures inside secure pipelines."
    },
    {
      q: "Can we integrate open-core ERP tools with our current legacy mainframe?",
      a: "Absolutely. We construct customized GraphQL or REST API gateways that fetch ledger logs from legacy DB2 or Oracle mainframes, syncing records to modern databases with zero downtime."
    },
    {
      q: "What is the typical timeline for an AI RAG deployment?",
      a: "Scoping and data pipeline assembly requires 4-6 weeks. Custom model engineering, private database vectorization, and guardrail validations take an additional 6-8 weeks, followed by security audits."
    }
  ];

  return (
    <div className="space-y-20 pb-20 pt-10">
      {/* 1. HERO */}
      <section className="text-center max-w-3xl mx-auto space-y-6 px-6">
        <span className="text-xs font-bold font-mono tracking-widest text-primary uppercase bg-primary/10 px-3.5 py-1.5 rounded-full">
          Sector Classifications
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight font-display">Global Industry Solutions</h1>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          Click on any industrial vertical below to view our comprehensive systems analysis, custom challenges, benefits, and validated success stories.
        </p>
      </section>

      {/* 2. INDUSTRY SELECTOR BUTTONS */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {industriesData.map((ind) => {
            const Icon = iconsMap[ind.id] || Activity;
            return (
              <button
                key={ind.id}
                onClick={() => {
                  setSelectedInd(ind.id);
                  setActiveFaq(null);
                }}
                className={`px-6 py-3 rounded-xl border flex items-center space-x-2.5 transition-all text-xs font-semibold cursor-pointer ${
                  selectedInd === ind.id
                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                    : isDark
                      ? 'bg-card-dark border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800'
                      : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-950 hover:shadow-sm'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. DETAILED LANDING PAGE CONTENT */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side: Overview & Success */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-primary">
              <div className="p-3 rounded-xl bg-primary/10">
                <CurrentIcon className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight font-display">{current.name}</h2>
            </div>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {current.overview}
            </p>
          </div>

          {/* Success Story Box */}
          <div className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-800/20 border-gray-800' : 'bg-gray-50 border-gray-200 shadow-sm'}`}>
            <span className="text-[10px] font-bold font-mono text-primary uppercase tracking-widest block mb-1">Sector Case Study Validation</span>
            <h4 className="font-bold text-sm font-display">{current.successStory.client}</h4>
            <p className="text-xs text-gray-400 mt-2 leading-relaxed">
              {current.successStory.description}
            </p>
            <div className="flex items-center space-x-1.5 mt-4 text-accent text-xs font-bold font-mono">
              <Check className="w-4 h-4" />
              <span>IMPACT: {current.successStory.impact}</span>
            </div>
          </div>

          {/* Technology Stack Grid */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold font-mono tracking-widest text-primary uppercase">Specialized Technology Stack</h4>
            <div className="flex flex-wrap gap-2">
              {current.techStack.map((tech, idx) => (
                <span key={idx} className={`px-3 py-1.5 rounded-xl text-xs font-medium font-mono ${
                  isDark ? 'bg-gray-800/50 text-gray-300' : 'bg-white border border-gray-200 text-gray-600'
                }`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Challenges & Solutions & Benefits */}
        <div className="lg:col-span-7 space-y-8">
          {/* Challenges & Solutions Table */}
          <div className={`p-6 rounded-3xl border space-y-6 ${isDark ? 'bg-card-dark border-gray-800' : 'bg-white border-gray-100 shadow-lg'}`}>
            <div className="space-y-4">
              <h3 className="font-bold text-sm tracking-wide font-mono text-primary uppercase">Sector Challenges vs. Core Solutions</h3>
              
              <div className="space-y-4 divide-y divide-gray-800/10 dark:divide-gray-100/10">
                {current.challenges.map((ch, idx) => (
                  <div key={idx} className="pt-4 first:pt-0 space-y-2">
                    <div className="flex items-start space-x-2 text-rose-500 font-semibold text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 flex-shrink-0"></div>
                      <span>Challenge: {ch}</span>
                    </div>
                    <div className="flex items-start space-x-2 text-accent font-semibold text-xs pl-3.5">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>Solution: {current.solutions[idx]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="border-t border-gray-800/10 dark:border-gray-100/10 pt-6 space-y-3">
              <h4 className="text-[10px] font-bold font-mono tracking-widest text-primary uppercase">Validated Economic Benefits</h4>
              <div className="space-y-2">
                {current.benefits.map((bf, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs">
                    <Check className="w-4 h-4 text-accent" />
                    <span className="text-gray-400">{bf}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTOR FAQS */}
      <section className="max-w-4xl mx-auto px-6 space-y-6">
        <h3 className="text-xl font-bold tracking-tight text-center font-display">Frequently Asked Scoping Questions</h3>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl overflow-hidden transition-all ${
                isDark ? 'bg-card-dark border-gray-800' : 'bg-white border-gray-200 shadow-sm'
              }`}
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full text-left px-5 py-4 flex items-center justify-between text-xs font-semibold hover:bg-primary/5 transition-colors cursor-pointer"
              >
                <span className="flex items-center space-x-2">
                  <HelpCircle className="w-4 h-4 text-primary" />
                  <span>{faq.q}</span>
                </span>
                <ChevronDown className={`w-4 h-4 opacity-50 transition-transform ${activeFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              {activeFaq === idx && (
                <div className={`px-5 py-4 text-xs leading-relaxed border-t border-gray-800/10 dark:border-gray-100/10 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 5. SECTOR CTA */}
      <section className="max-w-7xl mx-auto px-6 text-center">
        <div className={`p-8 rounded-3xl border space-y-4 ${
          isDark ? 'bg-card-dark border-gray-800' : 'bg-gray-50 border-gray-200 shadow-md'
        }`}>
          <h3 className="text-lg font-bold font-display">Require a Bespoke Operations Scoping Document?</h3>
          <p className="text-xs text-gray-400 max-w-lg mx-auto leading-relaxed">
            Our global engineering labs offer comprehensive code audits, database schema maps, and systems migration blueprints for your industry.
          </p>
          <button
            onClick={() => setCurrentTab('contact')}
            className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary/95 shadow transition-all cursor-pointer inline-flex items-center space-x-1"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Connect with Sector Architects</span>
          </button>
        </div>
      </section>
    </div>
  );
}
