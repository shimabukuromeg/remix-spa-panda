import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: ["@pandacss/preset-base", "@park-ui/panda-preset"],

  // Where to look for your css declarations
  include: [
    "./app/routes/**/*.{ts,tsx,js,jsx}",
    "./app/components/**/*.{ts,tsx,js,jsx}",
  ],

  // Files to exclude
  exclude: [],

  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
