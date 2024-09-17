import { jsx, jsxs } from "react/jsx-runtime";
import { useMDXComponents } from "@mdx-js/react";
const frontmatter = {
  "title": "Project Structure",
  "description": "undefined"
};
function _createMdxContent(props) {
  const _components = {
    a: "a",
    div: "div",
    h1: "h1",
    header: "header",
    ...useMDXComponents(),
    ...props.components
  };
  return jsx(_components.header, {
    children: jsxs(_components.h1, {
      id: "project-structure",
      children: ["Project Structure", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#project-structure",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    })
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
