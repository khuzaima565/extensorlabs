/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Layers,
  ArrowDownCircle,
  Smartphone,
  Eye,
  Settings,
  HelpCircle,
  Menu,
  X,
  AlertTriangle,
  FileCode,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Laptop
} from 'lucide-react';

// Subcomponents
import { LogoSystemSection } from './components/LogoSystemSection';
import { ColorPaletteSection } from './components/ColorPaletteSection';
import { GradientExplorerSection } from './components/GradientExplorerSection';
import { TypographySandboxSection } from './components/TypographySandboxSection';
import { UiLanguageSection } from './components/UiLanguageSection';
import { BrandVoiceSection } from './components/BrandVoiceSection';
import { EcosystemSection } from './components/EcosystemSection';

import { BRAND_VALUES, PERSONALITY_TRAITS, COLOR_PALETTE, TYPOGRAPHY_SCALE } from './brandData';

export default function App() {
  const [activeSection, setActiveSection] = useState('cover');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cyberOverlayOn, setCyberOverlayOn] = useState(false);
  const [copiedIndicator, setCopiedIndicator] = useState<string | null>(null);

  // Smooth monitoring of active section as the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'cover', 'overview', 'personality', 'logo-usage', 'donts',
        'colors', 'gradients', 'typography', 'hierarchy', 'typography-sandbox', 'ui-design',
        'design-elements', 'website', 'brand-voice', 'ecosystem', 'final'
      ];

      const scrollPosition = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { id: 'overview', index: '01', title: 'overview' },
    { id: 'personality', index: '02', title: 'personality' },
    { id: 'logo-usage', index: '03', title: 'logo system' },
    { id: 'donts', index: '04', title: 'misuse guidelines' },
    { id: 'colors', index: '05', title: 'color palette' },
    { id: 'gradients', index: '06', title: 'gradient studio' },
    { id: 'typography', index: '07', title: 'typography system' },
    { id: 'typography-sandbox', index: '08', title: 'type tester' },
    { id: 'ui-design', index: '09', title: 'ui playground' },
    { id: 'design-elements', index: '10', title: 'design tokens' },
    { id: 'website', index: '11', title: 'website style' },
    { id: 'brand-voice', index: '12', title: 'voice advisor' },
    { id: 'ecosystem', index: '13', title: 'brand asset download' },
  ];

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedIndicator(id);
    setTimeout(() => setCopiedIndicator(null), 2000);
  };

  return (
    <div id="root-layout-wrapper" className="min-h-screen bg-[#050505] text-white selection:bg-[#7ED957] selection:text-black font-sans overflow-x-hidden relative">
      
      {/* 1. CYBERNETIC GRID OVERLAY OPTISETTING */}
      <AnimatePresence>
        {cyberOverlayOn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[linear-gradient(rgba(126,217,87,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(126,217,87,0.15)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none z-50"
          />
        )}
      </AnimatePresence>

      {/* 2. ATMOSPHERIC BACKGROUND RADIAL ELBOW GLOW */}
      <div className="absolute top-[800px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#1A3A0A]/40 to-transparent rounded-full filter blur-[150px] pointer-events-none opacity-45" />
      <div className="absolute top-[3200px] right-[5%] w-[800px] h-[800px] bg-gradient-to-bl from-[#7ED957]/15 to-transparent rounded-full filter blur-[180px] pointer-events-none opacity-20" />
      <div className="absolute top-[6400px] left-[3%] w-[900px] h-[900px] bg-gradient-to-tr from-[#1A3A0A]/20 to-transparent rounded-full filter blur-[200px] pointer-events-none opacity-30" />

      {/* 3. FLOATING COMPREHENSIVE SIDEBAR INDEX (Desktop-only) */}
      <aside className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-5 z-40 bg-zinc-950/80 backdrop-blur-md outline outline-neutral-900 px-5 py-6 rounded-3xl w-[260px] max-h-[85vh] overflow-y-auto">
        <div className="flex items-center gap-2 mb-2 pb-3 border-b border-neutral-900">
          <div className="w-2.5 h-2.5 rounded-full bg-[#7ED957] animate-pulse" />
          <span className="text-[10px] font-mono tracking-widest text-[#7ED957] uppercase font-bold">
            Identity map index
          </span>
        </div>

        <nav className="flex flex-col gap-1.5 scrollbar-thin">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => triggerScrollTo(item.id)}
                className={`flex items-center justify-between text-left px-3 py-1.5 rounded-xl transition-all ${
                  isActive
                    ? 'bg-[#121212] text-[#7ED957] border-l-2 border-[#7ED957] pl-3.5'
                    : 'text-neutral-500 hover:text-neutral-300 hover:bg-neutral-900/10'
                }`}
              >
                <span className="text-[11px] font-mono tracking-tighter w-6 uppercase">
                  {item.index}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider flex-1 truncate">
                  {item.title}
                </span>
                {isActive && (
                  <motion.div layoutId="activeDot" className="w-1.5 h-1.5 bg-[#7ED957] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Global toggles in sidebar */}
        <div className="border-t border-neutral-900 pt-4 mt-2 flex flex-col gap-2.5">
          <button
            onClick={() => setCyberOverlayOn(!cyberOverlayOn)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs transition-all ${
              cyberOverlayOn
                ? 'bg-[#7ED957]/15 text-[#7ED957] border border-[#7ED957]/30'
                : 'text-neutral-500 hover:text-white border border-transparent'
            }`}
          >
            <Settings className="w-3.5 h-3.5 animate-spin-slow" />
            <span>Grid Overlay: {cyberOverlayOn ? 'ON' : 'OFF'}</span>
          </button>
        </div>
      </aside>

      {/* 4. MASTER NAVIGATION HEADER HERO */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-zinc-950/80 backdrop-blur-xl border-b border-neutral-900/40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo Brand area */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => triggerScrollTo('cover')}>
            {/* Elegant SVG logo symbol inline scale */}
            <svg className="w-9 h-9 shrink-0" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="72" height="72" rx="12" fill="white"/>
              <path d="M20 52 L20 28 Q20 20 28 20 L52 20 L52 36 L36 36 Q28 36 28 44 L28 52 Z" fill="black"/>
            </svg>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-[16px] tracking-tight leading-none text-white">
                Extensor <span className="text-[#7ED957]">Lab°s</span>
              </span>
              <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest mt-0.5">
                Brand Core portal
              </span>
            </div>
          </div>

          {/* Quick Stats / Parameters in Navigation Center (Desktop-only) */}
          <div className="hidden md:flex items-center gap-6 text-[10px] font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#7ED957] rounded-full animate-pulse" />
              <span>ACTIVE SCHEMA: 2.0.0</span>
            </div>
            <div className="h-3 w-[1px] bg-neutral-800" />
            <span>PREPARED BY KIRAN RAJA</span>
            <div className="h-3 w-[1px] bg-neutral-800" />
            <button
              onClick={() => triggerScrollTo('ecosystem')}
              className="text-[#7ED957] hover:underline"
            >
              DOWNLOAD ASSETS
            </button>
          </div>

          {/* Controls Trigger for mobile sidebar / desktop options */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCyberOverlayOn(!cyberOverlayOn)}
              className={`md:flex items-center justify-center p-2 rounded-xl border transition-all ${
                cyberOverlayOn
                  ? 'bg-[#7ED957]/10 border-[#7ED957]/30 text-[#7ED957]'
                  : 'bg-transparent border-neutral-900 text-neutral-400 hover:text-white'
              }`}
              title="Toggle Layout Grid Overlay"
            >
              <Eye className="w-4 h-4" />
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl bg-neutral-900 text-neutral-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* 5. MOBILE EXPANDABLE SELECT MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 bg-zinc-950 border-b border-neutral-900 z-30 p-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto"
          >
            <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest pb-2 border-b border-neutral-900">
              Navigation Chapters
            </div>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => triggerScrollTo(item.id)}
                className="flex items-center gap-3 text-left py-1 text-sm font-semibold uppercase tracking-wider text-neutral-400 hover:text-[#7ED957]"
              >
                <span className="font-mono text-xs w-6 text-neutral-600">{item.index}</span>
                <span>{item.title}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. MASTER MAIN WRAPPER CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 xl:pl-[310px] pt-20">

        {/* ─── P1: INTUITIVE COVER LAYOUT ─── */}
        <section id="cover" className="min-h-[85vh] flex flex-col justify-center items-center text-center py-20 relative border-b border-neutral-900">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-radial-gradient from-emerald-950/30 to-transparent pointer-events-none filter blur-[100px] luxury-glow opacity-80" />
          
          <div className="relative z-10 space-y-8 max-w-3xl">
            {/* Elegant SVG logo mark badge */}
            <div className="inline-flex bg-zinc-950 p-[1px] rounded-3xl outline outline-neutral-900 shadow-2xl">
              <div className="bg-[#121212] px-6 py-4 rounded-3xl flex items-center gap-3">
                <svg className="w-12 h-12" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="72" height="72" rx="12" fill="white"/>
                  <path d="M20 52 L20 28 Q20 20 28 20 L52 20 L52 36 L36 36 Q28 36 28 44 L28 52 Z" fill="black"/>
                </svg>
                <div className="h-10 w-[1px] bg-neutral-800" />
                <span className="font-mono text-xs text-[#7ED957] font-bold tracking-widest uppercase">
                  v2.0 // SPEC
                </span>
              </div>
            </div>

            {/* Giant Typographical Header */}
            <div className="space-y-4">
              <h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-white">
                Extensor <span className="text-[#7ED957]">Lab°s</span>
              </h1>
              <p className="font-mono text-xs md:text-sm tracking-[0.2em] text-neutral-400 uppercase">
                ENGINEERING DIGITAL EXCELLENCE
              </p>
            </div>

            {/* Decorative Divider Line */}
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#7ED957] to-transparent mx-auto" />

            {/* Secondary details */}
            <div className="space-y-4 max-w-xl mx-auto">
              <p className="text-sm font-light text-neutral-300 leading-relaxed">
                The definitive visual directory, interactive layout system, and core brand guidelines platform crafted to convey uncompromised premium strength, scalable safety, and physical beauty.
              </p>
              
              <div className="flex justify-center gap-4 text-[10px] font-mono text-neutral-500">
                <span>REVISED 2026 EDITION</span>
                <span>•</span>
                <span>AUTHENTIC BRAND TRUST PORTAL</span>
              </div>
            </div>

            <button
              onClick={() => triggerScrollTo('overview')}
              className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-900 border border-neutral-900 hover:border-neutral-800 text-neutral-300 hover:text-white px-6 py-3 rounded-2xl text-xs font-semibold cursor-pointer transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] active:scale-95"
            >
              <span>Explore Guidelines Chapters</span>
              <ArrowDownCircle className="w-4 h-4 text-[#7ED957]" />
            </button>
          </div>
        </section>

        {/* ─── P2: BRAND OVERVIEW ─── */}
        <section id="overview" className="py-24 border-b border-neutral-900 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                CHAPTER 01 / 13
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                Brand Core Overview
              </h2>
            </div>
            <div className="text-[10px] font-mono text-neutral-400 capitalize bg-neutral-900 px-3 py-1 rounded-xl">
              FOUNDATIONAL MISSIONS
            </div>
          </div>

          {/* Mission values bento structure */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-neutral-900/40 border border-neutral-900 rounded-3xl overflow-hidden shadow-xl leading-relaxed">
            {BRAND_VALUES.map((value, idx) => (
              <div key={idx} className="bg-[#050505] p-8 flex flex-col justify-between min-h-[240px] hover:bg-[#070707] transition-all">
                <div>
                  <div className="text-[10px] font-mono text-[#7ED957] uppercase font-bold tracking-widest mb-4">
                    {value.tagline}
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-xs font-light text-neutral-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
                <div className="text-[11px] font-mono text-neutral-700 mt-6 pt-2 border-t border-neutral-950">
                  METRIC_INDEX // ALPHA_0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── P3: BRAND PERSONALITY ─── */}
        <section id="personality" className="py-24 border-b border-neutral-900 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                CHAPTER 02 / 13
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                Personality Matrix
              </h2>
            </div>
            <div className="text-[10px] font-mono text-[#7ED957] px-3 py-1 rounded-xl bg-[#7ED957]/15">
              THE 6 BEACONS
            </div>
          </div>

          {/* Persona bento columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PERSONALITY_TRAITS.map((trait) => (
              <div
                key={trait.num}
                className="bg-[#0b0b0b] border border-neutral-900 hover:border-neutral-800 rounded-2xl p-6 flex flex-col justify-between min-h-[220px] transition-all group hover:bg-[#0d0d0d]"
              >
                <div>
                  <div className="text-[10px] font-mono text-neutral-500 mb-3">{trait.num} // CORE_TRAIT</div>
                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-[#7ED957] transition-colors">
                    {trait.word}
                  </h3>
                  <p className="text-xs font-light text-neutral-400 leading-relaxed">
                    {trait.description}
                  </p>
                </div>
                <p className="text-[10px] font-mono text-neutral-600 mt-4 leading-relaxed border-t border-neutral-950 pt-2">
                  {trait.details}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── P4: LOGO SYSTEM STUDIO (INTERACTIVE) ─── */}
        <section id="logo-usage" className="py-24 border-b border-neutral-900 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                CHAPTER 03 / 13
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                Logo System Studio
              </h2>
            </div>
            <div className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-3 py-1 rounded-xl">
              INTERACTIVE REPLICATOR
            </div>
          </div>

          {/* Interactive Logo system */}
          <LogoSystemSection />
        </section>

        {/* ─── P5: DON'TS GUIDE ─── */}
        <section id="donts" className="py-24 border-b border-neutral-900 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                CHAPTER 04 / 13
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                Incorrect Misuse / Don'ts
              </h2>
            </div>
            <div className="text-[10px] font-mono text-red-400 bg-red-400/10 border border-red-500/20 px-3 py-1 rounded-xl">
              CRITICAL CONSTRAINTS // VERIFY
            </div>
          </div>

          {/* Misuse grid blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Misuse 1: Distort */}
            <div className="bg-[#0c0c0c] border border-neutral-900 rounded-2xl overflow-hidden">
              <div className="h-32 bg-[#050505] flex items-center justify-center relative p-5">
                <span className="absolute top-3 right-3 text-[10px] font-mono bg-red-500/15 text-red-500 border border-red-500/30 px-2 py-0.5 rounded-full select-none">✕ MISUSE</span>
                {/* Stretch symbol */}
                <div className="scale-x-150 transform">
                  <svg className="w-12 h-12" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="72" height="72" rx="12" fill="white"/>
                    <path d="M20 52 L20 28 Q20 20 28 20 L52 20 L52 36 L36 36 Q28 36 28 44 L28 52 Z" fill="black"/>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-t border-neutral-900 bg-neutral-950/40">
                <h4 className="text-red-400 text-xs font-bold uppercase mb-1">❌ Do Not Distort aspect ratio</h4>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                  Never squeeze, stretch, or alter the horizontal or vertical scaling variables of the logo block. Keep original proportions.
                </p>
              </div>
            </div>

            {/* Misuse 2: Coloring */}
            <div className="bg-[#0c0c0c] border border-neutral-900 rounded-2xl overflow-hidden">
              <div className="h-32 bg-[#050505] flex items-center justify-center relative p-5">
                <span className="absolute top-3 right-3 text-[10px] font-mono bg-red-500/15 text-red-500 border border-red-500/30 px-2 py-0.5 rounded-full select-none">✕ MISUSE</span>
                <div className="flex items-center gap-1">
                  <span className="font-display font-black text-2xl text-blue-500 tracking-tighter">Extensor</span>
                  <span className="font-display font-black text-2xl text-orange-500 tracking-tighter">Labs</span>
                </div>
              </div>
              <div className="p-4 border-t border-neutral-900 bg-neutral-950/40">
                <h4 className="text-red-400 text-xs font-bold uppercase mb-1">❌ Do Not Change Core Colors</h4>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                  Only use white-on-black or inverted black-on-white text layout variants. Custom multi-coloring is strictly forbidden.
                </p>
              </div>
            </div>

            {/* Misuse 3: Rotate */}
            <div className="bg-[#0c0c0c] border border-neutral-900 rounded-2xl overflow-hidden">
              <div className="h-32 bg-[#050505] flex items-center justify-center relative p-5">
                <span className="absolute top-3 right-3 text-[10px] font-mono bg-red-500/15 text-red-500 border border-red-500/30 px-2 py-0.5 rounded-full select-none">✕ MISUSE</span>
                <div className="rotate-[35deg] transform">
                  <svg className="w-12 h-12" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="72" height="72" rx="12" fill="white"/>
                    <path d="M20 52 L20 28 Q20 20 28 20 L52 20 L52 36 L36 36 Q28 36 28 44 L28 52 Z" fill="black"/>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-t border-neutral-900 bg-neutral-950/40">
                <h4 className="text-red-400 text-xs font-bold uppercase mb-1">❌ Do Not Rotate vectors</h4>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                  The brand arrow must always shoot strictly at its custom 45-degree layout angle. Never adjust horizontal rotational parameters.
                </p>
              </div>
            </div>

            {/* Misuse 4: Glow borders */}
            <div className="bg-[#0c0c0c] border border-neutral-900 rounded-2xl overflow-hidden">
              <div className="h-32 bg-[#050505] flex items-center justify-center relative p-5">
                <span className="absolute top-3 right-3 text-[10px] font-mono bg-red-500/15 text-red-500 border border-red-500/30 px-2 py-0.5 rounded-full select-none">✕ MISUSE</span>
                <div className="shadow-[0_0_25px_#7ED957] rounded-xl">
                  <svg className="w-12 h-12" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="72" height="72" rx="12" fill="white"/>
                    <path d="M20 52 L20 28 Q20 20 28 20 L52 20 L52 36 L36 36 Q28 36 28 44 L28 52 Z" fill="black"/>
                  </svg>
                </div>
              </div>
              <div className="p-4 border-t border-neutral-900 bg-neutral-950/40">
                <h4 className="text-red-400 text-xs font-bold uppercase mb-1">❌ Do Not Add visual shadows / glows</h4>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                  Never introduce neon outer drop shadows, blurs, or high-pitch custom digital visual framing effects to the core brand logo.
                </p>
              </div>
            </div>

            {/* Misuse 5: Font substitution */}
            <div className="bg-[#0c0c0c] border border-neutral-900 rounded-2xl overflow-hidden">
              <div className="h-32 bg-[#050505] flex items-center justify-center relative p-5">
                <span className="absolute top-3 right-3 text-[10px] font-mono bg-red-500/15 text-red-500 border border-red-500/30 px-2 py-0.5 rounded-full select-none">✕ MISUSE</span>
                <span className="text-xl font-serif italic text-white font-bold tracking-widest leading-none">Extensor Labs</span>
              </div>
              <div className="p-4 border-t border-neutral-900 bg-neutral-950/40">
                <h4 className="text-red-400 text-xs font-bold uppercase mb-1">❌ Do Not Substitute brand fonts</h4>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                  Georgia, Times, Arial or other standard fonts are completely forbidden. Always adhere strictly to the geometric Sora display font.
                </p>
              </div>
            </div>

            {/* Misuse 6: Busy image backdrop */}
            <div className="bg-[#0c0c0c] border border-neutral-900 rounded-2xl overflow-hidden">
              <div className="h-32 bg-[#7ED957] flex items-center justify-center relative p-5">
                <span className="absolute top-3 right-3 text-[10px] font-mono bg-red-500/15 text-red-500 border border-red-500/30 px-2 py-0.5 rounded-full select-none">✕ MISUSE</span>
                <svg className="w-12 h-12" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="72" height="72" rx="12" fill="white"/>
                  <path d="M20 52 L20 28 Q20 20 28 20 L52 20 L52 36 L36 36 Q28 36 28 44 L28 52 Z" fill="black"/>
                </svg>
              </div>
              <div className="p-4 border-t border-neutral-900 bg-neutral-950/40">
                <h4 className="text-red-400 text-xs font-bold uppercase mb-1">❌ Do Not use on conflicting accent BG</h4>
                <p className="text-[11px] text-neutral-400 font-light leading-relaxed">
                  Never place the raw logo mark on high-vibrancy green solid layers that instantly compete and suppress accessibility standards.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── P6: COLOR PALETTE (INTERACTIVE COPIER) ─── */}
        <section id="colors" className="py-24 border-b border-neutral-900 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                CHAPTER 05 / 13
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                Color Palette Studio
              </h2>
            </div>
            <div className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-3 py-1 rounded-xl">
              ACCESSIBILITY RATIO ENGINE
            </div>
          </div>

          <ColorPaletteSection />
        </section>

        {/* ─── P7: GRADIENTS EXPLORER ─── */}
        <section id="gradients" className="py-24 border-b border-neutral-900 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                CHAPTER 06 / 13
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                Gradient System Studio
              </h2>
            </div>
            <div className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-3 py-1 rounded-xl">
              CUSTOM DEGREE GENERATOR
            </div>
          </div>

          <GradientExplorerSection />
        </section>

        {/* ─── P8: TYPOGRAPHY SYSTEM ─── */}
        <section id="typography" className="py-24 border-b border-neutral-900 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                CHAPTER 07 / 13
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                Typography Font System
              </h2>
            </div>
            <div className="text-[10px] font-mono text-[#7ED957] bg-[#7ED957]/15 px-3 py-1 rounded-xl">
              TRIPLE FONTS STACK
            </div>
          </div>

          {/* Luxury Typography Font Pairings Display cells */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Display / Heading */}
            <div className="bg-[#0c0c0c] border border-neutral-900 rounded-3xl p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,rgba(126,217,87,0.03)_0%,transparent_70%)] pointer-events-none" />
              <div className="text-[10px] font-mono text-[#7ED957] tracking-widest uppercase mb-4 font-bold">
                PRIMARY DISPLAY HEADINGS
              </div>
              <div className="space-y-3">
                <h3 className="font-display font-extrabold text-[#7ED957] text-6xl tracking-tight leading-none">
                  Sora
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Geometric, structural sans-serif optimized for crisp displays. Selected as the master voice of Extensor Labs. Designed by Google.
                </p>
                <div className="pt-4 border-t border-neutral-950 font-mono text-[10px] text-neutral-500 uppercase">
                  Weights: ExtraLight, Light, Regular, SemiBold, ExtraBold (800)
                </div>
              </div>
            </div>

            {/* MonoTechnical */}
            <div className="bg-[#0c0c0c] border border-neutral-900 rounded-3xl p-6 relative overflow-hidden group">
              <div className="text-[10px] font-mono text-neutral-500 tracking-widest uppercase mb-4">
                SECONDARY CORE TEXT / LABELS
              </div>
              <div className="space-y-3">
                <h3 className="font-mono font-extrabold text-neutral-300 text-6xl tracking-tighter leading-none">
                  DM Mono
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  A high-tech monospaced, hyper-legible font used for system indices, code labels, specs parameters, and physical dimensions listings.
                </p>
                <div className="pt-4 border-t border-neutral-950 font-mono text-[10px] text-neutral-500 uppercase">
                  Weights: Light (300), Regular (400), Medium (500)
                </div>
              </div>
            </div>
          </div>

          {/* Standard paragraph support */}
          <div className="bg-[#0b0b0b] border border-neutral-900 rounded-3xl p-6">
            <span className="text-[10px] font-mono text-neutral-500 block uppercase mb-2">
              Paragraph body font
            </span>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
              <div className="space-y-1 max-w-xl">
                <h4 className="font-sans font-bold text-lg text-white">Inter Sans-Serif</h4>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Standard paragraphs, descriptions, technical document copy, and documentation checklists use Inter. It provides superb legibility at small sizes and high-contrast environments.
                </p>
              </div>
              <div className="text-[11px] font-mono text-neutral-500 border border-neutral-900 px-4 py-2.5 rounded-xl uppercase">
                font-family: font-sans (Inter)
              </div>
            </div>
          </div>
        </section>

        {/* ─── P9: TYPE SCALE HIERARCHY ─── */}
        <section id="hierarchy" className="py-24 border-b border-neutral-900 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                CHAPTER 08 / 13
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                Type Scale Hierarchy
              </h2>
            </div>
            <div className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-3 py-1 rounded-xl">
              RELATIVE CLASS INDEX // SORA
            </div>
          </div>

          {/* Type steps list */}
          <div className="bg-[#0c0c0c] border border-neutral-900 rounded-3xl divide-y divide-neutral-900 overflow-hidden">
            {TYPOGRAPHY_SCALE.map((item, idx) => (
              <div key={idx} className="p-6 md:p-8 hover:bg-[#0d0d0d] transition-all flex flex-col md:flex-row items-start justify-between gap-6 leading-relaxed">
                
                {/* Meta details */}
                <div className="md:w-1/4 shrink-0">
                  <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1.5">
                    SPECIFICATIONS INDEX // 0{idx + 1}
                  </div>
                  <h4 className="font-display font-semibold text-sm text-[#7ED957]">
                    {item.label}
                  </h4>
                  <div className="font-mono text-[9px] text-neutral-500 mt-2 p-1 bg-black/40 rounded border border-neutral-900 max-w-[190px] truncate" title={item.specs}>
                    {item.specs}
                  </div>
                </div>

                {/* Actual typography render block */}
                <div className="flex-1">
                  <div className="text-[9px] font-mono text-neutral-600 uppercase mb-2">RENDER DISPLAY SAMPLE</div>
                  <div className={`${item.specs} text-white`}>
                    {item.example}
                  </div>
                </div>

                {/* Usage instruction column */}
                <div className="md:w-1/4 shrink-0">
                  <div className="text-[9px] font-mono text-neutral-600 uppercase mb-1.5">WHEN_TO_USE</div>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">
                    {item.usage}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* ─── P10: TYPOGRAPHY LIVE SANDBOX (INTERACTIVE) ─── */}
        <section id="typography-sandbox" className="py-24 border-b border-neutral-900 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                CHAPTER 09 / 13
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                Typography Sandbox
              </h2>
            </div>
            <div className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-3 py-1 rounded-xl">
              REAL-TIME FONTS MATRIX
            </div>
          </div>

          <TypographySandboxSection />
        </section>

        {/* ─── P11: SYSTEM UI DESIGN LANGUAGE (INTERACTIVE PLAYGROUND) ─── */}
        <section id="ui-design" className="py-24 border-b border-neutral-900 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                CHAPTER 10 / 13
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                Ecosystem UI Language
              </h2>
            </div>
            <div className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-3 py-1 rounded-xl">
              INTERACTIVE REUSABLE PLAYGROUND
            </div>
          </div>

          <UiLanguageSection />
        </section>

        {/* ─── P12: DESIGN SIGNATURES & LANGUAGE TOKENS ─── */}
        <section id="design-elements" className="py-24 border-b border-neutral-900 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                CHAPTER 11 / 13
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                Brand Design Signatures
              </h2>
            </div>
            <div className="text-[10px] font-mono text-[#7ED957] bg-[#7ED957]/15 px-3 py-1 rounded-xl">
              HAIRLINES & GEOMETRICS
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 leading-relaxed">
            
            {/* Diagonal Accent */}
            <div className="bg-[#0b0b0b] border border-neutral-900 rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1.5">
                  CORE GEOMETRIES METRIC
                </span>
                <h4 className="font-display font-semibold text-lg text-white mb-2">
                  Diagonal 45° Angle Signature
                </h4>
                <p className="text-xs text-neutral-300 font-light leading-relaxed mb-6">
                  Extracted directionally from the primary logo arrow: We use deliberate, sharp corners, absolute horizontal offsets, and glowing baseline coordinates to represent momentum.
                </p>

                {/* Abstract graphic */}
                <div className="border border-neutral-950 bg-black/40 rounded-2xl h-40 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-neutral-900" />
                  {/* Glowing 45 deg line */}
                  <div className="w-[180px] h-[1px] bg-gradient-to-r from-transparent via-[#7ED957] to-transparent rotate-45 transform" />
                  {/* Specs labels */}
                  <span className="absolute bottom-3 left-4 font-mono text-[9px] text-neutral-500">ARROW ANGLE: 45.00°</span>
                  <span className="absolute top-3 right-4 font-mono text-[9px] text-[#7ED957]">BENCHMARK COMPLIANCE</span>
                </div>
              </div>
              <div className="text-[10px] font-mono text-neutral-600 mt-6 pt-3 border-t border-neutral-950">
                APPLICATION: Slide banners, UI section endings, and custom metric grid panels
              </div>
            </div>

            {/* Grid Patterns */}
            <div className="bg-[#0b0b0b] border border-neutral-900 rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1.5">
                  METRIC GRID COMPLIANCE
                </span>
                <h4 className="font-display font-semibold text-lg text-white mb-2">
                  Tactile Mesh Grid Textures
                </h4>
                <p className="text-xs text-neutral-300 font-light leading-relaxed mb-6">
                  We formulate structured tactile mesh patterns across large visual zones to prevent flat, uninspired templates. Keeps design grounded in physical physics.
                </p>

                {/* Texture block */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-[120px] rounded-xl border border-neutral-900 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] relative p-3">
                    <span className="font-mono text-[8px] text-neutral-500 absolute bottom-2 left-2">GRID 16px MESH</span>
                  </div>
                  <div className="h-[120px] rounded-xl border border-[#7ED957]/10 bg-[radial-gradient(rgba(126,217,87,0.12)_1px,transparent_1px)] bg-[size:16px_16px] relative p-3">
                    <span className="font-mono text-[8px] text-[#7ED957] absolute bottom-2 left-2">DIAMOND SPACE MATRIC</span>
                  </div>
                </div>
              </div>
              <div className="text-[10px] font-mono text-neutral-600 mt-6 pt-3 border-t border-neutral-950">
                APPLICATION: Ambient backings, floating cards backplates, and container overlays
              </div>
            </div>

          </div>
        </section>

        {/* ─── P13: DIGITAL WEB PRESENCE GRAPHICS ─── */}
        <section id="website" className="py-24 border-b border-neutral-900 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                CHAPTER 12 / 13
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                Digital Presence Preview
              </h2>
            </div>
            <div className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-3 py-1 rounded-xl">
              INTERFACES IN HARMONY
            </div>
          </div>

          {/* Browser frame layout mockup */}
          <div className="border border-neutral-900 rounded-3xl overflow-hidden bg-zinc-950 shadow-2xl leading-relaxed">
            {/* Browser top header */}
            <div className="bg-[#121212]/90 px-5 py-3.5 border-b border-neutral-900/40 flex items-center gap-4">
              <div className="flex gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex-1 bg-black px-4 py-1.5 rounded-lg border border-neutral-900 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span>https://extensorlabs.com</span>
                <span className="text-[#7ED957]">SSL ENCRYPTED</span>
              </div>
            </div>

            {/* Virtual Hero presentation space */}
            <div className="bg-black py-20 px-6 md:px-12 text-center relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-[#1A3A0A]/30 to-[#7ED957]/5 rounded-full filter blur-[100px] pointer-events-none" />
              <div className="absolute inset-0 bg-[#000000]/25 mix-blend-multiply pointer-events-none" />
              
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <span className="font-mono text-[10px] tracking-widest text-[#7ED957] uppercase font-bold p-1 bg-[#7ED957]/10 rounded border border-[#7ED957]/20">
                  // THE FUTURE IS SCALABLE
                </span>
                
                <h3 className="font-display font-extrabold text-3xl md:text-5xl text-white tracking-tight leading-[1.05]">
                  Architecting Scalable<br />Systems for Ambition.
                </h3>
                
                <p className="text-xs md:text-sm font-light text-neutral-400 leading-relaxed max-w-md mx-auto">
                  We engineer ultra-premium, high-performance web products, secure data infrastructure, and custom APIs built to grow endlessly.
                </p>

                <div className="flex justify-center gap-3">
                  <button className="bg-[#7ED957] hover:bg-[#8ee866] text-black font-semibold px-5 py-2.5 rounded-xl text-xs transition-all hover:scale-95 shadow-[0_4px_15px_rgba(126,217,87,0.2)]">
                    Initiate Project
                  </button>
                  <button className="bg-transparent hover:bg-neutral-900 text-white border border-neutral-800 px-5 py-2.5 rounded-xl text-xs font-semibold cursor-pointer transition-colors hover:scale-95">
                    See Our Works →
                  </button>
                </div>
              </div>
            </div>

            {/* Simulated Live Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-neutral-900 divide-y sm:divide-y-0 sm:divide-x divide-neutral-900 bg-neutral-950">
              <div className="p-6 text-center leading-relaxed">
                <div className="font-display font-extrabold text-3xl text-[#7ED957]">$2.4B+</div>
                <div className="text-[10px] text-neutral-500 font-mono mt-1">CLIENT VALUE GENERATED</div>
              </div>
              <div className="p-6 text-center leading-relaxed">
                <div className="font-display font-extrabold text-3xl text-[#7ED957]">150+</div>
                <div className="text-[10px] text-neutral-500 font-mono mt-1">ELITE CONSOLE SYSTEMS SHIPPED</div>
              </div>
              <div className="p-6 text-center leading-relaxed">
                <div className="font-display font-extrabold text-3xl text-[#7ED957]">99.99%</div>
                <div className="text-[10px] text-neutral-500 font-mono mt-1">CORE INFRASTRUCTURE UPTIME</div>
              </div>
            </div>

          </div>
        </section>

        {/* ─── P14: BRAND VOICE IN ACTION (INTERACTIVE PLAYGROUND) ─── */}
        <section id="brand-voice" className="py-24 border-b border-neutral-900 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                CHAPTER 13 / 13
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                Brand Tone & Voice
              </h2>
            </div>
            <div className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-3 py-1 rounded-xl">
              BUZZWORD CRITIQUE ENGINE
            </div>
          </div>

          <BrandVoiceSection />
        </section>

        {/* ─── P15: ECOSYSTEM / ASSET DOWNLOADER (INTERACTIVE) ─── */}
        <section id="ecosystem" className="py-24 border-b border-neutral-900 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                INTEGRATED STACK RESOURCE CATALOG
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                Brand Ecosystem Export
              </h2>
            </div>
            <div className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-3 py-1 rounded-xl">
              DOWNSTREAM DIRECTORIES
            </div>
          </div>

          <EcosystemSection />
        </section>

        {/* ─── P16: FINAL CLOSING SLIDE BACKPLATES ─── */}
        <section id="final" className="py-32 flex flex-col justify-center items-center text-center relative overflow-hidden h-[70vh]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#1A3A0A]/40 to-transparent rounded-full filter blur-[130px] pointer-events-none opacity-45" />

          <div className="relative z-10 space-y-6">
            <svg className="w-16 h-16 mx-auto hover:scale-105 transition-transform cursor-pointer" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => triggerScrollTo('cover')}>
              <rect width="72" height="72" rx="12" fill="white"/>
              <path d="M20 52 L20 28 Q20 20 28 20 L52 20 L52 36 L36 36 Q28 36 28 44 L28 52 Z" fill="black"/>
            </svg>

            <div className="space-y-2">
              <h2 className="font-display font-extrabold text-4xl text-white tracking-tight leading-none">
                Extensor <span className="text-[#7ED957]">Labs</span>
              </h2>
              <p className="font-mono text-[10px] tracking-[0.25em] text-neutral-500 uppercase">
                ENGINEERING DIGITAL EXCELLENCE
              </p>
            </div>

            <div className="w-12 h-[1px] bg-[#7ED957]/30 mx-auto" />

            <p className="font-mono text-[10px] text-neutral-500 max-w-xs leading-relaxed">
              Brand Guidelines v2.0 // Prepared by Kiran Raja // Technical Catalog Certified. 2026.
            </p>
          </div>
        </section>

        {/* ─── FOOTER ─── */}
        <footer className="border-t border-neutral-950 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] font-mono text-neutral-500">
          <p>© 2026 Extensor Labs. All rights reserved in absolute fidelity.</p>
          <div className="flex items-center gap-2 text-[#7ED957]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7ED957] animate-ping" />
            <span>PORTAL REPLICATOR SECURE</span>
          </div>
          <p>Brand Guidelines v2.0 // Core Edition</p>
        </footer>

      </main>
    </div>
  );
}
