import{d as e,b as t,k as r,j as s,a,e as n,f as o}from"./ui-BUgdJNRx.js";import{r as c}from"./vendor-D4-GdBKu.js";import{u as i}from"./index-Bp323OVb.js";import{u as d,c as l,i as u}from"./index-DzEEfCek.js";var f="Checkbox",[p,b]=e(f),[m,h]=p(f),k=c.forwardRef(((e,o)=>{const{__scopeCheckbox:i,name:d,checked:l,defaultChecked:u,required:f,disabled:p,value:b="on",onCheckedChange:h,form:k,...v}=e,[x,C]=c.useState(null),w=t(o,(e=>C(e))),E=c.useRef(!1),N=!x||(k||!!x.closest("form")),[R=!1,D]=r({prop:l,defaultProp:u,onChange:h}),P=c.useRef(R);return c.useEffect((()=>{const e=null==x?void 0:x.form;if(e){const t=()=>D(P.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}}),[x,D]),s.jsxs(m,{scope:i,state:R,disabled:p,children:[s.jsx(a.button,{type:"button",role:"checkbox","aria-checked":j(R)?"mixed":R,"aria-required":f,"data-state":g(R),"data-disabled":p?"":void 0,disabled:p,value:b,...v,ref:w,onKeyDown:n(e.onKeyDown,(e=>{"Enter"===e.key&&e.preventDefault()})),onClick:n(e.onClick,(e=>{D((e=>!!j(e)||!e)),N&&(E.current=e.isPropagationStopped(),E.current||e.stopPropagation())}))}),N&&s.jsx(y,{control:x,bubbles:!E.current,name:d,value:b,checked:R,required:f,disabled:p,form:k,style:{transform:"translateX(-100%)"},defaultChecked:!j(u)&&u})]})}));k.displayName=f;var v="CheckboxIndicator",x=c.forwardRef(((e,t)=>{const{__scopeCheckbox:r,forceMount:n,...c}=e,i=h(v,r);return s.jsx(o,{present:n||j(i.state)||!0===i.state,children:s.jsx(a.span,{"data-state":g(i.state),"data-disabled":i.disabled?"":void 0,...c,ref:t,style:{pointerEvents:"none",...e.style}})})}));x.displayName=v;var y=e=>{const{control:t,checked:r,bubbles:a=!0,defaultChecked:n,...o}=e,l=c.useRef(null),u=i(r),f=d(t);c.useEffect((()=>{const e=l.current,t=window.HTMLInputElement.prototype,s=Object.getOwnPropertyDescriptor(t,"checked").set;if(u!==r&&s){const t=new Event("click",{bubbles:a});e.indeterminate=j(r),s.call(e,!j(r)&&r),e.dispatchEvent(t)}}),[u,r,a]);const p=c.useRef(!j(r)&&r);return s.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n??p.current,...o,tabIndex:-1,ref:l,style:{...e.style,...f,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function j(e){return"indeterminate"===e}function g(e){return j(e)?"indeterminate":e?"checked":"unchecked"}var C=k,w=x;const E=c.forwardRef((({className:e,...t},r)=>s.jsx(C,{ref:r,className:l("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",e),...t,children:s.jsx(w,{className:l("flex items-center justify-center text-current"),children:s.jsx(u,{className:"h-4 w-4"})})})));E.displayName=C.displayName;export{E as C};
