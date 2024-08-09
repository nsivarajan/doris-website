"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[814756],{15680:(e,r,n)=>{n.d(r,{xA:()=>s,yg:()=>f});var t=n(296540);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||y[d]||o;return n?t.createElement(f,l(l({ref:r},s),{},{components:n})):t.createElement(f,l({ref:r},s))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},693692:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=n(58168),a=(n(296540),n(15680));const o={title:"HLL(HyperLogLog)",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-reference/Data-Types/HLL",id:"version-1.2/sql-manual/sql-reference/Data-Types/HLL",title:"HLL(HyperLogLog)",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Data-Types/HLL.md",sourceDirName:"sql-manual/sql-reference/Data-Types",slug:"/sql-manual/sql-reference/Data-Types/HLL",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/HLL",draft:!1,tags:[],version:"1.2",frontMatter:{title:"HLL(HyperLogLog)",language:"zh-CN"},sidebar:"docs",previous:{title:"STRING",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/STRING"},next:{title:"BITMAP",permalink:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Types/BITMAP"}},c={},p=[{value:"HLL(HyperLogLog)",id:"hllhyperloglog",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:p},u="wrapper";function y(e){let{components:r,...n}=e;return(0,a.yg)(u,(0,t.A)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"hllhyperloglog"},"HLL(HyperLogLog)"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"HLL\nHLL\u4e0d\u80fd\u4f5c\u4e3akey\u5217\u4f7f\u7528\uff0c\u5efa\u8868\u65f6\u914d\u5408\u805a\u5408\u7c7b\u578b\u4e3aHLL_UNION\u3002\n\u7528\u6237\u4e0d\u9700\u8981\u6307\u5b9a\u957f\u5ea6\u548c\u9ed8\u8ba4\u503c\u3002\u957f\u5ea6\u6839\u636e\u6570\u636e\u7684\u805a\u5408\u7a0b\u5ea6\u7cfb\u7edf\u5185\u63a7\u5236\u3002\n\u5e76\u4e14HLL\u5217\u53ea\u80fd\u901a\u8fc7\u914d\u5957\u7684hll_union_agg\u3001hll_raw_agg\u3001hll_cardinality\u3001hll_hash\u8fdb\u884c\u67e5\u8be2\u6216\u4f7f\u7528\u3002\n\nHLL\u662f\u6a21\u7cca\u53bb\u91cd\uff0c\u5728\u6570\u636e\u91cf\u5927\u7684\u60c5\u51b5\u6027\u80fd\u4f18\u4e8eCount Distinct\u3002\nHLL\u7684\u8bef\u5dee\u901a\u5e38\u57281%\u5de6\u53f3\uff0c\u6709\u65f6\u4f1a\u8fbe\u52302%\u3002\n")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"select hour, HLL_UNION_AGG(pv) over(order by hour) uv from(\n   select hour, HLL_RAW_AGG(device_id) as pv\n   from metric_table -- \u67e5\u8be2\u6bcf\u5c0f\u65f6\u7684\u7d2f\u8ba1UV\n   where datekey=20200622\ngroup by hour order by 1\n) final;\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"HLL,HYPERLOGLOG\n")))}y.isMDXComponent=!0}}]);