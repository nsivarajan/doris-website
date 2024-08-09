"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[842311],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>y});var r=t(296540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(t),d=l,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(y,i(i({ref:n},p),{},{components:t})):r.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[u]="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},350081:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(58168),l=(t(296540),t(15680));const o={title:"MULTI_SEARCH_ALL_POSITIONS",language:"en"},i=void 0,a={unversionedId:"sql-manual/sql-functions/string-functions/search/multi-search-all-positions",id:"sql-manual/sql-functions/string-functions/search/multi-search-all-positions",title:"MULTI_SEARCH_ALL_POSITIONS",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/string-functions/search/multi-search-all-positions.md",sourceDirName:"sql-manual/sql-functions/string-functions/search",slug:"/sql-manual/sql-functions/string-functions/search/multi-search-all-positions",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/search/multi-search-all-positions",draft:!1,tags:[],version:"current",frontMatter:{title:"MULTI_SEARCH_ALL_POSITIONS",language:"en"},sidebar:"docs",previous:{title:"random_bytes",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/random_bytes"},next:{title:"MULTI_MATCH_ANY",permalink:"/docs/dev/sql-manual/sql-functions/string-functions/search/multi-match-any"}},s={},c=[{value:"multi_search_all_positions",id:"multi_search_all_positions",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function m(e){let{components:n,...t}=e;return(0,l.yg)(u,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"multi_search_all_positions"},"multi_search_all_positions"),(0,l.yg)("h3",{id:"description"},"Description"),(0,l.yg)("h4",{id:"syntax"},"Syntax"),(0,l.yg)("p",null,(0,l.yg)("inlineCode",{parentName:"p"},"ARRAY<INT> multi_search_all_positions(VARCHAR haystack, ARRAY<VARCHAR> needles)")),(0,l.yg)("p",null,"Returns an ",(0,l.yg)("inlineCode",{parentName:"p"},"ARRAY")," where the ",(0,l.yg)("inlineCode",{parentName:"p"},"i"),"-th element is the position of the ",(0,l.yg)("inlineCode",{parentName:"p"},"i"),"-th element in ",(0,l.yg)("inlineCode",{parentName:"p"},"needles"),"(i.e. ",(0,l.yg)("inlineCode",{parentName:"p"},"needle"),")'s ",(0,l.yg)("strong",{parentName:"p"},"first")," occurrence in the string ",(0,l.yg)("inlineCode",{parentName:"p"},"haystack"),". Positions are counted from 1, with 0 meaning the element was not found. ",(0,l.yg)("strong",{parentName:"p"},"Case-sensitive"),"."),(0,l.yg)("h3",{id:"example"},"example"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"mysql> select multi_search_all_positions('Hello, World!', ['hello', '!', 'world']);\n+----------------------------------------------------------------------+\n| multi_search_all_positions('Hello, World!', ['hello', '!', 'world']) |\n+----------------------------------------------------------------------+\n| [0,13,0]                                                             |\n+----------------------------------------------------------------------+\n\nselect multi_search_all_positions(\"Hello, World!\", ['hello', '!', 'world', 'Hello', 'World']);\n+---------------------------------------------------------------------------------------------+\n| multi_search_all_positions('Hello, World!', ARRAY('hello', '!', 'world', 'Hello', 'World')) |\n+---------------------------------------------------------------------------------------------+\n| [0, 13, 0, 1, 8]                                                                            |\n+---------------------------------------------------------------------------------------------+\n")),(0,l.yg)("h3",{id:"keywords"},"keywords"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"MULTI_SEARCH,SEARCH,POSITIONS\n")))}m.isMDXComponent=!0}}]);