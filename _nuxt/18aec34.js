(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{198:function(t,e,r){"use strict";r(35);var n=r(33),o={data:function(){return{loaded:!1}},head:function(){return{bodyAttrs:{class:this.darkTheme?"theme-dark":"theme-light"}}},computed:Object(n.c)(["darkTheme"]),mounted:function(){var t=this;setTimeout((function(){t.loaded=!0,console.log("Is Dark",t.darkTheme)}),210)}},c=r(14),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{class:{"preloader-hide":t.loaded},attrs:{id:"preloader"}},[e("div",{staticClass:"spinner-border color-highlight",attrs:{role:"status"}})]),t._v(" "),e("div",{attrs:{id:"page"}},[e("nuxt")],1)])}),[],!1,null,null,null);e.a=component.exports},199:function(t,e,r){"use strict";r(69),r(42),r(40),r(30),r(39),r(10),r(55),r(34),r(56);var n=r(2),o=r(26),c=(r(17),r(35),r(81),r(82),r(33));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={setup:function(){setTimeout((function(){var t=document.getElementById("preloader");t&&t.classList.add("preloader-hide")}),1150);var t=document.getElementsByClassName("menu-hider");if(!t.length){var e=document.createElement("div");e.setAttribute("class","menu-hider"),document.body.insertAdjacentElement("beforebegin",e)}setTimeout((function(){t[0].classList.contains("menu-active")&&t[0].classList.remove("menu-active")}),0)},data:function(){return{requestAccess:!0,isActive:!1,showNumPad:!1,phone:"263773640984",isDark:!0,closeEvent:!1}},head:function(){return{bodyAttrs:{class:this.darkTheme?"theme-dark":"theme-light"}}},computed:d({},Object(c.c)(["hasMicAccess","darkTheme"])),watch:{isDark:function(t){return this.setTheme(t)}},mounted:function(){var t=this;this.hasMicAccess||this.checkMicState(),this.isDark=this.darkTheme,this.$nuxt.$on("logout",(function(){return t.logout(),t.$router.push("/auth")})),this.$nuxt.$on("toggle_menu",(function(menu,e){var r=document.getElementsByClassName("menu-hider");return t.closeEvent||(r[0].addEventListener("click",(function(){return t.$nuxt.$emit(e||"NO_EVENT")})),t.closeEvent=!0),menu?r[0].classList.add("menu-active"):r[0].classList.remove("menu-active")}))},methods:d(d({},Object(c.b)(["setMicAccess","setTheme","logout"])),{},{checkMicState:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.permissions.query({name:"microphone"});case 3:if(r=e.sent,n=r.state,console.log({state:n}),"granted"!==n){e.next=10;break}return e.abrupt("return",t.setMicAccess(!0));case 10:if("prompt"!==n){e.next=14;break}return e.abrupt("return",t.setMicAccess(!1));case 14:return t.$nuxt.$emit("alert",{msg:"Microphone Access Denied.",role:"warn",timeout:3e3}),e.abrupt("return",t.setMicAccess(!0));case 16:e.next=20;break;case 18:e.prev=18,e.t0=e.catch(0);case 20:case"end":return e.stop()}}),e,null,[[0,18]])})))()},allowAccess:function(){if(navigator.getUserMedia||(navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia),console.log(navigator.getUserMedia),navigator.getUserMedia)return navigator.getUserMedia({audio:!0,video:!1},console.log,(function(t){})),this.setMicAccess(!0);alert("App not supported in this browser.")},phoneBook:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("contacts"in navigator&&"ContactsManager"in window&&"getProperties"in navigator.contacts){e.next=4;break}return t.$nuxt.$emit("contactsFound",[{name:"Joe Munapo",tel:["+2363775696233","+263781061438"]}]),e.abrupt("return",t.$nuxt.$emit("alert",{msg:"Error! Use google chrome",role:"warn",timeout:3e3}));case 4:return e.prev=4,e.next=7,navigator.contacts.getProperties();case 7:if(!e.sent.includes("address")){e.next=16;break}return r=["name","tel"],e.next=12,navigator.contacts.select(r,{multiple:!0});case 12:return n=e.sent,e.abrupt("return",t.$nuxt.$emit("contactsFound",n));case 16:console.log("Contact Picker API on your device doesn't support address property");case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(4),console.log("Unexpected error happened in Contact Picker API");case 22:case"end":return e.stop()}}),e,null,[[4,19]])})))()}})},f=r(14),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("div",{attrs:{id:"page"}},[e("div",{staticClass:"header header-fixed header-logo-center"},[e("NuxtLink",{staticClass:"header-title",attrs:{to:"/"}},[t._v("\n        Jambo\n      ")]),t._v(" "),e("a",{staticClass:"back-button header-icon header-icon-1",on:{click:function(e){return t.phoneBook()}}},[e("i",{staticClass:"fas fa-address-book tw-text-xl"})]),t._v(" "),"/profile"!==t.$route.path?e("NuxtLink",{staticClass:"header-icon header-icon-4",attrs:{to:"/profile"}},[e("i",{staticClass:"fa fa-user tw-text-xl"})]):e("a",{staticClass:"header-icon header-icon-4",on:{click:function(e){t.isActive=!t.isActive}}},[e("i",{staticClass:"fas fa-cog tw-text-xl"})])],1),t._v(" "),e("div",{staticClass:"footer-bar-1",attrs:{id:"footer-bar"}},[e("NuxtLink",{staticClass:"header-title",attrs:{to:"/"}},[e("i",{staticClass:"fa fa-star"}),e("span",[t._v("Favorites")])]),t._v(" "),e("NuxtLink",{staticClass:"header-title",attrs:{to:"/recent"}},[e("i",{staticClass:"fa fa-history"}),e("span",[t._v("Recent")])]),t._v(" "),e("NuxtLink",{staticClass:"header-title",attrs:{to:"/services"}},[e("i",{staticClass:"fa fa-tools"}),e("span",[t._v("Services")])]),t._v(" "),e("wallet-view",{attrs:{"is-nav":""}})],1),t._v(" "),e("div",{staticClass:"page-content tw-pt-14"},[e("Nuxt")],1),t._v(" "),e("div",{staticClass:"menu menu-box-bottom menu-box-detached d-block",class:{"menu-active":t.isActive}},[e("div",{staticClass:"menu-title mt-0 pt-0"},[e("h1",[t._v("Settings")]),t._v(" "),e("a",{staticClass:"close-menu",on:{click:function(e){t.isActive=!t.isActive}}},[e("i",{staticClass:"fa fa-times"})])]),t._v(" "),e("div",{staticClass:"divider divider-margins mb-n2"}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"list-group list-custom-small"},[e("a",{staticClass:"pb-2 ms-n1",attrs:{href:"#"}},[e("i",{staticClass:"fa font-12 fa-moon rounded-s bg-highlight color-white me-3"}),t._v(" "),e("span",[t._v("Dark Mode")]),t._v(" "),e("div",{staticClass:"custom-control scale-switch ios-switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.isDark,expression:"isDark"}],staticClass:"ios-input",attrs:{id:"switch-dark-mode","data-toggle-theme":"",type:"checkbox"},domProps:{checked:Array.isArray(t.isDark)?t._i(t.isDark,null)>-1:t.isDark},on:{change:function(e){var r=t.isDark,n=e.target,o=!!n.checked;if(Array.isArray(r)){var c=t._i(r,null);n.checked?c<0&&(t.isDark=r.concat([null])):c>-1&&(t.isDark=r.slice(0,c).concat(r.slice(c+1)))}else t.isDark=o}}}),t._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"switch-dark-mode"}})]),t._v(" "),e("i",{staticClass:"fa fa-angle-left"})])])])]),t._v(" "),e("utils-alert"),t._v(" "),e("utils-call-actions"),t._v(" "),e("div",{staticClass:"menu menu-box-bottom menu-box-detached rounded-m tw-block",class:{"menu-active":!t.hasMicAccess}},[t._m(1),t._v(" "),e("p",{staticClass:"text-center boxed-text-xl"},[t._v("\n        In order to make calls, you must allow this app to access your microphone. Click allow bellow then click Allow on the next popup.\n      ")]),t._v(" "),e("div",{staticClass:"boxed-text-l top-25 tw-mb-6"},[e("a",{staticClass:"pwa-install mx-auto btn btn-m rounded-s text-uppercase font-900 bg-green-dark",attrs:{href:"javascript:;"},on:{click:t.allowAccess}},[t._v("Allow Access")])])])],1)])}),[function(){var t=this._self._c;return t("div",{attrs:{id:"preloader"}},[t("div",{staticClass:"spinner-border color-highlight",attrs:{role:"status"}})])},function(){var t=this._self._c;return t("h4",{staticClass:"text-center mt-4 mb-2"},[t("i",{staticClass:"fa fa-microphone tw-mr-1"}),this._v("\n        Allow Microphone Access\n      ")])}],!1,null,null,null);e.a=component.exports;installComponents(component,{WalletView:r(205).default,UtilsAlert:r(202).default,UtilsCallActions:r(293).default})},200:function(t,e,r){"use strict";r(35);var n={data:function(){return{loaded:!1}},mounted:function(){var t=this;setTimeout((function(){t.loaded=!0}),210)}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{class:{"preloader-hide":t.loaded},attrs:{id:"preloader"}},[e("div",{staticClass:"spinner-border color-highlight",attrs:{role:"status"}})]),t._v(" "),e("div",{attrs:{id:"page"}},[e("nuxt")],1)])}),[],!1,null,null,null);e.a=component.exports},201:function(t,e,r){"use strict";r.r(e);var n={props:{extraClass:{default:"tw-text-white",type:String}}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("svg",{class:"tw-animate-spin tw-h-5 tw-w-5 "+t.extraClass,attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[e("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),e("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})])}),[],!1,null,null,null);e.default=component.exports},202:function(t,e,r){"use strict";r.r(e);r(35);var n={data:function(){return{role:"",message:"Processing...",show:!1,loading:!1,icon:"fa-info"}},mounted:function(){var t=this;this.$nuxt.$on("alert",(function(e){var r=e.msg,n=e.role,o=void 0===n?"info":n,c=e.loading,l=void 0!==c&&c,d=e.timeout,v=void 0===d?3e4:d;if(r){t.role={info:"bg-blue-dark",loading:"bg-blue-dark",error:"bg-red-dark",warn:"bg-orange-dark",success:"bg-green-dark"}[o||"info"];t.icon={info:"fa-info",loading:"fa-sync",error:"fa-times",warn:"fa-exclamation-triangle",success:"a-check"}[o||"info"],t.message=r,t.loading=l,t.show=!0,setTimeout((function(){t.show=!1}),v)}else t.show=!1}))},methods:{open:function(t){},close:function(){this.show=!1}}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"toast toast-tiny fade toast-bottom tw-text-center tw-w-7/12 -tw-mt-11 tw-bg-opacity-30",class:[t.show?"show":"",t.role]},[e("i",{staticClass:"fa tw-mr-1",class:[t.loading?"fa-spin":"",t.icon],attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.message)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},205:function(t,e,r){"use strict";r.r(e);var n=r(2),o=(r(29),r(10),r(17),{components:{Spinner:r(201).default},props:{isNav:Boolean},data:function(){return{credits:"0.00",voucher:"0745785444455",processing:!1,invalid_voucher:!1}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.isNav){e.next=4;break}if(t.$fire.auth){e.next=4;break}return e.next=4,t.$fire.authReady();case 4:case"end":return e.stop()}}),e)})))()},methods:{submitVoucher:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(/^\d{9,18}/.test(t.voucher)){e.next=3;break}return e.abrupt("return",t.invalid_voucher=!0);case 3:if((n=null===(r=t.$fire.auth)||void 0===r?void 0:r.currentUser)&&n.phoneNumber){e.next=6;break}return e.abrupt("return",t.$nuxt.$emit("alert",{msg:"Refresh page"}));case 6:return e.next=8,null==n?void 0:n.getIdToken();case 8:if(o=e.sent){e.next=13;break}return e.abrupt("return",t.$nuxt.$emit("alert",{msg:"Error. Refresh page"}));case 13:t.$axios.setToken(o,"Bearer");case 14:if(!t.processing){e.next=16;break}return e.abrupt("return");case 16:return t.processing=!0,console.log(n),e.abrupt("return",t.$axios.$post("redeem",{voucher:t.voucher}).then((function(t){var data=t.data;console.log(data)})).catch((function(t){console.log(t)})).finally((function(){t.processing=!1})));case 19:case"end":return e.stop()}}),e)})))()}}}),c=r(14),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return t.isNav?e("NuxtLink",{staticClass:"header-title",attrs:{to:"/wallet"}},[e("i",{staticClass:"fa fa-wallet"}),e("span",[t._v("$"+t._s(t.credits))])]):e("div",[e("div",{staticClass:"tw-mx-4"},[e("div",{staticClass:"voucher tw-mt-2"},[e("div",{staticClass:"input-style has-borders has-icon mb-4"},[e("i",{staticClass:"fa fa-receipt"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.voucher,expression:"voucher"}],staticClass:"form-control",attrs:{id:"form1",type:"number",placeholder:"Enter voucher"},domProps:{value:t.voucher},on:{focus:function(e){t.invalid_voucher=null},input:function(e){e.target.composing||(t.voucher=e.target.value)}}}),t._v(" "),e("label",{staticClass:"color-highlight",attrs:{for:"form1"}},[t._v("Enter voucher")]),t._v(" "),e("i",{staticClass:"fa fa-times invalid tw-text-primary-600",class:t.invalid_voucher?"":"disabled"})]),t._v(" "),e("button",{staticClass:"tw-w-full tw-border-0 tw-py-2 tw-bg-primary-500 active:tw-bg-primary-700 tw-uppercase tw-text-gray-50 tw-rounded-lg tw-font-semibold tw-tracking-wider",on:{click:function(e){return t.submitVoucher()}}},[t.processing?e("spinner",{attrs:{"extra-class":"tw-text-white"}}):e("span",[t._v("Submit Voucher")])],1)]),t._v(" "),e("div",{staticClass:"pay-pal tw-mt-6"},[e("div",{staticClass:"divider-icon divider-margins tw-bg-[#009cde] tw-mb-6"},[e("i",{staticClass:"fa-brands fa-paypal"})]),t._v(" "),e("div",{staticClass:"tw-flex tw-space-x-2.5"},[e("div",{staticClass:"input-style has-borders has-icon mb-4 tw-flex-1"},[e("i",{staticClass:"fa fa-dollar"}),t._v(" "),e("input",{staticClass:"form-control",attrs:{id:"form1",type:"number",placeholder:"Amount"}}),t._v(" "),e("label",{staticClass:"color-highlight",attrs:{for:"form1"}},[t._v("Amount")]),t._v(" "),e("em",[t._v("Pay with")])]),t._v(" "),e("button",{staticClass:"tw-border-0 tw-flex-initial tw-px-5 tw-h-[53px] tw-py-1 tw-bg-[#003087] active:tw-bg-[#012169] tw-text-gray-50 tw-rounded-lg tw-font-semibold tw-tracking-wider"},[e("i",{staticClass:"fa-brands fa-paypal"}),t._v(" PayPal\n        ")])])]),t._v(" "),e("div",{staticClass:"history tw-mt-6"},[e("h3",{staticClass:"tw-underline tw-text-base tw-mb-2.5 tw-underline-offset-4 tw-w-full tw-decoration-primary-200 tw-decoration-4 tw-font-light tw-tracking-wider"},[t._v("\n        HISTORY \n      ")]),t._v(" "),e("div",{staticClass:"history tw-grid tw-grid-cols-1 tw-gap-3.5 tw-mt-3 tw-divide-y-2 tw-divide-slate-400/25 tw-drop-shadow-xl tw-shadow-black"},[e("div",{staticClass:"item tw-flex tw-items-center shadow-sm tw-py-2 tw-px-2"},[e("div",{staticClass:"info tw-flex-1"},[e("h4",{staticClass:"tw-font-medium"},[t._v("\n              PayPal\n            ")]),t._v(" "),e("p",{staticClass:"tw-mb-0.5"},[t._v("\n              17 Oct 2022 15:48\n            ")])]),t._v(" "),e("span",{staticClass:"tw-text-right tw-font-normal tw-text-lg"},[t._v("\n            $21.50\n          ")])]),t._v(" "),e("div",{staticClass:"item tw-flex tw-items-center shadow-sm tw-py-2 tw-px-2"},[e("div",{staticClass:"info tw-flex-1"},[e("h4",{staticClass:"tw-font-medium"},[t._v("\n              OTT\n            ")]),t._v(" "),e("p",{staticClass:"tw-mb-0.5"},[t._v("\n              15 May 2022 11:48\n            ")])]),t._v(" "),e("span",{staticClass:"tw-text-right tw-font-normal tw-text-lg"},[t._v("\n            $1.30\n          ")])])])])])])}),[],!1,null,null,null);e.default=component.exports},206:function(t,e,r){r(207),t.exports=r(208)},248:function(t,e,r){"use strict";r.r(e);var n=r(2);r(17),r(177);function o(){return(o=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.store,n=e.redirect,o=e.route,r.state.creds.username){t.next=11;break}return t.next=5,r.$fire.authReady();case 5:return t.next=7,r.$fire.databaseReady();case 7:if(o.path.endsWith("/auth")||o.path.endsWith("/auth/")){t.next=9;break}return t.abrupt("return",n("/auth"));case 9:t.next=13;break;case 11:if(!o.path.endsWith("/auth")){t.next=13;break}return t.abrupt("return",n("/"));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.default=function(t){return o.apply(this,arguments)}},249:function(t,e,r){"use strict";r.r(e),e.default=function(t){t.store,t.redirect;console.log("Open Splash page if storage doesn't have terms and conditions accepted")}},273:function(t,e,r){"use strict";r.r(e),r.d(e,"plugins",(function(){return l})),r.d(e,"state",(function(){return d})),r.d(e,"getters",(function(){return v})),r.d(e,"mutations",(function(){return f})),r.d(e,"actions",(function(){return h}));var n=r(194),o=r(195),c=new(r.n(o).a)({isCompression:!1}),l=[Object(n.a)({storage:{getItem:function(t){return c.get(t)},setItem:function(t,e){return c.set(t,e)},removeItem:function(t){return c.remove(t)}}})],d=function(){return{creds:{},hasMicAccess:!1,darkTheme:!1,contacts:[]}},v={getCreds:function(t){return t.creds},darkTheme:function(t){return t.darkTheme},getContacts:function(t){return t.contacts}},f={saveCreds:function(t,e){return e&&e.username?t.creds=e:t.creds={}},setMicAccess:function(t,e){return t.hasMicAccess=e||!1},logout:function(t){return t.creds={}},setTheme:function(t,e){return t.darkTheme=e},addContact:function(t,e){return t.contacts.push(e)}},h={}},293:function(t,e,r){"use strict";r.r(e);r(36);var n={data:function(){return{details:!1,contact:{}}},watch:{details:function(t){this.$nuxt.$emit("toggle_menu",t,"fav_details")}},mounted:function(){var t=this;this.$nuxt.$on("fav_details",(function(e){if(!e)return t.details=!1;t.contact=e,console.log(e),t.details=!0}))}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"menu menu-box-bottom menu-box-detached tw-block",class:[t.details?"menu-active":""]},[e("div",{staticClass:"menu-title"},[e("h1",[t._v(t._s(t.contact.name)+" ")]),t._v(" "),e("p",{staticClass:"color-theme opacity-40"},[t._v("\n        "+t._s(t.contact.tel||"No Number")+"\n      ")]),t._v(" "),e("a",{staticClass:"close-menu",attrs:{href:"javascript:;"},on:{click:function(e){t.details=!1}}},[e("i",{staticClass:"fa fa-times"})])]),t._v(" "),e("div",{staticClass:"content mt-2"},[t._m(0),t._v(" "),e("a",{staticClass:"btn btn-full btn-m rounded-sm bg-highlight shadow-xl text-uppercase font-900 mt-3 mb-3",attrs:{href:"javascript:;"},on:{click:function(e){t.details=!1}}},[t._v("\n        Close\n      ")])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"list-group list-custom-small ps-2 me-4"},[e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"font-14 fa fa-pen color-gray-dark"}),t._v(" "),e("span",{staticClass:"font-13"},[t._v("Edit Contact")]),t._v(" "),e("i",{staticClass:"fa fa-angle-right"})]),t._v(" "),e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"fa-fw fas font-13 tw-text-primary-500"},[t._v("")]),t._v(" "),e("span",{staticClass:"font-13"},[t._v("Remove From Favorites")]),t._v(" "),e("i",{staticClass:"fa fa-angle-right"})]),t._v(" "),e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"font-14 fa fa-history color-gray-dark"}),t._v(" "),e("span",{staticClass:"font-13"},[t._v("Call Details")]),t._v(" "),e("i",{staticClass:"fa fa-angle-right"})])])}],!1,null,null,null);e.default=component.exports},46:function(t,e,r){"use strict";r(35);var n={layout:"error",props:["error"],data:function(){return{loaded:!1}},mounted:function(){var t=this;console.log(this.error),setTimeout((function(){t.loaded=!0}),210)}},o=r(14),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{class:{"preloader-hide":t.loaded},attrs:{id:"preloader"}},[e("div",{staticClass:"spinner-border color-highlight",attrs:{role:"status"}})]),t._v(" "),e("div",{attrs:{id:"page"}},[e("div",{staticClass:"page-content header-clear-medium"},[e("div",{staticClass:"card card-style"},[e("div",{staticClass:"content mt-4 mb-1 text-center"},[e("i",{staticClass:"fa fa-exclamation-triangle fa-8x color-red-dark"}),t._v(" "),404===t.error.statusCode?e("div",[e("h1",{staticClass:"fa-6x mt-5 font-900"},[t._v("\n              404\n            ")]),t._v(" "),e("h4",{staticClass:"mb-5 mt-3"},[t._v("\n              Page not Found\n            ")]),t._v(" "),t._m(0)]):e("div",[e("h1",{staticClass:"fa-6x mt-5 font-900"},[t._v("\n              An error occurred\n            ")]),t._v(" "),e("h4",{staticClass:"mb-5 mt-3"},[t._v("\n              Oh-ooh! Something went wrong\n            ")]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"row mx-3 mt-5"},[e("div",{staticClass:"col-6"},[e("NuxtLink",{staticClass:"btn btn-m rounded-sm btn-full bg-red-dark text-uppercase font-900",attrs:{to:"/"}},[t._v("\n                Home\n              ")])],1),t._v(" "),t._m(2)])])])])])])}),[function(){var t=this,e=t._self._c;return e("p",[t._v("\n              The page you're looking for cannot be found."),e("br"),t._v("\n              How about trying the homepage?\n            ")])},function(){var t=this,e=t._self._c;return e("p",[t._v("\n              Try reload the page."),e("br"),t._v("\n              If persist, try contact us.\n            ")])},function(){var t=this._self._c;return t("div",{staticClass:"col-6"},[t("a",{staticClass:"btn btn-m rounded-sm btn-full bg-red-dark text-uppercase font-900",attrs:{href:"https://wa.me/26377?text='Got an error'",target:"_blank"}},[t("i",{staticClass:"fa fa-comment",attrs:{"aria-hidden":"true"}}),this._v(" contact\n              ")])])}],!1,null,null,null);e.a=component.exports}},[[206,10,3,11]]]);