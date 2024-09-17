import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMDXComponents } from "@mdx-js/react";
const frontmatter = {
  "title": "Building the process using Squishy",
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
        id: "building-the-process-using-squishy",
        children: ["Building the process using Squishy", jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#building-the-process-using-squishy",
          children: jsx(_components.div, {
            "data-autolink-icon": true
          })
        })]
      })
    }), "\n", jsxs(_components.p, {
      children: ["This section will guide you through the process of building the process. The process is built using the ", jsx(_components.code, {
        children: "build"
      }), " script in the ", jsx(_components.code, {
        children: "process"
      }), " directory. The ", jsx(_components.code, {
        children: "build"
      }), " script is a simple shell script that uses the ", jsx(_components.code, {
        children: "docker"
      }), " command to build the process."]
    }), "\n", jsx(_components.aside, {
      "data-callout": "info",
      children: jsx(_components.p, {
        children: "Building processes is done using Squish via Docker. Ensure you have Docker installed on your machine."
      })
    }), "\n", jsxs(_components.p, {
      children: ["Learn more about ", jsx(_components.a, {
        href: "https://github.com/LuaDist/squish",
        children: "Squish"
      }), "."]
    }), "\n", jsxs(_components.h2, {
      id: "configuring-squish",
      children: ["Configuring Squish", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#configuring-squish",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["Squish is a tool for combining multiple files into a single one. It is used to build the process into a single file. The configuration for Squish is stored in the ", jsx(_components.code, {
        children: "squishy"
      }), " file in the process directory."]
    }), "\n", jsx(_components.p, {
      children: "The basic configuration for Squish is as follows:"
    }), "\n", jsx(_components.pre, {
      className: "shiki shiki-themes github-light github-dark-dimmed",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#22272e",
        color: "#24292e",
        "--shiki-dark": "#adbac7"
      },
      tabIndex: "0",
      "data-title": "./ao/my-process/squishy",
      "data-lang": "lua",
      children: jsxs(_components.code, {
        children: [jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Main"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "src/process.lua"'
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          "data-empty-line": true,
          children: " "
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Module"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "process_lib" "./src/process_lib.lua"'
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          "data-empty-line": true,
          children: " "
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Option"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "minify-level" "none"'
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Output"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: " 'build/process.lua'"
          })]
        })]
      })
    }), "\n", jsx(_components.p, {
      children: "The configuration specifies the entry point for the process, the modules to include, the minify level, and the output file."
    }), "\n", jsxs(_components.h2, {
      id: "building-the-process",
      children: ["Building the Process", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#building-the-process",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "To build the process, run the following command in the process directory:"
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
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "cd"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: " ao/process-name"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " && "
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#F69D50"
            },
            children: "./scripts/build.sh"
          })]
        })
      })
    }), "\n", jsxs(_components.aside, {
      "data-callout": "tip",
      children: [jsx(_components.strong, {
        "data-callout-title": true,
        children: "Handy Tip"
      }), jsx(_components.p, {
        children: "Create Ao dApp provides a script to build the process from the root of the project. You can run the following command to build the process:"
      }), jsx(_components.pre, {
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
              children: " myprocess:build"
            })]
          })
        })
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
