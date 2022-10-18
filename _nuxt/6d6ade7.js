(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{332:function(t,e,n){"use strict";n.r(e);n(34),n(26),n(32),n(9),n(41),n(31),n(42);var o=n(16),r=(n(69),n(37),n(324)),c=n(375),l=(n(321),n(18));function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={data:function(){return{showDialing:!1,phone:"",status:"",ongoing:null,UA:null,connected:!1,ongoingTimer:null,lastTimer:null}},computed:Object(l.c)(["creds","hasMicAccess"]),mounted:function(){console.log("Calling View Mounted"),this.$nuxt.$on("dialNumber",this.call),this.connect()},beforeDestroy:function(){console.log("Calling Destroyed"),this.$nuxt.$off("dialNumber")},destroyed:function(){if(this.UA)return console.log("Stopping WebRTC"),this.UA.stop()},methods:f(f({},Object(l.b)(["logout"])),{},{call:function(t){if(!this.hasMicAccess)return this.$nuxt.$emit("alert",{msg:"Microphone Access denied.",role:"warn",timeout:3e3});var e="";try{var n=Object(c.a)(this.creds.username).country,o=Object(c.a)(t,n);console.log(o),o.isValid()&&(e=o,t=o.number,console.log({phone:t}))}catch(t){return this.status="Invalid Phone",this.close()}if(!t)return this.$nuxt.$emit("alert",{msg:"Enter a valid phone",role:"warn",timeout:3e3});console.log("Calling ".concat(t)),this.phone=e.formatInternational(),this.status="Dialing",this.showDialing=!0;var r="sip:".concat(t,"@").concat(this.creds.host);return this.UA.call(r,{mediaConstraints:{audio:!0,video:!1}})},connect:function(){var t=this;if(console.log("Connecting..."),this.UA)return this.start();var e=this.creds,n=e.host,o=e.username,c=e.pwd,l={sockets:[new r.WebSocketInterface("wss://".concat(n,":8089/ws"))],uri:"sip:".concat(o,"@").concat(n),password:c},w=new r.UA(l);return w.on("connected",(function(){return t.connected=!0})),w.on("disconnected",(function(e){var n=e.reason,code=e.code,o=e.error;t.connected=!1,console.log("Disconnection Reason",{reason:n,code:code,error:o})})),w.on("registrationFailed",(function(e){var n=e.cause;if(console.log("Failed",n),"Authentication Error"===n)return setTimeout((function(){return t.logout(),t.$router.push("/auth")}),3e3),t.$nuxt.$emit("alert",{msg:"Auth Error. Re-login",role:"error",timeout:3e3})})),w.on("newRTCSession",this.session),this.UA=w,this.UA.start()},session:function(t){var e=this,n=t.session;return n.on("failed",(function(t){var n=t.cause,o=t.message,r=t.originator;console.log({cause:n,message:o,originator:r}),e.status=(null==n?void 0:n.length)<15?n:"Failed",e.close()})),n.on("progress",(function(p){e.status="Ringing",console.log(p,"Progress")})),n.on("confirmed",(function(t){console.log(t,"Confirmed"),e.status="00:00",e.timer()})),n.on("ended",(function(t){e.ongoing=null,e.status="Ended",e.close()})),n.connection.ontrack=function(t){for(var n=t.streams,i=0;i<n.length;++i){var o=n[i];e.$refs.call.srcObject=o}},this.ongoing=n},close:function(){var t=this;return this.ongoingTimer&&clearInterval(this.ongoingTimer),setTimeout((function(){t.showDialing=!1,t.phone="",t.status=""}),2500)},hangUp:function(){this.ongoing&&this.ongoing.terminate()},timer:function(){var t,e,n=this,o=0;this.ongoingTimer=setInterval((function(){t=parseInt(o/60,10),e=parseInt(o%60,10),t=t<10?"0"+t:t,e=e<10?"0"+e:e,n.status="".concat(t,":").concat(e),n.lastTimer=n.status,++o}),1e3)}})},d=n(12),component=Object(d.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"menu menu-box-bottom tw-block tw-h-full tw-w-full",class:{"menu-active":t.showDialing},attrs:{id:"menu-user","data-menu-width":"cover","data-menu-effect":"menu-over"}},[e("div",{staticClass:"text-center tw-h-full tw-select-none"},[e("a",{staticClass:"close-menu icon icon-m notch-clear position-absolute start-0 color-theme tw-pt-2",on:{click:function(e){t.showDialing=!t.showDialing}}},[e("i",{staticClass:"fas fa-chevron-left tw-text-xl"})]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"tw-flex tw-flex-col tw-h-full"},[e("div",{staticClass:"tw-flex-1 tw-pt-2 tw-flex tw-flex-col"},[e("div",{staticClass:"tw-pt-10"},[e("h1",{staticClass:"tw-tracking-wider"},[t._v("\n              "+t._s(t.phone)+"\n            ")]),t._v(" "),e("h5",{staticClass:"animate-pulse tw-font-normal tw-tracking-wider tw-opacity-80"},[t._v("\n              "+t._s(t.status)+"\n            ")])]),t._v(" "),t._m(1)]),t._v(" "),e("div",{staticClass:"tw-flex-initial tw-text-lg tw-grid tw-grid-cols-3 tw-place-items-center tw-mx-5 tw-text-center tw-pb-3"},[t._m(2),t._v(" "),t._m(3),t._v(" "),e("button",{staticClass:"bg-highlight tw-border-0 tw-rounded-full tw-w-14 tw-h-14 tw-flex tw-items-center tw-justify-center",on:{click:function(e){return t.hangUp()}}},[e("i",{staticClass:"fa fa-phone fa-fx tw-rotate-[135deg]"})])])])])]),t._v(" "),e("audio",{ref:"call",attrs:{autoplay:"autoplay"}})])}),[function(){var t=this._self._c;return t("a",{staticClass:"close-menu icon icon-m notch-clear position-absolute end-0 color-theme tw-pt-2"},[t("i",{staticClass:"fa fa-user-plus tw-text-xl"})])},function(){var t=this._self._c;return t("div",{staticClass:"tw-text-center tw-flex-1 tw-h-full tw-flex tw-justify-start"},[t("div",{staticClass:"wrap tw-inset-x-0 tw-mx-auto tw-flex tw-mt-20"},[t("span",{staticClass:"tw-bg-transparent tw-transition-all tw-animate-ripple tw-h-32 tw-w-32 tw-leading-8 tw-text-7xl tw-flex tw-flex-col tw-text-center tw-justify-center tw-rounded-full"},[this._v("\n                🤙\n              ")])])])},function(){var t=this._self._c;return t("button",{staticClass:"tw-rounded-full tw-border-0 tw-w-14 tw-h-14 tw-flex tw-items-center tw-justify-center tw-bg-opacity-25"},[t("i",{staticClass:"fa fa-volume-up fa-fx"})])},function(){var t=this._self._c;return t("button",{staticClass:"tw-rounded-full tw-border-0 tw-w-14 tw-h-14 tw-flex tw-items-center tw-justify-center tw-bg-gray-500 tw-bg-opacity-25"},[t("i",{staticClass:"fa fa-microphone-slash fa-fx"})])}],!1,null,null,null);e.default=component.exports}}]);