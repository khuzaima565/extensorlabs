/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ColorToken,
  GradientSpecification,
  TypographyScaleItem,
  LogoVariant,
  BrandValue,
  PersonalityTrait,
  VoiceRule,
} from './types';

export const BRAND_VALUES: BrandValue[] = [
  {
    title: 'Precision-First Engineering',
    tagline: 'Defiance of Mediocrity',
    description: 'We believe that greatness is in the details. Every line of code, every pixel, and every architectural choice is drafted with absolute mathematical rigor. We do not do "good enough". We engineer masterpieces that set benchmark standards.',
  },
  {
    title: 'Infinite Scalability',
    tagline: 'Architecting for Tomorrow',
    description: 'Our products are built as living systems. We anticipate massive volume, global distribution, and multi-tenant scaling from day one. By separating concerns cleanly, we ensure that as our clients\' ambitions expand, our infrastructure responds effortlessly.',
  },
  {
    title: 'Absolute Stewardship, No Hedging',
    tagline: 'Radical Ownership',
    description: 'We take direct responsibility for product speed, safety, and longevity. We speak in clear, transparent summaries rather than boilerplate corporate jargon. When we commit to a milestone, our execution is our guarantee.',
  },
];

export const PERSONALITY_TRAITS: PersonalityTrait[] = [
  {
    num: '01',
    word: 'Premium',
    description: 'Every interaction, visual asset, and digital product feels meticulous, highly polished, and intentionally tailored.',
    details: 'Leveraging dark rich backdrops, subtle hairline dividers, micro-glow gradients, and expansive negative space to establish silent authority.'
  },
  {
    num: '02',
    word: 'Innovative',
    description: 'We do not follow industrial trends or templates; we design the systems others refer to for future inspiration.',
    details: 'Using interactive digital representations, futuristic neon green signals, and tactile responses to communicate progress.'
  },
  {
    num: '03',
    word: 'Precise',
    description: 'Eliminating all cognitive clutter. We favor deliberate constraints, explicit labels, and complete structural absolute design.',
    details: 'Zero fluff. Aligning elements on a strict grid structure with 1-pixel high-contrast border limits.'
  },
  {
    num: '04',
    word: 'Modern',
    description: 'Forward-looking aesthetic rooted in classical craftsmanship, expressed through minimalist cyber-elegant grids.',
    details: 'Pairing geometric Sora headings with high-tech DM Mono labels and clear readability of Inter body paragraphs.'
  },
  {
    num: '05',
    word: 'Scalable',
    description: 'Designed for high performance, parallel workflows, and expandable layouts structurally primed for global products.',
    details: 'Exposing structural modules, clean charts, nested components, and interactive developer-friendly APIs.'
  },
  {
    num: '06',
    word: 'Confident',
    description: 'Speaking with absolute authority built upon successful execution, technical superiority, and structural perfection.',
    details: 'Direct, declarative brand statements. No speculative boilerplate jargon or empty promotional slogans.'
  },
];

export const COLOR_PALETTE: ColorToken[] = [
  {
    name: 'Obsidian Black',
    hex: '#050505',
    type: 'neutral',
    usage: 'The master backdrop. Provides an uncompromised high-contrast dark space that minimizes eye strain and accentuates visual hierarchy.',
    contrastWithBlack: '1.0:1',
    contrastWithWhite: '21.0:1',
  },
  {
    name: 'Carbon Gray',
    hex: '#121212',
    type: 'surface',
    usage: 'The primary surface for bento cards, code containers, and active inputs. Formulates distinct visual layer separation.',
    contrastWithBlack: '1.2:1',
    contrastWithWhite: '17.5:1',
  },
  {
    name: 'Slate Elevated',
    hex: '#1B1B1B',
    type: 'surface',
    usage: 'Elevated surfaces like tooltips, dropdown selections, active active-badges, and hovering modal views.',
    contrastWithBlack: '1.35:1',
    contrastWithWhite: '15.4:1',
  },
  {
    name: 'Extensor Cyber Green',
    hex: '#7ED957',
    type: 'primary',
    usage: 'The high-voltage brand signature accent. Reserved strictly for primary CTAs, active indicators, status highlights, and branding marks.',
    contrastWithBlack: '8.4:1',
    contrastWithWhite: '2.5:1',
  },
  {
    name: 'Emerald Deep',
    hex: '#1A3A0A',
    type: 'accent',
    usage: 'The secondary brand ambient tone. Used for subtle background glowing states, badge containers, and success parameters.',
    contrastWithBlack: '2.8:1',
    contrastWithWhite: '7.5:1',
  },
  {
    name: 'Pure White',
    hex: '#FFFFFF',
    type: 'neutral',
    usage: 'For master headings, display numbers, and primary button labels requiring prompt, absolute contrast.',
    contrastWithBlack: '21.0:1',
    contrastWithWhite: '1.0:1',
  },
  {
    name: 'Muted Platinum',
    hex: '#A3A3A3',
    type: 'secondary',
    usage: 'The primary text choice for sub-headings, descriptors, paragraph sections, and inactive field icons.',
    contrastWithBlack: '8.5:1',
    contrastWithWhite: '2.4:1',
  }
];

export const GRADIENTS: GradientSpecification[] = [
  {
    id: 'grad-elevation',
    name: 'Elevation Abyss',
    cssStyle: 'linear-gradient(135deg, #050505 0%, #121212 50%, #1A3A0A 85%, #7ED957 100%)',
    description: 'The primary luxury layout gradient. Deep dark foundations climbing up to a technical emerald energy signature.',
    colors: ['#050505', '#121212', '#1A3A0A', '#7ED957'],
  },
  {
    id: 'grad-sig',
    name: 'High-Voltage Signal',
    cssStyle: 'linear-gradient(135deg, #050505 0%, #1A3A0A 40%, #7ED957 100%)',
    description: 'High-contrast visual driver used for master banners, social backdrops, and active structural callouts.',
    colors: ['#050505', '#1A3A0A', '#7ED957'],
  },
  {
    id: 'grad-cyber',
    name: 'Cybernetic Monolith',
    cssStyle: 'linear-gradient(135deg, #06151E 0%, #0A2A14 50%, #4A9A2A 100%)',
    description: 'Alternate corporate canvas. Blends digital ocean navy tones with glowing emerald lines.',
    colors: ['#06151E', '#0A2A14', '#4A9A2A'],
  },
  {
    id: 'grad-steel',
    name: 'Satin Steel Lime',
    cssStyle: 'linear-gradient(135deg, #262424 0%, #121212 40%, #5ABC3A 100%)',
    description: 'A warmer, high-grain industrial graphite transition that conveys luxury mechanical precision.',
    colors: ['#262424', '#121212', '#5ABC3A'],
  },
];

export const TYPOGRAPHY_SCALE: TypographyScaleItem[] = [
  {
    tag: 'h1',
    label: 'Display Super',
    specs: 'font-display font-extrabold text-[80px] leading-[0.9] tracking-[-0.04em]',
    category: 'display',
    example: 'Build Bold.',
    usage: 'Extremely high-impact marketing statements, book jackets, main slide title headers, and hero display blocks.',
  },
  {
    tag: 'h2',
    label: 'Section Display',
    specs: 'font-display font-bold text-[48px] leading-[1.05] tracking-[-0.03em]',
    category: 'heading',
    example: '03 / Logo System',
    usage: 'Major division guidelines, primary sub-headers, and sections that frame the structural outline.',
  },
  {
    tag: 'h3',
    label: 'Section Sub-title',
    specs: 'font-display font-semibold text-[24px] leading-[1.2] tracking-[-0.02em]',
    category: 'heading',
    example: 'Micro Design Foundations',
    usage: 'Inner bento grid titles, modular blocks, feature summaries, and individual specification titles.',
  },
  {
    tag: 'p',
    label: 'Standard Body Text',
    specs: 'font-sans font-light text-[15px] leading-[1.7] text-neutral-300',
    category: 'body',
    example: 'We engineer highly reliable, absolute-fidelity digital components designed to scale gracefully with client ambitions.',
    usage: 'General guidelines description text, technical documents, brand narratives, and system descriptors.',
  },
  {
    tag: 'code',
    label: 'System Technical Caption',
    specs: 'font-mono font-normal text-[12px] leading-tight text-neutral-500 tracking-wider uppercase',
    category: 'caption',
    example: 'BRAND_GUIDE_V2 // OBSIDIAN_BLACK_HEX',
    usage: 'Data tokens, line details, measurements, structural indices, parameters, and metadata listings.',
  },
];

export const LOGO_VARIANTS: LogoVariant[] = [
  {
    id: 'logo-dark-bg',
    name: 'Primary Dark Canvas',
    bgType: 'dark',
    description: 'White logo arrow mark, pure white typography, glowing custom green degree dot symbol. The gold standard application. Always preferred.',
  },
  {
    id: 'logo-light-bg',
    name: 'Primary Light Canvas',
    bgType: 'light',
    description: 'Inverted layout: black title letterings, sharp black custom container arrow mark, with a highly visible dark green accent degree dot. For print, invoices, and light contextual platforms.',
  },
  {
    id: 'logo-accent-bg5',
    name: 'Signature Accent Green Space',
    bgType: 'accent',
    description: 'Deep black arrow container logo on absolute Extensor Green surface. Reserved for high-profile social marketing campaigns, avatar banners, or special engineering certificates.',
  },
  {
    id: 'logo-wireframe-bg',
    name: 'Blueprint / Wireframe Space',
    bgType: 'wireframe',
    description: 'Pure aesthetic line diagram. Visualizes the clear geometric boundaries and diagonal angle grids.',
  }
];

export const VOICE_RULES: VoiceRule[] = [
  {
    type: 'dont',
    heading: 'Avoid Generic Tech-Banalities',
    phrase: 'We build standard, agile software applications to optimize business processes.',
    explanation: 'Sounds incredibly low-tier, boring, and corporate-conformist. It shows zero architectural commitment or engineering identity.',
  },
  {
    type: 'do',
    heading: 'Use Rigorous Declarative Engineering Labels',
    phrase: 'We engineer high-performance, absolute-concurrency infrastructure and digital platforms constructed for infinite scale.',
    explanation: 'Conveys premium technical dominance, specialized structural know-how, and absolute assurance in execution.',
  },
  {
    type: 'dont',
    heading: 'Avoid Emotional Over-Promotion ("AI-Slop")',
    phrase: 'Our hyper-talented squad is extremely passionate about using cutting-edge trends to disrupt the paradigm.',
    explanation: 'Filled with hyperbole, hollow buzzwords, and vague lingo that elite engineering heads instantly despise.',
  },
  {
    type: 'do',
    heading: 'Use Earned Confidence & Verifiable Statistics',
    phrase: 'Our portfolio of 150+ shipped production systems runs on a 99.99% uptime guarantee, delivering $2.4B in verifiable client valuation.',
    explanation: 'Proves capability immediately through numerical data and historical certainty rather than emotional sales fluff.',
  },
  {
    type: 'dont',
    heading: 'Never Use Defensive or apologetic phrasing',
    phrase: 'We try our best to fulfill client deadlines and fix any bugs that might show up along the way.',
    explanation: 'Sounds weak, uncertain, and amateurish. Excuses have zero place in high-end brand assets.',
  },
  {
    type: 'do',
    heading: 'State Absolute Ownership and Guarantee',
    phrase: 'We take direct, radical responsibility for the speed, security, and lifetime structural integrity of our products.',
    explanation: 'Establishes absolute peace of mind for enterprise clients who buy elite engineering expertise.',
  }
];
