/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ColorToken {
  name: string;
  hex: string;
  type: 'primary' | 'secondary' | 'neutral' | 'surface' | 'accent';
  usage: string;
  contrastWithBlack: string;
  contrastWithWhite: string;
}

export interface GradientSpecification {
  id: string;
  name: string;
  cssStyle: string;
  description: string;
  colors: string[];
}

export interface TypographyScaleItem {
  tag: string;
  label: string;
  specs: string;
  category: 'display' | 'heading' | 'body' | 'caption';
  example: string;
  usage: string;
}

export interface LogoVariant {
  id: string;
  name: string;
  bgType: 'dark' | 'light' | 'accent' | 'wireframe';
  description: string;
}

export interface BrandValue {
  title: string;
  tagline: string;
  description: string;
}

export interface PersonalityTrait {
  num: string;
  word: string;
  description: string;
  details: string;
}

export interface VoiceRule {
  type: 'do' | 'dont';
  heading: string;
  phrase: string;
  explanation: string;
}
