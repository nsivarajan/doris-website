"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[501750],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>f});var r=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},950786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(58168),i=(n(296540),n(15680));const o={title:"TIME_TO_SEC",language:"zh-CN"},a=void 0,c={unversionedId:"sql-manual/sql-functions/date-time-functions/time-to-sec",id:"sql-manual/sql-functions/date-time-functions/time-to-sec",title:"TIME_TO_SEC",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/time-to-sec.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/time-to-sec",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/time-to-sec",draft:!1,tags:[],version:"current",frontMatter:{title:"TIME_TO_SEC",language:"zh-CN"},sidebar:"docs",previous:{title:"TO_DAYS",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/to-days"},next:{title:"SEC_TO_TIME",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/sec-to-time"}},l={},s=[{value:"time_to_sec",id:"time_to_sec",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},m="wrapper";function p(e){let{components:t,...n}=e;return(0,i.yg)(m,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"time_to_sec"},"time_to_sec"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"INT time_to_sec(TIME datetime)")),(0,i.yg)("p",null,"\u53c2\u6570\u4e3aDatetime\u7c7b\u578b\n\u5c06\u6307\u5b9a\u7684\u65f6\u95f4\u503c\u8f6c\u4e3a\u79d2\u6570\uff0c\u5373\u8fd4\u56de\u7ed3\u679c\u4e3a\uff1a\u5c0f\u65f6\xd73600 + \u5206\u949f\xd760 + \u79d2\u3002"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql >select current_time(),time_to_sec(current_time());\n+----------------+-----------------------------+\n| current_time() | time_to_sec(current_time()) |\n+----------------+-----------------------------+\n| 16:32:18       |                       59538 |\n+----------------+-----------------------------+\n1 row in set (0.01 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"TIME_TO_SEC\n")))}p.isMDXComponent=!0}}]);