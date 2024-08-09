"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[241029],{15680:(e,n,a)=>{a.d(n,{xA:()=>d,yg:()=>y});var t=a(296540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),g=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=g(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=g(a),u=r,y=c["".concat(p,".").concat(u)]||c[u]||s[u]||l;return a?t.createElement(y,o(o({ref:n},d),{},{components:a})):t.createElement(y,o({ref:n},d))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var g=2;g<l;g++)o[g]=a[g];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},538794:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var t=a(58168),r=(a(296540),a(15680));const l={title:"\u4f7f\u7528 Docker \u5f00\u53d1\u955c\u50cf\u7f16\u8bd1\uff08\u63a8\u8350\uff09",language:"zh-CN"},o=void 0,i={unversionedId:"install/source-install/compilation-with-docker",id:"install/source-install/compilation-with-docker",title:"\u4f7f\u7528 Docker \u5f00\u53d1\u955c\u50cf\u7f16\u8bd1\uff08\u63a8\u8350\uff09",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/install/source-install/compilation-with-docker.md",sourceDirName:"install/source-install",slug:"/install/source-install/compilation-with-docker",permalink:"/zh-CN/docs/dev/install/source-install/compilation-with-docker",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 Docker \u5f00\u53d1\u955c\u50cf\u7f16\u8bd1\uff08\u63a8\u8350\uff09",language:"zh-CN"},sidebar:"docs",next:{title:"\u4f7f\u7528 LDB Toolchain \u7f16\u8bd1\uff08\u63a8\u8350\uff09",permalink:"/zh-CN/docs/dev/install/source-install/compilation-with-ldb-toolchain"}},p={},g=[{value:"\u5b89\u88c5 Docker",id:"\u5b89\u88c5-docker",level:2},{value:"\u4e0b\u8f7d Doris \u6784\u5efa\u955c\u50cf",id:"\u4e0b\u8f7d-doris-\u6784\u5efa\u955c\u50cf",level:2},{value:"\u7f16\u8bd1 Doris",id:"\u7f16\u8bd1-doris",level:2},{value:"01 \u4e0b\u8f7d Doris \u6e90\u7801",id:"01-\u4e0b\u8f7d-doris-\u6e90\u7801",level:3},{value:"02 \u8fd0\u884c\u6784\u5efa\u955c\u50cf",id:"02-\u8fd0\u884c\u6784\u5efa\u955c\u50cf",level:3},{value:"03 \u6267\u884c\u6784\u5efa",id:"03-\u6267\u884c\u6784\u5efa",level:3},{value:"\u81ea\u884c\u7f16\u8bd1\u5f00\u53d1\u73af\u5883\u955c\u50cf",id:"\u81ea\u884c\u7f16\u8bd1\u5f00\u53d1\u73af\u5883\u955c\u50cf",level:2}],d={toc:g},c="wrapper";function s(e){let{components:n,...a}=e;return(0,r.yg)(c,(0,t.A)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Doris \u5b98\u65b9\u63d0\u4f9b\u7684\u7f16\u8bd1\u955c\u50cf\u6765\u7f16\u8bd1 Doris\uff0c\u7531\u4e8e\u6b64\u955c\u50cf\u7531\u5b98\u65b9\u7ef4\u62a4\uff0c\u4e14\u4f1a\u968f\u7f16\u8bd1\u4f9d\u8d56\u53ca\u65f6\u66f4\u65b0\uff0c\u6240\u4ee5\u63a8\u8350\u7528\u6237\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\u7f16\u8bd1"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u76ee\u524d\u8fd8\u4e0d\u652f\u6301\u5b58\u7b97\u5206\u79bb\u6a21\u5f0f\u7f16\u8bd1\u90e8\u7f72")),(0,r.yg)("h2",{id:"\u5b89\u88c5-docker"},"\u5b89\u88c5 Docker"),(0,r.yg)("p",null,"\u6bd4\u5982\u5728 CentOS \u4e0b\uff0c\u6267\u884c\u547d\u4ee4\u5b89\u88c5 Docker"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Bash"},"yum install docker\n")),(0,r.yg)("p",null,"\u6216\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker \u5b98\u65b9\u5b89\u88c5\u6587\u6863"),"\u8fdb\u884c\u5b89\u88c5"),(0,r.yg)("h2",{id:"\u4e0b\u8f7d-doris-\u6784\u5efa\u955c\u50cf"},"\u4e0b\u8f7d Doris \u6784\u5efa\u955c\u50cf"),(0,r.yg)("p",null,"\u4e0d\u540c\u7684 Doris \u7248\u672c\uff0c\u9700\u8981\u4e0b\u8f7d\u4e0d\u540c\u7684\u6784\u5efa\u955c\u50cf\u3002\u5176\u4e2d apache/doris:build-env-ldb-toolchain-latest \u7528\u4e8e\u7f16\u8bd1\u6700\u65b0\u4e3b\u5e72\u7248\u672c\u4ee3\u7801\uff0c\u4f1a\u968f\u4e3b\u5e72\u7248\u672c\u4e0d\u65ad\u66f4\u65b0\u3002"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u955c\u50cf\u7248\u672c"),(0,r.yg)("th",{parentName:"tr",align:null},"Doris \u7248\u672c"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-2.0"),(0,r.yg)("td",{parentName:"tr",align:null},"2.0.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-for-2.0-no-avx2"),(0,r.yg)("td",{parentName:"tr",align:null},"2.0.x")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-ldb-toolchain-latest"),(0,r.yg)("td",{parentName:"tr",align:null},"master")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"apache/doris:build-env-ldb-toolchain-no-avx2-latest"),(0,r.yg)("td",{parentName:"tr",align:null},"master")))),(0,r.yg)("p",null,"\u4e0b\u9762\u5c31\u4ee5\u7f16\u8bd1 Doris 2.0 \u7248\u672c\u4f5c\u4e3a\u4ecb\u7ecd\uff0c\u4e0b\u8f7d\u5e76\u68c0\u67e5 Docker \u955c\u50cf"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Bash"},"# \u53ef\u4ee5\u9009\u62e9 docker.io/apache/doris:build-env-for-2.0\n$ docker pull apache/doris:build-env-for-2.0\n\n# \u68c0\u67e5\u955c\u50cf\u4e0b\u8f7d\u5b8c\u6210\n$ docker images\nREPOSITORY      TAG                  IMAGE ID        CREATED       SIZE\napache/doris    build-env-for-2.0    f29cf1979dba    3 days ago    3.3GB\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6ce8\u610f\u4e8b\u9879\uff1a")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u9488\u5bf9\u4e0d\u540c\u7684 Doris \u7248\u672c\uff0c\u9700\u8981\u4e0b\u8f7d\u5bf9\u5e94\u7684\u955c\u50cf\u7248\u672c\u3002\u955c\u50cf\u7248\u672c\u53f7\u4e0e Doris \u7248\u672c\u53f7\u7edf\u4e00\uff0c\u6bd4\u5982\u53ef\u4ee5\u4f7f\u7528 apache/doris:build-env-for-2.0 \u6765\u7f16\u8bd1 2.0 \u7248\u672c\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"apache/doris:build-env-ldb-toolchain-latest")," \u7528\u4e8e\u7f16\u8bd1\u6700\u65b0\u4e3b\u5e72\u7248\u672c\u4ee3\u7801\uff0c\u4f1a\u968f\u4e3b\u5e72\u7248\u672c\u4e0d\u65ad\u66f4\u65b0\u3002\u53ef\u4ee5\u67e5\u770b ",(0,r.yg)("inlineCode",{parentName:"p"},"docker/README.md")," \u4e2d\u7684\u66f4\u65b0\u65f6\u95f4\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u540d\u79f0\u4e2d\u5e26\u6709 no-AVX2 \u5b57\u6837\u7684\u955c\u50cf\u4e2d\u7684\u7b2c\u4e09\u65b9\u5e93\uff0c\u53ef\u4ee5\u8fd0\u884c\u5728\u4e0d\u652f\u6301 AVX2 \u6307\u4ee4\u7684 CPU \u4e0a\u3002\u53ef\u4ee5\u914d\u5408 USE_AVX2=0 \u9009\u9879\uff0c\u7f16\u8bd1 Doris\u3002 ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u7f16\u8bd1\u955c\u50cf\u53d8\u66f4\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/blob/master/thirdparty/CHANGELOG.md"},"ChangeLog"),"\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u6700\u65b0\u7248\u672c\u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},"apache/doris:build-env-ldb-toolchain-latest")," \u955c\u50cf\u4e2d\u540c\u65f6\u5305\u542b JDK 8 \u548c JDK 17\u30022.1\uff08\u542b\uff09\u4e4b\u524d\u7684\u7248\u672c\uff0c\u8bf7\u4f7f\u7528 JDK 8\u30023.0\uff08\u542b\uff09\u4e4b\u540e\u7684\u7248\u672c\u6216 master \u5206\u652f\uff0c\u8bf7\u4f7f\u7528 JDK 17\u3002"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Bash"},"# \u5207\u6362\u5230 JDK 8\nexport JAVA_HOME=/usr/lib/jvm/java-1.8.0\nexport PATH=$JAVA_HOME/bin/:$PATH\n\n# \u5207\u6362\u5230 JDK 17\nexport JAVA_HOME=/usr/lib/jvm/jdk-17.0.2/\nexport PATH=$JAVA_HOME/bin/:$PATH\n")),(0,r.yg)("h2",{id:"\u7f16\u8bd1-doris"},"\u7f16\u8bd1 Doris"),(0,r.yg)("h3",{id:"01-\u4e0b\u8f7d-doris-\u6e90\u7801"},"01 \u4e0b\u8f7d Doris \u6e90\u7801"),(0,r.yg)("p",null,"\u767b\u5f55\u5230\u5bbf\u4e3b\u673a\uff0c\u901a\u8fc7 git clone \u83b7\u53d6 Doris 2.0 \u5206\u652f\u4e0a\u7684\u6700\u65b0\u4ee3\u7801\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"$ git clone -b branch-2.0 https://github.com/apache/doris.git\n")),(0,r.yg)("p",null,"\u4e0b\u8f7d\u540e\uff0c\u6e90\u4ee3\u7801\u8def\u5f84\uff0c\u5047\u8bbe\u653e\u5230\u4e86 doris-branch-2.0 \u8fd9\u4e2a\u76ee\u5f55\u4e0b\u3002"),(0,r.yg)("h3",{id:"02-\u8fd0\u884c\u6784\u5efa\u955c\u50cf"},"02 \u8fd0\u884c\u6784\u5efa\u955c\u50cf"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"# \u63d0\u524d\u5728 host \u4e3b\u673a\u6784\u5efa maven \u7684 .m2 \u76ee\u5f55\uff0c\u4ee5\u4fbf\u5c06\u4e0b\u8f7d\u7684 Java \u5e93\u53ef\u4ee5\u591a\u6b21\u5728 Docker \u590d\u7528\nmkdir ~/.m2 \n\n# \u8fd0\u884c\u6784\u5efa\u955c\u50cf\ndocker run -it --network=host --name mydocker -v ~/.m2:/root/.m2 -v ~/doris-branch-2.0:/root/doris-branch-2.0/ apache/doris:build-env-for-2.0  \n\n# \u6267\u884c\u6210\u529f\u540e\uff0c\u5e94\u8be5\u81ea\u52a8\u8fdb\u5165\u5230 Docker \u91cc\u4e86\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5efa\u8bae\u4ee5\u6302\u8f7d\u672c\u5730 Doris \u6e90\u7801\u76ee\u5f55\u7684\u65b9\u5f0f\u8fd0\u884c\u955c\u50cf\uff0c\u8fd9\u6837\u7f16\u8bd1\u7684\u4ea7\u51fa\u4e8c\u8fdb\u5236\u6587\u4ef6\u4f1a\u5b58\u50a8\u5728\u5bbf\u4e3b\u673a\u4e2d\uff0c\u4e0d\u4f1a\u56e0\u4e3a\u955c\u50cf\u9000\u51fa\u800c\u6d88\u5931\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u5efa\u8bae\u540c\u65f6\u5c06\u955c\u50cf\u4e2d maven \u7684 ",(0,r.yg)("inlineCode",{parentName:"p"},".m2")," \u76ee\u5f55\u6302\u8f7d\u5230\u5bbf\u4e3b\u673a\u76ee\u5f55\uff0c\u4ee5\u9632\u6b62\u6bcf\u6b21\u542f\u52a8\u955c\u50cf\u7f16\u8bd1\u65f6\uff0c\u91cd\u590d\u4e0b\u8f7d maven \u7684\u4f9d\u8d56\u5e93\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"\u8fd0\u884c\u955c\u50cf\u7f16\u8bd1\u65f6\u9700\u8981\u4e0b\u8f7d\u5176\u5b83\u6587\u4ef6\uff0c\u53ef\u4ee5\u91c7\u7528 host \u6a21\u5f0f\u542f\u52a8\u955c\u50cf\u3002host \u6a21\u5f0f\u4e0d\u9700\u8981\u52a0 -p \u8fdb\u884c\u7aef\u53e3\u6620\u5c04\uff0c\u548c\u5bbf\u4e3b\u673a\u5171\u4eab\u7f51\u7edc IP \u548c\u7aef\u53e3\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Docker run \u90e8\u5206\u53c2\u6570\u8bf4\u660e\u5982\u4e0b\uff1a"))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6ce8\u91ca"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"-v"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7ed9\u5bb9\u5668\u6302\u8f7d\u5b58\u50a8\u5377\uff0c\u6302\u8f7d\u5230\u5bb9\u5668\u7684\u67d0\u4e2a\u76ee\u5f55")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--name"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5bb9\u5668\u540d\u5b57\uff0c\u540e\u7eed\u53ef\u4ee5\u901a\u8fc7\u540d\u5b57\u8fdb\u884c\u5bb9\u5668\u7ba1\u7406")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"--network ","\xa0","\xa0","\xa0","\xa0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5bb9\u5668\u7f51\u7edc\u8bbe\u7f6e\uff1abridge \u4f7f\u7528 docker daemon \u6307\u5b9a\u7684\u7f51\u6865\uff0chost \u5bb9\u5668\u4f7f\u7528\u4e3b\u673a\u7684\u7f51\u7edc\uff0ccontainer:NAME_or_ID \u4f7f\u7528\u5176\u4ed6\u5bb9\u5668\u7684\u7f51\u8def\uff0c\u5171\u4eab IP \u548c PORT \u7b49\u7f51\u7edc\u8d44\u6e90\uff0cnone \u5bb9\u5668\u4f7f\u7528\u81ea\u5df1\u7684\u7f51\u7edc\uff08\u7c7b\u4f3c--net=bridge\uff09\uff0c\u4f46\u662f\u4e0d\u8fdb\u884c\u914d\u7f6e")))),(0,r.yg)("h3",{id:"03-\u6267\u884c\u6784\u5efa"},"03 \u6267\u884c\u6784\u5efa"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-Plain"},"# \u9ed8\u8ba4\u7f16\u8bd1\u51fa\u652f\u6301 AVX2 \u7684\n$ sh build.sh\n\n# \u5982\u4e0d\u652f\u6301 AVX2 \u9700\u8981\u52a0USE_AVX2=0\n$ USE_AVX2=0 sh build.sh\n\n# \u5982\u9700\u7f16\u8bd1 Debug \u7248\u672c\u7684 BE\uff0c\u589e\u52a0 BUILD_TYPE=Debug\n$ BUILD_TYPE=Debug sh build.sh\n")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("strong",{parentName:"p"},"\u5982\u4f55\u67e5\u770b\u673a\u5668\u662f\u5426\u652f\u6301 AVX2\uff1f")),(0,r.yg)("p",{parentName:"admonition"},"$ cat /proc/cpuinfo | grep avx2")),(0,r.yg)("p",null,"\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u4ea7\u51fa\u6587\u4ef6\u5728 ",(0,r.yg)("inlineCode",{parentName:"p"},"output/")," \u76ee\u5f55\u4e2d\u3002"),(0,r.yg)("h2",{id:"\u81ea\u884c\u7f16\u8bd1\u5f00\u53d1\u73af\u5883\u955c\u50cf"},"\u81ea\u884c\u7f16\u8bd1\u5f00\u53d1\u73af\u5883\u955c\u50cf"),(0,r.yg)("p",null,"\u53ef\u4ee5\u81ea\u5df1\u521b\u5efa\u4e00\u4e2a Doris \u5f00\u53d1\u73af\u5883\u955c\u50cf\uff0c\u5177\u4f53\u53ef\u53c2\u9605 ",(0,r.yg)("inlineCode",{parentName:"p"},"docker/README.md")," \u6587\u4ef6\u3002"))}s.isMDXComponent=!0}}]);