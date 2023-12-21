/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        'purple-1': '#CA9DF0',
        'purple-2': '#AC6DE3',
        'purple-3': '#7E29C8',
        'purple-4': '#650AB4',
        
        'orange-1': '#FC8863',
        'orange-2': '#E76136',
        'orange-3': '#A42A03',
        'orange-4': '#7B1500',
        
        
      },
    },
  },
  plugins: [],
}

