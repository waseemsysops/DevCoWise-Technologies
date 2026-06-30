/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, Brain, Bot, Headphones, PhoneCall, ShieldCheck, Cpu, Database, BarChart3, Cloud, Layout, CheckCircle, ArrowRight, Play, RefreshCw } from 'lucide-react';

interface SolutionsViewProps {
  isDark: boolean;
  setCurrentTab: (tab: string) => void;
  initialSelected?: string;
}

export default function SolutionsView({ isDark, setCurrentTab, initialSelected }: SolutionsViewProps) {
  const [activeSolution, setActiveSolution] = useState<string>(initialSelected || 'ai-ml');
  const [sandboxPrompt, setSandboxPrompt] = useState<string>('Analyze customer sentiment from call logs and generate a compliance report.');
  const [sandboxResponse, setSandboxResponse] = useState<string>('');
  const [sandboxLoading, setSandboxLoading] = useState<boolean>(false);
  const [callScenario, setCallScenario] = useState<string>('support');

  React.useEffect(() => {
    if (initialSelected) {
      setActiveSolution(initialSelected);
    }
  }, [initialSelected]);

  const solutions = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      tagline: 'Orchestrating server-side cognitive models & deep learning pipelines',
      icon: Brain,
      subcategories: [
        { name: 'Generative AI & LLMs', desc: 'Secure Retrieval-Augmented Generation (RAG) pipelines, private vector databases, and enterprise model tuning.' },
        { name: 'AI-Powered Automation', desc: 'Intelligent process miners, robotic workflow automation, and background-executing cognitive loops.' },
        { name: 'Artificial Intelligence', desc: 'Custom deep neural network classifiers, multi-label regression systems, and semantic search nodes.' }
      ],
      features: [
        'Proprietary data security guarding private intellectual assets from external LLM scraping.',
        'High-speed batch vectorization using highly optimized cloud-native inference endpoints.',
        'Continuous automatic agent performance auditing, safety boundaries, and custom output formatting.'
      ],
      metrics: { label: 'Inference Speedup', val: '4.8x faster', desc: 'Sub-second model responses' }
    },
    {
      id: 'call-intel',
      title: 'AI-Powered Call Intelligence',
      tagline: 'Transforming contact centers into high-efficiency intelligence engines',
      icon: Headphones,
      subcategories: [
        { name: 'Voice AI Agent', desc: 'High-fidelity conversational voice bots with continuous speech-to-text and low-latency response cycles.' },
        { name: 'AI Agent Assist', desc: 'Real-time on-screen suggestions, database record retrieval, and script guidance for support staff.' },
        { name: 'Compliance & Insights Engine', desc: 'Automatic recording transcription, sentiment trend mapping, and regional compliance audits.' }
      ],
      features: [
        'Zero-trust data security removing HIPAA and PCI sensitive data from raw call transcripts automatically.',
        '98.4% speech-to-text accuracy supporting multi-regional dialects and specialized technical glossaries.',
        'Seamless integration with Twilio, Cisco, Avaya, and existing CRM ticketing backends.'
      ],
      metrics: { label: 'AHT Reduction', val: '32% decrease', desc: 'Average Handle Time trimmed' }
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics',
      tagline: 'Unlocking raw data streams into live operational capacity',
      icon: BarChart3,
      subcategories: [
        { name: 'IoT & Edge Analytics', desc: 'High-throughput stream pipeline processing directly on local hardware nodes and smart factories.' },
        { name: 'Advanced Analytics', desc: 'Predictive modeling, churn forecast engines, and automated risk parameters.' },
        { name: 'Business Intelligence', desc: 'Beautiful, live responsive data visualization boards using customized D3 and high-density charts.' }
      ],
      features: [
        'Accommodates over 100k incoming streaming telemetry inputs per second with sub-millisecond database lag.',
        'Automated database partition maintenance and cold-storage archiving loops.',
        'Interactive drill-down reports providing single-click root cause assessments.'
      ],
      metrics: { label: 'Query Performance', val: '12x throughput', desc: 'Optimized PostgreSQL and Redis index grids' }
    },
    {
      id: 'cloud-infra',
      title: 'Cloud & Infrastructure',
      tagline: 'Transitioning legacy monoliths into highly elastically autoscaled clusters',
      icon: Cloud,
      subcategories: [
        { name: 'Container Orchestration', desc: 'Rigorous Kubernetes clusters with custom autoscaling schedules and private registry setups.' },
        { name: 'Infrastructure as Code', desc: 'Repeatable, version-controlled cloud templates written in Terraform and AWS CloudFormation.' },
        { name: 'Istio Service Mesh', desc: 'Robust mutual TLS encryption, secure microservice isolation boundaries, and granular rate limits.' }
      ],
      features: [
        '99.99% operational uptime guaranteed via multi-region hot-standby failover databases.',
        'Automated code-scanning security gates inside secure CI/CD build pipelines.',
        'Significant operational overhead reduction by purging unused cloud computation cycles.'
      ],
      metrics: { label: 'Uptime Standard', val: '99.99% active', desc: 'Backed by strict enterprise SLA guarantees' }
    },
    {
      id: 'azure',
      title: 'Microsoft Azure Services',
      tagline: 'Certified end-to-end cloud scaling and active database integrations',
      icon: ShieldCheck,
      subcategories: [
        { name: 'Azure Migration Cores', desc: 'Seamless database conversion from Oracle or SQL Server to Azure CosmosDB and PostgreSQL.' },
        { name: 'Enterprise Active Directory', desc: 'Robust single sign-on (SSO) matrices, multi-factor gates, and policy-driven role permissions.' },
        { name: 'Azure OpenAI Nodes', desc: 'Isolated model deployments ensuring proprietary enterprise data remains fully private.' }
      ],
      features: [
        'Certified Microsoft Gold Partner engineers overseeing high-integrity server-side overhauls.',
        'Native integrations with PowerBI, Teams, SharePoint, and existing Windows systems.',
        'Compliance-validated configurations meeting rigorous regional HIPAA, SOC 2, and ISO guidelines.'
      ],
      metrics: { label: 'Licensing Savings', val: '45% reduction', desc: 'Consolidated server licensing agreements' }
    }
  ];

  const current = solutions.find(s => s.id === activeSolution) || solutions[0];
  const CurrentIcon = current.icon;

  const handleSandboxRun = () => {
    setSandboxLoading(true);
    setSandboxResponse('');
    setTimeout(() => {
      setSandboxLoading(false);
      if (activeSolution === 'ai-ml') {
        setSandboxResponse(`[SYSTEM DEPLOYMENT SUCCESSFUL]
- Found 14,209 unstructured customer feedback entries.
- Initialized local sentiment assessment using isolated LLM model.
- Results generated: 82% Positive, 11% Neutral, 7% Urgent Support Required.
- Automated pipeline triggered: 994 follow-up support ticket drafts created in CRM queue.`);
      } else if (activeSolution === 'call-intel') {
        if (callScenario === 'support') {
          setSandboxResponse(`[SPEECH-TO-TEXT DIALOG CAPTURED]
Customer: "Hi, I have a problem with my supply invoice order #49283."
Agent Assist Suggestion: "Retrieve invoice #49283 from main ERP database..."
Compliance Checklist Status:
  ✓ Customer verified identity
  ✓ Zero-trust mask applied (Credit Card digits masked automatically)
  ✓ Sentiment Score: Neutral (Transitioned to Positive)`);
        } else {
          setSandboxResponse(`[SPEECH-TO-TEXT DIALOG CAPTURED]
Customer: "I want to upgrade my subscription package to enterprise gold core."
Agent Assist Suggestion: "Display upgrade package details and pricing tier SLA sheet..."
Compliance Checklist Status:
  ✓ Identity verified
  ✓ Sentiment Score: Enthusiastic (Upgrade validated)`);
        }
      } else if (activeSolution === 'data-analytics') {
        setSandboxResponse(`[IoT DATA STREAM ACTIVE]
- Connected 48 IoT sensor gateways.
- Incoming telemetry rate: 12,400 logs/sec.
- Machine predictive model status: Normal bounds.
- System optimization recommendation: Adjust local conveyor valve #3 by +2.5% to stabilize temperature.`);
      } else if (activeSolution === 'cloud-infra') {
        setSandboxResponse(`[TERRAFORM CLUSTER SIMULATION]
- Initiated plan for AWS EKS Kubernetes Cluster.
- Creating 12 secure microservice container segments.
- Enforcing mutual TLS encryption via service mesh.
- Status: Secure architecture compiled with 0 security exceptions.`);
      } else {
        setSandboxResponse(`[AZURE DIRECTORY AUDIT RESULTS]
- Inspected active directory credentials for 1,420 staff.
- Found 4 accounts with legacy, non-MFA login vectors.
- Automated fix: Flagged accounts for multi-factor enrollment, locked remote SSH ports.
- Enterprise directory policy score: 100% Compliant.`);
      }
    }, 1500);
  };

  return (
    <div className="space-y-24 pb-20 pt-10">
      {/* 1. HERO */}
      <section className="text-center max-w-3xl mx-auto space-y-6 px-6">
        <span className="text-xs font-bold font-mono tracking-widest text-primary bg-primary/10 px-3.5 py-1.5 rounded-full uppercase">
          Technology Capabilities
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight font-display">Bespoke Enterprise Solutions</h1>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          We deploy robust, high-availability technical solutions tailored for modern business environments. Click a sector below to explore details.
        </p>
      </section>

      {/* 2. SOL SELECTOR */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <button
                key={sol.id}
                onClick={() => {
                  setActiveSolution(sol.id);
                  setSandboxResponse('');
                }}
                className={`p-4 rounded-2xl border flex flex-col items-center justify-center text-center space-y-2.5 transition-all cursor-pointer w-[calc(50%-6px)] md:flex-1 min-w-[140px] ${
                  activeSolution === sol.id
                    ? 'bg-primary border-primary text-white shadow-lg shadow-primary/25 scale-[1.02]'
                    : isDark
                      ? 'bg-card-dark border-gray-800 text-gray-300 hover:text-white hover:bg-gray-800'
                      : 'bg-white border-gray-200 text-gray-750 hover:bg-gray-50 hover:text-gray-950 hover:shadow-sm'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${activeSolution === sol.id ? 'bg-white/10 text-white' : 'bg-primary/10 text-primary'}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold font-display leading-tight">{sol.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. DETAILS EXPANSION */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left deep-dive column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3.5 text-primary">
              <div className="p-3 rounded-2xl bg-primary/10">
                <CurrentIcon className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-bold tracking-tight font-display">{current.title}</h2>
                <span className="text-xs font-mono text-gray-400 font-semibold uppercase block mt-0.5">{current.tagline}</span>
              </div>
            </div>
          </div>

          {/* Subcategories list */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold font-mono tracking-widest text-primary uppercase">Core Implementation Branches</h4>
            <div className="grid grid-cols-1 gap-4">
              {current.subcategories.map((sub, idx) => (
                <div key={idx} className={`p-5 rounded-2xl border ${
                  isDark ? 'bg-gray-900/30 border-gray-800' : 'bg-white border-gray-200 shadow-sm'
                } space-y-1.5`}>
                  <h5 className="font-bold text-xs tracking-wide font-display text-primary">{sub.name}</h5>
                  <p className="text-xs text-gray-400 leading-relaxed">{sub.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features checkmark */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-bold font-mono tracking-widest text-primary uppercase font-semibold">Security & Architecture Standards</h4>
            <div className="space-y-2.5">
              {current.features.map((feat, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs">
                  <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 leading-normal">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right sandbox panel */}
        <div className="lg:col-span-5 space-y-6">
          {/* Metrics card */}
          <div className={`p-6 rounded-3xl border ${
            isDark ? 'bg-gradient-to-br from-primary/10 to-transparent border-primary/20' : 'bg-primary/5 border-primary/15'
          } flex items-center justify-between`}>
            <div>
              <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block">{current.metrics.label}</span>
              <span className="text-xl font-black font-display text-primary mt-1 block">{current.metrics.val}</span>
              <p className="text-[10px] text-gray-400 mt-0.5">{current.metrics.desc}</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-primary/10 text-primary">
              <CurrentIcon className="w-7 h-7" />
            </div>
          </div>

          {/* AI / Systems Sandbox simulator */}
          <div className={`p-6 rounded-3xl border space-y-4 ${
            isDark ? 'bg-card-dark border-gray-800' : 'bg-white border-gray-200 shadow-lg'
          }`}>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold font-mono text-primary uppercase tracking-widest block">Systems Sandbox Simulator</span>
              <span className="text-[9px] font-mono text-accent uppercase font-bold bg-accent/10 px-2 py-0.5 rounded">Active Node</span>
            </div>
            <p className="text-[11px] text-gray-400 leading-normal">
              Simulate this solution pipeline running live on our server mesh network. Select settings and hit run.
            </p>

            {/* Selector parameters based on solution */}
            {activeSolution === 'call-intel' && (
              <div className="space-y-1">
                <label className="text-[9px] font-mono uppercase tracking-widest text-gray-400 block">Voice Scenario</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setCallScenario('support')}
                    className={`px-3 py-1.5 rounded-lg border text-[10px] font-semibold cursor-pointer ${
                      callScenario === 'support' ? 'bg-primary/10 border-primary text-primary' : 'border-gray-700 text-gray-400'
                    }`}
                  >
                    Billing Support Call
                  </button>
                  <button
                    onClick={() => setCallScenario('upgrade')}
                    className={`px-3 py-1.5 rounded-lg border text-[10px] font-semibold cursor-pointer ${
                      callScenario === 'upgrade' ? 'bg-primary/10 border-primary text-primary' : 'border-gray-700 text-gray-400'
                    }`}
                  >
                    Enterprise Upgrade Call
                  </button>
                </div>
              </div>
            )}

            {activeSolution === 'ai-ml' && (
              <div className="space-y-1">
                <label className="text-[9px] font-mono uppercase tracking-widest text-gray-400 block">Mock Agent Prompt</label>
                <input
                  type="text"
                  value={sandboxPrompt}
                  onChange={(e) => setSandboxPrompt(e.target.value)}
                  className={`w-full px-3 py-1.5 rounded-lg text-[10px] outline-none border ${
                    isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-gray-50 border-gray-200'
                  }`}
                />
              </div>
            )}

            <button
              onClick={handleSandboxRun}
              disabled={sandboxLoading}
              className="w-full py-2.5 rounded-xl bg-primary hover:bg-primary/95 text-white font-bold text-xs tracking-wide flex items-center justify-center space-x-1.5 cursor-pointer disabled:opacity-50"
            >
              {sandboxLoading ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Processing Stream Nodes...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Run Live System Simulation</span>
                </>
              )}
            </button>

            {/* Sandbox code/log outputs */}
            {(sandboxResponse || sandboxLoading) && (
              <div className={`p-4 rounded-xl font-mono text-[10px] leading-relaxed border whitespace-pre-line ${
                isDark ? 'bg-gray-900 border-gray-800 text-emerald-400' : 'bg-gray-950 border-gray-900 text-emerald-300'
              }`}>
                {sandboxLoading ? (
                  <div className="flex items-center space-x-2 animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Fetching telemetry, running secure compliance models...</span>
                  </div>
                ) : (
                  sandboxResponse
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6 text-center">
        <div className={`p-8 rounded-3xl border space-y-4 ${
          isDark ? 'bg-card-dark border-gray-800' : 'bg-gray-50 border-gray-200 shadow-md'
        }`}>
          <h3 className="text-lg font-bold font-display">Require a Customized Technical Demonstration?</h3>
          <p className="text-xs text-gray-400 max-w-lg mx-auto leading-relaxed">
            Our systems architecture group can establish isolated sandbox nodes loaded with your sample database files to validate speed improvements.
          </p>
          <button
            onClick={() => setCurrentTab('contact')}
            className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary/95 shadow transition-all cursor-pointer inline-flex items-center space-x-1"
          >
            <span>Consult Solution Architects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </div>
  );
}
