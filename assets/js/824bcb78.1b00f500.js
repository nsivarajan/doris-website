"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[411561],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(296540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},704765:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(58168),o=(t(296540),t(15680));const i={title:"WINDOW_FUNCTION_MAX",language:"en"},a=void 0,l={unversionedId:"sql-manual/sql-functions/window-functions/window-function-max",id:"version-2.1/sql-manual/sql-functions/window-functions/window-function-max",title:"WINDOW_FUNCTION_MAX",description:'\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at',source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/window-functions/window-function-max.md",sourceDirName:"sql-manual/sql-functions/window-functions",slug:"/sql-manual/sql-functions/window-functions/window-function-max",permalink:"/docs/2.1/sql-manual/sql-functions/window-functions/window-function-max",draft:!1,tags:[],version:"2.1",frontMatter:{title:"WINDOW_FUNCTION_MAX",language:"en"},sidebar:"docs",previous:{title:"WINDOW_FUNCTION_AVG",permalink:"/docs/2.1/sql-manual/sql-functions/window-functions/window-function-avg"},next:{title:"WINDOW_FUNCTION_MIN",permalink:"/docs/2.1/sql-manual/sql-functions/window-functions/window-function-min"}},c={},s=[{value:"WINDOW FUNCTION MAX",id:"window-function-max",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,o.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"window-function-max"},"WINDOW FUNCTION MAX"),(0,o.yg)("h3",{id:"description"},"description"),(0,o.yg)("p",null,"The LEAD() method is used to calculate the maximum value within the window."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"MAX([DISTINCT | ALL] expression) [OVER (analytic_clause)]\n")),(0,o.yg)("h3",{id:"example"},"example"),(0,o.yg)("p",null,"Calculate the maximum value from the first row to the row after the current row"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-sql"},"select x, property,   \nmax(x) over    \n(   \norder by property, x    \nrows between unbounded preceding and 1 following    \n) as 'local maximum'    \nfrom int_t where property in ('prime','square');\n\n| x | property | local maximum |\n|---|----------|---------------|\n| 2 | prime    | 3             |\n| 3 | prime    | 5             |\n| 5 | prime    | 7             |\n| 7 | prime    | 7             |\n| 1 | square   | 7             |\n| 4 | square   | 9             |\n| 9 | square   | 9             |\n")),(0,o.yg)("h3",{id:"keywords"},"keywords"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"WINDOW,FUNCTION,MAX\n")))}d.isMDXComponent=!0}}]);