/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Sun, Moon, Search, Globe, ChevronDown, 
  Sparkles, Code, Cpu, Cloud, Database, Shield, Monitor, 
  Briefcase, MessageSquare, Landmark, Activity, ShoppingBag, 
  Truck, Settings, ArrowRight, HeartPulse, HardHat, Radio, HelpCircle
} from 'lucide-react';
import { useLanguage, LanguageType } from '../context/LanguageContext';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string, subId?: string) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  onSearch: (query: string) => void;
}

export default function Header({ currentTab, setCurrentTab, isDark, setIsDark, onSearch }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [activeHoverCategory, setActiveHoverCategory] = useState<string>('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState('');
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (tab: string, subId?: string) => {
    setCurrentTab(tab, subId);
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localSearch.trim()) {
      onSearch(localSearch);
      setSearchOpen(false);
    }
  };

  const menuItems = [
    { label: t('nav.services'), id: 'services', hasMega: true, type: 'services' },
    { label: t('nav.solutions'), id: 'solutions', hasMega: true, type: 'solutions' },
    { label: t('nav.industries'), id: 'industries', hasMega: true, type: 'industries' },
    { label: t('nav.insights'), id: 'insights', hasMega: true, type: 'insights' },
    { label: t('nav.about'), id: 'about', hasMega: true, type: 'about' },
  ];

  // SERVICES mega menu data
  const servicesMega = {
    title: 'All Services',
    categories: [
      {
        id: 'digital-transformation',
        name: 'Digital Transformation',
        desc: 'Leverage AI & automation systems to reinvent outdated processes.',
        tab: 'services',
        subId: 'digital-transformation',
        details: ['Generative AI & LLMs', 'AI-Powered Automation', 'Cognitive Agents']
      },
      {
        id: 'solutions-engineering',
        name: 'Solutions Engineering',
        desc: 'Build scalable custom software and elastically engineered cloud environments.',
        tab: 'services',
        subId: 'solutions-engineering',
        details: ['Custom Applications', 'DevOps & K8s Clusters', 'Istio Security Mesh']
      },
      {
        id: 'system-integration',
        name: 'System Integration',
        desc: 'Connect modular systems with custom enterprise ERPNext and Odoo configurations.',
        tab: 'services',
        subId: 'system-integration',
        details: ['ERPNext Architectures', 'Odoo Core Tailoring', 'API Integrations']
      },
      {
        id: 'ux-design',
        name: 'UX Design Systems',
        desc: 'Map enterprise-grade layout tokens and friction-free employee screens.',
        tab: 'services',
        subId: 'ux-design',
        details: ['Figma Design Tokens', 'User Journey Maps', 'Accessibility Compliance']
      }
    ]
  };

  // SOLUTIONS mega menu data
  const solutionsMega = {
    title: 'All Solutions',
    categories: [
      {
        id: 'ai-ml',
        name: 'AI & Machine Learning',
        desc: 'Train, isolate, and serve advanced predictive and neural models.',
        tab: 'solutions',
        subId: 'ai-ml',
        details: ['Private Vector Databases', 'Cognitive Decisions', 'Generative RAG']
      },
      {
        id: 'data-analytics',
        name: 'Data & Analytics Services',
        desc: 'Stream, map, and visualize dynamic metrics at massive scales.',
        tab: 'solutions',
        subId: 'data-analytics',
        details: ['IoT Edge Processing', 'Advanced Classification', 'Interactive Dashboards']
      },
      {
        id: 'cloud-infra',
        name: 'Digital Infrastructure Services',
        desc: 'Deploy migration factories, secure microservice architectures, and proactive FinOps.',
        tab: 'solutions',
        subId: 'cloud-infra',
        details: ['Cloud Migration', 'Cloud Application Dev', 'Managed Operations']
      }
    ]
  };

  // INDUSTRIES mega menu data
  const industriesMega = {
    title: 'All Industries',
    categories: [
      {
        id: 'healthcare',
        name: 'Healthcare & Sciences',
        desc: 'HL7 FHIR compliant patient charts and electronic clinical logs.',
        tab: 'industries',
        subId: 'healthcare',
        details: ['Secure Patient Portals', 'Audited FHIR Proxies', 'Biometric Lockouts']
      },
      {
        id: 'finance',
        name: 'Financial Services',
        desc: 'High-throughput transactional microservices with absolute audit consistency.',
        tab: 'industries',
        subId: 'finance',
        details: ['Kubernetes Ledger Clusters', 'Real-time Fraud Alerts', 'Spanner Ledgers']
      },
      {
        id: 'retail',
        name: 'Retail & E-commerce',
        desc: 'Synchronized store inventories and offline-first point-of-sale systems.',
        tab: 'industries',
        subId: 'retail',
        details: ['Real-time Stock Counters', 'Integrated POS Cache', 'Automated Replenishment']
      },
      {
        id: 'manufacturing',
        name: 'Smart Manufacturing',
        desc: 'Industrial IoT telemetries and preventative production schedule analyzers.',
        tab: 'industries',
        subId: 'manufacturing',
        details: ['LoRaWAN Sensor Streams', 'Predictive Downtime models', 'MES Integrations']
      },
      {
        id: 'logistics',
        name: 'Logistics & Supply Chain',
        desc: 'Dynamic vehicle routing and live GPS asset monitoring panels.',
        tab: 'industries',
        subId: 'logistics',
        details: ['Predictive Routing Models', 'Live GPS Asset Feeds', 'Load Optimizations']
      }
    ]
  };

  // INSIGHTS mega menu data
  const insightsMega = {
    title: 'All Insights',
    categories: [
      {
        id: 'case-studies',
        name: 'Case Studies',
        desc: 'Audited case validations showcasing tangible business impact.',
        tab: 'case-studies',
        subId: '',
        details: ['Apex Health EHR System', 'Velvet Threads POS Cache', 'SwiftCargo Routing']
      },
      {
        id: 'blogs',
        name: 'Blogs & Articles',
        desc: 'Analysis of cloud security, open-core ERP systems, and AI models.',
        tab: 'insights',
        subId: '',
        details: ['GenAI Security Auditing', 'ERPNext Ledger Setup', 'K8s Cluster Guardrails']
      },
      {
        id: 'podcasts',
        name: 'Podcasts & Videos',
        desc: 'Expert tech discussions covering real-world business transformations.',
        tab: 'insights',
        subId: '',
        details: ['The Future of Enterprise AI', 'Optimizing Cloud Overheads', 'UX Design Systems']
      }
    ]
  };

  // ABOUT US mega menu data
  const aboutMega = {
    title: 'About Us',
    categories: [
      {
        id: 'overview',
        name: 'Company Overview',
        desc: 'Learn about our engineering philosophy, corporate values, and global presence.',
        tab: 'about',
        subId: '',
        details: ['Leadership Group', 'Global Lab Locations', 'Corporate Compliance']
      },
      {
        id: 'careers',
        name: 'Careers @ DEVCOWISE',
        desc: 'Explore active engineering positions in our advanced technology group.',
        tab: 'careers',
        subId: '',
        details: ['Senior Backend Engineer', 'Infrastructure Architect', 'UI/UX Architect']
      },
      {
        id: 'contact',
        name: 'Contact Corporate Labs',
        desc: 'Get in touch with architects to schedule systems scoping.',
        tab: 'contact',
        subId: '',
        details: ['Request SLA Pricing', 'Schedule Code Audit', 'Partner with Labs']
      }
    ]
  };

  const getMegaData = (type: string) => {
    if (type === 'services') return servicesMega;
    if (type === 'solutions') return solutionsMega;
    if (type === 'industries') return industriesMega;
    if (type === 'insights') return insightsMega;
    return aboutMega;
  };

  const currentMega = activeMegaMenu ? getMegaData(activeMegaMenu) : null;

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? isDark 
              ? 'bg-dark-bg/95 backdrop-blur-md border-b border-gray-800/80 shadow-lg py-3' 
              : 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with stylized DEVCOWISE loop */}
          <button 
            onClick={() => handleNav('home')}
            className="flex items-center space-x-2.5 group focus:outline-none cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-black text-xl shadow-md shadow-primary/20 group-hover:scale-105 transition-all duration-300">
              D
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className={`text-xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-955'} font-display`}>
                DEVCO<span className="text-primary">WISE</span>
              </span>
              <span className={`text-[8px] tracking-widest font-mono uppercase mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Digital Transformation
              </span>
            </div>
          </button>

          {/* Desktop Navigation links */}
          <nav className="hidden lg:flex items-center space-x-1.5">
            {menuItems.map((item) => (
              <div 
                key={item.id}
                className="relative"
                onMouseEnter={() => {
                  setActiveMegaMenu(item.type || null);
                  // Default active hover category to first category
                  const mData = getMegaData(item.type);
                  if (mData && mData.categories.length > 0) {
                    setActiveHoverCategory(mData.categories[0].id);
                  }
                }}
              >
                <button
                  onClick={() => handleNav(item.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1 cursor-pointer transition-all duration-200 ${
                    currentTab === item.id 
                      ? 'text-primary bg-primary/10' 
                      : isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800/40' : 'text-gray-700 hover:text-gray-950 hover:bg-gray-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasMega && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                </button>
              </div>
            ))}
          </nav>

          {/* Right Action buttons */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-955 hover:bg-gray-100'
              }`}
              title="Global Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Language Selection Group */}
            <div className="relative group">
              <button className={`p-2 rounded-xl text-xs font-bold flex items-center space-x-1 cursor-pointer transition-all ${
                isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-955 hover:bg-gray-100'
              }`}>
                <Globe className="w-3.5 h-3.5" />
                <span>{language}</span>
              </button>
              <div className={`absolute right-0 top-full mt-1.5 hidden group-hover:block w-32 rounded-xl border shadow-xl ${
                isDark ? 'bg-[#0E0E11] border-gray-800 text-gray-300' : 'bg-white border-gray-200 text-gray-700'
              }`}>
                <div className="p-1.5 space-y-1">
                  {[
                    { code: 'EN', name: 'English' },
                    { code: 'DE', name: 'Deutsch' },
                    { code: 'ES', name: 'Español' },
                    { code: 'FR', name: 'Français' },
                    { code: 'AR', name: 'العربية' }
                  ].map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => setLanguage(lang.code as LanguageType)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-colors cursor-pointer font-medium flex items-center justify-between ${
                        language === lang.code 
                          ? 'bg-primary/20 text-primary font-bold' 
                          : 'hover:bg-primary hover:text-white'
                      }`}
                    >
                      <span>{lang.name}</span>
                      <span className="text-[9px] opacity-60 uppercase font-mono">{lang.code}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Theme Trigger toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isDark ? 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800' : 'text-gray-600 hover:text-primary hover:bg-gray-100'
              }`}
              title={isDark ? 'Light Mode' : 'Dark Mode'}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Admin shortcut icon - hidden on mobile as per request */}
            <button
              onClick={() => handleNav('admin')}
              className={`hidden md:inline-flex p-2 rounded-xl transition-colors cursor-pointer ${
                currentTab === 'admin'
                  ? 'text-primary bg-primary/10'
                  : isDark ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-955 hover:bg-gray-100'
              }`}
              title="Admin Portal"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* Bold Theme Contact Button */}
            <button
              onClick={() => handleNav('contact')}
              className="hidden sm:inline-flex px-4 py-2 rounded-xl bg-primary hover:bg-secondary text-white text-xs font-bold transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-secondary/35 cursor-pointer"
            >
              Contact Us
            </button>

            {/* Mobile Menu Open trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-xl lg:hidden transition-colors cursor-pointer ${
                isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-955 hover:bg-gray-100'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Dynamic Full-Width Hover Mega Menu (Desktop) */}
        {activeMegaMenu && currentMega && (
          <div 
            className={`absolute left-0 right-0 top-full shadow-2xl transition-all duration-300 border-t ${
              isDark ? 'bg-[#040815] border-gray-800/80 text-white' : 'bg-gray-50 border-gray-200 text-gray-900'
            }`}
            onMouseLeave={() => {
              setActiveMegaMenu(null);
              setActiveHoverCategory('');
            }}
          >
            <div className="max-w-7xl mx-auto grid grid-cols-12 gap-0">
              {/* Left Column: All [Category] Header List */}
              <div className="col-span-3 border-r border-gray-800/10 dark:border-gray-800/60 p-6 space-y-4">
                <span className="text-[10px] font-bold font-mono tracking-widest text-primary uppercase block">
                  {currentMega.title}
                </span>
                
                <div className="flex flex-col space-y-1">
                  {currentMega.categories.map((cat) => (
                    <button
                      key={cat.id}
                      onMouseEnter={() => setActiveHoverCategory(cat.id)}
                      onClick={() => handleNav(cat.tab, cat.subId)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                        activeHoverCategory === cat.id
                          ? 'bg-primary text-white'
                          : isDark
                            ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                            : 'text-gray-700 hover:text-gray-955 hover:bg-gray-200/50'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${activeHoverCategory === cat.id ? 'translate-x-1' : 'opacity-40'}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Center Detail list column (Interactive detail panel on active hovered category) */}
              <div className={`col-span-5 p-6 border-r border-gray-800/10 dark:border-gray-800/60 flex flex-col justify-between ${
                isDark ? 'bg-black/20' : 'bg-white'
              }`}>
                {(() => {
                  const hoveredCat = currentMega.categories.find(c => c.id === activeHoverCategory) || currentMega.categories[0];
                  if (!hoveredCat) return null;
                  return (
                    <div className="space-y-4">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold font-mono text-primary uppercase tracking-wider block">Overview Detail</span>
                        <h4 className="text-base font-extrabold font-display leading-tight">{hoveredCat.name}</h4>
                        <p className={`text-xs leading-relaxed mt-1 ${isDark ? 'text-gray-400' : 'text-gray-550'}`}>
                          {hoveredCat.desc}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-gray-800/10 dark:border-gray-800/50">
                        <span className="text-[9px] font-bold font-mono text-gray-400 uppercase tracking-widest block mb-2">Core Competencies</span>
                        <div className="grid grid-cols-1 gap-2">
                          {hoveredCat.details.map((det, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                              <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'} font-medium`}>{det}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })()}

                {/* Direct CTA button at bottom of details panel */}
                <div className="pt-4 mt-4 border-t border-gray-800/10 dark:border-gray-800/50">
                  <button
                    onClick={() => {
                      const hoveredCat = currentMega.categories.find(c => c.id === activeHoverCategory) || currentMega.categories[0];
                      if (hoveredCat) {
                        handleNav(hoveredCat.tab, hoveredCat.subId);
                      }
                    }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-tr from-primary to-secondary text-white text-[11px] font-bold tracking-wide flex items-center space-x-1.5 cursor-pointer shadow hover:shadow-md hover:scale-[1.01] transition-all"
                  >
                    <span>View Technical Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Showcase Column (Beautiful visual promo slot) */}
              <div className="col-span-4 p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-[9px] font-bold font-mono text-gray-400 uppercase tracking-widest block">Corporate Spotlight</span>
                  <div className={`p-4 rounded-2xl border ${isDark ? 'bg-gray-900/60 border-gray-800' : 'bg-gray-100/50 border-gray-200'} space-y-2`}>
                    <h5 className="font-bold text-xs tracking-wide text-primary">SLA Scoping Lab</h5>
                    <p className={`text-[11px] leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Our engineering group offers complete custom system scans, source code reviews, and localized compliance charts.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-[9px] font-bold font-mono text-gray-400 uppercase tracking-widest block">Ready to Connect?</span>
                  <p className="text-[10px] text-gray-400 leading-normal">
                    Transform your digital core infrastructure with certified technical experts.
                  </p>
                  <button
                    onClick={() => handleNav('contact')}
                    className="text-xs font-bold text-primary flex items-center space-x-1 hover:underline cursor-pointer"
                  >
                    <span>Request Scoping Document</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile drawer layout */}
      {isMobileMenuOpen && (
        <div className={`fixed inset-0 z-40 lg:hidden pt-20 flex flex-col transition-all duration-300 ${isDark ? 'bg-dark-bg text-white' : 'bg-white text-gray-955'}`}>
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {menuItems.map((item) => (
              <div key={item.id} className="border-b border-gray-800/10 dark:border-gray-800/40 pb-3">
                <div className="flex items-center justify-between py-2">
                  <button
                    onClick={() => handleNav(item.id)}
                    className="text-base font-bold text-left hover:text-primary cursor-pointer"
                  >
                    {item.label}
                  </button>
                </div>
                {/* Expand internal items for clean mobile navigation */}
                <div className="pl-3 mt-1 space-y-1.5">
                  {getMegaData(item.type).categories.map((subCat) => (
                    <button
                      key={subCat.id}
                      onClick={() => handleNav(subCat.tab, subCat.subId)}
                      className="w-full text-left py-1 text-xs text-gray-400 hover:text-primary flex items-center space-x-1.5 cursor-pointer"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary"></span>
                      <span>{subCat.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Admin Dashboard is hidden on mobile setting menu hide from this website */}

            <div className="pt-6">
              <button
                onClick={() => handleNav('contact')}
                className="w-full py-3 rounded-xl bg-primary hover:bg-secondary text-white text-center font-bold text-sm tracking-wide shadow-lg shadow-primary/25 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Search Modal overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div 
            className={`w-full max-w-lg rounded-3xl p-6 shadow-2xl border transition-all ${
              isDark ? 'bg-card-dark border-gray-800 text-white' : 'bg-white border-gray-100 text-gray-955'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-extrabold text-base font-display">DEVCOWISE Global Vault Search</h3>
              <button 
                onClick={() => setSearchOpen(false)}
                className={`p-1.5 rounded-xl transition-colors cursor-pointer ${
                  isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'
                }`}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search solutions, services, technology stacks..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                autoFocus
                className={`w-full pl-11 pr-4 py-3 rounded-xl outline-none border transition-all text-xs ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-700 text-white focus:border-primary focus:bg-gray-800' 
                    : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-primary focus:bg-white'
                }`}
              />
              <Search className="w-4 h-4 absolute left-4 top-3.5 text-gray-400" />
              <button 
                type="submit"
                className="absolute right-3 top-2 px-3 py-1.5 rounded-lg bg-primary text-white text-[10px] font-bold cursor-pointer"
              >
                Search
              </button>
            </form>
            <div className="mt-4">
              <span className="text-[10px] font-bold font-mono text-gray-400 block mb-2 uppercase">Suggested tags:</span>
              <div className="flex flex-wrap gap-1.5">
                {['EHR', 'Ledger', 'Odoo', 'ERPNext', 'Kubernetes', 'Cybersecurity', 'Logistics'].map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setLocalSearch(term);
                      onSearch(term);
                      setSearchOpen(false);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-semibold cursor-pointer transition-colors ${
                      isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-750' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
