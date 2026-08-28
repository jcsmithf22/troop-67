// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Roboto Condensed",
      cssVariable: "--font-roboto-condensed",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            weight: "100 900",
            style: "normal",
            src: ["./src/assets/fonts/roboto-condensed-variable.woff2"],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Roboto Slab",
      cssVariable: "--font-roboto-slab",
      fallbacks: ["serif"],
      options: {
        variants: [
          {
            weight: "100 900",
            style: "normal",
            src: ["./src/assets/fonts/roboto-slab-variable.woff2"],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Familjen Grotesk",
      cssVariable: "--font-familjen-grotesk",
      fallbacks: ["sans-serif"],
      options: {
        variants: [
          {
            weight: "400 700",
            style: "normal",
            src: ["./src/assets/fonts/familjen-grotesk-variable.woff2"],
          },
          {
            weight: "400 700",
            style: "italic",
            src: ["./src/assets/fonts/familjen-grotesk-variable-italic.woff2"],
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--font-inter",
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          {
            weight: "100 900",
            style: "normal",
            src: ["./src/assets/fonts/inter-variable.woff2"],
          },
          {
            weight: "100 900",
            style: "italic",
            src: ["./src/assets/fonts/inter-variable-italic.woff2"],
          },
        ],
      },
    },
  ],
  integrations: [lit()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [".onamp.dev", ".e2b.app"],
    },
  },
});
