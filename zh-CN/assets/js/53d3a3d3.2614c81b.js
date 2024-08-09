"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[167203],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),y=a,d=m["".concat(i,".").concat(y)]||m[y]||u[y]||l;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=y;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},471984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"SHOW-TABLES",language:"zh-CN"},s=void 0,o={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-TABLES",id:"version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-TABLES",title:"SHOW-TABLES",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Show-Statements/SHOW-TABLES.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-TABLES",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-TABLES",draft:!1,tags:[],version:"2.1",frontMatter:{title:"SHOW-TABLES",language:"zh-CN"},sidebar:"docs",previous:{title:"SHOW-LOAD",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-LOAD"},next:{title:"SHOW-RESOURCES",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-RESOURCES"}},i={},c=[{value:"SHOW-TABLES",id:"show-tables",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-tables"},"SHOW-TABLES"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW TABLES"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5c55\u793a\u5f53\u524d db \u4e0b\u6240\u6709\u7684 table"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW [FULL] TABLES [LIKE]\n")),(0,a.yg)("p",null,"\u8bf4\u660e:"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"LIKE\uff1a\u53ef\u6309\u7167\u8868\u540d\u8fdb\u884c\u6a21\u7cca\u67e5\u8be2")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u67e5\u770bDB\u4e0b\u6240\u6709\u8868"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show tables;\n+---------------------------------+\n| Tables_in_demo                  |\n+---------------------------------+\n| ads_client_biz_aggr_di_20220419 |\n| cmy1                            |\n| cmy2                            |\n| intern_theme                    |\n| left_table                      |\n+---------------------------------+\n5 rows in set (0.00 sec)\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"\u6309\u7167\u8868\u540d\u8fdb\u884c\u6a21\u7cca\u67e5\u8be2"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> show tables like '%cm%';\n+----------------+\n| Tables_in_demo |\n+----------------+\n| cmy1           |\n| cmy2           |\n+----------------+\n2 rows in set (0.00 sec)\n")))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, TABLES\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);