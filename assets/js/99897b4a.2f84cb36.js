"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[298486],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||y[d]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(58168),a=(n(296540),n(15680));const o={title:"CREATE-REPOSITORY",language:"en"},s=void 0,i={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY",id:"version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY",title:"CREATE-REPOSITORY",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY",draft:!1,tags:[],version:"3.0",frontMatter:{title:"CREATE-REPOSITORY",language:"en"},sidebar:"docs",previous:{title:"DROP-CATALOG-RECYCLE-BIN",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-CATALOG-RECYCLE-BIN"},next:{title:"DROP-REPOSITORY",permalink:"/docs/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY"}},l={},p=[{value:"CREATE-REPOSITORY",id:"create-repository",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},u="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"create-repository"},"CREATE-REPOSITORY"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"CREATE REPOSITORY"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to create a repository. Repositories are used for backup or restore. Only root or superuser users can create repositories."),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE [READ ONLY] REPOSITORY `repo_name`\nWITH [BROKER `broker_name`|S3|hdfs]\nON LOCATION `repo_location`\nPROPERTIES ("key"="value", ...);\n')),(0,a.yg)("p",null,"illustrate:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Creation of repositories, relying on existing brokers or accessing cloud storage directly through AWS s3 protocol, or accessing HDFS directly."),(0,a.yg)("li",{parentName:"ul"},"If it is a read-only repository, restores can only be done on the repository. If not, backup and restore operations are available."),(0,a.yg)("li",{parentName:"ul"},"PROPERTIES are different according to different types of broker or S3 or hdfs, see the example for details."),(0,a.yg)("li",{parentName:"ul"},"ON LOCATION : if it is S3 , here followed by the Bucket Name.")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},'Create a warehouse named bos_repo, rely on BOS broker "bos_broker", and the data root directory is: bos://palo_backup')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `bos_repo`\nWITH BROKER `bos_broker`\nON LOCATION "bos://palo_backup"\nPROPERTIES\n(\n    "bos_endpoint" = "http://gz.bcebos.com",\n    "bos_accesskey" = "bos_accesskey",\n    "bos_secret_accesskey"="bos_secret_accesskey"\n);\n')),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Create the same repository as Example 1, but with read-only properties:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE READ ONLY REPOSITORY `bos_repo`\nWITH BROKER `bos_broker`\nON LOCATION "bos://palo_backup"\nPROPERTIES\n(\n    "bos_endpoint" = "http://gz.bcebos.com",\n    "bos_accesskey" = "bos_accesskey",\n    "bos_secret_accesskey"="bos_accesskey"\n);\n')),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},'Create a warehouse named hdfs_repo, rely on Baidu hdfs broker "hdfs_broker", the data root directory is: hdfs://hadoop-name-node:54310/path/to/repo/')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `hdfs_repo`\nWITH BROKER `hdfs_broker`\nON LOCATION "hdfs://hadoop-name-node:54310/path/to/repo/"\nPROPERTIES\n(\n    "username" = "user",\n    "password" = "password"\n);\n')),(0,a.yg)("ol",{start:4},(0,a.yg)("li",{parentName:"ol"},"Create a repository named s3_repo to link cloud storage directly without going through the broker.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `s3_repo`\nWITH S3\nON LOCATION "s3://s3-repo"\nPROPERTIES\n(\n    "s3.endpoint" = "http://s3-REGION.amazonaws.com",\n    "s3.region" = "s3-REGION",\n    "s3.access_key" = "AWS_ACCESS_KEY",\n    "s3.secret_key"="AWS_SECRET_KEY",\n    "s3.region" = "REGION"\n);\n')),(0,a.yg)("ol",{start:5},(0,a.yg)("li",{parentName:"ol"},"Create a repository named hdfs_repo to link HDFS directly without going through the broker.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'CREATE REPOSITORY `hdfs_repo`\nWITH hdfs\nON LOCATION "hdfs://hadoop-name-node:54310/path/to/repo/"\nPROPERTIES\n(\n    "fs.defaultFS"="hdfs://hadoop-name-node:54310",\n    "hadoop.username"="user"\n);\n\n### Keywords\n\n')),(0,a.yg)("ol",{start:6},(0,a.yg)("li",{parentName:"ol"},"Create a repository named minio_repo to link minio storage directly through the s3 protocol.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'CREATE REPOSITORY `minio_repo`\nWITH S3\nON LOCATION "s3://minio_repo"\nPROPERTIES\n(\n    "s3.endpoint" = "http://minio.com",\n    "s3.access_key" = "MINIO_USER",\n    "s3.secret_key"="MINIO_PASSWORD",\n    "s3.region" = "REGION"\n    "use_path_style" = "true"\n);\n')),(0,a.yg)("ol",{start:7},(0,a.yg)("li",{parentName:"ol"},"Create a repository named minio_repo via temporary security credentials.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'CREATE REPOSITORY `minio_repo`\nWITH S3\nON LOCATION "s3://minio_repo"\nPROPERTIES\n( \n    "s3.endpoint" = "AWS_ENDPOINT",\n    "s3.access_key" = "AWS_TEMP_ACCESS_KEY",\n    "s3.secret_key" = "AWS_TEMP_SECRET_KEY",\n    "s3.session_token" = "AWS_TEMP_TOKEN",\n    "s3.region" = "AWS_REGION"\n)\n')),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Create repository using Tencent COS")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'CREATE REPOSITORY `cos_repo`\nWITH S3\nON LOCATION "s3://backet1/"\nPROPERTIES\n(\n    "s3.access_key" = "ak",\n    "s3.secret_key" = "sk",\n    "s3.endpoint" = "http://cos.ap-beijing.myqcloud.com",\n    "s3.region" = "ap-beijing"\n);\n')),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CREATE, REPOSITORY\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"A cluster can create multiple warehouses. Only users with ADMIN privileges can create repositories."),(0,a.yg)("li",{parentName:"ol"},"Any user can view the created repositories through the ",(0,a.yg)("a",{parentName:"li",href:"/docs/sql-manual/sql-statements/Show-Statements/SHOW-REPOSITORIES"},"SHOW REPOSITORIES")," command."),(0,a.yg)("li",{parentName:"ol"},"When performing data migration operations, it is necessary to create the exact same warehouse in the source cluster and the destination cluster, so that the destination cluster can view the data snapshots backed up by the source cluster through this warehouse.")))}y.isMDXComponent=!0}}]);