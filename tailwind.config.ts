import { THEME_TEAL } from './src/theme';
import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          400: THEME_TEAL,
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
