/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Code, Sparkles, Cloud, Database, Shield, Monitor, CheckCircle, ArrowRight } from 'lucide-react';

export default function ServicesView({ isDark }: { isDark: boolean }) {
  const [selectedService, setSelectedService] = useState<number>(0);

  const services = [
    {
      title: 'Generative AI & LLM Solutions',
      icon: Sparkles,
      tagline: 'Orchestrating server-side models for cognitive workflows',
      description: 'We deploy secure, background-executing AI agent pipelines using models like Gemini and Claude. Our solutions enforce strict privacy parameters, protecting sensitive corporate databases.',
      specs: [
        'Secure Retrieval-Augmented Generation (RAG) pipelines',
        'Private LLM server setups and model isolation boundaries',
        'Intelligent multi-agent cognitive decision frameworks',
        'Continuous performance auditing and bias corrections'
      ]
    },
    {
      title: 'Open-Core ERPNext & Odoo Development',
      icon: Database,
      tagline: 'Tailored resource planning with zero license overheads',
      description: 'We customize, migrate, and maintain multi-tenant ERPNext and Odoo ecosystems. We replace expensive legacy licenses with fully integrated, compliant ledgers.',
      specs: [
        'Frappe Framework & Python backend optimizations',
        'Custom modular applications for multi-tenant franchising',
        'Secure parent-child ledger financial consolidations',
        'Barcode scanner integrations and POS cache synchronization'
      ]
    },
    {
      title: 'Cloud Migrations & DevOps',
      icon: Cloud,
      tagline: 'Zero-trust global container orchestration',
      description: 'Transition legacy server monoliths into highly available, elastically auto-scaled multi-cloud environments on AWS, Azure, and Google Cloud.',
      specs: [
        'Kubernetes cluster configurations and containerization',
        'Infrastructure as Code (IaC) via Terraform templates',
        'Istio Service Mesh with robust mTLS security models',
        'Automated CI/CD security scanning gates'
      ]
    },
    {
      title: 'Custom Software Development',
      icon: Code,
      tagline: 'High-concurrency full-stack system architecture',
      description: 'Engineering resilient, scalable custom web and mobile applications using modern frameworks that integrate seamlessly with current legacy interfaces.',
      specs: [
        'React and Next.js high-performance web applications',
        'High-throughput Go & Node.js API routers',
        'Scalable relational and NoSQL database structures',
        'Offline-first mobile applications with local sqlite caching'
      ]
    },
    {
      title: 'Enterprise Cyber Security',
      icon: Shield,
      tagline: 'Defending core infrastructure against ransomware',
      description: 'Implementing absolute Zero-Trust Network Access (ZTNA) frameworks and conducting continuous vulnerability penetration tests to safeguard corporate networks.',
      specs: [
        'Micro-segmentation of central ERP database networks',
        'Real-time threat detection logging and anomaly isolation',
        'Immutable cloud backup pipeline systems',
        'PCI-DSS and regional HIPAA regulatory compliance audits'
      ]
    },
    {
      title: 'UI/UX Design Systems',
      icon: Monitor,
      tagline: 'Transforming complex data structures into elegant interfaces',
      description: 'Creating comprehensive corporate design tokens, typographic scales, and highly responsive user journeys that maximize employee and client efficiency.',
      specs: [
        'Comprehensive multi-theme corporate design systems',
        'User-journey charting and low-fidelity interactive wires',
        'Rigorous Web Content Accessibility Guidelines (WCAG) compliance',
        'Stutter-free micro-interactions and layout transitions'
      ]
    }
  ];

  const current = services[selectedService];
  const CurrentIcon = current.icon;

  return (
    <div className="space-y-24 pb-20 pt-10">
      {/* 1. HERO */}
      <section className="text-center max-w-3xl mx-auto space-y-6 px-6">
        <span className="text-xs font-bold font-mono tracking-widest text-primary uppercase bg-primary/10 px-3.5 py-1.5 rounded-full">
          Capabilities Catalog
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight font-display">Services Directory</h1>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-350' : 'text-gray-600'}`}>
          DEVCOWISE provides deep, specialized technical expertise to engineer resilient infrastructures, customized open-source workflows, and secure AI nodes.
        </p>
      </section>

      {/* 2. INTERACTIVE EXPLORER */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left selector menu */}
        <div className="lg:col-span-4 space-y-2">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <button
                key={idx}
                onClick={() => setSelectedService(idx)}
                className={`w-full text-left p-4 rounded-xl border flex items-center space-x-4 transition-all cursor-pointer ${
                  selectedService === idx
                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                    : isDark 
                      ? 'bg-card-dark border-gray-800 text-gray-300 hover:bg-gray-850 hover:text-white' 
                      : 'bg-white border-gray-150 text-gray-700 hover:bg-gray-50 hover:text-gray-950 hover:shadow-sm'
                }`}
              >
                <div className={`p-2 rounded-lg ${selectedService === idx ? 'bg-white/10 text-white' : 'bg-primary/10 text-primary'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs tracking-wide font-display">{srv.title}</h4>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right deep analysis panel */}
        <div className="lg:col-span-8">
          <div className={`p-8 rounded-3xl border space-y-6 ${
            isDark ? 'bg-card-dark border-gray-800 text-white' : 'bg-white border-gray-150 shadow-lg text-gray-900'
          }`} id="service-deep-pane">
            <div className="flex items-center space-x-3 text-primary border-b border-gray-800/10 dark:border-gray-100/10 pb-4">
              <CurrentIcon className="w-8 h-8" />
              <div>
                <h2 className="text-xl font-bold tracking-tight font-display">{current.title}</h2>
                <span className="text-xs font-mono text-gray-400 font-semibold uppercase">{current.tagline}</span>
              </div>
            </div>

            <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              {current.description}
            </p>

            <div className="space-y-3.5">
              <h4 className="text-[10px] font-bold font-mono tracking-widest text-primary uppercase">Core Implementation Specifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {current.specs.map((spec, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 text-xs">
                    <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400 leading-normal">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-800/10 dark:border-gray-100/10 pt-6">
              <span className="text-[9px] font-mono text-gray-400 tracking-wider uppercase">DEVCOWISE SLA Standards:</span>
              <p className="text-[10px] text-gray-400 mt-1">
                All software services are backed by a comprehensive Service Level Agreement ensuring 99.9% uptime, certified engineering hours, and direct access to senior system architects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
