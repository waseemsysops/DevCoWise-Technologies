import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Sun, Moon, Monitor, Check, Sparkles, Shield, Cpu, Flame } from 'lucide-react';
import { useTheme, ThemeType, ModeType, themeConfigs } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

export default function ThemeSelector() {
  const { theme, setTheme, mode, setMode, resolvedMode } = useTheme();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const themes: { id: ThemeType; name: string; desc: string; color: string; icon: any }[] = [
    { 
      id: 'BLUE', 
      name: t('theme.blue_name', 'Tech Blue'), 
      desc: t('theme.blue_desc', 'Enterprise Cloud'), 
      color: '#2563EB',
      icon: Cpu 
    },
    { 
      id: 'PURPLE', 
      name: t('theme.purple_name', 'AI Purple'), 
      desc: t('theme.purple_desc', 'Generative Artificial Intelligence'), 
      color: '#7C3AED',
      icon: Sparkles 
    },
    { 
      id: 'EMERALD', 
      name: t('theme.emerald_name', 'Cyber Emerald'), 
      desc: t('theme.emerald_desc', 'Zero-Trust Infrastructure'), 
      color: '#059669',
      icon: Shield 
    },
  ];

  const modes: { id: ModeType; label: string; icon: any }[] = [
    { id: 'light', label: t('theme.mode_light', 'Day Mode'), icon: Sun },
    { id: 'dark', label: t('theme.mode_dark', 'Twilight'), icon: Moon },
    { id: 'midnight', label: t('theme.mode_midnight', 'Midnight'), icon: Flame },
    { id: 'system', label: t('theme.mode_system', 'Auto System'), icon: Monitor },
  ];

  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`mb-3 w-80 rounded-2xl p-4 shadow-2xl border backdrop-blur-xl ${
              resolvedMode === 'dark' 
                ? 'bg-[#0A0D1A]/95 text-white border-white/10 shadow-black/40' 
                : 'bg-white/95 text-gray-900 border-gray-200/80 shadow-gray-300/50'
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-500/10 pb-3 mb-3">
              <div className="flex items-center space-x-2">
                <Palette className="w-4 h-4 text-primary animate-pulse" />
                <span className="font-bold text-sm tracking-tight font-display">
                  {t('theme.settings_title', 'Theme Customization')}
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-wider font-mono opacity-60 bg-primary/10 px-2 py-0.5 rounded-full text-primary font-bold">
                Design System v2
              </span>
            </div>

            {/* Select Theme Option */}
            <div className="space-y-2 mb-4">
              <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block font-bold">
                {t('theme.select_brand', 'Enterprise Themes')}
              </label>
              <div className="space-y-1.5">
                {themes.map((th) => {
                  const isActive = theme === th.id;
                  const Icon = th.icon;
                  return (
                    <button
                      key={th.id}
                      onClick={() => setTheme(th.id)}
                      className={`w-full text-left p-2.5 rounded-xl border flex items-center justify-between transition-all cursor-pointer relative overflow-hidden group ${
                        isActive
                          ? 'border-primary bg-primary/10 text-primary font-bold shadow-sm'
                          : 'border-transparent hover:bg-gray-500/5 text-inherit'
                      }`}
                    >
                      {/* Left color bar */}
                      <div 
                        className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300" 
                        style={{ backgroundColor: th.color }}
                      />

                      <div className="flex items-center space-x-3 pl-1.5">
                        <div 
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-white"
                          style={{ backgroundColor: th.color }}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold leading-none">{th.name}</div>
                          <div className="text-[10px] opacity-60 mt-0.5 leading-none font-sans font-medium">{th.desc}</div>
                        </div>
                      </div>

                      {isActive && (
                        <motion.div 
                          layoutId="activeThemeCheck"
                          className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary"
                        >
                          <Check className="w-3 h-3" />
                        </motion.div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Select Display Mode */}
            <div className="space-y-2 pt-1 border-t border-gray-500/10">
              <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block font-bold">
                {t('theme.select_mode', 'Display Mode')}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {modes.map((md) => {
                  const isActive = mode === md.id;
                  const ModeIcon = md.icon;
                  return (
                    <button
                      key={md.id}
                      onClick={() => setMode(md.id)}
                      className={`py-2 rounded-xl border text-xs flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                        isActive
                          ? 'border-primary bg-primary/10 text-primary font-bold shadow-sm'
                          : 'border-transparent hover:bg-gray-500/5 text-inherit opacity-75 hover:opacity-100'
                      }`}
                    >
                      <ModeIcon className="w-4.5 h-4.5" />
                      <span className="text-[10px] font-medium">{md.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating widget trigger */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 w-12 rounded-full shadow-2xl flex items-center justify-center cursor-pointer relative group text-white z-50 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
          boxShadow: '0 8px 30px var(--glow-color)',
        }}
        id="theme-manager-trigger"
      >
        {/* Glow halo */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
        <Palette className="w-5 h-5 animate-spin-slow" />
      </motion.button>
    </div>
  );
}
