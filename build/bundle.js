!function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function a(e){return"function"==typeof e}function o(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e,t){e.appendChild(t)}function s(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function l(e){return document.createTextNode(e)}function u(){return l(" ")}function f(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function _(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function d(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function b(e,t){e.value=null==t?"":t}let g;function y(e){g=e}const h=[],p=[],w=[],v=[],m=Promise.resolve();let $=!1;function A(e){w.push(e)}let x=!1;const C=new Set;function O(){if(!x){x=!0;do{for(let e=0;e<h.length;e+=1){const t=h[e];y(t),S(t.$$)}for(y(null),h.length=0;p.length;)p.pop()();for(let e=0;e<w.length;e+=1){const t=w[e];C.has(t)||(C.add(t),t())}w.length=0}while(h.length);for(;v.length;)v.pop()();$=!1,x=!1,C.clear()}}function S(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(A)}}const k=new Set;function E(e,t){-1===e.$$.dirty[0]&&(h.push(e),$||($=!0,m.then(O)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(o,i,c,l,u,f,_=[-1]){const d=g;y(o);const b=i.props||{},h=o.$$={fragment:null,ctx:null,props:f,update:e,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:_,skip_bound:!1};let p=!1;if(h.ctx=c?c(o,b,((e,t,...n)=>{const r=n.length?n[0]:t;return h.ctx&&u(h.ctx[e],h.ctx[e]=r)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](r),p&&E(o,e)),t})):[],h.update(),p=!0,r(h.before_update),h.fragment=!!l&&l(h.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);h.fragment&&h.fragment.l(e),e.forEach(s)}else h.fragment&&h.fragment.c();i.intro&&((w=o.$$.fragment)&&w.i&&(k.delete(w),w.i(v))),function(e,n,o){const{fragment:i,on_mount:s,on_destroy:c,after_update:l}=e.$$;i&&i.m(n,o),A((()=>{const n=s.map(t).filter(a);c?c.push(...n):r(n),e.$$.on_mount=[]})),l.forEach(A)}(o,i.target,i.anchor),O()}var w,v;y(d)}for(var R=function(e){var t=I(e),n=t[0],r=t[1];return 3*(n+r)/4-r},T=function(e){var t,n,r=I(e),a=r[0],o=r[1],i=new J(function(e,t,n){return 3*(t+n)/4-n}(0,a,o)),s=0,c=o>0?a-4:a;for(n=0;n<c;n+=4)t=N[e.charCodeAt(n)]<<18|N[e.charCodeAt(n+1)]<<12|N[e.charCodeAt(n+2)]<<6|N[e.charCodeAt(n+3)],i[s++]=t>>16&255,i[s++]=t>>8&255,i[s++]=255&t;2===o&&(t=N[e.charCodeAt(n)]<<2|N[e.charCodeAt(n+1)]>>4,i[s++]=255&t);1===o&&(t=N[e.charCodeAt(n)]<<10|N[e.charCodeAt(n+1)]<<4|N[e.charCodeAt(n+2)]>>2,i[s++]=t>>8&255,i[s++]=255&t);return i},U=function(e){for(var t,n=e.length,r=n%3,a=[],o=16383,i=0,s=n-r;i<s;i+=o)a.push(P(e,i,i+o>s?s:i+o));1===r?(t=e[n-1],a.push(j[t>>2]+j[t<<4&63]+"==")):2===r&&(t=(e[n-2]<<8)+e[n-1],a.push(j[t>>10]+j[t>>4&63]+j[t<<2&63]+"="));return a.join("")},j=[],N=[],J="undefined"!=typeof Uint8Array?Uint8Array:Array,L="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",V=0,W=L.length;V<W;++V)j[V]=L[V],N[L.charCodeAt(V)]=V;function I(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");return-1===n&&(n=t),[n,n===t?0:4-n%4]}function P(e,t,n){for(var r,a,o=[],i=t;i<n;i+=3)r=(e[i]<<16&16711680)+(e[i+1]<<8&65280)+(255&e[i+2]),o.push(j[(a=r)>>18&63]+j[a>>12&63]+j[a>>6&63]+j[63&a]);return o.join("")}N["-".charCodeAt(0)]=62,N["_".charCodeAt(0)]=63;var M={byteLength:R,toByteArray:T,fromByteArray:U};function q(t){let n,a,o,g,y,h,p,w,v,m,$,A,x,C,O,S,k,E,B,R,T,U,j,N,J,L,V,W,I,P,q,K,D,F,z,G,X,H,Q,Y,Z,ee,te,ne,re,ae,oe,ie,se,ce,le,ue,fe,_e,de,be,ge,ye,he,pe,we,ve,me,$e,Ae,xe,Ce,Oe,Se,ke,Ee,Be,Re,Te,Ue,je,Ne,Je,Le,Ve,We,Ie,Pe,Me,qe,Ke,De,Fe,ze,Ge,Xe,He,Qe,Ye,Ze,et,tt,nt,rt,at,ot,it,st,ct,lt,ut,ft,_t,dt,bt,gt,yt,ht,pt,wt,vt,mt,$t,At,xt,Ct,Ot,St,kt,Et,Bt,Rt,Tt,Ut,jt,Nt=t[5].a.length+"",Jt=t[5].b.length+"",Lt=t[6].choose_eval_at()+"",Vt=JSON.stringify(t[7],"",2)+"",Wt=JSON.stringify(t[8],"",2)+"",It=JSON.stringify(t[9],"",2)+"",Pt=JSON.stringify(t[10],"",2)+"",Mt=t[11].length+"";return{c(){n=c("main"),a=c("h1"),a.textContent="libprio-rs wasm demonstration",o=u(),g=c("p"),g.innerHTML='See\n    <a href="https://github.com/abetterinternet/libprio-rs">abetterinternet/libprio-rs</a>\n    for the source library that has been compiled to wasm32-unknown-unknown. See\n    the\n    <a href="https://github.com/acmiyaguchi/libprio-rs-wasm-demo">source for this page on Github.</a>',y=u(),h=c("h2"),h.textContent="Keys",p=u(),w=c("p"),w.textContent='The private key is the "private scalar" derived from a random seed. This\n    value is used as a deterministic seed in the key-exchange protocol i.e.\n    ECIES with a X9.63 key derivation function and AES-GCM for symmetric\n    encryption. The public key is derived from the private scalar. The keys are\n    base64-encoded. This should be cleaned up to match the original library,\n    which appends the public key to the private key to avoid extra work.',v=u(),m=c("p"),m.textContent="X25519 is used over ECDSA P-256 algorithm because the underlying\n    cryptography library (ring) does not support the latter on wasm32 targets.",$=u(),A=c("div"),x=c("div"),C=c("h3"),C.textContent="Server A",O=u(),S=c("label"),k=l("Private Key\n        "),E=c("input"),B=u(),R=c("label"),T=l("Public Key\n        "),U=c("input"),j=u(),N=c("div"),J=c("h3"),J.textContent="Server B",L=u(),V=c("label"),W=l("Private Key\n        "),I=c("input"),P=u(),q=c("label"),K=l("Public Key\n        "),D=c("input"),F=u(),z=c("h2"),z.textContent="Client Encoding",G=u(),X=c("p"),X.textContent="Only bit-vector encodings are supported by libprio-rs at the time of\n    writing. Prio can support a variety of aggregatable functions including\n    linear regression and count-min.",H=u(),Q=c("h3"),Q.textContent="Original Data",Y=u(),Z=c("label"),ee=l("dimension ("),te=l(t[1]),ne=l(")\n    "),re=c("input"),ae=u(),oe=c("textarea"),ie=u(),se=c("div"),ce=c("div"),le=c("h3"),le.textContent="Shares for server A",ue=u(),fe=c("h4"),fe.textContent="encrypted share",_e=u(),de=c("p"),be=l(Nt),ge=l(" bytes"),ye=u(),he=c("textarea"),pe=u(),we=c("textarea"),me=u(),$e=c("h4"),$e.textContent="decrypted share",Ae=u(),xe=c("textarea"),Oe=u(),Se=c("div"),ke=c("h3"),ke.textContent="Shares for server B",Ee=u(),Be=c("h4"),Be.textContent="encrypted share",Re=u(),Te=c("p"),Ue=l(Jt),je=l(" bytes"),Ne=u(),Je=c("textarea"),Le=u(),Ve=c("textarea"),Ie=u(),Pe=c("h4"),Pe.textContent="decrypted share",Me=u(),qe=c("textarea"),De=u(),Fe=c("h2"),Fe.textContent="Server Verification",ze=u(),Ge=c("h3"),Ge.textContent="Polynomial for evaluation (chosen by server A)",Xe=u(),He=l(Lt),Qe=u(),Ye=c("div"),Ze=c("div"),et=c("h3"),et.textContent="Verification for server A",tt=u(),nt=c("pre"),rt=l(Vt),at=u(),ot=c("div"),it=c("h3"),it.textContent="Verification for server B",st=u(),ct=c("pre"),lt=l(Wt),ut=u(),ft=c("h2"),ft.textContent="Reconstruction",_t=u(),dt=c("div"),bt=c("div"),gt=c("h3"),gt.textContent="Total shares for server A",yt=u(),ht=c("pre"),pt=l(It),wt=u(),vt=c("div"),mt=c("h3"),mt.textContent="Total shares for server B",$t=u(),At=c("pre"),xt=l(Pt),Ct=u(),Ot=c("h3"),Ot.textContent="Reconstructed value",St=u(),kt=c("p"),Et=l(Mt),Bt=l(" bytes"),Rt=u(),Tt=c("textarea"),E.readOnly=!0,_(E,"class","svelte-e3ye32"),_(S,"class","svelte-e3ye32"),U.readOnly=!0,_(U,"class","svelte-e3ye32"),_(R,"class","svelte-e3ye32"),_(x,"class","col-sm"),I.readOnly=!0,_(I,"class","svelte-e3ye32"),_(V,"class","svelte-e3ye32"),D.readOnly=!0,_(D,"class","svelte-e3ye32"),_(q,"class","svelte-e3ye32"),_(N,"class","col-sm"),_(A,"class","row"),_(re,"type","range"),_(re,"min",1),_(re,"max",256),_(re,"class","svelte-e3ye32"),_(Z,"class","svelte-e3ye32"),oe.readOnly=!0,_(oe,"class","svelte-e3ye32"),he.readOnly=!0,_(he,"class","svelte-e3ye32"),we.readOnly=!0,we.value=ve=M.fromByteArray(t[5].a),_(we,"class","svelte-e3ye32"),xe.readOnly=!0,xe.value=Ce="\n        "+M.fromByteArray(t[0].decrypt_share(t[5].a,t[3].private))+"\n      ",_(xe,"class","svelte-e3ye32"),_(ce,"class","col-sm"),Je.readOnly=!0,_(Je,"class","svelte-e3ye32"),Ve.readOnly=!0,Ve.value=We=M.fromByteArray(t[5].b),_(Ve,"class","svelte-e3ye32"),qe.readOnly=!0,qe.value=Ke="\n        "+M.fromByteArray(t[0].decrypt_share(t[5].b,t[4].private))+"\n      ",_(qe,"class","svelte-e3ye32"),_(Se,"class","col-sm"),_(se,"class","row"),_(Ze,"class","col-sm"),_(ot,"class","col-sm"),_(Ye,"class","row"),_(bt,"class","col-sm"),_(vt,"class","col-sm"),_(dt,"class","row"),Tt.readOnly=!0,_(Tt,"class","svelte-e3ye32"),_(n,"class","svelte-e3ye32")},m(e,r){!function(e,t,n){e.insertBefore(t,n||null)}(e,n,r),i(n,a),i(n,o),i(n,g),i(n,y),i(n,h),i(n,p),i(n,w),i(n,v),i(n,m),i(n,$),i(n,A),i(A,x),i(x,C),i(x,O),i(x,S),i(S,k),i(S,E),b(E,t[3].private),i(x,B),i(x,R),i(R,T),i(R,U),b(U,t[3].public),i(A,j),i(A,N),i(N,J),i(N,L),i(N,V),i(V,W),i(V,I),b(I,t[4].private),i(N,P),i(N,q),i(q,K),i(q,D),b(D,t[4].public),i(n,F),i(n,z),i(n,G),i(n,X),i(n,H),i(n,Q),i(n,Y),i(n,Z),i(Z,ee),i(Z,te),i(Z,ne),i(Z,re),b(re,t[1]),i(n,ae),i(n,oe),b(oe,t[2]),i(n,ie),i(n,se),i(se,ce),i(ce,le),i(ce,ue),i(ce,fe),i(ce,_e),i(ce,de),i(de,be),i(de,ge),i(ce,ye),i(ce,he),b(he,t[5].a),i(ce,pe),i(ce,we),i(ce,me),i(ce,$e),i(ce,Ae),i(ce,xe),i(se,Oe),i(se,Se),i(Se,ke),i(Se,Ee),i(Se,Be),i(Se,Re),i(Se,Te),i(Te,Ue),i(Te,je),i(Se,Ne),i(Se,Je),b(Je,t[5].b),i(Se,Le),i(Se,Ve),i(Se,Ie),i(Se,Pe),i(Se,Me),i(Se,qe),i(n,De),i(n,Fe),i(n,ze),i(n,Ge),i(n,Xe),i(n,He),i(n,Qe),i(n,Ye),i(Ye,Ze),i(Ze,et),i(Ze,tt),i(Ze,nt),i(nt,rt),i(Ye,at),i(Ye,ot),i(ot,it),i(ot,st),i(ot,ct),i(ct,lt),i(n,ut),i(n,ft),i(n,_t),i(n,dt),i(dt,bt),i(bt,gt),i(bt,yt),i(bt,ht),i(ht,pt),i(dt,wt),i(dt,vt),i(vt,mt),i(vt,$t),i(vt,At),i(At,xt),i(n,Ct),i(n,Ot),i(n,St),i(n,kt),i(kt,Et),i(kt,Bt),i(n,Rt),i(n,Tt),b(Tt,t[11]),Ut||(jt=[f(E,"input",t[14]),f(U,"input",t[15]),f(I,"input",t[16]),f(D,"input",t[17]),f(re,"change",t[18]),f(re,"input",t[18]),f(oe,"input",t[19]),f(he,"input",t[20]),f(Je,"input",t[21]),f(Tt,"input",t[22])],Ut=!0)},p(e,[t]){8&t&&E.value!==e[3].private&&b(E,e[3].private),8&t&&U.value!==e[3].public&&b(U,e[3].public),16&t&&I.value!==e[4].private&&b(I,e[4].private),16&t&&D.value!==e[4].public&&b(D,e[4].public),2&t&&d(te,e[1]),2&t&&b(re,e[1]),4&t&&b(oe,e[2]),32&t&&Nt!==(Nt=e[5].a.length+"")&&d(be,Nt),32&t&&b(he,e[5].a),32&t&&ve!==(ve=M.fromByteArray(e[5].a))&&(we.value=ve),41&t&&Ce!==(Ce="\n        "+M.fromByteArray(e[0].decrypt_share(e[5].a,e[3].private))+"\n      ")&&(xe.value=Ce),32&t&&Jt!==(Jt=e[5].b.length+"")&&d(Ue,Jt),32&t&&b(Je,e[5].b),32&t&&We!==(We=M.fromByteArray(e[5].b))&&(Ve.value=We),49&t&&Ke!==(Ke="\n        "+M.fromByteArray(e[0].decrypt_share(e[5].b,e[4].private))+"\n      ")&&(qe.value=Ke),64&t&&Lt!==(Lt=e[6].choose_eval_at()+"")&&d(He,Lt),128&t&&Vt!==(Vt=JSON.stringify(e[7],"",2)+"")&&d(rt,Vt),256&t&&Wt!==(Wt=JSON.stringify(e[8],"",2)+"")&&d(lt,Wt),512&t&&It!==(It=JSON.stringify(e[9],"",2)+"")&&d(pt,It),1024&t&&Pt!==(Pt=JSON.stringify(e[10],"",2)+"")&&d(xt,Pt),2048&t&&Mt!==(Mt=e[11].length+"")&&d(Et,Mt),2048&t&&b(Tt,e[11])},i:e,o:e,d(e){e&&s(n),Ut=!1,r(jt)}}}function K(e,t,n){let r,a,o,i,s,c,l,u,f,_,d,b,{libprio:g}=t,y=16;return e.$$set=e=>{"libprio"in e&&n(0,g=e.libprio)},e.$$.update=()=>{2&e.$$.dirty&&n(2,r=[...Array(y).keys()].map((e=>e%3==0||e%5==0?1:0))),1&e.$$.dirty&&n(3,a=g.generate_keypair()),1&e.$$.dirty&&n(4,o=g.generate_keypair()),29&e.$$.dirty&&n(5,i=g.client_encode_simple(r,a.public,o.public)),11&e.$$.dirty&&n(6,s=new g.Server(y,!0,a.private)),19&e.$$.dirty&&n(12,c=new g.Server(y,!1,o.private)),64&e.$$.dirty&&n(13,l=s.choose_eval_at()),8288&e.$$.dirty&&n(7,u=s.generate_verification_message(l,new Uint8Array(i.a))),12320&e.$$.dirty&&n(8,f=c.generate_verification_message(l,new Uint8Array(i.b))),480&e.$$.dirty&&s.aggregate(new Uint8Array(i.a),u,f),4512&e.$$.dirty&&c.aggregate(new Uint8Array(i.b),f,u),64&e.$$.dirty&&n(9,_=s.total_shares()),4096&e.$$.dirty&&n(10,d=c.total_shares()),1537&e.$$.dirty&&n(11,b=g.reconstruct_shares(_,d))},[g,y,r,a,o,i,s,u,f,_,d,b,c,l,function(){a.private=this.value,n(3,a),n(0,g)},function(){a.public=this.value,n(3,a),n(0,g)},function(){o.private=this.value,n(4,o),n(0,g)},function(){o.public=this.value,n(4,o),n(0,g)},function(){var e;e=this.value,y=""===e?null:+e,n(1,y)},function(){r=this.value,n(2,r),n(1,y)},function(){i.a=this.value,n(5,i),n(0,g),n(2,r),n(3,a),n(4,o),n(1,y)},function(){i.b=this.value,n(5,i),n(0,g),n(2,r),n(3,a),n(4,o),n(1,y)},function(){b=this.value,n(11,b),n(0,g),n(9,_),n(10,d),n(6,s),n(12,c),n(1,y),n(3,a),n(4,o)}]}class D extends class{$destroy(){!function(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),B(this,e,K,q,o,{libprio:0})}}let F,z=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});z.decode();let G=null;function X(){return null!==G&&G.buffer===F.memory.buffer||(G=new Uint8Array(F.memory.buffer)),G}function H(e,t){return z.decode(X().subarray(e,e+t))}const Q=new Array(32).fill(void 0);Q.push(void 0,null,!0,!1);let Y=Q.length;function Z(e){Y===Q.length&&Q.push(Q.length+1);const t=Y;return Y=Q[t],Q[t]=e,t}function ee(e){return Q[e]}let te=0,ne=new TextEncoder("utf-8");const re="function"==typeof ne.encodeInto?function(e,t){return ne.encodeInto(e,t)}:function(e,t){const n=ne.encode(e);return t.set(n),{read:e.length,written:n.length}};function ae(e,t,n){if(void 0===n){const n=ne.encode(e),r=t(n.length);return X().subarray(r,r+n.length).set(n),te=n.length,r}let r=e.length,a=t(r);const o=X();let i=0;for(;i<r;i++){const t=e.charCodeAt(i);if(t>127)break;o[a+i]=t}if(i!==r){0!==i&&(e=e.slice(i)),a=n(a,r,r=i+3*e.length);const t=X().subarray(a+i,a+r);i+=re(e,t).written}return te=i,a}let oe=null;function ie(){return null!==oe&&oe.buffer===F.memory.buffer||(oe=new Int32Array(F.memory.buffer)),oe}function se(e){const t=ee(e);return function(e){e<36||(Q[e]=Y,Y=e)}(e),t}let ce=null;function le(e,t){const n=t(4*e.length);return(null!==ce&&ce.buffer===F.memory.buffer||(ce=new Uint32Array(F.memory.buffer)),ce).set(e,n/4),te=e.length,n}function ue(e,t){const n=t(1*e.length);return X().set(e,n/1),te=e.length,n}let fe=32;function _e(e){if(1==fe)throw new Error("out of js stack");return Q[--fe]=e,fe}function de(e){return function(){try{return e.apply(this,arguments)}catch(e){F.__wbindgen_exn_store(Z(e))}}}function be(e,t){return X().subarray(e/1,e/1+t)}class ge{static __wrap(e){const t=Object.create(ge.prototype);return t.ptr=e,t}__destroy_into_raw(){const e=this.ptr;return this.ptr=0,e}free(){const e=this.__destroy_into_raw();F.__wbg_server_free(e)}constructor(e,t,n){var r=ae(n,F.__wbindgen_malloc,F.__wbindgen_realloc),a=te,o=F.server_new(e,t,r,a);return ge.__wrap(o)}choose_eval_at(){return se(F.server_choose_eval_at(this.ptr))}generate_verification_message(e,t){var n=ue(t,F.__wbindgen_malloc),r=te;return se(F.server_generate_verification_message(this.ptr,e,n,r))}aggregate(e,t,n){try{var r=ue(e,F.__wbindgen_malloc),a=te;return se(F.server_aggregate(this.ptr,r,a,_e(t),_e(n)))}finally{Q[fe++]=void 0,Q[fe++]=void 0}}total_shares(){return se(F.server_total_shares(this.ptr))}}async function ye(e){void 0===e&&(e=new URL("index_bg.wasm",document.currentScript&&document.currentScript.src||new URL("bundle.js",document.baseURI).href));const t={wbg:{}};t.wbg.__wbg_log_05ccf0d1a4643ce4=function(e,t){console.log(H(e,t))},t.wbg.__wbindgen_json_parse=function(e,t){return Z(JSON.parse(H(e,t)))},t.wbg.__wbindgen_json_serialize=function(e,t){const n=ee(t);var r=ae(JSON.stringify(void 0===n?null:n),F.__wbindgen_malloc,F.__wbindgen_realloc),a=te;ie()[e/4+1]=a,ie()[e/4+0]=r},t.wbg.__wbg_new_59cb74e423758ede=function(){return Z(new Error)},t.wbg.__wbg_stack_558ba5917b466edd=function(e,t){var n=ae(ee(t).stack,F.__wbindgen_malloc,F.__wbindgen_realloc),r=te;ie()[e/4+1]=r,ie()[e/4+0]=n},t.wbg.__wbg_error_4bb6c2a97407129a=function(e,t){try{console.error(H(e,t))}finally{F.__wbindgen_free(e,t)}},t.wbg.__wbindgen_object_drop_ref=function(e){se(e)},t.wbg.__wbg_randomFillSync_d2ba53160aec6aba=function(e,t,n){ee(e).randomFillSync(be(t,n))},t.wbg.__wbg_getRandomValues_e57c9b75ddead065=function(e,t){ee(e).getRandomValues(ee(t))},t.wbg.__wbg_self_86b4b13392c7af56=de((function(){return Z(self.self)})),t.wbg.__wbg_require_f5521a5b85ad2542=function(e,t,n){return Z(ee(e).require(H(t,n)))},t.wbg.__wbg_crypto_b8c92eaac23d0d80=function(e){return Z(ee(e).crypto)},t.wbg.__wbg_msCrypto_9ad6677321a08dd8=function(e){return Z(ee(e).msCrypto)},t.wbg.__wbindgen_is_undefined=function(e){return void 0===ee(e)},t.wbg.__wbg_getRandomValues_dd27e6b0652b3236=function(e){return Z(ee(e).getRandomValues)},t.wbg.__wbg_static_accessor_MODULE_452b4680e8614c81=function(){return Z(r)},t.wbg.__wbg_instanceof_Window_9c4fd26090e1d029=function(e){return ee(e)instanceof Window},t.wbg.__wbg_crypto_18d7b231abdcbd51=de((function(e){return Z(ee(e).crypto)})),t.wbg.__wbg_getRandomValues_53db56f5dd604388=de((function(e,t,n){return Z(ee(e).getRandomValues(be(t,n)))})),t.wbg.__wbg_newnoargs_3efc7bfa69a681f9=function(e,t){return Z(new Function(H(e,t)))},t.wbg.__wbg_call_cb478d88f3068c91=de((function(e,t){return Z(ee(e).call(ee(t)))})),t.wbg.__wbg_self_05c54dcacb623b9a=de((function(){return Z(self.self)})),t.wbg.__wbg_window_9777ce446d12989f=de((function(){return Z(window.window)})),t.wbg.__wbg_globalThis_f0ca0bbb0149cf3d=de((function(){return Z(globalThis.globalThis)})),t.wbg.__wbg_global_c3c8325ae8c7f1a9=de((function(){return Z(global.global)})),t.wbg.__wbg_buffer_ebc6c8e75510eae3=function(e){return Z(ee(e).buffer)},t.wbg.__wbg_new_135e963dedf67b22=function(e){return Z(new Uint8Array(ee(e)))},t.wbg.__wbg_set_4a5072a31008e0cb=function(e,t,n){ee(e).set(ee(t),n>>>0)},t.wbg.__wbg_length_317f0dd77f7a6673=function(e){return ee(e).length},t.wbg.__wbg_newwithlength_78dc302d31527318=function(e){return Z(new Uint8Array(e>>>0))},t.wbg.__wbg_subarray_34c228a45c72d146=function(e,t,n){return Z(ee(e).subarray(t>>>0,n>>>0))},t.wbg.__wbindgen_object_clone_ref=function(e){return Z(ee(e))},t.wbg.__wbindgen_throw=function(e,t){throw new Error(H(e,t))},t.wbg.__wbindgen_memory=function(){return Z(F.memory)},("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e));const{instance:n,module:r}=await async function(e,t){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,t)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const n=await e.arrayBuffer();return await WebAssembly.instantiate(n,t)}{const n=await WebAssembly.instantiate(e,t);return n instanceof WebAssembly.Instance?{instance:n,module:e}:n}}(await e,t);return F=n.exports,ye.__wbindgen_wasm_module=r,F}var he=Object.freeze({__proto__:null,generate_keypair:function(){return se(F.generate_keypair())},client_encode_simple:function(e,t,n){var r=le(e,F.__wbindgen_malloc),a=te,o=ae(t,F.__wbindgen_malloc,F.__wbindgen_realloc),i=te,s=ae(n,F.__wbindgen_malloc,F.__wbindgen_realloc),c=te;return se(F.client_encode_simple(r,a,o,i,s,c))},decrypt_share:function(e,t){var n=ue(e,F.__wbindgen_malloc),r=te,a=ae(t,F.__wbindgen_malloc,F.__wbindgen_realloc),o=te;return se(F.decrypt_share(n,r,a,o))},reconstruct_shares:function(e,t){try{return se(F.reconstruct_shares(_e(e),_e(t)))}finally{Q[fe++]=void 0,Q[fe++]=void 0}},Server:ge,default:ye}),pe=async()=>(await ye("/build/assets/libprio-wasm-13f90320.wasm"),he);(async()=>{new D({target:document.body,props:{libprio:await pe()}})})()}();
//# sourceMappingURL=bundle.js.map