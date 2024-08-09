"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[583726],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),f=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=f(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=f(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,o[1]=c;for(var f=2;f<i;f++)o[f]=n[f];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},284403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>f});var r=n(58168),a=(n(296540),n(15680));const i={title:"FE SSL Certificate",language:"en"},o=void 0,c={unversionedId:"admin-manual/auth/fe-certificate",id:"admin-manual/auth/fe-certificate",title:"FE SSL Certificate",description:"\x3c!--",source:"@site/docs/admin-manual/auth/fe-certificate.md",sourceDirName:"admin-manual/auth",slug:"/admin-manual/auth/fe-certificate",permalink:"/docs/dev/admin-manual/auth/fe-certificate",draft:!1,tags:[],version:"current",frontMatter:{title:"FE SSL Certificate",language:"en"},sidebar:"docs",previous:{title:"MySQL Client Certificate",permalink:"/docs/dev/admin-manual/auth/certificate"},next:{title:"Memory Tracker",permalink:"/docs/dev/admin-manual/memory-management/memory-tracker"}},l={},f=[],p={toc:f},s="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(s,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"certificate-configuration"},"Certificate Configuration"),(0,a.yg)("p",null,"Certificate Configuration"),(0,a.yg)("p",null,"To enable SSL function on Doris FE interface, you need to configure key certificate as follows:"),(0,a.yg)("p",null,"1.Purchase or generate a self-signed SSL certificate. It is advised to use CA certificate in Production environment"),(0,a.yg)("p",null,"2.Copy the SSL certificate to specified path. The default path is ",(0,a.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/conf/ssl/"),", and user can also specify their own path"),(0,a.yg)("p",null,"3.Modify FE configuration file ",(0,a.yg)("inlineCode",{parentName:"p"},"conf/fe.conf"),", and note that the following parameters are consistent with purchased or generated SSL certificate\nSet ",(0,a.yg)("inlineCode",{parentName:"p"},"enable_https = true")," to enable https function, default is ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),"\nSet certificate path ",(0,a.yg)("inlineCode",{parentName:"p"},"key_store_path"),", default is ",(0,a.yg)("inlineCode",{parentName:"p"},"${DORIS_HOME}/conf/ssl/doris_ssl_certificate.keystore"),"\nSet certificate password ",(0,a.yg)("inlineCode",{parentName:"p"},"key_store_password"),", default is null\nSet certificate type ",(0,a.yg)("inlineCode",{parentName:"p"},"key_store_type"),", default is ",(0,a.yg)("inlineCode",{parentName:"p"},"JKS"),"\nSet certificate alias ",(0,a.yg)("inlineCode",{parentName:"p"},"key_store_alias"),", default is ",(0,a.yg)("inlineCode",{parentName:"p"},"doris_ssl_certificate")))}u.isMDXComponent=!0}}]);