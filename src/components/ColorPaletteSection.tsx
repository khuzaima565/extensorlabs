/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, Eye, EyeOff, Sliders, Hash, Layers } from 'lucide-react';
import { COLOR_PALETTE } from '../brandData';

export function ColorPaletteSection() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [colorFormat, setColorFormat] = useState<'hex' | 'rgb' | 'css'>('hex');
  const [selectedColorForAnalysis, setSelectedColorForAnalysis] = useState(COLOR_PALETTE[3].hex); // Cyber Green defaults

  const handleCopy = (colorString: string, id: string) => {
    navigator.clipboard.writeText(colorString);
    setCopiedColor(id);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const getFormattedColorCode = (hex: string) => {
    if (colorFormat === 'hex') return hex;
    if (colorFormat === 'rgb') {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgb(${r}, ${g}, ${b})`;
    }
    return `var(--ext-${hex.slice(1).toLowerCase()})`;
  };

  const activeColorObject = COLOR_PALETTE.find(c => c.hex === selectedColorForAnalysis) || COLOR_PALETTE[3];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="color-palette-component">
      {/* Palette Color Grid Swatches */}
      <div className="lg:col-span-8 flex flex-col justify-between">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-[#0c0c0c] border border-neutral-900 p-2.5 rounded-2xl">
          <div className="flex items-center gap-2">
            <Hash className="w-4 h-4 text-[#7ED957]" />
            <span className="text-xs font-mono tracking-wider text-neutral-400 uppercase">
              Brand Swatches (Click Hex code to Copy)
            </span>
          </div>

          <div className="flex items-center gap-1.5 bg-[#121212] p-1 rounded-xl border border-neutral-800">
            {(['hex', 'rgb', 'css'] as const).map((fmt) => (
              <button
                key={fmt}
                onClick={() => setColorFormat(fmt)}
                className={`px-3 py-1 text-[10px] font-mono rounded-lg transition-all ${
                  colorFormat === fmt
                    ? 'bg-[#7ED957] text-[#050505] font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {fmt.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Responsive Swatch Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-6">
          {COLOR_PALETTE.map((color) => {
            const formattedCode = getFormattedColorCode(color.hex);
            const isCopied = copiedColor === color.hex;
            const isSelected = selectedColorForAnalysis === color.hex;

            return (
              <motion.div
                key={color.name}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => setSelectedColorForAnalysis(color.hex)}
                className={`bg-[#0c0c0c] border cursor-pointer rounded-2xl overflow-hidden transition-all relative group flex flex-col justify-between h-[210px] ${
                  isSelected
                    ? 'border-[#7ED957] ring-1 ring-[#7ED957]/30 shadow-[0_0_20px_rgba(126,217,87,0.04)]'
                    : 'border-neutral-900 hover:border-neutral-800'
                }`}
              >
                {/* Visual block */}
                <div
                  className="h-24 w-full relative transition-transform duration-300"
                  style={{ backgroundColor: color.hex }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  
                  {/* Select Highlight Dot */}
                  {isSelected && (
                    <span className="absolute top-3 left-3 bg-[#050505] text-[#7ED957] text-[9px] font-mono px-2 py-0.5 rounded-full border border-[#7ED957]/30">
                      SELECTED
                    </span>
                  )}

                  {/* Copy Button icon overlay */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(formattedCode, color.hex);
                    }}
                    className="absolute top-2.5 right-2.5 w-7 h-7 bg-[#050505]/75 hover:bg-[#050505] rounded-lg flex items-center justify-center border border-neutral-800/40 opacity-0 group-hover:opacity-100 transition-opacity"
                    title={`Copy as ${colorFormat.toUpperCase()}`}
                  >
                    {isCopied ? (
                      <Check className="w-3.5 h-3.5 text-[#7ED957]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white" />
                    )}
                  </button>
                </div>

                {/* Meta details */}
                <div className="p-3.5 bg-[#0c0c0c]">
                  <div className="text-xs font-semibold text-white tracking-tight truncate">
                    {color.name}
                  </div>
                  <div className="font-mono text-[9px] text-[#7ED957] mt-1 font-bold">
                    {formattedCode}
                  </div>
                  <div className="text-[10px] text-neutral-500 font-mono mt-0.5 capitalize">
                    {color.type} swatch
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Global Export Tokens Snippet block */}
        <div className="bg-[#121212] border border-neutral-900 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-mono text-neutral-500 tracking-wider">
              TAILWIND CONFIG EXTENSION CSS
            </span>
            <button
              onClick={() => handleCopy(`colors: {
  extensor: {
    black: '#050505',
    carbon: '#121212',
    slate: '#1B1B1B',
    green: '#7ED957',
    emerald: '#1A3A0A',
    platinum: '#A3A3A3',
  },
}`, 'tailwind-snippet')}
              className="text-[10px] font-mono text-[#7ED957] flex items-center gap-1 hover:underline"
            >
              {copiedColor === 'tailwind-snippet' ? 'Copied' : 'Copy Theme Config'}
            </button>
          </div>
          <pre className="text-[10px] font-mono text-neutral-400 overflow-x-auto text-left leading-relaxed">
{`colors: {
  extensor: {
    black: '#050505',     carbon: '#121212',
    slate: '#1B1B1B',     green: '#7ED957',
    emerald: '#1A3A0A',   platinum: '#A3A3A3',
  }
}`}
          </pre>
        </div>
      </div>

      {/* Premium Guidelines & WCAG compliance validator panel */}
      <div className="lg:col-span-4 flex flex-col justify-between gap-6">
        <div className="bg-[#0c0c0c] border border-neutral-900 rounded-3xl p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1.5 mb-2">
              <Sliders className="w-4 h-4 text-[#7ED957]" />
              <span className="text-xs font-mono text-[#7ED957] tracking-wider uppercase">
                Contrast & Accessibility
              </span>
            </div>
            <h3 className="font-display font-semibold text-lg text-white mb-2">
              WCAG 2.1 Diagnostics
            </h3>
            <p className="text-xs font-light text-neutral-400 leading-relaxed mb-4">
              Real-time accessibility diagnostics comparing selected color <span className="font-bold text-white">{activeColorObject.name}</span> against system neutral backdrops.
            </p>

            {/* Simulated Canvas block */}
            <div className="rounded-2xl p-4 border border-neutral-900 mb-4 transition-all duration-300 relative" style={{ backgroundColor: '#050505' }}>
              <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-neutral-500">
                <span>SIMULATED CANVAS</span>
                <span className="text-[#7ED957]">#050505 Neutral</span>
              </div>
              <div className="h-16 flex items-center justify-center rounded-xl" style={{ border: `1px solid ${activeColorObject.hex}22` }}>
                <span className="font-display font-bold text-lg" style={{ color: activeColorObject.hex }}>
                  Extensor Guidelines
                </span>
              </div>
              <div className="text-[10px] font-mono text-center text-neutral-400 mt-2">
                Sample render on Obsidian Black Background
              </div>
            </div>

            {/* Accessibility scores */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#121212]/50 border border-neutral-900">
                <div>
                  <div className="text-xs font-semibold text-neutral-300">Black Contrast Ratio</div>
                  <div className="text-[10px] text-neutral-500 font-mono mt-0.5">Recommended format: white on black headers</div>
                </div>
                <div className="font-mono text-sm font-extrabold text-white bg-neutral-900 px-3 py-1 rounded-lg border border-neutral-800">
                  {activeColorObject.contrastWithBlack}
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-[#121212]/50 border border-neutral-900">
                <div>
                  <div className="text-xs font-semibold text-neutral-300">White Contrast Ratio</div>
                  <div className="text-[10px] text-neutral-500 font-mono mt-0.5">Recommended format: dark on white text</div>
                </div>
                <div className="font-mono text-sm font-extrabold text-white bg-neutral-900 px-3 py-1 rounded-lg border border-neutral-800">
                  {activeColorObject.contrastWithWhite}
                </div>
              </div>
            </div>
          </div>

          {/* Guidelines on color use */}
          <div className="mt-5 border-t border-neutral-900 pt-4">
            <div className="text-[10px] font-mono text-[#7ED957] tracking-wider uppercase mb-1.5">
              USAGE DIRECTIVE
            </div>
            <p className="text-xs font-light text-neutral-300 leading-relaxed">
              {activeColorObject.usage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
