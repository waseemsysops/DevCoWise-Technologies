/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, ArrowRight, Linkedin, X, Instagram, Facebook, Youtube, CheckCircle } from 'lucide-react';

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
    { label: 'Financial Services', id: 'industries', subId: 'finance' },
    { label: 'Government & Public Sector', id: 'industries', subId: 'government' },
    { label: 'Healthcare', id: 'industries', subId: 'healthcare' },
    { label: 'Mobility & Logistics', id: 'industries', subId: 'logistics' },
    { label: 'Retail & E-commerce', id: 'industries', subId: 'retail' },
    { label: 'On-demand Services', id: 'industries', subId: 'on-demand' }
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
            aria-label="DEVCOWISE Home Page"
            className="flex items-center space-x-2 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-xl"
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
              { icon: Linkedin, name: 'LinkedIn', url: 'https://pk.linkedin.com/company/devcowisetech' },
              { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/devcowisetech/' },
              { icon: Facebook, name: 'Facebook', url: 'https://www.facebook.com/devcowisetech/' },
              { icon: Youtube, name: 'YouTube', url: 'https://www.youtube.com/@DevCoWise' },
              { icon: X, name: 'X', url: 'https://x.com/devcowisetech' }
            ].map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow DevCoWise on ${social.name}`}
                  className={`min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg border transition-all focus-visible:ring-2 focus-visible:ring-sky-400 ${
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
                  aria-label="Email address for newsletter subscription"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`w-full pl-3 pr-10 py-2.5 rounded-xl text-xs outline-none border transition-all focus-visible:ring-2 focus-visible:ring-sky-400 ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-800 focus:border-primary text-white' 
                      : 'bg-white border-gray-200 focus:border-primary text-gray-950'
                  }`}
                />
                <button
                  type="submit"
                  aria-label="Submit newsletter subscription"
                  className={`absolute right-1 top-1 w-8 h-8 flex items-center justify-center text-primary hover:text-primary/80 transition-colors cursor-pointer rounded-lg focus-visible:ring-2 focus-visible:ring-sky-400`}
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
