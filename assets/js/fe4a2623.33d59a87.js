"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[70836],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>m});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},i="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),i=l(r),f=a,m=i["".concat(p,".").concat(f)]||i[f]||y[f]||o;return r?n.createElement(m,u(u({ref:t},s),{},{components:r})):n.createElement(m,u({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[i]="string"==typeof e?e:a,u[1]=c;for(var l=2;l<o;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},604618:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(58168),a=(r(296540),r(15680));const o={title:"Complex Type",language:"en"},u=void 0,c={unversionedId:"query/query-data/complex-type",id:"query/query-data/complex-type",title:"Complex Type",description:"\x3c!--",source:"@site/docs/query/query-data/complex-type.md",sourceDirName:"query/query-data",slug:"/query/query-data/complex-type",permalink:"/docs/dev/query/query-data/complex-type",draft:!1,tags:[],version:"current",frontMatter:{title:"Complex Type",language:"en"},sidebar:"docs",previous:{title:"Select Manual",permalink:"/docs/dev/query/query-data/select"},next:{title:"Subquery",permalink:"/docs/dev/query/query-data/subquery"}},p={},l=[],s={toc:l},i="wrapper";function y(e){let{components:t,...r}=e;return(0,a.yg)(i,(0,n.A)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Doris supports complex types such as Array, Map, Struct, and JSON."),(0,a.yg)("p",null,"Doris provides various functions specifically designed for these complex types."),(0,a.yg)("p",null,"For detailed information on the supported functions, please refer to the SQL manual- ",(0,a.yg)("a",{parentName:"p",href:"../../sql-manual/sql-functions/array-functions/array"},"Array functions"),", ",(0,a.yg)("a",{parentName:"p",href:"../../sql-manual/sql-functions/struct-functions/struct"},"SQL manual-Struct functions"),", and ",(0,a.yg)("a",{parentName:"p",href:"../../sql-manual/sql-functions/json-functions/json-parse"},"SQL manual-JSON functions"),"."),(0,a.yg)("p",null,"To check the support for Map functions, you can refer to the SQL manual docs under the section for the ",(0,a.yg)("a",{parentName:"p",href:"../../sql-manual/sql-statements/Data-Types/MAP"},"MAP")," data type."))}y.isMDXComponent=!0}}]);