import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMDXComponents } from "@mdx-js/react";
const frontmatter = {
  "title": "Create Ao dApp",
  "description": "undefined"
};
function _createMdxContent(props) {
  const _components = {
    a: "a",
    div: "div",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.header, {
      children: jsxs(_components.h1, {
        id: "create-ao-dapp",
        children: ["Create Ao dApp", jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#create-ao-dapp",
          children: jsx(_components.div, {
            "data-autolink-icon": true
          })
        })]
      })
    }), "\n", jsx(_components.p, {
      children: "The create-ao-dapp provides a comprehensive boilerplate for setting up an AO process, including testing, modules, and amalgamation alongside a React application. This starter kit aims to simplify the development and deployment of AO processes by providing pre-configured setups and example processes."
    }), "\n", jsxs(_components.h2, {
      id: "features",
      children: ["Features", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#features",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Modular"
        }), ": The create-ao-dapp is designed to be modular, allowing you to easily add and remove modules as needed."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Testing"
        }), ": The create-ao-dapp includes a comprehensive testing suite, allowing you to test your AO processes with ease."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Amalgamation"
        }), ": The create-ao-dapp includes an amalgamation tool, allowing you to easily combine multiple AO processes into a single process."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Permaweb Deployment"
        }), ": The create-ao-dapp includes a deployment script that allows you to deploy your AO processes to the Permaweb with ease."]
      }), "\n"]
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
