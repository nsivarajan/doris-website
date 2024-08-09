"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[401572],{15680:(n,e,t)=>{t.d(e,{xA:()=>u,yg:()=>d});var a=t(296540);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=a.createContext({}),p=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=p(n.components);return a.createElement(s.Provider,{value:e},n.children)},m="mdxType",c={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},y=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,s=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),m=p(t),y=r,d=m["".concat(s,".").concat(y)]||m[y]||c[y]||o;return t?a.createElement(d,i(i({ref:e},u),{},{components:t})):a.createElement(d,i({ref:e},u))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,i=new Array(o);i[0]=y;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l[m]="string"==typeof n?n:r,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},812188:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(58168),r=(t(296540),t(15680));const o={title:"AUTO_PARTITION_NAME",language:"en"},i=void 0,l={unversionedId:"sql-manual/sql-functions/string-functions/auto_partition_name",id:"version-3.0/sql-manual/sql-functions/string-functions/auto_partition_name",title:"AUTO_PARTITION_NAME",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/string-functions/auto_partition_name.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/auto_partition_name",permalink:"/docs/sql-manual/sql-functions/string-functions/auto_partition_name",draft:!1,tags:[],version:"3.0",frontMatter:{title:"AUTO_PARTITION_NAME",language:"en"},sidebar:"docs",previous:{title:"ASCII",permalink:"/docs/sql-manual/sql-functions/string-functions/ascii"},next:{title:"LENGTH",permalink:"/docs/sql-manual/sql-functions/string-functions/length"}},s={},p=[{value:"auto_partition_name",id:"auto_partition_name",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:p},m="wrapper";function c(n){let{components:e,...t}=n;return(0,r.yg)(m,(0,a.A)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"auto_partition_name"},"auto_partition_name"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"VARCHAR AUTO_PARTITION_NAME('RANGE', 'VARCHAR unit', DATETIME datetime)")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"VARCHAR AUTO_PARTITION_NAME('LIST', VARCHAR,...)")),(0,r.yg)("p",null,"Generate datetime partition names by unit following RANGE's partition name rules"),(0,r.yg)("p",null,"Convert strings to partition names following LIST's partition name rules"),(0,r.yg)("p",null,"The datetime parameter is a legal date expression."),(0,r.yg)("p",null,"The unit parameter is the time interval you want, the available values are: ","[",(0,r.yg)("inlineCode",{parentName:"p"},"second"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"minute"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"hour"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"day"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"month"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"year"),"]",".\nIf unit does not match one of these options, a syntax error will be returned. "),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select auto_partition_name('range', 'years', '123');\nERROR 1105 (HY000): errCode = 2, detailMessage = range auto_partition_name must accept year|month|day|hour|minute|second for 2nd argument\n\nmysql> select auto_partition_name('range', 'year', '2022-12-12 19:20:30');\n+---------------------------------------------------------------+\n| auto_partition_name('range', 'year', '2022-12-12 19:20:30')   |\n+---------------------------------------------------------------+\n| p20220101000000                                               |\n+---------------------------------------------------------------+\n\nmysql> select auto_partition_name('range', 'month', '2022-12-12 19:20:30');\n+---------------------------------------------------------------+\n| auto_partition_name('range', 'month', '2022-12-12 19:20:30')  |\n+---------------------------------------------------------------+\n| p20221201000000                                               |\n+---------------------------------------------------------------+\n\nmysql> select auto_partition_name('range', 'day', '2022-12-12 19:20:30');\n+---------------------------------------------------------------+\n| auto_partition_name('range', 'day', '2022-12-12 19:20:30')    |\n+---------------------------------------------------------------+\n| p20221212000000                                               |\n+---------------------------------------------------------------+\n\nmysql> select auto_partition_name('range', 'hour', '2022-12-12 19:20:30');\n+---------------------------------------------------------------+\n| auto_partition_name('range', 'hour', '2022-12-12 19:20:30')   |\n+---------------------------------------------------------------+\n| p20221212190000                                               |\n+---------------------------------------------------------------+\n\nmysql> select auto_partition_name('range', 'minute', '2022-12-12 19:20:30');\n+---------------------------------------------------------------+\n| auto_partition_name('range', 'minute', '2022-12-12 19:20:30') |\n+---------------------------------------------------------------+\n| p20221212192000                                               |\n+---------------------------------------------------------------+\n\nmysql> select auto_partition_name('range', 'second', '2022-12-12 19:20:30');\n+---------------------------------------------------------------+\n| auto_partition_name('range', 'second', '2022-12-12 19:20:30') |\n+---------------------------------------------------------------+\n| p20221212192030                                               |\n+---------------------------------------------------------------+\n\nmysql> select auto_partition_name('list', 'helloworld');\n+-------------------------------------------+\n| auto_partition_name('list', 'helloworld') |\n+-------------------------------------------+\n| phelloworld10                             |\n+-------------------------------------------+\n\nmysql> select auto_partition_name('list', 'hello', 'world');\n+-----------------------------------------------+\n| auto_partition_name('list', 'hello', 'world') |\n+-----------------------------------------------+\n| phello5world5                                 |\n+-----------------------------------------------+\n\nmysql> select auto_partition_name('list', \"\u4f60\u597d\");\n+------------------------------------+\n| auto_partition_name('list', \"\u4f60\u597d\") |\n+------------------------------------+\n| p4f60597d2                         |\n+------------------------------------+\n\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"AUTO_PARTITION_NAME,AUTO,PARTITION,NAME\n")))}c.isMDXComponent=!0}}]);