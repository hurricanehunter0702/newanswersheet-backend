"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[96],{10096:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(74165),a=n(15861),s=n(70885),o=n(72791),c=n(57689),i=n(47022),u=n(9140),d=n(59434),l=n(76887),f=n(85239),m=n(9085),p=n(80184);e=n.hmd(e);var v=function(){var t=(0,o.useRef)(0),n=(0,c.s0)(),v=(0,d.I0)(),w=(0,o.useState)({name:"",content:""}),b=(0,s.Z)(w,2),h=b[0],Z=b[1],g=(0,d.v9)((function(e){return e.user.user})),x=(0,c.UO)();(0,o.useEffect)((function(){document.title="AnswerSheet - HSC made easy";var t=function(){var t=(0,a.Z)((0,r.Z)().mark((function t(){var a,s,o,c,i,u,d,p,w;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v((0,l.K4)(!0)),a=x.year,s=x.subject,o=x.topic,c=x.subtopic,t.next=4,f.Z.get("sub-topics/get-subtopic-by-slug",{params:{year_slug:a,subject_slug:s,module_slug:e,topic_slug:o,subtopic_slug:c}});case 4:i=t.sent,(u=i.data).success?(d=u.data,p=d.permission,w=d.subject,0===Number(p)?Z(u.data):1===Number(p)?g._id?Z(u.data):m.Am.info("Sign up to view this for free."):2===Number(p)&&(g._id?y(w)?Z(u.data):m.Am.info("Premium membership access only."):m.Am.info("Sign up to view.")),setTimeout((function(){return v((0,l.K4)(!1))}),1500)):(m.Am.error(u.msg),n("/subjects"));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t();var s=function(e){e.preventDefault()},o=function(e){e.preventDefault()},c=function(e){e.preventDefault()},i=function(e){e.preventDefault()},u=function(e){!e.ctrlKey&&!e.metaKey||"p"!==e.key&&16!==e.charCode&&112!==e.charCode&&80!==e.keyCode||(e.cancelBubble=!0,e.preventDefault(),e.stopImmediatePropagation())};return window.addEventListener("contextmenu",s),window.addEventListener("copy",o),window.addEventListener("cut",c),window.addEventListener("paste",i),window.addEventListener("keydown",u),function(){window.removeEventListener("contextmenu",s),window.removeEventListener("copy",o),window.removeEventListener("cut",c),window.removeEventListener("paste",i),window.removeEventListener("keydown",u)}}),[]);var y=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.Z.get("check-membership",{params:{user:g._id,subject:t}});case 2:return e.abrupt("return",!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){window.com.wiris.js.JsPluginViewer.parseElement(t.current,!0,(function(){}))}),[h]),(0,p.jsx)("div",{className:"lecture-container",children:(0,p.jsx)(i.Z,{children:(0,p.jsx)(u.Z,{className:"mb-4",children:(0,p.jsxs)(u.Z.Body,{className:"pt-5 px-5 pb-4",id:"content",children:[(0,p.jsx)("h1",{className:"lecture-title",children:h.name}),(0,p.jsx)("div",{ref:t,className:"mt-3 lecture-content",dangerouslySetInnerHTML:{__html:h.content}})]})})})})}},85239:function(e,t,n){var r=n(61044),a=function(){return window.localStorage.getItem("token")?localStorage.getItem("token"):null},s=r.ZP.create({baseURL:"/api/v1/",timeout:15e3,headers:{Authorization:"Bearer ".concat(a())}});s.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(a()),e})),s.interceptors.response.use((function(e){return e}),(function(e){return 401!==e.response.status&&403!==e.response.status&&406!==e.response.status||(window.localStorage.clear(),window.location.href="/login"),Promise.reject(e)})),t.Z=s},9140:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(1413),a=n(45987),s=n(81694),o=n.n(s),c=n(72791),i=n(10162),u=n(66543),d=n(27472),l=n(80184),f=["bsPrefix","className","variant","as"],m=c.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,c=e.variant,u=e.as,d=void 0===u?"img":u,m=(0,a.Z)(e,f),p=(0,i.vE)(n,"card-img");return(0,l.jsx)(d,(0,r.Z)({ref:t,className:o()(c?"".concat(p,"-").concat(c):p,s)},m))}));m.displayName="CardImg";var p=m,v=n(96040),w=["bsPrefix","className","as"],b=c.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,u=e.as,d=void 0===u?"div":u,f=(0,a.Z)(e,w),m=(0,i.vE)(n,"card-header"),p=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,l.jsx)(v.Z.Provider,{value:p,children:(0,l.jsx)(d,(0,r.Z)((0,r.Z)({ref:t},f),{},{className:o()(s,m)}))})}));b.displayName="CardHeader";var h=b,Z=["bsPrefix","className","bg","text","border","body","children","as"],g=(0,d.Z)("h5"),x=(0,d.Z)("h6"),y=(0,u.Z)("card-body"),N=(0,u.Z)("card-title",{Component:g}),j=(0,u.Z)("card-subtitle",{Component:x}),E=(0,u.Z)("card-link",{Component:"a"}),k=(0,u.Z)("card-text",{Component:"p"}),P=(0,u.Z)("card-footer"),C=(0,u.Z)("card-img-overlay"),L=c.forwardRef((function(e,t){var n=e.bsPrefix,s=e.className,c=e.bg,u=e.text,d=e.border,f=e.body,m=e.children,p=e.as,v=void 0===p?"div":p,w=(0,a.Z)(e,Z),b=(0,i.vE)(n,"card");return(0,l.jsx)(v,(0,r.Z)((0,r.Z)({ref:t},w),{},{className:o()(s,b,c&&"bg-".concat(c),u&&"text-".concat(u),d&&"border-".concat(d)),children:f?(0,l.jsx)(y,{children:m}):m}))}));L.displayName="Card",L.defaultProps={body:!1};var S=Object.assign(L,{Img:p,Title:N,Subtitle:j,Body:y,Link:E,Text:k,Header:h,Footer:P,ImgOverlay:C})}}]);
//# sourceMappingURL=96.5b7ce121.chunk.js.map