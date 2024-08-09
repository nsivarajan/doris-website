"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[278013],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>d});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),y=r,d=c["".concat(s,".").concat(y)]||c[y]||m[y]||l;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},965906:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(58168),r=(a(296540),a(15680));const l={title:"Query Stats Action",language:"en"},i=void 0,o={unversionedId:"admin-manual/fe/query-stats-action",id:"admin-manual/fe/query-stats-action",title:"Query Stats Action",description:"\x3c!--",source:"@site/docs/admin-manual/fe/query-stats-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/query-stats-action",permalink:"/docs/dev/admin-manual/fe/query-stats-action",draft:!1,tags:[],version:"current",frontMatter:{title:"Query Stats Action",language:"en"},sidebar:"docs",previous:{title:"Query Schema Action",permalink:"/docs/dev/admin-manual/fe/query-schema-action"},next:{title:"Row Count Action",permalink:"/docs/dev/admin-manual/fe/row-count-action"}},s={},u=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Example",id:"example",level:2}],p={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.yg)(c,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"request"},"Request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"View  \nget api/query_stats/<catalog_name>  \nget api/query_stats/<catalog_name>/<db_name>  \nget api/query_stats/<catalog_name>/<db_name>/<tbl_name>  \n  \nClear  \ndelete api/query_stats/<catalog_name>/<db_name>  \ndelete api/query_stats/<catalog_name>/<db_name>/<tbl_name>\n")),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"Get or delete the statistics information of the specified catalog database or table, if it is a doris catalog, you can use default_cluster"),(0,r.yg)("h2",{id:"path-parameters"},"Path parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<catalog_name>"),"\nspecified catalog name")),(0,r.yg)("li",{parentName:"ul"}),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<db_name>"),"\nspecified database name")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<tbl_name>"),"\nspecified table name"))),(0,r.yg)("h2",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"summary"),"\nif true, only return summary information, otherwise return all the detailed statistics information of the table, only used in get")),(0,r.yg)("h2",{id:"request-body"},"Request body"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'GET /api/query_stats/default_cluster/test_query_db/baseall?summary=false\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "summary": {\n            "query": 2\n        },\n        "detail": {\n            "baseall": {\n                "summary": {\n                    "query": 2\n                }\n            }\n        }\n    },\n    "count": 0\n}\n\n')),(0,r.yg)("h2",{id:"response"},"Response"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"return statistics information")),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"use curl"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"curl --location -u root: 'http://127.0.0.1:8030/api/query_stats/default_cluster/test_query_db/baseall?summary=false'\n")))))}m.isMDXComponent=!0}}]);