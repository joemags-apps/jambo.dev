(window.webpackJsonp=window.webpackJsonp||[]).push([[7,4],{333:function(t,e,n){"use strict";n.r(e);n(34),n(26),n(32),n(9),n(41),n(31),n(42);var o=n(16),r=(n(70),n(35),n(325)),c=n(376),l=(n(322),n(18));function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={data:function(){return{showDialing:!1,phone:"",status:"",ongoing:null,UA:null,connected:!1,ongoingTimer:null,lastTimer:null,loud:!1,muted:!1}},computed:Object(l.c)(["creds","hasMicAccess"]),mounted:function(){console.log("Calling View Mounted"),this.$nuxt.$on("dialNumber",this.call),this.connect()},beforeDestroy:function(){console.log("Calling Destroyed"),this.$nuxt.$off("dialNumber")},destroyed:function(){if(this.UA)return console.log("Stopping WebRTC"),this.UA.stop()},methods:f(f({},Object(l.b)(["logout"])),{},{changeSpeaker:function(){this.loud=!this.loud},mute:function(){this.muted=!this.muted},call:function(t){if(!this.hasMicAccess)return this.$nuxt.$emit("alert",{msg:"Microphone Access denied.",role:"warn",timeout:3e3});try{var e=Object(c.a)(t,"ZW");if(e.isValid()&&(t=e.number),!t||!e.isValid())return this.$nuxt.$emit("alert",{msg:"Enter a valid phone",role:"warn",timeout:3e3});this.phone=e.formatInternational(),this.status="Dialing",this.showDialing=!0;var n="sip:".concat(t,"@").concat(this.creds.host);return this.UA.call(n,{mediaConstraints:{audio:!0,video:!1}})}catch(t){return this.status="Invalid Phone",this.close()}},connect:function(){var t=this;if(console.log("Connecting..."),this.UA)return this.UA.start();var e=this.creds,n=e.host,o=e.username,c=e.pwd,l={sockets:[new r.WebSocketInterface("wss://".concat(n,":8089/ws"))],uri:"sip:".concat(o,"@").concat(n),password:c},w=new r.UA(l);return w.on("connected",(function(){return t.connected=!0})),w.on("disconnected",(function(e){var n=e.reason,code=e.code,o=e.error;t.connected=!1,console.log("Disconnection Reason",{reason:n,code:code,error:o})})),w.on("registrationFailed",(function(e){var n=e.cause;if(console.log("Failed",n),"Authentication Error"===n)return t.UA.stop(),setTimeout((function(){return t.logout(),t.$router.push("/auth")}),3e3),t.$nuxt.$emit("alert",{msg:"Auth Error. Re-login",role:"error",timeout:3e3})})),w.on("newRTCSession",this.session),this.UA=w,this.UA.start()},session:function(t){var e=this,n=t.session;return n.on("failed",(function(t){var n=t.cause,o=t.message,r=t.originator;console.log({cause:n,message:o,originator:r}),e.status=(null==n?void 0:n.length)<15?n:"Failed",e.close()})),n.on("progress",(function(p){e.status="Ringing",console.log(p,"Progress")})),n.on("confirmed",(function(t){console.log(t,"Confirmed"),e.status="00:00",e.timer()})),n.on("ended",(function(t){e.ongoing=null,e.status="Ended",e.close()})),n.connection.ontrack=function(t){for(var n=t.streams,i=0;i<n.length;++i){var o=n[i];e.$refs.call.srcObject=o}},this.ongoing=n},close:function(){var t=this;return this.ongoingTimer&&clearInterval(this.ongoingTimer),setTimeout((function(){t.showDialing=!1,t.phone="",t.status=""}),2500)},hangUp:function(){this.ongoing&&this.ongoing.terminate()},timer:function(){var t,e,n=this,o=0;this.ongoingTimer=setInterval((function(){t=parseInt(o/60,10),e=parseInt(o%60,10),t=t<10?"0"+t:t,e=e<10?"0"+e:e,n.status="".concat(t,":").concat(e),n.lastTimer=n.status,++o}),1e3)}})},d=n(12),component=Object(d.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"menu menu-box-bottom tw-block tw-h-full tw-w-full",class:{"menu-active":t.showDialing},attrs:{id:"menu-user","data-menu-width":"cover","data-menu-effect":"menu-over"}},[e("div",{staticClass:"text-center tw-h-full tw-select-none"},[e("a",{staticClass:"close-menu icon icon-m notch-clear position-absolute start-0 color-theme tw-pt-2",on:{click:function(e){t.showDialing=!t.showDialing}}},[e("i",{staticClass:"fas fa-chevron-left tw-text-xl"})]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"tw-flex tw-flex-col tw-h-full"},[e("div",{staticClass:"tw-flex-1 tw-pt-2 tw-flex tw-flex-col"},[e("div",{staticClass:"tw-pt-10"},[e("h1",{staticClass:"tw-tracking-wider"},[t._v("\n              "+t._s(t.phone)+"\n            ")]),t._v(" "),e("h5",{staticClass:"animate-pulse tw-font-normal tw-tracking-wider tw-opacity-80"},[t._v("\n              "+t._s(t.status)+"\n            ")])]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"tw-flex-initial tw-text-lg tw-grid tw-grid-cols-3 tw-place-items-center tw-mx-5 tw-text-center tw-pb-3"},[e("button",{staticClass:"tw-rounded-full tw-border-0 tw-w-14 tw-h-14 tw-flex tw-items-center tw-justify-center tw-bg-opacity-25",class:[t.loud?"tw-bg-gray-500":""],on:{click:function(e){return t.changeSpeaker()}}},[e("i",{staticClass:"fa fa-volume-up fa-fx"})]),t._v(" "),e("button",{staticClass:"tw-rounded-full tw-border-0 tw-w-14 tw-h-14 tw-flex tw-items-center tw-justify-center tw-bg-opacity-25",class:[t.muted?"tw-bg-gray-500":""],on:{click:function(e){return t.mute()}}},[e("i",{staticClass:"fa fa-microphone-slash fa-fx"})]),t._v(" "),e("button",{staticClass:"bg-highlight tw-border-0 tw-rounded-full tw-w-14 tw-h-14 tw-flex tw-items-center tw-justify-center",on:{click:function(e){return t.hangUp()}}},[e("i",{staticClass:"fa fa-phone fa-fx tw-rotate-[135deg]"})])])])])]),t._v(" "),e("audio",{ref:"call",attrs:{autoplay:"autoplay"}})])}),[function(){var t=this._self._c;return t("a",{staticClass:"close-menu icon icon-m notch-clear position-absolute end-0 color-theme tw-pt-2"},[t("i",{staticClass:"fa fa-user-plus tw-text-xl"})])},function(){var t=this._self._c;return t("div",{staticClass:"tw-text-center tw-flex-1 tw-h-full tw-flex tw-justify-start"},[t("div",{staticClass:"wrap tw-inset-x-0 tw-mx-auto tw-flex tw-mt-20"},[t("span",{staticClass:"tw-bg-transparent tw-transition-all tw-animate-ripple tw-h-32 tw-w-32 tw-leading-8 tw-text-7xl tw-flex tw-flex-col tw-text-center tw-justify-center tw-rounded-full"},[this._v("\n                🤙\n              ")])])])}],!1,null,null,null);e.default=component.exports},379:function(t,e,n){"use strict";n.r(e);n(36);var o=n(16),r=(n(9),n(31),n(205),n(70),n(34),n(26),n(32),n(41),n(42),n(18));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={name:"IndexPage",middleware:"auth",data:function(){return{search_key:""}},computed:Object(r.c)(["contacts"]),created:function(){var t=this;this.$nuxt.$on("contactsFound",(function(e){if(null==e||!e.length)return t.$nuxt.$emit("alert",{msg:"No Contact Selected",role:"warn",timeout:3e3});e.forEach((function(e){var n=e.name,o=e.tel;if(o)for(var r=0,c=function(i){var e=o[i];if(!t.contacts.find((function(t){return t.tel===e}))){var c=++r>1?" (".concat(r,")"):"";t.addContact({name:"".concat(n).concat(c),tel:e})}},i=0;i<o.length;i++)c(i)}))}))},beforeDestroy:function(){this.$nuxt.$off("contactsFound")},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)(["addContact"]))},w=l,f=n(12),component=Object(f.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-mx-4"},[e("div",{staticClass:"input-style no-borders has-icon mb-4"},[e("i",{staticClass:"fa fa-search tw-pl-2"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search_key,expression:"search_key"}],staticClass:"form-control tw-text-lg",attrs:{id:"search",autocomplete:"off",type:"search",placeholder:"Search or enter phone number"},domProps:{value:t.search_key},on:{input:function(e){e.target.composing||(t.search_key=e.target.value)}}}),t._v(" "),e("label",{staticClass:"color-highlight",attrs:{for:"search"}},[t._v("Search or enter phone number")])]),t._v(" "),e("div",{staticClass:"has-contacts"},[t.search_key.length<=1?e("div",{staticClass:"contacts tw-grid tw-grid-cols-1 tw-gap-6"},t._l(t.contacts,(function(n){return e("div",{key:n.id,staticClass:"tw-flex contact"},[e("div",{staticClass:"tw-flex-1 tw-flex tw-content-center tw-items-center tw-cursor-pointer",on:{click:function(e){return t.$nuxt.$emit("fav_details",n)}}},[e("span",{staticClass:"tw-grid tw-content-center tw-justify-center tw-bg-yellow-700 tw-rounded-full tw-w-12 tw-h-12 tw-mx-2"},[e("svg",{staticClass:"tw-w-6 tw-h-6 tw-text-gray-100",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})])]),t._v(" "),e("div",{staticClass:"tw-flex-1"},[e("h1",{staticClass:"tw-font-medium tw-text-lg"},[t._v("\n              "+t._s(n.name)+"\n            ")]),t._v(" "),e("p",{staticClass:"tw-m-0"},[t._v("\n              "+t._s(n.tel||"No Number")+"\n            ")])])]),t._v(" "),e("div",{staticClass:"tw-grid tw-grid-cols-2 tw-gap-2"},[e("button",{staticClass:"tw-border-0",on:{click:function(e){return t.$nuxt.$emit("fav_details",n)}}},[e("svg",{staticClass:"tw-w-6 tw-h-6 tw-mx-2",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),t._v(" "),e("path",{attrs:{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}})])]),t._v(" "),e("button",{staticClass:"tw-border-0",on:{click:function(e){return t.$nuxt.$emit("dialNumber",n.tel||"")}}},[e("i",{staticClass:"fa fa-phone fa-fx tw-text-lg tw-mx-2"})])])])})),0):t._e(),t._v(" "),e("div",{staticClass:"results"},[t.search_key&&t.search_key.length>1?e("button",{staticClass:"tw-w-full tw-flex tw-text-base tw-py-2 tw-mt-6 tw-border-0",on:{click:function(e){return t.$nuxt.$emit("dialNumber",t.search_key)}}},[t._m(0),t._v(" "),e("span",{staticClass:"tw-flex-1 tw-text-left tw-pl-3"},[t._v("\n          "+t._s(t.search_key)+"\n        ")])]):t._e()])]),t._v(" "),e("UtilsAlert",{ref:"alert"}),t._v(" "),e("CallingView")],1)}),[function(){var t=this._self._c;return t("span",{staticClass:"tw-flex-initial"},[t("i",{staticClass:"fa fa-phone fa-fx tw-mx-2"}),this._v(" Call\n        ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UtilsAlert:n(203).default,CallingView:n(333).default})}}]);