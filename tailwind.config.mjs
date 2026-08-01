/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        'primary-dark': '#1D4ED8',
        'primary-light': '#DBEAFE',
        'primary-bg': '#EFF6FF',
        'text-heading': '#1E293B',
        'text-body': '#334155',
        'text-muted': '#64748B',
        surface: '#F8FAFC',
        'page-bg': '#F7F9FA',
      },
    },
  },
  plugins: [],
}
