import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fontColor: "var(--fontColor)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        mobile:  {'max': '743px'},
        tablet: '744px',
        "tablet-max": {'max': '743px'},
        // => @media (min-width: 640px) { ... }
        "tablet-big-max": {'max': '1023px'},
        "desktop-max": {'max': '1299px'},
        "lg-to-desktop": {'min': '961px', 'max': '1299px'},
        desktop: '1300px',
      },
    },
  },
  plugins: [],
} satisfies Config;
