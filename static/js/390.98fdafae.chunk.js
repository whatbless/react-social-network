"use strict";(self.webpackChunkcounter=self.webpackChunkcounter||[]).push([[390],{5651:function(r,e,n){n.d(e,{C:function(){return d},g:function(){return u}});var s=n(1413),a=n(5987),o={formControl:"formsControl_formControl__gLtuz",error:"formsControl_error__3RzYY",color:"formsControl_color__QMvAT",warning:"formsControl_warning__rrs8C",icon:"formsControl_icon__xQKnB"},t=n(1632),c=n(9806),i=n(184),l=["input","meta"],m=["input","meta"],u=function(r){var e=r.input,n=(r.meta,(0,a.Z)(r,l));return(0,i.jsx)("div",{style:{backgroundColor:"#45484e"},className:o.formControl,children:(0,i.jsx)("div",{className:o.color,children:(0,i.jsx)("textarea",(0,s.Z)((0,s.Z)({rows:1,cols:40,maxLength:35,spellCheck:!1,className:o.textarea},e),n))})})},d=function(r){var e=r.input,n=r.meta,l=(0,a.Z)(r,m),u=n.touched&&n.error;return(0,i.jsxs)("div",{style:{backgroundColor:"#45484e"},className:o.formControl+" "+(u?o.error:""),children:[(0,i.jsx)("div",{className:o.color,children:(0,i.jsx)("input",(0,s.Z)((0,s.Z)({maxLength:35,spellCheck:!1,style:{width:350}},e),l))}),u&&(0,i.jsxs)("div",{style:{backgroundColor:"#45484e"},children:[(0,i.jsxs)("span",{className:o.warning,children:[(0,i.jsx)(c.G,{className:o.icon,icon:t.xHz})," "]}),(0,i.jsx)("span",{className:o.warning,children:n.error})]})]})}},1390:function(r,e,n){n.r(e),n.d(e,{default:function(){return v}});var s,a=n(8687),o=n(6139),t=n(704),c=n(4931),i=n(5651),l=function(r){if(!r)return"Field is requrired"},m=n(7689),u="Login_color__4KgtP",d="Login_textarea__S+Csl",h="Login_fieldName__MLIK9",x="Login_header__Raoui",p="Login_button__bTaMn",_="Login_wrap__Tfu6D",f="Login_error__Dw4G+",j=n(184),g=(s=5,function(r){if(r.length<s)return"Min length is ".concat(s," symbols")}),N=(0,t.Z)({form:"login"})((function(r){return(0,j.jsxs)("form",{className:u,onSubmit:r.handleSubmit,children:[(0,j.jsxs)("div",{style:{display:"flex"},className:u,children:[(0,j.jsx)("div",{className:h,children:"Email:"})," ",(0,j.jsx)(o.Z,{className:d,type:"text",name:"email",component:i.C,validate:[l,g]})]}),(0,j.jsxs)("div",{style:{display:"flex"},className:u,children:[(0,j.jsx)("div",{className:h,children:"Password:"})," ",(0,j.jsx)(o.Z,{className:d,type:"password",name:"password",component:i.C,validate:[l,g]})]}),(0,j.jsxs)("div",{className:u,children:[(0,j.jsx)(o.Z,{type:"checkbox",name:"rememberMe",component:"input"})," remember me"]}),r.captchaUrl?(0,j.jsx)("img",{src:r.captchaUrl}):"",r.captchaUrl?(0,j.jsx)(o.Z,{type:"text",name:"captcha",component:i.g}):"",r.error&&(0,j.jsx)("div",{className:f,children:r.error}),(0,j.jsx)("div",{className:_,children:(0,j.jsx)("button",{className:p,children:"Sign in"})})]})})),v=(0,a.$j)((function(r){return{isAuth:r.auth.isAuth,userId:r.auth.id,captchaUrl:r.auth.captchaUrl}}),{userLogin:c.n$})((function(r){var e=(0,m.s0)();return r.isAuth&&e("/profile/".concat(r.userId)),(0,j.jsxs)("div",{className:u,children:[(0,j.jsx)("h2",{className:x,children:"Authorization"}),(0,j.jsx)(N,{error:r.error,onSubmit:function(e){r.userLogin(e.email,e.password,e.rememberMe,e.captcha)},captchaUrl:r.captchaUrl})]})}))}}]);
//# sourceMappingURL=390.98fdafae.chunk.js.map