"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[488658],{15680:(e,a,t)=>{t.d(a,{xA:()=>s,yg:()=>m});var r=t(296540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=r.createContext({}),u=function(e){var a=r.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=u(e.components);return r.createElement(p.Provider,{value:a},e.children)},g="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),g=u(t),y=n,m=g["".concat(p,".").concat(y)]||g[y]||c[y]||l;return t?r.createElement(m,i(i({ref:a},s),{},{components:t})):r.createElement(m,i({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,i=new Array(l);i[0]=y;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o[g]="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},821949:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(58168),n=(t(296540),t(15680));const l={title:"Release 2.0.7",language:"zh-CN"},i=void 0,o={unversionedId:"releasenotes/v2.0/release-2.0.7",id:"version-3.0/releasenotes/v2.0/release-2.0.7",title:"Release 2.0.7",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/releasenotes/v2.0/release-2.0.7.md",sourceDirName:"releasenotes/v2.0",slug:"/releasenotes/v2.0/release-2.0.7",permalink:"/zh-CN/docs/releasenotes/v2.0/release-2.0.7",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Release 2.0.7",language:"zh-CN"},sidebar:"releasenotes",previous:{title:"Release 2.0.8",permalink:"/zh-CN/docs/releasenotes/v2.0/release-2.0.8"},next:{title:"Release 2.0.6",permalink:"/zh-CN/docs/releasenotes/v2.0/release-2.0.6"}},p={},u=[{value:"1 \u884c\u4e3a\u53d8\u66f4",id:"1-\u884c\u4e3a\u53d8\u66f4",level:2},{value:"2 \u65b0\u529f\u80fd",id:"2-\u65b0\u529f\u80fd",level:2},{value:"3 \u6539\u8fdb\u548c\u4f18\u5316",id:"3-\u6539\u8fdb\u548c\u4f18\u5316",level:2},{value:"4 \u81f4\u8c22",id:"4-\u81f4\u8c22",level:2}],s={toc:u},g="wrapper";function c(e){let{components:a,...t}=e;return(0,n.yg)(g,(0,r.A)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"1-\u884c\u4e3a\u53d8\u66f4"},"1 \u884c\u4e3a\u53d8\u66f4"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("inlineCode",{parentName:"p"},"round")," \u51fd\u6570\u884c\u4e3a\u8ddf MySQL \u4fdd\u6301\u4e00\u81f4\uff0c\u4f8b\u5982 ",(0,n.yg)("inlineCode",{parentName:"p"},"round(5/2)")," \u8fd4\u56de 3 \u800c\u4e0d\u662f 2."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31583"},"https://github.com/apache/doris/pull/31583"))))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u65f6\u95f4\u7cbe\u5ea6\u8f6c\u6362\u884c\u4e3a\u8ddf MySQL \u4fdd\u6301\u4e00\u81f4\uff0c\u4f8b\u5982 '2023-10-12 14:31:49.666' \u56db\u820d\u4e94\u4eba\u5230 '2023-10-12 14:31:50' ."),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/27965"},"https://github.com/apache/doris/pull/27965")," ")))),(0,n.yg)("h2",{id:"2-\u65b0\u529f\u80fd"},"2 \u65b0\u529f\u80fd"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5728\u66f4\u591a\u7684\u60c5\u51b5\u4e0b\u53ef\u4ee5\u5c06 OUTER JOIN \u8f6c\u6362\u6210 ANTI JOIN \u6765\u52a0\u901f\u67e5\u8be2"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/31854"},"https://github.com/apache/doris/pull/31854")))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u652f\u6301\u901a\u8fc7 Nginx, HAProxy \u7b49\u4ee3\u7406\u8fde\u63a5\u7684 IP \u900f\u4f20"),(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/apache/doris/pull/32338"},"https://github.com/apache/doris/pull/32338"))))),(0,n.yg)("h2",{id:"3-\u6539\u8fdb\u548c\u4f18\u5316"},"3 \u6539\u8fdb\u548c\u4f18\u5316"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u901a\u8fc7\u5728 ",(0,n.yg)("inlineCode",{parentName:"p"},"information_schema")," \u4e2d\u589e\u52a0 DEFAULT_ENCRYPTION \u5217\u3001\u589e\u52a0 ",(0,n.yg)("inlineCode",{parentName:"p"},"processlist")," \u8868\uff0c\u63d0\u5347 BI \u5de5\u5177\u7684\u517c\u5bb9\u6027")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u521b\u5efa JDBC Catalog \u65f6\u9ed8\u8ba4\u81ea\u52a8\u68c0\u6d4b\u8fde\u901a\u6027")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u589e\u5f3a\u81ea\u52a8\u6062\u590d\u63d0\u5347 Kafka Routine Load \u7684\u7a33\u5b9a\u6027")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5012\u6392\u7d22\u5f15\u4e2d\u6587\u5206\u8bcd\u5bf9\u82f1\u6587\u9ed8\u8ba4\u505a\u5c0f\u5199\u8f6c\u6362")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Repeat \u51fd\u6570\u7684\u91cd\u590d\u6b21\u6570\u8d85\u8fc7\u9650\u5236\u65f6\u62a5\u9519")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u81ea\u52a8\u8df3\u8fc7 Hive \u5916\u8868\u4e2d\u7684\u9690\u85cf\u6587\u4ef6\u548c\u76ee\u5f55")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u5728\u67d0\u4e9b\u6781\u7aef\u60c5\u51b5\u4e0b\u51cf\u5c11 File Meta Cache \u907f\u514d OOM")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u51cf\u5c11 Broker Load \u7684 jvm \u5185\u5b58\u5360\u7528")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"\u52a0\u901f\u5e26\u6392\u5e8f\u7684 INSERT INTO SELECT \u6bd4\u5982 ",(0,n.yg)("inlineCode",{parentName:"p"},"INSERT INTO t1 SELECT * FROM t2 ORDER BY k")))),(0,n.yg)("h2",{id:"4-\u81f4\u8c22"},"4 \u81f4\u8c22"),(0,n.yg)("p",null,"924060929,airborne12,amorynan,ByteYue,dataroaring,deardeng,feiniaofeiafei,felixwluo,freemandealer,gavinchou,hello-stephen,HHoflittlefish777,jacktengg,jackwener,jeffreys-cat,Jibing-Li,KassieZ,LiBinfeng-01,luwei16,morningman,mrhhsg,Mryange,nextdreamblue,platoneko,qidaye,rohitrs1983,seawinde,shuke987,starocean999,SWJTU-ZhangLei,w41ter,wsjz,wuwenchi,xiaokang,XieJiann,XuJianxu,yujun777,Yulei-Yang,zhangstar333,zhiqiang-hhhh,zy-kkk,zzzxl1993"))}c.isMDXComponent=!0}}]);