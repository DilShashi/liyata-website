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
        // Custom color sets from Figma design
        MT4: '#BDC2C7',
        MT3: '#9199A1',
        MT2: '#65707B',
        MT1: '#394756',
        Main: '#233243',
        MS1: '#202D3C',
        MS2: '#19232F',
        MS3: '#121922',
        MS4: '#000000',

        BlT4: '#FFFFFF',
        BlT3: '#CCE0FF',
        BlT2: '#99C2FF',
        BlT1: '#80B3FF',
        B: '#66A3FF',
        BlS1: '#4D94FF',
        BlS2: '#3385FF',
        BlS3: '#1A75FF',
        BlS4: '#0066FF',

        // If any other colors may want to define globally can go here
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
