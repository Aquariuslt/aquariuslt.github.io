/*! For license information please see detail.8f766cc8dc3db682b6e3.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{202:function(e,t){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},203:function(e,t,n){var a=n(209),o="object"==typeof self&&self&&self.Object===Object&&self,r=a||o||Function("return this")();e.exports=r},204:function(e,t,n){var a=n(203).Symbol;e.exports=a},205:function(e,t,n){},206:function(e,t,n){var r=n(207),i=n(202);e.exports=function(e,t,n){var a=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(n)&&(a="leading"in n?!!n.leading:a,o="trailing"in n?!!n.trailing:o),r(e,t,{leading:a,maxWait:t,trailing:o})}},207:function(e,t,n){var v=n(202),y=n(208),w=n(210),O=Math.max,S=Math.min;e.exports=function(a,o,e){var r,i,n,c,l,s,d=0,u=!1,m=!1,t=!0;if("function"!=typeof a)throw new TypeError("Expected a function");function p(e){var t=r,n=i;return r=i=void 0,d=e,c=a.apply(n,t)}function f(e){var t=e-s;return void 0===s||o<=t||t<0||m&&n<=e-d}function b(){var e,t=y();if(f(t))return g(t);l=setTimeout(b,(e=o-(t-s),m?S(e,n-(t-d)):e))}function g(e){return l=void 0,t&&r?p(e):(r=i=void 0,c)}function h(){var e,t=y(),n=f(t);if(r=arguments,i=this,s=t,n){if(void 0===l)return d=e=s,l=setTimeout(b,o),u?p(e):c;if(m)return clearTimeout(l),l=setTimeout(b,o),p(s)}return void 0===l&&(l=setTimeout(b,o)),c}return o=w(o)||0,v(e)&&(u=!!e.leading,n=(m="maxWait"in e)?O(w(e.maxWait)||0,o):n,t="trailing"in e?!!e.trailing:t),h.cancel=function(){void 0!==l&&clearTimeout(l),r=s=i=l=void(d=0)},h.flush=function(){return void 0===l?c:g(y())},h}},208:function(e,t,n){var a=n(203);e.exports=function(){return a.Date.now()}},209:function(n,e,t){(function(e){var t="object"==typeof e&&e&&e.Object===Object&&e;n.exports=t}).call(this,t(63))},210:function(e,t,n){var a=n(202),o=n(211),r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=c.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):i.test(e)?NaN:+e}},211:function(e,t,n){var a=n(212),o=n(215);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==a(e)}},212:function(e,t,n){var a=n(204),o=n(213),r=n(214),i=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):r(e)}},213:function(e,t,n){var a=n(204),o=Object.prototype,r=o.hasOwnProperty,i=o.toString,c=a?a.toStringTag:void 0;e.exports=function(e){var t=r.call(e,c),n=e[c];try{var a=!(e[c]=void 0)}catch(e){}var o=i.call(e);return a&&(t?e[c]=n:delete e[c]),o}},214:function(e,t){var n=Object.prototype.toString;e.exports=function(e){return n.call(e)}},215:function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e}},216:function(e,t){e.exports=function(){}},217:function(o,r,e){(function(e){var t,n;function a(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),a=this;do{for(t=n.length;0<=--t&&n.item(t)!==a;);}while(t<0&&(a=a.parentElement));return a}),"function"!=typeof window.CustomEvent&&(a.prototype=window.Event.prototype,window.CustomEvent=a),function(){for(var r=0,e=["ms","moz","webkit","o"],t=0;t<e.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[e[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[t]+"CancelAnimationFrame"]||window[e[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),a=Math.max(0,16-(n-r)),o=window.setTimeout(function(){e(n+a)},a);return r=n+a,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),n=void 0!==e?e:"undefined"!=typeof window?window:this,void 0===(t=function(){return function(I){"use strict";function T(){var n={};return Array.prototype.forEach.call(arguments,function(e){for(var t in e){if(!e.hasOwnProperty(t))return;n[t]=e[t]}}),n}function r(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),a=n.length,o=-1,r="",i=n.charCodeAt(0);++o<a;){if(0===(t=n.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=1<=t&&t<=31||127==t||0===o&&48<=t&&t<=57||1===o&&48<=t&&t<=57&&45===i?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(o):"\\"+n.charAt(o)}return"#"+r}function N(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)}function L(e,t,n,a){if(t.emitEvents&&"function"==typeof I.CustomEvent){var o=new CustomEvent(e,{bubbles:!0,detail:{anchor:n,toggle:a}});document.dispatchEvent(o)}}var A={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0};return function(a,e){function t(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(o=e.target.closest(a))&&"a"===o.tagName.toLowerCase()&&!e.target.closest(j.ignore)&&o.hostname===I.location.hostname&&o.pathname===I.location.pathname&&/#/.test(o.href)){var t,n=r(o.hash);if("#"===n){if(!j.topOnEmptyHash)return;t=document.documentElement}else t=document.querySelector(n);(t=t||"#top"!==n?t:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var t=I.location.hash;t=t||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:t||I.pageYOffset},document.title,t||I.location.href)}}(j),k.animateScroll(t,o))}}function n(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(j)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||k.animateScroll(t,null,{updateURL:!1})}}var j,o,C,x,k={cancelScroll:function(e){cancelAnimationFrame(x),x=null,e||L("scrollCancel",j)},animateScroll:function(i,c,e){k.cancelScroll();var t,n,l=T(j||A,e||{}),s="[object Number]"===Object.prototype.toString.call(i),a=s||!i.tagName?null:i;if(s||a){var d=I.pageYOffset;l.header&&!C&&(C=document.querySelector(l.header));var o,r,u,m,p,f,b,g,h=(t=C)?(n=t,parseInt(I.getComputedStyle(n).height,10)+t.offsetTop):0,v=s?i:function(e,t,n,a){var o=0;if(e.offsetParent)for(;o+=e.offsetTop,e=e.offsetParent;);return o=Math.max(o-t-n,0),a&&(o=Math.min(o,N()-I.innerHeight)),o}(a,h,parseInt("function"==typeof l.offset?l.offset(i,c):l.offset,10),l.clip),y=v-d,w=N(),O=0,S=(o=y,u=(r=l).speedAsDuration?r.speed:Math.abs(o/1e3*r.speed),r.durationMax&&u>r.durationMax?r.durationMax:r.durationMin&&u<r.durationMin?r.durationMin:parseInt(u,10)),E=function(e){var t,n,a;O+=e-(m=m||e),f=d+y*(n=p=1<(p=0===S?0:O/S)?1:p,"easeInQuad"===(t=l).easing&&(a=n*n),"easeOutQuad"===t.easing&&(a=n*(2-n)),"easeInOutQuad"===t.easing&&(a=n<.5?2*n*n:(4-2*n)*n-1),"easeInCubic"===t.easing&&(a=n*n*n),"easeOutCubic"===t.easing&&(a=--n*n*n+1),"easeInOutCubic"===t.easing&&(a=n<.5?4*n*n*n:(n-1)*(2*n-2)*(2*n-2)+1),"easeInQuart"===t.easing&&(a=n*n*n*n),"easeOutQuart"===t.easing&&(a=1- --n*n*n*n),"easeInOutQuart"===t.easing&&(a=n<.5?8*n*n*n*n:1-8*--n*n*n*n),"easeInQuint"===t.easing&&(a=n*n*n*n*n),"easeOutQuint"===t.easing&&(a=1+--n*n*n*n*n),"easeInOutQuint"===t.easing&&(a=n<.5?16*n*n*n*n*n:1+16*--n*n*n*n*n),t.customEasing&&(a=t.customEasing(n)),a||n),I.scrollTo(0,Math.floor(f)),function(e,t){var n,a,o,r=I.pageYOffset;if(e==t||r==t||(d<t&&I.innerHeight+r)>=w)return k.cancelScroll(!0),a=t,o=s,0===(n=i)&&document.body.focus(),o||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),I.scrollTo(0,a)),L("scrollStop",l,i,c),!(x=m=null)}(f,v)||(x=I.requestAnimationFrame(E),m=e)};0===I.pageYOffset&&I.scrollTo(0,0),b=i,g=l,s||history.pushState&&g.updateURL&&history.pushState({smoothScroll:JSON.stringify(g),anchor:b.id},document.title,b===document.documentElement?"#top":"#"+b.id),"matchMedia"in I&&I.matchMedia("(prefers-reduced-motion)").matches?I.scrollTo(0,Math.floor(v)):(L("scrollStart",l,i,c),k.cancelScroll(!0),I.requestAnimationFrame(E))}}};return k.destroy=function(){j&&(document.removeEventListener("click",t,!1),I.removeEventListener("popstate",n,!1),k.cancelScroll(),x=C=o=j=null)},function(){if(!("querySelector"in document&&"addEventListener"in I&&"requestAnimationFrame"in I&&"closest"in I.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";k.destroy(),j=T(A,e||{}),C=j.header?document.querySelector(j.header):null,document.addEventListener("click",t,!1),j.updateURL&&j.popstate&&I.addEventListener("popstate",n,!1)}(),k}}(n)}.apply(r,[]))||(o.exports=t)}).call(this,e(63))},220:function(e,t,n){"use strict";n.r(t);function a(a){function o(){var e=document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.firstChild&&e.removeChild(e.firstChild)}function r(){return function(){this.page.identifier=i.identifier,this.page.url=i.url,this.page.title=a.title}}function e(){var e,t;e=document.body,(t=window.document.getElementById("dsq-embed-scr"))&&e.removeChild(t),window.DISQUS&&(window.DISQUS.reset(),window.DISQUS=void 0,o())}var i=Object.assign({},c,a);return Object(f.useEffect)(function(){return setTimeout(function(){var e,t,n;window.DISQUS&&document.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:r()}):(o(),a.shortname&&(window.disqus_config=r(),window.disqus_shortname=i.shortname,e="https://"+i.shortname+".disqus.com/embed.js",t=document.body,(n=window.document.createElement("script")).async=!0,n.src=e,n.id="dsq-embed-scr",t.appendChild(n)))},i.defer),e},[a.identifier]),Object(f.createElement)("div",{id:"disqus_thread"})}function o(e){var t=j();return f.createElement(E,{className:t.root,label:e.label,component:l.b,to:e.link,clickable:!0})}function u(e){var t=x();return f.createElement("div",{className:t.root},f.createElement(C.a,{image:e.cover,alt:e.title,className:t.cover}),f.createElement(d.a,{component:"div",className:"markdown-body",dangerouslySetInnerHTML:{__html:e.html||""}}),f.createElement("div",{className:t.divider}),e.tags&&e.tags.map(function(e){return f.createElement(o,Object(p.a)({key:e.id},e))}),f.createElement(a,Object(p.a)({title:e.title},e.disqus)))}function m(i){var e,t,n=Object(L.a)(),a=Q(),o=f.useState(null),c=o[0],l=o[1],r=f.useCallback(function(){for(var e,n,t,a=(e=i.items&&i.items[0],(n=function(e){if(e.children){var t=[e.id];return e.children.forEach(function(e){t=t.concat(n(e))}),t}return[e.id]})(e)),o=a.length-1;0<=o&&!(document.documentElement.scrollTop<200);o--){var r=document.getElementById(a[o]);if(r&&r.offsetTop<document.documentElement.scrollTop+document.documentElement.clientHeight/8){t=r;break}}t&&c!==t.id?l(t.id):0<a.length&&l(a[0])},[i]);e=r,t=f.useMemo(function(){return e?I()(e,166):N.a},[e,166]),f.useEffect(function(){if(t!==N.a)return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t),t.cancel()}},[t]);var s=function(e){return f.createElement(f.Fragment,null,f.createElement(d.a,{onClick:(t=e.id,function(){(new U.a).animateScroll(document.getElementById(t))}),component:"li",className:Object(R.a)(a.item,c===e.id?a.active:void 0),style:{paddingLeft:n.spacing(e.level)}},e.label),0<e.children.length&&f.createElement(d.a,{component:"ol",className:a.ul},e.children.map(function(e){return f.createElement(s,Object(p.a)({key:e.id},e))})));var t};return f.createElement("nav",{className:a.root},i.items.map(function(e){return f.createElement(s,Object(p.a)({key:e.id},e))}))}var p=n(6),f=n(0),q=n.n(f),b=n(47),r=n(54),i=n(93),g=n(33),h=n(15),v=n(48),d=(n(205),n(45)),y=n(18),c={identifier:"",url:"",shortname:"",defer:4e3},l=n(23),$=n(1),M=n(2),R=(n(4),n(3)),s=n(77),P=Object(s.a)(q.a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),w=n(5),O=n(20),F=n(8),D=n(7),H=n(62),S=q.a.forwardRef(function(e,t){function n(e){e.stopPropagation(),g&&g(e)}var a=e.avatar,o=e.classes,r=e.className,i=e.clickable,c=e.color,l=void 0===c?"default":c,s=e.component,d=e.deleteIcon,u=e.disabled,m=void 0!==u&&u,p=e.icon,f=e.label,b=e.onClick,g=e.onDelete,h=e.onKeyUp,v=e.size,y=void 0===v?"medium":v,w=e.variant,O=void 0===w?"default":w,S=Object(M.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyUp","size","variant"]),E=q.a.useRef(null),j=Object(F.a)(E,t),C=!(!1===i||!b)||i,x="small"===y,k=s||(C?H.a:"div"),I=k===H.a?{component:"div"}:{},T=null;if(g){var N=Object(R.a)("default"!==l&&("default"===O?o["deleteIconColor".concat(Object(D.a)(l))]:o["deleteIconOutlinedColor".concat(Object(D.a)(l))]),x&&o.deleteIconSmall);T=d&&q.a.isValidElement(d)?q.a.cloneElement(d,{className:Object(R.a)(d.props.className,o.deleteIcon,N),onClick:n}):q.a.createElement(P,{className:Object(R.a)(o.deleteIcon,N),onClick:n})}var L=null;a&&q.a.isValidElement(a)&&(L=q.a.cloneElement(a,{className:Object(R.a)(o.avatar,a.props.className,x&&o.avatarSmall,"default"!==l&&o["avatarColor".concat(Object(D.a)(l))])}));var A=null;return p&&q.a.isValidElement(p)&&(A=q.a.cloneElement(p,{className:Object(R.a)(o.icon,p.props.className,x&&o.iconSmall,"default"!==l&&o["iconColor".concat(Object(D.a)(l))])})),q.a.createElement(k,Object($.a)({role:C||g?"button":void 0,className:Object(R.a)(o.root,r,"default"!==l&&[o["color".concat(Object(D.a)(l))],C&&o["clickableColor".concat(Object(D.a)(l))],g&&o["deletableColor".concat(Object(D.a)(l))]],"default"!==O&&[o.outlined,{primary:o.outlinedPrimary,secondary:o.outlinedSecondary}[l]],m&&o.disabled,x&&o.sizeSmall,C&&o.clickable,g&&o.deletable),"aria-disabled":!!m||void 0,tabIndex:C||g?0:void 0,onClick:b,onKeyUp:function(e){if(h&&h(e),e.currentTarget===e.target){var t=e.key;!g||"Backspace"!==t&&"Delete"!==t?"Escape"===t&&E.current&&E.current.blur():g(e)}},ref:j},I,S),L||A,q.a.createElement("span",{className:Object(R.a)(o.label,x&&o.labelSmall)},f),T)}),E=Object(w.a)(function(e){var t="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],n=Object(O.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(t),backgroundColor:t,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(O.b)(t,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(O.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(O.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(O.b)(t,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(O.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(O.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(O.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(O.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(O.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{display:"flex",alignItems:"center",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:n,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(O.c)(n,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(O.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(O.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(O.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(O.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}},{name:"MuiChip"})(S),j=Object(r.a)(function(e){return Object(i.a)({root:{margin:e.spacing(1,.5)}})}),C=n(76),x=Object(r.a)(function(e){var t;return Object(i.a)({root:(t={margin:e.spacing(0),maxWidth:y.a,width:"100%",padding:e.spacing(0,2)},t[e.breakpoints.down("sm")]={padding:e.spacing(1)},t),cover:{width:"100%",maxWidth:"100%"},divider:{marginTop:e.spacing(2)}})}),k=n(206),I=n.n(k),T=n(216),N=n.n(T),L=n(30),A=n(217),U=n.n(A),Q=Object(r.a)(function(e){var t;return Object(i.a)({root:(t={width:y.b,flexShrink:0,order:2,position:"fixed",overflowX:"hidden",overflowY:"auto",overflowWrap:"break-word",padding:e.spacing(1),display:"none"},t[e.breakpoints.up("md")]={display:"block"},t.listStyleType="none",t),contents:{marginTop:e.spacing(2),paddingLeft:e.spacing(1.5)},ul:{padding:0,margin:0,listStyleType:"none"},item:{fontSize:13,padding:e.spacing(.5,0,.5,1),borderLeft:"4px solid transparent",boxSizing:"content-box","&:hover":{borderLeft:"4px solid "+e.palette.grey[200],cursor:"pointer"},"&$active,&:active":{borderLeft:"4px solid "+e.palette.grey[800]}},active:{}})}),z=n(186);n.d(t,"Detail",function(){return J});var W=Object(r.a)(function(e){var t,n,a;return Object(i.a)({root:(t={display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,paddingTop:e.spacing(1)},t[e.breakpoints.down("sm")]={padding:e.spacing(1)},t),toc:(n={display:"flex",flexWrap:"wrap",justifyContent:"flex-end",overflow:"hidden",backgroundColor:e.palette.background.paper},n[e.breakpoints.up("md")]={width:y.b},n),content:(a={padding:0,margin:0},a[e.breakpoints.down("sm")]={display:"flex",flexWrap:"wrap",overflow:"hidden"},a)})}),J=function(n){var e=W(),t=Object(f.useState)(h.a),a=t[0],o=t[1],r=Object(f.useState)([]),i=r[0],c=r[1],l=Object(f.useState)([]),s=l[0],d=l[1];return Object(f.useEffect)(function(){Object(p.b)(void 0,void 0,void 0,function(){var t;return Object(p.c)(this,function(e){switch(e.label){case 0:return[4,Object(g.a)(n.apiPath)];case 1:return t=e.sent(),o(t),c(t.metas),d(t.data.toc),[2]}})})},[n.apiPath]),f.createElement(z.a,{className:e.root},f.createElement(b.Helmet,null,f.createElement("title",null,a.title),f.createElement("script",{type:y.c},JSON.stringify(a.breadcrumbs)),i.map(function(e,t){return f.createElement("meta",Object(p.a)({key:t},e))})),f.createElement("div",{className:e.content},f.createElement(v.a,Object(p.a)({},a.breadcrumbs)),f.createElement(u,Object(p.a)({},a.data))),f.createElement("div",{className:e.toc},f.createElement(m,{items:s})))};t.default=J}}]);
//# sourceMappingURL=detail.8f766cc8dc3db682b6e3.js.map