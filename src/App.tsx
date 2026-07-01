/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Core Types & Seed Data
import { Job, BlogPost, ContactInquiry } from './types';
import { jobs as seedJobs } from './data/jobs';
import { blogPosts as seedBlogs } from './data/blogPosts';

// Layout & Reusable components
import Header from './components/Header';
import Footer from './components/Footer';
import LiveChatWidget from './components/LiveChatWidget';
import AdminDashboard from './components/AdminDashboard';

// Sub-page Views
import HomeView from './pages/HomeView';
import AboutView from './pages/AboutView';
import ServicesView from './pages/ServicesView';
import SolutionsView from './pages/SolutionsView';
import IndustriesView from './pages/IndustriesView';
import ProductsView from './pages/ProductsView';
import CaseStudiesView from './pages/CaseStudiesView';
import InsightsView from './pages/InsightsView';
import CareersView from './pages/CareersView';
import ContactView from './pages/ContactView';

import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  // Global States
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedSubId, setSelectedSubId] = useState<string | undefined>(undefined);
  const [isDark, setIsDark] = useState<boolean>(true);

  // Mutable CMS & CRM data layers
  const [jobs, setJobs] = useState<Job[]>(seedJobs);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(seedBlogs);
  const [inquiries, setInquiries] = useState<ContactInquiry[]>([
    {
      id: 'demo-1',
      name: 'Sarah Jenkins',
      email: 's.jenkins@horizon.com',
      company: 'Horizon Academic Syndicate',
      subject: 'WiseSchool LMS Integration proposal',
      message: 'Seeking customized LMS integration for 200k student campus. Requires specialized custom database structures and localized exam scheduling gates.',
      services: ['Custom Software', 'UI/UX Design'],
      date: '2026-06-28',
      status: 'New'
    }
  ]);
  const [newsletters, setNewsletters] = useState<string[]>([]);

  // Theme effect toggles
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.style.backgroundColor = '#08090c';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#f8fafc';
    }
  }, [isDark]);

  // Sync tab changes with hash anchor tags if applicable
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && ['home', 'about', 'services', 'solutions', 'industries', 'products', 'case-studies', 'insights', 'careers', 'contact', 'admin'].includes(hash)) {
        setCurrentTab(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run once initially to handle initial load hash

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleTabChange = (tab: string, subId?: string) => {
    setCurrentTab(tab);
    setSelectedSubId(subId);
    window.location.hash = tab;
  };

  // Event captures
  const handleAddInquiry = (newInq: Omit<ContactInquiry, 'id' | 'date' | 'status'>) => {
    const fullInq: ContactInquiry = {
      ...newInq,
      id: Math.random().toString(),
      date: new Date().toISOString().split('T')[0],
      status: 'New'
    };
    setInquiries(prev => [fullInq, ...prev]);
  };

  const handleAddNewsletter = (email: string) => {
    setNewsletters(prev => {
      if (prev.includes(email)) return prev;
      return [email, ...prev];
    });
  };

  const handleGlobalSearch = (query: string) => {
    // If user searches, redirect to Case Studies or Blogs view and apply query
    if (query.toLowerCase().includes('job') || query.toLowerCase().includes('career')) {
      setCurrentTab('careers');
    } else if (query.toLowerCase().includes('blog') || query.toLowerCase().includes('insight') || query.toLowerCase().includes('trend')) {
      setCurrentTab('insights');
    } else if (query.toLowerCase().includes('healthcare') || query.toLowerCase().includes('finance') || query.toLowerCase().includes('retail')) {
      setCurrentTab('industries');
      setSelectedSubId(query.toLowerCase().includes('health') ? 'healthcare' : query.toLowerCase().includes('finance') ? 'finance' : 'retail');
    } else {
      setCurrentTab('case-studies');
    }
  };

  return (
    <LanguageProvider>
      <div className={`min-h-screen transition-colors duration-300 relative overflow-hidden ${
        isDark ? 'bg-dark-bg text-white tech-grid-dark' : 'bg-light-bg text-gray-900 tech-grid-light'
      } flex flex-col justify-between`}>
        
        {/* Decorative Premium Glow Spots */}
        <div className="absolute top-[-10%] left-[-10%] w-[45vw] h-[45vw] rounded-full glow-spot pointer-events-none opacity-30"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[50vw] h-[50vw] rounded-full glow-spot pointer-events-none opacity-30"></div>
        
        {/* Premium Sticky Header */}
        <Header 
          currentTab={currentTab} 
          setCurrentTab={handleTabChange} 
          isDark={isDark} 
          setIsDark={setIsDark}
          onSearch={handleGlobalSearch}
        />

        {/* Main Container Core Viewport */}
        <main className="flex-grow pt-28 max-w-7xl mx-auto w-full px-6 min-h-[70vh]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="w-full h-full"
            >
              {currentTab === 'home' && <HomeView setCurrentTab={handleTabChange} isDark={isDark} />}
              {currentTab === 'about' && <AboutView isDark={isDark} />}
              {currentTab === 'services' && <ServicesView isDark={isDark} initialSelected={selectedSubId} />}
              {currentTab === 'solutions' && <SolutionsView isDark={isDark} setCurrentTab={handleTabChange} initialSelected={selectedSubId} />}
              {currentTab === 'industries' && <IndustriesView isDark={isDark} setCurrentTab={handleTabChange} initialSelected={selectedSubId} />}
              {currentTab === 'products' && <ProductsView isDark={isDark} />}
              {currentTab === 'case-studies' && <CaseStudiesView isDark={isDark} />}
              {currentTab === 'insights' && <InsightsView blogPosts={blogPosts} isDark={isDark} />}
              {currentTab === 'careers' && <CareersView jobs={jobs} isDark={isDark} />}
              {currentTab === 'contact' && <ContactView onSubmitInquiry={handleAddInquiry} isDark={isDark} />}
              {currentTab === 'admin' && (
                <AdminDashboard 
                  jobs={jobs} 
                  setJobs={setJobs} 
                  blogPosts={blogPosts} 
                  setBlogPosts={setBlogPosts} 
                  inquiries={inquiries}
                  setInquiries={setInquiries}
                  newsletters={newsletters}
                  isDark={isDark}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Interactive AI consulting assistant floating bot */}
        <LiveChatWidget isDark={isDark} />

        {/* Footer Mega Menu */}
        <Footer 
          currentTab={currentTab} 
          setCurrentTab={handleTabChange} 
          isDark={isDark}
          onSubscribe={handleAddNewsletter}
        />
      </div>
    </LanguageProvider>
  );
}
