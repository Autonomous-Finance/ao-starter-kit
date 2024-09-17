import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMDXComponents } from "@mdx-js/react";
const frontmatter = {
  "title": "Getting Started",
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
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsx(_components.header, {
      children: jsxs(_components.h1, {
        id: "getting-started",
        children: ["Getting Started", jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#getting-started",
          children: jsx(_components.div, {
            "data-autolink-icon": true
          })
        })]
      })
    }), "\n", jsx(_components.p, {
      children: "To get started with the create-ao-dapp, you can run the following command:"
    }), "\n", jsxs(_components.div, {
      className: "code-group",
      children: [jsx(_components.div, {
        "data-title": "bun",
        children: jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark-dimmed",
          style: {
            backgroundColor: "#fff",
            "--shiki-dark-bg": "#22272e",
            color: "#24292e",
            "--shiki-dark": "#adbac7"
          },
          tabIndex: "0",
          "data-title": "bun",
          "data-lang": "bash",
          children: jsx(_components.code, {
            children: jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#F69D50"
                },
                children: "bun"
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: " create"
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: " ao-dapp"
              })]
            })
          })
        })
      }), jsx(_components.div, {
        "data-title": "pnpm",
        children: jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark-dimmed",
          style: {
            backgroundColor: "#fff",
            "--shiki-dark-bg": "#22272e",
            color: "#24292e",
            "--shiki-dark": "#adbac7"
          },
          tabIndex: "0",
          "data-title": "pnpm",
          "data-lang": "bash",
          children: jsx(_components.code, {
            children: jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#F69D50"
                },
                children: "pnpm"
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: " create"
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: " ao-dapp"
              })]
            })
          })
        })
      }), jsx(_components.div, {
        "data-title": "yarn",
        children: jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark-dimmed",
          style: {
            backgroundColor: "#fff",
            "--shiki-dark-bg": "#22272e",
            color: "#24292e",
            "--shiki-dark": "#adbac7"
          },
          tabIndex: "0",
          "data-title": "yarn",
          "data-lang": "bash",
          children: jsx(_components.code, {
            children: jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#F69D50"
                },
                children: "yarn"
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: " create"
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: " ao-dapp"
              })]
            })
          })
        })
      }), jsx(_components.div, {
        "data-title": "npm",
        children: jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark-dimmed",
          style: {
            backgroundColor: "#fff",
            "--shiki-dark-bg": "#22272e",
            color: "#24292e",
            "--shiki-dark": "#adbac7"
          },
          tabIndex: "0",
          "data-title": "npm",
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
                children: " init"
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: " ao-dapp"
              })]
            })
          })
        })
      })]
    }), "\n", jsxs(_components.h2, {
      id: "project-setup",
      children: ["Project Setup", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#project-setup",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "Running the above command will prompt you to complete multiple steps to set up your project. The steps include:"
    }), "\n", jsxs(_components.div, {
      "data-vocs-steps": "true",
      children: [jsxs(_components.div, {
        "data-depth": "3",
        children: [jsxs(_components.h3, {
          id: "enter-the-name-of-your-project",
          children: ["Enter the name of your project", jsx(_components.a, {
            "aria-hidden": "true",
            tabIndex: "-1",
            href: "#enter-the-name-of-your-project",
            children: jsx(_components.div, {
              "data-autolink-icon": true
            })
          })]
        }), jsx(_components.p, {
          children: "This will be used as the root directory for your project, relative to the current directory. (eg: my-project)"
        })]
      }), jsxs(_components.div, {
        "data-depth": "3",
        children: [jsxs(_components.h3, {
          id: "what-should-we-name-the-backend-process",
          children: ["What should we name the backend process?", jsx(_components.a, {
            "aria-hidden": "true",
            tabIndex: "-1",
            href: "#what-should-we-name-the-backend-process",
            children: jsx(_components.div, {
              "data-autolink-icon": true
            })
          })]
        }), jsx(_components.p, {
          children: "You can name your backend process anything you like. The name you provide will be used to create the process\ndirectory and files. (eg: myprocess)"
        }), jsx(_components.aside, {
          "data-callout": "warning",
          children: jsx(_components.p, {
            children: "Naming your process is important, as it will be used to create the process directory and files. Only valid lua identifier names are allowed."
          })
        })]
      }), jsxs(_components.div, {
        "data-depth": "3",
        children: [jsxs(_components.h3, {
          id: "pick-a-process-type-within-myprocess",
          children: ["Pick a process type within myprocess", jsx(_components.a, {
            "aria-hidden": "true",
            tabIndex: "-1",
            href: "#pick-a-process-type-within-myprocess",
            children: jsx(_components.div, {
              "data-autolink-icon": true
            })
          })]
        }), jsx(_components.p, {
          children: "You can choose from the following process types:"
        }), jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: [jsx(_components.code, {
              children: "lua"
            }), ": A simple Lua process."]
          }), "\n", jsxs(_components.li, {
            children: [jsx(_components.code, {
              children: "teal"
            }), ": Lua process using the ", jsx(_components.a, {
              href: "https://github.com/teal-language/tl",
              children: "Teal language"
            }), "."]
          }), "\n"]
        })]
      }), jsxs(_components.div, {
        "data-depth": "3",
        children: [jsxs(_components.h3, {
          id: "select-the-features-you-want-to-include",
          children: ["Select the features you want to include", jsx(_components.a, {
            "aria-hidden": "true",
            tabIndex: "-1",
            href: "#select-the-features-you-want-to-include",
            children: jsx(_components.div, {
              "data-autolink-icon": true
            })
          })]
        }), jsx(_components.p, {
          children: "You can choose from the following features:"
        }), jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: [jsx(_components.code, {
              children: "testing"
            }), ": Include AO Process Testing suite for your process. ", jsx(_components.a, {
              href: "https://github.com/Autonomous-Finance/ao-process-testing",
              children: "AO Process Testing"
            })]
          }), "\n", jsxs(_components.li, {
            children: [jsx(_components.code, {
              children: "squishy"
            }), ": Tool for combining multiple files into a single one. ", jsx(_components.a, {
              href: "https://github.com/LuaDist/squish",
              children: "Squish"
            })]
          }), "\n", jsxs(_components.li, {
            children: [jsx(_components.code, {
              children: "aoform"
            }), ": Include AO Form for deploying your process. ", jsx(_components.a, {
              href: "https://github.com/Autonomous-Finance/aoform",
              children: "AOForm"
            })]
          }), "\n"]
        })]
      }), jsxs(_components.div, {
        "data-depth": "3",
        children: [jsxs(_components.h3, {
          id: "pick-a-frontend-framework-within-my-project",
          children: ["Pick a frontend framework within my-project", jsx(_components.a, {
            "aria-hidden": "true",
            tabIndex: "-1",
            href: "#pick-a-frontend-framework-within-my-project",
            children: jsx(_components.div, {
              "data-autolink-icon": true
            })
          })]
        }), jsx(_components.p, {
          children: "You can choose from the following frontend frameworks:"
        }), jsxs(_components.ul, {
          children: ["\n", jsxs(_components.li, {
            children: [jsx(_components.code, {
              children: "vite-react"
            }), ": A React application using Vite."]
          }), "\n"]
        })]
      })]
    }), "\n", jsxs(_components.h2, {
      id: "project-structure",
      children: ["Project Structure", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#project-structure",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "By selecting all the options, you will have a project structure similar to the following:"
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
          className: "line focused highlighted",
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
            children: "│       │   │   └── process_test.lua    # Test script for the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "│       │   └── process.lua             # Entry point for the process."
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
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "├── apps/             # The root directory of your frontend applications."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "│   └── frontend/     # React Vite App connected to ao process."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "├── utils             # Directory for utility functions."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "│   └── inject-process.ts # Script to inject process Ids from ao to frontend"
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
      children: "This structure includes the following directories:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "ao/"
        }), ": The root directory of your ao processes."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "apps/"
        }), ": The root directory of your frontend applications."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "utils/"
        }), ": Directory for utility functions."]
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "preconfigured-scripts",
      children: ["Preconfigured Scripts", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#preconfigured-scripts",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "package.json"
      }), " file in the root directory of your project includes the following preconfigured scripts:"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "myprocess:deploy"
        }), ": Deploys the process using aoform."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "myprocess:test"
        }), ": Runs the test script for the process."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "myprocess:build"
        }), ": Builds the process using squishy."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "frontend:dev"
        }), ": Starts the development server for the frontend application."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "frontend:build"
        }), ": Builds the frontend application."]
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "next-steps",
      children: ["Next Steps", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#next-steps",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "You can now start developing your ao processes and frontend applications. For more information on how to use the create-ao-dapp, follow along with the rest of the documentation. If you have any questions or need help, feel free to reach out to us on dedicated channels."
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
