import{o as Te,t as se}from"../chunks/index.b7dd4f9f.js";import{S as Je,a as Ke,I as D,g as De,f as Ne,b as _e,c as ie,s as N,i as ge,d as Y,e as F,P as Ce,h as Be}from"../chunks/singletons.db5ade20.js";import{u as Ge}from"../chunks/parse.5567e4e2.js";function We(a,o){return a==="/"||o==="ignore"?a:o==="never"?a.endsWith("/")?a.slice(0,-1):a:o==="always"&&!a.endsWith("/")?a+"/":a}function Ye(a){return a.split("%25").map(decodeURI).join("%25")}function Xe(a){for(const o in a)a[o]=decodeURIComponent(a[o]);return a}const Qe=["href","pathname","search","searchParams","toString","toJSON"];function Ze(a,o){const c=new URL(a);for(const f of Qe){let _=c[f];Object.defineProperty(c,f,{get(){return o(),_},enumerable:!0,configurable:!0})}return et(c),c}function et(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const tt="/__data.json";function nt(a){return a.replace(/\/$/,"")+tt}function Me(a){try{return JSON.parse(sessionStorage[a])}catch{}}function qe(a,o){const c=JSON.stringify(o);try{sessionStorage[a]=c}catch{}}function at(...a){let o=5381;for(const c of a)if(typeof c=="string"){let f=c.length;for(;f;)o=o*33^c.charCodeAt(--f)}else if(ArrayBuffer.isView(c)){const f=new Uint8Array(c.buffer,c.byteOffset,c.byteLength);let _=f.length;for(;_;)o=o*33^f[--_]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const le=window.fetch;window.fetch=(a,o)=>((a instanceof Request?a.method:o?.method||"GET")!=="GET"&&Q.delete(be(a)),le(a,o));const Q=new Map;function rt(a,o){const c=be(a,o),f=document.querySelector(c);if(f?.textContent){const{body:_,...v}=JSON.parse(f.textContent),k=f.getAttribute("data-ttl");return k&&Q.set(c,{body:_,init:v,ttl:1e3*Number(k)}),Promise.resolve(new Response(_,v))}return le(a,o)}function ot(a,o,c){if(Q.size>0){const f=be(a,c),_=Q.get(f);if(_){if(performance.now()<_.ttl&&["default","force-cache","only-if-cached",void 0].includes(c?.cache))return new Response(_.body,_.init);Q.delete(f)}}return le(o,c)}function be(a,o){let f=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;if(o?.headers||o?.body){const _=[];o.headers&&_.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&_.push(o.body),f+=`[data-hash="${at(..._)}"]`}return f}const st=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function it(a){const o=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${ct(a).map(f=>{const _=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(f);if(_)return o.push({name:_[1],matcher:_[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const v=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(f);if(v)return o.push({name:v[1],matcher:v[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!f)return;const k=f.split(/\[(.+?)\](?!\])/);return"/"+k.map((b,w)=>{if(w%2){if(b.startsWith("x+"))return ye(String.fromCharCode(parseInt(b.slice(2),16)));if(b.startsWith("u+"))return ye(String.fromCharCode(...b.slice(2).split("-").map(T=>parseInt(T,16))));const h=st.exec(b);if(!h)throw new Error(`Invalid param: ${b}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,I,U,x,L]=h;return o.push({name:x,matcher:L,optional:!!I,rest:!!U,chained:U?w===1&&k[0]==="":!1}),U?"(.*?)":I?"([^/]*)?":"([^/]+?)"}return ye(b)}).join("")}).join("")}/?$`),params:o}}function lt(a){return!/^\([^)]+\)$/.test(a)}function ct(a){return a.slice(1).split("/").filter(lt)}function ft(a,o,c){const f={},_=a.slice(1);let v=0;for(let k=0;k<o.length;k+=1){const g=o[k],b=_[k-v];if(g.chained&&g.rest&&v){f[g.name]=_.slice(k-v,k+1).filter(w=>w).join("/"),v=0;continue}if(b===void 0){g.rest&&(f[g.name]="");continue}if(!g.matcher||c[g.matcher](b)){f[g.name]=b;const w=o[k+1],h=_[k+1];w&&!w.rest&&w.optional&&h&&(v=0);continue}if(g.optional&&g.chained){v++;continue}return}if(!v)return f}function ye(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ut({nodes:a,server_loads:o,dictionary:c,matchers:f}){const _=new Set(o);return Object.entries(c).map(([g,[b,w,h]])=>{const{pattern:I,params:U}=it(g),x={id:g,exec:L=>{const T=I.exec(L);if(T)return ft(T,U,f)},errors:[1,...h||[]].map(L=>a[L]),layouts:[0,...w||[]].map(k),leaf:v(b)};return x.errors.length=x.layouts.length=Math.max(x.errors.length,x.layouts.length),x});function v(g){const b=g<0;return b&&(g=~g),[b,a[g]]}function k(g){return g===void 0?g:[_.has(g),a[g]]}}let X=class{constructor(o,c){this.status=o,typeof c=="string"?this.body={message:c}:c?this.body=c:this.body={message:`Error: ${o}`}}toString(){return JSON.stringify(this.body)}},Fe=class{constructor(o,c){this.status=o,this.location=c}};async function dt(a){for(const o in a)if(typeof a[o]?.then=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([c,f])=>[c,await f])));return a}function pt(a){return a.filter(o=>o!=null)}const H=Me(Je)??{},W=Me(Ke)??{};function we(a){H[a]=Y()}function ht(a,o){const c=ut(a),f=a.nodes[0],_=a.nodes[1];f(),_();const v=document.documentElement,k=[],g=[];let b=null;const w={before_navigate:[],after_navigate:[]};let h={branch:[],error:null,url:null},I=!1,U=!1,x=!0,L=!1,T=!1,J=!1,C=!1,M,P=history.state?.[D];P||(P=Date.now(),history.replaceState({...history.state,[D]:P},"",location.href));const ce=H[P];ce&&(history.scrollRestoration="manual",scrollTo(ce.x,ce.y));let q,Ee,Z;async function Se(){Z=Z||Promise.resolve(),await Z,Z=null;const e=new URL(location.href),t=V(e,!0);b=null,await Pe(t,e,[])}function ke(e){g.some(t=>t?.snapshot)&&(W[e]=g.map(t=>t?.snapshot?.capture()))}function Re(e){W[e]?.forEach((t,n)=>{g[n]?.snapshot?.restore(t)})}function xe(){we(P),qe(Je,H),ke(P),qe(Ke,W)}async function fe(e,{noScroll:t=!1,replaceState:n=!1,keepFocus:r=!1,state:s={},invalidateAll:i=!1},d,l){return typeof e=="string"&&(e=new URL(e,De(document))),ae({url:e,scroll:t?Y():null,keepfocus:r,redirect_chain:d,details:{state:s,replaceState:n},nav_token:l,accepted:()=>{i&&(C=!0)},blocked:()=>{},type:"goto"})}async function Le(e){return b={id:e.id,promise:Oe(e).then(t=>(t.type==="loaded"&&t.state.error&&(b=null),t))},b.promise}async function ee(...e){const n=c.filter(r=>e.some(s=>r.exec(s))).map(r=>Promise.all([...r.layouts,r.leaf].map(s=>s?.[1]())));await Promise.all(n)}async function Pe(e,t,n,r,s,i={},d){Ee=i;let l=e&&await Oe(e);if(!l){if(ge(t,F))return await K(t);l=await je(t,{id:null},await B(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=e?.url||t,Ee!==i)return!1;if(l.type==="redirect")if(n.length>10||n.includes(t.pathname))l=await te({status:500,error:await B(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return fe(new URL(l.location,t).href,{},[...n,t.pathname],i),!1;else l.props.page?.status>=400&&await N.updated.check()&&await K(t);if(k.length=0,C=!1,L=!0,r&&(we(r),ke(r)),l.props.page?.url&&l.props.page.url.pathname!==t.pathname&&(t.pathname=l.props.page?.url.pathname),s&&s.details){const{details:u}=s,m=u.replaceState?0:1;if(u.state[D]=P+=m,history[u.replaceState?"replaceState":"pushState"](u.state,"",t),!u.replaceState){let y=P+1;for(;W[y]||H[y];)delete W[y],delete H[y],y+=1}}if(b=null,U?(h=l.state,l.props.page&&(l.props.page.url=t),M.$set(l.props)):Ue(l),s){const{scroll:u,keepfocus:m}=s,{activeElement:y}=document;if(await se(),x){const R=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));u?scrollTo(u.x,u.y):R?R.scrollIntoView():scrollTo(0,0)}const p=document.activeElement!==y&&document.activeElement!==document.body;!m&&!p&&await ve()}else await se();x=!0,l.props.page&&(q=l.props.page),d&&d(),L=!1}function Ue(e){h=e.state;const t=document.querySelector("style[data-sveltekit]");t&&t.remove(),q=e.props.page,M=new a.root({target:o,props:{...e.props,stores:N,components:g},hydrate:!0}),Re(P);const n={from:null,to:{params:h.params,route:{id:h.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter"};w.after_navigate.forEach(r=>r(n)),U=!0}async function z({url:e,params:t,branch:n,status:r,error:s,route:i,form:d}){let l="never";for(const E of n)E?.slash!==void 0&&(l=E.slash);e.pathname=We(e.pathname,l),e.search=e.search;const u={type:"loaded",state:{url:e,params:t,branch:n,error:s,route:i},props:{constructors:pt(n).map(E=>E.node.component)}};d!==void 0&&(u.props.form=d);let m={},y=!q,p=0;for(let E=0;E<Math.max(n.length,h.branch.length);E+=1){const A=n[E],re=h.branch[E];A?.data!==re?.data&&(y=!0),A&&(m={...m,...A.data},y&&(u.props[`data_${p}`]=m),p+=1)}return(!h.url||e.href!==h.url.href||h.error!==s||d!==void 0&&d!==q.form||y)&&(u.props.page={error:s,params:t,route:{id:i?.id??null},status:r,url:new URL(e),form:d??null,data:y?m:q.data}),u}async function ue({loader:e,parent:t,url:n,params:r,route:s,server_data_node:i}){let d=null;const l={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},u=await e();if(u.universal?.load){let m=function(...p){for(const R of p){const{href:E}=new URL(R,n);l.dependencies.add(E)}};const y={route:{get id(){return l.route=!0,s.id}},params:new Proxy(r,{get:(p,R)=>(l.params.add(R),p[R])}),data:i?.data??null,url:Ze(n,()=>{l.url=!0}),async fetch(p,R){let E;p instanceof Request?(E=p.url,R={body:p.method==="GET"||p.method==="HEAD"?void 0:await p.blob(),cache:p.cache,credentials:p.credentials,headers:p.headers,integrity:p.integrity,keepalive:p.keepalive,method:p.method,mode:p.mode,redirect:p.redirect,referrer:p.referrer,referrerPolicy:p.referrerPolicy,signal:p.signal,...R}):E=p;const A=new URL(E,n);return m(A.href),A.origin===n.origin&&(E=A.href.slice(n.origin.length)),U?ot(E,A.href,R):rt(E,R)},setHeaders:()=>{},depends:m,parent(){return l.parent=!0,t()}};d=await u.universal.load.call(null,y)??null,d=d?await dt(d):null}return{node:u,loader:e,server:i,universal:u.universal?.load?{type:"data",data:d,uses:l}:null,data:d??i?.data??null,slash:u.universal?.trailingSlash??i?.slash}}function Ae(e,t,n,r,s){if(C)return!0;if(!r)return!1;if(r.parent&&e||r.route&&t||r.url&&n)return!0;for(const i of r.params)if(s[i]!==h.params[i])return!0;for(const i of r.dependencies)if(k.some(d=>d(new URL(i))))return!0;return!1}function de(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}async function Oe({id:e,invalidating:t,url:n,params:r,route:s}){if(b?.id===e)return b.promise;const{errors:i,layouts:d,leaf:l}=s,u=[...d,l];i.forEach(S=>S?.().catch(()=>{})),u.forEach(S=>S?.[1]().catch(()=>{}));let m=null;const y=h.url?e!==h.url.pathname+h.url.search:!1,p=h.route?s.id!==h.route.id:!1;let R=!1;const E=u.map((S,O)=>{const j=h.branch[O],$=!!S?.[0]&&(j?.loader!==S[1]||Ae(R,p,y,j.server?.uses,r));return $&&(R=!0),$});if(E.some(Boolean)){try{m=await He(n,E)}catch(S){return te({status:S instanceof X?S.status:500,error:await B(S,{url:n,params:r,route:{id:s.id}}),url:n,route:s})}if(m.type==="redirect")return m}const A=m?.nodes;let re=!1;const pe=u.map(async(S,O)=>{if(!S)return;const j=h.branch[O],$=A?.[O];if((!$||$.type==="skip")&&S[1]===j?.loader&&!Ae(re,p,y,j.universal?.uses,r))return j;if(re=!0,$?.type==="error")throw $;return ue({loader:S[1],url:n,params:r,route:s,parent:async()=>{const he={};for(let me=0;me<O;me+=1)Object.assign(he,(await pe[me])?.data);return he},server_data_node:de($===void 0&&S[0]?{type:"skip"}:$??null,S[0]?j?.server:void 0)})});for(const S of pe)S.catch(()=>{});const G=[];for(let S=0;S<u.length;S+=1)if(u[S])try{G.push(await pe[S])}catch(O){if(O instanceof Fe)return{type:"redirect",location:O.location};let j=500,$;if(A?.includes(O))j=O.status??j,$=O.error;else if(O instanceof X)j=O.status,$=O.body;else{if(await N.updated.check())return await K(n);$=await B(O,{params:r,url:n,route:{id:s.id}})}const oe=await $e(S,G,i);return oe?await z({url:n,params:r,branch:G.slice(0,oe.idx).concat(oe.node),status:j,error:$,route:s}):await je(n,{id:s.id},$,j)}else G.push(void 0);return await z({url:n,params:r,branch:G,status:200,error:null,route:s,form:t?void 0:null})}async function $e(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function te({status:e,error:t,url:n,route:r}){const s={};let i=null;if(a.server_loads[0]===0)try{const m=await He(n,[!0]);if(m.type!=="data"||m.nodes[0]&&m.nodes[0].type!=="data")throw 0;i=m.nodes[0]??null}catch{(n.origin!==location.origin||n.pathname!==location.pathname||I)&&await K(n)}const l=await ue({loader:f,url:n,params:s,route:r,parent:()=>Promise.resolve({}),server_data_node:de(i)}),u={node:await _(),loader:_,universal:null,server:null,data:null};return await z({url:n,params:s,branch:[l,u],status:e,error:t,route:null})}function V(e,t){if(ge(e,F))return;const n=ne(e);for(const r of c){const s=r.exec(n);if(s)return{id:e.pathname+e.search,invalidating:t,route:r,params:Xe(s),url:e}}}function ne(e){return Ye(e.pathname.slice(F.length)||"/")}function Ie({url:e,type:t,intent:n,delta:r}){let s=!1;const i={from:{params:h.params,route:{id:h.route?.id??null},url:h.url},to:{params:n?.params??null,route:{id:n?.route?.id??null},url:e},willUnload:!n,type:t};r!==void 0&&(i.delta=r);const d={...i,cancel:()=>{s=!0}};return T||w.before_navigate.forEach(l=>l(d)),s?null:i}async function ae({url:e,scroll:t,keepfocus:n,redirect_chain:r,details:s,type:i,delta:d,nav_token:l,accepted:u,blocked:m}){const y=V(e,!1),p=Ie({url:e,type:i,delta:d,intent:y});if(!p){m();return}const R=P;u(),T=!0,U&&N.navigating.set(p),await Pe(y,e,r,R,{scroll:t,keepfocus:n,details:s},l,()=>{T=!1,w.after_navigate.forEach(E=>E(p)),N.navigating.set(null)})}async function je(e,t,n,r){return e.origin===location.origin&&e.pathname===location.pathname&&!I?await te({status:r,error:n,url:e,route:t}):await K(e)}function K(e){return location.href=e.href,new Promise(()=>{})}function Ve(){let e;v.addEventListener("mousemove",i=>{const d=i.target;clearTimeout(e),e=setTimeout(()=>{r(d,2)},20)});function t(i){r(i.composedPath()[0],1)}v.addEventListener("mousedown",t),v.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(i=>{for(const d of i)d.isIntersecting&&(ee(ne(new URL(d.target.href))),n.unobserve(d.target))},{threshold:0});function r(i,d){const l=Ne(i,v);if(!l)return;const{url:u,external:m}=_e(l,F);if(m)return;const y=ie(l);if(!y.reload)if(d<=y.preload_data){const p=V(u,!1);p&&Le(p)}else d<=y.preload_code&&ee(ne(u))}function s(){n.disconnect();for(const i of v.querySelectorAll("a")){const{url:d,external:l}=_e(i,F);if(l)continue;const u=ie(i);u.reload||(u.preload_code===Ce.viewport&&n.observe(i),u.preload_code===Ce.eager&&ee(ne(d)))}}w.after_navigate.push(s),s()}function B(e,t){return e instanceof X?e.body:a.hooks.handleError({error:e,event:t})??{message:t.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{Te(()=>(w.after_navigate.push(e),()=>{const t=w.after_navigate.indexOf(e);w.after_navigate.splice(t,1)}))},before_navigate:e=>{Te(()=>(w.before_navigate.push(e),()=>{const t=w.before_navigate.indexOf(e);w.before_navigate.splice(t,1)}))},disable_scroll_handling:()=>{(L||!U)&&(x=!1)},goto:(e,t={})=>fe(e,t,[]),invalidate:e=>{if(typeof e=="function")k.push(e);else{const{href:t}=new URL(e,location.href);k.push(n=>n.href===t)}return Se()},invalidateAll:()=>(C=!0,Se()),preload_data:async e=>{const t=new URL(e,De(document)),n=V(t,!1);if(!n)throw new Error(`Attempted to preload a URL that does not belong to this app: ${t}`);await Le(n)},preload_code:ee,apply_action:async e=>{if(e.type==="error"){const t=new URL(location.href),{branch:n,route:r}=h;if(!r)return;const s=await $e(h.branch.length,n,r.errors);if(s){const i=await z({url:t,params:h.params,branch:n.slice(0,s.idx).concat(s.node),status:e.status??500,error:e.error,route:r});h=i.state,M.$set(i.props),se().then(ve)}}else e.type==="redirect"?fe(e.location,{invalidateAll:!0},[]):(M.$set({form:null,page:{...q,form:e.data,status:e.status}}),await se(),M.$set({form:e.data}),e.type==="success"&&ve())},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let t=!1;if(xe(),!T){const n={from:{params:h.params,route:{id:h.route?.id??null},url:h.url},to:null,willUnload:!0,type:"leave",cancel:()=>t=!0};w.before_navigate.forEach(r=>r(n))}t?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&xe()}),navigator.connection?.saveData||Ve(),v.addEventListener("click",e=>{if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const t=Ne(e.composedPath()[0],v);if(!t)return;const{url:n,external:r,target:s}=_e(t,F);if(!n)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const i=ie(t);if(!(t instanceof SVGAElement)&&n.protocol!==location.protocol&&!(n.protocol==="https:"||n.protocol==="http:"))return;if(r||i.reload){Ie({url:n,type:"link"})?T=!0:e.preventDefault();return}const[l,u]=n.href.split("#");if(u!==void 0&&l===location.href.split("#")[0]){J=!0,we(P),h.url=n,N.page.set({...q,url:n}),N.page.notify();return}ae({url:n,scroll:i.noscroll?Y():null,keepfocus:i.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:i.replace_state??n.href===location.href},accepted:()=>e.preventDefault(),blocked:()=>e.preventDefault(),type:"link"})}),v.addEventListener("submit",e=>{if(e.defaultPrevented)return;const t=HTMLFormElement.prototype.cloneNode.call(e.target),n=e.submitter;if((n?.formMethod||t.method)!=="get")return;const s=new URL(n?.hasAttribute("formaction")&&n?.formAction||t.action);if(ge(s,F))return;const i=e.target,{keep_focus:d,noscroll:l,reload:u,replace_state:m}=ie(i);if(u)return;e.preventDefault(),e.stopPropagation();const y=new FormData(i),p=n?.getAttribute("name");p&&y.append(p,n?.getAttribute("value")??""),s.search=new URLSearchParams(y).toString(),ae({url:s,scroll:l?Y():null,keepfocus:d??!1,redirect_chain:[],details:{state:{},replaceState:m??s.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async e=>{if(e.state?.[D]){if(e.state[D]===P)return;const t=H[e.state[D]];if(h.url.href.split("#")[0]===location.href.split("#")[0]){H[P]=Y(),P=e.state[D],scrollTo(t.x,t.y);return}const n=e.state[D]-P;let r=!1;await ae({url:new URL(location.href),scroll:t,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=e.state[D]},blocked:()=>{history.go(-n),r=!0},type:"popstate",delta:n}),r||Re(P)}}),addEventListener("hashchange",()=>{J&&(J=!1,history.replaceState({...history.state,[D]:++P},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&N.navigating.set(null)})},_hydrate:async({status:e=200,error:t,node_ids:n,params:r,route:s,data:i,form:d})=>{I=!0;const l=new URL(location.href);({params:r={},route:s={id:null}}=V(l,!1)||{});let u;try{const m=n.map(async(y,p)=>{const R=i[p];return R?.uses&&(R.uses=ze(R.uses)),ue({loader:a.nodes[y],url:l,params:r,route:s,parent:async()=>{const E={};for(let A=0;A<p;A+=1)Object.assign(E,(await m[A]).data);return E},server_data_node:de(R)})});u=await z({url:l,params:r,branch:await Promise.all(m),status:e,error:t,form:d,route:c.find(({id:y})=>y===s.id)??null})}catch(m){if(m instanceof Fe){await K(new URL(m.location,location.href));return}u=await te({status:m instanceof X?m.status:500,error:await B(m,{url:l,params:r,route:s}),url:l,route:s})}Ue(u)}}}async function He(a,o){const c=new URL(a);c.pathname=nt(a.pathname),c.searchParams.append("x-sveltekit-invalidated",o.map(_=>_?"1":"").join("_"));const f=await le(c.href);if(!f.ok)throw new X(f.status,await f.json());return new Promise(async _=>{const v=new Map,k=f.body.getReader(),g=new TextDecoder;function b(h){return Ge(h,{Promise:I=>new Promise((U,x)=>{v.set(I,{fulfil:U,reject:x})})})}let w="";for(;;){const{done:h,value:I}=await k.read();if(h&&!w)break;for(w+=!I&&w?`
`:g.decode(I);;){const U=w.indexOf(`
`);if(U===-1)break;const x=JSON.parse(w.slice(0,U));if(w=w.slice(U+1),x.type==="redirect")return _(x);if(x.type==="data")x.nodes?.forEach(L=>{L?.type==="data"&&(L.uses=ze(L.uses),L.data=b(L.data))}),_(x);else if(x.type==="chunk"){const{id:L,data:T,error:J}=x,C=v.get(L);v.delete(L),J?C.reject(b(J)):C.fulfil(b(T))}}}})}function ze(a){return{dependencies:new Set(a?.dependencies??[]),params:new Set(a?.params??[]),parent:!!a?.parent,route:!!a?.route,url:!!a?.url}}function ve(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const o=document.body,c=o.getAttribute("tabindex");return o.tabIndex=-1,o.focus({preventScroll:!0}),c!==null?o.setAttribute("tabindex",c):o.removeAttribute("tabindex"),new Promise(f=>{setTimeout(()=>{f(getSelection()?.removeAllRanges())})})}}async function vt(a,o,c){const f=ht(a,o);Be({client:f}),c?await f._hydrate(c):f.goto(location.href,{replaceState:!0}),f._start_router()}export{vt as start};