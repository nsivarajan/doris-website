"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[82333],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=p(n),c=o,m=g["".concat(s,".").concat(c)]||g[c]||u[c]||i;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},553187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(58168),o=(n(296540),n(15680));const i={title:"Logstash Doris Output Plugin",language:"en"},r=void 0,l={unversionedId:"ecosystem/logstash",id:"version-2.1/ecosystem/logstash",title:"Logstash Doris Output Plugin",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/ecosystem/logstash.md",sourceDirName:"ecosystem",slug:"/ecosystem/logstash",permalink:"/docs/2.1/ecosystem/logstash",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Logstash Doris Output Plugin",language:"en"},sidebar:"ecosystem",previous:{title:"Kyuubi",permalink:"/docs/2.1/ecosystem/kyuubi"},next:{title:"Beats Doris Output Plugin",permalink:"/docs/2.1/ecosystem/beats"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Installation",id:"installation",level:2},{value:"Obtaining the Plugin",id:"obtaining-the-plugin",level:3},{value:"Installing the Plugin",id:"installing-the-plugin",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Usage Example",id:"usage-example",level:2},{value:"TEXT Log Collection Example",id:"text-log-collection-example",level:3},{value:"JSON Log Collection Example",id:"json-log-collection-example",level:3}],d={toc:p},g="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(g,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"logstash-doris-output-plugin"},"Logstash Doris output plugin"),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"Logstash is a log ETL framework (collect, preprocess, send to storage systems) that supports custom output plugins to write data into storage systems. The Logstash Doris output plugin is a plugin for outputting data to Doris."),(0,o.yg)("p",null,"The Logstash Doris output plugin calls the ",(0,o.yg)("a",{parentName:"p",href:"/docs/2.1/data-operate/import/stream-load-manual"},"Doris Stream Load")," HTTP interface to write data into Doris in real-time, offering capabilities such as multi-threaded concurrency, failure retries, custom Stream Load formats and parameters, and output write speed."),(0,o.yg)("p",null,"Using the Logstash Doris output plugin mainly involves three steps:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Install the plugin into Logstash"),(0,o.yg)("li",{parentName:"ol"},"Configure the Doris output address and other parameters"),(0,o.yg)("li",{parentName:"ol"},"Start Logstash to write data into Doris in real-time")),(0,o.yg)("h2",{id:"installation"},"Installation"),(0,o.yg)("h3",{id:"obtaining-the-plugin"},"Obtaining the Plugin"),(0,o.yg)("p",null,"You can download the plugin from the official website or compile it from the source code yourself."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Download from the official website"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Installation package without dependencies\n",(0,o.yg)("a",{parentName:"li",href:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/logstash-output-doris-1.0.0.gem"},"https://apache-doris-releases.oss-accelerate.aliyuncs.com/logstash-output-doris-1.0.0.gem")),(0,o.yg)("li",{parentName:"ul"},"Installation package with dependencies\n",(0,o.yg)("a",{parentName:"li",href:"https://apache-doris-releases.oss-accelerate.aliyuncs.com/logstash-output-doris-1.0.0.zip"},"https://apache-doris-releases.oss-accelerate.aliyuncs.com/logstash-output-doris-1.0.0.zip")))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Compile from source code"))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"cd extension/logstash/\n\ngem build logstash-output-doris.gemspec\n")),(0,o.yg)("h3",{id:"installing-the-plugin"},"Installing the Plugin"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Standard Installation")),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"${LOGSTASH_HOME}")," is the installation directory of Logstash. Run the ",(0,o.yg)("inlineCode",{parentName:"p"},"bin/logstash-plugin")," command under it to install the plugin."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"${LOGSTASH_HOME}/bin/logstash-plugin install logstash-output-doris-1.0.0.gem\n\nValidating logstash-output-doris-1.0.0.gem\nInstalling logstash-output-doris\nInstallation successful\n")),(0,o.yg)("p",null,"The standard installation mode will automatically install the ruby modules that the plugin depends on. In cases where the network is not available, it will get stuck and cannot complete. In such cases, you can download the zip installation package with dependencies for a completely offline installation, noting that you need to use ",(0,o.yg)("inlineCode",{parentName:"p"},"file://")," to specify the local file system."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Offline Installation")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"${LOGSTASH_HOME}/bin/logstash-plugin install file:///tmp/logstash-output-doris-1.0.0.zip\n\nInstalling file: logstash-output-doris-1.0.0.zip\nResolving dependencies.........................\nInstall successful\n")),(0,o.yg)("h2",{id:"configuration"},"Configuration"),(0,o.yg)("p",null,"The configuration for the Logstash Doris output plugin is as follows:"),(0,o.yg)("table",null,(0,o.yg)("thead",{parentName:"table"},(0,o.yg)("tr",{parentName:"thead"},(0,o.yg)("th",{parentName:"tr",align:null},"Configuration"),(0,o.yg)("th",{parentName:"tr",align:null},"Description"))),(0,o.yg)("tbody",{parentName:"table"},(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"http_hosts")),(0,o.yg)("td",{parentName:"tr",align:null},"Stream Load HTTP address, formatted as a string array, can have one or more elements, each element is host:port. For example: ",'["http://fe1:8030", "http://fe2:8030"]')),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"user")),(0,o.yg)("td",{parentName:"tr",align:null},"Doris username, this user needs to have import permissions for the corresponding Doris database and table")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"password")),(0,o.yg)("td",{parentName:"tr",align:null},"Password for the Doris user")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"db")),(0,o.yg)("td",{parentName:"tr",align:null},"The Doris database name to write into")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"table")),(0,o.yg)("td",{parentName:"tr",align:null},"The Doris table name to write into")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"label_prefix")),(0,o.yg)("td",{parentName:"tr",align:null},"Doris Stream Load Label prefix, the final generated Label is ",(0,o.yg)("em",{parentName:"td"},"{label",(0,o.yg)("em",{parentName:"em"},"prefix}"),"{db}",(0,o.yg)("em",{parentName:"em"},"{table}"),"{yyyymmdd",(0,o.yg)("em",{parentName:"em"},"hhmmss}"),"{uuid}"),", the default value is logstash")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"headers")),(0,o.yg)("td",{parentName:"tr",align:null},'Doris Stream Load headers parameter, the syntax format is a ruby map, for example: headers => { "format" => "json", "read_json_by_line" => "true" }')),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"mapping")),(0,o.yg)("td",{parentName:"tr",align:null},"Mapping from Logstash fields to Doris table fields, refer to the usage examples in the subsequent sections")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"message_only")),(0,o.yg)("td",{parentName:"tr",align:null},"A special form of mapping, only outputs the Logstash @message field to Doris, default is false")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"max_retries")),(0,o.yg)("td",{parentName:"tr",align:null},"Number of retries for Doris Stream Load requests on failure, default is -1 for infinite retries to ensure data reliability")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"log_request")),(0,o.yg)("td",{parentName:"tr",align:null},"Whether to output Doris Stream Load request and response metadata in logs for troubleshooting, default is false")),(0,o.yg)("tr",{parentName:"tbody"},(0,o.yg)("td",{parentName:"tr",align:null},(0,o.yg)("inlineCode",{parentName:"td"},"log_speed_interval")),(0,o.yg)("td",{parentName:"tr",align:null},"Time interval for outputting speed in logs, unit is seconds, default is 10, setting to 0 can disable this type of logging")))),(0,o.yg)("h2",{id:"usage-example"},"Usage Example"),(0,o.yg)("h3",{id:"text-log-collection-example"},"TEXT Log Collection Example"),(0,o.yg)("p",null,"This example demonstrates TEXT log collection using Doris FE logs as an example."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"1. Data")),(0,o.yg)("p",null,"FE log files are typically located at the fe/log/fe.log file under the Doris installation directory. They are typical Java program logs, including fields such as timestamp, log level, thread name, code location, and log content. Not only do they contain normal logs, but also exception logs with stacktraces, which are multiline. Log collection and storage need to combine the main log and stacktrace into a single log entry."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"2024-07-08 21:18:01,432 INFO (Statistics Job Appender|61) [StatisticsJobAppender.runAfterCatalogReady():70] Stats table not available, skip\n2024-07-08 21:18:53,710 WARN (STATS_FETCH-0|208) [StmtExecutor.executeInternalQuery():3332] Failed to run internal SQL: OriginStatement{originStmt='SELECT * FROM __internal_schema.column_statistics WHERE part_id is NULL  ORDER BY update_time DESC LIMIT 500000', idx=0}\norg.apache.doris.common.UserException: errCode = 2, detailMessage = tablet 10031 has no queryable replicas. err: replica 10032's backend 10008 does not exist or not alive\n        at org.apache.doris.planner.OlapScanNode.addScanRangeLocations(OlapScanNode.java:931) ~[doris-fe.jar:1.2-SNAPSHOT]\n        at org.apache.doris.planner.OlapScanNode.computeTabletInfo(OlapScanNode.java:1197) ~[doris-fe.jar:1.2-SNAPSHOT]\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"2. Table Creation")),(0,o.yg)("p",null,"The table structure includes fields such as the log's creation time, collection time, hostname, log file path, log type, log level, thread name, code location, and log content."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'CREATE TABLE `doris_log` (\n  `log_time` datetime NULL COMMENT \'log content time\',\n  `collect_time` datetime NULL COMMENT \'log agent collect time\',\n  `host` text NULL COMMENT \'hostname or ip\',\n  `path` text NULL COMMENT \'log file path\',\n  `type` text NULL COMMENT \'log type\',\n  `level` text NULL COMMENT \'log level\',\n  `thread` text NULL COMMENT \'log thread\',\n  `position` text NULL COMMENT \'log code position\',\n  `message` text NULL COMMENT \'log message\',\n  INDEX idx_host (`host`) USING INVERTED COMMENT \'\',\n  INDEX idx_path (`path`) USING INVERTED COMMENT \'\',\n  INDEX idx_type (`type`) USING INVERTED COMMENT \'\',\n  INDEX idx_level (`level`) USING INVERTED COMMENT \'\',\n  INDEX idx_thread (`thread`) USING INVERTED COMMENT \'\',\n  INDEX idx_position (`position`) USING INVERTED COMMENT \'\',\n  INDEX idx_message (`message`) USING INVERTED PROPERTIES("parser" = "unicode", "support_phrase" = "true") COMMENT \'\'\n) ENGINE=OLAP\nDUPLICATE KEY(`log_time`)\nCOMMENT \'OLAP\'\nPARTITION BY RANGE(`log_time`) ()\nDISTRIBUTED BY RANDOM BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.time_unit" = "DAY",\n"dynamic_partition.start" = "-7",\n"dynamic_partition.end" = "1",\n"dynamic_partition.prefix" = "p",\n"dynamic_partition.buckets" = "10",\n"dynamic_partition.create_history_partition" = "true",\n"compaction_policy" = "time_series"\n);\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"3. Logstash Configuration")),(0,o.yg)("p",null,"Logstash mainly has two types of configuration files: one for the entire Logstash system and another for a specific log collection. "),(0,o.yg)("p",null,"The configuration file for the entire Logstash system is usually located at config/logstash.yml. To improve performance when writing to Doris, it is necessary to modify the batch size and batch delay. For logs with an average size of a few hundred bytes per line, a batch size of 1,000,000 lines and a batch delay of 10 seconds are recommended."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"pipeline.batch.size: 1000000\npipeline.batch.delay: 10000\n")),(0,o.yg)("p",null,"The configuration file for a specific log collection, such as logstash_doris_log.conf, mainly consists of three parts corresponding to the various stages of ETL:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Input is responsible for reading the raw data."),(0,o.yg)("li",{parentName:"ol"},"Filter is responsible for data transformation."),(0,o.yg)("li",{parentName:"ol"},"Output is responsible for sending the data to the output destination.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'# 1. input is responsible for reading raw data\n# File input is an input plugin that can be configured to read the log file of the configured path. It uses the multiline codec to concatenate lines that do not start with a timestamp to the end of the previous line, achieving the effect of merging stacktraces with the main log. File input saves the log content in the @message field, and there are also some metadata fields such as host, log.file.path. Here, we manually add a field named type through add_field, with its value set to fe.log.\ninput {\n    file {\n        path => "/mnt/disk2/xiaokang/opt/doris_master/fe/log/fe.log"\n        add_field => {"type" => "fe.log"}\n        codec => multiline {\n            # valid line starts with timestamp\n            pattern => "^%{TIMESTAMP_ISO8601} "\n            # any line not starting with a timestamp should be merged with the previous line\n            negate => true\n            what => "previous"\n        }\n    }\n}\n\n# 2. filter section is responsible for data transformation\n# grok is a commonly used data transformation plugin that has some built-in patterns, such as TIMESTAMP_ISO8601 for parsing timestamps, and also supports writing regular expressions to extract fields.\nfilter {\n    grok {\n        match => {\n            # parse log_time, level, thread, position fields from message\n            "message" => "%{TIMESTAMP_ISO8601:log_time} (?<level>[A-Z]+) \\((?<thread>[^\\[]*)\\) \\[(?<position>[^\\]]*)\\]"\n        }\n    }\n}\n\n# 3. output section is responsible for data output\n# Doris output sends data to Doris using the Stream Load HTTP interface. The data format for Stream Load is specified as JSON through the headers parameter, and the mapping parameter specifies the mapping from Logstash fields to JSON fields. Since headers specify "format" => "json", Stream Load will automatically parse the JSON fields and write them into the corresponding fields of the Doris table.\noutput {\n    doris {\n        http_hosts => ["http://localhost:8630"]\n        user => "root"\n        password => ""\n        db => "log_db"\n        table => "doris_log"\n        headers => {\n          "format" => "json"\n          "read_json_by_line" => "true"\n          "load_to_single_tablet" => "true"\n        }\n        mapping => {\n          "log_time" => "%{log_time}"\n          "collect_time" => "%{@timestamp}"\n          "host" => "%{[host][name]}"\n          "path" => "%{[log][file][path]}"\n          "type" => "%{type}"\n          "level" => "%{level}"\n          "thread" => "%{thread}"\n          "position" => "%{position}"\n          "message" => "%{message}"\n        }\n        log_request => true\n    }\n}\n\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"4. Running Logstash")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'\n${LOGSTASH_HOME}/bin/logstash -f config/logstash_doris_log.conf\n\n# When log_request is set to true, the log will output the request parameters and response results of each Stream Load.\n[2024-07-08T22:35:34,772][INFO ][logstash.outputs.doris   ][main][e44d2a24f17d764647ce56f5fed24b9bbf08d3020c7fddcc3298800daface80a] doris stream load response:\n{\n    "TxnId": 45464,\n    "Label": "logstash_log_db_doris_log_20240708_223532_539_6c20a0d1-dcab-4b8e-9bc0-76b46a929bd1",\n    "Comment": "",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 452,\n    "NumberLoadedRows": 452,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 277230,\n    "LoadTimeMs": 1797,\n    "BeginTxnTimeMs": 0,\n    "StreamLoadPutTimeMs": 18,\n    "ReadDataTimeMs": 9,\n    "WriteDataTimeMs": 1758,\n    "CommitAndPublishTimeMs": 18\n}\n\n# By default, speed information is logged every 10 seconds, including the amount of data since startup (in MB and ROWS), the total speed (in MB/s and R/s), and the speed in the last 10 seconds.\n\n[2024-07-08T22:35:38,285][INFO ][logstash.outputs.doris   ][main] total 11 MB 18978 ROWS, total speed 0 MB/s 632 R/s, last 10 seconds speed 1 MB/s 1897 R/s\n')),(0,o.yg)("h3",{id:"json-log-collection-example"},"JSON Log Collection Example"),(0,o.yg)("p",null,"This example demonstrates JSON log collection using data from the GitHub events archive."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"1. Data")),(0,o.yg)("p",null,"The GitHub events archive contains archived data of GitHub user actions, formatted as JSON. It can be downloaded from ",(0,o.yg)("a",{parentName:"p",href:"https://data.gharchive.org/"},"here"),", for example, the data for January 1, 2024, at 3 PM."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"wget https://data.gharchive.org/2024-01-01-15.json.gz\n")),(0,o.yg)("p",null,"Below is a sample of the data. Normally, each piece of data is on a single line, but for ease of display, it has been formatted here."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'{\n  "id": "37066529221",\n  "type": "PushEvent",\n  "actor": {\n    "id": 46139131,\n    "login": "Bard89",\n    "display_login": "Bard89",\n    "gravatar_id": "",\n    "url": "https://api.github.com/users/Bard89",\n    "avatar_url": "https://avatars.githubusercontent.com/u/46139131?"\n  },\n  "repo": {\n    "id": 780125623,\n    "name": "Bard89/talk-to-me",\n    "url": "https://api.github.com/repos/Bard89/talk-to-me"\n  },\n  "payload": {\n    "repository_id": 780125623,\n    "push_id": 17799451992,\n    "size": 1,\n    "distinct_size": 1,\n    "ref": "refs/heads/add_mvcs",\n    "head": "f03baa2de66f88f5f1754ce3fa30972667f87e81",\n    "before": "85e6544ede4ae3f132fe2f5f1ce0ce35a3169d21"\n  },\n  "public": true,\n  "created_at": "2024-04-01T23:00:00Z"\n}\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"2. Table Creation")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'CREATE DATABASE log_db;\nUSE log_db;\n\n\nCREATE TABLE github_events\n(\n  `created_at` DATETIME,\n  `id` BIGINT,\n  `type` TEXT,\n  `public` BOOLEAN,\n  `actor.id` BIGINT,\n  `actor.login` TEXT,\n  `actor.display_login` TEXT,\n  `actor.gravatar_id` TEXT,\n  `actor.url` TEXT,\n  `actor.avatar_url` TEXT,\n  `repo.id` BIGINT,\n  `repo.name` TEXT,\n  `repo.url` TEXT,\n  `payload` TEXT,\n  `host` TEXT,\n  `path` TEXT,\n  INDEX `idx_id` (`id`) USING INVERTED,\n  INDEX `idx_type` (`type`) USING INVERTED,\n  INDEX `idx_actor.id` (`actor.id`) USING INVERTED,\n  INDEX `idx_actor.login` (`actor.login`) USING INVERTED,\n  INDEX `idx_repo.id` (`repo.id`) USING INVERTED,\n  INDEX `idx_repo.name` (`repo.name`) USING INVERTED,\n  INDEX `idx_host` (`host`) USING INVERTED,\n  INDEX `idx_path` (`path`) USING INVERTED,\n  INDEX `idx_payload` (`payload`) USING INVERTED PROPERTIES("parser" = "unicode", "support_phrase" = "true")\n)\nENGINE = OLAP\nDUPLICATE KEY(`created_at`)\nPARTITION BY RANGE(`created_at`) ()\nDISTRIBUTED BY RANDOM BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"compaction_policy" = "time_series",\n"enable_single_replica_compaction" = "true",\n"dynamic_partition.enable" = "true",\n"dynamic_partition.create_history_partition" = "true",\n"dynamic_partition.time_unit" = "DAY",\n"dynamic_partition.start" = "-30",\n"dynamic_partition.end" = "1",\n"dynamic_partition.prefix" = "p",\n"dynamic_partition.buckets" = "10",\n"dynamic_partition.replication_num" = "1"\n);\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"3. Logstash Configuration")),(0,o.yg)("p",null,"The configuration file differs from the previous TEXT log collection in the following aspects:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"The codec parameter for file input is json. Logstash will parse each line of text as JSON format and use the parsed fields for subsequent processing."),(0,o.yg)("li",{parentName:"ol"},"No filter plugin is used because no additional processing or transformation is needed.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'input {\n    file {\n        path => "/tmp/github_events/2024-04-01-23.json"\n        codec => json\n    }\n}\n\noutput {\n    doris {\n        http_hosts => ["http://fe1:8630", "http://fe2:8630", "http://fe3:8630"]\n        user => "root"\n        password => ""\n        db => "log_db"\n        table => "github_events"\n        headers => {\n          "format" => "json"\n          "read_json_by_line" => "true"\n          "load_to_single_tablet" => "true"\n        }\n        mapping => {\n          "created_at" => "%{created_at}"\n          "id" => "%{id}"\n          "type" => "%{type}"\n          "public" => "%{public}"\n          "actor.id" => "%{[actor][id]}"\n          "actor.login" => "%{[actor][login]}"\n          "actor.display_login" => "%{[actor][display_login]}"\n          "actor.gravatar_id" => "%{[actor][gravatar_id]}"\n          "actor.url" => "%{[actor][url]}"\n          "actor.avatar_url" => "%{[actor][avatar_url]}"\n          "repo.id" => "%{[repo][id]}"\n          "repo.name" => "%{[repo][name]}"\n          "repo.url" => "%{[repo][url]}"\n          "payload" => "%{[payload]}"\n          "host" => "%{[host][name]}"\n          "path" => "%{[log][file][path]}"\n        }\n        log_request => true\n    }\n}\n\n')),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"4. Running Logstash")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"${LOGSTASH_HOME}/bin/logstash -f logstash_github_events.conf\n")))}u.isMDXComponent=!0}}]);