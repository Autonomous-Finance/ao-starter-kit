import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMDXComponents } from "@mdx-js/react";
const frontmatter = {
  "title": "Developing AO Processes",
  "description": "This section provides an overview of the architecture of AO processes and how they are developed."
};
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
    children: [jsxs(_components.header, {
      children: [jsxs(_components.h1, {
        id: "developing-ao-processes",
        children: ["Developing AO Processes", jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#developing-ao-processes",
          children: jsx(_components.div, {
            "data-autolink-icon": true
          })
        })]
      }), jsx(_components.div, {
        role: "doc-subtitle",
        children: "This section provides an overview of the architecture of AO processes and how they are developed."
      })]
    }), "\n", jsx(_components.p, {
      children: "In order to develop AO processes and start using Create Ao dApp, you need to have a basic understanding of the following:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Lua programming language"
        }), " - AO processes are written in Lua. If you are not familiar with Lua, you can learn the basics from the ", jsx(_components.a, {
          href: "https://www.lua.org/manual/5.1/",
          children: "official Lua documentation"
        }), "."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "ao + aos"
        }), " - AO processes are executed by the AO. You need to have a basic understanding of how to use the ", jsx(_components.code, {
          children: "ao"
        }), ". You can learn more about ", jsx(_components.code, {
          children: "ao"
        }), " from the ", jsx(_components.a, {
          href: "https://cookbook_ao.g8way.io/welcome/index.html",
          children: "official documentation"
        })]
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "process-directory-structure",
      children: ["Process Directory Structure", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#process-directory-structure",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "A recommended project structure for developing AO processes is as follows:"
    }), "\n", jsx(_components.pre, {
      className: "shiki shiki-themes github-light github-dark-dimmed has-focused has-highlighted",
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
            children: "project-name/             # Your project's root directory."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "├── ao/                   # The root directory of your ao processes."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "│   └── process-name/          # Process Directory."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "│       ├── scripts/           # Utility scripts for the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "|       |   ├── build.sh       # Build script for the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "│       │   ├── deploy.sh      # Deploy script for the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "|       |   └── test.sh        # Test script for the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "│       ├── src/               # Source code for the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "│       │   ├── test/                   # Entry point for the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "│       │   │   ├── mocked-env          # Mocked env files to test the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "|       |   |   ├── setup.lua           # AO Testing Suite setup file."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "│       │   │   └── process_test.lua    # Test script for the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "│       |   ├── process_lib.lua         # Library for the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "│       |   ├── process.lua             # Entry point for the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "│       │   └── reset_modules.lua       # Reset preloaded modules"
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "│       ├── aoform.yaml        # Configuration for ao-form deployment."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "│       └── squishy            # Squishy configuration for build."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "├── apps/             # The root directory of your frontend applications."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "│   └── frontend/     # React Vite App connected to ao process."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "├── utils             # Directory for utility functions."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "│   └── inject-process.ts # Script to inject process Ids from ao to frontend "
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "├── node_modules/"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "├── .gitignore"
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
            children: "└── tsconfig.json"
          })
        })]
      })
    }), "\n", jsx(_components.p, {
      children: "Don't be overwhelmed by the structure. We will go through each of the directories and files in detail in the following sections."
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
