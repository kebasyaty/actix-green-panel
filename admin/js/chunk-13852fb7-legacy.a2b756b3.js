(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13852fb7"],{1219:function(t,e,r){},"17b3":function(t,e,r){},"28a0":function(t,e){"function"===typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},3022:function(t,e,r){(function(t){var n=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++)r[e[n]]=Object.getOwnPropertyDescriptor(t,e[n]);return r},i=/%[sdj%]/g;e.format=function(t){if(!S(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(a(arguments[r]));return e.join(" ")}r=1;for(var n=arguments,o=n.length,s=String(t).replace(i,(function(t){if("%%"===t)return"%";if(r>=o)return t;switch(t){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return t}})),c=n[r];r<o;c=n[++r])y(c)||!L(c)?s+=" "+c:s+=" "+a(c);return s},e.deprecate=function(r,n){if("undefined"!==typeof t&&!0===t.noDeprecation)return r;if("undefined"===typeof t)return function(){return e.deprecate(r,n).apply(this,arguments)};var i=!1;function o(){if(!i){if(t.throwDeprecation)throw new Error(n);t.traceDeprecation?console.trace(n):console.error(n),i=!0}return r.apply(this,arguments)}return o};var o,s={};function a(t,r){var n={seen:[],stylize:u};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),b(r)?n.showHidden=r:r&&e._extend(n,r),P(n.showHidden)&&(n.showHidden=!1),P(n.depth)&&(n.depth=2),P(n.colors)&&(n.colors=!1),P(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=c),h(n,t,n.depth)}function c(t,e){var r=a.styles[e];return r?"["+a.colors[r][0]+"m"+t+"["+a.colors[r][1]+"m":t}function u(t,e){return t}function l(t){var e={};return t.forEach((function(t,r){e[t]=!0})),e}function h(t,r,n){if(t.customInspect&&r&&_(r.inspect)&&r.inspect!==e.inspect&&(!r.constructor||r.constructor.prototype!==r)){var i=r.inspect(n,t);return S(i)||(i=h(t,i,n)),i}var o=p(t,r);if(o)return o;var s=Object.keys(r),a=l(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(r)),j(r)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return d(r);if(0===s.length){if(_(r)){var c=r.name?": "+r.name:"";return t.stylize("[Function"+c+"]","special")}if($(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if(O(r))return t.stylize(Date.prototype.toString.call(r),"date");if(j(r))return d(r)}var u,b="",y=!1,w=["{","}"];if(v(r)&&(y=!0,w=["[","]"]),_(r)){var D=r.name?": "+r.name:"";b=" [Function"+D+"]"}return $(r)&&(b=" "+RegExp.prototype.toString.call(r)),O(r)&&(b=" "+Date.prototype.toUTCString.call(r)),j(r)&&(b=" "+d(r)),0!==s.length||y&&0!=r.length?n<0?$(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special"):(t.seen.push(r),u=y?f(t,r,n,a,s):s.map((function(e){return g(t,r,n,a,e,y)})),t.seen.pop(),m(u,b,w)):w[0]+b+w[1]}function p(t,e){if(P(e))return t.stylize("undefined","undefined");if(S(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}return D(e)?t.stylize(""+e,"number"):b(e)?t.stylize(""+e,"boolean"):y(e)?t.stylize("null","null"):void 0}function d(t){return"["+Error.prototype.toString.call(t)+"]"}function f(t,e,r,n,i){for(var o=[],s=0,a=e.length;s<a;++s)A(e,String(s))?o.push(g(t,e,r,n,String(s),!0)):o.push("");return i.forEach((function(i){i.match(/^\d+$/)||o.push(g(t,e,r,n,i,!0))})),o}function g(t,e,r,n,i,o){var s,a,c;if(c=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]},c.get?a=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(a=t.stylize("[Setter]","special")),A(n,i)||(s="["+i+"]"),a||(t.seen.indexOf(c.value)<0?(a=y(r)?h(t,c.value,null):h(t,c.value,r-1),a.indexOf("\n")>-1&&(a=o?a.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+a.split("\n").map((function(t){return"   "+t})).join("\n"))):a=t.stylize("[Circular]","special")),P(s)){if(o&&i.match(/^\d+$/))return a;s=JSON.stringify(""+i),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+a}function m(t,e,r){var n=t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0);return n>60?r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1]:r[0]+e+" "+t.join(", ")+" "+r[1]}function v(t){return Array.isArray(t)}function b(t){return"boolean"===typeof t}function y(t){return null===t}function w(t){return null==t}function D(t){return"number"===typeof t}function S(t){return"string"===typeof t}function x(t){return"symbol"===typeof t}function P(t){return void 0===t}function $(t){return L(t)&&"[object RegExp]"===C(t)}function L(t){return"object"===typeof t&&null!==t}function O(t){return L(t)&&"[object Date]"===C(t)}function j(t){return L(t)&&("[object Error]"===C(t)||t instanceof Error)}function _(t){return"function"===typeof t}function k(t){return null===t||"boolean"===typeof t||"number"===typeof t||"string"===typeof t||"symbol"===typeof t||"undefined"===typeof t}function C(t){return Object.prototype.toString.call(t)}function N(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(r){if(P(o)&&(o=Object({NODE_ENV:"production",BASE_URL:"/admin/contrib/"}).NODE_DEBUG||""),r=r.toUpperCase(),!s[r])if(new RegExp("\\b"+r+"\\b","i").test(o)){var n=t.pid;s[r]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",r,n,t)}}else s[r]=function(){};return s[r]},e.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=v,e.isBoolean=b,e.isNull=y,e.isNullOrUndefined=w,e.isNumber=D,e.isString=S,e.isSymbol=x,e.isUndefined=P,e.isRegExp=$,e.isObject=L,e.isDate=O,e.isError=j,e.isFunction=_,e.isPrimitive=k,e.isBuffer=r("d60a");var T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function M(){var t=new Date,e=[N(t.getHours()),N(t.getMinutes()),N(t.getSeconds())].join(":");return[t.getDate(),T[t.getMonth()],e].join(" ")}function A(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",M(),e.format.apply(e,arguments))},e.inherits=r("28a0"),e._extend=function(t,e){if(!e||!L(e))return t;var r=Object.keys(e),n=r.length;while(n--)t[r[n]]=e[r[n]];return t};var E="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function I(t,e){if(!t){var r=new Error("Promise was rejected with a falsy value");r.reason=t,t=r}return e(t)}function R(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');function r(){for(var r=[],n=0;n<arguments.length;n++)r.push(arguments[n]);var i=r.pop();if("function"!==typeof i)throw new TypeError("The last argument must be of type Function");var o=this,s=function(){return i.apply(o,arguments)};e.apply(this,r).then((function(e){t.nextTick(s,null,e)}),(function(e){t.nextTick(I,e,s)}))}return Object.setPrototypeOf(r,Object.getPrototypeOf(e)),Object.defineProperties(r,n(e)),r}e.promisify=function(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');if(E&&t[E]){var e=t[E];if("function"!==typeof e)throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,E,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,r,n=new Promise((function(t,n){e=t,r=n})),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push((function(t,n){t?r(t):e(n)}));try{t.apply(this,i)}catch(s){r(s)}return n}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),E&&Object.defineProperty(e,E,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,n(t))},e.promisify.custom=E,e.callbackify=R}).call(this,r("4362"))},"898f":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.serviceList.length>0?r("v-container",{attrs:{fluid:""}},[r("v-card",{staticClass:"mt-1"},[r("v-toolbar",{attrs:{dense:"",flat:""}},[r("v-btn",{attrs:{icon:""},on:{click:t.goBack}},[r("v-icon",[t._v("mdi-arrow-left")])],1)],1),r("v-card-title",{staticClass:"pt-0"},[t._v(t._s(t.collectionTitle))]),r("v-card-subtitle",[t._v(t._s(t.breadcrumbs))]),r("v-card-text",{staticClass:"pt-4 pb-0"},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("v-text-field",{attrs:{dense:"",clearable:"","hide-details":"",placeholder:t.$t("message.3"),"append-icon":"mdi-magnify"},on:{input:function(e){return t.documentSearch()}},model:{value:t.updateSearchQuery,callback:function(e){t.updateSearchQuery=e},expression:"updateSearchQuery"}})],1),r("v-col",{staticClass:"text-md-right",attrs:{cols:"12",md:"6"}},[r("v-btn",{attrs:{text:"",color:"green",to:t.docUrlNoIndex+"/new"}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-file-plus-outline")]),t._v(" "+t._s(t.$t("message.25"))+" ")],1)],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12"}},[t.docsToBeDeleted.length>0?r("v-btn",{attrs:{dark:"",color:"red darken-3"},on:{click:function(e){return t.deleteDocs()}}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-close-thick")]),t._v(" "+t._s(t.$t("message.4"))+" ")],1):t._e()],1)],1),r("v-row",[r("v-col",{staticClass:"py-0",attrs:{cols:"auto"}},[r("div",{staticClass:"w-260"},[r("v-select",{attrs:{items:t.itemsSortDocList(),"hide-details":"",dense:""},on:{change:function(e){t.getDocumentList(),t.refreshUrlState()}},model:{value:t.updateSortDocList,callback:function(e){t.updateSortDocList=e},expression:"updateSortDocList"}})],1)]),r("v-col",{staticClass:"py-0",attrs:{cols:"auto"}},[r("div",{staticClass:"w-180"},[r("v-select",{attrs:{items:t.itemsSortDirectDocList(),"hide-details":"",dense:""},on:{change:function(e){t.getDocumentList(),t.refreshUrlState()}},model:{value:t.updateSortDirectDocList,callback:function(e){t.updateSortDirectDocList=e},expression:"updateSortDirectDocList"}})],1)])],1),r("v-simple-table",{staticClass:"mt-4",attrs:{"fixed-header":""},scopedSlots:t._u([{key:"default",fn:function(){return[r("thead",[r("tr",[r("th",[t._v("№")]),r("th",[r("v-checkbox",{staticClass:"mt-0 pt-0",attrs:{"hide-details":"",color:"red darken-3",disabled:0===t.documents.length},on:{change:function(e){return t.markAllDocsForDeletion()}},model:{value:t.deleteAllDocsFlag,callback:function(e){t.deleteAllDocsFlag=e},expression:"deleteAllDocsFlag"}})],1),t._l(t.fields,(function(e,n){return r("th",{key:"header-"+n},[t._v(t._s(e.title))])})),r("th",[t._v(t._s(t.$t("message.29")))]),r("th",[t._v(t._s(t.$t("message.30")))])],2)]),r("tbody",t._l(t.documents,(function(e,n){return r("tr",{key:"doc-"+n},[r("td",{staticClass:"pr-0",attrs:{width:"76"}},[t._v(t._s(n+t.progressionStep))]),r("td",{staticClass:"pr-0",attrs:{width:"76"}},[r("v-checkbox",{staticClass:"mt-0 pt-0",attrs:{"hide-details":"",value:n,color:"red darken-3"},on:{change:function(e){return t.checkStatusListSelectedDocsDeleted()}},model:{value:t.docsToBeDeleted,callback:function(e){t.docsToBeDeleted=e},expression:"docsToBeDeleted"}})],1),t._l(t.fields,(function(i,o){return[r("td",{key:o},[0===o?r("router-link",{attrs:{to:t.createDocumentUrl(n)}},[t._v(t._s(e[i.field]))]):r("span",{domProps:{innerHTML:t._s(e[i.field])}})],1)]})),r("td",{attrs:{width:"160"},domProps:{innerHTML:t._s(t.formattingDate(e.created_at))}}),r("td",{attrs:{width:"160"},domProps:{innerHTML:t._s(t.formattingDate(e.updated_at))}})],2)})),0)]},proxy:!0}],null,!1,201667460)})],1),r("v-card-actions",[r("v-row",[r("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[r("div",{staticClass:"w-80 block-center"},[r("v-select",{attrs:{items:t.countPerPage,"hide-details":"",dense:""},on:{change:function(e){return t.changeDocsPerPage()}},model:{value:t.updateDocsPerPage,callback:function(e){t.updateDocsPerPage=e},expression:"updateDocsPerPage"}})],1)]),r("v-col",{attrs:{cols:"12 pb-4"}},[t.blockPagination?t._e():r("v-pagination",{attrs:{circle:"",length:t.pageCount,"total-visible":5},on:{input:function(e){t.getDocumentList(),t.refreshUrlState()}},model:{value:t.updateCurrentPageNumber,callback:function(e){t.updateCurrentPageNumber=e},expression:"updateCurrentPageNumber"}})],1)],1)],1)],1)],1):t._e()},i=[],o=r("5530"),s=(r("99af"),r("ac1f"),r("5319"),r("d3b7"),r("fb6a"),r("159b"),r("9129"),r("a9e3"),r("caad"),r("2532"),r("2f62")),a=r("d3bd"),c=r.n(a),u=r("d444"),l=r.n(u),h={name:"DocumentList",data:function(){return{deleteAllDocsFlag:!1,docsToBeDeleted:[],countPerPage:[10,20,30,40,50,60,70,80,90,100]}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(s["d"])(["serviceList"])),Object(s["d"])("documentList",["documents","currentPageNumber","pageCount","progressionStep","docsPerPage","sortDocList","sortDirectDocList","sortTypes","searchQuery","blockPagination","blockLoadDocs"])),{},{updateCurrentPageNumber:{get:function(){return this.currentPageNumber},set:function(t){this.deleteAllDocsFlag=!1,this.docsToBeDeleted=[],this.setCurrentPageNumber(t)}},updateSearchQuery:{get:function(){return this.searchQuery},set:function(t){this.setSearchQuery(t)}},updateDocsPerPage:{get:function(){return this.docsPerPage},set:function(t){this.setDocsPerPage(t)}},updateSortDocList:{get:function(){return this.sortDocList},set:function(t){this.setSortDocList(t)}},updateSortDirectDocList:{get:function(){return this.sortDirectDocList},set:function(t){this.setSortDirectDocList(t)}},collectionTitle:function(){var t=this.$route.params.indexService,e=this.$route.params.indexCollection;return this.serviceList[t].collections[e].title},breadcrumbs:function(){var t=this.$route.params.indexService,e=this.serviceList[t].service.title;return"".concat(e," > ").concat(this.collectionTitle)},docUrlNoIndex:function(){var t=this.$i18n.locale,e=this.$route.params.indexService,r=this.$route.params.indexCollection,n=this.serviceList[e],i=c()(n.service.title,{locale:t}),o=c()(this.collectionTitle,{locale:t});return"/".concat(i,"/").concat(e,"/").concat(o,"/").concat(r,"/document")},fields:function(){var t=this.$route.params.indexService,e=this.$route.params.indexCollection;return this.serviceList[t].collections[e].fields}}),watch:{blockLoadDocs:function(t){t||(this.deleteAllDocsFlag=!1,this.docsToBeDeleted=[])}},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(s["c"])("documentList",["setCurrentPageNumber","setProgressionStep","setDocsPerPage","setSortDocList","setSortDirectDocList","setSearchQuery"])),Object(s["c"])("popUpMsgs",["setShowMsg"])),Object(s["b"])("documentList",["ajaxGetDocumentList","resetPageNumberDefault"])),Object(s["b"])("popUpMsgs",["runShowMsg"])),Object(s["b"])("overlays",["runShowOverlayPageLockout"])),{},{goBack:function(){this.setShowMsg(!1),this.$router.replace({name:"home"})},itemsSortDocList:function(){return[{text:this.$t("message.40"),value:this.sortTypes[0]},{text:this.$t("message.29"),value:this.sortTypes[1]},{text:this.$t("message.30"),value:this.sortTypes[2]}]},itemsSortDirectDocList:function(){return[{text:this.$t("message.42"),value:-1},{text:this.$t("message.43"),value:1}]},changeDocsPerPage:function(){var t="".concat(window.location.protocol,"//").concat(window.location.host,"/admin").concat(this.$route.path,"?per=").concat(this.docsPerPage,"&page=1&sort=").concat(this.sortDocList,"&direct=").concat(this.sortDirectDocList);document.location.replace(t)},getDocumentList:function(){var t=this;return this.setShowMsg(!1),this.runShowOverlayPageLockout(!0),this.docsToBeDeleted.length>0&&(this.deleteAllDocsFlag=!1,this.docsToBeDeleted=[]),new Promise((function(e,r){t.ajaxGetDocumentList().then((function(){t.runShowOverlayPageLockout(!1),e()})).catch((function(e){console.log(e),t.runShowOverlayPageLockout(!1),t.runShowMsg({text:e,status:"error"}),r(e)}))}))},refreshUrlState:function(){var t=this.currentPageNumber;this.setProgressionStep(this.docsPerPage*(t-1)+1),this.$route.query.page=t;var e="".concat(window.location.protocol,"//").concat(window.location.host,"/admin").concat(this.$route.path,"?per=").concat(this.docsPerPage,"&page=").concat(t,"&sort=").concat(this.sortDocList,"&direct=").concat(this.sortDirectDocList);history.replaceState(null,null,e)},documentSearch:function(){this.resetPageNumberDefault(this.getRequestParams()),this.blockLoadDocs||this.getDocumentList()},createDocumentUrl:function(t){return"".concat(this.docUrlNoIndex,"/").concat(t)},formattingDate:function(t){var e=new Date(t+"Z"),r=e.toLocaleDateString([this.$i18n.locale,"en"]),n=e.toLocaleTimeString().slice(0,5);return'<span class="cyan--text text--darken-2">'.concat(r,'</span> <span class="orange--text text--darken-2">').concat(n,"</span>")},markAllDocsForDeletion:function(){this.docsToBeDeleted=this.deleteAllDocsFlag?l()(0,this.documents.length-1):[]},checkStatusListSelectedDocsDeleted:function(){this.deleteAllDocsFlag=this.docsToBeDeleted.length===this.documents.length},restartDocList:function(){var t=this.currentPageNumber;if(t>1&&this.pageCount<t){var e="".concat(window.location.protocol,"//").concat(window.location.host,"/admin").concat(this.$route.path,"?per=").concat(this.docsPerPage,"&page=").concat(--t,"&sort=").concat(this.sortDocList,"&direct=").concat(this.sortDirectDocList);document.location.replace(e)}},deleteDocs:function(){var t=this;this.setShowMsg(!1),this.runShowOverlayPageLockout(!0);var e=this.$route.params.indexService,r=this.$route.params.indexCollection,n=this.serviceList[e],i=[];this.docsToBeDeleted.forEach((function(e){i.push(t.documents[e].hash)}));var o={model_key:n.collections[r].model_key,doc_hash_list:i};this.axios.post("/admin/delete-many-doc",o).then((function(e){var r=e.data;r.is_authenticated?0===r.msg_err.length?(t.setShowMsg(!1),t.getDocumentList().then((function(){t.restartDocList()}))):(console.log(r.msg_err),t.runShowOverlayPageLockout(!1),t.runShowMsg({text:r.msg_err,status:"error"})):(t.runShowOverlayPageLockout(!1),t.setIsAuthenticated(!1))})).catch((function(e){console.log(e),t.runShowOverlayPageLockout(!1),t.runShowMsg({text:e,status:"error"})}))},getRequestParams:function(){var t=this.$route.query.page;t=void 0!==t?parseInt(t):1,Number.isNaN(t)&&this.runShowMsg({text:this.$t("message.36"),status:"error"});var e=this.$route.query.per;e=void 0!==e?parseInt(e):this.docsPerPage,Number.isNaN(e)&&this.runShowMsg({text:this.$t("message.38"),status:"error"});var r=this.$route.query.sort;r=void 0!==r?r:this.sortDocList,this.sortTypes.includes(r)||this.runShowMsg({text:this.$t("message.44"),status:"error"});var n=this.$route.query.direct;return n=void 0!==n?parseInt(n):this.sortDirectDocList,Number.isNaN(n)&&this.runShowMsg({text:this.$t("message.45"),status:"error"}),this.setProgressionStep(e*(t-1)+1),{numPage:t,numPer:e,sortType:r,sortDirect:n}}}),created:function(){var t=this;this.resetPageNumberDefault(this.getRequestParams()),this.blockLoadDocs||this.getDocumentList().then((function(){t.restartDocList()}))}},p=h,d=(r("ab7d"),r("2877")),f=r("6544"),g=r.n(f),m=r("8336"),v=r("b0af"),b=r("99d9"),y=r("ac7c"),w=r("62ad"),D=r("a523"),S=r("132d"),x=r("2909"),P=(r("25f0"),r("d81d"),r("17b3"),r("9d26")),$=r("dc22"),L=r("a9ad"),O=r("de2c"),j=r("7560"),_=r("58df"),k=Object(_["a"])(L["a"],Object(O["a"])({onVisible:["init"]}),j["a"]).extend({name:"v-pagination",directives:{Resize:$["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1===0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return Object(o["a"])({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var r=e%2===0?1:0,n=Math.floor(e/2),i=this.length-n+1+r;if(this.value>n&&this.value<i){var o=this.value-n+2,s=this.value+n-2-r;return[1,"..."].concat(Object(x["a"])(this.range(o,s)),["...",this.length])}if(this.value===n){var a=this.value+n-1-r;return[].concat(Object(x["a"])(this.range(1,a)),["...",this.length])}if(this.value===i){var c=this.value-n+1;return[1,"..."].concat(Object(x["a"])(this.range(c,this.length)))}return[].concat(Object(x["a"])(this.range(1,n)),["..."],Object(x["a"])(this.range(i,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){var r=[];t=t>0?t:1;for(var n=t;n<=e;n++)r.push(n);return r},genIcon:function(t,e,r,n,i){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":r},attrs:{disabled:r,type:"button","aria-label":i},on:r?{}:{click:n}},[t(P["a"],[e])])])},genItem:function(t,e){var r=this,n=e===this.value&&(this.color||"primary"),i=e===this.value,o=i?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":i,"aria-label":this.$vuetify.lang.t(o,e)},on:{click:function(){return r.$emit("input",e)}}}),[e.toString()])},genItems:function(t){var e=this;return this.items.map((function(r,n){return t("li",{key:n},[isNaN(Number(r))?t("span",{class:"v-pagination__more"},[r.toString()]):e.genItem(t,r)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}}),C=r("0fd9"),N=r("b974"),T=(r("8b37"),r("80d2")),M=Object(_["a"])(j["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(o["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(T["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),A=r("8654"),E=r("71d9"),I=Object(d["a"])(p,n,i,!1,null,null,null);e["default"]=I.exports;g()(I,{VBtn:m["a"],VCard:v["a"],VCardActions:b["a"],VCardSubtitle:b["b"],VCardText:b["c"],VCardTitle:b["d"],VCheckbox:y["a"],VCol:w["a"],VContainer:D["a"],VIcon:S["a"],VPagination:k,VRow:C["a"],VSelect:N["a"],VSimpleTable:M,VTextField:A["a"],VToolbar:E["a"]})},"8b37":function(t,e,r){},ab7d:function(t,e,r){"use strict";r("1219")},d444:function(t,e,r){"use strict";
/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */const n=r("3022"),i=r("fd8e"),o=t=>null!==t&&"object"===typeof t&&!Array.isArray(t),s=t=>e=>!0===t?Number(e):String(e),a=t=>"number"===typeof t||"string"===typeof t&&""!==t,c=t=>Number.isInteger(+t),u=t=>{let e=""+t,r=-1;if("-"===e[0]&&(e=e.slice(1)),"0"===e)return!1;while("0"===e[++r]);return r>0},l=(t,e,r)=>"string"===typeof t||"string"===typeof e||!0===r.stringify,h=(t,e,r)=>{if(e>0){let r="-"===t[0]?"-":"";r&&(t=t.slice(1)),t=r+t.padStart(r?e-1:e,"0")}return!1===r?String(t):t},p=(t,e)=>{let r="-"===t[0]?"-":"";r&&(t=t.slice(1),e--);while(t.length<e)t="0"+t;return r?"-"+t:t},d=(t,e)=>{t.negatives.sort((t,e)=>t<e?-1:t>e?1:0),t.positives.sort((t,e)=>t<e?-1:t>e?1:0);let r,n=e.capture?"":"?:",i="",o="";return t.positives.length&&(i=t.positives.join("|")),t.negatives.length&&(o=`-(${n}${t.negatives.join("|")})`),r=i&&o?`${i}|${o}`:i||o,e.wrap?`(${n}${r})`:r},f=(t,e,r,n)=>{if(r)return i(t,e,{wrap:!1,...n});let o=String.fromCharCode(t);if(t===e)return o;let s=String.fromCharCode(e);return`[${o}-${s}]`},g=(t,e,r)=>{if(Array.isArray(t)){let e=!0===r.wrap,n=r.capture?"":"?:";return e?`(${n}${t.join("|")})`:t.join("|")}return i(t,e,r)},m=(...t)=>new RangeError("Invalid range arguments: "+n.inspect(...t)),v=(t,e,r)=>{if(!0===r.strictRanges)throw m([t,e]);return[]},b=(t,e)=>{if(!0===e.strictRanges)throw new TypeError(`Expected step "${t}" to be a number`);return[]},y=(t,e,r=1,n={})=>{let i=Number(t),o=Number(e);if(!Number.isInteger(i)||!Number.isInteger(o)){if(!0===n.strictRanges)throw m([t,e]);return[]}0===i&&(i=0),0===o&&(o=0);let a=i>o,c=String(t),v=String(e),b=String(r);r=Math.max(Math.abs(r),1);let y=u(c)||u(v)||u(b),w=y?Math.max(c.length,v.length,b.length):0,D=!1===y&&!1===l(t,e,n),S=n.transform||s(D);if(n.toRegex&&1===r)return f(p(t,w),p(e,w),!0,n);let x={negatives:[],positives:[]},P=t=>x[t<0?"negatives":"positives"].push(Math.abs(t)),$=[],L=0;while(a?i>=o:i<=o)!0===n.toRegex&&r>1?P(i):$.push(h(S(i,L),w,D)),i=a?i-r:i+r,L++;return!0===n.toRegex?r>1?d(x,n):g($,null,{wrap:!1,...n}):$},w=(t,e,r=1,n={})=>{if(!c(t)&&t.length>1||!c(e)&&e.length>1)return v(t,e,n);let i=n.transform||(t=>String.fromCharCode(t)),o=(""+t).charCodeAt(0),s=(""+e).charCodeAt(0),a=o>s,u=Math.min(o,s),l=Math.max(o,s);if(n.toRegex&&1===r)return f(u,l,!1,n);let h=[],p=0;while(a?o>=s:o<=s)h.push(i(o,p)),o=a?o-r:o+r,p++;return!0===n.toRegex?g(h,null,{wrap:!1,options:n}):h},D=(t,e,r,n={})=>{if(null==e&&a(t))return[t];if(!a(t)||!a(e))return v(t,e,n);if("function"===typeof r)return D(t,e,1,{transform:r});if(o(r))return D(t,e,0,r);let i={...n};return!0===i.capture&&(i.wrap=!0),r=r||i.step||1,c(r)?c(t)&&c(e)?y(t,e,r,i):w(t,e,Math.max(Math.abs(r),1),i):null==r||o(r)?D(t,e,1,r):b(r,i)};t.exports=D},d60a:function(t,e){t.exports=function(t){return t&&"object"===typeof t&&"function"===typeof t.copy&&"function"===typeof t.fill&&"function"===typeof t.readUInt8}},eb9e:function(t,e,r){"use strict";
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */t.exports=function(t){return"number"===typeof t?t-t===0:"string"===typeof t&&""!==t.trim()&&(Number.isFinite?Number.isFinite(+t):isFinite(+t))}},fd8e:function(t,e,r){"use strict";
/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */const n=r("eb9e"),i=(t,e,r)=>{if(!1===n(t))throw new TypeError("toRegexRange: expected the first argument to be a number");if(void 0===e||t===e)return String(t);if(!1===n(e))throw new TypeError("toRegexRange: expected the second argument to be a number.");let s={relaxZeros:!0,...r};"boolean"===typeof s.strictZeros&&(s.relaxZeros=!1===s.strictZeros);let a=String(s.relaxZeros),u=String(s.shorthand),l=String(s.capture),h=String(s.wrap),p=t+":"+e+"="+a+u+l+h;if(i.cache.hasOwnProperty(p))return i.cache[p].result;let d=Math.min(t,e),f=Math.max(t,e);if(1===Math.abs(d-f)){let r=t+"|"+e;return s.capture?`(${r})`:!1===s.wrap?r:`(?:${r})`}let g=v(t)||v(e),m={min:t,max:e,a:d,b:f},b=[],y=[];if(g&&(m.isPadded=g,m.maxLen=String(m.max).length),d<0){let t=f<0?Math.abs(f):1;y=c(t,Math.abs(d),m,s),d=m.a=0}return f>=0&&(b=c(d,f,m,s)),m.negatives=y,m.positives=b,m.result=o(y,b,s),!0===s.capture?m.result=`(${m.result})`:!1!==s.wrap&&b.length+y.length>1&&(m.result=`(?:${m.result})`),i.cache[p]=m,m.result};function o(t,e,r){let n=u(t,e,"-",!1,r)||[],i=u(e,t,"",!1,r)||[],o=u(t,e,"-?",!0,r)||[],s=n.concat(o).concat(i);return s.join("|")}function s(t,e){let r=1,n=1,i=d(t,r),o=new Set([e]);while(t<=i&&i<=e)o.add(i),r+=1,i=d(t,r);i=f(e+1,n)-1;while(t<i&&i<=e)o.add(i),n+=1,i=f(e+1,n)-1;return o=[...o],o.sort(h),o}function a(t,e,r){if(t===e)return{pattern:t,count:[],digits:0};let n=l(t,e),i=n.length,o="",s=0;for(let a=0;a<i;a++){let[t,e]=n[a];t===e?o+=t:"0"!==t||"9"!==e?o+=m(t,e,r):s++}return s&&(o+=!0===r.shorthand?"\\d":"[0-9]"),{pattern:o,count:[s],digits:i}}function c(t,e,r,n){let i,o=s(t,e),c=[],u=t;for(let s=0;s<o.length;s++){let t=o[s],e=a(String(u),String(t),n),l="";r.isPadded||!i||i.pattern!==e.pattern?(r.isPadded&&(l=b(t,r,n)),e.string=l+e.pattern+g(e.count),c.push(e),u=t+1,i=e):(i.count.length>1&&i.count.pop(),i.count.push(e.count[0]),i.string=i.pattern+g(i.count),u=t+1)}return c}function u(t,e,r,n,i){let o=[];for(let s of t){let{string:t}=s;n||p(e,"string",t)||o.push(r+t),n&&p(e,"string",t)&&o.push(r+t)}return o}function l(t,e){let r=[];for(let n=0;n<t.length;n++)r.push([t[n],e[n]]);return r}function h(t,e){return t>e?1:e>t?-1:0}function p(t,e,r){return t.some(t=>t[e]===r)}function d(t,e){return Number(String(t).slice(0,-e)+"9".repeat(e))}function f(t,e){return t-t%Math.pow(10,e)}function g(t){let[e=0,r=""]=t;return r||e>1?`{${e+(r?","+r:"")}}`:""}function m(t,e,r){return`[${t}${e-t===1?"":"-"}${e}]`}function v(t){return/^-?(0+)\d/.test(t)}function b(t,e,r){if(!e.isPadded)return t;let n=Math.abs(e.maxLen-String(t).length),i=!1!==r.relaxZeros;switch(n){case 0:return"";case 1:return i?"0?":"0";case 2:return i?"0{0,2}":"00";default:return i?`0{0,${n}}`:`0{${n}}`}}i.cache={},i.clearCache=()=>i.cache={},t.exports=i}}]);
//# sourceMappingURL=chunk-13852fb7-legacy.a2b756b3.js.map