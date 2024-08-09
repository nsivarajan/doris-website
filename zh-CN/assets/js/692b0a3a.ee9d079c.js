"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[346189],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>A});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,A=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(A,i(i({ref:t},p),{},{components:n})):a.createElement(A,i({ref:t},p))}));function A(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"ADMIN-CANCEL-REPAIR",language:"zh-CN"},i=void 0,s={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CANCEL-REPAIR",id:"version-3.0/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CANCEL-REPAIR",title:"ADMIN-CANCEL-REPAIR",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CANCEL-REPAIR.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CANCEL-REPAIR",permalink:"/zh-CN/docs/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CANCEL-REPAIR",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ADMIN-CANCEL-REPAIR",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-REPAIR-TABLE",permalink:"/zh-CN/docs/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-REPAIR-TABLE"},next:{title:"ADMIN-CHECK-TABLET",permalink:"/zh-CN/docs/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CHECK-TABLET"}},o={},c=[{value:"ADMIN-CANCEL-REPAIR",id:"admin-cancel-repair",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"admin-cancel-repair"},"ADMIN-CANCEL-REPAIR"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ADMIN CANCEL REPAIR"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u53d6\u6d88\u4ee5\u9ad8\u4f18\u5148\u7ea7\u4fee\u590d\u6307\u5b9a\u8868\u6216\u5206\u533a"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ADMIN CANCEL REPAIR TABLE table_name[ PARTITION (p1,...)];\n")),(0,r.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u8be5\u8bed\u53e5\u4ec5\u8868\u793a\u7cfb\u7edf\u4e0d\u518d\u4ee5\u9ad8\u4f18\u5148\u7ea7\u4fee\u590d\u6307\u5b9a\u8868\u6216\u5206\u533a\u7684\u5206\u7247\u526f\u672c\u3002\u7cfb\u7edf\u4ecd\u4f1a\u4ee5\u9ed8\u8ba4\u8c03\u5ea6\u65b9\u5f0f\u4fee\u590d\u526f\u672c\u3002")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u53d6\u6d88\u9ad8\u4f18\u5148\u7ea7\u4fee\u590d"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"}," ADMIN CANCEL REPAIR TABLE tbl PARTITION(p1);\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"ADMIN, CANCEL, REPAIR\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);