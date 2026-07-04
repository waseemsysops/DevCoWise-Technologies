/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, ShieldCheck, Database, Server, Mail, ArrowRight, CheckCircle, Award } from 'lucide-react';

interface AustinLanderProps {
  isDark: boolean;
  onSubmitInquiry: (inquiry: {
    name: string;
    email: string;
    company: string;
    subject: string;
    message: string;
    services: string[];
  }) => void;
}

export default function AustinLanderView({ isDark, onSubmitInquiry }: AustinLanderProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitInquiry({
      name,
      email,
      company,
      subject: 'Austin TX Regional B2B Inquiry',
      message,
      services: ['Custom Software', 'Solutions Engineering']
    });
    setFormSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-20 pt-10" id="main-content">
      {/* Dynamic SEO Tag Injector for Austin Page */}
      <SEOInjector />

      {/* 1. HERO HEADER */}
      <section className="text-center max-w-4xl mx-auto space-y-6 px-6">
        <div className="inline-flex items-center space-x-2 bg-primary/15 px-4 py-2 rounded-full border border-primary/30">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold font-mono tracking-widest text-primary uppercase">
            Austin, TX B2B Procurement Hub
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-display">
          Enterprise IT &amp; Cloud <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
            Consulting Services in Austin, TX
          </span>
        </h1>
        <p className={`text-base leading-relaxed max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-650'}`}>
          Unlock enterprise-grade digital transformation. DEVCOWISE provides high-performance custom ERPNext solutions, Kubernetes cloud migrations, and local Texas-compliant systems engineering.
        </p>
      </section>

      {/* 2. LOCALIZED TECHNICAL CAPABILITY STATEMENT */}
      <section className="max-w-4xl mx-auto px-6">
        <div className={`p-8 sm:p-10 rounded-3xl border ${
          isDark ? 'bg-card-dark border-gray-800' : 'bg-white border-gray-200 shadow-xl'
        } relative overflow-hidden`}>
          {/* Subtle design grid highlight */}
          <div className="absolute inset-0 tech-grid opacity-5 pointer-events-none"></div>
          
          <div className="relative space-y-6">
            <div className="flex items-center space-x-3 text-primary">
              <Award className="w-6 h-6" />
              <h2 className="text-xl font-bold font-display tracking-tight">Regional Capability Statement</h2>
            </div>
            
            <p className={`text-sm leading-relaxed font-sans ${isDark ? 'text-gray-200' : 'text-gray-850'}`}>
              Operating from our tech hub vectors located within the Austin-Round Rock-San Marcos MSA coordinates (30.2672° N, 97.7431° W), DevCoWise delivers secure enterprise IT consulting services to scaling business ecosystems across Texas. We resolve deep technical bottlenecks for local organizations by offering custom-tailored ERPNext software migrations, high-availability PostgreSQL configurations, and automated Kubernetes cloud hosting. We align local manufacturing, logistics, and medical providers with strict SOC2 Type II compliance standards and Texas-specific privacy frameworks. By deploying production-ready Terraform templates and zero-trust cybersecurity configurations, our Austin-based consulting partners secure mission-critical infrastructures against modern ransomware vectors. Contact our local delivery team at waseem.sysops@gmail.com to receive a formal system auditing proposal within 24 hours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-800/10 dark:border-gray-100/15">
              <div className="flex items-start space-x-3">
                <ShieldCheck className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-xs font-display">SOC2 &amp; HIPAA Gated</h3>
                  <p className="text-[11px] text-gray-400 mt-1">Full regulatory compliance mapping and secure audits for Texas health &amp; fintech systems.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Database className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-xs font-display">ERPNext Customizations</h3>
                  <p className="text-[11px] text-gray-400 mt-1">High-concurrency Frappe developments with real-time sync networks.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Server className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-xs font-display">Local Cloud Infrastructure</h3>
                  <p className="text-[11px] text-gray-400 mt-1">Multi-region Kubernetes architecture and robust continuous delivery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRANSATION CTAs & LOCAL ENGAGEMENT */}
      <section className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold font-display tracking-tight">Direct Regional Engagement</h3>
          <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            For public and private entities registered across Texas, DevCoWise operates with local priority schedules. We host face-to-face compliance alignment audits and offer dedicated SLAs for municipal, healthcare, and software operations based in Austin.
          </p>
          <ul className="space-y-2.5">
            {[
              'Direct access to Tier 3 Lead Architects',
              'SLA options ensuring 99.99% cloud systems uptime',
              'Localized regulatory compliance frameworks',
              'Compliant on-site custom database transitions'
            ].map((bullet, index) => (
              <li key={index} className="flex items-center space-x-2.5 text-xs text-gray-400">
                <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={`p-6 rounded-2xl border ${
          isDark ? 'bg-card-dark border-gray-800' : 'bg-white border-gray-200 shadow-lg'
        }`}>
          <h3 className="text-sm font-bold font-display mb-4">Request a System Auditing Proposal</h3>
          {formSubmitted ? (
            <div className="bg-primary/10 border border-primary/30 p-6 rounded-xl text-center space-y-3">
              <CheckCircle className="w-8 h-8 text-primary mx-auto" />
              <p className="text-xs font-bold text-primary uppercase font-mono tracking-wider">Inquiry Received</p>
              <p className="text-[11px] text-gray-400">Our Austin regional architect will contact you within 24 hours at the email provided.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold font-mono tracking-wider uppercase text-gray-400 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className={`w-full px-3 py-2 text-xs rounded-xl border outline-none ${
                    isDark ? 'bg-gray-800/40 border-gray-800 focus:border-primary text-white' : 'bg-gray-50 border-gray-200 focus:border-primary text-gray-900'
                  }`}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold font-mono tracking-wider uppercase text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className={`w-full px-3 py-2 text-xs rounded-xl border outline-none ${
                      isDark ? 'bg-gray-800/40 border-gray-800 focus:border-primary text-white' : 'bg-gray-50 border-gray-200 focus:border-primary text-gray-900'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold font-mono tracking-wider uppercase text-gray-400 mb-1">Company</label>
                  <input
                    type="text"
                    required
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    className={`w-full px-3 py-2 text-xs rounded-xl border outline-none ${
                      isDark ? 'bg-gray-800/40 border-gray-800 focus:border-primary text-white' : 'bg-gray-50 border-gray-200 focus:border-primary text-gray-900'
                    }`}
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold font-mono tracking-wider uppercase text-gray-400 mb-1">Message / Project Parameters</label>
                <textarea
                  rows={3}
                  required
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Describe your architecture requirements, compliance challenges, or timeline..."
                  className={`w-full px-3 py-2 text-xs rounded-xl border outline-none ${
                    isDark ? 'bg-gray-800/40 border-gray-800 focus:border-primary text-white' : 'bg-gray-50 border-gray-200 focus:border-primary text-gray-900'
                  }`}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-primary text-white text-xs font-bold tracking-wider hover:bg-primary/90 transition-all cursor-pointer flex items-center justify-center space-x-2"
              >
                <span>Submit Local Proposal Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

// Minimalistic dynamic SEO injector to alter page titles and metas dynamically when this view is active
function SEOInjector() {
  React.useEffect(() => {
    const originalTitle = document.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : '';

    // Inject Austin-specific SEO tags
    document.title = "Enterprise IT & Cloud Consulting Services in Austin, TX | DevCoWise";
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Unlock enterprise-grade digital transformation in Austin, TX. DevCoWise provides high-performance custom ERPNext solutions, Kubernetes cloud migrations, and compliance consulting.');
    }

    return () => {
      // Restore on unmount
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
    };
  }, []);

  return null;
}
