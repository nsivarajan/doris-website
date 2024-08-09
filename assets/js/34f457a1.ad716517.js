"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[12626],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>y});var n=r(296540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,y=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},812846:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(58168),i=(r(296540),r(15680));const a={title:"Nereids-the Brand New Planner",language:"en"},o=void 0,s={unversionedId:"query/nereids/nereid",id:"version-3.0/query/nereids/nereid",title:"Nereids-the Brand New Planner",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/query/nereids/nereid.md",sourceDirName:"query/nereids",slug:"/query/nereids/nereid",permalink:"/docs/query/nereids/nereid",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Nereids-the Brand New Planner",language:"en"},sidebar:"docs",previous:{title:"User Defined Variables",permalink:"/docs/query/query-variables/user-defined-variables"},next:{title:"Statistics",permalink:"/docs/query/nereids/statistics"}},l={},u=[{value:"R&amp;D background",id:"rd-background",level:2},{value:"Advantages of the new optimizer",id:"advantages-of-the-new-optimizer",level:2},{value:"Smarter",id:"smarter",level:3},{value:"More robust",id:"more-robust",level:3},{value:"More flexible",id:"more-flexible",level:3},{value:"How to use",id:"how-to-use",level:2},{value:"Known issues and temporarily unsupported features",id:"known-issues-and-temporarily-unsupported-features",level:2},{value:"Temporarily unsupported features",id:"temporarily-unsupported-features",level:3},{value:"Known issues",id:"known-issues",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,i.yg)(d,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"rd-background"},"R&D background"),(0,i.yg)("p",null,"Modern query optimizers face challenges such as more complex query statements and more diverse query scenarios. At the same time, users are more and more eager to obtain query results as soon as possible. The outdated architecture of the old optimizer is difficult to meet the needs of rapid iteration in the future. Based on this, we set out to develop a new query optimizer for modern architectures. While processing the query requests of the current Doris scene more efficiently, it provides better scalability and lays a good foundation for handling the more complex requirements that Doris will face in the future."),(0,i.yg)("h2",{id:"advantages-of-the-new-optimizer"},"Advantages of the new optimizer"),(0,i.yg)("h3",{id:"smarter"},"Smarter"),(0,i.yg)("p",null,"The new optimizer presents the optimization points of each RBO and CBO in the form of rules. For each rule, the new optimizer provides a set of patterns used to describe the shape of the query plan, which can exactly match the query plan that can be optimized. Based on this, the new optimizer can better support more complex query statements such as multi-level subquery nesting."),(0,i.yg)("p",null,"At the same time, the CBO of the new optimizer is based on the advanced cascades framework, uses richer data statistics, and applies a cost model with more scientific dimensions. This makes the new optimizer more handy when faced with multi-table join queries."),(0,i.yg)("p",null,"TPC-H SF100 query speed comparison. The environment is 3BE, the new optimizer uses the original SQL, and the statistical information is collected before executing the SQL. Old optimizers use hand-tuned SQL. It can be seen that the new optimizer does not need to manually optimize the query, and the overall query time is similar to that of the old optimizer after manual optimization."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"execution time comparison",src:r(252239).A,width:"1977",height:"696"})),(0,i.yg)("h3",{id:"more-robust"},"More robust"),(0,i.yg)("p",null,"All optimization rules of the new optimizer are completed on the logical execution plan tree. After the query syntax and semantic analysis is completed, it will be transformed into a tree structure. Compared with the internal data structure of the old optimizer, it is more reasonable and unified. Taking subquery processing as an example, the new optimizer is based on a new data structure, which avoids separate processing of subqueries by many rules in the old optimizer. In turn, the possibility of logic errors in optimization rules is reduced."),(0,i.yg)("h3",{id:"more-flexible"},"More flexible"),(0,i.yg)("p",null,"The architectural design of the new optimizer is more reasonable and modern. Optimization rules and processing stages can be easily extended. Can more quickly respond to user needs."),(0,i.yg)("h2",{id:"how-to-use"},"How to use"),(0,i.yg)("p",null,"Turn on Nereids"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"SET enable_nereids_planner=true;\n")),(0,i.yg)("p",null,"Turn on auto fall back to legacy planner"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"SET enable_fallback_to_original_planner=true;\n")),(0,i.yg)("p",null,"Executing analyze on table before query is highly recommended when query performance is critical so that we can fully utilize Nereids's CBO capability."),(0,i.yg)("h2",{id:"known-issues-and-temporarily-unsupported-features"},"Known issues and temporarily unsupported features"),(0,i.yg)("h3",{id:"temporarily-unsupported-features"},"Temporarily unsupported features"),(0,i.yg)("admonition",{title:"Note",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"If automatic fallback is enabled, it will automatically fall back to the old optimizer execution")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Json, Array, Map and Struct types: The table in the query contains the above types, or the expressions in the query outputs the above types")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"DML: Only support below DML statements: Insert Into Select, Update and Delete")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Matrialized view with predicates")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Function alias")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Java UDF and HDFS UDF")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"High concurrent point query optimize"))),(0,i.yg)("h3",{id:"known-issues"},"Known issues"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Cannot use partition cache to accelarate query")))}c.isMDXComponent=!0},252239:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/nereids-tpch-e215f73967833d337db8c4ac86eb4231.jpeg"}}]);