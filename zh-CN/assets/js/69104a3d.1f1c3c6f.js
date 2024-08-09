"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[697487],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},736316:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"ALTER-POLICY",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-STORAGE-POLICY",id:"version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-STORAGE-POLICY",title:"ALTER-POLICY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-STORAGE-POLICY.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-STORAGE-POLICY",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-STORAGE-POLICY",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ALTER-POLICY",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-VIEW",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-VIEW"},next:{title:"ALTER-RESOURCE",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-RESOURCE"}},s={},c=[{value:"ALTER-POLICY",id:"alter-policy",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"alter-policy"},"ALTER-POLICY"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"ALTER STORAGE POLICY"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u4fee\u6539\u4e00\u4e2a\u5df2\u6709\u7684\u51b7\u70ed\u5206\u5c42\u8fc1\u79fb\u7b56\u7565\u3002\u4ec5 root \u6216 admin \u7528\u6237\u53ef\u4ee5\u4fee\u6539\u8d44\u6e90\u3002\n\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER STORAGE POLICY  \'policy_name\'\nPROPERTIES ("key"="value", ...);\n')),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u4fee\u6539\u540d\u4e3a cooldown_datetime\u51b7\u70ed\u5206\u5c42\u6570\u636e\u8fc1\u79fb\u65f6\u95f4\u70b9\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER STORAGE POLICY has_test_policy_to_alter PROPERTIES("cooldown_datetime" = "2023-06-08 00:00:00");\n')),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u4fee\u6539\u540d\u4e3a cooldown_ttl\u7684\u51b7\u70ed\u5206\u5c42\u6570\u636e\u8fc1\u79fb\u5012\u8ba1\u65f6")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER STORAGE POLICY has_test_policy_to_alter PROPERTIES ("cooldown_ttl" = "10000");\nALTER STORAGE POLICY has_test_policy_to_alter PROPERTIES ("cooldown_ttl" = "1h");\nALTER STORAGE POLICY has_test_policy_to_alter PROPERTIES ("cooldown_ttl" = "3d");\n')),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER, STORAGE, POLICY\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);