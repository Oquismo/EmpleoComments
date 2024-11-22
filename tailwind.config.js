/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,astro}", // Incluye todos los archivos relevantes
  ],
  theme: {
    extend: {
      colors: {
        // Añade tus colores personalizados si lo necesitas
        primary: "#1E3A8A", // Azul
        secondary: "#10B981", // Verde
      },
      fontFamily: {
        // Personaliza las fuentes si lo deseas
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"), // Plugin útil para estilos de formularios
    require("@tailwindcss/typography"), // Mejoras para texto largo o contenido
  ],
};
