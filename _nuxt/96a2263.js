(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{788:function(t,e,n){"use strict";n.r(e);n(55);var r=n(14),c=(n(9),n(32),n(414),n(74),n(38),n(27),n(33),n(48),n(49),n(17));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={name:"IndexPage",middleware:"auth",data:function(){return{search_key:""}},head:function(){return{title:"📞 Jambo Talk - Home (".concat(this.creds.username,")")}},computed:Object(c.d)(["contacts","creds"]),created:function(){var t=this;this.$nuxt.$on("contactsFound",(function(e){if(null==e||!e.length)return t.$nuxt.$emit("alert",{msg:"No Contact Selected",role:"warn",timeout:3e3});e.forEach((function(e){var n=e.name,r=e.tel;if(r)for(var c=0,o=function(i){var e=r[i];if(!t.contacts.find((function(t){return t.tel===e}))){var o=++c>1?" (".concat(c,")"):"";t.addContact({name:"".concat(n).concat(o),tel:e})}},i=0;i<r.length;i++)o(i)}))}))},beforeDestroy:function(){this.$nuxt.$off("contactsFound")},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)(["addContact"]))},w=l,f=n(13),component=Object(f.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-mx-4"},[e("div",{staticClass:"input-style no-borders has-icon mb-4"},[e("i",{staticClass:"fa fa-search tw-pl-2"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search_key,expression:"search_key"}],staticClass:"form-control tw-text-lg",attrs:{id:"search",autocomplete:"off",type:"search",placeholder:"Search or enter phone number"},domProps:{value:t.search_key},on:{input:function(e){e.target.composing||(t.search_key=e.target.value)}}}),t._v(" "),e("label",{staticClass:"color-highlight",attrs:{for:"search"}},[t._v("Search or enter phone number")])]),t._v(" "),e("div",{staticClass:"has-contacts"},[t.search_key.length<=1?e("div",{staticClass:"contacts tw-grid tw-grid-cols-1 tw-gap-6"},t._l(t.contacts,(function(n){return e("div",{key:n.id,staticClass:"tw-flex contact"},[e("div",{staticClass:"tw-flex-1 tw-flex tw-content-center tw-items-center tw-cursor-pointer",on:{click:function(e){return t.$nuxt.$emit("fav_details",n)}}},[e("span",{staticClass:"tw-grid tw-content-center tw-justify-center tw-bg-yellow-700 tw-rounded-full tw-w-12 tw-h-12 tw-mx-2"},[e("svg",{staticClass:"tw-w-6 tw-h-6 tw-text-gray-100",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}})])]),t._v(" "),e("div",{staticClass:"tw-flex-1"},[e("h1",{staticClass:"tw-font-light tw-text-base tw-tracking-wider tw-mb-0"},[t._v("\n              "+t._s(n.name)+"\n            ")]),t._v(" "),e("p",{staticClass:"tw-m-0"},[t._v("\n              "+t._s(n.tel||"No Number")+"\n            ")])])]),t._v(" "),e("div",{staticClass:"tw-grid tw-grid-cols-2 tw-gap-2"},[e("button",{staticClass:"tw-border-0",on:{click:function(e){return t.$nuxt.$emit("fav_details",n)}}},[e("svg",{staticClass:"tw-w-6 tw-h-6 tw-mx-2",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}}),t._v(" "),e("path",{attrs:{d:"m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"}})])]),t._v(" "),e("button",{staticClass:"tw-border-0",on:{click:function(e){return t.$nuxt.$emit("dialNumber",n.tel||"")}}},[e("i",{staticClass:"fa fa-phone fa-fx tw-text-lg tw-mx-2"})])])])})),0):t._e(),t._v(" "),e("div",{staticClass:"results"},[t.search_key&&t.search_key.length>1?e("button",{staticClass:"tw-w-full tw-flex tw-text-base tw-py-2 tw-mt-6 tw-border-0",on:{click:function(e){return t.$nuxt.$emit("dialNumber",t.search_key)}}},[t._m(0),t._v(" "),e("span",{staticClass:"tw-flex-1 tw-text-left tw-pl-3"},[t._v("\n          "+t._s(t.search_key)+"\n        ")])]):t._e()])]),t._v(" "),e("UtilsAlert",{ref:"alert"})],1)}),[function(){var t=this._self._c;return t("span",{staticClass:"tw-flex-initial"},[t("i",{staticClass:"fa fa-phone fa-fx tw-mx-2"}),this._v(" Call\n        ")])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UtilsAlert:n(412).default})}}]);