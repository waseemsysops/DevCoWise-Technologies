/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';

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
import ProductsView from './pages/ProductsView';
import CaseStudiesView from './pages/CaseStudiesView';
import InsightsView from './pages/InsightsView';
import CareersView from './pages/CareersView';
import ContactView from './pages/ContactView';

export default function App() {
  // Global States
  const [currentTab, setCurrentTab] = useState<string>('home');
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
      root.style.backgroundColor = '#0D1117';
    } else {
      root.classList.remove('dark');
      root.style.backgroundColor = '#F8FAFC';
    }
  }, [isDark]);

  // Sync tab changes with hash anchor tags if applicable
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && ['home', 'about', 'services', 'solutions', 'products', 'case-studies', 'insights', 'careers', 'contact', 'admin'].includes(hash)) {
      setCurrentTab(hash);
    }
  }, []);

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
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
    // To keep it simple, let's alert their keyword or guide them to lists.
    if (query.toLowerCase().includes('job') || query.toLowerCase().includes('career')) {
      setCurrentTab('careers');
    } else if (query.toLowerCase().includes('blog') || query.toLowerCase().includes('insight') || query.toLowerCase().includes('trend')) {
      setCurrentTab('insights');
    } else {
      setCurrentTab('case-studies');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-dark-bg text-white' : 'bg-light-bg text-gray-900'
    } flex flex-col justify-between`}>
      
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
        {currentTab === 'home' && <HomeView setCurrentTab={handleTabChange} isDark={isDark} />}
        {currentTab === 'about' && <AboutView isDark={isDark} />}
        {currentTab === 'services' && <ServicesView isDark={isDark} />}
        {currentTab === 'solutions' && <SolutionsView isDark={isDark} setCurrentTab={handleTabChange} />}
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
  );
}
