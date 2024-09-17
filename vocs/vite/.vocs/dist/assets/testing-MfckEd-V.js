import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMDXComponents } from "@mdx-js/react";
const frontmatter = {
  "title": "AO Process Testing",
  "description": "This section provides an overview of how to test AO processes."
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
    strong: "strong",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment, {
    children: [jsxs(_components.header, {
      children: [jsxs(_components.h1, {
        id: "ao-process-testing",
        children: ["AO Process Testing", jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#ao-process-testing",
          children: jsx(_components.div, {
            "data-autolink-icon": true
          })
        })]
      }), jsx(_components.div, {
        role: "doc-subtitle",
        children: "This section provides an overview of how to test AO processes."
      })]
    }), "\n", jsx(_components.p, {
      children: "In order to test AO processes, you need to have a basic understanding of the following:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "busted"
        }), " - Busted is a unit testing framework for Lua. You can learn more about Busted from the ", jsx(_components.a, {
          href: "https://lunarmodules.github.io/busted/",
          children: "official documentation"
        })]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Ao Process Testing Suite"
        }), " - AO processes are tested using the AO Testing Suite. You can learn more about the AO Testing Suite from the ", jsx(_components.a, {
          href: "https://github.com/Autonomous-Finance/ao-process-testing",
          children: "official documentation"
        })]
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "process-testing-directory-structure",
      children: ["Process Testing Directory Structure", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#process-testing-directory-structure",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "If you generate a new process using the Create Ao dApp, the directory structure of the process will look somewhat like this:"
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
            children: "process-name/             # Your process's root directory."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "├── scripts/              # Utility scripts for the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "│   ├── build.sh          # Build script for the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "│   ├── deploy.sh         # Deploy script for the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "│   └── test.sh           # Test script for the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "└── src/                  # Source code for the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "    ├── test/             # Test directory for the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "    │   ├── mocked-env    # Mocked env files to test the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "    │   ├── setup.lua     # AO Testing Suite setup file."
          })
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            children: "    │   └── process_test.lua # Test script for the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "    ├── process_lib.lua   # Library for the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "    ├── process.lua       # Entry point for the process."
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            children: "    └── reset_modules.lua # Reset preloaded modules."
          })
        })]
      })
    }), "\n", jsxs(_components.p, {
      children: ["We will now discuss the contents of the ", jsx(_components.code, {
        children: "test"
      }), " directory in detail."]
    }), "\n", jsxs(_components.h2, {
      id: "test-directory",
      children: ["Test Directory", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#test-directory",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "test"
      }), " directory contains the following files:"]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "mocked-env"
        }), " - This directory contains the mocked environment files that are used to test the process. The mocked environment files are used to mock the environment variables that are used in the process. The mocked environment files are used to test the process in different environments."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "setup.lua"
        }), " - This file is used to set up the AO Testing Suite. The setup file is used to set up the AO Testing Suite before running the tests. The setup file is used to set up the environment variables that are used in the process."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "process_test.lua"
        }), " - This file contains the actual test script and cases for the process."]
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "writing-tests",
      children: ["Writing tests", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#writing-tests",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "Now that you have a basic understanding of the directory structure of the process, let's write some tests for the process."
    }), "\n", jsxs(_components.h3, {
      id: "writing-a-test-case",
      children: ["Writing a test case", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#writing-a-test-case",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["To write a test case for the process, you need to create a new test case in the ", jsx(_components.code, {
        children: "process_test.lua"
      }), " file. The test case should be written using the Busted syntax."]
    }), "\n", jsx(_components.aside, {
      "data-callout": "tip",
      children: jsx(_components.p, {
        children: "Create Ao dApp generates a sample test case for the process. You can modify the sample test case to write your own test cases."
      })
    }), "\n", jsx(_components.pre, {
      className: "shiki shiki-themes github-light github-dark-dimmed has-focused has-highlighted",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#22272e",
        color: "#24292e",
        "--shiki-dark": "#adbac7"
      },
      tabIndex: "0",
      "data-title": "process-name/src/test/process_test.lua",
      "data-lang": "lua",
      children: jsxs(_components.code, {
        children: [jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-dark": "#768390"
            },
            children: "---"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "@diagnostic"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " disable:"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " duplicate-set-field"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "require"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: '"test.setup"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")()"
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
            children: "_G"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "IsInUnitTest"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "    ="
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " true"
          }), jsx(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-dark": "#768390"
            },
            children: " -- set this per test file to keep ao.send() from doing anything"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "_G"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "VerboseTests"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "    ="
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " 2"
          }), jsx(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-dark": "#768390"
            },
            children: "    -- how much logging to see (0 - none at all, 1 - important ones, 2 - everything)"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-dark": "#768390"
            },
            children: "-- optional logging function that allows for different verbosity levels"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "_G"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: "printVerb"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "       ="
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " function"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(level)"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    level "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " level "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "or"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " 2"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "    return"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " function"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(...) "
          }), jsx(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-dark": "#768390"
            },
            children: "-- define here as global so we can use it in application code too"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "        if"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " _G"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "VerboseTests"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " >="
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " level "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "then"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " print"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "table.unpack"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "({ "
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "..."
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " })) "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "end"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "    end"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "end"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          "data-empty-line": true,
          children: " "
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
            children: "-- Require the process library and the process file"
          })
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "local"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " process      "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " require"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "process_lib" '
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
            children: "-- Define initial state"
          })
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "_G"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Version"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "1.0.0" '
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "_G"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Balances"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " _G"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Balances"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " or"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " { ["
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: '"0x123"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "] "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " 1000"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " } "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "_G"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "TotalSupply"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " _G"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "TotalSupply"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " or"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " 1000"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "_G"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Name"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "test token" '
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
            children: "-- This function resets the global variables to their initial state"
          })
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "local"
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: " resetGlobals"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " function"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "() "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "  _G"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Version"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "1.0.0" '
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "  _G"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Balances"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " _G"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Balances"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " or"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " { ["
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: '"0x123"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "] "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " 1000"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " } "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "  _G"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "TotalSupply"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " _G"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "TotalSupply"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " or"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " 1000"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "  _G"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Name"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "test token" '
          })]
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "end"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          "data-empty-line": true,
          children: " "
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "describe"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: '"token process"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ", "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "function"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "() "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "    setup"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "function"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "() "
          })]
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-dark": "#768390"
            },
            children: "        -- Mock the sendReply function"
          })
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "        process."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: "sendReply"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " function"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(message) "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "            return"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " message "
          })]
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "        end"
          })
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "    end"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ") "
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          "data-empty-line": true,
          children: " "
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "    describe"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: '"getBalance"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ", "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "function"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "() "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "        it"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: '"should return correct Balance"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ", "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "function"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "() "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "            local"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " message "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " { "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "                From "
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
            children: ' "0x123"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ", "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "                Action "
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
            children: ' "Balance"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ", "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "                Tags "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " {} "
          })]
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "            } "
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          "data-empty-line": true,
          children: " "
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "            local"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " response "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " process."
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "getBalance"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(message) "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "            assert"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "are"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "."
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "same"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "1000"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ", response."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Balance"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ") "
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
            children: "            -- reset globals"
          })
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "            resetGlobals"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "() "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "        end"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ") "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "    end"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ") "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "end"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ") "
          })]
        })]
      })
    }), "\n", jsxs(_components.h3, {
      id: "running-the-tests",
      children: ["Running the tests", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#running-the-tests",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsxs(_components.aside, {
      "data-callout": "warning",
      children: [jsx(_components.strong, {
        "data-callout-title": true,
        children: "Busted is required"
      }), jsxs(_components.p, {
        children: ["In order to write tests for AO processes, you need to have a basic understanding of Busted. You can learn more about Busted from the ", jsx(_components.a, {
          href: "https://lunarmodules.github.io/busted/",
          children: "official documentation"
        }), "."]
      }), jsx(_components.p, {
        children: "Installing busted can be done using luarocks by running the following command:"
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
              children: "luarocks"
            }), jsx(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#96D0FF"
              },
              children: " install"
            }), jsx(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#96D0FF"
              },
              children: " busted"
            })]
          })
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["Create Ao dApp provides a test script that can be used to run the tests for the process. The test script is located in the ", jsx(_components.code, {
        children: "./ao/process-name/scripts"
      }), " directory of the process."]
    }), "\n", jsx(_components.p, {
      children: "To run the tests for the process, you need to run the test script using the following command from the project root:"
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
            children: "./scripts/test.sh"
          })]
        })
      })
    }), "\n", jsxs(_components.aside, {
      "data-callout": "tip",
      children: [jsx(_components.strong, {
        "data-callout-title": true,
        children: "Handy Tip"
      }), jsx(_components.p, {
        children: "Create Ao dApp provides a shortcut to run the tests for the process. You can run the tests for the process using the following command from the project root:"
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
              children: " myprocess:test"
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
