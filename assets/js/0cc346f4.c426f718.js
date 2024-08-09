"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[749722],{15680:(e,n,a)=>{a.d(n,{xA:()=>m,yg:()=>d});var t=a(296540);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var g=t.createContext({}),p=function(e){var n=t.useContext(g),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},m=function(e){var n=p(e.components);return t.createElement(g.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,g=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),y=l,d=u["".concat(g,".").concat(y)]||u[y]||s[y]||r;return a?t.createElement(d,i(i({ref:n},m),{},{components:a})):t.createElement(d,i({ref:n},m))}));function d(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=y;var o={};for(var g in n)hasOwnProperty.call(n,g)&&(o[g]=n[g]);o.originalType=e,o[u]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}y.displayName="MDXCreateElement"},780876:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=a(58168),l=(a(296540),a(15680));const r={title:"Converting Source Data",language:"en"},i=void 0,o={unversionedId:"data-operate/import/load-data-convert",id:"version-3.0/data-operate/import/load-data-convert",title:"Converting Source Data",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/data-operate/import/load-data-convert.md",sourceDirName:"data-operate/import",slug:"/data-operate/import/load-data-convert",permalink:"/docs/data-operate/import/load-data-convert",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Converting Source Data",language:"en"},sidebar:"docs",previous:{title:"Loading Transaction and Atomicity",permalink:"/docs/data-operate/import/load-atomicity"},next:{title:"Minimum Number of Replicas Loading",permalink:"/docs/data-operate/import/min-load-replica-num"}},g={},p=[{value:"Usage Scenarios",id:"usage-scenarios",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"BROKER LOAD",id:"broker-load",level:3},{value:"STREAM LOAD",id:"stream-load",level:3},{value:"ROUTINE LOAD",id:"routine-load",level:3},{value:"Reference Manual",id:"reference-manual",level:2},{value:"Loading Syntax",id:"loading-syntax",level:3},{value:"Column Mapping",id:"column-mapping",level:3},{value:"Pre-filtering",id:"pre-filtering",level:3},{value:"Column Transformation",id:"column-transformation",level:3},{value:"Post-Filtering",id:"post-filtering",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Data Quality Issues and Filtering Threshold",id:"data-quality-issues-and-filtering-threshold",level:3}],m={toc:p},u="wrapper";function s(e){let{components:n,...a}=e;return(0,l.yg)(u,(0,t.A)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"usage-scenarios"},"Usage Scenarios"),(0,l.yg)("p",null,"During the import process, Doris supports some transformations on the source data, including mapping, conversion, preceding filtering, and post-filtering."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Mapping: Import column A from the source data into column B in the target table.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Conversion: Calculate the values in the target column based on the columns in the source data using an expression. Custom functions are supported in the expression.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Preceding Filtering: Filter rows in the source data and only import rows that meet the filtering conditions.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Post-Filtering: Filter rows in the result and only import rows that meet the filtering conditions."))),(0,l.yg)("h2",{id:"quick-start"},"Quick Start"),(0,l.yg)("h3",{id:"broker-load"},"BROKER LOAD"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label1\n(\n    DATA INFILE("bos://bucket/input/file")\n    INTO TABLE `my_table`\n    (k1, k2, tmpk3)\n    PRECEDING FILTER k1 = 1\n    SET (\n        k3 = tmpk3 + 1\n    )\n    WHERE k1 > k2\n)\nWITH BROKER bos\n(\n    ...\n);\n')),(0,l.yg)("h3",{id:"stream-load"},"STREAM LOAD"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'curl\n--location-trusted\n-u user:passwd\n-H "columns: k1, k2, tmpk3, k3 = tmpk3 + 1"\n-H "where: k1 > k2"\n-T file.txt\nhttp://host:port/api/testDb/testTbl/_stream_load\n')),(0,l.yg)("h3",{id:"routine-load"},"ROUTINE LOAD"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE ROUTINE LOAD example_db.label1 ON my_table\nCOLUMNS(k1, k2, tmpk3, k3 = tmpk3 + 1),\nPRECEDING FILTER k1 = 1,\nWHERE k1 > k2\n...\n")),(0,l.yg)("h2",{id:"reference-manual"},"Reference Manual"),(0,l.yg)("h3",{id:"loading-syntax"},"Loading Syntax"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Stream Load")),(0,l.yg)("p",null,"Add ",(0,l.yg)("inlineCode",{parentName:"p"},"columns")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"where")," parameters in the HTTP header."),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"columns")," specify column mapping and value transformation.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"where")," specify post-filtering."))),(0,l.yg)("p",null,"Stream load does not support preceding filtering."),(0,l.yg)("p",null,"Example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-bash"},'curl\n--location-trusted\n-u user:passwd\n-H "columns: k1, k2, tmpk3, k3 = tmpk3 + 1"\n-H "where: k1 > k2"\n-T file.txt\nhttp://host:port/api/testDb/testTbl/_stream_load\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Broker Load")),(0,l.yg)("p",null,"Define data transformation in the SQL statement, including:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"(k1, k2, tmpk3)")," specifies column mapping.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"PRECEDING FILTER")," specifies preceding filtering.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"SET")," specifies column transformation.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"WHERE")," specifies post-filtering."))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},'LOAD LABEL example_db.label1\n(\n    DATA INFILE("bos://bucket/input/file")\n    INTO TABLE `my_table`\n    (k1, k2, tmpk3)\n    PRECEDING FILTER k1 = 1\n    SET (\n        k3 = tmpk3 + 1\n    )\n    WHERE k1 > k2\n)\nWITH BROKER bos\n(\n    ...\n);\n')),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Routine Load")),(0,l.yg)("p",null,"Define data transformation in the SQL statement, including:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"COLUMNS")," specifies column mapping and column transformation.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"PRECEDING FILTER")," specifies preceding filtering.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("inlineCode",{parentName:"p"},"WHERE")," specifies post-filtering."))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"CREATE ROUTINE LOAD example_db.label1 ON my_table\nCOLUMNS(k1, k2, tmpk3, k3 = tmpk3 + 1),\nPRECEDING FILTER k1 = 1,\nWHERE k1 > k2\n...\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"Insert Into")),(0,l.yg)("p",null,"Insert Into can perform data transformation directly in the ",(0,l.yg)("inlineCode",{parentName:"p"},"SELECT")," statement, and add a ",(0,l.yg)("inlineCode",{parentName:"p"},"WHERE")," clause for data filtering."),(0,l.yg)("h3",{id:"column-mapping"},"Column Mapping"),(0,l.yg)("p",null,"The purpose of column mapping is to describe the information of each column in the load file, which is equivalent to defining names for the columns in the source data. By describing the column mapping relationship, we can load source files with different column orders and column numbers into Doris. Let's illustrate it through examples:"),(0,l.yg)("p",null,"Suppose the source file has 4 columns with the following contents (the column names in the table header are for illustration purposes only and are not actually present in the file):"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Column 1"),(0,l.yg)("th",{parentName:"tr",align:null},"Column 2"),(0,l.yg)("th",{parentName:"tr",align:null},"Column 3"),(0,l.yg)("th",{parentName:"tr",align:null},"Column 4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"beijing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"shanghai"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"4"),(0,l.yg)("td",{parentName:"tr",align:null},"\\N"),(0,l.yg)("td",{parentName:"tr",align:null},"chongqing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Note: ",(0,l.yg)("inlineCode",{parentName:"p"},"\\N")," represents null in the source file.")),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Adjusting Mapping Order")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Suppose there are 4 columns in the table: ",(0,l.yg)("inlineCode",{parentName:"p"},"k1, k2, k3, k4"),". The desired load mapping is as follows:"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"Column 1 -> k1\nColumn 2 -> k3\nColumn 3 -> k2\nColumn 4 -> k4\n")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"The order of column mapping should be as follows:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"(k1, k3, k2, k4)\n")),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"The number of columns in the source file is greater than the number of columns in the table.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Suppose there are 3 columns in the table: ",(0,l.yg)("inlineCode",{parentName:"p"},"k1, k2, k3"),". The desired load mapping is as follows:"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"Column 1 -> k1\nColumn 2 -> k3\nColumn 3 -> k2\n")),(0,l.yg)("ol",{start:6},(0,l.yg)("li",{parentName:"ol"},"The order of column mapping should be as follows:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"(k1, k3, k2, tmpk4)\n")),(0,l.yg)("ol",{start:7},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Here, ",(0,l.yg)("inlineCode",{parentName:"p"},"tmpk4")," is a custom column name that doesn't exist in the table. Doris will ignore this non-existing column name.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"The number of columns in the source file is less than the number of columns in the table, and default values will be used to fill the missing columns.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Suppose there are 5 columns in the table: ",(0,l.yg)("inlineCode",{parentName:"p"},"k1, k2, k3, k4, k5"),". The desired load mapping is as follows:"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"Column 1 -> k1\nColumn 2 -> k3\nColumn 3 -> k2\n")),(0,l.yg)("ol",{start:10},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Here, only the first 3 columns from the source file will be used. The columns ",(0,l.yg)("inlineCode",{parentName:"p"},"k4")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"k5")," are expected to be filled with default values.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"The order of column mapping should be as follows:"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"(k1, k3, k2)\n")),(0,l.yg)("ol",{start:12},(0,l.yg)("li",{parentName:"ol"},"If the columns ",(0,l.yg)("inlineCode",{parentName:"li"},"k4")," and ",(0,l.yg)("inlineCode",{parentName:"li"},"k5")," have default values, they will be filled accordingly. Otherwise, if the columns are nullable, they will be filled with ",(0,l.yg)("inlineCode",{parentName:"li"},"null")," values. Otherwise, the loading job will report an error.")),(0,l.yg)("h3",{id:"pre-filtering"},"Pre-filtering"),(0,l.yg)("p",null,"Pre-filtering is a process of filtering the raw data that is read. Currently, it is only supported in BROKER LOAD and ROUTINE LOAD."),(0,l.yg)("p",null,"Pre-filtering can be applied in the following scenarios:"),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Filtering before transformation: It allows filtering of data before performing column mapping and transformation. This way, unnecessary data can be filtered out in advance.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Filtering columns that do not exist in the table: It can be used as a filtering identifier when certain columns are not present in the table.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Handling data from multiple tables: For example, if the source data contains data from multiple tables (or data from multiple tables is written to the same Kafka message queue), each row may include a column name that identifies which table the data belongs to. Users can use pre-filtering conditions to select and load the corresponding table data."))),(0,l.yg)("h3",{id:"column-transformation"},"Column Transformation"),(0,l.yg)("p",null,"Column transformation enables users to modify the values of columns in the source files. Currently, Doris supports the use of built-in functions and user-defined functions for transformation."),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Note: User-defined functions belong to a specific database, and when using custom functions for transformation, users need to have read permissions on that database.")),(0,l.yg)("p",null,"Transformation operations are typically defined in conjunction with column mapping. In the following example, we illustrate the process:"),(0,l.yg)("p",null,"Assume that the source file has 4 columns with the following content (the column names in the header are for descriptive purposes only and are not actually present in the file):"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Column 1"),(0,l.yg)("th",{parentName:"tr",align:null},"Column 2"),(0,l.yg)("th",{parentName:"tr",align:null},"Column 3"),(0,l.yg)("th",{parentName:"tr",align:null},"Column 4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"beijing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"shanghai"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"\\N"),(0,l.yg)("td",{parentName:"tr",align:null},"400"),(0,l.yg)("td",{parentName:"tr",align:null},"chongqing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Load the transformed column values into the table from the source file.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Assuming the table has 4 columns: ",(0,l.yg)("inlineCode",{parentName:"p"},"k1"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"k2"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"k3"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"k4"),", and we want the following mapping and transformation relationships:"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"Column 1       -> k1\nColumn 2 * 100 -> k3\nColumn 3       -> k2\nColumn 4       -> k4\n")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"The order of column mapping should be as follows:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"(k1, tmpk3, k2, k4, k3 = tmpk3 * 100)\n")),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},"Here, we rename the second column in the source file as ",(0,l.yg)("inlineCode",{parentName:"li"},"tmpk3")," and specify that the value of column ",(0,l.yg)("inlineCode",{parentName:"li"},"k3")," in the table is ",(0,l.yg)("inlineCode",{parentName:"li"},"tmpk3 * 100"),". The final data in the table would be as follows:")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"k1"),(0,l.yg)("th",{parentName:"tr",align:null},"k2"),(0,l.yg)("th",{parentName:"tr",align:null},"k3"),(0,l.yg)("th",{parentName:"tr",align:null},"k4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"beijing"),(0,l.yg)("td",{parentName:"tr",align:null},"10000"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"shanghai"),(0,l.yg)("td",{parentName:"tr",align:null},"20000"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.yg)("td",{parentName:"tr",align:null},"30000"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"null"),(0,l.yg)("td",{parentName:"tr",align:null},"chongqing"),(0,l.yg)("td",{parentName:"tr",align:null},"40000"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("ol",{start:5},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Perform conditional column transformation using the ",(0,l.yg)("inlineCode",{parentName:"p"},"case when")," function.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Assuming the table has 4 columns: ",(0,l.yg)("inlineCode",{parentName:"p"},"k1"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"k2"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"k3"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"k4"),", and we want to transform the values ",(0,l.yg)("inlineCode",{parentName:"p"},"beijing"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"shanghai"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"guangzhou"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"chongqing")," in the source data to their corresponding region IDs before loading:"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"Column 1                 -> k1\nColumn 2                 -> k2\nColumn 3 with region ID  -> k3\nColumn 4                 -> k4\n")),(0,l.yg)("ol",{start:7},(0,l.yg)("li",{parentName:"ol"},"The order of column mapping should be as follows:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},'(k1, k2, tmpk3, k4, k3 = case tmpk3 when "beijing" then 1 when "shanghai" then 2 when "guangzhou" then 3 when "chongqing" then 4 else null end)\n')),(0,l.yg)("ol",{start:8},(0,l.yg)("li",{parentName:"ol"},"The final data in the table would be as follows:")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"k1"),(0,l.yg)("th",{parentName:"tr",align:null},"k2"),(0,l.yg)("th",{parentName:"tr",align:null},"k3"),(0,l.yg)("th",{parentName:"tr",align:null},"k4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"null"),(0,l.yg)("td",{parentName:"tr",align:null},"400"),(0,l.yg)("td",{parentName:"tr",align:null},"4"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("ol",{start:9},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Transform null values in the source file to 0 during load. Also, perform the region ID transformation as shown in example 2.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Assuming the table has ",(0,l.yg)("inlineCode",{parentName:"p"},"k1, k2, k3, k4")," as its four columns. While performing the region ID conversion, we also want to convert null values in the k1 column of the source data to 0 during load:"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"If Column 1 is null, then convert it to 0 -> k1\nColumn 2                                  -> k2\nColumn 3                                  -> k3\nColumn 4                                  -> k4\n")),(0,l.yg)("ol",{start:11},(0,l.yg)("li",{parentName:"ol"},"The order of column mapping should be as follows:")),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},'(tmpk1, k2, tmpk3, k4, k1 = ifnull(tmpk1, 0), k3 = case tmpk3 when "beijing" then 1 when "shanghai" then 2 when "guangzhou" then 3 when "chongqing" then 4 else null end)\n')),(0,l.yg)("ol",{start:12},(0,l.yg)("li",{parentName:"ol"},"The final data in the table would be as follows:")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"k1"),(0,l.yg)("th",{parentName:"tr",align:null},"k2"),(0,l.yg)("th",{parentName:"tr",align:null},"k3"),(0,l.yg)("th",{parentName:"tr",align:null},"k4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"0"),(0,l.yg)("td",{parentName:"tr",align:null},"400"),(0,l.yg)("td",{parentName:"tr",align:null},"4"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("h3",{id:"post-filtering"},"Post-Filtering"),(0,l.yg)("p",null,"After column mapping and transformation, we can filter out data that we don't want to load into Doris using filtering conditions. Let's illustrate this with an example:"),(0,l.yg)("p",null,"Assume that the source file has 4 columns with the following content (the column names in the table header are for descriptive purposes only and are not actually present):"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Column 1"),(0,l.yg)("th",{parentName:"tr",align:null},"Column 2"),(0,l.yg)("th",{parentName:"tr",align:null},"Column 3"),(0,l.yg)("th",{parentName:"tr",align:null},"Column 4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"beijing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"shanghai"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"null"),(0,l.yg)("td",{parentName:"tr",align:null},"400"),(0,l.yg)("td",{parentName:"tr",align:null},"chongqing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("ol",null,(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Filtering with default column mapping and transformation.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Suppose the table has 4 columns: ",(0,l.yg)("inlineCode",{parentName:"p"},"k1, k2, k3, k4"),". We can define filtering conditions directly without column mapping and transformation. For example, if we only want to load data rows from the source file where the value in the 4th column is greater than 1.2, the filtering condition would be:"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-sql"},"where k4 > 1.2\n")),(0,l.yg)("ol",{start:3},(0,l.yg)("li",{parentName:"ol"},"The final data in the table would be as follows:")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"k1"),(0,l.yg)("th",{parentName:"tr",align:null},"k2"),(0,l.yg)("th",{parentName:"tr",align:null},"k3"),(0,l.yg)("th",{parentName:"tr",align:null},"k4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"guangzhou"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"null"),(0,l.yg)("td",{parentName:"tr",align:null},"400"),(0,l.yg)("td",{parentName:"tr",align:null},"chongqing"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("ol",{start:4},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"In the default case, Doris performs column mapping in sequential order, so the 4th column in the source file is automatically mapped to the ",(0,l.yg)("inlineCode",{parentName:"p"},"k4")," column in the table.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Filtering transformed data.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Suppose the table has 4 columns: ",(0,l.yg)("inlineCode",{parentName:"p"},"k1, k2, k3, k4"),". In the column transformation example, we converted province names to IDs. Now, let's say we want to filter out data with an ID of 3. The transformation and filtering conditions would be as follows:"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},'(k1, k2, tmpk3, k4, k3 = case tmpk3 when "beijing" then 1 when "shanghai" then 2 when "guangzhou" then 3 when "chongqing" then 4 else null end)\nwhere k3 != 3\n')),(0,l.yg)("ol",{start:7},(0,l.yg)("li",{parentName:"ol"},"The final data in the table would be as follows:")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"k1"),(0,l.yg)("th",{parentName:"tr",align:null},"k2"),(0,l.yg)("th",{parentName:"tr",align:null},"k3"),(0,l.yg)("th",{parentName:"tr",align:null},"k4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"100"),(0,l.yg)("td",{parentName:"tr",align:null},"1"),(0,l.yg)("td",{parentName:"tr",align:null},"1.1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"null"),(0,l.yg)("td",{parentName:"tr",align:null},"400"),(0,l.yg)("td",{parentName:"tr",align:null},"4"),(0,l.yg)("td",{parentName:"tr",align:null},"1.4")))),(0,l.yg)("ol",{start:8},(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Here, we can observe that the column values used for filtering are the final transformed column values, not the original data.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Filtering with multiple conditions.")),(0,l.yg)("li",{parentName:"ol"},(0,l.yg)("p",{parentName:"li"},"Suppose the table has 4 columns: ",(0,l.yg)("inlineCode",{parentName:"p"},"k1, k2, k3, k4"),". We want to filter out data where the ",(0,l.yg)("inlineCode",{parentName:"p"},"k1")," column is null and the ",(0,l.yg)("inlineCode",{parentName:"p"},"k4")," column is less than 1.2. The filtering condition would be:"))),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"where k1 is not null and k4 >= 1.2\n")),(0,l.yg)("ol",{start:11},(0,l.yg)("li",{parentName:"ol"},"The final data in the table would be as follows:")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"k1"),(0,l.yg)("th",{parentName:"tr",align:null},"k2"),(0,l.yg)("th",{parentName:"tr",align:null},"k3"),(0,l.yg)("th",{parentName:"tr",align:null},"k4"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"200"),(0,l.yg)("td",{parentName:"tr",align:null},"2"),(0,l.yg)("td",{parentName:"tr",align:null},"1.2")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"300"),(0,l.yg)("td",{parentName:"tr",align:null},"3"),(0,l.yg)("td",{parentName:"tr",align:null},"1.3")))),(0,l.yg)("h2",{id:"best-practices"},"Best Practices"),(0,l.yg)("h3",{id:"data-quality-issues-and-filtering-threshold"},"Data Quality Issues and Filtering Threshold"),(0,l.yg)("p",null,"The rows of data processed in the load job can be classified into the following three categories:"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Filtered Rows: Data rows that are filtered out due to data quality issues. Data quality issues can include type errors, precision errors, strings exceeding length limits, mismatched file column counts, and data rows filtered out due to missing corresponding partitions.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Unselected Rows: These are data rows filtered out due to ",(0,l.yg)("inlineCode",{parentName:"p"},"preceding filter")," or ",(0,l.yg)("inlineCode",{parentName:"p"},"where")," column filtering conditions.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Loaded Rows: Data rows that are successfully loaded."))),(0,l.yg)("p",null,"Doris's load task allows users to set a maximum error rate (",(0,l.yg)("inlineCode",{parentName:"p"},"max_filter_ratio"),"). If the error rate of the loaded data is below the threshold, the error rows will be ignored, and the other correct data will be loaded."),(0,l.yg)("p",null,"The error rate is calculated as follows:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-Plain"},"#Filtered Rows / (#Filtered Rows + #Loaded Rows)\n")),(0,l.yg)("p",null,"This means that ",(0,l.yg)("inlineCode",{parentName:"p"},"Unselected Rows")," are not included in the error rate calculation."))}s.isMDXComponent=!0}}]);