"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4031],{94031:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(74165),s=n(15861),a=n(70885),c=n(72791),i=n(57689),o=n(11087),u=n(59434),f=n(76887),p=n(43360),l=n(9085),d=n(85239),m=n(80184),v=function(){var e=(0,i.UO)().gateway,t=(0,o.useSearchParams)(),n=(0,a.Z)(t,1)[0],v=(0,c.useState)(),h=(0,a.Z)(v,2),g=h[0],Z=h[1],b=(0,i.s0)(),k=(0,u.I0)();(0,c.useEffect)((function(){document.title="AnswerSheet - HSC made easy";var t=function(){var a=(0,s.Z)((0,r.Z)().mark((function a(){return(0,r.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:k((0,f.K4)(!0)),setTimeout((0,s.Z)((0,r.Z)().mark((function s(){var a,c,i,o,u;return(0,r.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=n.get("history_id"),"paypal"===e?(a=n.get("paymentId"),c=n.get("PayerID")):"stripe"===e&&(a=n.get("session_id"),c=0),console.log("GATEWAY=====>",e,"PAYMENTID======>",a,"PAYERID======>",c,"HISTORYID======>",i),r.next=5,d.Z.get("private-billing/".concat(e,"/return?paymentId=").concat(a,"&payerId=").concat(c,"&historyId=").concat(i));case 5:if(o=r.sent,!(u=o.data).success){r.next=14;break}Z(u.invoiceId),k((0,f.K4)(!1)),k((0,f.oO)(u.membershipId)),l.Am.success(u.msg),r.next=21;break;case 14:if(!u.retry){r.next=19;break}return r.next=17,t();case 17:r.next=21;break;case 19:k((0,f.K4)(!1)),l.Am.error(u.msg);case 21:case"end":return r.stop()}}),s)}))),2500),b("/current-membership");case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();t()}),[]);var w=function(){var e=(0,s.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.Z.post("private-billing/invoice",{invoiceId:g});case 2:t=e.sent,(n=t.data).success?(l.Am.success(n.msg),b("/subjects")):(l.Am.error(n.msg),b("/subjects"));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,m.jsxs)("div",{className:"private-billing-success-container",children:[(0,m.jsxs)(p.Z,{variant:"primary",className:"me-3",onClick:w,children:[(0,m.jsx)("i",{className:"fa fa-envelope"})," Receive invoice"]}),(0,m.jsxs)(p.Z,{variant:"danger",onClick:function(){return b("/subjects")},children:[(0,m.jsx)("i",{className:"fa fa-undo"})," Back to subjects"]})]})}},85239:function(e,t,n){var r=n(61044),s=function(){return window.localStorage.getItem("token")?localStorage.getItem("token"):null},a=r.ZP.create({baseURL:"/api/v1/",timeout:15e3,headers:{Authorization:"Bearer ".concat(s())}});a.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(s()),e})),a.interceptors.response.use((function(e){return e}),(function(e){return 401!==e.response.status&&403!==e.response.status&&406!==e.response.status||(window.localStorage.clear(),window.location.href="/login"),Promise.reject(e)})),t.Z=a}}]);
//# sourceMappingURL=4031.e7a18f7c.chunk.js.map