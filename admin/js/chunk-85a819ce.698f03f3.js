(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-85a819ce"],{1219:function(t,e,n){},"17b3":function(t,e,n){},"28a0":function(t,e){"function"===typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},3022:function(t,e,n){(function(t){var i=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),n={},i=0;i<e.length;i++)n[e[i]]=Object.getOwnPropertyDescriptor(t,e[i]);return n},r=/%[sdj%]/g;e.format=function(t){if(!$(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(o(arguments[n]));return e.join(" ")}n=1;for(var i=arguments,a=i.length,s=String(t).replace(r,(function(t){if("%%"===t)return"%";if(n>=a)return t;switch(t){case"%s":return String(i[n++]);case"%d":return Number(i[n++]);case"%j":try{return JSON.stringify(i[n++])}catch(e){return"[Circular]"}default:return t}})),l=i[n];n<a;l=i[++n])y(l)||!O(l)?s+=" "+l:s+=" "+o(l);return s},e.deprecate=function(n,i){if("undefined"!==typeof t&&!0===t.noDeprecation)return n;if("undefined"===typeof t)return function(){return e.deprecate(n,i).apply(this,arguments)};var r=!1;function a(){if(!r){if(t.throwDeprecation)throw new Error(i);t.traceDeprecation?console.trace(i):console.error(i),r=!0}return n.apply(this,arguments)}return a};var a,s={};function o(t,n){var i={seen:[],stylize:u};return arguments.length>=3&&(i.depth=arguments[2]),arguments.length>=4&&(i.colors=arguments[3]),b(n)?i.showHidden=n:n&&e._extend(i,n),C(i.showHidden)&&(i.showHidden=!1),C(i.depth)&&(i.depth=2),C(i.colors)&&(i.colors=!1),C(i.customInspect)&&(i.customInspect=!0),i.colors&&(i.stylize=l),h(i,t,i.depth)}function l(t,e){var n=o.styles[e];return n?"["+o.colors[n][0]+"m"+t+"["+o.colors[n][1]+"m":t}function u(t,e){return t}function c(t){var e={};return t.forEach((function(t,n){e[t]=!0})),e}function h(t,n,i){if(t.customInspect&&n&&_(n.inspect)&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var r=n.inspect(i,t);return $(r)||(r=h(t,r,i)),r}var a=p(t,n);if(a)return a;var s=Object.keys(n),o=c(s);if(t.showHidden&&(s=Object.getOwnPropertyNames(n)),D(n)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return d(n);if(0===s.length){if(_(n)){var l=n.name?": "+n.name:"";return t.stylize("[Function"+l+"]","special")}if(k(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(j(n))return t.stylize(Date.prototype.toString.call(n),"date");if(D(n))return d(n)}var u,b="",y=!1,x=["{","}"];if(v(n)&&(y=!0,x=["[","]"]),_(n)){var w=n.name?": "+n.name:"";b=" [Function"+w+"]"}return k(n)&&(b=" "+RegExp.prototype.toString.call(n)),j(n)&&(b=" "+Date.prototype.toUTCString.call(n)),D(n)&&(b=" "+d(n)),0!==s.length||y&&0!=n.length?i<0?k(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special"):(t.seen.push(n),u=y?f(t,n,i,o,s):s.map((function(e){return g(t,n,i,o,e,y)})),t.seen.pop(),m(u,b,x)):x[0]+b+x[1]}function p(t,e){if(C(e))return t.stylize("undefined","undefined");if($(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}return w(e)?t.stylize(""+e,"number"):b(e)?t.stylize(""+e,"boolean"):y(e)?t.stylize("null","null"):void 0}function d(t){return"["+Error.prototype.toString.call(t)+"]"}function f(t,e,n,i,r){for(var a=[],s=0,o=e.length;s<o;++s)E(e,String(s))?a.push(g(t,e,n,i,String(s),!0)):a.push("");return r.forEach((function(r){r.match(/^\d+$/)||a.push(g(t,e,n,i,r,!0))})),a}function g(t,e,n,i,r,a){var s,o,l;if(l=Object.getOwnPropertyDescriptor(e,r)||{value:e[r]},l.get?o=l.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):l.set&&(o=t.stylize("[Setter]","special")),E(i,r)||(s="["+r+"]"),o||(t.seen.indexOf(l.value)<0?(o=y(n)?h(t,l.value,null):h(t,l.value,n-1),o.indexOf("\n")>-1&&(o=a?o.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+o.split("\n").map((function(t){return"   "+t})).join("\n"))):o=t.stylize("[Circular]","special")),C(s)){if(a&&r.match(/^\d+$/))return o;s=JSON.stringify(""+r),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+o}function m(t,e,n){var i=t.reduce((function(t,e){return e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1}),0);return i>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function v(t){return Array.isArray(t)}function b(t){return"boolean"===typeof t}function y(t){return null===t}function x(t){return null==t}function w(t){return"number"===typeof t}function $(t){return"string"===typeof t}function S(t){return"symbol"===typeof t}function C(t){return void 0===t}function k(t){return O(t)&&"[object RegExp]"===A(t)}function O(t){return"object"===typeof t&&null!==t}function j(t){return O(t)&&"[object Date]"===A(t)}function D(t){return O(t)&&("[object Error]"===A(t)||t instanceof Error)}function _(t){return"function"===typeof t}function I(t){return null===t||"boolean"===typeof t||"number"===typeof t||"string"===typeof t||"symbol"===typeof t||"undefined"===typeof t}function A(t){return Object.prototype.toString.call(t)}function N(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(n){if(C(a)&&(a=Object({NODE_ENV:"production",BASE_URL:"/admin/contrib/"}).NODE_DEBUG||""),n=n.toUpperCase(),!s[n])if(new RegExp("\\b"+n+"\\b","i").test(a)){var i=t.pid;s[n]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",n,i,t)}}else s[n]=function(){};return s[n]},e.inspect=o,o.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},o.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=v,e.isBoolean=b,e.isNull=y,e.isNullOrUndefined=x,e.isNumber=w,e.isString=$,e.isSymbol=S,e.isUndefined=C,e.isRegExp=k,e.isObject=O,e.isDate=j,e.isError=D,e.isFunction=_,e.isPrimitive=I,e.isBuffer=n("d60a");var P=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function V(){var t=new Date,e=[N(t.getHours()),N(t.getMinutes()),N(t.getSeconds())].join(":");return[t.getDate(),P[t.getMonth()],e].join(" ")}function E(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){console.log("%s - %s",V(),e.format.apply(e,arguments))},e.inherits=n("28a0"),e._extend=function(t,e){if(!e||!O(e))return t;var n=Object.keys(e),i=n.length;while(i--)t[n[i]]=e[n[i]];return t};var T="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function L(t,e){if(!t){var n=new Error("Promise was rejected with a falsy value");n.reason=t,t=n}return e(t)}function B(e){if("function"!==typeof e)throw new TypeError('The "original" argument must be of type Function');function n(){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i]);var r=n.pop();if("function"!==typeof r)throw new TypeError("The last argument must be of type Function");var a=this,s=function(){return r.apply(a,arguments)};e.apply(this,n).then((function(e){t.nextTick(s,null,e)}),(function(e){t.nextTick(L,e,s)}))}return Object.setPrototypeOf(n,Object.getPrototypeOf(e)),Object.defineProperties(n,i(e)),n}e.promisify=function(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');if(T&&t[T]){var e=t[T];if("function"!==typeof e)throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,T,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,n,i=new Promise((function(t,i){e=t,n=i})),r=[],a=0;a<arguments.length;a++)r.push(arguments[a]);r.push((function(t,i){t?n(t):e(i)}));try{t.apply(this,r)}catch(s){n(s)}return i}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),T&&Object.defineProperty(e,T,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,i(t))},e.promisify.custom=T,e.callbackify=B}).call(this,n("4362"))},5311:function(t,e,n){"use strict";var i=n("5607"),r=n("2b0e");e["a"]=r["a"].extend({name:"rippleable",directives:{ripple:i["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple(t={}){return this.ripple?(t.staticClass="v-input--selection-controls__ripple",t.directives=t.directives||[],t.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",t)):null}}})},"6ca7":function(t,e,n){},8547:function(t,e,n){"use strict";var i=n("2b0e"),r=n("80d2");e["a"]=i["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:r["i"]}}})},"898f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.serviceList.length>0?n("v-container",{attrs:{fluid:""}},[n("v-card",{staticClass:"mt-1"},[n("v-toolbar",{attrs:{dense:"",flat:""}},[n("v-btn",{attrs:{icon:""},on:{click:t.goBack}},[n("v-icon",[t._v("mdi-arrow-left")])],1)],1),n("v-card-title",{staticClass:"pt-0"},[t._v(t._s(t.collectionTitle))]),n("v-card-subtitle",[t._v(t._s(t.breadcrumbs))]),n("v-card-text",{staticClass:"pt-4"},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{dense:"",clearable:"","hide-details":"",placeholder:t.$t("message.3"),"append-icon":"mdi-magnify"},on:{"click:append":t.documentSearch},model:{value:t.searchQuery,callback:function(e){t.searchQuery=e},expression:"searchQuery"}})],1),n("v-col",{staticClass:"text-md-right",attrs:{cols:"12",md:"6"}},[n("v-btn",{attrs:{text:"",color:"green",to:t.docUrlNoIndex+"/new"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-plus")]),t._v(" "+t._s(t.$t("message.25"))+" ")],1)],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[t.docsToBeDeleted.length>0?n("v-btn",{attrs:{dark:"",tile:"",depressed:"",color:"red darken-3"},on:{click:t.deleteDocs}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-close-thick")]),t._v(" "+t._s(t.$t("message.4"))+" ")],1):t._e()],1)],1),n("v-simple-table",{staticClass:"mt-4",attrs:{"fixed-header":""},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left",attrs:{width:"76"}},[n("v-checkbox",{staticClass:"mt-0 pt-0",attrs:{"hide-details":"",color:"red darken-3"},on:{change:t.markAllDocsForDeletion},model:{value:t.deleteAllDocsFlag,callback:function(e){t.deleteAllDocsFlag=e},expression:"deleteAllDocsFlag"}})],1),n("th",{staticClass:"text-left",attrs:{width:"76"}},[t._v("№")]),n("th",{staticClass:"text-left"},[t._v(t._s(t.serviceList[t.$route.params.indexService].collections[t.$route.params.indexCollection].doc_name.title))])])]),n("tbody",t._l(t.documents,(function(e,i){return n("tr",{key:e.title},[n("td",{staticClass:"pr-0",attrs:{width:"76"}},[n("v-checkbox",{staticClass:"mt-0 pt-0",attrs:{"hide-details":"",value:i,color:"red darken-3"},on:{change:t.checkStatusListSelectedDocsDeleted},model:{value:t.docsToBeDeleted,callback:function(e){t.docsToBeDeleted=e},expression:"docsToBeDeleted"}})],1),n("td",{staticClass:"pr-0",attrs:{width:"76"}},[t._v(t._s(i+1))]),n("td",[n("router-link",{attrs:{to:t.createDocumentUrl(i)}},[t._v(t._s(e.title))])],1)])})),0)]},proxy:!0}],null,!1,905153178)})],1),n("v-card-actions",[n("v-spacer"),n("v-pagination",{attrs:{length:t.countPage,"total-visible":5},on:{input:t.docsTablePagination},model:{value:t.currentPageNumber,callback:function(e){t.currentPageNumber=e},expression:"currentPageNumber"}}),n("v-spacer")],1)],1)],1):t._e()},r=[],a=n("2f62"),s=n("d3bd"),o=n.n(s),l=n("d444"),u=n.n(l),c={name:"DocumentList",data:()=>({searchQuery:null,currentPageNumber:1,previousPageNumber:1,countPage:6,deleteAllDocsFlag:!1,docsToBeDeleted:[]}),computed:{...Object(a["c"])(["serviceList"]),...Object(a["c"])("documentList",["documents"]),collectionTitle:function(){const t=this.$route.params.indexService,e=this.$route.params.indexCollection;return this.serviceList[t].collections[e].title},breadcrumbs:function(){const t=this.$route.params.indexService,e=this.serviceList[t].service.title;return`${e} > ${this.collectionTitle}`},docUrlNoIndex:function(){const t=this.$i18n.locale,e=this.$route.params.indexService,n=this.$route.params.indexCollection,i=this.serviceList[e],r=o()(i.service.title,{locale:t}),a=o()(this.collectionTitle,{locale:t});return`/${r}/${e}/${a}/${n}/document`}},methods:{goBack(){window.history.length>1?this.$router.go(-1):this.$router.push({name:"home"})},documentSearch:function(){null!==this.searchQuery&&window.console.log(this.searchQuery)},createDocumentUrl:function(t){return`${this.docUrlNoIndex}/${t}`},markAllDocsForDeletion:function(){this.docsToBeDeleted=this.deleteAllDocsFlag?u()(0,this.documents.length-1):[]},checkStatusListSelectedDocsDeleted:function(){this.deleteAllDocsFlag=this.docsToBeDeleted.length===this.documents.length},deleteDocs:function(){window.console.log(this.docsToBeDeleted)},docsTablePagination:function(){if(this.currentPageNumber===this.previousPageNumber)return;const t=this.currentPageNumber<this.previousPageNumber?"pre":"next";this.previousPageNumber=this.currentPageNumber,window.console.log(t,this.currentPageNumber)}}},h=c,p=(n("ab7d"),n("2877")),d=n("6544"),f=n.n(d),g=n("8336"),m=n("b0af"),v=n("99d9"),b=n("ac7c"),y=n("62ad"),x=n("a523"),w=n("132d"),$=(n("ddb0"),n("17b3"),n("9d26")),S=n("dc22"),C=n("a9ad"),k=n("de2c"),O=n("7560"),j=n("58df"),D=Object(j["a"])(C["a"],Object(k["a"])({onVisible:["init"]}),O["a"]).extend({name:"v-pagination",directives:{Resize:S["a"]},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:t=>t%1===0},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data(){return{maxButtons:0,selected:null}},computed:{classes(){return{"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled,...this.themeClasses}},items(){const t=parseInt(this.totalVisible,10);if(0===t)return[];const e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);const n=e%2===0?1:0,i=Math.floor(e/2),r=this.length-i+1+n;if(this.value>i&&this.value<r){const t=this.value-i+2,e=this.value+i-2-n;return[1,"...",...this.range(t,e),"...",this.length]}if(this.value===i){const t=this.value+i-1-n;return[...this.range(1,t),"...",this.length]}if(this.value===r){const t=this.value-i+1;return[1,"...",...this.range(t,this.length)]}return[...this.range(1,i),"...",...this.range(r,this.length)]}},watch:{value(){this.init()}},mounted(){this.init()},methods:{init(){this.selected=null,this.$nextTick(this.onResize),setTimeout(()=>this.selected=this.value,100)},onResize(){const t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range(t,e){const n=[];t=t>0?t:1;for(let i=t;i<=e;i++)n.push(i);return n},genIcon(t,e,n,i,r){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{type:"button","aria-label":r},on:n?{}:{click:i}},[t($["a"],[e])])])},genItem(t,e){const n=e===this.value&&(this.color||"primary"),i=e===this.value,r=i?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":e===this.value},attrs:{type:"button","aria-current":i,"aria-label":this.$vuetify.lang.t(r,e)},on:{click:()=>this.$emit("input",e)}}),[e.toString()])},genItems(t){return this.items.map((e,n)=>t("li",{key:n},[isNaN(Number(e))?t("span",{class:"v-pagination__more"},[e.toString()]):this.genItem(t,e)]))},genList(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render(t){const e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}}),_=n("0fd9"),I=(n("8b37"),n("80d2")),A=Object(j["a"])(O["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(I["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),N=n("2fa4"),P=n("8654"),V=n("71d9"),E=Object(p["a"])(h,i,r,!1,null,null,null);e["default"]=E.exports;f()(E,{VBtn:g["a"],VCard:m["a"],VCardActions:v["a"],VCardSubtitle:v["b"],VCardText:v["c"],VCardTitle:v["d"],VCheckbox:b["a"],VCol:y["a"],VContainer:x["a"],VIcon:w["a"],VPagination:D,VRow:_["a"],VSimpleTable:A,VSpacer:N["a"],VTextField:P["a"],VToolbar:V["a"]})},"8b37":function(t,e,n){},ab7d:function(t,e,n){"use strict";n("1219")},ac7c:function(t,e,n){"use strict";n("6ca7"),n("ec29");var i=n("9d26"),r=n("c37a"),a=n("fe09");e["a"]=a["a"].extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data(){return{inputIndeterminate:this.indeterminate}},computed:{classes(){return{...r["a"].options.computed.classes.call(this),"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate}},computedIcon(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate(t){this.$nextTick(()=>this.inputIndeterminate=t)},inputIndeterminate(t){this.$emit("update:indeterminate",t)},isActive(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(i["a"],this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",{...this.attrs$,"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()}),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot(){return[this.genCheckbox(),this.genLabel()]}}})},d444:function(t,e,n){"use strict";
/*!
 * fill-range <https://github.com/jonschlinkert/fill-range>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Licensed under the MIT License.
 */const i=n("3022"),r=n("fd8e"),a=t=>null!==t&&"object"===typeof t&&!Array.isArray(t),s=t=>e=>!0===t?Number(e):String(e),o=t=>"number"===typeof t||"string"===typeof t&&""!==t,l=t=>Number.isInteger(+t),u=t=>{let e=""+t,n=-1;if("-"===e[0]&&(e=e.slice(1)),"0"===e)return!1;while("0"===e[++n]);return n>0},c=(t,e,n)=>"string"===typeof t||"string"===typeof e||!0===n.stringify,h=(t,e,n)=>{if(e>0){let n="-"===t[0]?"-":"";n&&(t=t.slice(1)),t=n+t.padStart(n?e-1:e,"0")}return!1===n?String(t):t},p=(t,e)=>{let n="-"===t[0]?"-":"";n&&(t=t.slice(1),e--);while(t.length<e)t="0"+t;return n?"-"+t:t},d=(t,e)=>{t.negatives.sort((t,e)=>t<e?-1:t>e?1:0),t.positives.sort((t,e)=>t<e?-1:t>e?1:0);let n,i=e.capture?"":"?:",r="",a="";return t.positives.length&&(r=t.positives.join("|")),t.negatives.length&&(a=`-(${i}${t.negatives.join("|")})`),n=r&&a?`${r}|${a}`:r||a,e.wrap?`(${i}${n})`:n},f=(t,e,n,i)=>{if(n)return r(t,e,{wrap:!1,...i});let a=String.fromCharCode(t);if(t===e)return a;let s=String.fromCharCode(e);return`[${a}-${s}]`},g=(t,e,n)=>{if(Array.isArray(t)){let e=!0===n.wrap,i=n.capture?"":"?:";return e?`(${i}${t.join("|")})`:t.join("|")}return r(t,e,n)},m=(...t)=>new RangeError("Invalid range arguments: "+i.inspect(...t)),v=(t,e,n)=>{if(!0===n.strictRanges)throw m([t,e]);return[]},b=(t,e)=>{if(!0===e.strictRanges)throw new TypeError(`Expected step "${t}" to be a number`);return[]},y=(t,e,n=1,i={})=>{let r=Number(t),a=Number(e);if(!Number.isInteger(r)||!Number.isInteger(a)){if(!0===i.strictRanges)throw m([t,e]);return[]}0===r&&(r=0),0===a&&(a=0);let o=r>a,l=String(t),v=String(e),b=String(n);n=Math.max(Math.abs(n),1);let y=u(l)||u(v)||u(b),x=y?Math.max(l.length,v.length,b.length):0,w=!1===y&&!1===c(t,e,i),$=i.transform||s(w);if(i.toRegex&&1===n)return f(p(t,x),p(e,x),!0,i);let S={negatives:[],positives:[]},C=t=>S[t<0?"negatives":"positives"].push(Math.abs(t)),k=[],O=0;while(o?r>=a:r<=a)!0===i.toRegex&&n>1?C(r):k.push(h($(r,O),x,w)),r=o?r-n:r+n,O++;return!0===i.toRegex?n>1?d(S,i):g(k,null,{wrap:!1,...i}):k},x=(t,e,n=1,i={})=>{if(!l(t)&&t.length>1||!l(e)&&e.length>1)return v(t,e,i);let r=i.transform||(t=>String.fromCharCode(t)),a=(""+t).charCodeAt(0),s=(""+e).charCodeAt(0),o=a>s,u=Math.min(a,s),c=Math.max(a,s);if(i.toRegex&&1===n)return f(u,c,!1,i);let h=[],p=0;while(o?a>=s:a<=s)h.push(r(a,p)),a=o?a-n:a+n,p++;return!0===i.toRegex?g(h,null,{wrap:!1,options:i}):h},w=(t,e,n,i={})=>{if(null==e&&o(t))return[t];if(!o(t)||!o(e))return v(t,e,i);if("function"===typeof n)return w(t,e,1,{transform:n});if(a(n))return w(t,e,0,n);let r={...i};return!0===r.capture&&(r.wrap=!0),n=n||r.step||1,l(n)?l(t)&&l(e)?y(t,e,n,r):x(t,e,Math.max(Math.abs(n),1),r):null==n||a(n)?w(t,e,1,n):b(n,r)};t.exports=w},d60a:function(t,e){t.exports=function(t){return t&&"object"===typeof t&&"function"===typeof t.copy&&"function"===typeof t.fill&&"function"===typeof t.readUInt8}},eb9e:function(t,e,n){"use strict";
/*!
 * is-number <https://github.com/jonschlinkert/is-number>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */t.exports=function(t){return"number"===typeof t?t-t===0:"string"===typeof t&&""!==t.trim()&&(Number.isFinite?Number.isFinite(+t):isFinite(+t))}},ec29:function(t,e,n){},fd8e:function(t,e,n){"use strict";
/*!
 * to-regex-range <https://github.com/micromatch/to-regex-range>
 *
 * Copyright (c) 2015-present, Jon Schlinkert.
 * Released under the MIT License.
 */const i=n("eb9e"),r=(t,e,n)=>{if(!1===i(t))throw new TypeError("toRegexRange: expected the first argument to be a number");if(void 0===e||t===e)return String(t);if(!1===i(e))throw new TypeError("toRegexRange: expected the second argument to be a number.");let s={relaxZeros:!0,...n};"boolean"===typeof s.strictZeros&&(s.relaxZeros=!1===s.strictZeros);let o=String(s.relaxZeros),u=String(s.shorthand),c=String(s.capture),h=String(s.wrap),p=t+":"+e+"="+o+u+c+h;if(r.cache.hasOwnProperty(p))return r.cache[p].result;let d=Math.min(t,e),f=Math.max(t,e);if(1===Math.abs(d-f)){let n=t+"|"+e;return s.capture?`(${n})`:!1===s.wrap?n:`(?:${n})`}let g=v(t)||v(e),m={min:t,max:e,a:d,b:f},b=[],y=[];if(g&&(m.isPadded=g,m.maxLen=String(m.max).length),d<0){let t=f<0?Math.abs(f):1;y=l(t,Math.abs(d),m,s),d=m.a=0}return f>=0&&(b=l(d,f,m,s)),m.negatives=y,m.positives=b,m.result=a(y,b,s),!0===s.capture?m.result=`(${m.result})`:!1!==s.wrap&&b.length+y.length>1&&(m.result=`(?:${m.result})`),r.cache[p]=m,m.result};function a(t,e,n){let i=u(t,e,"-",!1,n)||[],r=u(e,t,"",!1,n)||[],a=u(t,e,"-?",!0,n)||[],s=i.concat(a).concat(r);return s.join("|")}function s(t,e){let n=1,i=1,r=d(t,n),a=new Set([e]);while(t<=r&&r<=e)a.add(r),n+=1,r=d(t,n);r=f(e+1,i)-1;while(t<r&&r<=e)a.add(r),i+=1,r=f(e+1,i)-1;return a=[...a],a.sort(h),a}function o(t,e,n){if(t===e)return{pattern:t,count:[],digits:0};let i=c(t,e),r=i.length,a="",s=0;for(let o=0;o<r;o++){let[t,e]=i[o];t===e?a+=t:"0"!==t||"9"!==e?a+=m(t,e,n):s++}return s&&(a+=!0===n.shorthand?"\\d":"[0-9]"),{pattern:a,count:[s],digits:r}}function l(t,e,n,i){let r,a=s(t,e),l=[],u=t;for(let s=0;s<a.length;s++){let t=a[s],e=o(String(u),String(t),i),c="";n.isPadded||!r||r.pattern!==e.pattern?(n.isPadded&&(c=b(t,n,i)),e.string=c+e.pattern+g(e.count),l.push(e),u=t+1,r=e):(r.count.length>1&&r.count.pop(),r.count.push(e.count[0]),r.string=r.pattern+g(r.count),u=t+1)}return l}function u(t,e,n,i,r){let a=[];for(let s of t){let{string:t}=s;i||p(e,"string",t)||a.push(n+t),i&&p(e,"string",t)&&a.push(n+t)}return a}function c(t,e){let n=[];for(let i=0;i<t.length;i++)n.push([t[i],e[i]]);return n}function h(t,e){return t>e?1:e>t?-1:0}function p(t,e,n){return t.some(t=>t[e]===n)}function d(t,e){return Number(String(t).slice(0,-e)+"9".repeat(e))}function f(t,e){return t-t%Math.pow(10,e)}function g(t){let[e=0,n=""]=t;return n||e>1?`{${e+(n?","+n:"")}}`:""}function m(t,e,n){return`[${t}${e-t===1?"":"-"}${e}]`}function v(t){return/^-?(0+)\d/.test(t)}function b(t,e,n){if(!e.isPadded)return t;let i=Math.abs(e.maxLen-String(t).length),r=!1!==n.relaxZeros;switch(i){case 0:return"";case 1:return r?"0?":"0";case 2:return r?"0{0,2}":"00";default:return r?`0{0,${i}}`:`0{${i}}`}}r.cache={},r.clearCache=()=>r.cache={},t.exports=r},fe09:function(t,e,n){"use strict";n.d(e,"b",(function(){return o}));var i=n("c37a"),r=n("5311"),a=n("8547"),s=n("58df");function o(t){t.preventDefault()}e["a"]=Object(s["a"])(i["a"],r["a"],a["a"]).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive(){const t=this.value,e=this.internalValue;return this.isMultiple?!!Array.isArray(e)&&e.some(e=>this.valueComparator(e,t)):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,e):Boolean(e):this.valueComparator(e,this.trueValue)},isDirty(){return this.isActive},rippleState(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel(){const t=i["a"].options.methods.genLabel.call(this);return t?(t.data.on={click:o},t):t},genInput(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:o},ref:"input"})},onBlur(){this.isFocused=!1},onClick(t){this.onChange(),this.$emit("click",t)},onChange(){if(!this.isInteractive)return;const t=this.value;let e=this.internalValue;if(this.isMultiple){Array.isArray(e)||(e=[]);const n=e.length;e=e.filter(e=>!this.valueComparator(e,t)),e.length===n&&e.push(t)}else e=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(e,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(e,t)?null:t:!e;this.validate(!0,e),this.internalValue=e,this.hasColor=e},onFocus(){this.isFocused=!0},onKeydown(t){}}})}}]);
//# sourceMappingURL=chunk-85a819ce.698f03f3.js.map