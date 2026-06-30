/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  BarChart2, BookOpen, Briefcase, Mail, ShieldAlert, Key, 
  Settings, Sparkles, Check, Trash2, Edit3, Plus, ArrowUpRight, 
  Users, Layers, ArrowLeftRight, TrendingUp
} from 'lucide-react';
import { Job, BlogPost, ContactInquiry } from '../types';

interface AdminDashboardProps {
  jobs: Job[];
  setJobs: React.Dispatch<React.SetStateAction<Job[]>>;
  blogPosts: BlogPost[];
  setBlogPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
  inquiries: ContactInquiry[];
  setInquiries: React.Dispatch<React.SetStateAction<ContactInquiry[]>>;
  newsletters: string[];
  isDark: boolean;
}

export default function AdminDashboard({ 
  jobs, setJobs, blogPosts, setBlogPosts, inquiries, setInquiries, newsletters, isDark 
}: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'analytics' | 'blogs' | 'jobs' | 'inquiries' | 'newsletters' | 'roles'>('analytics');
  
  // States for adding jobs/blogs
  const [newJobTitle, setNewJobTitle] = useState('');
  const [newJobDept, setNewJobDept] = useState<'Engineering' | 'Consulting' | 'AI & Analytics' | 'Sales & Marketing' | 'Design' | 'Operations'>('Engineering');
  const [newJobLocation, setNewJobLocation] = useState('Islamabad, Pakistan');
  const [newJobType, setNewJobType] = useState<'Full-time' | 'Contract' | 'Remote'>('Full-time');
  const [newJobExp, setNewJobExp] = useState('3+ Years');
  const [newJobDesc, setNewJobDesc] = useState('');

  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogCat, setNewBlogCat] = useState<'AI Trends' | 'Cloud' | 'ERP' | 'Cybersecurity' | 'Case Study' | 'Tech Trends'>('AI Trends');
  const [newBlogSummary, setNewBlogSummary] = useState('');
  const [newBlogContent, setNewBlogContent] = useState('');

  // Role management state
  const [users, setUsers] = useState([
    { name: 'Asim Jahangir', email: 'asim.j@devcowise.com', role: 'Global Tech Architect', permission: 'All Core Databases' },
    { name: 'Sarah Jenkins', email: 's.jenkins@devcowise.com', role: 'Director of Operations', permission: 'Client Contracts & HR' },
    { name: 'Richard Sterling', email: 'sterling@devcowise.com', role: 'Principal Security Officer', permission: 'Zero-Trust Auditing' }
  ]);

  const handleAddJob = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newJobTitle.trim() || !newJobDesc.trim()) return;

    const addedJob: Job = {
      id: Math.random().toString(),
      title: newJobTitle,
      department: newJobDept,
      location: newJobLocation,
      type: newJobType,
      experience: newJobExp,
      description: newJobDesc,
      requirements: ['Proven experience in similar system configurations', 'Excellent technical team communication skills'],
      benefits: ['Premium global health benefits', 'Paid certification and learning hours']
    };

    setJobs(prev => [addedJob, ...prev]);
    setNewJobTitle('');
    setNewJobDesc('');
    alert("Job listing successfully posted!");
  };

  const handleAddBlog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBlogTitle.trim() || !newBlogContent.trim()) return;

    const addedBlog: BlogPost = {
      id: Math.random().toString(),
      title: newBlogTitle,
      category: newBlogCat,
      summary: newBlogSummary || newBlogTitle,
      content: newBlogContent,
      author: 'Administrative Portal',
      date: new Date().toISOString().split('T')[0],
      readTime: '5 min read'
    };

    setBlogPosts(prev => [addedBlog, ...prev]);
    setNewBlogTitle('');
    setNewBlogSummary('');
    setNewBlogContent('');
    alert("Blog article successfully published!");
  };

  const handleDeleteJob = (id: string) => {
    setJobs(prev => prev.filter(j => j.id !== id));
  };

  const handleDeleteBlog = (id: string) => {
    setBlogPosts(prev => prev.filter(b => b.id !== id));
  };

  const handleInquiryStatus = (id: string, nextStatus: 'Contacted' | 'Archived') => {
    setInquiries(prev => prev.map(inq => inq.id === id ? { ...inq, status: nextStatus } : inq));
  };

  return (
    <div className={`p-6 rounded-3xl border ${
      isDark ? 'bg-card-dark border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'
    }`} id="admin-panel">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-gray-800/10 dark:border-gray-100/10 pb-6 mb-6 gap-4">
        <div>
          <span className="text-xs font-bold font-mono tracking-widest text-primary uppercase block">Administrative Portal</span>
          <h2 className="text-2xl font-bold tracking-tight mt-1 font-display">DEVCOWISE CMS & Operations</h2>
        </div>
        <div className="flex items-center space-x-2 bg-primary/10 text-primary text-xs font-semibold px-3.5 py-2 rounded-xl">
          <Layers className="w-4 h-4 animate-pulse" />
          <span>Active Role: Super Administrator</span>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* Left Side Navigation Tabs */}
        <div className="col-span-12 md:col-span-3 space-y-1.5">
          {[
            { id: 'analytics', label: 'Analytics Insights', icon: BarChart2 },
            { id: 'blogs', label: 'Blog & Content Hub', icon: BookOpen },
            { id: 'jobs', label: 'Job Opening Postings', icon: Briefcase },
            { id: 'inquiries', label: 'Client Inquiries', icon: Mail },
            { id: 'newsletters', label: 'Newsletter Log', icon: ArrowLeftRight },
            { id: 'roles', label: 'Roles & Security', icon: Key }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center space-x-3 transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-md shadow-primary/20 font-semibold'
                    : isDark ? 'text-gray-400 hover:text-white hover:bg-gray-800/40' : 'text-gray-700 hover:text-gray-950 hover:bg-gray-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Side Content Pane */}
        <div className="col-span-12 md:col-span-9 min-h-[420px]">
          {/* 1. ANALYTICS */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: 'Project Estimations Sent', val: inquiries.length + 18, inc: '+14% this month', icon: Mail },
                  { title: 'Active Newsletter Subscriptions', val: newsletters.length + 142, inc: '+28% this month', icon: Users },
                  { title: 'Corporate Career Applications', val: 12, inc: '+3 positions open', icon: Briefcase }
                ].map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className={`p-5 rounded-2xl border ${isDark ? 'bg-gray-800/40 border-gray-800' : 'bg-gray-50 border-gray-100 shadow-sm'}`}>
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-semibold text-gray-400 font-mono uppercase tracking-wider">{stat.title}</span>
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-3xl font-bold mt-2 font-display">{stat.val}</h3>
                      <div className="flex items-center space-x-1 mt-1 text-accent text-xs font-semibold">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{stat.inc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* High-fidelity Custom SVG Performance Chart */}
              <div className={`p-6 rounded-2xl border ${isDark ? 'bg-gray-800/30 border-gray-800' : 'bg-gray-50 border-gray-100'}`}>
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="font-bold text-sm tracking-wide font-display">System Operations Traffic Monitor</h3>
                    <p className="text-xs text-gray-400">Monthly consulting lead traffic levels</p>
                  </div>
                  <span className="text-xs font-mono bg-accent/10 text-accent font-semibold px-2.5 py-1 rounded-lg">LIVE PIPELINES</span>
                </div>

                {/* SVG Graph */}
                <div className="relative h-48 w-full">
                  <svg className="w-full h-full" viewBox="0 0 500 150" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0057FF" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#0057FF" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    {/* Grid lines */}
                    <line x1="0" y1="30" x2="500" y2="30" stroke="#888" strokeOpacity="0.1" strokeDasharray="5,5" />
                    <line x1="0" y1="75" x2="500" y2="75" stroke="#888" strokeOpacity="0.1" strokeDasharray="5,5" />
                    <line x1="0" y1="120" x2="500" y2="120" stroke="#888" strokeOpacity="0.1" strokeDasharray="5,5" />
                    
                    {/* Fill Area under Curve */}
                    <path
                      d="M 0 150 Q 50 110, 100 120 T 200 60 T 300 80 T 400 30 T 500 45 L 500 150 Z"
                      fill="url(#chartGradient)"
                    />
                    {/* Primary Curve */}
                    <path
                      d="M 0 150 Q 50 110, 100 120 T 200 60 T 300 80 T 400 30 T 500 45"
                      fill="none"
                      stroke="#0057FF"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    
                    {/* Accent secondary curve */}
                    <path
                      d="M 0 130 Q 80 140, 150 90 T 300 110 T 450 50 T 500 70"
                      fill="none"
                      stroke="#00D084"
                      strokeWidth="2"
                      strokeDasharray="4,4"
                      strokeOpacity="0.8"
                    />
                  </svg>
                  {/* Tooltip elements */}
                  <div className="absolute top-6 left-[76%] transform -translate-x-1/2 flex flex-col items-center">
                    <div className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded shadow">Peak Traffic: +42%</div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary ring-4 ring-primary/20 mt-1"></div>
                  </div>
                </div>
                {/* Months labels */}
                <div className="flex justify-between items-center text-[10px] text-gray-400 font-mono mt-3">
                  <span>JAN</span>
                  <span>FEB</span>
                  <span>MAR</span>
                  <span>APR</span>
                  <span>MAY</span>
                  <span>JUN (CURRENT)</span>
                </div>
              </div>
            </div>
          )}

          {/* 2. BLOG MANAGEMENT */}
          {activeTab === 'blogs' && (
            <div className="space-y-6">
              {/* Form to add blog */}
              <form onSubmit={handleAddBlog} className={`p-5 rounded-2xl border ${isDark ? 'bg-gray-800/30 border-gray-800' : 'bg-gray-50 border-gray-100'} space-y-4`}>
                <h3 className="font-bold text-sm tracking-wide font-display">Publish New Insight Article</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Article Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Scaling ERP Systems"
                      value={newBlogTitle}
                      onChange={(e) => setNewBlogTitle(e.target.value)}
                      required
                      className={`w-full px-3 py-2 rounded-xl text-xs outline-none border ${
                        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-950'
                      }`}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Category</label>
                    <select
                      value={newBlogCat}
                      onChange={(e: any) => setNewBlogCat(e.target.value)}
                      className={`w-full px-3 py-2 rounded-xl text-xs outline-none border ${
                        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-950'
                      }`}
                    >
                      <option value="AI Trends">AI Trends</option>
                      <option value="Cloud">Cloud</option>
                      <option value="ERP">ERP</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Case Study">Case Study</option>
                      <option value="Tech Trends">Tech Trends</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Summary Bullet</label>
                  <input
                    type="text"
                    placeholder="Brief high-level pitch..."
                    value={newBlogSummary}
                    onChange={(e) => setNewBlogSummary(e.target.value)}
                    className={`w-full px-3 py-2 rounded-xl text-xs outline-none border ${
                      isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-950'
                    }`}
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Full Content Markdown</label>
                  <textarea
                    rows={4}
                    placeholder="Write detailed enterprise advisory text..."
                    value={newBlogContent}
                    onChange={(e) => setNewBlogContent(e.target.value)}
                    required
                    className={`w-full px-3 py-2 rounded-xl text-xs outline-none border ${
                      isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-950'
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary/95 transition-all cursor-pointer flex items-center space-x-1"
                >
                  <Plus className="w-4 h-4" />
                  <span>Publish Article</span>
                </button>
              </form>

              {/* Current Blogs List */}
              <div className="space-y-3">
                <h3 className="font-bold text-sm tracking-wide font-display">Active Published Articles</h3>
                {blogPosts.map((post) => (
                  <div key={post.id} className={`p-4 rounded-xl border flex items-center justify-between ${
                    isDark ? 'bg-gray-800/20 border-gray-800' : 'bg-white border-gray-100 shadow-sm'
                  }`}>
                    <div>
                      <span className="text-[9px] font-mono bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-md uppercase mr-2">
                        {post.category}
                      </span>
                      <span className="text-xs font-semibold">{post.title}</span>
                      <p className="text-[10px] text-gray-400 mt-1">Published by {post.author} &bull; {post.date}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteBlog(post.id)}
                      className="p-2 rounded-lg text-rose-500 hover:bg-rose-500/10 transition-colors cursor-pointer"
                      title="Delete Article"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. CAREERS MANAGEMENT */}
          {activeTab === 'jobs' && (
            <div className="space-y-6">
              {/* Form to add Job */}
              <form onSubmit={handleAddJob} className={`p-5 rounded-2xl border ${isDark ? 'bg-gray-800/30 border-gray-800' : 'bg-gray-50 border-gray-100'} space-y-4`}>
                <h3 className="font-bold text-sm tracking-wide font-display">Create Career Job Posting</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Job Title</label>
                    <input
                      type="text"
                      placeholder="e.g. Senior DevOps Specialist"
                      value={newJobTitle}
                      onChange={(e) => setNewJobTitle(e.target.value)}
                      required
                      className={`w-full px-3 py-2 rounded-xl text-xs outline-none border ${
                        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-950'
                      }`}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Department</label>
                    <select
                      value={newJobDept}
                      onChange={(e: any) => setNewJobDept(e.target.value)}
                      className={`w-full px-3 py-2 rounded-xl text-xs outline-none border ${
                        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-950'
                      }`}
                    >
                      <option value="Engineering">Engineering</option>
                      <option value="Consulting">Consulting</option>
                      <option value="AI & Analytics">AI & Analytics</option>
                      <option value="Sales & Marketing">Sales & Marketing</option>
                      <option value="Design">Design</option>
                      <option value="Operations">Operations</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Location</label>
                    <input
                      type="text"
                      value={newJobLocation}
                      onChange={(e) => setNewJobLocation(e.target.value)}
                      className={`w-full px-3 py-2 rounded-xl text-xs outline-none border ${
                        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-950'
                      }`}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Work Model</label>
                    <select
                      value={newJobType}
                      onChange={(e: any) => setNewJobType(e.target.value)}
                      className={`w-full px-3 py-2 rounded-xl text-xs outline-none border ${
                        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-950'
                      }`}
                    >
                      <option value="Full-time">Full-time</option>
                      <option value="Contract">Contract</option>
                      <option value="Remote">Remote</option>
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Min Experience Required</label>
                    <input
                      type="text"
                      value={newJobExp}
                      onChange={(e) => setNewJobExp(e.target.value)}
                      className={`w-full px-3 py-2 rounded-xl text-xs outline-none border ${
                        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-950'
                      }`}
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Position Summary</label>
                  <textarea
                    rows={3}
                    value={newJobDesc}
                    onChange={(e) => setNewJobDesc(e.target.value)}
                    required
                    className={`w-full px-3 py-2 rounded-xl text-xs outline-none border ${
                      isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-950'
                    }`}
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-primary/95 transition-all cursor-pointer flex items-center space-x-1"
                >
                  <Plus className="w-4 h-4" />
                  <span>Post Position</span>
                </button>
              </form>

              {/* Current Jobs List */}
              <div className="space-y-3">
                <h3 className="font-bold text-sm tracking-wide font-display">Active Careers Positions</h3>
                {jobs.map((job) => (
                  <div key={job.id} className={`p-4 rounded-xl border flex items-center justify-between ${
                    isDark ? 'bg-gray-800/20 border-gray-800' : 'bg-white border-gray-100 shadow-sm'
                  }`}>
                    <div>
                      <span className="text-[9px] font-mono bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-md uppercase mr-2">
                        {job.department}
                      </span>
                      <span className="text-xs font-semibold">{job.title}</span>
                      <p className="text-[10px] text-gray-400 mt-1">{job.location} &bull; {job.type} &bull; {job.experience}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteJob(job.id)}
                      className="p-2 rounded-lg text-rose-500 hover:bg-rose-500/10 transition-colors cursor-pointer"
                      title="Archive Position"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. CLIENT INQUIRIES */}
          {activeTab === 'inquiries' && (
            <div className="space-y-4">
              <h3 className="font-bold text-sm tracking-wide font-display">Submitted Corporate Proposals & Inquiries</h3>
              {inquiries.length === 0 ? (
                <div className="text-center py-12 border border-dashed border-gray-800/25 dark:border-gray-100/25 rounded-2xl">
                  <Mail className="w-10 h-10 text-gray-400 mx-auto mb-3" />
                  <p className="text-xs text-gray-400">No active client messages received yet.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {inquiries.map((inq) => (
                    <div key={inq.id} className={`p-5 rounded-2xl border ${
                      isDark ? 'bg-gray-800/30 border-gray-800' : 'bg-white border-gray-200 shadow-sm'
                    } space-y-3`}>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-gray-800/10 dark:border-gray-100/10 pb-2.5">
                        <div>
                          <h4 className="font-bold text-sm font-display">{inq.subject}</h4>
                          <span className="text-[10px] font-mono text-gray-400">Submitted: {inq.date}</span>
                        </div>
                        <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-md uppercase ${
                          inq.status === 'New' 
                            ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' 
                            : inq.status === 'Contacted' 
                              ? 'bg-accent/10 text-accent border border-accent/20' 
                              : 'bg-gray-500/10 text-gray-400 border border-gray-500/20'
                        }`}>
                          {inq.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div><strong className="text-gray-400 font-medium">Contact:</strong> {inq.name} ({inq.email})</div>
                        <div><strong className="text-gray-400 font-medium">Corporate Group:</strong> {inq.company}</div>
                      </div>
                      <div className={`p-3.5 rounded-xl text-xs leading-relaxed ${isDark ? 'bg-gray-900/60' : 'bg-gray-50'}`}>
                        {inq.message}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {inq.services.map((srv, idx) => (
                          <span key={idx} className="text-[9px] font-mono bg-primary/5 text-primary dark:text-secondary border border-primary/10 px-2 py-0.5 rounded">
                            {srv}
                          </span>
                        ))}
                      </div>
                      {inq.status === 'New' && (
                        <div className="flex items-center space-x-2 pt-2">
                          <button
                            onClick={() => handleInquiryStatus(inq.id, 'Contacted')}
                            className="px-3 py-1.5 rounded-lg bg-accent/10 hover:bg-accent text-accent hover:text-white text-[10px] font-semibold transition-all cursor-pointer flex items-center space-x-1"
                          >
                            <Check className="w-3.5 h-3.5" />
                            <span>Mark Contacted</span>
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* 5. NEWSLETTERS LOG */}
          {activeTab === 'newsletters' && (
            <div className="space-y-4">
              <h3 className="font-bold text-sm tracking-wide font-display font-mono">Newsletter Registrations</h3>
              <div className={`p-5 rounded-2xl border ${isDark ? 'bg-gray-800/30 border-gray-800' : 'bg-gray-50 border-gray-100'}`}>
                {newsletters.length === 0 ? (
                  <p className="text-xs text-gray-400 text-center py-6">No email registrations received in current session.</p>
                ) : (
                  <div className="divide-y divide-gray-800/10 dark:divide-gray-100/10">
                    {newsletters.map((mail, idx) => (
                      <div key={idx} className="py-2.5 flex justify-between items-center text-xs">
                        <span className="font-mono">{mail}</span>
                        <span className="text-[10px] font-mono text-gray-400 uppercase">SUBSCRIBED CURRENT TURN</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* 6. ROLES & SECURITY */}
          {activeTab === 'roles' && (
            <div className="space-y-6">
              <div className={`p-5 rounded-2xl border ${isDark ? 'bg-gray-800/30 border-gray-800' : 'bg-gray-50 border-gray-100'} space-y-4`}>
                <div className="flex items-center space-x-2 text-rose-500">
                  <ShieldAlert className="w-5 h-5" />
                  <h3 className="font-bold text-sm tracking-wide font-display">Zero-Trust Network Access Control</h3>
                </div>
                <p className="text-xs leading-relaxed text-gray-400">
                  All employee accounts are audited through mTLS validation structures. Modifying user access roles requires active Multi-Factor approvals.
                </p>

                <div className="space-y-3">
                  {users.map((usr, idx) => (
                    <div key={idx} className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isDark ? 'bg-gray-800/20 border-gray-800' : 'bg-white border-gray-100 shadow-sm'
                    }`}>
                      <div>
                        <span className="text-xs font-bold block">{usr.name}</span>
                        <span className="text-[10px] font-mono text-gray-400">{usr.email}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-mono bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-md uppercase">
                          {usr.role}
                        </span>
                        <span className="text-[9px] font-mono bg-gray-500/10 text-gray-400 px-2 py-0.5 rounded-md">
                          Perms: {usr.permission}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
