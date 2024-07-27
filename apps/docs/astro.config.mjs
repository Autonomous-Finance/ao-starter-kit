import markdoc from "@astrojs/markdoc";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig, squooshImageService } from "astro/config";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import remarkToc from "remark-toc";
// https://astro.build/config

export default defineConfig({
  image: {
    service: squooshImageService(),
  },
  integrations: [
    react(),
    sitemap(),
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    AutoImport({
      imports: [
        "@/shortcodes/Button",
        "@/shortcodes/Accordion",
        "@/shortcodes/Notice",
        "@/shortcodes/Video",
        "@/shortcodes/Youtube",
        "@/shortcodes/Tabs",
        "@/shortcodes/Tab",
        "@/shortcodes/Code",
        "@/shortcodes/Badge",
        "@/shortcodes/CardCtaContainer",
        "@/shortcodes/CardCta",
        "@/shortcodes/Figure",
        "@/shortcodes/CardContainer",
        "@/shortcodes/Card",
        "@/shortcodes/AccordionWrapper",
        "@/shortcodes/Images",
        "@/shortcodes/ChangelogWrapper",
        "@/shortcodes/Changelog",
      ],
    }),
    mdx(),
    markdoc(),
  ],
  markdown: {
    remarkPlugins: [
      [
        remarkToc,
        {
          heading: "contents",
        },
      ],
    ],
    rehypePlugins: [rehypeAccessibleEmojis, rehypeHeadingIds],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
});
