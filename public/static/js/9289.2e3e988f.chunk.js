"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9289],{29289:function(e,a,r){r.r(a),r.d(a,{default:function(){return N}});var s=r(74165),n=r(15861),t=r(72791),i=r(85239),c=r(9085),l=r(55705),o=r(81724),d=r(47022),m=r(89743),u=r(2677),h=r(9140),f=r(18348),x=r(95313),v=r(43360),Z=r(87087);var p=r.p+"static/media/sms.e8a79db5d693689a95a4384a57ecd0f6.svg";var j=r.p+"static/media/discord.6638219e1f089d64a252b9e0f970e591.svg";var g=r.p+"static/media/chat.3d0f63dd643a69e29046140a3a445302.svg";var b=r.p+"static/media/fb_messanger.245469d729e1c2c7e5a2fbbbccea4c0d.svg",y=r(80184),N=function(){(0,t.useEffect)((function(){document.title="AnswerSheet - Contact Us"}),[]);var e=o.Ry({name:o.Z_("Enter your name.").required("Name is required."),email:o.Z_("Enter your email.").email("Enter a valid email.").required("Email is required."),acceptPrivacyPolicy:o.Xg().oneOf([!0],"Accept Privacy & Policy is required.")}),a=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(a,r){var n,t,l;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.resetForm,e.prev=1,e.next=4,i.Z.post("message",{name:a.name,email:a.email,message:a.message});case 4:t=e.sent,(l=t.data).success?(c.Am.success(l.data.msg),n()):c.Am.error(l.data.msg),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),c.Am.error(e.t0.getMessage());case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a,r){return e.apply(this,arguments)}}();return(0,y.jsx)("div",{className:"contact-us-container",children:(0,y.jsx)(d.Z,{children:(0,y.jsxs)(m.Z,{children:[(0,y.jsx)(u.Z,{lg:5,md:12,children:(0,y.jsxs)(h.Z,{children:[(0,y.jsx)("h1",{className:"page-title",children:"Message us"}),(0,y.jsx)(h.Z.Body,{children:(0,y.jsx)("div",{className:"contact-list",children:(0,y.jsxs)(f.Z,{className:"flex-column",children:[(0,y.jsx)(f.Z.Item,{children:(0,y.jsxs)(f.Z.Link,{href:"#",children:[(0,y.jsx)(Z.LazyLoadImage,{src:p,alt:"sms"})," 0411444111"]})}),(0,y.jsx)(f.Z.Item,{children:(0,y.jsxs)(f.Z.Link,{href:"#",children:[(0,y.jsx)(Z.LazyLoadImage,{src:j,alt:"discord"})," ","0411444111"]})}),(0,y.jsx)(f.Z.Item,{children:(0,y.jsxs)(f.Z.Link,{href:"#",children:[(0,y.jsx)(Z.LazyLoadImage,{src:g,alt:"email"})," ","AnswerSheet"]})}),(0,y.jsx)(f.Z.Item,{children:(0,y.jsxs)(f.Z.Link,{href:"#",children:[(0,y.jsx)(Z.LazyLoadImage,{src:b,alt:"fbmassenger"})," ","Message us"]})}),(0,y.jsx)(f.Z.Item,{children:(0,y.jsx)(f.Z.Link,{href:"#",children:(0,y.jsx)("small",{style:{fontSize:12},children:"We endeavour to reply with 1 business day, most of the time sooner."})})})]})})})]})}),(0,y.jsx)(u.Z,{lg:7,md:12,children:(0,y.jsxs)(h.Z,{children:[(0,y.jsx)("h1",{className:"page-title",children:"Email us"}),(0,y.jsx)(h.Z.Body,{children:(0,y.jsx)(l.J9,{validationSchema:e,onSubmit:a,initialValues:{name:"",email:"",message:"",acceptPrivacyPolicy:!1},children:function(e){var a=e.handleSubmit,r=e.handleChange,s=e.handleBlur,n=e.values,t=e.touched,i=e.errors;return(0,y.jsx)(x.Z,{className:"contact-us-form",noValidate:!0,onSubmit:a,children:(0,y.jsxs)(m.Z,{gutter:10,children:[(0,y.jsxs)(u.Z,{md:4,children:[(0,y.jsxs)(x.Z.Group,{className:"mb-4",children:[(0,y.jsx)(x.Z.Control,{type:"text",placeholder:"Your name",name:"name",onChange:r,onBlur:s,value:n.name,touched:t,isInvalid:!!i.name}),(0,y.jsx)(x.Z.Control.Feedback,{type:"invalid",children:i.name})]}),(0,y.jsxs)(x.Z.Group,{className:"mb-4",children:[(0,y.jsx)(x.Z.Control,{type:"email",placeholder:"Reply email",name:"email",onChange:r,onBlur:s,value:n.email,touched:t,isInvalid:!!i.email}),(0,y.jsx)(x.Z.Control.Feedback,{type:"invalid",children:i.email})]}),(0,y.jsxs)(x.Z.Group,{className:"mb-4",children:[(0,y.jsx)(x.Z.Control,{type:"email",placeholder:"Nature of enquiry",name:"email",onChange:r,onBlur:s,value:n.email,touched:t,isInvalid:!!i.email}),(0,y.jsx)(x.Z.Control.Feedback,{type:"invalid",children:i.email})]})]}),(0,y.jsx)(u.Z,{md:8,children:(0,y.jsx)(x.Z.Group,{className:"mb-4",children:(0,y.jsx)(x.Z.Control,{as:"textarea",placeholder:"Your message",rows:7,name:"message",value:n.message,onChange:r,onBlur:s,style:{minHeight:"calc(12.3rem)"}})})}),(0,y.jsx)(u.Z,{md:12,children:(0,y.jsx)("div",{className:"d-grid mt-2 mb-3",children:(0,y.jsx)(v.Z,{variant:"primary",type:"submit",children:"Submit"})})})]})})}})})]})})]})})})}},85239:function(e,a,r){var s=r(61044),n=function(){return window.localStorage.getItem("token")?localStorage.getItem("token"):null},t=s.ZP.create({baseURL:"/api/v1/",timeout:15e3,headers:{Authorization:"Bearer ".concat(n())}});t.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(n()),e})),t.interceptors.response.use((function(e){return e}),(function(e){return 401!==e.response.status&&403!==e.response.status&&406!==e.response.status||(window.localStorage.clear(),window.location.href="/login"),Promise.reject(e)})),a.Z=t},9140:function(e,a,r){r.d(a,{Z:function(){return S}});var s=r(1413),n=r(45987),t=r(81694),i=r.n(t),c=r(72791),l=r(10162),o=r(66543),d=r(27472),m=r(80184),u=["bsPrefix","className","variant","as"],h=c.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,c=e.variant,o=e.as,d=void 0===o?"img":o,h=(0,n.Z)(e,u),f=(0,l.vE)(r,"card-img");return(0,m.jsx)(d,(0,s.Z)({ref:a,className:i()(c?"".concat(f,"-").concat(c):f,t)},h))}));h.displayName="CardImg";var f=h,x=r(96040),v=["bsPrefix","className","as"],Z=c.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,o=e.as,d=void 0===o?"div":o,u=(0,n.Z)(e,v),h=(0,l.vE)(r,"card-header"),f=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:h}}),[h]);return(0,m.jsx)(x.Z.Provider,{value:f,children:(0,m.jsx)(d,(0,s.Z)((0,s.Z)({ref:a},u),{},{className:i()(t,h)}))})}));Z.displayName="CardHeader";var p=Z,j=["bsPrefix","className","bg","text","border","body","children","as"],g=(0,d.Z)("h5"),b=(0,d.Z)("h6"),y=(0,o.Z)("card-body"),N=(0,o.Z)("card-title",{Component:g}),C=(0,o.Z)("card-subtitle",{Component:b}),w=(0,o.Z)("card-link",{Component:"a"}),P=(0,o.Z)("card-text",{Component:"p"}),k=(0,o.Z)("card-footer"),I=(0,o.Z)("card-img-overlay"),L=c.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,c=e.bg,o=e.text,d=e.border,u=e.body,h=e.children,f=e.as,x=void 0===f?"div":f,v=(0,n.Z)(e,j),Z=(0,l.vE)(r,"card");return(0,m.jsx)(x,(0,s.Z)((0,s.Z)({ref:a},v),{},{className:i()(t,Z,c&&"bg-".concat(c),o&&"text-".concat(o),d&&"border-".concat(d)),children:u?(0,m.jsx)(y,{children:h}):h}))}));L.displayName="Card",L.defaultProps={body:!1};var S=Object.assign(L,{Img:f,Title:N,Subtitle:C,Body:y,Link:w,Text:P,Header:p,Footer:k,ImgOverlay:I})},89743:function(e,a,r){var s=r(1413),n=r(45987),t=r(81694),i=r.n(t),c=r(72791),l=r(10162),o=r(80184),d=["bsPrefix","className","as"],m=c.forwardRef((function(e,a){var r=e.bsPrefix,t=e.className,c=e.as,m=void 0===c?"div":c,u=(0,n.Z)(e,d),h=(0,l.vE)(r,"row"),f=(0,l.pi)(),x=(0,l.zG)(),v="".concat(h,"-cols"),Z=[];return f.forEach((function(e){var a,r=u[e];delete u[e],a=null!=r&&"object"===typeof r?r.cols:r;var s=e!==x?"-".concat(e):"";null!=a&&Z.push("".concat(v).concat(s,"-").concat(a))})),(0,o.jsx)(m,(0,s.Z)((0,s.Z)({ref:a},u),{},{className:i().apply(void 0,[t,h].concat(Z))}))}));m.displayName="Row",a.Z=m}}]);
//# sourceMappingURL=9289.2e3e988f.chunk.js.map