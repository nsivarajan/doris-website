"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[617358],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),g=n,y=m["".concat(i,".").concat(g)]||m[g]||c[g]||l;return a?r.createElement(y,o(o({ref:t},u),{},{components:a})):r.createElement(y,o({ref:t},u))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=g;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},952175:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(58168),n=(a(296540),a(15680));const l={title:"ALTER-SYSTEM-MODIFY-BACKEND",language:"en"},o=void 0,s={unversionedId:"sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",id:"version-3.0/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",title:"ALTER-SYSTEM-MODIFY-BACKEND",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND.md",sourceDirName:"sql-manual/sql-statements/Cluster-Management-Statements",slug:"/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",permalink:"/docs/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-MODIFY-BACKEND",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ALTER-SYSTEM-MODIFY-BACKEND",language:"en"},sidebar:"docs",previous:{title:"ALTER-SYSTEM-ADD-BROKER",permalink:"/docs/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-ADD-BROKER"},next:{title:"ALTER-SYSTEM-DECOMMISSION-BACKEND",permalink:"/docs/sql-manual/sql-statements/Cluster-Management-Statements/ALTER-SYSTEM-DECOMMISSION-BACKEND"}},i={},p=[{value:"ALTER-SYSTEM-MODIFY-BACKEND",id:"alter-system-modify-backend",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,n.yg)(m,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"alter-system-modify-backend"},"ALTER-SYSTEM-MODIFY-BACKEND"),(0,n.yg)("h3",{id:"name"},"Name"),(0,n.yg)("p",null,"ALTER SYSTEM MKDIFY BACKEND"),(0,n.yg)("h3",{id:"description"},"Description"),(0,n.yg)("p",null,"Modify BE node properties (administrator only!)"),(0,n.yg)("p",null,"grammar:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Find backend through host and port")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host:heartbeat_port" SET ("key" = "value"[, ...]);\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Find backend through backend_id")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "id1" SET ("key" = "value"[, ...]);\n')),(0,n.yg)("p",null,"  illustrate:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"host can be a hostname or an ip address"),(0,n.yg)("li",{parentName:"ol"},"heartbeat_port is the heartbeat port of the node"),(0,n.yg)("li",{parentName:"ol"},"Modify BE node properties The following properties are currently supported:")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"tag.xxxx: resource tag"),(0,n.yg)("li",{parentName:"ul"},"disable_query: query disable attribute"),(0,n.yg)("li",{parentName:"ul"},"disable_load: import disable attribute")),(0,n.yg)("p",null,"Note:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},'A backend can be set multi resource tags. But must contain "tag.location" type.')),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Modify the resource tag of BE"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("tag.location" = "group_a");\nALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("tag.location" = "group_a", "tag.compute" = "c1");\n')),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "id1" SET ("tag.location" = "group_a");\nALTER SYSTEM MODIFY BACKEND "id1" SET ("tag.location" = "group_a", "tag.compute" = "c1");\n'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Modify the query disable property of BE"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("disable_query" = "true");\n')),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "id1" SET ("disable_query" = "true");\n'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Modify the import disable property of BE"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "host1:heartbeat_port" SET ("disable_load" = "true");\n')),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER SYSTEM MODIFY BACKEND "id1" SET ("disable_load" = "true");\n')))),(0,n.yg)("h3",{id:"keywords"},"Keywords"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"ALTER, SYSTEM, ADD, BACKEND, ALTER SYSTEM\n")),(0,n.yg)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);