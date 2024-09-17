import * as runtime from "react/jsx-runtime";
import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
import { Helmet } from "react-helmet";
import { Link as Link$2, useLocation, useNavigate, useMatch, matchPath, ScrollRestoration, Routes, Route } from "react-router-dom";
import { StaticRouter, createStaticHandler, createStaticRouter, StaticRouterProvider } from "react-router-dom/server.js";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import toml from "toml";
import { loadConfigFromFile } from "vite";
import React, { createContext, useContext, useState, useEffect, forwardRef, useMemo, Fragment, useCallback, useRef, cloneElement } from "react";
import clsx$1, { clsx } from "clsx";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useInView } from "react-intersection-observer";
import { runSync } from "@mdx-js/mdx";
import { Cross1Icon, ArrowLeftIcon, MagnifyingGlassIcon, ListBulletIcon, FileIcon, ChevronRightIcon, Pencil2Icon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";
import MiniSearch from "minisearch";
import * as Label from "@radix-ui/react-label";
import Mark from "mark.js";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Accordion from "@radix-ui/react-accordion";
import * as Popover_ from "@radix-ui/react-popover";
import { MDXProvider } from "@mdx-js/react";
import * as Tabs from "@radix-ui/react-tabs";
import { useFloating, arrow, offset, shift, useHover, safePolygon, useInteractions, FloatingArrow } from "@floating-ui/react";
async function defineConfig({
  blogDir = "./pages/blog",
  head: head2,
  ogImageUrl,
  rootDir = "docs",
  title: title2 = "Docs",
  titleTemplate = `%s – ${title2}`,
  ...config2
}) {
  const basePath = parseBasePath(config2.basePath);
  return {
    blogDir,
    head: head2,
    ogImageUrl,
    rootDir,
    title: title2,
    titleTemplate,
    ...config2,
    basePath,
    banner: await parseBanner(config2.banner ?? ""),
    font: parseFont(config2.font ?? {}),
    iconUrl: parseImageUrl(config2.iconUrl, {
      basePath
    }),
    logoUrl: parseImageUrl(config2.logoUrl, {
      basePath
    }),
    markdown: parseMarkdown(config2.markdown ?? {}),
    socials: parseSocials(config2.socials ?? []),
    topNav: parseTopNav(config2.topNav ?? []),
    theme: await parseTheme(config2.theme ?? {}),
    vite: parseViteConfig(config2.vite, {
      basePath
    })
  };
}
const getDefaultConfig = async () => await defineConfig({});
function parseBasePath(basePath_) {
  let basePath = basePath_;
  if (!basePath) return "";
  if (!basePath.startsWith("/")) basePath = `/${basePath}`;
  if (basePath.endsWith("/")) basePath = basePath.slice(0, -1);
  return basePath;
}
async function parseBanner(banner) {
  if (!banner) return void 0;
  const bannerContent = (() => {
    if (typeof banner === "string") return banner;
    if (typeof banner === "object" && "content" in banner) return banner.content;
    return void 0;
  })();
  const content2 = await (async () => {
    if (typeof bannerContent !== "string") return bannerContent;
    const { compile } = await import("@mdx-js/mdx");
    const remarkGfm = (await import("remark-gfm")).default;
    return String(
      await compile(bannerContent, {
        outputFormat: "function-body",
        remarkPlugins: [remarkGfm]
      })
    );
  })();
  if (!content2) return void 0;
  const textColor = await (async () => {
    if (typeof banner === "string") return void 0;
    if (typeof banner === "object") {
      if ("textColor" in banner) return banner.textColor;
      if ("backgroundColor" in banner && banner.backgroundColor) {
        const chroma = (await import("chroma-js")).default;
        return chroma.contrast(banner.backgroundColor, "white") < 4.5 ? "black" : "white";
      }
    }
    return void 0;
  })();
  return {
    height: "32px",
    ...typeof banner === "object" ? banner : {},
    content: content2,
    textColor
  };
}
function parseFont(font) {
  if ("google" in font) return { default: font };
  return font;
}
function parseImageUrl(imageUrl, { basePath }) {
  if (!imageUrl) return;
  if (process.env.NODE_ENV === "development") return imageUrl;
  if (typeof imageUrl === "string") {
    if (imageUrl.startsWith("http")) return imageUrl;
    return `${basePath}${imageUrl}`;
  }
  return {
    dark: imageUrl.dark.startsWith("http") ? imageUrl.dark : `${basePath}${imageUrl.dark}`,
    light: imageUrl.light.startsWith("http") ? imageUrl.light : `${basePath}${imageUrl.light}`
  };
}
function parseMarkdown(markdown) {
  return {
    ...markdown,
    code: {
      themes: {
        dark: "github-dark-dimmed",
        light: "github-light"
      },
      ...markdown.code
    }
  };
}
const socialsMeta = {
  discord: { label: "Discord", type: "discord" },
  github: { label: "GitHub", type: "github" },
  telegram: { label: "Telegram", type: "telegram" },
  warpcast: { label: "Warpcast", type: "warpcast" },
  x: { label: "X (Twitter)", type: "x" }
};
function parseSocials(socials) {
  return socials.map((social) => {
    return {
      icon: social.icon,
      link: social.link,
      ...socialsMeta[social.icon]
    };
  });
}
let id = 0;
function parseTopNav(topNav) {
  const parsedTopNav = [];
  for (const item2 of topNav) {
    parsedTopNav.push({
      ...item2,
      id: id++,
      items: item2.items ? parseTopNav(item2.items) : []
    });
  }
  return parsedTopNav;
}
async function parseTheme(theme) {
  const chroma = (await import("chroma-js")).default;
  const accentColor = (() => {
    if (!theme.accentColor) return theme.accentColor;
    if (typeof theme.accentColor === "object" && !Object.keys(theme.accentColor).includes("light") && !Object.keys(theme.accentColor).includes("dark"))
      return theme.accentColor;
    const accentColor2 = theme.accentColor;
    const accentColorLight = typeof accentColor2 === "object" ? accentColor2.light : accentColor2;
    const accentColorDark = typeof accentColor2 === "object" ? accentColor2.dark : accentColor2;
    return {
      backgroundAccent: {
        dark: accentColorDark,
        light: accentColorLight
      },
      backgroundAccentHover: {
        dark: chroma(accentColorDark).darken(0.25).hex(),
        light: chroma(accentColorLight).darken(0.25).hex()
      },
      backgroundAccentText: {
        dark: chroma.contrast(accentColorDark, "white") < 4.5 ? "black" : "white",
        light: chroma.contrast(accentColorLight, "white") < 4.5 ? "black" : "white"
      },
      borderAccent: {
        dark: chroma(accentColorDark).brighten(0.5).hex(),
        light: chroma(accentColorLight).darken(0.25).hex()
      },
      textAccent: {
        dark: accentColorDark,
        light: accentColorLight
      },
      textAccentHover: {
        dark: chroma(accentColorDark).darken(0.5).hex(),
        light: chroma(accentColorLight).darken(0.5).hex()
      }
    };
  })();
  return {
    ...theme,
    accentColor
  };
}
function parseViteConfig(viteConfig, { basePath }) {
  return {
    ...viteConfig,
    ...basePath ? { base: basePath } : {}
  };
}
function serializeConfig(config2) {
  return JSON.stringify(serializeFunctions(config2));
}
function deserializeConfig(config2) {
  return deserializeFunctions$1(JSON.parse(config2));
}
function serializeFunctions(value, key) {
  if (Array.isArray(value)) {
    return value.map((v) => serializeFunctions(v));
  } else if (typeof value === "object" && value !== null) {
    return Object.keys(value).reduce((acc, key2) => {
      if (key2[0] === "_") return acc;
      acc[key2] = serializeFunctions(value[key2], key2);
      return acc;
    }, {});
  } else if (typeof value === "function") {
    let serialized = value.toString();
    if (key && (serialized.startsWith(key) || serialized.startsWith(`async ${key}`))) {
      serialized = serialized.replace(key, "function");
    }
    return `_vocs-fn_${serialized}`;
  } else {
    return value;
  }
}
function deserializeFunctions$1(value) {
  if (Array.isArray(value)) {
    return value.map(deserializeFunctions$1);
  } else if (typeof value === "object" && value !== null) {
    return Object.keys(value).reduce((acc, key) => {
      acc[key] = deserializeFunctions$1(value[key]);
      return acc;
    }, {});
  } else if (typeof value === "string" && value.includes("_vocs-fn_")) {
    return new Function(`return ${value.slice(9)}`)();
  } else {
    return value;
  }
}
const moduleExtensions = ["js", "jsx", "ts", "tsx", "mjs", "mts"];
const staticExtensions = ["toml", "json"];
const extensions = [...moduleExtensions, ...staticExtensions];
const defaultConfigPaths = [".vocs/config", "vocs.config", "Vocs"];
async function resolveVocsConfig(parameters = {}) {
  const { command = "serve", mode = "development" } = parameters;
  const [configPath, ext] = (() => {
    for (const ext2 of extensions) {
      if (parameters.configPath) return parameters.configPath;
      for (const filePath of defaultConfigPaths)
        if (existsSync(resolve(process.cwd(), `${filePath}.${ext2}`)))
          return [`${filePath}.${ext2}`, ext2];
    }
    return [void 0, void 0];
  })();
  const result2 = await (async () => {
    if (!ext) return;
    if (moduleExtensions.includes(ext))
      return await loadConfigFromFile({ command, mode }, configPath);
    if (staticExtensions.includes(ext)) {
      const file = readFileSync(configPath, "utf8");
      const rawConfig = (() => {
        if (ext === "toml") return camelCaseKeys(toml.parse(file));
        if (ext === "json") return JSON.parse(file);
        return;
      })();
      const config22 = await defineConfig(rawConfig);
      return config22 ? { config: config22 } : void 0;
    }
    return;
  })();
  const config2 = result2 ? result2.config : await getDefaultConfig();
  return {
    config: config2,
    configPath
  };
}
function camelCaseKeys(obj) {
  if (typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(camelCaseKeys);
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key.replace(/[-_](.)/g, (_, c) => c.toUpperCase()),
      camelCaseKeys(value)
    ])
  );
}
function deserializeFunctions(value) {
  if (Array.isArray(value)) {
    return value.map(deserializeFunctions);
  } else if (typeof value === "object" && value !== null) {
    return Object.keys(value).reduce((acc, key) => {
      acc[key] = deserializeFunctions(value[key]);
      return acc;
    }, {});
  } else if (typeof value === "string" && value.includes("_vocs-fn_")) {
    return new Function(`return ${value.slice(9)}`)();
  } else {
    return value;
  }
}
const config = deserializeFunctions({ "blogDir": "./pages/blog", "rootDir": "docs", "title": "Create AO dApp", "titleTemplate": "%s – Create AO dApp", "theme": { "accentColor": { "backgroundAccent": { "dark": "white", "light": "black" }, "backgroundAccentHover": { "dark": "#f2f2f2", "light": "#000000" }, "backgroundAccentText": { "dark": "black", "light": "white" }, "borderAccent": { "dark": "#ffffff", "light": "#000000" }, "textAccent": { "dark": "white", "light": "black" }, "textAccentHover": { "dark": "#e5e5e5", "light": "#000000" } } }, "sidebar": [{ "text": "Introduction", "link": "/introduction" }, { "text": "Getting Started", "link": "/getting-started" }, { "text": "AO Process Development", "collapsed": false, "items": [{ "text": "Architecture", "link": "/process-development/architecture" }, { "text": "Writing AO Processes", "link": "/process-development/process-design" }, { "text": "AO Process Testing", "link": "/process-development/testing" }, { "text": "Building AO Processes", "collapsed": false, "items": [{ "text": "Building with amalg.lua", "link": "/process-development/building-with-amalg" }, { "text": "Building with Squish", "link": "/process-development/building-with-squish" }] }, { "text": "Deployment", "link": "/process-development/deployment" }] }, { "text": "Frontend Development", "collapsed": false, "items": [{ "text": "Architecture", "link": "/frontend-development/architecture" }, { "text": "Connecting to the Backend", "link": "/frontend-development/connecting-to-backend" }, { "text": "Building the Frontend", "link": "/frontend-development/building" }, { "text": "Permaweb Deployment", "link": "/frontend-development/permaweb-deployment" }] }], "topNav": [{ "text": "Documentation", "link": "/introduction", "id": 0, "items": [] }, { "text": "v0.1.8", "items": [{ "text": "Changelog", "link": "https://github.com/Autonomous-Finance/ao-starter-kit/blob/main/create-ao-dapp/CHANGELOG.md", "id": 2, "items": [] }, { "text": "Contributing", "link": "https://github.com/Autonomous-Finance/ao-starter-kit/blob/main/.github/CONTRIBUTING.md", "id": 3, "items": [] }], "id": 1 }, { "text": "Examples", "link": "https://github.com/Autonomous-Finance/ao-starter-kit/tree/main/examples/", "id": 4, "items": [] }, { "text": "GitHub", "link": "https://github.com/Autonomous-Finance/ao-starter-kit", "id": 5, "items": [] }], "basePath": "", "font": {}, "markdown": { "code": { "themes": { "dark": "github-dark-dimmed", "light": "github-light" } } }, "socials": [], "vite": {} });
const ConfigContext = createContext(config);
const configHash = "";
function getConfig() {
  if (typeof window !== "undefined" && false) {
    const storedConfig = window.localStorage.getItem(`vocs.config.${configHash}`);
    if (storedConfig) return deserializeConfig(storedConfig);
  }
  return config;
}
function ConfigProvider({
  children,
  config: initialConfig
}) {
  const [config2, setConfig] = useState(() => {
    if (initialConfig) return initialConfig;
    return getConfig();
  });
  useEffect(() => {
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined" && false)
      window.localStorage.setItem(`vocs.config.${configHash}`, serializeConfig(config2));
  }, [config2]);
  return /* @__PURE__ */ jsx(ConfigContext.Provider, { value: config2, children });
}
function useConfig() {
  return useContext(ConfigContext);
}
const routes$1 = [{ lazy: () => import("./assets/getting-started-B2eMa91I.js"), path: "/getting-started", type: "mdx", filePath: "getting-started.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/getting-started-B2eMa91I.js"), path: "/getting-started.html", type: "mdx", filePath: "getting-started.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/index-DlwjYmmY.js"), path: "/", type: "mdx", filePath: "index.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/introduction-CBB7e9YA.js"), path: "/introduction", type: "mdx", filePath: "introduction.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/introduction-CBB7e9YA.js"), path: "/introduction.html", type: "mdx", filePath: "introduction.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/project-structure-Ctfz1XSh.js"), path: "/project-structure", type: "mdx", filePath: "project-structure.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/project-structure-Ctfz1XSh.js"), path: "/project-structure.html", type: "mdx", filePath: "project-structure.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/architecture-pKiUaa1H.js"), path: "/frontend-development/architecture", type: "mdx", filePath: "frontend-development/architecture.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/architecture-pKiUaa1H.js"), path: "/frontend-development/architecture.html", type: "mdx", filePath: "frontend-development/architecture.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/building-1GJ0J4Fp.js"), path: "/frontend-development/building", type: "mdx", filePath: "frontend-development/building.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/building-1GJ0J4Fp.js"), path: "/frontend-development/building.html", type: "mdx", filePath: "frontend-development/building.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/connecting-to-backend-zz3aYOxV.js"), path: "/frontend-development/connecting-to-backend", type: "mdx", filePath: "frontend-development/connecting-to-backend.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/connecting-to-backend-zz3aYOxV.js"), path: "/frontend-development/connecting-to-backend.html", type: "mdx", filePath: "frontend-development/connecting-to-backend.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/permaweb-deployment-B4tqJx0H.js"), path: "/frontend-development/permaweb-deployment", type: "mdx", filePath: "frontend-development/permaweb-deployment.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/permaweb-deployment-B4tqJx0H.js"), path: "/frontend-development/permaweb-deployment.html", type: "mdx", filePath: "frontend-development/permaweb-deployment.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/architecture-DFT4qRli.js"), path: "/process-development/architecture", type: "mdx", filePath: "process-development/architecture.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/architecture-DFT4qRli.js"), path: "/process-development/architecture.html", type: "mdx", filePath: "process-development/architecture.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/building-with-amalg-C0LdtnU3.js"), path: "/process-development/building-with-amalg", type: "mdx", filePath: "process-development/building-with-amalg.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/building-with-amalg-C0LdtnU3.js"), path: "/process-development/building-with-amalg.html", type: "mdx", filePath: "process-development/building-with-amalg.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/building-with-squish-BVU_b7yJ.js"), path: "/process-development/building-with-squish", type: "mdx", filePath: "process-development/building-with-squish.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/building-with-squish-BVU_b7yJ.js"), path: "/process-development/building-with-squish.html", type: "mdx", filePath: "process-development/building-with-squish.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/deployment-B09mGs5e.js"), path: "/process-development/deployment", type: "mdx", filePath: "process-development/deployment.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/deployment-B09mGs5e.js"), path: "/process-development/deployment.html", type: "mdx", filePath: "process-development/deployment.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/process-design-8r6obHCK.js"), path: "/process-development/process-design", type: "mdx", filePath: "process-development/process-design.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/process-design-8r6obHCK.js"), path: "/process-development/process-design.html", type: "mdx", filePath: "process-development/process-design.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/testing-MfckEd-V.js"), path: "/process-development/testing", type: "mdx", filePath: "process-development/testing.mdx", lastUpdatedAt: void 0 }, { lazy: () => import("./assets/testing-MfckEd-V.js"), path: "/process-development/testing.html", type: "mdx", filePath: "process-development/testing.mdx", lastUpdatedAt: void 0 }];
var contentVars = { horizontalPadding: "var(--vocs-content_horizontalPadding)", verticalPadding: "var(--vocs-content_verticalPadding)", width: "var(--vocs-content_width)" };
var defaultFontFamily = { "default": "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' };
var fontFamilyVars = { "default": "var(--vocs-fontFamily_default)", mono: "var(--vocs-fontFamily_mono)" };
var primitiveColorVars = { white: "var(--vocs-color_white)", black: "var(--vocs-color_black)", background: "var(--vocs-color_background)", background2: "var(--vocs-color_background2)", background3: "var(--vocs-color_background3)", background4: "var(--vocs-color_background4)", background5: "var(--vocs-color_background5)", backgroundAccent: "var(--vocs-color_backgroundAccent)", backgroundAccentHover: "var(--vocs-color_backgroundAccentHover)", backgroundAccentText: "var(--vocs-color_backgroundAccentText)", backgroundBlueTint: "var(--vocs-color_backgroundBlueTint)", backgroundDark: "var(--vocs-color_backgroundDark)", backgroundGreenTint: "var(--vocs-color_backgroundGreenTint)", backgroundGreenTint2: "var(--vocs-color_backgroundGreenTint2)", backgroundIrisTint: "var(--vocs-color_backgroundIrisTint)", backgroundRedTint: "var(--vocs-color_backgroundRedTint)", backgroundRedTint2: "var(--vocs-color_backgroundRedTint2)", backgroundYellowTint: "var(--vocs-color_backgroundYellowTint)", border: "var(--vocs-color_border)", border2: "var(--vocs-color_border2)", borderAccent: "var(--vocs-color_borderAccent)", borderBlue: "var(--vocs-color_borderBlue)", borderGreen: "var(--vocs-color_borderGreen)", borderIris: "var(--vocs-color_borderIris)", borderRed: "var(--vocs-color_borderRed)", borderYellow: "var(--vocs-color_borderYellow)", heading: "var(--vocs-color_heading)", inverted: "var(--vocs-color_inverted)", shadow: "var(--vocs-color_shadow)", shadow2: "var(--vocs-color_shadow2)", text: "var(--vocs-color_text)", text2: "var(--vocs-color_text2)", text3: "var(--vocs-color_text3)", text4: "var(--vocs-color_text4)", textAccent: "var(--vocs-color_textAccent)", textAccentHover: "var(--vocs-color_textAccentHover)", textBlue: "var(--vocs-color_textBlue)", textBlueHover: "var(--vocs-color_textBlueHover)", textGreen: "var(--vocs-color_textGreen)", textGreenHover: "var(--vocs-color_textGreenHover)", textIris: "var(--vocs-color_textIris)", textIrisHover: "var(--vocs-color_textIrisHover)", textRed: "var(--vocs-color_textRed)", textRedHover: "var(--vocs-color_textRedHover)", textYellow: "var(--vocs-color_textYellow)", textYellowHover: "var(--vocs-color_textYellowHover)", title: "var(--vocs-color_title)" };
var spaceVars = { "0": "var(--vocs-space_0)", "1": "var(--vocs-space_1)", "2": "var(--vocs-space_2)", "3": "var(--vocs-space_3)", "4": "var(--vocs-space_4)", "6": "var(--vocs-space_6)", "8": "var(--vocs-space_8)", "12": "var(--vocs-space_12)", "14": "var(--vocs-space_14)", "16": "var(--vocs-space_16)", "18": "var(--vocs-space_18)", "20": "var(--vocs-space_20)", "22": "var(--vocs-space_22)", "24": "var(--vocs-space_24)", "28": "var(--vocs-space_28)", "32": "var(--vocs-space_32)", "36": "var(--vocs-space_36)", "40": "var(--vocs-space_40)", "44": "var(--vocs-space_44)", "48": "var(--vocs-space_48)", "56": "var(--vocs-space_56)", "64": "var(--vocs-space_64)", "72": "var(--vocs-space_72)", "80": "var(--vocs-space_80)" };
var iconUrl$1 = "var(--vocs_ExternalLink_iconUrl)";
var root$$ = "vocs_ExternalLink";
const ExternalLink = forwardRef(
  ({ className, children, hideExternalIcon, href, ...props }, ref) => {
    const { basePath } = useConfig();
    const assetBasePath = basePath;
    return /* @__PURE__ */ jsx(
      "a",
      {
        ref,
        className: clsx(
          className,
          hideExternalIcon || typeof children !== "string" ? void 0 : root$$
        ),
        href,
        target: "_blank",
        rel: "noopener noreferrer",
        style: assignInlineVars({
          [iconUrl$1]: `url(${assetBasePath}/.vocs/icons/arrow-diagonal.svg)`
        }),
        ...props,
        children
      }
    );
  }
);
var accent_underlined = "vocs_Link_accent_underlined";
var root$_ = "vocs_Link";
var styleless = "vocs_Link_styleless";
function mergeRefs(...refs) {
  return (val) => {
    setRef(val, ...refs);
  };
}
function setRef(val, ...refs) {
  refs.forEach((ref) => {
    if (typeof ref === "function") {
      ref(val);
    } else if (ref != null) {
      ref.current = val;
    }
  });
}
const RouterLink = forwardRef((props, ref) => {
  const loadRoute = () => {
    var _a;
    return (_a = routes$1.find((route) => route.path === props.to)) == null ? void 0 : _a.lazy();
  };
  const { ref: intersectionRef, inView } = useInView();
  useEffect(() => {
    if (inView) loadRoute();
  }, [inView, loadRoute]);
  return /* @__PURE__ */ jsx(Link$2, { ref: mergeRefs(ref, intersectionRef), ...props });
});
const Link$1 = forwardRef((props, ref) => {
  const { href, variant = "accent underlined" } = props;
  const { pathname } = useLocation();
  if (href == null ? void 0 : href.match(/^(www|https?)/))
    return /* @__PURE__ */ jsx(
      ExternalLink,
      {
        ...props,
        ref,
        className: clsx(
          props.className,
          root$_,
          variant === "accent underlined" && accent_underlined,
          variant === "styleless" && styleless
        ),
        hideExternalIcon: props.hideExternalIcon
      }
    );
  const [before, after] = (href || "").split("#");
  const to = `${before ? before : pathname}${after ? `#${after}` : ""}`;
  return /* @__PURE__ */ jsx(
    RouterLink,
    {
      ...props,
      ref,
      className: clsx(
        props.className,
        root$_,
        variant === "accent underlined" && accent_underlined,
        variant === "styleless" && styleless
      ),
      to
    }
  );
});
var divider$4 = "vocs_NotFound_divider";
var root$Z = "vocs_NotFound";
var root$Y = "vocs_H1";
var root$X = "vocs_Heading";
var slugTarget = "vocs_Heading_slugTarget";
function Heading({
  level: level2,
  ...props
}) {
  const Component = `h${level2}`;
  return /* @__PURE__ */ jsxs(Component, { ...props, id: void 0, className: clsx(props.className, root$X), children: [
    /* @__PURE__ */ jsx("div", { id: props.id, className: slugTarget }),
    props.children
  ] });
}
function H1(props) {
  return /* @__PURE__ */ jsx(Heading, { ...props, className: clsx(props.className, root$Y), level: 1 });
}
var root$W = "vocs_Paragraph";
function Paragraph(props) {
  return /* @__PURE__ */ jsx("p", { ...props, className: clsx(props.className, root$W) });
}
function NotFound() {
  return /* @__PURE__ */ jsxs("div", { className: root$Z, children: [
    /* @__PURE__ */ jsx(H1, { children: "Page Not Found" }),
    /* @__PURE__ */ jsx("div", { style: { height: spaceVars["24"] } }),
    /* @__PURE__ */ jsx("hr", { className: divider$4 }),
    /* @__PURE__ */ jsx("div", { style: { height: spaceVars["24"] } }),
    /* @__PURE__ */ jsx(Paragraph, { children: "The page you were looking for could not be found." }),
    /* @__PURE__ */ jsx("div", { style: { height: spaceVars["8"] } }),
    /* @__PURE__ */ jsx(Link$1, { href: "/", children: "Go to Home Page" })
  ] });
}
var bannerBackgroundColor = "var(--vocs_Banner_bannerBackgroundColor)";
var bannerHeight = "var(--vocs_Banner_bannerHeight)";
var bannerTextColor = "var(--vocs_Banner_bannerTextColor)";
var closeButton = "vocs_Banner_closeButton";
var content$7 = "vocs_Banner_content";
var inner = "vocs_Banner_inner";
var root$V = "vocs_Banner";
function deserializeElement(element, key) {
  if (typeof element !== "object") return element;
  if (element === null) return element;
  if (Array.isArray(element)) return element.map((el, i) => deserializeElement(el, i));
  const props = element.props.children ? { ...element.props, children: deserializeElement(element.props.children) } : element.props;
  return React.createElement(element.type, { ...props, key });
}
function Banner({ hide }) {
  const { banner } = useConfig();
  const ConsumerBanner = useMemo(() => {
    const content2 = (banner == null ? void 0 : banner.content) ?? "";
    if (!content2) return null;
    if (typeof content2 !== "string") return () => deserializeElement(content2);
    const { default: MDXBanner } = runSync(content2, { ...runtime, Fragment });
    return MDXBanner;
  }, [banner]);
  if (!ConsumerBanner) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: clsx$1(root$V),
      style: assignInlineVars({
        [bannerBackgroundColor]: banner == null ? void 0 : banner.backgroundColor,
        [bannerTextColor]: banner == null ? void 0 : banner.textColor
      }),
      children: /* @__PURE__ */ jsxs("div", { className: clsx$1(inner), children: [
        /* @__PURE__ */ jsx("div", { className: clsx$1(content$7), children: /* @__PURE__ */ jsx(ConsumerBanner, {}) }),
        (banner == null ? void 0 : banner.dismissable) !== "false" && /* @__PURE__ */ jsx("button", { className: clsx$1(closeButton), onClick: hide, type: "button", children: /* @__PURE__ */ jsx(Cross1Icon, { width: 14, height: 14 }) })
      ] })
    }
  );
}
var root$U = "vocs_Content";
function Content$2({
  children,
  className
}) {
  return /* @__PURE__ */ jsx("article", { className: clsx(className, root$U), children });
}
function getActiveNavIds({
  items: items2,
  pathname
}) {
  const path = pathname.replace(/\.html$/, "");
  const activeIds = [];
  for (const item2 of items2) {
    if (item2.link && path.startsWith(item2.match || item2.link)) activeIds.push(item2.id);
    else if (item2.items) {
      const activeChildItems = getActiveNavIds({ items: item2.items, pathname });
      if (activeChildItems.length > 0) activeIds.push(item2.id);
    }
  }
  return activeIds;
}
function useActiveNavIds({
  items: items2,
  pathname
}) {
  return useMemo(() => getActiveNavIds({ items: items2, pathname }), [items2, pathname]);
}
function usePageData() {
  const pageData = useContext(PageDataContext);
  if (!pageData) throw new Error("`usePageData` must be used within `PageDataContext.Provider`.");
  return pageData;
}
const PageDataContext = createContext(void 0);
function useSidebar() {
  const { pathname } = useLocation();
  const config2 = useConfig();
  const { sidebar: sidebar2 } = config2;
  if (!sidebar2) return { items: [] };
  if (Array.isArray(sidebar2)) return { items: sidebar2 };
  const sidebarKey = useMemo(() => {
    const keys = Object.keys(sidebar2).filter((key) => pathname.startsWith(key));
    return keys[keys.length - 1];
  }, [sidebar2, pathname]);
  if (!sidebarKey) return { items: [] };
  if (Array.isArray(sidebar2[sidebarKey]))
    return { key: sidebarKey, items: sidebar2[sidebarKey] };
  return { ...sidebar2[sidebarKey], key: sidebarKey };
}
function useLayout() {
  const sidebar2 = useSidebar();
  const { frontmatter } = usePageData();
  const { layout: layout_, showLogo, showOutline, showSidebar, showTopNav } = frontmatter || {};
  const layout = layout_ ?? "docs";
  return {
    layout,
    get showLogo() {
      if (typeof showLogo !== "undefined") return showLogo;
      return true;
    },
    get showOutline() {
      if (typeof showOutline !== "undefined") return showOutline;
      return layout === "docs";
    },
    get showSidebar() {
      if (sidebar2.items.length === 0) return false;
      if (typeof showSidebar !== "undefined") return showSidebar;
      if (layout === "minimal") return false;
      if (layout === "landing") return false;
      return true;
    },
    get showTopNav() {
      if (typeof showTopNav !== "undefined") return showTopNav;
      return true;
    }
  };
}
function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return void 0;
    if (localStorage.getItem("vocs.theme")) {
      const storedTheme = localStorage.getItem("vocs.theme");
      if (storedTheme) return storedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });
  useEffect(() => {
    if (theme) localStorage.setItem("vocs.theme", theme);
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);
  return {
    theme,
    toggle() {
      setTheme((theme2) => theme2 === "light" ? "dark" : "light");
    }
  };
}
var visibleDark = "vocs_utils_visibleDark";
var visibleLight = "vocs_utils_visibleLight";
var visuallyHidden = "vocs_utils_visuallyHidden";
const getSearchIndex = async () => JSON.stringify(await (await fetch("/.vocs/search-index-9dfb0ff7.json")).json());
let promise;
function useSearchIndex() {
  const [searchIndex, setSearchIndex] = useState();
  useEffect(() => {
    (async () => {
      if (!promise) promise = getSearchIndex();
      const json = await promise;
      const searchIndex2 = MiniSearch.loadJSON(json, {
        fields: ["title", "titles", "text"],
        searchOptions: {
          boost: { title: 4, text: 2, titles: 1 },
          fuzzy: 0.2,
          prefix: true
          // ...(theme.value.search?.provider === 'local' &&
          //   theme.value.search.options?.miniSearch?.searchOptions),
        },
        storeFields: ["href", "html", "isPage", "text", "title", "titles"]
        // ...(theme.value.search?.provider === 'local' &&
        //   theme.value.search.options?.miniSearch?.options),
      });
      setSearchIndex(searchIndex2);
    })();
  }, []);
  useEffect(() => {
    return;
  }, []);
  return searchIndex;
}
var search = "vocs_DesktopSearch_search";
var searchCommand = "vocs_DesktopSearch_searchCommand";
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedValue;
}
function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState();
  useEffect(() => {
    const initialValue = getItem(key);
    if (typeof initialValue === "undefined" || initialValue === null) {
      setValue(typeof defaultValue === "function" ? defaultValue() : defaultValue);
    } else {
      setValue(initialValue);
    }
  }, [defaultValue, key]);
  const setter = useCallback(
    (updater) => {
      setValue((old) => {
        let newVal;
        if (typeof updater === "function") newVal = updater(old);
        else newVal = updater;
        try {
          localStorage.setItem(key, JSON.stringify(newVal));
        } catch {
        }
        return newVal;
      });
    },
    [key]
  );
  return [value, setter];
}
function getItem(key) {
  try {
    const itemValue = localStorage.getItem(key);
    if (typeof itemValue === "string") {
      return JSON.parse(itemValue);
    }
    return void 0;
  } catch {
    return void 0;
  }
}
var root$T = "vocs_Kbd";
function Kbd(props) {
  return /* @__PURE__ */ jsx("kbd", { ...props, className: clsx(props.className, root$T) });
}
var kbdGroup = "vocs_KeyboardShortcut_kbdGroup";
var root$S = "vocs_KeyboardShortcut";
function KeyboardShortcut(props) {
  const { description: description2, keys } = props;
  return /* @__PURE__ */ jsxs("span", { className: root$S, children: [
    description2,
    /* @__PURE__ */ jsx("span", { className: kbdGroup, children: keys.map((key) => /* @__PURE__ */ jsx(Kbd, { children: key }, key)) })
  ] });
}
var content$6 = "vocs_SearchDialog_content";
var excerpt = "vocs_SearchDialog_excerpt";
var overlay = "vocs_SearchDialog_overlay";
var result = "vocs_SearchDialog_result";
var resultIcon = "vocs_SearchDialog_resultIcon";
var resultSelected = "vocs_SearchDialog_resultSelected";
var results = "vocs_SearchDialog_results";
var root$R = "vocs_SearchDialog";
var searchBox = "vocs_SearchDialog_searchBox";
var searchInput = "vocs_SearchDialog_searchInput";
var searchInputIcon = "vocs_SearchDialog_searchInputIcon";
var searchInputIconDesktop = "vocs_SearchDialog_searchInputIconDesktop";
var searchInputIconMobile = "vocs_SearchDialog_searchInputIconMobile";
var searchShortcuts = "vocs_SearchDialog_searchShortcuts";
var title$4 = "vocs_SearchDialog_title";
var titleIcon = "vocs_SearchDialog_titleIcon";
var titles = "vocs_SearchDialog_titles";
function SearchDialog(props) {
  const { search: searchOptions } = useConfig();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const [filterText, setFilterText] = useLocalStorage("filterText", "");
  const searchTerm = useDebounce(filterText, 200);
  const searchIndex = useSearchIndex();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [disableMouseOver, setDisableMouseOver] = useState(false);
  const [showDetailView, setShowDetailView] = useLocalStorage("showDetailView", true);
  const results$1 = useMemo(() => {
    if (!searchIndex) return [];
    if (!searchTerm) {
      setSelectedIndex(-1);
      return [];
    }
    setSelectedIndex(0);
    return searchIndex.search(searchTerm, searchOptions).slice(0, 16);
  }, [searchIndex, searchOptions, searchTerm]);
  const resultsCount = results$1.length;
  const selectedResult = results$1[selectedIndex];
  const highlight = useCallback(() => {
    var _a, _b, _c;
    if (!listRef.current) return;
    const terms = /* @__PURE__ */ new Set();
    for (const result2 of results$1) {
      for (const term in result2.match) {
        terms.add(term);
      }
    }
    const mark = new Mark(listRef.current);
    mark.unmark({
      done() {
        mark == null ? void 0 : mark.markRegExp(formMarkRegex(terms));
      }
    });
    const excerptElements = listRef.current.querySelectorAll(`.${excerpt}`);
    for (const element of excerptElements) {
      (_a = element.querySelector('mark[data-markjs="true"]')) == null ? void 0 : _a.scrollIntoView({ block: "center" });
    }
    (_c = (_b = listRef.current) == null ? void 0 : _b.firstElementChild) == null ? void 0 : _c.scrollIntoView({ block: "start" });
  }, [results$1]);
  useEffect(() => {
    if (!props.open) return;
    function keyDownHandler(event) {
      var _a;
      switch (event.key) {
        case "ArrowDown": {
          event.preventDefault();
          setSelectedIndex((index) => {
            var _a2;
            let nextIndex = index + 1;
            if (nextIndex >= resultsCount) nextIndex = 0;
            const element = (_a2 = listRef.current) == null ? void 0 : _a2.children[nextIndex];
            element == null ? void 0 : element.scrollIntoView({ block: "nearest" });
            return nextIndex;
          });
          setDisableMouseOver(true);
          break;
        }
        case "ArrowUp": {
          event.preventDefault();
          setSelectedIndex((index) => {
            var _a2;
            let nextIndex = index - 1;
            if (nextIndex < 0) nextIndex = resultsCount - 1;
            const element = (_a2 = listRef.current) == null ? void 0 : _a2.children[nextIndex];
            element == null ? void 0 : element.scrollIntoView({ block: "nearest" });
            return nextIndex;
          });
          setDisableMouseOver(true);
          break;
        }
        case "Backspace": {
          if (!event.metaKey) return;
          event.preventDefault();
          setFilterText("");
          (_a = inputRef.current) == null ? void 0 : _a.focus();
          break;
        }
        case "Enter": {
          if (event.target instanceof HTMLButtonElement && event.target.type !== "submit") return;
          if (!selectedResult) return;
          event.preventDefault();
          navigate(selectedResult.href);
          props.onClose();
          break;
        }
      }
    }
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [navigate, resultsCount, setFilterText, selectedResult, props.open, props.onClose]);
  useEffect(() => {
    if (searchTerm === "") return;
    if (!listRef.current) return;
    highlight();
  }, [highlight, searchTerm]);
  return /* @__PURE__ */ jsxs(Dialog.Portal, { children: [
    /* @__PURE__ */ jsx(Dialog.Overlay, { className: overlay }),
    /* @__PURE__ */ jsxs(
      Dialog.Content,
      {
        onOpenAutoFocus: (event) => {
          if (inputRef.current) {
            event.preventDefault();
            inputRef.current.focus();
          }
          highlight();
        },
        onCloseAutoFocus: () => {
          setSelectedIndex(0);
        },
        className: root$R,
        "aria-describedby": void 0,
        children: [
          /* @__PURE__ */ jsx(Dialog.Title, { className: visuallyHidden, children: "Search" }),
          /* @__PURE__ */ jsxs("form", { className: searchBox, children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                "aria-label": "Close search dialog",
                type: "button",
                onClick: () => props.onClose(),
                className: searchInputIconMobile,
                children: /* @__PURE__ */ jsx(ArrowLeftIcon, { className: searchInputIcon, height: 20, width: 20 })
              }
            ),
            /* @__PURE__ */ jsx(Label.Root, { htmlFor: "search-input", children: /* @__PURE__ */ jsx(
              MagnifyingGlassIcon,
              {
                "aria-label": "Search",
                className: clsx$1(searchInputIcon, searchInputIconDesktop),
                height: 20,
                width: 20
              }
            ) }),
            /* @__PURE__ */ jsx(
              "input",
              {
                ref: inputRef,
                tabIndex: 0,
                className: searchInput,
                id: "search-input",
                onChange: (event) => setFilterText(event.target.value),
                placeholder: "Search",
                type: "search",
                value: filterText
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                "aria-label": "Toggle detail view",
                type: "button",
                onClick: () => setShowDetailView((x) => !x),
                children: /* @__PURE__ */ jsx(ListBulletIcon, { className: searchInputIcon, height: 20, width: 20 })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                "aria-label": "Reset search",
                type: "button",
                className: searchInputIcon,
                onClick: () => {
                  var _a;
                  setFilterText("");
                  (_a = inputRef.current) == null ? void 0 : _a.focus();
                },
                children: "⌫"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            "ul",
            {
              className: results,
              role: results$1.length ? "listbox" : void 0,
              onMouseMove: () => setDisableMouseOver(false),
              ref: listRef,
              children: [
                searchTerm && results$1.length === 0 && /* @__PURE__ */ jsxs("li", { children: [
                  'No results for "',
                  /* @__PURE__ */ jsx("span", { children: searchTerm }),
                  '"'
                ] }),
                results$1.map((result$1, index) => {
                  var _a;
                  return /* @__PURE__ */ jsx(
                    "li",
                    {
                      role: "option",
                      className: clsx$1(result, index === selectedIndex && resultSelected),
                      "aria-selected": index === selectedIndex,
                      "aria-label": [...result$1.titles.filter((title2) => Boolean(title2)), result$1.title].join(
                        " > "
                      ),
                      children: /* @__PURE__ */ jsxs(
                        Link$2,
                        {
                          to: result$1.href,
                          onClick: (event) => {
                            if (event.metaKey) return;
                            props.onClose();
                          },
                          onMouseEnter: () => !disableMouseOver && setSelectedIndex(index),
                          onFocus: () => setSelectedIndex(index),
                          children: [
                            /* @__PURE__ */ jsxs("div", { className: titles, children: [
                              result$1.isPage ? /* @__PURE__ */ jsx(FileIcon, { className: resultIcon }) : /* @__PURE__ */ jsx("span", { className: resultIcon, children: "#" }),
                              result$1.titles.filter((title2) => Boolean(title2)).map((title2) => /* @__PURE__ */ jsxs("span", { className: title$4, children: [
                                /* @__PURE__ */ jsx(
                                  "span",
                                  {
                                    dangerouslySetInnerHTML: { __html: title2 }
                                  }
                                ),
                                /* @__PURE__ */ jsx(ChevronRightIcon, { className: titleIcon })
                              ] }, title2)),
                              /* @__PURE__ */ jsx("span", { className: title$4, children: /* @__PURE__ */ jsx(
                                "span",
                                {
                                  dangerouslySetInnerHTML: { __html: result$1.title }
                                }
                              ) })
                            ] }),
                            showDetailView && ((_a = result$1.text) == null ? void 0 : _a.trim()) && /* @__PURE__ */ jsx("div", { className: excerpt, children: /* @__PURE__ */ jsx(Content$2, { className: content$6, children: /* @__PURE__ */ jsx(
                              "div",
                              {
                                dangerouslySetInnerHTML: { __html: result$1.html }
                              }
                            ) }) })
                          ]
                        }
                      )
                    },
                    result$1.id
                  );
                })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: searchShortcuts, children: [
            /* @__PURE__ */ jsx(KeyboardShortcut, { description: "Navigate", keys: ["↑", "↓"] }),
            /* @__PURE__ */ jsx(KeyboardShortcut, { description: "Select", keys: ["enter"] }),
            /* @__PURE__ */ jsx(KeyboardShortcut, { description: "Close", keys: ["esc"] }),
            /* @__PURE__ */ jsx(KeyboardShortcut, { description: "Reset", keys: ["⌘", "⌫"] })
          ] })
        ]
      }
    )
  ] });
}
function formMarkRegex(terms) {
  return new RegExp(
    [...terms].sort((a, b) => b.length - a.length).map((term) => {
      return `(${term.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d")})`;
    }).join("|"),
    "gi"
  );
}
function DesktopSearch() {
  useSearchIndex();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function keyDownHandler(event) {
      const isInput = document.activeElement instanceof HTMLElement && (["input", "select", "textarea"].includes(document.activeElement.tagName.toLowerCase()) || document.activeElement.isContentEditable);
      if (event.key === "/" && !open && !isInput) {
        event.preventDefault();
        setOpen(true);
      } else if (event.metaKey === true && event.key === "k") {
        event.preventDefault();
        setOpen((x) => !x);
      }
    }
    window.addEventListener("keydown", keyDownHandler);
    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [open]);
  return /* @__PURE__ */ jsxs(Dialog.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(Dialog.Trigger, { asChild: true, children: /* @__PURE__ */ jsxs("button", { className: search, type: "button", children: [
      /* @__PURE__ */ jsx(MagnifyingGlassIcon, { style: { marginTop: 2 } }),
      "Search",
      /* @__PURE__ */ jsx("div", { className: searchCommand, children: /* @__PURE__ */ jsx(
        "div",
        {
          style: {
            background: "currentColor",
            transform: "rotate(45deg)",
            width: 1.5,
            borderRadius: 2,
            height: "100%"
          }
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsx(SearchDialog, { open, onClose: () => setOpen(false) })
  ] });
}
var button$1 = "vocs_DesktopTopNav_button";
var content$5 = "vocs_DesktopTopNav_content";
var curtain$1 = "vocs_DesktopTopNav_curtain";
var divider$3 = "vocs_DesktopTopNav_divider";
var group$2 = "vocs_DesktopTopNav_group";
var hideCompact = "vocs_DesktopTopNav_hideCompact";
var icon$1 = "vocs_DesktopTopNav_icon";
var item$4 = "vocs_DesktopTopNav_item";
var logo$2 = "vocs_DesktopTopNav_logo";
var logoWrapper$1 = "vocs_DesktopTopNav_logoWrapper";
var root$Q = "vocs_DesktopTopNav";
var section$2 = "vocs_DesktopTopNav_section";
var withLogo = "vocs_DesktopTopNav_withLogo";
var root$P = "vocs_Icon";
var sizeVar = "var(--vocs_Icon_size)";
function Icon({ className, label, icon: Icon2, size, style }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "aria-label": label,
      className: clsx$1(root$P, className),
      role: "img",
      style: {
        ...style,
        ...assignInlineVars({ [sizeVar]: size })
      },
      children: /* @__PURE__ */ jsx(Icon2, { height: size, width: size })
    }
  );
}
var logoDark = "vocs_Logo_logoDark";
var logoLight = "vocs_Logo_logoLight";
var root$O = "vocs_Logo";
function Logo({ className }) {
  const { logoUrl } = useConfig();
  if (!logoUrl) return null;
  return /* @__PURE__ */ jsx(Fragment$1, { children: typeof logoUrl === "string" ? /* @__PURE__ */ jsx("img", { alt: "Logo", className: clsx$1(className, root$O), src: logoUrl }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        alt: "Logo",
        className: clsx$1(className, root$O, logoDark),
        src: logoUrl.dark
      }
    ),
    /* @__PURE__ */ jsx(
      "img",
      {
        alt: "Logo",
        className: clsx$1(className, root$O, logoLight),
        src: logoUrl.light
      }
    )
  ] }) });
}
var logoImage = "vocs_NavLogo_logoImage";
var title$3 = "vocs_NavLogo_title";
function NavLogo() {
  const config2 = useConfig();
  if (config2.logoUrl) return /* @__PURE__ */ jsx(Logo, { className: logoImage });
  return /* @__PURE__ */ jsx("div", { className: title$3, children: config2.title });
}
var chevronDownIcon$1 = "var(--vocs_NavigationMenu_chevronDownIcon)";
var content$4 = "vocs_NavigationMenu_content";
var item$3 = "vocs_NavigationMenu_item";
var link$2 = "vocs_NavigationMenu_link";
var list$1 = "vocs_NavigationMenu_list";
var root$N = "vocs_NavigationMenu";
var trigger$1 = "vocs_NavigationMenu_trigger vocs_NavigationMenu_link";
const Root$2 = (props) => /* @__PURE__ */ jsx(NavigationMenu.Root, { ...props, className: clsx$1(props.className, root$N) });
const List$2 = (props) => /* @__PURE__ */ jsx(NavigationMenu.List, { ...props, className: clsx$1(props.className, list$1) });
const Link = ({
  active,
  children,
  className,
  href
}) => /* @__PURE__ */ jsx(NavigationMenu.Link, { asChild: true, children: /* @__PURE__ */ jsx(
  Link$1,
  {
    "data-active": active,
    className: clsx$1(className, link$2),
    href,
    variant: "styleless",
    children
  }
) });
const Item = (props) => /* @__PURE__ */ jsx(NavigationMenu.Item, { ...props, className: clsx$1(props.className, item$3) });
const Trigger$1 = ({
  active,
  className,
  ...props
}) => {
  const { basePath } = useConfig();
  const assetBasePath = basePath;
  return /* @__PURE__ */ jsx(
    NavigationMenu.Trigger,
    {
      ...props,
      "data-active": active,
      className: clsx$1(className, trigger$1),
      style: assignInlineVars({
        [chevronDownIcon$1]: `url(${assetBasePath}/.vocs/icons/chevron-down.svg)`
      })
    }
  );
};
const Content$1 = (props) => /* @__PURE__ */ jsx(NavigationMenu.Content, { ...props, className: clsx$1(props.className, content$4) });
function Discord() {
  return /* @__PURE__ */ jsxs("svg", { width: "100%", height: "100%", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 127.14 96.36", children: [
    /* @__PURE__ */ jsx("title", { children: "Discord" }),
    /* @__PURE__ */ jsx("g", { id: "图层_2", "data-name": "图层 2", children: /* @__PURE__ */ jsx("g", { id: "Discord_Logos", "data-name": "Discord Logos", children: /* @__PURE__ */ jsx("g", { id: "Discord_Logo_-_Large_-_White", "data-name": "Discord Logo - Large - White", children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z",
        fill: "currentColor"
      }
    ) }) }) })
  ] });
}
function GitHub() {
  return /* @__PURE__ */ jsxs("svg", { width: "100%", height: "100%", viewBox: "0 0 98 96", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("title", { children: "GitHub" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z",
        fill: "currentColor"
      }
    )
  ] });
}
function Moon() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 78 82",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Moon" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M62.8455 45.9668C63.6268 45.9668 64.2127 45.3809 64.3104 44.5508C65.4334 34.3457 66.0682 33.9551 76.4197 32.3438C77.3963 32.1973 77.9334 31.7578 77.9334 30.8789C77.9334 30.0977 77.3963 29.5605 76.6151 29.4629C66.1658 27.4609 65.4334 27.4609 64.3104 17.2559C64.2127 16.377 63.6268 15.8398 62.8455 15.8398C62.0154 15.8398 61.4783 16.377 61.3807 17.207C60.1111 27.6074 59.6229 28.0957 49.0272 29.4629C48.2947 29.5117 47.7088 30.0977 47.7088 30.8789C47.7088 31.709 48.2947 32.1973 49.0272 32.3438C59.6229 34.3457 60.0623 34.4434 61.3807 44.6484C61.4783 45.3809 62.0154 45.9668 62.8455 45.9668ZM44.535 19.5508C45.0233 19.5508 45.3162 19.2578 45.4139 18.7695C46.6834 12.4707 46.5369 12.373 53.1287 11.0547C53.5682 10.957 53.91 10.7129 53.91 10.1758C53.91 9.63868 53.5682 9.39448 53.1287 9.29688C46.5369 7.97848 46.6834 7.88089 45.4139 1.58199C45.3162 1.09379 45.0233 0.800781 44.535 0.800781C43.9979 0.800781 43.7049 1.09379 43.6072 1.58199C42.3377 7.88089 42.4842 7.97848 35.9412 9.29688C35.4529 9.39448 35.1111 9.63868 35.1111 10.1758C35.1111 10.7129 35.4529 10.957 35.9412 11.0547C42.4842 12.373 42.3865 12.4707 43.6072 18.7695C43.7049 19.2578 43.9979 19.5508 44.535 19.5508Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M34.3298 81.2696C48.49 81.2696 59.9157 74.043 65.0915 61.7872C65.8239 59.9806 65.5798 58.6134 64.7497 57.7833C64.0173 57.0509 62.7478 56.9044 61.3318 57.4903C58.4509 58.6134 54.9353 59.2481 50.6384 59.2481C33.695 59.2481 22.7575 48.6036 22.7575 32.2462C22.7575 27.4122 23.6853 22.6759 24.7595 20.5763C25.5407 18.9161 25.4919 17.5001 24.8083 16.67C24.0271 15.7423 22.6599 15.4005 20.7068 16.1329C8.64624 20.7716 0.345459 33.4181 0.345459 47.8712C0.345459 66.8165 14.5056 81.2696 34.3298 81.2696ZM34.4275 74.5801C18.4607 74.5801 7.03494 62.9591 7.03494 47.3341C7.03494 38.2521 10.9411 30.0489 17.6306 24.629C16.8005 27.0704 16.361 30.6837 16.361 34.1505C16.361 52.8517 29.5446 65.6935 48.8806 65.6935C52.0544 65.6935 54.9841 65.3517 56.4001 64.9122C51.615 70.918 43.4607 74.5801 34.4275 74.5801Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function Sun() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 84 84",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Sun" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M41.8675 15.5254C43.9183 15.5254 45.6273 13.7676 45.6273 11.7168V3.80658C45.6273 1.75588 43.9183 0.046875 41.8675 0.046875C39.7679 0.046875 38.0589 1.75588 38.0589 3.80658V11.7168C38.0589 13.7676 39.7679 15.5254 41.8675 15.5254ZM60.3246 23.2402C61.7895 24.7051 64.2309 24.7539 65.7446 23.2402L71.3598 17.6738C72.7758 16.209 72.7758 13.7188 71.3598 12.2539C69.8949 10.7891 67.4535 10.7891 65.9887 12.2539L60.3246 17.918C58.9086 19.3828 58.9086 21.7754 60.3246 23.2402ZM67.9906 41.7461C67.9906 43.7969 69.7485 45.5547 71.7992 45.5547H79.6117C81.7113 45.5547 83.4202 43.7969 83.4202 41.7461C83.4202 39.6953 81.7113 37.9375 79.6117 37.9375H71.7992C69.7485 37.9375 67.9906 39.6953 67.9906 41.7461ZM60.3246 60.3008C58.9086 61.7656 58.9086 64.1582 60.3246 65.623L65.9887 71.2871C67.4535 72.7519 69.8949 72.7031 71.3598 71.2383C72.7758 69.7734 72.7758 67.332 71.3598 65.8672L65.6957 60.3008C64.2309 58.8359 61.7895 58.8359 60.3246 60.3008ZM41.8675 67.9668C39.7679 67.9668 38.0589 69.7246 38.0589 71.7754V79.6855C38.0589 81.7363 39.7679 83.4453 41.8675 83.4453C43.9183 83.4453 45.6273 81.7363 45.6273 79.6855V71.7754C45.6273 69.7246 43.9183 67.9668 41.8675 67.9668ZM23.3617 60.3008C21.8969 58.8359 19.4067 58.8359 17.9418 60.3008L12.3754 65.8184C10.9106 67.2832 10.9106 69.7246 12.3266 71.1894C13.7914 72.6543 16.2328 72.7031 17.6977 71.2383L23.3129 65.623C24.7778 64.1582 24.7778 61.7656 23.3617 60.3008ZM15.6957 41.7461C15.6957 39.6953 13.9867 37.9375 11.8871 37.9375H4.07455C1.97497 37.9375 0.265991 39.6953 0.265991 41.7461C0.265991 43.7969 1.97497 45.5547 4.07455 45.5547H11.8871C13.9867 45.5547 15.6957 43.7969 15.6957 41.7461ZM23.3129 23.2402C24.7778 21.8242 24.7778 19.334 23.3617 17.918L17.7465 12.2539C16.3305 10.8379 13.8403 10.7891 12.4242 12.2539C10.9594 13.7188 10.9594 16.209 12.3754 17.625L17.9418 23.2402C19.4067 24.7051 21.8481 24.7051 23.3129 23.2402Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M41.8675 61.668C52.7073 61.668 61.7405 52.6836 61.7405 41.7461C61.7405 30.8086 52.7073 21.8242 41.8675 21.8242C30.9788 21.8242 21.9456 30.8086 21.9456 41.7461C21.9456 52.6836 30.9788 61.668 41.8675 61.668ZM41.8675 55.0273C34.5921 55.0273 28.5862 48.9727 28.5862 41.7461C28.5862 34.5195 34.5921 28.4648 41.8675 28.4648C49.0941 28.4648 55.0999 34.5195 55.0999 41.7461C55.0999 48.9727 49.0941 55.0273 41.8675 55.0273Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function Telegram() {
  return /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "100%", height: "100%", viewBox: "0 0 50 50", children: [
    /* @__PURE__ */ jsx("title", { children: "Telegram" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M25 2c12.703 0 23 10.297 23 23S37.703 48 25 48 2 37.703 2 25 12.297 2 25 2zm7.934 32.375c.423-1.298 2.405-14.234 2.65-16.783.074-.772-.17-1.285-.648-1.514-.578-.278-1.434-.139-2.427.219-1.362.491-18.774 7.884-19.78 8.312-.954.405-1.856.847-1.856 1.487 0 .45.267.703 1.003.966.766.273 2.695.858 3.834 1.172 1.097.303 2.346.04 3.046-.395.742-.461 9.305-6.191 9.92-6.693.614-.502 1.104.141.602.644-.502.502-6.38 6.207-7.155 6.997-.941.959-.273 1.953.358 2.351.721.454 5.906 3.932 6.687 4.49.781.558 1.573.811 2.298.811.725 0 1.107-.955 1.468-2.064z",
        fill: "currentColor"
      }
    )
  ] });
}
function Warpcast() {
  return /* @__PURE__ */ jsxs("svg", { width: "32", height: "32", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("title", { children: "Warpcast" }),
    /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M7.92028 31.9901H24.0698C28.4371 31.9901 31.9901 28.4373 31.9901 24.0699V7.92053C31.9901 3.55319 28.4371 0.000137329 24.0698 0.000137329H7.92028C3.55304 0.000137329 0 3.55319 0 7.92053V24.0699C0 28.4373 3.55304 31.9901 7.92028 31.9901ZM19.4134 16.048L20.9908 10.124H25.1383L21.2924 23.2218H17.7062L15.9951 17.1397L14.284 23.2218H10.7055L6.85115 10.124H10.999L12.5915 16.0916L14.1891 10.124H17.8309L19.4134 16.048Z",
        fill: "currentColor"
      }
    )
  ] });
}
function X() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 1200 1227",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("title", { children: "X" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
DesktopTopNav.Curtain = Curtain$1;
function DesktopTopNav() {
  var _a, _b, _c, _d, _e, _f;
  const config2 = useConfig();
  const { showLogo, showSidebar } = useLayout();
  return /* @__PURE__ */ jsxs("div", { className: clsx$1(root$Q, showLogo && !showSidebar && withLogo), children: [
    /* @__PURE__ */ jsx(DesktopSearch, {}),
    showLogo && /* @__PURE__ */ jsx("div", { className: logoWrapper$1, children: /* @__PURE__ */ jsx("div", { className: logo$2, children: /* @__PURE__ */ jsx(
      RouterLink,
      {
        to: "/",
        style: { alignItems: "center", display: "flex", height: "56px", marginTop: "4px" },
        children: /* @__PURE__ */ jsx(NavLogo, {})
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: section$2 }),
    /* @__PURE__ */ jsxs("div", { className: section$2, children: [
      (((_a = config2.topNav) == null ? void 0 : _a.length) || 0) > 0 && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("div", { className: group$2, children: /* @__PURE__ */ jsx(Navigation$2, {}) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: clsx$1(
              divider$3,
              (((_b = config2.topNav) == null ? void 0 : _b.length) || 0) > 3 ? hideCompact : null
            )
          }
        )
      ] }),
      config2.socials && ((_c = config2.socials) == null ? void 0 : _c.length) > 0 && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: clsx$1(
              group$2,
              (((_d = config2.topNav) == null ? void 0 : _d.length) || 0) > 3 ? hideCompact : null
            ),
            style: { marginLeft: "-8px", marginRight: "-8px" },
            children: config2.socials.map((social, i) => /* @__PURE__ */ jsx("div", { className: item$4, children: /* @__PURE__ */ jsx(SocialButton$1, { ...social }) }, i))
          }
        ),
        !((_e = config2.theme) == null ? void 0 : _e.colorScheme) && /* @__PURE__ */ jsx("div", { className: clsx$1(divider$3, hideCompact) })
      ] }),
      !((_f = config2.theme) == null ? void 0 : _f.colorScheme) && /* @__PURE__ */ jsx(
        "div",
        {
          className: clsx$1(group$2, hideCompact),
          style: { marginLeft: "-8px", marginRight: "-8px" },
          children: /* @__PURE__ */ jsx("div", { className: item$4, children: /* @__PURE__ */ jsx(ThemeToggleButton, {}) })
        }
      )
    ] })
  ] });
}
function Curtain$1() {
  return /* @__PURE__ */ jsx("div", { className: curtain$1 });
}
function Navigation$2() {
  const { topNav } = useConfig();
  if (!topNav) return null;
  const { pathname } = useLocation();
  const activeIds = useActiveNavIds({ pathname, items: topNav });
  return /* @__PURE__ */ jsx(Root$2, { delayDuration: 0, children: /* @__PURE__ */ jsx(List$2, { children: topNav.map(
    (item2, i) => item2.link ? /* @__PURE__ */ jsx(
      Link,
      {
        active: activeIds.includes(item2.id),
        className: item$4,
        href: item2.link,
        children: item2.text
      },
      i
    ) : item2.items ? /* @__PURE__ */ jsxs(Item, { className: item$4, children: [
      /* @__PURE__ */ jsx(Trigger$1, { active: activeIds.includes(item2.id), children: item2.text }),
      /* @__PURE__ */ jsx(Content$1, { className: content$5, children: /* @__PURE__ */ jsx(NavigationMenuContent$1, { items: item2.items }) })
    ] }, i) : null
  ) }) });
}
function NavigationMenuContent$1({ items: items2 }) {
  const { pathname } = useLocation();
  const activeIds = useActiveNavIds({ pathname, items: items2 });
  return /* @__PURE__ */ jsx("ul", { children: items2 == null ? void 0 : items2.map((item2, i) => /* @__PURE__ */ jsx(Link, { active: activeIds.includes(item2.id), href: item2.link, children: item2.text }, i)) });
}
function ThemeToggleButton() {
  const { toggle } = useTheme();
  return /* @__PURE__ */ jsxs("button", { className: button$1, onClick: toggle, type: "button", children: [
    /* @__PURE__ */ jsx(Icon, { className: clsx$1(icon$1, visibleDark), size: "20px", label: "Light", icon: Sun }),
    /* @__PURE__ */ jsx(
      Icon,
      {
        className: clsx$1(icon$1, visibleLight),
        size: "20px",
        label: "Dark",
        icon: Moon,
        style: { marginTop: "-2px" }
      }
    )
  ] });
}
const iconsForIcon$1 = {
  discord: Discord,
  github: GitHub,
  telegram: Telegram,
  warpcast: Warpcast,
  x: X
};
const sizesForType = {
  discord: "23px",
  github: "20px",
  telegram: "21px",
  warpcast: "20px",
  x: "18px"
};
function SocialButton$1({ icon: icon2, label, link: link2 }) {
  return /* @__PURE__ */ jsx("a", { className: button$1, href: link2, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(
    Icon,
    {
      className: icon$1,
      label,
      icon: iconsForIcon$1[icon2],
      size: sizesForType[icon2] || "20px"
    }
  ) });
}
function Footer$1() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { children: "Released under the MIT License." }),
    /* @__PURE__ */ jsx("div", { children: "Copyright © 2022-present weth, LLC." })
  ] });
}
const Layout = ({ children }) => children;
function useEditLink() {
  const pageData = usePageData();
  const config2 = useConfig();
  return useMemo(() => {
    const { pattern = "", text = "Edit page" } = config2.editLink ?? {};
    let url = "";
    if (typeof pattern === "function") url = "";
    else if (pageData.filePath) url = pattern.replace(/:path/g, pageData.filePath);
    return { url, text };
  }, [config2.editLink, pageData.filePath]);
}
function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
var container = "vocs_Footer_container";
var editLink = "vocs_Footer_editLink";
var lastUpdated = "vocs_Footer_lastUpdated";
var navigation$2 = "vocs_Footer_navigation";
var navigationIcon = "vocs_Footer_navigationIcon";
var navigationIcon_left = "vocs_Footer_navigationIcon_left";
var navigationIcon_right = "vocs_Footer_navigationIcon_right";
var navigationItem$1 = "vocs_Footer_navigationItem";
var navigationItem_left = "vocs_Footer_navigationItem_left";
var navigationItem_right = "vocs_Footer_navigationItem_right";
var navigationText = "vocs_Footer_navigationText";
var navigationTextInner = "vocs_Footer_navigationTextInner";
var root$M = "vocs_Footer";
function ArrowLeft() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 72 60",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Arrow Left" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M0.325684 29.7461C0.325684 30.8203 0.813963 31.8457 1.69286 32.6758L26.8882 57.8223C27.7671 58.6524 28.7437 59.043 29.7691 59.043C31.9175 59.043 33.5777 57.4317 33.5777 55.2344C33.5777 54.209 33.2359 53.1836 32.5035 52.5L25.7652 45.5176L9.26126 30.6738L8.38236 32.7734L21.3706 33.7012H67.4644C69.7593 33.7012 71.3706 32.041 71.3706 29.7461C71.3706 27.4512 69.7593 25.791 67.4644 25.791H21.3706L8.38236 26.7188L9.26126 28.8672L25.7652 13.9746L32.5035 6.99221C33.2359 6.30861 33.5777 5.28322 33.5777 4.25782C33.5777 2.06052 31.9175 0.449219 29.7691 0.449219C28.7437 0.449219 27.7671 0.839814 26.8882 1.66991L1.69286 26.8164C0.813963 27.6465 0.325684 28.6719 0.325684 29.7461Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function ArrowRight() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 72 60",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Arrow Right" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M71.3706 29.7461C71.3706 28.6719 70.8824 27.6465 70.0035 26.8164L44.8081 1.66991C43.9292 0.839814 42.9527 0.449219 41.9273 0.449219C39.7789 0.449219 38.1187 2.06052 38.1187 4.25782C38.1187 5.28322 38.4605 6.30861 39.1929 6.99221L45.9312 13.9746L62.4351 28.8672L63.314 26.7188L50.3257 25.791H4.23196C1.93706 25.791 0.325684 27.4512 0.325684 29.7461C0.325684 32.041 1.93706 33.7012 4.23196 33.7012H50.3257L63.314 32.7734L62.4351 30.6738L45.9312 45.5176L39.1929 52.5C38.4605 53.1836 38.1187 54.209 38.1187 55.2344C38.1187 57.4317 39.7789 59.043 41.9273 59.043C42.9527 59.043 43.9292 58.6524 44.8081 57.8223L70.0035 32.6758C70.8824 31.8457 71.3706 30.8203 71.3706 29.7461Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function Footer() {
  const { layout } = useLayout();
  const mounted = useMounted();
  const pageData = usePageData();
  const lastUpdatedAtDate = useMemo(
    () => pageData.lastUpdatedAt ? new Date(pageData.lastUpdatedAt) : void 0,
    [pageData.lastUpdatedAt]
  );
  const lastUpdatedAtISOString = useMemo(
    () => lastUpdatedAtDate == null ? void 0 : lastUpdatedAtDate.toISOString(),
    [lastUpdatedAtDate]
  );
  return /* @__PURE__ */ jsxs("footer", { className: root$M, children: [
    layout === "docs" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsxs("div", { className: container, children: [
        /* @__PURE__ */ jsx(EditLink, {}),
        mounted && pageData.lastUpdatedAt && /* @__PURE__ */ jsxs("div", { className: lastUpdated, children: [
          "Last updated:",
          " ",
          /* @__PURE__ */ jsx("time", { dateTime: lastUpdatedAtISOString, children: new Intl.DateTimeFormat(void 0, {
            dateStyle: "short",
            timeStyle: "short"
          }).format(lastUpdatedAtDate) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Navigation$1, {})
    ] }),
    /* @__PURE__ */ jsx(Footer$1, {})
  ] });
}
function EditLink() {
  const editLink$1 = useEditLink();
  if (!editLink$1.url) return null;
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs(Link$1, { className: editLink, href: editLink$1.url, children: [
    /* @__PURE__ */ jsx(Pencil2Icon, {}),
    " ",
    editLink$1.text
  ] }) });
}
function Navigation$1() {
  const mounted = useMounted();
  const sidebar2 = useSidebar();
  const { pathname } = useLocation();
  const flattenedSidebar = useMemo(
    () => flattenSidebar(sidebar2.items || []).filter((item2) => item2.link),
    [sidebar2]
  );
  const currentPageIndex = useMemo(
    () => flattenedSidebar.findIndex((item2) => item2.link === pathname),
    [flattenedSidebar, pathname]
  );
  const [prevPage, nextPage] = useMemo(() => {
    if (currentPageIndex < 0) return [];
    if (currentPageIndex === 0) return [null, flattenedSidebar[currentPageIndex + 1]];
    if (currentPageIndex === flattenedSidebar.length - 1)
      return [flattenedSidebar[currentPageIndex - 1], null];
    return [flattenedSidebar[currentPageIndex - 1], flattenedSidebar[currentPageIndex + 1]];
  }, [currentPageIndex, flattenedSidebar]);
  const navigate = useNavigate();
  useEffect(() => {
    let index = currentPageIndex;
    let isListening = false;
    const keydown = (event) => {
      if (event.code === "ShiftLeft") isListening = true;
      if (isListening) {
        const nextPage2 = flattenedSidebar[index + 1];
        const prevPage2 = flattenedSidebar[index - 1];
        if (event.code === "ArrowRight" && (nextPage2 == null ? void 0 : nextPage2.link)) {
          navigate(nextPage2.link);
          index++;
        }
        if (event.code === "ArrowLeft" && (prevPage2 == null ? void 0 : prevPage2.link)) {
          navigate(prevPage2.link);
          index--;
        }
      }
    };
    const keyup = (event) => {
      if (event.code === "ShiftLeft") isListening = false;
    };
    window.addEventListener("keydown", keydown);
    window.addEventListener("keyup", keyup);
    return () => {
      window.removeEventListener("keydown", keydown);
      window.removeEventListener("keyup", keyup);
    };
  }, []);
  if (!mounted) return null;
  return /* @__PURE__ */ jsxs("div", { className: navigation$2, children: [
    prevPage ? /* @__PURE__ */ jsxs(
      Link$1,
      {
        className: clsx$1(navigationItem$1, navigationItem_left),
        href: prevPage.link,
        variant: "styleless",
        children: [
          /* @__PURE__ */ jsxs("div", { className: navigationText, children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: clsx$1(navigationIcon, navigationIcon_left),
                style: assignInlineVars({ [sizeVar]: "0.75em" }),
                children: /* @__PURE__ */ jsx(Icon, { label: "Previous", icon: ArrowLeft })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: navigationTextInner, children: prevPage.text })
          ] }),
          /* @__PURE__ */ jsx(KeyboardShortcut, { description: "Previous", keys: ["shift", "←"] })
        ]
      }
    ) : /* @__PURE__ */ jsx("div", {}),
    nextPage ? /* @__PURE__ */ jsxs(
      Link$1,
      {
        className: clsx$1(navigationItem$1, navigationItem_right),
        href: nextPage.link,
        variant: "styleless",
        children: [
          /* @__PURE__ */ jsxs("div", { className: navigationText, children: [
            /* @__PURE__ */ jsx("div", { className: navigationTextInner, style: { textAlign: "right" }, children: nextPage.text }),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: clsx$1(navigationIcon, navigationIcon_right),
                style: assignInlineVars({ [sizeVar]: "0.75em" }),
                children: /* @__PURE__ */ jsx(Icon, { label: "Next", icon: ArrowRight })
              }
            )
          ] }),
          /* @__PURE__ */ jsx(KeyboardShortcut, { description: "Next", keys: ["shift", "→"] })
        ]
      }
    ) : /* @__PURE__ */ jsx("div", {})
  ] });
}
function flattenSidebar(sidebar2) {
  const items2 = [];
  for (const item2 of sidebar2) {
    if (item2.link) {
      items2.push(item2);
    }
    if (item2.items) {
      items2.push(...flattenSidebar(item2.items));
    }
  }
  return items2;
}
var searchButton = "vocs_MobileSearch_searchButton";
function MobileSearch() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Dialog.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(Dialog.Trigger, { asChild: true, children: /* @__PURE__ */ jsx("button", { className: searchButton, type: "button", "aria-label": "Search", children: /* @__PURE__ */ jsx(MagnifyingGlassIcon, { height: 21, width: 21 }) }) }),
    /* @__PURE__ */ jsx(SearchDialog, { open, onClose: () => setOpen(false) })
  ] });
}
var button = "vocs_MobileTopNav_button";
var chevronDownIcon = "var(--vocs_MobileTopNav_chevronDownIcon)";
var chevronUpIcon = "var(--vocs_MobileTopNav_chevronUpIcon)";
var content$3 = "vocs_MobileTopNav_content";
var curtain = "vocs_MobileTopNav_curtain";
var curtainGroup = "vocs_MobileTopNav_curtainGroup";
var curtainItem = "vocs_MobileTopNav_curtainItem";
var divider$2 = "vocs_MobileTopNav_divider";
var group$1 = "vocs_MobileTopNav_group";
var icon = "vocs_MobileTopNav_icon";
var item$2 = "vocs_MobileTopNav_item";
var logo$1 = "vocs_MobileTopNav_logo";
var menuTitle = "vocs_MobileTopNav_menuTitle";
var menuTrigger = "vocs_MobileTopNav_menuTrigger";
var navigation$1 = "vocs_MobileTopNav_navigation";
var navigationContent = "vocs_MobileTopNav_navigationContent";
var navigationItem = "vocs_MobileTopNav_navigationItem";
var navigationTrigger = "vocs_MobileTopNav_trigger";
var navigation_compact = "vocs_MobileTopNav_navigation_compact";
var outlinePopover = "vocs_MobileTopNav_outlinePopover";
var outlineTrigger = "vocs_MobileTopNav_outlineTrigger";
var root$L = "vocs_MobileTopNav";
var section$1 = "vocs_MobileTopNav_section";
var separator$1 = "vocs_MobileTopNav_separator";
var sidebarPopover = "vocs_MobileTopNav_sidebarPopover";
var topNavPopover = "vocs_MobileTopNav_topNavPopover";
function debounce(fn, delay) {
  let invoked = false;
  return () => {
    invoked = true;
    setTimeout(() => {
      if (invoked) fn();
      invoked = false;
    }, delay);
  };
}
var heading = "vocs_Outline_heading";
var item$1 = "vocs_Outline_item";
var items$1 = "vocs_Outline_items";
var link$1 = "vocs_Outline_link";
var nav = "vocs_Outline_nav";
var root$K = "vocs_Outline";
function Outline({
  minLevel = 2,
  maxLevel: maxLevel_ = 3,
  highlightActive = true,
  onClickItem,
  showTitle = true
} = {}) {
  const { outlineFooter } = useConfig();
  const { showOutline } = useLayout();
  const maxLevel = (() => {
    if (typeof showOutline === "number") return minLevel + showOutline - 1;
    return maxLevel_;
  })();
  const active = useRef(true);
  const { pathname, hash } = useLocation();
  const [headingElements, setHeadingElements] = useState([]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const elements = Array.from(document.querySelectorAll(`.${root$X}`));
    setHeadingElements(elements);
  }, [pathname]);
  const items2 = useMemo(() => {
    if (!headingElements) return [];
    return headingElements.map((element) => {
      const slugTargetElement = element.querySelector(`.${slugTarget}`);
      if (!slugTargetElement) return null;
      const box = slugTargetElement.getBoundingClientRect();
      const id2 = slugTargetElement.id;
      const level2 = Number(element.tagName[1]);
      const text = element.textContent;
      const topOffset = window.scrollY + box.top;
      if (level2 < minLevel || level2 > maxLevel) return null;
      return {
        id: id2,
        level: level2,
        slugTargetElement,
        text,
        topOffset
      };
    }).filter(Boolean);
  }, [headingElements, maxLevel, minLevel]);
  const [activeId, setActiveId] = useState(hash.replace("#", ""));
  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        var _a;
        if (!active.current) return;
        const id2 = entry.target.id;
        if (entry.isIntersecting) setActiveId(id2);
        else {
          const box = entry.target.getBoundingClientRect();
          const isVisible = box.top > 0;
          if (!isVisible) return;
          const activeIndex = items2.findIndex((item2) => item2.id === activeId);
          const previousId = (_a = items2[activeIndex - 1]) == null ? void 0 : _a.id;
          setActiveId(previousId);
        }
      },
      {
        rootMargin: "0px 0px -95% 0px"
      }
    );
    for (const item2 of items2) observer.observe(item2.slugTargetElement);
    return () => observer.disconnect();
  }, [activeId, items2]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => {
      var _a;
      if (!active.current) return;
      const lastItemId = (_a = items2[items2.length - 1]) == null ? void 0 : _a.id;
      if (entry.isIntersecting) setActiveId(lastItemId);
      else if (activeId === lastItemId) setActiveId(items2[items2.length - 2].id);
    });
    observer.observe(document.querySelector("[data-bottom-observer]"));
    return () => observer.disconnect();
  }, [activeId, items2]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const callback = debounce(() => {
      var _a, _b, _c;
      if (!active.current) return;
      if (window.scrollY === 0) {
        setActiveId((_a = items2[0]) == null ? void 0 : _a.id);
        return;
      }
      if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
        setActiveId((_b = items2[items2.length - 1]) == null ? void 0 : _b.id);
        return;
      }
      for (let i = 0; i < items2.length; i++) {
        const item2 = items2[i];
        if (window.scrollY < item2.topOffset) {
          setActiveId((_c = items2[i - 1]) == null ? void 0 : _c.id);
          break;
        }
      }
    }, 100);
    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  }, [items2]);
  if (items2.length === 0) return null;
  const levelItems = items2.filter((item2) => item2.level === minLevel);
  return /* @__PURE__ */ jsxs("aside", { className: root$K, children: [
    /* @__PURE__ */ jsxs("nav", { className: nav, children: [
      showTitle && /* @__PURE__ */ jsx("h2", { className: heading, children: "On this page" }),
      /* @__PURE__ */ jsx(
        Items,
        {
          activeId: highlightActive ? activeId : null,
          items: items2,
          onClickItem: () => {
            onClickItem == null ? void 0 : onClickItem();
            active.current = false;
            setTimeout(() => {
              active.current = true;
            }, 500);
          },
          levelItems,
          setActiveId
        }
      )
    ] }),
    deserializeElement(outlineFooter)
  ] });
}
function Items({
  activeId,
  items: items2,
  levelItems,
  onClickItem,
  setActiveId
}) {
  return /* @__PURE__ */ jsx("ul", { className: items$1, children: levelItems.map(({ id: id2, level: level2, text }) => {
    const hash = `#${id2}`;
    const isActive = activeId === id2;
    const nextLevelItems = (() => {
      var _a;
      const itemIndex = items2.findIndex((item2) => item2.id === id2);
      const nextIndex = itemIndex + 1;
      const nextItemLevel = (_a = items2[nextIndex]) == null ? void 0 : _a.level;
      if (nextItemLevel <= level2) return null;
      const nextItems = [];
      for (let i = nextIndex; i < items2.length; i++) {
        const item2 = items2[i];
        if (item2.level !== nextItemLevel) break;
        nextItems.push(item2);
      }
      return nextItems;
    })();
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("li", { className: item$1, children: /* @__PURE__ */ jsx(
        Link$2,
        {
          "data-active": isActive,
          to: hash,
          onClick: () => {
            onClickItem == null ? void 0 : onClickItem();
            setActiveId(id2);
          },
          className: link$1,
          children: text
        }
      ) }),
      nextLevelItems && /* @__PURE__ */ jsx(
        Items,
        {
          activeId,
          levelItems: nextLevelItems,
          items: items2,
          onClickItem,
          setActiveId
        }
      )
    ] }, id2);
  }) });
}
var root$J = "vocs_Popover";
Popover.Root = Popover_.Root;
Popover.Trigger = Popover_.Trigger;
function Popover({ children, className }) {
  return /* @__PURE__ */ jsx(Popover_.Portal, { children: /* @__PURE__ */ jsx(Popover_.Content, { className: clsx$1(root$J, className), sideOffset: 12, children }) });
}
var backLink = "vocs_Sidebar_backLink";
var divider$1 = "vocs_Sidebar_divider";
var group = "vocs_Sidebar_group";
var item = "vocs_Sidebar_item";
var items = "vocs_Sidebar_items";
var level = "vocs_Sidebar_level";
var levelCollapsed = "vocs_Sidebar_levelCollapsed";
var levelInset = "vocs_Sidebar_levelInset";
var logo = "vocs_Sidebar_logo";
var logoWrapper = "vocs_Sidebar_logoWrapper";
var navigation = "vocs_Sidebar_navigation";
var root$I = "vocs_Sidebar";
var section = "vocs_Sidebar_section";
var sectionCollapse = "vocs_Sidebar_sectionCollapse";
var sectionCollapseActive = "vocs_Sidebar_sectionCollapseActive";
var sectionHeader = "vocs_Sidebar_sectionHeader";
var sectionHeaderActive = "vocs_Sidebar_sectionHeaderActive";
var sectionTitle = "vocs_Sidebar_sectionTitle";
var sectionTitleLink = "vocs_Sidebar_sectionTitleLink";
function ChevronRight() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 39 69",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Chevron Right" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M38.8697 34.7461C38.8697 33.6719 38.4791 32.6953 37.649 31.8652L7.47318 1.8848C6.74078 1.1035 5.76418 0.712891 4.64118 0.712891C2.34618 0.712891 0.588379 2.42189 0.588379 4.71679C0.588379 5.79099 1.07668 6.81639 1.76028 7.59769L29.0552 34.7461L1.76028 61.8945C1.07668 62.6758 0.588379 63.6523 0.588379 64.7754C0.588379 67.0703 2.34618 68.7793 4.64118 68.7793C5.76418 68.7793 6.74078 68.3887 7.47318 67.6074L37.649 37.627C38.4791 36.7969 38.8697 35.8203 38.8697 34.7461Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function Sidebar(props) {
  var _a;
  const { className, onClickItem } = props;
  const { previousPath } = usePageData();
  const sidebarRef = useRef(null);
  const sidebar2 = useSidebar();
  const [backPath, setBackPath] = useState("/");
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!previousPath) return;
    setBackPath(previousPath);
  }, [sidebar2.key, sidebar2.backLink]);
  if (!sidebar2) return null;
  const groups = getSidebarGroups(sidebar2.items);
  return /* @__PURE__ */ jsxs("aside", { ref: sidebarRef, className: clsx$1(root$I, className), children: [
    /* @__PURE__ */ jsxs("div", { className: logoWrapper, children: [
      /* @__PURE__ */ jsx("div", { className: logo, children: /* @__PURE__ */ jsx(RouterLink, { to: "/", style: { alignItems: "center", display: "flex", height: "100%" }, children: /* @__PURE__ */ jsx(NavLogo, {}) }) }),
      /* @__PURE__ */ jsx("div", { className: divider$1 })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: navigation, children: /* @__PURE__ */ jsxs("div", { className: group, children: [
      sidebar2.backLink && /* @__PURE__ */ jsx("section", { className: section, children: /* @__PURE__ */ jsx("div", { className: items, children: /* @__PURE__ */ jsxs(RouterLink, { className: clsx$1(item, backLink), to: backPath, children: [
        "←",
        " ",
        typeof history !== "undefined" && ((_a = history.state) == null ? void 0 : _a.key) && backPath !== "/" ? "Back" : "Home"
      ] }) }) }),
      groups.map((group2, i) => /* @__PURE__ */ jsx(
        SidebarItem,
        {
          depth: 0,
          item: group2,
          onClick: onClickItem,
          sidebarRef
        },
        `${group2.text}${i}`
      ))
    ] }) })
  ] }, sidebar2.key);
}
function getSidebarGroups(sidebar2) {
  const groups = [];
  let lastGroupIndex = 0;
  for (const item2 of sidebar2) {
    if (item2.items) {
      lastGroupIndex = groups.push(item2);
      continue;
    }
    if (!groups[lastGroupIndex]) groups.push({ text: "", items: [item2] });
    else groups[lastGroupIndex].items.push(item2);
  }
  return groups;
}
function getActiveChildItem(items2, pathname) {
  return items2.find((item2) => {
    if (matchPath(pathname, item2.link ?? "")) return true;
    if (item2.link === pathname) return true;
    if (!item2.items) return false;
    return getActiveChildItem(item2.items, pathname);
  });
}
function SidebarItem(props) {
  const { depth, item: item$12, onClick, sidebarRef } = props;
  const itemRef = useRef(null);
  const { pathname } = useLocation();
  const match = useMatch(item$12.link || "");
  const hasActiveChildItem = useMemo(
    () => item$12.items ? Boolean(getActiveChildItem(item$12.items, pathname)) : false,
    [item$12.items, pathname]
  );
  const [collapsed, setCollapsed] = useState(() => {
    if (item$12.link && match) return false;
    if (!item$12.items) return false;
    if (hasActiveChildItem) return false;
    return Boolean(item$12.collapsed);
  });
  const isCollapsable = item$12.collapsed !== void 0 && item$12.items !== void 0;
  const onCollapseInteraction = useCallback((event) => {
    if ("key" in event && event.key !== "Enter") return;
    setCollapsed((x) => !x);
  }, []);
  const onCollapseTriggerInteraction = useCallback((event) => {
    if ("key" in event && event.key !== "Enter") return;
    setCollapsed((x) => !x);
  }, []);
  const active = useRef(true);
  useEffect(() => {
    if (!active.current) return;
    active.current = false;
    const match2 = matchPath(pathname, item$12.link ?? "");
    if (!match2) return;
    requestAnimationFrame(() => {
      var _a, _b, _c;
      const offsetTop = ((_a = itemRef.current) == null ? void 0 : _a.offsetTop) ?? 0;
      const sidebarHeight = ((_b = sidebarRef == null ? void 0 : sidebarRef.current) == null ? void 0 : _b.clientHeight) ?? 0;
      if (offsetTop < sidebarHeight) return;
      (_c = sidebarRef == null ? void 0 : sidebarRef.current) == null ? void 0 : _c.scrollTo({ top: offsetTop - 100 });
    });
  }, [item$12, pathname, sidebarRef]);
  if (item$12.items)
    return /* @__PURE__ */ jsxs(
      "section",
      {
        ref: itemRef,
        className: clsx$1(
          section,
          depth === 0 && item$12.text && level,
          depth === 0 && item$12.text && collapsed && levelCollapsed
        ),
        children: [
          item$12.text && /* @__PURE__ */ jsxs(
            "div",
            {
              className: sectionHeader,
              ...isCollapsable && !item$12.link ? {
                role: "button",
                tabIndex: 0,
                onClick: onCollapseInteraction,
                onKeyDown: onCollapseInteraction
              } : {},
              children: [
                item$12.text && (item$12.link ? /* @__PURE__ */ jsx(
                  RouterLink,
                  {
                    "data-active": Boolean(match),
                    onClick: (e) => {
                      onClick == null ? void 0 : onClick(e);
                      onCollapseInteraction(e);
                    },
                    className: clsx$1(
                      depth === 0 ? [sectionTitle, sectionTitleLink] : item,
                      hasActiveChildItem && sectionHeaderActive
                    ),
                    to: item$12.link,
                    children: item$12.text
                  }
                ) : /* @__PURE__ */ jsx("div", { className: clsx$1(depth === 0 ? sectionTitle : item), children: item$12.text })),
                isCollapsable && /* @__PURE__ */ jsx(
                  "div",
                  {
                    role: "button",
                    tabIndex: 0,
                    onClick: onCollapseTriggerInteraction,
                    onKeyDown: onCollapseTriggerInteraction,
                    children: /* @__PURE__ */ jsx(
                      Icon,
                      {
                        className: clsx$1(
                          sectionCollapse,
                          collapsed && sectionCollapseActive
                        ),
                        label: "toggle section",
                        icon: ChevronRight,
                        size: "10px"
                      }
                    )
                  }
                )
              ]
            }
          ),
          !collapsed && /* @__PURE__ */ jsx("div", { className: clsx$1(items, depth !== 0 && levelInset), children: item$12.items && item$12.items.length > 0 && depth < 5 && item$12.items.map((item2, i) => /* @__PURE__ */ jsx(
            SidebarItem,
            {
              depth: depth + 1,
              item: item2,
              onClick,
              sidebarRef
            },
            `${item2.text}${i}`
          )) })
        ]
      }
    );
  return /* @__PURE__ */ jsx(Fragment$1, { children: item$12.link ? /* @__PURE__ */ jsx(
    RouterLink,
    {
      ref: itemRef,
      "data-active": Boolean(match),
      onClick,
      className: item,
      to: item$12.link,
      children: item$12.text
    }
  ) : /* @__PURE__ */ jsx("div", { className: item, children: item$12.text }) });
}
function ChevronDown() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 69 39",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Chevron Down" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M34.8677 38.8398C35.9419 38.8398 37.0161 38.4492 37.7485 37.6191L67.729 7.44339C68.4614 6.71089 68.9009 5.73439 68.9009 4.61129C68.9009 2.31639 67.1919 0.558594 64.897 0.558594C63.8227 0.558594 62.7485 1.04689 62.0161 1.73049L32.5727 31.2715H37.1138L7.67042 1.73049C6.93802 1.04689 5.96142 0.558594 4.83842 0.558594C2.54342 0.558594 0.785645 2.31639 0.785645 4.61129C0.785645 5.73439 1.22512 6.71089 1.95752 7.44339L31.9868 37.6191C32.768 38.4492 33.7446 38.8398 34.8677 38.8398Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function ChevronUp() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "100%",
      height: "100%",
      viewBox: "0 0 69 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Chevron Up" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M1.95752 32.2441C1.22512 32.9277 0.785645 33.9531 0.785645 35.0762C0.785645 37.3711 2.54342 39.1289 4.83842 39.1289C5.96142 39.1289 6.98682 38.6895 7.67042 37.957L37.1138 8.36716H32.5727L62.0161 37.957C62.6997 38.6895 63.8227 39.1289 64.897 39.1289C67.1919 39.1289 68.9009 37.3711 68.9009 35.0762C68.9009 33.9531 68.4614 32.9277 67.729 32.2441L37.7485 2.06836C37.0161 1.23826 35.9419 0.847656 34.8677 0.847656C33.7446 0.847656 32.7192 1.23826 31.9868 2.06836L1.95752 32.2441Z",
            fill: "currentColor"
          }
        )
      ]
    }
  );
}
function Menu() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "100%",
      height: "100%",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 79 48",
      fill: "none",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Menu" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M19.528 47.232h40.87c1.952 0 3.515-1.562 3.515-3.564a3.5 3.5 0 0 0-3.516-3.516H19.528a3.501 3.501 0 0 0-3.515 3.516c0 2.002 1.562 3.564 3.515 3.564ZM12.057 27.262h55.81a3.501 3.501 0 0 0 3.516-3.516 3.501 3.501 0 0 0-3.515-3.515h-55.81a3.501 3.501 0 0 0-3.516 3.515 3.501 3.501 0 0 0 3.515 3.516ZM4.391 7.34H75.29c2.002 0 3.515-1.563 3.515-3.516 0-2.002-1.513-3.564-3.515-3.564H4.39C2.438.26.876 1.822.876 3.824A3.501 3.501 0 0 0 4.39 7.34Z"
          }
        )
      ]
    }
  );
}
MobileTopNav.Curtain = Curtain;
function MobileTopNav() {
  var _a, _b;
  const config2 = useConfig();
  const { showLogo } = useLayout();
  return /* @__PURE__ */ jsxs("div", { className: root$L, children: [
    /* @__PURE__ */ jsxs("div", { className: section$1, children: [
      showLogo && /* @__PURE__ */ jsx("div", { className: group$1, children: /* @__PURE__ */ jsx("div", { className: logo$1, children: /* @__PURE__ */ jsx(RouterLink, { to: "/", style: { alignItems: "center", display: "flex", height: "100%" }, children: /* @__PURE__ */ jsx(NavLogo, {}) }) }) }),
      config2.topNav && /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs("div", { className: group$1, children: [
        /* @__PURE__ */ jsx(Navigation, { items: config2.topNav }),
        /* @__PURE__ */ jsx(CompactNavigation, { items: config2.topNav })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: section$1, children: [
      /* @__PURE__ */ jsx("div", { className: group$1, style: { marginRight: "-8px" }, children: /* @__PURE__ */ jsx(MobileSearch, {}) }),
      config2.socials && ((_a = config2.socials) == null ? void 0 : _a.length) > 0 && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("div", { className: divider$2 }),
        /* @__PURE__ */ jsx("div", { className: group$1, style: { marginLeft: "-8px" }, children: (_b = config2.socials) == null ? void 0 : _b.map((social, i) => /* @__PURE__ */ jsx(SocialButton, { ...social }, i)) })
      ] })
    ] })
  ] });
}
function Navigation({ items: items2 }) {
  const { pathname } = useLocation();
  const activeIds = useActiveNavIds({ pathname, items: items2 });
  return /* @__PURE__ */ jsx(Root$2, { className: navigation$1, children: /* @__PURE__ */ jsx(List$2, { children: items2.map(
    (item2, i) => (item2 == null ? void 0 : item2.link) ? /* @__PURE__ */ jsx(Link, { active: activeIds == null ? void 0 : activeIds.includes(item2.id), href: item2.link, children: item2.text }, i) : /* @__PURE__ */ jsxs(Item, { className: item$2, children: [
      /* @__PURE__ */ jsx(Trigger$1, { active: activeIds == null ? void 0 : activeIds.includes(item2.id), children: item2.text }),
      /* @__PURE__ */ jsx(Content$1, { className: content$3, children: /* @__PURE__ */ jsx(NavigationMenuContent, { items: item2.items || [] }) })
    ] }, i)
  ) }) });
}
function NavigationMenuContent({ items: items2 }) {
  const { pathname } = useLocation();
  const activeIds = useActiveNavIds({ pathname, items: items2 });
  return /* @__PURE__ */ jsx("ul", { children: items2 == null ? void 0 : items2.map((item2, i) => /* @__PURE__ */ jsx(Link, { active: activeIds.includes(item2.id), href: item2.link, children: item2.text }, i)) });
}
function CompactNavigation({ items: items2 }) {
  var _a;
  const [showPopover, setShowPopover] = useState(false);
  const { pathname } = useLocation();
  const activeIds = useActiveNavIds({ pathname, items: items2 });
  const activeItem = items2.filter((item2) => item2.id === activeIds[0])[0];
  const { basePath } = useConfig();
  const assetBasePath = basePath;
  return /* @__PURE__ */ jsx("div", { className: clsx$1(navigation$1, navigation_compact), children: activeItem ? /* @__PURE__ */ jsxs(Popover.Root, { modal: true, open: showPopover, onOpenChange: setShowPopover, children: [
    /* @__PURE__ */ jsxs(Popover.Trigger, { className: clsx$1(menuTrigger, navigationItem), children: [
      activeItem.text,
      /* @__PURE__ */ jsx(Icon, { label: "Menu", icon: ChevronDown, size: "11px" })
    ] }),
    /* @__PURE__ */ jsx(Popover, { className: topNavPopover, children: /* @__PURE__ */ jsx(
      Accordion.Root,
      {
        type: "single",
        collapsible: true,
        style: { display: "flex", flexDirection: "column" },
        children: items2.map(
          (item2, i) => {
            var _a2;
            return (item2 == null ? void 0 : item2.link) ? /* @__PURE__ */ jsx(
              Link$1,
              {
                "data-active": activeIds.includes(item2.id),
                className: navigationItem,
                href: item2.link,
                onClick: () => setShowPopover(false),
                variant: "styleless",
                children: item2.text
              },
              i
            ) : /* @__PURE__ */ jsxs(Accordion.Item, { value: i.toString(), children: [
              /* @__PURE__ */ jsx(
                Accordion.Trigger,
                {
                  className: clsx$1(navigationItem, navigationTrigger),
                  "data-active": activeIds.includes(item2.id),
                  style: assignInlineVars({
                    [chevronDownIcon]: `url(${assetBasePath}/.vocs/icons/chevron-down.svg)`,
                    [chevronUpIcon]: `url(${assetBasePath}/.vocs/icons/chevron-up.svg)`
                  }),
                  children: item2.text
                }
              ),
              /* @__PURE__ */ jsx(Accordion.Content, { className: navigationContent, children: (_a2 = item2.items) == null ? void 0 : _a2.map((item22, i2) => /* @__PURE__ */ jsx(
                Link$1,
                {
                  className: navigationItem,
                  href: item22.link,
                  onClick: () => setShowPopover(false),
                  variant: "styleless",
                  children: item22.text
                },
                i2
              )) })
            ] }, i);
          }
        )
      }
    ) })
  ] }) : ((_a = items2[0]) == null ? void 0 : _a.link) ? /* @__PURE__ */ jsx(Link$1, { className: navigationItem, href: items2[0].link, variant: "styleless", children: items2[0].text }) : null });
}
const iconsForIcon = {
  discord: Discord,
  github: GitHub,
  telegram: Telegram,
  warpcast: Warpcast,
  x: X
};
const sizesForTypes = {
  discord: "21px",
  github: "18px",
  telegram: "21px",
  warpcast: "18px",
  x: "16px"
};
function SocialButton({ icon: icon$12, label, link: link2, type }) {
  return /* @__PURE__ */ jsx("a", { className: button, href: link2, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(
    Icon,
    {
      className: icon,
      label,
      icon: iconsForIcon[icon$12],
      size: sizesForTypes[type] || "18px"
    }
  ) });
}
function Curtain({
  enableScrollToTop
}) {
  const { pathname } = useLocation();
  const { layout, showSidebar } = useLayout();
  const { frontmatter = {} } = usePageData();
  const sidebar2 = useSidebar();
  const [isOutlineOpen, setOutlineOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarItemTitle = useMemo(() => {
    if (!sidebar2 || layout === "minimal") return;
    const sidebarItem = getSidebarItemFromPathname({
      sidebarItems: sidebar2.items,
      pathname
    });
    return sidebarItem == null ? void 0 : sidebarItem.text;
  }, [layout, pathname, sidebar2]);
  const contentTitle = useMemo(() => {
    var _a;
    if (typeof window === "undefined") return;
    return (_a = document.querySelector(".vocs_Content h1")) == null ? void 0 : _a.textContent;
  }, []);
  const title2 = sidebarItemTitle || frontmatter.title || contentTitle;
  return /* @__PURE__ */ jsxs("div", { className: curtain, children: [
    /* @__PURE__ */ jsx("div", { className: curtainGroup, children: /* @__PURE__ */ jsx("div", { className: curtainItem, children: showSidebar ? /* @__PURE__ */ jsxs(Popover.Root, { modal: true, open: isSidebarOpen, onOpenChange: setSidebarOpen, children: [
      /* @__PURE__ */ jsxs(Popover.Trigger, { className: menuTrigger, children: [
        /* @__PURE__ */ jsx(Icon, { label: "Menu", icon: Menu, size: "13px" }),
        /* @__PURE__ */ jsx("div", { className: menuTitle, children: title2 })
      ] }),
      /* @__PURE__ */ jsx(Popover, { className: sidebarPopover, children: /* @__PURE__ */ jsx(Sidebar, { onClickItem: () => setSidebarOpen(false) }) })
    ] }) : title2 }) }),
    /* @__PURE__ */ jsxs("div", { className: curtainGroup, children: [
      enableScrollToTop && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("div", { className: curtainItem, children: /* @__PURE__ */ jsxs(
          "button",
          {
            className: outlineTrigger,
            onClick: () => window.scrollTo({ behavior: "smooth", top: 0 }),
            type: "button",
            children: [
              "Top",
              /* @__PURE__ */ jsx(Icon, { label: "Scroll to top", icon: ChevronUp, size: "10px" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: separator$1 })
      ] }),
      layout === "docs" && /* @__PURE__ */ jsx("div", { className: curtainItem, children: /* @__PURE__ */ jsxs(Popover.Root, { modal: true, open: isOutlineOpen, onOpenChange: setOutlineOpen, children: [
        /* @__PURE__ */ jsxs(Popover.Trigger, { className: outlineTrigger, children: [
          "On this page",
          /* @__PURE__ */ jsx(Icon, { label: "On this page", icon: ChevronRight, size: "10px" })
        ] }),
        /* @__PURE__ */ jsx(Popover, { className: outlinePopover, children: /* @__PURE__ */ jsx(Outline, { onClickItem: () => setOutlineOpen(false), showTitle: false }) })
      ] }) })
    ] })
  ] });
}
function getSidebarItemFromPathname({
  sidebarItems,
  pathname: pathname_
}) {
  const pathname = pathname_.replace(/(.+)\/$/, "$1");
  for (const item2 of sidebarItems) {
    if ((item2 == null ? void 0 : item2.link) === pathname) return item2;
    if (item2.items) {
      const childItem = getSidebarItemFromPathname({ sidebarItems: item2.items, pathname });
      if (childItem) return childItem;
    }
  }
  return void 0;
}
var root$H = "vocs_SkipLink";
const skipLinkId = "vocs-content";
function SkipLink() {
  const { pathname } = useLocation();
  return /* @__PURE__ */ jsx("a", { className: clsx$1(root$H, visuallyHidden), href: `${pathname}#${skipLinkId}`, children: "Skip to content" });
}
var content$2 = "vocs_DocsLayout_content";
var content_withSidebar = "vocs_DocsLayout_content_withSidebar";
var content_withTopNav = "vocs_DocsLayout_content_withTopNav";
var gutterLeft = "vocs_DocsLayout_gutterLeft";
var gutterRight = "vocs_DocsLayout_gutterRight";
var gutterRight_withSidebar = "vocs_DocsLayout_gutterRight_withSidebar";
var gutterTop = "vocs_DocsLayout_gutterTop";
var gutterTopCurtain = "vocs_DocsLayout_gutterTopCurtain";
var gutterTopCurtain_hidden = "vocs_DocsLayout_gutterTopCurtain_hidden";
var gutterTopCurtain_withSidebar = "vocs_DocsLayout_gutterTopCurtain_withSidebar";
var gutterTop_offsetLeftGutter = "vocs_DocsLayout_gutterTop_offsetLeftGutter";
var gutterTop_sticky = "vocs_DocsLayout_gutterTop_sticky";
var root$G = "vocs_DocsLayout";
var sidebar = "vocs_DocsLayout_sidebar";
function DocsLayout({
  children
}) {
  var _a, _b;
  const { banner, font } = useConfig();
  const { frontmatter = {} } = usePageData();
  const { content: content2 } = frontmatter;
  const { layout, showOutline, showSidebar, showTopNav } = useLayout();
  const { ref, inView } = useInView({
    initialInView: true,
    rootMargin: "100px 0px 0px 0px"
  });
  const [showBanner, setShowBanner] = useLocalStorage("banner", true);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: root$G,
      "data-layout": layout,
      style: assignInlineVars({
        [bannerHeight]: showBanner ? banner == null ? void 0 : banner.height : void 0,
        [fontFamilyVars.default]: ((_a = font == null ? void 0 : font.default) == null ? void 0 : _a.google) ? `${font.default.google}, ${defaultFontFamily.default}` : void 0,
        [fontFamilyVars.mono]: ((_b = font == null ? void 0 : font.mono) == null ? void 0 : _b.google) ? `${font.mono.google}, ${defaultFontFamily.mono}` : void 0
      }),
      children: [
        /* @__PURE__ */ jsx(SkipLink, {}),
        showBanner && /* @__PURE__ */ jsx(Banner, { hide: () => setShowBanner(false) }),
        showSidebar && /* @__PURE__ */ jsx("div", { className: gutterLeft, children: /* @__PURE__ */ jsx(Sidebar, { className: sidebar }) }),
        showTopNav && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          /* @__PURE__ */ jsxs(
            "div",
            {
              ref,
              className: clsx$1(
                gutterTop,
                showSidebar && gutterTop_offsetLeftGutter,
                (layout === "minimal" || layout === "landing") && gutterTop_sticky
              ),
              children: [
                /* @__PURE__ */ jsx(DesktopTopNav, {}),
                /* @__PURE__ */ jsx(MobileTopNav, {})
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: clsx$1(
                gutterTopCurtain,
                showSidebar && gutterTopCurtain_withSidebar,
                (layout === "minimal" || layout === "landing") && gutterTopCurtain_hidden
              ),
              children: [
                /* @__PURE__ */ jsx(DesktopTopNav.Curtain, {}),
                /* @__PURE__ */ jsx(MobileTopNav.Curtain, { enableScrollToTop: !inView })
              ]
            }
          )
        ] }),
        showOutline && /* @__PURE__ */ jsx("div", { className: clsx$1(gutterRight, showSidebar && gutterRight_withSidebar), children: /* @__PURE__ */ jsx(Outline, {}) }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            id: skipLinkId,
            className: clsx$1(
              content$2,
              showSidebar && content_withSidebar,
              showTopNav && content_withTopNav
            ),
            style: assignInlineVars({
              [contentVars.horizontalPadding]: content2 == null ? void 0 : content2.horizontalPadding,
              [contentVars.width]: content2 == null ? void 0 : content2.width,
              [contentVars.verticalPadding]: content2 == null ? void 0 : content2.verticalPadding
            }),
            children: [
              /* @__PURE__ */ jsx(Content$2, { children }),
              /* @__PURE__ */ jsx(Footer, {})
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { "data-bottom-observer": true })
      ]
    }
  );
}
var root$F = "vocs_Anchor";
var root$E = "vocs_Autolink";
function Autolink(props) {
  if (!props.href) return null;
  return /* @__PURE__ */ jsx(Link$2, { ...props, className: clsx(props.className, root$E), to: props.href });
}
function Anchor(props) {
  const { children, href } = props;
  const { pathname } = useLocation();
  if (children && typeof children === "object" && "props" in children && children.props["data-autolink-icon"])
    return /* @__PURE__ */ jsx(Autolink, { className: clsx(props.className, root$F), ...props });
  if (href == null ? void 0 : href.match(/^#/))
    return /* @__PURE__ */ jsx("a", { className: clsx(props.className, root$F), ...props, href: `${pathname}${href}` });
  return /* @__PURE__ */ jsx(Link$1, { className: clsx(props.className, root$F), ...props });
}
var danger = "vocs_Callout_danger";
var info = "vocs_Callout_info";
var note = "vocs_Callout_note";
var root$D = "vocs_Callout";
var success = "vocs_Callout_success";
var tip = "vocs_Callout_tip";
var warning = "vocs_Callout_warning";
const styles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  danger,
  info,
  note,
  root: root$D,
  success,
  tip,
  warning
}, Symbol.toStringTag, { value: "Module" }));
function Callout({ className, children, type }) {
  return /* @__PURE__ */ jsx("aside", { className: clsx(className, root$D, styles[type]), children });
}
var root$C = "vocs_Aside";
function Aside(props) {
  const className = clsx(props.className, root$C);
  if ("data-callout" in props)
    return /* @__PURE__ */ jsx(Callout, { className, type: props["data-callout"], children: props.children });
  return /* @__PURE__ */ jsx("aside", { ...props, className });
}
var root$B = "vocs_Blockquote";
function Blockquote(props) {
  return /* @__PURE__ */ jsx("blockquote", { ...props, className: clsx(props.className, root$B) });
}
var root$A = "vocs_Code";
function Code(props) {
  const children = filterEmptyLines(props.children);
  return /* @__PURE__ */ jsx("code", { ...props, className: clsx(props.className, root$A), children });
}
function filterEmptyLines(nodes) {
  if (!Array.isArray(nodes)) return nodes;
  return nodes.map(
    (child, index) => {
      var _a, _b, _c;
      return child.props && "data-line" in child.props && typeof child.props.children === "string" && child.props.children.trim() === "" && ((_c = (_b = (_a = nodes[index + 1]) == null ? void 0 : _a.props) == null ? void 0 : _b.className) == null ? void 0 : _c.includes("twoslash-tag-line")) ? null : child;
    }
  ).filter(Boolean);
}
var root$z = "vocs_Details";
function Details(props) {
  return /* @__PURE__ */ jsx("details", { ...props, className: clsx(props.className, root$z) });
}
var authors = "vocs_Authors_authors";
var link = "vocs_Authors_link";
var root$y = "vocs_Authors";
var separator = "vocs_Authors_separator";
function Authors(props) {
  const { frontmatter } = usePageData();
  const { authors: authors_ = frontmatter == null ? void 0 : frontmatter.authors, date = frontmatter == null ? void 0 : frontmatter.date } = props;
  const authors$1 = useMemo(() => {
    if (!authors_) return void 0;
    if (Array.isArray(authors_)) return authors_;
    return authors_.split(",").map((author) => author.trim());
  }, [authors_]);
  const formattedDate = useMemo(() => {
    if (!date) return null;
    const dateObject = new Date(date);
    return dateObject.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }, [date]);
  return /* @__PURE__ */ jsxs("div", { className: root$y, children: [
    formattedDate,
    authors$1 && (formattedDate ? " by " : "By "),
    /* @__PURE__ */ jsx("span", { className: authors, children: authors$1 == null ? void 0 : authors$1.map((author, index) => {
      const { text, url } = parseAuthor(author);
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        url ? /* @__PURE__ */ jsx("a", { className: link, href: url, target: "_blank", rel: "noopener noreferrer", children: text }) : text,
        index < authors$1.length - 2 && /* @__PURE__ */ jsx("span", { className: separator, children: ", " }),
        index < authors$1.length - 1 && /* @__PURE__ */ jsx("span", { className: separator, children: " & " })
      ] }, index);
    }) })
  ] });
}
function parseAuthor(author) {
  const match = author.match(/\[(.+)\]\((.+)\)/);
  if (!match) return { text: author, url: void 0 };
  return {
    text: match[1],
    url: match[2]
  };
}
const posts = [];
var description = "vocs_BlogPosts_description";
var divider = "vocs_BlogPosts_divider";
var post = "vocs_BlogPosts_post";
var readMore = "vocs_BlogPosts_readMore";
var root$x = "vocs_BlogPosts";
var title$2 = "vocs_BlogPosts_title";
function BlogPosts() {
  return /* @__PURE__ */ jsx("div", { className: root$x, children: posts.map((post$1, index) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: post, children: /* @__PURE__ */ jsxs(RouterLink, { to: post$1.path, children: [
      /* @__PURE__ */ jsx("h2", { className: title$2, children: post$1.title }),
      /* @__PURE__ */ jsx(Authors, { authors: post$1.authors, date: post$1.date }),
      /* @__PURE__ */ jsxs("p", { className: description, children: [
        post$1.description,
        " ",
        /* @__PURE__ */ jsx("span", { className: readMore, children: "[→]" })
      ] })
    ] }) }),
    index < posts.length - 1 && /* @__PURE__ */ jsx("hr", { className: divider })
  ] }, index)) });
}
var column = "vocs_Sponsors_column";
var columnsVar = "var(--vocs_Sponsors_columns)";
var heightVar = "var(--vocs_Sponsors_height)";
var image = "vocs_Sponsors_image";
var root$w = "vocs_Sponsors";
var row = "vocs_Sponsors_row";
var sponsor = "vocs_Sponsors_sponsor";
var title$1 = "vocs_Sponsors_title";
function Sponsors() {
  const { sponsors } = useConfig();
  return /* @__PURE__ */ jsx("div", { className: root$w, children: sponsors == null ? void 0 : sponsors.map((sponsorSet, i) => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: title$1, children: sponsorSet.name }),
    sponsorSet.items.map((sponsorRow, i2) => {
      var _a;
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: row,
          style: assignInlineVars({
            [columnsVar]: sponsorRow.length.toString(),
            [heightVar]: `${((_a = sponsorSet.height) == null ? void 0 : _a.toString()) ?? "40"}px`
          }),
          children: sponsorRow.map((sponsor$1, i3) => /* @__PURE__ */ jsx(
            Link$1,
            {
              className: clsx$1(column, sponsor$1 ? sponsor : void 0),
              hideExternalIcon: true,
              href: sponsor$1 == null ? void 0 : sponsor$1.link,
              variant: "styleless",
              children: /* @__PURE__ */ jsx("img", { className: image, src: sponsor$1 == null ? void 0 : sponsor$1.image, alt: sponsor$1 == null ? void 0 : sponsor$1.name })
            },
            i3
          ))
        },
        i2
      );
    })
  ] }, i)) });
}
var iconUrl = "var(--vocs_AutolinkIcon_iconUrl)";
var root$v = "vocs_AutolinkIcon";
function AutolinkIcon(props) {
  const { basePath } = useConfig();
  const assetBasePath = basePath;
  return /* @__PURE__ */ jsx(
    "div",
    {
      ...props,
      className: clsx(props.className, root$v),
      style: assignInlineVars({
        [iconUrl]: `url(${assetBasePath}/.vocs/icons/link.svg)`
      })
    }
  );
}
var content$1 = "vocs_Tabs_content";
var list = "vocs_Tabs_list";
var root$u = "vocs_Tabs";
var trigger = "vocs_Tabs_trigger";
function Root$1(props) {
  return /* @__PURE__ */ jsx(Tabs.Root, { ...props, className: clsx$1(props.className, root$u) });
}
function List$1(props) {
  return /* @__PURE__ */ jsx(Tabs.List, { ...props, className: clsx$1(props.className, list) });
}
function Trigger(props) {
  return /* @__PURE__ */ jsx(Tabs.Trigger, { ...props, className: clsx$1(props.className, trigger) });
}
function Content(props) {
  return /* @__PURE__ */ jsx(Tabs.Content, { ...props, className: clsx$1(props.className, content$1) });
}
var root$t = "vocs_CodeGroup";
function CodeGroup({ children }) {
  if (!Array.isArray(children)) return null;
  const tabs = children.map((child_) => {
    const child = child_.props["data-title"] ? child_ : child_.props.children;
    const { props } = child;
    const title2 = props["data-title"];
    const content2 = props.children;
    return { title: title2, content: content2 };
  });
  return /* @__PURE__ */ jsxs(Root$1, { className: root$t, defaultValue: tabs[0].title, children: [
    /* @__PURE__ */ jsx(List$1, { "aria-label": "Code group", children: tabs.map(({ title: title2 }, i) => /* @__PURE__ */ jsx(Trigger, { value: title2 || i.toString(), children: title2 }, title2 || i.toString())) }),
    tabs.map(({ title: title2, content: content2 }, i) => {
      var _a, _b;
      const isShiki = (_b = (_a = content2.props) == null ? void 0 : _a.className) == null ? void 0 : _b.includes("shiki");
      return /* @__PURE__ */ jsx(
        Content,
        {
          "data-shiki": isShiki,
          value: title2 || i.toString(),
          children: content2
        },
        title2 || i.toString()
      );
    })
  ] });
}
var root$s = "vocs_Div";
var content = "vocs_Step_content";
var root$r = "vocs_Step";
var title = "vocs_Step_title";
var root$q = "vocs_H2";
function H2(props) {
  return /* @__PURE__ */ jsx(Heading, { ...props, className: clsx(props.className, root$q), level: 2 });
}
var root$p = "vocs_H3";
function H3(props) {
  return /* @__PURE__ */ jsx(Heading, { ...props, className: clsx(props.className, root$p), level: 3 });
}
var root$o = "vocs_H4";
function H4(props) {
  return /* @__PURE__ */ jsx(Heading, { ...props, className: clsx(props.className, root$o), level: 4 });
}
var root$n = "vocs_H5";
function H5(props) {
  return /* @__PURE__ */ jsx(Heading, { ...props, className: clsx(props.className, root$n), level: 5 });
}
var root$m = "vocs_H6";
function H6(props) {
  return /* @__PURE__ */ jsx(Heading, { ...props, className: clsx(props.className, root$m), level: 6 });
}
function Step({ children, className, title: title$12, titleLevel = 2 }) {
  const Element = (() => {
    if (titleLevel === 2) return H2;
    if (titleLevel === 3) return H3;
    if (titleLevel === 4) return H4;
    if (titleLevel === 5) return H5;
    if (titleLevel === 6) return H6;
    throw new Error("Invalid.");
  })();
  return /* @__PURE__ */ jsxs("div", { className: clsx(className, root$r), children: [
    typeof title$12 === "string" ? /* @__PURE__ */ jsx(Element, { className: title, children: title$12 }) : title$12,
    /* @__PURE__ */ jsx("div", { className: content, children })
  ] });
}
var root$l = "vocs_Steps";
function Steps$1({ children, className }) {
  return /* @__PURE__ */ jsx("div", { className: clsx(className, root$l), children });
}
function Steps({ children }) {
  if (!Array.isArray(children)) return null;
  return /* @__PURE__ */ jsx(Steps$1, { children: children.map(({ props }, i) => {
    const [title$12, ...children2] = Array.isArray(props.children) ? props.children : [props.children];
    return /* @__PURE__ */ jsx(Step, { title: cloneElement(title$12, { className: title }), children: children2 }, i);
  }) });
}
var root$k = "vocs_Subtitle";
function Subtitle({ children }) {
  return /* @__PURE__ */ jsx("div", { className: root$k, role: "doc-subtitle", children });
}
function Div(props) {
  const { layout } = useLayout();
  const className = clsx(props.className, root$s);
  if (props.className === "code-group")
    return /* @__PURE__ */ jsx(CodeGroup, { ...props, className });
  if ("data-authors" in props) return /* @__PURE__ */ jsx(Authors, {});
  if ("data-blog-posts" in props) return /* @__PURE__ */ jsx(BlogPosts, {});
  if ("data-sponsors" in props) return /* @__PURE__ */ jsx(Sponsors, {});
  if ("data-autolink-icon" in props && layout === "docs")
    return /* @__PURE__ */ jsx(AutolinkIcon, { ...props, className });
  if ("data-vocs-steps" in props) return /* @__PURE__ */ jsx(Steps, { ...props, className });
  if (props.role === "doc-subtitle") return /* @__PURE__ */ jsx(Subtitle, { ...props });
  return /* @__PURE__ */ jsx("div", { ...props, className });
}
var root$j = "vocs_Figcaption";
function Figcaption(props) {
  const className = clsx(props.className, root$j);
  return /* @__PURE__ */ jsx("figcaption", { ...props, className });
}
var root$i = "vocs_Figure";
function Figure(props) {
  const className = clsx(props.className, root$i);
  return /* @__PURE__ */ jsx("figure", { ...props, className });
}
var root$h = "vocs_Header";
function Header(props) {
  return /* @__PURE__ */ jsx("header", { ...props, className: clsx(props.className, root$h) });
}
var root$g = "vocs_HorizontalRule";
function HorizontalRule(props) {
  return /* @__PURE__ */ jsx("hr", { ...props, className: clsx(props.className, root$g) });
}
var ordered = "vocs_List_ordered";
var root$f = "vocs_List";
var unordered = "vocs_List_unordered";
function List({
  ordered: ordered$1,
  ...props
}) {
  const Element = ordered$1 ? "ol" : "ul";
  return /* @__PURE__ */ jsx(
    Element,
    {
      ...props,
      className: clsx(props.className, root$f, ordered$1 ? ordered : unordered)
    }
  );
}
var root$e = "vocs_ListItem";
function ListItem(props) {
  return /* @__PURE__ */ jsx("li", { ...props, className: clsx(props.className, root$e) });
}
function useCopyCode() {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 1e3);
    return () => clearTimeout(timeout);
  }, [copied]);
  function copy() {
    var _a;
    setCopied(true);
    const node = (_a = ref.current) == null ? void 0 : _a.cloneNode(true);
    const nodesToRemove = node == null ? void 0 : node.querySelectorAll(
      "button,.line.diff.remove,.twoslash-popup-info-hover,.twoslash-popup-info,.twoslash-meta-line,.twoslash-tag-line"
    );
    for (const node2 of nodesToRemove ?? []) node2.remove();
    navigator.clipboard.writeText(node == null ? void 0 : node.textContent);
  }
  return {
    copied,
    copy,
    ref
  };
}
var root$d = "vocs_CopyButton";
function Checkmark() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "100%",
      height: "100%",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 68 67",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Checkmark" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M26.175 66.121c1.904 0 3.418-.83 4.492-2.49L66.263 7.332c.83-1.27 1.123-2.295 1.123-3.32 0-2.393-1.563-4.004-4.004-4.004-1.758 0-2.734.586-3.809 2.295L25.98 56.209 8.304 32.381c-1.123-1.514-2.198-2.149-3.809-2.149-2.441 0-4.2 1.71-4.2 4.15 0 1.026.44 2.15 1.27 3.224l19.971 25.927c1.367 1.758 2.734 2.588 4.639 2.588Z"
          }
        )
      ]
    }
  );
}
function Copy() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "100%",
      height: "100%",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 82 82",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Copy" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M12.451 63.281h38.38c8.3 0 12.45-4.053 12.45-12.256v-38.77C63.281 4.054 59.131 0 50.831 0H12.45C4.101 0 0 4.053 0 12.256v38.77C0 59.227 4.102 63.28 12.451 63.28Zm.098-7.031c-3.516 0-5.518-1.904-5.518-5.615V12.647c0-3.711 2.002-5.616 5.518-5.616h38.183c3.516 0 5.518 1.905 5.518 5.615v37.989c0 3.71-2.002 5.615-5.518 5.615H12.55Z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            stroke: "currentColor",
            strokeWidth: "6.75px",
            d: "M69.385 78.266h-38.38c-3.679 0-5.782-.894-6.987-2.081-1.196-1.178-2.088-3.219-2.088-6.8v-38.77c0-3.581.892-5.622 2.088-6.8 1.205-1.187 3.308-2.08 6.988-2.08h38.379c3.65 0 5.758.89 6.973 2.084 1.203 1.182 2.103 3.225 2.103 6.796v38.77c0 3.57-.9 5.614-2.103 6.796-1.215 1.193-3.323 2.085-6.973 2.085Z"
          }
        )
      ]
    }
  );
}
function CopyButton({ copy, copied }) {
  return /* @__PURE__ */ jsx("button", { className: root$d, onClick: copy, type: "button", children: copied ? /* @__PURE__ */ jsx(Icon, { label: "Copied", size: "14px", icon: Checkmark }) : /* @__PURE__ */ jsx(Icon, { label: "Copy", size: "18px", icon: Copy }) });
}
var root$c = "vocs_CodeBlock";
function CodeBlock(props) {
  return /* @__PURE__ */ jsx("div", { ...props, className: clsx(props.className, root$c) });
}
function File() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "100%",
      height: "100%",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 94 99",
      fill: "none",
      children: [
        /* @__PURE__ */ jsx("title", { children: "File" }),
        /* @__PURE__ */ jsx(
          "rect",
          {
            width: "77px",
            height: "89px",
            x: "8px",
            y: "3px",
            stroke: "currentColor",
            strokeWidth: "6px",
            rx: "7px"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeWidth: "6px",
            d: "M25 22h43M25 35h43M25 48h22"
          }
        )
      ]
    }
  );
}
function Terminal() {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "100%",
      height: "100%",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 79 95",
      fill: "none",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Terminal" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "currentColor",
            d: "M38.281 34.033c0-1.074-.39-2.05-1.22-2.88L6.885 1.171C6.152.39 5.175 0 4.053 0 1.758 0 0 1.709 0 4.004c0 1.074.488 2.1 1.172 2.88l27.295 27.15L1.172 61.181C.488 61.962 0 62.939 0 64.062c0 2.295 1.758 4.004 4.053 4.004 1.123 0 2.1-.39 2.832-1.172l30.176-29.98c.83-.83 1.22-1.807 1.22-2.88Z"
          }
        ),
        /* @__PURE__ */ jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeWidth: "8px", d: "M36 75h55" })
      ]
    }
  );
}
var root$b = "vocs_CodeTitle";
function CodeTitle({
  children,
  className,
  language,
  ...props
}) {
  return /* @__PURE__ */ jsxs("div", { ...props, className: clsx(className, root$b), children: [
    language === "bash" ? /* @__PURE__ */ jsx(Icon, { label: "Terminal", size: "14px", icon: Terminal, style: { marginTop: 3 } }) : children.match(/\.(.*)$/) ? /* @__PURE__ */ jsx(Icon, { label: "File", size: "14px", icon: File, style: { marginTop: 1 } }) : null,
    children
  ] });
}
var root$a = "vocs_Pre";
var wrapper = "vocs_Pre_wrapper";
function Pre({
  children,
  className,
  ...props
}) {
  const { copied, copy, ref } = useCopyCode();
  function recurseChildren(children2) {
    if (!children2) return children2;
    if (typeof children2 !== "object") return children2;
    if ("props" in children2)
      return {
        ...children2,
        props: {
          ...children2.props,
          children: Array.isArray(children2.props.children) ? children2.props.children.map(recurseChildren) : recurseChildren(children2.props.children)
        }
      };
    return children2;
  }
  const children_ = useMemo(() => recurseChildren(children), [children]);
  const wrap = (children2) => {
    if (className == null ? void 0 : className.includes("shiki"))
      return /* @__PURE__ */ jsxs(CodeBlock, { children: [
        props["data-title"] && /* @__PURE__ */ jsx(CodeTitle, { language: props["data-lang"], children: props["data-title"] }),
        children2
      ] });
    return children2;
  };
  return wrap(
    /* @__PURE__ */ jsx("div", { className: clsx(wrapper), children: /* @__PURE__ */ jsxs("pre", { ref, ...props, className: clsx(className, root$a), children: [
      "data-language" in props && /* @__PURE__ */ jsx(CopyButton, { copied, copy }),
      children_
    ] }) })
  );
}
var root$9 = "vocs_Footnotes";
function Footnotes(props) {
  return /* @__PURE__ */ jsx("section", { ...props, className: clsx(props.className, root$9) });
}
var root$8 = "vocs_Section";
function Section(props) {
  if ("data-footnotes" in props)
    return /* @__PURE__ */ jsx(Footnotes, { ...props, className: clsx(props.className, root$8) });
  return /* @__PURE__ */ jsx("section", { ...props, className: clsx(props.className, root$8) });
}
var root$7 = "vocs_Span";
function TwoslashPopover({ children, ...props }) {
  const [popover, target] = children;
  const arrowRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const { context, refs, floatingStyles } = useFloating({
    middleware: [
      arrow({
        element: arrowRef
      }),
      offset(8),
      shift()
    ],
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "bottom-start"
  });
  const hover = useHover(context, { handleClose: safePolygon() });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
  const targetChildren = target.props.children;
  const popoverChildren = popover.props.children;
  return /* @__PURE__ */ jsxs("span", { ...props, children: [
    /* @__PURE__ */ jsx("span", { className: "twoslash-target", ref: refs.setReference, ...getReferenceProps(), children: targetChildren }),
    isOpen && /* @__PURE__ */ jsxs(
      "div",
      {
        className: "twoslash-popup-info-hover",
        ref: refs.setFloating,
        style: floatingStyles,
        ...getFloatingProps(),
        children: [
          /* @__PURE__ */ jsx(
            FloatingArrow,
            {
              ref: arrowRef,
              context,
              fill: primitiveColorVars.background5,
              height: 3,
              stroke: primitiveColorVars.border2,
              strokeWidth: 1,
              width: 7
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "twoslash-popup-scroll-container", children: popoverChildren })
        ]
      }
    )
  ] });
}
function Span(props) {
  var _a;
  const className = clsx(props.className, root$7);
  if ((_a = props.className) == null ? void 0 : _a.includes("twoslash-hover"))
    return /* @__PURE__ */ jsx(TwoslashPopover, { ...props, className });
  return /* @__PURE__ */ jsx("span", { ...props, className: clsx(props.className, root$7) });
}
var root$6 = "vocs_CalloutTitle";
function CalloutTitle({ className, children }) {
  return /* @__PURE__ */ jsx("strong", { className: clsx(className, root$6), children });
}
var root$5 = "vocs_Strong";
function Strong(props) {
  if ("data-callout-title" in props && typeof props.children === "string")
    return /* @__PURE__ */ jsx(
      CalloutTitle,
      {
        ...props,
        className: clsx(props.className, root$5),
        children: props.children
      }
    );
  return /* @__PURE__ */ jsx("strong", { ...props, className: clsx(props.className, root$5) });
}
var root$4 = "vocs_Summary";
function Summary(props) {
  return /* @__PURE__ */ jsx("summary", { ...props, className: clsx(props.className, root$4) });
}
var root$3 = "vocs_Table";
function Table(props) {
  return /* @__PURE__ */ jsx("table", { ...props, className: clsx(props.className, root$3) });
}
var root$2 = "vocs_TableCell";
function TableCell(props) {
  return /* @__PURE__ */ jsx("td", { ...props, className: clsx(props.className, root$2) });
}
var root$1 = "vocs_TableHeader";
function TableHeader(props) {
  return /* @__PURE__ */ jsx("th", { ...props, className: clsx(props.className, root$1) });
}
var root = "vocs_TableRow";
function TableRow(props) {
  return /* @__PURE__ */ jsx("tr", { ...props, className: clsx(props.className, root) });
}
const components = {
  a: Anchor,
  aside: Aside,
  blockquote: Blockquote,
  code: Code,
  details: Details,
  div: Div,
  pre: Pre,
  header: Header,
  figcaption: Figcaption,
  figure: Figure,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  hr: HorizontalRule,
  kd: Kbd,
  li: ListItem,
  ol: (props) => /* @__PURE__ */ jsx(List, { ordered: true, ...props }),
  p: Paragraph,
  section: Section,
  span: Span,
  strong: Strong,
  summary: Summary,
  table: Table,
  td: TableCell,
  th: TableHeader,
  tr: TableRow,
  ul: (props) => /* @__PURE__ */ jsx(List, { ordered: false, ...props })
};
function useOgImageUrl() {
  const { pathname } = useLocation();
  const config2 = useConfig();
  const { ogImageUrl } = config2;
  if (!ogImageUrl) return void 0;
  if (typeof ogImageUrl === "string") return ogImageUrl;
  const pathKey = useMemo(() => {
    const keys = Object.keys(ogImageUrl).filter((key) => pathname.startsWith(key));
    return keys[keys.length - 1];
  }, [ogImageUrl, pathname]);
  if (!pathKey) return void 0;
  return ogImageUrl[pathKey];
}
function Root(props) {
  const { children, filePath, frontmatter, lastUpdatedAt, path } = props;
  const { pathname } = useLocation();
  const previousPathRef = useRef();
  useEffect(() => {
    previousPathRef.current = pathname;
  });
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(Head, { frontmatter }),
    typeof window !== "undefined" && /* @__PURE__ */ jsx(ScrollRestoration, {}),
    /* @__PURE__ */ jsx(MDXProvider, { components, children: /* @__PURE__ */ jsx(Layout, { frontmatter, path, children: /* @__PURE__ */ jsx(
      PageDataContext.Provider,
      {
        value: { filePath, frontmatter, lastUpdatedAt, previousPath: previousPathRef.current },
        children
      }
    ) }) })
  ] });
}
function Head({ frontmatter }) {
  var _a, _b, _c, _d, _e, _f;
  const config2 = useConfig();
  const ogImageUrl = useOgImageUrl();
  const { baseUrl, font, iconUrl: iconUrl2, logoUrl } = config2;
  const title2 = (frontmatter == null ? void 0 : frontmatter.title) ?? config2.title;
  const description2 = (frontmatter == null ? void 0 : frontmatter.description) ?? config2.description;
  const enableTitleTemplate = config2.title && !title2.includes(config2.title);
  const isLocalhost = typeof window !== "undefined" && window.location.hostname === "localhost";
  return /* @__PURE__ */ jsxs(
    Helmet,
    {
      defaultTitle: config2.title,
      titleTemplate: enableTitleTemplate ? config2.titleTemplate : void 0,
      children: [
        title2 && /* @__PURE__ */ jsx("title", { children: title2 }),
        baseUrl && true && !isLocalhost && /* @__PURE__ */ jsx("base", { href: baseUrl }),
        description2 !== "undefined" && /* @__PURE__ */ jsx("meta", { name: "description", content: description2 }),
        iconUrl2 && typeof iconUrl2 === "string" && /* @__PURE__ */ jsx("link", { rel: "icon", href: iconUrl2, type: getIconType(iconUrl2) }),
        iconUrl2 && typeof iconUrl2 !== "string" && /* @__PURE__ */ jsx("link", { rel: "icon", href: iconUrl2.light, type: getIconType(iconUrl2.light) }),
        iconUrl2 && typeof iconUrl2 !== "string" && /* @__PURE__ */ jsx(
          "link",
          {
            rel: "icon",
            href: iconUrl2.dark,
            type: getIconType(iconUrl2.dark),
            media: "(prefers-color-scheme: dark)"
          }
        ),
        /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
        /* @__PURE__ */ jsx("meta", { property: "og:title", content: title2 || config2.title }),
        baseUrl && /* @__PURE__ */ jsx("meta", { property: "og:url", content: baseUrl }),
        description2 !== "undefined" && /* @__PURE__ */ jsx("meta", { property: "og:description", content: description2 }),
        ogImageUrl && /* @__PURE__ */ jsx(
          "meta",
          {
            property: "og:image",
            content: ogImageUrl.replace(
              "%logo",
              `${baseUrl ? baseUrl : ""}${typeof logoUrl === "string" ? logoUrl : (logoUrl == null ? void 0 : logoUrl.dark) || ""}`
            ).replace("%title", title2 || "").replace("%description", (description2 !== "undefined" ? description2 : "") || "")
          }
        ),
        (((_a = font == null ? void 0 : font.default) == null ? void 0 : _a.google) || ((_b = font == null ? void 0 : font.mono) == null ? void 0 : _b.google)) && /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
        (((_c = font == null ? void 0 : font.default) == null ? void 0 : _c.google) || ((_d = font == null ? void 0 : font.mono) == null ? void 0 : _d.google)) && /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" }),
        ((_e = font == null ? void 0 : font.default) == null ? void 0 : _e.google) && /* @__PURE__ */ jsx(
          "link",
          {
            href: `https://fonts.googleapis.com/css2?family=${font.default.google}:wght@300;400;500&display=swap`,
            rel: "stylesheet"
          }
        ),
        ((_f = font == null ? void 0 : font.mono) == null ? void 0 : _f.google) && /* @__PURE__ */ jsx(
          "link",
          {
            href: `https://fonts.googleapis.com/css2?family=${font.mono.google}:wght@300;400;500&display=swap`,
            rel: "stylesheet"
          }
        ),
        /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
        ogImageUrl && /* @__PURE__ */ jsx(
          "meta",
          {
            property: "twitter:image",
            content: ogImageUrl.replace(
              "%logo",
              `${baseUrl ? baseUrl : ""}${typeof logoUrl === "string" ? logoUrl : (logoUrl == null ? void 0 : logoUrl.dark) || ""}`
            ).replace("%title", title2 || "").replace("%description", (description2 !== "undefined" ? description2 : "") || "")
          }
        )
      ]
    }
  );
}
function getIconType(iconUrl2) {
  if (iconUrl2.endsWith(".svg")) return "image/svg+xml";
  if (iconUrl2.endsWith(".png")) return "image/png";
  if (iconUrl2.endsWith(".jpg")) return "image/jpeg";
  if (iconUrl2.endsWith(".ico")) return "image/x-icon";
  if (iconUrl2.endsWith(".webp")) return "image/webp";
  return void 0;
}
const notFoundRoute = (() => {
  const virtualRoute = routes$1.find(({ path }) => path === "*");
  if (virtualRoute)
    return {
      path: virtualRoute.path,
      lazy: async () => {
        const { frontmatter, ...route } = await virtualRoute.lazy();
        return {
          ...route,
          element: /* @__PURE__ */ jsx(Root, { frontmatter, path: virtualRoute.path, children: /* @__PURE__ */ jsx(DocsLayout, { children: /* @__PURE__ */ jsx(route.default, {}) }) })
        };
      }
    };
  return {
    path: "*",
    // 404
    lazy: void 0,
    element: /* @__PURE__ */ jsx(Root, { frontmatter: { layout: "minimal" }, path: "*", children: /* @__PURE__ */ jsx(DocsLayout, { children: /* @__PURE__ */ jsx(NotFound, {}) }) })
  };
})();
const routes = [
  ...routes$1.filter(({ path }) => path !== "*").map((route_virtual) => ({
    path: route_virtual.path,
    lazy: async () => {
      const { frontmatter, ...route } = await route_virtual.lazy();
      return {
        ...route,
        element: /* @__PURE__ */ jsx(
          Root,
          {
            filePath: route_virtual.filePath,
            frontmatter,
            lastUpdatedAt: route_virtual.lastUpdatedAt,
            path: route_virtual.path,
            children: /* @__PURE__ */ jsx(DocsLayout, { children: /* @__PURE__ */ jsx(route.default, {}) })
          }
        )
      };
    }
  })),
  notFoundRoute
];
function createFetchRequest(req) {
  const origin = `${req.protocol}://${req.headers.host}`;
  const url = new URL(req.originalUrl || req.url, origin);
  const controller = new AbortController();
  req.on("close", () => controller.abort());
  const headers = new Headers();
  for (const [key, values] of Object.entries(req.headers)) {
    if (values) {
      if (Array.isArray(values)) for (const value of values) headers.append(key, value);
      else headers.set(key, values);
    }
  }
  const init = {
    method: req.method,
    headers,
    signal: controller.signal
  };
  if (req.method !== "GET" && req.method !== "HEAD") init.body = req.body;
  return new Request(url.href, init);
}
async function prerender(location) {
  const unwrappedRoutes = (await Promise.all(
    routes.map(async (route) => {
      const location_ = location === "/" ? "/" : location.replace(/\/$/, "");
      const path = route.path.replace(/\.html$/, "");
      if (path !== location_ && path !== "*") return null;
      const element = route.lazy ? (await route.lazy()).element : route.element;
      return {
        path: route.path,
        element
      };
    })
  )).filter(Boolean);
  const { config: config2 } = await resolveVocsConfig();
  const { basePath } = config2;
  const body = renderToString(
    /* @__PURE__ */ jsx(ConfigProvider, { config: config2, children: /* @__PURE__ */ jsx(StaticRouter, { location, basename: basePath, children: /* @__PURE__ */ jsx(Routes, { children: unwrappedRoutes.map((route) => /* @__PURE__ */ jsx(Route, { path: route.path, element: route.element }, route.path)) }) }) })
  );
  return { head: await head({ path: location }), body };
}
async function render(req) {
  const { config: config2 } = await resolveVocsConfig();
  const { basePath } = config2;
  const { query, dataRoutes } = createStaticHandler(routes, { basename: basePath });
  const fetchRequest = createFetchRequest(req);
  const context = await query(fetchRequest);
  if (context instanceof Response) throw context;
  const router = createStaticRouter(dataRoutes, context);
  const body = renderToString(
    /* @__PURE__ */ jsx(ConfigProvider, { config: config2, children: /* @__PURE__ */ jsx(StaticRouterProvider, { router, context }) })
  );
  return { head: await head({ path: context.location.pathname }), body };
}
async function head({ path }) {
  const { config: config2 } = await resolveVocsConfig();
  const head2 = await (async () => {
    if (typeof config2.head === "function") return await config2.head({ path });
    if (typeof config2.head === "object") {
      const entry = Object.entries(config2.head).reverse().find(([key]) => path.startsWith(key));
      return entry == null ? void 0 : entry[1];
    }
    return config2.head;
  })();
  const helmet = Helmet.renderStatic();
  let meta = helmet.meta.toString();
  const match = helmet.meta.toString().match(/property="og:image" content="(.*)"/);
  if (match == null ? void 0 : match[1]) {
    meta = meta.replace(
      /property="og:image" content="(.*)"/,
      `property="og:image" content="${match[1].replace(/&amp;/g, "&")}"`
    );
  }
  return `
    ${helmet.title.toString()}
    ${meta}
    ${helmet.link.toString()}
    ${helmet.style.toString()}
    ${helmet.script.toString()}
    ${renderToString(head2)}
  `;
}
export {
  Content as C,
  Link$1 as L,
  Root$1 as R,
  Trigger as T,
  Logo as a,
  List$1 as b,
  prerender,
  render,
  useConfig as u
};
