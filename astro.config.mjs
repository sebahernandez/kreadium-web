import { defineConfig, fontProviders } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";

export default defineConfig({
  output: "server",
  integrations: [react(), tailwind(), icon()],
  adapter: vercel(),
  prefetch: true,
  experimental: {
    fonts: [
      {
        provider: fontProviders.local(),
        name: "Inter",
        cssVariable: "--font-inter",
        options: {
          variants: [
            { src: ["./src/assets/fonts/Inter-Regular.woff2"], weight: "400", style: "normal" },
            { src: ["./src/assets/fonts/Inter-Medium.woff2"], weight: "500", style: "normal" },
            { src: ["./src/assets/fonts/Inter-SemiBold.woff2"], weight: "600", style: "normal" },
            { src: ["./src/assets/fonts/Inter-Bold.woff2"], weight: "700", style: "normal" },
            { src: ["./src/assets/fonts/Inter-ExtraBold.woff2"], weight: "800", style: "normal" },
          ],
        },
      },
      {
        provider: fontProviders.local(),
        name: "Geist",
        cssVariable: "--font-geist",
        options: {
          variants: [
            { src: ["./src/assets/fonts/Geist-Variable.woff2"], weight: "100 900", style: "normal" },
            { src: ["./src/assets/fonts/Geist-Italic.woff2"], weight: "100 900", style: "italic" },
          ],
        },
      },
    ],
  },
});
