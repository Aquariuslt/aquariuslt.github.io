(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{251:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},252:function(e,t,n){var o=n(258),a="object"==typeof self&&self&&self.Object===Object&&self,r=o||a||Function("return this")();e.exports=r},253:function(e,t,n){var o=n(252).Symbol;e.exports=o},254:function(e,t,n){},255:function(e,t,n){var r=n(256),i=n(251);e.exports=function(e,t,n){var o=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),r(e,t,{leading:o,maxWait:t,trailing:a})}},256:function(e,t,n){var v=n(251),y=n(257),w=n(259),O=Math.max,j=Math.min;e.exports=function(o,a,e){var r,i,n,c,l,d,s=0,u=!1,p=!1,t=!0;if("function"!=typeof o)throw new TypeError("Expected a function");function m(e){var t=r,n=i;return r=i=void 0,s=e,c=o.apply(n,t)}function f(e){var t=e-d;return void 0===d||a<=t||t<0||p&&n<=e-s}function b(){var e,t=y();if(f(t))return g(t);l=setTimeout(b,(e=a-(t-d),p?j(e,n-(t-s)):e))}function g(e){return l=void 0,t&&r?m(e):(r=i=void 0,c)}function h(){var e,t=y(),n=f(t);if(r=arguments,i=this,d=t,n){if(void 0===l)return s=e=d,l=setTimeout(b,a),u?m(e):c;if(p)return clearTimeout(l),l=setTimeout(b,a),m(d)}return void 0===l&&(l=setTimeout(b,a)),c}return a=w(a)||0,v(e)&&(u=!!e.leading,n=(p="maxWait"in e)?O(w(e.maxWait)||0,a):n,t="trailing"in e?!!e.trailing:t),h.cancel=function(){void 0!==l&&clearTimeout(l),r=d=i=l=void(s=0)},h.flush=function(){return void 0===l?c:g(y())},h}},257:function(e,t,n){var o=n(252);e.exports=function(){return o.Date.now()}},258:function(n,e,t){(function(e){var t="object"==typeof e&&e&&e.Object===Object&&e;n.exports=t}).call(this,t(87))},259:function(e,t,n){var o=n(251),a=n(260),r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(a(e))return NaN;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=c.test(e);return n||l.test(e)?d(e.slice(2),n?2:8):i.test(e)?NaN:+e}},260:function(e,t,n){var o=n(261),a=n(264);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==o(e)}},261:function(e,t,n){var o=n(253),a=n(262),r=n(263),i=o?o.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":(i&&i in Object(e)?a:r)(e)}},262:function(e,t,n){var o=n(253),a=Object.prototype,r=a.hasOwnProperty,i=a.toString,c=o?o.toStringTag:void 0;e.exports=function(e){var t=r.call(e,c),n=e[c];try{var o=!(e[c]=void 0)}catch(e){}var a=i.call(e);return o&&(t?e[c]=n:delete e[c]),a}},263:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},264:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},265:function(e,t){e.exports=function(){}},268:function(e,t,n){"use strict";n.r(t),n.d(t,"Detail",function(){return A});function o(o){function a(){var e=document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)console.debug("cleaning disqus thread element"),e.firstChild&&e.removeChild(e.firstChild)}function r(){return function(){this.page.identifier=i.identifier,this.page.url=i.url,this.page.title=o.title}}function e(){var e,t,n;e=document.body,(t=document.getElementById("dsq-embed-scr"))&&e.removeChild(t),window.DISQUS&&(window.DISQUS.reset(),window.DISQUS=void 0,a(),(n=document.querySelectorAll("iframe[id^=dsq-app]"))&&(console.debug("cleaning disqus preload frame (dsq-app) element"),n.forEach(function(e,t,n){e.parentElement.removeChild(e)})))}var i=Object.assign({},d,o);return Object(R.useEffect)(function(){return setTimeout(function(){var e,t,n;window.DISQUS&&document.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:r()}):(a(),o.shortname&&(window.disqus_config=r(),window.disqus_shortname=i.shortname,e="https://"+i.shortname+".disqus.com/embed.js",t=document.body,(n=document.createElement("script")).async=!0,n.src=e,n.id="dsq-embed-scr",t.appendChild(n)))},i.defer),e},[o.identifier]),Object(R.createElement)("div",{id:"disqus_thread"})}function a(e){var t=k();return R.createElement(j,{className:t.root,label:e.label,component:s.b,to:e.link,clickable:!0})}function r(e){var t=x();return i.a.createElement("div",{className:t.root},i.a.createElement("img",{src:"https://views.show/svg?key="+e.vkey+"&x=0%25&y=10%25",alt:"views show"}))}function u(e){var t=C();return R.createElement("div",{className:t.root},R.createElement(S.a,{image:e.cover,alt:e.title,className:t.cover,lazy:!1}),R.createElement(E.a,{component:"div",className:"markdown-body",dangerouslySetInnerHTML:{__html:e.html||""}}),R.createElement("div",{className:t.divider}),e.id&&R.createElement(r,{vkey:e.id}),e.tags&&e.tags.map(function(e){return R.createElement(a,Object(h.a)({key:e.id},e))}),R.createElement(o,Object(h.a)({title:e.title},e.disqus)))}var h=n(10),R=n(0),i=n.n(R),p=n(62),c=n(82),l=n(83),m=n(45),f=n(20),b=n(63),g=(n(254),n(29)),d={identifier:"",url:"",shortname:"",defer:4e3},s=n(31),z=n(1),H=n(2),q=(n(4),n(3)),v=n(98),M=Object(v.a)(R.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),y=n(5),w=n(12),P=n(9),B=n(6),U=n(75),O=R.forwardRef(function(e,t){function n(e){e.stopPropagation(),h&&h(e)}function o(e){return"Backspace"===e.key||"Delete"===e.key}var a=e.avatar,r=e.classes,i=e.className,c=e.clickable,l=e.color,d=void 0===l?"default":l,s=e.component,u=e.deleteIcon,p=e.disabled,m=void 0!==p&&p,f=e.icon,b=e.label,g=e.onClick,h=e.onDelete,v=e.onKeyDown,y=e.onKeyUp,w=e.size,O=void 0===w?"medium":w,j=e.variant,k=void 0===j?"default":j,x=Object(H.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),S=R.useRef(null),E=Object(P.a)(S,t),C=!(!1===c||!g)||c,T="small"===O,I=s||(C?U.a:"div"),N=I===U.a?{component:"div"}:{},$=null;if(h){var W=Object(q.a)("default"!==d&&("default"===k?r["deleteIconColor".concat(Object(B.a)(d))]:r["deleteIconOutlinedColor".concat(Object(B.a)(d))]),T&&r.deleteIconSmall);$=u&&R.isValidElement(u)?R.cloneElement(u,{className:Object(q.a)(u.props.className,r.deleteIcon,W),onClick:n}):R.createElement(M,{className:Object(q.a)(r.deleteIcon,W),onClick:n})}var L=null;a&&R.isValidElement(a)&&(L=R.cloneElement(a,{className:Object(q.a)(r.avatar,a.props.className,T&&r.avatarSmall,"default"!==d&&r["avatarColor".concat(Object(B.a)(d))])}));var D=null;return f&&R.isValidElement(f)&&(D=R.cloneElement(f,{className:Object(q.a)(r.icon,f.props.className,T&&r.iconSmall,"default"!==d&&r["iconColor".concat(Object(B.a)(d))])})),R.createElement(I,Object(z.a)({role:C||h?"button":void 0,className:Object(q.a)(r.root,i,"default"!==d&&[r["color".concat(Object(B.a)(d))],C&&r["clickableColor".concat(Object(B.a)(d))],h&&r["deletableColor".concat(Object(B.a)(d))]],"default"!==k&&[r.outlined,{primary:r.outlinedPrimary,secondary:r.outlinedSecondary}[d]],m&&r.disabled,T&&r.sizeSmall,C&&r.clickable,h&&r.deletable),"aria-disabled":!!m||void 0,tabIndex:C||h?0:void 0,onClick:g,onKeyDown:function(e){o(e)&&e.preventDefault(),v&&v(e)},onKeyUp:function(e){y&&y(e),e.currentTarget===e.target&&(h&&o(e)?h(e):"Escape"===e.key&&S.current&&S.current.blur())},ref:E},N,x),L||D,R.createElement("span",{className:Object(q.a)(r.label,T&&r.labelSmall)},b),$)}),j=Object(y.a)(function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],n=Object(w.d)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(w.c)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(w.c)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(w.c)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(w.c)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(w.c)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(w.c)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(w.d)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(w.d)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(w.d)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:n,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(w.d)(n,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(w.d)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(w.d)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(w.d)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(w.d)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}},{name:"MuiChip"})(O),k=Object(c.a)(function(e){return Object(l.a)({root:{margin:e.spacing(1,.5)}})}),x=Object(c.a)(function(e){return Object(l.a)({root:{margin:e.spacing(1,.5),height:30}})}),S=n(103),E=n(59),C=Object(c.a)(function(e){var t;return Object(l.a)({root:((t={margin:e.spacing(0),maxWidth:g.a,width:"100%",padding:e.spacing(0,2)})[e.breakpoints.down("sm")]={padding:e.spacing(1)},t),cover:{width:"100%",maxWidth:"100%"},divider:{marginTop:e.spacing(2)}})}),T=n(255),I=n.n(T),N=n(265),$=n.n(N);function _(e){return null!=e&&"object"==typeof e&&1===e.nodeType}function W(e,t){return(!t||"hidden"!==e)&&"visible"!==e&&"clip"!==e}function Q(e,t){if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){var n=getComputedStyle(e,null);return W(n.overflowY,t)||W(n.overflowX,t)||(o=e.ownerDocument&&e.ownerDocument.defaultView?e.ownerDocument.defaultView.frameElement:null)&&(o.clientHeight<e.scrollHeight||o.clientWidth<e.scrollWidth)}var o}function X(e,t,n,o,a,r,i,c){return r<e&&t<i||e<r&&i<t?0:r<=e&&c<=n||t<=i&&n<=c?r-e-o:t<i&&c<n||r<e&&n<c?i-t+a:0}function L(e,t){var n=t.scrollMode,o=t.block,a=t.inline,r=t.boundary,i=t.skipOverflowHiddenElements,c="function"==typeof r?r:function(e){return e!==r};if(!_(e))throw new TypeError("Invalid target");for(var l=document.scrollingElement||document.documentElement,d=[],s=e;_(s)&&c(s);){if((s=s.parentNode)===l){d.push(s);break}s===document.body&&Q(s)&&!Q(document.documentElement)||Q(s,i)&&d.push(s)}for(var u=window.visualViewport?visualViewport.width:innerWidth,p=window.visualViewport?visualViewport.height:innerHeight,m=window.scrollX||pageXOffset,f=window.scrollY||pageYOffset,b=e.getBoundingClientRect(),g=b.height,h=b.width,v=b.top,y=b.right,w=b.bottom,O=b.left,j="start"===o||"nearest"===o?v:"end"===o?w:v+g/2,k="center"===a?O+h/2:"end"===a?y:O,x=[],S=0;S<d.length;S++){var E=d[S],C=E.getBoundingClientRect(),T=C.height,I=C.width,N=C.top,$=C.right,W=C.bottom,L=C.left;if("if-needed"===n&&0<=v&&0<=O&&w<=p&&y<=u&&N<=v&&w<=W&&L<=O&&y<=$)return x;var D=getComputedStyle(E),R=parseInt(D.borderLeftWidth,10),z=parseInt(D.borderTopWidth,10),H=parseInt(D.borderRightWidth,10),q=parseInt(D.borderBottomWidth,10),M=0,P=0,B="offsetWidth"in E?E.offsetWidth-E.clientWidth-R-H:0,U="offsetHeight"in E?E.offsetHeight-E.clientHeight-z-q:0;if(l===E)M="start"===o?j:"end"===o?j-p:"nearest"===o?X(f,f+p,p,z,q,f+j,f+j+g,g):j-p/2,P="start"===a?k:"center"===a?k-u/2:"end"===a?k-u:X(m,m+u,u,R,H,m+k,m+k+h,h),M=Math.max(0,M+f),P=Math.max(0,P+m);else{M="start"===o?j-N-z:"end"===o?j-W+q+U:"nearest"===o?X(N,W,T,z,q+U,j,j+g,g):j-(N+T/2)+U/2,P="start"===a?k-L-R:"center"===a?k-(L+I/2)+B/2:"end"===a?k-$+H+B:X(L,$,I,R,H+B,k,k+h,h);var V=E.scrollLeft,K=E.scrollTop;j+=K-(M=Math.max(0,Math.min(K+M,E.scrollHeight-T+U))),k+=V-(P=Math.max(0,Math.min(V+P,E.scrollWidth-I+B)))}x.push({el:E,top:M,left:P})}return x}function D(e){return e===Object(e)&&0!==Object.keys(e).length}function V(i){function n(t){return function(){u(!0),-1!==m&&clearTimeout(m),c!==t&&l(t),function(e,t){var n,o=!e.ownerDocument.documentElement.contains(e);if(D(t)&&"function"==typeof t.behavior)return t.behavior(o?[]:L(e,t));if(!o){var a=!1===(n=t)?{block:"end",inline:"nearest"}:D(n)?n:{block:"start",inline:"nearest"};(function(e,a){void 0===a&&(a="auto");var r="scrollBehavior"in document.body.style;e.forEach(function(e){var t=e.el,n=e.top,o=e.left;t.scroll&&r?t.scroll({top:n,left:o,behavior:a}):(t.scrollTop=n,t.scrollLeft=o)})})(L(e,a),a.behavior)}}(document.getElementById(t),{behavior:"smooth"}),history.pushState&&history.pushState({anchor:t},document.title,"#"+t);var e=setTimeout(function(){u(!1),f(-1)},4100);f(e)}}var e,t,o=Object(K.a)(),a=Y(),r=R.useState(null),c=r[0],l=r[1],d=R.useState(!1),s=d[0],u=d[1],p=R.useState(-1),m=p[0],f=p[1],b=R.useCallback(function(){if(!(i.items.length<=0)){for(var e,n,t,o=(e=i.items[0],(n=function(e){if(e&&e.children){var t=[e.id];return e.children.forEach(function(e){t=t.concat(n(e))}),t}return[e.id]})(e)),a=o.length-1;0<=a&&!(document.documentElement.scrollTop<200);a--){var r=document.getElementById(o[a]);if(r&&r.offsetTop<document.documentElement.scrollTop+document.documentElement.clientHeight/8){t=r;break}}t&&c!==t.id&&l(t.id)}},[i.items]);function g(e){var t=0===e.position;return R.createElement(E.a,{onClick:n(e.id),component:"li",className:Object(q.a)(t?a.title:a.item,c===e.id?a.active:void 0),style:{paddingLeft:o.spacing(e.level)}},t?"Contents":e.label)}return e=s?null:b,t=R.useMemo(function(){return e?I()(e,166):$.a},[e,166]),R.useEffect(function(){if(t!==$.a)return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t),t.cancel()}},[t]),R.createElement("nav",{className:a.root},R.createElement("ol",{className:a.ol},i.items.map(function(e){return R.createElement(g,Object(h.a)({key:e.id},e))})))}var K=n(23),Y=Object(c.a)(function(e){var t;return Object(l.a)({root:((t={width:g.b,flexShrink:0,order:2,position:"fixed",overflowX:"hidden",overflowY:"auto",overflowWrap:"break-word",padding:e.spacing(1),display:"none"})[e.breakpoints.up("md")]={display:"block"},t.listStyleType="none",t),contents:{marginTop:e.spacing(2),paddingLeft:e.spacing(1.5)},title:{fontSize:14,padding:e.spacing(1,0,.5,1),boxSizing:"content-box"},ol:{padding:0,margin:0,listStyleType:"none"},item:{fontSize:13,padding:e.spacing(.5,0,.5,1),borderLeft:"4px solid transparent",boxSizing:"content-box","&:hover":{borderLeft:"4px solid "+e.palette.grey[200],cursor:"pointer"},"&$active,&:active":{borderLeft:"4px solid "+e.palette.grey[400]}},active:{}})}),F=n(233),J=Object(c.a)(function(e){var t,n,o;return Object(l.a)({root:((t={display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,paddingTop:e.spacing(1)})[e.breakpoints.down("sm")]={padding:e.spacing(1)},t),toc:((n={display:"flex",flexWrap:"wrap",justifyContent:"flex-end",overflow:"hidden",backgroundColor:e.palette.background.paper})[e.breakpoints.up("md")]={width:g.b},n),content:((o={padding:0,margin:0})[e.breakpoints.down("sm")]={display:"flex",flexWrap:"wrap",overflow:"hidden"},o)})}),A=function(n){var e=J(),t=Object(R.useState)(f.EmptyRouteMeta),o=t[0],a=t[1],r=Object(R.useState)([]),i=r[0],c=r[1],l=Object(R.useState)([]),d=l[0],s=l[1];return Object(R.useEffect)(function(){Object(h.b)(void 0,void 0,void 0,function(){var t;return Object(h.c)(this,function(e){switch(e.label){case 0:return[4,Object(m.a)(n.apiPath)];case 1:return t=e.sent(),a(t),c(t.metas),s(t.data.toc),[2]}})})},[n.apiPath]),R.createElement(F.a,{className:e.root},R.createElement(p.Helmet,null,R.createElement("title",null,o.title),R.createElement("script",{type:g.c},JSON.stringify(o.breadcrumbs)),i.map(function(e,t){return R.createElement("meta",Object(h.a)({key:t},e))})),R.createElement("div",{className:e.content},R.createElement(b.a,Object(h.a)({},o.breadcrumbs)),R.createElement(u,Object(h.a)({},o.data))),R.createElement("div",{className:e.toc},R.createElement(V,{items:d})))};t.default=A}}]);
//# sourceMappingURL=detail.f11a6c9931f9746f9141.js.map