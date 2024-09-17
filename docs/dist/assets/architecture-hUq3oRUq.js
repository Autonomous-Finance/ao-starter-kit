import{a8 as r,j as e}from"./vendor-BILq7OoT.js";const c={title:"Developing AO Processes",description:"This section provides an overview of the architecture of AO processes and how they are developed."};function i(n){const s={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...r(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsxs(s.header,{children:[e.jsxs(s.h1,{id:"developing-ao-processes",children:["Developing AO Processes",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#developing-ao-processes",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),e.jsx(s.div,{role:"doc-subtitle",children:"This section provides an overview of the architecture of AO processes and how they are developed."})]}),`
`,e.jsx(s.p,{children:"In order to develop AO processes and start using Create Ao dApp, you need to have a basic understanding of the following:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Lua programming language"})," - AO processes are written in Lua. If you are not familiar with Lua, you can learn the basics from the ",e.jsx(s.a,{href:"https://www.lua.org/manual/5.1/",children:"official Lua documentation"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ao + aos"})," - AO processes are executed by the AO. You need to have a basic understanding of how to use the ",e.jsx(s.code,{children:"ao"}),". You can learn more about ",e.jsx(s.code,{children:"ao"})," from the ",e.jsx(s.a,{href:"https://cookbook_ao.g8way.io/welcome/index.html",children:"official documentation"})]}),`
`]}),`
`,e.jsxs(s.h2,{id:"process-directory-structure",children:["Process Directory Structure",e.jsx(s.a,{"aria-hidden":"true",tabIndex:"-1",href:"#process-directory-structure",children:e.jsx(s.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(s.p,{children:"A recommended project structure for developing AO processes is as follows:"}),`
`,e.jsx(s.pre,{className:"shiki shiki-themes github-light github-dark-dimmed has-focused has-highlighted",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsxs(s.code,{children:[e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:"project-name/             # Your project's root directory."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:"├── ao/                   # The root directory of your ao processes."})}),`
`,e.jsx(s.span,{className:"line focused highlighted",children:e.jsx(s.span,{children:"│   └── process-name/          # Process Directory."})}),`
`,e.jsx(s.span,{className:"line focused highlighted",children:e.jsx(s.span,{children:"│       ├── scripts/           # Utility scripts for the process."})}),`
`,e.jsx(s.span,{className:"line focused highlighted",children:e.jsx(s.span,{children:"|       |   ├── build.sh       # Build script for the process."})}),`
`,e.jsx(s.span,{className:"line focused highlighted",children:e.jsx(s.span,{children:"│       │   ├── deploy.sh      # Deploy script for the process."})}),`
`,e.jsx(s.span,{className:"line focused highlighted",children:e.jsx(s.span,{children:"|       |   └── test.sh        # Test script for the process."})}),`
`,e.jsx(s.span,{className:"line focused highlighted",children:e.jsx(s.span,{children:"│       ├── src/               # Source code for the process."})}),`
`,e.jsx(s.span,{className:"line focused highlighted",children:e.jsx(s.span,{children:"│       │   ├── test/                   # Entry point for the process."})}),`
`,e.jsx(s.span,{className:"line focused highlighted",children:e.jsx(s.span,{children:"│       │   │   ├── mocked-env          # Mocked env files to test the process."})}),`
`,e.jsx(s.span,{className:"line focused highlighted",children:e.jsx(s.span,{children:"|       |   |   ├── setup.lua           # AO Testing Suite setup file."})}),`
`,e.jsx(s.span,{className:"line focused highlighted",children:e.jsx(s.span,{children:"│       │   │   └── process_test.lua    # Test script for the process."})}),`
`,e.jsx(s.span,{className:"line focused highlighted",children:e.jsx(s.span,{children:"│       |   ├── process_lib.lua         # Library for the process."})}),`
`,e.jsx(s.span,{className:"line focused highlighted",children:e.jsx(s.span,{children:"│       |   ├── process.lua             # Entry point for the process."})}),`
`,e.jsx(s.span,{className:"line focused highlighted",children:e.jsx(s.span,{children:"│       │   └── reset_modules.lua       # Reset preloaded modules"})}),`
`,e.jsx(s.span,{className:"line focused highlighted",children:e.jsx(s.span,{children:"│       ├── aoform.yaml        # Configuration for ao-form deployment."})}),`
`,e.jsx(s.span,{className:"line focused highlighted",children:e.jsx(s.span,{children:"│       └── squishy            # Squishy configuration for build."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:"├── apps/             # The root directory of your frontend applications."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:"│   └── frontend/     # React Vite App connected to ao process."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:"├── utils             # Directory for utility functions."})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:"│   └── inject-process.ts # Script to inject process Ids from ao to frontend "})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:"├── node_modules/"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:"├── .gitignore"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:"├── package.json"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:"├── README.md"})}),`
`,e.jsx(s.span,{className:"line",children:e.jsx(s.span,{children:"└── tsconfig.json"})})]})}),`
`,e.jsx(s.p,{children:"Don't be overwhelmed by the structure. We will go through each of the directories and files in detail in the following sections."})]})}function a(n={}){const{wrapper:s}={...r(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i(n)}export{a as default,c as frontmatter};
