(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{231:function(t,e,r){"use strict";e.a=function(t){var e=t.$axios,r=t.store;e.onRequest((function(t){try{var n=r.state.creds.token;n&&e.setToken(n,"Bearer")}catch(t){console.log("Could not update token:",t)}return t}))}},374:function(t,e,r){"use strict";r(42);var n=r(24),o={data:function(){return{loaded:!1}},head:function(){return{bodyAttrs:{class:this.darkTheme?"theme-dark":"theme-light"}}},computed:Object(n.c)(["darkTheme"]),mounted:function(){var t=this;setTimeout((function(){t.loaded=!0,console.log("Is Dark",t.darkTheme)}),210)}},c=r(16),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{class:{"preloader-hide":t.loaded},attrs:{id:"preloader"}},[e("div",{staticClass:"spinner-border color-highlight",attrs:{role:"status"}})]),t._v(" "),e("div",{attrs:{id:"page"}},[e("nuxt")],1)])}),[],!1,null,null,null);e.a=component.exports},375:function(t,e,r){"use strict";r(41),r(27),r(38),r(53),r(37),r(54);var n=r(3),o=r(17),c=(r(28),r(42),r(11),r(96),r(123),r(24));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={setup:function(){setTimeout((function(){var t=document.getElementById("preloader");t&&t.classList.add("preloader-hide")}),1150);var t=document.getElementsByClassName("menu-hider");if(!t.length){var e=document.createElement("div");e.setAttribute("class","menu-hider"),document.body.insertAdjacentElement("beforebegin",e)}setTimeout((function(){t[0].classList.contains("menu-active")&&t[0].classList.remove("menu-active")}),0)},data:function(){return{requestAccess:!0,isActive:!1,showNumPad:!1,currentMenu:"NO-MENU",closeEvent:!1,dropMenu:!1}},head:function(){return{bodyAttrs:{class:this.darkTheme?"theme-dark":"theme-light"}}},computed:d({},Object(c.c)(["hasMicAccess","darkTheme"])),mounted:function(){var t=this;this.hasMicAccess||this.checkMicState(),this.$nuxt.$on("logout",(function(){return t.logout(),t.$router.push("/auth")})),this.$nuxt.$on("safe_auth",Object(n.a)(regeneratorRuntime.mark((function e(){var r,o,c,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=function(){return(o=Object(n.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$fire.auth.currentUser.getIdToken();case 2:return e=t.sent,console.log(e),t.abrupt("return",this.$store.commit("setToken",e));case 5:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)},r=function(){return o.apply(this,arguments)},console.log("Safe Auth"),c=function(t){return new Promise((function(e){return setTimeout(e,t)}))},i=0;case 5:if(t.$fire.auth){e.next=17;break}if(console.log(t.$fire.auth),0!==i){e.next=10;break}return e.next=10,t.$fire.authReady();case 10:if(!(i>=8)){e.next=12;break}throw new Error("FAILED");case 12:return i++,e.next=15,c(2500);case 15:e.next=5;break;case 17:return console.log("Starting Firebase"),e.abrupt("return",setTimeout((function(){return r()}),4e3));case 19:case"end":return e.stop()}}),e)})))),this.$nuxt.$on("toggle_menu",(function(menu,e){t.currentMenu=e;var r=document.getElementsByClassName("menu-hider");return t.closeEvent||(r[0].addEventListener("click",(function(){return console.log("Closing ".concat(t.currentMenu)),t.$nuxt.$emit(t.currentMenu)})),t.closeEvent=!0),menu?r[0].classList.add("menu-active",e):r[0].classList.remove("menu-active",e)})),document.body.addEventListener("mouseup",(function(e){t.dropMenu&&(t.dropMenu=!1)}),!0)},methods:d(d({},Object(c.b)(["setMicAccess","logout"])),{},{checkMicState:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.permissions.query({name:"microphone"});case 3:if(r=e.sent,n=r.state,console.log({state:n}),"granted"!==n){e.next=10;break}return e.abrupt("return",t.setMicAccess(!0));case 10:if("prompt"!==n){e.next=14;break}return e.abrupt("return",t.setMicAccess(!1));case 14:return t.$nuxt.$emit("alert",{msg:"Microphone Access Denied.",role:"warn",timeout:3e3}),e.abrupt("return",t.setMicAccess(!0));case 16:e.next=20;break;case 18:e.prev=18,e.t0=e.catch(0);case 20:case"end":return e.stop()}}),e,null,[[0,18]])})))()},allowAccess:function(){var t=this;if(navigator.getUserMedia||(navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia),console.log(navigator.getUserMedia),navigator.getUserMedia)return navigator.getUserMedia({audio:!0,video:!1},console.log,(function(e){return t.$nuxt.$emit("alert",{msg:"Access denied.",role:"warn",timeout:3e3})})),this.setMicAccess(!0);alert("App not supported in this browser.")},phoneBook:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("contacts"in navigator&&"ContactsManager"in window&&"getProperties"in navigator.contacts){e.next=4;break}return t.$nuxt.$emit("contactsFound",[{name:"Joe Munapo",tel:["+263775696233","+263781061438"]}]),e.abrupt("return",t.$nuxt.$emit("alert",{msg:"Error! Use google chrome",role:"warn",timeout:3e3}));case 4:return e.prev=4,e.next=7,navigator.contacts.getProperties();case 7:if(!e.sent.includes("address")){e.next=16;break}return r=["name","tel"],e.next=12,navigator.contacts.select(r,{multiple:!0});case 12:return n=e.sent,e.abrupt("return",t.$nuxt.$emit("contactsFound",n));case 16:console.log("Contact Picker API on your device doesn't support address property");case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(4),console.log("Unexpected error happened in Contact Picker API");case 22:case"end":return e.stop()}}),e,null,[[4,19]])})))()},reload:function(){var t=document.getElementById("preloader");return t&&t.classList.remove("preloader-hide"),window.location.reload(!0)}})},m=f,v=r(16),component=Object(v.a)(m,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("div",{attrs:{id:"page"}},[e("div",{staticClass:"header header-fixed header-logo-left mb-3"},[e("NuxtLink",{staticClass:"header-logo",attrs:{to:"/"}},[t._v("\n        Jambo"),e("span",{staticClass:"color-highlight"},[t._v(" Talk")])]),t._v(" "),e("a",{staticClass:"header-icon header-icon-2",on:{click:function(e){return t.phoneBook()}}},[e("i",{staticClass:"fas fa-address-book tw-text-lg"})]),t._v(" "),e("div",{attrs:{id:"header-icon-1-group"}},[e("button",{staticClass:"header-icon header-icon-1",attrs:{id:"header-2",type:"button"},on:{click:function(e){t.dropMenu=!t.dropMenu}}},[e("i",{staticClass:"fas fa-bars tw-text-xl"})]),t._v(" "),e("div",{staticClass:"dropdown-menu bg-theme border-0 shadow-xl rounded-s me-2 mt-2 tw-absolute tw-right-0 tw-top-0",class:{show:t.dropMenu},attrs:{"aria-labelledby":"header-2"}},[e("div",{staticClass:"list-group list-custom-small ps-2 pe-3"},[e("NuxtLink",{attrs:{to:"/profile"}},[e("i",{staticClass:"fa fa-user tw-text-gray-400"}),t._v(" "),e("span",[t._v("Account")])]),t._v(" "),e("a",{on:{click:function(e){return t.reload()}}},[e("i",{staticClass:"fa fa-refresh tw-text-gray-400"}),t._v(" "),e("span",[t._v("Refresh")])]),t._v(" "),e("a",{staticClass:"border-0",on:{click:function(e){return t.$nuxt.$emit("settings",!0)}}},[e("i",{staticClass:"fas fa-cog tw-text-gray-400"}),t._v(" "),e("span",[t._v("Settings")])])],1)])])],1),t._v(" "),e("div",{staticClass:"footer-bar-1",attrs:{id:"footer-bar"}},[e("NuxtLink",{staticClass:"header-title",attrs:{to:"/"}},[e("i",{staticClass:"fa fa-star"}),e("span",[t._v("Favorites")])]),t._v(" "),e("NuxtLink",{staticClass:"header-title",attrs:{to:"/recent"}},[e("i",{staticClass:"fa fa-history"}),e("span",[t._v("Recent")])]),t._v(" "),e("NuxtLink",{staticClass:"header-title",attrs:{to:"/services"}},[e("i",{staticClass:"fa fa-tools"}),e("span",[t._v("Services")])]),t._v(" "),e("wallet-view",{attrs:{"is-nav":""}})],1),t._v(" "),e("div",{staticClass:"page-content tw-pt-14"},[e("Nuxt")],1),t._v(" "),e("utils-settings"),t._v(" "),e("utils-alert"),t._v(" "),e("utils-call-actions"),t._v(" "),e("div",{staticClass:"menu menu-box-bottom menu-box-detached rounded-m tw-block",class:{"menu-active":!t.hasMicAccess}},[t._m(1),t._v(" "),e("p",{staticClass:"text-center boxed-text-xl"},[t._v("\n        In order to make calls, you must allow this app to access your microphone. Click allow bellow then click Allow on the next popup.\n      ")]),t._v(" "),e("div",{staticClass:"boxed-text-l top-25 tw-mb-6"},[e("a",{staticClass:"pwa-install mx-auto btn btn-m rounded-s text-uppercase font-900 bg-green-dark",attrs:{href:"javascript:;"},on:{click:t.allowAccess}},[t._v("Allow Access")])])])],1)])}),[function(){var t=this._self._c;return t("div",{attrs:{id:"preloader"}},[t("div",{staticClass:"spinner-border color-highlight",attrs:{role:"status"}})])},function(){var t=this._self._c;return t("h4",{staticClass:"text-center mt-4 mb-2"},[t("i",{staticClass:"fa fa-microphone tw-mr-1"}),this._v("\n        Allow Microphone Access\n      ")])}],!1,null,null,null);e.a=component.exports;installComponents(component,{WalletView:r(381).default,UtilsSettings:r(695).default,UtilsAlert:r(378).default,UtilsCallActions:r(696).default})},376:function(t,e,r){"use strict";r(42);var n={data:function(){return{loaded:!1}},mounted:function(){var t=this;setTimeout((function(){t.loaded=!0}),210)}},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{class:{"preloader-hide":t.loaded},attrs:{id:"preloader"}},[e("div",{staticClass:"spinner-border color-highlight",attrs:{role:"status"}})]),t._v(" "),e("div",{attrs:{id:"page"}},[e("nuxt")],1)])}),[],!1,null,null,null);e.a=component.exports},377:function(t,e,r){"use strict";r.r(e);var n={props:{extraClass:{default:"tw-text-white",type:String}}},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("svg",{class:"tw-animate-spin tw-h-5 tw-w-5 "+t.extraClass,attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"}},[e("circle",{staticClass:"opacity-25",attrs:{cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}}),t._v(" "),e("path",{staticClass:"opacity-75",attrs:{fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"}})])}),[],!1,null,null,null);e.default=component.exports},378:function(t,e,r){"use strict";r.r(e);r(42);var n={data:function(){return{role:"",message:"Processing...",show:!1,loading:!1,icon:"fa-info"}},mounted:function(){var t=this;this.$nuxt.$on("alert",(function(e){var r=e.msg,n=e.role,o=void 0===n?"info":n,c=e.loading,l=void 0!==c&&c,d=e.timeout,f=void 0===d?3e4:d;if(r){t.role={info:"bg-blue-dark",loading:"bg-blue-dark",error:"bg-red-dark",warn:"bg-orange-dark",success:"bg-green-dark"}[o||"info"];t.icon={info:"fa-info",loading:"fa-sync",error:"fa-times",warn:"fa-exclamation-triangle",success:"a-check"}[o||"info"],t.message=r,t.loading=l,t.show=!0,setTimeout((function(){t.show=!1}),f)}else t.show=!1}))},methods:{open:function(t){},close:function(){this.show=!1}}},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"toast toast-tiny fade toast-bottom tw-text-center tw-w-7/12 -tw-mt-11 tw-bg-opacity-30",class:[t.show?"show":"",t.role]},[e("i",{staticClass:"fa tw-mr-1",class:[t.loading?"fa-spin":"",t.icon],attrs:{"aria-hidden":"true"}}),t._v(" "+t._s(t.message)+"\n  ")])])}),[],!1,null,null,null);e.default=component.exports},381:function(t,e,r){"use strict";r.r(e);r(41),r(27),r(53),r(37),r(54);var n=r(26),o=r(3),c=r(17),l=(r(28),r(56),r(38),r(11),r(442),r(443),r(42),r(152),r(45),r(282),r(24)),d=r(229);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={components:{Spinner:r(377).default},props:{isNav:Boolean},data:function(){return{credits:null,reloadBalTimer:null,voucher:"1545785444455",processing:!1,invalid_voucher:!1,server:new d.Server(this.$config.stellar)}},computed:m(m({},Object(l.c)(["creds","cdr","wallet"])),{},{fewDeposits:function(){return this.wallet.deposits.slice(0,6)}}),mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.isNav){e.next=4;break}return e.next=3,t.loadBalance();case 3:t.streamPayments();case 4:case"end":return e.stop()}}),e)})))()},methods:{formatD:function(t){return new Intl.DateTimeFormat("en-GB",{hour:"numeric",day:"numeric",month:"short",year:"numeric",minute:"numeric"}).format(new Date(t))},loadBalance:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.server.loadAccount(t.creds.account);case 3:r=e.sent,o=r.balances.filter((function(b){return b.asset_code===t.creds.code})),c=Object(n.a)(o,1),l=c[0],t.credits=Number(l.balance).toFixed(2),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),e.t0 instanceof d.NotFoundError?t.credits="0.00":console.error("Error getting balance",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},streamPayments:function(){var t=this;try{var e=this.server.payments().forAccount(this.creds.account);this.wallet.cursor&&e.cursor(this.wallet.cursor);var r=e.stream({onerror:function(e){console.log("NEW_ACCOUNT");return r(),setTimeout((function(){return console.log("RETRYING..."),t.streamPayments()}),6e4)},onmessage:function(e){if("payment"===e.type||!e.asset_type)return t.handlePayment(e)}})}catch(t){}},handlePayment:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,c,l,d,cursor,f,m,v,h,w,_,C,x,y,symbol,k,O,j,P,D,$,T;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.transaction,c=t.from,l=t.to,d=t.transaction_hash,cursor=t.paging_token,f=t.asset_code,m=t.amount,v=t.created_at,e.$store.commit("wallet/setCursor",cursor),r.next=4,o();case 4:if(h=r.sent,w=h.memo,l!==e.creds.account){r.next=14;break}if(_=w.split(":"),C=Object(n.a)(_,2),x=C[0],y=C[1],symbol=void 0===y?f:y,k={date:v,amount:Number(m).toFixed(2),type:x,hash:d,symbol:symbol},!(-1!==e.wallet.deposits.findIndex((function(t){return t.hash===d})))){r.next=12;break}return r.abrupt("return");case 12:return e.isLast(k,"DEP"),r.abrupt("return",e.$store.commit("wallet/addDeposit",k));case 14:if(c!==e.creds.account){r.next=24;break}if(O=w.split("I"),j=Object(n.a)(O,3),P=j[0],D=j[1],$=j[2],D){r.next=18;break}return r.abrupt("return");case 18:if(T={symbol:P,id:D,seconds:$,duration:new Date(1e3*$).toUTCString().match(/(\d\d:\d\d:\d\d)/)[0],callee:"",amount:Number(m).toFixed(2),date:v},!(-1!==e.cdr.records.findIndex((function(t){return t.id===T.id})))){r.next=22;break}return r.abrupt("return");case 22:return e.isLast(T,"CDR"),r.abrupt("return",e.$store.commit("cdr/addCDR",T));case 24:console.log(cursor);case 25:case"end":return r.stop()}}),r)})))()},submitVoucher:function(){var t=this;return/^\d{9,18}/.test(this.voucher)?this.processing?void 0:(this.processing=!0,this.$axios.$post("redeem",{voucher:this.voucher}).then((function(t){var data=t.data;console.log(data)})).catch((function(t){console.log(t)})).finally((function(){t.processing=!1}))):this.invalid_voucher=!0},dateToNum:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return new Date(t).getTime()},isLast:function(data,t){var e=this;console.log({data:data,type:t}),this.reloadBalTimer&&clearTimeout(this.reloadBalTimer),this.reloadBalTimer=setTimeout((function(){e.loadBalance();if(e.dateToNum(new Date)-e.dateToNum(data.date)<3e5){var r="DEP"===t?"New top-up confirmed":"Call lasted: ".concat(data.duration);e.$nuxt.$emit("alert",{msg:r,role:"success",timeout:3300}),e.$store.dispatch("cdr/getCDRNumbers")}}),6e3)}}},h=v,w=r(16),component=Object(w.a)(h,(function(){var t=this,e=t._self._c;return t.isNav?e("NuxtLink",{staticClass:"header-title",attrs:{to:"/wallet"}},[e("i",{staticClass:"fa fa-wallet"}),t._v(" "),t.credits?e("span",[t._v(t._s(t.creds.symbol)+t._s(t.credits))]):e("span",[e("spinner",{attrs:{"extra-class":"tw-h-4 tw-w-4"}})],1)]):e("div",[e("div",{staticClass:"tw-mx-4"},[e("div",{staticClass:"voucher tw-mt-2"},[e("div",{staticClass:"input-style has-borders has-icon mb-4"},[e("i",{staticClass:"fa fa-receipt"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.voucher,expression:"voucher"}],staticClass:"form-control",attrs:{id:"form1",type:"number",placeholder:"Enter voucher"},domProps:{value:t.voucher},on:{focus:function(e){t.invalid_voucher=null},input:function(e){e.target.composing||(t.voucher=e.target.value)}}}),t._v(" "),e("label",{staticClass:"color-highlight",attrs:{for:"form1"}},[t._v("Enter voucher")]),t._v(" "),e("i",{staticClass:"fa fa-times invalid tw-text-primary-600",class:t.invalid_voucher?"":"disabled"})]),t._v(" "),e("button",{staticClass:"tw-w-full tw-border-0 tw-py-2 tw-bg-primary-500 active:tw-bg-primary-700 tw-uppercase tw-text-gray-50 tw-rounded-lg tw-font-semibold tw-tracking-wider",on:{click:function(e){return t.submitVoucher()}}},[t.processing?e("spinner",{attrs:{"extra-class":"tw-text-white"}}):e("span",[t._v("Submit Voucher")])],1)]),t._v(" "),e("div",{staticClass:"pay-pal tw-mt-6"},[e("div",{staticClass:"divider-icon divider-margins tw-bg-[#009cde] tw-mb-6"},[e("i",{staticClass:"fa-brands fa-paypal"})]),t._v(" "),e("div",{staticClass:"tw-flex tw-space-x-2.5"},[e("div",{staticClass:"input-style has-borders has-icon mb-4 tw-flex-1"},[e("i",{staticClass:"fa fa-dollar"}),t._v(" "),e("input",{staticClass:"form-control",attrs:{id:"form1",type:"number",placeholder:"Amount"}}),t._v(" "),e("label",{staticClass:"color-highlight",attrs:{for:"form1"}},[t._v("Amount")]),t._v(" "),e("em",[t._v("Pay with")])]),t._v(" "),e("button",{staticClass:"tw-border-0 tw-flex-initial tw-px-5 tw-h-[53px] tw-py-1 tw-bg-[#003087] active:tw-bg-[#012169] tw-text-gray-50 tw-rounded-lg tw-font-semibold tw-tracking-wider"},[e("i",{staticClass:"fa-brands fa-paypal"}),t._v(" PayPal\n        ")])])]),t._v(" "),e("div",{staticClass:"history tw-mt-6"},[e("h3",{staticClass:"tw-underline tw-text-base tw-mb-2.5 tw-underline-offset-4 tw-w-full tw-decoration-primary-200 tw-decoration-4 tw-font-light tw-tracking-wider"},[t._v("\n        HISTORY \n      ")]),t._v(" "),e("div",{staticClass:"history tw-grid tw-grid-cols-1 tw-gap-3.5 tw-mt-3 tw-divide-y-2 tw-divide-slate-400/25 tw-drop-shadow-xl tw-shadow-black"},t._l(t.fewDeposits,(function(r){return e("div",{key:r.hash,staticClass:"item tw-flex tw-items-center shadow-sm tw-py-2 tw-px-2"},[e("div",{staticClass:"info tw-flex-1"},[e("h4",{staticClass:"tw-font-medium"},[t._v("\n              "+t._s(r.type)+"\n            ")]),t._v(" "),e("p",{staticClass:"tw-mb-0.5"},[t._v("\n              "+t._s(t.formatD(r.date))+"\n            ")])]),t._v(" "),e("span",{staticClass:"tw-text-right tw-font-normal tw-text-base tw-tracking-wider"},[t._v("\n            "+t._s(r.symbol)+t._s(r.amount)+"\n          ")])])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},382:function(t,e,r){r(383),t.exports=r(384)},423:function(t,e,r){"use strict";r.r(e);var n=r(3);r(28),r(275);function o(){return(o=Object(n.a)(regeneratorRuntime.mark((function t(e){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.store,n=e.redirect,o=e.route,r.state.creds.username){t.next=9;break}return t.next=5,r.$fire.authReady();case 5:if(o.path.endsWith("/auth")||o.path.endsWith("/auth/")){t.next=7;break}return t.abrupt("return",n("/auth"));case 7:t.next=11;break;case 9:if(!o.path.endsWith("/auth")){t.next=11;break}return t.abrupt("return",n("/"));case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}e.default=function(t){return o.apply(this,arguments)}},424:function(t,e,r){"use strict";r.r(e),e.default=function(t){t.store,t.redirect;console.log("Open Splash page if storage doesn't have terms and conditions accepted")}},465:function(t,e){},466:function(t,e){},654:function(t,e){},656:function(t,e){},687:function(t,e,r){"use strict";r.r(e),r.d(e,"plugins",(function(){return l})),r.d(e,"state",(function(){return d})),r.d(e,"getters",(function(){return f})),r.d(e,"mutations",(function(){return v})),r.d(e,"actions",(function(){return h}));r(11),r(125),r(38),r(152),r(196);var n=r(107),o=r(108),c=new(r.n(o).a)({isCompression:!1}),l=[Object(n.a)({storage:{getItem:function(t){return c.get(t)},setItem:function(t,e){return c.set(t,e)},removeItem:function(t){return c.remove(t)}}})],d=function(){return{creds:{},hasMicAccess:!1,darkTheme:!1,contacts:[]}},f={getCreds:function(t){return t.creds},darkTheme:function(t){return t.darkTheme},getContacts:function(t){return t.contacts}},m=new function(){function t(t){return 0|t*Math.random()}function e(e){for(var r="",i=0;i<e;++i)r+=t(16).toString(16);return r}this.generate=function(){return e(8)+"-"+e(4)+"-4"+e(3)+"-"+(3&t(16)|8).toString(16)+e(3)+"-"+e(12)}},v={saveCreds:function(t,e){return e&&e.username?t.creds=e:t.creds={}},setMicAccess:function(t,e){return t.hasMicAccess=e||!1},logout:function(t){return t.creds={}},setTheme:function(t,e){return t.darkTheme=e},addContact:function(t,e){return e.id=m.generate(),t.contacts.push(e)},deleteContact:function(t,e){return t.contacts=t.contacts.filter((function(t){return t.tel&&e.id!==t.id})),!0},updateContact:function(t,e){var r=t.contacts.findIndex((function(t){return t.id===e.id}));return-1!==r&&t.contacts.splice(r,1,e)},setToken:function(t,e){return t.creds.token=e}},h={}},688:function(t,e,r){"use strict";r.r(e),r.d(e,"plugins",(function(){return h})),r.d(e,"state",(function(){return w})),r.d(e,"getters",(function(){return _})),r.d(e,"mutations",(function(){return C})),r.d(e,"actions",(function(){return x}));r(41),r(27),r(53),r(54);var n=r(3),o=r(17),c=r(174),l=(r(28),r(152),r(368),r(196),r(80),r(38),r(11),r(177),r(37),r(42),r(107)),d=r(108);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=new(r.n(d).a)({isCompression:!1}),h=[Object(l.a)({storage:{getItem:function(t){return v.get(t)},setItem:function(t,e){return v.set(t,e)},removeItem:function(t){return v.remove(t)}}})],w=function(){return{records:[],fetchCallee:!1}},_={},C={addCDR:function(t,e){var r=Object(c.a)(t.records);-1===r.findIndex((function(t){return t.id===e.id}))&&(r.push(e),r=r.sort((function(a,b){return new Date(b.date)-new Date(a.date)})),t.fetchCallee=!0,t.records=r)},updateCDR:function(t,e){var r=t.records.findIndex((function(t){return t.id===e.id}));if(-1!==r){var n=m(m({},t.records[r]),{},{callee:e.callee});return console.log(n),t.records.splice(r,1,n)}},FETCH_CALLEE:function(t,e){return t.fetchCallee=e}},x={getCDRNumbers:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o,c,l,data,d,f,m,v,h,w;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=t.commit,o=t.state,c=t.dispatch,(l=o.records.filter((function(t){return!t.callee})).map((function(t){return t.id}))).length){r.next=4;break}return r.abrupt("return");case 4:return data={ids:l.join(",")},r.prev=5,r.next=8,e.$axios.post("callee",data);case 8:if(d=r.sent,f=d.data,m=f.ids,v=f.idsData,m){r.next=14;break}return r.abrupt("return");case 14:v.forEach((function(t){return n("updateCDR",t)})),n("FETCH_CALLEE",!1),o.fetchCallee=!1,r.next=27;break;case 19:if(r.prev=19,r.t0=r.catch(5),"Unauthorized"!==(null===(h=r.t0.response)||void 0===h?void 0:h.statusText)){r.next=26;break}return w=e._vm.$nuxt,r.next=25,w.$emit("safe_auth");case 25:return r.abrupt("return",setTimeout((function(){return c("getCDRNumbers")}),6e3));case 26:console.error(r.t0);case 27:case"end":return r.stop()}}),r,null,[[5,19]])})))()}}},692:function(t,e,r){"use strict";r.r(e),r.d(e,"plugins",(function(){return d})),r.d(e,"state",(function(){return f})),r.d(e,"getters",(function(){return m})),r.d(e,"mutations",(function(){return v})),r.d(e,"actions",(function(){return h}));var n=r(174),o=(r(152),r(368),r(107)),c=r(108),l=new(r.n(c).a)({isCompression:!1}),d=[Object(o.a)({storage:{getItem:function(t){return l.get(t)},setItem:function(t,e){return l.set(t,e)},removeItem:function(t){return l.remove(t)}}})],f=function(){return{deposits:[],cursor:null}},m={},v={addDeposit:function(t,e){var r=Object(n.a)(t.deposits);if(-1!==r.findIndex((function(t){return t.hash===e.hash})))return r;r.push(e),r=r.sort((function(a,b){return new Date(b.date)-new Date(a.date)})),t.deposits=r},setCursor:function(t,cursor){return t.cursor=cursor||null}},h={}},695:function(t,e,r){"use strict";r.r(e);r(110),r(56),r(41),r(27),r(38),r(11),r(53),r(37),r(54);var n=r(17),o=r(24);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{settings:!1,isDark:!0}},computed:l({},Object(o.c)(["darkTheme"])),watch:{settings:function(t){this.$nuxt.$emit("toggle_menu",t,"settings")},isDark:function(t){return this.setTheme(t)}},mounted:function(){var t=this;this.$nuxt.$on("settings",(function(e){t.settings=e})),this.isDark=this.darkTheme},methods:l({},Object(o.b)(["setTheme"]))},f=r(16),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"menu menu-box-bottom menu-box-detached d-block",class:{"menu-active":t.settings}},[e("div",{staticClass:"menu-title mt-0 pt-0"},[e("h1",[t._v("Settings")]),t._v(" "),e("a",{staticClass:"close-menu",on:{click:function(e){t.settings=!t.settings}}},[e("i",{staticClass:"fa fa-times"})])]),t._v(" "),e("div",{staticClass:"divider divider-margins mb-n2"}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"list-group list-custom-small"},[e("a",{staticClass:"pb-2 ms-n1",attrs:{href:"#"}},[e("i",{staticClass:"fa font-12 fa-moon rounded-s bg-highlight color-white me-3"}),t._v(" "),e("span",[t._v("Dark Mode")]),t._v(" "),e("div",{staticClass:"custom-control scale-switch ios-switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.isDark,expression:"isDark"}],staticClass:"ios-input",attrs:{id:"switch-dark-mode","data-toggle-theme":"",type:"checkbox"},domProps:{checked:Array.isArray(t.isDark)?t._i(t.isDark,null)>-1:t.isDark},on:{change:function(e){var r=t.isDark,n=e.target,o=!!n.checked;if(Array.isArray(r)){var c=t._i(r,null);n.checked?c<0&&(t.isDark=r.concat([null])):c>-1&&(t.isDark=r.slice(0,c).concat(r.slice(c+1)))}else t.isDark=o}}}),t._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"switch-dark-mode"}})]),t._v(" "),e("i",{staticClass:"fa fa-angle-left"})])])])])])}),[],!1,null,null,null);e.default=component.exports},696:function(t,e,r){"use strict";r.r(e);r(48),r(41),r(27),r(38),r(11),r(53),r(37),r(54);var n=r(17),o=(r(42),r(24));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{details:!1,edit:!1,contact:{tel:null,name:"",id:null},tel:"",name:""}},watch:{details:function(t){this.$nuxt.$emit("toggle_menu",t,"fav_details")},edit:function(t){this.$nuxt.$emit("toggle_menu",t,"update_contact")}},mounted:function(){var t=this;this.$nuxt.$on("fav_details",(function(e){if(!e)return t.details=!1;t.contact=e,console.log(e),t.details=!0})),this.$nuxt.$on("update_contact",(function(e){if(!e)return t.edit=!1;t.tel=t.contact.tel,t.name=t.contact.name,t.edit=!0}))},methods:l(l({},Object(o.b)(["deleteContact","updateContact"])),{},{removeContact:function(){return this.details=!1,this.deleteContact(this.contact),this.$nuxt.$emit("alert",{msg:"Contact was deleted",role:"success",timeout:3e3})},changeContact:function(){this.edit=!1;var t={tel:this.tel,name:this.name,id:this.contact.id};return console.log(this.contact.id),this.updateContact(t),this.$nuxt.$emit("alert",{msg:"Contact was updated",role:"success",timeout:3e3})},editContact:function(){var t=this;this.details=!1,setTimeout((function(){t.$nuxt.$emit("update_contact",t.contact)}),100)}})},f=r(16),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"menu menu-box-bottom menu-box-detached tw-block",class:[t.details?"menu-active":""]},[e("div",{staticClass:"menu-title"},[e("h1",[t._v(t._s(t.contact.name)+" ")]),t._v(" "),e("p",{staticClass:"color-theme opacity-40"},[t._v("\n        "+t._s(t.contact.tel||"No Number")+"\n      ")]),t._v(" "),e("a",{staticClass:"close-menu",attrs:{href:"javascript:;"},on:{click:function(e){t.details=!1}}},[e("i",{staticClass:"fa fa-times"})])]),t._v(" "),e("div",{staticClass:"content mt-2"},[e("div",{staticClass:"list-group list-custom-small ps-2 me-4"},[t._m(0),t._v(" "),e("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.editContact()}}},[e("i",{staticClass:"font-14 fa fa-pen color-gray-dark"}),t._v(" "),e("span",{staticClass:"font-13"},[t._v("Edit Contact")]),t._v(" "),e("i",{staticClass:"fa fa-angle-right"})]),t._v(" "),e("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.removeContact()}}},[e("i",{staticClass:"fa-fw fas font-13 tw-text-primary-400"},[t._v("")]),t._v(" "),e("span",{staticClass:"font-13"},[t._v("Remove From Favorites")]),t._v(" "),e("i",{staticClass:"fa fa-check"})])]),t._v(" "),e("a",{staticClass:"btn btn-full btn-m rounded-sm bg-highlight shadow-xl text-uppercase font-900 mt-3 mb-3",attrs:{href:"javascript:;"},on:{click:function(e){t.details=!1}}},[t._v("\n        Close\n      ")])])]),t._v(" "),e("div",{staticClass:"menu menu-box-bottom menu-box-detached rounded-m tw-block",class:{"menu-active":t.edit},attrs:{"data-menu-height":"320"}},[e("div",{staticClass:"menu-title"},[e("h1",[t._v("Update "+t._s(t.contact.name))]),t._v(" "),e("a",{staticClass:"close-menu mt-n2",attrs:{href:"javascript:;"},on:{click:function(e){t.edit=!1}}},[e("i",{staticClass:"fa fa-times font-16"})])]),t._v(" "),e("div",{staticClass:"divider divider-margins mt-3"}),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"input-style has-borders input-style-always-active has-icon validate-field mb-4"},[e("i",{staticClass:"fa fa-user"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control validate-name",attrs:{id:"form1",type:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),e("label",{staticClass:"color-blue-dark",attrs:{for:"form1"}},[t._v("Name")]),t._v(" "),e("i",{staticClass:"fa fa-times invalid color-red-dark",class:{disabled:t.name}})]),t._v(" "),e("div",{staticClass:"input-style has-borders input-style-always-active has-icon validate-field mb-4 mt-4"},[e("i",{staticClass:"fa fa-phone"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],staticClass:"form-control validate-text",attrs:{id:"form4",type:"tel"},domProps:{value:t.tel},on:{input:function(e){e.target.composing||(t.tel=e.target.value)}}}),t._v(" "),e("label",{staticClass:"color-blue-dark",attrs:{for:"form4"}},[t._v("Phone")]),t._v(" "),e("i",{staticClass:"fa fa-times invalid color-red-dark",class:{disabled:t.tel}})]),t._v(" "),e("a",{staticClass:"close-menu btn btn-m text-uppercase font-700 btn-full bg-blue-dark rounded-sm mt-4 mb-4",attrs:{href:"javascript:;"},on:{click:function(e){return t.changeContact()}}},[t._v("\n        Update Contact\n      ")])])])])}),[function(){var t=this,e=t._self._c;return e("a",{attrs:{href:"javascript:;"}},[e("i",{staticClass:"font-14 fa fa-history color-gray-dark"}),t._v(" "),e("span",{staticClass:"font-13"},[t._v("Call Details")]),t._v(" "),e("i",{staticClass:"fa fa-angle-right"})])}],!1,null,null,null);e.default=component.exports},75:function(t,e,r){"use strict";r(42);var n={layout:"error",props:["error"],data:function(){return{loaded:!1}},mounted:function(){var t=this;console.log(this.error),setTimeout((function(){t.loaded=!0}),210)}},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",[e("div",{class:{"preloader-hide":t.loaded},attrs:{id:"preloader"}},[e("div",{staticClass:"spinner-border color-highlight",attrs:{role:"status"}})]),t._v(" "),e("div",{attrs:{id:"page"}},[e("div",{staticClass:"page-content header-clear-medium"},[e("div",{staticClass:"card card-style"},[e("div",{staticClass:"content mt-4 mb-1 text-center"},[e("i",{staticClass:"fa fa-exclamation-triangle fa-8x color-red-dark"}),t._v(" "),404===t.error.statusCode?e("div",[e("h1",{staticClass:"fa-6x mt-5 font-900"},[t._v("\n              404\n            ")]),t._v(" "),e("h4",{staticClass:"mb-5 mt-3"},[t._v("\n              Page not Found\n            ")]),t._v(" "),t._m(0)]):e("div",[e("h1",{staticClass:"fa-6x mt-5 font-900"},[t._v("\n              An error occurred\n            ")]),t._v(" "),e("h4",{staticClass:"mb-5 mt-3"},[t._v("\n              Oh-ooh! Something went wrong\n            ")]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"row mx-3 mt-5"},[e("div",{staticClass:"col-6"},[e("NuxtLink",{staticClass:"btn btn-m rounded-sm btn-full bg-red-dark text-uppercase font-900",attrs:{to:"/"}},[t._v("\n                Home\n              ")])],1),t._v(" "),t._m(2)])])])])])])}),[function(){var t=this,e=t._self._c;return e("p",[t._v("\n              The page you're looking for cannot be found."),e("br"),t._v("\n              How about trying the homepage?\n            ")])},function(){var t=this,e=t._self._c;return e("p",[t._v("\n              Try reload the page."),e("br"),t._v("\n              If persist, try contact us.\n            ")])},function(){var t=this._self._c;return t("div",{staticClass:"col-6"},[t("a",{staticClass:"btn btn-m rounded-sm btn-full bg-red-dark text-uppercase font-900",attrs:{href:"https://wa.me/26377?text='Got an error'",target:"_blank"}},[t("i",{staticClass:"fa fa-comment",attrs:{"aria-hidden":"true"}}),this._v(" contact\n              ")])])}],!1,null,null,null);e.a=component.exports}},[[382,11,3,12]]]);