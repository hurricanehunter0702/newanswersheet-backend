"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[2172],{95367:function(e,r,a){a(72791);r.Z=a.p+"static/media/topic_icon.674d7a069d9a50cf055d868733388dfd.svg"},18500:function(e,r,a){a.r(r);var t=a(74165),s=a(15861),n=a(70885),c=a(72791),o=a(47022),i=a(9140),d=a(85239),l=a(9085),u=a(57689),m=a(11087),f=a(95367),p=(a(51729),a(80184));r.default=function(){var e=(0,u.UO)(),r=(0,u.s0)(),a=(0,c.useState)({}),b=(0,n.Z)(a,2),v=b[0],x=b[1];return(0,c.useEffect)((function(){document.title="AnswerSheet - HSC made easy",(0,s.Z)((0,t.Z)().mark((function a(){var s,n,c,o,i;return(0,t.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s=e.year,n=e.subject,c=e.module,a.next=3,d.Z.get("modules/get-module-by-slug",{params:{year_slug:s,subject_slug:n,module_slug:c}});case 3:o=a.sent,(i=o.data).status?x(i.data):(l.Am.error(i.msg),r("/subjects"));case 6:case"end":return a.stop()}}),a)})))()}),[]),(0,p.jsx)("div",{className:"topics-container",children:(0,p.jsx)(o.Z,{children:(0,p.jsx)(i.Z,{className:"mb-4",children:(0,p.jsxs)(i.Z.Body,{className:"pt-5 px-5 pb-4",children:[(0,p.jsx)("h1",{className:"subject-title",children:v.name}),v.description&&(0,p.jsx)("p",{children:v.description}),(0,p.jsx)("div",{className:"topic-list",children:v.topics&&v.topics.map((function(r,a){return(0,p.jsx)("div",{className:"d-grid",children:(0,p.jsxs)(m.Link,{className:"btn btn-primary learn-btn",to:"/".concat(e.year,"/").concat(e.subject,"/").concat(e.module,"/").concat(r.slug),children:[(0,p.jsx)("img",{src:f.Z,alt:"Icon"})," ",(0,p.jsx)("span",{children:r.name})]})},a)}))})]})})})})}},85239:function(e,r,a){var t=a(61044),s=function(){return window.localStorage.getItem("token")?localStorage.getItem("token"):null},n=t.ZP.create({baseURL:"/api/v1/",timeout:15e3,headers:{Authorization:"Bearer ".concat(s())}});n.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(s()),e})),n.interceptors.response.use((function(e){return e}),(function(e){return 401!==e.response.status&&403!==e.response.status&&406!==e.response.status||(window.localStorage.clear(),window.location.href="/login"),Promise.reject(e)})),r.Z=n},9140:function(e,r,a){a.d(r,{Z:function(){return B}});var t=a(1413),s=a(45987),n=a(81694),c=a.n(n),o=a(72791),i=a(10162),d=a(66543),l=a(27472),u=a(80184),m=["bsPrefix","className","variant","as"],f=o.forwardRef((function(e,r){var a=e.bsPrefix,n=e.className,o=e.variant,d=e.as,l=void 0===d?"img":d,f=(0,s.Z)(e,m),p=(0,i.vE)(a,"card-img");return(0,u.jsx)(l,(0,t.Z)({ref:r,className:c()(o?"".concat(p,"-").concat(o):p,n)},f))}));f.displayName="CardImg";var p=f,b=a(96040),v=["bsPrefix","className","as"],x=o.forwardRef((function(e,r){var a=e.bsPrefix,n=e.className,d=e.as,l=void 0===d?"div":d,m=(0,s.Z)(e,v),f=(0,i.vE)(a,"card-header"),p=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return(0,u.jsx)(b.Z.Provider,{value:p,children:(0,u.jsx)(l,(0,t.Z)((0,t.Z)({ref:r},m),{},{className:c()(n,f)}))})}));x.displayName="CardHeader";var Z=x,h=["bsPrefix","className","bg","text","border","body","children","as"],g=(0,l.Z)("h5"),j=(0,l.Z)("h6"),N=(0,d.Z)("card-body"),y=(0,d.Z)("card-title",{Component:g}),w=(0,d.Z)("card-subtitle",{Component:j}),P=(0,d.Z)("card-link",{Component:"a"}),k=(0,d.Z)("card-text",{Component:"p"}),C=(0,d.Z)("card-footer"),S=(0,d.Z)("card-img-overlay"),I=o.forwardRef((function(e,r){var a=e.bsPrefix,n=e.className,o=e.bg,d=e.text,l=e.border,m=e.body,f=e.children,p=e.as,b=void 0===p?"div":p,v=(0,s.Z)(e,h),x=(0,i.vE)(a,"card");return(0,u.jsx)(b,(0,t.Z)((0,t.Z)({ref:r},v),{},{className:c()(n,x,o&&"bg-".concat(o),d&&"text-".concat(d),l&&"border-".concat(l)),children:m?(0,u.jsx)(N,{children:f}):f}))}));I.displayName="Card",I.defaultProps={body:!1};var B=Object.assign(I,{Img:p,Title:y,Subtitle:w,Body:N,Link:P,Text:k,Header:Z,Footer:C,ImgOverlay:S})},51729:function(){}}]);
//# sourceMappingURL=2172.47971ae1.chunk.js.map