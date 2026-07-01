/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, ArrowRight, Github, Linkedin, Twitter, CheckCircle } from 'lucide-react';

interface FooterProps {
  currentTab: string;
  setCurrentTab: (tab: string, subId?: string) => void;
  isDark: boolean;
  onSubscribe: (email: string) => void;
}

export default function Footer({ currentTab, setCurrentTab, isDark, onSubscribe }: FooterProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNav = (tab: string, subId?: string) => {
    setCurrentTab(tab, subId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onSubscribe(email.trim());
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const companyLinks = [
    { label: 'Company Overview', id: 'about' },
    { label: 'Careers & Culture', id: 'careers' },
    { label: 'Latest Insights', id: 'insights' },
    { label: 'Contact Inquiries', id: 'contact' }
  ];

  const serviceLinks = [
    { label: 'Digital Transformation', id: 'services', subId: 'digital-transformation' },
    { label: 'Solutions Engineering', id: 'services', subId: 'solutions-engineering' },
    { label: 'System Integration', id: 'services', subId: 'system-integration' },
    { label: 'UX Design Systems', id: 'services', subId: 'ux-design' }
  ];

  const industryLinks = [
    { label: 'Healthcare & Life Sciences', id: 'industries', subId: 'healthcare' },
    { label: 'Financial Services', id: 'industries', subId: 'finance' },
    { label: 'Retail & E-commerce', id: 'industries', subId: 'retail' },
    { label: 'Smart Manufacturing', id: 'industries', subId: 'manufacturing' },
    { label: 'Logistics & Supply Chain', id: 'industries', subId: 'logistics' }
  ];

  return (
    <footer 
      id="app-footer"
      className={`border-t transition-colors duration-300 pt-16 pb-8 ${
        isDark ? 'bg-[#030612] border-gray-800/80 text-gray-400' : 'bg-gray-50 border-gray-200 text-gray-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
        {/* Brand Column */}
        <div className="lg:col-span-4 space-y-4">
          <button 
            onClick={() => handleNav('home')}
            className="flex items-center space-x-2 text-left cursor-pointer focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white font-bold text-base shadow-md">
              D
            </div>
            <span className={`text-lg font-bold tracking-tight font-display ${isDark ? 'text-white' : 'text-gray-900'}`}>
              DEVCO<span className="text-primary">WISE</span>
            </span>
          </button>
          <p className="text-xs leading-relaxed max-w-sm">
            DEVCOWISE is a global enterprise technology consulting firm. We specialize in digital transformation, high-throughput cloud database architectures, custom software development, conversational voice AI engines, and enterprise security systems.
          </p>
          <div className="flex items-center space-x-3 pt-2">
            {[
              { icon: Linkedin, url: 'https://linkedin.com/company/devcowise' },
              { icon: Twitter, url: 'https://twitter.com/devcowise' },
              { icon: Github, url: 'https://github.com/devcowise' }
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg border transition-all ${
                    isDark 
                      ? 'border-gray-800 text-gray-400 hover:text-white hover:border-gray-700 hover:bg-gray-800' 
                      : 'border-gray-200 text-gray-500 hover:text-primary hover:border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Mega Navigation Link Columns */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className={`text-xs font-bold tracking-widest uppercase font-mono ${isDark ? 'text-white' : 'text-gray-950'}`}>Company</h4>
          <ul className="space-y-2.5 text-xs">
            {companyLinks.map((link, idx) => (
              <li key={idx}>
                <button 
                  onClick={() => handleNav(link.id)}
                  className="hover:text-primary cursor-pointer transition-colors"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <h4 className={`text-xs font-bold tracking-widest uppercase font-mono ${isDark ? 'text-white' : 'text-gray-955'}`}>Our Services</h4>
          <ul className="space-y-2.5 text-xs">
            {serviceLinks.map((link, idx) => (
              <li key={idx}>
                <button 
                  onClick={() => handleNav(link.id, link.subId)}
                  className="hover:text-primary cursor-pointer transition-colors text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <h4 className={`text-xs font-bold tracking-widest uppercase font-mono ${isDark ? 'text-white' : 'text-gray-955'}`}>Industries</h4>
          <ul className="space-y-2.5 text-xs">
            {industryLinks.map((link, idx) => (
              <li key={idx}>
                <button 
                  onClick={() => handleNav(link.id, link.subId)}
                  className="hover:text-primary cursor-pointer transition-colors text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter subscription */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className={`text-xs font-bold tracking-widest uppercase font-mono ${isDark ? 'text-white' : 'text-gray-950'}`}>Newsletter</h4>
          <p className="text-xs leading-relaxed">
            Stay updated with our latest technology trends, case studies, and whitepapers.
          </p>
          {submitted ? (
            <div className="flex items-center space-x-2 text-xs text-accent">
              <CheckCircle className="w-4 h-4" />
              <span>Subscription successful!</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribeSubmit} className="flex flex-col space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`w-full pl-3 pr-10 py-2.5 rounded-xl text-xs outline-none border transition-all ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-800 focus:border-primary text-white' 
                      : 'bg-white border-gray-200 focus:border-primary text-gray-950'
                  }`}
                />
                <button
                  type="submit"
                  className="absolute right-2.5 top-2.5 text-primary hover:text-primary/80 transition-colors cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className={`max-w-7xl mx-auto px-6 border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
        isDark ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <span>&copy; {new Date().getFullYear()} DEVCOWISE Consulting. All rights reserved.</span>
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <button onClick={() => handleNav('home')} className="hover:text-primary cursor-pointer transition-colors">Sitemap</button>
          <button onClick={() => handleNav('home')} className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</button>
          <button onClick={() => handleNav('home')} className="hover:text-primary cursor-pointer transition-colors">Terms of Service</button>
          <button onClick={() => handleNav('home')} className="hover:text-primary cursor-pointer transition-colors">Cookies Policies</button>
        </div>
      </div>
    </footer>
  );
}
