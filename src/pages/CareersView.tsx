/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Job } from '../types';
import { Briefcase, MapPin, Search, ChevronRight, X, ArrowUpRight, Upload, CheckCircle } from 'lucide-react';

interface CareersViewProps {
  jobs: Job[];
  isDark: boolean;
}

export default function CareersView({ jobs, isDark }: CareersViewProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState('All');
  const [applyingJob, setApplyingJob] = useState<Job | null>(null);

  // Apply Form states
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantResume, setApplicantResume] = useState<File | null>(null);
  const [coverNote, setCoverNote] = useState('');
  const [success, setSuccess] = useState(false);

  const departments = ['All', 'Engineering', 'Consulting', 'AI & Analytics', 'Design', 'Operations'];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = selectedDept === 'All' || job.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (applicantName.trim() && applicantEmail.trim()) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setApplyingJob(null);
        setApplicantName('');
        setApplicantEmail('');
        setApplicantResume(null);
        setCoverNote('');
      }, 4000);
    }
  };

  const processFlow = [
    { step: '01', title: 'Resume Review', desc: 'Our technical recruitment team audits your resume credentials and repositories.' },
    { step: '02', title: 'Technical Screen', desc: 'A 45-minute code review and system design conversation with a Principal Architect.' },
    { step: '03', title: 'Culture Alignment', desc: 'Connect with operations managers to explore corporate values and goals.' },
    { step: '04', title: 'Offer Proposal', desc: 'We issue a comprehensive compensation, health, and equity incentive model.' }
  ];

  return (
    <div className="space-y-24 pb-20 pt-10">
      {/* 1. HERO */}
      <section className="text-center max-w-3xl mx-auto space-y-4 px-6">
        <span className="text-xs font-bold font-mono tracking-widest text-primary uppercase bg-primary/10 px-3.5 py-1.5 rounded-full">
          Hiring Globally
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight font-display">Careers at DEVCOWISE</h1>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-350' : 'text-gray-650'}`}>
          Join our global engineering labs. Build enterprise-grade cloud native platforms, open-core ERP environments, and secure agentic AI tools.
        </p>
      </section>

      {/* 2. RECRUITMENT FLOW */}
      <section className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold font-mono text-primary uppercase tracking-widest block">Recruitment Stages</span>
          <h2 className="text-3xl font-bold tracking-tight font-display">Our Logical Hiring Process</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processFlow.map((flow, idx) => (
            <div 
              key={idx} 
              className={`p-6 rounded-2xl border relative ${
                isDark ? 'bg-card-dark border-gray-800' : 'bg-white border-gray-200 shadow-sm'
              } space-y-4`}
            >
              <span className="text-3xl font-extrabold font-mono text-primary/15 absolute top-4 right-4">{flow.step}</span>
              <h3 className="text-sm font-bold pt-4 font-display">{flow.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{flow.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CURRENT OPENINGS */}
      <section className="max-w-7xl mx-auto px-6 space-y-8" id="openings-section">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <span className="text-xs font-bold font-mono text-primary uppercase tracking-widest block">Active Vacancies</span>
            <h2 className="text-3xl font-bold tracking-tight mt-1 font-display">Explore Current Positions</h2>
          </div>

          {/* Department Selection Pills */}
          <div className="flex flex-wrap gap-2.5">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                  selectedDept === dept
                    ? 'bg-primary text-white shadow-md'
                    : isDark 
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {/* Listings container */}
        <div className="space-y-4">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12 border border-dashed border-gray-800/25 dark:border-gray-100/25 rounded-2xl">
              <Briefcase className="w-10 h-10 text-gray-400 mx-auto mb-3" />
              <p className="text-xs text-gray-400">No active postings match your selected parameters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4">
              {filteredJobs.map((job) => (
                <div 
                  key={job.id} 
                  className={`p-6 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 hover:shadow-md ${
                    isDark ? 'bg-card-dark border-gray-800 hover:border-gray-700' : 'bg-white border-gray-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[9px] font-mono bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-md uppercase">
                        {job.department}
                      </span>
                      <span className="text-[10px] font-mono text-gray-400 flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        <span>{job.location}</span>
                      </span>
                    </div>
                    <h3 className="font-bold text-sm tracking-tight font-display">{job.title}</h3>
                    <p className="text-xs text-gray-400 max-w-xl leading-relaxed">{job.description}</p>
                  </div>

                  <button
                    onClick={() => setApplyingJob(job)}
                    className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary/95 text-white text-xs font-semibold cursor-pointer flex items-center justify-center space-x-1 self-start sm:self-auto shadow-md shadow-primary/20"
                  >
                    <span>Apply Now</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. APPLICATION FORM MODAL */}
      {applyingJob && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div 
            className={`w-full max-w-xl rounded-3xl p-6 md:p-8 border shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto ${
              isDark ? 'bg-card-dark border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'
            }`}
          >
            <button
              onClick={() => setApplyingJob(null)}
              className="absolute right-5 top-5 p-1.5 rounded-lg hover:bg-gray-800/10 dark:hover:bg-white/10 transition-colors cursor-pointer text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            {success ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle className="w-12 h-12 text-accent mx-auto animate-pulse" />
                <h3 className="text-xl font-bold font-display">Application Received!</h3>
                <p className="text-xs text-gray-400 max-w-xs mx-auto">
                  Thank you, {applicantName}. Our tech recruitment lab will audit your qualifications and contact you at {applicantEmail} within 3 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-6">
                <div className="space-y-1.5 border-b border-gray-800/10 dark:border-gray-100/10 pb-4">
                  <span className="text-[9px] font-mono bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-md uppercase">
                    {applyingJob.department}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight font-display">Apply: {applyingJob.title}</h3>
                  <span className="text-xs text-gray-400 font-mono uppercase">{applyingJob.location}</span>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-gray-400 block">Full Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Asim Ahmed"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      required
                      className={`w-full px-3.5 py-2.5 rounded-xl outline-none border ${
                        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-950'
                      }`}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-gray-400 block">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. asim@gmail.com"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      required
                      className={`w-full px-3.5 py-2.5 rounded-xl outline-none border ${
                        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-950'
                      }`}
                    />
                  </div>

                  {/* Simulated File upload */}
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-gray-400 block">Resume CV Upload (PDF/DOC)</label>
                    <div className={`p-6 rounded-xl border-2 border-dashed text-center space-y-2 relative cursor-pointer ${
                      isDark ? 'border-gray-700 bg-gray-800/20 hover:border-primary' : 'border-gray-200 bg-gray-50 hover:border-primary'
                    }`}>
                      <Upload className="w-8 h-8 text-gray-400 mx-auto" />
                      <p className="text-[11px] text-gray-400">Drag & drop your Resume or click to browse</p>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setApplicantResume(e.target.files[0]);
                          }
                        }}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      {applicantResume && (
                        <p className="text-xs text-accent font-semibold">Selected: {applicantResume.name}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-gray-400 block">Covering Note / Repositories</label>
                    <textarea
                      rows={3}
                      placeholder="Brief overview of key software achievements..."
                      value={coverNote}
                      onChange={(e) => setCoverNote(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl outline-none border ${
                        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-950'
                      }`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-primary hover:bg-primary/95 text-white font-semibold text-xs shadow-lg shadow-primary/20 transition-all cursor-pointer"
                >
                  Submit Official Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
