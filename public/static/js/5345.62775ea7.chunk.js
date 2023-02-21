"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[5345],{42752:function(e,r,n){n(72791);r.Z=n.p+"static/media/google.87be52cb772ef2969ce42e13a2d37b7c.svg"},81334:function(e,r,n){n.d(r,{Z:function(){return t}});var s=n(95313),a=n(80184),t=function(e){var r=e.className,n=e.name,t=e.icon,i=e.type,o=e.placeholder,c=e.onChange,l=e.onBlur,u=e.readOnly,d=e.required,m=e.value,h=e.disabled,p=(e.touched,e.errors),g=void 0===p?"":p;return(0,a.jsxs)(s.Z.Group,{className:["position-relative "+r],children:[(0,a.jsx)("i",{className:t}),(0,a.jsx)(s.Z.Control,{type:i,name:n,placeholder:o,readOnly:u,required:d,onChange:c,onBlur:l,disabled:h,value:m,isInvalid:!!g[n]}),(0,a.jsx)(s.Z.Control.Feedback,{type:"invalid",children:g[n]})]})}},73660:function(e,r,n){n.r(r),n.d(r,{default:function(){return Z}});var s=n(74165),a=n(15861),t=n(72791),i=n(57689),o=n(11087),c=n(59434),l=n(76887),u=n(9085),d=n(55705),m=n(81724),h=n(47022),p=n(95313),g=n(43360),f=n(81334),x=n(55872),v=n(87087),j=n.p+"static/media/Group-14630.987199584c48758f3111.png",b=n(42752),w=n(85239),y=n(80184),Z=function(){var e=(0,i.s0)(),r=(0,c.I0)();(0,t.useEffect)((function(){document.title="AnswerSheet - Login"}),[]);var n=m.Ry({email:m.Z_("Enter your email.").email("Enter a valid email.").required("Email is required."),password:m.Z_("Enter your password.").required("Password is required.")}),Z=function(){var n=(0,a.Z)((0,s.Z)().mark((function n(a,t){var i,o,c;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t.resetForm,n.next=3,w.Z.post("login",a);case 3:if(o=n.sent,!(c=o.data).status){n.next=13;break}return i(),u.Am.success(c.msg),n.next=10,r((0,l.r4)({user:c.user,token:c.token}));case 10:c.user.role>0?e("/admin/users"):e("/subjects"),n.next=14;break;case 13:u.Am.error(c.msg);case 14:case"end":return n.stop()}}),n)})));return function(e,r){return n.apply(this,arguments)}}(),k=(0,x.Nq)({onSuccess:function(){var n=(0,a.Z)((0,s.Z)().mark((function n(a){var t,i;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,w.Z.post("login/google",a);case 2:if(t=n.sent,!(i=t.data).status){n.next=11;break}return u.Am.success(i.msg),n.next=8,r((0,l.r4)({user:i.user,token:i.token}));case 8:i.user.role>0?e("/admin/users"):e("/subjects"),n.next=12;break;case 11:u.Am.error(i.msg);case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),onError:function(e){u.Am.error(e.toString())}});return(0,y.jsx)("div",{className:"login-container",children:(0,y.jsx)(h.Z,{children:(0,y.jsxs)("div",{className:"page-content",children:[(0,y.jsx)("div",{className:"page-left-content",children:(0,y.jsx)(v.LazyLoadImage,{src:j,alt:"Login"})}),(0,y.jsx)("div",{className:"page-right-content",children:(0,y.jsxs)("div",{className:"login-form",children:[(0,y.jsx)("h4",{className:"page-title",children:"Welcome back"}),(0,y.jsx)(d.J9,{validationSchema:n,validateOnChange:!1,validateOnBlur:!1,onSubmit:Z,initialValues:{email:"",password:""},children:function(e){var r=e.handleSubmit,n=e.handleChange,s=e.values,a=e.touched,t=e.errors;return(0,y.jsxs)(p.Z,{noValidate:!0,onSubmit:r,className:"mt-4",children:[(0,y.jsx)("div",{className:"d-grid",children:(0,y.jsxs)(g.Z,{variant:"primary",className:"google-signin-btn",onClick:k,children:[(0,y.jsx)(v.LazyLoadImage,{src:b.Z,alt:"google",style:{marginRight:15}}),"Sign in with Google"]})}),(0,y.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,y.jsx)("div",{style:{flex:1},children:(0,y.jsx)("hr",{})}),(0,y.jsx)("div",{className:"py-2 px-3 fw-bold text-dark",children:"OR"}),(0,y.jsx)("div",{style:{flex:1},children:(0,y.jsx)("hr",{})})]}),(0,y.jsx)("p",{className:"mb-4",children:"Please enter your details."}),(0,y.jsx)(f.Z,{className:"mb-4",required:!0,name:"email",icon:"fa fa-envelope",type:"email",placeholder:"Email",onChange:n,value:s.email,touched:a,errors:t}),(0,y.jsx)(f.Z,{className:"mb-3",required:!0,name:"password",icon:"fa fa-lock",type:"password",placeholder:"Password",onChange:n,value:s.password,touched:a,errors:t}),(0,y.jsxs)("p",{className:"mb-1",children:["Don't have an account? ",(0,y.jsx)(o.Link,{className:"",to:"/signup",children:"Sign up free"})]}),(0,y.jsx)("p",{className:"mb-4",children:(0,y.jsx)(o.Link,{className:"",to:"/forgot-password",children:"Forgot password?"})}),(0,y.jsx)("div",{className:"d-grid",children:(0,y.jsx)(g.Z,{variant:"primary",type:"submit",children:"Log in"})})]})}})]})})]})})})}},85239:function(e,r,n){var s=n(61044),a=function(){return window.localStorage.getItem("token")?localStorage.getItem("token"):null},t=s.ZP.create({baseURL:"/api/v1/",timeout:15e3,headers:{Authorization:"Bearer ".concat(a())}});t.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(a()),e})),t.interceptors.response.use((function(e){return e}),(function(e){return 401!==e.response.status&&403!==e.response.status&&406!==e.response.status||(window.localStorage.clear(),window.location.href="/login"),Promise.reject(e)})),r.Z=t}}]);
//# sourceMappingURL=5345.62775ea7.chunk.js.map