"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[81554],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>d});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),c=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(o.Provider,{value:r},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=c(n),f=a,d=y["".concat(o,".").concat(f)]||y[f]||p[f]||l;return n?t.createElement(d,s(s({ref:r},u),{},{components:n})):t.createElement(d,s({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=f;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i[y]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},198460:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=n(58168),a=(n(296540),n(15680));const l={title:"ARRAY_INTERSECT",language:"zh-CN"},s=void 0,i={unversionedId:"sql-manual/sql-functions/array-functions/array-intersect",id:"version-2.1/sql-manual/sql-functions/array-functions/array-intersect",title:"ARRAY_INTERSECT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/array-functions/array-intersect.md",sourceDirName:"sql-manual/sql-functions/array-functions",slug:"/sql-manual/sql-functions/array-functions/array-intersect",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/array-functions/array-intersect",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ARRAY_INTERSECT",language:"zh-CN"},sidebar:"docs",previous:{title:"ARRAY_PRODUCT",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/array-functions/array-product"},next:{title:"ARRAY_RANGE",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/array-functions/array-range"}},o={},c=[{value:"array_intersect",id:"array_intersect",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},y="wrapper";function p(e){let{components:r,...n}=e;return(0,a.yg)(y,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"array_intersect"},"array_intersect"),(0,a.yg)("p",null,"array_intersect"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"ARRAY<T> array_intersect(ARRAY<T> array1, ARRAY<T> array2)")),(0,a.yg)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0c\u5305\u542barray1\u548carray2\u7684\u4ea4\u96c6\u4e2d\u7684\u6240\u6709\u5143\u7d20\uff0c\u4e0d\u5305\u542b\u91cd\u590d\u9879\uff0c\u5982\u679c\u8f93\u5165\u53c2\u6570\u4e3aNULL\uff0c\u5219\u8fd4\u56deNULL"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select k1,k2,k3,array_intersect(k2,k3) from array_type_table;\n+------+-----------------+--------------+-----------------------------+\n| k1   | k2              | k3           | array_intersect(`k2`, `k3`) |\n+------+-----------------+--------------+-----------------------------+\n|    1 | [1, 2, 3]       | [2, 4, 5]    | [2]                         |\n|    2 | [2, 3]          | [1, 5]       | []                          |\n|    3 | [1, 1, 1]       | [2, 2, 2]    | []                          |\n+------+-----------------+--------------+-----------------------------+\n\nmysql> select k1,k2,k3,array_intersect(k2,k3) from array_type_table_nullable;\n+------+-----------------+--------------+-----------------------------+\n| k1   | k2              | k3           | array_intersect(`k2`, `k3`) |\n+------+-----------------+--------------+-----------------------------+\n|    1 | [1, NULL, 3]    | [1, 3, 5]    | [1, 3]                      |\n|    2 | [NULL, NULL, 2] | [2, NULL, 4] | [NULL, 2]                   |\n|    3 | NULL            | [1, 2, 3]    | NULL                        |\n+------+-----------------+--------------+-----------------------------+\n\nmysql> select k1,k2,k3,array_intersect(k2,k3) from array_type_table_varchar;\n+------+----------------------------+----------------------------------+-----------------------------+\n| k1   | k2                         | k3                               | array_intersect(`k2`, `k3`) |\n+------+----------------------------+----------------------------------+-----------------------------+\n|    1 | ['hello', 'world', 'c++']  | ['I', 'am', 'c++']               | ['c++']                     |\n|    2 | ['a1', 'equals', 'b1']     | ['a2', 'equals', 'b2']           | ['equals']                  |\n|    3 | ['hasnull', NULL, 'value'] | ['nohasnull', 'nonull', 'value'] | [NULL, 'value']             |\n|    3 | ['hasnull', NULL, 'value'] | ['hasnull', NULL, 'value']       | ['hasnull', 'value']        |\n+------+----------------------------+----------------------------------+-----------------------------+\n\nmysql> select k1,k2,k3,array_intersect(k2,k3) from array_type_table_decimal;\n+------+------------------+-------------------+-----------------------------+\n| k1   | k2               | k3                | array_intersect(`k2`, `k3`) |\n+------+------------------+-------------------+-----------------------------+\n|    1 | [1.1, 2.1, 3.44] | [2.1, 3.4, 5.4]   | [2.1]                       |\n|    2 | [NULL, 2, 5]     | [NULL, NULL, 5.4] | [NULL]                      |\n|    3 | [1, NULL, 2, 5]  | [1, 3.1, 5.4]     | [1]                         |\n+------+------------------+-------------------+-----------------------------+\n\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ARRAY,INTERSECT,ARRAY_INTERSECT"))}p.isMDXComponent=!0}}]);