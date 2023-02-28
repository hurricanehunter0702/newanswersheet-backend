"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[766],{26535:function(e,n,a){a.d(n,{Z:function(){return m}});var t=a(1413),r=a(95313),s=a(62591),i=a(43360),o=a(42982),c=a(72791),u=a(8116),l=a(80184),d=function(e,n){var a=n-e+1;return Array.from({length:a},(function(n,a){return a+e}))},f=function(e){var n=e.search,a=e.pagination,r=e.onChange,s=e.siblingCount,i=void 0===s?1:s,f=e.className,m=function(e){var n=e.totalCount,a=e.pageSize,t=e.siblingCount,r=void 0===t?1:t,s=e.currentPage;return(0,c.useMemo)((function(){var e=Math.ceil(n/a);if(r+5>=e)return d(1,e);var t=Math.max(s-r,1),i=Math.min(s+r,e),c=t>2,u=i<e-2,l=1,f=e;if(!c&&u){var m=d(1,3+2*r);return[].concat((0,o.Z)(m),["DOTS",e])}if(c&&!u){var h=d(e-(3+2*r)+1,e);return[l,"DOTS"].concat((0,o.Z)(h))}if(c&&u){var p=d(t,i);return[l,"DOTS"].concat((0,o.Z)(p),["DOTS",f])}}),[n,a,r,s])}({currentPage:a.page,totalCount:a.totalCount,pageSize:a.pageSize,siblingCount:i});if(0===a.page||m.length<1)return null;var h=m[m.length-1];return(0,l.jsxs)(u.Z,{className:f,children:[(0,l.jsx)(u.Z.First,{onClick:function(){r({search:n,pagination:(0,t.Z)((0,t.Z)({},a),{},{page:1})})}}),(0,l.jsx)(u.Z.Prev,{onClick:function(){a.page>1&&r({search:n,pagination:(0,t.Z)((0,t.Z)({},a),{},{page:a.page-1})})}}),m.map((function(e,s){return"DOTS"===e?(0,l.jsx)(u.Z.Ellipsis,{},s):a.page===e?(0,l.jsx)(u.Z.Item,{active:!0,onClick:function(){return r({search:n,pagination:(0,t.Z)((0,t.Z)({},a),{},{page:e})})},children:e},s):(0,l.jsx)(u.Z.Item,{onClick:function(){return r({search:n,pagination:(0,t.Z)((0,t.Z)({},a),{},{page:e})})},children:e},s)})),(0,l.jsx)(u.Z.Next,{onClick:function(){a.page<h&&r({search:n,pagination:(0,t.Z)((0,t.Z)({},a),{},{page:a.page+1})})}}),(0,l.jsx)(u.Z.Last,{onClick:function(){r({search:n,pagination:(0,t.Z)((0,t.Z)({},a),{},{page:h})})}})]})},m=function(e){var n=e.pageItems,a=void 0===n?[5,10,20,50,100]:n,o=e.columns,c=e.data,u=void 0===c?[]:c,d=e.options,m=void 0===d?{responsive:!0,bordered:!0,center:!0}:d,h=e.pagination,p=void 0===h?{page:1,totalCount:10,pageSize:10}:h,x=e.sort,Z=e.search,g=e.onChange,v=e.emptyText,j=void 0===v?"Empty data":v,y=e.onRow,b=void 0===y?function(){}:y;return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"d-flex justify-content-between mb-3",children:[(0,l.jsx)(r.Z.Select,{size:"sm",style:{maxWidth:100},defaultValue:p.pageSize,onChange:function(e){return g({search:Z,pagination:(0,t.Z)((0,t.Z)({},p),{},{pageSize:Number(e.target.value),page:1})})},children:a.map((function(e,n){return(0,l.jsx)("option",{value:e,children:e},n)}))}),(0,l.jsx)(r.Z.Control,{size:"sm",type:"text",placeholder:"Search...",style:{maxWidth:200},onKeyUp:function(e){return function(e){13===e.keyCode&&g({search:e.target.value,pagination:(0,t.Z)((0,t.Z)({},p),{},{page:1})})}(e)}})]}),(0,l.jsxs)(s.Z,{className:"datatable "+(m.center?"text-center":""),responsive:m.responsive,bordered:m.bordered,hover:!0,children:[(0,l.jsx)("thead",{children:(0,l.jsx)("tr",{children:o.map((function(e,n){return(0,l.jsxs)("th",{style:{width:e.width?e.width:"auto"},children:[e.name,!1!==e.sortable&&(0,l.jsxs)(i.Z,{className:"sort-btn",size:"sm",variant:"link",onClick:function(){return function(e,n){var a="asc";void 0===n?a="asc":"asc"===n.dir?a="desc":"desc"===n.dir&&(a="asc"),g({search:Z,pagination:p,sort:{key:e,dir:a}})}(e.key,x)},children:[("undefined"===typeof x||x.key!==e.key)&&(0,l.jsx)("i",{className:"fa fa-arrows-v"}),"undefined"!==typeof x&&x.key===e.key&&"asc"===x.dir&&(0,l.jsx)("i",{className:"fa fa-long-arrow-up"}),"undefined"!==typeof x&&x.key===e.key&&"desc"===x.dir&&(0,l.jsx)("i",{className:"fa fa-long-arrow-down"})]})]},n)}))})}),(0,l.jsx)("tbody",{children:u.length?u.map((function(e,n){return(0,l.jsx)("tr",{onClick:function(){return b(e._id)},children:o.map((function(a,t){return a.render?(0,l.jsx)("td",{children:a.render(e,n)},t):(0,l.jsx)("td",{children:e[a.key]},t)}))},n)})):(0,l.jsx)("tr",{children:(0,l.jsx)("td",{colSpan:o.length,className:"text-center text-danger",children:j})})})]}),(0,l.jsx)("div",{className:"d-flex align-items-center justify-content-end",children:(0,l.jsx)(f,{search:Z,pagination:p,onChange:g})})]})}},50766:function(e,n,a){a.r(n);var t=a(4942),r=a(74165),s=a(1413),i=a(15861),o=a(70885),c=a(72791),u=a(85239),l=a(57689),d=a(43360),f=a(9140),m=a(95316),h=a(95313),p=a(99410),x=a(26535),Z=a(37009),g=a(9085),v=a(80184);n.default=function(){var e=(0,c.useState)(0),n=(0,o.Z)(e,2),a=n[0],j=n[1],y=(0,l.s0)(),b=(0,c.useState)([]),N=(0,o.Z)(b,2),k=N[0],C=N[1],w=(0,c.useState)(""),S=(0,o.Z)(w,2),P=S[0],z=S[1],A=(0,c.useState)(),T=(0,o.Z)(A,2),I=T[0],E=T[1],B=(0,c.useState)({page:1,totalCount:0,pageSize:10}),D=(0,o.Z)(B,2),H=D[0],M=D[1],O=(0,c.useState)(0),R=(0,o.Z)(O,2),W=R[0],F=R[1],L=(0,c.useState)(1),_=(0,o.Z)(L,2),G=(_[0],_[1],(0,c.useState)({firstName:"",lastName:"",email:"",password:"",isSendInstructions:!0})),V=(0,o.Z)(G,2),K=V[0],U=V[1],q=(0,c.useState)(!1),Y=(0,o.Z)(q,2),$=Y[0],J=Y[1],Q=(0,c.useState)(0),X=(0,o.Z)(Q,2),ee=X[0],ne=X[1],ae=[{key:"_id",name:"No",width:65,render:function(e,n){return n+1}},{key:"firstName",name:"First name"},{key:"lastName",name:"Last name"},{key:"email",name:"Email"},{key:"action",name:"Action",width:120,render:function(e){return(0,v.jsxs)("div",{children:[(0,v.jsx)(d.Z,{variant:"outline-success","data-tip":"Edit",size:"sm",className:"me-1",onClick:function(){return y("/admin/staffs/".concat(e._id))},children:(0,v.jsx)("i",{className:"fa fa-edit"})},"1"),(0,v.jsx)(d.Z,{variant:"outline-primary","data-tip":e.status?"Disable":"Allow",size:"sm",className:"me-1",onClick:function(){se(e._id)},children:e.status?(0,v.jsx)("i",{className:"fa fa-thumbs-up"}):(0,v.jsx)("i",{className:"fa fa-thumbs-down"})},"2"),(0,v.jsx)(d.Z,{variant:"outline-danger","data-tip":"Delete",size:"sm",onClick:function(){return ie(e._id)},children:(0,v.jsx)("i",{className:"fa fa-trash"})},"3"),(0,v.jsx)(Z.Z,{})]})},sortable:!1}];(0,c.useEffect)((function(){var e=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("admin/staffs",{params:{search:P,length:H.pageSize,page:H.page,sortKey:I?I.key:"",sortDir:I?I.dir:""}});case 2:n=e.sent,a=n.data,C(a.data),M((0,s.Z)((0,s.Z)({},H),{},{totalCount:a.totalCount}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a]);var te=function(e,n){U((0,s.Z)((0,s.Z)({},K),{},(0,t.Z)({},n,e)))},re=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==K.firstName){e.next=4;break}g.Am.error("Please enter a staff's first name.","Warning!"),e.next=20;break;case 4:if(""!==K.lastName){e.next=8;break}g.Am.error("Please enter a staff's last name.","Warning!"),e.next=20;break;case 8:if(""!==K.email){e.next=12;break}g.Am.error("Please enter a staff's email.","Warning!"),e.next=20;break;case 12:return K.role=1,K.isPaid=!0,K.status=!0,e.next=17,u.Z.post("admin/staffs",K);case 17:n=e.sent,(t=n.data).status?(g.Am.success(t.msg,"Success!"),j(!a),J(!1)):g.Am.error(t.msg,"Warning!");case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var a,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.put("admin/staffs/login-mng/".concat(n));case 2:(a=e.sent).data.status?(g.Am.success(a.data.msg),t=k.map((function(e,a){return e._id==n?(e.status=!e.status,e):e})),C(t)):g.Am.error(a.data.msg,"Warning!");case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),ie=function(e){F(e),ne(1)},oe=function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var t,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.delete("admin/staffs/".concat(W));case 2:t=e.sent,(s=t.data).status?(g.Am.success(s.msg),j(!a),ne(0)):g.Am.error(s.msg);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,v.jsxs)(f.Z,{children:[(0,v.jsx)(f.Z.Header,{style:{background:"#3c4b64"},bsPrefix:"card-header py-3",children:(0,v.jsxs)(f.Z.Title,{as:"h1",bsPrefix:"mb-0 card-title text-light",style:{fontSize:24},children:["Staff management",(0,v.jsxs)(d.Z,{variant:"primary",size:"sm",className:"float-end",onClick:function(){return J(!0)},children:[(0,v.jsx)("i",{className:"fa fa-plus"})," New staff"]})]})}),(0,v.jsx)(f.Z.Body,{children:(0,v.jsx)(x.Z,{columns:ae,data:k,sort:I,search:P,pagination:H,onChange:function(e){var n=e.search,t=e.pagination,r=e.sort;E(r),z(n),M(t),j(!a)}})}),(0,v.jsxs)(m.Z,{size:"md",show:$,onHide:function(){return J(!1)},children:[(0,v.jsx)(m.Z.Header,{closeButton:!0,children:(0,v.jsx)(m.Z.Title,{children:"New staff"})}),(0,v.jsx)(m.Z.Body,{children:(0,v.jsxs)(h.Z,{children:[(0,v.jsxs)(p.Z,{className:"mb-3",children:[(0,v.jsx)(p.Z.Text,{style:{width:40},children:(0,v.jsx)("i",{className:"fa fa-user"})}),(0,v.jsx)(h.Z.Control,{type:"text",value:K.firstName,placeholder:"First name",onChange:function(e){return te(e.target.value,"firstName")}})]}),(0,v.jsxs)(p.Z,{className:"mb-3",children:[(0,v.jsx)(p.Z.Text,{style:{width:40},children:(0,v.jsx)("i",{className:"fa fa-user"})}),(0,v.jsx)(h.Z.Control,{type:"text",value:K.lastName,placeholder:"Last name",onChange:function(e){return te(e.target.value,"lastName")}})]}),(0,v.jsxs)(p.Z,{className:"mb-3",children:[(0,v.jsx)(p.Z.Text,{style:{width:40},children:(0,v.jsx)("i",{className:"fa fa-envelope"})}),(0,v.jsx)(h.Z.Control,{type:"email",value:K.email,placeholder:"Email",onChange:function(e){return te(e.target.value,"email")}})]}),(0,v.jsxs)(p.Z,{className:"mb-3",children:[(0,v.jsx)(h.Z.Control,{type:"text",value:K.password,placeholder:"Password",onChange:function(e){return te(e.target.value,"password")}}),(0,v.jsx)(d.Z,{type:"button",variant:"outline-primary",onClick:function(){for(var e="abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()0123456789",n="",a=0,t=e.length;a<12;++a)n+=e.charAt(Math.floor(Math.random()*t));U((0,s.Z)((0,s.Z)({},K),{},{password:n}))},children:"Generate"})]}),(0,v.jsx)(h.Z.Group,{children:(0,v.jsx)(h.Z.Check,{type:"checkbox",checked:K.isSendInstructions,onChange:function(e){return te(e.target.checked,"isSendInstructions")},label:"Send sign-in instructions"})})]})}),(0,v.jsxs)(m.Z.Footer,{children:[(0,v.jsxs)(d.Z,{variant:"primary",onClick:function(){return re()},children:[(0,v.jsx)("i",{className:"fa fa-save"})," Create"]}),(0,v.jsxs)(d.Z,{variant:"danger",onClick:function(){return J(0)},children:[(0,v.jsx)("i",{className:"fa fa-times"})," Cancel"]})]})]}),(0,v.jsxs)(m.Z,{show:ee,onHide:function(){return ne(0)},children:[(0,v.jsx)(m.Z.Header,{closeButton:!0,children:(0,v.jsx)(m.Z.Title,{children:"Are you sure?"})}),(0,v.jsx)(m.Z.Body,{children:"Deleting is permanent and cannot be undone."}),(0,v.jsxs)(m.Z.Footer,{children:[(0,v.jsx)(d.Z,{variant:"primary",onClick:function(){return oe()},children:"Yes"}),(0,v.jsx)(d.Z,{variant:"danger",onClick:function(){return ne(0)},children:"No"})]})]})]})}},85239:function(e,n,a){var t=a(61044),r=function(){return window.localStorage.getItem("token")?localStorage.getItem("token"):null},s=t.ZP.create({baseURL:"/api/v1/",timeout:15e3,headers:{Authorization:"Bearer ".concat(r())}});s.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(r()),e})),s.interceptors.response.use((function(e){return e}),(function(e){return 401!==e.response.status&&403!==e.response.status&&406!==e.response.status||(window.localStorage.clear(),window.location.href="/login"),Promise.reject(e)})),n.Z=s},9140:function(e,n,a){a.d(n,{Z:function(){return A}});var t=a(1413),r=a(45987),s=a(81694),i=a.n(s),o=a(72791),c=a(10162),u=a(66543),l=a(27472),d=a(80184),f=["bsPrefix","className","variant","as"],m=o.forwardRef((function(e,n){var a=e.bsPrefix,s=e.className,o=e.variant,u=e.as,l=void 0===u?"img":u,m=(0,r.Z)(e,f),h=(0,c.vE)(a,"card-img");return(0,d.jsx)(l,(0,t.Z)({ref:n,className:i()(o?"".concat(h,"-").concat(o):h,s)},m))}));m.displayName="CardImg";var h=m,p=a(96040),x=["bsPrefix","className","as"],Z=o.forwardRef((function(e,n){var a=e.bsPrefix,s=e.className,u=e.as,l=void 0===u?"div":u,f=(0,r.Z)(e,x),m=(0,c.vE)(a,"card-header"),h=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,d.jsx)(p.Z.Provider,{value:h,children:(0,d.jsx)(l,(0,t.Z)((0,t.Z)({ref:n},f),{},{className:i()(s,m)}))})}));Z.displayName="CardHeader";var g=Z,v=["bsPrefix","className","bg","text","border","body","children","as"],j=(0,l.Z)("h5"),y=(0,l.Z)("h6"),b=(0,u.Z)("card-body"),N=(0,u.Z)("card-title",{Component:j}),k=(0,u.Z)("card-subtitle",{Component:y}),C=(0,u.Z)("card-link",{Component:"a"}),w=(0,u.Z)("card-text",{Component:"p"}),S=(0,u.Z)("card-footer"),P=(0,u.Z)("card-img-overlay"),z=o.forwardRef((function(e,n){var a=e.bsPrefix,s=e.className,o=e.bg,u=e.text,l=e.border,f=e.body,m=e.children,h=e.as,p=void 0===h?"div":h,x=(0,r.Z)(e,v),Z=(0,c.vE)(a,"card");return(0,d.jsx)(p,(0,t.Z)((0,t.Z)({ref:n},x),{},{className:i()(s,Z,o&&"bg-".concat(o),u&&"text-".concat(u),l&&"border-".concat(l)),children:f?(0,d.jsx)(b,{children:m}):m}))}));z.displayName="Card",z.defaultProps={body:!1};var A=Object.assign(z,{Img:h,Title:N,Subtitle:k,Body:b,Link:C,Text:w,Header:g,Footer:S,ImgOverlay:P})},99410:function(e,n,a){var t=a(45987),r=a(1413),s=a(81694),i=a.n(s),o=a(72791),c=a(66543),u=a(10162),l=a(96882),d=a(91991),f=a(80184),m=["bsPrefix","size","hasValidation","className","as"],h=(0,c.Z)("input-group-text",{Component:"span"}),p=o.forwardRef((function(e,n){var a=e.bsPrefix,s=e.size,c=e.hasValidation,l=e.className,h=e.as,p=void 0===h?"div":h,x=(0,t.Z)(e,m);a=(0,u.vE)(a,"input-group");var Z=(0,o.useMemo)((function(){return{}}),[]);return(0,f.jsx)(d.Z.Provider,{value:Z,children:(0,f.jsx)(p,(0,r.Z)((0,r.Z)({ref:n},x),{},{className:i()(l,a,s&&"".concat(a,"-").concat(s),c&&"has-validation")}))})}));p.displayName="InputGroup",n.Z=Object.assign(p,{Text:h,Radio:function(e){return(0,f.jsx)(h,{children:(0,f.jsx)(l.Z,(0,r.Z)({type:"radio"},e))})},Checkbox:function(e){return(0,f.jsx)(h,{children:(0,f.jsx)(l.Z,(0,r.Z)({type:"checkbox"},e))})}})},91991:function(e,n,a){var t=a(72791).createContext(null);t.displayName="InputGroupContext",n.Z=t}}]);
//# sourceMappingURL=766.14c3a9a6.chunk.js.map