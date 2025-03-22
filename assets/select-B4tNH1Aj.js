import{m as e,d as t,b as n,j as o,a as r,e as a,u as l,o as s,p as i,s as c,l as d,F as u,g as p,i as f,x as m,c as h,w as v,k as g,v as x}from"./ui-BUgdJNRx.js";import{r as w,a as y}from"./vendor-D4-GdBKu.js";import{c as b,v as S,w as C,x as j,y as N,R,a as P,G as _,H as k}from"./index-BSX4fkjp.js";
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=b("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);function I(e,[t,n]){return Math.min(n,Math.max(t,e))}var D=[" ","Enter","ArrowUp","ArrowDown"],E=[" ","Enter"],M="Select",[L,O,H]=e(M),[A,V]=t(M,[H,S]),B=S(),[K,F]=A(M),[W,z]=A(M),U=e=>{const{__scopeSelect:t,children:n,open:r,defaultOpen:a,onOpenChange:l,value:s,defaultValue:i,onValueChange:c,dir:d,name:u,autoComplete:p,disabled:m,required:h,form:x}=e,y=B(t),[b,S]=w.useState(null),[C,j]=w.useState(null),[N,P]=w.useState(!1),_=v(d),[k=!1,T]=g({prop:r,defaultProp:a,onChange:l}),[I,D]=g({prop:s,defaultProp:i,onChange:c}),E=w.useRef(null),M=!b||(x||!!b.closest("form")),[O,H]=w.useState(new Set),A=Array.from(O).map((e=>e.props.value)).join(";");return o.jsx(R,{...y,children:o.jsxs(K,{required:h,scope:t,trigger:b,onTriggerChange:S,valueNode:C,onValueNodeChange:j,valueNodeHasChildren:N,onValueNodeHasChildrenChange:P,contentId:f(),value:I,onValueChange:D,open:k,onOpenChange:T,dir:_,triggerPointerDownPosRef:E,disabled:m,children:[o.jsx(L.Provider,{scope:t,children:o.jsx(W,{scope:e.__scopeSelect,onNativeOptionAdd:w.useCallback((e=>{H((t=>new Set(t).add(e)))}),[]),onNativeOptionRemove:w.useCallback((e=>{H((t=>{const n=new Set(t);return n.delete(e),n}))}),[]),children:n})}),M?o.jsxs(Ie,{"aria-hidden":!0,required:h,tabIndex:-1,name:u,autoComplete:p,value:I,onChange:e=>D(e.target.value),disabled:m,form:x,children:[void 0===I?o.jsx("option",{value:""}):null,Array.from(O)]},A):null]})})};U.displayName=M;var q="SelectTrigger",G=w.forwardRef(((e,t)=>{const{__scopeSelect:l,disabled:s=!1,...i}=e,c=B(l),d=F(q,l),u=d.disabled||s,p=n(t,d.onTriggerChange),f=O(l),m=w.useRef("touch"),[h,v,g]=De((e=>{const t=f().filter((e=>!e.disabled)),n=t.find((e=>e.value===d.value)),o=Ee(t,e,n);void 0!==o&&d.onValueChange(o.value)})),x=e=>{u||(d.onOpenChange(!0),g()),e&&(d.triggerPointerDownPosRef.current={x:Math.round(e.pageX),y:Math.round(e.pageY)})};return o.jsx(C,{asChild:!0,...c,children:o.jsx(r.button,{type:"button",role:"combobox","aria-controls":d.contentId,"aria-expanded":d.open,"aria-required":d.required,"aria-autocomplete":"none",dir:d.dir,"data-state":d.open?"open":"closed",disabled:u,"data-disabled":u?"":void 0,"data-placeholder":Te(d.value)?"":void 0,...i,ref:p,onClick:a(i.onClick,(e=>{e.currentTarget.focus(),"mouse"!==m.current&&x(e)})),onPointerDown:a(i.onPointerDown,(e=>{m.current=e.pointerType;const t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),0===e.button&&!1===e.ctrlKey&&"mouse"===e.pointerType&&(x(e),e.preventDefault())})),onKeyDown:a(i.onKeyDown,(e=>{const t=""!==h.current;e.ctrlKey||e.altKey||e.metaKey||1!==e.key.length||v(e.key),t&&" "===e.key||D.includes(e.key)&&(x(),e.preventDefault())}))})})}));G.displayName=q;var X="SelectValue",Y=w.forwardRef(((e,t)=>{const{__scopeSelect:a,className:s,style:i,children:c,placeholder:d="",...u}=e,p=F(X,a),{onValueNodeHasChildrenChange:f}=p,m=void 0!==c,h=n(t,p.onValueNodeChange);return l((()=>{f(m)}),[f,m]),o.jsx(r.span,{...u,ref:h,style:{pointerEvents:"none"},children:Te(p.value)?o.jsx(o.Fragment,{children:d}):c})}));Y.displayName=X;var Z=w.forwardRef(((e,t)=>{const{__scopeSelect:n,children:a,...l}=e;return o.jsx(r.span,{"aria-hidden":!0,...l,ref:t,children:a||"▼"})}));Z.displayName="SelectIcon";var $=e=>o.jsx(x,{asChild:!0,...e});$.displayName="SelectPortal";var J="SelectContent",Q=w.forwardRef(((e,t)=>{const n=F(J,e.__scopeSelect),[r,a]=w.useState();if(l((()=>{a(new DocumentFragment)}),[]),!n.open){const t=r;return t?y.createPortal(o.jsx(te,{scope:e.__scopeSelect,children:o.jsx(L.Slot,{scope:e.__scopeSelect,children:o.jsx("div",{children:e.children})})}),t):null}return o.jsx(oe,{...e,ref:t})}));Q.displayName=J;var ee=10,[te,ne]=A(J),oe=w.forwardRef(((e,t)=>{const{__scopeSelect:r,position:l="item-aligned",onCloseAutoFocus:f,onEscapeKeyDown:m,onPointerDownOutside:h,side:v,sideOffset:g,align:x,alignOffset:y,arrowPadding:b,collisionBoundary:S,collisionPadding:C,sticky:j,hideWhenDetached:N,avoidCollisions:R,...P}=e,_=F(J,r),[k,T]=w.useState(null),[I,D]=w.useState(null),E=n(t,(e=>T(e))),[M,L]=w.useState(null),[H,A]=w.useState(null),V=O(r),[B,K]=w.useState(!1),W=w.useRef(!1);w.useEffect((()=>{if(k)return s(k)}),[k]),i();const z=w.useCallback((e=>{const[t,...n]=V().map((e=>e.ref.current)),[o]=n.slice(-1),r=document.activeElement;for(const a of e){if(a===r)return;if(null==a||a.scrollIntoView({block:"nearest"}),a===t&&I&&(I.scrollTop=0),a===o&&I&&(I.scrollTop=I.scrollHeight),null==a||a.focus(),document.activeElement!==r)return}}),[V,I]),U=w.useCallback((()=>z([M,k])),[z,M,k]);w.useEffect((()=>{B&&U()}),[B,U]);const{onOpenChange:q,triggerPointerDownPosRef:G}=_;w.useEffect((()=>{if(k){let e={x:0,y:0};const t=t=>{var n,o;e={x:Math.abs(Math.round(t.pageX)-((null==(n=G.current)?void 0:n.x)??0)),y:Math.abs(Math.round(t.pageY)-((null==(o=G.current)?void 0:o.y)??0))}},n=n=>{e.x<=10&&e.y<=10?n.preventDefault():k.contains(n.target)||q(!1),document.removeEventListener("pointermove",t),G.current=null};return null!==G.current&&(document.addEventListener("pointermove",t),document.addEventListener("pointerup",n,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",n,{capture:!0})}}}),[k,q,G]),w.useEffect((()=>{const e=()=>q(!1);return window.addEventListener("blur",e),window.addEventListener("resize",e),()=>{window.removeEventListener("blur",e),window.removeEventListener("resize",e)}}),[q]);const[X,Y]=De((e=>{const t=V().filter((e=>!e.disabled)),n=t.find((e=>e.ref.current===document.activeElement)),o=Ee(t,e,n);o&&setTimeout((()=>o.ref.current.focus()))})),Z=w.useCallback(((e,t,n)=>{const o=!W.current&&!n;(void 0!==_.value&&_.value===t||o)&&(L(e),o&&(W.current=!0))}),[_.value]),$=w.useCallback((()=>null==k?void 0:k.focus()),[k]),Q=w.useCallback(((e,t,n)=>{const o=!W.current&&!n;(void 0!==_.value&&_.value===t||o)&&A(e)}),[_.value]),ee="popper"===l?ae:re,ne=ee===ae?{side:v,sideOffset:g,align:x,alignOffset:y,arrowPadding:b,collisionBoundary:S,collisionPadding:C,sticky:j,hideWhenDetached:N,avoidCollisions:R}:{};return o.jsx(te,{scope:r,content:k,viewport:I,onViewportChange:D,itemRefCallback:Z,selectedItem:M,onItemLeave:$,itemTextRefCallback:Q,focusSelectedItem:U,selectedItemText:H,position:l,isPositioned:B,searchRef:X,children:o.jsx(c,{as:d,allowPinchZoom:!0,children:o.jsx(u,{asChild:!0,trapped:_.open,onMountAutoFocus:e=>{e.preventDefault()},onUnmountAutoFocus:a(f,(e=>{var t;null==(t=_.trigger)||t.focus({preventScroll:!0}),e.preventDefault()})),children:o.jsx(p,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:m,onPointerDownOutside:h,onFocusOutside:e=>e.preventDefault(),onDismiss:()=>_.onOpenChange(!1),children:o.jsx(ee,{role:"listbox",id:_.contentId,"data-state":_.open?"open":"closed",dir:_.dir,onContextMenu:e=>e.preventDefault(),...P,...ne,onPlaced:()=>K(!0),ref:E,style:{display:"flex",flexDirection:"column",outline:"none",...P.style},onKeyDown:a(P.onKeyDown,(e=>{const t=e.ctrlKey||e.altKey||e.metaKey;if("Tab"===e.key&&e.preventDefault(),t||1!==e.key.length||Y(e.key),["ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=V().filter((e=>!e.disabled)).map((e=>e.ref.current));if(["ArrowUp","End"].includes(e.key)&&(t=t.slice().reverse()),["ArrowUp","ArrowDown"].includes(e.key)){const n=e.target,o=t.indexOf(n);t=t.slice(o+1)}setTimeout((()=>z(t))),e.preventDefault()}}))})})})})})}));oe.displayName="SelectContentImpl";var re=w.forwardRef(((e,t)=>{const{__scopeSelect:a,onPlaced:s,...i}=e,c=F(J,a),d=ne(J,a),[u,p]=w.useState(null),[f,m]=w.useState(null),h=n(t,(e=>m(e))),v=O(a),g=w.useRef(!1),x=w.useRef(!0),{viewport:y,selectedItem:b,selectedItemText:S,focusSelectedItem:C}=d,j=w.useCallback((()=>{if(c.trigger&&c.valueNode&&u&&f&&y&&b&&S){const e=c.trigger.getBoundingClientRect(),t=f.getBoundingClientRect(),n=c.valueNode.getBoundingClientRect(),o=S.getBoundingClientRect();if("rtl"!==c.dir){const r=o.left-t.left,a=n.left-r,l=e.left-a,s=e.width+l,i=Math.max(s,t.width),c=window.innerWidth-ee,d=I(a,[ee,Math.max(ee,c-i)]);u.style.minWidth=s+"px",u.style.left=d+"px"}else{const r=t.right-o.right,a=window.innerWidth-n.right-r,l=window.innerWidth-e.right-a,s=e.width+l,i=Math.max(s,t.width),c=window.innerWidth-ee,d=I(a,[ee,Math.max(ee,c-i)]);u.style.minWidth=s+"px",u.style.right=d+"px"}const r=v(),a=window.innerHeight-2*ee,l=y.scrollHeight,i=window.getComputedStyle(f),d=parseInt(i.borderTopWidth,10),p=parseInt(i.paddingTop,10),m=parseInt(i.borderBottomWidth,10),h=d+p+l+parseInt(i.paddingBottom,10)+m,x=Math.min(5*b.offsetHeight,h),w=window.getComputedStyle(y),C=parseInt(w.paddingTop,10),j=parseInt(w.paddingBottom,10),N=e.top+e.height/2-ee,R=a-N,P=b.offsetHeight/2,_=d+p+(b.offsetTop+P),k=h-_;if(_<=N){const e=r.length>0&&b===r[r.length-1].ref.current;u.style.bottom="0px";const t=f.clientHeight-y.offsetTop-y.offsetHeight,n=_+Math.max(R,P+(e?j:0)+t+m);u.style.height=n+"px"}else{const e=r.length>0&&b===r[0].ref.current;u.style.top="0px";const t=Math.max(N,d+y.offsetTop+(e?C:0)+P)+k;u.style.height=t+"px",y.scrollTop=_-N+y.offsetTop}u.style.margin=`${ee}px 0`,u.style.minHeight=x+"px",u.style.maxHeight=a+"px",null==s||s(),requestAnimationFrame((()=>g.current=!0))}}),[v,c.trigger,c.valueNode,u,f,y,b,S,c.dir,s]);l((()=>j()),[j]);const[N,R]=w.useState();l((()=>{f&&R(window.getComputedStyle(f).zIndex)}),[f]);const P=w.useCallback((e=>{e&&!0===x.current&&(j(),null==C||C(),x.current=!1)}),[j,C]);return o.jsx(le,{scope:a,contentWrapper:u,shouldExpandOnScrollRef:g,onScrollButtonChange:P,children:o.jsx("div",{ref:p,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:N},children:o.jsx(r.div,{...i,ref:h,style:{boxSizing:"border-box",maxHeight:"100%",...i.style}})})})}));re.displayName="SelectItemAlignedPosition";var ae=w.forwardRef(((e,t)=>{const{__scopeSelect:n,align:r="start",collisionPadding:a=ee,...l}=e,s=B(n);return o.jsx(j,{...s,...l,ref:t,align:r,collisionPadding:a,style:{boxSizing:"border-box",...l.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})}));ae.displayName="SelectPopperPosition";var[le,se]=A(J,{}),ie="SelectViewport",ce=w.forwardRef(((e,t)=>{const{__scopeSelect:l,nonce:s,...i}=e,c=ne(ie,l),d=se(ie,l),u=n(t,c.onViewportChange),p=w.useRef(0);return o.jsxs(o.Fragment,{children:[o.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:s}),o.jsx(L.Slot,{scope:l,children:o.jsx(r.div,{"data-radix-select-viewport":"",role:"presentation",...i,ref:u,style:{position:"relative",flex:1,overflow:"hidden auto",...i.style},onScroll:a(i.onScroll,(e=>{const t=e.currentTarget,{contentWrapper:n,shouldExpandOnScrollRef:o}=d;if((null==o?void 0:o.current)&&n){const e=Math.abs(p.current-t.scrollTop);if(e>0){const o=window.innerHeight-2*ee,r=parseFloat(n.style.minHeight),a=parseFloat(n.style.height),l=Math.max(r,a);if(l<o){const r=l+e,a=Math.min(o,r),s=r-a;n.style.height=a+"px","0px"===n.style.bottom&&(t.scrollTop=s>0?s:0,n.style.justifyContent="flex-end")}}}p.current=t.scrollTop}))})})]})}));ce.displayName=ie;var de="SelectGroup",[ue,pe]=A(de);w.forwardRef(((e,t)=>{const{__scopeSelect:n,...a}=e,l=f();return o.jsx(ue,{scope:n,id:l,children:o.jsx(r.div,{role:"group","aria-labelledby":l,...a,ref:t})})})).displayName=de;var fe="SelectLabel",me=w.forwardRef(((e,t)=>{const{__scopeSelect:n,...a}=e,l=pe(fe,n);return o.jsx(r.div,{id:l.id,...a,ref:t})}));me.displayName=fe;var he="SelectItem",[ve,ge]=A(he),xe=w.forwardRef(((e,t)=>{const{__scopeSelect:l,value:s,disabled:i=!1,textValue:c,...d}=e,u=F(he,l),p=ne(he,l),m=u.value===s,[h,v]=w.useState(c??""),[g,x]=w.useState(!1),y=n(t,(e=>{var t;return null==(t=p.itemRefCallback)?void 0:t.call(p,e,s,i)})),b=f(),S=w.useRef("touch"),C=()=>{i||(u.onValueChange(s),u.onOpenChange(!1))};if(""===s)throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return o.jsx(ve,{scope:l,value:s,disabled:i,textId:b,isSelected:m,onItemTextChange:w.useCallback((e=>{v((t=>t||((null==e?void 0:e.textContent)??"").trim()))}),[]),children:o.jsx(L.ItemSlot,{scope:l,value:s,disabled:i,textValue:h,children:o.jsx(r.div,{role:"option","aria-labelledby":b,"data-highlighted":g?"":void 0,"aria-selected":m&&g,"data-state":m?"checked":"unchecked","aria-disabled":i||void 0,"data-disabled":i?"":void 0,tabIndex:i?void 0:-1,...d,ref:y,onFocus:a(d.onFocus,(()=>x(!0))),onBlur:a(d.onBlur,(()=>x(!1))),onClick:a(d.onClick,(()=>{"mouse"!==S.current&&C()})),onPointerUp:a(d.onPointerUp,(()=>{"mouse"===S.current&&C()})),onPointerDown:a(d.onPointerDown,(e=>{S.current=e.pointerType})),onPointerMove:a(d.onPointerMove,(e=>{var t;S.current=e.pointerType,i?null==(t=p.onItemLeave)||t.call(p):"mouse"===S.current&&e.currentTarget.focus({preventScroll:!0})})),onPointerLeave:a(d.onPointerLeave,(e=>{var t;e.currentTarget===document.activeElement&&(null==(t=p.onItemLeave)||t.call(p))})),onKeyDown:a(d.onKeyDown,(e=>{var t;""!==(null==(t=p.searchRef)?void 0:t.current)&&" "===e.key||(E.includes(e.key)&&C()," "===e.key&&e.preventDefault())}))})})})}));xe.displayName=he;var we="SelectItemText",ye=w.forwardRef(((e,t)=>{const{__scopeSelect:a,className:s,style:i,...c}=e,d=F(we,a),u=ne(we,a),p=ge(we,a),f=z(we,a),[m,h]=w.useState(null),v=n(t,(e=>h(e)),p.onItemTextChange,(e=>{var t;return null==(t=u.itemTextRefCallback)?void 0:t.call(u,e,p.value,p.disabled)})),g=null==m?void 0:m.textContent,x=w.useMemo((()=>o.jsx("option",{value:p.value,disabled:p.disabled,children:g},p.value)),[p.disabled,p.value,g]),{onNativeOptionAdd:b,onNativeOptionRemove:S}=f;return l((()=>(b(x),()=>S(x))),[b,S,x]),o.jsxs(o.Fragment,{children:[o.jsx(r.span,{id:p.textId,...c,ref:v}),p.isSelected&&d.valueNode&&!d.valueNodeHasChildren?y.createPortal(c.children,d.valueNode):null]})}));ye.displayName=we;var be="SelectItemIndicator",Se=w.forwardRef(((e,t)=>{const{__scopeSelect:n,...a}=e;return ge(be,n).isSelected?o.jsx(r.span,{"aria-hidden":!0,...a,ref:t}):null}));Se.displayName=be;var Ce="SelectScrollUpButton",je=w.forwardRef(((e,t)=>{const r=ne(Ce,e.__scopeSelect),a=se(Ce,e.__scopeSelect),[s,i]=w.useState(!1),c=n(t,a.onScrollButtonChange);return l((()=>{if(r.viewport&&r.isPositioned){let e=function(){const e=t.scrollTop>0;i(e)};const t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}}),[r.viewport,r.isPositioned]),s?o.jsx(Pe,{...e,ref:c,onAutoScroll:()=>{const{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop-t.offsetHeight)}}):null}));je.displayName=Ce;var Ne="SelectScrollDownButton",Re=w.forwardRef(((e,t)=>{const r=ne(Ne,e.__scopeSelect),a=se(Ne,e.__scopeSelect),[s,i]=w.useState(!1),c=n(t,a.onScrollButtonChange);return l((()=>{if(r.viewport&&r.isPositioned){let e=function(){const e=t.scrollHeight-t.clientHeight,n=Math.ceil(t.scrollTop)<e;i(n)};const t=r.viewport;return e(),t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}}),[r.viewport,r.isPositioned]),s?o.jsx(Pe,{...e,ref:c,onAutoScroll:()=>{const{viewport:e,selectedItem:t}=r;e&&t&&(e.scrollTop=e.scrollTop+t.offsetHeight)}}):null}));Re.displayName=Ne;var Pe=w.forwardRef(((e,t)=>{const{__scopeSelect:n,onAutoScroll:s,...i}=e,c=ne("SelectScrollButton",n),d=w.useRef(null),u=O(n),p=w.useCallback((()=>{null!==d.current&&(window.clearInterval(d.current),d.current=null)}),[]);return w.useEffect((()=>()=>p()),[p]),l((()=>{var e;const t=u().find((e=>e.ref.current===document.activeElement));null==(e=null==t?void 0:t.ref.current)||e.scrollIntoView({block:"nearest"})}),[u]),o.jsx(r.div,{"aria-hidden":!0,...i,ref:t,style:{flexShrink:0,...i.style},onPointerDown:a(i.onPointerDown,(()=>{null===d.current&&(d.current=window.setInterval(s,50))})),onPointerMove:a(i.onPointerMove,(()=>{var e;null==(e=c.onItemLeave)||e.call(c),null===d.current&&(d.current=window.setInterval(s,50))})),onPointerLeave:a(i.onPointerLeave,(()=>{p()}))})})),_e=w.forwardRef(((e,t)=>{const{__scopeSelect:n,...a}=e;return o.jsx(r.div,{"aria-hidden":!0,...a,ref:t})}));_e.displayName="SelectSeparator";var ke="SelectArrow";function Te(e){return""===e||void 0===e}w.forwardRef(((e,t)=>{const{__scopeSelect:n,...r}=e,a=B(n),l=F(ke,n),s=ne(ke,n);return l.open&&"popper"===s.position?o.jsx(N,{...a,...r,ref:t}):null})).displayName=ke;var Ie=w.forwardRef(((e,t)=>{const{value:r,...a}=e,l=w.useRef(null),s=n(t,l),i=function(e){const t=w.useRef({value:e,previous:e});return w.useMemo((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}(r);return w.useEffect((()=>{const e=l.current,t=window.HTMLSelectElement.prototype,n=Object.getOwnPropertyDescriptor(t,"value").set;if(i!==r&&n){const t=new Event("change",{bubbles:!0});n.call(e,r),e.dispatchEvent(t)}}),[i,r]),o.jsx(m,{asChild:!0,children:o.jsx("select",{...a,ref:s,defaultValue:r})})}));function De(e){const t=h(e),n=w.useRef(""),o=w.useRef(0),r=w.useCallback((e=>{const r=n.current+e;t(r),function e(t){n.current=t,window.clearTimeout(o.current),""!==t&&(o.current=window.setTimeout((()=>e("")),1e3))}(r)}),[t]),a=w.useCallback((()=>{n.current="",window.clearTimeout(o.current)}),[]);return w.useEffect((()=>()=>window.clearTimeout(o.current)),[]),[n,r,a]}function Ee(e,t,n){const o=t.length>1&&Array.from(t).every((e=>e===t[0]))?t[0]:t,r=n?e.indexOf(n):-1;let a=(l=e,s=Math.max(r,0),l.map(((e,t)=>l[(s+t)%l.length])));var l,s;1===o.length&&(a=a.filter((e=>e!==n)));const i=a.find((e=>e.textValue.toLowerCase().startsWith(o.toLowerCase())));return i!==n?i:void 0}Ie.displayName="BubbleSelect";var Me=G,Le=Z,Oe=$,He=Q,Ae=ce,Ve=me,Be=xe,Ke=ye,Fe=Se,We=je,ze=Re,Ue=_e;const qe=U,Ge=Y,Xe=w.forwardRef((({className:e,children:t,...n},r)=>o.jsxs(Me,{ref:r,className:P("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...n,children:[t,o.jsx(Le,{asChild:!0,children:o.jsx(_,{className:"h-4 w-4 opacity-50"})})]})));Xe.displayName=Me.displayName;const Ye=w.forwardRef((({className:e,...t},n)=>o.jsx(We,{ref:n,className:P("flex cursor-default items-center justify-center py-1",e),...t,children:o.jsx(T,{className:"h-4 w-4"})})));Ye.displayName=We.displayName;const Ze=w.forwardRef((({className:e,...t},n)=>o.jsx(ze,{ref:n,className:P("flex cursor-default items-center justify-center py-1",e),...t,children:o.jsx(_,{className:"h-4 w-4"})})));Ze.displayName=ze.displayName;const $e=w.forwardRef((({className:e,children:t,position:n="popper",...r},a)=>o.jsx(Oe,{children:o.jsxs(He,{ref:a,className:P("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","popper"===n&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:n,...r,children:[o.jsx(Ye,{}),o.jsx(Ae,{className:P("p-1","popper"===n&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),o.jsx(Ze,{})]})})));$e.displayName=He.displayName;w.forwardRef((({className:e,...t},n)=>o.jsx(Ve,{ref:n,className:P("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t}))).displayName=Ve.displayName;const Je=w.forwardRef((({className:e,children:t,...n},r)=>o.jsxs(Be,{ref:r,className:P("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",e),...n,children:[o.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:o.jsx(Fe,{children:o.jsx(k,{className:"h-4 w-4"})})}),o.jsx(Ke,{children:t})]})));Je.displayName=Be.displayName;w.forwardRef((({className:e,...t},n)=>o.jsx(Ue,{ref:n,className:P("-mx-1 my-1 h-px bg-muted",e),...t}))).displayName=Ue.displayName;export{qe as S,Xe as a,Ge as b,$e as c,Je as d};
