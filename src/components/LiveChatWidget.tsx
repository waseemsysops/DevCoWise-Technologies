/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, CheckCircle } from 'lucide-react';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: Date;
}

export default function LiveChatWidget({ isDark }: { isDark: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: "Hello! I am your DEVCOWISE AI Technical Architect. How can I assist with your engineering or digital transformation objectives today?",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Math.random().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate smart backend response
    setTimeout(() => {
      let aiResponseText = "Thank you for sharing. A senior technical consultant from our regional office will review your inquiry. Feel free to use our Contact Page for formal project estimation requests.";
      const query = textToSend.toLowerCase();

      if (query.includes('erp') || query.includes('erpnext') || query.includes('odoo') || query.includes('sap')) {
        aiResponseText = "DEVCOWISE specializes in enterprise-level ERP deployments. We support custom SAP S/4HANA migrations, Frappe/ERPNext customizations, and Odoo multi-tenant setups. Would you like us to schedule a systems audit?";
      } else if (query.includes('ai') || query.includes('generative') || query.includes('llm') || query.includes('gemini') || query.includes('agent')) {
        aiResponseText = "Our AI & Analytics division builds secure, server-authoritative RAG applications, custom agentic workflows using models like Gemini, and predictive machine learning diagnostics. We guarantee full data governance and private model isolation.";
      } else if (query.includes('cloud') || query.includes('devops') || query.includes('kubernetes') || query.includes('aws') || query.includes('azure')) {
        aiResponseText = "We orchestrate multi-region, zero-trust cloud migrations on AWS, Azure, and Google Cloud, utilizing Kubernetes containers, Terraform IaC, and Istio service meshes to guarantee 99.999% uptime.";
      } else if (query.includes('security') || query.includes('cyber') || query.includes('penetration') || query.includes('hack')) {
        aiResponseText = "DEVCOWISE offers comprehensive penetration testing, vulnerability audits, and Zero-Trust architecture alignments. We secure core networks, ERP databases, and client gateways against modern ransomware threats.";
      } else if (query.includes('price') || query.includes('cost') || query.includes('estimate') || query.includes('budget')) {
        aiResponseText = "Enterprise consulting estimates are calculated based on resource allocation matrices. General advisory starts with a scoping phase. You can submit details directly via our Contact Form to receive a custom proposal within 24 hours.";
      } else if (query.includes('career') || query.includes('job') || query.includes('hiring') || query.includes('work')) {
        aiResponseText = "We are active hiring globally! We have openings in AI Engineering, ERP Consulting, Cloud Engineering, and UX Design. You can explore openings and submit applications directly on our Careers tab.";
      }

      const aiMessage: Message = {
        id: Math.random().toString(),
        sender: 'ai',
        text: aiResponseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleOptionClick = (option: string) => {
    handleSendMessage(`Tell me more about ${option}`);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer relative group"
          id="chat-toggle"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute right-full mr-3 top-4 hidden group-hover:inline-block bg-gray-950 text-white text-[10px] font-bold py-1 px-2.5 rounded-lg whitespace-nowrap tracking-wider font-mono">
            CONSULTING ASSISTANT
          </span>
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent border-2 border-white animate-pulse"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          className={`w-[360px] sm:w-[400px] h-[520px] rounded-2xl border flex flex-col shadow-2xl overflow-hidden transition-all duration-300 transform scale-100 origin-bottom-right ${
            isDark ? 'bg-card-dark border-gray-800 text-white' : 'bg-white border-gray-200 text-gray-900'
          }`}
          id="chat-window"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center justify-between text-white">
            <div className="flex items-center space-x-2.5">
              <div className="p-2 rounded-xl bg-white/10">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-wide font-display">DEVCOWISE Architect</h4>
                <div className="flex items-center space-x-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></div>
                  <span className="text-[10px] font-mono tracking-widest uppercase opacity-80">AI AGENT ONLINE</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex items-start space-x-2.5 ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div className={`p-1.5 rounded-lg ${
                  msg.sender === 'user' 
                    ? 'bg-primary text-white' 
                    : isDark ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800'
                }`}>
                  {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                </div>
                <div className={`p-3 rounded-2xl max-w-[78%] text-xs leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-primary/10 text-primary dark:text-secondary font-medium rounded-tr-none'
                    : isDark ? 'bg-gray-800/60 text-gray-300 rounded-tl-none' : 'bg-gray-50 text-gray-700 border border-gray-100 rounded-tl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start space-x-2.5">
                <div className={`p-1.5 rounded-lg ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <Bot className="w-4 h-4 text-gray-400" />
                </div>
                <div className={`p-3 rounded-2xl ${isDark ? 'bg-gray-800/40' : 'bg-gray-50'} flex space-x-1 items-center`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick options */}
          <div className={`px-4 py-2 flex items-center gap-1.5 overflow-x-auto border-t text-[10px] whitespace-nowrap ${
            isDark ? 'border-gray-800 bg-gray-900/25' : 'border-gray-100 bg-gray-50'
          }`}>
            {['ERPNext Suites', 'Generative AI', 'Cloud Scaling', 'Cybersecurity'].map((opt) => (
              <button
                key={opt}
                onClick={() => handleOptionClick(opt)}
                className={`px-2.5 py-1 rounded-full border transition-colors cursor-pointer font-medium ${
                  isDark 
                    ? 'border-gray-800 bg-gray-800 text-gray-300 hover:border-gray-700 hover:text-white' 
                    : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-primary'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Form */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }} 
            className={`p-3 border-t flex items-center space-x-2 ${isDark ? 'border-gray-800 bg-gray-900/50' : 'border-gray-100 bg-white'}`}
          >
            <input
              type="text"
              placeholder="Ask our AI architect anything..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className={`flex-1 px-3 py-2 rounded-xl text-xs outline-none border transition-all ${
                isDark 
                  ? 'bg-gray-800/40 border-gray-800 text-white focus:border-primary' 
                  : 'bg-gray-50 border-gray-200 text-gray-900 focus:border-primary focus:bg-white'
              }`}
            />
            <button
              type="submit"
              className="p-2 rounded-xl bg-primary text-white hover:bg-primary/95 transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
