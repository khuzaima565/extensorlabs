/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Type, Sliders, RefreshCw, Layers } from 'lucide-react';
import { TYPOGRAPHY_SCALE } from '../brandData';

export function TypographySandboxSection() {
  const [sandboxText, setSandboxText] = useState('EXTENSOR LABS: ENGINEER WITH RADICAL RIGOR');
  const [fontSize, setFontSize] = useState<number>(48);
  const [fontWeight, setFontWeight] = useState<string>('font-extrabold');
  const [letterSpacing, setLetterSpacing] = useState<string>('tracking-tighter');
  const [fontFamily, setFontFamily] = useState<'font-display' | 'font-mono' | 'font-sans'>('font-display');

  const weightNameMap: Record<string, string> = {
    'font-light': 'Light (300)',
    'font-normal': 'Regular (400)',
    'font-medium': 'Medium (500)',
    'font-semibold': 'Semi-Bold (600)',
    'font-bold': 'Bold (700)',
    'font-extrabold': 'Extra-Bold (800)',
  };

  const handleResetSandbox = () => {
    setSandboxText('EXTENSOR LABS: ENGINEER WITH RADICAL RIGOR');
    setFontSize(48);
    setFontWeight('font-extrabold');
    setLetterSpacing('tracking-tighter');
    setFontFamily('font-display');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="typography-sandbox-component">
      {/* Real-time typographic sandbox tester */}
      <div className="lg:col-span-8 bg-[#0b0b0b] border border-neutral-900 rounded-3xl p-6 flex flex-col justify-between min-h-[460px]">
        {/* Header toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-neutral-900">
          <div className="flex items-center gap-1.5">
            <Type className="w-4 h-4 text-[#7ED957]" />
            <span className="text-xs font-mono tracking-widest text-[#7ED957] uppercase font-bold">
              REAL-TIME TYPOGRAPHY SANDBOX (LIVE TESTING)
            </span>
          </div>

          <button
            onClick={handleResetSandbox}
            className="flex items-center gap-1.5 px-3 py-1 bg-neutral-900 hover:bg-neutral-850 rounded-lg text-neutral-400 hover:text-white transition-all text-[11px] font-mono border border-neutral-800"
          >
            <RefreshCw className="w-3 h-3" />
            <span>RESET PRESETS</span>
          </button>
        </div>

        {/* Input Text Box */}
        <div className="my-5">
          <label className="text-[10px] font-mono text-neutral-500 uppercase block mb-1.5">
            Live Test Text Input
          </label>
          <input
            type="text"
            value={sandboxText}
            onChange={(e) => setSandboxText(e.target.value)}
            placeholder="Type anything to inspect letter spacing, kerning alignment, and weights..."
            className="w-full bg-[#121212] border border-neutral-900 focus:border-[#7ED957] font-sans rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none transition-colors"
          />
        </div>

        {/* Big Display Canvas Area */}
        <div className="flex-1 min-h-[160px] flex items-center justify-center bg-[#070707] border border-neutral-950 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(126,217,87,0.03)_0%,transparent_70%)] pointer-events-none" />
          
          <div
            className={`w-full text-center break-words select-all transition-all duration-300 ${fontFamily} ${fontWeight} ${letterSpacing}`}
            style={{ fontSize: `${fontSize}px`, lineHeight: 1.15 }}
          >
            {sandboxText || 'Typing...'}
          </div>
        </div>

        {/* Specs breakdown label */}
        <div className="mt-4 pt-3 border-t border-neutral-900 flex justify-between text-[11px] font-mono text-neutral-500">
          <span>Active classes: {`${fontFamily} ${fontWeight} ${letterSpacing}`}</span>
          <span>Size: {fontSize}px</span>
        </div>
      </div>

      {/* Control sliders & Type hierarchy parameters */}
      <div className="lg:col-span-4 flex flex-col justify-between gap-6">
        <div className="bg-[#0c0c0c] border border-neutral-900 rounded-3xl p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sliders className="w-4 h-4 text-[#7ED957]" />
              <span className="text-xs font-mono text-[#7ED957] tracking-wider uppercase">
                AESTHETIC STACK CONTROLS
              </span>
            </div>
            <h3 className="font-display font-semibold text-lg text-white mb-2">
              Font Sandbox Modifiers
            </h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed mb-5">
              Experiment with sizes, font families, and letter spacing weight relationships to determine brand styling variations.
            </p>

            {/* Parameter sliders */}
            <div className="space-y-4">
              {/* Size */}
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 mb-1.5 uppercase">
                  <span>Font Size Slider</span>
                  <span className="text-white">{fontSize}px</span>
                </div>
                <input
                  type="range"
                  min="16"
                  max="120"
                  step="2"
                  value={fontSize}
                  onChange={(e) => setFontSize(parseInt(e.target.value))}
                  className="w-full h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#7ED957]"
                />
              </div>

              {/* Family */}
              <div>
                <span className="text-[10px] font-mono text-neutral-400 block mb-1.5 uppercase">
                  Font Family Target
                </span>
                <div className="grid grid-cols-3 gap-1.5 bg-[#121212] p-1 rounded-xl border border-neutral-900">
                  <button
                    onClick={() => setFontFamily('font-display')}
                    className={`px-2.5 py-1.5 text-[9px] font-mono rounded-lg transition-all ${
                      fontFamily === 'font-display'
                        ? 'bg-[#7ED957] text-black font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    SORA_DISPLAY
                  </button>
                  <button
                    onClick={() => setFontFamily('font-sans')}
                    className={`px-2.5 py-1.5 text-[9px] font-mono rounded-lg transition-all ${
                      fontFamily === 'font-sans'
                        ? 'bg-[#7ED957] text-black font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    INTER_SANS
                  </button>
                  <button
                    onClick={() => setFontFamily('font-mono')}
                    className={`px-2.5 py-1.5 text-[9px] font-mono rounded-lg transition-all ${
                      fontFamily === 'font-mono'
                        ? 'bg-[#7ED957] text-black font-semibold'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    DM_MONO
                  </button>
                </div>
              </div>

              {/* Weight */}
              <div>
                <span className="text-[10px] font-mono text-neutral-400 block mb-1.5 uppercase">
                  Font Weight Selection
                </span>
                <div className="grid grid-cols-2 gap-1.5">
                  {(['font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold', 'font-extrabold'] as const).map((w) => (
                    <button
                      key={w}
                      onClick={() => setFontWeight(w)}
                      className={`px-3 py-1.5 text-[10px] font-mono rounded-xl border text-left transition-all ${
                        fontWeight === w
                          ? 'bg-[#121212] border-neutral-700 text-[#7ED957] font-semibold'
                          : 'bg-transparent border-neutral-950 text-neutral-400 hover:text-white hover:bg-neutral-900/10'
                      }`}
                    >
                      {weightNameMap[w]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Letter Spacing */}
              <div>
                <span className="text-[10px] font-mono text-neutral-400 block mb-1.5 uppercase">
                  Letter Spacing (Kerning)
                </span>
                <div className="grid grid-cols-3 gap-1.5 bg-[#121212] p-1 rounded-xl border border-neutral-900">
                  {(['tracking-tighter', 'tracking-normal', 'tracking-widest'] as const).map((ls) => (
                    <button
                      key={ls}
                      onClick={() => setLetterSpacing(ls)}
                      className={`px-2.5 py-1.5 text-[9px] font-mono rounded-lg transition-all ${
                        letterSpacing === ls
                          ? 'bg-neutral-850 text-white font-semibold'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {ls.toUpperCase().replace('TRACKING-', '')}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-neutral-950 pt-4 flex gap-4 text-[10px] font-mono text-neutral-500">
            <div>
              <span className="text-[#7ED957]">CSS IMPORT RULE</span>
              <p className="mt-1 lowercase text-neutral-400 font-sans truncate max-w-[240px]">
                @import url('https://fonts.googleapis.com...');
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
