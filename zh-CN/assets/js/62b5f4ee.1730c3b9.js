"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[693468],{15680:(e,r,n)=>{n.d(r,{xA:()=>c,yg:()=>m});var a=n(296540);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=a.createContext({}),y=function(e){var r=a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=y(e.components);return a.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=y(n),d=t,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||l;return n?a.createElement(m,i(i({ref:r},c),{},{components:n})):a.createElement(m,i({ref:r},c))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[p]="string"==typeof e?e:t,i[1]=o;for(var y=2;y<l;y++)i[y]=n[y];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},464904:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>y});var a=n(58168),t=(n(296540),n(15680));const l={title:"ARRAY_SPLIT",language:"zh-CN"},i=void 0,o={unversionedId:"sql-manual/sql-functions/array-functions/array-split",id:"sql-manual/sql-functions/array-functions/array-split",title:"ARRAY_SPLIT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/array-functions/array-split.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-split",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-split",draft:!1,tags:[],version:"current",frontMatter:{title:"ARRAY_SPLIT",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_SORTBY",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-sortby"},next:{title:"ARRAY_REVERSE_SPLIT",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/array-functions/array-reverse-split"}},s={},y=[{value:"array_sortby",id:"array_sortby",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:y},p="wrapper";function u(e){let{components:r,...n}=e;return(0,t.yg)(p,(0,a.A)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"array_sortby"},"array_sortby"),(0,t.yg)("p",null,"array_split"),(0,t.yg)("h3",{id:"description"},"description"),(0,t.yg)("h4",{id:"syntax"},"Syntax"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ARRAY<ARRAY<T>> array_split(ARRAY<T> arg, Array<Boolean> cond)\nARRAY<ARRAY<T>> array_split(lambda, ARRAY<T0> arg0...)\n")),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u4f20\u5165\u4e24\u4e2a\u957f\u5ea6\u76f8\u7b49\u7684 ",(0,t.yg)("inlineCode",{parentName:"li"},"ARRAY")," \u4e14\u7b2c\u4e8c\u4e2a\u4e3a ",(0,t.yg)("inlineCode",{parentName:"li"},"Array<Boolean>"),"\uff0c\u5219\u6309\u7167 ",(0,t.yg)("inlineCode",{parentName:"li"},"cond")," \u4e2d\u4e3a ",(0,t.yg)("inlineCode",{parentName:"li"},"true")," \u7684\u4f4d\u7f6e\u5de6\u4fa7\u4f5c\u4e3a\u5206\u5272\u70b9\uff0c\u5206\u5272 ",(0,t.yg)("inlineCode",{parentName:"li"},"arg")," \u3002"),(0,t.yg)("li",{parentName:"ol"},"\u9ad8\u9636\u51fd\u6570\uff0c\u4f20\u5165\u4e00\u4e2a lambda \u8868\u8fbe\u5f0f\u548c\u81f3\u5c11\u4e00\u4e2a ",(0,t.yg)("inlineCode",{parentName:"li"},"ARRAY arg0"),"\uff0c\u5219\u6309\u7167 lambda \u8868\u8fbe\u5f0f\u8fd0\u7b97\u5f97\u5230\u7684 ",(0,t.yg)("inlineCode",{parentName:"li"},"Array<Boolean>")," \u7ed3\u679c\uff0c\u5176\u4e2d\u4e3a ",(0,t.yg)("inlineCode",{parentName:"li"},"true")," \u7684\u4f4d\u7f6e\u5de6\u4fa7\u4f5c\u4e3a\u5206\u5272\u70b9\uff0c\u5206\u5272 ",(0,t.yg)("inlineCode",{parentName:"li"},"arg0")," \u3002")),(0,t.yg)("h3",{id:"example"},"example"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"mysql> select array_split([1,2,3,4,5], [1,0,1,0,0]);\n+-----------------------------------------------------------------------+\n| array_split([1, 2, 3, 4, 5], cast([1, 0, 1, 0, 0] as ARRAY<BOOLEAN>)) |\n+-----------------------------------------------------------------------+\n| [[1, 2], [3, 4, 5]]                                                   |\n+-----------------------------------------------------------------------+\n1 row in set (0.09 sec)\n\nmysql> select array_split((x,y)->y, [1,2,3,4,5], [1,0,0,0,0]);\n+----------------------------------------------------------------------------------------------------------------+\n| array_split([1, 2, 3, 4, 5], cast(array_map((x, y) -> y, [1, 2, 3, 4, 5], [1, 0, 0, 0, 0]) as ARRAY<BOOLEAN>)) |\n+----------------------------------------------------------------------------------------------------------------+\n| [[1, 2, 3, 4, 5]]                                                                                              |\n+----------------------------------------------------------------------------------------------------------------+\n1 row in set (0.13 sec)\n\nmysql> select array_split((x,y)->(y+1), ['a', 'b', 'c', 'd'], [-1, -1, 0, -1]);\n+--------------------------------------------------------------------------------------------------------------------------------+\n| array_split(['a', 'b', 'c', 'd'], cast(array_map((x, y) -> (y + 1), ['a', 'b', 'c', 'd'], [-1, -1, 0, -1]) as ARRAY<BOOLEAN>)) |\n+--------------------------------------------------------------------------------------------------------------------------------+\n| [[\"a\", \"b\"], [\"c\", \"d\"]]                                                                                                       |\n+--------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.12 sec)\n\nmysql> select array_split(x->(year(x)>2013),[\"2020-12-12\", \"2013-12-12\", \"2015-12-12\", null]);\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| array_split(['2020-12-12', '2013-12-12', '2015-12-12', NULL], array_map(x -> (year(cast(x as DATEV2)) > 2013), ['2020-12-12', '2013-12-12', '2015-12-12', NULL])) |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n| [[\"2020-12-12\", \"2013-12-12\"], [\"2015-12-12\"], [null]]                                                                                                            |\n+-------------------------------------------------------------------------------------------------------------------------------------------------------------------+\n1 row in set (0.14 sec)\n")),(0,t.yg)("h3",{id:"keywords"},"keywords"),(0,t.yg)("p",null,"ARRAY, SPLIT, ARRAY_SPLIT"))}u.isMDXComponent=!0}}]);