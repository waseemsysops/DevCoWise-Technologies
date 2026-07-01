/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, HelpCircle, MessageSquare, Loader2 } from 'lucide-react';
import { ContactInquiry } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ContactViewProps {
  onSubmitInquiry: (inq: Omit<ContactInquiry, 'id' | 'date' | 'status'>) => void;
  isDark: boolean;
}

export default function ContactView({ onSubmitInquiry, isDark }: ContactViewProps) {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [subject, setSubject] = useState('General Systems Audit');
  const [message, setMessage] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Active Office Tab
  const [activeOffice, setActiveOffice] = useState<string>('KSA');

  const offices = [
    { id: 'KSA', country: 'Saudi Arabia', city: 'Riyadh', address: 'Olaya District, Kingdom Tower Level 22', email: 'ksa.sales@devcowise.com', phone: '+966 11 400 9221' },
    { id: 'PK', country: 'Pakistan', city: 'Islamabad', address: 'Evacuee Trust Complex, Sector F-5/1', email: 'pk.lab@devcowise.com', phone: '+92 51 282 1445' },
    { id: 'UAE', country: 'United Arab Emirates', city: 'Dubai', address: 'Marina Plaza, Dubai Marina Level 14', email: 'uae.sales@devcowise.com', phone: '+971 4 455 8332' },
    { id: 'UK', country: 'United Kingdom', city: 'London', address: '30 St Mary Axe (The Gherkin), Level 10', email: 'uk.sales@devcowise.com', phone: '+44 20 7456 2211' },
    { id: 'US', country: 'United States', city: 'New York', address: 'One World Trade Center, Suite 85', email: 'us.sales@devcowise.com', phone: '+1 212 555 0199' }
  ];

  const currentOffice = offices.find(off => off.id === activeOffice) || offices[0];

  const servicesList = [
    'Custom Software', 'Generative AI Pipelines', 'Cloud Native & DevOps', 
    'ERPNext Solutions', 'Odoo Implementations', 'Cybersecurity ZTNA', 'UI/UX Design'
  ];

  const toggleService = (srv: string) => {
    setSelectedServices(prev => 
      prev.includes(srv) ? prev.filter(s => s !== srv) : [...prev, srv]
    );
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company.trim(),
      subject,
      message: message.trim(),
      services: selectedServices.length > 0 ? selectedServices.join(', ') : 'General Scoping',
      _subject: `New DEVCOWISE Inquiry from ${name.trim()} (${company.trim()})`,
    };

    try {
      // Direct integration to FormSubmit proxying emails securely to devcowisetech@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/devcowisetech@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      // Submit locally anyway to keep the interactive admin dashboard updated
      onSubmitInquiry({
        name,
        email,
        phone,
        company,
        subject,
        message,
        services: selectedServices.length > 0 ? selectedServices : ['General Scoping']
      });

      setSubmitted(true);
      setName('');
      setEmail('');
      setPhone('');
      setCompany('');
      setSubject('General Systems Audit');
      setMessage('');
      setSelectedServices([]);
      
    } catch (err: any) {
      console.error('Email dispatch error:', err);
      // Fallback: system is offline/cors block, but we still log locally in state so user doesn't lose progress
      onSubmitInquiry({
        name,
        email,
        phone,
        company,
        subject,
        message,
        services: selectedServices.length > 0 ? selectedServices : ['General Scoping']
      });

      setSubmitError(t('contact.error_notice', 'Inquiry logged in client database, but could not dispatch directly via server. We will contact you shortly!'));
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-24 pb-20 pt-10">
      {/* 1. HERO */}
      <section className="text-center max-w-3xl mx-auto space-y-4 px-6">
        <span className="text-xs font-bold font-mono tracking-widest text-primary uppercase bg-primary/10 px-3.5 py-1.5 rounded-full">
          {t('contact.badge', 'Systems Audit Scoping')}
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight font-display">
          {t('contact.title', 'Initiate System Proposals')}
        </h1>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {t('contact.subtitle', 'Secure our consulting architects. Fill out our systems requirements form or connect with our international offices below.')}
        </p>
      </section>

      {/* 2. OFFICE LOCATION TABS & CO-ORDINATES */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Tab Buttons & Coordinates */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-bold font-mono text-primary uppercase tracking-widest block">
            {t('contact.office_directories', 'Office Directories')}
          </span>
          <div className="flex flex-wrap gap-2">
            {offices.map((off) => (
              <button
                key={off.id}
                onClick={() => setActiveOffice(off.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-colors ${
                  activeOffice === off.id
                    ? 'bg-primary text-white shadow'
                    : isDark 
                      ? 'bg-card-dark border border-gray-800 text-gray-400 hover:text-white' 
                      : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {off.country}
              </button>
            ))}
          </div>

          <div className={`p-6 rounded-2xl border space-y-4 ${
            isDark ? 'bg-card-dark border-gray-800' : 'bg-white border-gray-200 shadow-sm'
          }`}>
            <h3 className="font-bold text-sm tracking-wide font-display">{currentOffice.city}, {currentOffice.country}</h3>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start space-x-2.5 text-gray-400">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{currentOffice.address}</span>
              </div>
              <div className="flex items-start space-x-2.5 text-gray-400">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-mono">{currentOffice.email}</span>
              </div>
              <div className="flex items-start space-x-2.5 text-gray-400">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-mono">{currentOffice.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. CORE PROPOSAL FORM */}
        <div className="lg:col-span-7">
          <div className={`p-8 rounded-3xl border space-y-6 ${
            isDark ? 'bg-card-dark border-gray-800 text-white' : 'bg-white border-gray-200 shadow-lg text-gray-950'
          }`} id="contact-form-pane">
            <div className="flex items-center space-x-2.5 border-b border-gray-800/10 dark:border-gray-100/10 pb-4">
              <MessageSquare className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-sm tracking-wide font-mono uppercase">
                {t('contact.blueprint_header', 'Requirements Scoping Blueprint')}
              </h3>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4 text-xs">
                <CheckCircle className="w-12 h-12 text-accent mx-auto animate-pulse" />
                <h3 className="text-xl font-bold font-display text-accent">
                  {t('contact.submitted_title', 'Proposal Request Logged!')}
                </h3>
                <p className="text-gray-400 max-w-sm mx-auto leading-relaxed">
                  {submitError ? submitError : t('contact.submitted_desc', 'Thank you! Your systems blueprint has been securely dispatched to our system. A senior systems architect will draft a scoping report and contact you at the provided address within 24 hours.')}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setSubmitError(null);
                  }}
                  className="px-6 py-2 rounded-xl bg-primary hover:bg-primary/90 text-white font-medium text-xs mt-2 transition-all cursor-pointer"
                >
                  {t('contact.send_another', 'Send Another Message')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-gray-400 block">
                      {t('contact.label_name', 'Full Name')}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Harris Khan"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className={`w-full px-3.5 py-2.5 rounded-xl outline-none border ${
                        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-950'
                      }`}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-gray-400 block">
                      {t('contact.label_email', 'Corporate Email')}
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. harris@atlas.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className={`w-full px-3.5 py-2.5 rounded-xl outline-none border ${
                        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-950'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-gray-400 block">
                      {t('contact.label_company', 'Corporate Group / Company')}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Atlas Heavy Industries"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                      className={`w-full px-3.5 py-2.5 rounded-xl outline-none border ${
                        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-950'
                      }`}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-mono text-[10px] uppercase tracking-wider text-gray-400 block">
                      {t('contact.label_subject', 'Consulting Subject')}
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-xl outline-none border ${
                        isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-750'
                      }`}
                    >
                      <option value="General Systems Audit">General Systems Audit</option>
                      <option value="ERPNext Implementation">ERPNext Implementation</option>
                      <option value="Odoo Tailoring">Odoo Tailoring</option>
                      <option value="AI Agent Pipelines">AI Agent Pipelines</option>
                      <option value="Zero-Trust Cloud Migration">Zero-Trust Cloud Migration</option>
                    </select>
                  </div>
                </div>

                {/* Multiple select services */}
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-wider text-gray-400 block">
                    {t('contact.label_services', 'Select Target Services Requirements')}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {servicesList.map((srv) => {
                      const selected = selectedServices.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`px-3 py-1.5 rounded-xl text-[11px] font-medium transition-colors cursor-pointer ${
                            selected
                              ? 'bg-primary text-white border border-primary shadow'
                              : isDark
                                ? 'bg-gray-800/60 border border-gray-700 text-gray-300 hover:text-white'
                                : 'bg-gray-50 border border-gray-200 text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[10px] uppercase tracking-wider text-gray-400 block">
                    {t('contact.label_message', 'Infrastructure Parameters / Message')}
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe legacy system databases, active user volumes, compliance rules..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className={`w-full px-3.5 py-2.5 rounded-xl outline-none border ${
                      isDark ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-gray-950'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-primary hover:bg-primary/95 text-white font-semibold text-xs shadow-lg shadow-primary/20 transition-all cursor-pointer flex items-center justify-center space-x-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{t('contact.submitting', 'Sending Security Scoping Proposal...')}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{t('contact.btn_submit', 'Submit Corporate Proposal')}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
