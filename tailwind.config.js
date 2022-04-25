module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "color-palette-dark-gray": "#1F2937",
        "color-palette-light-gray": "#CFDDF0",
        "color-palette-light-blue": "#85B0ED",
        "color-palette-gray": "#5E656E",
        "color-palette-cyan": "#688ABA"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}