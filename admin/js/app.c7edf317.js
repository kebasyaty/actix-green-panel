(function(e){function t(t){for(var s,a,c=t[0],r=t[1],u=t[2],l=0,d=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var s={},a={app:0},i={app:0},o=[];function c(e){return r.p+"js/"+({}[e]||e)+"."+{"chunk-54b2b4a8":"139d553c","chunk-dbb8d5b0":"525d8181","chunk-207d5f71":"d35e3800","chunk-20ee99be":"8c37957d","chunk-85a819ce":"20c3ccbd"}[e]+".js"}function r(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(e){var t=[],n={"chunk-dbb8d5b0":1,"chunk-207d5f71":1,"chunk-20ee99be":1,"chunk-85a819ce":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var s="css/"+({}[e]||e)+"."+{"chunk-54b2b4a8":"31d6cfe0","chunk-dbb8d5b0":"2a94770c","chunk-207d5f71":"9deb4d24","chunk-20ee99be":"6081b6cb","chunk-85a819ce":"bbbc45e3"}[e]+".css",i=r.p+s,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===s||l===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===s||l===i)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var s=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete a[e],m.parentNode.removeChild(m),n(o)},m.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){a[e]=0})));var s=i[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise((function(t,n){s=i[e]=[t,n]}));t.push(s[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(m);var n=i[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",d.name="ChunkLoadError",d.type=s,d.request=a,n[1](d)}i[e]=void 0}};var m=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},r.m=e,r.c=s,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/admin/contrib/",r.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var m=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[e.isAuthenticated?[n("NavigationBar"),n("AppBar"),n("PopUpMsgs")]:e._e(),n("v-main",[n("router-view")],1)],2)},i=[],o=n("5530"),c=n("2f62"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{staticClass:"pa-1",attrs:{app:"",width:e.updatePanelWidthServiceList},model:{value:e.updateOpenPanelServiceList,callback:function(t){e.updateOpenPanelServiceList=t},expression:"updateOpenPanelServiceList"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[e._v(e._s(e.brand))]),n("v-list-item-subtitle",[e._v(e._s(e.slogan))])],1)],1),n("v-list-item",{staticClass:"panel-width-service-list pl-1"},[n("v-list-item-content",[n("v-slider",{staticClass:"panel-width-service-list__slider",attrs:{dense:"","hide-details":"","prepend-icon":"mdi-arrow-split-vertical",min:"256",max:"600"},model:{value:e.updatePanelWidthServiceList,callback:function(t){e.updatePanelWidthServiceList=t},expression:"updatePanelWidthServiceList"}})],1)],1),n("v-expansion-panels",{staticClass:"service-list"},e._l(e.serviceList,(function(t,s){return n("v-expansion-panel",{key:t.service.title},[n("v-expansion-panel-header",{staticClass:"text-subtitle-1 font-weight-medium pl-0"},[n("div",{staticClass:"pl-1 service-list__icon"},[n("v-icon",{staticClass:"pos-relative pos-top-n2",domProps:{textContent:e._s("mdi-"+t.service.icon)}})],1),n("span",{},[e._v(e._s(t.service.title))])]),n("v-expansion-panel-content",{staticClass:"service-list__content"},[n("v-list",{attrs:{shaped:"",dense:""}},[n("v-list-item-group",{attrs:{color:"primary"},model:{value:e.selectedService[s],callback:function(t){e.$set(e.selectedService,s,t)},expression:"selectedService[indexService]"}},e._l(t.collections,(function(a,i){return n("v-list-item",{key:a.model_key,staticClass:"px-1",attrs:{to:e.createUrlDocumentList(t.service.title,a.title,s,i)},on:{click:function(t){e.resetPageNumberDefault(),e.ajaxGetDocumentList({indexService:s,indexCollection:i}),e.resetPreActivatedService(s)}}},[n("v-list-item-icon",{staticClass:"mr-2"},[n("v-icon",[e._v("mdi-circle-medium")])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-subtitle-1 font-weight-regular",domProps:{textContent:e._s(a.title)}})],1)],1)})),1)],1)],1)],1)})),1)],1)},u=[],l=(n("d81d"),n("99af"),n("d3bd")),d=n.n(l),m={name:"NavigationBar",computed:Object(o["a"])(Object(o["a"])({},Object(c["d"])(["brand","slogan","openPanelServiceList","panelWidthServiceList","selectedService","serviceList"])),{},{updateOpenPanelServiceList:{get:function(){return this.openPanelServiceList},set:function(e){this.setOpenPanelServiceList(e)}},updatePanelWidthServiceList:{get:function(){return this.panelWidthServiceList},set:function(e){this.setPanelWidthServiceList(e)}}}),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(c["c"])(["setOpenPanelServiceList","setPanelWidthServiceList","setSelectedService"])),Object(c["b"])("documentList",["ajaxGetDocumentList","resetPageNumberDefault"])),{},{resetPreActivatedService:function(e){this.setSelectedService(this.selectedService.map((function(t,n){return n!==e&&(t=void 0),t})))},createUrlDocumentList:function(e,t,n,s){var a=this.$i18n.locale,i=d()(e,{locale:a}),o=d()(t,{locale:a});return"/".concat(i,"/").concat(n,"/").concat(o,"/").concat(s,"/document-list")}})},p=m,v=n("2877"),h=n("6544"),f=n.n(h),g=n("cd55"),b=n("49e2"),S=n("c865"),_=n("0393"),L=n("132d"),x=n("8860"),P=n("da13"),k=n("5d23"),w=n("1baa"),O=n("34c3"),y=n("f774"),j=n("ba0d"),C=Object(v["a"])(p,r,u,!1,null,null,null),M=C.exports;f()(C,{VExpansionPanel:g["a"],VExpansionPanelContent:b["a"],VExpansionPanelHeader:S["a"],VExpansionPanels:_["a"],VIcon:L["a"],VList:x["a"],VListItem:P["a"],VListItemContent:k["a"],VListItemGroup:w["a"],VListItemIcon:O["a"],VListItemSubtitle:k["b"],VListItemTitle:k["c"],VNavigationDrawer:y["a"],VSlider:j["a"]});var V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{attrs:{app:"",dense:"",fixed:""}},[n("v-app-bar-nav-icon",{on:{click:function(t){return e.setOpenPanelServiceList(!e.openPanelServiceList)}}}),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:"",href:e.homeUrl}},"v-btn",a,!1),s),[n("v-icon",[e._v("mdi-reload")])],1)]}}])},[n("span",[e._v(e._s(e.$t("message.0")))])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:function(t){e.$vuetify.theme.dark=!e.$vuetify.theme.dark}}},"v-btn",a,!1),s),[n("v-icon",[e._v("mdi-brightness-4")])],1)]}}])},[n("span",[e._v(e._s(e.$t("message.1")))])]),n("v-spacer"),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""},on:{click:e.logout}},"v-btn",a,!1),s),[n("v-icon",[e._v("mdi-logout")])],1)]}}])},[n("span",[e._v(e._s(e.$t("message.2")))])])],1)},A=[],I={name:"AppBar",data:function(){return{homeUrl:"/admin",panelServiceList:null}},computed:Object(o["a"])({},Object(c["d"])(["openPanelServiceList"])),methods:Object(o["a"])(Object(o["a"])({},Object(c["c"])(["setUsername","setIsAuthenticated","setOpenPanelServiceList"])),{},{logout:function(){var e=this;this.axios.post("/admin/logout",{}).then((function(t){e.setUsername(".."),e.setIsAuthenticated(!1)})).catch((function(e){console.log(e)}))}})},D=I,E=n("40dc"),$=n("5bc1"),B=n("8336"),U=n("2fa4"),N=n("3a2f"),T=Object(v["a"])(D,V,A,!1,null,null,null),W=T.exports;f()(T,{VAppBar:E["a"],VAppBarNavIcon:$["a"],VBtn:B["a"],VIcon:L["a"],VSpacer:U["a"],VTooltip:N["a"]});var q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-snackbar",{attrs:{app:"",top:"",timeout:"-1"},scopedSlots:e._u([{key:"action",fn:function(t){var s=t.attrs;return[n("v-btn",e._b({attrs:{icon:"",color:"red",text:""},on:{click:function(t){e.compShowMsg=!1}}},"v-btn",s,!1),[n("v-icon",[e._v("mdi-close")])],1)]}}]),model:{value:e.compShowMsg,callback:function(t){e.compShowMsg=t},expression:"compShowMsg"}},[n("span",{class:e.msgStatus+"--text font-weight-medium",domProps:{innerHTML:e._s(e.textMsg)}})])},R=[],G={name:"PopUpMsgs",computed:Object(o["a"])(Object(o["a"])({},Object(c["d"])("popUpMsgs",["showMsg","textMsg","msgStatus"])),{},{compShowMsg:{get:function(){return this.showMsg},set:function(e){this.setShowMsg(e)}}}),methods:Object(o["a"])({},Object(c["c"])("popUpMsgs",["setShowMsg"]))},H=G,Q=n("2db4"),F=Object(v["a"])(H,q,R,!1,null,null,null),J=F.exports;f()(F,{VBtn:B["a"],VIcon:L["a"],VSnackbar:Q["a"]});var K={name:"App",components:{NavigationBar:M,AppBar:W,PopUpMsgs:J},computed:Object(o["a"])({},Object(c["d"])(["isStart","username","isAuthenticated","serviceList"])),watch:{isAuthenticated:function(e){this.isStart?this.setIsStart(!1):e?(this.$session.start(),this.$session.set("username",this.username),this.$router.push({name:"home"}),0===this.serviceList.length&&this.getServiceList()):(this.setSelectedService([]),this.setServiceList([]),this.$session.destroy(),this.$router.push("/sign-in"))}},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(c["c"])(["setBrand","setSlogan","setIsStart","setUsername","setIsAuthenticated","setSelectedService","setServiceList"])),Object(c["b"])("popUpMsgs",["runShowMsg"])),{},{getServiceList:function(){var e=this;this.axios.get("/admin/service-list").then((function(t){var n=t.data;if(n.is_authenticated){var s=n.service_list.length;if(e.setBrand(n.brand),e.setSlogan(n.slogan),s>0){for(var a=[],i=0;i<s;i++)a.push(void 0);e.setSelectedService(a),e.setServiceList(n.service_list)}else console.log("No data available"),e.runShowMsg({text:"No data available",status:"warning"})}else e.setIsAuthenticated(!1)})).catch((function(e){console.log(e)}))}}),created:function(){this.$session.exists()?(this.setUsername(this.$session.get("username")),this.setIsAuthenticated(!0),this.getServiceList()):(this.setIsStart(!1),this.setUsername(".."),this.setSelectedService([]),this.setServiceList([]))}},z=K,X=(n("034f"),n("7496")),Y=n("f6c4"),Z=Object(v["a"])(z,a,i,!1,null,null,null),ee=Z.exports;f()(Z,{VApp:X["a"],VMain:Y["a"]});var te=n("a925"),ne=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),se=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("v-row",{staticClass:"text-center"},[s("v-col",{staticClass:"mt-16 mb-5",attrs:{cols:"12"}},[s("v-img",{attrs:{src:n("9b19"),contain:"",height:"140"}})],1),s("v-col",{attrs:{cols:"12"}},[s("h1",{staticClass:"text-h4 font-weight-bold mb-3",domProps:{textContent:e._s(e.$t("message.11")+", "+e.username+".")}}),s("p",{staticClass:"text-h5 font-weight-regular orange--text",domProps:{textContent:e._s(e.$t("message.12"))}})])],1)],1)},ae=[],ie={name:"Home",computed:Object(o["a"])({},Object(c["d"])(["username"]))},oe=ie,ce=n("62ad"),re=n("a523"),ue=n("adda"),le=n("0fd9"),de=Object(v["a"])(oe,se,ae,!1,null,null,null),me=de.exports;f()(de,{VCol:ce["a"],VContainer:re["a"],VImg:ue["a"],VRow:le["a"]}),s["a"].use(ne["a"]);var pe=[{path:"/",name:"home",component:me,meta:{authRequired:!0}},{path:"/sign-in",name:"signin",component:function(){return Promise.all([n.e("chunk-dbb8d5b0"),n.e("chunk-207d5f71")]).then(n.bind(null,"4a33"))}},{path:"/:service/:indexService/:collection/:indexCollection/document-list",name:"documentList",component:function(){return Promise.all([n.e("chunk-dbb8d5b0"),n.e("chunk-85a819ce")]).then(n.bind(null,"898f"))},meta:{authRequired:!0}},{path:"/:service/:indexService/:collection/:indexCollection/document/:indexDoc",name:"documenForm",component:function(){return Promise.all([n.e("chunk-dbb8d5b0"),n.e("chunk-20ee99be")]).then(n.bind(null,"ab20"))},meta:{authRequired:!0}},{path:"*",name:"notFound",component:function(){return n.e("chunk-54b2b4a8").then(n.bind(null,"9703"))},meta:{authRequired:!0}}],ve=new ne["a"]({mode:"history",base:"/admin/",routes:pe});ve.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.authRequired}))?s["a"].prototype.$session.exists()?n():n({path:"/sign-in"}):n()}));var he=ve,fe={setBrand:function(e,t){e.brand=t},setSlogan:function(e,t){e.slogan=t},setIsStart:function(e,t){e.isStart=t},setIsAuthenticated:function(e,t){e.isAuthenticated=t},setUsername:function(e,t){e.username=t},setOpenPanelServiceList:function(e,t){e.openPanelServiceList=t},setPanelWidthServiceList:function(e,t){e.panelWidthServiceList=t},setSelectedService:function(e,t){e.selectedService=t},setServiceList:function(e,t){e.serviceList=t},setShowErrMsg:function(e,t){e.showErrMsg=t},setTextErrMsg:function(e,t){e.textErrMsg=t}},ge={},be=(n("b64b"),{namespaced:!0,state:{documents:[],currentPageNumber:1,pageCount:0,searchQuery:null,blockPagination:!1,blockLoadDocs:!1},getters:{},mutations:{setDocuments:function(e,t){e.documents=t},setCurrentPageNumber:function(e,t){e.currentPageNumber=t},setPageCount:function(e,t){e.pageCount=t},setSearchQuery:function(e,t){e.searchQuery=t},setBlockPagination:function(e,t){e.blockPagination=t},setBlockLoadDocs:function(e,t){e.blockLoadDocs=t}},actions:{ajaxGetDocumentList:function(e){var t=e.state,n=e.commit,a=e.dispatch,i=e.rootState,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(e,c){var r;!t.blockLoadDocs&&i.serviceList.length>0&&(n("setBlockLoadDocs",!0),r=Object.keys(o).length>0?i.serviceList[o.indexService].collections[o.indexCollection]:i.serviceList[he.currentRoute.params.indexService].collections[he.currentRoute.params.indexCollection],s["a"].axios.get("/admin/document-list",{params:{model_key:r.model_key,field_name:r.doc_name.field,page_num:t.currentPageNumber,search_query:t.searchQuery||""}}).then((function(e){var t=e.data;t.is_authenticated?0===t.msg_err.length?(n("setPageCount",t.page_count),n("setDocuments",t.documents)):(console.log(t.msg_err),a("popUpMsgs/runShowMsg",{text:t.msg_err,status:"error"})):n("setIsAuthenticated",!1,{root:!0})})).catch((function(e){console.log(e)})).then((function(){n("setBlockLoadDocs",!1),e()})))}))},resetPageNumberDefault:function(e){var t=e.commit;t("setBlockPagination",!0),t("setCurrentPageNumber",1),t("setBlockPagination",!1)}}}),Se={namespaced:!0,state:{showMsg:!1,textMsg:"",msgStatus:"info"},getters:{},mutations:{setShowMsg:function(e,t){e.showMsg=t},setTextMsg:function(e,t){e.textMsg=t},setMsgStatus:function(e,t){e.msgStatus=t}},actions:{runShowMsg:function(e,t){var n=e.commit;n("setTextMsg",t.text),n("setShowMsg",!0),n("setMsgStatus",t.status)}}};s["a"].use(c["a"]);var _e=new c["a"].Store({state:{brand:"",slogan:"",isStart:!0,isAuthenticated:!1,username:"..",openPanelServiceList:null,panelWidthServiceList:360,selectedService:[],serviceList:[]},mutations:fe,actions:ge,modules:{documentList:be,popUpMsgs:Se}}),Le={message:{0:"Reload panel",1:"Light or Dark theme",2:"Logout",3:"Search",4:"Is delete selected documents ?",5:"Username",6:"Password",7:"Username is required.",8:"Password is required.",9:"Sign in",10:"Clear",11:"Welcome",12:"Good luck on your business !",13:"Delete document",14:"Save and create a new document",15:"Save and continue editing the document",16:"Save document",17:"Time",18:"Close",19:"Save",20:"Remove irrelevant items",21:"Delete",22:"Add new list item",23:"Title",24:"Value",25:"Create a new document",26:"New document",27:"Access denied",28:"",29:"Created",30:"Updated"}},xe={message:{0:"Перезагрузить панель",1:"Светлая или темная тема",2:"Выйти",3:"Поиск",4:"Удалить выбранные документы ?",5:"Имя пользователя",6:"Пароль",7:"Требуется имя пользователя.",8:"Требуется пароль.",9:"Войти",10:"Очистить",11:"Добро пожаловать",12:"Успеха Вам, в ваших делах !",13:"Удалить документ",14:"Сохранить и создать новый документ",15:"Сохранить и продолжить редактировать документ",16:"Сохранить документ",17:"Время",18:"Закрыть",19:"Сохранить",20:"Удалите ненужные элементы",21:"Удалить",22:"Добавить новый элемент списка",23:"Название",24:"Значение",25:"Создать новый документ",26:"Новый документ",27:"В доступе отказано",28:"",29:"Создан",30:"Обновлен"}},Pe={en:Le,ru:xe},ke=n("f309");s["a"].use(ke["a"]);var we={icons:{iconfont:"mdi"}},Oe=new ke["a"](we),ye=(n("744d"),n("bc3a")),je=n.n(ye),Ce=n("2106"),Me=n.n(Ce),Ve=n("0628"),Ae=n.n(Ve);s["a"].config.productionTip=!1,s["a"].config.devtools=!1,s["a"].config.debug=!1,s["a"].config.silent=!0,s["a"].use(te["a"]),s["a"].use(Me.a,je.a),s["a"].use(Ae.a,{persist:!0});var Ie=new te["a"]({locale:"en",fallbackLocale:"en",messages:Pe});new s["a"]({router:he,store:_e,i18n:Ie,vuetify:Oe,render:function(e){return e(ee)}}).$mount("#app")},"744d":function(e,t,n){},"85ec":function(e,t,n){},"9b19":function(e,t,n){e.exports=n.p+"img/logo.ffa5eefe.svg"}});
//# sourceMappingURL=app.c7edf317.js.map