"use strict";(self.webpackChunk_cyan_ocean_ui=self.webpackChunk_cyan_ocean_ui||[]).push([[4354,4736],{65944:function(pe,B,I){I.r(B);var O=I(98428),Y=I(50959),P=I(11527),H=function(){return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(O.Tree,{mode:"preview",children:(0,P.jsxs)(O.TreeItem,{label:"\u7B2C\u4E00\u7AE0",id:"1",children:[(0,P.jsx)(O.TreeItem,{label:"\u7B2C\u4E8C\u7AE0",id:"2",children:(0,P.jsx)(O.TreeItem,{label:"\u7B2C\u56DB\u7AE0",id:"3"})}),(0,P.jsx)(O.TreeItem,{label:"\u7B2C\u4E09\u7AE0",id:"4"})]})})})};B.default=H},10441:function(pe,B,I){I.r(B),I.d(B,{default:function(){return ft}});var O=I(58357),Y=I.n(O),P=I(71977),H=I.n(P),oe=I(30577),ue=I.n(oe),W=I(98428),z=I(50959);function T(e){for(var t=arguments.length,o=Array(t>1?t-1:0),r=1;r<t;r++)o[r-1]=arguments[r];if(!1)var s,h;throw Error("[Immer] minified error nr: "+e+(o.length?" "+o.map(function(d){return"'"+d+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function L(e){return!!e&&!!e[b]}function K(e){var t;return!!e&&(function(o){if(!o||typeof o!="object")return!1;var r=Object.getPrototypeOf(o);if(r===null)return!0;var s=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return s===Object||typeof s=="function"&&Function.toString.call(s)===Ze}(e)||Array.isArray(e)||!!e[ne]||!!(!((t=e.constructor)===null||t===void 0)&&t[ne])||ce(e)||fe(e))}function dt(e){return L(e)||T(23,e),e[b].t}function G(e,t,o){o===void 0&&(o=!1),J(e)===0?(o?Object.keys:Q)(e).forEach(function(r){o&&typeof r=="symbol"||t(r,e[r],e)}):e.forEach(function(r,s){return t(s,r,e)})}function J(e){var t=e[b];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:ce(e)?2:fe(e)?3:0}function X(e,t){return J(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function ie(e,t){return J(e)===2?e.get(t):e[t]}function Se(e,t,o){var r=J(e);r===2?e.set(t,o):r===3?e.add(o):e[t]=o}function Me(e,t){return e===t?e!==0||1/e==1/t:e!=e&&t!=t}function ce(e){return Qe&&e instanceof Map}function fe(e){return Ye&&e instanceof Set}function x(e){return e.o||e.t}function ye(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=ze(e);delete t[b];for(var o=Q(t),r=0;r<o.length;r++){var s=o[r],h=t[s];h.writable===!1&&(h.writable=!0,h.configurable=!0),(h.get||h.set)&&(t[s]={configurable:!0,writable:!0,enumerable:h.enumerable,value:e[s]})}return Object.create(Object.getPrototypeOf(e),t)}function Z(e,t){return t===void 0&&(t=!1),me(e)||L(e)||!K(e)||(J(e)>1&&(e.set=e.add=e.clear=e.delete=Le),Object.freeze(e),t&&G(e,function(o,r){return Z(r,!0)},!0)),e}function Le(){T(2)}function me(e){return e==null||typeof e!="object"||Object.isFrozen(e)}function V(e){var t=je[e];return t||T(18,e),t}function ge(e,t){je[e]||(je[e]=t)}function q(){return te}function be(e,t){t&&(V("Patches"),e.u=[],e.s=[],e.v=t)}function le(e){Ce(e),e.p.forEach(Ge),e.p=null}function Ce(e){e===te&&(te=e.l)}function Re(e){return te={p:[],l:te,h:e,m:!0,_:0}}function Ge(e){var t=e[b];t.i===0||t.i===1?t.j():t.O=!0}function Ie(e,t){t._=t.p.length;var o=t.p[0],r=e!==void 0&&e!==o;return t.h.g||V("ES5").S(t,e,r),r?(o[b].P&&(le(t),T(4)),K(e)&&(e=se(t,e),t.l||de(t,e)),t.u&&V("Patches").M(o[b].t,e,t.u,t.s)):e=se(t,o,[]),le(t),t.u&&t.v(t.u,t.s),e!==Oe?e:void 0}function se(e,t,o){if(me(t))return t;var r=t[b];if(!r)return G(t,function(c,a){return _e(e,r,t,c,a,o)},!0),t;if(r.A!==e)return t;if(!r.P)return de(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var s=r.i===4||r.i===5?r.o=ye(r.k):r.o,h=s,d=!1;r.i===3&&(h=new Set(s),s.clear(),d=!0),G(h,function(c,a){return _e(e,r,s,c,a,o,d)}),de(e,s,!1),o&&e.u&&V("Patches").N(r,o,e.u,e.s)}return r.o}function _e(e,t,o,r,s,h,d){if(L(s)){var c=se(e,s,h&&t&&t.i!==3&&!X(t.R,r)?h.concat(r):void 0);if(Se(o,r,c),!L(c))return;e.m=!1}else d&&o.add(s);if(K(s)&&!me(s)){if(!e.h.D&&e._<1)return;se(e,s),t&&t.A.l||de(e,s)}}function de(e,t,o){o===void 0&&(o=!1),!e.l&&e.h.D&&e.m&&Z(t,o)}function Ee(e,t){var o=e[b];return(o?x(o):e)[t]}function Fe(e,t){if(t in e)for(var o=Object.getPrototypeOf(e);o;){var r=Object.getOwnPropertyDescriptor(o,t);if(r)return r;o=Object.getPrototypeOf(o)}}function S(e){e.P||(e.P=!0,e.l&&S(e.l))}function Pe(e){e.o||(e.o=ye(e.t))}function ee(e,t,o){var r=ce(t)?V("MapSet").F(t,o):fe(t)?V("MapSet").T(t,o):e.g?function(s,h){var d=Array.isArray(s),c={i:d?1:0,A:h?h.A:q(),P:!1,I:!1,R:{},l:h,t:s,k:null,o:null,j:null,C:!1},a=c,i=re;d&&(a=[c],i=ae);var l=Proxy.revocable(a,i),v=l.revoke,p=l.proxy;return c.k=p,c.j=v,p}(t,o):V("ES5").J(t,o);return(o?o.A:q()).p.push(r),r}function $e(e){return L(e)||T(22,e),function t(o){if(!K(o))return o;var r,s=o[b],h=J(o);if(s){if(!s.P&&(s.i<4||!V("ES5").K(s)))return s.t;s.I=!0,r=Be(o,h),s.I=!1}else r=Be(o,h);return G(r,function(d,c){s&&ie(s.t,d)===c||Se(r,d,t(c))}),h===3?new Set(r):r}(e)}function Be(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return ye(e)}function Je(){function e(d,c){var a=h[d];return a?a.enumerable=c:h[d]=a={configurable:!0,enumerable:c,get:function(){var i=this[b];return re.get(i,d)},set:function(i){var l=this[b];re.set(l,d,i)}},a}function t(d){for(var c=d.length-1;c>=0;c--){var a=d[c][b];if(!a.P)switch(a.i){case 5:r(a)&&S(a);break;case 4:o(a)&&S(a)}}}function o(d){for(var c=d.t,a=d.k,i=Q(a),l=i.length-1;l>=0;l--){var v=i[l];if(v!==b){var p=c[v];if(p===void 0&&!X(c,v))return!0;var y=a[v],m=y&&y[b];if(m?m.t!==p:!Me(y,p))return!0}}var g=!!c[b];return i.length!==Q(c).length+(g?0:1)}function r(d){var c=d.k;if(c.length!==d.t.length)return!0;var a=Object.getOwnPropertyDescriptor(c,c.length-1);if(a&&!a.get)return!0;for(var i=0;i<c.length;i++)if(!c.hasOwnProperty(i))return!0;return!1}function s(d){d.O&&T(3,JSON.stringify(x(d)))}var h={};ge("ES5",{J:function(d,c){var a=Array.isArray(d),i=function(v,p){if(v){for(var y=Array(p.length),m=0;m<p.length;m++)Object.defineProperty(y,""+m,e(m,!0));return y}var g=ze(p);delete g[b];for(var A=Q(g),E=0;E<A.length;E++){var j=A[E];g[j]=e(j,v||!!g[j].enumerable)}return Object.create(Object.getPrototypeOf(p),g)}(a,d),l={i:a?5:4,A:c?c.A:q(),P:!1,I:!1,R:{},l:c,t:d,k:i,o:null,O:!1,C:!1};return Object.defineProperty(i,b,{value:l,writable:!0}),i},S:function(d,c,a){a?L(c)&&c[b].A===d&&t(d.p):(d.u&&function i(l){if(l&&typeof l=="object"){var v=l[b];if(v){var p=v.t,y=v.k,m=v.R,g=v.i;if(g===4)G(y,function(M){M!==b&&(p[M]!==void 0||X(p,M)?m[M]||i(y[M]):(m[M]=!0,S(v)))}),G(p,function(M){y[M]!==void 0||X(y,M)||(m[M]=!1,S(v))});else if(g===5){if(r(v)&&(S(v),m.length=!0),y.length<p.length)for(var A=y.length;A<p.length;A++)m[A]=!1;else for(var E=p.length;E<y.length;E++)m[E]=!0;for(var j=Math.min(y.length,p.length),N=0;N<j;N++)y.hasOwnProperty(N)||(m[N]=!0),m[N]===void 0&&i(y[N])}}}}(d.p[0]),t(d.p))},K:function(d){return d.i===4?o(d):r(d)}})}function Xe(){function e(r){if(!K(r))return r;if(Array.isArray(r))return r.map(e);if(ce(r))return new Map(Array.from(r.entries()).map(function(d){return[d[0],e(d[1])]}));if(fe(r))return new Set(Array.from(r).map(e));var s=Object.create(Object.getPrototypeOf(r));for(var h in r)s[h]=e(r[h]);return X(r,ne)&&(s[ne]=r[ne]),s}function t(r){return L(r)?e(r):r}var o="add";ge("Patches",{$:function(r,s){return s.forEach(function(h){for(var d=h.path,c=h.op,a=r,i=0;i<d.length-1;i++){var l=J(a),v=""+d[i];l!==0&&l!==1||v!=="__proto__"&&v!=="constructor"||T(24),typeof a=="function"&&v==="prototype"&&T(24),typeof(a=ie(a,v))!="object"&&T(15,d.join("/"))}var p=J(a),y=e(h.value),m=d[d.length-1];switch(c){case"replace":switch(p){case 2:return a.set(m,y);case 3:T(16);default:return a[m]=y}case o:switch(p){case 1:return m==="-"?a.push(y):a.splice(m,0,y);case 2:return a.set(m,y);case 3:return a.add(y);default:return a[m]=y}case"remove":switch(p){case 1:return a.splice(m,1);case 2:return a.delete(m);case 3:return a.delete(h.value);default:return delete a[m]}default:T(17,c)}}),r},N:function(r,s,h,d){switch(r.i){case 0:case 4:case 2:return function(c,a,i,l){var v=c.t,p=c.o;G(c.R,function(y,m){var g=ie(v,y),A=ie(p,y),E=m?X(v,y)?"replace":o:"remove";if(g!==A||E!=="replace"){var j=a.concat(y);i.push(E==="remove"?{op:E,path:j}:{op:E,path:j,value:A}),l.push(E===o?{op:"remove",path:j}:E==="remove"?{op:o,path:j,value:t(g)}:{op:"replace",path:j,value:t(g)})}})}(r,s,h,d);case 5:case 1:return function(c,a,i,l){var v=c.t,p=c.R,y=c.o;if(y.length<v.length){var m=[y,v];v=m[0],y=m[1];var g=[l,i];i=g[0],l=g[1]}for(var A=0;A<v.length;A++)if(p[A]&&y[A]!==v[A]){var E=a.concat([A]);i.push({op:"replace",path:E,value:t(y[A])}),l.push({op:"replace",path:E,value:t(v[A])})}for(var j=v.length;j<y.length;j++){var N=a.concat([j]);i.push({op:o,path:N,value:t(y[j])})}v.length<y.length&&l.push({op:"replace",path:a.concat(["length"]),value:v.length})}(r,s,h,d);case 3:return function(c,a,i,l){var v=c.t,p=c.o,y=0;v.forEach(function(m){if(!p.has(m)){var g=a.concat([y]);i.push({op:"remove",path:g,value:m}),l.unshift({op:o,path:g,value:m})}y++}),y=0,p.forEach(function(m){if(!v.has(m)){var g=a.concat([y]);i.push({op:o,path:g,value:m}),l.unshift({op:"remove",path:g,value:m})}y++})}(r,s,h,d)}},M:function(r,s,h,d){h.push({op:"replace",path:[],value:s===Oe?void 0:s}),d.push({op:"replace",path:[],value:r})}})}function He(){function e(c,a){function i(){this.constructor=c}s(c,a),c.prototype=(i.prototype=a.prototype,new i)}function t(c){c.o||(c.R=new Map,c.o=new Map(c.t))}function o(c){c.o||(c.o=new Set,c.t.forEach(function(a){if(K(a)){var i=ee(c.A.h,a,c);c.p.set(a,i),c.o.add(i)}else c.o.add(a)}))}function r(c){c.O&&T(3,JSON.stringify(x(c)))}var s=function(c,a){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,l){i.__proto__=l}||function(i,l){for(var v in l)l.hasOwnProperty(v)&&(i[v]=l[v])})(c,a)},h=function(){function c(i,l){return this[b]={i:2,l,A:l?l.A:q(),P:!1,I:!1,o:void 0,R:void 0,t:i,k:this,C:!1,O:!1},this}e(c,Map);var a=c.prototype;return Object.defineProperty(a,"size",{get:function(){return x(this[b]).size}}),a.has=function(i){return x(this[b]).has(i)},a.set=function(i,l){var v=this[b];return r(v),x(v).has(i)&&x(v).get(i)===l||(t(v),S(v),v.R.set(i,!0),v.o.set(i,l),v.R.set(i,!0)),this},a.delete=function(i){if(!this.has(i))return!1;var l=this[b];return r(l),t(l),S(l),l.t.has(i)?l.R.set(i,!1):l.R.delete(i),l.o.delete(i),!0},a.clear=function(){var i=this[b];r(i),x(i).size&&(t(i),S(i),i.R=new Map,G(i.t,function(l){i.R.set(l,!1)}),i.o.clear())},a.forEach=function(i,l){var v=this;x(this[b]).forEach(function(p,y){i.call(l,v.get(y),y,v)})},a.get=function(i){var l=this[b];r(l);var v=x(l).get(i);if(l.I||!K(v)||v!==l.t.get(i))return v;var p=ee(l.A.h,v,l);return t(l),l.o.set(i,p),p},a.keys=function(){return x(this[b]).keys()},a.values=function(){var i,l=this,v=this.keys();return(i={})[he]=function(){return l.values()},i.next=function(){var p=v.next();return p.done?p:{done:!1,value:l.get(p.value)}},i},a.entries=function(){var i,l=this,v=this.keys();return(i={})[he]=function(){return l.entries()},i.next=function(){var p=v.next();if(p.done)return p;var y=l.get(p.value);return{done:!1,value:[p.value,y]}},i},a[he]=function(){return this.entries()},c}(),d=function(){function c(i,l){return this[b]={i:3,l,A:l?l.A:q(),P:!1,I:!1,o:void 0,t:i,k:this,p:new Map,O:!1,C:!1},this}e(c,Set);var a=c.prototype;return Object.defineProperty(a,"size",{get:function(){return x(this[b]).size}}),a.has=function(i){var l=this[b];return r(l),l.o?!!l.o.has(i)||!(!l.p.has(i)||!l.o.has(l.p.get(i))):l.t.has(i)},a.add=function(i){var l=this[b];return r(l),this.has(i)||(o(l),S(l),l.o.add(i)),this},a.delete=function(i){if(!this.has(i))return!1;var l=this[b];return r(l),o(l),S(l),l.o.delete(i)||!!l.p.has(i)&&l.o.delete(l.p.get(i))},a.clear=function(){var i=this[b];r(i),x(i).size&&(o(i),S(i),i.o.clear())},a.values=function(){var i=this[b];return r(i),o(i),i.o.values()},a.entries=function(){var i=this[b];return r(i),o(i),i.o.entries()},a.keys=function(){return this.values()},a[he]=function(){return this.values()},a.forEach=function(i,l){for(var v=this.values(),p=v.next();!p.done;)i.call(l,p.value,p.value,this),p=v.next()},c}();ge("MapSet",{F:function(c,a){return new h(c,a)},T:function(c,a){return new d(c,a)}})}function ht(){Je(),He(),Xe()}function vt(e){return e}function pt(e){return e}var Ue,te,Ae=typeof Symbol!="undefined"&&typeof Symbol("x")=="symbol",Qe=typeof Map!="undefined",Ye=typeof Set!="undefined",ke=typeof Proxy!="undefined"&&Proxy.revocable!==void 0&&typeof Reflect!="undefined",Oe=Ae?Symbol.for("immer-nothing"):((Ue={})["immer-nothing"]=!0,Ue),ne=Ae?Symbol.for("immer-draftable"):"__$immer_draftable",b=Ae?Symbol.for("immer-state"):"__$immer_state",he=typeof Symbol!="undefined"&&Symbol.iterator||"@@iterator",yt={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(e){return"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+e},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(e){return"Cannot apply patch, path doesn't resolve: "+e},16:'Sets cannot have "replace" patches.',17:function(e){return"Unsupported patch operation: "+e},18:function(e){return"The plugin for '"+e+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+e+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(e){return"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+e+"'"},22:function(e){return"'current' expects a draft, got: "+e},23:function(e){return"'original' expects a draft, got: "+e},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Ze=""+Object.prototype.constructor,Q=typeof Reflect!="undefined"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames,ze=Object.getOwnPropertyDescriptors||function(e){var t={};return Q(e).forEach(function(o){t[o]=Object.getOwnPropertyDescriptor(e,o)}),t},je={},re={get:function(e,t){if(t===b)return e;var o=x(e);if(!X(o,t))return function(s,h,d){var c,a=Fe(h,d);return a?"value"in a?a.value:(c=a.get)===null||c===void 0?void 0:c.call(s.k):void 0}(e,o,t);var r=o[t];return e.I||!K(r)?r:r===Ee(e.t,t)?(Pe(e),e.o[t]=ee(e.A.h,r,e)):r},has:function(e,t){return t in x(e)},ownKeys:function(e){return Reflect.ownKeys(x(e))},set:function(e,t,o){var r=Fe(x(e),t);if(r!=null&&r.set)return r.set.call(e.k,o),!0;if(!e.P){var s=Ee(x(e),t),h=s==null?void 0:s[b];if(h&&h.t===o)return e.o[t]=o,e.R[t]=!1,!0;if(Me(o,s)&&(o!==void 0||X(e.t,t)))return!0;Pe(e),S(e)}return e.o[t]===o&&(o!==void 0||t in e.o)||Number.isNaN(o)&&Number.isNaN(e.o[t])||(e.o[t]=o,e.R[t]=!0),!0},deleteProperty:function(e,t){return Ee(e.t,t)!==void 0||t in e.t?(e.R[t]=!1,Pe(e),S(e)):delete e.R[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var o=x(e),r=Reflect.getOwnPropertyDescriptor(o,t);return r&&{writable:!0,configurable:e.i!==1||t!=="length",enumerable:r.enumerable,value:o[t]}},defineProperty:function(){T(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){T(12)}},ae={};G(re,function(e,t){ae[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),ae.deleteProperty=function(e,t){return ae.set.call(this,e,t,void 0)},ae.set=function(e,t,o){return re.set.call(this,e[0],t,o,e[0])};var qe=function(){function e(o){var r=this;this.g=ke,this.D=!0,this.produce=function(s,h,d){if(typeof s=="function"&&typeof h!="function"){var c=h;h=s;var a=r;return function(g){var A=this;g===void 0&&(g=c);for(var E=arguments.length,j=Array(E>1?E-1:0),N=1;N<E;N++)j[N-1]=arguments[N];return a.produce(g,function(M){var ve;return(ve=h).call.apply(ve,[A,M].concat(j))})}}var i;if(typeof h!="function"&&T(6),d!==void 0&&typeof d!="function"&&T(7),K(s)){var l=Re(r),v=ee(r,s,void 0),p=!0;try{i=h(v),p=!1}finally{p?le(l):Ce(l)}return typeof Promise!="undefined"&&i instanceof Promise?i.then(function(g){return be(l,d),Ie(g,l)},function(g){throw le(l),g}):(be(l,d),Ie(i,l))}if(!s||typeof s!="object"){if((i=h(s))===void 0&&(i=s),i===Oe&&(i=void 0),r.D&&Z(i,!0),d){var y=[],m=[];V("Patches").M(s,i,y,m),d(y,m)}return i}T(21,s)},this.produceWithPatches=function(s,h){if(typeof s=="function")return function(i){for(var l=arguments.length,v=Array(l>1?l-1:0),p=1;p<l;p++)v[p-1]=arguments[p];return r.produceWithPatches(i,function(y){return s.apply(void 0,[y].concat(v))})};var d,c,a=r.produce(s,h,function(i,l){d=i,c=l});return typeof Promise!="undefined"&&a instanceof Promise?a.then(function(i){return[i,d,c]}):[a,d,c]},typeof(o==null?void 0:o.useProxies)=="boolean"&&this.setUseProxies(o.useProxies),typeof(o==null?void 0:o.autoFreeze)=="boolean"&&this.setAutoFreeze(o.autoFreeze)}var t=e.prototype;return t.createDraft=function(o){K(o)||T(8),L(o)&&(o=$e(o));var r=Re(this),s=ee(this,o,void 0);return s[b].C=!0,Ce(r),s},t.finishDraft=function(o,r){var s=o&&o[b],h=s.A;return be(h,r),Ie(void 0,h)},t.setAutoFreeze=function(o){this.D=o},t.setUseProxies=function(o){o&&!ke&&T(20),this.g=o},t.applyPatches=function(o,r){var s;for(s=r.length-1;s>=0;s--){var h=r[s];if(h.path.length===0&&h.op==="replace"){o=h.value;break}}s>-1&&(r=r.slice(s+1));var d=V("Patches").$;return L(o)?d(o,r):this.produce(o,function(c){return d(c,r)})},e}(),R=new qe,et=R.produce,mt=R.produceWithPatches.bind(R),gt=R.setAutoFreeze.bind(R),bt=R.setUseProxies.bind(R),Ct=R.applyPatches.bind(R),It=R.createDraft.bind(R),Et=R.finishDraft.bind(R),tt=et;function Ke(e){var t=(0,z.useState)(function(){return Z(typeof e=="function"?e():e,!0)}),o=t[1];return[t[0],(0,z.useCallback)(function(r){o(typeof r=="function"?tt(r):Z(r))},[])]}function Pt(e,t,o){var r=f(function(){return n(e)},[e]);return u(r,t,o)}var U=I(11527),nt=function(t){var o=t.cancelAdd,r=t.confirmAdd,s=t.onAddInputChange;return(0,U.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,U.jsx)(W.Input,{autoFocus:!0,onChange:function(d){s(d.target.value,d)},style:{marginLeft:"12px",marginRight:"15px"}}),(0,U.jsx)(W.Button,{type:"outline",onClick:function(){return r()},style:{marginRight:"15px"},children:"\u786E\u8BA4"}),(0,U.jsx)(W.Button,{type:"danger",onClick:function(){return o()},style:{marginRight:"15px"},children:"\u53D6\u6D88"})]})},rt=nt,Ve=new Set,Te=function(){for(var t=Math.random()*1e4;Ve.has(t);)t=Math.random()*1e3;return Ve.add(t),{anyName:"Chapter",anyId:t+""}},We=function(t,o,r){o(function(s){var h=function d(c){c&&c.forEach(function(a,i){a.anyChild&&a.anyChild.length&&d(a.anyChild),t===a.anyId?c.splice(i,1):r&&r[0]===a.anyId&&(console.log(a,"d"),console.log("jkjk"),c.splice(i,1))})};h(s)})},at=function(t,o,r){o(function(s){var h=function d(c){c&&c.forEach(function(a){a.anyChild&&a.anyChild.length&&d(a.anyChild),t===a.anyId&&(a.anyName=r[0])})};h(s)})},ot=function(t,o,r){o(function(s){var h=function d(c){c&&c.forEach(function(a){a.anyChild&&a.anyChild.length&&d(a.anyChild),r[0]===a.anyId&&(a.anyChild=a.anyChild||[],a.anyChild.push(r[1]))})};h(s)})},ut=function(t,o,r){var s=function h(d){d&&d.forEach(function(c){c.anyChild&&c.anyChild.length&&h(c.anyChild),t===c.anyId&&o(c)})};s(r)},it=function(t,o,r){o(function(s){var h=function d(c){c&&c.forEach(function(a){a.anyChild&&a.anyChild.length&&d(a.anyChild),t===a.anyId&&(a.anyName=r)})};h(s)})},ct=function(){var t=Ke([{anyName:"Chapter1",anyId:"0",anyChild:[{anyName:"ClassTime1-1",anyId:"0-0"}]},{anyName:"Chapter2",anyId:"1",anyChild:[{anyName:"ClassTime2-1",anyId:"1-1"}]},{anyName:"Chapter3",anyId:"2"}]),o=ue()(t,2),r=o[0],s=o[1],h=Ke({addFocus:!1,editFocus:!1,inputValue:""}),d=ue()(h,2),c=d[0],a=d[1],i=(0,z.useState)(Te()),l=ue()(i,2),v=l[0],p=l[1],y=(0,z.useState)(null),m=ue()(y,2),g=m[0],A=m[1],E=function(D){return function(){for(var C=arguments.length,$=new Array(C),k=0;k<C;k++)$[k]=arguments[k];D(v.anyId,s,$)}},j=(0,z.useCallback)(function(){var w=Te();p(function(){return w}),s(function(D){D.push(w)}),a(function(D){D.addFocus=!0})},[r]),N=(0,z.useCallback)(function(w){var D=Te();p(function(){return D}),E(ot)(w,D),a(function(C){C.addFocus=!0})},[r]),M=(0,z.useCallback)(H()(Y()().mark(function w(){return Y()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:E(at)(c.inputValue),a(function($){$.addFocus=!1,$.inputValue=""});case 2:case"end":return C.stop()}},w)})),[c.inputValue,r]),ve=(0,z.useCallback)(function(){E(We)(),a(function(w){w.addFocus=!1})},[r]),xe=function(){a(function(D){D.editFocus=!1})},De=function(){it(g.anyId,s,c.inputValue),a(function(D){D.editFocus=!1,D.inputValue=""}),A(null)},Ne=(0,z.useCallback)(function(w){E(We)(w)},[r]),we=(0,z.useCallback)(function(w){a(function(D){D.editFocus=!0}),ut(w,A,r)},[g,r]),lt=function w(D){return D.map(function(C){var $;return C!=null&&C.anyChild&&(($=C.anyChild)===null||$===void 0?void 0:$.length)>0?(0,U.jsx)(W.TreeItem,{id:C.anyId,label:C.anyName,addChildNode:N,editNode:we,deleteNode:Ne,editMode:(g==null?void 0:g.anyId)===C.anyId&&c.editFocus,confirmEdit:De,cancelEdit:xe,onEditInputChange:function(_){a(function(F){F.inputValue=_})},onAddInputChange:function(_){a(function(F){F.inputValue=_})},bindValue:C.anyName,children:w(C.anyChild)},C.anyId):C.anyId===v.anyId?c.addFocus?(0,U.jsx)(rt,{cancelAdd:ve,confirmAdd:M,onAddInputChange:function(_){a(function(F){F.inputValue=_})}},C.anyId):(0,U.jsx)(W.TreeItem,{id:C.anyId,label:C.anyName,addChildNode:N,editNode:we,deleteNode:Ne,editMode:(g==null?void 0:g.anyId)===C.anyId&&c.editFocus,confirmEdit:De,cancelEdit:xe,onEditInputChange:function(_){a(function(F){F.inputValue=_})},onAddInputChange:function(_){a(function(F){F.inputValue=_})},bindValue:C.anyName},C.anyId):(0,U.jsx)(W.TreeItem,{id:C.anyId,label:C.anyName,addChildNode:N,editNode:we,deleteNode:Ne,editMode:(g==null?void 0:g.anyId)===C.anyId&&c.editFocus,confirmEdit:De,cancelEdit:xe,onEditInputChange:function(_){a(function(F){F.inputValue=_})},onAddInputChange:function(_){a(function(F){F.inputValue=_})},bindValue:C.anyName},C.anyId)})},st=lt(r);return(0,U.jsxs)(W.GlobalThemeProvider,{children:[(0,U.jsx)(W.Button,{type:"text",style:{marginBottom:"20px"},onClick:j,children:"\u6DFB\u52A0\u6839\u76EE\u5F55"}),(0,U.jsx)(W.Tree,{children:st})]})},ft=ct},4579:function(pe,B,I){I.r(B);var O=I(98428),Y=I(50959),P=I(11527),H=function(){return(0,P.jsx)(O.GlobalThemeProvider,{children:(0,P.jsx)(O.Tree,{mode:"preview",selectable:!0,children:(0,P.jsxs)(O.TreeItem,{label:"\u7B2C\u4E00\u7AE0",id:"1",children:[(0,P.jsx)(O.TreeItem,{label:"\u7B2C\u4E8C\u7AE0",id:"2",children:(0,P.jsx)(O.TreeItem,{label:"\u7B2C\u56DB\u7AE0",id:"3"})}),(0,P.jsx)(O.TreeItem,{label:"\u7B2C\u4E09\u7AE0",id:"4"})]})})})};B.default=H},31054:function(pe,B,I){I.r(B);var O=I(98428),Y=I(50959),P=I(11527),H=function(){return(0,P.jsx)(O.GlobalThemeProvider,{children:(0,P.jsx)(O.Tree,{mode:"interact",tool:(0,P.jsx)(O.Button,{type:"text",h:5,c:"#fff",children:"\u62D3\u5C55\u5DE5\u5177\u680F"}),children:(0,P.jsxs)(O.TreeItem,{label:"\u7B2C\u4E00\u7AE0",id:"1",children:[(0,P.jsx)(O.TreeItem,{label:"\u7B2C\u4E8C\u7AE0",id:"2",children:(0,P.jsx)(O.TreeItem,{label:"\u7B2C\u56DB\u7AE0",id:"3"})}),(0,P.jsx)(O.TreeItem,{label:"\u7B2C\u4E09\u7AE0",id:"4"})]})})})};B.default=H}}]);