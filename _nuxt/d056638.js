(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{348:function(t,n,e){"use strict";e.r(n);e(77),e(39);var o=e(114),c=(e(342),e(37)),l={data:function(){return{showDialing:!1,phone:"",status:"",ongoing:null,UA:null,connected:!1,ongoingTimer:null,lastTimer:null}},computed:Object(c.c)(["creds","hasMicAccess"]),mounted:function(){console.log("Calling View Mounted"),this.$nuxt.$on("dialNumber",this.call),this.connect()},destroyed:function(){if(this.UA)return console.log("Stopping WebRTC"),this.UA.stop()},methods:{call:function(t){if(!this.hasMicAccess)return this.$nuxt.$emit("alert",{msg:"Microphone Access denied.",role:"warn",timeout:3e3});if(!t)return this.$nuxt.$emit("alert",{msg:"Enter a valid phone",role:"warn",timeout:3e3});console.log("Calling ".concat(t)),this.phone=t,this.status="Dialing",this.showDialing=!0;var n="sip:".concat(this.phone,"@").concat(this.creds.host);return this.UA.call(n,{mediaConstraints:{audio:!0,video:!1}})},connect:function(){var t=this;if(console.log("Connecting..."),this.UA)return this.start();var n=this.creds,e=n.host,c=n.username,l=n.pwd,r={sockets:[new o.WebSocketInterface("wss://".concat(e,":8089/ws"))],uri:"sip:".concat(c,"@").concat(e),password:l},w=new o.UA(r);return w.on("connected",(function(){return t.connected=!0})),w.on("disconnected",(function(n){var e=n.reason,code=n.code,o=n.error;t.connected=!1,console.log("Disconnection Reason",{reason:e,code:code,error:o}),t.hangUp()})),w.on("newRTCSession",this.session),this.UA=w,this.UA.start()},session:function(t){var n=this,e=t.session;return e.on("failed",(function(t){var e=t.cause,o=t.message,c=t.originator;console.log({cause:e,message:o,originator:c}),n.status=(null==e?void 0:e.length)<15?e:"Failed",n.close()})),e.on("progress",(function(p){n.status="Ringing",console.log(p,"Progress")})),e.on("confirmed",(function(t){console.log(t,"Confirmed"),n.status="00:00",n.timer()})),e.on("ended",(function(t){n.ongoing=null,n.status="Ended",n.close()})),e.connection.ontrack=function(t){for(var e=t.streams,i=0;i<e.length;++i){var o=e[i];n.$refs.call.srcObject=o}},this.ongoing=e},close:function(){var t=this;return this.ongoingTimer&&clearInterval(this.ongoingTimer),setTimeout((function(){t.showDialing=!1,t.phone="",t.status=""}),2500)},hangUp:function(){this.ongoing&&this.ongoing.terminate()},timer:function(){var t,n,e=this,o=0;this.ongoingTimer=setInterval((function(){t=parseInt(o/60,10),n=parseInt(o%60,10),t=t<10?"0"+t:t,n=n<10?"0"+n:n,e.status="".concat(t,":").concat(n),e.lastTimer=e.status,++o}),1e3)}}},r=e(28),component=Object(r.a)(l,(function(){var t=this,n=t._self._c;return n("div",[n("div",{staticClass:"menu menu-box-bottom tw-block tw-h-full tw-w-full",class:{"menu-active":t.showDialing},attrs:{id:"menu-user","data-menu-width":"cover","data-menu-effect":"menu-over"}},[n("div",{staticClass:"text-center tw-h-full tw-select-none"},[n("a",{staticClass:"close-menu icon icon-m notch-clear position-absolute start-0 color-theme tw-pt-2",on:{click:function(n){t.showDialing=!t.showDialing}}},[n("i",{staticClass:"fas fa-chevron-left tw-text-xl"})]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"tw-flex tw-flex-col tw-h-full"},[n("div",{staticClass:"tw-flex-1 tw-pt-2 tw-flex tw-flex-col"},[n("div",{staticClass:"tw-pt-10"},[n("h1",{staticClass:"tw-tracking-wider"},[t._v("\n              "+t._s(t.phone)+"\n            ")]),t._v(" "),n("h5",{staticClass:"animate-pulse tw-font-normal tw-tracking-wider tw-opacity-80"},[t._v("\n              "+t._s(t.status)+"\n            ")])]),t._v(" "),t._m(1)]),t._v(" "),n("div",{staticClass:"tw-flex-initial tw-text-lg tw-grid tw-grid-cols-3 tw-place-items-center tw-mx-5 tw-text-center tw-pb-3"},[t._m(2),t._v(" "),t._m(3),t._v(" "),n("button",{staticClass:"bg-highlight tw-border-0 tw-rounded-full tw-w-14 tw-h-14 tw-flex tw-items-center tw-justify-center",on:{click:function(n){return t.hangUp()}}},[n("i",{staticClass:"fa fa-phone fa-fx tw-rotate-[135deg]"})])])])])]),t._v(" "),n("audio",{ref:"call",attrs:{autoplay:"autoplay"}})])}),[function(){var t=this._self._c;return t("a",{staticClass:"close-menu icon icon-m notch-clear position-absolute end-0 color-theme tw-pt-2"},[t("i",{staticClass:"fa fa-user-plus tw-text-xl"})])},function(){var t=this._self._c;return t("div",{staticClass:"tw-text-center tw-flex-1 tw-h-full tw-flex tw-justify-start"},[t("div",{staticClass:"wrap tw-inset-x-0 tw-mx-auto tw-flex tw-mt-20"},[t("span",{staticClass:"tw-bg-transparent tw-transition-all tw-animate-ripple tw-h-32 tw-w-32 tw-leading-8 tw-text-7xl tw-flex tw-flex-col tw-text-center tw-justify-center tw-rounded-full"},[this._v("\n                🤙\n              ")])])])},function(){var t=this._self._c;return t("button",{staticClass:"tw-rounded-full tw-border-0 tw-w-14 tw-h-14 tw-flex tw-items-center tw-justify-center tw-bg-opacity-25"},[t("i",{staticClass:"fa fa-volume-up fa-fx"})])},function(){var t=this._self._c;return t("button",{staticClass:"tw-rounded-full tw-border-0 tw-w-14 tw-h-14 tw-flex tw-items-center tw-justify-center tw-bg-gray-500 tw-bg-opacity-25"},[t("i",{staticClass:"fa fa-microphone-slash fa-fx"})])}],!1,null,null,null);n.default=component.exports}}]);