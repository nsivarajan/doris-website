"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[506344],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),y=r,d=m["".concat(o,".").concat(y)]||m[y]||u[y]||l;return n?a.createElement(d,s(s({ref:t},p),{},{components:n})):a.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},865218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"CLEAN-QUERY-STATS",language:"zh-CN"},s=void 0,i={unversionedId:"sql-manual/sql-statements/Utility-Statements/CLEAN-QUERY-STATS",id:"version-2.1/sql-manual/sql-statements/Utility-Statements/CLEAN-QUERY-STATS",title:"CLEAN-QUERY-STATS",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Utility-Statements/CLEAN-QUERY-STATS.md",sourceDirName:"sql-manual/sql-statements/Utility-Statements",slug:"/sql-manual/sql-statements/Utility-Statements/CLEAN-QUERY-STATS",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Utility-Statements/CLEAN-QUERY-STATS",draft:!1,tags:[],version:"2.1",frontMatter:{title:"CLEAN-QUERY-STATS",language:"zh-CN"},sidebar:"docs",previous:{title:"SYNC",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Utility-Statements/SYNC"},next:{title:"CANCEL-MATERIALIZED-VIEW-TASK",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Utility-Statements/CANCEL-MATERIALIZED-VIEW-TASK"}},o={},c=[{value:"CLEAN-QUERY-STATS",id:"clean-query-stats",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(m,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"clean-query-stats"},"CLEAN-QUERY-STATS"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("version",{since:"dev"},"CLEAN QUERY STATS"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u8bf7\u7a7a\u67e5\u8be2\u7edf\u8ba1\u4fe1\u606f"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CLEAN [ALL| DATABASE | TABLE] QUERY STATS [[FOR db_name]|[FROM|IN] table_name]];\n")),(0,r.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5982\u679c\u6307\u5b9a ALL\uff0c\u5219\u6e05\u7a7a\u6240\u6709\u67e5\u8be2\u7edf\u8ba1\u4fe1\u606f\uff0c\u5305\u62ec\u6570\u636e\u5e93\u548c\u8868\u7684\u7edf\u8ba1\u4fe1\u606f\uff0c\u9700\u8981admin \u6743\u9650"),(0,r.yg)("li",{parentName:"ol"},"\u5982\u679c\u6307\u5b9a DATABASE\uff0c\u5219\u6e05\u7a7a\u6307\u5b9a\u6570\u636e\u5e93\u7684\u67e5\u8be2\u7edf\u8ba1\u4fe1\u606f\uff0c\u9700\u8981\u5bf9\u5e94database \u7684alter \u6743\u9650"),(0,r.yg)("li",{parentName:"ol"},"\u5982\u679c\u6307\u5b9a TABLE\uff0c\u5219\u6e05\u7a7a\u6307\u5b9a\u8868\u7684\u67e5\u8be2\u7edf\u8ba1\u4fe1\u606f\uff0c\u9700\u8981\u5bf9\u5e94\u8868\u7684alter \u6743\u9650")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6e05\u7a7a\u6240\u6709\u7edf\u8ba1\u4fe1\u606f"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"clean all query stats;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6e05\u7a7a\u6307\u5b9a\u6570\u636e\u5e93\u7684\u7edf\u8ba1\u4fe1\u606f"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"clean database query stats for test_query_db;\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u6e05\u7a7a\u6307\u5b9a\u8868\u7684\u7edf\u8ba1\u4fe1\u606f"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"clean table query stats from test_query_db.baseall;\n")))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CLEAN, QUERY, STATS\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);