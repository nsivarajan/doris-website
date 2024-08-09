"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[84736],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),c=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(a.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(t),p=i,f=d["".concat(a,".").concat(p)]||d[p]||m[p]||l;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=p;var o={};for(var a in n)hasOwnProperty.call(n,a)&&(o[a]=n[a]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<l;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},176986:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(58168),i=(t(296540),t(15680));const l={title:"MILLISECONDS_SUB",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-functions/date-time-functions/milliseconds-sub",id:"version-2.0/sql-manual/sql-functions/date-time-functions/milliseconds-sub",title:"MILLISECONDS_SUB",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/date-time-functions/milliseconds-sub.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/milliseconds-sub",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/milliseconds-sub",draft:!1,tags:[],version:"2.0",frontMatter:{title:"MILLISECONDS_SUB",language:"zh-CN"},sidebar:"docs",previous:{title:"MILLISECONDS_DIFF",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/milliseconds-diff"},next:{title:"MINUTES_ADD",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/date-time-functions/minutes-add"}},a={},c=[{value:"milliseconds_sub",id:"milliseconds_sub",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function m(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"milliseconds_sub"},"milliseconds_sub"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"DATETIMEV2 milliseconds_sub(DATETIMEV2 basetime, INT delta)")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"basetime: DATETIMEV2 \u7c7b\u578b\u8d77\u59cb\u65f6\u95f4"),(0,i.yg)("li",{parentName:"ul"},"delta: \u4ece basetime \u8d77\u9700\u8981\u6263\u51cf\u7684\u6beb\u79d2\u6570"),(0,i.yg)("li",{parentName:"ul"},"\u8fd4\u56de\u7c7b\u578b\u4e3a DATETIMEV2")),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select milliseconds_sub('2023-09-08 16:02:08.435123', 1);\n+--------------------------------------------------------------------------+\n| milliseconds_sub(cast('2023-09-08 16:02:08.435123' as DATETIMEV2(6)), 1) |\n+--------------------------------------------------------------------------+\n| 2023-09-08 16:02:08.434123                                               |\n+--------------------------------------------------------------------------+\n1 row in set (0.11 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"milliseconds_sub\n")))}m.isMDXComponent=!0}}]);