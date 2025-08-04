import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#007bff', // Adjust based on your design
        'secondary': '#6c757d',
        'accent': '#28a745',
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'], // Adjust based on Figma font
      },
    },
  },
  plugins: [],
};
export default config;