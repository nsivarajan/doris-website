"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[301957],{15680:(e,l,a)=>{a.d(l,{xA:()=>u,yg:()=>g});var n=a(296540);function t(e,l,a){return l in e?Object.defineProperty(e,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[l]=a,e}function r(e,l){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var l=1;l<arguments.length;l++){var a=null!=arguments[l]?arguments[l]:{};l%2?r(Object(a),!0).forEach((function(l){t(e,l,a[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(a,l))}))}return e}function p(e,l){if(null==e)return{};var a,n,t=function(e,l){if(null==e)return{};var a,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],l.indexOf(a)>=0||(t[a]=e[a]);return t}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=n.createContext({}),s=function(e){var l=n.useContext(i),a=l;return e&&(a="function"==typeof e?e(l):o(o({},l),e)),a},u=function(e){var l=s(e.components);return n.createElement(i.Provider,{value:l},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var l=e.children;return n.createElement(n.Fragment,{},l)}},y=n.forwardRef((function(e,l){var a=e.components,t=e.mdxType,r=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(a),y=t,g=m["".concat(i,".").concat(y)]||m[y]||c[y]||r;return a?n.createElement(g,o(o({ref:l},u),{},{components:a})):n.createElement(g,o({ref:l},u))}));function g(e,l){var a=arguments,t=l&&l.mdxType;if("string"==typeof e||t){var r=a.length,o=new Array(r);o[0]=y;var p={};for(var i in l)hasOwnProperty.call(l,i)&&(p[i]=l[i]);p.originalType=e,p[m]="string"==typeof e?e:t,o[1]=p;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},142563:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var n=a(58168),t=(a(296540),a(15680));const r={title:"ALTER-TABLE-ROLLUP",language:"zh-CN"},o=void 0,p={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",id:"version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",title:"ALTER-TABLE-ROLLUP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-ROLLUP",draft:!1,tags:[],version:"2.1",frontMatter:{title:"ALTER-TABLE-ROLLUP",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-TABLE-PARTITION",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-PARTITION"},next:{title:"ALTER-TABLE-RENAME",permalink:"/zh-CN/docs/2.1/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-TABLE-RENAME"}},i={},s=[{value:"ALTER-TABLE-ROLLUP",id:"alter-table-rollup",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],u={toc:s},m="wrapper";function c(e){let{components:l,...a}=e;return(0,t.yg)(m,(0,n.A)({},u,a,{components:l,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"alter-table-rollup"},"ALTER-TABLE-ROLLUP"),(0,t.yg)("h3",{id:"name"},"Name"),(0,t.yg)("p",null,"ALTER TABLE ROLLUP"),(0,t.yg)("h3",{id:"description"},"Description"),(0,t.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5bf9\u5df2\u6709 table \u8fdb\u884c rollup \u8fdb\u884c\u4fee\u6539\u64cd\u4f5c\u3002rollup \u662f\u5f02\u6b65\u64cd\u4f5c\uff0c\u4efb\u52a1\u63d0\u4ea4\u6210\u529f\u5219\u8fd4\u56de\uff0c\u4e4b\u540e\u53ef\u4f7f\u7528",(0,t.yg)("a",{parentName:"p",href:"/zh-CN/docs/2.1/sql-manual/sql-statements/Show-Statements/SHOW-ALTER"},"SHOW ALTER")," \u547d\u4ee4\u67e5\u770b\u8fdb\u5ea6\u3002"),(0,t.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE [database.]table alter_clause;\n")),(0,t.yg)("p",null,"rollup \u7684 alter_clause \u652f\u6301\u5982\u4e0b\u51e0\u79cd\u521b\u5efa\u65b9\u5f0f"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u521b\u5efa rollup index")),(0,t.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ADD ROLLUP rollup_name (column_name1, column_name2, ...)\n[FROM from_index_name]\n[PROPERTIES ("key"="value", ...)]\n')),(0,t.yg)("p",null," properties: \u652f\u6301\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\u4e3a1\u5929\u3002"),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},"\u6279\u91cf\u521b\u5efa rollup index")),(0,t.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ADD ROLLUP [rollup_name (column_name1, column_name2, ...)\n                    [FROM from_index_name]\n                    [PROPERTIES ("key"="value", ...)],...]\n')),(0,t.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u5982\u679c\u6ca1\u6709\u6307\u5b9a from_index_name\uff0c\u5219\u9ed8\u8ba4\u4ece base index \u521b\u5efa"),(0,t.yg)("li",{parentName:"ul"},"rollup \u8868\u4e2d\u7684\u5217\u5fc5\u987b\u662f from_index \u4e2d\u5df2\u6709\u7684\u5217"),(0,t.yg)("li",{parentName:"ul"},"\u5728 properties \u4e2d\uff0c\u53ef\u4ee5\u6307\u5b9a\u5b58\u50a8\u683c\u5f0f\u3002\u5177\u4f53\u8bf7\u53c2\u9605 ",(0,t.yg)("a",{parentName:"li",href:"/zh-CN/docs/2.1/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-TABLE"},"CREATE TABLE"))),(0,t.yg)("ol",{start:3},(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5220\u9664 rollup index"),(0,t.yg)("p",{parentName:"li"},"\u8bed\u6cd5\uff1a"))),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'DROP ROLLUP rollup_name [PROPERTIES ("key"="value", ...)]\n')),(0,t.yg)("ol",{start:4},(0,t.yg)("li",{parentName:"ol"},"\u6279\u91cf\u5220\u9664 rollup index")),(0,t.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'DROP ROLLUP [rollup_name [PROPERTIES ("key"="value", ...)],...]\n')),(0,t.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"\u4e0d\u80fd\u5220\u9664 base index")),(0,t.yg)("h3",{id:"example"},"Example"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u521b\u5efa index: example_rollup_index\uff0c\u57fa\u4e8e base index\uff08k1,k2,k3,v1,v2\uff09\u3002\u5217\u5f0f\u5b58\u50a8\u3002")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index(k1, k3, v1, v2);\n")),(0,t.yg)("ol",{start:2},(0,t.yg)("li",{parentName:"ol"},"\u521b\u5efa index: example_rollup_index2\uff0c\u57fa\u4e8e example_rollup_index\uff08k1,k3,v1,v2\uff09")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index2 (k1, v1)\nFROM example_rollup_index;\n")),(0,t.yg)("ol",{start:3},(0,t.yg)("li",{parentName:"ol"},"\u521b\u5efa index: example_rollup_index3, \u57fa\u4e8e base index (k1,k2,k3,v1), \u81ea\u5b9a\u4e49 rollup \u8d85\u65f6\u65f6\u95f4\u4e00\u5c0f\u65f6\u3002")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},'ALTER TABLE example_db.my_table\nADD ROLLUP example_rollup_index(k1, k3, v1)\nPROPERTIES("timeout" = "3600");\n')),(0,t.yg)("ol",{start:4},(0,t.yg)("li",{parentName:"ol"},"\u5220\u9664 index: example_rollup_index2")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nDROP ROLLUP example_rollup_index2;\n")),(0,t.yg)("ol",{start:5},(0,t.yg)("li",{parentName:"ol"},"\u6279\u91cf\u5220\u9664Rollup")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE example_db.my_table\nDROP ROLLUP example_rollup_index2,example_rollup_index3;\n")),(0,t.yg)("h3",{id:"keywords"},"Keywords"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-text"},"ALTER, TABLE, ROLLUP, ALTER TABLE\n")),(0,t.yg)("h3",{id:"best-practice"},"Best Practice"))}c.isMDXComponent=!0}}]);