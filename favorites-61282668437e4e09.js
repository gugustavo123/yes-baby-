(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7811],{31874:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var r=n(41749),i=n(50253),s=n(13658),a=n(41120),o=n(22350),c=n(36244),l=n(7954),u=n(89837),d=n(11163),m=n(29829),p=n(85639),f=n(61666),h=n(55517),v=n(711),x=n(47622),g=n(76324),j=n(53624),Z=n(2375),b=n(79895),y=n(85893),k=(0,a.Z)((function(e){return{backMenu:{padding:0},link:{color:e.palette.text.primary},styleMenuItem:{padding:"1rem"},active:{background:e.palette.action.disabled},icon:{marginRight:"1rem",color:e.palette.primary.main}}})),N=function(){var e=k(),t=(0,d.useRouter)(),n=function(e){return t.pathname===e};return(0,y.jsx)(b.Z,{children:(0,y.jsxs)(m.Z,{className:e.backMenu,children:[(0,y.jsx)(f.Z,{className:e.link,href:"/account",children:(0,y.jsxs)(p.Z,{className:e.styleMenuItem,selected:n("/account"),children:[(0,y.jsx)(x.Z,{className:e.icon}),"Minha Conta"]})}),(0,y.jsx)(f.Z,{className:e.link,href:"/account/orders",children:(0,y.jsxs)(p.Z,{className:e.styleMenuItem,selected:n("/account/orders"),children:[(0,y.jsx)(v.Z,{className:e.icon}),"Meus Pedidos"]})}),(0,y.jsx)(f.Z,{className:e.link,href:"/account/favorites",children:(0,y.jsxs)(p.Z,{className:e.styleMenuItem,selected:n("/account/favorites"),children:[(0,y.jsx)(g.Z,{className:e.icon}),"Meus Favoritos"]})}),(0,y.jsx)(h.Z,{}),(0,y.jsx)(f.Z,{className:e.link,href:"/account/address",children:(0,y.jsxs)(p.Z,{className:e.styleMenuItem,selected:n("/account/address"),children:[(0,y.jsx)(j.Z,{className:e.icon}),"Endere\xe7os"]})}),(0,y.jsx)(f.Z,{className:e.link,href:"/account/edit",children:(0,y.jsxs)(p.Z,{className:e.styleMenuItem,selected:n("/account/edit"),children:[(0,y.jsx)(Z.Z,{className:e.icon}),"Meus dados"]})})]})})},w=(0,a.Z)((function(e){return{icon:{verticalAlign:"middle",fontSize:"3.5rem",paddingBottom:"0.5rem"},titleWrapper:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem","& h3":{marginBottom:0}}}})),S=function(e){var t=e.children,n=e.title,a=e.icon,d=e.extraAction,m=void 0===d?null:d,p=e.metaTitle,f=void 0!==p&&p,h=w();return(0,y.jsxs)(s.Z,{children:[(0,y.jsx)(u.Z,{links:[{text:f||n,hideLink:!1}]}),(0,y.jsxs)(r.Z,{container:!0,spacing:3,children:[(0,y.jsx)(r.Z,{item:!0,xs:12,md:3,children:(0,y.jsx)(N,{})}),(0,y.jsx)(r.Z,{item:!0,sm:12,md:9,children:(0,y.jsxs)(i.Z,{spacing:5,children:[n&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("div",{className:h.titleWrapper,children:[(0,y.jsxs)(c.Z,{variant:"h3",component:"h3",children:[a,n]}),m]}),(0,y.jsx)(l.Z,{}),(0,y.jsx)("br",{})]}),t]})})]}),(0,y.jsx)(o.Z,{title:f||n,robots:"noindex"})]})}},90621:function(e,t,n){"use strict";n(67294);var r=n(25675),i=n(85893);t.Z=function(e){var t={};return e.center&&(t.textAlign="center",t.display="block"),(0,i.jsx)("span",{style:t,"data-cy":"global-loading",children:(0,i.jsx)(r.default,{src:"https://static.pichau.com.br/loading.svg",alt:"",height:80,width:200})})}},13658:function(e,t,n){"use strict";n(67294);var r=n(24265),i=n(25617),s=n(5152),a=n(89606),o=n(72205),c=n(66123),l=n(57141),u=n(85893),d=(0,s.default)((function(){return Promise.all([n.e(6143),n.e(4619),n.e(4158)]).then(n.bind(n,44619))}),{ssr:!1,loadableGenerated:{webpack:function(){return[44619]},modules:["../components/Layout/LoggedInWrapper.js -> components/Customer/Login"]}});t.Z=function(e){var t=e.children,n=(0,i.v9)((function(e){return e.auth})),s=n.isAuth,m=n.isCheckingAuth,p=n.isLoadingUser,f=n.error,h=(0,l.Z)().t,v=(0,i.I0)();return(0,u.jsxs)(r.Z,{maxWidth:s||p?"xl":"md",children:[f&&(0,u.jsx)(c.default,{title:"Autentica\xe7\xe3o",description:h(f),textCenter:!0,onClose:function(){return v((0,a.b9)())}}),!s&&!p&&(0,u.jsx)(d,{}),s&&!m&&!p&&(0,u.jsx)(u.Fragment,{children:t}),p&&(0,u.jsx)(o.Z,{message:"Carregando seus dados..."})]})}},89837:function(e,t,n){"use strict";var r=n(4942),i=(n(67294),n(98121)),s=n(61666),a=n(92448),o=n(22318),c=n(7885),l=n(41120),u=n(11752),d=n(85893);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var p=(0,u.default)().publicRuntimeConfig.NEXT_PUBLIC_URL,f=(0,l.Z)((function(e){return{breadbrumb:{paddingBottom:"1rem",color:"dark"===e.palette.type?"white":"black","& ol, ul":{flexWrap:"nowrap"},"& li:not(:first-child):not(.MuiBreadcrumbs-separator), p":{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"dark"===e.palette.type?"white":"black"},"& *":{fontSize:"12px"}}}}));t.Z=function(e){var t=e.links,n=void 0===t?[]:t,l=e.showHome,u=void 0===l||l,h=f(),v={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"P\xe1gina Inicial",item:p}]};return u&&n.map((function(e,t){var n=e.text,i=e.href,s={};i&&(s["@id"]="".concat(p,"/").concat(i),s.item="".concat(p,"/").concat(i)),v.itemListElement.push(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({"@type":"ListItem",position:t+2,name:n},s))})),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(c.Z,{separator:(0,d.jsx)(i.Z,{fontSize:"small"}),"aria-label":"breadcrumb",className:h.breadbrumb,children:[u&&(0,d.jsx)(s.Z,{color:"inherit",href:"/",children:(0,d.jsx)(a.Z,{fontSize:"small"})},"/"),n.map((function(e,t){return e.href&&!e.hideLink?(0,d.jsx)(s.Z,{color:"inherit",href:e.href,children:(0,d.jsx)(o.Z,{color:"textPrimary",children:e.text})},"".concat(e.href,"-").concat(t)):(0,d.jsx)(o.Z,{color:"textPrimary",children:e.text},e.href)}))]}),(0,d.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(v)}})]})}},7954:function(e,t,n){"use strict";n(67294);var r=n(41120),i=n(86010),s=n(85893),a=(0,r.Z)((function(e){return{product_list_divider:{position:"relative",display:"block","&::after":{content:'" "',display:"block",width:100,height:2,position:"absolute",left:0,top:"50%",marginTop:-1,backgroundColor:e.palette.primary.main}},center:{"&::after":{left:"50%",marginLeft:-50}},spacing:{padding:"2rem 0"},spacingSmall:{padding:"1rem 0"}}}));t.Z=function(e){var t=e.hasSpacing,n=void 0!==t&&t,r=e.hasSpacingSmall,o=void 0!==r&&r,c=e.center,l=void 0!==c&&c,u=e.className,d=a();return(0,s.jsx)("span",{className:(0,i.Z)(d.product_list_divider,n&&d.spacing,o&&d.spacingSmall,l&&d.center,u)})}},72205:function(e,t,n){"use strict";n(67294);var r=n(90621),i=n(41120),s=n(86010),a=n(85893),o=(0,i.Z)((function(e){return{loading:{textAlign:"center",padding:"6rem 0 3rem",fontSize:15,textTransform:"uppercase",fontWeight:"bold"},loadingSmall:{padding:"0",fontSize:12}}}));t.Z=function(e){var t=e.message,n=e.small,i=void 0!==n&&n,c=o();return(0,a.jsxs)("div",{className:(0,s.Z)(c.loading,i&&c.loadingSmall),children:[(0,a.jsx)("h2",{children:t}),!i&&(0,a.jsx)("br",{}),(0,a.jsx)(r.Z,{})]})}},98697:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return w}});var r,i=n(25617),s=n(76324),a=n(41749),o=n(22350),c=n(67294),l=n(93633),u=n(20897),d=n(45697),m=n.n(d),p=n(30168),f=n(81467),h=n(33951),v=(0,f.ZP)(r||(r=(0,p.Z)(["\n    query favouriteProducts($sku: [String], $onServer: Boolean!) {\n        favouriteProducts: products(filter: {sku: { in: $sku }}, sort: { relevance: ASC}, pageSize: 100) {\n            items {\n                ","\n            }\n        }\n    }\n"])),h.Z),x=n(53599),g=n(29016),j=n(85893),Z=function(e){var t,n,r,i=e.favoritesItems,s=e.isUpdatingFavorites,o=(0,u.Z)({},!0,"catalog"),d=(0,c.useState)([]),m=d[0],p=d[1];(0,c.useEffect)((function(){return window.addEventListener("pichau-favorites",(function(){return f()})),f(),function(){window.removeEventListener("pichau-favorites",(function(){return f()}))}}),[i]);var f=function(){var e=null===i||void 0===i?void 0:i.map((function(e){return e.product.sku}));p(e)},h=(0,l.a)(v,{variables:{sku:m.length>0?m:["Pichau Favorites, Hi DEV!"],onServer:!1},client:o,context:{headers:{cacheTTL:76800,pichauCacheKey:"product-favorites-".concat(JSON.stringify(m))}}}),Z=h.loading,b=h.data;return!Z&&(null===b||void 0===b||null===(t=b.favouriteProducts)||void 0===t||null===(n=t.items)||void 0===n||!n.length)||m.length<=0?(0,j.jsx)("div",{style:{padding:"3rem 0",textAlign:"center",width:"100%"},children:"Nenhum produto no seus favoritos."}):(0,j.jsxs)(j.Fragment,{children:[(Z||s)&&(0,j.jsx)(g.Z,{count:6}),!Z&&i.length<=0&&(0,j.jsx)("div",{style:{padding:"3rem 0",textAlign:"center",width:"100%"},children:"Nenhum produto no seus favoritos. A"}),!Z&&(null===b||void 0===b||null===(r=b.favouriteProducts)||void 0===r?void 0:r.items.map((function(e){return(0,j.jsx)(a.Z,{item:!0,xs:12,sm:6,md:4,lg:3,children:(0,j.jsx)(x.Z,{product:e,pageType:"favorites"})},e.url_key)})))]})};Z.propTtpes={favoritesItems:m().array.isRequired};var b=Z,y=n(31874),k=n(71678),N=function(){var e=(0,i.v9)((function(e){return e.auth})).customer,t=(0,k.Z)(),n=t.favorites,r=t.isUpdatingFavorites,l=t.mergeFavorites;return(0,c.useEffect)((function(){null!==e&&void 0!==e&&e.email&&l()}),[e]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(y.Z,{icon:(0,j.jsx)(s.Z,{}),title:"Meus Favoritos",children:(0,j.jsx)(a.Z,{container:!0,spacing:3,children:(0,j.jsx)(b,{favoritesItems:n,isUpdatingFavorites:r})})}),(0,j.jsx)(o.Z,{title:"Favoritos",robots:"noindex"})]})},w=function(){return(0,j.jsx)(N,{})}},80342:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/favorites",function(){return n(98697)}])}},function(e){e.O(0,[7629,2652,8576,1228,9774,2888,179],(function(){return t=80342,e(e.s=t);var t}));var t=e.O();_N_E=t}]);