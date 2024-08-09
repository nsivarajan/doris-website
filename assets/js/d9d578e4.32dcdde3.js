"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[335677],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var a=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=s(n),u=i,y=g["".concat(p,".").concat(u)]||g[u]||m[u]||r;return n?a.createElement(y,l(l({ref:t},d),{},{components:n})):a.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(58168),i=(n(296540),n(15680));const r={title:"Docs Format Specification",language:"en"},l=void 0,o={unversionedId:"how-to-contribute/docs-format-specification",id:"how-to-contribute/docs-format-specification",title:"Docs Format Specification",description:"\x3c!--",source:"@site/community/how-to-contribute/docs-format-specification.md",sourceDirName:"how-to-contribute",slug:"/how-to-contribute/docs-format-specification",permalink:"/community/how-to-contribute/docs-format-specification",draft:!1,tags:[],version:"current",frontMatter:{title:"Docs Format Specification",language:"en"},sidebar:"community",previous:{title:"Commit Format Specification",permalink:"/community/how-to-contribute/commit-format-specification"},next:{title:"Code Submission Guide",permalink:"/community/how-to-contribute/pull-request"}},p={},s=[{value:"Basic Format Specification",id:"basic-format-specification",level:2},{value:"01 File Name",id:"01-file-name",level:3},{value:"02 Proprietary Name (Continuously Updated)",id:"02-proprietary-name-continuously-updated",level:3},{value:"03 SQL Functions and SQL Manual",id:"03-sql-functions-and-sql-manual",level:3},{value:"04 Abbreviation in English",id:"04-abbreviation-in-english",level:3},{value:"Document Structure Specification",id:"document-structure-specification",level:2},{value:"01 Heading and Title",id:"01-heading-and-title",level:3},{value:"02 Introduction",id:"02-introduction",level:3},{value:"Markdown Features",id:"markdown-features",level:2},{value:"01 Tab Key and Space Key",id:"01-tab-key-and-space-key",level:3},{value:"02 Numbered Lists and Bullet Points",id:"02-numbered-lists-and-bullet-points",level:3},{value:"03 Link",id:"03-link",level:3},{value:"04 Code blocks",id:"04-code-blocks",level:3},{value:"05 Admonitions",id:"05-admonitions",level:3},{value:"06 Images",id:"06-images",level:3},{value:"07 Table",id:"07-table",level:3},{value:"08 Details Tag",id:"08-details-tag",level:3},{value:"08 <code>Tabs</code>Component",id:"08-tabscomponent",level:3},{value:"09 Version tags",id:"09-version-tags",level:3},{value:"10 Quote",id:"10-quote",level:3}],d={toc:s},g="wrapper";function m(e){let{components:t,...n}=e;return(0,i.yg)(g,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This document primarily introduces:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Formatting specifications for the document, including the file name, URL, and layout. ")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Recommending the use of markdown features for the content.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Whether it is a historical version or the latest version of the docs, all modifications should submit pull requests to the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris-website"},"apache/doris-website"),"  repository.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"If you need to submit docs change, please refer to the ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/community/how-to-contribute/contribute-doc"},"Docs Contribution")," Guide."))),(0,i.yg)("h2",{id:"basic-format-specification"},"Basic Format Specification"),(0,i.yg)("h3",{id:"01-file-name"},"01 File Name"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The file name should provide a brief summary of the content and should not be too long")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},'If the file name consists of multiple English words, they should be separated by hyphens "-", and the use of underscores "_" is not recommended.')),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"When a specific SQL function requires an underscore, please follow the naming convention."))),(0,i.yg)("h3",{id:"02-proprietary-name-continuously-updated"},"02 Proprietary Name (Continuously Updated)"),(0,i.yg)("p",null,"When referring to company brands, product names, technical terms, etc. it is recommended to directly use the proprietary name and must use the correct capitalization."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Proprietary Name"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"GitHub")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"SQL")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"CPU")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"FE")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"BE")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"HTTP")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"MySQL")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"MongoDB")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Elasticsearch")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Azure")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"AWS")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"S3")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Doris Manager")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"WebUI")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Flink Doris Connector")))),(0,i.yg)("h3",{id:"03-sql-functions-and-sql-manual"},"03 SQL Functions and SQL Manual"),(0,i.yg)("p",null,'SQL function and SQL manual should follow the syntax conventions, it is recommended the names be written  in all uppercase letters, such as "ARRAY_MAX" '),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"For details about the layout of SQL function documentation, please refer to the Docs Contribution - ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/community/how-to-contribute/contribute-doc/#how-to-write-sql-manual"},"How to write SQL Manual"))),(0,i.yg)("h3",{id:"04-abbreviation-in-english"},"04 Abbreviation in English"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"It is recommended to provide the full meaning of an abbreviation when it first appears in the body of the document.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"It is not recommended use abbreviation in Titles"))),(0,i.yg)("h2",{id:"document-structure-specification"},"Document Structure Specification"),(0,i.yg)("h3",{id:"01-heading-and-title"},"01 Heading and Title"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The title of Documentation uses  ",(0,i.yg)("inlineCode",{parentName:"p"},' { "title": "", "language": ""}')," instead of ",(0,i.yg)("inlineCode",{parentName:"p"},"# ")," ")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The body starts with the level 2 title, and ends with the level 3 title. If there is a need to differentiate content even after using a third-level heading, you can use ",(0,i.yg)("strong",{parentName:"p"},"numbered list, bullet points, details tag, tabs components")," to indicate the further levels of hierarchy. (Please refer to relevant guidelines below)"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Markdown"},'{\n    "title": "Here is level 1 title",\n    "language": "en"\n}\n\n## Level 2 title\n### Level 3 title\n')),(0,i.yg)("h3",{id:"02-introduction"},"02 Introduction"),(0,i.yg)("p",null,"Introduction should provide a highly summarized overview of the content. It is recommended to keep the introduction within 150 words or less. For Examples: "),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"In this tutorial, you will learn: "),(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"What is XXX or What XXX, XXX, XXX are ")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"How to XXX")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"When to use XXX")))),(0,i.yg)("h2",{id:"markdown-features"},"Markdown Features"),(0,i.yg)("h3",{id:"01-tab-key-and-space-key"},"01 Tab Key and Space Key"),(0,i.yg)("p",null,"The Tab key and the Space key are commonly used for alignment. Therefore, the following recommendations are suggested:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Use the Tab key for alignment and avoid mixing the usage of tabs and spaces.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Set the tab size to be equivalent to four half-width spaces in Markdown editors, such as Visual Studio Code."))),(0,i.yg)("h3",{id:"02-numbered-lists-and-bullet-points"},"02 Numbered Lists and Bullet Points"),(0,i.yg)("p",null,"Numbered lists typically emphasize the priority order between items. When using numbered lists and bullet points, the following guidelines should be followed:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"For numbered lists, it is recommended to use ",(0,i.yg)("strong",{parentName:"p"},"Bold text")," to align the text with the higher-level hierarchy without indentation.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"When a numbered list contains bullet points, the numbered list is recommended be ",(0,i.yg)("strong",{parentName:"p"},"bolded"),", while the bullet points do not need to be bolded."))),(0,i.yg)("h3",{id:"03-link"},"03 Link"),(0,i.yg)("p",null,"When using link, it is recommended to follow the following guidelines:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"1. Link Description")),(0,i.yg)("p",null,'Link descriptions are not advisable to repeatedly use phrases such as "see details," "refer to," or "see specific information" within the same document.'),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"2. Link Format")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Link to other headings within the same document, such as ",(0,i.yg)("a",{parentName:"p",href:"#Prefix-Index"},"Inverted Index"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Link to adjacent documents: ",(0,i.yg)("a",{parentName:"p",href:"../../data-table/index/bloomfilter"},"BITMAP Index"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Link to external websites: ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inverted_index"},"Wikipedia - Inverted Index")))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"3. Link Paths")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"It is recommended to use either relative paths or paths consistently within the same document, avoiding mixing them.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},'It is advisable to minimize redirects to external sites to prevent broken links from affecting the user experience. If linking to an external site is necessary, it is recommended to inform users that they will be redirected to an external website, such as "Click to visit XXX."'))),(0,i.yg)("h3",{id:"04-code-blocks"},"04 Code blocks"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"You can create fenced code blocks by placing triple backticks ````` before and after the code block. We recommend placing a blank line before and after code blocks to make the raw formatting easier to read.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"You can add an optional language identifier to enable syntax highlighting in your fenced code block: "))),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"left"},"Language"),(0,i.yg)("th",{parentName:"tr",align:"left"},"Syntax Higlighting"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"Shell"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"shell")," or ",(0,i.yg)("inlineCode",{parentName:"td"},"bash"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"Python"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"python"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"JSON"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"json"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"XML"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"xml"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"SQL"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"sql"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"YAML"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"yaml")," or ",(0,i.yg)("inlineCode",{parentName:"td"},"yml"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"Markdown"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"markdown")," or",(0,i.yg)("inlineCode",{parentName:"td"},"md"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"JavaScript"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"js")," or ",(0,i.yg)("inlineCode",{parentName:"td"},"javascript"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"Java"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"java"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"C++"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"cpp"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"C"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"c"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"Ruby"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"ruby"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"HTML"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"html"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"CSS"),(0,i.yg)("td",{parentName:"tr",align:"left"},"```",(0,i.yg)("inlineCode",{parentName:"td"},"css"))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"left"},"PHP"),(0,i.yg)("td",{parentName:"tr",align:"left"},(0,i.yg)("inlineCode",{parentName:"td"},"php"))))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"When using the ``",(0,i.yg)("inlineCode",{parentName:"p"},"bash")," code block, it is recommended to separate the command and the output results. Here is an example:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Use the following command to view the service"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-Bash"}," kubectl get pod --namespace doris\n"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The output result"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-Bash"}," NAME                     READY   STATUS    RESTARTS   AGE\n doriscluster-helm-fe-0   1/1     Running   0          1m39s\n doriscluster-helm-fe-1   1/1     Running   0          1m39s\n doriscluster-helm-fe-2   1/1     Running   0          1m39s\n doriscluster-helm-be-0   1/1     Running   0          16s\n doriscluster-helm-be-1   1/1     Running   0          16s\n doriscluster-helm-be-2   1/1     Running   0          16s\n")))))),(0,i.yg)("h3",{id:"05-admonitions"},"05 Admonitions"),(0,i.yg)("p",null,"We have special admonitions syntax by wrapping text with a set of 3 colons, followed by a label denoting its type. When you want to emphasize the content, it is recommended to use admonitions."),(0,i.yg)("p",null,"In use, the following specifications need to be followed:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Tip: mainly used for operational  tips and tricks.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Note: used for more details and explanations.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Caution: used for warnings and precautions."))),(0,i.yg)("p",null,"You may also specify an optional title. Here are the examples of admonitions syntax:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Markdown"},":::tip Tip\nSome content with tips\n:::\n\n:::info Note\nSome content with explanations\n:::\n\n:::caution Warning\nSome content with precuations and warnings\n:::\n")),(0,i.yg)("h3",{id:"06-images"},"06 Images"),(0,i.yg)("p",null,"When you want to display images, it is convenient to co-locate the asset next to the Markdown file using it. For image directory structure, please refer to ",(0,i.yg)("a",{parentName:"p",href:"https://doris.apache.org/community/how-to-contribute/contribute-doc/#how-to-write-sql-manual"},"Docs Contribution"),"."),(0,i.yg)("p",null,"You can display images in two different ways: "),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Simple syntax: ",(0,i.yg)("inlineCode",{parentName:"p"},"![Alt text for images description](co-locate file structure or link)"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"If you want the image to be centered, you can use HTML as following: "))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Markdown"},"<div style={{textAlign:'center'}}>\n<img src=\"co-locate file structure or link\" alt=\"images descrition\" style={{display: 'inline-block'}}/>\n</div >\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"It is recommended to use ",(0,i.yg)("strong",{parentName:"li"},"Alt text"),', to convey "why" of the images as it releates to the content of the docs, and it will be indexed by search engine. It also displays on the page is the images fails to load. ')),(0,i.yg)("h3",{id:"07-table"},"07 Table"),(0,i.yg)("p",null,"To wrap lines within a table, you can use the HTML: ",(0,i.yg)("inlineCode",{parentName:"p"},"<p>XXXX</p>")),(0,i.yg)("h3",{id:"08-details-tag"},"08 Details Tag"),(0,i.yg)("p",null,"The details tag can be used to differentiate content if there is a need to differentiate content even after using a third-level heading."),(0,i.yg)("p",null,"Here is an example of the details tag in Markdown:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Markdown"},"<details>\n<summary>Title</summary>\nHere is the details\n<p>If you need to wrap your line, you can use HTML controls</p>\n<p>XXXXXXXX</p>\n</details>\n")),(0,i.yg)("h3",{id:"08-tabscomponent"},"08 ",(0,i.yg)("inlineCode",{parentName:"h3"},"Tabs"),"Component"),(0,i.yg)("p",null,"Using ",(0,i.yg)("inlineCode",{parentName:"p"},"Tabs")," components please refer to the following syntax: "),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-Markdown"},'import Tabs from \'@theme/Tabs\';\nimport TabItem from \'@theme/TabItem\';\n\n<Tabs>\n  <TabItem value="Title 1" label="Title 1" default>\n    <p>XXXXX</p>\n    <p>XXXXX</p>\n  </TabItem>\n  <TabItem value="Title 2" label="Title 2" default>\n    <p>XXXXX</p>\n    <p>XXXXX</p>\n  </TabItem>\n</Tabs>\n')),(0,i.yg)("h3",{id:"09-version-tags"},"09 Version tags"),(0,i.yg)("p",null,"It is not recommended to use version tags to distinguish between different versions. "),(0,i.yg)("p",null,"If features need to be version-specific, it is suggested to use admonitions (refer to point six) with the ",(0,i.yg)("inlineCode",{parentName:"p"},":::tip ::: ")),(0,i.yg)("h3",{id:"10-quote"},"10 Quote"),(0,i.yg)("p",null,"It is not recommended to use the ",(0,i.yg)("inlineCode",{parentName:"p"},">")," to quotation for content descriptions. "),(0,i.yg)("p",null,"If there is a need for more details or explanations, it is suggested to use admonitions (refer to point six) with the ",(0,i.yg)("inlineCode",{parentName:"p"},":::info :::")," annotation."))}m.isMDXComponent=!0}}]);