"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[122433],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},455767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(58168),a=(n(296540),n(15680));const i={title:"DATE_ADD",language:"en"},o=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/date-add",id:"version-2.1/sql-manual/sql-functions/date-time-functions/date-add",title:"DATE_ADD",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/sql-manual/sql-functions/date-time-functions/date-add.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/date-add",permalink:"/docs/2.1/sql-manual/sql-functions/date-time-functions/date-add",draft:!1,tags:[],version:"2.1",frontMatter:{title:"DATE_ADD",language:"en"},sidebar:"docs",previous:{title:"TIMESTAMPDIFF",permalink:"/docs/2.1/sql-manual/sql-functions/date-time-functions/timestampdiff"},next:{title:"DATE_SUB",permalink:"/docs/2.1/sql-manual/sql-functions/date-time-functions/date-sub"}},s={},d=[{value:"date_add",id:"date_add",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"date_add"},"date_add"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"DATETIME DATE_ADD(DATETIME date, INTERVAL expr type)")),(0,a.yg)("p",null,"Adds a specified time interval to the date."),(0,a.yg)("p",null,"The date parameter is a valid date expression."),(0,a.yg)("p",null,"The expr parameter is the interval you want to add."),(0,a.yg)("p",null,"The type parameter can be the following values: YEAR, MONTH, DAY, HOUR, MINUTE, SECOND"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select date_add('2010-11-30 23:59:59', INTERVAL 2 DAY);\n+-------------------------------------------------+\n| date_add('2010-11-30 23:59:59', INTERVAL 2 DAY) |\n+-------------------------------------------------+\n| 2010-12-02 23:59:59                             |\n+-------------------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DATE_ADD,DATE,ADD\n")))}p.isMDXComponent=!0}}]);