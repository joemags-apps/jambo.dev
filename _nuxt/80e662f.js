(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{784:function(t,e,n){"use strict";n.r(e);var o=n(17),l={name:"Rates",layout:"fullscreen",data:function(){return{country:""}},head:function(){return{title:"📞 Jambo Talk - Rates (".concat(this.creds.username,")")}},computed:Object(o.d)(["creds"]),mounted:function(){console.log(this.creds,this.$config.axios)}},r=n(13),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-mx-4"},[e("div",{staticClass:"input-style no-borders has-icon tw-mb-0"},[e("i",{staticClass:"fa fa-search tw-pl-2"}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],staticClass:"form-control tw-text-lg tw-pl-3",attrs:{id:"search",autocomplete:"off",type:"search",placeholder:"Enter country/region you want to call"},domProps:{value:t.country},on:{input:function(e){e.target.composing||(t.country=e.target.value)}}}),t._v(" "),e("label",{staticClass:"color-highlight",attrs:{for:"search"}},[t._v("Enter country/region you want to call")])]),t._v(" "),e("p",{staticClass:"tw-mb-2 -tw-mt-4"},[t._v("\n    * Rates may change at any time.\n  ")]),t._v(" "),e("UtilsAlert",{ref:"alert"})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UtilsAlert:n(412).default})}}]);