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
  ],
  integrations: [lit()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: [".onamp.dev", ".e2b.app"],
    },
  },
});
