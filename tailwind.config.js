/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  safelist: [
    'hover:border-blue-500',
    'hover:border-red-500',
    'hover:border-green-500',
    'hover:border-yellow-500',
    'hover:border-purple-500',
    'hover:border-pink-500',
    'hover:border-indigo-500',
    'hover:border-gray-500',
    'hover:border-black-500',
    'hover:border-white-500',
  ],
};
