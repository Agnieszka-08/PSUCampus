import{r as p,j as e}from"./app-D57K0b4Z.js";/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,o,i)=>i?i.toUpperCase():o.toLowerCase()),j=t=>{const r=w(t);return r.charAt(0).toUpperCase()+r.slice(1)},b=(...t)=>t.filter((r,o,i)=>!!r&&r.trim()!==""&&i.indexOf(r)===o).join(" ").trim(),k=t=>{for(const r in t)if(r.startsWith("aria-")||r==="role"||r==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=p.forwardRef(({color:t="currentColor",size:r=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:l="",children:a,iconNode:u,...x},v)=>p.createElement("svg",{ref:v,...C,width:r,height:r,stroke:t,strokeWidth:i?Number(o)*24/Number(r):o,className:b("lucide",l),...!a&&!k(x)&&{"aria-hidden":"true"},...x},[...u.map(([n,s])=>p.createElement(n,s)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=(t,r)=>{const o=p.forwardRef(({className:i,...l},a)=>p.createElement(S,{ref:a,iconNode:r,className:b(`lucide-${_(j(t))}`,`lucide-${t}`,i),...l}));return o.displayName=j(t),o};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],A=m("award",$);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],N=m("bell",B);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],z=m("briefcase",D);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],L=m("clock",E);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],F=m("map-pin",T),c="#003366",h="#FFB81C",P="#E8F0F7";function R({popupInfo:t,onClose:r}){if(!t)return null;const o=t,[i,l]=p.useState("events"),a=[...o.happenings||[]].sort((n,s)=>new Date(n.created_at)-new Date(s.created_at)),u=[...o.achievements||[]].sort((n,s)=>new Date(n.created_at)-new Date(s.created_at)),x=[...o.services||[]].sort((n,s)=>new Date(n.created_at)-new Date(s.created_at)),v=[...o.announcements||[]].sort((n,s)=>new Date(n.created_at)-new Date(s.created_at));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[e.jsxs("div",{style:{background:`linear-gradient(135deg, ${c} 0%, ${c}dd 100%)`,padding:"12px",borderRadius:"8px 8px 0 0",borderBottom:`3px solid ${h}`,display:"flex",alignItems:"center",gap:12},children:[e.jsx(F,{size:24,color:h}),e.jsx("h3",{style:{fontWeight:700,color:h,fontSize:18,margin:0},children:o.name})]}),o.description&&e.jsx("div",{style:{padding:"10px 12px",background:P,color:"#333",borderLeft:`4px solid ${h}`,fontSize:14,lineHeight:1.5},children:o.description}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(110px, 1fr))",gap:10,padding:"10px 6px"},children:[e.jsx(f,{label:"Events",icon:e.jsx(L,{size:16}),active:i==="events",onClick:()=>l("events")}),e.jsx(f,{label:"Achievements",icon:e.jsx(A,{size:16}),active:i==="achievements",onClick:()=>l("achievements")}),e.jsx(f,{label:"Services",icon:e.jsx(z,{size:16}),active:i==="services",onClick:()=>l("services")}),e.jsx(f,{label:"Announcements",icon:e.jsx(N,{size:16}),active:i==="announcements",onClick:()=>l("announcements")})]}),e.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"0 6px"},children:[i==="events"&&e.jsx(e.Fragment,{children:a.length>0?a.map((n,s)=>e.jsxs(d,{children:[e.jsx(g,{date:n.created_at}),n.happenings||"No event details.",n.picture&&e.jsx(y,{src:n.picture,alt:"Event"}),n.video&&e.jsx("video",{src:n.video,controls:!0,style:{width:"100%",borderRadius:8,marginTop:10,border:`2px solid ${c}`}})]},s)):e.jsx(d,{title:"Events",children:"No events available."})}),i==="achievements"&&e.jsx(e.Fragment,{children:u.length>0?u.map((n,s)=>e.jsxs(d,{children:[e.jsx(g,{date:n.created_at}),n.achievements||"No achievement text.",n.achievement_pic&&e.jsx(y,{src:n.achievement_pic,alt:"Achievement"})]},s)):e.jsx(d,{title:"Achievements",children:"No achievements available."})}),i==="services"&&e.jsx(e.Fragment,{children:x.length>0?x.map((n,s)=>e.jsxs(d,{children:[e.jsx(g,{date:n.created_at}),n.services||"No service description."]},s)):e.jsx(d,{title:"Services",children:"No services available."})}),i==="announcements"&&e.jsx(e.Fragment,{children:v.length>0?v.map((n,s)=>e.jsxs(d,{children:[e.jsx(g,{date:n.created_at}),n.announcement||"No announcement text."]},s)):e.jsx(d,{title:"Announcements",children:"No announcements yet."})})]}),e.jsx("button",{onClick:r,style:{marginTop:12,width:"100%",background:"#fff",color:c,border:`2px solid ${c}`,padding:"12px 16px",borderRadius:8,cursor:"pointer",fontSize:14,fontWeight:600},children:"Close"})]})}function f({label:t,icon:r,active:o,onClick:i}){return e.jsxs("button",{onClick:i,style:{padding:"14px 10px",borderRadius:10,border:"none",fontWeight:600,cursor:"pointer",background:o?c:"#ffffff",color:o?"#fff":c,display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"0 1px 4px rgba(0,0,0,0.15)",fontSize:13},children:[r,e.jsx("span",{style:{marginTop:4},children:t})]})}function d({title:t,children:r}){return e.jsxs("div",{style:{marginBottom:16},children:[e.jsx("div",{style:{fontSize:12,fontWeight:600,color:c,textTransform:"uppercase",marginBottom:6},children:t}),e.jsx("div",{style:{padding:12,borderRadius:6,background:"#fff",border:`1.5px solid ${h}`,color:"#333"},children:r})]})}function y({src:t,alt:r}){return e.jsx("div",{style:{width:"100%",height:200,borderRadius:8,overflow:"hidden",marginBottom:16,border:`2px solid ${c}`},children:e.jsx("img",{src:t,alt:r,style:{width:"100%",height:"100%",objectFit:"cover"}})})}function g({date:t}){return t?e.jsx("div",{style:{fontSize:12,color:"#666",marginBottom:6,fontStyle:"italic"},children:new Date(t).toLocaleString()}):null}const M=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"}));export{R as I,F as M,M as a};
