"use strict";(self.webpackChunkgoit_fs91_react_hw_05_movies=self.webpackChunkgoit_fs91_react_hw_05_movies||[]).push([[295],{9295:function(n,t,e){e.r(t),e.d(t,{default:function(){return g}});var r,a,c=e(9439),u=e(7689),o=e(2791),i=e(1414),s=e(2479),p=function(n){var t=new Date(n);return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"}).format(t)},f=e(184),d=e(168),v=e(5867),h=v.ZP.ul(r||(r=(0,d.Z)(["\n  display: grid;\n  gap: 12px;\n"]))),l=v.ZP.li(a||(a=(0,d.Z)(["\n  display: grid;\n  grid-template-columns: 0.3fr 1fr;\n  gap: 12px;\n  padding: 8px 0;\n\n  &:not(:last-child) {\n    border-bottom: 1px dashed slategrey;\n  }\n  & span {\n    display: block;\n    font-size: 14px;\n    color: #666;\n  }\n"]))),m=function(n){var t=n.movieReview;return(0,f.jsx)(h,{children:t.map((function(n){var t,e=n.id,r=n.author,a=n.content,c=n.created_at;return(0,f.jsxs)(l,{children:[(0,f.jsxs)("h3",{children:[r," :",c&&(0,f.jsx)("span",{children:p(c)})]}),(t=a,(0,f.jsx)("div",{dangerouslySetInnerHTML:{__html:t}}))]},e)}))})},g=function(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],a=(0,u.UO)().movieId;return(0,o.useEffect)((function(){(0,i.tx)(a).then((function(n){var t=n.results;r(t)})).catch((function(n){return(0,s.x)(n.message)}))}),[a]),(0,f.jsx)("div",{children:(0,f.jsx)(f.Fragment,{children:e&&e.length>0?(0,f.jsx)(m,{movieReview:e}):(0,f.jsx)("p",{children:" We don`t have any reviews for this movie"})})})}},1414:function(n,t,e){e.d(t,{Df:function(){return p},M1:function(){return d},Pg:function(){return f},V0:function(){return h},YQ:function(){return o},tx:function(){return v}});var r=e(5861),a=e(7757),c=e.n(a),u=e(5294);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="https://image.tmdb.org/t/p/original/",i="cd39124e196d97716b8c0c326a9e8fad",s="movie",p=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat("trending/movie/day","?api_key=").concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/").concat(t,"?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/").concat(t,"/").concat("credits","?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(s,"/").concat(t,"/").concat("reviews","?api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat("search/movie","?query=").concat(t,"&api_key=").concat(i));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},2479:function(n,t,e){e.d(t,{x:function(){return a}});var r=e(8174);function a(n){r.Am.error(n,{position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"})}}}]);
//# sourceMappingURL=295.5a6bcedb.chunk.js.map