/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  overview: string;
  problem: string;
  challenges: string[];
  solution: string;
  technologies: string[];
  architecture: string; // High-level description
  timeline: string;
  results: string[];
  roi: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'AI Trends' | 'Cloud' | 'ERP' | 'Cybersecurity' | 'Case Study' | 'Tech Trends';
  summary: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
}

export interface Job {
  id: string;
  title: string;
  department: 'Engineering' | 'Consulting' | 'AI & Analytics' | 'Sales & Marketing' | 'Design' | 'Operations';
  location: string;
  type: 'Full-time' | 'Contract' | 'Remote';
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  targetAudience: string;
}

export interface IndustryDetails {
  id: string;
  name: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  benefits: string[];
  techStack: string[];
  successStory: {
    client: string;
    description: string;
    impact: string;
  };
}

export interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company: string;
  subject: string;
  message: string;
  services: string[];
  date: string;
  status: 'New' | 'Contacted' | 'Archived';
}
