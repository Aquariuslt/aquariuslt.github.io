!function(l){function e(e){for(var t,a,n=e[0],r=e[1],i=e[2],o=0,c=[];o<n.length;o++)a=n[o],Object.prototype.hasOwnProperty.call(m,a)&&m[a]&&c.push(m[a][0]),m[a]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(l[t]=r[t]);for(A&&A(e);c.length;)c.shift()();return s.push.apply(s,i||[]),u()}function u(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==m[i]&&(n=!1)}n&&(s.splice(t--,1),e=p(p.s=a[0]))}return e}var a={},d={1:0},m={1:0},s=[];function p(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,p),t.l=!0,t.exports}p.e=function(s){var e=[];d[s]?e.push(d[s]):0!==d[s]&&{0:1}[s]&&e.push(d[s]=new Promise(function(e,n){for(var t="static/css/"+({0:"detail"}[s]||s)+"."+{0:"1b0dcfa4e0329f2353e1"}[s]+".css",r=p.p+t,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var o=(l=a[i]).getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(o===t||o===r))return e()}var c=document.getElementsByTagName("style");for(i=0;i<c.length;i++){var l;if((o=(l=c[i]).getAttribute("data-href"))===t||o===r)return e()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var t=e&&e.target&&e.target.src||r,a=new Error("Loading CSS chunk "+s+" failed.\n("+t+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=t,delete d[s],u.parentNode.removeChild(u),n(a)},u.href=r,document.getElementsByTagName("head")[0].appendChild(u)}).then(function(){d[s]=0}));var a=m[s];if(0!==a)if(a)e.push(a[2]);else{var t=new Promise(function(e,t){a=m[s]=[e,t]});e.push(a[2]=t);var n,r=document.createElement("script");r.charset="utf-8",r.timeout=120,p.nc&&r.setAttribute("nonce",p.nc),r.src=p.p+"static/js/"+({0:"detail"}[s]||s)+"."+{0:"1b0dcfa4e0329f2353e1"}[s]+".js";var i=new Error;n=function(e){r.onerror=r.onload=null,clearTimeout(o);var t=m[s];if(0!==t){if(t){var a=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;i.message="Loading chunk "+s+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,t[1](i)}m[s]=void 0}};var o=setTimeout(function(){n({type:"timeout",target:r})},12e4);r.onerror=r.onload=n,document.head.appendChild(r)}return Promise.all(e)},p.m=l,p.c=a,p.d=function(e,t,a){p.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.t=function(t,e){if(1&e&&(t=p(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(p.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)p.d(a,n,function(e){return t[e]}.bind(null,n));return a},p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,"a",t),t},p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},p.p="/",p.oe=function(e){throw console.error(e),e};var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var A=n;s.push([149,2]),u()}({100:function(e,t,a){"use strict";"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/service-worker.js").then(function(e){console.log("SW registered: ",e)}).catch(function(e){console.error("SW register failed:",e)})});var n=document.getElementById("google-analytics");n&&(window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date,window.ga("create",n.getAttribute("content"),"auto"),window.ga("send","pageview"))},13:function(e,t,a){"use strict";var n,r,i;Object.defineProperty(t,"__esModule",{value:!0}),t.RoutesPathRegex={HOME:"/",POSTS:"/posts",POST_DETAIL:"/posts/:year/:month/:date/:id",PAGE_DETAIL:"/pages/:id",TAGS:"/tags",TAG_DETAIL:"/tags/:id",CATEGORIES:"/categories",CATEGORY_DETAIL:"/categories/:id"},(i=t.RoutePathPrefix||(t.RoutePathPrefix={})).HOME="",i.HOME_ALIAS="home",i.TAGS="tags",i.CATEGORIES="categories",i.POSTS="posts",i.PAGES="pages",i.NAVIGATION="navigation",i.PROFILE="profile",t.EmptyRouteMeta={breadcrumbs:{},key:"",path:"",title:"",type:"",url:""},(r=t.MetaName||(t.MetaName={})).DESCRIPTION="description",r.AUTHOR="author",r.OPEN_GRAPH_TITLE="og:title",r.OPEN_GRAPH_DESCRIPTION="og:description",r.OPEN_GRAPH_IMAGE="og:image",r.OPEN_GRAPH_URL="og:url",r.OPEN_GRAPH_TYPE="og:type",r.OPEN_GRAPH_SITE_NAME="og:site_name",r.GOOGLE_SITE_VERIFICATION="google-site-verification",r.GOOGLE_SITE_TRACKING="google-analytics",(n=t.MetaValue||(t.MetaValue={})).WEBSITE="website",n.ARTICLE="article"},149:function(e,t,a){"use strict";a.r(t),a(99),a(100);function n(e){new R.a({elements_selector:".lazy"}).update();var t=e.image?e.image.replace(".png",".webp"):"";return f.createElement("picture",null,f.createElement("source",{"data-srcset":t,type:"image/webp","data-was-processed":!1}),f.createElement("img",{alt:e.alt,className:Object(S.a)(e.className,"lazy"),src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABkAAAAJWAQMAAAA6AtlxAAAAA1BMVEX///+nxBvIAAAAi0lEQVR42u3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wbVlQABttAC+QAAAABJRU5ErkJggg==","data-src":e.image}))}function A(e){var t=_();return f.createElement(k.a,{className:t.card},f.createElement(T.a,{component:m.b,to:String(e.link)},f.createElement(n,{className:t.media,image:e.cover,alt:e.title}),f.createElement(N.a,null,f.createElement(I.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),f.createElement(I.a,{variant:"body2",color:"textSecondary",component:"p"},e.summary))))}function r(a){var e=G(),t=Object(f.useState)(O.EmptyRouteMeta),n=t[0],r=t[1],i=Object(f.useState)([]),o=i[0],c=i[1],l=Object(f.useState)([]),u=l[0],s=l[1],d=Object(f.useState)(!0),m=d[0],p=d[1];return Object(f.useEffect)(function(){Object(g.b)(void 0,void 0,void 0,function(){var t;return Object(g.c)(this,function(e){switch(e.label){case 0:return[4,Object(j.a)(a.apiPath)];case 1:return t=e.sent(),r(t),s(t.data),c(t.metas),[2]}})}),p(!(a.apiPath===Object(E.buildURLPath)(O.RoutePathPrefix.HOME_ALIAS)))},[a.apiPath]),f.createElement(C.a,{className:e.root},f.createElement(v.Helmet,null,f.createElement("title",null,n.title),f.createElement("script",{type:w.c},JSON.stringify(n.breadcrumbs)),o.map(function(e,t){return f.createElement("meta",Object(g.a)({key:t},e))})),m&&f.createElement(L.a,Object(g.a)({},n.breadcrumbs)),u.map(function(e){return f.createElement(A,Object(g.a)({key:e.id},e))}))}function d(e){var t=H();return f.createElement(k.a,{className:t.root},f.createElement(T.a,{component:m.b,to:e.link},f.createElement(N.a,null,f.createElement("div",{className:t.head},f.createElement(M.a,{container:!0,alignItems:"center"},f.createElement(M.a,{item:!0,xs:!0},f.createElement(I.a,{gutterBottom:!0,variant:"h4"},e.label)))),f.createElement(F.a,null),f.createElement("div",{className:t.desc},f.createElement(I.a,{color:"textSecondary",variant:"body2"},e.total," resources")))))}function i(a){var e=B(),t=Object(f.useState)(O.EmptyRouteMeta),n=t[0],r=t[1],i=Object(f.useState)([]),o=i[0],c=i[1],l=Object(f.useState)([]),u=l[0],s=l[1];return Object(f.useEffect)(function(){Object(g.b)(void 0,void 0,void 0,function(){var t;return Object(g.c)(this,function(e){switch(e.label){case 0:return[4,Object(j.a)(a.apiPath)];case 1:return t=e.sent(),r(t),c(t.metas),s(t.data),[2]}})})},[a.apiPath]),f.createElement(C.a,{className:e.root},f.createElement(v.Helmet,null,f.createElement("title",null,n.title),f.createElement("script",{type:w.c},JSON.stringify(n.breadcrumbs)),o.map(function(e,t){return f.createElement("meta",Object(g.a)({key:t},e))})),f.createElement(L.a,Object(g.a)({},n.breadcrumbs)),u.map(function(e,t){return f.createElement(d,Object(g.a)({key:t},e))}))}function c(){return f.createElement(h.c,null,U.map(function(t,e){return f.createElement(h.a,{key:e,path:t.path,exact:t.exact,render:function(e){return f.createElement(t.component,Object(g.a)({},e,{apiPath:t.apiPath(e.match)}))}})}))}function l(e){var t={menu:f.createElement(V.a,null),shape:f.createElement(Q.a,null),bookmark:f.createElement(z.a,null),info:f.createElement(K.a,null),link:f.createElement(Z.a,null),home:f.createElement(ee.a,null),up:f.createElement(ae.a,null),navigate_next:f.createElement(re.a,null)},a=f.createElement(V.a,null);return Object.keys(t).includes(e.type)?t[e.type]:a}function u(e){var t=e.children,a=he(),n=Object(W.a)({disableHysteresis:!0,threshold:100});return f.createElement(Ae.a,{in:n},f.createElement("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:a.scrollToTop},t))}function s(e){var t,a,n=he(),r=f.useState(!1),i=r[0],o=r[1];return f.createElement("div",{className:n.root},f.createElement(ie.a,null),f.createElement(oe.a,{position:"fixed",className:Object(S.a)(n.appBar,((t={})[n.appBarShift]=i,t))},f.createElement(ce.a,null,f.createElement(le.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:function(){o(!0)},className:Object(S.a)(n.menuButton,i&&n.hide)},f.createElement(V.a,null)),f.createElement(I.a,{variant:"h6",noWrap:!0},e.title))),f.createElement(ue.a,{className:n.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:n.drawerPaper}},f.createElement("div",{className:n.drawerHeader},f.createElement(le.a,{onClick:function(){o(!1)}},f.createElement(be.a,null))),f.createElement(F.a,null),f.createElement(se.a,null,e.menus.map(function(e){return f.createElement(de.a,{button:!0,key:e.id,component:m.b,to:e.link},f.createElement(pe.a,null,f.createElement(l,{type:e.icon||"menu"})),f.createElement(me.a,{primary:e.label}))}))),f.createElement("main",{className:Object(S.a)(n.content,((a={})[n.contentShift]=i,a))},f.createElement(ce.a,{id:"back-to-top-anchor",className:n.drawerHeader}),e.children),f.createElement(u,Object(g.a)({},e),f.createElement(fe.a,{color:"primary",size:"small","aria-label":"scroll back to top"},f.createElement(l,{type:"up"}))))}var f=a(0),o=a(10),g=a(6),m=a(24),p=a(202),b=a(60),h=a(32),E=a(17),O=a(13),v=a(48),P=a(61),y=a(153),j=a(33),w=a(20),S=a(3),x=a(83),R=a.n(x),k=a(185),T=a(187),N=a(188),I=a(46),_=Object(P.a)(function(e){var t;return Object(y.a)({card:((t={margin:e.spacing(1),maxWidth:w.a})[e.breakpoints.down("sm")]={margin:e.spacing(1,0,0,0)},t),media:{width:"100%",maxWidth:"100%"}})}),L=a(49),C=a(189),G=Object(P.a)(function(e){var t;return Object(y.a)({root:((t={display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.default,paddingTop:e.spacing(1)})[e.breakpoints.down("sm")]={padding:e.spacing(1)},t)})}),M=a(190),F=a(191),H=Object(P.a)(function(e){var t;return Object(y.a)({root:((t={margin:e.spacing(1),maxWidth:w.a,width:"100%"})[e.breakpoints.down("sm")]={margin:e.spacing(1,0,0,0)},t),head:{margin:e.spacing(1,1)},link:{"&:hover":{cursor:"pointer"},textDecoration:"none"},desc:{margin:e.spacing(1)},button:{padding:e.spacing(0),margin:e.spacing(0)}})}),B=Object(P.a)(function(e){var t;return Object(y.a)({root:((t={display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.default,paddingTop:e.spacing(1)})[e.breakpoints.down("sm")]={padding:e.spacing(1)},t),content:{padding:0,margin:0,display:"flex",flexWrap:"wrap",overflow:"hidden"}})}),U=[{path:"/",exact:!0,component:r,apiPath:function(){return Object(E.buildURLPath)(O.RoutePathPrefix.HOME_ALIAS)}},{path:"/posts/:year/:month/:date/:id",exact:!0,component:Object(b.a)(function(){return a.e(0).then(a.bind(null,222))}),apiPath:function(e){return Object(E.buildURLPath)(O.RoutePathPrefix.POSTS,e.params.year,e.params.month,e.params.date,e.params.id)}},{path:"/pages/:id",exact:!0,component:Object(b.a)(function(){return a.e(0).then(a.bind(null,222))}),apiPath:function(e){return Object(E.buildURLPath)(O.RoutePathPrefix.PAGES,e.params.id)}},{path:"/posts",exact:!0,component:r,apiPath:function(){return Object(E.buildURLPath)(O.RoutePathPrefix.POSTS)}},{path:"/categories/:category",exact:!0,component:r,apiPath:function(e){return Object(E.buildURLPath)(O.RoutePathPrefix.CATEGORIES,e.params.category)}},{path:"/tags/:tag",exact:!0,component:r,apiPath:function(e){return Object(E.buildURLPath)(O.RoutePathPrefix.TAGS,e.params.tag)}},{path:"/categories/",exact:!0,component:i,apiPath:function(){return Object(E.buildURLPath)(O.RoutePathPrefix.CATEGORIES)}},{path:"/tags",exact:!0,component:i,apiPath:function(){return Object(E.buildURLPath)(O.RoutePathPrefix.TAGS)}}],W=a(192),D=a(45),V=a.n(D),J=a(85),Q=a.n(J),q=a(86),z=a.n(q),Y=a(87),K=a.n(Y),X=a(88),Z=a.n(X),$=a(89),ee=a.n($),te=a(90),ae=a.n(te),ne=a(55),re=a.n(ne),ie=a(194),oe=a(195),ce=a(196),le=a(197),ue=a(203),se=a(198),de=a(204),me=a(200),pe=a(199),Ae=a(193),fe=a(201),ge=a(91),be=a.n(ge),he=Object(P.a)(function(e){return Object(y.a)({root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - 240px)",marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(g.a)(Object(g.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{justifyContent:"flex-end"}),content:{flexGrow:1,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),maxWidth:"100%",backgroundColor:e.palette.background.default,marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),maxWidth:"100%",backgroundColor:e.palette.background.default,marginLeft:0},scrollToTop:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}})}),Ee=a(92);o.hydrate(f.createElement(function(){var e=Object(f.useState)([]),t=e[0],a=e[1],n=Object(f.useState)(Ee.EmptyProfile),r=n[0],i=n[1],o=f.useState("TL; DR")[0];return Object(f.useEffect)(function(){Object(g.b)(void 0,void 0,void 0,function(){var t;return Object(g.c)(this,function(e){switch(e.label){case 0:return[4,Object(j.a)(Object(E.buildURLPath)(O.RoutePathPrefix.NAVIGATION))];case 1:return t=e.sent(),a(t.data),[2]}})}),Object(g.b)(void 0,void 0,void 0,function(){var t;return Object(g.c)(this,function(e){switch(e.label){case 0:return[4,Object(j.a)(Object(E.buildURLPath)(O.RoutePathPrefix.PROFILE))];case 1:return t=e.sent(),i(t.data),[2]}})})},[]),f.createElement(p.a,{theme:w.d},f.createElement(m.a,null,f.createElement(s,{title:o,profile:r,menus:t},f.createElement(c,null))))},null),document.getElementById("app"))},17:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildURLPath=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return"/"+e.join("/")},t.buildFullURL=function(e,t){return e+t}},20:function(e,t,a){"use strict";a.d(t,"b",function(){return i}),a.d(t,"a",function(){return o}),a.d(t,"c",function(){return c}),a.d(t,"d",function(){return l});var n=a(82),r="Roboto, XHei, -apple-system, BlinkMacSystemFont, PingFang SC, Hiragino Sans GB, Microsoft YaHei,\n    WenQuanYi Micro Hei, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",i=240,o=800,c="application/ld+json",l=a.n(n)()({palette:{primary:{light:"#FFFFFF",main:"#F5F5F5",dark:"#C2C2C2",contrastText:"#000000"},background:{paper:"#F8F9FA",default:"#F5F5F5"}},overrides:{MuiTypography:{root:{fontFamily:r},body2:{fontFamily:r}}}})},33:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(6),r=a(81),i=a.n(r),o=function(t){return Object(n.b)(void 0,void 0,void 0,function(){return Object(n.c)(this,function(e){switch(e.label){case 0:return[4,i.a.get("/api"+t+".json")];case 1:return[2,e.sent().data]}})})}},49:function(e,t,a){"use strict";a.d(t,"a",function(){return A});var n=a(0),r=a(24),i=a(61),o=a(153),c=a(20),l=a(55),u=a.n(l),s=a(64),d=a(150),m=a(152),p=Object(i.a)(function(e){var t;return Object(o.a)({root:{justifyContent:"center",flexWrap:"wrap",width:"100%",maxWidth:c.a},paper:((t={backgroundColor:e.palette.background.default,padding:e.spacing(1,2)})[e.breakpoints.down("sm")]={padding:e.spacing(1)},t)})}),A=function(e){var t=p(),a=e.itemListElement||[];return n.createElement("div",{className:t.root},n.createElement(s.a,{elevation:0,className:t.paper},n.createElement(m.a,{separator:n.createElement(u.a,{fontSize:"small"}),"aria-label":"breadcrumb"},a.map(function(e,t){return n.createElement(d.a,{key:t,color:"inherit",component:r.b,to:new URL(e.item).pathname},e.name)}))))}},92:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyProfile={"@context":"https://schema.org","@type":"Person",email:"",logo:{"@type":"ImageObject",url:""},name:"",url:new Map}},99:function(e,t,a){}});
//# sourceMappingURL=main.f93d49b4ec0256bbc004.js.map