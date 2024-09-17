import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMDXComponents } from "@mdx-js/react";
const frontmatter = {
  "title": "Building the frontend",
  "description": "undefined"
};
function _createMdxContent(props) {
  const _components = {
    a: "a",
    aside: "aside",
    code: "code",
    div: "div",
    h1: "h1",
    header: "header",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.header, {
      children: jsxs(_components.h1, {
        id: "building-the-frontend",
        children: ["Building the frontend", jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#building-the-frontend",
          children: jsx(_components.div, {
            "data-autolink-icon": true
          })
        })]
      })
    }), "\n", jsx(_components.p, {
      children: "The frontend is a Vite React application. It is a single-page application (SPA) that provides a user interface for the backend services."
    }), "\n", jsxs(_components.p, {
      children: ["Building the vite frontend is a simple process. You can learn more about building in the official Vite documentation ", jsx(_components.a, {
        href: "https://vitejs.dev/guide/build.html",
        children: "here"
      }), "."]
    }), "\n", jsx(_components.p, {
      children: "To build the frontend, run the following command:"
    }), "\n", jsx(_components.pre, {
      className: "shiki shiki-themes github-light github-dark-dimmed",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#22272e",
        color: "#24292e",
        "--shiki-dark": "#adbac7"
      },
      tabIndex: "0",
      "data-title": "Terminal",
      "data-lang": "bash",
      children: jsx(_components.code, {
        children: jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#F69D50"
            },
            children: "npm"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: " run"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: " frontend:build"
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "You can deploy your frontend to a static hosting service like Vercel, Netlify, or GitHub Pages."
    }), "\n", jsxs(_components.aside, {
      "data-callout": "tip",
      children: [jsx(_components.strong, {
        "data-callout-title": true,
        children: "Handy Tip"
      }), jsx(_components.p, {
        children: "Wouldn't it be awesome if your frontend could be deployed to the Permaweb? You can do that with permaweb deployment tool that Create Ao dApp provides."
      }), jsxs(_components.p, {
        children: ["Check out the ", jsx(_components.a, {
          href: "/frontend-development/permaweb-deployment",
          children: "Deploying to Permaweb"
        }), " guide to learn more."]
      })]
    })]
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
export {
  MDXContent as default,
  frontmatter
};
