/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, Download, Layers, ShieldCheck, Box, Palette, FileText, Activity } from 'lucide-react';
import { COLOR_PALETTE } from '../brandData';

export function EcosystemSection() {
  const [downloading, setDownloading] = useState<string | null>(null);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const brandTokensJson = `{
  "brandName": "Extensor Labs",
  "version": "2.0.0",
  "theme": "premium-dark",
  "colors": {
    "obsidian": "#050505",
    "carbon": "#121212",
    "slate": "#1B1B1B",
    "cyberGreen": "#7ED957",
    "emeraldDeep": "#1A3A0A",
    "pureWhite": "#FFFFFF",
    "mutedPlatinum": "#A3A3A3"
  },
  "typography": {
    "primary": "Sora",
    "secondary": "DM Mono",
    "body": "Inter"
  }
}`;

  const triggerDownloadSim = (assetId: string) => {
    if (downloading) return;
    setDownloading(assetId);
    setTimeout(() => {
      setDownloading(null);
      
      // Real file download for brand guideline profile JSON
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(brandTokensJson);
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `extensor_labs_brand_tokens_${assetId}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    }, 1800);
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(brandTokensJson);
    setCopiedToken('json');
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="ecosystem-section-component">
      {/* Visual bento grid asset showcase */}
      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Bento Cell 1: SVG Icons pack */}
        <div className="bg-[#0b0b0b] border border-neutral-900 rounded-3xl p-5 flex flex-col justify-between group h-[220px]">
          <div className="flex items-center justify-between mb-3 border-b border-neutral-950 pb-2">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              ASSET VECTOR ARCHIVE
            </span>
            <Box className="w-4 h-4 text-[#7ED957]" />
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-1.5">
              Premium SVG Brand Icons
            </h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Fully optimized, lightweight, responsive outline SVGs aligned to our precise 24px grid structure.
            </p>
          </div>
          <button
            onClick={() => triggerDownloadSim('icons')}
            disabled={downloading !== null}
            className="w-full bg-[#121212] hover:bg-neutral-900 border border-neutral-800 hover:border-[#7ED957]/30 text-neutral-300 hover:text-white py-2 px-4 rounded-xl text-xs font-semibold cursor-pointer transition-all flex items-center justify-center gap-2 group/btn shrink-0"
          >
            {downloading === 'icons' ? (
              <span className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 animate-spin text-[#7ED957]" />
                <span>PACKRESS COMPILING...</span>
              </span>
            ) : (
              <>
                <Download className="w-3.5 h-3.5 text-neutral-500 group-hover/btn:text-white transition-colors" />
                <span>Export SVGs Package (.json catalog)</span>
              </>
            )}
          </button>
        </div>

        {/* Bento Cell 2: Color Palette swatch specifications definitions */}
        <div className="bg-[#0b0b0b] border border-[#7ED957]/10 rounded-3xl p-5 flex flex-col justify-between group h-[220px] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(ellipse_at_top_right,rgba(126,217,87,0.05)_0%,transparent_70%)] pointer-events-none" />
          
          <div className="flex items-center justify-between mb-3 border-b border-neutral-950 pb-2">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              COLOR TOKEN PROFILES
            </span>
            <Palette className="w-4 h-4 text-[#7ED957]" />
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-1.5">
              Acrobatic Swatch Color Profiles
            </h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Download the comprehensive styling profile containing standard variables for Figma, CSS, and Tailwind config.
            </p>
          </div>
          <button
            onClick={() => triggerDownloadSim('colors')}
            disabled={downloading !== null}
            className="w-full bg-[#7ED957]/10 hover:bg-[#7ED957]/15 border border-[#7ED957]/20 hover:border-[#7ED957]/45 text-[#7ED957] py-2 px-4 rounded-xl text-xs font-bold cursor-pointer transition-all flex items-center justify-center gap-2 shrink-0"
          >
            {downloading === 'colors' ? (
              <span className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 animate-spin" />
                <span>COMPILING TOKENS...</span>
              </span>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Export Color Tokens JSON</span>
              </>
            )}
          </button>
        </div>

        {/* Bento Cell 3: PDF Document */}
        <div className="bg-[#0b0b0b] border border-neutral-900 rounded-3xl p-5 flex flex-col justify-between group h-[220px]">
          <div className="flex items-center justify-between mb-3 border-b border-neutral-950 pb-2">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              PRINT COMPANION MANUAL
            </span>
            <FileText className="w-4 h-4 text-[#7ED957]" />
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-1.5">
              Brand Assets PDF Booklet
            </h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Download the static copy of these rules featuring exact grid measurements, spacing guides, and offline print parameters.
            </p>
          </div>
          <button
            onClick={() => triggerDownloadSim('pdf')}
            disabled={downloading !== null}
            className="w-full bg-[#121212] hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 text-neutral-300 hover:text-white py-2 px-4 rounded-xl text-xs font-semibold cursor-pointer transition-all flex items-center justify-center gap-2 shrink-0"
          >
            {downloading === 'pdf' ? (
              <span className="flex items-center gap-2">
                <Activity className="w-3.5 h-3.5 animate-spin text-[#7ED957]" />
                <span>GENERATING PDF CATALOG...</span>
              </span>
            ) : (
              <>
                <Download className="w-3.5 h-3.5 text-neutral-500" />
                <span>Export Print PDF (Tokens)</span>
              </>
            )}
          </button>
        </div>

        {/* Bento Cell 4: Security policy status */}
        <div className="bg-[#0b0b0b] border border-neutral-900 rounded-3xl p-5 flex flex-col justify-between group h-[220px]">
          <div className="flex items-center justify-between mb-3 border-b border-neutral-950 pb-2">
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              SYSTEM CERTIFICATE
            </span>
            <ShieldCheck className="w-4 h-4 text-[#7ED957]" />
          </div>
          <div>
            <h4 className="font-display font-semibold text-sm text-white mb-1.5">
              Radial Security & Integration
            </h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Our brand assets compile with zero external tracking scripts. Hosted on sandboxed, encrypted, high-availability edge nodes.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#121212] border border-neutral-900 rounded-xl px-4 py-2.5">
            <span className="w-2 h-2 rounded-full bg-[#7ED957] animate-pulse" />
            <span className="text-[10px] font-mono text-[#7ED957] uppercase font-bold tracking-widest">
              SECURE INTEGRATION CERTIFIED
            </span>
          </div>
        </div>

      </div>

      {/* JSON Token Explorer on right */}
      <div className="lg:col-span-4 flex flex-col justify-between gap-6">
        <div className="bg-[#0c0c0c] border border-neutral-900 rounded-3xl p-5 flex-1 flex flex-col justify-between h-[456px]">
          <div>
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-neutral-950">
              <span className="text-xs font-mono text-[#7ED957] tracking-wider uppercase">
                ENGINEER CONFIG OBJECT
              </span>
              <button
                onClick={handleCopyJson}
                className="text-[11px] font-mono text-neutral-400 hover:text-white flex items-center gap-1"
              >
                {copiedToken === 'json' ? (
                  <span className="text-[#7ED957] font-bold">COPIED</span>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-neutral-500" />
                    <span>Copy Config</span>
                  </>
                )}
              </button>
            </div>
            
            <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
              Import the unified configurations directly into your tooling. Fully compliant with modern transpilation architectures.
            </p>

            <pre className="text-[10px] font-mono text-neutral-400 bg-[#050505] p-4 rounded-xl max-h-[290px] overflow-y-auto border border-neutral-950 text-left leading-relaxed">
              {brandTokensJson}
            </pre>
          </div>

          <div className="text-[10px] font-mono text-neutral-600 border-t border-neutral-950 pt-3">
            JSON INTEGRITY SCHEMA: v2.0.0 // ENCRYPTION: SHA-256
          </div>
        </div>
      </div>
    </div>
  );
}
