"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[379253],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>f});var t=r(296540);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)r=l[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),y=a,f=u["".concat(s,".").concat(y)]||u[y]||d[y]||l;return r?t.createElement(f,i(i({ref:n},p),{},{components:r})):t.createElement(f,i({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},599510:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=r(58168),a=(r(296540),r(15680));const l={title:"RPAD",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/string-functions/rpad",id:"version-3.0/sql-manual/sql-functions/string-functions/rpad",title:"RPAD",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/string-functions/rpad.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/rpad",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/rpad",draft:!1,tags:[],version:"3.0",frontMatter:{title:"RPAD",language:"zh-CN"},sidebar:"docs",previous:{title:"LPAD",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/lpad"},next:{title:"LOWER",permalink:"/zh-CN/docs/sql-manual/sql-functions/string-functions/lower"}},s={},c=[{value:"rpad",id:"rpad",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"rpad"},"rpad"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR rpad(VARCHAR str, INT len, VARCHAR pad)")),(0,a.yg)("p",null,"\u8fd4\u56de str \u4e2d\u957f\u5ea6\u4e3a len\uff08\u4ece\u9996\u5b57\u6bcd\u5f00\u59cb\u7b97\u8d77\uff09\u7684\u5b57\u7b26\u4e32\u3002\u5982\u679c len \u5927\u4e8e str \u7684\u957f\u5ea6\uff0c\u5219\u5728 str \u7684\u540e\u9762\u4e0d\u65ad\u8865\u5145 pad \u5b57\u7b26\uff0c\u76f4\u5230\u8be5\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u8fbe\u5230 len \u4e3a\u6b62\u3002\u5982\u679c len \u5c0f\u4e8e str \u7684\u957f\u5ea6\uff0c\u8be5\u51fd\u6570\u76f8\u5f53\u4e8e\u622a\u65ad str \u5b57\u7b26\u4e32\uff0c\u53ea\u8fd4\u56de\u957f\u5ea6\u4e3a len \u7684\u5b57\u7b26\u4e32\u3002len \u6307\u7684\u662f\u5b57\u7b26\u957f\u5ea6\u800c\u4e0d\u662f\u5b57\u8282\u957f\u5ea6\u3002"),(0,a.yg)("p",null,"\u9664\u5305\u542b NULL \u503c\u5916\uff0c\u5982\u679c pad \u4e3a\u7a7a\uff0c\u5219\u8fd4\u56de\u503c\u4e3a\u7a7a\u4e32\u3002"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> SELECT rpad(\"hi\", 5, \"xy\");\n+---------------------+\n| rpad('hi', 5, 'xy') |\n+---------------------+\n| hixyx               |\n+---------------------+\n\nmysql> SELECT rpad(\"hi\", 1, \"xy\");\n+---------------------+\n| rpad('hi', 1, 'xy') |\n+---------------------+\n| h                   |\n+---------------------+\n\nmysql> SELECT rpad(\"\", 0, \"\");\n+-----------------+\n| rpad('', 0, '') |\n+-----------------+\n|                 |\n+-----------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"RPAD\n")))}d.isMDXComponent=!0}}]);