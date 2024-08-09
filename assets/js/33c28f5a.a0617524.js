"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[851938],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var o=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),d=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,y=p["".concat(i,".").concat(m)]||p[m]||u[m]||s;return n?o.createElement(y,l(l({ref:t},c),{},{components:n})):o.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,l=new Array(s);l[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[p]="string"==typeof e?e:r,l[1]=a;for(var d=2;d<s;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},699812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var o=n(58168),r=(n(296540),n(15680));const s={title:"SQL Mode",language:"en"},l=void 0,a={unversionedId:"query/query-variables/sql-mode",id:"version-2.0/query/query-variables/sql-mode",title:"SQL Mode",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/query/query-variables/sql-mode.md",sourceDirName:"query/query-variables",slug:"/query/query-variables/sql-mode",permalink:"/docs/2.0/query/query-variables/sql-mode",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SQL Mode",language:"en"},sidebar:"docs",previous:{title:"Variable",permalink:"/docs/2.0/query/query-variables/variables"},next:{title:"Nereids-the Brand New Planner",permalink:"/docs/2.0/query/nereids/nereid"}},i={},d=[{value:"sql mode introduce",id:"sql-mode-introduce",level:2},{value:"principle",id:"principle",level:2},{value:"Operation method",id:"operation-method",level:2},{value:"mode is supported",id:"mode-is-supported",level:2},{value:"composite mode",id:"composite-mode",level:2}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"sql-mode"},"SQL Mode"),(0,r.yg)("p",null,"The sql mode newly supported by Doris refers to the sql mode management mechanism of Mysql. Each client can set its own sql mode, and database administrators with Admin privileges can set the global sql mode."),(0,r.yg)("h2",{id:"sql-mode-introduce"},"sql mode introduce"),(0,r.yg)("p",null,"sql mode enables users to switch between different styles of sql syntax and data validation strictness, making Doris more compatible with other databases. For example, in some databases, the '||' symbol is a string concatenator, but in Doris it is equivalent to 'or', then users only need to use sql mode to switch to the style they want. Each client can set the sql mode, which is valid in the current session. Only users with Admin privileges can set the global sql mode."),(0,r.yg)("h2",{id:"principle"},"principle"),(0,r.yg)("p",null,"The sql mode is stored in SessionVariables with a 64-bit Long type. Each bit of this address represents the enable/disable (1 means open, 0 means disable) state of a mode, as long as you know where each mode is. Bit, we can easily and quickly perform checksum operations on sql mode through bit operations."),(0,r.yg)("p",null,"Every time you query the sql mode, the Long type will be parsed and turned into a user-readable string. Similarly, the sql mode string sent by the user to the server will be parsed into a string that can be stored in SessionVariables. Long type."),(0,r.yg)("p",null,"The global sql mode that has been set will be persisted, so the operation on the global sql mode always only needs to be performed once, and the last global sql mode can be restored even after the program is restarted."),(0,r.yg)("h2",{id:"operation-method"},"Operation method"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Set sql mode")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'set global sql_mode = "DEFAULT"\nset session sql_mode = "DEFAULT"\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Currently Doris's default sql mode is DEFAULT (but this will be changed in subsequent revisions soon).\nSetting global sql mode requires Admin privileges and will affect all clients connecting thereafter.\nSetting session sql mode will only affect the current dialog client, the default is session mode.")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Query sql mode")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"select @@global.sql_mode\nselect @@session.sql_mode\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"In addition to this way, you can also check the current sql mode by returning all session variables in the following way"),(0,r.yg)("pre",{parentName:"blockquote"},(0,r.yg)("code",{parentName:"pre"},"show global variables\nshow session variables\n"))),(0,r.yg)("h2",{id:"mode-is-supported"},"mode is supported"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("inlineCode",{parentName:"li"},"PIPES_AS_CONCAT"))),(0,r.yg)("p",null,"In this mode, the '||' symbol is a string concatenation symbol (same as the CONCAT() function), not a synonym for the 'OR' symbol. (e.g., ",(0,r.yg)("inlineCode",{parentName:"p"},"'a'||'b' = 'ab'"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"1||0 = '10'"),")"),(0,r.yg)("h2",{id:"composite-mode"},"composite mode"),(0,r.yg)("p",null,"(subsequent additions)"))}u.isMDXComponent=!0}}]);