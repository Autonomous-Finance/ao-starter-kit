import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMDXComponents } from "@mdx-js/react";
const frontmatter = {
  "title": "Process deployment",
  "description": "using aoform"
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
    children: [jsxs(_components.header, {
      children: [jsxs(_components.h1, {
        id: "process-deployment",
        children: ["Process deployment", jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#process-deployment",
          children: jsx(_components.div, {
            "data-autolink-icon": true
          })
        })]
      }), jsx(_components.div, {
        role: "doc-subtitle",
        children: "using aoform"
      })]
    }), "\n", jsxs(_components.p, {
      children: ["This section will guide you through the process of deploying the process using ", jsx(_components.code, {
        children: "aoform"
      }), ". ", jsx(_components.code, {
        children: "aoform"
      }), " is a tool for deploying AO processes to the AO Network. The configuration for ", jsx(_components.code, {
        children: "aoform"
      }), " is stored in the ", jsx(_components.code, {
        children: "aoform.yaml"
      }), " file in the process directory."]
    }), "\n", jsxs(_components.aside, {
      "data-callout": "info",
      children: [jsxs(_components.p, {
        children: ["Deploying processes is done using ", jsx(_components.code, {
          children: "aoform"
        }), ". Ensure you have ", jsx(_components.code, {
          children: "aoform"
        }), " installed on your project."]
      }), jsxs(_components.p, {
        children: ["Learn more about ", jsx(_components.a, {
          href: "https://github.com/Autonomous-Finance/aoform",
          children: "AOForm"
        })]
      })]
    }), "\n", jsxs(_components.h2, {
      id: "configuring-aoform",
      children: ["Configuring AOForm", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#configuring-aoform",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "aoform.yaml"
      }), " file in the process directory contains the configuration for deploying the process using ", jsx(_components.code, {
        children: "aoform"
      }), ". The basic configuration for ", jsx(_components.code, {
        children: "aoform"
      }), " is as follows:"]
    }), "\n", jsx(_components.pre, {
      className: "shiki shiki-themes github-light github-dark-dimmed",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#22272e",
        color: "#24292e",
        "--shiki-dark": "#adbac7"
      },
      tabIndex: "0",
      "data-title": "./ao/my-process/aoform.yaml",
      "data-lang": "yaml",
      children: jsxs(_components.code, {
        children: [jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-dark": "#768390"
            },
            children: "## AoForm Configuration"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-dark": "#768390"
            },
            children: "## This file is used to configure the AoForm package"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-dark": "#768390"
            },
            children: "## For more information, visit"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          "data-empty-line": true,
          children: " "
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "- "
          }), jsx(_components.span, {
            style: {
              color: "#22863A",
              "--shiki-dark": "#8DDB8C"
            },
            children: "name"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ": "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "my-process"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#22863A",
              "--shiki-dark": "#8DDB8C"
            },
            children: "  file"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ": "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "build/process.lua"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#22863A",
              "--shiki-dark": "#8DDB8C"
            },
            children: "  prerun"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ": "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "./src/reset_modules.lua"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#22863A",
              "--shiki-dark": "#8DDB8C"
            },
            children: "  scheduler"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ": "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "_GQ33BkPtZrqxA84vM8Zk-N2aO0toNNu_C-l-rawrBA"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#22863A",
              "--shiki-dark": "#8DDB8C"
            },
            children: "  module"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ": "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "GYrbbe0VbHim_7Hi6zrOpHQXrSQz07XNtwCnfbFo2I0"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#22863A",
              "--shiki-dark": "#8DDB8C"
            },
            children: "  tags"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ":"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    - "
          }), jsx(_components.span, {
            style: {
              color: "#22863A",
              "--shiki-dark": "#8DDB8C"
            },
            children: "name"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ": "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "Name"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#22863A",
              "--shiki-dark": "#8DDB8C"
            },
            children: "      value"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ": "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "my-process"
          })]
        })]
      })
    }), "\n", jsx(_components.p, {
      children: "The configuration specifies the name of the process, the entry point for the process, the prerun script, the scheduler, the module, and the tags for the process."
    }), "\n", jsxs(_components.h2, {
      id: "deploying-the-process",
      children: ["Deploying the Process", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#deploying-the-process",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "To deploy the process, run the following command in the process directory:"
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
      children: jsxs(_components.code, {
        children: [jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-dark": "#768390"
            },
            children: "# Export the wallet JSON"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "export"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " WALLET_JSON"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: '"$('
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#F69D50"
            },
            children: "cat"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' ~/.aos.json)"'
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          "data-empty-line": true,
          children: " "
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-dark": "#768390"
            },
            children: "# Deploy the process"
          })
        }), "\n", jsxs(_components.span, {
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
            children: "npx"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: " aoform"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: " deploy"
          })]
        })]
      })
    }), "\n", jsxs(_components.aside, {
      "data-callout": "tip",
      children: [jsx(_components.strong, {
        "data-callout-title": true,
        children: "Handy Tip"
      }), jsx(_components.p, {
        children: "Create Ao dApp provides a script to deploy the process from the root of the project. You can run the following command to deploy the process:"
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
              children: " myprocess:deploy"
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
