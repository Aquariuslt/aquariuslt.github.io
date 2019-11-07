!function(u){function e(e){for(var t,a,n=e[0],r=e[1],i=e[2],o=0,l=[];o<n.length;o++)a=n[o],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&l.push(s[a][0]),s[a]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(u[t]=r[t]);for(p&&p(e);l.length;)l.shift()();return d.push.apply(d,i||[]),c()}function c(){for(var e,t=0;t<d.length;t++){for(var a=d[t],n=!0,r=1;r<a.length;r++){var i=a[r];0!==s[i]&&(n=!1)}n&&(d.splice(t--,1),e=o(o.s=a[0]))}return e}var a={},s={0:0},d=[];function o(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return u[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=u,o.c=a,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var t=window.webpackJsonp=window.webpackJsonp||[],n=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var p=n;d.push([88,1]),c()}({100:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(15),r=n.__importStar(a(0)),i=a(33),o=n.__importDefault(a(101)),l=n.__importDefault(a(102)),u=a(59),c=a(38),s=n.__importDefault(a(144));t.routes=[{path:"/",exact:!0,component:l.default,apiPath:function(){return u.buildURLPath(c.RoutePathPrefix.HOME_ALIAS)}},{path:"/posts/:year/:month/:date/:id",exact:!0,component:o.default(function(){return Promise.resolve().then(function(){return n.__importStar(a(146))})}),apiPath:function(e){return u.buildURLPath(c.RoutePathPrefix.POSTS,e.params.year,e.params.month,e.params.date,e.params.id)}},{path:"/posts",exact:!0,component:l.default,apiPath:function(){return u.buildURLPath(c.RoutePathPrefix.POSTS)}},{path:"/categories/:category",exact:!0,component:l.default,apiPath:function(e){return u.buildURLPath(c.RoutePathPrefix.CATEGORIES,e.params.category)}},{path:"/tags/:tag",exact:!0,component:l.default,apiPath:function(e){return u.buildURLPath(c.RoutePathPrefix.TAGS,e.params.tag)}},{path:"/categories/",exact:!0,component:s.default,apiPath:function(){return u.buildURLPath(c.RoutePathPrefix.CATEGORIES)}},{path:"/tags",exact:!0,component:s.default,apiPath:function(){return u.buildURLPath(c.RoutePathPrefix.TAGS)}}],t.RouterView=function(){return r.createElement(i.Switch,null,t.routes.map(function(t,e){return r.createElement(i.Route,{key:e,path:t.path,exact:t.exact,render:function(e){return r.createElement(t.component,n.__assign({},e,{apiPath:t.apiPath(e.match)}))}})}))}},102:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var f=a(15),_=f.__importStar(a(0)),g=a(0),h=a(57),n=a(19),v=a(38),E=a(41),y=a(125),b=a(58),P=a(24),S=a(59),w=f.__importDefault(a(60)),D=n.makeStyles(function(e){var t;return n.createStyles({root:(t={display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,paddingTop:e.spacing(1)},t[e.breakpoints.down("sm")]={padding:e.spacing(1)},t)})});t.List=function(a){var e=D(),t=g.useState(v.EmptyRouteMeta),n=t[0],r=t[1],i=g.useState([]),o=i[0],l=i[1],u=g.useState([]),c=u[0],s=u[1],d=g.useState(!0),p=d[0],m=d[1];return g.useEffect(function(){f.__awaiter(void 0,void 0,void 0,function(){var t;return f.__generator(this,function(e){switch(e.label){case 0:return[4,E.loadApi(a.apiPath)];case 1:return t=e.sent(),r(t),s(t.data),l(t.metas),[2]}})}),m(!(a.apiPath===S.buildURLPath(v.RoutePathPrefix.HOME_ALIAS)))},[a.apiPath]),_.createElement(w.default,{className:e.root},_.createElement(h.Helmet,null,_.createElement("title",null,n.title),_.createElement("script",{type:P.TYPE_JSON_LD},JSON.stringify(n.breadcrumbs)),o.map(function(e,t){return _.createElement("meta",f.__assign({key:t},e))})),p&&_.createElement(b.BreadcrumbList,f.__assign({},n.breadcrumbs)),c.map(function(e){return _.createElement(y.ArticleCard,f.__assign({key:e.id},e))}))},t.default=t.List},125:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(15),r=n.__importStar(a(0)),i=a(19),o=a(33),l=n.__importDefault(a(80)),u=n.__importDefault(a(81)),c=n.__importDefault(a(82)),s=n.__importDefault(a(173)),d=n.__importDefault(a(28)),p=a(24),m=i.makeStyles(function(e){var t;return i.createStyles({card:(t={margin:e.spacing(1),maxWidth:p.CARD_MAX_WIDTH},t[e.breakpoints.down("sm")]={margin:e.spacing(1,0,0,0)},t),media:{width:"100%",maxWidth:"100%"}})});t.ArticleCard=function(e){var t=m();return r.createElement(l.default,{className:t.card},r.createElement(u.default,{component:o.Link,to:String(e.link)},r.createElement(s.default,{className:t.media,component:"img",image:e.cover,title:e.title,alt:e.title}),r.createElement(c.default,null,r.createElement(d.default,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),r.createElement(d.default,{variant:"body2",color:"textSecondary",component:"p"},e.summary))))}},144:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=a(15),p=d.__importStar(a(0)),m=a(0),f=a(57),n=a(19),_=a(38),g=a(41),h=a(24),v=a(58),E=a(145),y=d.__importDefault(a(60)),b=n.makeStyles(function(e){var t;return n.createStyles({root:(t={maxWidth:h.CARD_MAX_WIDTH,backgroundColor:e.palette.background.paper,paddingTop:e.spacing(1)},t[e.breakpoints.down("sm")]={padding:e.spacing(1)},t),content:{padding:0,margin:0,display:"flex",flexWrap:"wrap",overflow:"hidden"}})});t.Table=function(a){var e=b(),t=m.useState(_.EmptyRouteMeta),n=t[0],r=t[1],i=m.useState([]),o=i[0],l=i[1],u=m.useState([]),c=u[0],s=u[1];return m.useEffect(function(){d.__awaiter(void 0,void 0,void 0,function(){var t;return d.__generator(this,function(e){switch(e.label){case 0:return[4,g.loadApi(a.apiPath)];case 1:return t=e.sent(),r(t),l(t.metas),s(t.data),[2]}})})},[a.apiPath]),p.createElement(y.default,{className:e.root},p.createElement(f.Helmet,null,p.createElement("title",null,n.title),p.createElement("script",{type:h.TYPE_JSON_LD},JSON.stringify(n.breadcrumbs)),o.map(function(e,t){return p.createElement("meta",d.__assign({key:t},e))})),p.createElement(v.BreadcrumbList,d.__assign({},n.breadcrumbs)),p.createElement("div",{className:e.content},c.map(function(e,t){return p.createElement(E.CollectionCard,d.__assign({key:t},e))})))},t.default=t.Table},145:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(15),r=n.__importStar(a(0)),i=a(33),o=a(19),l=a(24),u=n.__importDefault(a(28)),c=n.__importDefault(a(169)),s=n.__importDefault(a(79)),d=n.__importDefault(a(80)),p=n.__importDefault(a(81)),m=n.__importDefault(a(82)),f=o.makeStyles(function(e){var t;return o.createStyles({root:(t={margin:e.spacing(1),maxWidth:l.CARD_MAX_WIDTH,width:"100%"},t[e.breakpoints.down("sm")]={margin:e.spacing(1,0,0,0)},t),head:{margin:e.spacing(1,1)},link:{"&:hover":{cursor:"pointer"},textDecoration:"none"},desc:{margin:e.spacing(1)},button:{padding:e.spacing(0),margin:e.spacing(0)}})});t.CollectionCard=function(e){var t=f();return r.createElement(d.default,{className:t.root},r.createElement(p.default,{component:i.Link,to:e.link},r.createElement(m.default,null,r.createElement("div",{className:t.head},r.createElement(c.default,{container:!0,alignItems:"center"},r.createElement(c.default,{item:!0,xs:!0},r.createElement(u.default,{gutterBottom:!0,variant:"h4"},e.label)))),r.createElement(s.default,null),r.createElement("div",{className:t.desc},r.createElement(u.default,{color:"textSecondary",variant:"body2"},"Total: ",e.total)))))}},146:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=a(15),p=d.__importStar(a(0)),m=a(0),f=a(57),r=a(19),_=a(41),g=a(38),h=a(58),v=a(147),E=a(151),y=a(24),b=d.__importDefault(a(60)),P=r.makeStyles(function(e){var t,a,n;return r.createStyles({root:(t={display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,paddingTop:e.spacing(1)},t[e.breakpoints.down("sm")]={padding:e.spacing(1)},t),toc:(a={display:"flex",flexWrap:"wrap",justifyContent:"flex-end",overflow:"hidden",backgroundColor:e.palette.background.paper},a[e.breakpoints.up("md")]={width:y.DRAWER_WIDTH},a),content:(n={padding:0,margin:0},n[e.breakpoints.down("sm")]={display:"flex",flexWrap:"wrap",overflow:"hidden"},n)})});t.Detail=function(a){var e=P(),t=m.useState(g.EmptyRouteMeta),n=t[0],r=t[1],i=m.useState([]),o=i[0],l=i[1],u=m.useState([]),c=u[0],s=u[1];return m.useEffect(function(){d.__awaiter(void 0,void 0,void 0,function(){var t;return d.__generator(this,function(e){switch(e.label){case 0:return[4,_.loadApi(a.apiPath)];case 1:return t=e.sent(),r(t),l(t.metas),s(t.data.toc),[2]}})})},[a.apiPath]),p.createElement(b.default,{className:e.root},p.createElement(f.Helmet,null,p.createElement("title",null,n.title),p.createElement("script",{type:y.TYPE_JSON_LD},JSON.stringify(n.breadcrumbs)),o.map(function(e,t){return p.createElement("meta",d.__assign({key:t},e))})),p.createElement("div",{className:e.content},p.createElement(h.BreadcrumbList,d.__assign({},n.breadcrumbs)),p.createElement(v.ArticleDetail,d.__assign({},n.data))),p.createElement("div",{className:e.toc},p.createElement(E.ContentItems,{items:c})))},t.default=t.Detail},147:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(15);a(148);var r=n.__importStar(a(0)),i=n.__importDefault(a(28)),o=a(19),l=a(24),u=a(149),c=a(150),s=o.makeStyles(function(e){var t;return o.createStyles({root:(t={margin:e.spacing(0),maxWidth:l.CARD_MAX_WIDTH,width:"100%",padding:e.spacing(0,2)},t[e.breakpoints.down("sm")]={padding:e.spacing(1)},t),cover:{width:"100%",maxWidth:"100%"},divider:{marginTop:e.spacing(2)}})});t.ArticleDetail=function(e){var t=s();return r.createElement("div",{className:t.root},r.createElement("img",{src:e.cover,alt:"cover",className:t.cover}),r.createElement(i.default,{component:"div",className:"markdown-body",dangerouslySetInnerHTML:{__html:e.html||""}}),r.createElement("div",{className:t.divider}),e.tags&&e.tags.map(function(e){return r.createElement(c.KeywordChip,n.__assign({key:e.id},e))}),r.createElement(u.Comment,n.__assign({title:e.title||""},e.disqus)))}},148:function(e,t,a){},150:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(15),r=n.__importStar(a(0)),i=a(33),o=a(19),l=n.__importDefault(a(165)),u=o.makeStyles(function(e){return o.createStyles({root:{margin:e.spacing(1,.5)}})});t.KeywordChip=function(e){var t=u();return r.createElement(l.default,{className:t.root,label:e.label,component:i.Link,to:e.link,clickable:!0})}},151:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(15),o=i.__importStar(a(0)),l=a(19),n=a(24),u=i.__importDefault(a(152)),c=i.__importDefault(a(28)),s=l.makeStyles(function(e){var t;return l.createStyles({root:(t={width:n.DRAWER_WIDTH,flexShrink:0,order:2,position:"fixed",overflowX:"hidden",overflowY:"auto",overflowWrap:"break-word",padding:e.spacing(1),display:"none"},t[e.breakpoints.up("md")]={display:"block"},t.listStyleType="none",t),contents:{marginTop:e.spacing(2),paddingLeft:e.spacing(1.5)},ul:{padding:0,margin:0,listStyleType:"none"},item:{fontSize:13,padding:e.spacing(.5,0,.5,1),borderLeft:"4px solid transparent",boxSizing:"content-box","&:hover":{borderLeft:"4px solid "+e.palette.grey[200],cursor:"pointer"}}})});t.ContentItems=function(e){var a=l.useTheme(),n=s(),r=function(e){return o.createElement(o.Fragment,null,o.createElement(c.default,{onClick:(t=e.id,function(){(new u.default).animateScroll(document.getElementById(t))}),component:"li",className:n.item,style:{paddingLeft:a.spacing(e.level)}},e.label),o.createElement(c.default,{component:"ul",className:n.ul},0<e.children.length&&e.children.map(function(e){return o.createElement(r,i.__assign({key:e.id},e))})));var t};return o.createElement("nav",{className:n.root},e.items.map(function(e){return o.createElement(r,i.__assign({key:e.id},e))}))}},153:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(15),l=n.__importStar(a(0)),u=n.__importDefault(a(3)),c=a(33),r=a(19),s=n.__importDefault(a(171)),d=n.__importDefault(a(168)),p=n.__importDefault(a(170)),m=n.__importDefault(a(172)),f=n.__importDefault(a(28)),_=n.__importDefault(a(162)),g=n.__importDefault(a(79)),h=n.__importDefault(a(174)),v=n.__importDefault(a(164)),E=n.__importDefault(a(167)),y=n.__importDefault(a(166)),b=n.__importDefault(a(78)),P=n.__importDefault(a(154)),S=a(155),w=r.makeStyles(function(e){return r.createStyles({root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - 240px)",marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:n.__assign(n.__assign({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{justifyContent:"flex-end"}),content:{flexGrow:1,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),maxWidth:"100%",minHeight:"100vh",backgroundColor:e.palette.background.paper,marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),maxWidth:"100%",backgroundColor:e.palette.background.paper,marginLeft:0}})});t.Navigation=function(e){var t,a,n=w(),r=l.useState(!1),i=r[0],o=r[1];return l.createElement("div",{className:n.root},l.createElement(s.default,null),l.createElement(d.default,{position:"fixed",className:u.default(n.appBar,(t={},t[n.appBarShift]=i,t))},l.createElement(p.default,null,l.createElement(m.default,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:function(){o(!0)},className:u.default(n.menuButton,i&&n.hide)},l.createElement(b.default,null)),l.createElement(f.default,{variant:"h6",noWrap:!0},e.title))),l.createElement(_.default,{className:n.drawer,variant:"persistent",anchor:"left",open:i,classes:{paper:n.drawerPaper}},l.createElement("div",{className:n.drawerHeader},l.createElement(m.default,{onClick:function(){o(!1)}},l.createElement(P.default,null))),l.createElement(g.default,null),l.createElement(h.default,null,e.menus.map(function(e){return l.createElement(v.default,{button:!0,key:e.id,component:c.Link,to:e.link},l.createElement(y.default,null,l.createElement(S.Icon,{type:e.icon||"menu"})),l.createElement(E.default,{primary:e.label}))}))),l.createElement("main",{className:u.default(n.content,(a={},a[n.contentShift]=i,a))},l.createElement("div",{className:n.drawerHeader}),e.children))}},155:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(15),r=n.__importStar(a(0)),i=n.__importDefault(a(78)),o=n.__importDefault(a(156)),l=n.__importDefault(a(157)),u=n.__importDefault(a(158)),c=n.__importDefault(a(159)),s=n.__importDefault(a(160));t.Icon=function(e){var t={menu:r.createElement(i.default,null),shape:r.createElement(o.default,null),bookmark:r.createElement(l.default,null),info:r.createElement(u.default,null),link:r.createElement(c.default,null),home:r.createElement(s.default,null)},a=r.createElement(i.default,null);return Object.keys(t).includes(e.type)?t[e.type]:a}},161:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.EmptyProfile={"@context":"https://schema.org","@type":"Person",email:"",logo:{"@type":"ImageObject",url:""},name:"",url:new Map}},24:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(15).__importDefault(a(126));t.theme=n.default({palette:{primary:{light:"#FFFFFF",main:"#FAFAFA",dark:"#C7C7C7",contrastText:"#000000"},background:{paper:"#F8F9FA"}}}),t.DRAWER_WIDTH=240,t.CARD_MAX_WIDTH=800,t.COVER_HEIGHT=200,t.TYPE_JSON_LD="application/ld+json"},38:function(e,t,a){"use strict";var n,r,i;Object.defineProperty(t,"__esModule",{value:!0}),(i=t.RoutePathPrefix||(t.RoutePathPrefix={})).HOME="",i.HOME_ALIAS="home",i.TAGS="tags",i.CATEGORIES="categories",i.POSTS="posts",i.PAGES="pages",i.NAVIGATION="navigation",i.PROFILE="profile",t.EmptyRouteMeta={breadcrumbs:{},key:"",path:"",title:"",type:"",url:""},(r=t.MetaName||(t.MetaName={})).DESCRIPTION="description",r.AUTHOR="author",r.OPEN_GRAPH_TITLE="og:title",r.OPEN_GRAPH_DESCRIPTION="og:description",r.OPEN_GRAPH_IMAGE="og:image",r.OPEN_GRAPH_URL="og:url",r.OPEN_GRAPH_TYPE="og:type",r.OPEN_GRAPH_SITE_NAME="og:site_name",r.GOOGLE_SITE_VERIFICATION="google-site-verification",r.GOOGLE_SITE_TRACKING="google-analytics",(n=t.MetaValue||(t.MetaValue={})).WEBSITE="website",n.ARTICLE="article"},41:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(15),r=n.__importDefault(a(107));t.loadApi=function(t){return n.__awaiter(void 0,void 0,void 0,function(){return n.__generator(this,function(e){switch(e.label){case 0:return[4,r.default.get("/api"+t+".json")];case 1:return[2,e.sent().data]}})})}},58:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(15),r=n.__importStar(a(0)),i=a(33),o=a(19),l=a(24),u=n.__importDefault(a(143)),c=n.__importDefault(a(42)),s=n.__importDefault(a(175)),d=n.__importDefault(a(163)),p=o.makeStyles(function(e){var t;return o.createStyles({root:{justifyContent:"center",flexWrap:"wrap",width:"100%",maxWidth:l.CARD_MAX_WIDTH},paper:(t={padding:e.spacing(1,2)},t[e.breakpoints.down("sm")]={padding:e.spacing(1)},t)})});t.BreadcrumbList=function(e){var t=p(),a=e.itemListElement||[];return r.createElement("div",{className:t.root},r.createElement(c.default,{elevation:0,className:t.paper},r.createElement(d.default,{separator:r.createElement(u.default,{fontSize:"small"}),"aria-label":"breadcrumb"},a.map(function(e,t){return r.createElement(s.default,{key:t,color:"inherit",component:i.Link,to:new URL(e.item).pathname},e.name)}))))}},59:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.buildURLPath=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return"/"+e.join("/")},t.buildFullURL=function(e,t){return e+t}},88:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(15);a(89),a(90);var r=n.__importStar(a(0)),i=n.__importStar(a(12)),o=a(95);i.render(r.createElement(o.App,null),document.getElementById("app"))},89:function(e,t,a){},90:function(e,t,a){"use strict";"serviceWorker"in navigator&&window.addEventListener("load",function(){navigator.serviceWorker.register("/service-worker.js").then(function(e){console.log("SW registered: ",e)}).catch(function(e){console.error("SW register failed:",e)})});var n=document.getElementById("google-analytics");n&&(window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=+new Date,window.ga("create",n.getAttribute("content"),"auto"),window.ga("send","pageview"))},95:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(15),u=l.__importStar(a(0)),c=a(0),s=a(33),d=a(19),p=a(100),m=a(153),f=a(161),_=a(38),g=a(59),h=a(41),v=a(24);t.App=function(){var e=c.useState([]),t=e[0],a=e[1],n=c.useState(f.EmptyProfile),r=n[0],i=n[1],o=u.useState("TL; DR")[0];return c.useEffect(function(){l.__awaiter(void 0,void 0,void 0,function(){var t;return l.__generator(this,function(e){switch(e.label){case 0:return[4,h.loadApi(g.buildURLPath(_.RoutePathPrefix.NAVIGATION))];case 1:return t=e.sent(),a(t.data),[2]}})}),l.__awaiter(void 0,void 0,void 0,function(){var t;return l.__generator(this,function(e){switch(e.label){case 0:return[4,h.loadApi(g.buildURLPath(_.RoutePathPrefix.PROFILE))];case 1:return t=e.sent(),i(t.data),[2]}})})},[]),u.createElement(d.ThemeProvider,{theme:v.theme},u.createElement(s.BrowserRouter,null,u.createElement(m.Navigation,{title:o,profile:r,menus:t},u.createElement(p.RouterView,null))))}}});
//# sourceMappingURL=main.672c5bc07d62db38b423.js.map