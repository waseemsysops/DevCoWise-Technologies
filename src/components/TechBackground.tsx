import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

export default function TechBackground() {
  const { resolvedMode, theme } = useTheme();
  const isDark = resolvedMode === 'dark';

  // Binary stream generator helper
  const [binaryColumns, setBinaryColumns] = useState<{ id: number; left: number; delay: number; duration: number; text: string }[]>([]);

  useEffect(() => {
    // Generate static-dynamic binary matrix streams that fade-in/out beautifully
    const columns = Array.from({ length: 15 }).map((_, i) => {
      const binaries = Array.from({ length: 8 })
        .map(() => Math.round(Math.random()).toString())
        .join('');
      return {
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 12 + Math.random() * 20,
        text: binaries,
      };
    });
    setBinaryColumns(columns);
  }, [theme]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* 1. Theme-Reactive Glowing Aura Clouds (Wandering Lights resembling modern liquid mesh gradients) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft core spot left */}
        <motion.div 
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -60, 40, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[-15%] left-[-15%] w-[65vw] h-[65vw] rounded-full glow-spot opacity-40 dark:opacity-30"
        />

        {/* Soft core spot right */}
        <motion.div 
          animate={{
            x: [0, -70, 40, 0],
            y: [0, 50, -50, 0],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[-20%] right-[-15%] w-[70vw] h-[70vw] rounded-full glow-spot opacity-40 dark:opacity-30"
        />

        {/* Dynamic center accent core spotlight */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 0.85, 1],
            opacity: [0.12, 0.22, 0.1, 0.12],
            x: [0, 30, -30, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] rounded-full glow-spot-accent"
        />
      </div>

      {/* 2. Elegant Minimal Cyber Binary Matrix Stream Overlay (Soft, deeply faded waterfall of vertical information) */}
      <div className="absolute inset-0 opacity-[0.012] dark:opacity-[0.025] transition-opacity duration-1000">
        {binaryColumns.map((col) => (
          <div
            key={col.id}
            className="absolute font-mono text-[9px] text-primary tracking-widest writing-vertical uppercase pointer-events-none"
            style={{
              left: `${col.left}%`,
              top: `-100px`,
              animation: `matrix-fall ${col.duration}s linear infinite`,
              animationDelay: `${col.delay}s`,
            }}
          >
            {col.text.split('').map((char, index) => (
              <div 
                key={index} 
                className="my-1.5 transition-all duration-500"
                style={{
                  opacity: index === col.text.length - 1 ? 1 : 0.4 + (index / col.text.length) * 0.5,
                  textShadow: index === col.text.length - 1 ? '0 0 8px var(--primary)' : 'none',
                  fontWeight: index === col.text.length - 1 ? 'bold' : 'normal'
                }}
              >
                {char}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* SVG Pattern Definitions & Animation Embeds */}
      <style>{`
        @keyframes matrix-fall {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }
        @keyframes float-y {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>
    </div>
  );
}
