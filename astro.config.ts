import { defineConfig } from "astro/config";
import compress from "astro-compress";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
import astroLayouts from "astro-layouts";

// https://astro.build/config
export default defineConfig({
  site: "https://cypherplatxs.github.io",
  base: "/",
  markdown: {
    shikiConfig: {
      theme: "dracula",
    },
  },
  integrations: [
    compress({
      css: true,
      html: true,
      js: true,
      img: true,
      svg: true,
      logger: 0,
    }),
    tailwind(),
    sitemap(),
    mdx({
      remarkPlugins: [
        [
          astroLayouts,
          {
            default: "@layouts/Layout.astro",
            "pages/blog/**/*.mdx": "@layouts/BlogLayout.astro",
            "pages/mems/**/*.mdx": "@layouts/BlogLayout.astro",
          },
        ],
      ],
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
