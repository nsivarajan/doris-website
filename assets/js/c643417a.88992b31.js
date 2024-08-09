"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[65206],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>g});var a=n(296540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},728499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(58168),o=(n(296540),n(15680));const i={title:"Elastic Compute Node",language:"en"},r=void 0,l={unversionedId:"lakehouse/compute-node",id:"version-2.1/lakehouse/compute-node",title:"Elastic Compute Node",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/lakehouse/compute-node.md",sourceDirName:"lakehouse",slug:"/lakehouse/compute-node",permalink:"/docs/2.1/lakehouse/compute-node",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Elastic Compute Node",language:"en"},sidebar:"docs",previous:{title:"Metadata Cache",permalink:"/docs/2.1/lakehouse/metacache"},next:{title:"External Table Statistics",permalink:"/docs/2.1/lakehouse/external-statistics"}},s={},d=[{value:"Using Compute Nodes",id:"using-compute-nodes",level:2},{value:"Adding Compute Nodes",id:"adding-compute-nodes",level:3},{value:"Using Compute Nodes",id:"using-compute-nodes-1",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Load Isolation and Elastic Scaling for Federated Queries",id:"load-isolation-and-elastic-scaling-for-federated-queries",level:3},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Since version 1.2.1, Doris has supported the Compute Node feature."),(0,o.yg)("p",null,"Starting from this version, BE nodes can be divided into two categories:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Mix"),(0,o.yg)("p",{parentName:"li"},"  A mixed node, which is the default type of BE node. This type of node can both participate in computation and be responsible for storing Doris data.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Computation"),(0,o.yg)("p",{parentName:"li"},"  A computation node that is not responsible for data storage, only for data computation."))),(0,o.yg)("p",null,"As a special type of BE node, the computation node does not have data storage capabilities and is only responsible for data computation. Therefore, the computation node can be seen as a stateless BE node, making it easy to add and remove nodes."),(0,o.yg)("p",null,"In the Lakehouse solution, the computation node can serve as an elastic node for querying external data sources such as Hive, Iceberg, JDBC, etc. Doris does not store data from external data sources, so the computation node can easily expand the computational capabilities for external data sources. Additionally, the computation node can be configured with a cache directory to cache hot data from external data sources, further accelerating data retrieval."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"The computation node is suitable for the integrated storage and computation deployment mode in Doris, providing elastic resource control. In the storage-computation separation architecture of Doris 3.0, all BE nodes are stateless, eliminating the need for separate computation nodes.")),(0,o.yg)("h2",{id:"using-compute-nodes"},"Using Compute Nodes"),(0,o.yg)("h3",{id:"adding-compute-nodes"},"Adding Compute Nodes"),(0,o.yg)("p",null,"Add the following configuration to the ",(0,o.yg)("inlineCode",{parentName:"p"},"be.conf")," file of the BE:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"be_node_role=computation")),(0,o.yg)("p",null,"After that, start the BE node, and it will run as a computation node type."),(0,o.yg)("p",null,"You can then connect to Doris using a MySQL client and execute:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"ALTER SYSTEM ADD BACKEND")),(0,o.yg)("p",null,"This will add the BE node. After successful addition, in the ",(0,o.yg)("inlineCode",{parentName:"p"},"NodeRole")," column of ",(0,o.yg)("inlineCode",{parentName:"p"},"SHOW BACKENDS"),", you can see the node type as ",(0,o.yg)("inlineCode",{parentName:"p"},"computation"),"."),(0,o.yg)("h3",{id:"using-compute-nodes-1"},"Using Compute Nodes"),(0,o.yg)("p",null,"To use compute nodes, the following conditions must be met:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The cluster contains compute nodes."),(0,o.yg)("li",{parentName:"ul"},"The ",(0,o.yg)("inlineCode",{parentName:"li"},"fe.conf")," file has the configuration item: ",(0,o.yg)("inlineCode",{parentName:"li"},"prefer_compute_node_for_external_table = true"))),(0,o.yg)("p",null,"Additionally, the following FE configuration items will affect the usage strategy of compute nodes:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("inlineCode",{parentName:"p"},"min_backend_num_for_external_table")),(0,o.yg)("p",{parentName:"li"},"  Before Doris 2.0 (inclusive), the default value of this parameter was 3. After version 2.1, the default parameter is -1."),(0,o.yg)("p",{parentName:"li"},"  This parameter indicates the minimum number of BE nodes expected to participate in external table data queries. ",(0,o.yg)("inlineCode",{parentName:"p"},"-1")," indicates that this value is equivalent to the current number of compute nodes in the cluster."),(0,o.yg)("p",{parentName:"li"},"  For example, suppose there are 3 compute nodes and 5 mixed nodes in the cluster."),(0,o.yg)("p",{parentName:"li"},"  If ",(0,o.yg)("inlineCode",{parentName:"p"},"min_backend_num_for_external_table")," is set to less than or equal to 3, external table queries will only use 3 compute nodes. If set to greater than 3, for example, 6, external table queries will use 3 compute nodes and additionally select 3 mixed nodes for computation."),(0,o.yg)("p",{parentName:"li"},"  In summary, this parameter is mainly used for the minimum number of BE nodes that can participate in external table calculations, and it will prioritize selecting compute nodes."))),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Note:"),(0,o.yg)("ol",{parentName:"blockquote"},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"After version 2.1, ",(0,o.yg)("inlineCode",{parentName:"p"},"min_backend_num_for_external_table")," can be set to ",(0,o.yg)("inlineCode",{parentName:"p"},"-1"),". In previous versions, this parameter must be a positive number. And this parameter only takes effect when ",(0,o.yg)("inlineCode",{parentName:"p"},"prefer_compute_node_for_external_table = true"),".")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"If ",(0,o.yg)("inlineCode",{parentName:"p"},"prefer_compute_node_for_external_table")," is ",(0,o.yg)("inlineCode",{parentName:"p"},"false"),", external table queries will select any BE node.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"If there are no compute nodes in the cluster, the above parameters will not take effect.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"If the value of ",(0,o.yg)("inlineCode",{parentName:"p"},"min_backend_num_for_external_table")," is greater than the total number of BE nodes, at most all BE nodes will be selected.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The above parameters can be dynamically modified using the ",(0,o.yg)("inlineCode",{parentName:"p"},"ADMIN SET FRONTEND CONFIG")," command without the need to restart FE nodes. All FE nodes need to be configured. Alternatively, add the configuration in ",(0,o.yg)("inlineCode",{parentName:"p"},"fe.conf")," and restart the FE nodes.")))),(0,o.yg)("h2",{id:"best-practices"},"Best Practices"),(0,o.yg)("h3",{id:"load-isolation-and-elastic-scaling-for-federated-queries"},"Load Isolation and Elastic Scaling for Federated Queries"),(0,o.yg)("p",null,"In federated query scenarios, users can deploy a dedicated set of compute nodes for querying external table data. This can isolate the query load of external tables (such as large-scale analysis on Hive) from the query load of internal tables (such as low-latency fast data analysis)."),(0,o.yg)("p",null,"At the same time, compute nodes, as stateless BE nodes, can easily scale up and down. For example, you can deploy a cluster of elastic compute nodes using k8s, utilize more compute nodes for data lake analysis during business peak hours, and quickly scale down during off-peak hours to reduce costs."),(0,o.yg)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Can mixed nodes and compute nodes be converted to each other"),(0,o.yg)("p",{parentName:"li"},"Compute nodes can be converted to mixed nodes. However, mixed nodes cannot be converted to compute nodes."),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Convert compute nodes to mixed nodes"),(0,o.yg)("ol",{parentName:"li"},(0,o.yg)("li",{parentName:"ol"},"Stop the BE nodes."),(0,o.yg)("li",{parentName:"ol"},"Remove the ",(0,o.yg)("inlineCode",{parentName:"li"},"be_node_role")," configuration in ",(0,o.yg)("inlineCode",{parentName:"li"},"be.conf")," or configure it as ",(0,o.yg)("inlineCode",{parentName:"li"},"be_node_role=mix"),"."),(0,o.yg)("li",{parentName:"ol"},"Configure the correct ",(0,o.yg)("inlineCode",{parentName:"li"},"storage_root_path")," data storage directory."),(0,o.yg)("li",{parentName:"ol"},"Start the BE nodes."))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Convert mixed nodes to compute nodes"),(0,o.yg)("p",{parentName:"li"},"  In principle, this operation is not supported because mixed nodes themselves store data. If conversion is needed, first perform node safe decommissioning, then set it as a compute node in the manner of a new node.")))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Do compute nodes need to configure a data storage directory"),(0,o.yg)("p",{parentName:"li"},"Yes. The data storage directory of compute nodes will not store user data, only some BE node's own information files like ",(0,o.yg)("inlineCode",{parentName:"p"},"cluster_id"),", and some temporary files during operation."),(0,o.yg)("p",{parentName:"li"},"The storage directory of compute nodes only requires a small amount of disk space (in the MB range) and can be destroyed with the node at any time without affecting user data.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Can compute nodes and mixed nodes configure a file cache directory"),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"../../lakehouse/filecache"},"File cache")," caches data files from remote storage systems (HDFS or object storage) that have been recently accessed, speeding up subsequent queries for the same data."),(0,o.yg)("p",{parentName:"li"},"Both compute nodes and mixed nodes can set a file cache directory. The file cache directory needs to be created in advance."),(0,o.yg)("p",{parentName:"li"},"Additionally, Doris also employs strategies like consistent hashing to minimize the probability of cache invalidation during node scaling operations.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Do compute nodes need to be taken offline through DECOMMISION operation"),(0,o.yg)("p",{parentName:"li"},"No. Compute nodes can be directly removed using the ",(0,o.yg)("inlineCode",{parentName:"p"},"DROP BACKEND")," operation."))))}u.isMDXComponent=!0}}]);