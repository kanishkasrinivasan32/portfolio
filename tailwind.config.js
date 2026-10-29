/** Theme values taken from the compiled CSS of the reference site. */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#102637", // rgb(16 38 55)
        ivory: "#F5F0E6", // rgb(245 240 230)
        burnt: "#C87948", // rgb(200 121 72)
        beige: "#DED0BC", // rgb(222 208 188)
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ['"DM Serif Display"', "Georgia", "serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: { marquee: "marquee 48s linear infinite" },
    },
  },
  plugins: [],
};
