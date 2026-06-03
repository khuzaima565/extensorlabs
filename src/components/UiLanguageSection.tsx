/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, RotateCw, CheckCircle, ShieldCheck, Mail, Database, Terminal, ArrowRight } from 'lucide-react';

export function UiLanguageSection() {
  // states
  const [btnLoading, setBtnLoading] = useState(false);
  const [btnSuccess, setBtnSuccess] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [dbInc, setDbInc] = useState(150);
  const [activeChartBar, setActiveChartBar] = useState<number | null>(2); // Default center bar active

  const triggerDeploySim = () => {
    if (btnLoading) return;
    setBtnLoading(true);
    setBtnSuccess(false);
    setTimeout(() => {
      setBtnLoading(false);
      setBtnSuccess(true);
    }, 2800);
  };

  const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const barData = [
    { label: 'MON', height: 40, count: 42 },
    { label: 'TUE', height: 65, count: 68 },
    { label: 'WED', height: 100, count: 114 }, // peak
    { label: 'THU', height: 75, count: 83 },
    { label: 'FRI', height: 88, count: 96 },
    { label: 'SAT', height: 55, count: 59 },
    { label: 'SUN', height: 70, count: 74 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="ui-language-component">
      
      {/* 1. BUTTONS & ACTIONS PLAYGROUND */}
      <div className="bg-[#0b0b0b] border border-neutral-900 rounded-3xl p-6 flex flex-col justify-between group">
        <div>
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-950">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              INTERACTIVE REUSABLE BLOCKS // 01
            </span>
            <span className="text-[10px] font-mono text-[#7ED957] bg-[#7ED957]/10 px-2 py-0.5 rounded-full border border-[#7ED957]/20 uppercase">
              Action buttons
            </span>
          </div>
          <h4 className="font-display font-semibold text-lg text-white mb-2">
            Action Buttons Playground
          </h4>
          <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
            Click is fully animated. Primary actions trigger elegant loader simulations. Hover delivers snappy micro-feedback responses.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3.5 mb-6">
            <button
              onClick={triggerDeploySim}
              className="bg-[#7ED957] hover:bg-[#8ee866] text-black font-semibold px-5 py-2.5 rounded-xl text-xs transition-all relative flex items-center justify-center gap-2 overflow-hidden hover:shadow-[0_4px_25px_rgba(126,217,87,0.25)] min-w-[130px] active:scale-95 disabled:opacity-50"
              disabled={btnLoading}
            >
              <AnimatePresence mode="wait">
                {btnLoading ? (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-1.5"
                  >
                    <RotateCw className="w-3.5 h-3.5 animate-spin" />
                    <span>DEPLOYING...</span>
                  </motion.span>
                ) : btnSuccess ? (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-1.5"
                  >
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>SUCCESS</span>
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5" fill="currentColor" />
                    <span>DEMO DEPLOY</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <button className="bg-transparent hover:bg-neutral-900 text-white border border-neutral-800 hover:border-neutral-700 px-5 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all active:scale-95">
              Learn More
            </button>

            <button className="bg-[#7ED957]/10 hover:bg-[#7ED957]/15 text-[#7ED957] border border-[#7ED957]/20 hover:border-[#7ED957]/35 px-5 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-all active:scale-95">
              Live Feed
            </button>
          </div>

          {/* Interactive feedback output based on button state */}
          <div className="bg-[#121212] border border-neutral-900 rounded-xl p-3 flex items-center gap-3">
            <Terminal className="w-4 h-4 text-[#7ED957] shrink-0" />
            <div className="text-[10px] font-mono text-neutral-400 capitalize">
              {btnLoading
                ? 'COMPILING SYSTEM INSTANCE: Resolving modules // CDN binding complete'
                : btnSuccess
                ? 'SUCCESS: Deployment initialized online at port 3000 // SLA Status is LIVE'
                : 'STATUS: Ready for simulation. Click Demo Deploy to start compiling.'}
            </div>
          </div>
        </div>

        <div className="text-[10px] font-mono text-neutral-600 border-t border-neutral-950 pt-3 mt-5">
          CLASS: bg-[#7ED957] text-[#000000] font-semibold tracking-wide
        </div>
      </div>

      {/* 2. LIVE VALIDATING INPUTS */}
      <div className="bg-[#0b0b0b] border border-neutral-900 rounded-3xl p-6 flex flex-col justify-between group">
        <div>
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-950">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              INTERACTIVE REUSABLE BLOCKS // 02
            </span>
            <span className="text-[10px] font-mono text-[#7ED957] bg-[#7ED957]/10 px-2 py-0.5 rounded-full border border-[#7ED957]/20 uppercase">
              Form controls
            </span>
          </div>
          <h4 className="font-display font-semibold text-lg text-white mb-2">
            Smart Fields & Live Validation
          </h4>
          <p className="text-xs text-neutral-400 font-light leading-relaxed mb-5">
            Type a realistic email address to watch the input container glow into an approved state. Highly visual, instant error responses.
          </p>

          {/* Form Area */}
          <div className="space-y-4">
            <div className="relative">
              <span className="absolute top-1/2 left-4 -translate-y-1/2 text-neutral-500">
                <Mail className="w-4 h-4" />
              </span>
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="email@company.com"
                className={`w-full bg-[#121212] border rounded-xl pl-11 pr-12 py-3 text-xs text-white outline-none transition-all placeholder-neutral-600 ${
                  emailInput === ''
                    ? 'border-neutral-900 focus:border-[#7ED957]'
                    : isEmailValid(emailInput)
                    ? 'border-[#7ED957] shadow-[0_0_15px_rgba(126,217,87,0.06)]'
                    : 'border-red-500/40 focus:border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.04)]'
                }`}
              />
              <span className="absolute top-1/2 right-4 -translate-y-1/2 font-mono text-[9px] font-bold">
                {emailInput === '' ? (
                  <span className="text-neutral-500">REQUIRED</span>
                ) : isEmailValid(emailInput) ? (
                  <span className="text-[#7ED957] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    APPROVED
                  </span>
                ) : (
                  <span className="text-red-500">INVALID</span>
                )}
              </span>
            </div>

            <div className="text-[10px] text-neutral-500 leading-relaxed font-light">
              We never expose private data. Client portals require multi-factor hardware security tokens (OAuth v2 payload authentication).
            </div>
          </div>
        </div>

        <div className="text-[10px] font-mono text-neutral-600 border-t border-neutral-950 pt-3 mt-5">
          CLASS: focus:ring-1 focus:ring-[#7ED957]/45 focus:border-[#7ED957]
        </div>
      </div>

      {/* 3. DYNAMIC DATA METRICS & COUNTER */}
      <div className="bg-[#0b0b0b] border border-neutral-900 rounded-3xl p-6 flex flex-col justify-between group">
        <div>
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-950">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              INTERACTIVE REUSABLE BLOCKS // 03
            </span>
            <span className="text-[10px] font-mono text-[#7ED957] bg-[#7ED957]/10 px-2 py-0.5 rounded-full border border-[#7ED957]/20 uppercase">
              Micro data states
            </span>
          </div>
          <h4 className="font-display font-semibold text-lg text-white mb-2">
            Metrics & Dynamic Dashboard Blocks
          </h4>
          <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
            Click is actively calculated. Increment live deployment figures to preview automatic component transitions.
          </p>

          {/* Metric Box */}
          <div className="bg-[#121212] border border-neutral-950 rounded-2xl p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,rgba(126,217,87,0.06)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="flex items-center justify-between mb-3">
              <span className="text-neutral-400 text-xs font-semibold tracking-tight">Active API Ecosystem Channels</span>
              <span className="text-[10px] font-mono font-bold text-[#7ED957] bg-[#7ED957]/10 border border-[#7ED957]/20 px-2.5 py-0.5 rounded-full">
                +14.8% GROWTH
              </span>
            </div>

            <div className="flex items-baseline gap-2.5">
              <div className="text-white font-display font-extrabold text-4xl tracking-tighter select-none">
                {dbInc}+
              </div>
              <div className="text-[10px] font-mono font-bold text-[#7ED957]">
                DEPLOYED ENDPOINTS
              </div>
            </div>

            {/* Dynamic Buttons to adjust */}
            <div className="flex gap-2 mt-4 pt-3.5 border-t border-neutral-900">
              <button
                onClick={() => setDbInc(Math.max(10, dbInc - 10))}
                className="bg-neutral-900 hover:bg-neutral-850 border border-neutral-800 text-neutral-400 hover:text-white px-2.5 py-1 rounded-lg text-[10px] font-mono transition-colors"
              >
                [ DECREMENT ]
              </button>
              <button
                onClick={() => setDbInc(dbInc + 15)}
                className="bg-[#7ED957]/10 hover:bg-[#7ED957]/15 border border-[#7ED957]/20 hover:border-[#7ED957]/40 text-[#7ED957] px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all"
              >
                [ INCREMENT +15 ]
              </button>
            </div>
          </div>
        </div>

        <div className="text-[10px] font-mono text-neutral-600 border-t border-neutral-950 pt-3 mt-6">
          COMPONENT: Data Card System w/ Ambient glowing corner anchors
        </div>
      </div>

      {/* 4. HOVER CHART COMPONENT */}
      <div className="bg-[#0b0b0b] border border-neutral-900 rounded-3xl p-6 flex flex-col justify-between group">
        <div>
          <div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-950">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              INTERACTIVE REUSABLE BLOCKS // 04
            </span>
            <span className="text-[10px] font-mono text-[#7ED957] bg-[#7ED957]/10 px-2 py-0.5 rounded-full border border-[#7ED957]/20 uppercase">
              Chart elements
            </span>
          </div>
          <h4 className="font-display font-semibold text-lg text-white mb-2">
            Weekly Deployments Chart
          </h4>
          <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
            Hover over the visual bar pillars to reveal daily compilation volumes. High-contrast layout parameters.
          </p>

          {/* Interactive custom Bar Chart */}
          <div className="bg-[#121212] border border-neutral-950 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4 text-[10px] font-mono text-neutral-500">
              <span>DAILY DEPLOYMENT HISTOGRAM</span>
              <span>
                {activeChartBar !== null
                  ? `SELECTED DATE: ${barData[activeChartBar].label} (${barData[activeChartBar].count} SHIPPED)`
                  : 'HOVER A PILLAR TO INSPECT'}
              </span>
            </div>

            {/* Stage */}
            <div className="h-28 flex items-end gap-3.5 pt-4">
              {barData.map((bar, index) => {
                const isActive = activeChartBar === index;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveChartBar(index)}
                    onMouseLeave={() => setActiveChartBar(2)} // Defaults back to WED
                    className="flex-1 flex flex-col items-center gap-2 cursor-pointer group/bar"
                  >
                    {/* The Pillar */}
                    <div className="w-full relative rounded-md overflow-hidden bg-neutral-900 group-hover/bar:bg-neutral-850 h-20 flex items-end">
                      <div
                        className={`w-full transition-all duration-300 rounded-b-md ${
                          isActive
                            ? 'bg-[#7ED957] opacity-100 shadow-[0_0_15px_rgba(126,217,87,0.3)]'
                            : 'bg-[#7ED957]/25 hover:bg-[#7ED957]/55 opacity-70'
                        }`}
                        style={{ height: `${bar.height}%` }}
                      />
                    </div>
                    {/* Label */}
                    <span className={`text-[9px] font-mono transition-colors ${
                      isActive ? 'text-[#7ED957] font-bold' : 'text-neutral-500'
                    }`}>
                      {bar.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-[10px] font-mono text-neutral-600 border-t border-neutral-950 pt-3 mt-6">
          CHART: Hover-driven CSS heights matching 1-to-1 data models
        </div>
      </div>

    </div>
  );
}
