"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[163856],{15680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>g});var t=r(296540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),y=o,g=p["".concat(c,".").concat(y)]||p[y]||f[y]||a;return r?t.createElement(g,l(l({ref:n},u),{},{components:r})):t.createElement(g,l({ref:n},u))}));function g(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=y;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},507181:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var t=r(58168),o=(r(296540),r(15680));const a={title:"CORR",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/aggregate-functions/corr",id:"version-3.0/sql-manual/sql-functions/aggregate-functions/corr",title:"CORR",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/aggregate-functions/corr.md",sourceDirName:"sql-manual/sql-functions/aggregate-functions",slug:"/sql-manual/sql-functions/aggregate-functions/corr",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/corr",draft:!1,tags:[],version:"3.0",frontMatter:{title:"CORR",language:"zh-CN"},sidebar:"docs",previous:{title:"COVAR_SAMP",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/covar-samp"},next:{title:"TOPN",permalink:"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/topn"}},c={},s=[{value:"CORR",id:"corr",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function f(e){let{components:n,...r}=e;return(0,o.yg)(p,(0,t.A)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"corr"},"CORR"),(0,o.yg)("h3",{id:"description"},"Description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"}," double corr(x, y)")),(0,o.yg)("p",null,"\u8ba1\u7b97\u76ae\u5c14\u900a\u7cfb\u6570, \u5373\u8fd4\u56de\u7ed3\u679c\u4e3a: x\u548cy\u7684\u534f\u65b9\u5dee\uff0c\u9664x\u548cy\u7684\u6807\u51c6\u5dee\u4e58\u79ef\u3002\n\u5982\u679cx\u6216y\u7684\u6807\u51c6\u5dee\u4e3a0, \u5c06\u8fd4\u56de0\u3002"),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select corr(x,y) from baseall;\n+---------------------+\n| corr(x, y)          |\n+---------------------+\n| 0.89442719099991586 |\n+---------------------+\n1 row in set (0.21 sec)\n\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("p",null,"CORR"))}f.isMDXComponent=!0}}]);