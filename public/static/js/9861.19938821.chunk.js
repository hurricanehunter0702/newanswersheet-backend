"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[9861],{88733:function(e,a,s){s.r(a),s.d(a,{default:function(){return S}});var r=s(74165),n=s(1413),t=s(15861),i=s(70885),c=s(72791),l=s(47022),o=s(95313),m=s(62591),d=s(89743),u=s(2677),p=s(43360),h=s(57689),x=s(59434),f=s(76887),j=s(55872),g=s(55705),y=s(81724),v=s(85239),w=s(81334),b=s(9085),Z=s(87087),N=s(42752),C=s(45185),k=s(80184),S=function(){var e=(0,h.s0)(),a=(0,x.I0)(),S=(0,c.useState)({}),q=(0,i.Z)(S,2),L=q[0],P=q[1],I={firstName:"",lastName:"",email:"",password:"",confirmPassword:"",paymentType:"stripe"};(0,c.useEffect)((function(){document.title="AnswerSheet - HSC made easy";var a=JSON.parse(window.localStorage.getItem("membership"));a?P(a):e("/signup")}),[]);var E=y.Ry({firstName:y.Z_("Enter your first name.").required("First name is required."),lastName:y.Z_("Enter your last name.").required("Last name is required."),email:y.Z_("Enter your email.").email("Enter a vaild email.").required("Email is required."),password:y.Z_("Enter your password").min(8,"Password should be minimum 8 characters in length.").required("Password is required."),confirmPassword:y.Z_().test("password-match","Password and Confirm password do not match.",(function(e){return this.parent.password===e}))}),T=(0,j.Nq)({onSuccess:function(){var e=(0,t.Z)((0,r.Z)().mark((function e(s){var t,i;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Z.post("register/google",s);case 2:if(t=e.sent,!(i=t.data).status){e.next=9;break}return e.next=7,A((0,n.Z)((0,n.Z)({},i.user),{},{paymentType:I.paymentType}));case 7:e.next=11;break;case 9:a((0,f.K4)(!1)),b.Am.error(i.msg);case 11:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),onError:function(e){console.log(e)}}),z=function(){var e=(0,t.Z)((0,r.Z)().mark((function e(s,t){var i,c,l;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.resetForm,e.next=3,v.Z.post("premium-register",s);case 3:i=e.sent,c=i.data,l=(0,n.Z)((0,n.Z)({},c.user),{},{gateway:"stripe"}),a((0,f.K4)(!0)),window.localStorage.setItem("premiumUser",JSON.stringify(l)),window.localStorage.setItem("premiumMembership",JSON.stringify(L)),c.success?b.Am.success(c.msg):(a((0,f.K4)(!1)),b.Am.error(c.msg));case 10:case"end":return e.stop()}}),e)})));return function(a,s){return e.apply(this,arguments)}}(),A=function(){var s=(0,t.Z)((0,r.Z)().mark((function s(n){var t,i;return(0,r.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,v.Z.post("billing/".concat(n.paymentType),{user:n,membership:L});case 2:t=s.sent,(i=t.data).success?(a((0,f.K4)(!1)),window.localStorage.removeItem("membership"),window.location.href=i.redirect_url,e("/current-membership")):(a((0,f.K4)(!1)),b.Am.error(i.msg));case 5:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}();return(0,k.jsx)("div",{className:"premium-signup-container",children:(0,k.jsx)(l.Z,{children:(0,k.jsxs)("div",{className:"page-content",children:[(0,k.jsx)("div",{className:"page-left-content",children:(0,k.jsx)("img",{src:C.Z,alt:"Sign Up"})}),(0,k.jsx)("div",{className:"page-right-content",children:(0,k.jsx)(g.J9,{validationSchema:E,onSubmit:z,initialValues:I,validateOnChange:!1,validateOnBlur:!1,children:function(e){var a=e.handleSubmit,r=e.handleChange,n=e.values,t=(e.touched,e.errors);return(0,k.jsxs)(o.Z,{noValidate:!0,onSubmit:a,children:[(0,k.jsx)("div",{style:{width:"100%"},className:"mb-3",children:(0,k.jsx)("h1",{className:"page-title",children:"Join Answersheet Premium"})}),Object.keys(L).length&&(0,k.jsxs)(m.Z,{bsPrefix:"bg-white table table-bordered",children:[(0,k.jsx)("thead",{style:{backgroundColor:"#005492",color:"#fafafa"},children:(0,k.jsxs)("tr",{children:[(0,k.jsx)("th",{children:"Premium membership"}),(0,k.jsx)("th",{children:"Amount"})]})}),(0,k.jsxs)("tbody",{children:[(0,k.jsxs)("tr",{children:[(0,k.jsxs)("td",{children:[(0,k.jsxs)("div",{children:[L.name," - ",L.subjects.length," ",L.subjects.length>1?"subjects":"subject"]}),(0,k.jsx)("ul",{className:"mb-0",children:L.subjects.map((function(e,a){return(0,k.jsxs)("li",{children:[e.year_name," - ",e.name]},a)}))})]}),(0,k.jsxs)("td",{children:["$",L.price]})]}),(0,k.jsxs)("tr",{children:[(0,k.jsx)("td",{className:"fw-bolder",children:"Total payment"}),(0,k.jsxs)("td",{children:["$",L.price]})]})]})]}),(0,k.jsxs)(o.Z.Group,{className:"mb-3",children:[(0,k.jsx)(o.Z.Check,{inline:!0,type:"radio",name:"paymentType",value:"stripe",className:"mr-5 mb-3",label:(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Z.LazyLoadImage,{src:s(89511),alt:"visa",height:"25",className:"mx-2"}),(0,k.jsx)(Z.LazyLoadImage,{src:s(84196),alt:"mastercard",height:"25",className:"mx-2"}),(0,k.jsx)(Z.LazyLoadImage,{src:s(95774),alt:"applepay",height:"23",className:"mx-2"}),(0,k.jsx)(Z.LazyLoadImage,{src:s(14697),alt:"googlepay",height:"25",className:"mx-2"})]}),id:"stripe",checked:"stripe"===n.paymentType,onChange:r}),(0,k.jsx)(o.Z.Check,{inline:!0,type:"radio",name:"paymentType",value:"paypal",label:(0,k.jsx)(Z.LazyLoadImage,{src:s(90102),height:"24",alt:"paypal"}),id:"paypal",checked:"paypal"===n.paymentType,onChange:r})]}),(0,k.jsx)("div",{style:{width:"100%"},className:"mb-3",children:(0,k.jsx)("h1",{className:"page-title",children:"Create an account"})}),(0,k.jsx)(w.Z,{required:!0,name:"email",className:"mb-4",icon:"fa fa-envelope",type:"email",placeholder:"Email",onChange:r,value:n.email,errors:t}),(0,k.jsxs)(d.Z,{children:[(0,k.jsx)(u.Z,{md:"6",sm:"12",children:(0,k.jsx)(w.Z,{required:!0,name:"firstName",className:"mb-4",icon:"fa fa-user",type:"text",placeholder:"First name",onChange:r,value:n.firstName,errors:t})}),(0,k.jsx)(u.Z,{md:"6",sm:"12",children:(0,k.jsx)(w.Z,{required:!0,name:"lastName",className:"mb-4",icon:"fa fa-user",type:"text",placeholder:"Last name",onChange:r,value:n.lastName,errors:t})})]}),(0,k.jsxs)(d.Z,{children:[(0,k.jsx)(u.Z,{md:"6",sm:"12",children:(0,k.jsx)(w.Z,{required:!0,name:"password",className:"mb-4",icon:"fa fa-lock",type:"password",placeholder:"Password",onChange:r,value:n.password,errors:t})}),(0,k.jsx)(u.Z,{md:"6",sm:"12",children:(0,k.jsx)(w.Z,{required:!0,name:"confirmPassword",className:"mb-4",icon:"fa fa-check",type:"password",placeholder:"Confirm password",onChange:r,value:n.confirmPassword,errors:t})})]}),(0,k.jsx)("div",{className:"d-grid",children:(0,k.jsxs)(p.Z,{variant:"primary",type:"submit",className:"float-end",children:[(0,k.jsx)("i",{className:"fa fa-sign-in"})," Sign up and join"]})}),(0,k.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,k.jsx)("div",{style:{flex:1},children:(0,k.jsx)("hr",{})}),(0,k.jsx)("div",{className:"py-2 px-3 fw-bold text-dark",children:"OR"}),(0,k.jsx)("div",{style:{flex:1},children:(0,k.jsx)("hr",{})})]}),(0,k.jsx)("div",{className:"d-grid",children:(0,k.jsxs)(p.Z,{variant:"primary",className:"google-signup-btn",type:"button",onClick:T,children:[(0,k.jsx)(Z.LazyLoadImage,{src:N.Z,alt:"google"})," Sign up with Google and join"]})})]})}})})]})})})}},89743:function(e,a,s){var r=s(1413),n=s(45987),t=s(81694),i=s.n(t),c=s(72791),l=s(10162),o=s(80184),m=["bsPrefix","className","as"],d=c.forwardRef((function(e,a){var s=e.bsPrefix,t=e.className,c=e.as,d=void 0===c?"div":c,u=(0,n.Z)(e,m),p=(0,l.vE)(s,"row"),h=(0,l.pi)(),x=(0,l.zG)(),f="".concat(p,"-cols"),j=[];return h.forEach((function(e){var a,s=u[e];delete u[e],a=null!=s&&"object"===typeof s?s.cols:s;var r=e!==x?"-".concat(e):"";null!=a&&j.push("".concat(f).concat(r,"-").concat(a))})),(0,o.jsx)(d,(0,r.Z)((0,r.Z)({ref:a},u),{},{className:i().apply(void 0,[t,p].concat(j))}))}));d.displayName="Row",a.Z=d}}]);
//# sourceMappingURL=9861.19938821.chunk.js.map