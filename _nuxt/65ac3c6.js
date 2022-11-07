(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{807:function(e,t,r){"use strict";r.r(t);r(43),r(28),r(36),r(51),r(52);var n=r(3),o=r(17),c=r(57),l=r(30),f=(r(31),r(156),r(37),r(9),r(35),r(77),r(157),r(795),r(796)),h=r.n(f),m=(r(797),r(16));function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O={name:"UserAuth",components:{VuePhoneNumberInput:h.a},layout:"auth",data:function(){return{focus:null,country:null,enteredPhone:null,recaptcha:null,resend_counter:null,result:null,enterOTP:!1,verifier:null,otp:{},otpDigits:["a","b","c","d","e","f"],username:null}},head:function(){return{title:"📞 Jambo Talk - Login"}},computed:Object(m.d)(["darkTheme"]),watch:{otp:{handler:function(e){var t=this,r=[e.a,e.b,e.c,e.d,e.e,e.f];if(-1!==r.findIndex((function(e){return e&&1!=="".concat(e).length})))for(var i=0;i<r.length;i++){var n="".concat(r[i]);if(n.length>1&&6!==n.length)return this.defaultOtp(),setTimeout((function(){t.$refs.OTPinputs[0].focus()}),100);if(6===n.length){var o=function(){t.$refs.OTPinputs.forEach((function(e){e.blur()}));var e=n.split(""),r=Object(l.a)(e,6),a=r[0],b=r[1],o=r[2],c=r[3],f=r[4],h=r[5];return{v:setTimeout((function(){t.otp={a:a,b:b,c:o,d:c,e:f,f:h}}),50)}}();if("object"===Object(c.a)(o))return o.v}}},deep:!0}},mounted:function(){var e=document.querySelectorAll(".otp");e[0]&&e.forEach((function(e){e.addEventListener("focus",(function(t){e.value=""})),e.addEventListener("input",(function(t){e.nextElementSibling?e.nextElementSibling.focus():e.blur()}))})),this.defaultOtp()},methods:v(v({},Object(m.c)(["saveCreds"])),{},{setupVerify:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.verifier){t.next=2;break}return t.abrupt("return",Promise.resolve(e.verifier));case 2:return r=e.$fireModule.auth.RecaptchaVerifier,e.verifier=new r(e.$refs.recaptcha,{size:"invisible"}),t.next=6,e.verifier.verify();case 6:return e.recaptcha=e.verifier,t.abrupt("return",Promise.resolve(e.recaptcha));case 8:case"end":return t.stop()}}),t)})))()},register:function(){var e=this,t=this.enteredPhone||{},r=t.isValid,n=t.formattedNumber;return r?(this.$nuxt.$emit("alert",{msg:"Validating...",role:"loading",loading:!0}),this.setupVerify().then((function(t){return e.$fire.auth.signInWithPhoneNumber(n,t)})).then((function(t){e.result=t,e.defaultOtp(),e.$nuxt.$emit("alert",{}),e.enterOTP=!0,e.username=n})).catch((function(t){var r=t&&t.code?t.message:"Error, please reload page";return console.log({msg:r},t),e.$nuxt.$emit("alert",{msg:"Error, please reload page",role:"error",timeout:3e3})}))):this.$nuxt.$emit("alert",{msg:"Invalid phone",role:"warn",timeout:3e3})},resendCounter:function(){var e,t,r=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:115,o=n,c=setInterval((function(){e=parseInt(o/60,10),t=parseInt(o%60,10),e=e<10?"0"+e:e,t=t<10?"0"+t:t,r.resend_counter="in ".concat(e,":").concat(t),--o<0&&(r.resend_counter=null,clearInterval(c))}),1e3)},defaultOtp:function(){var e={};this.otpDigits.forEach((function(t){e[t]="●"})),this.otp=e},resendOtp:function(){var e=this;this.resend_counter||(this.resendCounter(),this.$fire.auth.signInWithPhoneNumber(this.username,this.recaptcha).then((function(t){e.result=t,e.defaultOtp(),e.enterOTP=!0})).catch((function(e){console.error(e)})))},verifyOTP:function(){var e=this,code=Object.values(this.otp).join("");if(!this.result)return this.$nuxt.$emit("alert",{msg:"Error, reload page.",role:"error"});this.enterOTP=!1,this.$nuxt.$emit("alert",{msg:"Verifying...",role:"loading",loading:!0}),this.result.confirm(code).then(Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$fire.auth.currentUser.getIdToken();case 2:return r=t.sent,n=e.$fire.auth.currentUser,o=n.phoneNumber,c=n.uid,e.$axios.setToken(r,"Bearer"),t.prev=5,t.next=8,e.$axios.$get("v0.1/register/".concat(c));case 8:l=t.sent,e.saveCreds(v(v({},l),{},{username:o})),e.$nuxt.$emit("alert",{msg:"Registration successful",role:"success",timeout:3300}),t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(5),t.abrupt("return",e.$nuxt.$emit("alert",{msg:"Error. Refresh page",role:"error"}));case 16:return t.abrupt("return",setTimeout((function(){return e.$router.push("/")}),1e3));case 17:case"end":return t.stop()}}),t,null,[[5,13]])})))).catch((function(){e.enterOTP=!0}))}})},x=O,w=r(13),component=Object(w.a)(x,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"page-content pb-0"},[t("div",{staticClass:"card tw-h-screen",attrs:{"data-card-height":"cover"}},[t("div",{staticClass:"card-center tw-transition-all tw-duration-180",class:[e.focus?"":"-tw-mt-[200px]"]},[t("div",{staticClass:"ps-5 pe-5"},[t("h3",{staticClass:"text-center mb-4"},[e._v("\n            Enter your phone number\n          ")]),e._v(" "),t("VuePhoneNumberInput",{staticClass:"tw-mb-3",attrs:{"default-country-code":"ZA","no-example":!0,dark:e.darkTheme,size:"md"},on:{"phone-number-focused":function(t){e.focus=!0},"phone-number-blur":function(t){e.focus=!1},update:function(t){e.enteredPhone=t}},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}}),e._v(" "),t("p",{staticClass:"text-center font-12 mt-n2 mb-2"},[e._v("\n            Carrier charges may apply\n          ")]),e._v(" "),t("a",{staticClass:"btn btn-full btn-m shadow-large rounded-sm text-uppercase font-700 bg-highlight",on:{click:e.register}},[e._v("\n            Register\n          ")])],1)])]),e._v(" "),t("div",{ref:"recaptcha",staticClass:"absolute"})]),e._v(" "),t("div",{staticClass:"menu menu-box-bottom tw-block tw-h-full tw-w-full",class:{"menu-active":e.enterOTP},attrs:{id:"menu-user","data-menu-width":"cover","data-menu-effect":"menu-over"}},[t("div",[t("a",{staticClass:"close-menu icon icon-m mt-n2 notch-clear position-absolute start-0 color-theme",on:{click:function(t){e.enterOTP=!e.enterOTP}}},[t("i",{staticClass:"fa fa-chevron-left"})]),e._v(" "),t("img",{staticClass:"mx-auto tw-mt-6",attrs:{src:"/assets/images/2.svg",width:"200"}}),e._v(" "),t("h1",{staticClass:"text-center pt-4"},[e._v("\n        Enter One Time Passcode\n      ")]),e._v(" "),e._m(0),e._v(" "),t("div",{staticClass:"text-center mb-3 pt-3 pb-2"},[t("form",{attrs:{action:""}},e._l(e.otpDigits,(function(r){return t("input",{directives:[{name:"model",rawName:"v-model",value:e.otp[r],expression:"otp[o]"}],key:r,ref:"OTPinputs",refInFor:!0,staticClass:"otp mx-1 text-center font-24 font-900",attrs:{placeholder:e.otp[r],type:"number"},domProps:{value:e.otp[r]},on:{focus:function(t){e.otp[r]=""},blur:function(t){!e.otp[r]&&(e.otp[r]="●")},input:function(t){t.target.composing||e.$set(e.otp,r,t.target.value)}}})})),0)]),e._v(" "),t("a",{staticClass:"btn btn-highlight tw-text-white rounded-sm btn-m tw-bg-primary-500 active:tw-bg-primary-700 text-uppercase font-700 mt-4 btn-center-xl",on:{click:e.verifyOTP}},[e._v("\n        Verify\n      ")]),e._v(" "),t("p",{staticClass:"pt-2 font-11 text-center mb-0"},[e._v("\n        Didn't receive your code? "),t("a",{class:[e.resend_counter?"tw-text-gray-400":""],attrs:{href:"javascript:;"},on:{click:e.resendOtp}},[e._v("Resend OTP "+e._s(e.resend_counter||""))])])])]),e._v(" "),t("UtilsAlert")],1)}),[function(){var e=this,t=e._self._c;return t("p",{staticClass:"text-center font-12 mt-n2 mb-2"},[e._v("\n        To verify your "),t("b",[e._v("Jambo")]),e._v(" account.\n      ")])}],!1,null,null,null);t.default=component.exports;installComponents(component,{UtilsAlert:r(433).default})}}]);