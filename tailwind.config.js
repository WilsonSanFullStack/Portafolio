/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'victor-mono': ['"Victor Mono"', 'monospace']
      },
      screens: {
        'sm': {'max': '570px'},  // Dispositivos por debajo de 640px
        'md': '572px',           // Dispositivos medianos (640px y más)
        // Resto de tus breakpoints
      }
    },
  },
  plugins: [],
}