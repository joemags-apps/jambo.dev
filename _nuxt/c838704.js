(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{785:function(t,e,n){"use strict";n.r(e);var r=n(19),o={head:function(){return{title:"📞 Jambo Talk - Services (".concat(this.creds.username,")")}},computed:Object(r.d)(["creds"]),mounted:function(){console.log("Services")},methods:{openChat:function(){try{if(console.log(this.$tawkMessenger.getStatus()),!this.$tawkMessenger.getStatus())return console.log("Loading");this.$tawkMessenger.toggle()}catch(t){console.error("Error loading chat",t)}}}},c=n(13),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"tw-mx-4 tw-mt-2 tw-px-2"},[e("div",{staticClass:"list-group list-custom-large"},[t._m(0),t._v(" "),e("a",{staticClass:"border-0",attrs:{"data-menu":"menu-backgrounds"},on:{click:function(e){return t.openChat()}}},[e("i",{staticClass:"fas fa-headset font-14 bg-blue-dark rounded-s"}),t._v(" "),e("span",[t._v("Contact Live Support")]),t._v(" "),e("strong",[t._v("We're here to help 8:00am - 9:00pm")]),t._v(" "),e("i",{staticClass:"fa fa-angle-right"})]),t._v(" "),e("a",{staticClass:"border-0",attrs:{"data-menu":"menu-backgrounds"},on:{click:function(e){return t.openChat()}}},[e("i",{staticClass:"fas fa-headset font-14 bg-blue-dark rounded-s"}),t._v(" "),e("span",[t._v("Whatsapp Support")]),t._v(" "),e("strong",[t._v("We're here to help")]),t._v(" "),e("i",{staticClass:"fa fa-whatsapp"})])])])}),[function(){var t=this,e=t._self._c;return e("a",{attrs:{"data-menu":"menu-highlights",href:"#"}},[e("i",{staticClass:"fas fa-hand-holding-usd font-14 bg-green-dark rounded-s"}),t._v(" "),e("span",[t._v("Share Credit")]),t._v(" "),e("strong",[t._v("Share airtime with friends")]),t._v(" "),e("span",{staticClass:"badge bg-highlight color-white"},[t._v("NEW")]),t._v(" "),e("i",{staticClass:"fa fa-angle-right"})])}],!1,null,null,null);e.default=component.exports}}]);