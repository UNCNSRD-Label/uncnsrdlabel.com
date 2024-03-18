import componentConfig from "@uncnsrdlabel/components/tailwind.config";
import type { Config } from 'tailwindcss';

export default {
  content: [
    "../../packages/@uncnsrdlabel/*/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [componentConfig],
  safelist: [
    {
      pattern: /w-(auto|full)/,
      variants: [
        'sm',
        'md',
        'lg',
        'xl',
        '2xl'
      ],
    },
    {
      pattern: /(px|py)-(2|4|6|8|10|12|16|20|24|32)/,
      variants: [
        'sm',
        'md',
        'lg',
        'xl',
        '2xl'
      ],
    },
    {
      pattern: /gap-(x|y)-(1|2|4|6|8|10|12|16|20|24|32)/,
      variants: [
        'sm',
        'md',
        'lg',
        'xl',
        '2xl'
      ],
    },
    {
      pattern: /grid-cols-(1|2|3|4|6|8|10|12)/,
      variants: [
        'sm',
        'md',
        'lg',
        'xl',
        '2xl'
      ],
    },
  ],
} satisfies Config;