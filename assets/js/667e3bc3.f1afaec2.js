"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[938798],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,y=u["".concat(o,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},454653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const i={title:"ST_DISTANCE_SPHERE",language:"en"},s=void 0,l={unversionedId:"sql-manual/sql-functions/spatial-functions/st-distance-sphere",id:"version-2.0/sql-manual/sql-functions/spatial-functions/st-distance-sphere",title:"ST_DISTANCE_SPHERE",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/spatial-functions/st-distance-sphere.md",sourceDirName:"sql-manual/sql-functions/spatial-functions",slug:"/sql-manual/sql-functions/spatial-functions/st-distance-sphere",permalink:"/docs/2.0/sql-manual/sql-functions/spatial-functions/st-distance-sphere",draft:!1,tags:[],version:"2.0",frontMatter:{title:"ST_DISTANCE_SPHERE",language:"en"},sidebar:"docs",previous:{title:"ST_CIRCLE",permalink:"/docs/2.0/sql-manual/sql-functions/spatial-functions/st-circle"},next:{title:"ST_ANGLE",permalink:"/docs/2.0/sql-manual/sql-functions/spatial-functions/st-angle"}},o={},c=[{value:"ST_Distance_Sphere",id:"st_distance_sphere",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"st_distance_sphere"},"ST_Distance_Sphere"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DOUBLE ST_Distance_Sphere(DOUBLE x_lng, DOUBLE x_lat, DOUBLE y_lng, DOUBLE y_lat)")),(0,a.yg)("p",null,"Calculate the spherical distance between two points of the earth in meters. The incoming parameters are the longitude of point X, the latitude of point X, the longitude of point Y and the latitude of point Y."),(0,a.yg)("p",null,"x_lng and y_lng are Longitude values, must be in the range ","[-180, 180]",".\nx_lat and y_lat are Latitude values, must be in the range ","[-90, 90]","."),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select st_distance_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219);\n+----------------------------------------------------------------------------+\n| st_distance_sphere(116.35620117, 39.939093, 116.4274406433, 39.9020987219) |\n+----------------------------------------------------------------------------+\n|                                                         7336.9135549995917 |\n+----------------------------------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("p",null,"ST_DISTANCE_SPHERE,ST,DISTANCE,SPHERE"))}d.isMDXComponent=!0}}]);