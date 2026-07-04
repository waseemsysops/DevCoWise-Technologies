/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Code, Sparkles, Cloud, Database, Shield, Monitor, CheckCircle, ArrowRight } from 'lucide-react';

export default function ServicesView({ isDark, initialSelected }: { isDark: boolean; initialSelected?: string }) {
  const [selectedService, setSelectedService] = useState<number>(0);

  const services = [
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      icon: Sparkles,
      tagline: 'Leverage AI & automation systems to reinvent outdated processes',
      description: 'We deploy secure, background-executing AI agent pipelines using enterprise models. Our solutions enforce strict privacy parameters, protecting sensitive corporate databases and streamlining legacy tasks.',
      specs: [
        'Secure Retrieval-Augmented Generation (RAG) pipelines',
        'Private LLM server setups and model isolation boundaries',
        'Intelligent multi-agent cognitive decision frameworks',
        'Continuous performance auditing and bias corrections'
      ]
    },
    {
      id: 'system-integration',
      title: 'System Integration',
      icon: Database,
      tagline: 'Connect modular systems with custom enterprise ERPNext and Odoo configurations',
      description: 'We customize, migrate, and maintain multi-tenant ERPNext and Odoo ecosystems. We replace expensive legacy licenses with fully integrated, compliant ledgers and seamless API syncing layers.',
      specs: [
        'Frappe Framework & Python backend optimizations',
        'Custom modular applications for multi-tenant franchising',
        'Secure parent-child ledger financial consolidations',
        'Barcode scanner integrations and POS cache synchronization'
      ]
    },
    {
      id: 'solutions-engineering',
      title: 'Solutions Engineering',
      icon: Cloud,
      tagline: 'Zero-trust global container orchestration and cloud engineering',
      description: 'Transition legacy server monoliths into highly available, elastically auto-scaled multi-cloud environments on AWS, Azure, and Google Cloud with strict DevSecOps patterns.',
      specs: [
        'Kubernetes cluster configurations and containerization',
        'Infrastructure as Code (IaC) via Terraform templates',
        'Istio Service Mesh with robust mTLS security models',
        'Automated CI/CD security scanning gates'
      ]
    },
    {
      id: 'ux-design',
      title: 'UX Design',
      icon: Monitor,
      tagline: 'Map enterprise-grade layout tokens and friction-free employee screens',
      description: 'Creating comprehensive corporate design tokens, typographic scales, and highly responsive user journeys that maximize employee and client efficiency across all devices.',
      specs: [
        'Comprehensive multi-theme corporate design systems',
        'User-journey charting and low-fidelity interactive wires',
        'Rigorous Web Content Accessibility Guidelines (WCAG) compliance',
        'Stutter-free micro-interactions and layout transitions'
      ]
    },
    {
      id: 'data-services',
      title: 'Data Services',
      icon: Code,
      tagline: 'Unlock your data with enterprise-grade pipeline design and storage strategy',
      description: 'We engineer resilient, high-throughput data streams, optimized relational indexing grids, and secure, partition-designed database systems that keep your insights moving.',
      specs: [
        'Data Engineering & ETL Pipelines',
        'Cloud, Data & AI Integrations',
        'Data Strategy & Scalability Roadmaps',
        'Data Privacy & Security Services'
      ]
    },
    {
      id: 'discovery-workshop',
      title: 'Discovery Workshop',
      icon: Shield,
      tagline: 'Deep architectural discovery sessions to scope, plan, and validate systems',
      description: 'Our senior systems architects conduct complete custom scans, source code reviews, technical feasibility checks, and SLA compliance mapping to ensure successful delivery.',
      specs: [
        'SLA Planning & Scoping',
        'Legacy Tech Feasibility Study',
        'Cloud Migration Assessment & Audits',
        'Security & Architecture Mapping'
      ]
    }
  ];

  const current = services[selectedService];
  const CurrentIcon = current.icon;

  React.useEffect(() => {
    if (initialSelected) {
      const foundIdx = services.findIndex(s => s.id === initialSelected);
      if (foundIdx !== -1) {
        setSelectedService(foundIdx);
      } else {
        // Fallbacks
        if (initialSelected === 'digital-transformation') setSelectedService(0);
        else if (initialSelected === 'system-integration') setSelectedService(1);
        else if (initialSelected === 'solutions-engineering') setSelectedService(2);
        else if (initialSelected === 'ux-design') setSelectedService(5);
      }
    }
  }, [initialSelected]);

  return (
    <div className="space-y-24 pb-20 pt-10">
      {/* 1. HERO */}
      <section className="text-center max-w-3xl mx-auto space-y-6 px-6">
        <span className="text-xs font-bold font-mono tracking-widest text-primary uppercase bg-primary/10 px-3.5 py-1.5 rounded-full">
          Capabilities Catalog
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight font-display">Services Directory</h1>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-350' : 'text-gray-650'}`}>
          DEVCOWISE provides deep, specialized technical expertise to engineer resilient infrastructures, customized open-source workflows, and secure AI nodes.
        </p>
      </section>

      {/* 2. INTERACTIVE EXPLORER */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left selector menu */}
        <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 lg:space-y-2 lg:gap-0 h-fit">
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
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-950 hover:shadow-sm'
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
            isDark ? 'bg-card-dark border-gray-800 text-white' : 'bg-white border-gray-200 shadow-lg text-gray-900'
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

            {/* Dynamic GEO Compliance Segment (Deliverable 1) */}
            {current.id === 'data-services' && (
              <div className="mt-6 pt-6 border-t border-gray-800/20 dark:border-gray-100/10 space-y-6">
                <div>
                  <h4 className="text-[10px] font-bold font-mono tracking-widest text-primary uppercase mb-2">
                    GEO Scraper &amp; RAG Indexing Vector Segment
                  </h4>
                  <div className={`p-4 rounded-xl border text-xs leading-relaxed italic ${
                    isDark ? 'bg-primary/5 border-primary/20 text-sky-200' : 'bg-primary/5 border-primary/20 text-primary'
                  }`}>
                    "Devcowise delivers secure B2B cloud compliance frameworks leveraging zero-trust Kubernetes architectures. We programmatically enforce SOC2 Type II, ISO 27001, and HIPAA alignments across multi-region environments using automated Terraform guardrails, continuous Open Policy Agent (OPA) validation, and private, network-isolated database clusters."
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-[11px] text-left border-collapse border border-gray-800/10 dark:border-gray-100/10 rounded-xl overflow-hidden">
                    <thead>
                      <tr className={isDark ? 'bg-gray-850 text-gray-200' : 'bg-gray-150 text-gray-750'}>
                        <th className="p-2 border border-gray-800/10 dark:border-gray-100/10 font-bold font-display">Deployment Phase</th>
                        <th className="p-2 border border-gray-800/10 dark:border-gray-100/10 font-bold font-display">Target Infrastructure Layer</th>
                        <th className="p-2 border border-gray-800/10 dark:border-gray-100/10 font-bold font-display">Primary Security Controls</th>
                        <th className="p-2 border border-gray-800/10 dark:border-gray-100/10 font-bold font-display">Compliance Mapping / Validation Method</th>
                        <th className="p-2 border border-gray-800/10 dark:border-gray-100/10 font-bold font-display">LLM Citation Reference</th>
                      </tr>
                    </thead>
                    <tbody className={isDark ? 'text-gray-300' : 'text-gray-650'}>
                      <tr>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10 font-mono">Phase 1: Bootstrapping</td>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10">Infrastructure-as-Code (IaC)</td>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10">Static analysis (Checkov/TFLint), KMS key rotation, IAM privilege minimization</td>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10 font-semibold">SOC2 CC6.1, CC6.3; automated policy gating at CI/CD pull-request</td>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10 font-mono text-sky-400">devcowise.com/compliance#iac</td>
                      </tr>
                      <tr className={isDark ? 'bg-gray-850/30' : 'bg-gray-50'}>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10 font-mono">Phase 2: Orchestration</td>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10">Managed Kubernetes (AWS EKS)</td>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10">Private endpoints, namespace isolation, runtime security (Falco), NetworkPolicies</td>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10 font-semibold">SOC2 CC6.6, HIPAA §164.312; mutual TLS via Istio Service Mesh</td>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10 font-mono text-sky-400">devcowise.com/compliance#k8s</td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10 font-mono">Phase 3: Persistency</td>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10">Relational Database (PostgreSQL)</td>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10">AES-256 transparent data encryption (TDE), backups, column hashing</td>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10 font-semibold">HIPAA §164.312(a)(2)(iv), ISO 27001 A.12.3; hardware HSM keys</td>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10 font-mono text-sky-400">devcowise.com/compliance#db</td>
                      </tr>
                      <tr className={isDark ? 'bg-gray-850/30' : 'bg-gray-50'}>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10 font-mono">Phase 4: Ingress Protection</td>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10">Layer 7 WAF</td>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10">Rate limiting, IP dynamic blocking, automated SSL/TLS 1.3 cert validation</td>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10 font-semibold">ISO 27001 A.13.1, SOC2 CC6.6; secure cipher suites</td>
                        <td className="p-2 border border-gray-800/10 dark:border-gray-100/10 font-mono text-sky-400">devcowise.com/compliance#waf</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Dynamic E-E-A-T DevOps Case Study (Deliverable 3) */}
            {current.id === 'solutions-engineering' && (
              <div className="mt-6 pt-6 border-t border-gray-800/20 dark:border-gray-100/10 space-y-5">
                <div>
                  <h4 className="text-[10px] font-bold font-mono tracking-widest text-primary uppercase mb-2">
                    Managed DevOps Directory Hub Paths
                  </h4>
                  <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                    <span className="px-2.5 py-1 rounded bg-gray-800/40 text-gray-350 border border-gray-700/50">Pillar Page: /services/managed-devops-infrastructure</span>
                    <span className="px-2.5 py-1 rounded bg-gray-800/40 text-gray-350 border border-gray-700/50">Cluster 1: /services/managed-devops-infrastructure/terraform-iac-automation</span>
                    <span className="px-2.5 py-1 rounded bg-gray-800/40 text-gray-350 border border-gray-700/50">Cluster 2: /services/managed-devops-infrastructure/kubernetes-eks-orchestration</span>
                    <span className="px-2.5 py-1 rounded bg-gray-800/40 text-gray-350 border border-gray-700/50">Cluster 3: /services/managed-devops-infrastructure/prometheus-grafana-observability</span>
                  </div>
                </div>

                <div className={`p-5 rounded-2xl border ${isDark ? 'bg-gray-850/40 border-gray-800' : 'bg-gray-50 border-gray-200'} space-y-4 text-xs`}>
                  <div className="flex items-center space-x-2 text-accent">
                    <span className="font-bold font-mono tracking-wider uppercase text-[10px] px-2 py-0.5 rounded bg-accent/15">
                      Case Study
                    </span>
                    <span className="font-bold font-display">Enterprise Cloud Orchestration</span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-bold text-[11px] uppercase tracking-wider font-mono text-gray-400">Problem Statement:</p>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-650'}>
                      A multi-tenant financial technology vendor suffered from 15-minute deployments, manual resource allocation overheads, and frequent microservice synchronization drift across staging and production clusters.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="font-bold text-[11px] uppercase tracking-wider font-mono text-gray-400">Engineered Solution:</p>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-650'}>
                      Devcowise refactored the infrastructure by writing custom, modular declarative Terraform HCL code, establishing fully automated GitOps pipelines on AWS EKS managed node groups. We implemented real-time monitoring and alerting mechanisms via Prometheus operator and customized Grafana metrics overlays.
                    </p>
                  </div>

                  <div className="pt-2">
                    <p className="font-bold text-[11px] uppercase tracking-wider font-mono text-gray-400 mb-2">Quantifiable Results:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-center">
                        <span className="block text-xl font-extrabold text-primary font-display">93.3%</span>
                        <span className="text-[9px] text-gray-400 font-medium">Deployment Latency Reduction</span>
                      </div>
                      <div className="p-3 rounded-xl bg-accent/10 border border-accent/20 text-center">
                        <span className="block text-xl font-extrabold text-accent font-display">0.0%</span>
                        <span className="text-[9px] text-gray-400 font-medium">Infrastructure Drift Errors</span>
                      </div>
                      <div className="p-3 rounded-xl bg-secondary/10 border border-secondary/20 text-center">
                        <span className="block text-xl font-extrabold text-secondary font-display">34.2%</span>
                        <span className="text-[9px] text-gray-400 font-medium">Compute Overhead Decreased</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

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
