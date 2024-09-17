import{a8 as a,j as e}from"./vendor-BILq7OoT.js";const d={title:"Permaweb Deployment",description:"undefined"};function i(r){const n={a:"a",aside:"aside",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...a(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.header,{children:e.jsxs(n.h1,{id:"permaweb-deployment",children:["Permaweb Deployment",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#permaweb-deployment",children:e.jsx(n.div,{"data-autolink-icon":!0})})]})}),`
`,e.jsx(n.p,{children:"The frontend is a Vite React application. It is a single-page application (SPA) that provides a user interface for the backend services."}),`
`,e.jsx(n.p,{children:"Deploying the frontend to the Permaweb requires the following steps:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Own a arns domain."}),`
`,e.jsx(n.li,{children:"Have a wallet with enough AR to deploy the frontend."}),`
`,e.jsx(n.li,{children:"Have a funded ArDrive account to deploy the frontend."}),`
`]}),`
`,e.jsxs(n.h2,{id:"arns-domain",children:["arNS Domain",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#arns-domain",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["You can purchase an arNS domain from the ",e.jsx(n.a,{href:"https://arns.app/",children:"arns website"}),"."]}),`
`,e.jsxs(n.h2,{id:"ardrive-account",children:["ArDrive Account",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#ardrive-account",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsxs(n.p,{children:["You can learn more about how to create an ArDrive account from the ",e.jsx(n.a,{href:"https://docs.ardrive.io/",children:"ArDrive documentation"}),"."]}),`
`,e.jsxs(n.h2,{id:"deploying-the-frontend",children:["Deploying the Frontend",e.jsx(n.a,{"aria-hidden":"true",tabIndex:"-1",href:"#deploying-the-frontend",children:e.jsx(n.div,{"data-autolink-icon":!0})})]}),`
`,e.jsx(n.p,{children:"After building your static frontend, you can deploy it to permaweb by using the provided deploy script."}),`
`,e.jsxs(n.p,{children:["Learn more about deploying to the Permaweb from the ",e.jsx(n.a,{href:"https://docs.ardrive.io/docs/misc/deploy/deploy.html",children:"ArDrive documentation"}),"."]}),`
`,e.jsxs(n.p,{children:["Also, you can learn more about Permaweb deploy here: ",e.jsx(n.a,{href:"https://github.com/permaweb/permaweb-deploy",children:"https://github.com/permaweb/permaweb-deploy"})]}),`
`,e.jsx(n.p,{children:"In order to deploy the frontend to the Permaweb, you need to provide the following environment variables:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"DEPLOY_KEY"}),": The key to deploy the frontend. This is the wallet key that owns the arNS domain and has enough AR."]}),`
`]}),`
`,e.jsxs(n.aside,{"data-callout":"warning",children:[e.jsx(n.p,{children:"Make sure your DEPLOY_KEY contains the wallet encrypted in base64 format."}),e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"base64"}),e.jsx(n.span,{style:{color:"#005CC5","--shiki-dark":"#6CB6FF"},children:" -i"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" wallet.json"}),e.jsx(n.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" |"}),e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" pbcopy"})]})})})]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ANT_PROCESS"}),": The ANT process that the frontend will connect to (This is provided by the arNS domain)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"UNDERNAME"}),": The undername of the arNS domain that the frontend will be deployed to."]}),`
`]}),`
`,e.jsx(n.p,{children:"To deploy the frontend to the Permaweb, you need to run the following command:"}),`
`,e.jsx(n.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0","data-title":"Terminal","data-lang":"bash",children:e.jsx(n.code,{children:e.jsxs(n.span,{className:"line",children:[e.jsx(n.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"npm"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" run"}),e.jsx(n.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:" frontend:deploy"})]})})}),`
`,e.jsx(n.p,{children:"You can now access the frontend using the arNS domain that you own."}),`
`,e.jsxs(n.aside,{"data-callout":"tip",children:[e.jsx(n.strong,{"data-callout-title":!0,children:"Handy Tip"}),e.jsx(n.p,{children:"You can use undernames of your arNS domain to deploy multiple environments of the frontend."})]})]})}function o(r={}){const{wrapper:n}={...a(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{o as default,d as frontmatter};
