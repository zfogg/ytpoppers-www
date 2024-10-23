import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    // ? https://tailwindcss.com/docs/plugins#forms
    // formsPlugin,
    // ? https://github.com/jamiebuilds/tailwindcss-animate
    // require('@tailwindcss/typography'),
    // ? https://github.com/jamiebuilds/tailwindcss-animate
    // require('tailwindcss-animate'),
    // ? https://github.com/jorenvanhee/tailwindcss-debug-screens
    // require('tailwindcss-debug-screens'),
    // ? https://github.com/reslear/tailwind-scrollbar-hide
    // require('tailwind-scrollbar-hide')
]
};
export default config;
