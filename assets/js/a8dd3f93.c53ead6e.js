"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[933707],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(296540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},592494:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(58168),o=(r(296540),r(15680));const a={title:"hour_floor",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/hour_floor",id:"version-3.0/sql-manual/sql-functions/date-time-functions/hour_floor",title:"hour_floor",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/date-time-functions/hour_floor.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/hour_floor",permalink:"/docs/sql-manual/sql-functions/date-time-functions/hour_floor",draft:!1,tags:[],version:"3.0",frontMatter:{title:"hour_floor",language:"en"},sidebar:"docs",previous:{title:"minute_floor",permalink:"/docs/sql-manual/sql-functions/date-time-functions/minute_floor"},next:{title:"day_floor",permalink:"/docs/sql-manual/sql-functions/date-time-functions/day_floor"}},s={},c=[{value:"hour_floor",id:"hour_floor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"hour_floor"},"hour_floor"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("h4",{id:"syntax"},"Syntax"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"DATETIME HOUR_FLOOR(DATETIME datetime)\nDATETIME HOUR_FLOOR(DATETIME datetime, DATETIME origin)\nDATETIME HOUR_FLOOR(DATETIME datetime, INT period)\nDATETIME HOUR_FLOOR(DATETIME datetime, INT period, DATETIME origin)\n")),(0,o.yg)("p",null,"Convert the date to the nearest rounding down time of the specified time interval period."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"datetime: a valid date expression."),(0,o.yg)("li",{parentName:"ul"},"period: specifies how many hours each cycle consists of."),(0,o.yg)("li",{parentName:"ul"},"origin: starting from 0001-01-01T00:00:00.")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mysql> select hour_floor(\"2023-07-13 22:28:18\", 5);\n+-------------------------------------------------------------+\n| hour_floor(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+-------------------------------------------------------------+\n| 2023-07-13 21:00:00                                         |\n+-------------------------------------------------------------+\n1 row in set (0.23 sec)\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"HOUR_FLOOR, HOUR, FLOOR\n")),(0,o.yg)("h3",{id:"best-practice"},"Best Practice"),(0,o.yg)("p",null,"See also ",(0,o.yg)("a",{parentName:"p",href:"./date_floor"},"date_floor")))}f.isMDXComponent=!0}}]);