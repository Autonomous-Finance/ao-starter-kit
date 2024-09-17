import { jsx, jsxs } from "react/jsx-runtime";
import { useMDXComponents } from "@mdx-js/react";
import React from "react";
import { L as Link, u as useConfig, a as Logo$1, R as Root$1, b as List, T as Trigger, C as Content } from "../index.server.js";
import clsx from "clsx";
import "react-dom/server";
import "react-helmet";
import "react-router-dom";
import "react-router-dom/server.js";
import "node:fs";
import "node:path";
import "toml";
import "vite";
import "@vanilla-extract/dynamic";
import "react-intersection-observer";
import "@mdx-js/mdx";
import "@radix-ui/react-icons";
import "@radix-ui/react-dialog";
import "minisearch";
import "@radix-ui/react-label";
import "mark.js";
import "@radix-ui/react-navigation-menu";
import "@radix-ui/react-accordion";
import "@radix-ui/react-popover";
import "@radix-ui/react-tabs";
import "@floating-ui/react";
var button$1 = "vocs_Button_button";
var button_accent = "vocs_Button_button_accent";
function Button$1({ children, className, href, variant }) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      className: clsx(className, button$1, variant === "accent" && button_accent),
      href,
      variant: "styleless",
      children
    }
  );
}
var button = "vocs_HomePage_button";
var buttons = "vocs_HomePage_buttons";
var description = "vocs_HomePage_description";
var logo = "vocs_HomePage_logo";
var packageManager = "vocs_HomePage_packageManager";
var root = "vocs_HomePage";
var tabs = "vocs_HomePage_tabs";
var tabsContent = "vocs_HomePage_tabsContent";
var tabsList = "vocs_HomePage_tabsList";
var tagline = "vocs_HomePage_tagline";
var title = "vocs_HomePage_title";
function Root({ children, className }) {
  return /* @__PURE__ */ jsx("div", { className: clsx(className, root), children });
}
function Logo({ className }) {
  const { logoUrl, title: title$1 } = useConfig();
  return logoUrl ? /* @__PURE__ */ jsx("div", { className: clsx(className, logo), children: /* @__PURE__ */ jsx(Logo$1, {}) }) : /* @__PURE__ */ jsx("h1", { className: clsx(className, title), children: title$1 });
}
function Tagline({ children, className }) {
  return /* @__PURE__ */ jsx("div", { className: clsx(className, tagline), children });
}
function Description({ children, className }) {
  return /* @__PURE__ */ jsx("div", { className: clsx(className, description), children });
}
function Buttons({ children, className }) {
  return /* @__PURE__ */ jsx("div", { className: clsx(className, buttons), children });
}
function Button(props) {
  return /* @__PURE__ */ jsx(Button$1, { ...props, className: clsx(button, props.className) });
}
function InstallPackage({
  name,
  type = "install"
}) {
  return /* @__PURE__ */ jsxs(Root$1, { className: tabs, defaultValue: "npm", children: [
    /* @__PURE__ */ jsxs(List, { className: tabsList, children: [
      /* @__PURE__ */ jsx(Trigger, { value: "npm", children: "npm" }),
      /* @__PURE__ */ jsx(Trigger, { value: "pnpm", children: "pnpm" }),
      /* @__PURE__ */ jsx(Trigger, { value: "yarn", children: "yarn" })
    ] }),
    /* @__PURE__ */ jsxs(Content, { className: tabsContent, value: "npm", children: [
      /* @__PURE__ */ jsx("span", { className: packageManager, children: "npm" }),
      " ",
      type === "init" ? "init" : "install",
      " ",
      name
    ] }),
    /* @__PURE__ */ jsxs(Content, { className: tabsContent, value: "pnpm", children: [
      /* @__PURE__ */ jsx("span", { className: packageManager, children: "pnpm" }),
      " ",
      type === "init" ? "create" : "add",
      " ",
      name
    ] }),
    /* @__PURE__ */ jsxs(Content, { className: tabsContent, value: "yarn", children: [
      /* @__PURE__ */ jsx("span", { className: packageManager, children: "yarn" }),
      " ",
      type === "init" ? "create" : "add",
      " ",
      name
    ] })
  ] });
}
const HomePage = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button,
  Buttons,
  Description,
  InstallPackage,
  Logo,
  Root,
  Tagline
}, Symbol.toStringTag, { value: "Module" }));
function Hero() {
  return /* @__PURE__ */ jsx("div", { className: "hero", children: /* @__PURE__ */ jsx("img", { src: "./demo.gif", alt: "Create AO dApp" }) });
}
function Downloads() {
  const [downloads, setDownloads] = React.useState(null);
  React.useEffect(() => {
    async function fetchDownloads() {
      try {
        const response = await fetch(
          "https://api.npmjs.org/downloads/point/last-year/create-ao-dapp"
        );
        const data = await response.json();
        setDownloads(data.downloads);
      } catch (error) {
        console.error("Error fetching downloads:", error);
      }
    }
    fetchDownloads();
  }, []);
  return /* @__PURE__ */ jsxs("div", { children: [
    "Already downloaded ",
    downloads,
    " times."
  ] });
}
const frontmatter = {
  "layout": "landing"
};
function _createMdxContent(props) {
  const _components = {
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  if (!HomePage) _missingMdxReference("HomePage", false);
  if (!Button) _missingMdxReference("HomePage.Button", true);
  if (!Buttons) _missingMdxReference("HomePage.Buttons", true);
  if (!Description) _missingMdxReference("HomePage.Description", true);
  if (!InstallPackage) _missingMdxReference("HomePage.InstallPackage", true);
  if (!Root) _missingMdxReference("HomePage.Root", true);
  return jsxs(Root, {
    children: [jsx(Hero, {}), jsx(InstallPackage, {
      name: "ao-dapp",
      type: "init"
    }), jsx(Description, {
      children: jsx(_components.p, {
        children: "The create-ao-dapp provides a comprehensive boilerplate for setting up an AO\nprocess, including testing, modules, and amalgamation alongside a React\napplication."
      })
    }), jsxs(Buttons, {
      children: [jsx(Button, {
        href: "/getting-started",
        variant: "accent",
        children: jsx(_components.p, {
          children: "Get started"
        })
      }), jsx(Button, {
        href: "https://github.com/Autonomous-Finance/create-ao-dapp",
        children: jsx(_components.p, {
          children: "GitHub"
        })
      })]
    }), jsx(Downloads, {})]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
export {
  MDXContent as default,
  frontmatter
};
