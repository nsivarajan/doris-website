"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[559579],{15680:(e,a,n)=>{n.d(a,{xA:()=>c,yg:()=>u});var t=n(296540);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=t.createContext({}),p=function(e){var a=t.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(d.Provider,{value:a},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(n),y=l,u=s["".concat(d,".").concat(y)]||s[y]||g[y]||i;return n?t.createElement(u,r(r({ref:a},c),{},{components:n})):t.createElement(u,r({ref:a},c))}));function u(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=y;var o={};for(var d in a)hasOwnProperty.call(a,d)&&(o[d]=a[d]);o.originalType=e,o[s]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},518087:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=n(58168),l=(n(296540),n(15680));const i={title:"\u963f\u91cc\u4e91 DLF",language:"zh-CN"},r=void 0,o={unversionedId:"lakehouse/datalake-analytics/dlf",id:"version-2.1/lakehouse/datalake-analytics/dlf",title:"\u963f\u91cc\u4e91 DLF",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/lakehouse/datalake-analytics/dlf.md",sourceDirName:"lakehouse/datalake-analytics",slug:"/lakehouse/datalake-analytics/dlf",permalink:"/zh-CN/docs/2.1/lakehouse/datalake-analytics/dlf",draft:!1,tags:[],version:"2.1",frontMatter:{title:"\u963f\u91cc\u4e91 DLF",language:"zh-CN"},sidebar:"docs",previous:{title:"Paimon Catalog",permalink:"/zh-CN/docs/2.1/lakehouse/datalake-analytics/paimon"},next:{title:"Hive",permalink:"/zh-CN/docs/2.1/lakehouse/datalake-building/hive-build"}},d={},p=[{value:"\u8fde\u63a5 DLF",id:"\u8fde\u63a5-dlf",level:2},{value:"\u521b\u5efaDLF Catalog",id:"\u521b\u5efadlf-catalog",level:3},{value:"\u4f7f\u7528\u5f00\u542f\u4e86HDFS\u670d\u52a1\u7684OSS\u5b58\u50a8\u6570\u636e",id:"\u4f7f\u7528\u5f00\u542f\u4e86hdfs\u670d\u52a1\u7684oss\u5b58\u50a8\u6570\u636e",level:3},{value:"\u8bbf\u95eeDLF Iceberg\u8868",id:"\u8bbf\u95eedlf-iceberg\u8868",level:3},{value:"\u5217\u7c7b\u578b\u6620\u5c04",id:"\u5217\u7c7b\u578b\u6620\u5c04",level:2}],c={toc:p},s="wrapper";function g(e){let{components:a,...n}=e;return(0,l.yg)(s,(0,t.A)({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("h1",{id:"\u963f\u91cc\u4e91-dlf"},"\u963f\u91cc\u4e91 DLF"),(0,l.yg)("p",null,"\u963f\u91cc\u4e91 Data Lake Formation(DLF) \u662f\u963f\u91cc\u4e91\u4e0a\u7684\u7edf\u4e00\u5143\u6570\u636e\u7ba1\u7406\u670d\u52a1\u3002\u517c\u5bb9 Hive Metastore \u534f\u8bae\u3002"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},(0,l.yg)("a",{parentName:"p",href:"https://www.aliyun.com/product/bigdata/dlf"},"\u4ec0\u4e48\u662f Data Lake Formation"))),(0,l.yg)("p",null,"\u56e0\u6b64\u6211\u4eec\u4e5f\u53ef\u4ee5\u548c\u8bbf\u95ee Hive Metastore \u4e00\u6837\uff0c\u8fde\u63a5\u5e76\u8bbf\u95ee DLF\u3002"),(0,l.yg)("h2",{id:"\u8fde\u63a5-dlf"},"\u8fde\u63a5 DLF"),(0,l.yg)("h3",{id:"\u521b\u5efadlf-catalog"},"\u521b\u5efaDLF Catalog"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG dlf PROPERTIES (\n   "type"="hms",\n   "hive.metastore.type" = "dlf",\n   "dlf.proxy.mode" = "DLF_ONLY",\n   "dlf.endpoint" = "datalake-vpc.cn-beijing.aliyuncs.com",\n   "dlf.region" = "cn-beijing",\n   "dlf.uid" = "uid",\n   "dlf.catalog.id" = "catalog_id", //\u53ef\u9009\n   "dlf.access_key" = "ak",\n   "dlf.secret_key" = "sk"\n);\n')),(0,l.yg)("p",null,"\u5176\u4e2d ",(0,l.yg)("inlineCode",{parentName:"p"},"type")," \u56fa\u5b9a\u4e3a ",(0,l.yg)("inlineCode",{parentName:"p"},"hms"),"\u3002 \u5982\u679c\u9700\u8981\u516c\u7f51\u8bbf\u95ee\u963f\u91cc\u4e91\u5bf9\u8c61\u5b58\u50a8\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u8bbe\u7f6e ",(0,l.yg)("inlineCode",{parentName:"p"},'"dlf.access.public"="true"')),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"dlf.endpoint"),"\uff1aDLF Endpoint\uff0c\u53c2\u9605\uff1a",(0,l.yg)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/zh/data-lake-formation/latest/regions-and-endpoints"},"DLF Region\u548cEndpoint\u5bf9\u7167\u8868")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"dlf.region"),"\uff1aDLF Region\uff0c\u53c2\u9605\uff1a",(0,l.yg)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/zh/data-lake-formation/latest/regions-and-endpoints"},"DLF Region\u548cEndpoint\u5bf9\u7167\u8868")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"dlf.uid"),"\uff1a\u963f\u91cc\u4e91\u8d26\u53f7\u3002\u5373\u963f\u91cc\u4e91\u63a7\u5236\u53f0\u53f3\u4e0a\u89d2\u4e2a\u4eba\u4fe1\u606f\u7684\u201c\u4e91\u8d26\u53f7ID\u201d\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"dlf.catalog.id"),"(\u53ef\u9009)\uff1aCatalog Id\u3002\u7528\u4e8e\u6307\u5b9a\u6570\u636e\u76ee\u5f55\uff0c\u5982\u679c\u4e0d\u586b\uff0c\u4f7f\u7528\u9ed8\u8ba4\u7684Catalog ID\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"dlf.access_key"),"\uff1aAccessKey\u3002\u53ef\u4ee5\u5728 ",(0,l.yg)("a",{parentName:"li",href:"https://ram.console.aliyun.com/manage/ak"},"\u963f\u91cc\u4e91\u63a7\u5236\u53f0")," \u4e2d\u521b\u5efa\u548c\u7ba1\u7406\u3002"),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("inlineCode",{parentName:"li"},"dlf.secret_key"),"\uff1aSecretKey\u3002\u53ef\u4ee5\u5728 ",(0,l.yg)("a",{parentName:"li",href:"https://ram.console.aliyun.com/manage/ak"},"\u963f\u91cc\u4e91\u63a7\u5236\u53f0")," \u4e2d\u521b\u5efa\u548c\u7ba1\u7406\u3002")),(0,l.yg)("p",null,"\u5176\u4ed6\u914d\u7f6e\u9879\u4e3a\u56fa\u5b9a\u503c\uff0c\u65e0\u9700\u6539\u52a8\u3002"),(0,l.yg)("p",null,"\u4e4b\u540e\uff0c\u53ef\u4ee5\u50cf\u6b63\u5e38\u7684 Hive MetaStore \u4e00\u6837\uff0c\u8bbf\u95ee DLF \u4e0b\u7684\u5143\u6570\u636e\u3002"),(0,l.yg)("p",null,"\u540c Hive Catalog \u4e00\u6837\uff0c\u652f\u6301\u8bbf\u95ee DLF \u4e2d\u7684 Hive/Iceberg/Hudi \u7684\u5143\u6570\u636e\u4fe1\u606f\u3002"),(0,l.yg)("h3",{id:"\u4f7f\u7528\u5f00\u542f\u4e86hdfs\u670d\u52a1\u7684oss\u5b58\u50a8\u6570\u636e"},"\u4f7f\u7528\u5f00\u542f\u4e86HDFS\u670d\u52a1\u7684OSS\u5b58\u50a8\u6570\u636e"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u786e\u8ba4OSS\u5f00\u542f\u4e86HDFS\u670d\u52a1\u3002",(0,l.yg)("a",{parentName:"p",href:"https://help.aliyun.com/document_detail/419505.html?spm=a2c4g.2357115.0.i0"},"\u5f00\u901a\u5e76\u6388\u6743\u8bbf\u95eeOSS-HDFS\u670d\u52a1"),"\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u4e0b\u8f7dSDK\u3002",(0,l.yg)("a",{parentName:"p",href:"https://github.com/aliyun/alibabacloud-jindodata/blob/master/docs/user/5.x/5.0.0-beta7/jindodata_download.md"},"JindoData SDK\u4e0b\u8f7d"),"\u3002\u5982\u679c\u96c6\u7fa4\u4e0a\u5df2\u6709SDK\u76ee\u5f55\uff0c\u5ffd\u7565\u8fd9\u4e00\u6b65\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u89e3\u538b\u4e0b\u8f7d\u540e\u7684jindosdk.tar.gz\u6216\u8005\u5728\u96c6\u7fa4\u4e0a\u627e\u5230Jindo SDK\u7684\u76ee\u5f55\uff0c\u5c06\u5176lib\u76ee\u5f55\u4e0b\u7684",(0,l.yg)("inlineCode",{parentName:"p"},"jindo-core.jar\u3001jindo-sdk.jar"),"\u653e\u5230",(0,l.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/fe/lib"),"\u548c",(0,l.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/be/lib/java_extensions/preload-extensions"),"\u76ee\u5f55\u4e0b\u3002")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u521b\u5efaDLF Catalog\uff0c\u5e76\u914d\u7f6e",(0,l.yg)("inlineCode",{parentName:"p"},"oss.hdfs.enabled"),"\u4e3a",(0,l.yg)("inlineCode",{parentName:"p"},"true"),"\uff1a"),(0,l.yg)("pre",{parentName:"li"},(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG dlf_oss_hdfs PROPERTIES (\n   "type"="hms",\n   "hive.metastore.type" = "dlf",\n   "dlf.proxy.mode" = "DLF_ONLY",\n   "dlf.endpoint" = "datalake-vpc.cn-beijing.aliyuncs.com",\n   "dlf.region" = "cn-beijing",\n   "dlf.uid" = "uid",\n   "dlf.catalog.id" = "catalog_id", //\u53ef\u9009\n   "dlf.access_key" = "ak",\n   "dlf.secret_key" = "sk",\n   "oss.hdfs.enabled" = "true"\n);\n'))),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"\u5f53Jindo SDK\u7248\u672c\u4e0eEMR\u96c6\u7fa4\u4e0a\u6240\u7528\u7684\u7248\u672c\u4e0d\u4e00\u81f4\u65f6\uff0c\u4f1a\u51fa\u73b0",(0,l.yg)("inlineCode",{parentName:"p"},"Plugin not found"),"\u7684\u95ee\u9898\uff0c\u9700\u66f4\u6362\u5230\u5bf9\u5e94\u7248\u672c\u3002"))),(0,l.yg)("h3",{id:"\u8bbf\u95eedlf-iceberg\u8868"},"\u8bbf\u95eeDLF Iceberg\u8868"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE CATALOG dlf_iceberg PROPERTIES (\n   "type"="iceberg",\n   "iceberg.catalog.type" = "dlf",\n   "dlf.proxy.mode" = "DLF_ONLY",\n   "dlf.endpoint" = "datalake-vpc.cn-beijing.aliyuncs.com",\n   "dlf.region" = "cn-beijing",\n   "dlf.uid" = "uid",\n   "dlf.catalog.id" = "catalog_id", //\u53ef\u9009\n   "dlf.access_key" = "ak",\n   "dlf.secret_key" = "sk"\n);\n')),(0,l.yg)("h2",{id:"\u5217\u7c7b\u578b\u6620\u5c04"},"\u5217\u7c7b\u578b\u6620\u5c04"),(0,l.yg)("p",null,"\u548c Hive Catalog \u4e00\u81f4\uff0c\u53ef\u53c2\u9605 ",(0,l.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1/lakehouse/datalake-analytics/hive"},"Hive Catalog")," \u4e2d ",(0,l.yg)("strong",{parentName:"p"},"\u5217\u7c7b\u578b\u6620\u5c04")," \u4e00\u8282\u3002"))}g.isMDXComponent=!0}}]);