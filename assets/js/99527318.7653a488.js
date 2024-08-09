"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[222949],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var a=n(296540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},777852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(58168),i=(n(296540),n(15680));const r={title:"Building lakehouse using Doris and Paimon",language:"en"},o=void 0,s={unversionedId:"gettingStarted/tutorials/doris-paimon",id:"gettingStarted/tutorials/doris-paimon",title:"Building lakehouse using Doris and Paimon",description:"\x3c!--",source:"@site/docs/gettingStarted/tutorials/doris-paimon.md",sourceDirName:"gettingStarted/tutorials",slug:"/gettingStarted/tutorials/doris-paimon",permalink:"/docs/dev/gettingStarted/tutorials/doris-paimon",draft:!1,tags:[],version:"current",frontMatter:{title:"Building lakehouse using Doris and Paimon",language:"en"},sidebar:"get-starting",previous:{title:"Building lakehouse using Doris and Hudi",permalink:"/docs/dev/gettingStarted/tutorials/doris-hudi"},next:{title:"Building lakehouse using Doris and Paimon",permalink:"/docs/dev/gettingStarted/tutorials/doris-iceberg"}},l={},c=[{value:"Apache Doris &amp; Paimon",id:"apache-doris--paimon",level:2},{value:"User Guide",id:"user-guide",level:2},{value:"01 Environment Preparation",id:"01-environment-preparation",level:3},{value:"02 Environment Deployment",id:"02-environment-deployment",level:3},{value:"03 Data Preparation",id:"03-data-preparation",level:3},{value:"04 Data Query",id:"04-data-query",level:3},{value:"05 Read Incremental Data",id:"05-read-incremental-data",level:3},{value:"Benchmark",id:"benchmark",level:3},{value:"Query Optimization",id:"query-optimization",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.yg)(u,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"As a new open data management architecture, the Data Lakehouse integrates the high performance and real-time capabilities of data warehouses with the low cost and flexibility of data lakes, helping users more conveniently meet various data processing and analysis needs. It has been increasingly applied in enterprise big data systems."),(0,i.yg)("p",null,"In recent versions, Apache Doris has deepened its integration with data lakes and has evolved a mature Data Lakehouse solution."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Since version 0.15, Apache Doris has introduced Hive and Iceberg external tables, exploring the capabilities of combining with Apache Iceberg for data lakes."),(0,i.yg)("li",{parentName:"ul"},"Starting from version 1.2, Apache Doris officially introduced the Multi-Catalog feature, achieving automatic metadata mapping and data access for various data sources, along with many performance optimizations for external data reading and query execution. It now fully possesses the ability to build a high-speed and user-friendly Lakehouse architecture."),(0,i.yg)("li",{parentName:"ul"},"In version 2.1, Apache Doris' Data Lakehouse architecture was significantly enhanced, strengthening the reading and writing capabilities of mainstream data lake formats (Hudi, Iceberg, Paimon, etc.), introducing compatibility with multiple SQL dialects, and seamless migration from existing systems to Apache Doris. For data science and large-scale data reading scenarios, Doris integrated the Arrow Flight high-speed reading interface, achieving a 100-fold improvement in data transfer efficiency.")),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(851793).A,width:"2038",height:"1196"})),(0,i.yg)("h2",{id:"apache-doris--paimon"},"Apache Doris & Paimon"),(0,i.yg)("p",null,"Apache Paimon is a data lake format that innovatively combines the advantages of data lake formats and LSM structures, successfully introducing efficient real-time streaming update capabilities into data lake architecture. This enables Paimon to efficiently manage data and perform real-time analysis, providing strong support for building real-time Data Lakehouse architecture."),(0,i.yg)("p",null,"To fully leverage Paimon's capabilities and improve query efficiency for Paimon data, Apache Doris provides native support for several of Paimon's latest features:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Supports various types of Paimon Catalogs such as Hive Metastore and FileSystem."),(0,i.yg)("li",{parentName:"ul"},"Native support for Paimon 0.6's Primary Key Table Read Optimized feature."),(0,i.yg)("li",{parentName:"ul"},"Native support for Paimon 0.8's Primary Key Table Deletion Vector feature.")),(0,i.yg)("p",null,"With Apache Doris' high-performance query engine and Apache Paimon's efficient real-time streaming update capabilities, users can achieve:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Real-time data ingestion into the lake: Leveraging Paimon's LSM-Tree model, data ingestion into the lake can be reduced to a minute-level timeliness. Additionally, Paimon supports various data update capabilities including aggregation, deduplication, and partial column updates, making data flow more flexible and efficient."),(0,i.yg)("li",{parentName:"ul"},"High-performance data processing and analysis: Paimon's technologies such as Append Only Table, Read Optimized, and Deletion Vector can be seamlessly integrated with Doris' powerful query engine, enabling fast querying and analysis responses for lake data.")),(0,i.yg)("p",null,"In the future, Apache Doris will gradually support more advanced features of Apache Paimon, including Time Travel and incremental data reading, to jointly build a unified, high-performance, real-time lakehouse platform."),(0,i.yg)("p",null,"This article will explain how to quickly set up an Apache Doris + Apache Paimon testing & demonstration environment in a Docker environment and demonstrate the usage of various features."),(0,i.yg)("p",null,"For more information, please refer to ",(0,i.yg)("a",{parentName:"p",href:"/docs/dev/lakehouse/datalake-analytics/paimon"},"Paimon Catalog")),(0,i.yg)("h2",{id:"user-guide"},"User Guide"),(0,i.yg)("p",null,"All scripts and code mentioned in this article can be obtained from the following address: ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/samples/datalake/iceberg_and_paimon"},"https://github.com/apache/doris/tree/master/samples/datalake/iceberg_and_paimon")),(0,i.yg)("h3",{id:"01-environment-preparation"},"01 Environment Preparation"),(0,i.yg)("p",null,"This article uses Docker Compose for deployment, with the following components and versions:"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Component"),(0,i.yg)("th",{parentName:"tr",align:null},"Version"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Apache Doris"),(0,i.yg)("td",{parentName:"tr",align:null},"Default 2.1.5, can be modified")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Apache Paimon"),(0,i.yg)("td",{parentName:"tr",align:null},"0.8")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Apache Flink"),(0,i.yg)("td",{parentName:"tr",align:null},"1.18")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"MinIO"),(0,i.yg)("td",{parentName:"tr",align:null},"RELEASE.2024-04-29T09-56-05Z")))),(0,i.yg)("h3",{id:"02-environment-deployment"},"02 Environment Deployment"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Start all components"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"bash ./start_all.sh"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"After starting, you can use the following scripts to log in to the Flink command line or Doris command line:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"-- login flink\nbash ./start_flink_client.sh\n\n-- login doris\nbash ./start_doris_client.sh\n")))),(0,i.yg)("h3",{id:"03-data-preparation"},"03 Data Preparation"),(0,i.yg)("p",null,"After logging into the Flink command line, you can see a pre-built table. The table already contains some data that can be viewed using Flink SQL."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"Flink SQL> use paimon.db_paimon;\n[INFO] Execute statement succeed.\n\nFlink SQL> show tables;\n+------------+\n| table name |\n+------------+\n|   customer |\n+------------+\n1 row in set\n\nFlink SQL> show create table customer;\n+------------------------------------------------------------------------+\n|                                                                 result |\n+------------------------------------------------------------------------+\n| CREATE TABLE `paimon`.`db_paimon`.`customer` (\n  `c_custkey` INT NOT NULL,\n  `c_name` VARCHAR(25),\n  `c_address` VARCHAR(40),\n  `c_nationkey` INT NOT NULL,\n  `c_phone` CHAR(15),\n  `c_acctbal` DECIMAL(12, 2),\n  `c_mktsegment` CHAR(10),\n  `c_comment` VARCHAR(117),\n  CONSTRAINT `PK_c_custkey_c_nationkey` PRIMARY KEY (`c_custkey`, `c_nationkey`) NOT ENFORCED\n) PARTITIONED BY (`c_nationkey`)\nWITH (\n  'bucket' = '1',\n  'path' = 's3://warehouse/wh/db_paimon.db/customer',\n  'deletion-vectors.enabled' = 'true'\n)\n |\n+-------------------------------------------------------------------------+\n1 row in set\n\nFlink SQL> desc customer;\n+--------------+----------------+-------+-----------------------------+--------+-----------+\n|         name |           type |  null |                         key | extras | watermark |\n+--------------+----------------+-------+-----------------------------+--------+-----------+\n|    c_custkey |            INT | FALSE | PRI(c_custkey, c_nationkey) |        |           |\n|       c_name |    VARCHAR(25) |  TRUE |                             |        |           |\n|    c_address |    VARCHAR(40) |  TRUE |                             |        |           |\n|  c_nationkey |            INT | FALSE | PRI(c_custkey, c_nationkey) |        |           |\n|      c_phone |       CHAR(15) |  TRUE |                             |        |           |\n|    c_acctbal | DECIMAL(12, 2) |  TRUE |                             |        |           |\n| c_mktsegment |       CHAR(10) |  TRUE |                             |        |           |\n|    c_comment |   VARCHAR(117) |  TRUE |                             |        |           |\n+--------------+----------------+-------+-----------------------------+--------+-----------+\n8 rows in set\n\nFlink SQL> select * from customer order by c_custkey limit 4;\n+-----------+--------------------+--------------------------------+-------------+-----------------+-----------+--------------+--------------------------------+\n| c_custkey |             c_name |                      c_address | c_nationkey |         c_phone | c_acctbal | c_mktsegment |                      c_comment |\n+-----------+--------------------+--------------------------------+-------------+-----------------+-----------+--------------+--------------------------------+\n|         1 | Customer#000000001 |              IVhzIApeRb ot,c,E |          15 | 25-989-741-2988 |    711.56 |     BUILDING | to the even, regular platel... |\n|         2 | Customer#000000002 | XSTf4,NCwDVaWNe6tEgvwfmRchLXak |          13 | 23-768-687-3665 |    121.65 |   AUTOMOBILE | l accounts. blithely ironic... |\n|         3 | Customer#000000003 |                   MG9kdTD2WBHm |           1 | 11-719-748-3364 |   7498.12 |   AUTOMOBILE |  deposits eat slyly ironic,... |\n|        32 | Customer#000000032 | jD2xZzi UmId,DCtNBLXKj9q0Tl... |          15 | 25-430-914-2194 |   3471.53 |     BUILDING | cial ideas. final, furious ... |\n+-----------+--------------------+--------------------------------+-------------+-----------------+-----------+--------------+--------------------------------+\n4 rows in set\n")),(0,i.yg)("h3",{id:"04-data-query"},"04 Data Query"),(0,i.yg)("p",null,"As shown below, a Catalog named ",(0,i.yg)("inlineCode",{parentName:"p"},"paimon")," has been created in the Doris cluster (can be viewed using SHOW CATALOGS). The following is the statement for creating this Catalog:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'-- \u5df2\u521b\u5efa\uff0c\u65e0\u9700\u6267\u884c\nCREATE CATALOG `paimon` PROPERTIES (\n    "type" = "paimon",\n    "warehouse" = "s3://warehouse/wh/",\n    "s3.endpoint"="http://minio:9000",\n    "s3.access_key"="admin",\n    "s3.secret_key"="password",\n    "s3.region"="us-east-1"\n);\n')),(0,i.yg)("p",null,"You can query Paimon's data in Doris:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> use paimon.db_paimon;\nReading table information for completion of table and column names\nYou can turn off this feature to get a quicker startup with -A\n\nDatabase changed\nmysql> show tables;\n+---------------------+\n| Tables_in_db_paimon |\n+---------------------+\n| customer            |\n+---------------------+\n1 row in set (0.00 sec)\n\nmysql> select * from customer order by c_custkey limit 4;\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n| c_custkey | c_name             | c_address                             | c_nationkey | c_phone         | c_acctbal | c_mktsegment | c_comment                                                                                              |\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n|         1 | Customer#000000001 | IVhzIApeRb ot,c,E                     |          15 | 25-989-741-2988 |    711.56 | BUILDING     | to the even, regular platelets. regular, ironic epitaphs nag e                                         |\n|         2 | Customer#000000002 | XSTf4,NCwDVaWNe6tEgvwfmRchLXak        |          13 | 23-768-687-3665 |    121.65 | AUTOMOBILE   | l accounts. blithely ironic theodolites integrate boldly: caref                                        |\n|         3 | Customer#000000003 | MG9kdTD2WBHm                          |           1 | 11-719-748-3364 |   7498.12 | AUTOMOBILE   |  deposits eat slyly ironic, even instructions. express foxes detect slyly. blithely even accounts abov |\n|        32 | Customer#000000032 | jD2xZzi UmId,DCtNBLXKj9q0Tlp2iQ6ZcO3J |          15 | 25-430-914-2194 |   3471.53 | BUILDING     | cial ideas. final, furious requests across the e                                                       |\n+-----------+--------------------+---------------------------------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n4 rows in set (1.89 sec)\n")),(0,i.yg)("h3",{id:"05-read-incremental-data"},"05 Read Incremental Data"),(0,i.yg)("p",null,"You can update the data in the Paimon table using Flink SQL:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"Flink SQL> update customer set c_address='c_address_update' where c_nationkey = 1;\n[INFO] Submitting SQL update statement to the cluster...\n[INFO] SQL update statement has been successfully submitted to the cluster:\nJob ID: ff838b7b778a94396b332b0d93c8f7ac\n")),(0,i.yg)("p",null,"After the Flink SQL execution is complete, you can directly view the latest data in Doris:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select * from customer where c_nationkey=1 limit 2;\n+-----------+--------------------+-----------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n| c_custkey | c_name             | c_address       | c_nationkey | c_phone         | c_acctbal | c_mktsegment | c_comment                                                                                              |\n+-----------+--------------------+-----------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n|         3 | Customer#000000003 | c_address_update |           1 | 11-719-748-3364 |   7498.12 | AUTOMOBILE   |  deposits eat slyly ironic, even instructions. express foxes detect slyly. blithely even accounts abov |\n|       513 | Customer#000000513 | c_address_update |           1 | 11-861-303-6887 |    955.37 | HOUSEHOLD    | press along the quickly regular instructions. regular requests against the carefully ironic s          |\n+-----------+--------------------+-----------------+-------------+-----------------+-----------+--------------+--------------------------------------------------------------------------------------------------------+\n2 rows in set (0.19 sec)\n")),(0,i.yg)("h3",{id:"benchmark"},"Benchmark"),(0,i.yg)("p",null,"We conducted a simple test on the TPCDS 1000 dataset in Paimon (0.8) version, using Apache Doris 2.1.5 version and Trino 422 version, both with the Primary Key Table Read Optimized feature enabled."),(0,i.yg)("p",null,(0,i.yg)("img",{src:n(615523).A,width:"1280",height:"591"})),(0,i.yg)("p",null,"From the test results, it can be seen that Doris' average query performance on the standard static test set is 3-5 times that of Trino. In the future, we will optimize the Deletion Vector to further improve query efficiency in real business scenarios."),(0,i.yg)("h2",{id:"query-optimization"},"Query Optimization"),(0,i.yg)("p",null,"For baseline data, after introducing the Primary Key Table Read Optimized feature in Apache Paimon version 0.6, the query engine can directly access the underlying Parquet/ORC files, significantly improving the reading efficiency of baseline data. For unmerged incremental data (data increments generated by INSERT, UPDATE, or DELETE), they can be read through Merge-on-Read. In addition, Paimon introduced the Deletion Vector feature in version 0.8, which further enhances the query engine's efficiency in reading incremental data.\nApache Doris supports reading Deletion Vector through native Reader and performing Merge on Read. We demonstrate the query methods for baseline data and incremental data in a query using Doris' EXPLAIN statement."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> explain verbose select * from customer where c_nationkey < 3;\n+------------------------------------------------------------------------------------------------------------------------------------------------+\n| Explain String(Nereids Planner)                                                                                                                |\n+------------------------------------------------------------------------------------------------------------------------------------------------+\n| ...............                                                                                                                                |\n|                                                                                                                                                |\n|   0:VPAIMON_SCAN_NODE(68)                                                                                                                      |\n|      table: customer                                                                                                                           |\n|      predicates: (c_nationkey[#3] < 3)                                                                                                         |\n|      inputSplitNum=4, totalFileSize=238324, scanRanges=4                                                                                       |\n|      partition=3/0                                                                                                                             |\n|      backends:                                                                                                                                 |\n|        10002                                                                                                                                   |\n|          s3://warehouse/wh/db_paimon.db/customer/c_nationkey=1/bucket-0/data-15cee5b7-1bd7-42ca-9314-56d92c62c03b-0.orc start: 0 length: 66600 |\n|          s3://warehouse/wh/db_paimon.db/customer/c_nationkey=1/bucket-0/data-5d50255a-2215-4010-b976-d5dc656f3444-0.orc start: 0 length: 44501 |\n|          s3://warehouse/wh/db_paimon.db/customer/c_nationkey=2/bucket-0/data-e98fb7ef-ec2b-4ad5-a496-713cb9481d56-0.orc start: 0 length: 64059 |\n|          s3://warehouse/wh/db_paimon.db/customer/c_nationkey=0/bucket-0/data-431be05d-50fa-401f-9680-d646757d0f95-0.orc start: 0 length: 63164 |\n|      cardinality=18751, numNodes=1                                                                                                             |\n|      pushdown agg=NONE                                                                                                                         |\n|      paimonNativeReadSplits=4/4                                                                                                                |\n|      PaimonSplitStats:                                                                                                                         |\n|        SplitStat [type=NATIVE, rowCount=1542, rawFileConvertable=true, hasDeletionVector=true]                                                 |\n|        SplitStat [type=NATIVE, rowCount=750, rawFileConvertable=true, hasDeletionVector=false]                                                 |\n|        SplitStat [type=NATIVE, rowCount=750, rawFileConvertable=true, hasDeletionVector=false]                                                 |\n|      tuple ids: 0\n| ...............                                                                                                           |                                                                                                  |\n+------------------------------------------------------------------------------------------------------------------------------------------------+\n67 rows in set (0.23 sec)\n")),(0,i.yg)("p",null,"It can be seen that the table just updated by Flink SQL contains 4 shards, and all shards can be accessed through Native Reader (paimonNativeReadSplits=4/4). In addition, the hasDeletionVector property of the first shard is true, indicating that the shard has a corresponding Deletion Vector, and data will be filtered according to the Deletion Vector when reading."))}p.isMDXComponent=!0},851793:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/lakehouse-paimon-arch-06e8cd4085b6cfe498625d197012b0f5.jpeg"},615523:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/lakehouse-paimon-benchmark-e541bdf261a3a2061218e99665173249.PNG"}}]);