/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BlogPost } from '../types';
import { BookOpen, Calendar, Clock, User, ArrowRight, X, Sparkles, Globe, Search, RefreshCw, Link } from 'lucide-react';

interface InsightsViewProps {
  blogPosts: BlogPost[];
  isDark: boolean;
}

export default function InsightsView({ blogPosts, isDark }: InsightsViewProps) {
  const [selectedCat, setSelectedCat] = useState('All');
  const [readingPost, setReadingPost] = useState<(BlogPost & { sources?: string[] }) | null>(null);

  // Live real-time trends state
  const [liveQuery, setLiveQuery] = useState('');
  const [liveArticles, setLiveArticles] = useState<(BlogPost & { sources?: string[] })[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const categories = ['All', 'AI Trends', 'Cloud', 'ERP', 'Cybersecurity', 'Tech Trends'];

  // All merged posts (static + live generated)
  const allPosts = [...liveArticles, ...blogPosts];

  const filteredPosts = allPosts.filter(post => {
    return selectedCat === 'All' || post.category === selectedCat;
  });

  const predefinedTopics = [
    "Latest Kubernetes secure multi-tenancy",
    "Gemini 3.5 Flash vs standard agents",
    "ERPNext automated warehouse scaling",
    "Zero-trust cloud network micro-segmentation"
  ];

  const handleFetchTrends = async (customQuery?: string) => {
    const searchQuery = customQuery || liveQuery || "latest enterprise technology trends GenAI Cloud ERP Cybersecurity";
    setIsLoading(true);
    setError(null);
    setLoadingStep(0);

    // Rotate loading messages to create a highly polished experience
    const interval = setInterval(() => {
      setLoadingStep(prev => (prev + 1) % 4);
    }, 2000);

    try {
      const response = await fetch('/api/trends', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: searchQuery }),
      });

      const data = await response.json();
      if (!data.success) {
        throw new Error(data.error || "Failed to generate dynamic trends");
      }

      // Add a visual 'Live' indicator or label to help identify these articles
      const labeledArticles = data.articles.map((art: any) => ({
        ...art,
        id: `live-${art.id}-${Date.now()}`,
        isLive: true
      }));

      setLiveArticles(prev => [...labeledArticles, ...prev]);
      // Switch category filter to 'All' or a specific category of the new articles to show them
      setSelectedCat('All');
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An unexpected error occurred while fetching real-time trends.");
    } finally {
      clearInterval(interval);
      setIsLoading(false);
    }
  };

  const getLoadingMessage = () => {
    switch (loadingStep) {
      case 0: return "Spawning background search threads...";
      case 1: return "Connecting to Google Search Grounding nodes...";
      case 2: return "Evaluating real-time industrial paradigm sources...";
      case 3: return "Generating deep advisory whitepapers with Gemini...";
      default: return "Processing...";
    }
  };

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

      {/* 2. DYNAMIC REAL-TIME RESEARCH GENERATOR */}
      <section className="max-w-4xl mx-auto px-6">
        <div className={`p-6 sm:p-8 rounded-3xl border ${
          isDark 
            ? 'bg-card-dark border-gray-800' 
            : 'bg-white border-gray-200 shadow-md'
        } space-y-6 relative overflow-hidden`}>
          <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <h2 className="text-lg font-bold tracking-tight font-display">Real-Time Technology Advisory Search</h2>
            </div>
            <p className="text-xs text-gray-400">
              Query our live model with Google Search Grounding to automatically fetch, analyze, and generate bespoke advisory whitepapers about any emerging technology.
            </p>
          </div>

          {/* Prompt Input Form */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="E.g., Odoo v18 enterprise upgrades, security patches in Kubernetes v1.30..."
                value={liveQuery}
                onChange={(e) => setLiveQuery(e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs outline-none border transition-all ${
                  isDark 
                    ? 'bg-gray-900/60 border-gray-800 text-white focus:border-primary focus:bg-gray-900' 
                    : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-primary focus:bg-white'
                }`}
              />
            </div>
            <button
              onClick={() => handleFetchTrends()}
              disabled={isLoading}
              className="px-6 py-2.5 rounded-xl bg-primary hover:bg-primary/95 text-white text-xs font-semibold cursor-pointer flex items-center justify-center space-x-2 shadow-md shadow-primary/20 disabled:opacity-50 transition-all shrink-0"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <Globe className="w-3.5 h-3.5" />
                  <span>Fetch Live Advisories</span>
                </>
              )}
            </button>
          </div>

          {/* Predefined suggestion pills */}
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-400 block font-semibold">Suggested Live Trends:</span>
            <div className="flex flex-wrap gap-2">
              {predefinedTopics.map((topic, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setLiveQuery(topic);
                    handleFetchTrends(topic);
                  }}
                  disabled={isLoading}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-medium transition-all text-left ${
                    isDark 
                      ? 'bg-gray-800/40 hover:bg-gray-800 text-gray-300' 
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-100'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Loading view */}
          {isLoading && (
            <div className={`p-6 rounded-2xl border text-center space-y-3 animate-pulse ${
              isDark ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-50 border-gray-100'
            }`}>
              <RefreshCw className="w-8 h-8 text-primary animate-spin mx-auto" />
              <div className="space-y-1">
                <p className="text-xs font-semibold text-primary">{getLoadingMessage()}</p>
                <p className="text-[10px] text-gray-400">Please wait, compiling live technical documentation takes up to 10 seconds...</p>
              </div>
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400">
              {error}
            </div>
          )}
        </div>
      </section>

      {/* 3. CATEGORIES FILTER BAR */}
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
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </section>

      {/* 4. ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredPosts.map((post) => (
          <article 
            key={post.id}
            onClick={() => setReadingPost(post)}
            className={`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between space-y-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
              isDark ? 'bg-card-dark border-gray-800 hover:border-gray-700' : 'bg-white border-gray-200 shadow-sm hover:shadow-lg'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-2.5 text-[10px] font-mono font-medium text-gray-400">
                <span className="bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-md uppercase">
                  {post.category}
                </span>
                
                {/* Real-time search badge */}
                {(post as any).isLive && (
                  <span className="bg-cyan-500/15 text-cyan-400 font-bold px-2 py-0.5 rounded-md uppercase flex items-center gap-1 font-mono">
                    <Globe className="w-3 h-3 text-cyan-400" />
                    LIVE TRENDING
                  </span>
                )}

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

      {/* 5. FULL ARTICLE READER MODAL */}
      {readingPost && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div 
            className={`w-full max-w-2xl rounded-3xl p-6 md:p-8 border shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto ${
              isDark ? 'bg-card-dark border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'
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
                <div className="flex flex-wrap gap-2">
                  <span className="text-[9px] font-mono bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-md uppercase">
                    {readingPost.category}
                  </span>
                  {(readingPost as any).isLive && (
                    <span className="text-[9px] font-mono bg-cyan-500/15 text-cyan-400 font-bold px-2 py-0.5 rounded-md uppercase flex items-center gap-1">
                      <Globe className="w-3 h-3 text-cyan-400" />
                      LIVE GROUNDED
                    </span>
                  )}
                </div>
                
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
              <div className="markdown-body text-xs text-gray-300 space-y-4 whitespace-pre-line leading-relaxed">
                {readingPost.content}
              </div>

              {/* Grounded URLs list if present */}
              {readingPost.sources && readingPost.sources.length > 0 && (
                <div className={`p-4 rounded-xl border space-y-2 ${
                  isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-gray-50 border-gray-100'
                }`}>
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-primary block">Verified Sources Analyzed:</span>
                  <div className="space-y-1.5">
                    {readingPost.sources.map((url, idx) => (
                      <a
                        key={idx}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono text-primary hover:underline flex items-center gap-1.5 break-all"
                      >
                        <Link className="w-3 h-3 text-primary shrink-0" />
                        <span>{url}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* SLA footer */}
              <div className="border-t border-gray-800/10 dark:border-gray-100/10 pt-4 text-[10px] text-gray-400 font-mono flex items-center justify-between">
                <span>VENTUREDIVE CORPORATE ARCHIVES</span>
                <span>SECURED CORE DOCUMENT</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
