import{au as h,a4 as c,av as g,aw as P,s as j,b8 as B,b9 as _,ax as l,a3 as s,aD as M,r as u,aE as w,a2 as E,m as R,ah as S}from"./index-Db1G4GFK.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},o=new Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="762024d8-708e-4408-bed2-3b9bd76a5e84",e._sentryDebugIdIdentifier="sentry-dbid-762024d8-708e-4408-bed2-3b9bd76a5e84")}catch{}})();const D=h(c.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),H=h(c.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),O=h(c.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function U(e){return P("MuiCheckbox",e)}const V=g("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),b=V,L=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],N=e=>{const{classes:o,indeterminate:t,color:a,size:r}=e,n={root:["root",t&&"indeterminate",`color${l(a)}`,`size${l(r)}`]},d=S(n,U,o);return s({},o,d)},F=j(B,{shouldForwardProp:e=>_(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${l(t.size)}`],t.color!=="default"&&o[`color${l(t.color)}`]]}})(({theme:e,ownerState:o})=>s({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:M(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${b.checked}, &.${b.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${b.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),T=c.jsx(H,{}),W=c.jsx(D,{}),q=c.jsx(O,{}),A=u.forwardRef(function(o,t){var a,r;const n=w({props:o,name:"MuiCheckbox"}),{checkedIcon:d=T,color:v="primary",icon:I=W,indeterminate:i=!1,indeterminateIcon:x=q,inputProps:z,size:p="medium",className:y}=n,$=E(n,L),m=i?x:I,k=i?x:d,C=s({},n,{color:v,indeterminate:i,size:p}),f=N(C);return c.jsx(F,s({type:"checkbox",inputProps:s({"data-indeterminate":i},z),icon:u.cloneElement(m,{fontSize:(a=m.props.fontSize)!=null?a:p}),checkedIcon:u.cloneElement(k,{fontSize:(r=k.props.fontSize)!=null?r:p}),ownerState:C,ref:t,className:R(f.root,y)},$,{classes:f}))}),J=A;export{J as C};
//# sourceMappingURL=Checkbox-BhZaxc1j.js.map
