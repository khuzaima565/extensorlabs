/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, RotateCw, Sparkles, Code } from 'lucide-react';
import { GRADIENTS } from '../brandData';

export function GradientExplorerSection() {
  const [selectedGradient, setSelectedGradient] = useState(GRADIENTS[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [gradientDeg, setGradientDeg] = useState<number>(135);

  const activeGradient = GRADIENTS.find(g => g.id === selectedGradient) || GRADIENTS[0];

  // Dynamically calculate style based on degrees adjustment slider
  const getCustomizedCssStyle = (colors: string[]) => {
    return `linear-gradient(${gradientDeg}deg, ${colors.join(', ')})`;
  };

  const handleCopy = (hexString: string, id: string) => {
    navigator.clipboard.writeText(hexString);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="gradient-explorer-component">
      {/* Large Interactive Visualizer Canvas */}
      <div className="lg:col-span-8 bg-[#0b0b0b] border border-neutral-900 rounded-3xl p-6 flex flex-col justify-between h-[480px] relative overflow-hidden group">
        {/* Dynamic Gradient Backdrop (animated based on selection) */}
        <div
          className="absolute inset-0 transition-all duration-1000 ease-in-out opacity-70 group-hover:opacity-85 pointer-events-none"
          style={{ background: getCustomizedCssStyle(activeGradient.colors) }}
        />
        {/* Fine grid mask to make it feel extremely hi-tech */}
        <div className="absolute inset-0 bg-[#050505]/40 mix-blend-multiply pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Floating Headers */}
        <div className="flex items-center justify-between z-10 bg-[#050505]/80 backdrop-blur-md border border-neutral-800/40 p-3 rounded-2xl w-fit sm:w-auto self-start sm:self-stretch">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#7ED957]" />
            <span className="text-[10px] font-mono tracking-widest text-[#7ED957] uppercase font-bold">
              AMBIENT ATMOSPHERE EXPERIMENT
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <span className="text-[10px] text-neutral-400 font-mono">
              COMPONENTS: {activeGradient.colors.length} CORE COLORS
            </span>
          </div>
        </div>

        {/* Center content showing the name of the active gradient boldly */}
        <div className="z-10 text-left max-w-lg mt-auto mb-6 bg-gradient-to-r from-black/80 to-black/20 p-5 rounded-2xl border-l-2 border-[#7ED957] backdrop-blur-sm">
          <span className="font-mono text-[9px] text-[#7ED957] tracking-widest uppercase block mb-1">
            EXQUISITE ATMOSPHERE PRESETS
          </span>
          <h3 className="font-display font-extrabold text-3xl text-white tracking-tight leading-none mb-2">
            {activeGradient.name}
          </h3>
          <p className="text-xs text-neutral-300 font-light leading-relaxed">
            {activeGradient.description}
          </p>
        </div>

        {/* Bottom Panel Customizer parameters */}
        <div className="z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-neutral-800/40 pt-4 bg-black/50 p-4 rounded-xl backdrop-blur-md">
          <div className="flex items-center gap-4">
            <label className="text-[10px] font-mono text-neutral-400 uppercase flex items-center gap-1.5">
              <RotateCw className="w-3.5 h-3.5 text-neutral-500" />
              Angle orientation:
            </label>
            <input
              type="range"
              min="0"
              max="360"
              step="45"
              value={gradientDeg}
              onChange={(e) => setGradientDeg(parseInt(e.target.value))}
              className="w-24 h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#7ED957]"
            />
            <span className="font-mono text-[10px] text-white w-8">{gradientDeg}°</span>
          </div>

          <button
            onClick={() => handleCopy(getCustomizedCssStyle(activeGradient.colors), 'gradient-css')}
            className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-850 px-3.5 py-1.5 rounded-xl text-neutral-300 hover:text-white transition-all text-xs font-mono"
          >
            {copiedId === 'gradient-css' ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#7ED957]" />
                <span className="text-[#7ED957]">CSS CSS COPIED!</span>
              </>
            ) : (
              <>
                <Code className="w-3.5 h-3.5" />
                <span>COPY GRADIENT CSS</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Selector and Swatches sidebar */}
      <div className="lg:col-span-4 flex flex-col justify-between gap-6">
        <div className="bg-[#0c0c0c] border border-neutral-900 rounded-3xl p-5 flex-1 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-neutral-500 tracking-wider uppercase block mb-1">
              brand ecosystem
            </span>
            <h3 className="font-display font-semibold text-lg text-white mb-2">
              Atmosphere Presets
            </h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
              Sophisticated linear gradients developed to frame deep digital products, sliders, newsletters, and high-fidelity display backdrops.
            </p>

            {/* Selector Presets list */}
            <div className="space-y-3.5">
              {GRADIENTS.map((gradient) => {
                const isActive = selectedGradient === gradient.id;

                return (
                  <button
                    key={gradient.id}
                    onClick={() => {
                      setSelectedGradient(gradient.id);
                      setGradientDeg(135); // Reset angle on change
                    }}
                    className={`w-full p-3 rounded-2xl border text-left flex items-center gap-4 transition-all ${
                      isActive
                        ? 'bg-[#121212] border-neutral-800 shadow-md'
                        : 'bg-transparent border-neutral-950 opacity-60 hover:opacity-100 hover:bg-neutral-900/20'
                    }`}
                  >
                    {/* Tiny visual badge */}
                    <div
                      className="w-10 h-10 rounded-xl flex-shrink-0"
                      style={{ background: gradient.cssStyle }}
                    />
                    <div>
                      <div className="text-xs font-semibold text-white">
                        {gradient.name}
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        {gradient.colors.map((col, idx) => (
                          <div
                            key={idx}
                            className="w-2.5 h-2.5 rounded-full border border-black/40"
                            style={{ backgroundColor: col }}
                            title={col}
                          />
                        ))}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Color parameters table */}
          <div className="mt-8 border-t border-neutral-950 pt-4">
            <span className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase block mb-2.5">
              COORDINATES & HEX VALUES
            </span>
            <div className="space-y-1.5 font-mono text-[10px] text-neutral-400">
              {activeGradient.colors.map((color, index) => (
                <div key={index} className="flex items-center justify-between py-1 border-b border-neutral-950">
                  <span>Color stop {((index / (activeGradient.colors.length - 1)) * 100).toFixed(0)}%</span>
                  <button
                    onClick={() => handleCopy(color, `hex-${index}`)}
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>{color}</span>
                    {copiedId === `hex-${index}` ? (
                      <span className="text-[#7ED957] text-[8px]">Copied!</span>
                    ) : (
                      <Copy className="w-2.5 h-2.5 text-neutral-600 hover:text-neutral-500" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
