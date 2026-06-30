/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { productsData } from '../data/products';
import { Database, ShieldCheck, Sparkles, Code, Check } from 'lucide-react';

export default function ProductsView({ isDark }: { isDark: boolean }) {
  const iconsMap: { [key: string]: any } = {
    'wise-erp': Database,
    'wise-crm': Sparkles,
    'wise-hrms': Code,
    'wise-wms': ShieldCheck,
    'wise-hospital': Database,
    'wise-school': Sparkles
  };

  return (
    <div className="space-y-24 pb-20 pt-10">
      {/* 1. HERO */}
      <section className="text-center max-w-3xl mx-auto space-y-6 px-6">
        <span className="text-xs font-bold font-mono tracking-widest text-primary uppercase bg-primary/10 px-3.5 py-1.5 rounded-full">
          Proprietary Applications
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight font-display">Bespoke Software Products</h1>
        <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-350' : 'text-gray-650'}`}>
          In addition to custom advisory and deployments, DEVCOWISE licenses secure, modular, highly customized application cores optimized for high-throughput enterprise setups.
        </p>
      </section>

      {/* 2. CATALOG GRID */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {productsData.map((prod) => {
          const Icon = iconsMap[prod.id] || Database;
          return (
            <div 
              key={prod.id} 
              className={`p-8 rounded-3xl border flex flex-col justify-between space-y-6 ${
                isDark ? 'bg-card-dark border-gray-800 text-white' : 'bg-white border-gray-200 shadow-lg text-gray-900'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-primary">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display">{prod.name}</h3>
                    <span className="text-[10px] font-mono text-gray-400 font-semibold uppercase block">{prod.tagline}</span>
                  </div>
                </div>

                <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {prod.description}
                </p>

                <div className="space-y-2">
                  <h4 className="text-[10px] font-bold font-mono tracking-widest text-primary uppercase">Core Features</h4>
                  <div className="space-y-1.5">
                    {prod.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs">
                        <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400 leading-normal">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800/10 dark:border-gray-100/10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <strong className="text-gray-400 font-medium font-mono">TARGET AUDIENCE:</strong>
                  <p className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-wide font-semibold">{prod.targetAudience}</p>
                </div>
                <span className="text-[9px] font-mono text-accent bg-accent/10 font-bold px-2 py-1 rounded-lg">
                  SCALABLE CODE CORE
                </span>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
