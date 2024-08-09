"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[465876],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>c});var o=a(296540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=o.createContext({}),p=function(e){var n=o.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=p(a),u=t,c=g["".concat(l,".").concat(u)]||g[u]||m[u]||r;return a?o.createElement(c,i(i({ref:n},d),{},{components:a})):o.createElement(c,i({ref:n},d))}));function c(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[g]="string"==typeof e?e:t,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},237923:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=a(58168),t=(a(296540),a(15680));const r={title:"Node Action",language:"en"},i=void 0,s={unversionedId:"admin-manual/fe/node-action",id:"version-2.1/admin-manual/fe/node-action",title:"Node Action",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/fe/node-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/node-action",permalink:"/docs/2.1/admin-manual/fe/node-action",draft:!1,tags:[],version:"2.1",frontMatter:{title:"Node Action",language:"en"},sidebar:"docs",previous:{title:"Cluster Action",permalink:"/docs/2.1/admin-manual/fe/cluster-action"},next:{title:"Query Profile Action",permalink:"/docs/2.1/admin-manual/fe/query-profile-action"}},l={},p=[{value:"Request",id:"request",level:2},{value:"Get information about fe, be, broker nodes",id:"get-information-about-fe-be-broker-nodes",level:2},{value:"Description",id:"description",level:3},{value:"Response",id:"response",level:3},{value:"Get node configuration information",id:"get-node-configuration-information",level:2},{value:"Description",id:"description-1",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Request body",id:"request-body",level:3},{value:"Response",id:"response-1",level:3},{value:"Examples",id:"examples",level:3},{value:"Modify configuration values",id:"modify-configuration-values",level:2},{value:"Description",id:"description-2",level:3},{value:"Request body",id:"request-body-1",level:3},{value:"Response",id:"response-2",level:3},{value:"Examples",id:"examples-1",level:3},{value:"Operate be node",id:"operate-be-node",level:2},{value:"Description",id:"description-3",level:3},{value:"Request body",id:"request-body-2",level:3},{value:"Response",id:"response-3",level:3},{value:"Examples",id:"examples-2",level:3},{value:"Operate fe node",id:"operate-fe-node",level:2},{value:"Description",id:"description-4",level:3},{value:"Request body",id:"request-body-3",level:3},{value:"Response",id:"response-4",level:3},{value:"Examples",id:"examples-3",level:3}],d={toc:p},g="wrapper";function m(e){let{components:n,...a}=e;return(0,t.yg)(g,(0,o.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"request"},"Request"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/frontends")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/backends")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/brokers")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/configuration_name")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/node_list")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/configuration_info")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/set_config/fe")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/set_config/be")),(0,t.yg)("version",{since:"dev"},(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/{action}/be")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/{action}/fe"))),(0,t.yg)("h2",{id:"get-information-about-fe-be-broker-nodes"},"Get information about fe, be, broker nodes"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/frontends")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/backends")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/brokers")),(0,t.yg)("h3",{id:"description"},"Description"),(0,t.yg)("p",null,"Used to get cluster to get fe, be, broker node information."),(0,t.yg)("h3",{id:"response"},"Response"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'frontends:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Name",\n            "IP",\n            "HostName",\n            "EditLogPort",\n            "HttpPort",\n            "QueryPort",\n            "RpcPort",\n            "ArrowFlightSqlPort",\n            "Role",\n            "IsMaster",\n            "ClusterId",\n            "Join",\n            "Alive",\n            "ReplayedJournalId",\n            "LastHeartbeat",\n            "IsHelper",\n            "ErrMsg",\n            "Version"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'backends:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "BackendId",\n            "Cluster",\n            "IP",\n            "HostName",\n            "HeartbeatPort",\n            "BePort",\n            "HttpPort",\n            "BrpcPort",\n            "LastStartTime",\n            "LastHeartbeat",\n            "Alive",\n            "SystemDecommissioned",\n            "ClusterDecommissioned",\n            "TabletNum",\n            "DataUsedCapacity",\n            "AvailCapacity",\n            "TotalCapacity",\n            "UsedPct",\n            "MaxDiskUsedPct",\n            "ErrMsg",\n            "Version",\n            "Status"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'brokers:\n{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Name",\n            "IP",\n            "HostName",\n            "Port",\n            "Alive",\n            "LastStartTime",\n            "LastUpdateTime",\n            "ErrMsg"\n        ],\n        "rows": [\n            [\n                ...\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,t.yg)("h2",{id:"get-node-configuration-information"},"Get node configuration information"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/configuration_name")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/node_list")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/configuration_info")),(0,t.yg)("h3",{id:"description-1"},"Description"),(0,t.yg)("p",null,"configuration_name Used to get the name of the node configuration item.",(0,t.yg)("br",{parentName:"p"}),"\n","node_list Get the list of nodes.",(0,t.yg)("br",{parentName:"p"}),"\n","configuration_info to get the node configuration details."),(0,t.yg)("h3",{id:"query-parameters"},"Query parameters"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/configuration_name"),(0,t.yg)("br",{parentName:"p"}),"\n","none"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/node_list"),(0,t.yg)("br",{parentName:"p"}),"\n","none"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/configuration_info")),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"type ")),(0,t.yg)("p",null,"The value is fe or be, which specifies to get the configuration information of fe or the configuration information of be."),(0,t.yg)("h3",{id:"request-body"},"Request body"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/configuration_name"),(0,t.yg)("br",{parentName:"p"}),"\n","none"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/node_list"),(0,t.yg)("br",{parentName:"p"}),"\n","none"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/configuration_info")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "conf_name": [\n        ""\n    ],\n    "node": [\n        ""\n    ]\n}\n\nIf no body is included, the parameters in the body use the default values.  \nconf_name specifies which configuration items to return, the default is all configuration items.\nnode is used to specify which node\'s configuration information is returned, the default is all fe nodes or be nodes configuration information.\n')),(0,t.yg)("h3",{id:"response-1"},"Response"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/configuration_name"),"  "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "backend":[\n            ""\n        ],\n        "frontend":[\n            ""\n        ]\n    },\n    "count": 0\n}\n')),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/node_list")," "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "backend": [\n            ""\n        ],\n        "frontend": [\n            ""\n        ]\n    },\n    "count": 0\n}\n')),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/configuration_info?type=fe")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{  \n    "msg": "success",  \n    "code": 0,  \n    "data": {  \n        "column_names": [  \n            "Configuration Item",  \n            "Node",  \n            "Node Type",  \n            "Configuration Value Type",  \n            "MasterOnly",  \n            "Configuration Value",  \n            "Modifiable"  \n        ],  \n        "rows": [  \n            [  \n                ""  \n            ]  \n        ]  \n    },  \n    "count": 0  \n}\n')),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/configuration_info?type=be")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "column_names": [\n            "Configuration Item",\n            "Node",\n            "Node Type",\n            "Configuration Value Type",\n            "Configuration Value",\n            "Modifiable"\n        ],\n        "rows": [\n            [\n                ""\n            ]\n        ]\n    },\n    "count": 0\n}\n')),(0,t.yg)("h3",{id:"examples"},"Examples"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Get the fe agent_task_resend_wait_time_ms configuration information:"),(0,t.yg)("p",{parentName:"li"},"POST /rest/v2/manager/node/configuration_info?type=fe",(0,t.yg)("br",{parentName:"p"}),"\n","body:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "conf_name":[\n        "agent_task_resend_wait_time_ms"\n    ]\n}\n')),(0,t.yg)("p",{parentName:"li"},"Response:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{  \n"msg": "success",  \n"code": 0,  \n"data": {  \n    "column_names": [  \n        "Configuration Item",  \n        "Node",  \n        "Node Type",  \n        "Configuration Value Type",  \n        "MasterOnly",  \n        "Configuration Value",  \n        "Modifiable"  \n    ],  \n    "rows": [  \n        [  \n            "agent_task_resend_wait_time_ms",  \n            "127.0.0.1:8030",  \n            "FE",  \n            "long",  \n            "true",  \n            "50000",  \n            "true"  \n        ]  \n    ]  \n},  \n"count": 0  \n}\n')))),(0,t.yg)("h2",{id:"modify-configuration-values"},"Modify configuration values"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/set_config/fe")),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/set_config/be")),(0,t.yg)("h3",{id:"description-2"},"Description"),(0,t.yg)("p",null,"Used to modify fe or be node configuration values"),(0,t.yg)("h3",{id:"request-body-1"},"Request body"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "config_name":{\n        "node":[\n            ""\n        ],\n        "value":"",\n        "persist":\n    }\n}\n\nconfig_name is the corresponding configuration item.  \nnode is a keyword indicating the list of nodes to be modified;  \nvalue is the value of the configuration.  \npersist is true for permanent modification and false for temporary modification. persist means permanent modification, false means temporary modification. permanent modification takes effect after reboot, temporary modification fails after reboot.\n')),(0,t.yg)("h3",{id:"response-2"},"Response"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"GET /rest/v2/manager/node/configuration_name"),"  "),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "",\n    "code": 0,\n    "data": {\n        "failed":[\n            {\n                "config_name":"name",\n                "value"="",\n                "node":"",\n                "err_info":""\n            }\n        ]\n    },\n    "count": 0\n}\n\nfailed Indicates a configuration message that failed to be modified.\n')),(0,t.yg)("h3",{id:"examples-1"},"Examples"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"Modify the agent_task_resend_wait_time_ms and alter_table_timeout_second configuration values in the fe 127.0.0.1:8030 node:"),(0,t.yg)("p",{parentName:"li"},"POST /rest/v2/manager/node/set_config/fe\nbody:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "agent_task_resend_wait_time_ms":{\n        "node":[\n            "127.0.0.1:8030"\n        ],\n        "value":"10000",\n        "persist":"true"\n    },\n    "alter_table_timeout_second":{\n        "node":[\n            "127.0.0.1:8030"\n        ],\n        "value":"true",\n        "persist":"true"\n    }\n}\n')),(0,t.yg)("p",{parentName:"li"},"Response:"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "failed": [\n            {\n                "config_name": "alter_table_timeout_second",\n                "node": "10.81.85.89:8837",\n                "err_info": "Unsupported configuration value type.",\n                "value": "true"\n            }\n        ]\n    },\n    "count": 0\n}\n\ngent_task_resend_wait_time_ms configuration value modified successfully, alter_table_timeout_second modification failed.\n')))),(0,t.yg)("h2",{id:"operate-be-node"},"Operate be node"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/{action}/be")),(0,t.yg)("h3",{id:"description-3"},"Description"),(0,t.yg)("p",null,"Used to add/drop/offline be node"),(0,t.yg)("p",null,"action\uff1aADD/DROP/DECOMMISSION"),(0,t.yg)("h3",{id:"request-body-2"},"Request body"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "hostPorts": ["127.0.0.1:9050"],\n    "properties": {\n        "tag.location": "test"\n    }\n}\n\nhostPorts A set of be node addresses to be operated, ip:heartbeat_port\nproperties The configuration passed in when adding a node is only used to configure the tag. If not, the default tag is used\n')),(0,t.yg)("h3",{id:"response-3"},"Response"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "Error",\n    "code": 1,\n    "data": "errCode = 2, detailMessage = Same backend already exists[127.0.0.1:9050]",\n    "count": 0\n}\n\nmsg Success/Error\ncode 0/1\ndata ""/Error message\n')),(0,t.yg)("h3",{id:"examples-2"},"Examples"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"add be node"),(0,t.yg)("p",{parentName:"li"},"post /rest/v2/manager/node/ADD/be\nRequest body"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "hostPorts": ["127.0.0.1:9050"]\n}\n')),(0,t.yg)("p",{parentName:"li"},"Response"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "success",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"drop be node"),(0,t.yg)("p",{parentName:"li"},"post /rest/v2/manager/node/DROP/be\nRequest body"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "hostPorts": ["127.0.0.1:9050"]\n}\n')),(0,t.yg)("p",{parentName:"li"},"Response"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "success",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"offline be node"),(0,t.yg)("p",{parentName:"li"},"post /rest/v2/manager/node/DECOMMISSION/be\nRequest body"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "hostPorts": ["127.0.0.1:9050"]\n}\n')),(0,t.yg)("p",{parentName:"li"},"Response"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "success",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n')))),(0,t.yg)("h2",{id:"operate-fe-node"},"Operate fe node"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"POST /rest/v2/manager/node/{action}/fe")),(0,t.yg)("h3",{id:"description-4"},"Description"),(0,t.yg)("p",null,"Used to add/drop fe node"),(0,t.yg)("p",null,"action\uff1aADD/DROP"),(0,t.yg)("h3",{id:"request-body-3"},"Request body"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "role": "FOLLOWER",\n    "hostPort": "127.0.0.1:9030"\n}\n\nrole FOLLOWER/OBSERVER\nhostPort The address of the fe node to be operated, ip:edit_log_port\n')),(0,t.yg)("h3",{id:"response-4"},"Response"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "Error",\n    "code": 1,\n    "data": "errCode = 2, detailMessage = frontend already exists name: 127.0.0.1:9030_1670495889415, role: FOLLOWER, 127.0.0.1:9030",\n    "count": 0\n}\n\nmsg Success/Error\ncode 0/1\ndata ""/Error message\n')),(0,t.yg)("h3",{id:"examples-3"},"Examples"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"add FOLLOWER node"),(0,t.yg)("p",{parentName:"li"},"post /rest/v2/manager/node/ADD/fe\nRequest body"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "role": "FOLLOWER",\n    "hostPort": "127.0.0.1:9030"\n}\n')),(0,t.yg)("p",{parentName:"li"},"Response"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "success",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n'))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"drop FOLLOWER node"),(0,t.yg)("p",{parentName:"li"},"post /rest/v2/manager/node/DROP/fe\nRequest body"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "role": "FOLLOWER",\n    "hostPort": "127.0.0.1:9030"\n}\n')),(0,t.yg)("p",{parentName:"li"},"Response"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "msg": "success",\n    "code": 0,\n    "data": null,\n    "count": 0\n}\n')))))}m.isMDXComponent=!0}}]);