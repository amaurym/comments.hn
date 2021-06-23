var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,s=!1;function a(t,e,n,o){for(;t<e;){const r=t+(e-t>>1);n(r)<=o?t=r+1:e=r}return t}function l(t,e){s?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const e=t.childNodes,n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const c=a(1,r+1,(t=>e[n[t]].claim_order),e[t].claim_order)-1;o[t]=n[c]+1;const i=c+1;n[i]=t,r=Math.max(i,r)}const c=[],i=[];let s=e.length-1;for(let t=n[r]+1;0!=t;t=o[t-1]){for(c.push(e[t-1]);s>=t;s--)i.push(e[s]);s--}for(;s>=0;s--)i.push(e[s]);c.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<c.length&&i[e].claim_order>=c[n].claim_order;)n++;const o=n<c.length?c[n]:null;t.insertBefore(i[e],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),e!==t.actual_end_child?t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling):e.parentNode!==t&&t.appendChild(e)}function u(t,e,n){s&&!n?l(t,e):(e.parentNode!==t||n&&e.nextSibling!==n)&&t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function $(t){i=t}const _=[],b=[],y=[],w=[],x=Promise.resolve();let k=!1;function C(t){y.push(t)}let v=!1;const N=new Set;function A(){if(!v){v=!0;do{for(let t=0;t<_.length;t+=1){const e=_[t];$(e),S(e.$$)}for($(null),_.length=0;b.length;)b.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];N.has(e)||(N.add(e),e())}y.length=0}while(_.length);for(;w.length;)w.pop()();k=!1,v=!1,N.clear()}}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const j=new Set;let L;function E(){L={r:0,c:[],p:L}}function I(){L.r||o(L.c),L=L.p}function q(t,e){t&&t.i&&(j.delete(t),t.i(e))}function M(t,e,n,o){if(t&&t.o){if(j.has(t))return;j.add(t),L.c.push((()=>{j.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function T(t,n,c,i){const{fragment:s,on_mount:a,on_destroy:l,after_update:u}=t.$$;s&&s.m(n,c),i||C((()=>{const n=a.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(C)}function B(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(_.push(t),k||(k=!0,x.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function O(e,r,c,a,l,u,h=[-1]){const d=i;$(e);const m=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:r.context||[]),callbacks:n(),dirty:h,skip_bound:!1};let p=!1;if(m.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return m.ctx&&l(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),p&&D(e,t)),n})):[],m.update(),p=!0,o(m.before_update),m.fragment=!!a&&a(m.ctx),r.target){if(r.hydrate){s=!0;const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(f)}else m.fragment&&m.fragment.c();r.intro&&q(e.$$.fragment),T(e,r.target,r.anchor,r.customElement),s=!1,A()}$(d)}class P{$destroy(){B(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const R=["utm_","clid"];function W(t){const e=[[60,"seconds",1],[120,"1 minute ago","1 minute from now"],[3600,"minutes",60],[7200,"1 hour ago","1 hour from now"],[86400,"hours",3600],[172800,"Yesterday","Tomorrow"],[604800,"days",86400],[1209600,"Last week","Next week"],[2419200,"weeks",604800],[4838400,"Last month","Next month"],[29030400,"months",2419200],[58060800,"Last year","Next year"],[290304e4,"years",29030400]];let n=(+new Date-t)/1e3,o="ago",r=1;if(0==n)return"Just now";n<0&&(n=Math.abs(n),o="from now",r=2);let c,i=0;for(;c=e[i++];)if(n<c[0])return"string"==typeof c[2]?c[r]:`${Math.floor(n/c[2])} ${c[1]} ${o}`;return t}function H(t){return t=(t=(t=(t=(t=t.includes("?")?function(t){const e=new URL(t),n=e.searchParams,o=[];for(const t of n.keys())R.some((e=>t.includes(e)))&&o.push(t);for(const t of o)n.delete(t);return e.search=n.toString(),e.toString()}(t):t).replace(/(^\w+:|^)\/\//,"")).replace(/(#.+?)$/,"")).replace(/index\.(php|html?)/,"")).endsWith("/")&&t.split("/").length<3?t.replace(/\/+$/,""):t}const U="https://news.ycombinator.com/item?id=";async function z(t){const e=H(t);if(!e)return[];console.log(`Searching on Algolia for query "${e}".`);const{hits:n}=await async function(t){t=t.startsWith("www.")?t.replace(/www\./,""):t,t=encodeURIComponent(t);const e=await fetch(`https://hn.algolia.com/api/v1/search?query=${t}&restrictSearchableAttributes=url&analytics=false`);return await e.json()}(e);return console.log(n),1===n.length&&location.replace(`${U}${n[0].objectID}`),n}function F(e){let n,o,r,c,i,s,a,$,_,b,y,w,x,k,C,v,N,A,S=e[0].title+"",j=e[0].points+"",L=e[0].num_comments+"",E=e[0].author+"",I=W(1e3*e[0].created_at_i)+"";return{c(){n=h("main"),o=h("a"),r=h("div"),c=h("h3"),i=d(S),s=m(),a=h("small"),$=h("mark"),_=d(j),b=d(" points •\n\t\t\t\t"),y=h("mark"),w=d(L),x=d("\n\t\t\t\tcomments • by "),k=h("em"),C=d(E),v=d("\n\t\t\t\t• "),N=d(I),p(o,"href",A=`${U}${e[0].objectID}`),p(o,"rel","noopener noreferrer"),p(o,"target","_blank")},m(t,e){u(t,n,e),l(n,o),l(o,r),l(r,c),l(c,i),l(r,s),l(r,a),l(a,$),l($,_),l(a,b),l(a,y),l(y,w),l(a,x),l(a,k),l(k,C),l(a,v),l(a,N)},p(t,[e]){1&e&&S!==(S=t[0].title+"")&&g(i,S),1&e&&j!==(j=t[0].points+"")&&g(_,j),1&e&&L!==(L=t[0].num_comments+"")&&g(w,L),1&e&&E!==(E=t[0].author+"")&&g(C,E),1&e&&I!==(I=W(1e3*t[0].created_at_i)+"")&&g(N,I),1&e&&A!==(A=`${U}${t[0].objectID}`)&&p(o,"href",A)},i:t,o:t,d(t){t&&f(n)}}}function G(t,e,n){let{hit:o}=e;return t.$$set=t=>{"hit"in t&&n(0,o=t.hit)},[o]}class J extends P{constructor(t){super(),O(this,t,G,F,c,{hit:0})}}var Y="comments.hn";function K(t,e,n){const o=t.slice();return o[4]=e[n],o}function Q(e){let n,o,r;return{c(){n=h("h2"),n.textContent="Loading results...",o=m(),r=h("p"),r.textContent=`Searching for "${e[3]}".`},m(t,e){u(t,n,e),u(t,o,e),u(t,r,e)},p:t,i:t,o:t,d(t){t&&f(n),t&&f(o),t&&f(r)}}}function V(t){let e,n,o,r,c,i,s,a,p=t[0].length+"",$=t[0],_=[];for(let e=0;e<$.length;e+=1)_[e]=tt(K(t,$,e));const b=t=>M(_[t],1,1,(()=>{_[t]=null}));return{c(){e=h("h2"),n=d(p),o=d(" search results."),r=m(),c=h("p"),c.textContent=`Searching for "${t[3]}".`,i=m();for(let t=0;t<_.length;t+=1)_[t].c();s=d("")},m(t,f){u(t,e,f),l(e,n),l(e,o),u(t,r,f),u(t,c,f),u(t,i,f);for(let e=0;e<_.length;e+=1)_[e].m(t,f);u(t,s,f),a=!0},p(t,e){if((!a||1&e)&&p!==(p=t[0].length+"")&&g(n,p),1&e){let n;for($=t[0],n=0;n<$.length;n+=1){const o=K(t,$,n);_[n]?(_[n].p(o,e),q(_[n],1)):(_[n]=tt(o),_[n].c(),q(_[n],1),_[n].m(s.parentNode,s))}for(E(),n=$.length;n<_.length;n+=1)b(n);I()}},i(t){if(!a){for(let t=0;t<$.length;t+=1)q(_[t]);a=!0}},o(t){_=_.filter(Boolean);for(let t=0;t<_.length;t+=1)M(_[t]);a=!1},d(t){t&&f(e),t&&f(r),t&&f(c),t&&f(i),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(_,t),t&&f(s)}}}function X(e){let n,o,r,c,i,s,a=e[1].message+"";return{c(){n=h("h2"),n.textContent="Aaaaaahhhhh! An error.",o=m(),r=h("p"),r.textContent="Please create an issue on Github with the following text:",c=m(),i=h("pre"),s=d(a)},m(t,e){u(t,n,e),u(t,o,e),u(t,r,e),u(t,c,e),u(t,i,e),l(i,s)},p(t,e){2&e&&a!==(a=t[1].message+"")&&g(s,a)},i:t,o:t,d(t){t&&f(n),t&&f(o),t&&f(r),t&&f(c),t&&f(i)}}}function Z(e){let n;return{c(){n=h("br")},m(t,e){u(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}function tt(t){let e,n;return e=new J({props:{hit:t[4]}}),{c(){var t;(t=e.$$.fragment)&&t.c()},m(t,o){T(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.hit=t[4]),e.$set(o)},i(t){n||(q(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){B(e,t)}}}function et(t){let e,n,o,r,c,i,s,a,g,$,_,b,y,w,x,k,C,v,N,A,S,j,L,T,B,D,O,P,R,W,H,U,z,F,G,J,Y,K;const tt=[Z,X,V,Q],et=[];function nt(t,e){return t[3]?t[1]?1:t[0].length?2:3:0}return B=nt(t),D=et[B]=tt[B](t),{c(){e=h("main"),n=h("h1"),n.textContent=`${t[2]}`,o=m(),r=h("p"),c=d("Preprend "),i=h("code"),s=h("mark"),a=h("strong"),a.textContent=`${t[2]}?q=`,g=d(" to any website\n    to see its Hacker News comments."),$=m(),_=h("div"),b=h("p"),b.innerHTML='For example, if you&#39;re reading Ciechanowski&#39;s <a href="https://ciechanow.ski/gears">article</a> on gears, just do:',y=m(),w=h("table"),x=h("tbody"),k=h("tr"),C=h("td"),C.innerHTML="<strong><code>URL Bar</code></strong>",v=m(),N=h("td"),A=h("strong"),S=h("code"),j=h("mark"),j.textContent=`${t[2]}?q=`,L=d("https://ciechanow.ski/gears"),T=m(),D.c(),O=m(),P=h("footer"),R=h("br"),W=m(),H=h("small"),U=h("strong"),U.textContent=`${t[2]}`,z=d(" is an open-source website with no ads, no\n      trackers, no React. TODOkb gzipped. Its business model is\n      "),F=h("a"),F.textContent="donations",G=d(". Copyright\n      "),J=h("a"),J.textContent="@amaurym",Y=d(" 2021."),p(F,"href","https://github.com/sponsors/amaurym"),p(F,"rel","noopener noreferrer"),p(F,"target","_blank"),p(J,"href","https://github.com/amaurym"),p(J,"rel","noopener noreferrer"),p(J,"target","_blank")},m(t,f){u(t,e,f),l(e,n),l(e,o),l(e,r),l(r,c),l(r,i),l(i,s),l(s,a),l(r,g),l(e,$),l(e,_),l(_,b),l(_,y),l(_,w),l(w,x),l(x,k),l(k,C),l(k,v),l(k,N),l(N,A),l(A,S),l(S,j),l(S,L),l(e,T),et[B].m(e,null),l(e,O),l(e,P),l(P,R),l(P,W),l(P,H),l(H,U),l(H,z),l(H,F),l(H,G),l(H,J),l(H,Y),K=!0},p(t,[n]){let o=B;B=nt(t),B===o?et[B].p(t,n):(E(),M(et[o],1,1,(()=>{et[o]=null})),I(),D=et[B],D?D.p(t,n):(D=et[B]=tt[B](t),D.c()),q(D,1),D.m(e,O))},i(t){K||(q(D),K=!0)},o(t){M(D),K=!1},d(t){t&&f(e),et[B].d()}}}function nt(t,e,n){const o=Y,r=function(t){if(!t.startsWith("?"))return;const e=t.substring(1).split("&");for(const t of e)if(t.startsWith("q="))return t.substring(2)}(location.search);let c,i=[];return r&&z(r).then((t=>n(0,i=t))).catch((t=>n(1,c=t))),[i,c,o,r]}return new class extends P{constructor(t){super(),O(this,t,nt,et,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
