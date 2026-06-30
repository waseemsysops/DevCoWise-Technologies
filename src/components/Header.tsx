/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Sun, Moon, Search, Globe, ChevronDown, 
  Sparkles, Code, Cpu, Cloud, Database, Shield, Monitor, 
  Briefcase, MessageSquare, Landmark, Activity, ShoppingBag, 
  Truck, Settings, BarChart2
} from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  onSearch: (query: string) => void;
}

export default function Header({ currentTab, setCurrentTab, isDark, setIsDark, onSearch }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState('');
  const [language, setLanguage] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (tab: string) => {
    setCurrentTab(tab);
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
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services', hasMega: true, type: 'services' },
    { label: 'Solutions', id: 'solutions', hasMega: true, type: 'solutions' },
    { label: 'Products', id: 'products' },
    { label: 'Case Studies', id: 'case-studies' },
    { label: 'Insights', id: 'insights' },
    { label: 'Careers', id: 'careers' },
    { label: 'Contact', id: 'contact' },
  ];

  const servicesMega = [
    { title: 'Custom Software', desc: 'Enterprise application engineering', icon: Code, tab: 'services' },
    { title: 'AI Solutions', desc: 'Generative AI & LLM development', icon: Sparkles, tab: 'services' },
    { title: 'Cloud & DevOps', desc: 'Secure cloud migrations & K8s', icon: Cloud, tab: 'services' },
    { title: 'ERPNext & Odoo', desc: 'Tailored open-core ERP systems', icon: Database, tab: 'services' },
    { title: 'Cyber Security', desc: 'Pen-testing & zero-trust protection', icon: Shield, tab: 'services' },
    { title: 'UI/UX Design', desc: 'Premium user-journey mapping', icon: Monitor, tab: 'services' },
  ];

  const solutionsMega = [
    { title: 'Healthcare', desc: 'FHIR EHR & records coordination', icon: Activity, tab: 'solutions' },
    { title: 'Finance & Banking', desc: 'Transactional core cloud ledgers', icon: Landmark, tab: 'solutions' },
    { title: 'Retail & E-comm', desc: 'POS sync & warehouse flows', icon: ShoppingBag, tab: 'solutions' },
    { title: 'Smart Factories', desc: 'IoT PLC & predictive monitors', icon: Cpu, tab: 'solutions' },
    { title: 'Logistics', desc: 'AI route planning & fleet dispatch', icon: Truck, tab: 'solutions' },
  ];

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? isDark 
              ? 'bg-[#0D1117]/90 backdrop-blur-md border-b border-gray-800 shadow-lg py-3' 
              : 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNav('home')}
            className="flex items-center space-x-2 group focus:outline-none cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-lg tracking-wider shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
              D
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className={`text-xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'} font-display`}>
                DEVCO<span className="text-primary">WISE</span>
              </span>
              <span className={`text-[9px] tracking-widest font-mono uppercase mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                DIGITAL TRANSFORMATION
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div 
                key={item.id}
                className="relative"
                onMouseEnter={() => item.hasMega ? setActiveMegaMenu(item.type || null) : setActiveMegaMenu(null)}
              >
                <button
                  onClick={() => handleNav(item.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 cursor-pointer transition-colors duration-200 ${
                    currentTab === item.id 
                      ? 'text-primary bg-primary/5' 
                      : isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800/40' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasMega && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                </button>
              </div>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              title="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Language Selector */}
            <div className="relative group">
              <button className={`p-2 rounded-lg text-sm font-medium flex items-center space-x-1 cursor-pointer transition-colors ${
                isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}>
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{language}</span>
              </button>
              <div className={`absolute right-0 top-full mt-1 hidden group-hover:block w-24 rounded-lg border shadow-lg ${
                isDark ? 'bg-card-dark border-gray-800 text-gray-300' : 'bg-white border-gray-200 text-gray-700'
              }`}>
                <div className="p-1 space-y-1">
                  {['EN', 'DE', 'AR'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className="w-full text-left px-3 py-1.5 rounded-md text-xs hover:bg-primary hover:text-white transition-colors cursor-pointer"
                    >
                      {lang === 'EN' ? 'English' : lang === 'DE' ? 'Deutsch' : 'العربية'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                isDark ? 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800' : 'text-gray-600 hover:text-primary hover:bg-gray-100'
              }`}
              title={isDark ? 'Light Mode' : 'Dark Mode'}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Admin Dashboard shortcut */}
            <button
              onClick={() => handleNav('admin')}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                currentTab === 'admin'
                  ? 'text-primary bg-primary/5'
                  : isDark ? 'text-gray-400 hover:text-white hover:bg-gray-800' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
              title="Admin Portal"
            >
              <Settings className="w-5 h-5" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg lg:hidden transition-colors cursor-pointer ${
                isDark ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mega Menu Overlay (Desktop) */}
        {activeMegaMenu && (
          <div 
            className={`absolute left-0 right-0 top-full shadow-2xl transition-all duration-300 border-t ${
              isDark ? 'bg-card-dark border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'
            }`}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-12 gap-8">
              <div className="col-span-4 border-r pr-8 border-gray-800/10 dark:border-gray-100/10">
                <span className="text-xs font-bold font-mono tracking-widest text-primary uppercase block mb-3">
                  {activeMegaMenu === 'services' ? 'SERVICES DIRECTORY' : 'SOLUTIONS PORTFOLIO'}
                </span>
                <h3 className="text-xl font-bold mb-3 font-display">
                  {activeMegaMenu === 'services' 
                    ? 'Engineering Next-Gen Digital Core Systems' 
                    : 'Transforming Global Industrial Verticals'}
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
                  {activeMegaMenu === 'services' 
                    ? 'Deploy enterprise-grade custom applications, AI pipelines, open-core ERP environments, and cybersecurity networks managed by specialized technical staff.'
                    : 'Address sector challenges with modern records integration, transaction clearing ledgers, IoT smart-metering setups, and predictive fleet dispatch controllers.'}
                </p>
                <button 
                  onClick={() => handleNav(activeMegaMenu)}
                  className="px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white text-xs font-semibold tracking-wide transition-all cursor-pointer shadow-md shadow-primary/25"
                >
                  View Complete List
                </button>
              </div>

              <div className="col-span-8 grid grid-cols-2 gap-4">
                {(activeMegaMenu === 'services' ? servicesMega : solutionsMega).map((mega, index) => {
                  const Icon = mega.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleNav(mega.tab)}
                      className={`text-left p-4 rounded-xl flex items-start space-x-4 transition-all duration-200 cursor-pointer ${
                        isDark 
                          ? 'hover:bg-gray-800/40 border border-transparent hover:border-gray-800' 
                          : 'hover:bg-gray-50 border border-transparent hover:border-gray-100 shadow-sm hover:shadow-md'
                      }`}
                    >
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary mt-1">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm font-display">{mega.title}</h4>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-1`}>{mega.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className={`fixed inset-0 z-40 lg:hidden pt-20 flex flex-col ${isDark ? 'bg-dark-bg text-white' : 'bg-white text-gray-900'}`}>
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`w-full text-left py-3 border-b text-lg font-semibold flex justify-between items-center cursor-pointer ${
                  currentTab === item.id 
                    ? 'text-primary border-primary' 
                    : isDark ? 'border-gray-800 text-gray-300' : 'border-gray-100 text-gray-700'
                }`}
              >
                <span>{item.label}</span>
                {item.hasMega && <ChevronDown className="w-4 h-4 opacity-50" />}
              </button>
            ))}
            <button
              onClick={() => handleNav('admin')}
              className={`w-full text-left py-3 border-b text-lg font-semibold flex justify-between items-center cursor-pointer ${
                currentTab === 'admin'
                  ? 'text-primary border-primary'
                  : isDark ? 'border-gray-800 text-gray-300' : 'border-gray-100 text-gray-700'
              }`}
            >
              <span>Admin Dashboard</span>
              <Settings className="w-4 h-4 opacity-50" />
            </button>
          </div>
        </div>
      )}

      {/* Global Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div 
            className={`w-full max-w-lg rounded-2xl p-6 shadow-2xl border transition-all ${
              isDark ? 'bg-card-dark border-gray-800 text-white' : 'bg-white border-gray-100 text-gray-900'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg font-display">Global Vault Search</h3>
              <button 
                onClick={() => setSearchOpen(false)}
                className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                  isDark ? 'hover:bg-gray-800 text-gray-400 hover:text-white' : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search solutions, case studies, technologies..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                autoFocus
                className={`w-full pl-11 pr-4 py-3 rounded-xl outline-none border transition-all ${
                  isDark 
                    ? 'bg-gray-800/50 border-gray-700 text-white focus:border-primary focus:bg-gray-800' 
                    : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-primary focus:bg-white'
                }`}
              />
              <Search className="w-5 h-5 absolute left-4 top-3.5 text-gray-400" />
              <button 
                type="submit"
                className="absolute right-3 top-2 px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-semibold cursor-pointer"
              >
                Search
              </button>
            </form>
            <div className="mt-4">
              <span className="text-xs font-mono text-gray-400 block mb-2 uppercase">Suggested terms:</span>
              <div className="flex flex-wrap gap-2">
                {['EHR', 'Ledger', 'Odoo', 'ERPNext', 'Kubernetes', 'Cybersecurity', 'Logistics'].map((term) => (
                  <button
                    key={term}
                    onClick={() => {
                      setLocalSearch(term);
                      onSearch(term);
                      setSearchOpen(false);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-medium cursor-pointer transition-colors ${
                      isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
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
