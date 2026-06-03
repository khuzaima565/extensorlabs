/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, AlertTriangle, HelpCircle, ArrowRight, MessageSquareCode, Sparkles } from 'lucide-react';
import { VOICE_RULES } from '../brandData';

export function BrandVoiceSection() {
  const [userCopy, setUserCopy] = useState(
    'We are a leading agile cloud solutions paradigm group passionate about disrupting the market.'
  );
  const [activeTab, setActiveTab] = useState<'rules' | 'detector'>('rules');

  // Simple local heuristic analysis for demo
  const analyzeCopyText = (text: string) => {
    const normalized = text.toLowerCase();
    
    // Buzzwords database
    const buzzwords = [
      { word: 'disrupt', replacement: 'engineer/solve', reason: 'High-pitch marketing buzzword with zero quantitative proof.' },
      { word: 'paradigm', replacement: 'structure/system', reason: 'Pretentious corporate fluff that has lost all semantic meaning.' },
      { word: 'passionate', replacement: 'committed/proven', reason: 'Sounds defensive. Proving skill through execution is stronger.' },
      { word: 'leading', replacement: 'verifiable', reason: 'Empty self-proclamed statement. Reference metrics instead.' },
      { word: 'synergy', replacement: 'collaboration/concurrency', reason: 'Classic template slang. Elite audiences despise it.' },
      { word: 'turnkey', replacement: 'integrated/tailored', reason: 'Generic template word. Use literal technical definitions.' },
      { word: 'try our best', replacement: 'guarantee/commit', reason: 'Apologetic phrasing. Establishes doubt and amateur status.' }
    ];

    const detectedBuzzwords = buzzwords.filter(b => normalized.includes(b.word));
    
    // Metrics
    const preciseWordCount = text.split(/\s+/).filter(Boolean).length;
    let score = 100 - (detectedBuzzwords.length * 15);
    if (preciseWordCount < 5) score = 40; // Too short to analyze
    score = Math.max(20, Math.min(100, score));

    return {
      score,
      detectedBuzzwords,
      isPremium: score >= 80,
    };
  };

  const analysis = analyzeCopyText(userCopy);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="brand-voice-component">
      {/* Visual left section - Live copy checker vs Brand Voice Guidelines */}
      <div className="lg:col-span-7 bg-[#0b0b0b] border border-neutral-900 rounded-3xl p-6 flex flex-col justify-between min-h-[460px]">
        <div>
          {/* Header tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-neutral-950 mb-5">
            <div className="flex items-center gap-1.5">
              <MessageSquareCode className="w-4 h-4 text-[#7ED957]" />
              <span className="text-xs font-mono tracking-widest text-[#7ED957] uppercase font-bold">
                COMMUNICATION MATRIX
              </span>
            </div>

            <div className="flex bg-[#121212] p-1 rounded-xl border border-neutral-800">
              <button
                onClick={() => setActiveTab('rules')}
                className={`px-3 py-1 text-[10px] font-mono rounded-lg transition-all uppercase ${
                  activeTab === 'rules'
                    ? 'bg-[#7ED957] text-[#050505] font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                DO vs DONT TABLE
              </button>
              <button
                onClick={() => setActiveTab('detector')}
                className={`px-3 py-1 text-[10px] font-mono rounded-lg transition-all uppercase ${
                  activeTab === 'detector'
                    ? 'bg-[#7ED957] text-[#050505] font-semibold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                INTELLIGENT EVALUATOR
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'rules' ? (
              <motion.div
                key="rules-tab"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="space-y-4 max-h-[340px] overflow-y-auto pr-1"
              >
                {VOICE_RULES.slice(0, 4).map((rule, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border flex flex-col justify-between gap-2 transition-all ${
                      rule.type === 'dont'
                        ? 'bg-red-500/5 border-red-500/10'
                        : 'bg-[#7ED957]/5 border-[#7ED957]/10'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className={`text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                        rule.type === 'dont'
                          ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                          : 'bg-[#7ED957]/10 text-[#7ED957] border border-[#7ED957]/20'
                      }`}>
                        {rule.type === 'dont' ? '❌ DON\'T SAY' : '✓ PREFERRED PHRASING'}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-500">RULE {idx + 1}</span>
                    </div>

                    <div className="text-xs font-semibold text-white italic">
                      "{rule.phrase}"
                    </div>

                    <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                      <span className="font-semibold text-neutral-300">Explanation:</span> {rule.explanation}
                    </p>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="detector-tab"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="flex flex-col gap-4"
              >
                <div className="text-xs text-neutral-300 font-light leading-relaxed">
                  Type or paste a sales statement, headline, or product paragraph below to test compliance against the Extensor Labs elite tone.
                </div>

                <textarea
                  value={userCopy}
                  onChange={(e) => setUserCopy(e.target.value)}
                  placeholder="Paste marketing copy here to analyze..."
                  className="w-full h-24 bg-[#121212] border border-neutral-900 focus:border-[#7ED957] rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-600 outline-none resize-none transition-colors leading-relaxed"
                />

                {/* Detected flags list */}
                {analysis.detectedBuzzwords.length > 0 ? (
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-red-400 block uppercase">
                      CRITICAL BANALITY DETECTED:
                    </span>
                    <div className="space-y-1.5 max-h-[110px] overflow-y-auto pr-1">
                      {analysis.detectedBuzzwords.map((b) => (
                        <div key={b.word} className="bg-red-500/5 border border-red-500/15 p-2 rounded-lg flex items-start gap-2">
                          <AlertTriangle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                          <div className="text-[10px] leading-relaxed">
                            <span className="font-bold text-white capitalize">"{b.word}":</span>
                            <span className="text-neutral-300 ml-1">{b.reason} Try using <span className="text-[#7ED957] font-semibold">"{b.replacement}"</span> instead.</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#7ED957]/5 border border-[#7ED957]/15 p-3 rounded-lg flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#7ED957] shrink-0" />
                    <span className="text-[11px] text-neutral-300 font-light">
                      <span className="font-bold text-[#7ED957] uppercase mr-1">Excellent Style Compliance!</span>
                      No generic placeholder clichés detected. Your copy sounds authoritative, direct, and professional.
                    </span>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="text-[10px] font-mono text-neutral-500 border-t border-neutral-950 pt-3 mt-4">
          GUIDE: Avoid apologetic language. Use active, numeric declarations.
        </div>
      </div>

      {/* Visual right section - Real-time metrics analyzer feedback */}
      <div className="lg:col-span-5 flex flex-col justify-between gap-6">
        <div className="bg-[#0c0c0c] border border-neutral-900 rounded-3xl p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#7ED957]" />
              <span className="text-xs font-mono text-[#7ED957] tracking-wider uppercase">
                TONE VERDICT PARAMETERS
              </span>
            </div>
            <h3 className="font-display font-semibold text-lg text-white mb-2">
              Voice Performance Report
            </h3>
            <p className="text-xs text-neutral-400 font-light leading-relaxed mb-5">
              Live feedback scores tracking cognitive complexity, premium status, and audience resonance. We prioritize radical transparency.
            </p>

            {/* Score circle layout */}
            <div className="bg-[#121212]/30 border border-neutral-950 rounded-2xl p-4 flex items-center gap-5 mb-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[radial-gradient(ellipse_at_top_right,rgba(126,217,87,0.04)_0%,transparent_60%)] pointer-events-none" />

              {/* Graphical score block */}
              <div className="w-16 h-16 rounded-full border-4 flex items-center justify-center relative shrink-0 transition-all" style={{
                borderColor: analysis.isPremium ? '#7ED957' : analysis.score > 50 ? '#fbbf24' : '#ef4444'
              }}>
                <span className="font-display font-black text-lg text-white">
                  {analysis.score}%
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-0.5">
                  OVERALL COMPLIANCE
                </span>
                <div className={`text-sm font-bold ${
                  analysis.isPremium ? 'text-[#7ED957]' : analysis.score > 50 ? 'text-amber-400' : 'text-red-400'
                }`}>
                  {analysis.isPremium ? 'PREMIUM EXCELLENCE // PASS' : analysis.score > 50 ? 'MODERATE AMBIGUITY' : 'LOW QUALITY FLUFF // WARN'}
                </div>
                <div className="text-[10px] text-neutral-400 font-light mt-0.5">
                  Requires strong, crisp nouns and numerical milestones.
                </div>
              </div>
            </div>

            {/* Tone Sliders metrics */}
            <div className="space-y-3.5">
              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 mb-1 uppercase">
                  <span>Authoritative / Confidence</span>
                  <span className="text-white">{analysis.isPremium ? '95%' : '60%'}</span>
                </div>
                <div className="h-1 bg-neutral-950 rounded-full overflow-hidden">
                  <div className="h-full bg-[#7ED957] rounded-full transition-all duration-500" style={{
                    width: analysis.isPremium ? '95%' : '60%'
                  }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 mb-1 uppercase">
                  <span>Precision (No Clichés)</span>
                  <span className="text-white">{analysis.score}%</span>
                </div>
                <div className="h-1 bg-neutral-950 rounded-full overflow-hidden">
                  <div className="h-full bg-[#7ED957] rounded-full transition-all duration-500" style={{
                    width: `${analysis.score}%`
                  }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 mb-1 uppercase">
                  <span>Directness (No Passive)</span>
                  <span className="text-white">{analysis.isPremium ? '90%' : '55%'}</span>
                </div>
                <div className="h-1 bg-neutral-950 rounded-full overflow-hidden">
                  <div className="h-full bg-[#7ED957] rounded-full transition-all duration-500" style={{
                    width: analysis.isPremium ? '90%' : '55%'
                  }} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t border-neutral-950 pt-4 flex items-center justify-between text-[11px] font-mono">
            <span className="text-neutral-500">HEURISTIC ENGINES: OK V2.0</span>
            <span className="text-[#7ED957] hover:underline cursor-pointer flex items-center gap-1">
              View Voice Manual <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
