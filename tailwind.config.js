/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`;

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        ink: token('ink'),
        muted: token('muted'),
        line: token('line'),
        surface: token('surface'),
        // Fixed in both themes.
        cobalt: { DEFAULT: '#2B66F8', deep: '#1E4FD8' },
        brass: '#C8A15A',
        steel: '#8A9BB0',
        navy: { DEFAULT: '#0D1B2A', 2: '#13263B', 3: '#1B3350' },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { page: '74rem' },
      transitionTimingFunction: { out: 'cubic-bezier(0.2, 0.8, 0.2, 1)' },
    },
  },
  plugins: [],
};
