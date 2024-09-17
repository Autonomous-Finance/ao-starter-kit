import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useMDXComponents } from "@mdx-js/react";
const frontmatter = {
  "title": "Permaweb Deployment",
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
        id: "permaweb-deployment",
        children: ["Permaweb Deployment", jsx(_components.a, {
          "aria-hidden": "true",
          tabIndex: "-1",
          href: "#permaweb-deployment",
          children: jsx(_components.div, {
            "data-autolink-icon": true
          })
        })]
      })
    }), "\n", jsx(_components.p, {
      children: "The frontend is a Vite React application. It is a single-page application (SPA) that provides a user interface for the backend services."
    }), "\n", jsx(_components.p, {
      children: "Deploying the frontend to the Permaweb requires the following steps:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "Own a arns domain."
      }), "\n", jsx(_components.li, {
        children: "Have a wallet with enough AR to deploy the frontend."
      }), "\n", jsx(_components.li, {
        children: "Have a funded ArDrive account to deploy the frontend."
      }), "\n"]
    }), "\n", jsxs(_components.h2, {
      id: "arns-domain",
      children: ["arNS Domain", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#arns-domain",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["You can purchase an arNS domain from the ", jsx(_components.a, {
        href: "https://arns.app/",
        children: "arns website"
      }), "."]
    }), "\n", jsxs(_components.h2, {
      id: "ardrive-account",
      children: ["ArDrive Account", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#ardrive-account",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsxs(_components.p, {
      children: ["You can learn more about how to create an ArDrive account from the ", jsx(_components.a, {
        href: "https://docs.ardrive.io/",
        children: "ArDrive documentation"
      }), "."]
    }), "\n", jsxs(_components.h2, {
      id: "deploying-the-frontend",
      children: ["Deploying the Frontend", jsx(_components.a, {
        "aria-hidden": "true",
        tabIndex: "-1",
        href: "#deploying-the-frontend",
        children: jsx(_components.div, {
          "data-autolink-icon": true
        })
      })]
    }), "\n", jsx(_components.p, {
      children: "After building your static frontend, you can deploy it to permaweb by using the provided deploy script."
    }), "\n", jsxs(_components.p, {
      children: ["Learn more about deploying to the Permaweb from the ", jsx(_components.a, {
        href: "https://docs.ardrive.io/docs/misc/deploy/deploy.html",
        children: "ArDrive documentation"
      }), "."]
    }), "\n", jsxs(_components.p, {
      children: ["Also, you can learn more about Permaweb deploy here: ", jsx(_components.a, {
        href: "https://github.com/permaweb/permaweb-deploy",
        children: "https://github.com/permaweb/permaweb-deploy"
      })]
    }), "\n", jsx(_components.p, {
      children: "In order to deploy the frontend to the Permaweb, you need to provide the following environment variables:"
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "DEPLOY_KEY"
        }), ": The key to deploy the frontend. This is the wallet key that owns the arNS domain and has enough AR."]
      }), "\n"]
    }), "\n", jsxs(_components.aside, {
      "data-callout": "warning",
      children: [jsx(_components.p, {
        children: "Make sure your DEPLOY_KEY contains the wallet encrypted in base64 format."
      }), jsx(_components.pre, {
        className: "shiki shiki-themes github-light github-dark-dimmed",
        style: {
          backgroundColor: "#fff",
          "--shiki-dark-bg": "#22272e",
          color: "#24292e",
          "--shiki-dark": "#adbac7"
        },
        tabIndex: "0",
        children: jsx(_components.code, {
          children: jsxs(_components.span, {
            className: "line",
            children: [jsx(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#F69D50"
              },
              children: "base64"
            }), jsx(_components.span, {
              style: {
                color: "#005CC5",
                "--shiki-dark": "#6CB6FF"
              },
              children: " -i"
            }), jsx(_components.span, {
              style: {
                color: "#032F62",
                "--shiki-dark": "#96D0FF"
              },
              children: " wallet.json"
            }), jsx(_components.span, {
              style: {
                color: "#D73A49",
                "--shiki-dark": "#F47067"
              },
              children: " |"
            }), jsx(_components.span, {
              style: {
                color: "#6F42C1",
                "--shiki-dark": "#F69D50"
              },
              children: " pbcopy"
            })]
          })
        })
      })]
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "ANT_PROCESS"
        }), ": The ANT process that the frontend will connect to (This is provided by the arNS domain)."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.code, {
          children: "UNDERNAME"
        }), ": The undername of the arNS domain that the frontend will be deployed to."]
      }), "\n"]
    }), "\n", jsx(_components.p, {
      children: "To deploy the frontend to the Permaweb, you need to run the following command:"
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
            children: " frontend:deploy"
          })]
        })
      })
    }), "\n", jsx(_components.p, {
      children: "You can now access the frontend using the arNS domain that you own."
    }), "\n", jsxs(_components.aside, {
      "data-callout": "tip",
      children: [jsx(_components.strong, {
        "data-callout-title": true,
        children: "Handy Tip"
      }), jsx(_components.p, {
        children: "You can use undernames of your arNS domain to deploy multiple environments of the frontend."
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
