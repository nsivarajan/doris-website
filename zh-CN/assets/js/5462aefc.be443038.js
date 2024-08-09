"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[984531],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var a=t(296540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(y,i(i({ref:n},c),{},{components:t})):a.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},454486:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(58168),r=(t(296540),t(15680));const o={title:"Show Meta Info Action",language:"zh-CN"},i=void 0,l={unversionedId:"admin-manual/fe/show-meta-info-action",id:"version-3.0/admin-manual/fe/show-meta-info-action",title:"Show Meta Info Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/admin-manual/fe/show-meta-info-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/show-meta-info-action",permalink:"/zh-CN/docs/admin-manual/fe/show-meta-info-action",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Show Meta Info Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Show Data Action",permalink:"/zh-CN/docs/admin-manual/fe/show-data-action"},next:{title:"Show Proc Action",permalink:"/zh-CN/docs/admin-manual/fe/show-proc-action"}},p={},s=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}],c={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(u,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /api/show_meta_info")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"\u7528\u4e8e\u663e\u793a\u4e00\u4e9b\u5143\u6570\u636e\u4fe1\u606f"),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"action"),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u8981\u83b7\u53d6\u7684\u5143\u6570\u636e\u4fe1\u606f\u7c7b\u578b\u3002\u76ee\u524d\u652f\u6301\u5982\u4e0b\uff1a"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"SHOW_DB_SIZE")),(0,r.yg)("p",{parentName:"li"},"  \u83b7\u53d6\u6307\u5b9a\u6570\u636e\u5e93\u7684\u6570\u636e\u91cf\u5927\u5c0f\uff0c\u5355\u4f4d\u4e3a\u5b57\u8282\u3002\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"SHOW_HA")),(0,r.yg)("p",{parentName:"li"},"  \u83b7\u53d6 FE \u5143\u6570\u636e\u65e5\u5fd7\u7684\u56de\u653e\u60c5\u51b5\uff0c\u4ee5\u53ca\u53ef\u9009\u4e3e\u7ec4\u7684\u60c5\u51b5\u3002"))))),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"\u65e0"),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"SHOW_DB_SIZE")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "default_cluster:information_schema": 0,\n        "default_cluster:db1": 381\n    },\n    "count": 0\n}\n'))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"SHOW_HA")),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "can_read": "true",\n        "role": "MASTER",\n        "is_ready": "true",\n        "last_checkpoint_version": "1492",\n        "last_checkpoint_time": "1596465109000",\n        "current_journal_id": "1595",\n        "electable_nodes": "",\n        "observer_nodes": "",\n        "master": "10.81.85.89"\n    },\n    "count": 0\n}\n')))),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b\u96c6\u7fa4\u5404\u4e2a\u6570\u636e\u5e93\u7684\u6570\u636e\u91cf\u5927\u5c0f"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'GET /api/show_meta_info?action=show_db_size\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "default_cluster:information_schema": 0,\n        "default_cluster:db1": 381\n    },\n    "count": 0\n}\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u67e5\u770b FE \u9009\u4e3e\u7ec4\u60c5\u51b5"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'GET /api/show_meta_info?action=show_ha\n\nResponse:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "can_read": "true",\n        "role": "MASTER",\n        "is_ready": "true",\n        "last_checkpoint_version": "1492",\n        "last_checkpoint_time": "1596465109000",\n        "current_journal_id": "1595",\n        "electable_nodes": "",\n        "observer_nodes": "",\n        "master": "10.81.85.89"\n    },\n    "count": 0\n}\n')))))}m.isMDXComponent=!0}}]);