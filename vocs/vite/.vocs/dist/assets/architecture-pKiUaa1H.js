import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMDXComponents } from "@mdx-js/react";
const frontmatter = {
  "title": "Frontend Development",
  "description": "undefined"
};
function _createMdxContent(props) {
  const _components = {
    a: "a",
    aside: "aside",
    code: "code",
    div: "div",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.header, {
      children: jsxs(_components.h1, {
        id: "frontend-development",
        children: ["Frontend Development", jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#frontend-development",
          children: jsx(_components.div, {
            "data-autolink-icon": true
          })
        })]
      })
    }), "\n", jsx(_components.p, {
      children: "The provided frontend is a Vite React application. It is a single-page application (SPA) that provides a user interface for the backend services. The frontend is built using the following technologies:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.a, {
          href: "https://reactjs.org/",
          children: "React"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.a, {
          href: "https://vitejs.dev/",
          children: "Vite"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.a, {
          href: "https://www.typescriptlang.org/",
          children: "TypeScript"
        })
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "Extra libraries used in the frontend that we recommend you use:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.a, {
          href: "https://www.npmjs.com/package/@permaweb/aoconnect",
          children: "Permaweb AoConnect"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.a, {
          href: "https://github.com/labscommunity/arweave-wallet-kit",
          children: "Arweave Wallet Kit"
        })
      }), "\n", jsx(_components.li, {
        children: jsx(_components.a, {
          href: "https://tanstack.com/query/latest",
          children: "TanStack Query"
        })
      }), "\n"]
    }), "\n", jsxs(_components.aside, {
      "data-callout": "tip",
      children: [jsx(_components.strong, {
        "data-callout-title": true,
        children: "Handy Tip"
      }), jsx(_components.p, {
        children: "TanStack Query is a powerful and flexible data fetching library for React. It is highly recommended to use TanStack Query for data fetching in your frontend. This will enable caching, pagination, and other features out of the box."
      })]
    }), "\n", jsxs(_components.h2, {
      id: "directory-structure",
      children: ["Directory Structure", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#directory-structure",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["The frontend codebase is present in the ", jsx(_components.code, {
        children: "apps/frontend"
      }), " directory. The frontend codebase is structured as follows:"]
    }), "\n", jsx(_components.pre, {
      className: "shiki shiki-themes github-light github-dark-dimmed",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#22272e",
        color: "#24292e",
        "--shiki-dark": "#adbac7"
      },
      tabIndex: "0",
      children: jsxs(_components.code, {
        children: [jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "apps/frontend/         # Your frontend application."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "├──public/             # Your project's public assets."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "├──src/                # Your project's source code."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "│  ├── components/    # React components."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "│  │  └── counter.tsx # Example of a React component."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "│  ├── constants/         # Constants used in the frontend. This will include injected backend process."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "|  |   └── counter_process.ts # Example of a backend process."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "|  ├── App.css       # CSS file for the App component."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "│  ├── App.tsx       # The main React component."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "│  ├── index.css     # CSS file for the index.html file."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "│  ├── main.tsx     # The main entry point for the React application."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "|  └── vite-env.d.ts    # Vite environment types."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "├── .eslintrc.cjs"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "├── .gitignore"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "├── index.html        # The main HTML file."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "├── package.json"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "├── README.md"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "├── vite.config.ts   # Vite configuration file."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "└── tsconfig.json"
          })
        })]
      })
    }), "\n", jsx(_components.aside, {
      "data-callout": "info",
      children: jsxs(_components.p, {
        children: ["The frontend codebase comes with a sample ", jsx(_components.code, {
          children: "counter"
        }), " component that demonstrates how to use the backend process in the frontend. You can use this as a reference to build your own components."]
      })
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
