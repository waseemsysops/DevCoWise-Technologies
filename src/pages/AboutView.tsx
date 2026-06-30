/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Users, Award, Shield, Target, Compass, Milestone, Heart } from 'lucide-react';

export default function AboutView({ isDark }: { isDark: boolean }) {
  const values = [
    { title: 'Engineering Rigor', desc: 'We write robust, self-documenting code built for high concurrency and failproof data transactions.', icon: Shield },
    { title: 'Client Sovereignty', desc: 'Your operational data, architecture diagrams, and custom modules remain 100% proprietary to your enterprise.', icon: Target },
    { title: 'Security First', desc: 'Zero-trust microservice segments, continuous encryption, and multi-factor matrices protect all systems.', icon: Compass },
    { title: 'Ethical Transparency', desc: 'We prioritize honest open-core platforms that insulate our clients from aggressive licensing structures.', icon: Heart }
  ];

  const leadership = [
    { name: 'Asim Jahangir', role: 'Chief Executive Officer', bio: 'Former Principal Architect with 18+ years leading enterprise ERP overhauls and global banking modernizations.', img: 'AJ' },
    { name: 'Dr. Sarah Jenkins', role: 'Head of AI Engineering', bio: 'Expert in secure LLM RAG design and machine-learning telemetry with extensive experience in federal advisory roles.', img: 'SJ' },
    { name: 'Richard Sterling', role: 'Principal Cloud & Security Architect', bio: 'Specializes in Kubernetes scheduling, container meshes, and setting zero-trust network baselines.', img: 'RS' },
    { name: 'Zara Al-Mansoor', role: 'Lead UI/UX strategist', bio: 'Bridges deep technical schemas with beautiful user interfaces and responsive, accessible workflows.', img: 'ZM' }
  ];

  const milestones = [
    { year: '2018', title: 'System Founding', desc: 'DEVCOWISE established with a core lab in Islamabad focusing on custom PostgreSQL backend systems.' },
    { year: '2020', title: 'ERPNext partnership', desc: 'Certified as global open-core ERP integration partners; launched multi-tenant solutions across MENA.' },
    { year: '2022', title: 'Cloud Native Pivot', desc: 'Migrated over 40 core banking and medical monolith databases to Kubernetes-orchestrated cloud layers.' },
    { year: '2024', title: 'AI Orchestration Lab', desc: 'Inaugurated a dedicated Generative AI lab delivering secure, private server-side agent workflows.' },
    { year: '2026', title: 'Enterprise Standard', desc: 'Providing active engineering services across 8 countries for global leaders in supply chain and healthcare.' }
  ];

  return (
    <div className="space-y-24 pb-20 pt-10">
      {/* 1. OVERVIEW */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary text-xs font-semibold px-3.5 py-1.5 rounded-full font-mono uppercase tracking-widest">
            <Users className="w-4 h-4" />
            <span>Corporate Identity</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight font-display">Engineering Digital Sovereignty</h1>
          <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-650'}`}>
            DEVCOWISE is a global enterprise technology consulting firm. We replace expensive, black-box legacy systems with optimized, highly resilient, open-core cloud architectures, customized ERP tools, and secure generative AI models.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Our teams represent specialized software engineers, database administrators, and security specialists committed to helping modern enterprises scale confidently.
          </p>
        </div>
        {/* Decorative Grid */}
        <div className={`p-8 rounded-3xl border flex items-center justify-center relative min-h-[250px] ${
          isDark ? 'bg-card-dark border-gray-800' : 'bg-white border-gray-150 shadow-lg'
        }`}>
          <div className="text-center space-y-4">
            <Award className="w-12 h-12 text-primary mx-auto animate-bounce" />
            <h3 className="font-bold text-lg font-display">Certified Quality Standards</h3>
            <p className="text-xs text-gray-400 max-w-xs mx-auto">
              ISO 27001 (Information Security), SOC 2 Type II compliant pipelines, and certified global ERPNext & Odoo developers.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MISSION & VISION */}
      <section className={`py-16 border-y ${isDark ? 'bg-gray-900/20 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <span className="text-xs font-bold font-mono text-primary uppercase tracking-widest block">The Mission</span>
            <h3 className="text-2xl font-bold tracking-tight font-display">Unlocking Operational Capacity</h3>
            <p className="text-xs leading-relaxed text-gray-400">
              To empower global enterprises through custom software development and scalable architectures that lower operation overheads and eliminate licensing constraints.
            </p>
          </div>
          <div className="space-y-4">
            <span className="text-xs font-bold font-mono text-primary uppercase tracking-widest block">The Vision</span>
            <h3 className="text-2xl font-bold tracking-tight font-display">A Sovereign Open-Core Future</h3>
            <p className="text-xs leading-relaxed text-gray-400">
              To establish a worldwide software ecosystem where businesses control their database structures, AI nodes, and software assets securely.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUES */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold font-mono text-primary uppercase tracking-widest block">Organizational Core</span>
          <h2 className="text-3xl font-bold tracking-tight font-display">Values That Drive Every Line of Code</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className={`p-6 rounded-2xl border ${
                isDark ? 'bg-card-dark border-gray-800' : 'bg-white border-gray-150 shadow-sm'
              } space-y-3`}>
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm font-display">{val.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. EXECUTIVE COMMITTEE */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold font-mono text-primary uppercase tracking-widest block">Corporate Governance</span>
          <h2 className="text-3xl font-bold tracking-tight font-display">Meet Our Core Architects</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((lead, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border flex flex-col justify-between ${
              isDark ? 'bg-card-dark border-gray-800' : 'bg-white border-gray-150 shadow-sm'
            } h-72`}>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
                    {lead.img}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm font-display">{lead.name}</h3>
                    <span className="text-[10px] font-mono text-primary uppercase tracking-wider block font-semibold">{lead.role}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-4">{lead.bio}</p>
              </div>
              <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest border-t border-gray-800/10 dark:border-gray-100/10 pt-3">
                SECURE ID CERTIFIED
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold font-mono text-primary uppercase tracking-widest block">Corporate History</span>
          <h2 className="text-3xl font-bold tracking-tight font-display">System Milestones & Growth</h2>
        </div>

        <div className="relative border-l-2 border-primary/25 pl-6 ml-4 space-y-8">
          {milestones.map((ms, idx) => (
            <div key={idx} className="relative space-y-2">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-dark-bg"></div>
              <div className="inline-flex items-center space-x-2">
                <span className="text-sm font-extrabold font-mono text-primary">{ms.year}</span>
                <span className={`text-xs font-bold ${isDark ? 'text-white' : 'text-gray-950'}`}>&bull; {ms.title}</span>
              </div>
              <p className="text-xs text-gray-400 max-w-2xl leading-relaxed">{ms.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
