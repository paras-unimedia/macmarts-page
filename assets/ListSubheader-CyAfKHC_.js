import{aw as g,av as h,s as S,ax as c,a3 as n,r as x,aE as m,a2 as L,a4 as k,m as v,ah as I}from"./index-Db1G4GFK.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="4c9a8792-d972-4c27-9ed6-b8aaf3ec8a8a",t._sentryDebugIdIdentifier="sentry-dbid-4c9a8792-d972-4c27-9ed6-b8aaf3ec8a8a")}catch{}})();function R(t){return g("MuiListSubheader",t)}h("MuiListSubheader",["root","colorPrimary","colorInherit","gutters","inset","sticky"]);const _=["className","color","component","disableGutters","disableSticky","inset"],C=t=>{const{classes:e,color:s,disableGutters:o,inset:i,disableSticky:r}=t,a={root:["root",s!=="default"&&`color${c(s)}`,!o&&"gutters",i&&"inset",!r&&"sticky"]};return I(a,R,e)},w=S("li",{name:"MuiListSubheader",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:s}=t;return[e.root,s.color!=="default"&&e[`color${c(s.color)}`],!s.disableGutters&&e.gutters,s.inset&&e.inset,!s.disableSticky&&e.sticky]}})(({theme:t,ownerState:e})=>n({boxSizing:"border-box",lineHeight:"48px",listStyle:"none",color:(t.vars||t).palette.text.secondary,fontFamily:t.typography.fontFamily,fontWeight:t.typography.fontWeightMedium,fontSize:t.typography.pxToRem(14)},e.color==="primary"&&{color:(t.vars||t).palette.primary.main},e.color==="inherit"&&{color:"inherit"},!e.disableGutters&&{paddingLeft:16,paddingRight:16},e.inset&&{paddingLeft:72},!e.disableSticky&&{position:"sticky",top:0,zIndex:1,backgroundColor:(t.vars||t).palette.background.paper})),d=x.forwardRef(function(e,s){const o=m({props:e,name:"MuiListSubheader"}),{className:i,color:r="default",component:a="li",disableGutters:u=!1,disableSticky:p=!1,inset:b=!1}=o,y=L(o,_),l=n({},o,{color:r,component:a,disableGutters:u,disableSticky:p,inset:b}),f=C(l);return k.jsx(w,n({as:a,className:v(f.root,i),ref:s,ownerState:l},y))});d.muiSkipListHighlight=!0;const M=d;export{M as L};
//# sourceMappingURL=ListSubheader-CyAfKHC_.js.map
