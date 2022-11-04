(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{784:function(t,e,r){"use strict";r.r(e);r(39),r(26),r(48),r(32),r(49);var n=r(3),o=r(14),c=(r(34),r(33),r(9),r(74),r(88),r(99),r(17));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={name:"Rates",layout:"fullscreen",data:function(){return{searchKey:"",rates:[],allRates:[],loaded:!1,showVatInfo:!0}},head:function(){return{title:"📞 Jambo Talk - Rates (".concat(this.creds.username,")")}},computed:d(d({},Object(c.d)(["creds"])),{},{searchResults:function(){var t=this,e=this.rates;return""!==this.searchKey&&this.searchKey&&(e=e.filter((function(e){var r=e.country,code=e.code,n=e.iso;return"+".concat(code," ").concat(r," ").concat(n).toUpperCase().includes(t.searchKey.toUpperCase())}))),e}}),mounted:function(){this.$nuxt.$emit("safe_auth"),this.loadRates()},methods:{loadRates:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("v0.1/rates");case 3:r=e.sent,null!=(n=r.data)&&n.length&&(t.rates=n,t.allRates=n),t.loaded=!0,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},h=w,f=r(13),component=Object(f.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-mx-4"},[t.showVatInfo?e("div",{staticClass:"tw-mt-2 alert alert-small rounded-s shadow-xl bg-blue-dark",attrs:{role:"alert"}},[t._m(0),t._v(" "),e("strong",[t._v("Calls are billed per second (VAT included)")]),t._v(" "),e("button",{staticClass:"close tw-border-0 color-white opacity-60 font-16",attrs:{type:"button"},on:{click:function(e){t.showVatInfo=!1}}},[t._v("\n      ×\n    ")])]):t._e(),t._v(" "),e("div",{staticClass:"input-style has-borders has-icon tw-my-2 tw-shadow-sm"},[e("i",{staticClass:"fa fa-search"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchKey,expression:"searchKey"}],staticClass:"form-control tw-text-lg",attrs:{id:"search",autocomplete:"off",type:"search",placeholder:"Enter country/region you want to call"},domProps:{value:t.searchKey},on:{input:function(e){e.target.composing||(t.searchKey=e.target.value)}}}),t._v(" "),e("label",{staticClass:"color-highlight",attrs:{for:"search"}},[t._v("Enter country/region you want to call")])]),t._v(" "),e("div",{staticClass:"tw-flex tw-justify-between tw-mb-6 tw-mt-6 tw-border-solid tw-border-0 tw-border-b-[0.8px] tw-pb-2"},[e("h2",{staticClass:"tw-font-medium tw-text-base tw-tracking-wide tw-mb-0"},[t._v("\n      Country/Region\n    ")]),t._v(" "),e("h2",{staticClass:"tw-font-medium tw-text-base tw-mb-0"},[t._v("\n      Rate per minute ("+t._s(t.creds.code)+")\n    ")])]),t._v(" "),t.loaded?e("div",[e("div",{staticClass:"tw-grid tw-grid-cols-1 tw-gap-6"},t._l(t.searchResults,(function(r){return e("div",{key:r.iso,staticClass:"tw-divide-y tw-divide-rose-900 tw-flex tw-justify-between"},[e("h3",{staticClass:"tw-font-light tw-text-base tw-mb-0"},[e("span",{staticClass:"tw-mr-2"},[t._v(" "+t._s(r.flag)+" ")]),t._v("\n          "+t._s(r.country)+"\n        ")]),t._v(" "),e("h3",{staticClass:"tw-font-light tw-text-base tw-mb-0"},[t._v("\n          "+t._s(r.symbol)+t._s(r.rate)+"\n        ")])])})),0),t._v(" "),t.rates.length?t._e():e("div",[e("p",{staticClass:"tw-text-center"},[t._v("\n        Rates are coming soon\n      ")])])]):e("p",{staticClass:"tw-text-center tw-pt-4"},[e("utils-spinner",{attrs:{"extra-class":"color-highlight"}})],1)])}),[function(){var t=this._self._c;return t("span",[t("i",{staticClass:"fa fa-info"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UtilsSpinner:r(257).default})}}]);