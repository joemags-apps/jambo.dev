(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{785:function(t,e,n){"use strict";n.r(e);n(39),n(26),n(34),n(9),n(48),n(33),n(49);var r=n(14),c=(n(150),n(55),n(74),n(17)),o=n(766);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={data:function(){return{noRecords:!1}},head:function(){return{title:"📞 Jambo Talk - Recents (".concat(this.creds.username,")")}},computed:w(w({},Object(c.d)(["cdr","contacts","creds","token_exp"])),Object(c.b)("cdr",["fetchNumbers"])),mounted:function(){this.fetchNumbers&&this.$store.dispatch("cdr/getCDRNumbers"),console.log("TOKEN_EXP",this.token_exp),this.$nuxt.$emit("safe_auth")},methods:{calleeName:function(t){var e=this.contacts.findIndex((function(e){try{if(Object(o.a)(e.tel,"ZW").number===t)return!0}catch(t){}return!1}));return-1!==e?this.contacts[e].name:t},formatDuration:function(t){var e=t.split(":");return"00"!==e[0]?t:"".concat(e[1],":").concat(e[2])},relativeTime:function(t){var e=new Intl.RelativeTimeFormat("en-GB",{numeric:"auto"}),time=new Intl.DateTimeFormat("en-GB",{hour:"numeric",minute:"numeric"}),n=new Intl.DateTimeFormat("en-GB",{day:"numeric",month:"short",hour:"numeric",minute:"numeric"}),r=new Date(t),c=(new Date).setHours(0,0,0,0),o=(new Date(t).setHours(0,0,0,0)-c)/864e5;return o>-2?"".concat(e.format(o,"day"),", ").concat(time.format(r)):n.format(r)}}},m=n(13),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-mx-4 tw-mt-2"},[t.cdr.records.length?e("div",{staticClass:"tw-grid tw-grid-cols-1 tw-gap-5"},t._l(t.cdr.records,(function(n){return e("div",{key:n.id,staticClass:"tw-flex tw-border tw-border-blue-300 tw-shadow tw-rounded-md tw-p-2"},[e("div",{staticClass:"tw-flex-1 tw-flex tw-content-center tw-items-center tw-cursor-pointer",on:{click:function(e){return t.$nuxt.$emit("call_details",n)}}},[e("span",{staticClass:"tw-grid tw-content-center tw-justify-center tw-bg-pink-700 tw-rounded-full tw-w-12 tw-h-12 tw-mx-2"},[e("svg",{staticClass:"tw-w-6 tw-h-6 tw-text-gray-100",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})])]),t._v(" "),e("div",{staticClass:"tw-flex-1"},[n.callee?e("h1",{staticClass:"tw-font-light tw-text-base tw-tracking-wider tw-mb-0"},[t._v("\n            "+t._s(t.calleeName(n.callee))+"\n          ")]):e("h1",{staticClass:"tw-animate-pulse tw-h-2.5 tw-bg-slate-700 tw-rounded tw-w-9/12"}),t._v(" "),e("div",{staticClass:"tw-flex tw-justify-between tw-pr-4"},[e("p",{staticClass:"tw-capitalize tw-m-0"},[t._v("\n              "+t._s(t.relativeTime(n.date))+"\n            ")]),t._v(" "),e("p",{staticClass:"tw-m-0"},[t._v("\n              "+t._s(t.formatDuration(n.duration))+"\n              "),e("b",{staticClass:"tw-px-0.5 tw-font-bold"},[t._v("•")]),t._v("\n              "+t._s(n.symbol)+t._s(n.amount||"0.01")+"\n            ")])])])]),t._v(" "),e("button",{staticClass:"tw-border-0",on:{click:function(e){return t.$nuxt.$emit("dialNumber",n.callee)}}},[e("i",{staticClass:"fa fa-phone fa-fx tw-text-lg tw-mx-2"})])])})),0):e("div",[e("p",[t._v("No Records")])])])}),[],!1,null,null,null);e.default=component.exports}}]);