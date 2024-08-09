"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[493423],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,g=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},686257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const o={title:"ORTHOGONAL_BITMAP_EXPR_CALCULATE",language:"zh-CN"},l=void 0,i={unversionedId:"sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-expr-calculate",id:"version-2.1/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-expr-calculate",title:"ORTHOGONAL_BITMAP_EXPR_CALCULATE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-expr-calculate.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-expr-calculate",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-expr-calculate",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ORTHOGONAL_BITMAP_EXPR_CALCULATE",language:"zh-CN"},sidebar:"docs",previous:{title:"ORTHOGONAL_BITMAP_INTERSECT_COUNT",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-intersect-count"},next:{title:"ORTHOGONAL_BITMAP_EXPR_CALCULATE_COUNT",permalink:"/zh-CN/docs/2.1/sql-manual/sql-functions/bitmap-functions/orthogonal-bitmap-expr-calculate-count"}},c={},p=[{value:"orthogonal_bitmap_expr_calculate",id:"orthogonal_bitmap_expr_calculate",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],s={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"orthogonal_bitmap_expr_calculate"},"orthogonal_bitmap_expr_calculate"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"BITMAP ORTHOGONAL_BITMAP_EXPR_CALCULATE(bitmap_column, column_to_filter, input_string)"),"\n\u6c42\u8868\u8fbe\u5f0fbitmap\u4ea4\u5e76\u5dee\u96c6\u5408\u8ba1\u7b97\u51fd\u6570, \u7b2c\u4e00\u4e2a\u53c2\u6570\u662fBitmap\u5217\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u7528\u6765\u8fc7\u6ee4\u7684\u7ef4\u5ea6\u5217\uff0c\u5373\u8ba1\u7b97\u7684key\u5217\uff0c\u7b2c\u4e09\u4e2a\u53c2\u6570\u662f\u8ba1\u7b97\u8868\u8fbe\u5f0f\u5b57\u7b26\u4e32\uff0c\u542b\u4e49\u662f\u4f9d\u636ekey\u5217\u8fdb\u884cbitmap\u4ea4\u5e76\u5dee\u96c6\u8868\u8fbe\u5f0f\u8ba1\u7b97\n\u8868\u8fbe\u5f0f\u652f\u6301\u7684\u8ba1\u7b97\u7b26\uff1a& \u4ee3\u8868\u4ea4\u96c6\u8ba1\u7b97\uff0c| \u4ee3\u8868\u5e76\u96c6\u8ba1\u7b97\uff0c- \u4ee3\u8868\u5dee\u96c6\u8ba1\u7b97, ^ \u4ee3\u8868\u5f02\u6216\u8ba1\u7b97\uff0c\\ \u4ee3\u8868\u8f6c\u4e49\u5b57\u7b26"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select orthogonal_bitmap_expr_calculate(user_id, tag, '(833736|999777)&(1308083|231207)&(1000|20000-30000)') from user_tag_bitmap where tag in (833736,999777,130808,231207,1000,20000,30000);\n\u6ce8\uff1a1000\u300120000\u300130000\u7b49\u6574\u5f62tag\uff0c\u4ee3\u8868\u7528\u6237\u4e0d\u540c\u6807\u7b7e\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"select orthogonal_bitmap_expr_calculate(user_id, tag, '(A:a/b|B:2\\\\-4)&(C:1-D:12)&E:23') from user_str_tag_bitmap where tag in ('A:a/b', 'B:2-4', 'C:1', 'D:12', 'E:23');\n \u6ce8\uff1a'A:a/b', 'B:2-4'\u7b49\u662f\u5b57\u7b26\u4e32\u7c7b\u578btag\uff0c\u4ee3\u8868\u7528\u6237\u4e0d\u540c\u6807\u7b7e, \u5176\u4e2d'B:2-4'\u9700\u8981\u8f6c\u4e49\u6210'B:2\\\\-4'\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"   ORTHOGONAL_BITMAP_EXPR_CALCULATE,BITMAP"))}m.isMDXComponent=!0}}]);