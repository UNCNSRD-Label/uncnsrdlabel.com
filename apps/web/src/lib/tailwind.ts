import { cn, CSSUnitValuePonyfill } from "@uncnsrdlabel/lib";
import baseConfig from "@uncnsrdlabel/tailwind-config";
import resolveConfig from "tailwindcss/resolveConfig";

export const config = resolveConfig(baseConfig);

if (!globalThis.CSSUnitValue) {
  globalThis.CSSUnitValue = CSSUnitValuePonyfill;
}

export const breakpoints = {
  'sm': { 'min': new CSSUnitValue(640, 'px'), 'max': new CSSUnitValue(767, 'px') },
  'md': { 'min': new CSSUnitValue(768, 'px'), 'max': new CSSUnitValue(1023, 'px') },
  'lg': { 'min': new CSSUnitValue(1024, 'px'), 'max': new CSSUnitValue(1279, 'px') },
  'xl': { 'min': new CSSUnitValue(1280, 'px'), 'max': new CSSUnitValue(1535, 'px') },
  '2xl': { 'min': new CSSUnitValue(1536, 'px'), 'max': null },
} as const;

export const themeColors = cn(
  "fill-dark stroke-dark text-dark bg-light",
  "dark:fill-light dark:stroke-light dark:text-light dark:bg-dark",
  "selection:bg-gray-500/50",
);

export const animationDelays = [
  "animation-delay-[0ms]",
  // "animation-delay-[100ms]",
  // "animation-delay-[200ms]",
  "animation-delay-[300ms]",
  // "animation-delay-[400ms]",
  // "animation-delay-[500ms]",
  "animation-delay-[600ms]",
  // "animation-delay-[700ms]",
  // "animation-delay-[800ms]",
  "animation-delay-[900ms]",
  // "animation-delay-[1000ms]",
  // "animation-delay-[1100ms]",
  "animation-delay-[1200ms]",
  // "animation-delay-[1300ms]",
  // "animation-delay-[1400ms]",
  "animation-delay-[1500ms]",
  // "animation-delay-[1600ms]",
  // "animation-delay-[1700ms]",
  "animation-delay-[1800ms]",
  // "animation-delay-[1900ms]",
  // "animation-delay-[2000ms]",
  "animation-delay-[2100ms]",
  // "animation-delay-[2200ms]",
  // "animation-delay-[2300ms]",
  "animation-delay-[2400ms]",
  // "animation-delay-[2500ms]",
  // "animation-delay-[2600ms]",
  "animation-delay-[2700ms]",
  // "animation-delay-[2800ms]",
  // "animation-delay-[2900ms]",
  "animation-delay-[3000ms]",
  // "animation-delay-[3100ms]",
  // "animation-delay-[3200ms]",
  "animation-delay-[3300ms]",
  // "animation-delay-[3400ms]",
  // "animation-delay-[3500ms]",
  "animation-delay-[3600ms]",
  // "animation-delay-[3700ms]",
  // "animation-delay-[3800ms]",
  "animation-delay-[3900ms]",
  // "animation-delay-[4000ms]",
  // "animation-delay-[4100ms]",
  "animation-delay-[4200ms]",
  // "animation-delay-[4300ms]",
  // "animation-delay-[4400ms]",
  "animation-delay-[4500ms]",
  // "animation-delay-[4600ms]",
  // "animation-delay-[4700ms]",
  "animation-delay-[4800ms]",
  // "animation-delay-[4900ms]",
  // "animation-delay-[5000ms]",
  "animation-delay-[5100ms]",
  // "animation-delay-[5200ms]",
  // "animation-delay-[5300ms]",
  "animation-delay-[5400ms]",
  // "animation-delay-[5500ms]",
  // "animation-delay-[5600ms]",
  "animation-delay-[5700ms]",
  // "animation-delay-[5800ms]",
  // "animation-delay-[5900ms]",
  "animation-delay-[6000ms]",
  // "animation-delay-[6100ms]",
  // "animation-delay-[6200ms]",
  "animation-delay-[6300ms]",
  // "animation-delay-[6400ms]",
  // "animation-delay-[6500ms]",
  "animation-delay-[6600ms]",
  // "animation-delay-[6700ms]",
  // "animation-delay-[6800ms]",
  "animation-delay-[6900ms]",
  // "animation-delay-[7000ms]",
  // "animation-delay-[7100ms]",
  "animation-delay-[7200ms]",
  // "animation-delay-[7300ms]",
  // "animation-delay-[7400ms]",
  "animation-delay-[7500ms]",
  // "animation-delay-[7600ms]",
  // "animation-delay-[7700ms]",
  "animation-delay-[7800ms]",
  // "animation-delay-[7900ms]",
  // "animation-delay-[8000ms]",
  "animation-delay-[8100ms]",
  // "animation-delay-[8200ms]",
  // "animation-delay-[8300ms]",
  "animation-delay-[8400ms]",
  // "animation-delay-[8500ms]",
  // "animation-delay-[8600ms]",
  "animation-delay-[8700ms]",
  // "animation-delay-[8800ms]",
  // "animation-delay-[8900ms]",
  "animation-delay-[9000ms]",
  // "animation-delay-[9100ms]",
  // "animation-delay-[9200ms]",
  "animation-delay-[9300ms]",
  // "animation-delay-[9400ms]",
  // "animation-delay-[9500ms]",
  "animation-delay-[9600ms]",
  // "animation-delay-[9700ms]",
  // "animation-delay-[9800ms]",
  "animation-delay-[9900ms]",
];

export const transitionDelays = [
  "transition-delay-[0ms]",
  // "transition-delay-[100ms]",
  // "transition-delay-[200ms]",
  "transition-delay-[300ms]",
  // "transition-delay-[400ms]",
  // "transition-delay-[500ms]",
  "transition-delay-[600ms]",
  // "transition-delay-[700ms]",
  // "transition-delay-[800ms]",
  "transition-delay-[900ms]",
  // "transition-delay-[1000ms]",
  // "transition-delay-[1100ms]",
  "transition-delay-[1200ms]",
  // "transition-delay-[1300ms]",
  // "transition-delay-[1400ms]",
  "transition-delay-[1500ms]",
  // "transition-delay-[1600ms]",
  // "transition-delay-[1700ms]",
  "transition-delay-[1800ms]",
  // "transition-delay-[1900ms]",
  // "transition-delay-[2000ms]",
  "transition-delay-[2100ms]",
  // "transition-delay-[2200ms]",
  // "transition-delay-[2300ms]",
  "transition-delay-[2400ms]",
  // "transition-delay-[2500ms]",
  // "transition-delay-[2600ms]",
  "transition-delay-[2700ms]",
  // "transition-delay-[2800ms]",
  // "transition-delay-[2900ms]",
  "transition-delay-[3000ms]",
  // "transition-delay-[3100ms]",
  // "transition-delay-[3200ms]",
  "transition-delay-[3300ms]",
  // "transition-delay-[3400ms]",
  // "transition-delay-[3500ms]",
  "transition-delay-[3600ms]",
  // "transition-delay-[3700ms]",
  // "transition-delay-[3800ms]",
  "transition-delay-[3900ms]",
  // "transition-delay-[4000ms]",
  // "transition-delay-[4100ms]",
  "transition-delay-[4200ms]",
  // "transition-delay-[4300ms]",
  // "transition-delay-[4400ms]",
  "transition-delay-[4500ms]",
  // "transition-delay-[4600ms]",
  // "transition-delay-[4700ms]",
  "transition-delay-[4800ms]",
  // "transition-delay-[4900ms]",
  // "transition-delay-[5000ms]",
  "transition-delay-[5100ms]",
  // "transition-delay-[5200ms]",
  // "transition-delay-[5300ms]",
  "transition-delay-[5400ms]",
  // "transition-delay-[5500ms]",
  // "transition-delay-[5600ms]",
  "transition-delay-[5700ms]",
  // "transition-delay-[5800ms]",
  // "transition-delay-[5900ms]",
  "transition-delay-[6000ms]",
  // "transition-delay-[6100ms]",
  // "transition-delay-[6200ms]",
  "transition-delay-[6300ms]",
  // "transition-delay-[6400ms]",
  // "transition-delay-[6500ms]",
  "transition-delay-[6600ms]",
  // "transition-delay-[6700ms]",
  // "transition-delay-[6800ms]",
  "transition-delay-[6900ms]",
  // "transition-delay-[7000ms]",
  // "transition-delay-[7100ms]",
  "transition-delay-[7200ms]",
  // "transition-delay-[7300ms]",
  // "transition-delay-[7400ms]",
  "transition-delay-[7500ms]",
  // "transition-delay-[7600ms]",
  // "transition-delay-[7700ms]",
  "transition-delay-[7800ms]",
  // "transition-delay-[7900ms]",
  // "transition-delay-[8000ms]",
  "transition-delay-[8100ms]",
  // "transition-delay-[8200ms]",
  // "transition-delay-[8300ms]",
  "transition-delay-[8400ms]",
  // "transition-delay-[8500ms]",
  // "transition-delay-[8600ms]",
  "transition-delay-[8700ms]",
  // "transition-delay-[8800ms]",
  // "transition-delay-[8900ms]",
  "transition-delay-[9000ms]",
  // "transition-delay-[9100ms]",
  // "transition-delay-[9200ms]",
  "transition-delay-[9300ms]",
  // "transition-delay-[9400ms]",
  // "transition-delay-[9500ms]",
  "transition-delay-[9600ms]",
  // "transition-delay-[9700ms]",
  // "transition-delay-[9800ms]",
  "transition-delay-[9900ms]",
];
