(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{784:function(t,e,n){"use strict";n.r(e);var o=n(17),r={name:"Rates",layout:"fullscreen",data:function(){return{country:""}},head:function(){return{title:"📞 Jambo Talk - Rates (".concat(this.creds.username,")")}},computed:Object(o.d)(["creds"]),mounted:function(){console.log(this.creds,this.$config.axios)}},l=n(13),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-mx-4"},[e("div",{staticClass:"input-style no-borders has-icon tw-mb-0"},[e("i",{staticClass:"fa fa-search tw-pl-2"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],staticClass:"form-control tw-text-lg",attrs:{id:"search",autocomplete:"off",type:"search",placeholder:"Enter country/region you want to call"},domProps:{value:t.country},on:{input:function(e){e.target.composing||(t.country=e.target.value)}}}),t._v(" "),e("label",{staticClass:"color-highlight",attrs:{for:"search"}},[t._v("Enter country/region you want to call")])]),t._v(" "),e("p",{staticClass:"tw-mb-4 -tw-mt-4 tw-text-sm"},[t._v("\n    * Rates may change at any time.\n  ")]),t._v(" "),e("div",{staticClass:"tw-flex tw-justify-between tw-mb-6 tw-border-solid tw-border-0 tw-border-b-[1.3px] tw-pb-2"},[e("h2",{staticClass:"tw-font-light tw-text-base tw-tracking-wide tw-mb-0"},[t._v("\n      Country/Region\n    ")]),t._v(" "),e("h2",{staticClass:"tw-font-light tw-text-base tw-mb-0"},[t._v("\n      Rate per minute ("+t._s(t.creds.code)+")\n    ")])]),t._v(" "),t._m(0),t._v(" "),e("p",{staticClass:"tw-text-center tw-pt-4"},[e("utils-spinner",{attrs:{"extra-class":"color-highlight"}})],1),t._v(" "),e("UtilsAlert",{ref:"alert"})],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"has-contacts"},[t("div",{staticClass:"contacts tw-grid tw-grid-cols-1 tw-gap-6"},[t("h1",{staticClass:"tw-font-light tw-text-lg tw-tracking-wider tw-mb-0"})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UtilsSpinner:n(257).default,UtilsAlert:n(412).default})}}]);