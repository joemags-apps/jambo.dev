(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{792:function(t,e,n){"use strict";n.r(e);n(42),n(35),n(9),n(51),n(34),n(52);var r=n(3),o=n(16),c=(n(36),n(43),n(28),n(78),n(803)),l=n(786),d=n(19);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var m={data:function(){return{share:!1,phone:"+263716409412",amount:1,invalid:{phone:null,amount:null},sharing:!1,phoneLocked:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.d)(["creds","wallet"])),watch:{share:function(t){this.$nuxt.$emit("toggle_menu",t,"share_credits")},phone:function(p){var t=this;this.phone_locked||(this.phoneLocked=!0,setTimeout((function(){return t.phoneLocked=!1}),10),this.phone=(new c.a).input(p))}},mounted:function(){var t=this;this.$nuxt.$on("share_credits",(function(e){if(!e)return t.share=!1;t.share=!0}))},methods:{isValid:function(t){try{var e=Object(l.a)(t,"ZW");if(e.isValid())return e.number}catch(t){}return!1},shareCredit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.isValid(t.phone)){e.next=3;break}return e.abrupt("return",t.invalid.phone=!0);case 3:if(!(isNaN(t.amount)||t.amount<=0)){e.next=5;break}return e.abrupt("return",t.invalid.amount=!0);case 5:return t.sharing=!0,e.prev=6,e.next=9,t.$axios.post("v0.1/share-credit",{amount:t.amount,phone:n});case 9:r=e.sent,data=r.data.data,t.share=!1,t.$nuxt.$emit("topAlert",{msg:data.description,role:"success"}),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(6),t.share=!1,l=null===(o=e.t0.response)||void 0===o||null===(c=o.data)||void 0===c?void 0:c.error.message,t.$nuxt.$emit("topAlert",{msg:l||"Something went wrong, try again",role:"error"});case 20:t.sharing=!1;case 21:case"end":return e.stop()}}),e,null,[[6,15]])})))()}}},f=m,h=n(15),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"menu menu-box-bottom menu-box-detached tw-block",class:[t.share?"menu-active":""]},[e("div",{staticClass:"menu-title"},[e("h1",[t._v("Share Credit")]),e("p",{staticClass:"color-highlight"},[t._v("\n        Enter Receiver Details\n      ")]),t._v(" "),e("a",{staticClass:"close-menu",attrs:{href:"javascript:;"},on:{click:function(e){t.share=!1}}},[e("i",{staticClass:"fa fa-times"})])]),t._v(" "),e("div",{staticClass:"divider divider-margins mt-3 mb-3"}),t._v(" "),e("div",{staticClass:"content px-1"},[t.wallet.balance&&"0.00"!==t.wallet.balance?e("div",{staticClass:"input-style input-style-always-active no-borders no-icon"},[e("label",{staticClass:"color-theme opacity-30 text-uppercase font-700 font-10 mt-1",attrs:{for:"f1"}},[t._v("From Account")]),t._v(" "),e("select",{attrs:{id:"f1"}},[e("option",{attrs:{value:"default",selected:""}},[t._v("\n            "+t._s(t.creds.username)+" ("+t._s(t.creds.symbol)+t._s(t.wallet.balance||"0.00")+")\n          ")])]),t._v(" "),t._m(0),t._v(" "),e("i",{staticClass:"fa fa-check disabled valid color-green-dark"}),t._v(" "),e("em")]):t._e(),t._v(" "),e("div",{staticClass:"input-style input-style-always-active validate-field no-borders no-icon"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],staticClass:"form-control validate-email",attrs:{id:"f2a",type:"tel",placeholder:"+27 71 234 5678"},domProps:{value:t.phone},on:{focus:function(e){t.invalid.phone=null},input:function(e){e.target.composing||(t.phone=e.target.value)}}}),t._v(" "),e("label",{staticClass:"color-theme opacity-30 text-uppercase font-700 font-10 mt-1",attrs:{for:"f2a"}},[t._v("Receiver Phone")]),t._v(" "),e("i",{staticClass:"fa fa-times invalid tw-text-primary-600",class:t.invalid.phone?"":"disabled"}),t._v(" "),t.invalid.phone?t._e():e("em",[t._v("(required)")])]),t._v(" "),e("div",{staticClass:"input-style input-style-always-active validate-field no-borders no-icon"},[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.amount,expression:"amount",modifiers:{number:!0}}],staticClass:"form-control validate-number",attrs:{id:"f3",type:"number",placeholder:"5"},domProps:{value:t.amount},on:{focus:function(e){t.invalid.amount=null},input:function(e){e.target.composing||(t.amount=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),e("label",{staticClass:"color-theme opacity-30 text-uppercase font-700 font-10 mt-1",attrs:{for:"f3"}},[t._v("Amount in "+t._s(t.creds.code))]),t._v(" "),e("i",{staticClass:"fa fa-times invalid tw-text-primary-600",class:t.invalid.amount?"":"disabled"}),t._v(" "),t.invalid.amount?t._e():e("em",[t._v("(required)")])]),t._v(" "),e("a",{staticClass:"close-menu tw-cursor-wait btn btn-full btn-m bg-green-dark rounded-sm text-uppercase font-800 mb-3",attrs:{href:"javascript:;"},on:{click:t.shareCredit}},[t.sharing?e("utils-spinner",{attrs:{"extra-class":"color-highlight"}}):e("span",[t._v("Share Credit")])],1)])])])}),[function(){var t=this._self._c;return t("span",[t("i",{staticClass:"fa fa-chevron-down"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UtilsSpinner:n(269).default})}}]);