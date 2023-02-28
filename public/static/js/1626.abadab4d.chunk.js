"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1626],{26535:function(e,n,a){a.d(n,{Z:function(){return h}});var r=a(1413),t=a(95313),o=a(62591),i=a(43360),s=a(42982),c=a(72791),l=a(8116),d=a(80184),u=function(e,n){var a=n-e+1;return Array.from({length:a},(function(n,a){return a+e}))},f=function(e){var n=e.search,a=e.pagination,t=e.onChange,o=e.siblingCount,i=void 0===o?1:o,f=e.className,h=function(e){var n=e.totalCount,a=e.pageSize,r=e.siblingCount,t=void 0===r?1:r,o=e.currentPage;return(0,c.useMemo)((function(){var e=Math.ceil(n/a);if(t+5>=e)return u(1,e);var r=Math.max(o-t,1),i=Math.min(o+t,e),c=r>2,l=i<e-2,d=1,f=e;if(!c&&l){var h=u(1,3+2*t);return[].concat((0,s.Z)(h),["DOTS",e])}if(c&&!l){var m=u(e-(3+2*t)+1,e);return[d,"DOTS"].concat((0,s.Z)(m))}if(c&&l){var p=u(r,i);return[d,"DOTS"].concat((0,s.Z)(p),["DOTS",f])}}),[n,a,t,o])}({currentPage:a.page,totalCount:a.totalCount,pageSize:a.pageSize,siblingCount:i});if(0===a.page||h.length<1)return null;var m=h[h.length-1];return(0,d.jsxs)(l.Z,{className:f,children:[(0,d.jsx)(l.Z.First,{onClick:function(){t({search:n,pagination:(0,r.Z)((0,r.Z)({},a),{},{page:1})})}}),(0,d.jsx)(l.Z.Prev,{onClick:function(){a.page>1&&t({search:n,pagination:(0,r.Z)((0,r.Z)({},a),{},{page:a.page-1})})}}),h.map((function(e,o){return"DOTS"===e?(0,d.jsx)(l.Z.Ellipsis,{},o):a.page===e?(0,d.jsx)(l.Z.Item,{active:!0,onClick:function(){return t({search:n,pagination:(0,r.Z)((0,r.Z)({},a),{},{page:e})})},children:e},o):(0,d.jsx)(l.Z.Item,{onClick:function(){return t({search:n,pagination:(0,r.Z)((0,r.Z)({},a),{},{page:e})})},children:e},o)})),(0,d.jsx)(l.Z.Next,{onClick:function(){a.page<m&&t({search:n,pagination:(0,r.Z)((0,r.Z)({},a),{},{page:a.page+1})})}}),(0,d.jsx)(l.Z.Last,{onClick:function(){t({search:n,pagination:(0,r.Z)((0,r.Z)({},a),{},{page:m})})}})]})},h=function(e){var n=e.pageItems,a=void 0===n?[5,10,20,50,100]:n,s=e.columns,c=e.data,l=void 0===c?[]:c,u=e.options,h=void 0===u?{responsive:!0,bordered:!0,center:!0}:u,m=e.pagination,p=void 0===m?{page:1,totalCount:10,pageSize:10}:m,v=e.sort,Z=e.search,g=e.onChange,x=e.emptyText,b=void 0===x?"Empty data":x,y=e.onRow,j=void 0===y?function(){}:y;return(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"d-flex justify-content-between mb-3",children:[(0,d.jsx)(t.Z.Select,{size:"sm",style:{maxWidth:100},defaultValue:p.pageSize,onChange:function(e){return g({search:Z,pagination:(0,r.Z)((0,r.Z)({},p),{},{pageSize:Number(e.target.value),page:1})})},children:a.map((function(e,n){return(0,d.jsx)("option",{value:e,children:e},n)}))}),(0,d.jsx)(t.Z.Control,{size:"sm",type:"text",placeholder:"Search...",style:{maxWidth:200},onKeyUp:function(e){return function(e){13===e.keyCode&&g({search:e.target.value,pagination:(0,r.Z)((0,r.Z)({},p),{},{page:1})})}(e)}})]}),(0,d.jsxs)(o.Z,{className:"datatable "+(h.center?"text-center":""),responsive:h.responsive,bordered:h.bordered,hover:!0,children:[(0,d.jsx)("thead",{children:(0,d.jsx)("tr",{children:s.map((function(e,n){return(0,d.jsxs)("th",{style:{width:e.width?e.width:"auto"},children:[e.name,!1!==e.sortable&&(0,d.jsxs)(i.Z,{className:"sort-btn",size:"sm",variant:"link",onClick:function(){return function(e,n){var a="asc";void 0===n?a="asc":"asc"===n.dir?a="desc":"desc"===n.dir&&(a="asc"),g({search:Z,pagination:p,sort:{key:e,dir:a}})}(e.key,v)},children:[("undefined"===typeof v||v.key!==e.key)&&(0,d.jsx)("i",{className:"fa fa-arrows-v"}),"undefined"!==typeof v&&v.key===e.key&&"asc"===v.dir&&(0,d.jsx)("i",{className:"fa fa-long-arrow-up"}),"undefined"!==typeof v&&v.key===e.key&&"desc"===v.dir&&(0,d.jsx)("i",{className:"fa fa-long-arrow-down"})]})]},n)}))})}),(0,d.jsx)("tbody",{children:l.length?l.map((function(e,n){return(0,d.jsx)("tr",{onClick:function(){return j(e._id)},children:s.map((function(a,r){return a.render?(0,d.jsx)("td",{children:a.render(e,n)},r):(0,d.jsx)("td",{children:e[a.key]},r)}))},n)})):(0,d.jsx)("tr",{children:(0,d.jsx)("td",{colSpan:s.length,className:"text-center text-danger",children:b})})})]}),(0,d.jsx)("div",{className:"d-flex align-items-center justify-content-end",children:(0,d.jsx)(f,{search:Z,pagination:p,onChange:g})})]})}},51626:function(e,n,a){a.r(n);var r=a(74165),t=a(15861),o=a(70885),i=a(72791),s=a(11087),c=a(9140),l=a(95316),d=a(95313),u=a(43360),f=a(55705),h=a(81724),m=a(26535),p=a(85239),v=a(80184);n.default=function(){var e=(0,i.useState)(!1),n=(0,o.Z)(e,2),a=n[0],Z=n[1],g=(0,i.useState)([]),x=(0,o.Z)(g,2),b=x[0],y=x[1],j=(0,i.useState)(),N=(0,o.Z)(j,2),k=N[0],w=N[1],C=(0,i.useState)(""),S=(0,o.Z)(C,2),P=S[0],E=S[1],R=(0,i.useState)({page:1,totalCount:0,pageSize:10}),z=(0,o.Z)(R,2),T=z[0],F=z[1],O=(0,i.useState)({title:"",description:"",keywords:"",author:"",summary:"",other:""}),D=(0,o.Z)(O,2),I=D[0],B=(D[1],h.Ry({page:h.Z_().required("Please choose a page."),description:h.Z_().required("Please enter a description"),keywords:h.Z_().required("Please enter a keywords"),author:h.Z_("Please enter an author")})),H=[{key:"_id",name:"No",width:65,render:function(e,n){return n+1}},{key:"title",name:"Title",render:function(e,n){return(0,v.jsx)(s.Link,{to:"/".concat(e.topic.module.subject.year.slug,"/").concat(e.topic.module.subject.slug,"/").concat(e.topic.module.slug,"/").concat(e.topic.slug,"/").concat(e.slug),children:e.meta.title})}},{key:"description",name:"Description",render:function(e,n){return e.meta.description}},{key:"keywords",name:"keywords",render:function(e,n){return e.meta.keywords}},{key:"author",name:"Author",render:function(e,n){return e.meta.author}}];(0,i.useEffect)((function(){(0,t.Z)((0,r.Z)().mark((function e(){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.get("admin/sub-topics",{params:{search:P,length:T.pageSize,page:T.page,sortKey:k?k.key:"",sortDir:k?k.dir:""}});case 2:n=e.sent,a=n.data,y(a.data);case 5:case"end":return e.stop()}}),e)})))()}),[a]);return(0,v.jsxs)(c.Z,{children:[(0,v.jsx)(c.Z.Header,{style:{background:"#3c4b64"},bsPrefix:"card-header py-3",children:(0,v.jsx)(c.Z.Title,{as:"h5",bsPrefix:"mb-0 card-title text-light",children:"Seo management"})}),(0,v.jsxs)(c.Z.Body,{children:[(0,v.jsx)(m.Z,{columns:H,data:b,sort:k,search:P,pagination:T,onChange:function(e){var n=e.search,r=e.pagination,t=e.sort;w(t),E(n),F(r),Z(!a)}}),(0,v.jsxs)(l.Z,{show:!1,children:[(0,v.jsx)(l.Z.Header,{children:(0,v.jsx)(l.Z.Title,{children:"New SEO meta data"})}),(0,v.jsx)(f.J9,{validationSchema:B,validateOnChange:!1,validateOnBlur:!1,onSubmit:function(e){},initialValues:I,children:function(e){var n=e.handleSubmit,a=e.handleChange,r=e.handleBlur,t=e.values,o=e.touched,i=e.errors;return(0,v.jsxs)(d.Z,{noValidate:!0,onSubmit:n,children:[(0,v.jsx)(l.Z.Body,{children:(0,v.jsx)(d.Z.Group,{className:"mb-3",children:(0,v.jsx)(d.Z.Select,{name:"year",onChange:a,onBlur:r,value:t.year,touched:o,isInvalid:!!i.year})})}),(0,v.jsxs)(l.Z.Footer,{children:[(0,v.jsxs)(u.Z,{variant:"primary",type:"submit",children:[(0,v.jsx)("i",{className:"fa fa-save"})," Save"]}),(0,v.jsxs)(u.Z,{variant:"danger",type:"button",onClick:function(){},children:[(0,v.jsx)("i",{className:"fa fa-times"})," Cancel"]})]})]})}})]})]})]})}},85239:function(e,n,a){var r=a(61044),t=function(){return window.localStorage.getItem("token")?localStorage.getItem("token"):null},o=r.ZP.create({baseURL:"/api/v1/",timeout:15e3,headers:{Authorization:"Bearer ".concat(t())}});o.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(t()),e})),o.interceptors.response.use((function(e){return e}),(function(e){return 401!==e.response.status&&403!==e.response.status&&406!==e.response.status||(window.localStorage.clear(),window.location.href="/login"),Promise.reject(e)})),n.Z=o},9140:function(e,n,a){a.d(n,{Z:function(){return R}});var r=a(1413),t=a(45987),o=a(81694),i=a.n(o),s=a(72791),c=a(10162),l=a(66543),d=a(27472),u=a(80184),f=["bsPrefix","className","variant","as"],h=s.forwardRef((function(e,n){var a=e.bsPrefix,o=e.className,s=e.variant,l=e.as,d=void 0===l?"img":l,h=(0,t.Z)(e,f),m=(0,c.vE)(a,"card-img");return(0,u.jsx)(d,(0,r.Z)({ref:n,className:i()(s?"".concat(m,"-").concat(s):m,o)},h))}));h.displayName="CardImg";var m=h,p=a(96040),v=["bsPrefix","className","as"],Z=s.forwardRef((function(e,n){var a=e.bsPrefix,o=e.className,l=e.as,d=void 0===l?"div":l,f=(0,t.Z)(e,v),h=(0,c.vE)(a,"card-header"),m=(0,s.useMemo)((function(){return{cardHeaderBsPrefix:h}}),[h]);return(0,u.jsx)(p.Z.Provider,{value:m,children:(0,u.jsx)(d,(0,r.Z)((0,r.Z)({ref:n},f),{},{className:i()(o,h)}))})}));Z.displayName="CardHeader";var g=Z,x=["bsPrefix","className","bg","text","border","body","children","as"],b=(0,d.Z)("h5"),y=(0,d.Z)("h6"),j=(0,l.Z)("card-body"),N=(0,l.Z)("card-title",{Component:b}),k=(0,l.Z)("card-subtitle",{Component:y}),w=(0,l.Z)("card-link",{Component:"a"}),C=(0,l.Z)("card-text",{Component:"p"}),S=(0,l.Z)("card-footer"),P=(0,l.Z)("card-img-overlay"),E=s.forwardRef((function(e,n){var a=e.bsPrefix,o=e.className,s=e.bg,l=e.text,d=e.border,f=e.body,h=e.children,m=e.as,p=void 0===m?"div":m,v=(0,t.Z)(e,x),Z=(0,c.vE)(a,"card");return(0,u.jsx)(p,(0,r.Z)((0,r.Z)({ref:n},v),{},{className:i()(o,Z,s&&"bg-".concat(s),l&&"text-".concat(l),d&&"border-".concat(d)),children:f?(0,u.jsx)(j,{children:h}):h}))}));E.displayName="Card",E.defaultProps={body:!1};var R=Object.assign(E,{Img:m,Title:N,Subtitle:k,Body:j,Link:w,Text:C,Header:g,Footer:S,ImgOverlay:P})},95316:function(e,n,a){a.d(n,{Z:function(){return K}});var r,t=a(70885),o=a(45987),i=a(1413),s=a(81694),c=a.n(s),l=a(3070),d=a(97357),u=a(78376),f=a(36382);function h(e){if((!r&&0!==r||e)&&d.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),r=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return r}var m=a(28633),p=a(39007),v=a(73201),Z=a(91683),g=a(33690),x=a(72791),b=a(11835),y=a(35592),j=a(72709),N=a(66543),k=(0,N.Z)("modal-body"),w=a(99820),C=a(10162),S=a(80184),P=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],E=x.forwardRef((function(e,n){var a=e.bsPrefix,r=e.className,t=e.contentClassName,s=e.centered,l=e.size,d=e.fullscreen,u=e.children,f=e.scrollable,h=(0,o.Z)(e,P);a=(0,C.vE)(a,"modal");var m="".concat(a,"-dialog"),p="string"===typeof d?"".concat(a,"-fullscreen-").concat(d):"".concat(a,"-fullscreen");return(0,S.jsx)("div",(0,i.Z)((0,i.Z)({},h),{},{ref:n,className:c()(m,r,l&&"".concat(a,"-").concat(l),s&&"".concat(m,"-centered"),f&&"".concat(m,"-scrollable"),d&&p),children:(0,S.jsx)("div",{className:c()("".concat(a,"-content"),t),children:u})}))}));E.displayName="ModalDialog";var R=E,z=(0,N.Z)("modal-footer"),T=a(78024),F=["bsPrefix","className"],O=x.forwardRef((function(e,n){var a=e.bsPrefix,r=e.className,t=(0,o.Z)(e,F);return a=(0,C.vE)(a,"modal-header"),(0,S.jsx)(T.Z,(0,i.Z)((0,i.Z)({ref:n},t),{},{className:c()(r,a)}))}));O.displayName="ModalHeader",O.defaultProps={closeLabel:"Close",closeButton:!1};var D=O,I=(0,a(27472).Z)("h4"),B=(0,N.Z)("modal-title",{Component:I}),H=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],A={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:R};function L(e){return(0,S.jsx)(j.Z,(0,i.Z)((0,i.Z)({},e),{},{timeout:null}))}function M(e){return(0,S.jsx)(j.Z,(0,i.Z)((0,i.Z)({},e),{},{timeout:null}))}var _=x.forwardRef((function(e,n){var a=e.bsPrefix,r=e.className,s=e.style,j=e.dialogClassName,N=e.contentClassName,k=e.children,P=e.dialogAs,E=e["aria-labelledby"],R=e["aria-describedby"],z=e["aria-label"],T=e.show,F=e.animation,O=e.backdrop,D=e.keyboard,I=e.onEscapeKeyDown,B=e.onShow,A=e.onHide,_=e.container,K=e.autoFocus,U=e.enforceFocus,W=e.restoreFocus,q=e.restoreFocusOptions,V=e.onEntered,G=e.onExit,J=e.onExiting,Q=e.onEnter,X=e.onEntering,Y=e.onExited,$=e.backdropClassName,ee=e.manager,ne=(0,o.Z)(e,H),ae=(0,x.useState)({}),re=(0,t.Z)(ae,2),te=re[0],oe=re[1],ie=(0,x.useState)(!1),se=(0,t.Z)(ie,2),ce=se[0],le=se[1],de=(0,x.useRef)(!1),ue=(0,x.useRef)(!1),fe=(0,x.useRef)(null),he=(0,m.Z)(),me=(0,t.Z)(he,2),pe=me[0],ve=me[1],Ze=(0,v.Z)(n,ve),ge=(0,p.Z)(A),xe=(0,C.SC)();a=(0,C.vE)(a,"modal");var be=(0,x.useMemo)((function(){return{onHide:ge}}),[ge]);function ye(){return ee||(0,y.t)({isRTL:xe})}function je(e){if(d.Z){var n=ye().getScrollbarWidth()>0,a=e.scrollHeight>(0,u.Z)(e).documentElement.clientHeight;oe({paddingRight:n&&!a?h():void 0,paddingLeft:!n&&a?h():void 0})}}var Ne=(0,p.Z)((function(){pe&&je(pe.dialog)}));(0,Z.Z)((function(){(0,f.Z)(window,"resize",Ne),null==fe.current||fe.current()}));var ke=function(){de.current=!0},we=function(e){de.current&&pe&&e.target===pe.dialog&&(ue.current=!0),de.current=!1},Ce=function(){le(!0),fe.current=(0,g.Z)(pe.dialog,(function(){le(!1)}))},Se=function(e){"static"!==O?ue.current||e.target!==e.currentTarget?ue.current=!1:null==A||A():function(e){e.target===e.currentTarget&&Ce()}(e)},Pe=(0,x.useCallback)((function(e){return(0,S.jsx)("div",(0,i.Z)((0,i.Z)({},e),{},{className:c()("".concat(a,"-backdrop"),$,!F&&"show")}))}),[F,$,a]),Ee=(0,i.Z)((0,i.Z)({},s),te);Ee.display="block";return(0,S.jsx)(w.Z.Provider,{value:be,children:(0,S.jsx)(b.Z,{show:T,ref:Ze,backdrop:O,container:_,keyboard:!0,autoFocus:K,enforceFocus:U,restoreFocus:W,restoreFocusOptions:q,onEscapeKeyDown:function(e){D||"static"!==O?D&&I&&I(e):(e.preventDefault(),Ce())},onShow:B,onHide:A,onEnter:function(e,n){e&&je(e),null==Q||Q(e,n)},onEntering:function(e,n){null==X||X(e,n),(0,l.ZP)(window,"resize",Ne)},onEntered:V,onExit:function(e){null==fe.current||fe.current(),null==G||G(e)},onExiting:J,onExited:function(e){e&&(e.style.display=""),null==Y||Y(e),(0,f.Z)(window,"resize",Ne)},manager:ye(),transition:F?L:void 0,backdropTransition:F?M:void 0,renderBackdrop:Pe,renderDialog:function(e){return(0,S.jsx)("div",(0,i.Z)((0,i.Z)({role:"dialog"},e),{},{style:Ee,className:c()(r,a,ce&&"".concat(a,"-static"),!F&&"show"),onClick:O?Se:void 0,onMouseUp:we,"aria-label":z,"aria-labelledby":E,"aria-describedby":R,children:(0,S.jsx)(P,(0,i.Z)((0,i.Z)({},ne),{},{onMouseDown:ke,className:j,contentClassName:N,children:k}))}))}})})}));_.displayName="Modal",_.defaultProps=A;var K=Object.assign(_,{Body:k,Header:D,Title:B,Footer:z,Dialog:R,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},8116:function(e,n,a){a.d(n,{Z:function(){return N}});var r=a(1413),t=a(45987),o=a(81694),i=a.n(o),s=a(72791),c=a(10162),l=a(16445),d=a(80184),u=["active","disabled","className","style","activeLabel","children"],f=["children"],h=s.forwardRef((function(e,n){var a=e.active,o=e.disabled,s=e.className,c=e.style,f=e.activeLabel,h=e.children,m=(0,t.Z)(e,u),p=a||o?"span":l.Z;return(0,d.jsx)("li",{ref:n,style:c,className:i()(s,"page-item",{active:a,disabled:o}),children:(0,d.jsxs)(p,(0,r.Z)((0,r.Z)({className:"page-link"},m),{},{children:[h,a&&f&&(0,d.jsx)("span",{className:"visually-hidden",children:f})]}))})}));h.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},h.displayName="PageItem";var m=h;function p(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,o=s.forwardRef((function(e,o){var i=e.children,s=(0,t.Z)(e,f);return(0,d.jsxs)(h,(0,r.Z)((0,r.Z)({},s),{},{ref:o,children:[(0,d.jsx)("span",{"aria-hidden":"true",children:i||n}),(0,d.jsx)("span",{className:"visually-hidden",children:a})]}))}));return o.displayName=e,o}var v=p("First","\xab"),Z=p("Prev","\u2039","Previous"),g=p("Ellipsis","\u2026","More"),x=p("Next","\u203a"),b=p("Last","\xbb"),y=["bsPrefix","className","size"],j=s.forwardRef((function(e,n){var a=e.bsPrefix,o=e.className,s=e.size,l=(0,t.Z)(e,y),u=(0,c.vE)(a,"pagination");return(0,d.jsx)("ul",(0,r.Z)((0,r.Z)({ref:n},l),{},{className:i()(o,u,s&&"".concat(u,"-").concat(s))}))}));j.displayName="Pagination";var N=Object.assign(j,{First:v,Prev:Z,Ellipsis:g,Item:m,Next:x,Last:b})},62591:function(e,n,a){var r=a(1413),t=a(45987),o=a(81694),i=a.n(o),s=a(72791),c=a(10162),l=a(80184),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],u=s.forwardRef((function(e,n){var a=e.bsPrefix,o=e.className,s=e.striped,u=e.bordered,f=e.borderless,h=e.hover,m=e.size,p=e.variant,v=e.responsive,Z=(0,t.Z)(e,d),g=(0,c.vE)(a,"table"),x=i()(o,g,p&&"".concat(g,"-").concat(p),m&&"".concat(g,"-").concat(m),s&&"".concat(g,"-").concat("string"===typeof s?"striped-".concat(s):"striped"),u&&"".concat(g,"-bordered"),f&&"".concat(g,"-borderless"),h&&"".concat(g,"-hover")),b=(0,l.jsx)("table",(0,r.Z)((0,r.Z)({},Z),{},{className:x,ref:n}));if(v){var y="".concat(g,"-responsive");return"string"===typeof v&&(y="".concat(y,"-").concat(v)),(0,l.jsx)("div",{className:y,children:b})}return b}));n.Z=u}}]);
//# sourceMappingURL=1626.abadab4d.chunk.js.map