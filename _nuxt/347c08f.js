(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{350:function(t,e,n){"use strict";n.r(e);n(37),n(77);var c=n(116),o=n(52),r={name:"IndexPage",middleware:"auth",data:function(){return{calling:!1,phone:"263781061438",status:"Dialing",ua:null,rtc:null,connected:!1,search_key:""}},computed:Object(o.c)(["creds","hasMicAccess"]),created:function(){this.$nuxt.$on("contactsFound",(function(t){console.log(t)}))},methods:{call:function(){if(console.log(this.creds),!this.connected)return this.$refs.alert.open("No connection","error");if(!this.hasMicAccess)return this.$refs.alert.open("Microphone Access denied.","warn");if(this.calling)this.rtc&&this.ua&&(this.rtc.terminate(),this.rtc=null);else{if(!this.phone)return this.$refs.alert.open("Phone is required","error");this.calling=!0,this.ua.call("sip:".concat(this.phone,"@one.jambotalk.com"),{mediaConstraints:{audio:!0,video:!1}})}},connect:function(){var t=this;if(this.ua)this.ua.start();else{this.$refs.alert.open("Connecting","loading",!0),c.debug.disable("JsSIP:*");var e={sockets:[new c.WebSocketInterface("wss://one.jambotalk.com:8089/ws")],uri:"sip:".concat(this.creds.username,"@one.jambotalk.com"),password:this.creds.pwd},n=new c.UA(e);n.on("connected",(function(){t.connected=!0,t.$refs.alert.open("Connected","success")})),n.on("disconnected",(function(){t.connected=!1,t.$refs.alert.open("Disconnected","warn")})),n.on("newRTCSession",this.newRTCSession),this.ua=n,n.start()}},newRTCSession:function(data){var t=this,rtc=data.session;console.log("NEW SESSION - "+rtc.direction,rtc),rtc.on("failed",(function(){t.status="Failed",setTimeout((function(){t.calling=!1,t.status=""}),2e3)})),rtc.on("confirmed",(function(){t.status="Answered"})),rtc.on("ended",(function(e){t.status="Ended",setTimeout((function(){t.calling=!1,t.status=""}),500)})),this.rtc=rtc,rtc.connection.ontrack=function(e){console.log("'Remote ontrack: ".concat(e.track.kind," - ").concat(e.track.id," stream ").concat(e.streams[0].id));for(var i=0;i<e.streams.length;++i){var n=e.streams[i];console.log(t.$refs.audio),t.$refs.audio.srcObject=n}},rtc.connection.onremovestream=function(t){console.log("onremovestream: "+t.stream.id)}}}},l=n(23),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-mx-4"},[e("div",{staticClass:"input-style no-borders has-icon mb-4"},[e("i",{staticClass:"fa fa-search"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search_key,expression:"search_key"}],staticClass:"form-control tw-text-lg",attrs:{id:"search",type:"search",placeholder:"Search or enter phone number"},domProps:{value:t.search_key},on:{input:function(e){e.target.composing||(t.search_key=e.target.value)}}}),t._v(" "),e("label",{staticClass:"color-highlight",attrs:{for:"search"}},[t._v("Search or enter phone number")])]),t._v(" "),e("div",{staticClass:"contacts"},[e("div",{staticClass:"tw-flex"},[e("div",{staticClass:"tw-flex-1 tw-flex tw-content-center tw-items-center"},[e("span",{staticClass:"tw-grid tw-content-center tw-justify-center tw-bg-yellow-700 tw-rounded-full tw-w-12 tw-h-12 tw-mx-2"},[e("svg",{staticClass:"tw-w-6 tw-h-6 tw-text-gray-100",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})])]),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"tw-grid tw-grid-cols-2 tw-gap-2"},[e("button",[e("svg",{staticClass:"tw-w-6 tw-h-6 tw-mx-2",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),t._v(" "),e("path",{attrs:{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}})])]),t._v(" "),e("button",{on:{click:function(e){return t.$nuxt.$emit("dialNumber","+263775696233")}}},[e("i",{staticClass:"fa fa-phone fa-fx tw-text-lg tw-mx-2"})])])])]),t._v(" "),e("div",{staticClass:"results"},[t.search_key&&t.search_key.length>1?e("button",{staticClass:"tw-w-full tw-flex tw-text-base tw-mt-1 tw-py-2",on:{click:function(e){return t.$nuxt.$emit("dialNumber",t.search_key)}}},[t._m(1),t._v(" "),e("span",{staticClass:"tw-flex-1 tw-text-left tw-pl-3"},[t._v("\n        "+t._s(t.search_key)+"\n      ")])]):t._e()]),t._v(" "),e("UtilsAlert",{ref:"alert"}),t._v(" "),e("audio",{ref:"audio",attrs:{autoplay:"autoplay"}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-flex-1"},[e("h1",{staticClass:"tw-font-medium tw-text-lg"},[t._v("\n            +263775696233\n          ")]),t._v(" "),e("p",{staticClass:"tw-m-0"},[t._v("\n            00:00 Sec | 4 Days ago\n          ")])])},function(){var t=this._self._c;return t("span",{staticClass:"tw-flex-initial"},[t("i",{staticClass:"fa fa-phone fa-fx tw-mx-2"}),this._v(" Call\n      ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UtilsAlert:n(220).default})}}]);