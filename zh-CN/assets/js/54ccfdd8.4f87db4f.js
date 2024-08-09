"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[782004],{15680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>d});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),y=r,d=c["".concat(s,".").concat(y)]||c[y]||u[y]||l;return n?a.createElement(d,i(i({ref:t},m),{},{components:n})):a.createElement(d,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},397100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const l={title:"UNSET-VARIABLE",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Database-Administration-Statements/UNSET-VARIABLE",id:"version-3.0/sql-manual/sql-statements/Database-Administration-Statements/UNSET-VARIABLE",title:"UNSET-VARIABLE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Database-Administration-Statements/UNSET-VARIABLE.md",sourceDirName:"sql-manual/sql-statements/Database-Administration-Statements",slug:"/sql-manual/sql-statements/Database-Administration-Statements/UNSET-VARIABLE",permalink:"/zh-CN/docs/sql-manual/sql-statements/Database-Administration-Statements/UNSET-VARIABLE",draft:!1,tags:[],version:"3.0",frontMatter:{title:"UNSET-VARIABLE",language:"zh-CN"},sidebar:"docs",previous:{title:"ADMIN-CANCEL-REBALANCE-DISK",permalink:"/zh-CN/docs/sql-manual/sql-statements/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK"},next:{title:"CREATE-CATALOG",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-CATALOG"}},s={},p=[{value:"UNSET-VARIABLE",id:"unset-variable",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"unset-variable"},"UNSET-VARIABLE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"UNSET VARIABLE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u4e3b\u8981\u662f\u7528\u6765\u6062\u590d Doris \u7cfb\u7edf\u53d8\u91cf\u4e3a\u9ed8\u8ba4\u503c\uff0c\u53ef\u4ee5\u662f\u5168\u5c40\u4e5f\u53ef\u4ee5\u662f\u4f1a\u8bdd\u7ea7\u522b\u3002"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"UNSET [SESSION|GLOBAL] VARIABLE (variable_name | ALL)\n")),(0,r.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"(variable_name | ALL) \uff1a\u5fc5\u987b\u6307\u5b9a\u53d8\u91cf\u540d\u6216\u4f7f\u7528 ALL , ALL \u4f1a\u6062\u590d\u6240\u6709\u53d8\u91cf\u7684\u503c\u3002")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,r.yg)("ol",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ol"},"\u53ea\u6709 ADMIN \u7528\u6237\u53ef\u4ee5\u5168\u5c40\u5f97\u6062\u590d\u53d8\u91cf\u7684\u503c\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,r.yg)("inlineCode",{parentName:"li"},"GLOBAL")," \u6062\u590d\u53d8\u91cf\u503c\u65f6\u4ec5\u5728\u6267\u884c\u547d\u4ee4\u7684\u5f53\u524d\u4f1a\u8bdd\u548c\u4e4b\u540e\u6253\u5f00\u7684\u4f1a\u8bdd\u4e2d\u751f\u6548\uff0c\u4e0d\u4f1a\u6062\u590d\u5f53\u524d\u5df2\u6709\u7684\u5176\u5b83\u4f1a\u8bdd\u4e2d\u7684\u503c\u3002"))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6062\u590d\u65f6\u533a\u4e3a\u9ed8\u8ba4\u503c\u4e1c\u516b\u533a"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"UNSET VARIABLE time_zone;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6062\u590d\u5168\u5c40\u7684\u6267\u884c\u5185\u5b58\u5927\u5c0f"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"UNSET GLOBAL VARIABLE exec_mem_limit;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4ece\u5168\u5c40\u8303\u56f4\u6062\u590d\u6240\u6709\u53d8\u91cf\u7684\u503c"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"UNSET GLOBAL VARIABLE ALL;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"UNSET, VARIABLE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);