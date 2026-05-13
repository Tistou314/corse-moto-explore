import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '6rem',
      },
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        bg: 'hsl(var(--bg) / <alpha-value>)',
        'bg-subtle': 'hsl(var(--bg-subtle) / <alpha-value>)',
        'text-primary': 'hsl(var(--text-primary) / <alpha-value>)',
        'text-secondary': 'hsl(var(--text-secondary) / <alpha-value>)',
        'text-muted': 'hsl(var(--text-muted) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        background: 'hsl(var(--bg) / <alpha-value>)',
        foreground: 'hsl(var(--text-primary) / <alpha-value>)',
        muted: {
          DEFAULT: 'hsl(var(--bg-subtle) / <alpha-value>)',
          foreground: 'hsl(var(--text-muted) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--bg-subtle) / <alpha-value>)',
          foreground: 'hsl(var(--text-primary) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsl(0 70% 45%)',
          foreground: 'hsl(0 0% 100%)',
        },
        card: {
          DEFAULT: 'hsl(var(--bg) / <alpha-value>)',
          foreground: 'hsl(var(--text-primary) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'hsl(var(--bg) / <alpha-value>)',
          foreground: 'hsl(var(--text-primary) / <alpha-value>)',
        },
        input: 'hsl(var(--border) / <alpha-value>)',
        ring: 'hsl(var(--accent) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces Variable"', 'Fraunces', 'Georgia', 'serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      maxWidth: {
        prose: '680px',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config;
