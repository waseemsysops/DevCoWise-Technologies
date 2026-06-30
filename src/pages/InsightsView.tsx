/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BlogPost } from '../types';
import { BookOpen, Calendar, Clock, User, ArrowRight, X } from 'lucide-react';

interface InsightsViewProps {
  blogPosts: BlogPost[];
  isDark: boolean;
}

export default function InsightsView({ blogPosts, isDark }: InsightsViewProps) {
  const [selectedCat, setSelectedCat] = useState('All');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  const categories = ['All', 'AI Trends', 'Cloud', 'ERP', 'Cybersecurity', 'Tech Trends'];

  const filteredPosts = blogPosts.filter(post => {
    return selectedCat === 'All' || post.category === selectedCat;
  });

  return (
    <div className="space-y-12 pb-20 pt-10">
      {/* 1. HERO */}
      <section className="text-center max-w-3xl mx-auto space-y-4 px-6">
        <span className="text-xs font-bold font-mono tracking-widest text-primary uppercase bg-primary/10 px-3.5 py-1.5 rounded-full">
          Knowledge Ecosystem
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight font-display">Insights & Technology Trends</h1>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-350' : 'text-gray-650'}`}>
          Stay ahead of industrial paradigms. Explore our senior engineers' advisory whitepapers on generative AI pipelines, cyber defense alignments, and ERP scaling models.
        </p>
      </section>

      {/* 2. CATEGORIES FILTER BAR */}
      <section className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-2.5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
              selectedCat === cat
                ? 'bg-primary text-white shadow-md'
                : isDark
                  ? 'bg-card-dark border border-gray-800 text-gray-300 hover:bg-gray-800'
                  : 'bg-white border border-gray-150 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* 3. ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.map((post) => (
          <article 
            key={post.id}
            onClick={() => setReadingPost(post)}
            className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between space-y-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
              isDark ? 'bg-card-dark border-gray-800 hover:border-gray-700' : 'bg-white border-gray-150 shadow-sm hover:shadow-lg'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2.5 text-[10px] font-mono font-medium text-gray-400">
                <span className="bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-md uppercase">
                  {post.category}
                </span>
                <span>&bull;</span>
                <span className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{post.date}</span>
                </span>
                <span>&bull;</span>
                <span className="flex items-center space-x-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              <h3 className={`text-lg sm:text-xl font-bold tracking-tight font-display ${isDark ? 'text-white hover:text-primary' : 'text-gray-950 hover:text-primary'} transition-colors`}>
                {post.title}
              </h3>

              <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                {post.summary}
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-gray-800/10 dark:border-gray-100/10 pt-4 text-xs font-semibold">
              <span className="flex items-center space-x-1.5 text-gray-400">
                <User className="w-4 h-4 text-primary" />
                <span className="font-medium">BY: {post.author}</span>
              </span>
              <span className="text-primary hover:text-primary/80 transition-colors flex items-center space-x-1">
                <span>Read Advisory</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </article>
        ))}
      </section>

      {/* 4. FULL ARTICLE READER MODAL */}
      {readingPost && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div 
            className={`w-full max-w-2xl rounded-3xl p-6 md:p-8 border shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto ${
              isDark ? 'bg-card-dark border-gray-800 text-white' : 'bg-white border-gray-150 text-gray-900'
            }`}
          >
            <button
              onClick={() => setReadingPost(null)}
              className="absolute right-5 top-5 p-1.5 rounded-lg hover:bg-gray-800/10 dark:hover:bg-white/10 transition-colors cursor-pointer text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              {/* Header */}
              <div className="space-y-3 border-b border-gray-800/10 dark:border-gray-100/10 pb-4 pr-10">
                <span className="text-[9px] font-mono bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-md uppercase">
                  {readingPost.category}
                </span>
                <h2 className="text-2xl font-extrabold tracking-tight font-display">{readingPost.title}</h2>
                <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-gray-400">
                  <span className="flex items-center space-x-1">
                    <User className="w-3.5 h-3.5 text-primary" />
                    <span>Author: {readingPost.author}</span>
                  </span>
                  <span>&bull;</span>
                  <span>Published: {readingPost.date}</span>
                  <span>&bull;</span>
                  <span>Read Time: {readingPost.readTime}</span>
                </div>
              </div>

              {/* Body */}
              <div className="markdown-body text-xs text-gray-300 space-y-4 whitespace-pre-line">
                {readingPost.content}
              </div>

              {/* SLA footer */}
              <div className="border-t border-gray-800/10 dark:border-gray-100/10 pt-4 text-[10px] text-gray-400 font-mono flex items-center justify-between">
                <span>DEVCOWISE CORPORATE ARCHIVES</span>
                <span>SECURED CORE DOCUMENT</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
