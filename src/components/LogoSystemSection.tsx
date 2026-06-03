/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, Grid, Layers, ZoomIn, Download, Sliders, ShieldCheck } from 'lucide-react';
import { LOGO_VARIANTS } from '../brandData';

export function LogoSystemSection() {
  const [selectedVariant, setSelectedVariant] = useState(LOGO_VARIANTS[0].id);
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [scale, setScale] = useState(1);

  const activeVariant = LOGO_VARIANTS.find(v => v.id === selectedVariant) || LOGO_VARIANTS[0];

  // Raw SVG codes for copying
  const svgArrowMark = `<svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" width="72" height="72">
  <rect width="72" height="72" rx="12" fill="white"/>
  <path d="M20 52 L20 28 Q20 20 28 20 L52 20 L52 36 L36 36 Q28 36 28 44 L28 52 Z" fill="black"/>
</svg>`;

  const svgFullLogo = `<svg viewBox="0 0 280 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="280" height="80">
  <!-- Arrow mark container -->
  <g transform="translate(15, 10)">
    <rect width="60" height="60" rx="10" fill="#FFFFFF"/>
    <path d="M16 43 L16 23 Q16 16 23 16 L43 16 L43 29 L29 29 Q23 29 23 36 L23 43 Z" fill="#000000"/>
  </g>
  <!-- Wordmark text -->
  <text x="90" y="48" font-family="'Sora', sans-serif" font-weight="800" font-size="28" fill="#FFFFFF" letter-spacing="-0.03em">
    Extensor <tspan fill="#7ED957">Lab°s</tspan>
  </text>
</svg>`;

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="logo-system-component">
      {/* Visual Workspace */}
      <div className="lg:col-span-7 bg-[#0b0b0b] border border-neutral-800 rounded-3xl p-6 flex flex-col justify-between min-h-[460px] relative overflow-hidden group">
        {/* Ambient Gradient Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        {/* Dynamic decorative backdrop circles when Guidelines are on */}
        <AnimatePresence>
          {showGuidelines && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-dashed border-[#7ED957]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full border border-dashed border-neutral-700" />
              {/* Center point crosshair */}
              <div className="absolute top-1/2 left-1/2 w-4 h-[1px] bg-[#7ED957] -translate-x-1/2" />
              <div className="absolute top-1/2 left-1/2 h-4 w-[1px] bg-[#7ED957] -translate-y-1/2" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7ED957] animate-pulse" />
            <span className="text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
              STUDIO CANVAS
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[#121212] border border-neutral-800 p-1.5 rounded-xl">
            <button
              onClick={() => setShowGuidelines(!showGuidelines)}
              className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg transition-all ${
                showGuidelines
                  ? 'bg-[#7ED957]/15 text-[#7ED957] border border-[#7ED957]/30'
                  : 'text-neutral-400 hover:text-white border border-transparent'
              }`}
              title="Toggle Layout Guidelines"
            >
              <Grid className="w-3.5 h-3.5" />
              <span>Guidelines</span>
            </button>

            <div className="w-[1px] h-4 bg-neutral-800" />

            {/* Scale Slider */}
            <div className="flex items-center gap-2 px-2 text-xs text-neutral-400">
              <ZoomIn className="w-3.5 h-3.5" />
              <input
                type="range"
                min="0.5"
                max="1.5"
                step="0.1"
                value={scale}
                onChange={(e) => setScale(parseFloat(e.target.value))}
                className="w-16 h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#7ED957]"
              />
              <span className="font-mono text-[10px] w-8">{(scale * 100).toFixed(0)}%</span>
            </div>
          </div>
        </div>

        {/* Logo Interactive Presenter Stage */}
        <div className="flex-1 flex items-center justify-center py-12 z-10 transition-colors duration-500">
          <motion.div
            animate={{ scale: scale }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="relative"
          >
            {/* Guidelines Vector Overlays */}
            <AnimatePresence>
              {showGuidelines && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute -inset-10 border border-emerald-500/30 rounded-xl pointer-events-none"
                >
                  <span className="absolute -top-3 left-2 text-[9px] font-mono text-emerald-400 bg-[#0b0b0b] px-1">
                    CLEAR CONTAINER BOX (1/2 WIDTH MARGIN)
                  </span>
                  {/* Diagonal grid angle line */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-[#7ED957]/20 rotate-[15deg] origin-top-left" />
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#7ED957]/20 -rotate-[15deg] origin-bottom-left" />
                  {/* Outer margin boxes */}
                  <div className="absolute -top-10 bottom-10 left-0 w-[1px] border-l border-dashed border-[#7ED957]/30" />
                  <div className="absolute top-10 -bottom-10 right-0 w-[1px] border-r border-dashed border-[#7ED957]/30" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Actual Logo Representation */}
            {activeVariant.bgType === 'dark' && (
              <div className="bg-black hover:shadow-[0_0_50px_rgba(126,217,87,0.04)] transition-shadow duration-500 border border-neutral-900 px-10 py-8 rounded-2xl flex items-center gap-5">
                {/* SVG Logo Icon Mark */}
                <div className="relative">
                  <svg className="w-14 h-14" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="72" height="72" rx="12" fill="white"/>
                    <path d="M20 52 L20 28 Q20 20 28 20 L52 20 L52 36 L36 36 Q28 36 28 44 L28 52 Z" fill="black"/>
                  </svg>
                  {showGuidelines && (
                    <div className="absolute inset-0 border border-dashed border-red-500 rounded-xl">
                      <span className="absolute -top-4 left-0 text-[8px] font-mono text-red-500 bg-black px-1">ICON: 1:1</span>
                    </div>
                  )}
                </div>
                {/* Text Wordmark */}
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-[32px] tracking-tight leading-none text-white select-none">
                    Extensor <span className="text-[#7ED957] relative">Lab°s</span>
                  </span>
                  <span className="font-mono text-[9px] text-neutral-500 tracking-widest mt-1 uppercase select-none">
                    Engineering digital excellence
                  </span>
                </div>
              </div>
            )}

            {activeVariant.bgType === 'light' && (
              <div className="bg-white px-10 py-8 rounded-2xl flex items-center gap-5 border border-neutral-200">
                <svg className="w-14 h-14" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="72" height="72" rx="12" fill="black"/>
                  <path d="M20 52 L20 28 Q20 20 28 20 L52 20 L52 36 L36 36 Q28 36 28 44 L28 52 Z" fill="white"/>
                </svg>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-[32px] tracking-tight leading-none text-black">
                    Extensor <span className="text-[#5abc3a]">Lab°s</span>
                  </span>
                  <span className="font-mono text-[9px] text-neutral-400 tracking-widest mt-1 uppercase">
                    Engineering digital excellence
                  </span>
                </div>
              </div>
            )}

            {activeVariant.bgType === 'accent' && (
              <div className="bg-[#7ED957] text-[#050505] px-10 py-8 rounded-2xl flex items-center gap-5 border border-[#7fc84a]">
                <svg className="w-14 h-14" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="72" height="72" rx="12" fill="black"/>
                  <path d="M20 52 L20 28 Q20 20 28 20 L52 20 L52 36 L36 36 Q28 36 28 44 L28 52 Z" fill="white"/>
                </svg>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-[32px] tracking-tight leading-none text-[#050505]">
                    Extensor Lab°s
                  </span>
                  <span className="font-mono text-[9px] text-[#2c531d] tracking-widest mt-1 uppercase">
                    Engineering digital excellence
                  </span>
                </div>
              </div>
            )}

            {activeVariant.bgType === 'wireframe' && (
              <div className="bg-transparent border border-dashed border-neutral-700 p-8 rounded-2xl flex flex-col items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 border border-[#7ED957] rounded-xl flex items-center justify-center relative">
                    <span className="text-[10px] font-mono text-[#7ED957]">ARROW</span>
                    <div className="absolute top-0 left-0 w-full h-full border-t border-b border-[#7ED957]/30 rotate-45" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-display font-extrabold text-2xl text-neutral-400 tracking-tight leading-none">
                      CONTOUR GRID
                    </span>
                    <span className="text-xs text-neutral-500 font-mono mt-1">
                      72px BLOCK VECTOR ALIGN
                    </span>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Footer/Asset specs */}
        <div className="border-t border-neutral-900 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 z-10">
          <div>
            <div className="text-[10px] font-mono text-[#7ED957] tracking-wider uppercase">
              ACTIVE SPECIFICATIONS
            </div>
            <div className="text-xs text-neutral-400 font-medium mt-0.5">
              {activeVariant.name}
            </div>
          </div>
          <div className="text-[11px] font-mono text-neutral-600">
            SYSTEM-GRID: 72x72px BASELINE
          </div>
        </div>
      </div>

      {/* Control panel and details */}
      <div className="lg:col-span-5 flex flex-col justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sliders className="w-4 h-4 text-[#7ED957]" />
            <span className="text-xs font-mono text-[#7ED957] tracking-wider uppercase">
              INTELLIGENT SELECTION
            </span>
          </div>
          <h3 className="font-display font-semibold text-xl text-white mb-3">
            Core Logo Variants
          </h3>
          <p className="text-sm font-light text-neutral-400 leading-relaxed mb-5">
            The Extensor Labs brand signature should maintain supreme consistency. Choose a preset to preview its visual composition, recommended use case, and code parameters.
          </p>

          {/* Grid Selection */}
          <div className="grid grid-cols-1 gap-3">
            {LOGO_VARIANTS.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant.id)}
                className={`p-3.5 rounded-2xl text-left transition-all border flex items-center justify-between group/btn ${
                  selectedVariant === variant.id
                    ? 'bg-[#121212] border-neutral-700 shadow-lg'
                    : 'bg-transparent border-neutral-900 opacity-60 hover:opacity-100 hover:bg-neutral-900/45'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedVariant === variant.id
                        ? 'border-[#7ED957]'
                        : 'border-neutral-700'
                    }`}
                  >
                    {selectedVariant === variant.id && (
                      <div className="w-1.5 h-1.5 bg-[#7ED957] rounded-full" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white group-hover/btn:text-[#7ED957] transition-colors">
                      {variant.name}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-500 mt-0.5">
                      {variant.bgType.toUpperCase()} CANVAS MATCH
                    </div>
                  </div>
                </div>
                <div className="text-[10px] font-mono bg-neutral-800 text-neutral-400 px-2.5 py-1 rounded-md text-right uppercase">
                  {variant.id.split('-')[1]}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic description and interactive copier */}
        <div className="bg-[#121212] border border-neutral-900 rounded-2xl p-5">
          <div className="text-[10px] font-mono text-neutral-500 tracking-wider uppercase mb-2">
            DIAGNOSTICS & IMPLEMENTATION NOTES
          </div>
          <p className="text-xs font-light text-neutral-300 leading-relaxed mb-4">
            {activeVariant.description}
          </p>

          <div className="border-t border-neutral-800 pt-4 flex items-center justify-between gap-4">
            <button
              onClick={() => handleCopyCode(svgFullLogo)}
              className="flex-1 bg-transparent hover:bg-neutral-800 border border-neutral-800 hover:border-neutral-700 px-4 py-2.5 rounded-xl text-neutral-300 hover:text-white transition-all text-xs font-medium flex items-center justify-center gap-2 group"
            >
              {copiedCode ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#7ED957]" />
                  <span className="text-[#7ED957]">Copied SVG Markup</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-300" />
                  <span>Copy Code Markup</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                const element = document.createElement('a');
                const file = new Blob([svgArrowMark], { type: 'image/svg+xml' });
                element.href = URL.createObjectURL(file);
                element.download = `extensor_logo_mark_${activeVariant.bgType}.svg`;
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
              }}
              className="bg-[#7ED957] hover:bg-[#8ee866] text-black font-semibold px-4 py-2.5 rounded-xl text-xs transition-all flex items-center justify-center gap-2 hover:shadow-[0_4px_20px_rgba(126,217,87,0.2)]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download SVG</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
