"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[364408],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>u});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(a),g=r,u=d["".concat(s,".").concat(g)]||d[g]||y[g]||l;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},703655:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(58168),r=(a(296540),a(15680));const l={title:"OUTFILE",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Manipulation-Statements/OUTFILE",id:"version-2.1/sql-manual/sql-statements/Data-Manipulation-Statements/OUTFILE",title:"OUTFILE",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-statements/Data-Manipulation-Statements/OUTFILE.md",sourceDirName:"sql-manual/sql-statements/Data-Manipulation-Statements",slug:"/sql-manual/sql-statements/Data-Manipulation-Statements/OUTFILE",permalink:"/docs/2.1/sql-manual/sql-statements/Data-Manipulation-Statements/OUTFILE",draft:!1,tags:[],version:"2.1",frontMatter:{title:"OUTFILE",language:"en"},sidebar:"docs",previous:{title:"ANALYZE",permalink:"/docs/2.1/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/ANALYZE"},next:{title:"SHOW ALTER TABLE MATERIALIZED VIEW",permalink:"/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW"}},s={},p=[{value:"OUTFILE",id:"outfile",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"grammar:",id:"grammar",level:4},{value:"illustrate:",id:"illustrate",level:4},{value:"DataType Mapping",id:"datatype-mapping",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},d="wrapper";function y(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"outfile"},"OUTFILE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"OUTFILE"),(0,r.yg)("h3",{id:"description"},"description"),(0,r.yg)("p",null,"This statement is used to export query results to a file using the ",(0,r.yg)("inlineCode",{parentName:"p"},"SELECT INTO OUTFILE")," command. Currently, it supports exporting to remote storage, such as HDFS, S3, BOS, COS (Tencent Cloud), through the Broker process, S3 protocol, or HDFS protocol."),(0,r.yg)("h4",{id:"grammar"},"grammar:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'query_stmt\nINTO OUTFILE "file_path"\n[format_as]\n[properties]\n')),(0,r.yg)("h4",{id:"illustrate"},"illustrate:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"file_path"),(0,r.yg)("p",{parentName:"li"},"file",(0,r.yg)("em",{parentName:"p"},"path points to the path where the file is stored and the file prefix. Such as `hdfs://path/to/my_file"),"`."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"The final filename will consist of `my_file_`, the file number and the file format suffix. The file serial number starts from 0, and the number is the number of files to be divided. Such as:\n\nmy_file_abcdefg_0.csv\nmy_file_abcdefg_1.csv\nmy_file_abcdegf_2.csv\n")),(0,r.yg)("p",{parentName:"li"},"You can also omit the file prefix and specify only the file directory, such as: ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://path/to/"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"format_as"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"FORMAT AS CSV\n")),(0,r.yg)("p",{parentName:"li"},"Specifies the export format. Supported formats include CSV, PARQUET, CSV_WITH_NAMES, CSV_WITH_NAMES_AND_TYPES and ORC. Default is CSV."),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Note: PARQUET, CSV_WITH_NAMES, CSV_WITH_NAMES_AND_TYPES, and ORC are supported starting in version 1.2 ."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"properties"),(0,r.yg)("p",{parentName:"li"},"Specify related properties. Currently exporting via the Broker process, S3 protocol, or HDFS protocol is supported."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},'grammar:\n[PROPERTIES ("key"="value", ...)]\nThe following properties are supported:\n\nFile related properties\n    column_separator: column separator,is only for CSV format. mulit-bytes is supported starting in version 1.2, such as: "\\\\x01", "abc".\n    line_delimiter: line delimiter,is only for CSV format. mulit-bytes supported starting in version 1.2, such as: "\\\\x01", "abc".\n    max_file_size: the size limit of a single file, if the result exceeds this value, it will be cut into multiple files, the value range of max_file_size is [5MB, 2GB] and the default is 1GB. (When specified that the file format is ORC, the size of the actual division file will be a multiples of 64MB, such as: specify max_file_size = 5MB, and actually use 64MB as the division; specify max_file_size = 65MB, and will actually use 128MB as cut division points.)\n    delete_existing_files: default `false`. If it is specified as true, you will first delete all files specified in the directory specified by the file_path, and then export the data to the directory.For example: "file_path" = "/user/tmp", then delete all files and directory under "/user/"; "file_path" = "/user/tmp/", then delete all files and directory under "/user/tmp/" \n    file_suffix: Specify the suffix of the export file. If this parameter is not specified, the default suffix for the file format will be used.\n\nBroker related properties need to be prefixed with `broker.`:\n    broker.name: broker name\n    broker.hadoop.security.authentication: specify the authentication method as kerberos\n    broker.kerberos_principal: specifies the principal of kerberos\n    broker.kerberos_keytab: specifies the path to the keytab file of kerberos. The file must be the absolute path to the file on the server where the broker process is located. and can be accessed by the Broker process\n\nHDFS related properties:\n    fs.defaultFS: namenode address and port\n    hadoop.username: hdfs username\n    dfs.nameservices: if hadoop enable HA, please set fs nameservice. See hdfs-site.xml\n    dfs.ha.namenodes.[nameservice ID]\uff1aunique identifiers for each NameNode in the nameservice. See hdfs-site.xml\n    dfs.namenode.rpc-address.[nameservice ID].[name node ID]: the fully-qualified RPC address for each NameNode to listen on. See hdfs-site.xml\n    dfs.client.failover.proxy.provider.[nameservice ID]\uff1athe Java class that HDFS clients use to contact the Active NameNode, usually it is org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider\n\n    For a kerberos-authentication enabled Hadoop cluster, additional properties need to be set:\n    dfs.namenode.kerberos.principal: HDFS namenode service principal\n    hadoop.security.authentication: kerberos\n    hadoop.kerberos.principal: the Kerberos pincipal that Doris will use when connectiong to HDFS.\n    hadoop.kerberos.keytab: HDFS client keytab location.\n\nFor the S3 protocol, you can directly execute the S3 protocol configuration:\ns3.endpoint\ns3.access_key\ns3.secret_key\ns3.region\nuse_path_style: (optional) default false . The S3 SDK uses the virtual-hosted style by default. However, some object storage systems may not be enabled or support virtual-hosted style access. At this time, we can add the use_path_style parameter to force the use of path style access method.\n')),(0,r.yg)("blockquote",{parentName:"li"},(0,r.yg)("p",{parentName:"blockquote"},"Note that to use the ",(0,r.yg)("inlineCode",{parentName:"p"},"delete_existing_files")," parameter, you also need to add the configuration ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_delete_existing_files = true")," to the fe.conf file and restart the FE. Only then will the ",(0,r.yg)("inlineCode",{parentName:"p"},"delete_existing_files")," parameter take effect. Setting ",(0,r.yg)("inlineCode",{parentName:"p"},"delete_existing_files = true")," is a dangerous operation and it is recommended to only use it in a testing environment."))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Data Types for Export"),(0,r.yg)("p",{parentName:"li"},"All file formats support the export of basic data types, while only csv/orc/csv_with_names/csv_with_names_and_types currently support the export of complex data types (ARRAY/MAP/STRUCT). Nested complex data types are not supported.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Concurrent Export"),(0,r.yg)("p",{parentName:"li"},"Setting the session variable ",(0,r.yg)("inlineCode",{parentName:"p"},"set enable_parallel_outfile = true;")," enables concurrent export using outfile. For detailed usage, see ",(0,r.yg)("a",{parentName:"p",href:"/docs/2.1/data-operate/export/outfile"},"Export Query Result"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Export to Local"),(0,r.yg)("p",{parentName:"li"},"To export to a local file, you need configure ",(0,r.yg)("inlineCode",{parentName:"p"},"enable_outfile_to_local=true")," in fe.conf."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'select * from tbl1 limit 10 \nINTO OUTFILE "file:///home/work/path/result_";\n')))),(0,r.yg)("h4",{id:"datatype-mapping"},"DataType Mapping"),(0,r.yg)("p",null,"Parquet and ORC file formats have their own data types. The export function of Doris can automatically export the Doris data types to the corresponding data types of the Parquet/ORC file format. The following are the data type mapping relationship of the Doris data types and the Parquet/ORC file format data types:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"The mapping relationship between the Doris data types to the ORC data types is: "),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Orc Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,r.yg)("td",{parentName:"tr",align:null},"tinyint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"smallint"),(0,r.yg)("td",{parentName:"tr",align:null},"smallint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"int")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"largeInt"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datev2"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetime"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetimev2"),(0,r.yg)("td",{parentName:"tr",align:null},"timestamp")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null},"float")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null},"double")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"char / varchar / string"),(0,r.yg)("td",{parentName:"tr",align:null},"string")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decimal"),(0,r.yg)("td",{parentName:"tr",align:null},"decimal")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"struct"),(0,r.yg)("td",{parentName:"tr",align:null},"struct")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"map")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"array"))))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"When Doris exports data to the Parquet file format, the Doris memory data will be converted to Arrow memory data format first, and then the paraquet file format is written by Arrow. The mapping relationship between the Doris data types to the ARROW data types is: "),(0,r.yg)("table",{parentName:"li"},(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Doris Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Arrow Type"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"boolean"),(0,r.yg)("td",{parentName:"tr",align:null},"boolean")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,r.yg)("td",{parentName:"tr",align:null},"int8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"smallint"),(0,r.yg)("td",{parentName:"tr",align:null},"int16")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"int32")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"int64")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"largeInt"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"date"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datev2"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetime"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"datetimev2"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"float"),(0,r.yg)("td",{parentName:"tr",align:null},"float32")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"double"),(0,r.yg)("td",{parentName:"tr",align:null},"float64")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"char / varchar / string"),(0,r.yg)("td",{parentName:"tr",align:null},"utf8")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"decimal"),(0,r.yg)("td",{parentName:"tr",align:null},"decimal128")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"struct"),(0,r.yg)("td",{parentName:"tr",align:null},"struct")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"map"),(0,r.yg)("td",{parentName:"tr",align:null},"map")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"array"),(0,r.yg)("td",{parentName:"tr",align:null},"list")))))),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use the broker method to export, and export the simple query results to the file ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://path/to/result.txt"),". Specifies that the export format is CSV. Use ",(0,r.yg)("inlineCode",{parentName:"p"},"my_broker")," and set kerberos authentication information. Specify the column separator as ",(0,r.yg)("inlineCode",{parentName:"p"},",")," and the row separator as ",(0,r.yg)("inlineCode",{parentName:"p"},"\\n"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "100MB"\n);\n')),(0,r.yg)("p",{parentName:"li"},"If the final generated file is not larger than 100MB, it will be: ",(0,r.yg)("inlineCode",{parentName:"p"},"result_0.csv"),".\nIf larger than 100MB, it may be ",(0,r.yg)("inlineCode",{parentName:"p"},"result_0.csv, result_1.csv, ..."),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Export the simple query results to the file ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://path/to/result.parquet"),". Specify the export format as PARQUET. Use ",(0,r.yg)("inlineCode",{parentName:"p"},"my_broker")," and set kerberos authentication information."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT c1, c2, c3 FROM tbl\nINTO OUTFILE "hdfs://path/to/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.hadoop.security.authentication" = "kerberos",\n    "broker.kerberos_principal" = "doris@YOUR.COM",\n    "broker.kerberos_keytab" = "/home/doris/my.keytab"\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Export the query result of the CTE statement to the file ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://path/to/result.txt"),". The default export format is CSV. Use ",(0,r.yg)("inlineCode",{parentName:"p"},"my_broker")," and set hdfs high availability information. Use the default row and column separators."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'WITH\nx1 AS\n(SELECT k1, k2 FROM tbl1),\nx2 AS\n(SELECT k3 FROM tbl2)\nSELEC k1 FROM x1 UNION SELECT k3 FROM x2\nINTO OUTFILE "hdfs://path/to/result_"\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.username"="user",\n    "broker.password"="passwd",\n    "broker.dfs.nameservices" = "my_ha",\n    "broker.dfs.ha.namenodes.my_ha" = "my_namenode1, my_namenode2",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode1" = "nn1_host:rpc_port",\n    "broker.dfs.namenode.rpc-address.my_ha.my_namenode2" = "nn2_host:rpc_port",\n    "broker.dfs.client.failover.proxy.provider.my_ha" = "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"\n);\n')),(0,r.yg)("p",{parentName:"li"},"If the final generated file is not larger than 1GB, it will be: ",(0,r.yg)("inlineCode",{parentName:"p"},"result_0.csv"),".\nIf larger than 1GB, it may be ",(0,r.yg)("inlineCode",{parentName:"p"},"result_0.csv, result_1.csv, ..."),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Export the query result of the UNION statement to the file ",(0,r.yg)("inlineCode",{parentName:"p"},"bos://bucket/result.txt"),". Specify the export format as PARQUET. Use ",(0,r.yg)("inlineCode",{parentName:"p"},"my_broker")," and set hdfs high availability information. The PARQUET format does not require a column delimiter to be specified.\nAfter the export is complete, an identity file is generated."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'SELECT k1 FROM tbl1 UNION SELECT k2 FROM tbl1\nINTO OUTFILE "bos://bucket/result_"\nFORMAT AS PARQUET\nPROPERTIES\n(\n    "broker.name" = "my_broker",\n    "broker.bos_endpoint" = "http://bj.bcebos.com",\n    "broker.bos_accesskey" = "xxxxxxxxxxxxxxxxxxxxxxxxxxx",\n    "broker.bos_secret_accesskey" = "yyyyyyyyyyyyyyyyyyyyyyyyy"\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Export the query result of the select statement to the file ",(0,r.yg)("inlineCode",{parentName:"p"},"s3a://${bucket_name}/path/result.txt"),". Specify the export format as csv.\nAfter the export is complete, an identity file is generated."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'select k1,k2,v1 from tbl1 limit 100000\ninto outfile "s3a://my_bucket/export/my_file_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "hdfs_broker",\n    "broker.fs.s3a.access.key" = "xxx",\n    "broker.fs.s3a.secret.key" = "xxxx",\n    "broker.fs.s3a.endpoint" = "https://cos.xxxxxx.myqcloud.com/",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "1024MB",\n    "success_file_name" = "SUCCESS"\n)\n')),(0,r.yg)("p",{parentName:"li"},"If the final generated file is not larger than 1GB, it will be: ",(0,r.yg)("inlineCode",{parentName:"p"},"my_file_0.csv"),".\nIf larger than 1GB, it may be ",(0,r.yg)("inlineCode",{parentName:"p"},"my_file_0.csv, result_1.csv, ..."),".\nVerify on cos"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre"},"   1. A path that does not exist will be automatically created\n   2. Access.key/secret.key/endpoint needs to be confirmed with students of cos. Especially the value of endpoint does not need to fill in bucket_name.\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use the s3 protocol to export to bos, and enable concurrent export."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'set enable_parallel_outfile = true;\nselect k1 from tb1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n     "s3.endpoint" = "http://s3.bd.bcebos.com",\n     "s3.access_key" = "xxxx",\n     "s3.secret_key" = "xxx",\n     "s3.region" = "bd"\n)\n')),(0,r.yg)("p",{parentName:"li"},"The resulting file is prefixed with ",(0,r.yg)("inlineCode",{parentName:"p"},"my_file_{fragment_instance_id}_"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use the s3 protocol to export to bos, and enable concurrent export of session variables.\nNote: However, since the query statement has a top-level sorting node, even if the concurrently exported session variable is enabled for this query, it cannot be exported concurrently."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'set enable_parallel_outfile = true;\nselect k1 from tb1 order by k1 limit 1000\ninto outfile "s3://my_bucket/export/my_file_"\nformat as csv\nproperties\n(\n     "s3.endpoint" = "http://s3.bd.bcebos.com",\n     "s3.access_key" = "xxxx",\n     "s3.secret_key" = "xxx",\n     "s3.region" = "bd"\n)\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Use hdfs export to export simple query results to the file ",(0,r.yg)("inlineCode",{parentName:"p"},"hdfs://${host}:${fileSystem_port}/path/to/result.txt"),". Specify the export format as CSV and the user name as work. Specify the column separator as ",(0,r.yg)("inlineCode",{parentName:"p"},",")," and the row separator as ",(0,r.yg)("inlineCode",{parentName:"p"},"\\n"),"."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'-- the default port of fileSystem_port is 9000\nSELECT * FROM tbl\nINTO OUTFILE "hdfs://${host}:${fileSystem_port}/path/to/result_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "fs.defaultFS" = "hdfs://ip:port",\n    "hadoop.username" = "work"\n);\n')),(0,r.yg)("p",{parentName:"li"},"If the Hadoop cluster is highly available and Kerberos authentication is enabled, you can refer to the following SQL statement:"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM tbl\nINTO OUTFILE \"hdfs://path/to/result_\"\nFORMAT AS CSV\nPROPERTIES\n(\n'fs.defaultFS'='hdfs://hacluster/',\n'dfs.nameservices'='hacluster',\n'dfs.ha.namenodes.hacluster'='n1,n2',\n'dfs.namenode.rpc-address.hacluster.n1'='192.168.0.1:8020',\n'dfs.namenode.rpc-address.hacluster.n2'='192.168.0.2:8020',\n'dfs.client.failover.proxy.provider.hacluster'='org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider',\n'dfs.namenode.kerberos.principal'='hadoop/_HOST@REALM.COM'\n'hadoop.security.authentication'='kerberos',\n'hadoop.kerberos.principal'='doris_test@REALM.COM',\n'hadoop.kerberos.keytab'='/path/to/doris_test.keytab'\n);\n\nIf the final generated file is not larger than 100MB, it will be: `result_0.csv`.\nIf larger than 100MB, it may be `result_0.csv, result_1.csv, ...`.\n\n"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Export the query result of the select statement to the file ",(0,r.yg)("inlineCode",{parentName:"p"},"cosn://${bucket_name}/path/result.txt")," on Tencent Cloud Object Storage (COS). Specify the export format as csv.\nAfter the export is complete, an identity file is generated."),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'select k1,k2,v1 from tbl1 limit 100000\ninto outfile "cosn://my_bucket/export/my_file_"\nFORMAT AS CSV\nPROPERTIES\n(\n    "broker.name" = "broker_name",\n    "broker.fs.cosn.userinfo.secretId" = "xxx",\n    "broker.fs.cosn.userinfo.secretKey" = "xxxx",\n    "broker.fs.cosn.bucket.endpoint_suffix" = "cos.xxxxxx.myqcloud.com",\n    "column_separator" = ",",\n    "line_delimiter" = "\\n",\n    "max_file_size" = "1024MB",\n    "success_file_name" = "SUCCESS"\n)\n')))),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("p",null,"OUTFILE"),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Export data volume and export efficiency"),(0,r.yg)("p",{parentName:"li"},"This function essentially executes an SQL query command. The final result is a single-threaded output. Therefore, the time-consuming of the entire export includes the time-consuming of the query itself and the time-consuming of writing the final result set. If the query is large, you need to set the session variable ",(0,r.yg)("inlineCode",{parentName:"p"},"query_timeout")," to appropriately extend the query timeout.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Management of export files"),(0,r.yg)("p",{parentName:"li"},"Doris does not manage exported files. Including the successful export, or the remaining files after the export fails, all need to be handled by the user.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Export to local file"),(0,r.yg)("p",{parentName:"li"},"The ability to export to a local file is not available for public cloud users, only for private deployments. And the default user has full control over the cluster nodes. Doris will not check the validity of the export path filled in by the user. If the process user of Doris does not have write permission to the path, or the path does not exist, an error will be reported. At the same time, for security reasons, if a file with the same name already exists in this path, the export will also fail."),(0,r.yg)("p",{parentName:"li"},"Doris does not manage files exported locally, nor does it check disk space, etc. These files need to be managed by the user, such as cleaning and so on.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Results Integrity Guarantee"),(0,r.yg)("p",{parentName:"li"},"This command is a synchronous command, so it is possible that the task connection is disconnected during the execution process, so that it is impossible to live the exported data whether it ends normally, or whether it is complete. At this point, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"success_file_name")," parameter to request that a successful file identifier be generated in the directory after the task is successful. Users can use this file to determine whether the export ends normally.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Other Points to Note"),(0,r.yg)("p",{parentName:"li"},"See ",(0,r.yg)("a",{parentName:"p",href:"../../../data-operate/export/outfile.md"},"Export Query Result")))))}y.isMDXComponent=!0}}]);