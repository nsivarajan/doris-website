"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[879955],{15680:(e,n,r)=>{r.d(n,{xA:()=>c,yg:()=>y});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,y=u["".concat(s,".").concat(f)]||u[f]||g[f]||l;return r?t.createElement(y,o(o({ref:n},c),{},{components:r})):t.createElement(y,o({ref:n},c))}));function y(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},263974:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var t=r(58168),a=(r(296540),r(15680));const l={title:"REGEXP_REPLACE_ONE",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/regexp/regexp-replace-one",id:"version-2.1/sql-manual/sql-functions/string-functions/regexp/regexp-replace-one",title:"REGEXP_REPLACE_ONE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/string-functions/regexp/regexp-replace-one.md",sourceDirName:"sql-manual/sql-functions/string-functions/regexp",slug:"/sql-manual/sql-functions/string-functions/regexp/regexp-replace-one",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/string-functions/regexp/regexp-replace-one",draft:!1,tags:[],version:"2.1",frontMatter:{title:"REGEXP_REPLACE_ONE",language:"zh-CN"},sidebar:"docs",previous:{title:"REGEXP_REPLACE",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/string-functions/regexp/regexp-replace"},next:{title:"STRUCT",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/struct-functions/struct"}},s={},p=[{value:"regexp_replace_one",id:"regexp_replace_one",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:p},u="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"regexp_replace_one"},"regexp_replace_one"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR regexp_replace_one(VARCHAR str, VARCHAR pattern, VARCHAR repl)")),(0,a.yg)("p",null,"\u5bf9\u5b57\u7b26\u4e32 str \u8fdb\u884c\u6b63\u5219\u5339\u914d, \u5c06\u547d\u4e2d pattern \u7684\u90e8\u5206\u4f7f\u7528 repl \u6765\u8fdb\u884c\u66ff\u6362\uff0c\u4ec5\u66ff\u6362\u7b2c\u4e00\u4e2a\u5339\u914d\u9879\u3002"),(0,a.yg)("p",null,"\u5b57\u7b26\u96c6\u5339\u914d\u9700\u8981\u4f7f\u7528 Unicode \u6807\u51c6\u5b57\u7b26\u7c7b\u578b\u3002\u4f8b\u5982\uff0c\u5339\u914d\u4e2d\u6587\u8bf7\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"\\p{Han}"),"\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> SELECT regexp_replace_one('a b c', \" \", \"-\");\n+-----------------------------------+\n| regexp_replace_one('a b c', ' ', '-') |\n+-----------------------------------+\n| a-b c                             |\n+-----------------------------------+\n\nmysql> SELECT regexp_replace_one('a b b','(b)','<\\\\1>');\n+----------------------------------------+\n| regexp_replace_one('a b b', '(b)', '<\\1>') |\n+----------------------------------------+\n| a <b> b                                |\n+----------------------------------------+\n\nmysql> select regexp_replace_one('\u8fd9\u662f\u4e00\u6bb5\u4e2d\u6587This is a passage in English 1234567', '\\\\p{Han}', '123');\n+------------------------------------------------------------------------------------------------+\n| regexp_replace_one('\u8fd9\u662f\u4e00\u6bb5\u4e2d\u6587This is a passage in English 1234567', '\\p{Han}', '123')       |\n+------------------------------------------------------------------------------------------------+\n| 123\u662f\u4e00\u6bb5\u4e2d\u6587This is a passage in English 1234567                                              |\n+------------------------------------------------------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"REGEXP_REPLACE_ONE,REGEXP,REPLACE,ONE\n")))}g.isMDXComponent=!0}}]);