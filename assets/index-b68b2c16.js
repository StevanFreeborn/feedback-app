var je=Object.defineProperty;var qe=(e,t,n)=>t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ne=(e,t,n)=>(qe(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();function k(){}const ue=e=>e;function He(e,t){for(const n in t)e[n]=t[n];return e}function ve(e){return e()}function ae(){return Object.create(null)}function I(e){e.forEach(ve)}function ee(e){return typeof e=="function"}function x(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ve(e){return Object.keys(e).length===0}function Ke(e,...t){if(e==null){for(const r of t)r(void 0);return k}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function oe(e,t,n){e.$$.on_destroy.push(Ke(t,n))}function we(e,t,n,r){if(e){const s=ke(e,t,n,r);return e[0](s)}}function ke(e,t,n,r){return e[1]&&r?He(n.ctx.slice(),e[1](r(t))):n.ctx}function Se(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(t.dirty===void 0)return s;if(typeof s=="object"){const l=[],i=Math.max(t.dirty.length,s.length);for(let u=0;u<i;u+=1)l[u]=t.dirty[u]|s[u];return l}return t.dirty|s}return t.dirty}function Ee(e,t,n,r,s,l){if(s){const i=ke(t,n,r,l);e.p(i,s)}}function Fe(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let r=0;r<n;r++)t[r]=-1;return t}return-1}function de(e){return e??""}const Ne=typeof window<"u";let Le=Ne?()=>window.performance.now():()=>Date.now(),ce=Ne?e=>requestAnimationFrame(e):k;const B=new Set;function Oe(e){B.forEach(t=>{t.c(e)||(B.delete(t),t.f())}),B.size!==0&&ce(Oe)}function xe(e){let t;return B.size===0&&ce(Oe),{promise:new Promise(n=>{B.add(t={c:e,f:n})}),abort(){B.delete(t)}}}function p(e,t){e.appendChild(t)}function Ce(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function Ue(e){const t=y("style");return t.textContent="/* empty */",Ge(Ce(e),t),t.sheet}function Ge(e,t){return p(e.head||e,t),t.sheet}function v(e,t,n){e.insertBefore(t,n||null)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function ze(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function N(e){return document.createTextNode(e)}function E(){return N(" ")}function Je(){return N("")}function H(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function Qe(e){return function(t){return t.preventDefault(),e.call(this,t)}}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function We(e){return Array.from(e.childNodes)}function K(e,t){t=""+t,e.data!==t&&(e.data=t)}function me(e,t){e.value=t??""}function Pe(e,t,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}const W=new Map;let X=0;function Xe(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Ye(e,t){const n={stylesheet:Ue(t),rules:{}};return W.set(e,n),n}function Ae(e,t,n,r,s,l,i,u=0){const o=16.666/r;let c=`{
`;for(let $=0;$<=1;$+=o){const w=t+(n-t)*l($);c+=$*100+`%{${i(w,1-w)}}
`}const a=c+`100% {${i(n,1-n)}}
}`,f=`__svelte_${Xe(a)}_${u}`,d=Ce(e),{stylesheet:_,rules:m}=W.get(d)||Ye(d,e);m[f]||(m[f]=!0,_.insertRule(`@keyframes ${f} ${a}`,_.cssRules.length));const h=e.style.animation||"";return e.style.animation=`${h?`${h}, `:""}${f} ${r}ms linear ${s}ms 1 both`,X+=1,f}function le(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?l=>l.indexOf(t)<0:l=>l.indexOf("__svelte")===-1),s=n.length-r.length;s&&(e.style.animation=r.join(", "),X-=s,X||Ze())}function Ze(){ce(()=>{X||(W.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&b(t)}),W.clear())})}let U;function V(e){U=e}function et(){if(!U)throw new Error("Function called outside component initialization");return U}function Ie(){const e=et();return(t,n,{cancelable:r=!1}={})=>{const s=e.$$.callbacks[t];if(s){const l=Pe(t,n,{cancelable:r});return s.slice().forEach(i=>{i.call(e,l)}),!l.defaultPrevented}return!0}}const T=[],he=[];let D=[];const _e=[],tt=Promise.resolve();let ie=!1;function nt(){ie||(ie=!0,tt.then(Re))}function j(e){D.push(e)}const re=new Set;let R=0;function Re(){if(R!==0)return;const e=U;do{try{for(;R<T.length;){const t=T[R];R++,V(t),rt(t.$$)}}catch(t){throw T.length=0,R=0,t}for(V(null),T.length=0,R=0;he.length;)he.pop()();for(let t=0;t<D.length;t+=1){const n=D[t];re.has(n)||(re.add(n),n())}D.length=0}while(T.length);for(;_e.length;)_e.pop()();ie=!1,re.clear(),V(e)}function rt(e){if(e.fragment!==null){e.update(),I(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}function st(e){const t=[],n=[];D.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),D=t}let q;function Me(){return q||(q=Promise.resolve(),q.then(()=>{q=null})),q}function Y(e,t,n){e.dispatchEvent(Pe(`${t?"intro":"outro"}${n}`))}const Q=new Set;let C;function lt(){C={r:0,c:[],p:C}}function it(){C.r||I(C.c),C=C.p}function S(e,t){e&&e.i&&(Q.delete(e),e.i(t))}function F(e,t,n,r){if(e&&e.o){if(Q.has(e))return;Q.add(e),C.c.push(()=>{Q.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}const Te={duration:0};function ut(e,t,n){const r={direction:"in"};let s=t(e,n,r),l=!1,i,u,o=0;function c(){i&&le(e,i)}function a(){const{delay:d=0,duration:_=300,easing:m=ue,tick:h=k,css:$}=s||Te;$&&(i=Ae(e,0,1,_,d,m,$,o++)),h(0,1);const w=Le()+d,J=w+_;u&&u.abort(),l=!0,j(()=>Y(e,!0,"start")),u=xe(te=>{if(l){if(te>=J)return h(1,0),Y(e,!0,"end"),c(),l=!1;if(te>=w){const fe=m((te-w)/_);h(fe,1-fe)}}return l})}let f=!1;return{start(){f||(f=!0,le(e),ee(s)?(s=s(r),Me().then(a)):a())},invalidate(){f=!1},end(){l&&(c(),l=!1)}}}function ot(e,t,n){const r={direction:"out"};let s=t(e,n,r),l=!0,i;const u=C;u.r+=1;let o;function c(){const{delay:a=0,duration:f=300,easing:d=ue,tick:_=k,css:m}=s||Te;m&&(i=Ae(e,1,0,f,a,d,m));const h=Le()+a,$=h+f;j(()=>Y(e,!1,"start")),"inert"in e&&(o=e.inert,e.inert=!0),xe(w=>{if(l){if(w>=$)return _(0,1),Y(e,!1,"end"),--u.r||I(u.c),!1;if(w>=h){const J=d((w-h)/f);_(1-J,J)}}return l})}return ee(s)?Me().then(()=>{s=s(r),c()}):c(),{end(a){a&&"inert"in e&&(e.inert=o),a&&s.tick&&s.tick(1,0),l&&(i&&le(e,i),l=!1)}}}function Z(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function z(e){e&&e.c()}function L(e,t,n){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),j(()=>{const l=e.$$.on_mount.map(ve).filter(ee);e.$$.on_destroy?e.$$.on_destroy.push(...l):I(l),e.$$.on_mount=[]}),s.forEach(j)}function O(e,t){const n=e.$$;n.fragment!==null&&(st(n.after_update),I(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(e,t){e.$$.dirty[0]===-1&&(T.push(e),nt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function P(e,t,n,r,s,l,i=null,u=[-1]){const o=U;V(e);const c=e.$$={fragment:null,ctx:[],props:l,update:k,not_equal:s,bound:ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:ae(),dirty:u,skip_bound:!1,root:t.target||o.$$.root};i&&i(c.root);let a=!1;if(c.ctx=n?n(e,t.props||{},(f,d,..._)=>{const m=_.length?_[0]:d;return c.ctx&&s(c.ctx[f],c.ctx[f]=m)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](m),a&&ct(e,f)),d}):[],c.update(),a=!0,I(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const f=We(t.target);c.fragment&&c.fragment.l(f),f.forEach(b)}else c.fragment&&c.fragment.c();t.intro&&S(e.$$.fragment),L(e,t.target,t.anchor),Re()}V(o)}class A{constructor(){ne(this,"$$");ne(this,"$$set")}$destroy(){O(this,1),this.$destroy=k}$on(t,n){if(!ee(n))return k;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}$set(t){this.$$set&&!Ve(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ft="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ft);const M=[];function at(e,t=k){let n;const r=new Set;function s(u){if(x(e,u)&&(e=u,n)){const o=!M.length;for(const c of r)c[1](),M.push(c,e);if(o){for(let c=0;c<M.length;c+=2)M[c][0](M[c+1]);M.length=0}}}function l(u){s(u(e))}function i(u,o=k){const c=[u,o];return r.add(c),r.size===1&&(n=t(s,l)||k),u(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:s,update:l,subscribe:i}}const G=at([{id:1,rating:10,text:"This is the first feedback"},{id:2,rating:5,text:"This is the second feedback"},{id:3,rating:8,text:"This is the third feedback"}]);function dt(e){let t,n,r;const s=e[4].default,l=we(s,e,e[3],null);return{c(){t=y("button"),l&&l.c(),g(t,"type",e[1]),t.disabled=e[2],g(t,"class",n=de(e[0])+" svelte-1kgek14")},m(i,u){v(i,t,u),l&&l.m(t,null),r=!0},p(i,[u]){l&&l.p&&(!r||u&8)&&Ee(l,s,i,i[3],r?Se(s,i[3],u,null):Fe(i[3]),null),(!r||u&2)&&g(t,"type",i[1]),(!r||u&4)&&(t.disabled=i[2]),(!r||u&1&&n!==(n=de(i[0])+" svelte-1kgek14"))&&g(t,"class",n)},i(i){r||(S(l,i),r=!0)},o(i){F(l,i),r=!1},d(i){i&&b(t),l&&l.d(i)}}}function mt(e,t,n){let{$$slots:r={},$$scope:s}=t,{style:l="primary"}=t,{type:i="button"}=t,{disabled:u=!1}=t;return e.$$set=o=>{"style"in o&&n(0,l=o.style),"type"in o&&n(1,i=o.type),"disabled"in o&&n(2,u=o.disabled),"$$scope"in o&&n(3,s=o.$$scope)},[l,i,u,s,r]}class ht extends A{constructor(t){super(),P(this,t,mt,dt,x,{style:0,type:1,disabled:2})}}function _t(e){let t,n;const r=e[1].default,s=we(r,e,e[0],null);return{c(){t=y("div"),s&&s.c(),g(t,"class","card svelte-64h18p")},m(l,i){v(l,t,i),s&&s.m(t,null),n=!0},p(l,[i]){s&&s.p&&(!n||i&1)&&Ee(s,r,l,l[0],n?Se(r,l[0],i,null):Fe(l[0]),null)},i(l){n||(S(s,l),n=!0)},o(l){F(s,l),n=!1},d(l){l&&b(t),s&&s.d(l)}}}function pt(e,t,n){let{$$slots:r={},$$scope:s}=t;return e.$$set=l=>{"$$scope"in l&&n(0,s=l.$$scope)},[s,r]}class Be extends A{constructor(t){super(),P(this,t,pt,_t,x,{})}}function pe(e,t,n){const r=e.slice();return r[4]=t[n],r}function ge(e){let t,n,r,s,l,i=e[4].value+"",u,o,c,a;return{c(){t=y("li"),n=y("input"),s=E(),l=y("label"),u=N(i),o=E(),g(n,"type","radio"),g(n,"id",e[4].id),g(n,"name","rating"),n.value=e[4].value,n.checked=r=e[0]===e[4].value,g(n,"class","svelte-1k3och4"),g(l,"for",e[4].id),g(l,"class","svelte-1k3och4"),g(t,"class","svelte-1k3och4")},m(f,d){v(f,t,d),p(t,n),p(t,s),p(t,l),p(l,u),p(t,o),c||(a=H(n,"change",e[2]),c=!0)},p(f,d){d&1&&r!==(r=f[0]===f[4].value)&&(n.checked=r)},d(f){f&&b(t),c=!1,a()}}}function gt(e){let t,n=Z(e[1]),r=[];for(let s=0;s<n.length;s+=1)r[s]=ge(pe(e,n,s));return{c(){t=y("ul");for(let s=0;s<r.length;s+=1)r[s].c();g(t,"class","rating svelte-1k3och4")},m(s,l){v(s,t,l);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(t,null)},p(s,[l]){if(l&7){n=Z(s[1]);let i;for(i=0;i<n.length;i+=1){const u=pe(s,n,i);r[i]?r[i].p(u,l):(r[i]=ge(u),r[i].c(),r[i].m(t,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=n.length}},i:k,o:k,d(s){s&&b(t),ze(r,s)}}}function $t(e,t,n){const r=[{id:"num1",value:1},{id:"num2",value:2},{id:"num3",value:3},{id:"num4",value:4},{id:"num5",value:5},{id:"num6",value:6},{id:"num7",value:7},{id:"num8",value:8},{id:"num9",value:9},{id:"num10",value:10}],s=Ie();let l=0;function i(u){const o=u.currentTarget;n(0,l=parseInt(o.value)),s("rating-select",l)}return[l,r,i]}class bt extends A{constructor(t){super(),P(this,t,$t,gt,x,{})}}function yt(e){let t;return{c(){t=N("Send")},m(n,r){v(n,t,r)},d(n){n&&b(t)}}}function $e(e){let t,n;return{c(){t=y("div"),n=N(e[2]),g(t,"class","message svelte-kecrbz")},m(r,s){v(r,t,s),p(t,n)},p(r,s){s&4&&K(n,r[2])},d(r){r&&b(t)}}}function vt(e){let t,n,r,s,l,i,u,o,c,a,f,d,_;s=new bt({}),s.$on("rating-select",e[4]),c=new ht({props:{type:"submit",disabled:e[1],$$slots:{default:[yt]},$$scope:{ctx:e}}});let m=e[2]&&$e(e);return{c(){t=y("header"),t.innerHTML='<h2 class="svelte-kecrbz">How would you rate your service with us?</h2>',n=E(),r=y("form"),z(s.$$.fragment),l=E(),i=y("div"),u=y("input"),o=E(),z(c.$$.fragment),a=E(),m&&m.c(),g(t,"class","svelte-kecrbz"),g(u,"type","text"),g(u,"placeholder","Tell us something that keeps you coming back"),g(u,"class","svelte-kecrbz"),g(i,"class","input-group svelte-kecrbz")},m(h,$){v(h,t,$),v(h,n,$),v(h,r,$),L(s,r,null),p(r,l),p(r,i),p(i,u),me(u,e[0]),p(i,o),L(c,i,null),p(r,a),m&&m.m(r,null),f=!0,d||(_=[H(u,"input",e[3]),H(u,"input",e[6]),H(r,"submit",Qe(e[5]))],d=!0)},p(h,$){$&1&&u.value!==h[0]&&me(u,h[0]);const w={};$&2&&(w.disabled=h[1]),$&4096&&(w.$$scope={dirty:$,ctx:h}),c.$set(w),h[2]?m?m.p(h,$):(m=$e(h),m.c(),m.m(r,null)):m&&(m.d(1),m=null)},i(h){f||(S(s.$$.fragment,h),S(c.$$.fragment,h),f=!0)},o(h){F(s.$$.fragment,h),F(c.$$.fragment,h),f=!1},d(h){h&&(b(t),b(n),b(r)),O(s),O(c),m&&m.d(),d=!1,I(_)}}}function wt(e){let t,n;return t=new Be({props:{$$slots:{default:[vt]},$$scope:{ctx:e}}}),{c(){z(t.$$.fragment)},m(r,s){L(t,r,s),n=!0},p(r,[s]){const l={};s&4103&&(l.$$scope={dirty:s,ctx:r}),t.$set(l)},i(r){n||(S(t.$$.fragment,r),n=!0)},o(r){F(t.$$.fragment,r),n=!1},d(r){O(t,r)}}}let se=10;function kt(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let r=0;r<10;r++){const s=Math.floor(Math.random()*e.length);n+=e.charAt(s)}return n}function St(e,t,n){let r;oe(e,G,m=>n(8,r=m));let s=r,l="",i=0,u=!0,o="";Ie();function c(){return l.trim().length>se}function a(){if(c()===!1){n(2,o=`Please enter at least ${se} characters`),n(1,u=!0);return}n(2,o=""),n(1,u=!1)}function f(m){i=m.detail,i!==0&&u===!0&&c()&&(n(1,u=!1),n(2,o=""))}function d(m){const h=m.currentTarget;if(c()===!1){n(2,o=`Please enter at least ${se} characters`),n(1,u=!0);return}if(i===0){n(2,o="Please select a rating"),n(1,u=!0);return}console.log(s);const $={id:kt(),rating:i,text:l};G.update(w=>(w.push($),w)),h.reset()}function _(){l=this.value,n(0,l)}return[l,u,o,a,f,d,_]}class Et extends A{constructor(t){super(),P(this,t,St,wt,x,{})}}function Ft(e){const t=e-1;return t*t*t+1}function Nt(e,{delay:t=0,duration:n=400,easing:r=ue}={}){const s=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:r,css:l=>`opacity: ${l*s}`}}function Lt(e,{delay:t=0,duration:n=400,easing:r=Ft,start:s=0,opacity:l=0}={}){const i=getComputedStyle(e),u=+i.opacity,o=i.transform==="none"?"":i.transform,c=1-s,a=u*(1-l);return{delay:t,duration:n,easing:r,css:(f,d)=>`
			transform: ${o} scale(${1-c*d});
			opacity: ${u-a*d}
		`}}function Ot(e){let t,n=e[0].rating+"",r,s,l,i,u,o=e[0].text+"",c,a,f;return{c(){t=y("div"),r=N(n),s=E(),l=y("button"),l.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"></path></svg>',i=E(),u=y("p"),c=N(o),g(t,"class","num-display svelte-1x80w8l"),g(l,"class","close svelte-1x80w8l"),g(u,"class","text-display")},m(d,_){v(d,t,_),p(t,r),v(d,s,_),v(d,l,_),v(d,i,_),v(d,u,_),p(u,c),a||(f=H(l,"click",e[1]),a=!0)},p(d,_){_&1&&n!==(n=d[0].rating+"")&&K(r,n),_&1&&o!==(o=d[0].text+"")&&K(c,o)},d(d){d&&(b(t),b(s),b(l),b(i),b(u)),a=!1,f()}}}function xt(e){let t,n;return t=new Be({props:{$$slots:{default:[Ot]},$$scope:{ctx:e}}}),{c(){z(t.$$.fragment)},m(r,s){L(t,r,s),n=!0},p(r,[s]){const l={};s&5&&(l.$$scope={dirty:s,ctx:r}),t.$set(l)},i(r){n||(S(t.$$.fragment,r),n=!0)},o(r){F(t.$$.fragment,r),n=!1},d(r){O(t,r)}}}function Ct(e,t,n){let{item:r={id:0,rating:0,text:""}}=t;function s(){G.update(l=>l.filter(i=>i.id!==r.id))}return e.$$set=l=>{"item"in l&&n(0,r=l.item)},[r,s]}class zt extends A{constructor(t){super(),P(this,t,Ct,xt,x,{item:0})}}function be(e,t,n){const r=e.slice();return r[1]=t[n],r}function ye(e){let t,n,r,s,l,i;return n=new zt({props:{item:e[1]}}),{c(){t=y("div"),z(n.$$.fragment),r=E()},m(u,o){v(u,t,o),L(n,t,null),p(t,r),i=!0},p(u,o){const c={};o&1&&(c.item=u[1]),n.$set(c)},i(u){i||(S(n.$$.fragment,u),u&&j(()=>{i&&(l&&l.end(1),s=ut(t,Lt,{}),s.start())}),i=!0)},o(u){F(n.$$.fragment,u),s&&s.invalidate(),u&&(l=ot(t,Nt,{duration:500})),i=!1},d(u){u&&b(t),O(n),u&&l&&l.end()}}}function Pt(e){let t,n,r=Z(e[0]),s=[];for(let i=0;i<r.length;i+=1)s[i]=ye(be(e,r,i));const l=i=>F(s[i],1,1,()=>{s[i]=null});return{c(){for(let i=0;i<s.length;i+=1)s[i].c();t=Je()},m(i,u){for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,u);v(i,t,u),n=!0},p(i,[u]){if(u&1){r=Z(i[0]);let o;for(o=0;o<r.length;o+=1){const c=be(i,r,o);s[o]?(s[o].p(c,u),S(s[o],1)):(s[o]=ye(c),s[o].c(),S(s[o],1),s[o].m(t.parentNode,t))}for(lt(),o=r.length;o<s.length;o+=1)l(o);it()}},i(i){if(!n){for(let u=0;u<r.length;u+=1)S(s[u]);n=!0}},o(i){s=s.filter(Boolean);for(let u=0;u<s.length;u+=1)F(s[u]);n=!1},d(i){i&&b(t),ze(s,i)}}}function At(e,t,n){let r;return oe(e,G,s=>n(0,r=s)),[r]}class It extends A{constructor(t){super(),P(this,t,At,Pt,x,{})}}function Rt(e){let t,n,r,s,l,i,u,o=(Number.isNaN(e[1])?0:e[1].toFixed(2))+"",c;return{c(){t=y("div"),n=y("h4"),r=N(e[0]),s=N(" Review"),l=E(),i=y("h4"),u=N("Ratings Average: "),c=N(o),g(t,"class","feedback-stats svelte-ga2qn0")},m(a,f){v(a,t,f),p(t,n),p(n,r),p(n,s),p(t,l),p(t,i),p(i,u),p(i,c)},p(a,[f]){f&1&&K(r,a[0]),f&2&&o!==(o=(Number.isNaN(a[1])?0:a[1].toFixed(2))+"")&&K(c,o)},i:k,o:k,d(a){a&&b(t)}}}function Mt(e,t,n){let r,s,l;return oe(e,G,i=>n(2,l=i)),e.$$.update=()=>{e.$$.dirty&4&&n(0,r=l.length),e.$$.dirty&5&&n(1,s=l.reduce((i,u)=>i+u.rating,0)/r)},[r,s,l]}class Tt extends A{constructor(t){super(),P(this,t,Mt,Rt,x,{})}}function Bt(e){let t,n,r,s,l,i,u;return n=new Et({}),s=new Tt({}),i=new It({}),{c(){t=y("main"),z(n.$$.fragment),r=E(),z(s.$$.fragment),l=E(),z(i.$$.fragment),g(t,"class","container")},m(o,c){v(o,t,c),L(n,t,null),p(t,r),L(s,t,null),p(t,l),L(i,t,null),u=!0},p:k,i(o){u||(S(n.$$.fragment,o),S(s.$$.fragment,o),S(i.$$.fragment,o),u=!0)},o(o){F(n.$$.fragment,o),F(s.$$.fragment,o),F(i.$$.fragment,o),u=!1},d(o){o&&b(t),O(n),O(s),O(i)}}}class Dt extends A{constructor(t){super(),P(this,t,null,Bt,x,{})}}const De=document.getElementById("app");if(De===null)throw new Error("Root element not found");new Dt({target:De});