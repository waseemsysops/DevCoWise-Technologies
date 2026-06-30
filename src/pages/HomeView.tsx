/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight, CheckCircle, Cpu, ShieldAlert, Sparkles, BarChart2, Globe, Users, Trophy } from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

interface HomeViewProps {
  setCurrentTab: (tab: string) => void;
  isDark: boolean;
}

export default function HomeView({ setCurrentTab, isDark }: HomeViewProps) {
  const stats = [
    { label: 'Successful Deployments', val: '450+', desc: 'Across 18 industries', icon: CheckCircle },
    { label: 'Core Technical Staff', val: '180+', desc: 'Specialized engineers', icon: Users },
    { label: 'Client Retention Index', val: '98.6%', desc: 'Long-term corporate partnerships', icon: Trophy },
    { label: 'Global Offices', val: '8 Countries', desc: 'EMEA & APAC coverage', icon: Globe }
  ];

  const valueProps = [
    {
      title: 'Architectural Sovereignty',
      desc: 'We engineer zero-trust, server-authoritative models that protect operational integrity and insulate client datasets.',
      icon: ShieldAlert
    },
    {
      title: 'Open-Core ERP Pioneers',
      desc: 'Specialized deployments of ERPNext, Odoo, and S/4HANA that eliminate excessive recurring license liabilities.',
      icon: Cpu
    },
    {
      title: 'Agentic AI Workflows',
      desc: 'Constructing robust background pipelines utilizing secure, server-side APIs to drive industrial productivity.',
      icon: Sparkles
    }
  ];

  const processes = [
    { step: '01', title: 'Consulting & Scoping', desc: 'We conduct strict system audits to analyze data schemas and identify operational bottlenecks.' },
    { step: '02', title: 'Security Safeguards', desc: 'Formulate zero-trust blueprints and access matrices prior to writing code lines.' },
    { step: '03', title: 'Agile Engineering Sprints', desc: 'Our specialized development teams build scalable codebases inside containerized clusters.' },
    { step: '04', title: 'Zero-Downtime Migration', desc: 'Secure data synchronization pipelines replace legacy backends without workflow interruption.' }
  ];

  const featuredStudies = caseStudies.slice(0, 3);

  return (
    <div className="space-y-24 pb-20 pt-10">
      {/* 1. HERO BANNER */}
      <section className="relative min-h-[85vh] flex items-center">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 z-0 opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke={isDark ? '#1F2937' : '#E5E7EB'} strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Ambient Gradient Blobs */}
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-primary/10 blur-3xl z-0 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl z-0"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 w-full items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary text-xs font-semibold px-3.5 py-1.5 rounded-full font-mono uppercase tracking-widest">
              <Sparkles className="w-4 h-4 text-accent" />
              <span>Engineering Digital Transformation</span>
            </div>
            
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-display ${
              isDark ? 'text-white' : 'text-gray-950'
            }`}>
              Enterprise Consulting Built For <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Next-Generation</span> Scaling.
            </h1>
            
            <p className={`text-base sm:text-lg max-w-xl leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              DEVCOWISE orchestrates robust custom software engineering, zero-trust cloud migrations, generative AI models, and tailored ERPNext implementations that drive global enterprise modernization.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setCurrentTab('contact')}
                className="px-8 py-3.5 rounded-xl bg-primary hover:bg-primary/95 text-white font-semibold text-sm shadow-lg shadow-primary/20 transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Request Core Systems Audit</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentTab('services')}
                className={`px-8 py-3.5 rounded-xl font-semibold text-sm border transition-all cursor-pointer flex items-center justify-center ${
                  isDark 
                    ? 'border-gray-800 text-gray-300 bg-gray-900/40 hover:text-white hover:bg-gray-800' 
                    : 'border-gray-200 text-gray-700 bg-white hover:text-gray-900 hover:shadow-md'
                }`}
              >
                Explore Services Directory
              </button>
            </div>
          </div>

          {/* Interactive Hero Graphical Asset */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className={`p-8 rounded-3xl border relative overflow-hidden ${
              isDark ? 'bg-card-dark border-gray-800' : 'bg-white border-gray-100 shadow-xl'
            }`}>
              {/* Graphic container */}
              <div className="h-64 flex items-center justify-center relative">
                {/* Visual gears/circles */}
                <div className="w-40 h-40 rounded-full border border-dashed border-primary/40 flex items-center justify-center animate-spin [animation-duration:30s]">
                  <div className="w-28 h-28 rounded-full border border-dotted border-secondary/40 flex items-center justify-center animate-spin [animation-duration:15s] reverse">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/25">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                {/* Floating data dots */}
                <div className="absolute top-10 left-10 p-3 rounded-xl bg-accent/10 border border-accent/20 text-accent font-mono text-xs flex items-center space-x-1.5 shadow-md">
                  <div className="w-2 h-2 rounded-full bg-accent animate-ping"></div>
                  <span>AI PIPELINES</span>
                </div>
                <div className="absolute bottom-8 right-10 p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary font-mono text-xs flex items-center space-x-1.5 shadow-md">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span>SECURE ERP CORE</span>
                </div>
              </div>
              <div className="border-t border-gray-800/10 dark:border-gray-100/10 pt-4 text-center">
                <span className="text-xs font-mono tracking-widest text-gray-400 block uppercase mb-1">DEVCOWISE CORE ENGINE</span>
                <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-950'}`}>Modern Architecture Sovereignty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATISTICS COUNTER */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl border ${
                  isDark ? 'bg-card-dark border-gray-800' : 'bg-white border-gray-150 shadow-sm'
                } space-y-3`}
              >
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold tracking-tight font-display">{st.val}</h3>
                  <p className={`text-xs font-bold mt-1 ${isDark ? 'text-gray-300' : 'text-gray-950'}`}>{st.label}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{st.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. WHY CHOOSE DEVCOWISE */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold font-mono tracking-widest text-primary uppercase block">Architectural Excellence</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display">Engineering High-Impact Sovereignty</h2>
          <p className="text-xs text-gray-400">We construct standard-setting solutions designed for corporate growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((vp, idx) => {
            const Icon = vp.icon;
            return (
              <div 
                key={idx} 
                className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  isDark ? 'bg-card-dark border-gray-800 hover:border-gray-700' : 'bg-white border-gray-150 shadow-sm hover:shadow-lg'
                } space-y-4`}
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold font-display">{vp.title}</h3>
                <p className="text-xs leading-relaxed text-gray-400">{vp.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. DIGITAL TRANSFORMATION DEVELOPMENT PROCESS */}
      <section className={`py-16 border-y ${isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold font-mono tracking-widest text-primary uppercase block">Systems Implementation Map</span>
              <h2 className="text-3xl font-bold tracking-tight mt-1 font-display">How We Deploy Enterprise Core</h2>
            </div>
            <p className="text-xs text-gray-400 max-w-sm leading-relaxed">
              We leverage clean workflows to optimize architectures and assure high performance with zero system disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processes.map((pr, idx) => (
              <div 
                key={idx} 
                className={`p-6 rounded-2xl border relative ${
                  isDark ? 'bg-card-dark border-gray-800' : 'bg-white border-gray-100 shadow-sm'
                } space-y-4`}
              >
                <span className="text-3xl font-extrabold font-mono text-primary/15 absolute top-4 right-4">{pr.step}</span>
                <h3 className="text-sm font-bold pt-4 font-display">{pr.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{pr.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GLOBAL CO-ORDINATES PRESENCE */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-bold font-mono tracking-widest text-primary uppercase block">Worldwide Connectivity</span>
          <h2 className="text-3xl font-bold tracking-tight font-display">Connecting Key Technological Sectors</h2>
          <p className="text-xs leading-relaxed text-gray-400">
            With centralized engineering labs and operational offices in Pakistan, UAE, Saudi Arabia, UK, US, Canada, and Australia, we maintain 24/7 coverage for critical system operations.
          </p>
          <div className="space-y-3 text-xs font-semibold">
            {[
              { loc: 'Riyadh, Saudi Arabia', role: 'Headquarters MENA' },
              { loc: 'Islamabad, Pakistan', role: 'Global Systems Lab' },
              { loc: 'London, United Kingdom', role: 'Core Operations EMEA' },
              { loc: 'Toronto, Canada', role: 'Americas Delivery Hub' }
            ].map((loc, idx) => (
              <div key={idx} className="flex items-center space-x-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <span className={isDark ? 'text-gray-200' : 'text-gray-800'}>{loc.loc}</span>
                <span className="text-[10px] font-mono text-gray-400 uppercase font-medium">({loc.role})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Clean SVG Global Network Geometry */}
        <div className="lg:col-span-7">
          <div className={`p-6 rounded-3xl border flex items-center justify-center relative ${
            isDark ? 'bg-card-dark border-gray-800' : 'bg-white border-gray-150 shadow-lg'
          }`}>
            <svg viewBox="0 0 400 200" className="w-full h-auto text-primary" fill="currentColor">
              {/* Simplified stylized outline maps */}
              <path d="M50,100 Q100,50 150,100 T250,100 T350,100" fill="none" stroke={isDark ? '#1F2937' : '#E2E8F0'} strokeWidth="1.5" />
              <path d="M100,140 Q180,80 260,140" fill="none" stroke={isDark ? '#1F2937' : '#E2E8F0'} strokeWidth="1.5" />
              
              {/* Intersecting connection lines */}
              <line x1="70" y1="90" x2="180" y2="120" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.6" />
              <line x1="180" y1="120" x2="250" y2="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.6" />
              <line x1="250" y1="80" x2="330" y2="110" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.6" />
              <line x1="70" y1="90" x2="250" y2="80" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.6" />

              {/* Pins */}
              {[
                { x: 70, y: 90, name: 'London, UK' },
                { x: 180, y: 120, name: 'Islamabad, PK' },
                { x: 250, y: 80, name: 'Riyadh, KSA' },
                { x: 330, y: 110, name: 'Sydney, AU' }
              ].map((pin, index) => (
                <g key={index}>
                  <circle cx={pin.x} cy={pin.y} r="5" fill="#0057FF" className="animate-pulse" />
                  <circle cx={pin.x} cy={pin.y} r="2" fill="#00D084" />
                  <text x={pin.x - 20} y={pin.y - 10} fontSize="8" fontFamily="monospace" fill={isDark ? '#9CA3AF' : '#4B5563'}>
                    {pin.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION FOR SCRATCHPAD SCANS */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-tr from-primary via-primary to-secondary text-white relative overflow-hidden shadow-xl shadow-primary/20">
          <div className="absolute inset-0 z-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="ctaGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                <rect width="30" height="30" fill="none" stroke="#FFF" strokeWidth="1" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#ctaGrid)" />
            </svg>
          </div>
          <div className="relative z-10 max-w-xl space-y-4">
            <span className="text-[10px] font-bold font-mono tracking-widest uppercase bg-white/10 px-3.5 py-1.5 rounded-full w-fit block">
              Global Systems Scoping
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-display">
              Ready to execute digital transformation?
            </h2>
            <p className="text-xs text-white/80 leading-relaxed">
              Partner with DEVCOWISE to implement high-throughput, compliant databases, tailored ERP modules, and modern web systems. Contact our core architects to schedule an audit.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setCurrentTab('contact')}
                className="px-6 py-3 rounded-xl bg-white text-primary hover:bg-white/95 font-semibold text-xs transition-all cursor-pointer shadow-lg shadow-black/10 flex items-center space-x-1"
              >
                <span>Initiate Engineering Proposals</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
