"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[6811],{26535:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(1413),r=t(95313),s=t(62591),i=t(43360),o=t(42982),c=t(72791),u=t(8116),d=t(80184),l=function(e,n){var t=n-e+1;return Array.from({length:t},(function(n,t){return t+e}))},f=function(e){var n=e.search,t=e.pagination,r=e.onChange,s=e.siblingCount,i=void 0===s?1:s,f=e.className,p=function(e){var n=e.totalCount,t=e.pageSize,a=e.siblingCount,r=void 0===a?1:a,s=e.currentPage;return(0,c.useMemo)((function(){var e=Math.ceil(n/t);if(r+5>=e)return l(1,e);var a=Math.max(s-r,1),i=Math.min(s+r,e),c=a>2,u=i<e-2,d=1,f=e;if(!c&&u){var p=l(1,3+2*r);return[].concat((0,o.Z)(p),["DOTS",e])}if(c&&!u){var h=l(e-(3+2*r)+1,e);return[d,"DOTS"].concat((0,o.Z)(h))}if(c&&u){var m=l(a,i);return[d,"DOTS"].concat((0,o.Z)(m),["DOTS",f])}}),[n,t,r,s])}({currentPage:t.page,totalCount:t.totalCount,pageSize:t.pageSize,siblingCount:i});if(0===t.page||p.length<1)return null;var h=p[p.length-1];return(0,d.jsxs)(u.Z,{className:f,children:[(0,d.jsx)(u.Z.First,{onClick:function(){r({search:n,pagination:(0,a.Z)((0,a.Z)({},t),{},{page:1})})}}),(0,d.jsx)(u.Z.Prev,{onClick:function(){t.page>1&&r({search:n,pagination:(0,a.Z)((0,a.Z)({},t),{},{page:t.page-1})})}}),p.map((function(e,s){return"DOTS"===e?(0,d.jsx)(u.Z.Ellipsis,{},s):t.page===e?(0,d.jsx)(u.Z.Item,{active:!0,onClick:function(){return r({search:n,pagination:(0,a.Z)((0,a.Z)({},t),{},{page:e})})},children:e},s):(0,d.jsx)(u.Z.Item,{onClick:function(){return r({search:n,pagination:(0,a.Z)((0,a.Z)({},t),{},{page:e})})},children:e},s)})),(0,d.jsx)(u.Z.Next,{onClick:function(){t.page<h&&r({search:n,pagination:(0,a.Z)((0,a.Z)({},t),{},{page:t.page+1})})}}),(0,d.jsx)(u.Z.Last,{onClick:function(){r({search:n,pagination:(0,a.Z)((0,a.Z)({},t),{},{page:h})})}})]})},p=function(e){var n=e.pageItems,t=void 0===n?[5,10,20,50,100]:n,o=e.columns,c=e.data,u=void 0===c?[]:c,l=e.options,p=void 0===l?{responsive:!0,bordered:!0,center:!0}:l,h=e.pagination,m=void 0===h?{page:1,totalCount:10,pageSize:10}:h,Z=e.sort,g=e.search,x=e.onChange,v=e.emptyText,j=void 0===v?"Empty data":v,y=e.onRow,b=void 0===y?function(){}:y;return(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"d-flex justify-content-between mb-3",children:[(0,d.jsx)(r.Z.Select,{size:"sm",style:{maxWidth:100},defaultValue:m.pageSize,onChange:function(e){return x({search:g,pagination:(0,a.Z)((0,a.Z)({},m),{},{pageSize:Number(e.target.value),page:1})})},children:t.map((function(e,n){return(0,d.jsx)("option",{value:e,children:e},n)}))}),(0,d.jsx)(r.Z.Control,{size:"sm",type:"text",placeholder:"Search...",style:{maxWidth:200},onKeyUp:function(e){return function(e){13===e.keyCode&&x({search:e.target.value,pagination:(0,a.Z)((0,a.Z)({},m),{},{page:1})})}(e)}})]}),(0,d.jsxs)(s.Z,{className:"datatable "+(p.center?"text-center":""),responsive:p.responsive,bordered:p.bordered,hover:!0,children:[(0,d.jsx)("thead",{children:(0,d.jsx)("tr",{children:o.map((function(e,n){return(0,d.jsxs)("th",{style:{width:e.width?e.width:"auto"},children:[e.name,!1!==e.sortable&&(0,d.jsxs)(i.Z,{className:"sort-btn",size:"sm",variant:"link",onClick:function(){return function(e,n){var t="asc";void 0===n?t="asc":"asc"===n.dir?t="desc":"desc"===n.dir&&(t="asc"),x({search:g,pagination:m,sort:{key:e,dir:t}})}(e.key,Z)},children:[("undefined"===typeof Z||Z.key!==e.key)&&(0,d.jsx)("i",{className:"fa fa-arrows-v"}),"undefined"!==typeof Z&&Z.key===e.key&&"asc"===Z.dir&&(0,d.jsx)("i",{className:"fa fa-long-arrow-up"}),"undefined"!==typeof Z&&Z.key===e.key&&"desc"===Z.dir&&(0,d.jsx)("i",{className:"fa fa-long-arrow-down"})]})]},n)}))})}),(0,d.jsx)("tbody",{children:u.length?u.map((function(e,n){return(0,d.jsx)("tr",{onClick:function(){return b(e._id)},children:o.map((function(t,a){return t.render?(0,d.jsx)("td",{children:t.render(e,n)},a):(0,d.jsx)("td",{children:e[t.key]},a)}))},n)})):(0,d.jsx)("tr",{children:(0,d.jsx)("td",{colSpan:o.length,className:"text-center text-danger",children:j})})})]}),(0,d.jsx)("div",{className:"d-flex align-items-center justify-content-end",children:(0,d.jsx)(f,{search:g,pagination:m,onChange:x})})]})}},86811:function(e,n,t){t.r(n);var a=t(74165),r=t(1413),s=t(15861),i=t(70885),o=t(72791),c=t(85239),u=t(45736),d=t(43360),l=t(9140),f=t(95316),p=t(26535),h=t(37009),m=t(9085),Z=t(57689),g=t(80184);n.default=function(){var e=(0,o.useState)(0),n=(0,i.Z)(e,2),t=n[0],x=n[1],v=(0,Z.s0)(),j=(0,o.useState)([]),y=(0,i.Z)(j,2),b=y[0],k=y[1],C=(0,o.useState)(""),N=(0,i.Z)(C,2),w=N[0],S=N[1],P=(0,o.useState)(),z=(0,i.Z)(P,2),T=z[0],A=z[1],B=(0,o.useState)({page:1,totalCount:0,pageSize:10}),D=(0,i.Z)(B,2),E=D[0],H=D[1],I=(0,o.useState)(0),O=(0,i.Z)(I,2),R=O[0],F=O[1],M=(0,o.useState)(1),L=(0,i.Z)(M,2),_=L[0],U=(L[1],(0,o.useState)(0)),K=(0,i.Z)(U,2),W=K[0],Y=K[1],q=(0,o.useState)(0),V=(0,i.Z)(q,2),G=V[0],J=V[1],Q=[{key:"_id",name:"No",width:65,render:function(e,n){return n+1}},{key:"firstName",name:"First name"},{key:"lastName",name:"Last name"},{key:"email",name:"Email"},{key:"status",name:"Status",render:function(e){return e.status?(0,g.jsx)(u.Z,{pill:!0,bg:"success",children:"Enabled"}):(0,g.jsx)(u.Z,{pill:!0,bg:"danger",children:"Disabled"})}},{key:"action",name:"Action",width:90,render:function(e){return(0,g.jsxs)("div",{children:[(0,g.jsx)(d.Z,{variant:"outline-success","data-tip":"Detail",size:"sm",className:"me-1",onClick:function(){return v("/admin/users/".concat(e._id))},children:(0,g.jsx)("i",{className:"fa fa-eye"})},"1"),(0,g.jsx)(d.Z,{variant:"outline-danger","data-tip":"Delete",size:"sm",onClick:function(){return $(e._id)},children:(0,g.jsx)("i",{className:"fa fa-trash"})},"2"),(0,g.jsx)(h.Z,{})]})},sortable:!1}];(0,o.useEffect)((function(){var e=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var n,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("admin/users",{params:{search:w,length:E.pageSize,page:E.page,sortKey:T?T.key:"",sortDir:T?T.dir:""}});case 2:n=e.sent,t=n.data,k(t.data),H((0,r.Z)((0,r.Z)({},E),{},{totalCount:t.totalCount}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t]);var X=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.put("admin/users/".concat(R),{status:_});case 2:n=e.sent,(r=n.data).success?(m.Am.success(r.msg),x(!t),Y(0)):m.Am.error(r.msg);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(e){F(e),J(1)},ee=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n){var r,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.delete("admin/users/".concat(R));case 2:r=e.sent,(s=r.data).status&&(m.Am.success(s.msg),x(!t),J(0));case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,g.jsxs)(l.Z,{children:[(0,g.jsx)(l.Z.Header,{style:{background:"#3c4b64"},bsPrefix:"card-header py-3",children:(0,g.jsx)(l.Z.Title,{as:"h1",bsPrefix:"mb-0 card-title text-light",style:{fontSize:24},children:"Users management"})}),(0,g.jsx)(l.Z.Body,{children:(0,g.jsx)(p.Z,{columns:Q,data:b,sort:T,search:w,pagination:E,onChange:function(e){var n=e.search,a=e.pagination,r=e.sort;A(r),S(n),H(a),x(!t)}})}),(0,g.jsxs)(f.Z,{show:W,onHide:function(){return Y(0)},children:[(0,g.jsx)(f.Z.Header,{closeButton:!0,children:(0,g.jsx)(f.Z.Title,{children:"Are you sure?"})}),(0,g.jsx)(f.Z.Body,{children:"Are you really going to change the user's status?"}),(0,g.jsxs)(f.Z.Footer,{children:[(0,g.jsx)(d.Z,{variant:"primary",onClick:function(){return X()},children:"Yes"}),(0,g.jsx)(d.Z,{variant:"danger",onClick:function(){return Y(0)},children:"No"})]})]}),(0,g.jsxs)(f.Z,{show:G,onHide:function(){return J(0)},children:[(0,g.jsx)(f.Z.Header,{closeButton:!0,children:(0,g.jsx)(f.Z.Title,{children:"Are you sure?"})}),(0,g.jsx)(f.Z.Body,{children:"Deleting is permanent and cannot be undone."}),(0,g.jsxs)(f.Z.Footer,{children:[(0,g.jsx)(d.Z,{variant:"primary",onClick:function(){return ee()},children:"Yes"}),(0,g.jsx)(d.Z,{variant:"danger",onClick:function(){return J(0)},children:"No"})]})]})]})}},85239:function(e,n,t){var a=t(61044),r=function(){return window.localStorage.getItem("token")?localStorage.getItem("token"):null},s=a.ZP.create({baseURL:"/api/v1/",timeout:15e3,headers:{Authorization:"Bearer ".concat(r())}});s.interceptors.request.use((function(e){return e.headers.Authorization="Bearer ".concat(r()),e})),s.interceptors.response.use((function(e){return e}),(function(e){return 401!==e.response.status&&403!==e.response.status&&406!==e.response.status||(window.localStorage.clear(),window.location.href="/login"),Promise.reject(e)})),n.Z=s},45736:function(e,n,t){var a=t(1413),r=t(45987),s=t(81694),i=t.n(s),o=t(72791),c=t(10162),u=t(80184),d=["bsPrefix","bg","pill","text","className","as"],l=o.forwardRef((function(e,n){var t=e.bsPrefix,s=e.bg,o=e.pill,l=e.text,f=e.className,p=e.as,h=void 0===p?"span":p,m=(0,r.Z)(e,d),Z=(0,c.vE)(t,"badge");return(0,u.jsx)(h,(0,a.Z)((0,a.Z)({ref:n},m),{},{className:i()(f,Z,o&&"rounded-pill",l&&"text-".concat(l),s&&"bg-".concat(s))}))}));l.displayName="Badge",l.defaultProps={bg:"primary",pill:!1},n.Z=l},9140:function(e,n,t){t.d(n,{Z:function(){return T}});var a=t(1413),r=t(45987),s=t(81694),i=t.n(s),o=t(72791),c=t(10162),u=t(66543),d=t(27472),l=t(80184),f=["bsPrefix","className","variant","as"],p=o.forwardRef((function(e,n){var t=e.bsPrefix,s=e.className,o=e.variant,u=e.as,d=void 0===u?"img":u,p=(0,r.Z)(e,f),h=(0,c.vE)(t,"card-img");return(0,l.jsx)(d,(0,a.Z)({ref:n,className:i()(o?"".concat(h,"-").concat(o):h,s)},p))}));p.displayName="CardImg";var h=p,m=t(96040),Z=["bsPrefix","className","as"],g=o.forwardRef((function(e,n){var t=e.bsPrefix,s=e.className,u=e.as,d=void 0===u?"div":u,f=(0,r.Z)(e,Z),p=(0,c.vE)(t,"card-header"),h=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:p}}),[p]);return(0,l.jsx)(m.Z.Provider,{value:h,children:(0,l.jsx)(d,(0,a.Z)((0,a.Z)({ref:n},f),{},{className:i()(s,p)}))})}));g.displayName="CardHeader";var x=g,v=["bsPrefix","className","bg","text","border","body","children","as"],j=(0,d.Z)("h5"),y=(0,d.Z)("h6"),b=(0,u.Z)("card-body"),k=(0,u.Z)("card-title",{Component:j}),C=(0,u.Z)("card-subtitle",{Component:y}),N=(0,u.Z)("card-link",{Component:"a"}),w=(0,u.Z)("card-text",{Component:"p"}),S=(0,u.Z)("card-footer"),P=(0,u.Z)("card-img-overlay"),z=o.forwardRef((function(e,n){var t=e.bsPrefix,s=e.className,o=e.bg,u=e.text,d=e.border,f=e.body,p=e.children,h=e.as,m=void 0===h?"div":h,Z=(0,r.Z)(e,v),g=(0,c.vE)(t,"card");return(0,l.jsx)(m,(0,a.Z)((0,a.Z)({ref:n},Z),{},{className:i()(s,g,o&&"bg-".concat(o),u&&"text-".concat(u),d&&"border-".concat(d)),children:f?(0,l.jsx)(b,{children:p}):p}))}));z.displayName="Card",z.defaultProps={body:!1};var T=Object.assign(z,{Img:h,Title:k,Subtitle:C,Body:b,Link:N,Text:w,Header:x,Footer:S,ImgOverlay:P})}}]);
//# sourceMappingURL=6811.f4f93b96.chunk.js.map