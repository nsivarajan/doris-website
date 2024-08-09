"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[720510],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>m});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var g=n.createContext({}),p=function(e){var t=n.useContext(g),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},y=function(e){var t=p(e.components);return n.createElement(g.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,m=d["".concat(g,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(m,o(o({ref:t},y),{},{components:a})):n.createElement(m,o({ref:t},y))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var g in t)hasOwnProperty.call(t,g)&&(i[g]=t[g]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},155089:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"Delta Lake Catalog",language:"zh-CN"},o=void 0,i={unversionedId:"lakehouse/datalake-analytics/deltalake",id:"lakehouse/datalake-analytics/deltalake",title:"Delta Lake Catalog",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/lakehouse/datalake-analytics/deltalake.md",sourceDirName:"lakehouse/datalake-analytics",slug:"/lakehouse/datalake-analytics/deltalake",permalink:"/zh-CN/docs/dev/lakehouse/datalake-analytics/deltalake",draft:!1,tags:[],version:"current",frontMatter:{title:"Delta Lake Catalog",language:"zh-CN"},sidebar:"docs",previous:{title:"BigQuery Catalog",permalink:"/zh-CN/docs/dev/lakehouse/datalake-analytics/bigquery"},next:{title:"Kudu Catalog",permalink:"/zh-CN/docs/dev/lakehouse/datalake-analytics/kudu"}},g={},p=[{value:"\u4f7f\u7528\u987b\u77e5",id:"\u4f7f\u7528\u987b\u77e5",level:2},{value:"\u7f16\u8bd1 Delta Lake Connector \u63d2\u4ef6",id:"\u7f16\u8bd1-delta-lake-connector-\u63d2\u4ef6",level:2},{value:"\u90e8\u7f72 Delta Lake Connector",id:"\u90e8\u7f72-delta-lake-connector",level:2},{value:"\u521b\u5efa Delta Lake Catalog",id:"\u521b\u5efa-delta-lake-catalog",level:2},{value:"\u5217\u7c7b\u578b\u6620\u5c04",id:"\u5217\u7c7b\u578b\u6620\u5c04",level:2}],y={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Delta Lake Catalog \u901a\u8fc7 ",(0,r.yg)("a",{parentName:"p",href:"../../../../docusaurus-plugin-content-docs-community/current/how-to-contribute/trino-connector-developer-guide.md"},"Trino Connector")," \u517c\u5bb9\u6846\u67b6\uff0c\u4f7f\u7528 Delta Lake Connector \u6765\u8bbf\u95ee Delta Lake \u8868\u3002"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u8be5\u529f\u80fd\u81ea Doris 3.0.1 \u7248\u672c\u5f00\u59cb\u652f\u6301\u3002")),(0,r.yg)("admonition",{title:"\u5907\u6ce8",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u8fd9\u662f\u4e00\u4e2a\u5b9e\u9a8c\u529f\u80fd\u3002")),(0,r.yg)("h2",{id:"\u4f7f\u7528\u987b\u77e5"},"\u4f7f\u7528\u987b\u77e5"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u5728\u4f7f\u7528 Trino Catalog \u8bbf\u95ee Delta Lake \u8868\u4e4b\u524d\uff0c\u5fc5\u987b\u5148\u7f16\u8bd1 Trino \u7684 Delta Lake \u63d2\u4ef6\uff0c\u5e76\u5c06\u5176\u653e\u5728\u6307\u5b9a\u76ee\u5f55\u4e0b\u3002\u5177\u4f53\u64cd\u4f5c\u6b65\u9aa4\u53c2\u8003\u4e0b\u6587\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5f53\u524d Doris \u9002\u914d Trino 435 \u7248\u672c\u7684\u63d2\u4ef6\uff0c\u5982\u679c\u4f7f\u7528\u4f4e\u4e8e\u6216\u9ad8\u4e8e 435 \u7248\u672c\u7684 Trino \u63d2\u4ef6\uff0c\u53ef\u80fd\u4f1a\u51fa\u73b0\u517c\u5bb9\u6027\u95ee\u9898\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5f53\u524d\u4e0d\u652f\u6301 Delta Lake \u7684 Time Travel \u529f\u80fd\u3002"),(0,r.yg)("li",{parentName:"ol"},"\u5f53\u524d\u4e0d\u652f\u6301\u67e5\u8be2 Delta Lake \u7684 history \u4fe1\u606f\u3002")),(0,r.yg)("h2",{id:"\u7f16\u8bd1-delta-lake-connector-\u63d2\u4ef6"},"\u7f16\u8bd1 Delta Lake Connector \u63d2\u4ef6"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u9700\u8981 JDK 17 \u7248\u672c\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain",metastring:"Text",Text:!0},"$ git clone https://github.com/apache/Doris-thirdparty.git\n$ cd Doris-thirdparty\n$ git checkout trino-435\n$ cd plugin/trino-delta-lake\n$ mvn clean install -DskipTest\n")),(0,r.yg)("p",null,"\u5b8c\u6210\u7f16\u8bd1\u540e\uff0c\u4f1a\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"trino/plugin/trino-delta-lake/target/")," \u4e0b\u5f97\u5230 ",(0,r.yg)("inlineCode",{parentName:"p"},"trino-delta-lake-435")," \u76ee\u5f55\u3002"),(0,r.yg)("p",null,"\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4e0b\u8f7d\u9884\u7f16\u8bd1\u7684 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/Doris-thirdparty/releases/download/trino-435-20240724/trino-delta-lake-435-20240724.tar.gz"},"trino-delta-lake-435-20240724.tar.gz")," \u5e76\u89e3\u538b\u3002"),(0,r.yg)("h2",{id:"\u90e8\u7f72-delta-lake-connector"},"\u90e8\u7f72 Delta Lake Connector"),(0,r.yg)("p",null,"\u5c06 ",(0,r.yg)("inlineCode",{parentName:"p"},"trino-delta-lake-435/")," \u76ee\u5f55\u653e\u5230\u6240\u6709 FE \u548c BE \u90e8\u7f72\u8def\u5f84\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"connectors/")," \u76ee\u5f55\u4e0b\u3002\uff08\u5982\u679c\u6ca1\u6709\uff0c\u53ef\u4ee5\u624b\u52a8\u521b\u5efa\uff09\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain",metastring:"Text",Text:!0},"\u251c\u2500\u2500 bin\n\u251c\u2500\u2500 conf\n\u251c\u2500\u2500 connectors\n\u2502   \u251c\u2500\u2500 trino-delta-lake-435\n...\n")),(0,r.yg)("p",null,"\u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u5efa\u8bae\u91cd\u542f FE\u3001BE \u8282\u70b9\u4ee5\u786e\u4fdd Connector \u53ef\u4ee5\u88ab\u6b63\u786e\u52a0\u8f7d\u3002"),(0,r.yg)("h2",{id:"\u521b\u5efa-delta-lake-catalog"},"\u521b\u5efa Delta Lake Catalog"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'create catalog delta_lake_catalog properties ( \n    "type"="trino-connector", \n    "trino.connector.name"="delta_lake",\n    "trino.hive.metastore"="thrift",\n    "trino.hive.metastore.uri"= "thrift://ip:portrait ",\n    "trino.hive.config.resources"="/path/to/core-site.xml,/path/to/hdfs-site.xml"\n);\n')),(0,r.yg)("p",null,"\u5176\u4e2d\uff1a\u4ee5 ",(0,r.yg)("inlineCode",{parentName:"p"},"trino.")," \u4e3a\u524d\u7f00\u7684\u5c5e\u6027\u90fd\u662f trino \u539f\u751f\u7684\u5c5e\u6027\uff0c\u66f4\u591a\u6709\u5173 Delta Lake \u7684\u5c5e\u6027\u53ef\u4ee5\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://trino.io/docs/current/connector/delta-lake.html"},"Trino \u6587\u6863"),"\u3002"),(0,r.yg)("h2",{id:"\u5217\u7c7b\u578b\u6620\u5c04"},"\u5217\u7c7b\u578b\u6620\u5c04"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Delta Lake"),(0,r.yg)("th",{parentName:"tr",align:null},"Trino"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN"),(0,r.yg)("td",{parentName:"tr",align:null},"BOOLEAN")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER"),(0,r.yg)("td",{parentName:"tr",align:null},"INTEGER"),(0,r.yg)("td",{parentName:"tr",align:null},"INT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BYTE"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SHORT"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"LONG"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT"),(0,r.yg)("td",{parentName:"tr",align:null},"REAL"),(0,r.yg)("td",{parentName:"tr",align:null},"FLOAT")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE"),(0,r.yg)("td",{parentName:"tr",align:null},"DOUBLE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p,s)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p,s)"),(0,r.yg)("td",{parentName:"tr",align:null},"DECIMAL(p,s)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRING"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"BINARY"),(0,r.yg)("td",{parentName:"tr",align:null},"VARBINARY"),(0,r.yg)("td",{parentName:"tr",align:null},"STRING")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATE")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMPNTZ (TIMESTAMP","_","NTZ)"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP(6)"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP"),(0,r.yg)("td",{parentName:"tr",align:null},"TIMESTAMP(3) WITH TIME ZONE"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY"),(0,r.yg)("td",{parentName:"tr",align:null},"ARRAY")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"MAP"),(0,r.yg)("td",{parentName:"tr",align:null},"MAP"),(0,r.yg)("td",{parentName:"tr",align:null},"MAP")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"STRUCT"),(0,r.yg)("td",{parentName:"tr",align:null},"ROW"),(0,r.yg)("td",{parentName:"tr",align:null},"STRUCT")))))}u.isMDXComponent=!0}}]);