import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMDXComponents } from "@mdx-js/react";
const frontmatter = {
  "title": "Process Design",
  "description": "This section provides an overview of the process design and best practices for writing AO processes."
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
        id: "process-design",
        children: ["Process Design", jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#process-design",
          children: jsx(_components.div, {
            "data-autolink-icon": true
          })
        })]
      }), jsx(_components.div, {
        role: "doc-subtitle",
        children: "This section provides an overview of the process design and best practices for writing AO processes."
      })]
    }), "\n", jsx(_components.p, {
      children: "In this section, we will discuss the design principles and best practices for writing AO processes. AO processes are written in Lua, a lightweight, high-level, multi-paradigm programming language. Lua is designed to be embedded in other applications, making it an ideal choice for writing AO processes."
    }), "\n", jsx(_components.p, {
      children: "An over simplified AO token process could look like this, however, try and follow along with the code below. It's not really easy to comprehend and follow, but we will break it down and explain how things can be improved in the following sections."
    }), "\n", jsx(_components.pre, {
      className: "shiki shiki-themes github-light github-dark-dimmed",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#22272e",
        color: "#24292e",
        "--shiki-dark": "#adbac7"
      },
      tabIndex: "0",
      "data-title": "process.lua",
      "data-lang": "lua",
      children: jsxs(_components.code, {
        children: [jsxs(_components.span, {
          className: "line",
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
            children: " ao "
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
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "'ao'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          })]
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
            children: "Version "
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
            children: ' "1.0.0"'
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
            children: "-- token should be idempotent and not change previous state updates"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "Balances "
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
            children: " Balances "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "or"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " { [ao."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "id"
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
            children: " }"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "TotalSupply "
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
            children: " TotalSupply "
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
            children: " 1000"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "Name "
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
            children: ' "test token"'
          })]
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
            children: "Handlers."
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "add"
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
            children: "'info'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ", Handlers."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "utils"
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
            children: "hasMatchingTag"
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
            children: "'Action'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ", "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "'Info'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "), "
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
            children: "(msg)"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "  ao."
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "send"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "({"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    Target "
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
            children: " msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ","
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    Tags "
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
            children: " ["
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "        Name "
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
            children: " Name,"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "        TotalSuppy "
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
            children: " TotalSupply"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    ]"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "  })"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
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
            children: ")"
          })]
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
            children: "Handlers."
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "add"
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
            children: "'balance'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ", Handlers."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "utils"
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
            children: "hasMatchingTag"
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
            children: "'Action'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ", "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "'Balance'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "), "
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
            children: "(msg)"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "  local"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " bal "
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
            children: " 0"
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
            children: "  -- If not Recipient is provided, then return the Senders balance"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "  if"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " (msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Tags"
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
            children: "Recipient"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ") "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "then"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "    if"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " (Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Tags"
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
            children: "Recipient"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "]) "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "then"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "      bal "
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
            children: " Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Tags"
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
            children: "Recipient"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "]"
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
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "  elseif"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
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
            children: "then"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    bal "
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
            children: " Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "]"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "  end"
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
            children: "  ao."
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "send"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "({"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    Target "
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
            children: " msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ","
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    Tags "
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
            children: " ["
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "        Balance "
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
            children: " bal,"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "        Account "
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
            children: " msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Tags"
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
            children: "Recipient"
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
            children: " msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ","
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    ]"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    Data "
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
            children: " bal"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "  })"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
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
            children: ")"
          })]
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
            children: "Handlers."
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "add"
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
            children: "'mint'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ", Handlers."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "utils"
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
            children: "hasMatchingTag"
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
            children: "'Action'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ", "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "'Mint'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "), "
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
            children: "(msg)"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "  assert"
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
            children: "type"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ") "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "=="
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: " 'string'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ", "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "'Quantity is required!'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "  assert"
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
            children: "0"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " <"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " tonumber"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "), "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "'Quantity must be greater than zero!'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          "data-empty-line": true,
          children: " "
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "  if"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " not"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " Balances[ao."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "id"
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
            children: "then"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " Balances[ao."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "id"
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
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " end"
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
            children: "  -- Add tokens to the token pool, according to Quantity"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "  Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
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
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
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
            children: "+"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " tonumber"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "  TotalSupply "
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
            children: " TotalSupply "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "+"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " tonumber"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          })]
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
            children: "  ao."
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "send"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "({"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    Target "
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
            children: " msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ","
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    Data "
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
            children: " Colors."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "gray"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " .."
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "Successfully minted " '
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: ".."
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " Colors."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "blue"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " .."
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " .."
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " Colors."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "reset"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "  })"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
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
            children: ")"
          })]
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
            children: "Handlers."
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "add"
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
            children: "'burn'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ", Handlers."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "utils"
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
            children: "hasMatchingTag"
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
            children: "'Action'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ", "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "'Burn'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "), "
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
            children: "(msg)"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "  assert"
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
            children: "type"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ") "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "=="
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: " 'string'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ", "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "'Quantity is required!'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "  assert"
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
            children: "tonumber"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ") "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "<="
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " tonumber"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "]), "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "'Quantity must be less than or equal to the current balance!'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          })]
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
            children: "  Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
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
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
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
            children: "-"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " tonumber"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "  TotalSupply "
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
            children: " TotalSupply "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "-"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " tonumber"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          })]
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
            children: "  ao."
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "send"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "({"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    Target "
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
            children: " msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ","
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    Data "
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
            children: " Colors."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "gray"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " .."
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "Successfully burned " '
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: ".."
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " Colors."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "blue"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " .."
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " .."
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " Colors."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "reset"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "  })"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
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
            children: ")"
          })]
        })]
      })
    }), "\n", jsxs(_components.h2, {
      id: "process-design-principles",
      children: ["Process Design Principles", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#process-design-principles",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "When designing AO processes, it is essential to follow certain design principles to ensure that the processes are efficient, maintainable, and scalable. Here are some key design principles to keep in mind:"
    }), "\n", jsxs(_components.h3, {
      id: "1-modularity",
      children: ["1. Modularity", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#1-modularity",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "Modularity is the practice of breaking down a system into smaller, independent modules that can be developed, tested, and maintained separately. In the context of AO processes, it is essential to break down the process logic into smaller, reusable components that can be easily combined to create complex processes."
    }), "\n", jsxs(_components.p, {
      children: ["What we can do is to break down the process into smaller modules, such as ", jsx(_components.code, {
        children: "balance"
      }), ", ", jsx(_components.code, {
        children: "transfer"
      }), ", ", jsx(_components.code, {
        children: "mint"
      }), ", ", jsx(_components.code, {
        children: "burn"
      }), ", etc. This will make the code more organized and easier to maintain and test."]
    }), "\n", jsxs(_components.aside, {
      "data-callout": "tip",
      children: [jsx(_components.strong, {
        "data-callout-title": true,
        children: "Handy Tip"
      }), jsxs(_components.p, {
        children: ["That's why in create-ao-dapp the ", jsx(_components.code, {
          children: "process.lua"
        }), " file is broken down into ", jsx(_components.code, {
          children: "process_lib.lua"
        }), " and the entry point file only contains the ", jsx(_components.code, {
          children: "Handlers"
        }), " and the global variables."]
      })]
    }), "\n", jsxs(_components.p, {
      children: ["For displaying porposes we will only break things into ", jsx(_components.code, {
        children: "process_lib.lua"
      }), " and ", jsx(_components.code, {
        children: "process.lua"
      }), "."]
    }), "\n", jsxs(_components.div, {
      className: "code-group",
      children: [jsx(_components.div, {
        "data-title": "process.lua",
        children: jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark-dimmed has-focused has-highlighted",
          style: {
            backgroundColor: "#fff",
            "--shiki-dark-bg": "#22272e",
            color: "#24292e",
            "--shiki-dark": "#adbac7"
          },
          tabIndex: "0",
          "data-title": "process.lua",
          "data-lang": "lua",
          children: jsxs(_components.code, {
            children: [jsxs(_components.span, {
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
                children: " process_lib "
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
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "("
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: "'process_lib'"
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
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "Version "
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
                children: ' "1.0.0"'
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
                children: "-- token should be idempotent and not change previous state updates"
              })
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "Balances "
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
                children: " Balances "
              }), jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: "or"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: " { [ao."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "id"
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
                children: " }"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "TotalSupply "
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
                children: " TotalSupply "
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
                children: " 1000"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "Name "
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
                children: ' "test token"'
              })]
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
                children: "Handlers."
              }), jsx(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "add"
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
                children: "'info'"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ", "
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "    Handlers."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "utils"
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
                children: "hasMatchingTag"
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
                children: "'Action'"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ", "
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: "'Info'"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "),"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line focused highlighted",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "    process_lib."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "getInfo"
              })]
            }), "\n", jsx(_components.span, {
              className: "line",
              children: jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ")"
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
                children: "Handlers."
              }), jsx(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "add"
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
                children: "'balance'"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ", "
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "    Handlers."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "utils"
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
                children: "hasMatchingTag"
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
                children: "'Action'"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ", "
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: "'Balance'"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "),"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line focused highlighted",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "    process_lib."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "getBalance"
              })]
            }), "\n", jsx(_components.span, {
              className: "line",
              children: jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ")"
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
                children: "Handlers."
              }), jsx(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "add"
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
                children: "'mint'"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ", "
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "    Handlers."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "utils"
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
                children: "hasMatchingTag"
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
                children: "'Action'"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ", "
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: "'Mint'"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "),"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line focused highlighted",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "    process_lib."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "mint"
              })]
            }), "\n", jsx(_components.span, {
              className: "line",
              children: jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ")"
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
                children: "Handlers."
              }), jsx(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "add"
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
                children: "'burn'"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ", "
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "    Handlers."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "utils"
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
                children: "hasMatchingTag"
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
                children: "'Action'"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ", "
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: "'Burn'"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "),"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line focused highlighted",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "    process_lib."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "burn"
              })]
            }), "\n", jsx(_components.span, {
              className: "line",
              children: jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ")"
              })
            })]
          })
        })
      }), jsx(_components.div, {
        "data-title": "process_lib.lua",
        children: jsx(_components.pre, {
          className: "shiki shiki-themes github-light github-dark-dimmed",
          style: {
            backgroundColor: "#fff",
            "--shiki-dark-bg": "#22272e",
            color: "#24292e",
            "--shiki-dark": "#adbac7"
          },
          tabIndex: "0",
          "data-title": "process_lib.lua",
          "data-lang": "lua",
          children: jsxs(_components.code, {
            children: [jsxs(_components.span, {
              className: "line",
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
                children: " ao "
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
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "("
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: "'ao'"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ")"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
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
                children: " process_lib "
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
                children: " {}"
              })]
            }), "\n", jsx(_components.span, {
              className: "line",
              "data-empty-line": true,
              children: " "
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: "function"
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#DCBDFB"
                },
                children: " process_lib"
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
                children: "getInfo"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "(msg)"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "    ao."
              }), jsx(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "send"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "({"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "        Target "
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
                children: " msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "From"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ","
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "        Tags "
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
                children: " {"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "            Name "
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
                children: " Name,"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "            TotalSuppy "
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
                children: " TotalSupply"
              })]
            }), "\n", jsx(_components.span, {
              className: "line",
              children: jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "        }"
              })
            }), "\n", jsx(_components.span, {
              className: "line",
              children: jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "    })"
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
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: "function"
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#DCBDFB"
                },
                children: " process_lib"
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
                children: "getBalance"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "(msg)"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: "    local"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: " bal "
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
                children: " 0"
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
                children: "    -- If not Recipient is provided, then return the Senders balance"
              })
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: "    if"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: " (msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "Tags"
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
                children: "Recipient"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ") "
              }), jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: "then"
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
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: " (Balances[msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "Tags"
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
                children: "Recipient"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "]) "
              }), jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: "then"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "            bal "
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
                children: " Balances[msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "Tags"
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
                children: "Recipient"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "]"
              })]
            }), "\n", jsx(_components.span, {
              className: "line",
              children: jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: "        end"
              })
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: "    elseif"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: " Balances[msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "From"
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
                children: "then"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "        bal "
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
                children: " Balances[msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "From"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "]"
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
              "data-empty-line": true,
              children: " "
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "    ao."
              }), jsx(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "send"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "({"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "        Target "
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
                children: " msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "From"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ","
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "        Tags "
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
                children: " {"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "            Balance "
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
                children: " bal,"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "            Account "
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
                children: " msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "Tags"
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
                children: "Recipient"
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
                children: " msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "From"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ","
              })]
            }), "\n", jsx(_components.span, {
              className: "line",
              children: jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "        },"
              })
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "        Data "
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
                children: " bal"
              })]
            }), "\n", jsx(_components.span, {
              className: "line",
              children: jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "    })"
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
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: "function"
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#DCBDFB"
                },
                children: " process_lib"
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
                children: "mint"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "(msg)"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "    assert"
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
                children: "type"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "(msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "Quantity"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ") "
              }), jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: "=="
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: " 'string'"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ", "
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: "'Quantity is required!'"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ")"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "    assert"
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
                children: "0"
              }), jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: " <"
              }), jsx(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#6CB6FF"
                },
                children: " tonumber"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "(msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "Quantity"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "), "
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: "'Quantity must be greater than zero!'"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ")"
              })]
            }), "\n", jsx(_components.span, {
              className: "line",
              "data-empty-line": true,
              children: " "
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: "    if"
              }), jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: " not"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: " Balances[ao."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "id"
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
                children: "then"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: " Balances[ao."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "id"
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
                children: " 0"
              }), jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: " end"
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
                children: "    -- Add tokens to the token pool, according to Quantity"
              })
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "    Balances[msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "From"
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
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: " Balances[msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "From"
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
                children: "+"
              }), jsx(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#6CB6FF"
                },
                children: " tonumber"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "(msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "Quantity"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ")"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "    TotalSupply "
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
                children: " TotalSupply "
              }), jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: "+"
              }), jsx(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#6CB6FF"
                },
                children: " tonumber"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "(msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "Quantity"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ")"
              })]
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
                children: "    ao."
              }), jsx(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "send"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "({"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "        Target "
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
                children: " msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "From"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ","
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "        Data "
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
                children: " Colors."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "gray"
              }), jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: " .."
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: ' "Successfully minted " '
              }), jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: ".."
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: " Colors."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "blue"
              }), jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: " .."
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: " msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "Quantity"
              }), jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: " .."
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: " Colors."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "reset"
              })]
            }), "\n", jsx(_components.span, {
              className: "line",
              children: jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "    })"
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
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: "function"
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#DCBDFB"
                },
                children: " process_lib"
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
                children: "burn"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "(msg)"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "    assert"
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
                children: "type"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "(msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "Quantity"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ") "
              }), jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: "=="
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: " 'string'"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ", "
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: "'Quantity is required!'"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ")"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "    assert"
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
                children: "tonumber"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "(msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "Quantity"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ") "
              }), jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: "<="
              }), jsx(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#6CB6FF"
                },
                children: " tonumber"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "(Balances[msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "From"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "]), "
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: "'Quantity must be less than or equal to the current balance!'"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ")"
              })]
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
                children: "    Balances[msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "From"
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
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: " Balances[msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "From"
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
                children: "-"
              }), jsx(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#6CB6FF"
                },
                children: " tonumber"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "(msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "Quantity"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ")"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "    TotalSupply "
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
                children: " TotalSupply "
              }), jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: "-"
              }), jsx(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#6CB6FF"
                },
                children: " tonumber"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "(msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "Quantity"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ")"
              })]
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
                children: "    ao."
              }), jsx(_components.span, {
                style: {
                  color: "#005CC5",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "send"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "({"
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "        Target "
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
                children: " msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "From"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: ","
              })]
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "        Data "
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
                children: " Colors."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "gray"
              }), jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: " .."
              }), jsx(_components.span, {
                style: {
                  color: "#032F62",
                  "--shiki-dark": "#96D0FF"
                },
                children: ' "Successfully burned " '
              }), jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: ".."
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: " Colors."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "blue"
              }), jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: " .."
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: " msg."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "Quantity"
              }), jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: " .."
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: " Colors."
              }), jsx(_components.span, {
                style: {
                  color: "#6F42C1",
                  "--shiki-dark": "#6CB6FF"
                },
                children: "reset"
              })]
            }), "\n", jsx(_components.span, {
              className: "line",
              children: jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: "    })"
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
            }), "\n", jsxs(_components.span, {
              className: "line",
              children: [jsx(_components.span, {
                style: {
                  color: "#D73A49",
                  "--shiki-dark": "#F47067"
                },
                children: "return"
              }), jsx(_components.span, {
                style: {
                  color: "#24292E",
                  "--shiki-dark": "#ADBAC7"
                },
                children: " process_lib"
              })]
            })]
          })
        })
      })]
    }), "\n", jsxs(_components.h3, {
      id: "2-separation-of-concerns",
      children: ["2. Separation of Concerns", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#2-separation-of-concerns",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "Separation of concerns is the practice of dividing a system into distinct sections, each responsible for a specific aspect of the system's functionality. In the context of AO processes, it is essential to separate the process logic from other concerns, such as input/output handling, error handling, and logging. This makes the code more organized and easier to maintain, test, and debug."
    }), "\n", jsx(_components.p, {
      children: "Continuing with the previous example, we can separate the process logic from the input/output handling by creating separate function to handle replying things to the user."
    }), "\n", jsxs(_components.aside, {
      "data-callout": "tip",
      children: [jsx(_components.strong, {
        "data-callout-title": true,
        children: "Handy Tip"
      }), jsxs(_components.p, {
        children: ["To enable testing and also having a better flow to respond to user messages and sending replies, we can create a ", jsx(_components.code, {
          children: "sendReply"
        }), " function that will handle the sending of messages to the user."]
      })]
    }), "\n", jsx(_components.pre, {
      className: "shiki shiki-themes github-light github-dark-dimmed has-focused has-highlighted",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#22272e",
        color: "#24292e",
        "--shiki-dark": "#adbac7"
      },
      tabIndex: "0",
      "data-title": "process_lib.lua",
      "data-lang": "lua",
      children: jsxs(_components.code, {
        children: [jsxs(_components.span, {
          className: "line",
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
            children: " ao "
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
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "("
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "'ao'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
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
            children: " process_lib "
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
            children: " {}"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          "data-empty-line": true,
          children: " "
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "function"
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: " process_lib"
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
            children: "getInfo"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg)"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    process_lib."
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "sendReply"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg, { "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "        Name "
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
            children: " Name, "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "        TotalSuppy "
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
            children: " TotalSupply "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    }, "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: '""'
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
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "    return"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " {"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "        Name "
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
            children: " Name,"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "        TotalSuppy "
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
            children: " TotalSupply"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    }"
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
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "function"
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: " process_lib"
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
            children: "getBalance"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg)"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "    local"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " bal "
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
            children: " 0"
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
            children: "    -- If not Recipient is provided, then return the Senders balance"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "    if"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " (msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Tags"
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
            children: "Recipient"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ") "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "then"
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
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " (Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Tags"
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
            children: "Recipient"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "]) "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "then"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "            bal "
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
            children: " Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Tags"
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
            children: "Recipient"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "]"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "        end"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "    elseif"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
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
            children: "then"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "        bal "
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
            children: " Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "]"
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
          "data-empty-line": true,
          children: " "
        }), "\n", jsxs(_components.span, {
          className: "line highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    process_lib."
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "sendReply"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg, { "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "        Balance "
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
            children: " bal, "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "        Account "
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
            children: " msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Tags"
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
            children: "Recipient"
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
            children: " msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ", "
          })]
        }), "\n", jsx(_components.span, {
          className: "line highlighted",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    }, bal) "
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          "data-empty-line": true,
          children: " "
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
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " {"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "        Balance "
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
            children: " bal,"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "        Account "
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
            children: " msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Tags"
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
            children: "Recipient"
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
            children: " msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    }"
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
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "function"
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: " process_lib"
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
            children: "mint"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg)"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "    assert"
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
            children: "type"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ") "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "=="
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: " 'string'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ", "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "'Quantity is required!'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "    assert"
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
            children: "0"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " <"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " tonumber"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "), "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "'Quantity must be greater than zero!'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          "data-empty-line": true,
          children: " "
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "    if"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " not"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " Balances[ao."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "id"
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
            children: "then"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " Balances[ao."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "id"
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
            children: " 0"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " end"
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
            children: "    -- Add tokens to the token pool, according to Quantity"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
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
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
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
            children: "+"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " tonumber"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    TotalSupply "
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
            children: " TotalSupply "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "+"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " tonumber"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          "data-empty-line": true,
          children: " "
        }), "\n", jsxs(_components.span, {
          className: "line highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    process_lib."
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "sendReply"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg, {}, Colors."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "gray"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " .."
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "Successfully minted " '
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: ".."
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " Colors."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "blue"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " .."
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " .."
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " Colors."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "reset"
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
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "    return"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " {"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "        Balance "
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
            children: " Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "],"
          })]
        }), "\n", jsx(_components.span, {
          className: "line highlighted",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    } "
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
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "function"
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: " process_lib"
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
            children: "burn"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg)"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "    assert"
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
            children: "type"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ") "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "=="
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: " 'string'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ", "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "'Quantity is required!'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "    assert"
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
            children: "tonumber"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ") "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "<="
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " tonumber"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "]), "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: "'Quantity must be less than or equal to the current balance!'"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          })]
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
            children: "    Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
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
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
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
            children: "-"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " tonumber"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    TotalSupply "
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
            children: " TotalSupply "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "-"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " tonumber"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          "data-empty-line": true,
          children: " "
        }), "\n", jsxs(_components.span, {
          className: "line highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    process_lib."
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "sendReply"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg, {}, Colors."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "gray"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " .."
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "Successfully burned " '
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: ".."
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " Colors."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "blue"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " .."
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Quantity"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " .."
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " Colors."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "reset"
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
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "    return"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " {"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "        Balance "
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
            children: " Balances[msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "],"
          })]
        }), "\n", jsx(_components.span, {
          className: "line highlighted",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    } "
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
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "function"
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: " process_lib"
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
            children: "sendReply"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(msg, tags, data) "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    ao."
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "send"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "({ "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "        Target "
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
            children: " msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "From"
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
            children: "        ["
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: '"Response-For"'
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
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " msg."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "Action"
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
            children: "        Tags "
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
            children: " tags, "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "        Data "
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
            children: " data "
          })]
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "    }) "
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
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "return"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " process_lib"
          })]
        })]
      })
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.code, {
        children: "sendReply"
      }), " is basically just a wrapper around the ", jsx(_components.code, {
        children: "ao.send"
      }), " function, but it makes the code more readable and easier to maintain. It also allows us to easily test the process logic without having to worry about the input/output handling."]
    }), "\n", jsxs(_components.aside, {
      "data-callout": "tip",
      children: [jsx(_components.strong, {
        "data-callout-title": true,
        children: "Handy Tip"
      }), jsxs(_components.p, {
        children: ["It also introduces a new tag ", jsx(_components.code, {
          children: '["Response-For"]'
        }), " which will be used to identify the action that the response is for. This will help in identifying the action that the response is for in the frontend."]
      })]
    }), "\n", jsxs(_components.p, {
      children: ["In the next section, we will introduce ", jsx(_components.a, {
        href: "https://github.com/Autonomous-Finance/ao-process-testing",
        children: "Ao Process Testing"
      }), " and discuss how to write unit tests for AO processes to ensure that they are working as expected."]
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
