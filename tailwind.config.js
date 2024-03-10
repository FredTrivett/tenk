/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) /<alpha-value>)",
        foreground: "hsl(var(--foreground) /<alpha-value>)",
        primary: "hsl(var(--clr-primary) /<alpha-value>)",
        secondary: "hsl(var(--clr-secondary) /<alpha-value>)",
      },
      textColor: {
        background: "hsl(var(--background) /<alpha-value>)",
        foreground: "hsl(var(--foreground) /<alpha-value>)",
      },
      textShadow: {
        default: "0 2px 2px hsl(var(--foreground))",
        xl: "0 0px 5px rgba(0, 0, 0)",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {};
      const textShadows = theme('textShadow');
      Object.keys(textShadows).forEach(key => {
        const value = textShadows[key];
        newUtilities[`.text-shadow-${key}`] = {
          textShadow: value,
        };
      });
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
};
