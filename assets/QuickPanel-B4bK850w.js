import{s as k,S as I,u as N,a as S,b as T,c as v,r as L,j as e,t as C,d as i,T as d,f as p,D as m,L as u,e as s,g as c,h as y,F as f,i as b,k as g,l as O}from"./index-Db1G4GFK.js";import{L as o}from"./ListSubheader-CyAfKHC_.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},a=new Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="f02b8739-5ab5-488b-a4d3-571b55a6e226",t._sentryDebugIdIdentifier="sentry-dbid-f02b8739-5ab5-488b-a4d3-571b55a6e226")}catch{}})();const M=k(I)(()=>({"& .MuiDrawer-paper":{width:280}}));function P(){const t=N(),a=S(T),w=S(v),[r,D]=L.useState(["notifications"]),l=n=>()=>{const x=r.indexOf(n),h=[...r];x===-1?h.push(n):h.splice(x,1),D(h)};return e(M,{open:w,anchor:"right",onOpen:()=>{},onClose:()=>t(C()),disableSwipeToOpen:!0,children:i(O,{children:[e(o,{component:"div",children:"Today"}),i("div",{className:"mb-0 px-24 py-16",children:[e(d,{className:"mb-12 text-32",color:"text.secondary",children:p(new Date,"eeee")}),i("div",{className:"flex",children:[e(d,{className:"text-32 leading-none",color:"text.secondary",children:p(new Date,"dd")}),e(d,{className:"text-16 leading-none",color:"text.secondary",children:"th"}),e(d,{className:"text-32 leading-none",color:"text.secondary",children:p(new Date,"MMMM")})]})]}),e(m,{}),i(u,{children:[e(o,{component:"div",children:"Events"}),a&&a.events.map(n=>e(s,{children:e(c,{primary:n.title,secondary:n.detail})},n.id))]}),e(m,{}),i(u,{children:[e(o,{component:"div",children:"Notes"}),a&&a.notes.map(n=>e(s,{children:e(c,{primary:n.title,secondary:n.detail})},n.id))]}),e(m,{}),i(u,{children:[e(o,{component:"div",children:"Quick Settings"}),i(s,{children:[e(y,{className:"min-w-40",children:e(f,{children:"material-outline:notifications"})}),e(c,{primary:"Notifications"}),e(b,{children:e(g,{color:"primary",onChange:l("notifications"),checked:r.indexOf("notifications")!==-1})})]}),i(s,{children:[e(y,{className:"min-w-40",children:e(f,{children:"material-outline:cloud"})}),e(c,{primary:"Cloud Sync"}),e(b,{children:e(g,{color:"secondary",onChange:l("cloudSync"),checked:r.indexOf("cloudSync")!==-1})})]}),i(s,{children:[e(y,{className:"min-w-40",children:e(f,{children:"material-outline:brightness_high"})}),e(c,{primary:"Retro Thrusters"}),e(b,{children:e(g,{color:"primary",onChange:l("retroThrusters"),checked:r.indexOf("retroThrusters")!==-1})})]})]})]})})}export{P as default};
//# sourceMappingURL=QuickPanel-B4bK850w.js.map
