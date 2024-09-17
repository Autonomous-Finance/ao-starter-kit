import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMDXComponents } from "@mdx-js/react";
const frontmatter = {
  "title": "Connecting to Backend",
  "description": "In this section, we will learn how to connect the frontend to the backend processes."
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
    children: [jsxs(_components.header, {
      children: [jsxs(_components.h1, {
        id: "connecting-to-backend",
        children: ["Connecting to Backend", jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#connecting-to-backend",
          children: jsx(_components.div, {
            "data-autolink-icon": true
          })
        })]
      }), jsx(_components.div, {
        role: "doc-subtitle",
        children: "In this section, we will learn how to connect the frontend to the backend processes."
      })]
    }), "\n", jsxs(_components.h2, {
      id: "arweave-wallet-kit",
      children: ["Arweave Wallet Kit", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#arweave-wallet-kit",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: jsx(_components.a, {
          href: "https://github.com/labscommunity/arweave-wallet-kit",
          children: "Arweave Wallet Kit"
        })
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "React Hooks and Components for better interaction with Arweave wallets. Modular, can support any Arweave-based wallet."
    }), "\n", jsx(_components.p, {
      children: "By default, Create Ao dApp comes with Arweave Wallet Kit pre-installed. You can use it to interact with Arweave wallets in your frontend."
    }), "\n", jsxs(_components.p, {
      children: ["Configuration of the Arweave Wallet Kit is present in ", jsx(_components.code, {
        children: "apps/frontend/src/main.tsx"
      }), ". You can modify the configuration as per your requirements."]
    }), "\n", jsx(_components.pre, {
      className: "shiki shiki-themes github-light github-dark-dimmed has-focused has-highlighted",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#22272e",
        color: "#24292e",
        "--shiki-dark": "#adbac7"
      },
      tabIndex: "0",
      "data-title": "apps/frontend/src/main.tsx",
      "data-lang": "tsx",
      children: jsxs(_components.code, {
        children: [jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "import"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " { QueryClient, QueryClientProvider } "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "from"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "@tanstack/react-query"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "import"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " { ArweaveWalletKit } "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "from"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "arweave-wallet-kit"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "; "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "import"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " React "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "from"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "react"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "import"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " ReactDOM "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "from"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "react-dom/client"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "import"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " App "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "from"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "./App.tsx"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "import"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "./index.css"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ";"
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
            children: "// Create a React Query client "
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "const"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " queryClient"
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
            children: " new"
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: " QueryClient"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "();"
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
            children: "// biome-ignore lint/style/noNonNullAssertion: <explanation>"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "ReactDOM."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: "createRoot"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(document."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: "getElementById"
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
            children: '"root"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "!"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: "render"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "("
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "	<"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#8DDB8C"
            },
            children: "React.StrictMode"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ">"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "		<"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#8DDB8C"
            },
            children: "ArweaveWalletKit"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "			config"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#F47067"
            },
            children: "{"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "{"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "				permissions: ["
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: '"SIGN_TRANSACTION"'
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
            children: '"ACCESS_ADDRESS"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "], "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "				ensurePermissions: "
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "true"
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
            children: "			}"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#F47067"
            },
            children: "}"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "			theme"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#F47067"
            },
            children: "{"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "{ "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "				displayTheme: "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: '"light"'
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
            children: "			}"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#F47067"
            },
            children: "}"
          })]
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "		>"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "			<"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#8DDB8C"
            },
            children: "QueryClientProvider"
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: " client"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#F47067"
            },
            children: "{"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "queryClient"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#F47067"
            },
            children: "}"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ">"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "				<"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#8DDB8C"
            },
            children: "App"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " />"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "			</"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#8DDB8C"
            },
            children: "QueryClientProvider"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ">"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "		</"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#8DDB8C"
            },
            children: "ArweaveWalletKit"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ">"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "	</"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#8DDB8C"
            },
            children: "React.StrictMode"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ">,"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ");"
          })
        })]
      })
    }), "\n", jsxs(_components.h2, {
      id: "tanstack-query",
      children: ["TanStack Query", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#tanstack-query",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: [jsx(_components.a, {
        href: "https://tanstack.com/query/latest",
        children: "TanStack Query"
      }), " is a powerful and flexible data fetching library for React. It is highly recommended to use TanStack Query for data fetching in your frontend. This will enable caching, pagination, and other features out of the box."]
    }), "\n", jsx(_components.p, {
      children: "By default, Create Ao dApp comes with TanStack Query pre-installed. You can use it to fetch data from the backend processes."
    }), "\n", jsxs(_components.p, {
      children: ["Configuration of the QueryClient is present in ", jsx(_components.code, {
        children: "apps/frontend/src/main.tsx"
      }), ". You can modify the configuration as per your requirements."]
    }), "\n", jsx(_components.pre, {
      className: "shiki shiki-themes github-light github-dark-dimmed has-focused has-highlighted",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#22272e",
        color: "#24292e",
        "--shiki-dark": "#adbac7"
      },
      tabIndex: "0",
      "data-title": "apps/frontend/src/main.tsx",
      "data-lang": "tsx",
      children: jsxs(_components.code, {
        children: [jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "import"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " { QueryClient, QueryClientProvider } "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "from"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "@tanstack/react-query"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "; "
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "import"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " { ArweaveWalletKit } "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "from"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "arweave-wallet-kit"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "import"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " React "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "from"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "react"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "import"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " ReactDOM "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "from"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "react-dom/client"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "import"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " App "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "from"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "./App.tsx"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "import"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "./index.css"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ";"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          "data-empty-line": true,
          children: " "
        }), "\n", jsx(_components.span, {
          className: "line focused highlighted",
          children: jsx(_components.span, {
            style: {
              color: "#6A737D",
              "--shiki-dark": "#768390"
            },
            children: "// Create a React Query client"
          })
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "const"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " queryClient"
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
            children: " new"
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: " QueryClient"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(); "
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
            children: "// biome-ignore lint/style/noNonNullAssertion: <explanation>"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "ReactDOM."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: "createRoot"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(document."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: "getElementById"
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
            children: '"root"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "!"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ")."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: "render"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "("
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "	<"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#8DDB8C"
            },
            children: "React.StrictMode"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ">"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "		<"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#8DDB8C"
            },
            children: "ArweaveWalletKit"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "			config"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#F47067"
            },
            children: "{"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "{"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "				permissions: ["
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: '"SIGN_TRANSACTION"'
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
            children: '"ACCESS_ADDRESS"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "],"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "				ensurePermissions: "
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "true"
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
            children: "			}"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#F47067"
            },
            children: "}"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: "			theme"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#F47067"
            },
            children: "{"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "{"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "				displayTheme: "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: '"light"'
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
            children: "			}"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#F47067"
            },
            children: "}"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "		>"
          })
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "			<"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#8DDB8C"
            },
            children: "QueryClientProvider"
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#6CB6FF"
            },
            children: " client"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#F47067"
            },
            children: "{"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "queryClient"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#F47067"
            },
            children: "}"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ">"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "				<"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#8DDB8C"
            },
            children: "App"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " />"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line focused highlighted",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "			</"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#8DDB8C"
            },
            children: "QueryClientProvider"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ">"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "		</"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#8DDB8C"
            },
            children: "ArweaveWalletKit"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ">"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "	</"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#8DDB8C"
            },
            children: "React.StrictMode"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ">,"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ");"
          })
        })]
      })
    }), "\n", jsxs(_components.h2, {
      id: "interacting-with-backend-processes",
      children: ["Interacting with Backend Processes", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#interacting-with-backend-processes",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsxs(_components.aside, {
      "data-callout": "tip",
      children: [jsx(_components.strong, {
        "data-callout-title": true,
        children: "Handy Tip"
      }), jsxs(_components.p, {
        children: ["The backend processes are injected into the frontend as constants. You can access these processes in the frontend by importing them from the ", jsx(_components.code, {
          children: "constants"
        }), " directory."]
      })]
    }), "\n", jsxs(_components.p, {
      children: ["By default the Create Ao dApp comes with a sample ", jsx(_components.code, {
        children: "counter"
      }), " component that demonstrates how to use the backend process in the frontend. You can use this as a reference to build your own components."]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["The backend process address is present in ", jsx(_components.code, {
            children: "apps/frontend/src/constants/counter_process.ts"
          }), ". You can import this process in your components and use it as per your requirements."]
        }), "\n"]
      }), "\n", jsxs(_components.li, {
        children: ["\n", jsxs(_components.p, {
          children: ["The counter component is present in ", jsx(_components.code, {
            children: "apps/frontend/src/components/counter.tsx"
          }), ". You can check out this component to understand how to use the backend process in the frontend."]
        }), "\n"]
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "reading-data-from-backend-process",
      children: ["Reading Data from Backend Process", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#reading-data-from-backend-process",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: ["It imports the backend process from the ", jsx(_components.code, {
          children: "constants"
        }), " directory."]
      }), "\n", jsxs(_components.li, {
        children: ["It uses the ", jsx(_components.code, {
          children: "useQuery"
        }), " hook from TanStack Query to fetch the counter value from the backend process."]
      }), "\n"]
    }), "\n", jsx(_components.pre, {
      className: "shiki shiki-themes github-light github-dark-dimmed",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#22272e",
        color: "#24292e",
        "--shiki-dark": "#adbac7"
      },
      tabIndex: "0",
      "data-title": "apps/frontend/src/components/counter.tsx",
      "data-lang": "tsx",
      children: jsxs(_components.code, {
        children: [jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "import"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " { COUNTER } "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "from"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "../constants/counter_process"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ";"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "import"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " { useMutation, useQuery, useQueryClient } "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "from"
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: ' "@tanstack/react-query"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ";"
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
            children: "const"
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
              color: "#E36209",
              "--shiki-dark": "#F69D50"
            },
            children: "		data"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ": "
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "counter"
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
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "		error"
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
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "		isLoading"
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
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "		isFetching"
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
            children: "	} "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "="
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: " useQuery"
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
            children: "		queryKey: ["
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: '"counter"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "],"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: "		queryFn"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ": "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "async"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " () "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "=>"
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
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "			const"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " dryrunResult"
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
            children: " await"
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: " dryrun"
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
            children: "				process: "
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "COUNTER"
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
            children: "				tags: ["
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "					{"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "						name: "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: '"Action"'
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
            children: "						value: "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: '"Info"'
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
            children: "					},"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "				],"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "			});"
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
            children: "			if"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " (dryrunResult.Messages["
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "0"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "].Data) {"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "				return"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " JSON"
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
            children: "parse"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(dryrunResult.Messages["
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "0"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "].Data);"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "			}"
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
            children: "			return"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " undefined"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ";"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "		},"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "	});"
          })
        })]
      })
    }), "\n", jsxs(_components.p, {
      children: ["Using react-query hooks, you can fetch data from the backend processes and update the UI based on the fetched data. The ", jsx(_components.code, {
        children: "queryFn"
      }), " function is calling the ", jsx(_components.code, {
        children: "dryrun"
      }), " function from the ", jsx(_components.code, {
        children: "@permaweb/aoconnect"
      }), " library to fetch the counter value from the backend process and then returns the counter value."]
    }), "\n", jsxs(_components.aside, {
      "data-callout": "tip",
      children: [jsx(_components.strong, {
        "data-callout-title": true,
        children: "Handy Tip"
      }), jsx(_components.p, {
        children: "Some cool features of TanStack Query:"
      }), jsxs(_components.ul, {
        children: ["\n", jsxs(_components.li, {
          children: [jsx(_components.strong, {
            children: "Caching"
          }), ": Automatically cache data and keep it up to date."]
        }), "\n", jsxs(_components.li, {
          children: [jsx(_components.strong, {
            children: "isLoading"
          }), ": A boolean that is ", jsx(_components.code, {
            children: "true"
          }), " when the query is in a loading state."]
        }), "\n", jsxs(_components.li, {
          children: [jsx(_components.strong, {
            children: "isFetching"
          }), ": A boolean that is ", jsx(_components.code, {
            children: "true"
          }), " when the query is fetching data."]
        }), "\n", jsxs(_components.li, {
          children: [jsx(_components.strong, {
            children: "error"
          }), ": An error object if the query failed."]
        }), "\n"]
      })]
    }), "\n", jsxs(_components.h2, {
      id: "sending-data-to-backend-process",
      children: ["Sending Data to Backend Process", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#sending-data-to-backend-process",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["You can always send messages using ", jsx(_components.code, {
        children: "useMutation"
      }), " hook provided by TanStack Query. The ", jsx(_components.code, {
        children: "useMutation"
      }), " hook is used to send messages to the backend processes. You can use this hook to send messages to the backend processes and update the UI based on the response."]
    }), "\n", jsxs(_components.p, {
      children: ["An example is the Increase button in the ", jsx(_components.code, {
        children: "counter"
      }), " component. When the Increase button is clicked, it sends a message to the backend process to increase the counter value."]
    }), "\n", jsx(_components.pre, {
      className: "shiki shiki-themes github-light github-dark-dimmed",
      style: {
        backgroundColor: "#fff",
        "--shiki-dark-bg": "#22272e",
        color: "#24292e",
        "--shiki-dark": "#adbac7"
      },
      tabIndex: "0",
      "data-title": "apps/frontend/src/components/counter.tsx",
      "data-lang": "tsx",
      children: jsxs(_components.code, {
        children: [jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "const"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " increaseCounter"
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: " ="
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: " useMutation"
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
            children: "		mutationKey: ["
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: '"IncreaseCounter"'
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "],"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: "		mutationFn"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ": "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "async"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " () "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "=>"
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
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "			const"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " messageId"
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
            children: " await"
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: " message"
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
            children: "				process: "
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "COUNTER"
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
            children: "				tags: ["
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "					{"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "						name: "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: '"Action"'
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
            children: "						value: "
          }), jsx(_components.span, {
            style: {
              color: "#032F62",
              "--shiki-dark": "#96D0FF"
            },
            children: '"IncreaseCounter"'
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
            children: "					},"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "				],"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "				data: "
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
            children: ","
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "				signer: "
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: "createDataItemSigner"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(window.arweaveWallet),"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "			});"
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
            children: "			const"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " messageResult"
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
            children: " await"
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: " result"
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
            children: "				process: "
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "COUNTER"
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
            children: "				message: messageId,"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "			});"
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
            children: "			if"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: " (messageResult.Messages["
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "0"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "].Data) {"
          })]
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "				return"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " JSON"
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
            children: "parse"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "(messageResult.Messages["
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: "0"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "].Data);"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "			}"
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
            children: "			return"
          }), jsx(_components.span, {
            style: {
              color: "#005CC5",
              "--shiki-dark": "#6CB6FF"
            },
            children: " undefined"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ";"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "		},"
          })
        }), "\n", jsxs(_components.span, {
          className: "line",
          children: [jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: "		onSuccess"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: ": () "
          }), jsx(_components.span, {
            style: {
              color: "#D73A49",
              "--shiki-dark": "#F47067"
            },
            children: "=>"
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
            children: "			queryClient."
          }), jsx(_components.span, {
            style: {
              color: "#6F42C1",
              "--shiki-dark": "#DCBDFB"
            },
            children: "invalidateQueries"
          }), jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "();"
          })]
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "		},"
          })
        }), "\n", jsx(_components.span, {
          className: "line",
          children: jsx(_components.span, {
            style: {
              color: "#24292E",
              "--shiki-dark": "#ADBAC7"
            },
            children: "	});"
          })
        })]
      })
    }), "\n", jsxs(_components.p, {
      children: ["The ", jsx(_components.code, {
        children: "mutationFn"
      }), " function is calling the ", jsx(_components.code, {
        children: "message"
      }), " function from the ", jsx(_components.code, {
        children: "@permaweb/aoconnect"
      }), " library to send a message to the backend process to increase the counter value. The ", jsx(_components.code, {
        children: "onSuccess"
      }), " function is used to invalidate the query cache so that the UI can be updated with the new counter value."]
    }), "\n", jsxs(_components.aside, {
      "data-callout": "tip",
      children: [jsx(_components.strong, {
        "data-callout-title": true,
        children: "Handy Tip"
      }), jsx(_components.p, {
        children: "Some cool features of TanStack Query:"
      }), jsxs(_components.ul, {
        children: ["\n", jsxs(_components.li, {
          children: [jsx(_components.strong, {
            children: "mutationFn"
          }), ": A function that sends a message to the backend process."]
        }), "\n", jsxs(_components.li, {
          children: [jsx(_components.strong, {
            children: "onSuccess"
          }), ": A function that is called when the mutation is successful."]
        }), "\n", jsxs(_components.li, {
          children: [jsx(_components.strong, {
            children: "invalidateQueries"
          }), ": A function that invalidates the query cache and re-fetches the data."]
        }), "\n"]
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
