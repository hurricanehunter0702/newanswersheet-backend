"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6271],{26271:function(e,n,r){r.r(n),r.d(n,{default:function(){return w}});var t=r(37762),s=r(42982),a=r(74165),c=r(15861),i=r(70885),o=r(72791),l=r(47022),u=r(43360),d=r(9140),m=r(62591),f=r(95316),h=r(28949),p=r(95313),x=r(59434),v=r(76887),b=r(85239),j=r(57689),Z=r(9085),y=r(72426),N=r.n(y),g=(r(55705),r(80184)),w=function(){var e=(0,x.I0)(),n=((0,j.s0)(),(0,o.useState)(!1)),y=(0,i.Z)(n,2),w=y[0],C=y[1],k=(0,o.useState)([]),E=(0,i.Z)(k,2),A=E[0],P=E[1],S=(0,o.useState)([]),K=(0,i.Z)(S,2),R=K[0],F=K[1],T=(0,o.useState)([]),H=(0,i.Z)(T,2),I=H[0],O=H[1],_=(0,o.useState)({name:""}),B=(0,i.Z)(_,2),D=B[0],M=B[1],z=(0,o.useState)([]),$=(0,i.Z)(z,2),L=$[0],U=$[1],Y=(0,o.useState)([]),W=(0,i.Z)(Y,2),q=W[0],G=W[1],J=(0,o.useState)(1),V=(0,i.Z)(J,2),Q=V[0],X=V[1],ee=(0,o.useState)("stripe"),ne=(0,i.Z)(ee,2),re=ne[0],te=ne[1];(0,o.useEffect)((function(){document.title="Join AnswerSheet - affordable HSC support";var e=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.Z.get("memberships");case 2:n=e.sent,r=n.data,O(r.memberships);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,o.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.Z.get("my-memberships");case 2:n=e.sent,r=n.data,U(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,o.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.Z.get("my-invoices");case 2:n=e.sent,r=n.data,console.log(r),G(r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,o.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.Z.get("years");case 2:n=e.sent,(r=n.data).success?P(r.data):Z.Am.error(r.msg);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var se=function(e,n){var r=(0,s.Z)(R),t=r.indexOf(e);t>-1?r.splice(t,1):(e.year_name=n.name,r.push(e)),F(r)},ae=function(){if(1===R.length){var e=D.items.find((function(e){return 1===Number(e.subject_nums)}));return Number(e.price)}if(2===R.length){var n=D.items.find((function(e){return 2===Number(e.subject_nums)}));return Number(n.price)}if(3===R.length){var r=D.items.find((function(e){return 3===Number(e.subject_nums)}));return Number(r.price)}if(R.length>3){var t=D.items.find((function(e){return 3===Number(e.subject_nums)}));return Number(t.price)+15*(R.length-3)}return 0},ce=function(){var n=(0,c.Z)((0,a.Z)().mark((function n(){var r,t,s,c;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(D.name," - ").concat(R.length," ").concat(R.length>1?"subjects":"subject"," - "),R.forEach((function(e,n){r+=0===n?"".concat(e.year_name," - ").concat(e.name," "):", ".concat(e.year_name," - ").concat(e.name)})),t={name:D.name,description:r,period:Number(D.items[0].period),subjects:R,price:ae()},n.next=5,b.Z.post("private-billing/".concat(re),{membership:t});case 5:s=n.sent,(c=s.data).success?(e((0,v.K4)(!1)),window.location.href=c.redirect_url):(e((0,v.K4)(!1)),Z.Am.error(c.msg));case 8:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),ie=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(n,r){var t,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n,r),e.next=3,b.Z.post("private-billing",{membership:n});case 3:t=e.sent,(s=t.data).success?Z.Am.success(s.msg):Z.Am.error(s.msg);case 6:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}();return(0,g.jsx)("div",{className:"private-membership-container",children:(0,g.jsxs)(l.Z,{children:[(0,g.jsxs)("div",{className:"page-content d-flex flex-column",children:[(0,g.jsx)("h2",{className:"page-title mb-3 mb-md-4 text-center",children:"Premium membership"}),(0,g.jsx)("div",{className:"membership-items",children:I.map((function(e,n){return(0,g.jsxs)("div",{className:"membership-item",children:[(0,g.jsxs)("div",{className:"membership-item-header "+("unlimited-membership"===e.slug?"membership-item-unlimited-header":""),children:[(0,g.jsx)("h4",{className:"mb-0 text-light",children:e.label}),"unlimited-membership"===e.slug&&(0,g.jsx)("p",{className:"mb-0",children:"(opening special)"})]}),(0,g.jsxs)("div",{className:"membership-item-content",children:[(0,g.jsx)("ul",{children:e.items.map((function(e,n){return(0,g.jsxs)("li",{children:[(0,g.jsx)("i",{className:"fa fa-circle"}),(0,g.jsxs)("span",{children:["$",e.price," for"," ",1===Number(e.subject_nums)?"one subject":2===Number(e.subject_nums)?"two subjects":"three subjects"]})]},n)}))}),(0,g.jsx)("div",{className:"d-grid mt-3",children:(0,g.jsx)(u.Z,{variant:"primary",onClick:function(){return function(e){M(e),C(!0)}(e)},children:"Buy now"})})]})]},n)}))}),(0,g.jsx)("div",{className:"memberships-table",children:L.length?(0,g.jsxs)(d.Z,{className:"mt-3 mb-4",children:[(0,g.jsx)(d.Z.Header,{style:{background:"#005492"},children:(0,g.jsx)(d.Z.Title,{className:"mb-0 text-light",children:"Current memberships"})}),(0,g.jsx)(d.Z.Body,{children:(0,g.jsxs)(m.Z,{className:"my-membership-tbl",bsPrefix:"table table-bordered text-center",children:[(0,g.jsx)("thead",{style:{backgroundColor:"#005492",color:"#fafafa"},children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"Subjects"}),(0,g.jsx)("th",{children:"Invoice"}),(0,g.jsx)("th",{children:"Action"}),(0,g.jsx)("th",{children:"Current until"})]})}),(0,g.jsx)("tbody",{className:"text-center",children:L.map((function(e,n){return(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:(0,g.jsx)("ul",{className:"mb-0",children:e.subjects.map((function(e,n){return(0,g.jsxs)("li",{style:{listStyle:"none"},children:[e.year.name," - ",e.name]},n)}))})}),(0,g.jsx)("td",{children:"INV-"+q[n].invoice_id}),(0,g.jsx)("td",{children:(0,g.jsx)(u.Z,{variant:"outline-primary",size:"sm",onClick:function(){return ie(e,n)},children:"Email me"})}),(0,g.jsx)("td",{style:{verticalAlign:"middle"},children:-1===Number(e.period)?"-":N()(e.expiredDate).format("YYYY.MM.DD HH:mm:ss")})]},n)}))})]})})]}):null})]}),(0,g.jsx)(f.Z,{show:w,onHide:function(){return C(!1)},centered:!0,size:"lg",className:"private-membership-modal",children:(0,g.jsxs)(f.Z.Body,{className:"p-4",children:[(0,g.jsxs)(f.Z.Title,{as:"h3",className:"mb-2",children:[D.label," AnswerSheet premium"]}),1===Q?(0,g.jsxs)("div",{className:"step-1",children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("p",{className:"fs-5 fw-400 mb-1",children:"Choose your subject(s)"}),(0,g.jsx)(h.Z,{defaultActiveKey:-1,children:A.map((function(e,n){return(0,g.jsxs)(h.Z.Item,{eventKey:n,children:[(0,g.jsx)(h.Z.Header,{children:e.name}),(0,g.jsx)(h.Z.Body,{children:(0,g.jsx)("ul",{className:"mb-0 nav flex-column",children:e.subjects.map((function(n,r){var s,a=function(e){var n,r=!1,s=(0,t.Z)(L);try{for(s.s();!(n=s.n()).done;)if(n.value.subjects.find((function(n,r){return n===e}))){r=!0;break}}catch(a){s.e(a)}finally{s.f()}return r}(n);return(0,g.jsxs)("li",{className:"py-2",style:{cursor:"pointer"},onClick:function(){return se(n,e)},children:[(0,g.jsx)("span",{style:{color:a?"#808080":"#005492"},children:n.name}),(0,g.jsx)(p.Z.Check,{inline:!0,checked:(s=n,-1!==R.findIndex((function(e){return e===s}))),disabled:!!a,name:"subjects",className:"float-end",value:n,onChange:function(n){return se(n.target.value,e)}})]},r)}))})})]},n)}))})]}),(0,g.jsxs)("div",{className:"d-flex justify-content-between align-items-center pt-2",children:[(0,g.jsxs)("div",{children:[(0,g.jsxs)("h5",{className:"mb-1 ps-1",children:["Total: $",ae()," ",R.length?"for ".concat(R.length," ").concat(1==R.length?"subject":"subjects"):""]}),(0,g.jsx)("h6",{className:"mb-0",children:"Only $15 for one more subject."})]}),(0,g.jsx)(u.Z,{variant:"primary",className:"float-end",disabled:0===ae(),onClick:function(){return X(2)},children:"Continue"})]})]}):(0,g.jsxs)("div",{className:"step-2",children:[(0,g.jsxs)(m.Z,{bsPrefix:"bg-white table table-bordered",children:[(0,g.jsx)("thead",{style:{backgroundColor:"#005492",color:"#fafafa"},children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"Membership"}),(0,g.jsx)("th",{children:"Amount"})]})}),(0,g.jsxs)("tbody",{children:[(0,g.jsxs)("tr",{children:[(0,g.jsxs)("td",{children:[(0,g.jsxs)("div",{children:[D.name," - ",R.length," ",R.length>1?"subjects":"subject"]}),(0,g.jsx)("ul",{className:"mb-0",children:R.map((function(e,n){return(0,g.jsxs)("li",{children:[e.year_name," - ",e.name]},n)}))})]}),(0,g.jsxs)("td",{children:["$",ae()]})]}),(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{className:"fw-bolder",children:"Total payment"}),(0,g.jsxs)("td",{children:["$",ae()]})]})]})]}),(0,g.jsxs)(p.Z.Group,{className:"mb-3",children:[(0,g.jsx)(p.Z.Check,{inline:!0,id:"stripe",type:"radio",name:"paymentType",value:"stripe",className:"mr-3 mb-3",label:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("img",{src:r(89511),alt:"visa",height:"20",className:"mx-1"}),(0,g.jsx)("img",{src:r(84196),alt:"mastercard",height:"20",className:"mx-1"}),(0,g.jsx)("img",{src:r(95774),alt:"applepay",height:"18",className:"mx-1"}),(0,g.jsx)("img",{src:r(14697),alt:"googlepay",height:"20",className:"mx-1"})]}),checked:"stripe"===re,onChange:function(){return te("stripe")}}),(0,g.jsx)(p.Z.Check,{inline:!0,id:"paypal",type:"radio",name:"paymentType",value:"paypal",label:(0,g.jsx)("img",{src:r(90102),height:"20",alt:"paypal",className:"ms-1"}),checked:"paypal"===re,onChange:function(){return te("paypal")}})]}),(0,g.jsx)("hr",{}),(0,g.jsxs)("div",{className:"form-actions",children:[(0,g.jsxs)(u.Z,{variant:"danger",onClick:function(){return X(1)},children:[(0,g.jsx)("i",{className:"fa fa-undo"})," Previous"]}),(0,g.jsxs)(u.Z,{variant:"primary",onClick:ce,className:"float-end",children:[(0,g.jsx)("i",{className:"fa fa-shopping-cart"})," Purchase"]})]})]}),(0,g.jsx)("button",{className:"btn-close",onClick:function(){C(!1),X(1)}})]})})]})})}},85239:function(e,n,r){var t=r(61044),s=function(){return window.localStorage.getItem("token")?localStorage.getItem("token"):null},a=t.ZP.create({baseURL:"/api/v1/",timeout:15e3,headers:{Authorization:"Bearer ".concat(s())}});a.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(s()),e})),a.interceptors.response.use((function(e){return e}),(function(e){return 401!==e.response.status&&403!==e.response.status&&406!==e.response.status||(window.localStorage.clear(),window.location.href="/login"),Promise.reject(e)})),n.Z=a},28949:function(e,n,r){r.d(n,{Z:function(){return H}});var t=r(1413),s=r(45987),a=r(81694),c=r.n(a),i=r(72791),o=r(80239),l=r(10162),u=r(17858);function d(e,n){return Array.isArray(e)?e.includes(n):e===n}var m=i.createContext({});m.displayName="AccordionContext";var f=m,h=r(80184),p=["as","bsPrefix","className","children","eventKey"],x=i.forwardRef((function(e,n){var r=e.as,a=void 0===r?"div":r,o=e.bsPrefix,m=e.className,x=e.children,v=e.eventKey,b=(0,s.Z)(e,p),j=(0,i.useContext)(f).activeEventKey;return o=(0,l.vE)(o,"accordion-collapse"),(0,h.jsx)(u.Z,(0,t.Z)((0,t.Z)({ref:n,in:d(j,v)},b),{},{className:c()(m,o),children:(0,h.jsx)(a,{children:i.Children.only(x)})}))}));x.displayName="AccordionCollapse";var v=x,b=i.createContext({eventKey:""});b.displayName="AccordionItemContext";var j=b,Z=["as","bsPrefix","className"],y=i.forwardRef((function(e,n){var r=e.as,a=void 0===r?"div":r,o=e.bsPrefix,u=e.className,d=(0,s.Z)(e,Z);o=(0,l.vE)(o,"accordion-body");var m=(0,i.useContext)(j).eventKey;return(0,h.jsx)(v,{eventKey:m,children:(0,h.jsx)(a,(0,t.Z)((0,t.Z)({ref:n},d),{},{className:c()(u,o)}))})}));y.displayName="AccordionBody";var N=y,g=r(42982),w=["as","bsPrefix","className","onClick"];var C=i.forwardRef((function(e,n){var r=e.as,a=void 0===r?"button":r,o=e.bsPrefix,u=e.className,m=e.onClick,p=(0,s.Z)(e,w);o=(0,l.vE)(o,"accordion-button");var x=(0,i.useContext)(j).eventKey,v=function(e,n){var r=(0,i.useContext)(f),t=r.activeEventKey,s=r.onSelect,a=r.alwaysOpen;return function(r){var c=e===t?null:e;a&&(c=Array.isArray(t)?t.includes(e)?t.filter((function(n){return n!==e})):[].concat((0,g.Z)(t),[e]):[e]),null==s||s(c,r),null==n||n(r)}}(x,m),b=(0,i.useContext)(f).activeEventKey;return"button"===a&&(p.type="button"),(0,h.jsx)(a,(0,t.Z)((0,t.Z)({ref:n,onClick:v},p),{},{"aria-expanded":x===b,className:c()(u,o,!d(b,x)&&"collapsed")}))}));C.displayName="AccordionButton";var k=C,E=["as","bsPrefix","className","children","onClick"],A=i.forwardRef((function(e,n){var r=e.as,a=void 0===r?"h2":r,i=e.bsPrefix,o=e.className,u=e.children,d=e.onClick,m=(0,s.Z)(e,E);return i=(0,l.vE)(i,"accordion-header"),(0,h.jsx)(a,(0,t.Z)((0,t.Z)({ref:n},m),{},{className:c()(o,i),children:(0,h.jsx)(k,{onClick:d,children:u})}))}));A.displayName="AccordionHeader";var P=A,S=["as","bsPrefix","className","eventKey"],K=i.forwardRef((function(e,n){var r=e.as,a=void 0===r?"div":r,o=e.bsPrefix,u=e.className,d=e.eventKey,m=(0,s.Z)(e,S);o=(0,l.vE)(o,"accordion-item");var f=(0,i.useMemo)((function(){return{eventKey:d}}),[d]);return(0,h.jsx)(j.Provider,{value:f,children:(0,h.jsx)(a,(0,t.Z)((0,t.Z)({ref:n},m),{},{className:c()(u,o)}))})}));K.displayName="AccordionItem";var R=K,F=["as","activeKey","bsPrefix","className","onSelect","flush","alwaysOpen"],T=i.forwardRef((function(e,n){var r=(0,o.Ch)(e,{activeKey:"onSelect"}),a=r.as,u=void 0===a?"div":a,d=r.activeKey,m=r.bsPrefix,p=r.className,x=r.onSelect,v=r.flush,b=r.alwaysOpen,j=(0,s.Z)(r,F),Z=(0,l.vE)(m,"accordion"),y=(0,i.useMemo)((function(){return{activeEventKey:d,onSelect:x,alwaysOpen:b}}),[d,x,b]);return(0,h.jsx)(f.Provider,{value:y,children:(0,h.jsx)(u,(0,t.Z)((0,t.Z)({ref:n},j),{},{className:c()(p,Z,v&&"".concat(Z,"-flush"))}))})}));T.displayName="Accordion";var H=Object.assign(T,{Button:k,Collapse:v,Item:R,Header:P,Body:N})},95316:function(e,n,r){r.d(n,{Z:function(){return $}});var t,s=r(70885),a=r(45987),c=r(1413),i=r(81694),o=r.n(i),l=r(3070),u=r(97357),d=r(78376),m=r(36382);function f(e){if((!t&&0!==t||e)&&u.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),t=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return t}var h=r(28633),p=r(39007),x=r(73201),v=r(91683),b=r(33690),j=r(72791),Z=r(11835),y=r(35592),N=r(72709),g=r(66543),w=(0,g.Z)("modal-body"),C=r(99820),k=r(10162),E=r(80184),A=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],P=j.forwardRef((function(e,n){var r=e.bsPrefix,t=e.className,s=e.contentClassName,i=e.centered,l=e.size,u=e.fullscreen,d=e.children,m=e.scrollable,f=(0,a.Z)(e,A);r=(0,k.vE)(r,"modal");var h="".concat(r,"-dialog"),p="string"===typeof u?"".concat(r,"-fullscreen-").concat(u):"".concat(r,"-fullscreen");return(0,E.jsx)("div",(0,c.Z)((0,c.Z)({},f),{},{ref:n,className:o()(h,t,l&&"".concat(r,"-").concat(l),i&&"".concat(h,"-centered"),m&&"".concat(h,"-scrollable"),u&&p),children:(0,E.jsx)("div",{className:o()("".concat(r,"-content"),s),children:d})}))}));P.displayName="ModalDialog";var S=P,K=(0,g.Z)("modal-footer"),R=r(78024),F=["bsPrefix","className"],T=j.forwardRef((function(e,n){var r=e.bsPrefix,t=e.className,s=(0,a.Z)(e,F);return r=(0,k.vE)(r,"modal-header"),(0,E.jsx)(R.Z,(0,c.Z)((0,c.Z)({ref:n},s),{},{className:o()(t,r)}))}));T.displayName="ModalHeader",T.defaultProps={closeLabel:"Close",closeButton:!1};var H=T,I=(0,r(27472).Z)("h4"),O=(0,g.Z)("modal-title",{Component:I}),_=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],B={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:S};function D(e){return(0,E.jsx)(N.Z,(0,c.Z)((0,c.Z)({},e),{},{timeout:null}))}function M(e){return(0,E.jsx)(N.Z,(0,c.Z)((0,c.Z)({},e),{},{timeout:null}))}var z=j.forwardRef((function(e,n){var r=e.bsPrefix,t=e.className,i=e.style,N=e.dialogClassName,g=e.contentClassName,w=e.children,A=e.dialogAs,P=e["aria-labelledby"],S=e["aria-describedby"],K=e["aria-label"],R=e.show,F=e.animation,T=e.backdrop,H=e.keyboard,I=e.onEscapeKeyDown,O=e.onShow,B=e.onHide,z=e.container,$=e.autoFocus,L=e.enforceFocus,U=e.restoreFocus,Y=e.restoreFocusOptions,W=e.onEntered,q=e.onExit,G=e.onExiting,J=e.onEnter,V=e.onEntering,Q=e.onExited,X=e.backdropClassName,ee=e.manager,ne=(0,a.Z)(e,_),re=(0,j.useState)({}),te=(0,s.Z)(re,2),se=te[0],ae=te[1],ce=(0,j.useState)(!1),ie=(0,s.Z)(ce,2),oe=ie[0],le=ie[1],ue=(0,j.useRef)(!1),de=(0,j.useRef)(!1),me=(0,j.useRef)(null),fe=(0,h.Z)(),he=(0,s.Z)(fe,2),pe=he[0],xe=he[1],ve=(0,x.Z)(n,xe),be=(0,p.Z)(B),je=(0,k.SC)();r=(0,k.vE)(r,"modal");var Ze=(0,j.useMemo)((function(){return{onHide:be}}),[be]);function ye(){return ee||(0,y.t)({isRTL:je})}function Ne(e){if(u.Z){var n=ye().getScrollbarWidth()>0,r=e.scrollHeight>(0,d.Z)(e).documentElement.clientHeight;ae({paddingRight:n&&!r?f():void 0,paddingLeft:!n&&r?f():void 0})}}var ge=(0,p.Z)((function(){pe&&Ne(pe.dialog)}));(0,v.Z)((function(){(0,m.Z)(window,"resize",ge),null==me.current||me.current()}));var we=function(){ue.current=!0},Ce=function(e){ue.current&&pe&&e.target===pe.dialog&&(de.current=!0),ue.current=!1},ke=function(){le(!0),me.current=(0,b.Z)(pe.dialog,(function(){le(!1)}))},Ee=function(e){"static"!==T?de.current||e.target!==e.currentTarget?de.current=!1:null==B||B():function(e){e.target===e.currentTarget&&ke()}(e)},Ae=(0,j.useCallback)((function(e){return(0,E.jsx)("div",(0,c.Z)((0,c.Z)({},e),{},{className:o()("".concat(r,"-backdrop"),X,!F&&"show")}))}),[F,X,r]),Pe=(0,c.Z)((0,c.Z)({},i),se);Pe.display="block";return(0,E.jsx)(C.Z.Provider,{value:Ze,children:(0,E.jsx)(Z.Z,{show:R,ref:ve,backdrop:T,container:z,keyboard:!0,autoFocus:$,enforceFocus:L,restoreFocus:U,restoreFocusOptions:Y,onEscapeKeyDown:function(e){H||"static"!==T?H&&I&&I(e):(e.preventDefault(),ke())},onShow:O,onHide:B,onEnter:function(e,n){e&&Ne(e),null==J||J(e,n)},onEntering:function(e,n){null==V||V(e,n),(0,l.ZP)(window,"resize",ge)},onEntered:W,onExit:function(e){null==me.current||me.current(),null==q||q(e)},onExiting:G,onExited:function(e){e&&(e.style.display=""),null==Q||Q(e),(0,m.Z)(window,"resize",ge)},manager:ye(),transition:F?D:void 0,backdropTransition:F?M:void 0,renderBackdrop:Ae,renderDialog:function(e){return(0,E.jsx)("div",(0,c.Z)((0,c.Z)({role:"dialog"},e),{},{style:Pe,className:o()(t,r,oe&&"".concat(r,"-static"),!F&&"show"),onClick:T?Ee:void 0,onMouseUp:Ce,"aria-label":K,"aria-labelledby":P,"aria-describedby":S,children:(0,E.jsx)(A,(0,c.Z)((0,c.Z)({},ne),{},{onMouseDown:we,className:N,contentClassName:g,children:w}))}))}})})}));z.displayName="Modal",z.defaultProps=B;var $=Object.assign(z,{Body:w,Header:H,Title:O,Footer:K,Dialog:S,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})}}]);
//# sourceMappingURL=6271.6a0f52da.chunk.js.map