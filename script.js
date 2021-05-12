(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a}; 
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var da=ca(this),ea="function"===typeof Symbol&&"symbol"===typeof Symbol("x"),q={},fa={};function u(a,b){var c=fa[b];if(null==c)return a[b];c=a[c];return void 0!==c?c:a[b]} 
function ha(a,b,c){if(b)a:{var d=a.split(".");a=1===d.length;var e=d[0],f;!a&&e in q?f=q:f=da;for(e=0;e<d.length-1;e++){var g=d[e];if(!(g in f))break a;f=f[g]}d=d[d.length-1];c=ea&&"es6"===c?f[d]:null;b=b(c);null!=b&&(a?ba(q,d,{configurable:!0,writable:!0,value:b}):b!==c&&(fa[d]=ea?da.Symbol(d):"$jscp$"+d,d=fa[d],ba(f,d,{configurable:!0,writable:!0,value:b})))}} 
ha("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}function c(e,f){this.a=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}if(a)return a;c.prototype.toString=function(){return this.a};var d=0;return b},"es6"); 
ha("Symbol.iterator",function(a){if(a)return a;a=(0,q.Symbol)("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(aa(this))}})}return a},"es6"); 
function ia(a){a={next:a};a[u(q.Symbol,"iterator")]=function(){return this};return a}function w(a){var b="undefined"!=typeof q.Symbol&&u(q.Symbol,"iterator")&&a[u(q.Symbol,"iterator")];return b?b.call(a):{next:aa(a)}}function ja(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var ka="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},la; 
if(ea&&"function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={Ca:!0},oa={};try{oa.__proto__=na;ma=oa.Ca;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=la; 
function qa(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}function ra(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""} 
ha("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ra(this,b,"endsWith");void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}},"es6");ha("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}},"es6"); 
ha("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ra(this,b,"startsWith"),e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}},"es6");function sa(a,b){a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[u(q.Symbol,"iterator")]=function(){return d};return d} 
ha("Array.prototype.keys",function(a){return a?a:function(){return sa(this,function(b){return b})}},"es6");ha("Array.prototype.values",function(a){return a?a:function(){return sa(this,function(b,c){return c})}},"es8");function ta(a,b){return Object.prototype.hasOwnProperty.call(a,b)}var ua=ea&&"function"==typeof u(Object,"assign")?u(Object,"assign"):function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ta(d,e)&&(a[e]=d[e])}return a}; 
ha("Object.assign",function(a){return a||ua},"es6"); 
ha("Promise",function(a){function b(g){this.b=0;this.g=void 0;this.a=[];var h=this.c();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.a=null}function d(g){return g instanceof b?g:new b(function(h){h(g)})}if(a)return a;c.prototype.b=function(g){if(null==this.a){this.a=[];var h=this;this.c(function(){h.g()})}this.a.push(g)};var e=da.setTimeout;c.prototype.c=function(g){e(g,0)};c.prototype.g=function(){for(;this.a&&this.a.length;){var g=this.a;this.a=[];for(var h=0;h<g.length;++h){var k= 
g[h];g[h]=null;try{k()}catch(l){this.f(l)}}}this.a=null};c.prototype.f=function(g){this.c(function(){throw g;})};b.prototype.c=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}var h=this,k=!1;return{resolve:g(this.J),reject:g(this.f)}};b.prototype.J=function(g){if(g===this)this.f(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.K(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.D(g):this.i(g)}}; 
b.prototype.D=function(g){var h=void 0;try{h=g.then}catch(k){this.f(k);return}"function"==typeof h?this.O(h,g):this.i(g)};b.prototype.f=function(g){this.o(2,g)};b.prototype.i=function(g){this.o(1,g)};b.prototype.o=function(g,h){if(0!=this.b)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.b);this.b=g;this.g=h;this.s()};b.prototype.s=function(){if(null!=this.a){for(var g=0;g<this.a.length;++g)f.b(this.a[g]);this.a=null}};var f=new c;b.prototype.K=function(g){var h=this.c(); 
g.Y(h.resolve,h.reject)};b.prototype.O=function(g,h){var k=this.c();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(g,h){function k(v,r){return"function"==typeof v?function(A){try{l(v(A))}catch(t){n(t)}}:r}var l,n,p=new b(function(v,r){l=v;n=r});this.Y(k(g,l),k(h,n));return p};b.prototype.catch=function(g){return this.then(void 0,g)};b.prototype.Y=function(g,h){function k(){switch(l.b){case 1:g(l.g);break;case 2:h(l.g);break;default:throw Error("Unexpected state: "+ 
l.b);}}var l=this;null==this.a?f.b(k):this.a.push(k)};b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};b.race=function(g){return new b(function(h,k){for(var l=w(g),n=l.next();!n.done;n=l.next())d(n.value).Y(h,k)})};b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(A){return function(t){v[A]=t;r--;0==r&&l(v)}}var v=[],r=0;do v.push(void 0),r++,d(k.value).Y(p(v.length-1),n),k=h.next();while(!k.done)})};return b},"es6"); 
ha("WeakMap",function(a){function b(g){this.a=(f+=Math.random()+1).toString();if(g){g=w(g);for(var h;!(h=g.next()).done;)h=h.value,this.set(h[0],h[1])}}function c(){}function d(g){var h=typeof g;return"object"===h&&null!==g||"function"===h}if(function(){if(!a||!Object.seal)return!1;try{var g=Object.seal({}),h=Object.seal({}),k=new a([[g,2],[h,3]]);if(2!=k.get(g)||3!=k.get(h))return!1;k.delete(g);k.set(h,4);return!k.has(g)&&4==k.get(h)}catch(l){return!1}}())return a;var e="$jscomp_hidden_"+Math.random(), 
f=0;b.prototype.set=function(g,h){if(!d(g))throw Error("Invalid WeakMap key");if(!ta(g,e)){var k=new c;ba(g,e,{value:k})}if(!ta(g,e))throw Error("WeakMap key fail: "+g);g[e][this.a]=h;return this};b.prototype.get=function(g){return d(g)&&ta(g,e)?g[e][this.a]:void 0};b.prototype.has=function(g){return d(g)&&ta(g,e)&&ta(g[e],this.a)};b.prototype.delete=function(g){return d(g)&&ta(g,e)&&ta(g[e],this.a)?delete g[e][this.a]:!1};return b},"es6"); 
ha("Map",function(a){function b(){var h={};return h.C=h.next=h.head=h}function c(h,k){var l=h.a;return ia(function(){if(l){for(;l.head!=h.a;)l=l.C;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.b[l];if(n&&ta(h.b,l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,j:p}}return{id:l,list:n, 
index:-1,j:void 0}}function e(h){this.b={};this.a=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x|| 
"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;var f=new q.WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.b[l.id]=[]);l.j?l.j.value=k:(l.j={next:this.a,C:this.a.C,head:this.a,key:h,value:k},l.list.push(l.j),this.a.C.next=l.j,this.a.C=l.j,this.size++);return this};e.prototype.delete=function(h){h=d(this,h);return h.j&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.b[h.id],h.j.C.next=h.j.next,h.j.next.C=h.j.C,h.j.head=null,this.size--, 
!0):!1};e.prototype.clear=function(){this.b={};this.a=this.a.C=b();this.size=0};e.prototype.has=function(h){return!!d(this,h).j};e.prototype.get=function(h){return(h=d(this,h).j)&&h.value};e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};e.prototype.keys=function(){return c(this,function(h){return h.key})};e.prototype.values=function(){return c(this,function(h){return h.value})};e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value, 
h.call(k,n[1],n[0],this)};e.prototype[u(q.Symbol,"iterator")]=e.prototype.entries;var g=0;return e},"es6"); 
ha("Set",function(a){function b(c){this.a=new q.Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.a.size}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x|| 
f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;b.prototype.add=function(c){c=0===c?0:c;this.a.set(c,c);this.size=this.a.size;return this};b.prototype.delete=function(c){c=this.a.delete(c);this.size=this.a.size;return c};b.prototype.clear=function(){this.a.clear();this.size=0};b.prototype.has=function(c){return this.a.has(c)};b.prototype.entries=function(){return this.a.entries()};b.prototype.values=function(){return u(this.a,"values").call(this.a)};b.prototype.keys=u(b.prototype, 
"values");b.prototype[u(q.Symbol,"iterator")]=u(b.prototype,"values");b.prototype.forEach=function(c,d){var e=this;this.a.forEach(function(f){return c.call(d,f,f,e)})};return b},"es6");var x=this||self;function va(a){if(a&&a!=x)return wa(a.document);null===xa&&(xa=wa(x.document));return xa}var ya=/^[\w+/_-]+[=]{0,2}$/,xa=null;function wa(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&ya.test(a)?a:""} 
function za(a){a=a.split(".");for(var b=x,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}function Aa(){}function Ba(a){a.ga=void 0;a.h=function(){return a.ga?a.ga:a.ga=new a}}function Ca(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function Ea(a){return Object.prototype.hasOwnProperty.call(a,Fa)&&a[Fa]||(a[Fa]=++Ga)}var Fa="closure_uid_"+(1E9*Math.random()>>>0),Ga=0;function Ha(a,b,c){return a.call.apply(a.bind,arguments)} 
function Ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function Ja(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ja=Ha:Ja=Ia;return Ja.apply(null,arguments)} 
function Ka(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}var La=Date.now;function y(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a}function Ma(a){return a};var Na=(new Date).getTime();function Oa(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)}function Pa(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];b.call(void 0,h,g,a)&&(d[e++]=h)}return d}function Qa(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));return d} 
function Ra(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;return!1}function Sa(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]} 
function Ta(a,b){a:{for(var c="string"===typeof a?a.split(""):a,d=a.length-1;0<=d;d--)if(d in c&&b.call(void 0,c[d],d,a)){b=d;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}function Ua(a,b){a:if("string"===typeof a)a="string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);else{for(var c=0;c<a.length;c++)if(c in a&&a[c]===b){a=c;break a}a=-1}return 0<=a};function Va(a){return function(){return!a.apply(this,arguments)}}function Wa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}function Xa(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};function Ya(a,b){var c={},d;for(d in a)b.call(void 0,a[d],d,a)&&(c[d]=a[d]);return c}function Za(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}function $a(a,b){return null!==a&&b in a}function ab(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return c}function bb(a){var b={},c;for(c in a)b[c]=a[c];return b};var cb;function db(){if(void 0===cb){var a=null,b=x.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ma,createScript:Ma,createScriptURL:Ma})}catch(c){x.console&&x.console.error(c.message)}cb=a}else cb=a}return cb};function eb(a,b){this.c=a===fb&&b||"";this.f=gb}eb.prototype.b=!0;eb.prototype.a=function(){return this.c};function hb(a){return a instanceof eb&&a.constructor===eb&&a.f===gb?a.c:"type_error:Const"}var gb={},fb={};var ib={};function jb(a,b){this.c=b===ib?a:"";this.b=!0}function kb(a,b){for(var c=[],d=1;d<arguments.length;d++)c.push(JSON.stringify(arguments[d]).replace(/</g,"\\x3c"));c="("+hb(a)+")("+c.join(", ")+");";c=(d=db())?d.createScript(c):c;return new jb(c,ib)}jb.prototype.a=function(){return this.c.toString()};function lb(a){return a instanceof jb&&a.constructor===jb?a.c:"type_error:SafeScript"};function mb(a,b){this.c=b===nb?a:""}mb.prototype.b=!0;mb.prototype.a=function(){return this.c.toString()};function ob(a){return a instanceof mb&&a.constructor===mb?a.c:"type_error:TrustedResourceUrl"} 
function pb(){var a={},b=hb(new eb(fb,"https://pagead2.googlesyndication.com/pagead/gen_204"));if(!qb.test(b))throw Error("Invalid TrustedResourceUrl format: "+b);var c=b.replace(rb,function(d,e){if(!Object.prototype.hasOwnProperty.call(a,e))throw Error('Found marker, "'+e+'", in format string, "'+b+'", but no valid label mapping found in args: '+JSON.stringify(a));d=a[e];return d instanceof eb?hb(d):encodeURIComponent(String(d))});return sb(c)} 
var rb=/%{(\w+)}/g,qb=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,tb=/^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;function ub(a){var b=pb();b=tb.exec(ob(b).toString());var c=b[3]||"";return sb(b[1]+vb("?",b[2]||"",a)+vb("#",c,void 0))}var nb={};function sb(a){var b=db();a=b?b.createScriptURL(a):a;return new mb(a,nb)} 
function vb(a,b,c){if(null==c)return b;if("string"===typeof c)return c?a+encodeURIComponent(c):"";for(var d in c)if(Object.prototype.hasOwnProperty.call(c,d)){var e=c[d];e=Array.isArray(e)?e:[e];for(var f=0;f<e.length;f++){var g=e[f];null!=g&&(b||(b=a),b+=(b.length>a.length?"&":"")+encodeURIComponent(d)+"="+encodeURIComponent(String(g)))}}return b};function wb(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]}var xb=/&/g,yb=/</g,zb=/>/g,Ab=/"/g,Bb=/'/g,Cb=/\x00/g; 
function Db(a,b){var c=0;a=wb(String(a)).split(".");b=wb(String(b)).split(".");for(var d=Math.max(a.length,b.length),e=0;0==c&&e<d;e++){var f=a[e]||"",g=b[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;c=Eb(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Eb(0==f[2].length,0==g[2].length)||Eb(f[2],g[2]);f=f[3];g=g[3]}while(0==c)}return c}function Eb(a,b){return a<b?-1:a>b?1:0};function Fb(a,b){this.c=b===Gb?a:""}Fb.prototype.b=!0;Fb.prototype.a=function(){return this.c.toString()};function Hb(a){return a instanceof Fb&&a.constructor===Fb?a.c:"type_error:SafeUrl"}var Ib=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Gb={};var Jb;a:{var Kb=x.navigator;if(Kb){var Lb=Kb.userAgent;if(Lb){Jb=Lb;break a}}Jb=""}function z(a){return-1!=Jb.indexOf(a)}function Mb(a){for(var b=/(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g,c=[],d;d=b.exec(a);)c.push([d[1],d[2],d[3]||void 0]);return c};function Nb(){return(z("Chrome")||z("CriOS"))&&!z("Edge")}function Ob(){function a(e){e=Sa(e,d);return c[e]||""}var b=Jb;if(z("Trident")||z("MSIE"))return Pb(b);b=Mb(b);var c={};Oa(b,function(e){c[e[0]]=e[1]});var d=Ka($a,c);return z("Opera")?a(["Version","Opera"]):z("Edge")?a(["Edge"]):z("Edg/")?a(["Edg"]):Nb()?a(["Chrome","CriOS","HeadlessChrome"]):(b=b[2])&&b[1]||""} 
function Pb(a){var b=/rv: *([\d\.]*)/.exec(a);if(b&&b[1])return b[1];b="";var c=/MSIE +([\d\.]+)/.exec(a);if(c&&c[1])if(a=/Trident\/(\d.\d)/.exec(a),"7.0"==c[1])if(a&&a[1])switch(a[1]){case "4.0":b="8.0";break;case "5.0":b="9.0";break;case "6.0":b="10.0";break;case "7.0":b="11.0"}else b="7.0";else b=c[1];return b};function Qb(a,b,c){this.c=c===Rb?a:""}Qb.prototype.b=!0;Qb.prototype.a=function(){return this.c.toString()};function Sb(a){return a instanceof Qb&&a.constructor===Qb?a.c:"type_error:SafeHtml"}var Rb={},Tb=new Qb(x.trustedTypes&&x.trustedTypes.emptyHTML||"",0,Rb);var Ub=Wa(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Sb(Tb);return!b.parentElement});function Vb(a,b){if(Ub())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Sb(b)}function Wb(a){var b=va(a.ownerDocument&&a.ownerDocument.defaultView);b&&a.setAttribute("nonce",b)};var Xb={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},Yb={"'":"\\'"};function Zb(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})};function $b(){return z("iPhone")&&!z("iPod")&&!z("iPad")};function ac(a){ac[" "](a);return a}ac[" "]=Aa;var bc=$b()||z("iPod"),cc=z("Safari")&&!(Nb()||z("Coast")||z("Opera")||z("Edge")||z("Edg/")||z("OPR")||z("Firefox")||z("FxiOS")||z("Silk")||z("Android"))&&!($b()||z("iPad")||z("iPod"));var dc={},ec=null;function B(){}var fc="function"==typeof Uint8Array;function C(a,b,c,d){a.b=null;b||(b=[]);a.s=void 0;a.f=-1;a.a=b;a:{if(b=a.a.length){--b;var e=a.a[b];if(!(null===e||"object"!=typeof e||Array.isArray(e)||fc&&e instanceof Uint8Array)){a.g=b-a.f;a.c=e;break a}}a.g=Number.MAX_VALUE}a.o={};if(c)for(b=0;b<c.length;b++)e=c[b],e<a.g?(e+=a.f,a.a[e]=a.a[e]||gc):(hc(a),a.c[e]=a.c[e]||gc);if(d&&d.length)for(b=0;b<d.length;b++)ic(a,d[b])}var gc=[];function hc(a){var b=a.g+a.f;a.a[b]||(a.c=a.a[b]={})} 
function D(a,b){if(b<a.g){b+=a.f;var c=a.a[b];return c===gc?a.a[b]=[]:c}if(a.c)return c=a.c[b],c===gc?a.c[b]=[]:c}function jc(a,b){a=D(a,b);return null==a?a:+a}function kc(a,b){a=D(a,b);return null==a?a:!!a}function E(a,b,c){a=D(a,b);return null==a?c:a}function lc(a,b){a=kc(a,b);return null==a?!1:a}function mc(a,b){a=jc(a,b);return null==a?0:a}function nc(a,b,c){b<a.g?a.a[b+a.f]=c:(hc(a),a.c[b]=c);return a} 
function ic(a,b){for(var c,d,e=0;e<b.length;e++){var f=b[e],g=D(a,f);null!=g&&(c=f,d=g,nc(a,f,void 0))}return c?(nc(a,c,d),c):0}function G(a,b,c){a.b||(a.b={});if(!a.b[c]){var d=D(a,c);d&&(a.b[c]=new b(d))}return a.b[c]}function H(a,b,c){a.b||(a.b={});if(!a.b[c]){for(var d=D(a,c),e=[],f=0;f<d.length;f++)e[f]=new b(d[f]);a.b[c]=e}b=a.b[c];b==gc&&(b=a.b[c]=[]);return b} 
B.prototype.i=fc?function(){var a=Uint8Array.prototype.toJSON;Uint8Array.prototype.toJSON=function(){var b;void 0===b&&(b=0);if(!ec){ec={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));dc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===ec[h]&&(ec[h]=g)}}}b=dc[b];c=[];for(d=0;d<this.length;d+=3){var k=this[d],l=(e=d+1<this.length)?this[d+1]:0;h=(f=d+2<this.length)?this[d+2]:0;g=k>> 
2;k=(k&3)<<4|l>>4;l=(l&15)<<2|h>>6;h&=63;f||(h=64,e||(l=64));c.push(b[g],b[k],b[l]||"",b[h]||"")}return c.join("")};try{return JSON.stringify(this.a&&this.a,oc)}finally{Uint8Array.prototype.toJSON=a}}:function(){return JSON.stringify(this.a&&this.a,oc)};function oc(a,b){return"number"!==typeof b||!isNaN(b)&&Infinity!==b&&-Infinity!==b?b:String(b)};function pc(a){C(this,a,qc,null)}y(pc,B);function rc(a){C(this,a,null,null)}y(rc,B);var qc=[2,3];function sc(a){C(this,a,null,null)}y(sc,B);function I(a){a.google_ad_modifications||(a.google_ad_modifications={});return a.google_ad_modifications}function tc(a){a=I(a);a.eids||(a.eids=[]);return a.eids}function uc(a,b){a=I(a);a.tag_partners=a.tag_partners||[];a.tag_partners.push(b)}function vc(a){I(J).allow_second_reactive_tag=a}function wc(a,b,c){for(var d=0;d<a.length;++d)if((a[d].ad_slot||b)==b&&(a[d].ad_tag_origin||c)==c)return a[d];return null};var xc={},yc=(xc.google_ad_client=!0,xc.google_ad_host=!0,xc.google_ad_host_channel=!0,xc.google_adtest=!0,xc.google_tag_for_child_directed_treatment=!0,xc.google_tag_for_under_age_of_consent=!0,xc.google_tag_partner=!0,xc.google_restrict_data_processing=!0,xc.google_page_url=!0,xc.google_adbreak_test=!0,xc.google_ad_frequency_hint=!0,xc);var zc=document,J=window;var Ac={"120x90":!0,"160x90":!0,"180x90":!0,"200x90":!0,"468x15":!0,"728x15":!0};function Bc(a,b){if(15==b){if(728<=a)return 728;if(468<=a)return 468}else if(90==b){if(200<=a)return 200;if(180<=a)return 180;if(160<=a)return 160;if(120<=a)return 120}return null};function Cc(a){this.a=a||{cookie:""}} 
Cc.prototype.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Xa;d=c.Ra||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.sa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(La()+1E3*h)).toUTCString();this.a.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+ 
e:"")};Cc.prototype.get=function(a,b){for(var c=a+"=",d=(this.a.cookie||"").split(";"),e=0,f;e<d.length;e++){f=wb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};function Dc(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)};function Ec(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}function Fc(a){this.a=a||x.document||document}Fc.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};function Gc(a){Hc();var b=db();a=b?b.createHTML(a):a;return new Qb(a,null,Rb)}function Ic(a){Hc();return sb(a)}var Hc=Aa;function Jc(){return!Kc()&&(z("iPod")||z("iPhone")||z("Android")||z("IEMobile"))}function Kc(){return z("iPad")||z("Android")&&!z("Mobile")||z("Silk")};function Lc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Lc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))};function Mc(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{ac(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function Nc(a){for(var b=x,c=0;b&&40>c++&&(!Mc(b)||!a(b));)b=Oc(b)}function Pc(){var a=x;Nc(function(b){a=b;return!1});return a}function Oc(a){try{var b=a.parent;if(b&&b!=a)return b}catch(c){}return null} 
function Qc(a,b,c){var d=a.createElement("script");(void 0===c?0:c)&&d.setAttribute("crossorigin","anonymous");b="string"===typeof b?Ic(b):b;d.src=ob(b);Wb(d);return(a=a.getElementsByTagName("script")[0])&&a.parentNode?(a.parentNode.insertBefore(d,a),d):null}function Rc(a,b){return b.getComputedStyle?b.getComputedStyle(a,null):a.currentStyle}function Sc(a,b){if(!Tc()&&!Uc()){var c=Math.random();if(c<b)return c=Vc(x),a[Math.floor(c*a.length)]}return null} 
function Vc(a){if(!a.crypto)return Math.random();try{var b=new Uint32Array(1);a.crypto.getRandomValues(b);return b[0]/65536/65536}catch(c){return Math.random()}}function Wc(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}function Xc(a){return ab(a,function(b,c){return Object.prototype.hasOwnProperty.call(a,c)&&!0})} 
function Yc(a){var b=a.length;if(0==b)return 0;for(var c=305419896,d=0;d<b;d++)c^=(c<<5)+(c>>2)+a.charCodeAt(d)&4294967295;return 0<c?c:4294967296+c}var Uc=Wa(function(){return Ra(["Google Web Preview","Mediapartners-Google","Google-Read-Aloud","Google-Adwords"],Zc)||1E-4>Math.random()});function $c(a,b){var c=-1;try{a&&(c=parseInt(a.getItem(b),10))}catch(d){return null}return 0<=c&&1E3>c?c:null} 
function ad(a,b,c){a=Uc()?null:Math.floor(1E3*Vc(a));var d;if(d=null!=a&&b)a:{var e=String(a);try{if(b){b.setItem(c,e);d=e;break a}}catch(f){}d=null}return d?a:null}var Tc=Wa(function(){return Zc("MSIE")});function Zc(a){return-1!=Jb.indexOf(a)}var bd=/^([0-9.]+)px$/,cd=/^(-?[0-9.]{1,30})$/;function dd(a){return cd.test(a)&&(a=Number(a),!isNaN(a))?a:null}function ed(a,b){return b?!/^false$/.test(a):/^true$/.test(a)}function K(a){return(a=bd.exec(a))?+a[1]:null} 
function fd(a,b){for(var c=0;50>c;++c){try{var d=!(!a.frames||!a.frames[b])}catch(e){d=!1}if(d)return a;if(!(a=Oc(a)))break}return null}var gd=Wa(function(){return Jc()?2:Kc()?1:0});function hd(a){var b={display:"none"};a.style.setProperty?Wc(b,function(c,d){a.style.setProperty(d,c,"important")}):a.style.cssText=id(jd(kd(a.style.cssText),ld(b,function(c){return c+" !important"})))} 
var jd=u(Object,"assign")||function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};function ld(a,b){var c={},d;for(d in a)Object.prototype.hasOwnProperty.call(a,d)&&(c[d]=b.call(void 0,a[d],d,a));return c}function id(a){var b=[];Wc(a,function(c,d){null!=c&&""!==c&&b.push(d+":"+c)});return b.length?b.join(";")+";":""} 
function kd(a){var b={};if(a){var c=/\s*:\s*/;Oa((a||"").split(/\s*;\s*/),function(d){if(d){var e=d.split(c);d=e[0];e=e[1];d&&e&&(b[d.toLowerCase()]=e)}})}return b}var md=[];function nd(){var a=md;md=[];a=w(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;try{b()}catch(c){}}}function od(){if("number"!==typeof x.goog_pvsid)try{Object.defineProperty(x,"goog_pvsid",{value:Math.floor(Math.random()*Math.pow(2,52))})}catch(a){}return Number(x.goog_pvsid)||-1} 
function pd(a){"complete"===zc.readyState||"interactive"===zc.readyState?(md.push(a),1==md.length&&(q.Promise?q.Promise.resolve().then(nd):window.setImmediate?setImmediate(nd):setTimeout(nd,0))):zc.addEventListener("DOMContentLoaded",a)};function qd(a){C(this,a,null,null)}y(qd,B);function rd(a,b){a=parseInt(a,10);return isNaN(a)?b:a};function sd(){return"r20200817"}var td=ed("false",!1),ud=ed("false",!1);function vd(){};function wd(a){a=void 0===a?x:a;var b=a.context||a.AMP_CONTEXT_DATA;if(!b)try{b=a.parent.context||a.parent.AMP_CONTEXT_DATA}catch(c){}try{if(b&&b.pageViewId&&b.canonicalUrl)return b}catch(c){}return null}function xd(a){return(a=a||wd())?Mc(a.master)?a.master:null:null};function yd(a,b,c){zd(a,b,void 0===c?null:c)}function zd(a,b,c){a.google_image_requests||(a.google_image_requests=[]);var d=a.document.createElement("img");if(c){var e=function(f){c&&c(f);d.removeEventListener&&d.removeEventListener("load",e,!1);d.removeEventListener&&d.removeEventListener("error",e,!1)};Dc(d,"load",e);Dc(d,"error",e)}d.src=b;a.google_image_requests.push(d)} 
function Ad(a,b){var c="https://pagead2.googlesyndication.com/pagead/gen_204?id="+b;Wc(a,function(d,e){d&&(c+="&"+e+"="+encodeURIComponent(d))});Bd(c)}function Bd(a){var b=window;b.fetch?b.fetch(a,{keepalive:!0,credentials:"include",redirect:"follow",method:"get",mode:"no-cors"}):yd(b,a)};var Cd={};function Dd(){}function Ed(a,b){if(b!==Cd)throw Error("Bad secret");this.a=a}qa(Ed,Dd);Ed.prototype.toString=function(){return this.a};new Ed("about:blank",Cd);new Ed("about:invalid#zTSz",Cd);function Fd(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)}function Gd(a){return!(!a||!a.call)&&"function"===typeof a}function Hd(a){var b=void 0===b?1:b;a=xd(wd(a))||a;a.google_unique_id=(a.google_unique_id||0)+b}function Id(a){a=a.google_unique_id;return"number"===typeof a?a:0}function Jd(a){a=xd(wd(a))||a;a=a.google_unique_id;return"number"===typeof a?a:0}var Kd=!!window.google_async_iframe_id,Ld=Kd&&window.parent||window; 
function Md(){if(Kd&&!Mc(Ld)){var a="."+zc.domain;try{for(;2<a.split(".").length&&!Mc(Ld);)zc.domain=a=a.substr(a.indexOf(".")+1),Ld=window.parent}catch(b){}Mc(Ld)||(Ld=window)}return Ld}var Nd=/(^| )adsbygoogle($| )/;function Od(a){return td&&a.google_top_window||a.top}function Pd(a){a=Od(a);return Mc(a)?a:null};function Qd(a,b){if(!a)return!1;a=a.hash;if(!a||!a.indexOf)return!1;if(-1!=a.indexOf(b))return!0;b=Rd(b);return"go"!=b&&-1!=a.indexOf(b)?!0:!1}function Rd(a){var b="";Fd(a.split("_"),function(c){b+=c.substr(0,2)});return b};var Sd=rd("2019",2012);function Td(a,b){return"relative"===a?b:["https://",a,b].join("")}function Ud(a){a=Td("pagead2.googlesyndication.com",a);if(2012<Sd){var b=(b=a.match(/(__[a-z0-9_]+)\.js(?:\?|$)/))?b[1]:"";a=a.replace(new RegExp(String(b+".js").replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"g"),("_fy"+Sd+b+".js").replace(/\$/g,"$$$$"))}return a};var Vd=null;function Wd(){if(!td)return!1;if(null!=Vd)return Vd;Vd=!1;try{var a=Pd(x);a&&-1!=a.location.hash.indexOf("google_logging")&&(Vd=!0);x.localStorage.getItem("google_logging")&&(Vd=!0)}catch(b){}return Vd}function Xd(a,b){b=void 0===b?[]:b;var c=!1;x.google_logging_queue||(c=!0,x.google_logging_queue=[]);x.google_logging_queue.push([a,b]);c&&Wd()&&(a=Ud("/pagead/js/logging_library.js"),Qc(x.document,Ic(a)))};function Yd(a){if(!a)return"";(a=a.toLowerCase())&&"ca-"!=a.substring(0,3)&&(a="ca-"+a);return a};function Zd(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c}function $d(a){return!!(a.error&&a.meta&&a.id)};var ae=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;function be(a,b){this.a=a;this.b=b}function ce(a,b,c){this.url=a;this.a=b;this.pa=!!c;this.depth=null};function de(){this.c="&";this.f=!1;this.b={};this.g=0;this.a=[]}function ee(a,b){var c={};c[a]=b;return[c]}function fe(a,b,c,d,e){var f=[];Wc(a,function(g,h){(g=ge(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)} 
function ge(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(ge(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(fe(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function he(a,b,c,d){a.a.push(b);a.b[b]=ee(c,d)} 
function ie(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=je(a)-c.length;if(0>d)return"";a.a.sort(function(n,p){return n-p});c=null;for(var e="",f=0;f<a.a.length;f++)for(var g=a.a[f],h=a.b[g],k=0;k<h.length;k++){if(!d){c=null==c?g:c;break}var l=fe(h[k],a.c,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;b+=l;e=a.c;break}a.f&&(e=d,l[e-1]==a.c&&--e,b+=l.substr(0,e),e=a.c,d=0);c=null==c?g:c}}a="";null!=c&&(a=e+"trn="+c);return b+a} 
function je(a){var b=1,c;for(c in a.b)b=c.length>b?c.length:b;return 3997-b-a.c.length-1};function ke(a,b,c,d,e,f){if((d?a.a:Math.random())<(e||.01))try{if(c instanceof de)var g=c;else g=new de,Wc(c,function(k,l){var n=g,p=n.g++;k=ee(l,k);n.a.push(p);n.b[p]=k});var h=ie(g,a.b,"/pagead/gen_204?id="+b+"&");h&&("undefined"!==typeof f?yd(x,h,f):yd(x,h))}catch(k){}};var le=null;function me(){if(null===le){le="";try{var a="";try{a=x.top.location.hash}catch(c){a=x.location.hash}if(a){var b=a.match(/\bdeid=([\d,]+)/);le=b?b[1]:""}}catch(c){}}return le};function ne(){var a=x.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):La()}function oe(){var a=void 0===a?x:a;return(a=a.performance)&&a.now?a.now():null};function pe(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var qe=x.performance,re=!!(qe&&qe.mark&&qe.measure&&qe.clearMarks),se=Wa(function(){var a;if(a=re)a=me(),a=!!a.indexOf&&0<=a.indexOf("1337");return a});function te(){var a=ue;this.events=[];this.b=a||x;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.events=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.a=se()||(null!=b?b:1>Math.random())} 
function ve(a){a&&qe&&se()&&(qe.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),qe.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}te.prototype.start=function(a,b){if(!this.a)return null;var c=oe()||ne();a=new pe(a,b,c);b="goog_"+a.label+"_"+a.uniqueId+"_start";qe&&se()&&qe.mark(b);return a};function we(){var a=xe;this.i=ye;this.c=!0;this.b=null;this.g=this.F;this.a=void 0===a?null:a;this.f=!1}m=we.prototype;m.xa=function(a){this.g=a};m.ha=function(a){this.b=a};m.ya=function(a){this.c=a};m.za=function(a){this.f=a}; 
m.aa=function(a,b,c){try{if(this.a&&this.a.a){var d=this.a.start(a.toString(),3);var e=b();var f=this.a;b=d;if(f.a&&"number"===typeof b.value){var g=oe()||ne();b.duration=g-b.value;var h="goog_"+b.label+"_"+b.uniqueId+"_end";qe&&se()&&qe.mark(h);!f.a||2048<f.events.length||f.events.push(b)}}else e=b()}catch(k){f=this.c;try{ve(d),f=this.g(a,new Zd(k,{message:ze(k)}),void 0,c)}catch(l){this.F(217,l)}if(!f)throw k;}return e}; 
m.ta=function(a,b,c,d){var e=this;return function(f){for(var g=[],h=0;h<arguments.length;++h)g[h]=arguments[h];return e.aa(a,function(){return b.apply(c,g)},d)}}; 
m.F=function(a,b,c,d,e){e=e||"jserror";try{var f=new de;f.f=!0;he(f,1,"context",a);$d(b)||(b=new Zd(b,{message:ze(b)}));b.msg&&he(f,2,"msg",b.msg.substring(0,512));var g=b.meta||{};if(this.b)try{this.b(g)}catch(F){}if(d)try{d(g)}catch(F){}b=[g];f.a.push(3);f.b[3]=b;d=x;b=[];g=null;do{var h=d;if(Mc(h)){var k=h.location.href;g=h.document&&h.document.referrer||null}else k=g,g=null;b.push(new ce(k||"",h));try{d=h.parent}catch(F){d=null}}while(d&&h!=d);k=0;for(var l=b.length-1;k<=l;++k)b[k].depth=l-k; 
h=x;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==b.length-1)for(l=1;l<b.length;++l){var n=b[l];n.url||(n.url=h.location.ancestorOrigins[l-1]||"",n.pa=!0)}var p=new ce(x.location.href,x,!1);h=null;var v=b.length-1;for(n=v;0<=n;--n){var r=b[n];!h&&ae.test(r.url)&&(h=r);if(r.url&&!r.pa){p=r;break}}r=null;var A=b.length&&b[v].url;0!=p.depth&&A&&(r=b[v]);var t=new be(p,r);t.b&&he(f,4,"top",t.b.url||"");he(f,5,"url",t.a.url||"");ke(this.i,e,f,this.f,c)}catch(F){try{ke(this.i, 
e,{context:"ecmserr",rctx:a,msg:ze(F),url:t&&t.a.url},this.f,c)}catch(Da){}}return this.c};function ze(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){}}return b};function L(a){a=void 0===a?"":a;var b=Error.call(this);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.name="TagError";this.message=a?"adsbygoogle.push() error: "+a:"";Error.captureStackTrace?Error.captureStackTrace(this,L):this.stack=Error().stack||""}qa(L,Error);function Ae(){this.b=!1;this.a=null;this.f=!1;this.g=Math.random();this.c=this.F}m=Ae.prototype;m.ha=function(a){this.a=a};m.ya=function(a){this.b=a};m.za=function(a){this.f=a};m.xa=function(a){this.c=a}; 
m.F=function(a,b,c,d,e){if((this.f?this.g:Math.random())>(void 0===c?.01:c))return this.b;$d(b)||(b=new Zd(b,{context:a,id:void 0===e?"jserror":e}));if(d||this.a)b.meta={},this.a&&this.a(b.meta),d&&d(b.meta);x.google_js_errors=x.google_js_errors||[];x.google_js_errors.push(b);x.error_rep_loaded||(Qc(x.document,Ic(x.location.protocol+"//pagead2.googlesyndication.com/pagead/js/err_rep.js")),x.error_rep_loaded=!0);return this.b}; 
m.aa=function(a,b,c){try{var d=b()}catch(e){if(!this.c(a,e,.01,c,"jserror"))throw e;}return d};m.ta=function(a,b,c,d){var e=this;return function(f){for(var g=[],h=0;h<arguments.length;++h)g[h]=arguments[h];return e.aa(a,function(){return b.apply(c,g)},d)}};var ye,Be,ue=Md(),xe=new te;function Ce(a){null!=a&&(ue.google_measure_js_timing=a);ue.google_measure_js_timing||(a=xe,a.a=!1,a.events!=a.b.google_js_reporting_queue&&(se()&&Oa(a.events,ve),a.events.length=0))} 
function De(a){var b=J.jerExpIds;if(Array.isArray(b)&&0!==b.length){var c=a.eid;if(c){b=ja(c.split(",")).concat(ja(b));c={};for(var d=0,e=0;e<b.length;){var f=b[e++];var g=f;g=Ca(g)?"o"+Ea(g):(typeof g).charAt(0)+g;Object.prototype.hasOwnProperty.call(c,g)||(c[g]=!0,b[d++]=f)}b.length=d;a.eid=b.join(",")}else a.eid=b.join(",")}}function Ee(a){var b=J.jerUserAgent;b&&(a.useragent=b)}ye=new function(){var a=void 0===a?J:a;this.b="http:"===a.location.protocol?"http:":"https:";this.a=Math.random()}; 
"number"!==typeof ue.google_srt&&(ue.google_srt=Math.random());var Fe=ye,Ge=ue.google_srt;0<=Ge&&1>=Ge&&(Fe.a=Ge);Be=new we;Be.ha(function(a){De(a);Ee(a)});Be.za(!0);"complete"==ue.document.readyState?Ce():xe.a&&Dc(ue,"load",function(){Ce()});function He(){var a=[Ie,Je];Be.ha(function(b){Oa(a,function(c){c(b)});De(b);Ee(b)})}function Ke(a,b,c){return Be.aa(a,b,c)}function Le(a,b){return Be.ta(a,b,void 0,void 0)}function Me(a,b,c){ke(ye,a,b,!0,c,void 0)} 
function Ne(a,b,c,d){var e;$d(b)?e=b.msg||ze(b.error):e=ze(b);return 0==e.indexOf("TagError")?(c=b instanceof Zd?b.error:b,c.pbr||(c.pbr=!0,Be.F(a,b,.1,d,"puberror")),!1):Be.F(a,b,c,d)};function Oe(a){var b=window;var c=void 0===c?null:c;Dc(b,"message",function(d){try{var e=JSON.parse(d.data)}catch(f){return}!e||"sc-cnf"!==e.googMsgType||c&&/[:|%3A]javascript\(/i.test(d.data)&&!c(e,d)||a(e,d)})};var Pe={overlays:1,interstitials:2,vignettes:2,inserts:3,immersives:4,list_view:5};function Qe(){this.wasPlaTagProcessed=!1;this.wasReactiveAdConfigReceived={};this.adCount={};this.wasReactiveAdVisible={};this.stateForType={};this.reactiveTypeEnabledInAsfe={};this.wasReactiveTagRequestSent=!1;this.reactiveTypeDisabledByPublisher={};this.tagSpecificState={};this.improveCollisionDetection=1;this.messageValidationEnabled=!1;this.floatingAdsStacking=new Re} 
function Se(a){a.google_reactive_ads_global_state?null==a.google_reactive_ads_global_state.floatingAdsStacking&&(a.google_reactive_ads_global_state.floatingAdsStacking=new Re):a.google_reactive_ads_global_state=new Qe;return a.google_reactive_ads_global_state}function Re(){this.maxZIndexRestrictions={};this.nextRestrictionId=0;this.maxZIndexListeners=[]};function Te(a){a=a.document;var b={};a&&(b="CSS1Compat"==a.compatMode?a.documentElement:a.body);return b||{}}function M(a){return Te(a).clientWidth};function Ue(a,b,c){return Ve(a,void 0===c?"":c,function(d){return Ra(H(d,rc,2),function(e){return D(e,1)===b})})}function We(a,b,c){c=void 0===c?"":c;var d=Pd(a)||a;return Xe(d,b)?!0:Ve(a,c,function(e){return Ra(D(e,3),function(f){return f===b})})}function Ye(a){return Ve(x,void 0===a?"":a,function(){return!0})}function Xe(a,b){a=(a=(a=a.location&&a.location.hash)&&a.match(/forced_clientside_labs=([\d,]+)/))&&a[1];return!!a&&Ua(a.split(","),b.toString())} 
function Ve(a,b,c){a=Pd(a)||a;var d=Ze(a);b&&(b=Yd(String(b)));return Za(d,function(e,f){return Object.prototype.hasOwnProperty.call(d,f)&&(!b||b===f)&&c(e)})}function Ze(a){a=$e(a);var b={};Fd(a,function(c,d){try{var e=new pc(c);b[d]=e}catch(f){}});return b} 
function $e(a){try{var b=a.localStorage.getItem("google_adsense_settings");if(!b)return{};var c=JSON.parse(b);return c!==Object(c)?{}:Ya(c,function(d,e){return Object.prototype.hasOwnProperty.call(c,e)&&"string"===typeof e&&Array.isArray(d)})}catch(d){return{}}};var af=ac(""),bf=/^m\d+$/.test(af)?af:"";function cf(a){C(this,a,df,ef)}y(cf,B);var df=[2,8],ef=[[3,4,5],[6,7]];function ff(a){return null!=a?!a:a}function gf(a,b){for(var c=!1,d=0;d<a.length;d++){var e=a[d].call();if(e==b)return e;null==e&&(c=!0)}if(!c)return!b}function hf(a,b){var c=H(a,cf,2);if(!c.length)return jf(a,b);a=E(a,1,0);if(1==a)return ff(hf(c[0],b));c=Qa(c,function(d){return function(){return hf(d,b)}});switch(a){case 2:return gf(c,!1);case 3:return gf(c,!0)}} 
function jf(a,b){var c=ic(a,ef[0]);a:{switch(c){case 3:var d=E(a,3,0);break a;case 4:d=E(a,4,0);break a;case 5:d=E(a,5,0);break a}d=void 0}if(d&&(b=(b=b[c])&&b[d])){try{var e=b.apply(null,D(a,8))}catch(f){return}b=E(a,1,0);if(4==b)return!!e;d=null!=e;if(5==b)return d;if(12==b)a=E(a,7,"");else a:{switch(c){case 4:a=mc(a,6);break a;case 5:a=E(a,7,"");break a}a=void 0}if(null!=a){if(6==b)return e===a;if(9==b)return 0==Db(e,a);if(d)switch(b){case 7:return e<a;case 8:return e>a;case 12:return(new RegExp(a)).test(e); 
case 10:return-1==Db(e,a);case 11:return 1==Db(e,a)}}}}function kf(a,b){return!a||!(!b||!hf(a,b))};function lf(){var a={};this[3]=(a[23]=function(b){return Ue(J,parseInt(b,10))},a[24]=function(b){return We(J,parseInt(b,10))},a);a={};this[4]=(a[7]=function(b){try{var c=window.localStorage}catch(f){c=null}var d=b;b=window;d=void 0===d?0:d;d=0!=d?"google_experiment_mod"+d:"google_experiment_mod";var e=$c(c,d);return null===e?ad(b,c,d):e},a);a={};this[5]=(a[6]=function(){return bf},a)}Ba(lf);function mf(a){C(this,a,nf,null)}y(mf,B);var nf=[4];function of(a){C(this,a,pf,qf)}y(of,B);function rf(a){C(this,a,null,null)}y(rf,B);var pf=[5],qf=[[1,2,3,6,7]];function sf(){var a={};this.a=(a[3]={},a[4]={},a[5]={},a)}Ba(sf);var tf=ed("false",!1);function uf(a,b){switch(b){case 1:return E(a,1,0);case 2:return E(a,2,0);case 3:return E(a,3,0);case 6:return E(a,6,0);default:return null}}function vf(a,b){if(!a)return null;switch(b){case 1:return lc(a,1);case 7:return E(a,3,"");case 2:return mc(a,2);case 3:return E(a,3,"");case 6:return D(a,4);default:return null}}var wf=Wa(function(){if(!tf)return{};try{var a=window.sessionStorage&&window.sessionStorage.getItem("GGDFSSK");if(a)return JSON.parse(a)}catch(b){}return{}}); 
function xf(a,b,c,d){d=void 0===d?0:d;var e=wf();if(e[a]&&null!=e[a][b])return e[a][b];b=yf(d)[a][b];if(!b)return c;b=new of(b);b=zf(b);a=vf(b,a);return null!=a?a:c}function zf(a){var b=sf.h().a;if(b){var c=Ta(H(a,rf,5),function(d){return kf(G(d,cf,1),b)});if(c)return G(c,mf,2)}return G(a,mf,4)}function Af(){this.a={};this.b=[]}Ba(Af);function Bf(a,b,c){return!!xf(1,a,void 0===b?!1:b,c)}function Cf(a,b,c){b=void 0===b?0:b;a=Number(xf(2,a,b,c));return isNaN(a)?b:a} 
function Df(a,b,c){return xf(3,a,void 0===b?"":b,c)}function Ef(a,b,c){b=void 0===b?[]:b;return xf(6,a,b,c)}function yf(a){var b={};return Af.h().a[a]||(Af.h().a[a]=(b[1]={},b[2]={},b[3]={},b[6]={},b))}function Ff(a,b){var c=yf(b);Wc(a,function(d,e){return Wc(d,function(f,g){return c[e][g]=f})})}function Gf(a,b){var c=yf(b);Oa(a,function(d){var e=ic(d,qf[0]),f=uf(d,e);f&&(c[e][f]=d.a)})} 
function Hf(a,b){var c=yf(b);Oa(a,function(d){var e=new of(d),f=ic(e,qf[0]);(e=uf(e,f))&&(c[f][e]||(c[f][e]=d))})}function If(){return Qa(u(Object,"keys").call(Object,Af.h().a),function(a){return Number(a)})}function Jf(a){Ua(Af.h().b,a)||Ff(yf(4),a)};function N(a){this.methodName=a}var Kf=new N(1),Lf=new N(15),Mf=new N(2),Nf=new N(3),Of=new N(4),Pf=new N(5),Qf=new N(6),Rf=new N(7),Sf=new N(8),Tf=new N(9),Uf=new N(10),Vf=new N(11),Wf=new N(12),Xf=new N(13),Yf=new N(14);function O(a,b,c){c.hasOwnProperty(a.methodName)||Object.defineProperty(c,String(a.methodName),{value:b})}function Zf(a,b,c){return b[a.methodName]||c||function(){}}function $f(a){O(Pf,Bf,a);O(Qf,Cf,a);O(Rf,Df,a);O(Sf,Ef,a);O(Xf,Hf,a);O(Lf,Jf,a)} 
function ag(a){O(Of,function(b){sf.h().a=b},a);O(Tf,function(b,c){var d=sf.h();d.a[3][b]||(d.a[3][b]=c)},a);O(Uf,function(b,c){var d=sf.h();d.a[4][b]||(d.a[4][b]=c)},a);O(Vf,function(b,c){var d=sf.h();d.a[5][b]||(d.a[5][b]=c)},a);O(Yf,function(b){for(var c=sf.h(),d=w([3,4,5]),e=d.next();!e.done;e=d.next()){var f=e.value;e=void 0;var g=c.a[f];f=b[f];for(e in f)g[e]=f[e]}},a)}function bg(a){a.hasOwnProperty("init-done")||Object.defineProperty(a,"init-done",{value:!0})};function cg(a){a=void 0===a?x:a;return a.ggeac||(a.ggeac={})};function dg(){this.b=function(){};this.a=function(){return[]}}function eg(a,b,c){a.b=function(d){Zf(Mf,b,function(){return[]})(d,c)};a.a=function(){return Zf(Nf,b,function(){return[]})(c)}}Ba(dg);function fg(a,b){try{a:{var c=a.split(".");a=x;for(var d=0,e;d<c.length;d++)if(e=a,a=a[c[d]],null==a){var f=null;break a}f="function"===typeof a?e[c[d-1]]():a}if(typeof f===b)return f}catch(g){}} 
function gg(){var a={};this[3]=(a[8]=function(b){try{return null!=za(b)}catch(c){}},a[9]=function(b){try{var c=za(b)}catch(d){return}if(b="function"===typeof c)c=c&&c.toString&&c.toString(),b="string"===typeof c&&-1!=c.indexOf("[native code]");return b},a[10]=function(){return window==window.top},a[6]=function(b){return Ua(dg.h().a(),parseInt(b,10))},a[27]=function(b){b=fg(b,"boolean");return void 0!==b?b:void 0},a);a={};this[4]=(a[3]=function(){return gd()},a[6]=function(b){b=fg(b,"number");return void 0!== 
b?b:void 0},a);a={};this[5]=(a[2]=function(){return window.location.href},a[3]=function(){try{return window.top.location.hash}catch(b){return""}},a[4]=function(b){b=fg(b,"string");return void 0!==b?b:void 0},a)}Ba(gg);function hg(a){C(this,a,ig,null)}y(hg,B);var ig=[2];hg.prototype.getId=function(){return E(this,1,0)};hg.prototype.U=function(){return E(this,7,0)};function jg(a){C(this,a,kg,null)}y(jg,B);var kg=[2];jg.prototype.U=function(){return E(this,5,0)};function lg(a){C(this,a,mg,null)}y(lg,B);function ng(a){C(this,a,og,null)}y(ng,B);var mg=[1,4,2,3],og=[2];ng.prototype.U=function(){return E(this,1,0)};var pg=[12,13];function qg(){}qg.prototype.init=function(a,b,c){var d=this,e=void 0===c?{}:c;c=void 0===e.oa?!1:e.oa;var f=void 0===e.Ka?{}:e.Ka;e=void 0===e.Sa?[]:e.Sa;this.a=a;this.g=c;this.f=f;a={};this.b=(a[b]=e,a[4]=[],a);this.c={};(b=me())&&Oa(b.split(",")||[],function(g){(g=parseInt(g,10))&&(d.c[g]=!0)});return this}; 
function rg(a,b,c){var d=[],e=sg(a.a,b);if(e.length){9!==b&&(a.a=tg(a.a,b));var f=Ua(pg,b);Oa(e,function(g){if(g=ug(a,g,c)){var h=g.getId();d.push(h);vg(a,h,f?4:c);var k=H(g,of,2);k&&(f?Oa(If(),function(l){return Gf(k,l)}):Gf(k,c))}})}return d}function vg(a,b,c){a.b[c]||(a.b[c]=[]);a=a.b[c];Ua(a,b)?Ad({eids:JSON.stringify(a),dup:b},"gpt_dupeid"):a.push(b)}function wg(a,b){a.a.push.apply(a.a,ja(Pa(Qa(b,function(c){return new ng(c)}),function(c){return!Ua(pg,c.U())})))} 
function ug(a,b,c){var d=sf.h().a;if(!kf(G(b,cf,3),d))return null;var e=H(b,hg,2),f=e.length*E(b,1,0),g=E(b,6,0);if(g){f=d[4];switch(c){case 2:var h=f[8];break;case 1:h=f[7]}f=null;if(h)try{f=h(g)}catch(k){}null===f&&(f=Math.floor(1E3*Vc(window)));b=xg(b,f);return!b||d&&!kf(G(b,cf,3),d)?null:yg(a,[b],1)}g=d?Pa(e,function(k){return kf(G(k,cf,3),d)}):e;return g.length?(b=E(b,4,0))?zg(a,b,f,g):yg(a,g,f/1E3):null} 
function zg(a,b,c,d){var e=null!=a.f[b]?a.f[b]:1E3;if(0>=e)return null;d=yg(a,d,c/e);a.f[b]=d?0:e-c;return d}function yg(a,b,c){var d=a.c,e=Sa(b,function(f){return!!d[f.getId()]});return e?e:a.g?null:Sc(b,c)}function Ag(a,b){O(Kf,function(c){a.c[c]=!0},b);O(Mf,function(c,d){return rg(a,c,d)},b);O(Nf,function(c){return(a.b[c]||[]).concat(a.b[4])},b);O(Wf,function(c){return wg(a,c)},b)}Ba(qg);function sg(a,b){return(a=Sa(a,function(c){return c.U()==b}))&&H(a,jg,2)||[]} 
function tg(a,b){return Pa(a,function(c){return c.U()!=b})}function xg(a,b){var c=H(a,hg,2),d=c.length,e=E(a,1,0);a=E(a,8,0);var f=(b-a)%d;return b<a||b-a-f>=d*e-1?null:c[f]};function Bg(){this.b=function(a,b){return void 0===b?!1:b};this.c=function(a,b){return void 0===b?0:b};this.f=function(a,b){return void 0===b?"":b};this.a=function(){}}function Cg(a,b,c){a.b=function(d,e){return Zf(Pf,b)(d,e,c)};a.c=function(d,e){return Zf(Qf,b)(d,e,c)};a.f=function(d,e){return Zf(Rf,b)(d,e,c)};a.a=function(){Zf(Lf,b)(c)}}Ba(Bg);function P(a){var b=void 0===b?!1:b;return Bg.h().b(a,b)}function Dg(a){var b=void 0===b?0:b;return Bg.h().c(a,b)} 
function Eg(){var a=void 0===a?"":a;return Bg.h().f(14,a)};function Fg(){this.a=function(){}}Ba(Fg);function Gg(a){Fg.h().a(a)};function Hg(a,b,c,d){var e=1;d=void 0===d?cg():d;e=void 0===e?0:e;d.hasOwnProperty("init-done")?(Zf(Wf,d)(Qa(H(a,ng,2),function(f){return f.a})),Zf(Xf,d)(Qa(H(a,of,1),function(f){return f.a}),e),b&&Zf(Yf,d)(b),Ig(d,e)):(Ag(qg.h().init(H(a,ng,2),e,c),d),$f(d),ag(d),bg(d),Ig(d,e),Gf(H(a,of,1),e),tf=tf||!(!c||!c.Ia),Gg(gg.h()),b&&Gg(b))}function Ig(a,b){a=void 0===a?cg():a;b=void 0===b?0:b;var c=a,d=b;d=void 0===d?0:d;eg(dg.h(),c,d);c=a;b=void 0===b?0:b;Cg(Bg.h(),c,b);Fg.h().a=Zf(Yf,a);Bg.h().a()};function Jg(a){var b=I(a);if(b.plle)Ig(cg(a),1);else{b.plle=!0;try{var c=a.localStorage}catch(e){c=null}b=c;null==$c(b,"goog_pem_mod")&&ad(a,b,"goog_pem_mod");b=[null,null];try{var d=JSON.parse("[[[null,62,null,[null,0.001]],[279,null,null,null,[[[1,[[12,null,null,null,2,null,\"www\\\\.hasznaltauto\\\\.hu\\\\\/\"]]],[1]]]],[259,null,null,[1]],[225,null,null,[1]],[358,null,null,[1]],[209,null,null,[1]],[205,null,null,[1]],[null,29,null,[null,2]],[null,30,null,[null,3]],[270,null,null,[1]],[1000,null,null,[1]],[210,null,null,[1]],[211,null,null,[1]],[207,null,null,[1]],[null,63,null,[null,30]],[null,60,null,[null,20]],[null,57,null,[null,300]],[null,58,null,[null,300]],[null,64,null,[null,300]],[215,null,null,[1]],[230,null,null,[1]],[191,null,null,[1]],[null,null,null,[null,null,null,[\"facebook[.]com\",\"whatsapp[.]com\",\"youtube[.]com\",\"google[.]com\",\"\\\\\/ads?\\\\\/\"]],null,9],[1900,null,null,[1]]],[[10,[[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066649],[21066650,[[null,null,14,[null,null,\"exp=21066650\"]]]],[21066651,[[null,null,14,[null,null,\"exp=21066651\"]],[null,null,13,[null,null,\"\/show_ads_impl_exp.js\"]],[null,1008,null,[null,1]]]],[21066652,[[356,null,null,[1]],[null,null,14,[null,null,\"exp=21066652\"]],[null,null,13,[null,null,\"\/show_ads_impl_exp.js\"]],[null,1008,null,[null,1]]]],[21066653,[[357,null,null,[1]],[null,null,13,[null,null,\"\/show_ads_impl_exp.js\"]],[null,1008,null,[null,1]]]]],null,null,null,47,null,5],[10,[[21066699],[21066700,[[1006,null,null,[1]],[375,null,null,[1]],[null,null,13,[null,null,\"\/show_ads_impl_with_ama.js\"]],[null,1008,null,[null,2]]]]],null,null,null,47,25,400],[10,[[21066792],[21066793]],null,null,null,47,25,400],[10,[[44724796],[44724797,[[381,null,null,[1]]]]]],[5,[[20206788],[20206789],[20206790],[20206791],[20206792]],null,null,null,51,27],[5,[[20206793],[20206794],[20206795],[20206796],[20206797]],null,null,null,51,27],[499,[[42530557],[42530558,[[376,null,null,[1]]]]],null,null,null,48,24,1],[499,[[42530559],[42530560,[[376,null,null,[1]]]]],null,null,null,48,24,1],[1,[[42530621],[42530622,[[1004,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44724584],[44724585]],null,null,null,50,null,100],[50,[[21066124,[[190,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[21066125,[[265,null,null,[1]],[260,null,null,[1]],[190,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,40,null,1],[50,[[21066153,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[21066154,[[233,null,null,[1]],[232,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,42,null,1],[50,[[42530587,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[42530588,[[1002,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,42,null,200],[50,[[44723321,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[44723322,[[310,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,49],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982300,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[10,[[182984200,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984300,null,[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,37,10,1],[50,[[21066357],[21066358,[[345,null,null,[1]]]]]],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[null,[[21066467],[21066468,[[304,null,null,[1]]]]]],[50,[[21066647],[21066648,[[371,null,null,[1]]]]]],[10,[[21066715],[21066716,[[279,null,null,[1]]]],[21066717,[[383,null,null,[1]],[279,null,null,[1]]]]]],[50,[[21066790],[21066791,[[1000,null,null,[1]]]]],null,26],[50,[[21066897],[21066898,[[1001,null,null,[1]]]]],null,27],[30,[[21066922],[21066923,[[325,null,null,[1]]]]],null,23],[10,[[21066944],[21066945,[[1003,null,null,[1]]]],[21067034,[[1005,null,null,[1]],[1003,null,null,[1]]]]]],[10,[[21067052,null,[12,null,null,null,4,null,\"Chrome\/8[6-9]\",[\"navigator.userAgent\"]]],[21067053,[[312,null,null,[1]]],[12,null,null,null,4,null,\"Chrome\/8[6-9]\",[\"navigator.userAgent\"]]]],null,21],[100,[[21067054,null,[12,null,null,null,4,null,\"Chrome\/8[6-9]\",[\"navigator.userAgent\"]]],[21067055,[[312,null,null,[1]]],[12,null,null,null,4,null,\"Chrome\/8[6-9]\",[\"navigator.userAgent\"]]]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]],21],[50,[[21067104],[21067105,[[365,null,null,[1]]]]]]]],[12,[[50,[[21066920],[21066921,[[1900,null,null,[1]]]]]],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[1,[[21065784]]],[1,[[21065785,null,[4,null,8,null,null,null,null,[\"navigator.connection.saveData\"]]]]],[1,[[21065786,null,[4,null,27,null,null,null,null,[\"navigator.connection.saveData\"]]]]],[1,[[21065787,null,[1,[[4,null,27,null,null,null,null,[\"navigator.connection.saveData\"]]]]]]],[1,[[21065798,null,[2,[[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]]]]]]],[1,[[21065799,null,[2,[[5,null,8,null,null,null,null,[\"localStorage\"]],[1,[[4,null,8,null,null,null,null,[\"localStorage\"]]]]]]]]],[1,[[21066438,null,[1,[[5,null,8,null,null,null,null,[\"localStorage\"]]]]]]],[50,[[21066532],[21066533,[[363,null,null,[1]]]]],null,25],[500,[[21066534],[21066535,[[363,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"navigator.userAgentData.getHighEntropyValues\"]],25],[10,[[21066612],[21066613,[[83,null,null,[1]],[84,null,null,[1]]]]]],[50,[[21066705],[21066706,[[382,null,null,[1]]]]]],[10,[[44725623],[44725624,[[1901,null,null,[1]]]]],null,28]]],[13,[[1000,[[21066819,null,[2,[[12,null,null,null,4,null,\"Linux.*Chrome\",[\"navigator.userAgent\"]],[4,null,27,null,null,null,null,[\"navigator.connection.saveData\"]]]]]]],[100,[[21065726,null,[4,null,6,null,null,null,null,[\"21065725\"]]],[21065727,[[240,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]],[21065728,[[241,null,null,[1]]],[4,null,6,null,null,null,null,[\"21065725\"]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[50,[[21066392],[21066393,[[338,null,null,[1]]]]]],[500,[[21066614],[21066615,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"21066613\"]]],[50,[[21066806],[21066807,[[370,null,null,[1]]]]]],[1000,[[21066970,null,[2,[[6,null,null,6,null,8582400,null,[\"__gsaExp.id\"]],[1,[[6,null,null,null,4,null,\"\",[\"frameElement.src\"]]]]]]],[21066971,null,[2,[[6,null,null,6,null,8582400,null,[\"__gsaExp.id\"]],[6,null,null,null,4,null,\"\",[\"frameElement.src\"]]]]],[21066972,null,[2,[[5,null,null,6,null,null,null,[\"__gsaExp.id\"]],[1,[[6,null,null,6,null,8582400,null,[\"__gsaExp.id\"]]]]]]]]],[1000,[[21066973,null,[2,[[12,null,null,null,4,null,\"Linux.*Chrome\",[\"navigator.userAgent\"]],[1,[[6,null,null,null,4,null,\"\",[\"frameElement.src\"]]]],[1,[[5,null,null,6,null,null,null,[\"__gsaExp.id\"]]]]]]],[21066974,null,[2,[[12,null,null,null,4,null,\"Linux.*Chrome\",[\"navigator.userAgent\"]],[6,null,null,null,4,null,\"\",[\"frameElement.src\"]],[1,[[5,null,null,6,null,null,null,[\"__gsaExp.id\"]]]]]]]]],[100,[[21067087],[21067088,[[78,null,null,[1]]]]],[2,[[4,null,6,null,null,null,null,[\"21066613\"]]]]]]]]]")}catch(e){d=b}Xd(13,[d]);Hg(new lg(d),lf.h(),{oa:td&&!!a.google_disable_experiments,Ia:td},cg(a));dg.h().b(12);dg.h().b(10);d=tc(a);wb("")&&d.push("");a=Pd(a)||a;Qd(a.location,"google_mc_lab")&& 
d.push("242104166")}}function Je(a){var b=dg.h().a();var c=tc(x);(b=b.concat(c).join(","))&&(a.eid=50<b.length?b.substring(0,50)+"T":b)};function Kg(){var a=/[a-zA-Z0-9._~-]/,b=/%[89a-zA-Z]./;return x.location.pathname.replace(/(%[a-zA-Z0-9]{2})/g,function(c){if(!c.match(b)){var d=decodeURIComponent(c);if(d.match(a))return d}return c.toUpperCase()})}function Lg(){for(var a=Kg(),b="",c=/[/%?&=]/,d=0;d<a.length;++d){var e=a[d];b=e.match(c)?b+e:b+encodeURIComponent(e)}return b};function Q(a){C(this,a,Mg,null)}y(Q,B);var Mg=[4];Q.prototype.getId=function(){return D(this,3)};function R(a){C(this,a,null,null)}y(R,B);function Ng(a){C(this,a,null,Og)}y(Ng,B);function Pg(a){C(this,a,null,null)}y(Pg,B);function Qg(a){C(this,a,null,null)}y(Qg,B);function Rg(a){C(this,a,null,null)}y(Rg,B);var Og=[[1,2,3]];function Sg(a){C(this,a,null,null)}y(Sg,B);function Tg(a){C(this,a,null,null)}y(Tg,B);function Ug(a){C(this,a,Vg,null)}y(Ug,B);var Vg=[6,7,9,10,11];function Wg(a){C(this,a,Xg,null)}y(Wg,B);function Yg(a){C(this,a,null,null)}y(Yg,B);function Zg(a){C(this,a,$g,null)}y(Zg,B);function ah(a){C(this,a,null,null)}y(ah,B);function bh(a){C(this,a,null,null)}y(bh,B);function ch(a){C(this,a,null,null)}y(ch,B);function dh(a){C(this,a,null,null)}y(dh,B);var Xg=[1,2,5,7],$g=[2,5,6,11];function eh(a){var b=Lg().replace(/(^\/)|(\/$)/g,""),c=Yc(b),d=fh(b);return u(a,"find").call(a,function(e){var f=null!=D(e,7)?D(G(e,ah,7),1):D(e,1);e=null!=D(e,7)?D(G(e,ah,7),2):2;if("number"!==typeof f)return!1;switch(e){case 1:return f==c;case 2:return d[f]||!1}return!1})||null}function fh(a){for(var b={};;){b[Yc(a)]=!0;if(!a)return b;a=a.substring(0,a.lastIndexOf("/"))}};function gh(a,b){this.ma=a;this.ua=b}function hh(a){var b=[].slice.call(arguments).filter(Va(function(e){return null===e}));if(!b.length)return null;var c=[],d={};b.forEach(function(e){c=c.concat(e.ma||[]);d=u(Object,"assign").call(Object,d,e.ua)});return new gh(c,d)} 
function ih(a){switch(a){case 1:return new gh(null,{google_ad_semantic_area:"mc"});case 2:return new gh(null,{google_ad_semantic_area:"h"});case 3:return new gh(null,{google_ad_semantic_area:"f"});case 4:return new gh(null,{google_ad_semantic_area:"s"});default:return null}};var jh=new gh(["google-auto-placed"],{google_tag_origin:"qs"});var kh={},lh=(kh.google_ad_channel=!0,kh.google_ad_host=!0,kh);function mh(a,b){a.location.href&&a.location.href.substring&&(b.url=a.location.href.substring(0,200));Me("ama",b,.01)}function nh(a){var b={};Wc(lh,function(c,d){d in a&&(b[d]=a[d])});return b};function oh(a,b,c){this.a=a;this.b=b;this.c=c}function ph(a,b){return{top:a.b-b,right:a.a+a.c+1,bottom:a.b+b,left:a.a-1}};function qh(a){this.a={};this.b={};if(a)for(var b=0;b<a.length;++b)this.add(a[b])}qh.prototype.add=function(a){this.a[a]=!0;this.b[a]=a};qh.prototype.contains=function(a){return!!this.a[a]};function rh(a){C(this,a,null,null)}y(rh,B);function sh(a){C(this,a,null,null)}y(sh,B);function th(a){C(this,a,null,null)}y(th,B);function uh(a){C(this,a,vh,null)}y(uh,B);var vh=[5];function wh(a){try{var b=a.localStorage.getItem("google_ama_settings");return b?new uh(b?JSON.parse(b):null):null}catch(c){return null}};function xh(){this.a={};this.b={}}xh.prototype.set=function(a,b){this.a[a]=b;this.b[a]=a};xh.prototype.get=function(a,b){return void 0!==this.a[a]?this.a[a]:b};var yh={rectangle:1,horizontal:2,vertical:4};function zh(a,b){for(var c=["width","height"],d=0;d<c.length;d++){var e="google_ad_"+c[d];if(!b.hasOwnProperty(e)){var f=K(a[c[d]]);f=null===f?null:Math.round(f);null!=f&&(b[e]=f)}}}function Ah(a,b){return!((cd.test(b.google_ad_width)||bd.test(a.style.width))&&(cd.test(b.google_ad_height)||bd.test(a.style.height)))}function Bh(a,b){return(a=Ch(a,b))?a.y:0} 
function Ch(a,b){try{var c=b.document.documentElement.getBoundingClientRect(),d=a.getBoundingClientRect();return{x:d.left-c.left,y:d.top-c.top}}catch(e){return null}}function Dh(a,b){do{var c=Rc(a,b);if(c&&"fixed"==c.position)return!1}while(a=a.parentElement);return!0}function Eh(a){var b=0,c;for(c in yh)-1!=a.indexOf(c)&&(b|=yh[c]);return b} 
function Fh(a,b,c,d,e){if(Od(a)!=a)return Pd(a)?3:16;if(!(488>M(a)))return 4;if(!(a.innerHeight>=a.innerWidth))return 5;var f=M(a);if(!f||(f-c)/f>d)a=6;else{if(c="true"!=e.google_full_width_responsive)a:{c=M(a);for(b=b.parentElement;b;b=b.parentElement)if((d=Rc(b,a))&&(e=K(d.width))&&!(e>=c)&&"visible"!=d.overflow){c=!0;break a}c=!1}a=c?7:!0}return a} 
function Gh(a,b,c,d){var e=Fh(b,c,a,.3,d);!0!==e?a=e:"true"==d.google_full_width_responsive||Dh(c,b)?Hh(b)?a=!0:(b=M(b),a=b-a,a=b&&0<=a?!0:b?-10>a?11:0>a?14:12:10):a=9;return a}function Ih(a,b,c){a=a.style;"rtl"==b?P(251)?a.setProperty("margin-right",c,"important"):a.marginRight=c:P(251)?a.setProperty("margin-left",c,"important"):a.marginLeft=c} 
function Jh(a,b){if(3==b.nodeType)return/\S/.test(b.data);if(1==b.nodeType){if(/^(script|style)$/i.test(b.nodeName))return!1;try{var c=Rc(b,a)}catch(d){}return!c||"none"!=c.display&&!("absolute"==c.position&&("hidden"==c.visibility||"collapse"==c.visibility))}return!1}function Kh(a,b){for(var c=0;100>c&&b.parentElement;++c){for(var d=b.parentElement.childNodes,e=0;e<d.length;++e){var f=d[e];if(f!=b&&Jh(a,f))return}b=b.parentElement;b.style.width="100%";b.style.height="auto"}} 
function Lh(a,b,c){a=Ch(b,a);return"rtl"==c?-a.x:a.x}function Mh(a,b){var c;c=(c=b.parentElement)?(c=Rc(c,a))?c.direction:"":"";if(c){b.style.border=b.style.borderStyle=b.style.outline=b.style.outlineStyle=b.style.transition="none";b.style.borderSpacing=b.style.padding="0";Ih(b,c,"0px");b.style.width=M(a)+"px";if(0!==Lh(a,b,c)){Ih(b,c,"0px");var d=Lh(a,b,c);Ih(b,c,-1*d+"px");a=Lh(a,b,c);0!==a&&a!==d&&Ih(b,c,d/(a-d)*d+"px")}b.style.zIndex=30}} 
function Hh(a){return P(233)||a.location&&"#bffwroe2etoq"==a.location.hash};function S(a,b){this.b=a;this.a=b}m=S.prototype;m.minWidth=function(){return this.b};m.height=function(){return this.a};m.R=function(a){return 300<a&&300<this.a?this.b:Math.min(1200,Math.round(a))};m.ea=function(a){return this.R(a)+"x"+this.height()};m.X=function(){};function T(a,b,c,d){d=void 0===d?function(f){return f}:d;var e;return a.style&&a.style[c]&&d(a.style[c])||(e=Rc(a,b))&&e[c]&&d(e[c])||null}function Nh(a){return function(b){return b.minWidth()<=a}}function Oh(a,b,c,d){var e=a&&Ph(c,b),f=Qh(b,d);return function(g){return!(e&&g.height()>=f)}}function Rh(a){return function(b){return b.height()<=a}}function Ph(a,b){return Bh(a,b)<Te(b).clientHeight-100}function Sh(a,b){a=Bh(a,b);b=Te(b).clientHeight;return 0==b?null:a/b} 
function Th(a,b){var c=T(b,a,"height",K);if(c)return c;var d=b.style.height;b.style.height="inherit";c=T(b,a,"height",K);b.style.height=d;if(c)return c;c=Infinity;do(d=b.style&&K(b.style.height))&&(c=Math.min(c,d)),(d=T(b,a,"maxHeight",K))&&(c=Math.min(c,d));while((b=b.parentElement)&&"HTML"!=b.tagName);return c}function Qh(a,b){var c=0==Id(a);return b&&c?Math.max(250,2*Te(a).clientHeight/3):250};function Uh(a,b){for(var c=[],d=a.length,e=0;e<d;e++)c.push(a[e]);c.forEach(b,void 0)};function Vh(a){if(1!=a.nodeType)var b=!1;else if(b="INS"==a.tagName)a:{b=["adsbygoogle-placeholder"];a=a.className?a.className.split(/\s+/):[];for(var c={},d=0;d<a.length;++d)c[a[d]]=!0;for(d=0;d<b.length;++d)if(!c[b[d]]){b=!1;break a}b=!0}return b};function Wh(a,b,c){switch(c){case 0:b.parentNode&&b.parentNode.insertBefore(a,b);break;case 3:if(c=b.parentNode){var d=b.nextSibling;if(d&&d.parentNode!=c)for(;d&&8==d.nodeType;)d=d.nextSibling;c.insertBefore(a,d)}break;case 1:b.insertBefore(a,b.firstChild);break;case 2:b.appendChild(a)}Vh(b)&&(b.setAttribute("data-init-display",b.style.display),b.style.display="block")};function Xh(a,b,c){function d(f){f=Yh(f);return null==f?!1:c>f}function e(f){f=Yh(f);return null==f?!1:c<f}switch(b){case 0:return{init:Zh(a.previousSibling,e),Z:function(f){return Zh(f.previousSibling,e)},$:0};case 2:return{init:Zh(a.lastChild,e),Z:function(f){return Zh(f.previousSibling,e)},$:0};case 3:return{init:Zh(a.nextSibling,d),Z:function(f){return Zh(f.nextSibling,d)},$:3};case 1:return{init:Zh(a.firstChild,d),Z:function(f){return Zh(f.nextSibling,d)},$:3}}throw Error("Un-handled RelativePosition: "+ 
b);}function Yh(a){return a.hasOwnProperty("google-ama-order-assurance")?a["google-ama-order-assurance"]:null}function Zh(a,b){return a&&b(a)?a:null};function $h(a,b){for(var c=0;c<b.length;c++){var d=b[c],e=Zb(d.Wa);a[e]=d.value}};var ai=null;function bi(){if(!ai){for(var a=x,b=a,c=0;a&&a!=a.parent;)if(a=a.parent,c++,Mc(a))b=a;else break;ai=b}return ai};function ci(a,b,c,d){this.f=a;this.b=b;this.c=c;this.a=d}function di(a,b){var c=[];try{c=b.querySelectorAll(a.f)}catch(g){}if(!c.length)return[];b=c;c=b.length;if(0<c){for(var d=Array(c),e=0;e<c;e++)d[e]=b[e];b=d}else b=[];b=ei(a,b);"number"===typeof a.b&&(c=a.b,0>c&&(c+=b.length),b=0<=c&&c<b.length?[b[c]]:[]);if("number"===typeof a.c){c=[];for(d=0;d<b.length;d++){e=fi(b[d]);var f=a.c;0>f&&(f+=e.length);0<=f&&f<e.length&&c.push(e[f])}b=c}return b} 
ci.prototype.toString=function(){return JSON.stringify({nativeQuery:this.f,occurrenceIndex:this.b,paragraphIndex:this.c,ignoreMode:this.a})};function ei(a,b){if(null==a.a)return b;switch(a.a){case 1:return b.slice(1);case 2:return b.slice(0,b.length-1);case 3:return b.slice(1,b.length-1);case 0:return b;default:throw Error("Unknown ignore mode: "+a.a);}}function fi(a){var b=[];Uh(a.getElementsByTagName("p"),function(c){100<=gi(c)&&b.push(c)});return b} 
function gi(a){if(3==a.nodeType)return a.length;if(1!=a.nodeType||"SCRIPT"==a.tagName)return 0;var b=0;Uh(a.childNodes,function(c){b+=gi(c)});return b}function hi(a){return 0==a.length||isNaN(a[0])?a:"\\"+(30+parseInt(a[0],10))+" "+a.substring(1)};function ii(a){if(!a)return null;var b=D(a,7);if(D(a,1)||a.getId()||0<D(a,4).length){var c=a.getId(),d=D(a,1),e=D(a,4);b=D(a,2);var f=D(a,5);a=ji(D(a,6));var g="";d&&(g+=d);c&&(g+="#"+hi(c));if(e)for(c=0;c<e.length;c++)g+="."+hi(e[c]);b=(e=g)?new ci(e,b,f,a):null}else b=b?new ci(b,D(a,2),D(a,5),ji(D(a,6))):null;return b}var ki={1:1,2:2,3:3,0:0};function ji(a){return null==a?a:ki[a]}var li={1:0,2:1,3:2,4:3};function mi(){};function ni(a,b,c){var d=ph(c,b+1);return!Ra(a,function(e){return e.left<d.right&&d.left<e.right&&e.top<d.bottom&&d.top<e.bottom})};function oi(){this.a=new xh}oi.prototype.set=function(a,b){var c=this.a.get(a);c||(c=new qh,this.a.set(a,c));c.add(b)};function pi(a,b){function c(){d.push({anchor:e.anchor,position:e.position});return e.anchor==b.anchor&&e.position==b.position}for(var d=[],e=a;e;){switch(e.position){case 1:if(c())return d;e.position=2;case 2:if(c())return d;if(e.anchor.firstChild){e={anchor:e.anchor.firstChild,position:1};continue}else e.position=3;case 3:if(c())return d;e.position=4;case 4:if(c())return d}for(;e&&!e.anchor.nextSibling&&e.anchor.parentNode!=e.anchor.ownerDocument.body;){e={anchor:e.anchor.parentNode,position:3}; 
if(c())return d;e.position=4;if(c())return d}e&&e.anchor.nextSibling?e={anchor:e.anchor.nextSibling,position:1}:e=null}return d};function qi(a,b){this.b=a;this.a=b} 
function ri(a,b){var c=new oi,d=new qh;b.forEach(function(e){if(G(e,Pg,1)){e=G(e,Pg,1);if(G(e,R,1)&&G(G(e,R,1),Q,1)&&G(e,R,2)&&G(G(e,R,2),Q,1)){var f=si(a,G(G(e,R,1),Q,1)),g=si(a,G(G(e,R,2),Q,1));if(f&&g)for(f=w(pi({anchor:f,position:D(G(e,R,1),2)},{anchor:g,position:D(G(e,R,2),2)})),g=f.next();!g.done;g=f.next())g=g.value,c.set(Ea(g.anchor),g.position)}G(e,R,3)&&G(G(e,R,3),Q,1)&&(f=si(a,G(G(e,R,3),Q,1)))&&c.set(Ea(f),D(G(e,R,3),2))}else G(e,Qg,2)?ti(a,G(e,Qg,2),c):G(e,Rg,3)&&ui(a,G(e,Rg,3),d)}); 
return new qi(c,d)}function ti(a,b,c){G(b,Q,1)&&(a=vi(a,G(b,Q,1)))&&a.forEach(function(d){d=Ea(d);c.set(d,1);c.set(d,4);c.set(d,2);c.set(d,3)})}function ui(a,b,c){G(b,Q,1)&&(a=vi(a,G(b,Q,1)))&&a.forEach(function(d){c.add(Ea(d))})}function si(a,b){return(a=vi(a,b))&&0<a.length?a[0]:null}function vi(a,b){return(b=ii(b))?di(b,a):null};function wi(a,b){if(!a)return!1;a=Rc(a,b);if(!a)return!1;a=a.cssFloat||a.styleFloat;return"left"==a||"right"==a}function xi(a){for(a=a.previousSibling;a&&1!=a.nodeType;)a=a.previousSibling;return a?a:null}function yi(a){return!!a.nextSibling||!!a.parentNode&&yi(a.parentNode)};function zi(a,b){return a&&null!=D(a,4)&&b[D(G(a,Tg,4),2)]?!1:!0}function Ai(a){var b={};a&&D(a,6).forEach(function(c){b[c]=!0});return b}function Bi(a,b,c,d){this.a=x;this.s=a;this.b=b;this.i=d||null;this.o=(this.g=c)?ri(x.document,H(c,Ng,5)):ri(x.document,[]);this.c=0;this.f=!1}function Ci(a){return new mi(Di(a).numAutoAdsPlaced||0,H(a.b,Ug,1).length)} 
function Ei(a,b){if(a.f)return!0;a.f=!0;var c=H(a.b,Ug,1);a.c=0;var d=Ai(a.g);var e=(e=a.g)?Ua(D(e,11),1):!1;var f;if(f=!e&&G(a.b,dh,15)&&lc(G(a.b,dh,15),12))a:{f=wh(a.a);f=null!==f?H(f,th,5):null;var g=wh(a.a);var h=null!=g?G(g,rh,6)||null:null;if(null==f)f=!1;else{g=4;var k=0;h&&(g=D(h,1)||g,k=D(h,3)||k);h=new qh([2,1,0]);G(a.b,dh,15)&&lc(G(a.b,dh,15),15)&&h.add(4);for(var l=[],n=0;n<f.length;n++){var p=Di(a).numAutoAdsPlaced||0;var v=wh(a.a);v=null!==v&&null!=D(v,8)?D(v,8):0;if(p+v>=g){f=!0;break a}p= 
D(f[n],1);if(null==p)break;v=c[p];var r=G(f[n],sh,2);null!=r&&null!=jc(r,1)&&null!=jc(r,2)&&null!=jc(r,3)&&(r=new oh(jc(r,1),jc(r,2),jc(r,3)),ni(l,k,r)&&(p=Fi(a,v,p,b,d,h),null!=p&&null!=p.P&&(p=p.P.getBoundingClientRect(),l.push(p))))}f=0<(Di(a).numAutoAdsPlaced||0)}}if(f)return!0;f=wh(a.a);if(null!==f&&lc(f,2))return Di(a).eatf=!0,Xd(7,[!0,0,!1]),!0;f=new qh([2]);!e&&G(a.b,dh,15)&&lc(G(a.b,dh,15),15)&&f.add(4);for(e=0;e<c.length;e++)if(Fi(a,c[e],e,b,d,f))return!0;Xd(7,[!1,a.c,!1]);return!1} 
function Fi(a,b,c,d,e,f){if(!G(b,Tg,4)||!f.contains(D(G(b,Tg,4),1))||1!==D(b,8)||!zi(b,e))return null;a.c++;if(b=Gi(a,b,d,e))d=Di(a),d.numAutoAdsPlaced||(d.numAutoAdsPlaced=0),null==d.placed&&(d.placed=[]),d.numAutoAdsPlaced++,d.placed.push({index:c,element:b.P}),Xd(7,[!1,a.c,!0]);return b} 
function Gi(a,b,c,d){if(!zi(b,d)||1!=D(b,8))return null;d=G(b,Q,1);if(!d)return null;d=ii(d);if(!d)return null;d=di(d,a.a.document);if(0==d.length)return null;d=d[0];var e=D(b,2);e=li[e];e=void 0===e?null:e;var f;if(!(f=null==e)){a:{f=a.a;switch(e){case 0:f=wi(xi(d),f);break a;case 3:f=wi(d,f);break a;case 2:var g=d.lastChild;f=wi(g?1==g.nodeType?g:xi(g):null,f);break a}f=!1}if(c=!f&&!(!c&&2==e&&!yi(d)))c=1==e||2==e?d:d.parentNode,c=!(c&&!Vh(c)&&0>=c.offsetWidth);f=!c}if(!(c=f)){c=a.o;f=D(b,2);g= 
Ea(d);g=c.b.a.get(g);if(!(g=g?g.contains(f):!1))a:{if(c.a.contains(Ea(d)))switch(f){case 2:case 3:g=!0;break a;default:g=!1;break a}for(f=d.parentElement;f;){if(c.a.contains(Ea(f))){g=!0;break a}f=f.parentElement}g=!1}c=g}if(c)return null;c=G(b,Sg,3);f={};c&&(f.Ba=D(c,1),f.la=D(c,2),f.clearBoth=!!kc(c,3));c=G(b,Tg,4)&&D(G(b,Tg,4),2)?D(G(b,Tg,4),2):null;c=ih(c);b=null==D(b,12)?null:D(b,12);b=hh(a.i,c,null==b?null:new gh(null,{google_ml_rank:b}));c=a.a;a=a.s;var h=c.document,k=f.clearBoth||!1;g=Ec((new Fc(h)).a, 
"DIV");var l=g.style;l.width="100%";l.height="auto";l.clear=k?"both":"none";k=g.style;k.textAlign="center";f.La&&$h(k,f.La);h=Ec((new Fc(h)).a,"INS");k=h.style;k.display="block";k.margin="auto";k.backgroundColor="transparent";f.Ba&&(k.marginTop=f.Ba);f.la&&(k.marginBottom=f.la);f.Da&&$h(k,f.Da);g.appendChild(h);f={da:g,P:h};f.P.setAttribute("data-ad-format","auto");g=[];if(h=b&&b.ma)f.da.className=h.join(" ");h=f.P;h.className="adsbygoogle";h.setAttribute("data-ad-client",a);g.length&&h.setAttribute("data-ad-channel", 
g.join("+"));a:{try{var n=f.da;var p=void 0===p?0:p;if(P(313)){p=void 0===p?0:p;var v=Xh(d,e,p);if(v.init){var r=v.init;for(d=r;d=v.Z(d);)r=d;var A={anchor:r,position:v.$}}else A={anchor:d,position:e};n["google-ama-order-assurance"]=p;Wh(n,A.anchor,A.position)}else Wh(n,d,e);b:{var t=f.P;t.setAttribute("data-adsbygoogle-status","reserved");t.className+=" adsbygoogle-noablate";n={element:t};var F=b&&b.ua;if(t.hasAttribute("data-pub-vars")){try{F=JSON.parse(t.getAttribute("data-pub-vars"))}catch(Da){break b}t.removeAttribute("data-pub-vars")}F&& 
(n.params=F);(c.adsbygoogle=c.adsbygoogle||[]).push(n)}}catch(Da){(t=f.da)&&t.parentNode&&(F=t.parentNode,F.removeChild(t),Vh(F)&&(F.style.display=F.getAttribute("data-init-display")||"none"));t=!1;break a}t=!0}return t?f:null}function Di(a){return a.a.google_ama_state=a.a.google_ama_state||{}};function Hi(){this.b=new Ii(this);this.a=0}Hi.prototype.resolve=function(a){Ji(this);this.a=1;this.f=a;Ki(this.b)};Hi.prototype.reject=function(a){Ji(this);this.a=2;this.c=a;Ki(this.b)};function Ji(a){if(0!=a.a)throw Error("Already resolved/rejected.");}function Ii(a){this.a=a}Ii.prototype.then=function(a,b){if(this.b)throw Error("Then functions already set.");this.b=a;this.c=b;Ki(this)}; 
function Ki(a){switch(a.a.a){case 0:break;case 1:a.b&&a.b(a.a.f);break;case 2:a.c&&a.c(a.a.c);break;default:throw Error("Unhandled deferred state.");}};function Li(a,b){this.exception=b}function Mi(a,b){this.c=x;this.a=a;this.b=b}Mi.prototype.start=function(){this.f()};Mi.prototype.f=function(){try{switch(this.c.document.readyState){case "complete":case "interactive":Ei(this.a,!0);Ni(this);break;default:Ei(this.a,!1)?Ni(this):this.c.setTimeout(Ja(this.f,this),100)}}catch(a){Ni(this,a)}};function Ni(a,b){try{a.b.resolve(new Li(Ci(a.a),b))}catch(c){a.b.reject(c)}};function Oi(a){mh(a,{atf:1})}function Pi(a,b){(a.google_ama_state=a.google_ama_state||{}).exception=b;mh(a,{atf:0})};function Qi(){this.debugCard=null;this.debugCardRequested=!1};function Ri(){var a=this;this.a=new q.Promise(function(b,c){a.resolve=b;a.reject=c})};function Si(){var a=new Ri;this.promise=a.a;this.resolve=a.resolve}function Ti(a){x.google_llp||(x.google_llp={});var b=x.google_llp;b[7]||(b[7]=new Si,a&&a());return b[7]}function Ui(a){return Ti(function(){Qc(x.document,Ic(a))}).promise};function Vi(a,b,c){var d="script";d=void 0===d?"":d;var e=a.createElement("link");try{e.rel="preload";if(b instanceof mb)var f=ob(b).toString();else{if(b instanceof Fb)var g=Hb(b);else{if(b instanceof Fb)var h=b;else b="object"==typeof b&&b.b?b.a():String(b),Ib.test(b)||(b="about:invalid#zClosurez"),h=new Fb(b,Gb);g=Hb(h)}f=g}e.href=f}catch(k){return}d&&(e.as=d);c&&e.setAttribute("nonce",c);if(a=a.getElementsByTagName("head")[0])try{a.appendChild(e)}catch(k){}};function Wi(a){var b={},c={};return c.enable_page_level_ads=(b.pltais=!0,b),c.google_ad_client=a,c};function Xi(a){var b=We(x,12,a.google_ad_client);a="google_ad_host"in a;var c=.5<Math.random(),d=Qd(x.location,"google_ads_preview");return b&&!a&&c||d} 
function Yi(a){if(x.google_apltlad||Od(x)!=x||!a.google_ad_client)return null;var b=Xi(a);x.google_apltlad=!0;var c=Wi(a.google_ad_client),d=c.enable_page_level_ads;Wc(a,function(e,f){yc[f]&&"google_ad_client"!=f&&(d[f]=e)});if(b)d.google_ad_channel="AutoInsertAutoAdCode";else if(d.google_pgb_reactive=7,"google_ad_section"in a||"google_ad_region"in a)d.google_ad_section=a.google_ad_section||a.google_ad_region;return c} 
function Zi(a){return Ca(a.enable_page_level_ads)&&7==a.enable_page_level_ads.google_pgb_reactive};function Ie(a){a.shv=sd()}Be.ya(!td);function $i(a,b){return Bh(b,a)+T(b,a,"height",K)};function aj(a){var b=this;this.a=a;a.google_iframe_oncopy||(a.google_iframe_oncopy={handlers:{},upd:function(c,d){var e=bj("rx",c),f=Number;a:{if(c&&(c=c.match("dt=([^&]+)"))&&2==c.length){c=c[1];break a}c=""}f=f(c);f=(new Date).getTime()-f;e=e.replace(/&dtd=(\d+|-?M)/,"&dtd="+(1E5<=f?"M":0<=f?f:"-M"));b.set(d,e);return e}});this.b=a.google_iframe_oncopy} 
aj.prototype.set=function(a,b){var c=this;this.b.handlers[a]=b;this.a.addEventListener&&this.a.addEventListener("load",function(){var d=c.a.document.getElementById(a);try{var e=d.contentWindow.document;if(d.onload&&e&&(!e.body||!e.body.firstChild))d.onload()}catch(f){}},!1)};function bj(a,b){var c=new RegExp("\\b"+a+"=(\\d+)"),d=c.exec(b);d&&(b=b.replace(c,a+"="+(+d[1]+1||1)));return b}var cj,dj="var i=this.id,s=window.google_iframe_oncopy,H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}"; 
var U=dj;/[\x00&<>"']/.test(U)&&(-1!=U.indexOf("&")&&(U=U.replace(xb,"&amp;")),-1!=U.indexOf("<")&&(U=U.replace(yb,"&lt;")),-1!=U.indexOf(">")&&(U=U.replace(zb,"&gt;")),-1!=U.indexOf('"')&&(U=U.replace(Ab,"&quot;")),-1!=U.indexOf("'")&&(U=U.replace(Bb,"&#39;")),-1!=U.indexOf("\x00")&&(U=U.replace(Cb,"&#0;")));dj=U;cj=dj;var ej=null;function V(a,b,c,d){d=void 0===d?!1:d;S.call(this,a,b);this.V=c;this.Ja=d}qa(V,S);V.prototype.ba=function(){return this.V};V.prototype.X=function(a,b,c){b.google_ad_resize||(c.style.height=this.height()+"px",b.rpe=!0)};function fj(a){return function(b){return!!(b.V&a)}};var gj=ac("script");function hj(a,b,c,d,e,f,g,h,k,l,n,p,v,r){this.D=a;this.a=b;this.V=void 0===c?null:c;this.c=void 0===d?null:d;this.T=void 0===e?null:e;this.b=void 0===f?null:f;this.f=void 0===g?null:g;this.o=void 0===h?!1:h;this.s=void 0===k?!1:k;this.O=void 0===l?null:l;this.W=void 0===n?null:n;this.g=void 0===p?null:p;this.i=void 0===v?null:v;this.S=void 0===r?null:r;this.ja=this.K=this.J=null} 
function ij(a,b,c){null!=a.V&&(c.google_responsive_formats=a.V);null!=a.T&&(c.google_safe_for_responsive_override=a.T);null!=a.b&&(!0===a.b?c.google_full_width_responsive_allowed=!0:(c.google_full_width_responsive_allowed=!1,c.gfwrnwer=a.b));null!=a.f&&!0!==a.f&&(c.gfwrnher=a.f);a.o&&(c.google_bfa=a.o);a.s&&(c.ebfa=a.s);var d=a.i||c.google_ad_width;null!=d&&(c.google_resizing_width=d);d=a.g||c.google_ad_height;null!=d&&(c.google_resizing_height=d);d=a.a.R(b);var e=a.a.height();c.google_ad_resize|| 
(c.google_ad_width=d,c.google_ad_height=e,c.google_ad_format=a.a.ea(b),c.google_responsive_auto_format=a.D,null!=a.c&&(c.armr=a.c),c.google_ad_resizable=!0,c.google_override_format=1,c.google_loader_features_used=128,!0===a.b&&(c.gfwrnh=a.a.height()+"px"));null!=a.O&&(c.gfwroml=a.O);null!=a.W&&(c.gfwromr=a.W);null!=a.g&&(c.gfwroh=a.g);null!=a.i&&(c.gfwrow=a.i);null!=a.S&&(c.gfwroz=a.S);null!=a.J&&(c.gml=a.J);null!=a.K&&(c.gmr=a.K);null!=a.ja&&(c.gzi=a.ja);b=Md();b=Pd(b)||b;Qd(b.location,"google_responsive_slot_debug")&& 
(c.ds="outline:thick dashed "+(d&&e?!0!==a.b||!0!==a.f?"#ffa500":"#0f0":"#f00")+" !important;");Qd(b.location,"google_responsive_dummy_ad")&&(Ua([1,2,3,4,5,6,7,8],a.D)||1===a.c)&&2!==a.c&&(a=JSON.stringify({googMsgType:"adpnt",key_value:[{key:"qid",value:"DUMMY_AD"}]}),c.dash="<"+gj+">window.top.postMessage('"+a+"', '*');\n          </"+gj+'>\n          <div id="dummyAd" style="width:'+d+"px;height:"+e+'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:'+ 
d+"x"+e+"</p>\n            <p>Rendered size:"+d+"x"+e+"</p>\n          </div>")};/* 
 
 Copyright 2019 The AMP HTML Authors. All Rights Reserved. 
 
 Licensed under the Apache License, Version 2.0 (the "License"); 
 you may not use this file except in compliance with the License. 
 You may obtain a copy of the License at 
 
      http://www.apache.org/licenses/LICENSE-2.0 
 
 Unless required by applicable law or agreed to in writing, software 
 distributed under the License is distributed on an "AS-IS" BASIS, 
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
 See the License for the specific language governing permissions and 
 limitations under the License. 
*/ 
var jj={},kj=(jj.image_stacked=1/1.91,jj.image_sidebyside=1/3.82,jj.mobile_banner_image_sidebyside=1/3.82,jj.pub_control_image_stacked=1/1.91,jj.pub_control_image_sidebyside=1/3.82,jj.pub_control_image_card_stacked=1/1.91,jj.pub_control_image_card_sidebyside=1/3.74,jj.pub_control_text=0,jj.pub_control_text_card=0,jj),lj={},mj=(lj.image_stacked=80,lj.image_sidebyside=0,lj.mobile_banner_image_sidebyside=0,lj.pub_control_image_stacked=80,lj.pub_control_image_sidebyside=0,lj.pub_control_image_card_stacked= 
85,lj.pub_control_image_card_sidebyside=0,lj.pub_control_text=80,lj.pub_control_text_card=80,lj),nj={},oj=(nj.pub_control_image_stacked=100,nj.pub_control_image_sidebyside=200,nj.pub_control_image_card_stacked=150,nj.pub_control_image_card_sidebyside=250,nj.pub_control_text=100,nj.pub_control_text_card=150,nj); 
function pj(a){var b=0;a.B&&b++;a.u&&b++;a.v&&b++;if(3>b)return{A:"Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."};b=a.B.split(",");var c=a.v.split(",");a=a.u.split(",");if(b.length!==c.length||b.length!==a.length)return{A:'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}; 
if(2<b.length)return{A:"The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing "+(b.length+' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')};for(var d=[],e=[],f=0;f<b.length;f++){var g= 
Number(c[f]);if(isNaN(g)||0===g)return{A:"Wrong value '"+c[f]+"' for data-matched-content-rows-num."};d.push(g);g=Number(a[f]);if(isNaN(g)||0===g)return{A:"Wrong value '"+a[f]+"' for data-matched-content-columns-num."};e.push(g)}return{v:d,u:e,ra:b}}function qj(a){return 1200<=a?{width:1200,height:600}:850<=a?{width:a,height:Math.floor(.5*a)}:550<=a?{width:a,height:Math.floor(.6*a)}:468<=a?{width:a,height:Math.floor(.7*a)}:{width:a,height:Math.floor(3.44*a)}};var rj=["google_content_recommendation_ui_type","google_content_recommendation_columns_num","google_content_recommendation_rows_num"];function sj(a,b){S.call(this,a,b)}qa(sj,S);sj.prototype.R=function(a){return Math.min(1200,Math.max(this.minWidth(),Math.round(a)))}; 
function tj(a,b){uj(a,b);if("pedestal"==b.google_content_recommendation_ui_type)return new hj(9,new sj(a,Math.floor(a*b.google_phwr)));var c=Jc();468>a?c?(c=a-8-8,c=Math.floor(c/1.91+70)+Math.floor(11*(c*kj.mobile_banner_image_sidebyside+mj.mobile_banner_image_sidebyside)+96),a={N:a,L:c,u:1,v:12,B:"mobile_banner_image_sidebyside"}):(a=qj(a),a={N:a.width,L:a.height,u:1,v:13,B:"image_sidebyside"}):(a=qj(a),a={N:a.width,L:a.height,u:4,v:2,B:"image_stacked"});vj(b,a);return new hj(9,new sj(a.N,a.L))} 
function wj(a,b){uj(a,b);var c=pj({v:b.google_content_recommendation_rows_num,u:b.google_content_recommendation_columns_num,B:b.google_content_recommendation_ui_type});if(c.A)a={N:0,L:0,u:0,v:0,B:"image_stacked",A:c.A};else{var d=2===c.ra.length&&468<=a?1:0;var e=c.ra[d];e=0===e.indexOf("pub_control_")?e:"pub_control_"+e;var f=oj[e];for(var g=c.u[d];a/g<f&&1<g;)g--;f=g;c=c.v[d];d=Math.floor(((a-8*f-8)/f*kj[e]+mj[e])*c+8*c+8);a=1500<a?{width:0,height:0,ia:"Calculated slot width is too large: "+a}: 
1500<d?{width:0,height:0,ia:"Calculated slot height is too large: "+d}:{width:a,height:d};a=a.ia?{N:0,L:0,u:0,v:0,B:e,A:a.ia}:{N:a.width,L:a.height,u:f,v:c,B:e}}if(a.A)throw new L(a.A);vj(b,a);return new hj(9,new sj(a.N,a.L))}function uj(a,b){if(0>=a)throw new L("Invalid responsive width from Matched Content slot "+b.google_ad_slot+": "+a+". Please ensure to put this Matched Content slot into a non-zero width div container.");} 
function vj(a,b){a.google_content_recommendation_ui_type=b.B;a.google_content_recommendation_columns_num=b.u;a.google_content_recommendation_rows_num=b.v};function xj(a,b){S.call(this,a,b)}qa(xj,S);xj.prototype.R=function(){return this.minWidth()};xj.prototype.X=function(a,b,c){Mh(a,c);b.google_ad_resize||(c.style.height=this.height()+"px",b.rpe=!0)};var yj={"image-top":function(a){return 600>=a?284+.414*(a-250):429},"image-middle":function(a){return 500>=a?196-.13*(a-250):164+.2*(a-500)},"image-side":function(a){return 500>=a?205-.28*(a-250):134+.21*(a-500)},"text-only":function(a){return 500>=a?187-.228*(a-250):130},"in-article":function(a){return 420>=a?a/1.2:460>=a?a/1.91+130:800>=a?a/4:200}};function zj(a,b){S.call(this,a,b)}qa(zj,S);zj.prototype.R=function(){return Math.min(1200,this.minWidth())}; 
function Aj(a,b,c,d,e){var f=e.google_ad_layout||"image-top";if("in-article"==f&&"false"!=e.google_full_width_responsive){var g=Fh(b,c,a,.2,e);if(!0!==g)e.gfwrnwer=g;else if(g=M(b))e.google_full_width_responsive_allowed=!0,c.parentElement&&(Kh(b,c),Mh(b,c),a=g)}if(250>a)throw new L("Fluid responsive ads must be at least 250px wide: availableWidth="+a);a=Math.min(1200,Math.floor(a));if(d&&"in-article"!=f){f=Math.ceil(d);if(50>f)throw new L("Fluid responsive ads must be at least 50px tall: height="+ 
f);return new hj(11,new S(a,f))}if("in-article"!=f&&(d=e.google_ad_layout_key)){f=""+d;b=Math.pow(10,3);if(d=(c=f.match(/([+-][0-9a-z]+)/g))&&c.length){e=[];for(g=0;g<d;g++)e.push(parseInt(c[g],36)/b);b=e}else b=null;if(!b)throw new L("Invalid data-ad-layout-key value: "+f);f=(a+-725)/1E3;c=0;d=1;e=b.length;for(g=0;g<e;g++)c+=b[g]*d,d*=f;f=Math.ceil(1E3*c- -725+10);if(isNaN(f))throw new L("Invalid height: height="+f);if(50>f)throw new L("Fluid responsive ads must be at least 50px tall: height="+f); 
if(1200<f)throw new L("Fluid responsive ads must be at most 1200px tall: height="+f);return new hj(11,new S(a,f))}d=yj[f];if(!d)throw new L("Invalid data-ad-layout value: "+f);c=Ph(c,b);b=M(b);b="in-article"!==f||c||a!==b?Math.ceil(d(a)):Math.ceil(1.25*d(a));return new hj(11,"in-article"==f?new zj(a,b):new S(a,b))};function Bj(a){return function(b){for(var c=a.length-1;0<=c;--c)if(!a[c](b))return!1;return!0}}function Cj(a,b,c){for(var d=a.length,e=null,f=0;f<d;++f){var g=a[f];if(b(g)){if(!c||c(g))return g;null===e&&(e=g)}}return e};var W=[new V(970,90,2),new V(728,90,2),new V(468,60,2),new V(336,280,1),new V(320,100,2),new V(320,50,2),new V(300,600,4),new V(300,250,1),new V(250,250,1),new V(234,60,2),new V(200,200,1),new V(180,150,1),new V(160,600,4),new V(125,125,1),new V(120,600,4),new V(120,240,4),new V(120,120,1,!0)],Dj=[W[6],W[12],W[3],W[0],W[7],W[14],W[1],W[8],W[10],W[4],W[15],W[2],W[11],W[5],W[13],W[9],W[16]];function Ej(a,b,c,d,e){"false"==e.google_full_width_responsive?c={l:a,m:1}:"autorelaxed"==b&&e.google_full_width_responsive||Fj(b)||e.google_ad_resize?(488>M(c)&&(Hh(c)||P(1002))&&Kh(c,d),b=Gh(a,c,d,e),c=!0!==b?{l:a,m:b}:{l:M(c)||a,m:!0}):c={l:a,m:2};b=c.m;return!0!==b?{l:a,m:b}:d.parentElement?{l:c.l,m:b}:{l:a,m:b}} 
function Gj(a,b,c,d,e){var f=Ke(247,function(){return Ej(a,b,c,d,e)}),g=f.l;f=f.m;var h=!0===f,k=K(d.style.width),l=K(d.style.height),n=Hj(g,b,c,d,e,h);g=n.M;h=n.I;var p=n.G,v=n.H,r=n.ba;n=n.qa;var A=Ij(b,r),t,F=(t=T(d,c,"marginLeft",K))?t+"px":"",Da=(t=T(d,c,"marginRight",K))?t+"px":"";t=T(d,c,"zIndex")||"";return new hj(A,g,r,null,n,f,h,p,v,F,Da,l,k,t)}function Fj(a){return"auto"==a||/^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)} 
function Hj(a,b,c,d,e,f){b="auto"==b?.25>=a/Math.min(1200,M(c))?4:3:Eh(b);var g=!1,h=!1;if(488>M(c)){var k=Dh(d,c);var l=Ph(d,c);g=!l&&k;h=l&&k}l=488>M(c);var n=[Nh(a),fj(b)];Hh(c)||n.push(Oh(l,c,d,h));null!=e.google_max_responsive_height&&n.push(Rh(e.google_max_responsive_height));var p=[function(r){return!r.Ja}];!g&&!h||Hh(c)||(g=Th(c,d),p.push(Rh(g)));var v=l&&!f&&3===b&&Jj(c)?new V(a,Math.floor(a/1.2),1):Cj(Dj.slice(0),Bj(n),Bj(p));if(!v)throw new L("No slot size for availableWidth="+a);p=Ke(248, 
function(){var r;a:if(f){if(e.gfwrnh&&(r=K(e.gfwrnh))){r={M:new xj(a,r),I:!0,G:!1,H:!1};break a}r=!1;var A=Te(c).clientHeight,t=Bh(d,c),F=c.google_lpabyc,Da=Sh(d,c);Da&&2<Da&&!c.google_bfabyc&&(!F||t-F>A)&&(A=.9*Te(c).clientHeight,t=Math.min(A,Kj(c,d,e)),A&&t==A&&(t=c.google_pbfabyc,r=!t,t||(c.google_pbfabyc=Bh(d,c)+A)));A=a/1.2;if(Hh(c))t=A;else if(t=Math.min(A,Kj(c,d,e)),t<.5*A||100>t)t=A;P(282)&&!Ph(d,c)&&(t=Math.max(t,.5*Te(c).clientHeight));r={M:new xj(a,Math.floor(t)),I:t<A?102:!0,G:!1,H:r}}else r= 
{M:v,I:100,G:!1,H:!1};return r});g=p.M;l=p.I;n=p.G;p=p.H;return"in-article"===e.google_ad_layout&&Lj(c)?{M:Mj(a,c,d,g,e),I:!1,G:!1,H:!1,ba:b,qa:k}:{M:g,I:l,G:n,H:p,ba:b,qa:k}}function Kj(a,b,c){if(c.google_resizing_allowed||"true"==c.google_full_width_responsive)a=Infinity;else{c=Infinity;do{var d=T(b,a,"height",K);d&&(c=Math.min(c,d));(d=T(b,a,"maxHeight",K))&&(c=Math.min(c,d))}while((b=b.parentElement)&&"HTML"!=b.tagName);a=c}return a} 
function Ij(a,b){if("auto"==a)return 1;switch(b){case 2:return 2;case 1:return 3;case 4:return 4;case 3:return 5;case 6:return 6;case 5:return 7;case 7:return 8}throw Error("bad mask");}function Mj(a,b,c,d,e){var f=e.google_ad_height||T(c,b,"height",K);b=Aj(a,b,c,f,e).a;return b.minWidth()*b.height()>a*d.height()?new V(b.minWidth(),b.height(),1):d}function Lj(a){return P(227)||a.location&&"#hffwroe2etoq"==a.location.hash}function Jj(a){return P(232)||a.location&&"#affwroe2etoq"==a.location.hash};function Nj(a,b){S.call(this,a,b)}qa(Nj,S);Nj.prototype.R=function(){return this.minWidth()};Nj.prototype.ea=function(a){return S.prototype.ea.call(this,a)+"_0ads_al"};var Oj=[new Nj(728,15),new Nj(468,15),new Nj(200,90),new Nj(180,90),new Nj(160,90),new Nj(120,90)]; 
function Pj(a,b,c){var d=250,e=90;d=void 0===d?130:d;e=void 0===e?30:e;var f=Cj(Oj,Nh(a));if(!f)throw new L("No link unit size for width="+a+"px");a=Math.min(a,1200);f=f.height();b=Math.max(f,b);d=(new hj(10,new Nj(a,Math.min(b,15==f?e:d)))).a;b=d.minWidth();d=d.height();15<=c&&(d=c);return new hj(10,new Nj(b,d))} 
function Qj(a,b,c,d){if("false"==d.google_full_width_responsive)return d.google_full_width_responsive_allowed=!1,d.gfwrnwer=1,a;var e=Gh(a,b,c,d);if(!0!==e)return d.google_full_width_responsive_allowed=!1,d.gfwrnwer=e,a;e=M(b);if(!e)return a;d.google_full_width_responsive_allowed=!0;Mh(b,c);return e};function Rj(a,b,c,d,e){var f;(f=M(b))?488>M(b)?b.innerHeight>=b.innerWidth?(e.google_full_width_responsive_allowed=!0,Mh(b,c),f={l:f,m:!0}):f={l:a,m:5}:f={l:a,m:4}:f={l:a,m:10};var g=f;f=g.l;g=g.m;if(!0!==g||a==f)return new hj(12,new S(a,d),null,null,!0,g,100);a=Hj(f,"auto",b,c,e,!0);return new hj(1,a.M,a.ba,2,!0,g,a.I,a.G,a.H)};function Sj(a,b){var c=b.google_ad_format;if("autorelaxed"==c){a:{if("pedestal"!=b.google_content_recommendation_ui_type)for(a=w(rj),c=a.next();!c.done;c=a.next())if(null!=b[c.value]){b=!0;break a}b=!1}return b?9:5}if(Fj(c))return 1;if("link"==c)return 4;if("fluid"==c){if(c="in-article"===b.google_ad_layout)c=P(208)||P(227)||a.location&&("#hffwroe2etop"==a.location.hash||"#hffwroe2etoq"==a.location.hash);return c?(Tj(b),1):8}if(27===b.google_reactive_ad_format)return Tj(b),1} 
function Uj(a,b,c,d,e){e=b.offsetWidth||(c.google_ad_resize||(void 0===e?!1:e))&&T(b,d,"width",K)||c.google_ad_width||0;(P(310)||d.location&&"#ooimne2e"==d.location.hash)&&4===a&&(c.google_ad_format="auto",a=1);var f=(f=Vj(a,e,b,c,d))?f:Gj(e,c.google_ad_format,d,b,c);f.a.X(d,c,b);ij(f,e,c);1!=a&&(a=f.a.height(),b.style.height=a+"px")} 
function Vj(a,b,c,d,e){var f=d.google_ad_height||T(c,e,"height",K);switch(a){case 5:return a=Ke(247,function(){return Ej(b,d.google_ad_format,e,c,d)}),f=a.l,a=a.m,!0===a&&b!=f&&Mh(e,c),!0===a?d.google_full_width_responsive_allowed=!0:(d.google_full_width_responsive_allowed=!1,d.gfwrnwer=a),tj(f,d);case 9:return wj(b,d);case 4:return a=Qj(b,e,c,d),Pj(a,Th(e,c),f);case 8:return Aj(b,e,c,f,d);case 10:return Rj(b,e,c,f,d)}}function Tj(a){a.google_ad_format="auto";a.armr=3};function X(a){this.f=[];this.b=a||window;this.a=0;this.c=null;this.g=0}var Wj;m=X.prototype;m.Fa=function(a,b){0!=this.a||0!=this.f.length||b&&b!=window?this.na(a,b):(this.a=2,this.wa(new Xj(a,window)))};m.na=function(a,b){this.f.push(new Xj(a,b||this.b));Yj(this)};m.Ma=function(a){this.a=1;if(a){var b=Le(188,Ja(this.va,this,!0));this.c=this.b.setTimeout(b,a)}};m.va=function(a){a&&++this.g;1==this.a&&(null!=this.c&&(this.b.clearTimeout(this.c),this.c=null),this.a=0);Yj(this)}; 
m.Ta=function(){return!(!window||!Array)};m.Ha=function(){return this.g};function Yj(a){var b=Le(189,Ja(a.Ua,a));a.b.setTimeout(b,0)}m.Ua=function(){if(0==this.a&&this.f.length){var a=this.f.shift();this.a=2;var b=Le(190,Ja(this.wa,this,a));a.a.setTimeout(b,0);Yj(this)}};m.wa=function(a){this.a=0;a.b()};function Zj(a){try{return a.sz()}catch(b){return!1}}function ak(a){return!!a&&("object"===typeof a||"function"===typeof a)&&Zj(a)&&Gd(a.nq)&&Gd(a.nqa)&&Gd(a.al)&&Gd(a.rl)} 
function bk(){if(Wj&&Zj(Wj))return Wj;var a=bi(),b=a.google_jobrunner;return ak(b)?Wj=b:a.google_jobrunner=Wj=new X(a)}function ck(a,b){bk().nq(a,b)}function dk(a,b){bk().nqa(a,b)}X.prototype.nq=X.prototype.Fa;X.prototype.nqa=X.prototype.na;X.prototype.al=X.prototype.Ma;X.prototype.rl=X.prototype.va;X.prototype.sz=X.prototype.Ta;X.prototype.tc=X.prototype.Ha;function Xj(a,b){this.b=a;this.a=b};function ek(a,b){var c=Pd(b);if(c){c=M(c);var d=Rc(a,b)||{},e=d.direction;if("0px"===d.width&&"none"!=d.cssFloat)return-1;if("ltr"===e&&c)return Math.floor(Math.min(1200,c-a.getBoundingClientRect().left));if("rtl"===e&&c)return a=b.document.body.getBoundingClientRect().right-a.getBoundingClientRect().right,Math.floor(Math.min(1200,c-a-Math.floor((c-b.document.body.clientWidth)/2)))}return-1};var fk={},gk=(fk.google_ad_modifications=!0,fk.google_analytics_domain_name=!0,fk.google_analytics_uacct=!0,fk.google_pause_ad_requests=!0,fk);function hk(a,b,c){c=void 0===c?document:c;c=void 0===c?document:c;b=kc(b,5)?c.cookie:null;return null===b?null:(new Cc({cookie:b})).get(a)||""};function ik(a){this.a=a;this.b=0}function jk(a,b){if(hk("__gads",b,a.a.document))return!0;var c=a.a.document;c=void 0===c?document:c;kc(b,5)&&(new Cc(c)).set("GoogleAdServingTest","Good",void 0);if(c="Good"===hk("GoogleAdServingTest",b,a.a.document))a=a.a.document,a=void 0===a?document:a,kc(b,5)&&(b=new Cc(a),b.get("GoogleAdServingTest"),b.set("GoogleAdServingTest","",{sa:0,path:void 0,domain:void 0}));return c};var kk=/^\.google\.(com?\.)?[a-z]{2,3}$/,lk=/\.(cn|com\.bi|do|sl|ba|by|ma|am)$/;function mk(a){return kk.test(a)&&!lk.test(a)}var nk=x;function ok(a){a="https://adservice"+(a+"/adsid/integrator.js");var b=["domain="+encodeURIComponent(x.location.hostname)];Y[3]>=La()&&b.push("adsid="+encodeURIComponent(Y[1]));return a+"?"+b.join("&")}var Y,Z; 
function pk(){nk=x;Y=nk.googleToken=nk.googleToken||{};var a=La();Y[1]&&Y[3]>a&&0<Y[2]||(Y[1]="",Y[2]=-1,Y[3]=-1,Y[4]="",Y[6]="");Z=nk.googleIMState=nk.googleIMState||{};mk(Z[1])||(Z[1]=".google.com");Array.isArray(Z[5])||(Z[5]=[]);"boolean"!==typeof Z[6]&&(Z[6]=!1);Array.isArray(Z[7])||(Z[7]=[]);"number"!==typeof Z[8]&&(Z[8]=0)} 
var qk={fa:function(){return 0<Z[8]},Oa:function(){Z[8]++},Pa:function(){0<Z[8]&&Z[8]--},Qa:function(){Z[8]=0},Ya:function(){return!1},Ga:function(){return Z[5]},Ea:function(a){try{a()}catch(b){x.setTimeout(function(){throw b;},0)}},Na:function(){if(!qk.fa()){var a=x.document,b=function(e){e=ok(e);a:{try{var f=va();break a}catch(g){}f=void 0}Vi(a,e,f);f=a.createElement("script");f.type="text/javascript";f.onerror=function(){return x.processGoogleToken({},2)};e=Ic(e);f.src=ob(e);Wb(f);try{(a.head|| 
a.body||a.documentElement).appendChild(f),qk.Oa()}catch(g){}},c=Z[1];b(c);".google.com"!=c&&b(".google.com");b={};var d=(b.newToken="FBT",b);x.setTimeout(function(){return x.processGoogleToken(d,1)},1E3)}}}; 
function rk(){x.processGoogleToken=x.processGoogleToken||function(a,b){var c=a;c=void 0===c?{}:c;b=void 0===b?0:b;a=c.newToken||"";var d="NT"==a,e=parseInt(c.freshLifetimeSecs||"",10),f=parseInt(c.validLifetimeSecs||"",10),g=c["1p_jar"]||"";c=c.pucrd||"";pk();1==b?qk.Qa():qk.Pa();var h=nk.googleToken=nk.googleToken||{},k=0==b&&a&&"string"===typeof a&&!d&&"number"===typeof e&&0<e&&"number"===typeof f&&0<f&&"string"===typeof g;d=d&&!qk.fa()&&(!(Y[3]>=La())||"NT"==Y[1]);var l=!(Y[3]>=La())&&0!=b;if(k|| 
d||l)d=La(),e=d+1E3*e,f=d+1E3*f,1E-5>Math.random()&&yd(x,"https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err="+b),h[5]=b,h[1]=a,h[2]=e,h[3]=f,h[4]=g,h[6]=c,pk();if(k||!qk.fa()){b=qk.Ga();for(a=0;a<b.length;a++)qk.Ea(b[a]);b.length=0}};pk();Y[3]>=La()&&Y[2]>=La()||qk.Na()};function sk(a){a.google_sa_impl&&!a.document.getElementById("google_shimpl")&&(a.google_sa_queue=null,a.google_sl_win=null,a.google_sa_impl=null)}function tk(a){var b=J;a=void 0===a?"":a;sk(b);b.google_sa_queue||(b.google_sa_queue=[],b.google_sl_win=b,b.google_process_slots=function(){return uk(b)},a=vk(b,a),Qc(b.document,Ic(a),P(356)).id="google_shimpl")} 
var uk=Le(215,function(a){var b=a.google_sa_queue,c=b.shift();a.google_sa_impl||Me("shimpl",{t:"no_fn"});"function"===typeof c&&Ke(216,c);b.length&&a.setTimeout(function(){return uk(a)},0)});function wk(a,b,c){a.google_sa_queue=a.google_sa_queue||[];a.google_sa_impl?c(b):a.google_sa_queue.push(b)}function xk(){switch(Dg(1008)){case 1:return"/show_ads_impl_exp.js";case 2:return"/show_ads_impl_with_ama.js";default:return""}} 
function vk(a,b){var c="/show_ads_impl.js";c=void 0===c?"/show_ads_impl.js":c;var d=xk();c=!d||P(1006)&&!ud?c:d;a=yk(a,b);return Ud("/pagead/js/"+sd()+"/r20190131"+c+a)} 
function yk(a,b){if(Eg())return"?"+Eg();if(P(357))return"?"+a.location.host;if(ud&&P(375)){b||(b=a.google_ad_client?a.google_ad_client:(b=a.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]'))?b.getAttribute("data-ad-client"):(b=a.document.querySelector(".adsbygoogle[data-ad-client]"))?b.getAttribute("data-ad-client"):"");if(b){a=["client",b,"plah",a.location.host,"amaexp",1];b=[];for(var c=0;c<a.length;c+=2)Lc(a[c],a[c+1],b);return"?"+b.join("&")}throw Error("PublisherCodeNotFoundForAma"); 
}return""} 
function zk(a,b,c,d){return function(){var e=!1;d&&bk().al(3E4);try{if(Mc(a.document.getElementById(b).contentWindow)){var f=a.document.getElementById(b).contentWindow,g=f.document;g.body&&g.body.firstChild||(/Firefox/.test(navigator.userAgent)?g.open("text/html","replace"):g.open(),f.google_async_iframe_close=!0,g.write(c))}else{var h=a.document.getElementById(b).contentWindow;f=c;f=String(f);g=['"'];for(var k=0;k<f.length;k++){var l=f.charAt(k),n=l.charCodeAt(0),p=k+1,v;if(!(v=Xb[l])){if(31<n&& 
127>n)var r=l;else{var A=void 0,t=l;if(t in Yb)r=Yb[t];else if(t in Xb)r=Yb[t]=Xb[t];else{var F=t.charCodeAt(0);if(31<F&&127>F)A=t;else{if(256>F){if(A="\\x",16>F||256<F)A+="0"}else A="\\u",4096>F&&(A+="0");A+=F.toString(16).toUpperCase()}r=Yb[t]=A}}v=r}g[p]=v}g.push('"');h.location.replace("javascript:"+g.join(""))}e=!0}catch(Da){h=bi().google_jobrunner,ak(h)&&h.rl()}e&&(e=bj("google_async_rrc",c),(new aj(a)).set(b,zk(a,b,e,!1)))}} 
function Ak(a){if(!ej)a:{for(var b=[x.top],c=[],d=0,e;e=b[d++];){c.push(e);try{if(e.frames)for(var f=e.frames.length,g=0;g<f&&1024>b.length;++g)b.push(e.frames[g])}catch(k){}}for(b=0;b<c.length;b++)try{var h=c[b].frames.google_esf;if(h){ej=h;break a}}catch(k){}ej=null}if(!ej){if(/[^a-z0-9-]/.test(a))return null;c=Ec(document,"IFRAME");c.id="google_esf";c.name="google_esf";h=Td("googleads.g.doubleclick.net",["/pagead/html/",sd(),"/r20190131/zrt_lookup.html#", 
encodeURIComponent("")].join(""));c.src=h;c.style.display="none";c.setAttribute("data-ad-client",Yd(a));return c}return null} 
function Bk(a,b,c){Ck(a,b,c,function(d,e,f){d=d.document;for(var g=e.id,h=0;!g||d.getElementById(g+"_anchor");)g="aswift_"+h++;e.id=g;e.name=g;g=Number(f.google_ad_width||0);h=Number(f.google_ad_height||0);var k=f.ds||"";k&&(k+=u(k,"endsWith").call(k,";")?"":";");var l="",n="";if(!f.google_enable_single_iframe){l=["<iframe"];for(p in e)e.hasOwnProperty(p)&&("onload"===p&&P(381)?(n=e.id,n="<script nonce='"+va()+"'>"+lb(kb(new eb(fb,"function(iframeId, globalVarName){document.getElementById(iframeId).addEventListener('onload', function() {var i=this.id,s=window[globalVarName],H=s&&s.handlers,h=H&&H[i],w=this.contentWindow,d;try{d=w.document}catch(e){}if(h&&d&&(!d.body||!d.body.firstChild)){if(h.call){setTimeout(h,0)}else if(h.match){try{h=s.upd(h,i)}catch(e){}w.location.replace(h)}}});}"), 
n,"google_iframe_oncopy")).toString()+"\x3c/script>"):l.push(p+"="+e[p]));l.push('style="left:0;position:absolute;top:0;border:0px;width:'+(g+"px;height:"+(h+'px;"')));l.push("></iframe>");l=l.join(" ")}var p=e.id;var v="";v=void 0===v?"":v;g="border:none;height:"+h+"px;margin:0;padding:0;position:relative;visibility:visible;width:"+(g+"px;background-color:transparent;");p=['<ins id="'+(p+'_expand"'),' style="display:inline-table;'+g+(void 0===k?"":k)+'"',v?' data-ad-slot="'+v+'">':">",'<ins id="'+ 
(p+'_anchor" style="display:block;')+g+'">',l,"</ins></ins>"].join("")+n;16==f.google_reactive_ad_format?(f=d.createElement("div"),d=Gc(p),Vb(f,d),c.appendChild(f.firstChild)):(f=Gc(p),Vb(c,f));return e.id})} 
function Dk(a){a=kb(new eb(fb,"function(showAdsImplFn,slotVarsMap,iframeId){window.parent[showAdsImplFn]({iframeWin: window,pubWin: window.parent,vars: window.parent[slotVarsMap][iframeId]});}"),"google_sa_impl","google_sv_map",a);return"<script nonce='"+va()+"'>"+lb(a).toString()+"\x3c/script>"} 
function Ck(a,b,c,d){var e=b.google_ad_width,f=b.google_ad_height;if(!bc&&!cc||P(325))b.google_enable_single_iframe=!0;var g={};null!=e&&(g.width=e&&'"'+e+'"');null!=f&&(g.height=f&&'"'+f+'"');g.frameborder='"0"';g.marginwidth='"0"';g.marginheight='"0"';g.vspace='"0"';g.hspace='"0"';g.allowtransparency='"true"';g.scrolling='"no"';g.allowfullscreen='"true"';g.onload='"'+cj+'"';d=d(a,g,b);Ek(a,c,b);(c=Ak(b.google_ad_client))&&a.document.documentElement.appendChild(c);c=Na;e=(new Date).getTime();b.google_lrv= 
sd();b.google_async_iframe_id=d;b.google_unique_id=Jd(a);b.google_start_time=c;b.google_bpp=e>c?e-c:1;b.google_async_rrc=0;a.google_sv_map=a.google_sv_map||{};a.google_sv_map[d]=b;if(b.google_enable_single_iframe){var h={pubWin:a,iframeWin:null,vars:b};wk(a,function(){a.google_sa_impl(h)},a.document.getElementById(d+"_anchor")?ck:dk)}else b=["<!doctype html><html><body>","<script nonce='"+va()+"'>",lb(kb(new eb(fb,"function(singleLoadWindow,iframeStartTime,asyncIframeId,iframeId){window[singleLoadWindow]=window.parent;window[iframeStartTime]=new Date().getTime();window[asyncIframeId]=iframeId;}"), 
"google_sl_win","google_iframe_start_time","google_async_iframe_id",d)).toString(),"\x3c/script>",Dk(d),"</body></html>"].join(""),wk(a,zk(a,d,b,!0),a.document.getElementById(d)?ck:dk)} 
function Ek(a,b,c){var d=c.google_ad_output,e=c.google_ad_format,f=c.google_ad_width||0,g=c.google_ad_height||0;e||"html"!=d&&null!=d||(e=f+"x"+g);d=!c.google_ad_slot||c.google_override_format||!Ac[c.google_ad_width+"x"+c.google_ad_height]&&"aa"==c.google_loader_used;e&&d?e=e.toLowerCase():e="";c.google_ad_format=e;if("number"!==typeof c.google_reactive_sra_index||!c.google_ad_unit_key){e=[c.google_ad_slot,c.google_orig_ad_format||c.google_ad_format,c.google_ad_type,c.google_orig_ad_width||c.google_ad_width, 
c.google_orig_ad_height||c.google_ad_height];d=[];f=0;for(g=b;g&&25>f;g=g.parentNode,++f)9===g.nodeType?d.push(""):d.push(g.id);(d=d.join())&&e.push(d);c.google_ad_unit_key=Yc(e.join(":")).toString();var h=void 0===h?!1:h;e=[];for(d=0;b&&25>d;++d){f="";void 0!==h&&h||(f=(f=9!==b.nodeType&&b.id)?"/"+f:"");a:{if(b&&b.nodeName&&b.parentElement){g=b.nodeName.toString().toLowerCase();for(var k=b.parentElement.childNodes,l=0,n=0;n<k.length;++n){var p=k[n];if(p.nodeName&&p.nodeName.toString().toLowerCase()=== 
g){if(b===p){g="."+l;break a}++l}}}g=""}e.push((b.nodeName&&b.nodeName.toString().toLowerCase())+f+g);b=b.parentElement}h=e.join()+":";b=[];if(a)try{var v=a.parent;for(e=0;v&&v!==a&&25>e;++e){var r=v.frames;for(d=0;d<r.length;++d)if(a===r[d]){b.push(d);break}a=v;v=a.parent}}catch(A){}c.google_ad_dom_fingerprint=Yc(h+b.join()).toString()}}var Fk=!ud; 
function Gk(a){var b=a.value;a="https://partner.googleadservices.com/gampad/cookie.js?domain="+a.domain+"&callback=_gfp_s_&client="+a.Va;b&&(a+="&cookie="+encodeURIComponent(b));return a} 
function Hk(a){var b=J;var c=void 0===c?Gk:c;var d=b._gfp_a_;if("boolean"!==typeof d)throw Error("Illegal value of _gfp_a_: "+d);if(d){d=b._gfp_p_;if("boolean"!==typeof d)throw Error("Illegal value of _gfp_p_: "+d);if(!d){if(P(225)){var e=new qd;nc(e,5,!0);var f=new ik(b);0===f.b&&(f.b=jk(f,e)?2:1);2===f.b&&(b._gfp_s_=Le(629,function(g){delete b._gfp_s_;if(!g)throw Error("Invalid JSONP response");if(g=g._cookies_){var h=g[0];if(!h)throw Error("Invalid JSONP response");var k=h._value_,l=h._expires_; 
g=h._path_;h=h._domain_;if("string"!==typeof k||"number"!==typeof l||"string"!==typeof g||"string"!==typeof h)throw Error("Invalid JSONP response");var n=new sc;k=nc(n,1,k);l=nc(k,2,l);g=nc(l,3,g);g=nc(g,4,h);h={sa:D(g,2)-f.a.Date.now()/1E3,path:D(g,3),domain:D(g,4),Ra:!1};l=D(g,1);k=f.a.document;k=void 0===k?document:k;kc(e,5)&&(new Cc(k)).set("__gads",l,h);kc(e,5)&&.01>f.a.Math.random()&&(h=hk("__gads",e,f.a.document),Ad({domain:D(g,4),host:f.a.location.host,success:h===D(g,1)?"1":"0"},"gfp_cw_status"))}}), 
Qc(b.document,c({domain:b.location.hostname,Va:a,value:hk("__gads",e,f.a.document)||""})))}b._gfp_p_=!0}}};function Ik(a,b){a=a.attributes;for(var c=a.length,d=0;d<c;d++){var e=a[d];if(/data-/.test(e.name)){var f=wb(e.name.replace("data-matched-content","google_content_recommendation").replace("data","google").replace(/-/g,"_"));if(!b.hasOwnProperty(f)){e=e.value;var g={};g=(g.google_reactive_ad_format=rd,g.google_allow_expandable_ads=ed,g);e=g.hasOwnProperty(f)?g[f](e,null):e;null!==e&&(b[f]=e)}}}} 
function Jk(a){if(a=wd(a))switch(a.data&&a.data.autoFormat){case "rspv":return 13;case "mcrspv":return 15;default:return 14}else return 12} 
function Kk(a,b,c){Ik(a,b);if(c.document&&c.document.body&&!Sj(c,b)&&!b.google_reactive_ad_format){var d=parseInt(a.style.width,10),e=ek(a,c);if(0<e&&d>e){var f=parseInt(a.style.height,10);d=!!Ac[d+"x"+f];var g=e;if(d){var h=Bc(e,f);if(h)g=h,b.google_ad_format=h+"x"+f+"_0ads_al";else throw new L("No slot size for availableWidth="+e);}b.google_ad_resize=!0;b.google_ad_width=g;d||(b.google_ad_format=null,b.google_override_format=!0);e=g;a.style.width=e+"px";f=Gj(e,"auto",c,a,b);g=e;f.a.X(c,b,a);ij(f, 
g,b);f=f.a;b.google_responsive_formats=null;f.minWidth()>e&&!d&&(b.google_ad_width=f.minWidth(),a.style.width=f.minWidth()+"px")}}d=a.offsetWidth||T(a,c,"width",K)||b.google_ad_width||0;e=Ka(Gj,d,"auto",c,a,b,!1,!0);f=Pd(c)||c;g=b.google_ad_client;f=f.location&&"#ftptohbh"===f.location.hash?2:Qd(f.location,"google_responsive_slot_debug")||Qd(f.location,"google_responsive_slot_preview")||P(217)?1:P(218)?2:Ue(f,1,g)?1:0;if(g=0!==f)b:if(!(488>M(c)||P(216))||b.google_reactive_ad_format||Sj(c,b)||Ah(a, 
b))g=!1;else{for(g=a;g;g=g.parentElement){h=Rc(g,c);if(!h){b.gfwrnwer=18;g=!1;break b}if(!Ua(["static","relative"],h.position)){b.gfwrnwer=17;g=!1;break b}}if(!P(216)&&(g=Fh(c,a,d,.3,b),!0!==g)){b.gfwrnwer=g;g=!1;break b}g=Od(c)==c?!0:!1}g?(b.google_resizing_allowed=!0,b.ovlp=!0,2===f?(f={},ij(e(),d,f),b.google_resizing_width=f.google_ad_width,b.google_resizing_height=f.google_ad_height,f.ds&&(b.ds=f.ds),b.iaaso=!1):(b.google_ad_format="auto",b.iaaso=!0,b.armr=1),d=!0):d=!1;if(e=Sj(c,b))Uj(e,a,b, 
c,d);else{if(Ah(a,b)){if(d=Rc(a,c))a.style.width=d.width,a.style.height=d.height,zh(d,b);b.google_ad_width||(b.google_ad_width=a.offsetWidth);b.google_ad_height||(b.google_ad_height=a.offsetHeight);b.google_loader_features_used=256;b.google_responsive_auto_format=Jk(c)}else zh(a.style,b);c.location&&"#gfwmrp"==c.location.hash||12==b.google_responsive_auto_format&&"true"==b.google_full_width_responsive?Uj(10,a,b,c,!1):.01>Math.random()&&12==b.google_responsive_auto_format&&(a=Gh(a.offsetWidth||parseInt(a.style.width, 
10)||b.google_ad_width,c,a,b),!0!==a?(b.efwr=!1,b.gfwrnwer=a):b.efwr=!0)}};function Lk(a){this.b=a;this.a=null}qa(Lk,vd);function Mk(a){this.b=a;this.a=null;this.a||(this.b.googlefc?this.a=this.b:this.a=fd(this.b,"googlefcPresent"))}qa(Mk,vd);function Nk(a){this.b=a;this.a=null;this.f={};this.g=0;this.c=null}qa(Nk,vd); 
Nk.prototype.addEventListener=function(a){Ok(this,"addEventListener",function(b,c){b=c?b:{};b.internalErrorState=void 0!==b.tcString&&"string"!==typeof b.tcString||void 0!==b.gdprApplies&&"boolean"!==typeof b.gdprApplies||void 0!==b.listenerId&&"number"!==typeof b.listenerId||void 0!==b.addtlConsent&&"string"!==typeof b.addtlConsent?2:b.cmpStatus&&"error"!==b.cmpStatus?0:3;0!==b.internalErrorState&&(b.tcString="tcunavailable");a(b)})}; 
Nk.prototype.removeEventListener=function(a){a&&a.listenerId&&Ok(this,"removeEventListener",null,a.listenerId)};function Ok(a,b,c,d){c||(c=function(){});if("function"===typeof a.b.__tcfapi)a=a.b.__tcfapi,a(b,2,c,d);else if(Pk(a)){Qk(a);var e=++a.g;a.f[e]=c;a.a&&(c={},a.a.postMessage((c.__tcfapiCall={command:b,version:2,callId:e,parameter:d},c),"*"))}else c({},!1)}function Pk(a){if(a.a)return a.a;a.a=fd(a.b,"__tcfapiLocator");return a.a} 
function Qk(a){a.c||(a.c=function(b){try{var c;"string"===typeof b.data?c=JSON.parse(b.data):c=b.data;var d=c.__tcfapiReturn;a.f[d.callId](d.returnValue,d.success)}catch(e){}},Dc(a.b,"message",a.c))};function Rk(a,b,c){var d=window;return function(){var e=oe(),f=3;try{var g=b.apply(this,arguments)}catch(k){f=13;if(c)return c(a,k),g;throw k;}finally{if(d.google_measure_js_timing&&e){var h=oe()||0;e={label:a.toString(),value:e,duration:h-e,type:f};f=d.google_js_reporting_queue=d.google_js_reporting_queue||[];2048>f.length&&f.push(e)}}return g}}function Sk(a,b){return Rk(a,b,function(c,d){(new Ae).F(c,d)})};function Tk(a,b){return null==b?"&"+a+"=null":"&"+a+"="+Math.floor(b)}var Uk=new q.Set;function Vk(a){a=a.id;return Uk.has(a)||u(a,"startsWith").call(a,"google_ads_iframe_")||u(a,"startsWith").call(a,"aswift")}function Wk(a,b){b=void 0===b?4:b;if(!a)return!1;if(Vk(a))return!0;if(0>=b)return!1;a=w(a.childNodes);for(var c=a.next();!c.done;c=a.next())if(Wk(c.value,b-1))return!0;return!1} 
function Xk(){this.J=this.O=this.W=this.b=this.o=this.i=this.f=0;this.K=!1;this.s=this.g=this.c=0;var a=document.querySelector("[data-google-query-id]");this.T=a?a.getAttribute("data-google-query-id"):null;this.D=null;this.S=!1;this.a=Sk(641,this.a.bind(this))}qa(Xk,vd); 
function Yk(){var a=new Xk;if(P(203)&&!window.google_plmetrics&&window.PerformanceObserver){window.google_plmetrics=!0;for(var b=w(["layout-shift","largest-contentful-paint","first-input","longtask"]),c=b.next();!c.done;c=b.next())c=c.value,Zk(a).observe({type:c,buffered:!P(240)});document.addEventListener("unload",a.a);document.addEventListener("visibilitychange",a.a)}} 
function Zk(a){a.D||(a.D=new PerformanceObserver(Sk(640,function(b){var c=!1;b=w(b.getEntries());for(var d=b.next();!d.done;d=b.next())switch(d=d.value,d.entryType){case "layout-shift":if(!c){try{if("undefined"!==typeof googletag&&googletag.pubads){var e=googletag.pubads();Uk.clear();for(var f=w(e.getSlots()),g=f.next();!g.done;g=f.next())Uk.add(g.value.getSlotId().getDomId())}}catch(n){}c=!0}var h=a;if(!d.hadRecentInput&&(!P(241)||.01<d.value)){h.f+=Number(d.value);Number(d.value)>h.i&&(h.i=Number(d.value)); 
h.o+=1;a:{if(d.sources){var k=w(d.sources);for(var l=k.next();!l.done;l=k.next())if(Wk(l.value.node)){k=!0;break a}}k=!1}k&&(h.b+=d.value,h.W++)}break;case "largest-contentful-paint":a.O=Math.floor(d.renderTime||d.loadTime);break;case "first-input":a.J=Number((d.processingStart-d.startTime).toFixed(3));a.K=!0;break;case "longtask":a.c+=d.duration,d.duration>a.g&&(a.g=d.duration),a.s+=1}})));return a.D} 
Xk.prototype.a=function(){var a;if(a=!this.S)a=document,a=2===({visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0);if(a){this.S=!0;Zk(this).takeRecords();a="https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";window.LayoutShift&&(a+="&cls="+this.f.toFixed(3),a+="&mls="+this.i.toFixed(3),a+=Tk("nls",this.o),window.LayoutShiftAttribution&&(a+="&cas="+this.b.toFixed(3),a+=Tk("nas",this.W)));window.LargestContentfulPaint&& 
(a+=Tk("lcp",this.O));window.PerformanceEventTiming&&this.K&&(a+=Tk("fid",this.J));window.PerformanceLongTaskTiming&&(a+=Tk("cbt",this.c),a+=Tk("mbt",this.g),a+=Tk("nlt",this.s));for(var b=0,c=w(document.getElementsByTagName("iframe")),d=c.next();!d.done;d=c.next())Vk(d.value)&&b++;a+=Tk("nif",b);a+=Tk("ifi",Id(window));b=dg.h().a();a+="&eid="+encodeURIComponent(b.join());a+="&top="+(x===x.top?1:0);a+=this.T?"&qqid="+encodeURIComponent(this.T):Tk("pvsid",od());window.fetch(a,{keepalive:!0,credentials:"include", 
redirect:"follow",method:"get",mode:"no-cors"})}};var $k=["https://adservice.google.com"];function al(a){this.f=$k;this.a=2;this.b=a;this.c=od()}qa(al,vd); 
function bl(a){!document.hasTrustToken||3<=a.a||(a.a=3,Oa(a.f,function(b){window.fetch(b+"/tt/r",{keepalive:!0,redirect:"follow",method:"get",trustToken:{type:"srr-token-redemption",issuer:b,refreshPolicy:"none"}}).then(function(c){if(!c.ok)throw Error(c.status+": Network response was not ok!");a.a=5;a.b({issuer:b,state:5})}).catch(function(c){if(c&&"NoModificationAllowedError"===c.name)a.a=5,a.b({issuer:b,state:5});else if(4>a.a){a.b({issuer:null,state:4});var d=dg.h().a();Ad({pvsid:a.c,issuer:b, 
eid:d.join(),err:c?c.message:null},"trusttoken")}})}))};function cl(a){C(this,a,dl,null)}y(cl,B);var dl=[6];var el=["platform","platformVersion","architecture","model","uaFullVersion"];function fl(){var a=J;return a.navigator&&a.navigator.userAgentData&&"function"===typeof a.navigator.userAgentData.getHighEntropyValues?a.navigator.userAgentData.getHighEntropyValues(el).then(function(b){var c=new cl;c=nc(c,1,b.platform);c=nc(c,2,b.platformVersion);c=nc(c,3,b.architecture);c=nc(c,4,b.model);return nc(c,5,b.uaFullVersion)}):null};var gl=null;function hl(a){return Nd.test(a.className)&&"done"!=a.getAttribute("data-adsbygoogle-status")}function il(a,b){a.setAttribute("data-adsbygoogle-status","done");jl(a,b)} 
function kl(){if(!(.01<Math.random())){var a=.5<Math.random(),b=ub({id:"rmvasftr",type:a}),c=Ec(document,"IFRAME");c.style.display="none";c.src=ob(b).toString();if(a){var d=Ec(document,"IFRAME");d.addEventListener("load",function(){d.contentWindow.document.documentElement.appendChild(c)});d.style.display="none";document.documentElement.appendChild(d)}else document.documentElement.appendChild(c)}} 
function jl(a,b){var c=window,d=Md();d.google_spfd||(d.google_spfd=Kk);(d=b.google_reactive_ads_config)||Kk(a,b,c);if(!ll(a,b,c)){d||(c.google_lpabyc=$i(c,a));if(d){d=d.page_level_pubvars||{};if(I(J).page_contains_reactive_tag&&!I(J).allow_second_reactive_tag){if(d.pltais){vc(!1);return}throw new L("Only one 'enable_page_level_ads' allowed per page.");}I(J).page_contains_reactive_tag=!0;vc(7===d.google_pgb_reactive)}else Hd(c);Fd(gk,function(e,f){b[f]=b[f]||c[f]});b.google_loader_used="aa";b.google_reactive_tag_first= 
1===(I(J).first_tag_on_page||0);Ke(164,function(){Bk(c,b,a)})}} 
function ll(a,b,c){var d=b.google_reactive_ads_config;if(d){var e=d.page_level_pubvars;var f=(Ca(e)?e:{}).google_tag_origin}e="string"===typeof a.className&&/(\W|^)adsbygoogle-noablate(\W|$)/.test(a.className);var g=b.google_ad_slot;var h=f||b.google_tag_origin;f=I(c);wc(f.ad_whitelist||[],g,h)?g=null:(h=f.space_collapsing||"none",g=(g=wc(f.ad_blacklist||[],g))?{ka:!0,Aa:g.space_collapsing||h}:f.remove_ads_by_default?{ka:!0,Aa:h,ca:f.ablation_viewport_offset}:null);if(g&&g.ka&&"on"!=b.google_adtest&& 
!e&&(e=Sh(a,c),!g.ca||g.ca&&(e||0)>=g.ca))return a.className+=" adsbygoogle-ablated-ad-slot",c=c.google_sv_map=c.google_sv_map||{},d=Ea(a),c[b.google_element_uid]=b,a.setAttribute("google_element_uid",d),"slot"==g.Aa&&(null!==dd(a.getAttribute("width"))&&a.setAttribute("width",0),null!==dd(a.getAttribute("height"))&&a.setAttribute("height",0),a.style.width="0px",a.style.height="0px"),!0;if((e=Rc(a,c))&&"none"==e.display&&!("on"==b.google_adtest||0<b.google_reactive_ad_format||d))return c.document.createComment&& 
a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")),!0;a=null==b.google_pgb_reactive||3===b.google_pgb_reactive;return 1!==b.google_reactive_ad_format&&8!==b.google_reactive_ad_format||!a?!1:(x.console&&x.console.warn("Adsbygoogle tag with data-reactive-ad-format="+b.google_reactive_ad_format+" is deprecated. Check out page-level ads at https://www.google.com/adsense"),!0)} 
function ml(a){var b=document.getElementsByTagName("INS");for(var c=0,d=b[c];c<b.length;d=b[++c]){var e=d;if(hl(e)&&"reserved"!=e.getAttribute("data-adsbygoogle-status")&&(!a||d.id==a))return d}return null}function nl(a){if(a&&a.shift)try{for(var b,c=20;0<a.length&&(b=a.shift())&&0<c;)ol(b),--c}catch(d){throw window.setTimeout(pl,0),d;}}function ql(){var a=Ec(document,"INS");a.className="adsbygoogle";a.className+=" adsbygoogle-noablate";hd(a);return a} 
function rl(a){var b={};Fd(Pe,function(e,f){!1===a.enable_page_level_ads?b[f]=!1:a.hasOwnProperty(f)&&(b[f]=a[f])});Ca(a.enable_page_level_ads)&&(b.page_level_pubvars=a.enable_page_level_ads);var c=ql();zc.body.appendChild(c);var d={};d=(d.google_reactive_ads_config=b,d.google_ad_client=a.google_ad_client,d);P(365)&&(d.google_pub_requests_npa=!!I(J).pub_requests_npa);d.google_pause_ad_requests=!!I(J).pause_ad_requests;il(c,d)} 
function sl(a){function b(){return rl(a)}var c=void 0===c?J:c;var d=P(1001),e=Pd(c);if(!e&&!d)throw new L("Page-level tag does not work inside iframes.");Se(d?c:e).wasPlaTagProcessed=!0;var f=c.document;if(f.body||"complete"==f.readyState||"interactive"==f.readyState)b();else{var g=Xa(Le(191,b));Dc(f,"DOMContentLoaded",g);(new x.MutationObserver(function(h,k){f.body&&(g(),k.disconnect())})).observe(f,{childList:!0,subtree:!0})}} 
function ol(a){var b={};Ke(165,function(){tl(a,b)},function(c){c.client=c.client||b.google_ad_client||a.google_ad_client;c.slotname=c.slotname||b.google_ad_slot;c.tag_origin=c.tag_origin||b.google_tag_origin})}function ul(a){delete a.google_checked_head;Wc(a,function(b,c){yc[c]||(delete a[c],b=c.replace("google","data").replace(/_/g,"-"),x.console.warn("AdSense head tag doesn't support "+b+" attribute."))})} 
function vl(){var a=J,b=a.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');if(b){b.setAttribute("data-checked-head","true");var c=I(window);if(c.head_tag_slot_vars)throw new L("Only one AdSense head tag supported per page. The second tag is ignored.");var d={};Ik(b,d);ul(d);var e=bb(d);c.head_tag_slot_vars=e;b={};b=(b.google_ad_client=d.google_ad_client,b.enable_page_level_ads=d,b);a.adsbygoogle||(a.adsbygoogle=[]);a=a.adsbygoogle;a.loaded? 
a.push(b):a.splice(0,0,b);d.google_adbreak_test&&wl(e);Oe(function(){wl(e)})}} 
function tl(a,b){if(null==a)throw new L("push() called with no parameters.");if("object"!==typeof a||null==a||"string"!==typeof a.type&&"string"!==typeof a.sound){Na=(new Date).getTime();tk(a.google_ad_client);a:{if(void 0!=a.enable_page_level_ads){if("string"===typeof a.google_ad_client){var c=!0;break a}throw new L("'google_ad_client' is missing from the tag config.");}c=!1}if(c)xl(a,b);else if((c=a.params)&&Fd(c,function(e,f){b[f]=e}),"js"===b.google_ad_output)console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads."); 
else{a=yl(a.element);Ik(a,b);c=I(x).head_tag_slot_vars||{};Wc(c,function(e,f){b.hasOwnProperty(f)||(b[f]=e)});if(a.hasAttribute("data-require-head")&&!I(x).head_tag_slot_vars)throw new L("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");if(!b.google_ad_client)throw new L("Ad client is missing from the slot.");b.google_apsail=Ye(b.google_ad_client);var d=(c=0===(I(J).first_tag_on_page||0)&&Yi(b))&& 
Zi(c);c&&!d&&(xl(c),I(J).skip_next_reactive_tag=!0);0===(I(J).first_tag_on_page||0)&&(I(J).first_tag_on_page=2);P(371)||("_gfp_p_"in J||(J._gfp_p_=!1),Hk(b.google_ad_client));P(365)&&(b.google_pub_requests_npa=!!I(J).pub_requests_npa);b.google_pause_ad_requests=!!I(J).pause_ad_requests;il(a,b);c&&d&&zl(c)}}else null!=gl&&null==a.sound&&gl.handleAdBreak(a).catch(function(e){Be.F(730,e instanceof Error?e:Error(String(e)),void 0,void 0)})} 
function zl(a){pd(function(){Se(x).wasPlaTagProcessed||x.adsbygoogle&&x.adsbygoogle.push(a)})} 
function xl(a,b){if(I(J).skip_next_reactive_tag)I(J).skip_next_reactive_tag=!1;else{0===(I(J).first_tag_on_page||0)&&(I(J).first_tag_on_page=1);b&&a.tag_partner&&(uc(x,a.tag_partner),uc(b,a.tag_partner));a:if(!I(J).ama_ran_on_page){if(P(316))var c=null;else try{c=x.localStorage.getItem("google_ama_config")}catch(p){c=null}try{var d=c?new Wg(c?JSON.parse(c):null):null}catch(p){d=null}if(b=d)if(c=G(b,Yg,3),!c||D(c,1)<=Date.now())try{x.localStorage.removeItem("google_ama_config")}catch(p){mh(x,{lserr:1})}else{if(Zi(a)&& 
(c=eh(H(b,Zg,7)),!c||!kc(c,8)))break a;I(J).ama_ran_on_page=!0;(d=G(b,bh,13))&&1===D(d,1)&&(c=0,(d=G(d,ch,6))&&D(d,3)&&(c=D(d,3)||0),d=I(x),d.remove_ads_by_default=!0,d.space_collapsing="slot",d.ablation_viewport_offset=c);Xd(3,[b.a]);c=a.google_ad_client;d=nh(Ca(a.enable_page_level_ads)?a.enable_page_level_ads:{});P(1009)&&(d.google_reactive_ad_format=40);d=hh(jh,new gh(null,d));try{var e=eh(H(b,Zg,7)),f;if(f=e)b:{var g=D(e,2);if(g)for(var h=0;h<g.length;h++)if(1==g[h]){f=!0;break b}f=!1}if(f){if(D(e, 
4)){f={};var k=new gh(null,(f.google_package=D(e,4),f));d=hh(d,k)}var l=new Bi(c,b,e,d),n=new Hi;(new Mi(l,n)).start();n.b.then(Ka(Oi,x),Ka(Pi,x))}}catch(p){mh(x,{atf:-1})}}}sl(a)}}function yl(a){if(a){if(!hl(a)&&(a.id?a=ml(a.id):a=null,!a))throw new L("'element' has already been filled.");if(!("innerHTML"in a))throw new L("'element' is not a good DOM element.");}else if(a=ml(),!a)throw new L("All ins elements in the DOM with class=adsbygoogle already have ads in them.");return a} 
function Al(){var a=J,b=new Nk(a),c=new Lk(a),d=new Mk(a);a=a.__cmp?1:0;b="function"===typeof b.b.__tcfapi||null!=Pk(b)?1:0;var e;(e="function"===typeof c.b.__uspapi)||(c.a?c=c.a:(c.a=fd(c.b,"__uspapiLocator"),c=c.a),e=null!=c);Me("cmpMet",{tcfv1:a,tcfv2:b,usp:e?1:0,fc:d.a?1:0,ptt:9},Dg(62))}function pl(){He();Be.xa(Ne);Ke(166,Bl)} 
function Bl(){var a=xd(wd(J))||J;Jg(a);if(!z("Trident")&&!z("MSIE")||0<=Db(Ob(),11)){kl();Ce(P(84));P(345)||(pk(),mk(".google.co.in")&&(Z[1]=".google.co.in"),rk());P(312)&&bl(new al(function(e){J.google_trust_token_redemption_status=e}));P(363)&&(a=fl(),null!=a&&a.then(function(e){J.google_user_agent_client_hint=e.i()}));try{Yk()}catch(e){}if(a=Pd(x))a=Se(a),a.tagSpecificState[1]||(a.tagSpecificState[1]=new Qi);vl();a=window.adsbygoogle;if(!a||!a.loaded){Dg(62)&&Al();var b= 
{push:ol,loaded:!0};try{Object.defineProperty(b,"requestNonPersonalizedAds",{set:Cl}),Object.defineProperty(b,"pauseAdRequests",{set:Dl}),Object.defineProperty(b,"cookieOptions",{set:El}),Object.defineProperty(b,"onload",{set:Fl})}catch(e){}if(a)for(var c=w(["requestNonPersonalizedAds","pauseAdRequests","cookieOptions"]),d=c.next();!d.done;d=c.next())d=d.value,void 0!==a[d]&&(b[d]=a[d]);"_gfp_a_"in window||(window._gfp_a_=Fk);nl(a);window.adsbygoogle=b;a&&(b.onload=a.onload)}}} 
function Cl(a){if(P(365)){var b=!!Number(a);I(J).pub_requests_npa=b}else if(Number(a)){if((a=Pc())&&a.frames&&!a.frames.GoogleSetNPA)try{b=a.document;var c=new Fc(b),d=b.body||b.head&&b.head.parentElement;if(d){var e=Ec(c.a,"IFRAME");e.name="GoogleSetNPA";e.id="GoogleSetNPA";e.setAttribute("style","display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;");d.appendChild(e)}}catch(f){}}else(b=Pc().document.getElementById("GoogleSetNPA"))&&b.parentNode&&b.parentNode.removeChild(b)} 
function Dl(a){Number(a)?I(J).pause_ad_requests=!0:(I(J).pause_ad_requests=!1,a=function(){if(!I(J).pause_ad_requests){var b=Md(),c=Md();try{if(zc.createEvent){var d=zc.createEvent("CustomEvent");d.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event",!1,!1,"");b.dispatchEvent(d)}else if(Gd(c.CustomEvent)){var e=new c.CustomEvent("adsbygoogle-pub-unpause-ad-requests-event",{bubbles:!1,cancelable:!1,detail:""});b.dispatchEvent(e)}else if(Gd(c.Event)){var f=new Event("adsbygoogle-pub-unpause-ad-requests-event", 
{bubbles:!1,cancelable:!1});b.dispatchEvent(f)}}catch(g){}}},x.setTimeout(a,0),x.setTimeout(a,1E3))}function El(a){switch(a){case 0:a=!0;break;case 1:a=!1;break;case 2:a=Fk;break;default:throw Error("Illegal value of cookieOptions: "+a);}J._gfp_a_=a;"_gfp_p_"in J&&!P(371)&&(a=J.google_sv_map,Hk(a[Xc(a)].google_ad_client))}function Fl(a){Gd(a)&&window.setTimeout(a,0)} 
function wl(a){var b=Ud("/pagead/js/"+sd()+"/r20190131/slotcar_library.js");Ui(b).then(function(c){null==gl&&(c.init(a),gl=c)})};pl();}).call(this);

// Copyright 2012 Google Inc. All rights reserved.
(function(){

var data = {
"resource": {
  "version":"1",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__cid"
    }],
  "tags":[{
      "function":"__rep",
      "once_per_event":true,
      "vtp_containerId":["macro",1],
      "tag_id":1
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"gtm.js"
    }],
  "rules":[
    [["if",0],["add",0]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ca="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var fa;a:{var ha={Ff:!0},ia={};try{ia.__proto__=ha;fa=ia.Ff;break a}catch(a){}fa=!1}da=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ja=da,ka=function(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ja)ja(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},ma=this||self,oa=/^[\w+/_-]+[=]{0,2}$/,pa=null,qa=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a},ra=function(a){return a};var sa=function(){},ua=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},va=function(a){return"number"==typeof a&&!isNaN(a)},xa=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},ya=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},za=function(a,b){if(a&&xa(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Aa=function(a,b){if(!va(a)||
!va(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ca=function(a,b){for(var c=new Ba,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Da=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ea=function(a){return Math.round(Number(a))||0},Fa=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ga=function(a){var b=[];if(xa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ha=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Ia=function(){return(new Date).getTime()},Ba=function(){this.prefix="gtm.";this.values={}};Ba.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ba.prototype.get=function(a){return this.values[this.prefix+a]};
var Ja=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ka=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},La=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ma=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Na=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Oa=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Pa=function(a){var b=
[];Da(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Qa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Ra=function(a){if(null==a)return String(a);var b=Qa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Sa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ua=function(a){if(!a||"object"!=Ra(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Sa(a,"constructor")&&!Sa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Sa(a,b)},p=function(a,b){var c=b||("array"==Ra(a)?[]:{}),d;for(d in a)if(Sa(a,d)){var e=a[d];"array"==Ra(e)?("array"!=Ra(c[d])&&(c[d]=[]),c[d]=p(e,c[d])):Ua(e)?(Ua(c[d])||(c[d]={}),c[d]=p(e,c[d])):c[d]=e}return c};var sb;
var tb=[],ub=[],vb=[],wb=[],xb=[],yb={},zb,Ab,Bb,Cb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=yb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):sb(c,e,b)},Fb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Eb(a[e],b,c));return d},Gb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=
yb[b];return c?c.priorityOverride||0:0},Eb=function(a,b,c){if(xa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Eb(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=tb[f];if(!h||b.Vc(h))return;c[f]=!0;try{var k=Fb(h,b,c);k.vtp_gtmEventId=b.id;d=Cb(k,b);Bb&&(d=Bb.dg(d,k))}catch(y){b.Me&&b.Me(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Eb(a[l],b,c)]=Eb(a[l+1],b,c);return d;case "template":d=
[];for(var n=!1,m=1;m<a.length;m++){var r=Eb(a[m],b,c);Ab&&(n=n||r===Ab.Nb);d.push(r)}return Ab&&n?Ab.gg(d):d.join("");case "escape":d=Eb(a[1],b,c);if(Ab&&xa(a[1])&&"macro"===a[1][0]&&Ab.Fg(a))return Ab.$g(d);d=String(d);for(var t=2;t<a.length;t++)Va[a[t]]&&(d=Va[a[t]](d));return d;case "tag":var q=a[1];if(!wb[q])throw Error("Unable to resolve tag reference "+q+".");return d={ye:a[2],index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var w=Hb(u,b,c),v=!!a[4];return v||
2!==w?v!==(1===w):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Hb=function(a,b,c){try{return zb(Fb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Ib=function(){var a=function(b){return{toString:function(){return b}}};return{Ed:a("convert_case_to"),Fd:a("convert_false_to"),Gd:a("convert_null_to"),Hd:a("convert_true_to"),Id:a("convert_undefined_to"),Hh:a("debug_mode_metadata"),Ka:a("function"),lf:a("instance_name"),rf:a("live_only"),tf:a("malware_disabled"),uf:a("metadata"),Jh:a("original_vendor_template_id"),yf:a("once_per_event"),Sd:a("once_per_load"),$d:a("setup_tags"),be:a("tag_id"),ce:a("teardown_tags")}}();var Jb=null,Mb=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Jb=Kb(a);for(var e=0;e<ub.length;e++){var f=ub[e],h=Lb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var n=[],m=0;m<wb.length;m++)c[m]&&!d[m]&&(n[m]=!0);return n},Lb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Jb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Jb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Kb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Hb(vb[c],a));return b[c]}};var Nb={dg:function(a,b){b[Ib.Ed]&&"string"===typeof a&&(a=1==b[Ib.Ed]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Ib.Gd)&&null===a&&(a=b[Ib.Gd]);b.hasOwnProperty(Ib.Id)&&void 0===a&&(a=b[Ib.Id]);b.hasOwnProperty(Ib.Hd)&&!0===a&&(a=b[Ib.Hd]);b.hasOwnProperty(Ib.Fd)&&!1===a&&(a=b[Ib.Fd]);return a}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var C={cb:"_ee",Hc:"_syn",Nh:"_uei",Kh:"_pci",Dc:"event_callback",Mb:"event_timeout",ca:"gtag.config",da:"allow_ad_personalization_signals",Ec:"restricted_data_processing",$a:"allow_google_signals",fa:"cookie_expires",Lb:"cookie_update",ab:"session_duration",la:"user_properties",za:"transport_url",O:"ads_data_redaction",m:"ad_storage",J:"analytics_storage",af:"region",bf:"wait_for_update"};
C.md="page_view",C.hh="user_engagement",C.ra="purchase",C.Wb="refund",C.hb="begin_checkout",C.Tb="add_to_cart",C.Vb="remove_from_cart",C.Sg="view_cart",C.Nd="add_to_wishlist",C.La="view_item",C.gh="view_promotion",C.Yg="select_promotion",C.Tg="select_item",C.kd="view_item_list",C.Md="add_payment_info",C.Qg="add_shipping_info",C.oh="allow_custom_scripts",C.uh="allow_display_features",C.od="allow_enhanced_conversions",C.je="enhanced_conversions",C.Yb="client_id",C.Y="cookie_domain",C.bc="cookie_name",
C.Pa="cookie_path",C.ia="cookie_flags",C.qa="currency",C.Zd="custom_map",C.zc="groups",C.Qa="language",C.yh="country",C.Lh="non_interaction",C.nb="page_location",C.ob="page_referrer",C.Ac="page_title",C.pb="send_page_view",C.Aa="send_to",C.Bc="session_engaged",C.jc="session_id",C.Cc="session_number",C.vf="tracking_id",C.sa="linker",C.rb="url_passthrough",C.kb="accept_incoming",C.K="domains",C.mb="url_position",C.lb="decorate_forms",C.oe="phone_conversion_number",C.ne="phone_conversion_callback",C.Cd=
"phone_conversion_css_class",C.se="phone_conversion_options",C.nf="phone_conversion_ids",C.kf="phone_conversion_country_code",C.Od="aw_remarketing",C.Pd="aw_remarketing_only",C.ka="value",C.pf="quantity",C.Fh="affiliation",C.ie="tax",C.$e="shipping",C.wd="list_name",C.fe="checkout_step",C.ee="checkout_option",C.Gh="coupon",C.Ye="promotions",C.qb="transaction_id",C.sb="user_id",C.Oa="conversion_linker",C.Na="conversion_cookie_prefix",C.Z="cookie_prefix",C.U="items",C.Vd="aw_merchant_id",C.Rd="aw_feed_country",
C.Td="aw_feed_language",C.Qd="discount",C.ae="disable_merchant_reported_purchases",C.ke="new_customer",C.Wd="customer_lifetime_value",C.Eh="dc_natural_search",C.Ah="dc_custom_params",C.wf="trip_type",C.me="passengers",C.hf="method",C.sf="search_term",C.xh="content_type",C.jf="optimize_id",C.cf="experiments",C.ib="google_signals",C.Ad="google_tld",C.kc="update",C.zd="firebase_id",C.hc="ga_restrict_domain",C.yd="event_settings",C.vd="dynamic_event_settings",C.qf="screen_name",C.ff="_x_19",C.ef="_x_20",
C.Af=[C.da,C.$a,C.U,C.Ec,C.Y,C.fa,C.ia,C.bc,C.Pa,C.Z,C.Lb,C.Zd,C.vd,C.Dc,C.yd,C.Mb,C.hc,C.ib,C.Ad,C.zc,C.sa,C.Aa,C.pb,C.ab,C.kc,C.la,C.za,C.od],C.we=[C.nb,C.ob,C.Ac,C.Qa,C.qf,C.sb,C.zd],C.Bf=[C.ra,C.Wb,C.hb,C.Tb,C.Vb,C.Sg,C.Nd,C.La,C.gh,C.Yg,C.kd,C.Tg,C.Md,C.Qg],C.Ld=[C.Aa,C.Od,C.Pd,C.pb,C.Qa,C.ka,C.qa,C.qb,C.sb,C.Oa,C.Na,C.Z,C.Y,C.fa,C.ia,C.nb,C.ob,C.oe,C.ne,C.Cd,C.se,C.U,C.Vd,C.Rd,C.Td,C.Qd,C.ae,C.ke,C.Wd,C.da,C.Ec,C.kc,C.zd,C.je,C.za,C.rb,C.od];C.xe=[C.da,C.$a,C.Lb];
C.De=[C.fa,C.Mb,C.ab];var kc={},lc=function(a,b){kc[a]=kc[a]||[];kc[a][b]=!0},mc=function(a){for(var b=[],c=kc[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var E=function(a){lc("GTM",a)};var nc=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,nc);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};qa(nc,Error);nc.prototype.name="CustomError";var oc=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");nc.call(this,d+c[e])};qa(oc,nc);oc.prototype.name="AssertionError";var pc=function(a,b){throw new oc("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var qc=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var rc;var sc=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var tc;a:{var uc=ma.navigator;if(uc){var vc=uc.userAgent;if(vc){tc=vc;break a}}tc=""}var wc=function(a){return-1!=tc.indexOf(a)};var yc=function(){this.h="";this.i=xc};yc.prototype.toString=function(){return"SafeHtml{"+this.h+"}"};var zc=function(a){if(a instanceof yc&&a.constructor===yc&&a.i===xc)return a.h;var b=typeof a;pc("expected object of type SafeHtml, got '"+a+"' of type "+("object"!=b?b:a?Array.isArray(a)?"array":b:"null"));return"type_error:SafeHtml"},xc={},Ac=new yc;Ac.h=ma.trustedTypes&&ma.trustedTypes.emptyHTML?ma.trustedTypes.emptyHTML:"";var Bc={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},Ec=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=zc(Ac);return!c.parentElement}),Fc=function(a,b){if(Bc[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(Ec())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=zc(b)};var Gc=function(a){var b=new yc,c;if(void 0===rc){var d=null,e=ma.trustedTypes;if(e&&e.createPolicy){try{d=e.createPolicy("goog#html",{createHTML:ra,createScript:ra,createScriptURL:ra})}catch(f){ma.console&&ma.console.error(f.message)}rc=d}else rc=d}c=rc;b.h=c?c.createHTML(a):a;return b};var G=window,H=document,Hc=navigator,Ic=H.currentScript&&H.currentScript.src,Jc=function(a,b){var c=G[a];G[a]=void 0===c?b:c;return G[a]},Kc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Lc=function(a,b,c){var d=H.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Kc(d,b);c&&(d.onerror=c);var e;if(null===pa)b:{var f=ma.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&oa.test(k)){pa=k;break b}}pa=""}e=pa;e&&d.setAttribute("nonce",e);var l=H.getElementsByTagName("script")[0]||H.body||H.head;l.parentNode.insertBefore(d,l);return d},Mc=function(){if(Ic){var a=Ic.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Nc=function(a,b){var c=H.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=H.body&&H.body.lastChild||
H.body||H.head;d.parentNode.insertBefore(c,d);Kc(c,b);void 0!==a&&(c.src=a);return c},Oc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Pc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Qc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},I=function(a){G.setTimeout(a,0)},Rc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Sc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Tc=function(a){var b=H.createElement("div");Fc(b,Gc("A<div>"+a+"</div>"));b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Uc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},Vc=function(a){Hc.sendBeacon&&Hc.sendBeacon(a)||Oc(a)},Wc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Xc={},Yc=function(a){return void 0==Xc[a]?!1:Xc[a]};var Zc=[];function $c(){var a=Jc("google_tag_data",{});a.ics||(a.ics={entries:{},set:ad,update:bd,addListener:cd,notifyListeners:dd,active:!1});return a.ics}
function ad(a,b,c,d,e,f){var h=$c();h.active=!0;if(void 0!=b){var k=h.entries,l=k[a]||{},n=l.region,m=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(m===e||(m===d?n!==e:!m&&!n)){var r=!!(f&&0<f&&void 0===l.update),t={region:m,initial:"granted"===b,update:l.update,quiet:r};k[a]=t;r&&G.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,ed(a),dd(),lc("TAGGING",2))},f)}}}
function bd(a,b){var c=$c();c.active=!0;if(void 0!=b){var d=fd(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=fd(a);f.quiet?(f.quiet=!1,ed(a)):h!==d&&ed(a)}}function cd(a,b){Zc.push({te:a,pg:b})}function ed(a){for(var b=0;b<Zc.length;++b){var c=Zc[b];xa(c.te)&&-1!==c.te.indexOf(a)&&(c.Qe=!0)}}function dd(){for(var a=0;a<Zc.length;++a){var b=Zc[a];if(b.Qe){b.Qe=!1;try{b.pg.call()}catch(c){}}}}
var fd=function(a){var b=$c().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},gd=function(a){return!($c().entries[a]||{}).quiet},hd=function(){return Yc("gtag_cs_api")?$c().active:!1},id=function(a,b){$c().addListener(a,b)},jd=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!gd(b[e]))return!0;return!1}if(c()){var d=!1;id(b,function(){d||c()||(d=!0,a())})}else a()},kd=function(a,b){if(!1===fd(b)){var c=!1;id([b],function(){!c&&fd(b)&&(a(),c=!0)})}};var ld=[C.m,C.J],md=function(a){var b=a[C.af];b&&E(40);var c=a[C.bf];c&&E(41);for(var d=xa(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<ld.length;f++){var h=ld[f],k=a[ld[f]],l=d[e];$c().set(h,k,l,"IN","IN-GJ",c)}},nd=function(a){for(var b=0;b<ld.length;b++){var c=ld[b],d=a[ld[b]];$c().update(c,d)}$c().notifyListeners()},od=function(a){var b=fd(a);return void 0!=b?b:!0},pd=function(){for(var a=[],b=0;b<ld.length;b++){var c=fd(ld[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")},
qd=function(a,b){jd(a,b)};var sd=function(a){return rd?H.querySelectorAll(a):null},td=function(a,b){if(!rd)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!H.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},xd=!1;if(H.querySelectorAll)try{var yd=H.querySelectorAll(":root");yd&&1==yd.length&&yd[0]==H.documentElement&&(xd=!0)}catch(a){}var rd=xd;var Md={},K=null,Nd=Math.random();Md.C="AW-825508380";Md.Rb="871";Md.Ih="";var Od={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Pd="www.googletagmanager.com/gtm.js";Pd="www.googletagmanager.com/gtag/js";
var Qd=Pd,Rd=null,Sd=null,Td="//www.googletagmanager.com/a?id="+Md.C+"&cv=1",Ud={},Vd={},Wd=function(){var a=K.sequence||1;K.sequence=a+1;return a};
var Xd=function(){return"&tc="+wb.filter(function(a){return a}).length},$d=function(){Yd||(Yd=G.setTimeout(Zd,500))},Zd=function(){Yd&&(G.clearTimeout(Yd),Yd=void 0);void 0===ae||be[ae]&&!ce&&!de||(ee[ae]||fe.Hg()||0>=ge--?(E(1),ee[ae]=!0):(fe.jh(),Oc(he()),be[ae]=!0,ie=je=de=ce=""))},he=function(){var a=ae;if(void 0===a)return"";var b=mc("GTM"),c=mc("TAGGING");return[ke,be[a]?"":"&es=1",le[a],b?"&u="+b:"",c?"&ut="+c:"",Xd(),ce,de,je,ie,"&z=0"].join("")},me=function(){return[Td,"&v=3&t=t","&pid="+
Aa(),"&rv="+Md.Rb].join("")},ne="0.005000">Math.random(),ke=me(),oe=function(){ke=me()},be={},ce="",de="",ie="",je="",ae=void 0,le={},ee={},Yd=void 0,fe=function(a,b){var c=0,d=0;return{Hg:function(){if(c<a)return!1;Ia()-d>=b&&(c=0);return c>=a},jh:function(){Ia()-d>=b&&(c=0);c++;d=Ia()}}}(2,1E3),ge=1E3,pe=function(a,b){if(ne&&!ee[a]&&ae!==a){Zd();ae=a;ie=ce="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";le[a]="&e="+c+"&eid="+a;$d()}},qe=function(a,b,c){if(ne&&!ee[a]&&
b){a!==ae&&(Zd(),ae=a);var d,e=String(b[Ib.Ka]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;ce=ce?ce+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(yb[h]?"1":"2")+d;ie=ie?ie+"."+k:"&ti="+k;$d();2022<=he().length&&Zd()}},re=function(a,b,c){if(ne&&!ee[a]){a!==ae&&(Zd(),ae=a);var d=c+b;de=de?de+
"."+d:"&epr="+d;$d();2022<=he().length&&Zd()}};var se={},te=new Ba,ue={},ve={},ye={name:"dataLayer",set:function(a,b){p(Oa(a,b),ue);we()},get:function(a){return xe(a,2)},reset:function(){te=new Ba;ue={};we()}},xe=function(a,b){if(2!=b){var c=te.get(a);ne&&c!==ze(a.split("."))&&E(5);return c}return ze(a.split("."))},ze=function(a){for(var b=ue,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b},Ae=function(a,b){ve.hasOwnProperty(a)||(te.set(a,b),p(Oa(a,b),ue),we())},we=function(a){Da(ve,function(b,c){te.set(b,c);
p(Oa(b,void 0),ue);p(Oa(b,c),ue);a&&delete ve[b]})},Be=function(a,b,c){se[a]=se[a]||{};var d=1!==c?ze(b.split(".")):te.get(b);"array"===Ra(d)||"object"===Ra(d)?se[a][b]=p(d):se[a][b]=d},Ce=function(a,b){if(se[a])return se[a][b]},De=function(a,b){se[a]&&delete se[a][b]};var Ge=/:[0-9]+$/,He=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Ke=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ie(a.protocol)||Ie(G.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:G.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||G.location.hostname).replace(Ge,"").toLowerCase());return Je(a,b,c,d,e)},Je=function(a,b,c,d,e){var f,h=Ie(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Le(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(Ge,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||lc("TAGGING",
1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=ya(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=He(f,e,void 0));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Ie=function(a){return a?a.replace(":","").toLowerCase():""},Le=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},Me=function(a){var b=H.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||lc("TAGGING",1),c="/"+c);var d=b.hostname.replace(Ge,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Ne=function(a){function b(n){var m=n.split("=")[0];return 0>d.indexOf(m)?n:m+"=0"}function c(n){return n.split("&").map(b).filter(function(m){return void 0!=m}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),
e=Me(a),f=a.split(/[?#]/)[0],h=e.search,k=e.hash;"?"===h[0]&&(h=h.substring(1));"#"===k[0]&&(k=k.substring(1));h=c(h);k=c(k);""!==h&&(h="?"+h);""!==k&&(k="#"+k);var l=""+f+h+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Oe(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Qe=function(a,b,c,d){return Pe(d)?Oe(a,String(b||document.cookie),c):[]},Te=function(a,b,c,d,e){if(Pe(e)){var f=Re(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Se(f,function(h){return h.$b},b);if(1===f.length)return f[0].id;f=Se(f,function(h){return h.Bb},c);return f[0]?f[0].id:void 0}}};function Ue(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Qe(b,f,!1,d).indexOf(c)}
var Ye=function(a,b,c){function d(q,u,w){if(null==w)return delete h[u],q;h[u]=w;return q+"; "+u+"="+w}function e(q,u){if(null==u)return delete h[u],q;h[u]=!0;return q+"; "+u}if(!Pe(c.Fa))return 2;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Ve(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.Wh);f=d(f,"samesite",
c.ai);c.bi&&(f=e(f,"secure"));var l=c.domain;if("auto"===l){for(var n=We(),m=0;m<n.length;++m){var r="none"!==n[m]?n[m]:void 0,t=d(f,"domain",r);t=e(t,c.flags);if(!Xe(r,c.path)&&Ue(t,a,b,c.Fa))return 0}return 1}l&&"none"!==l&&(f=d(f,"domain",l));f=e(f,c.flags);return Xe(l,c.path)?1:Ue(f,a,b,c.Fa)?0:1},Ze=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ye(a,b,c)};
function Se(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Re(a,b,c){for(var d=[],e=Qe(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),$b:1*l[0]||1,Bb:1*l[1]||1}))}}return d}
var Ve=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},$e=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,af=/(^|\.)doubleclick\.net$/i,Xe=function(a,b){return af.test(document.location.hostname)||"/"===b&&$e.test(a)},We=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;af.test(e)||$e.test(e)||a.push("none");
return a},Pe=function(a){if(!Yc("gtag_cs_api")||!a||!hd())return!0;if(!gd(a))return!1;var b=fd(a);return null==b?!0:!!b};var bf=function(){for(var a=Hc.userAgent+(H.cookie||"")+(H.referrer||""),b=a.length,c=G.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ia()/1E3)].join(".")},ef=function(a,b,c,d,e){var f=cf(b);return Te(a,f,df(c),d,e)},ff=function(a,b,c,d){var e=""+cf(c),f=df(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},cf=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},df=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function gf(a,b,c){var d,e=a.zb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ia())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var hf=["1"],jf={},nf=function(a){var b=kf(a.prefix);jf[b]||lf(b,a.path,a.domain)||(mf(b,bf(),a),lf(b,a.path,a.domain))};function mf(a,b,c){var d=ff(b,"1",c.domain,c.path),e=gf(c);e.Fa="ad_storage";Ze(a,d,e)}function lf(a,b,c){var d=ef(a,b,c,hf,"ad_storage");d&&(jf[a]=d);return d}function kf(a){return(a||"_gcl")+"_au"};function of(){for(var a=pf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function qf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var pf,rf;function sf(a){pf=pf||qf();rf=rf||of();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,n=(f&3)<<4|h>>4,m=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(m=64));b.push(pf[l],pf[n],pf[m],pf[r])}return b.join("")}
function tf(a){function b(l){for(;d<a.length;){var n=a.charAt(d++),m=rf[n];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return l}pf=pf||qf();rf=rf||of();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var uf;var yf=function(){var a=vf,b=wf,c=xf(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Pc(H,"mousedown",d);Pc(H,"keyup",d);Pc(H,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},zf=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};xf().decorators.push(f)},Af=function(a,b,c){for(var d=xf().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,n=a,m=!!h.sameHost;if(l&&(m||n!==H.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(n)){k=!0;break a}}else if(0<=n.indexOf(l[r])||m&&0<=l[r].indexOf(n)){k=!0;break a}k=!1}if(k){var t=h.placement;void 0==t&&(t=h.fragment?2:1);t===b&&La(e,h.callback())}}return e},xf=function(){var a=Jc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Bf=/(.*?)\*(.*?)\*(.*)/,Cf=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Df=/^(?:www\.|m\.|amp\.)+/,Ef=/([^?#]+)(\?[^#]*)?(#.*)?/;function Ff(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Hf=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(sf(String(d))))}var e=b.join("*");return["1",Gf(e),e].join("*")},Gf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=uf)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}uf=d;for(var l=4294967295,n=0;n<c.length;n++)l=l>>>8^uf[(l^c.charCodeAt(n))&255];return((l^-1)>>>0).toString(36)},Jf=function(){return function(a){var b=Me(G.location.href),c=b.search.replace("?",""),d=He(c,"_gl",!0)||"";a.query=If(d)||{};var e=Ke(b,"fragment").match(Ff("_gl"));a.fragment=If(e&&e[3]||"")||{}}},Kf=function(a){var b=Jf(),c=xf();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(La(d,e.query),a&&La(d,e.fragment));return d},If=
function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Bf.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var n=h[2],m=0;m<b;++m)if(n===Gf(k,m)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=tf(t[q+1]);return r}}}}catch(u){}};
function Lf(a,b,c,d){function e(m){var r=m,t=Ff(a).exec(r),q=r;if(t){var u=t[2],w=t[4];q=t[1];w&&(q=q+u+w)}m=q;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+n}d=void 0===d?!1:d;var f=Ef.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",n=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function Mf(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Af(b,1,c),e=Af(b,2,c),f=Af(b,3,c);if(Ma(d)){var h=Hf(d);c?Nf("_gl",h,a):Of("_gl",h,a,!1)}if(!c&&Ma(e)){var k=Hf(e);Of("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var n=l,m=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Of(n,m,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Nf(n,m,r);break a}}"string"==typeof r&&Lf(n,m,r,void 0)}}
function Of(a,b,c,d){if(c.href){var e=Lf(a,b,c.href,void 0===d?!1:d);sc.test(e)&&(c.href=e)}}
function Nf(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=H.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var n=Lf(a,b,c.action);sc.test(n)&&(c.action=n)}}}
var vf=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Mf(e,e.hostname)}}catch(h){}},wf=function(a){try{if(a.action){var b=Ke(Me(a.action),"host");Mf(a,b)}}catch(c){}},Pf=function(a,b,c,d){yf();zf(a,b,"fragment"===c?2:1,!!d,!1)},Qf=function(a,b){yf();zf(a,[Je(G.location,"host",!0)],b,!0,!0)},Rf=function(){var a=H.location.hostname,b=Cf.exec(H.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Df,""),l=e.replace(Df,""),n;if(!(n=k===l)){var m="."+l;n=k.substring(k.length-m.length,k.length)===m}return n},Sf=function(a,b){return!1===a?!1:a||b||Rf()};var Tf=/^\w+$/,Uf=/^[\w-]+$/,Vf=/^~?[\w-]+$/,Wf={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Xf=function(){if(!Yc("gtag_cs_api")||!hd())return!0;var a=fd("ad_storage");return null==a?!0:!!a},Yf=function(a,b){gd("ad_storage")?Xf()?a():kd(a,"ad_storage"):b?lc("TAGGING",3):jd(function(){Yf(a,!0)},["ad_storage"])},ag=function(a){var b=[];if(!H.cookie)return b;var c=Qe(a,H.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Zf(c[d]);e&&-1===ya(b,e)&&b.push(e)}return $f(b)};
function bg(a){return a&&"string"==typeof a&&a.match(Tf)?a:"_gcl"}
var dg=function(){var a=Me(G.location.href),b=Ke(a,"query",!1,void 0,"gclid"),c=Ke(a,"query",!1,void 0,"gclsrc"),d=Ke(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||He(e,"gclid",void 0);c=c||He(e,"gclsrc",void 0)}return cg(b,c,d)},cg=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Uf))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Yc("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},fg=function(a){var b=dg();Yf(function(){return eg(b,a)})};
function eg(a,b,c){function d(n,m){var r=gg(n,e);r&&(Ze(r,m,f),h=!0)}b=b||{};var e=bg(b.prefix);c=c||Ia();var f=gf(b,c,!0);f.Fa="ad_storage";var h=!1,k=Math.round(c/1E3),l=function(n){return["GCL",k,n].join(".")};a.aw&&(!0===b.fi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return h}
var ig=function(a,b){var c=Kf(!0);Yf(function(){for(var d=bg(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Wf[f]){var h=gg(f,d),k=c[h];if(k){var l=Math.min(hg(k),Ia()),n;b:{for(var m=l,r=Qe(h,H.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(hg(r[t])>m){n=!0;break b}n=!1}if(!n){var q=gf(b,l,!0);q.Fa="ad_storage";Ze(h,k,q)}}}}eg(cg(c.gclid,c.gclsrc),b)})},gg=function(a,b){var c=Wf[a];if(void 0!==c)return b+c},hg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Zf(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var jg=function(a,b,c,d,e){if(xa(b)){var f=bg(e),h=function(){for(var k={},l=0;l<a.length;++l){var n=gg(a[l],f);if(n){var m=Qe(n,H.cookie,void 0,"ad_storage");m.length&&(k[n]=m.sort()[m.length-1])}}return k};Yf(function(){Pf(h,b,c,d)})}},$f=function(a){return a.filter(function(b){return Vf.test(b)})},kg=function(a,b){for(var c=bg(b.prefix),d={},e=0;e<a.length;e++)Wf[a[e]]&&(d[a[e]]=Wf[a[e]]);Yf(function(){Da(d,function(f,h){var k=Qe(c+h,H.cookie,void 0,"ad_storage");if(k.length){var l=k[0],n=hg(l),
m={};m[f]=[Zf(l)];eg(m,b,n)}})})};function lg(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var mg=function(){function a(e,f,h){h&&(e[f]=h)}var b=["aw","dc"];if(hd()){var c=dg();if(lg(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);Qf(function(){return d},3);Qf(function(){var e={};return e._up="1",e},1)}}},ng=function(){var a;if(Xf()){for(var b=[],c=H.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({sd:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].sd]||(h[b[k].sd]=[]),h[b[k].sd].push({timestamp:l[1],rg:l[2]}))}a=h}else a={};return a};var og=/^\d+\.fls\.doubleclick\.net$/;function pg(a,b){gd(C.m)?od(C.m)?a():kd(a,C.m):b?E(42):qd(function(){pg(a,!0)},[C.m])}function qg(a){var b=Me(G.location.href),c=Ke(b,"host",!1);if(c&&c.match(og)){var d=Ke(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function rg(a,b,c){if("aw"==a||"dc"==a){var d=qg("gcl"+a);if(d)return d.split(".")}var e=bg(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!od(C.m)&&c,h;h=dg()[a]||[];if(0<h.length)return f?["0"]:h}var k=gg(a,e);return k?ag(k):[]}
var sg=function(a){var b=qg("gac");if(b)return!od(C.m)&&a?"0":decodeURIComponent(b);var c=ng(),d=[];Da(c,function(e,f){for(var h=[],k=0;k<f.length;k++)h.push(f[k].rg);h=$f(h);h.length&&d.push(e+":"+h.join(","))});return d.join(";")},tg=function(a,b){var c=dg().dc||[];pg(function(){nf(b);var d=jf[kf(b.prefix)],e=!1;if(d&&0<c.length){var f=K.joined_au=K.joined_au||{},h=b.prefix||"_gcl";if(!f[h])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;Vc(l);e=f[h]=
!0}}null==a&&(a=e);if(a&&d){var n=kf(b.prefix),m=jf[n];m&&mf(n,m,b)}})};var ug=/[A-Z]+/,vg=/\s/,wg=function(a){if(g(a)&&(a=Ha(a),!vg.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(ug.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],B:d}}}}},yg=function(a){for(var b={},c=0;c<a.length;++c){var d=wg(a[c]);d&&(b[d.id]=d)}xg(b);var e=[];Da(b,function(f,h){e.push(h)});return e};
function xg(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.B[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var zg=function(){var a=!1;return a};var N=function(a,b,c,d){return(2===Ag()||d||"http:"!=G.location.protocol?a:b)+c},Ag=function(){var a=Mc(),b;if(1===a)a:{var c=Qd;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=H.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Cg=function(a,b,c){if(G[a.functionName])return b.bd&&I(b.bd),G[a.functionName];var d=Bg();G[a.functionName]=d;if(a.Ub)for(var e=0;e<a.Ub.length;e++)G[a.Ub[e]]=G[a.Ub[e]]||Bg();a.ic&&void 0===G[a.ic]&&(G[a.ic]=c);Lc(N("https://","http://",a.pd),b.bd,b.Ug);return d},Bg=function(){var a=function(){a.q=a.q||[];a.q.push(arguments)};return a},Dg={functionName:"_googWcmImpl",ic:"_googWcmAk",pd:"www.gstatic.com/wcm/loader.js"},Eg={functionName:"_gaPhoneImpl",ic:"ga_wpid",pd:"www.gstatic.com/gaphone/loader.js"},
Fg={Ze:"",Df:"5"},Gg={functionName:"_googCallTrackingImpl",Ub:[Eg.functionName,Dg.functionName],pd:"www.gstatic.com/call-tracking/call-tracking_"+(Fg.Ze||Fg.Df)+".js"},Hg={},Ig=function(a,b,c,d){E(22);if(c){d=d||{};var e=Cg(Dg,d,a),f={ak:a,cl:b};void 0===d.na&&(f.autoreplace=c);e(2,d.na,f,c,0,new Date,d.options)}},Jg=function(a,b,c,d){E(21);if(b&&c){d=d||{};for(var e={countryNameCode:c,destinationNumber:b,retrievalTime:new Date},f=0;f<a.length;f++){var h=a[f];
Hg[h.id]||(h&&"AW"===h.prefix&&!e.adData&&2<=h.B.length?(e.adData={ak:h.B[0],cl:h.B[1]},Hg[h.id]=!0):h&&"UA"===h.prefix&&!e.gaData&&(e.gaData={gaWpid:h.containerId},Hg[h.id]=!0))}(e.gaData||e.adData)&&Cg(Gg,d)(d.na,e,d.options)}},Lg=function(){var a=!1;return a},Mg=function(a,b){if(a)if(zg()){}else{if(g(a)){var c=
wg(a);if(!c)return;a=c}var d=void 0,e=!1,f=b.getWithConfig(C.nf);if(f&&xa(f)){d=[];for(var h=0;h<f.length;h++){var k=wg(f[h]);k&&(d.push(k),(a.id===k.id||a.id===a.containerId&&a.containerId===k.containerId)&&(e=!0))}}if(!d||e){var l=b.getWithConfig(C.oe),n;if(l){xa(l)?n=l:n=[l];var m=b.getWithConfig(C.ne),r=b.getWithConfig(C.Cd),t=b.getWithConfig(C.se),q=b.getWithConfig(C.kf),u=m||r,w=1;"UA"!==a.prefix||d||(w=5);for(var v=0;v<n.length;v++)if(v<w)if(d)Jg(d,n[v],q,{na:u,options:t});else if("AW"===a.prefix&&
a.B[1])Lg()?Jg([a],n[v],q||"US",{na:u,options:t}):Ig(a.B[0],a.B[1],n[v],{na:u,options:t});else if("UA"===a.prefix)if(Lg())Jg([a],n[v],q||"US",{na:u});else{var y=a.containerId,x=n[v],A={na:u};E(23);if(x){A=A||{};var B=Cg(Eg,A,y),z={};void 0!==A.na?z.receiver=A.na:z.replace=x;z.ga_wpid=y;z.destination=x;B(2,new Date,z)}}}}}};
var Pg=function(a){return od(C.m)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Ne(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var Qg=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Rg={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Sg={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Tg="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Vg=function(a){var b;b||(b=xe("gtm.whitelist"));b&&E(9);b="google gtagfl lcl zone oid op".split(" ");
var c=b&&Na(Ga(b),Rg),d;d||(d=xe("gtm.blacklist"));d||(d=xe("tagTypeBlacklist"))&&E(3);d?E(8):d=[];Ug()&&(d=Ga(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=ya(Ga(d),"google")&&E(2);var e=d&&Na(Ga(d),Sg),f={};return function(h){var k=
h&&h[Ib.Ka];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Vd[k]||[],n=a(k,l);if(b){var m;if(m=n)a:{if(0>ya(c,k))if(l&&0<l.length)for(var r=0;r<l.length;r++){if(0>ya(c,l[r])){E(11);m=!1;break a}}else{m=!1;break a}m=!0}n=m}var t=!1;if(d){var q=0<=ya(e,k);if(q)t=q;else{var u=Ca(e,l||[]);u&&E(10);t=u}}var w=!n||t;w||!(0<=ya(l,"sandboxedScripts"))||c&&-1!==ya(c,"sandboxedScripts")||(w=Ca(e,Tg));return f[k]=w}},Ug=function(){return Qg.test(G.location&&G.location.hostname)};var Wg={active:!0,isAllowed:function(){return!0},isWhitelisted:function(){return!0}},Xg=function(a){var b=K.zones;!b&&a&&(b=K.zones=a());return b};var Yg=function(){};var Zg=!1,$g=0,ah=[];function bh(a){if(!Zg){var b=H.createEventObject,c="complete"==H.readyState,d="interactive"==H.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Zg=!0;for(var e=0;e<ah.length;e++)I(ah[e])}ah.push=function(){for(var f=0;f<arguments.length;f++)I(arguments[f]);return 0}}}function ch(){if(!Zg&&140>$g){$g++;try{H.documentElement.doScroll("left"),bh()}catch(a){G.setTimeout(ch,50)}}}var dh=function(a){Zg?a():ah.push(a)};var eh={},fh={},gh=function(a,b,c,d){if(!fh[a]||Od[b]||"__zone"===b)return-1;var e={};Ua(d)&&(e=p(d,e));e.id=c;e.status="timeout";return fh[a].tags.push(e)-1},hh=function(a,b,c,d){if(fh[a]){var e=fh[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function ih(a){for(var b=eh[a]||[],c=0;c<b.length;c++)b[c]();eh[a]={push:function(d){d(Md.C,fh[a])}}}
var lh=function(a,b,c){fh[a]={tags:[]};ua(b)&&jh(a,b);c&&G.setTimeout(function(){return ih(a)},Number(c));return kh(a)},jh=function(a,b){eh[a]=eh[a]||[];eh[a].push(Ka(function(){return I(function(){b(Md.C,fh[a])})}))};function kh(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ka(function(){b++;d&&b>=c&&ih(a)})},Rf:function(){d=!0;b>=c&&ih(a)}}};var mh=function(){function a(d){return!va(d)||0>d?0:d}if(!K._li&&G.performance&&G.performance.timing){var b=G.performance.timing.navigationStart,c=va(ye.get("gtm.start"))?ye.get("gtm.start"):0;K._li={cst:a(c-b),cbt:a(Sd-b)}}};var qh={},rh=function(){return G.GoogleAnalyticsObject&&G[G.GoogleAnalyticsObject]},sh=!1;
var th=function(a){G.GoogleAnalyticsObject||(G.GoogleAnalyticsObject=a||"ga");var b=G.GoogleAnalyticsObject;if(G[b])G.hasOwnProperty(b)||E(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);G[b]=c}mh();return G[b]},uh=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=rh();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var wh=function(a){},vh=function(){return G.GoogleAnalyticsObject||"ga"};
var xh=function(a,b){return function(){var c=rh(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var h=f.get("hitPayload"),k=f.get("hitCallback"),l=0>h.indexOf("&tid="+b);l&&(f.set("hitPayload",h.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",h,!0),f.set("hitCallback",k,!0),f.set("_x_19",void 0,!0),e(f))})}}};function Ch(a,b,c,d){var e=wb[a],f=Dh(a,b,c,d);if(!f)return null;var h=Eb(e[Ib.$d],c,[]);if(h&&h.length){var k=h[0];f=Ch(k.index,{F:f,D:1===k.ye?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Dh(a,b,c,d){function e(){if(f[Ib.tf])k();else{var v=Fb(f,c,[]),y=gh(c.id,String(f[Ib.Ka]),Number(f[Ib.be]),v[Ib.uf]),x=!1;v.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Ia()-B;qe(c.id,wb[a],"5");hh(c.id,y,"success",z);h()}};v.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Ia()-B;qe(c.id,wb[a],"6");hh(c.id,y,"failure",z);k()}};v.vtp_gtmTagId=f.tag_id;
v.vtp_gtmEventId=c.id;qe(c.id,f,"1");var A=function(){var z=Ia()-B;qe(c.id,f,"7");hh(c.id,y,"exception",z);x||(x=!0,k())};var B=Ia();try{Cb(v,c)}catch(z){A(z)}}}var f=wb[a],h=b.F,k=b.D,l=b.terminate;if(c.Vc(f))return null;var n=Eb(f[Ib.ce],c,[]);if(n&&n.length){var m=n[0],r=Ch(m.index,{F:h,D:k,terminate:l},c,d);if(!r)return null;h=r;k=2===m.ye?l:r}if(f[Ib.Sd]||f[Ib.yf]){var t=f[Ib.Sd]?xb:c.sh,q=h,u=k;if(!t[a]){e=Ka(e);var w=Eh(a,t,e);h=w.F;k=w.D}return function(){t[a](q,u)}}return e}
function Eh(a,b,c){var d=[],e=[];b[a]=Fh(d,e,c);return{F:function(){b[a]=Gh;for(var f=0;f<d.length;f++)d[f]()},D:function(){b[a]=Hh;for(var f=0;f<e.length;f++)e[f]()}}}function Fh(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Gh(a){a()}function Hh(a,b){b()};var Kh=function(a,b){for(var c=[],d=0;d<wb.length;d++)if(a.Ab[d]){var e=wb[d];var f=b.add();try{var h=Ch(d,{F:f,D:f,terminate:f},a,d);h?c.push({We:d,Re:Gb(e),ng:h}):(Ih(d,a),f())}catch(l){f()}}b.Rf();c.sort(Jh);for(var k=0;k<c.length;k++)c[k].ng();return 0<c.length};function Jh(a,b){var c,d=b.Re,e=a.Re;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.We,k=b.We;f=h>k?1:h<k?-1:0}return f}
function Ih(a,b){if(!ne)return;var c=function(d){var e=b.Vc(wb[d])?"3":"4",f=Eb(wb[d][Ib.$d],b,[]);f&&f.length&&c(f[0].index);qe(b.id,wb[d],e);var h=Eb(wb[d][Ib.ce],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var Lh=!1,Mh=function(a,b,c,d,e){if("gtm.js"==b){if(Lh)return!1;Lh=!0}pe(a,b);var f=lh(a,d,e);Be(a,"event",1);Be(a,"ecommerce",1);Be(a,"gtm");var h={id:a,name:b,Vc:Vg(c),Ab:[],sh:[],Me:function(){E(6)}};h.Ab=Mb(h);
var k=Kh(h,f);"gtm.js"!==b&&"gtm.sync"!==b||wh(Md.C);if(!k)return k;for(var l=0;l<h.Ab.length;l++)if(h.Ab[l]){var n=wb[l];if(n&&!Od[String(n[Ib.Ka])])return!0}return!1};function Nh(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return Me(""+c+b).href}}function Oh(a,b){return Ph()?Nh(a,b):void 0}
function Ph(){var a=!1;return a};var Qh=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.F=function(){};this.D=function(){};this.eventId=void 0},Rh=function(a){var b=new Qh;b.eventModel=a;return b},Sh=function(a,b){a.targetConfig=b;return a},Th=function(a,b){a.containerConfig=b;return a},Uh=function(a,b){a.h=b;return a},Vh=function(a,b){a.globalConfig=b;return a},Wh=function(a,b){a.F=b;return a},Xh=function(a,b){a.D=b;return a};
Qh.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Yh=function(a){function b(e){Da(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Da(c,function(e){d.push(e)});return d};var Zh;if(3===Md.Rb.length)Zh="g";else{var $h="G";$h="g";Zh=$h}
var ai={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Zh,OPT:"o"},bi=function(a){var b=Md.C.split("-"),c=b[0].toUpperCase(),d=ai[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Md.Rb.length){var h="w";h=zg()?"s":"o";f="2"+h}else f="";return f+d+Md.Rb+e};var ci=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var di=function(){return wc("iPhone")&&!wc("iPod")&&!wc("iPad")};wc("Opera");wc("Trident")||wc("MSIE");wc("Edge");!wc("Gecko")||-1!=tc.toLowerCase().indexOf("webkit")&&!wc("Edge")||wc("Trident")||wc("MSIE")||wc("Edge");-1!=tc.toLowerCase().indexOf("webkit")&&!wc("Edge")&&wc("Mobile");wc("Macintosh");wc("Windows");wc("Linux")||wc("CrOS");var ei=ma.navigator||null;ei&&(ei.appVersion||"").indexOf("X11");wc("Android");di();wc("iPad");wc("iPod");di()||wc("iPad")||wc("iPod");tc.toLowerCase().indexOf("kaios");var fi=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(k){e=!1}if(e)return c;var f;a:{try{var h=c.parent;if(h&&h!=c){f=h;break a}}catch(k){}f=null}if(!(c=f))break}return null};var gi=function(){};var hi=function(a){return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies||void 0!==a.listenerId&&"number"!==typeof a.listenerId||void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},ii=function(a,b){this.i=a;this.h=null;this.H={};this.ja=0;this.ma=void 0===b?500:b;this.o=null};ka(ii,gi);
var ki=function(a){return"function"===typeof a.i.__tcfapi||null!=ji(a)},ni=function(a,b){var c=setTimeout(function(){c=0;b({tcString:"tcunavailable",internalErrorState:1})},a.ma);li(a,"addEventListener",function(d){d&&mi(d)&&(d.internalErrorState=hi(d),0!=d.internalErrorState&&(d.tcString="tcunavailable"),li(a,"removeEventListener",null,d.listenerId),c&&(clearTimeout(c),c=0,b(d)))})};
ii.prototype.addEventListener=function(a){li(this,"addEventListener",function(b,c){var d=c?b:{};d.internalErrorState=hi(d);0!==d.internalErrorState&&(d.tcString="tcunavailable");a(d)})};ii.prototype.removeEventListener=function(a){a&&a.listenerId&&li(this,"removeEventListener",null,a.listenerId)};
var pi=function(a,b){if(!a.purpose||!a.vendor)return!1;var c=oi(a.vendor.consents,"755");return c&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:c&&oi(a.purpose.consents,b)},oi=function(a,b){return!(!a||!a[b])},li=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(ji(a)){qi(a);var f=++a.ja;a.H[f]=c;if(a.h){var h={};a.h.postMessage((h.__tcfapiCall={command:b,version:2,callId:f,parameter:d},h),"*")}}else c({},!1)},ji=function(a){if(a.h)return a.h;
a.h=fi(a.i,"__tcfapiLocator");return a.h},qi=function(a){a.o||(a.o=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.H[c.callId](c.returnValue,c.success)}catch(e){}},ci(a.i,a.o))},mi=function(a){return!1===a.gdprApplies||"error"===a.cmpStatus||"loaded"===a.cmpStatus&&("tcloaded"===a.eventStatus||"useractioncomplete"===a.eventStatus)?!0:!1};var ri={1:1,3:1,7:3,9:3,10:3};function si(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var ti=si("",550),ui=si("",500);function vi(){var a=K.tcf||{};return K.tcf=a}
var wi=function(){var a=vi();if(!a.active){a.active=!0;var b=new ii(G,3E3),c="x";"function"===typeof G.__tcfapi?c="s":ki(b)?c="i":"function"===typeof G.__cmp?c="c":fi(G,"__cmpLocator")&&(c="d");a.Le=Ia();try{var d=!1;ni(b,function(){d=!0;a.Zc=Ia()});d&&(a.Zc=a.Le)}catch(e){c="e"}a.type=c}},Ci=function(){if(xi()?!0===G.gtag_enable_tcf_support:!1!==G.gtag_enable_tcf_support){var a=vi();if(!a.active||!a.Ea){var b=new ii(G,3E3);if("function"===typeof G.__tcfapi||ki(b)){a.active=!0;a.type="p";a.Ea={};
yi();var c=setTimeout(function(){zi(a);Ai(a);c=null},ui);try{b.addEventListener(function(d){c&&(clearTimeout(c),c=null);if(0!==d.internalErrorState)zi(a),Ai(a);else{var e;if(!1===d.gdprApplies)e=Bi(),b.removeEventListener(d);else if("tcloaded"===d.eventStatus||"useractioncomplete"===d.eventStatus||"cmpuishown"===d.eventStatus){var f={},h;for(h in ri)if(ri.hasOwnProperty(h))if("1"===h)f["1"]=mi(d)?!1===d.gdprApplies||"tcunavailable"===d.tcString?!0:pi(d,"1"):!1;else{var k=d.purpose&&d.vendor?oi(d.purpose.legitimateInterests,
h)&&oi(d.vendor.legitimateInterests,"755"):!1,l=pi(d,h),n=ri[h];1===n?f[h]=l:2===n?f[h]=k:3===n&&(f[h]=l||k)}e=f}e&&(a.tcString=d.tcString||"tcempty",a.Ea=e,Ai(a))}})}catch(d){c&&(clearTimeout(c),c=null),zi(a),Ai(a)}}}}};function zi(a){a.type="e";a.tcString="tcunavailable";a.Ea=Bi()}function yi(){var a={};md((a.ad_storage="denied",a.wait_for_update=ti,a))}var xi=function(){var a=!1;a=!0;return a};
function Bi(){var a={},b;for(b in ri)ri.hasOwnProperty(b)&&(a[b]=!0);return a}function Ai(a){var b={};nd((b.ad_storage=a.Ea["1"]?"granted":"denied",b))}var Di=function(){var a=vi();if(a.active&&void 0!==a.Zc)return Number(a.Zc-a.Le)},Ei=function(){var a=vi();return a.active&&a.Ea?a.tcString||"":""},Fi=function(a){if(!ri.hasOwnProperty(String(a)))return!0;var b=vi();return b.active&&b.Ea?!!b.Ea[String(a)]:!0};function Gi(a,b,c){function d(r){var t;K.reported_gclid||(K.reported_gclid={});t=K.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var u=[],w=function(B,z){z&&u.push(B+"="+encodeURIComponent(z))},v="https://www.google.com";if(hd()){var y=od(C.m);w("gcs",pd());r&&w("gcu","1");w("rnd",m);if((!f||h&&"aw.ds"!==h)&&od(C.m)){var x=ag("_gcl_aw");w("gclaw",x.join("."))}w("url",String(G.location).split(/[?#]/)[0]);w("dclid",Hi(b,k));!y&&b&&(v="https://pagead2.googlesyndication.com")}
w("gdpr_consent",Ei());"1"===Kf(!1)._up&&w("gtm_up","1");w("gclid",Hi(b,f));w("gclsrc",h);w("gtm",bi(!c));var A=v+"/pagead/landing?"+u.join("&");Vc(A)}}var e=dg(),f=e.gclid||"",h=e.gclsrc,k=e.dclid||"",l=!a&&(!f||h&&"aw.ds"!==h?!1:!0),n=hd();if(l||n){var m=""+bf();n?qd(function(){d();od(C.m)||kd(function(){return d(!0)},C.m)},[C.m]):d()}}function Hi(a,b){var c=a&&!od(C.m);return b&&c?"0":b}
var Ii=function(a){var b=Oh(a,"/pagead/conversion_async.js");return b?b:-1===navigator.userAgent.toLowerCase().indexOf("firefox")?N("https://","http://","www.googleadservices.com/pagead/conversion_async.js"):"https://www.google.com/pagead/conversion_async.js"},Ji=!1,Ki=[],Li=["aw","dc"],Mi=function(a){var b=G.google_trackConversion,c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},Ni=function(){for(;0<Ki.length;)Mi(Ki.shift())},Oi=function(a){if(!Ji){Ji=!0;mh();var b=function(){Ni();Ki={push:Mi}};
zg()?b():Lc(a,b,function(){Ni();Ji=!1})}},Pi=function(a){if(a){for(var b=[],c=0;c<a.length;++c){var d=a[c];d&&b.push({item_id:d.id,quantity:d.quantity,value:d.price,start_date:d.start_date,end_date:d.end_date})}return b}},Qi=function(a,b,c,d){function e(){Y("gdpr_consent",Ei());}
function f(T){var Q=!0;Q&&Ki.push(F)}var h=wg(a),k=b==C.ca,l=h.B[0],n=h.B[1],m=void 0!==n,r=function(T){return d.getWithConfig(T)},t=void 0!=r(C.O)&&!1!==r(C.O),q=!1!==r(C.Oa),u=r(C.Na)||r(C.Z),w=r(C.Y),v=r(C.fa),y=r(C.ia),x=r(C.za),A=Ii(x),B={prefix:u,domain:w,zb:v,flags:y};if(k){var z=r(C.sa)||{};
q&&(Sf(z[C.kb],!!z[C.K])&&ig(Li,B),fg(B),kg(["aw","dc"],B));r(C.rb)&&mg();z[C.K]&&jg(Li,z[C.K],z[C.mb],!!z[C.lb],u);Mg(h,d);Gi(!1,t,a)}var D=!1===r(C.Od)||!1===r(C.pb);if(!k||!m&&!D)if(!0===r(C.Pd)&&(m=!1),!1!==r(C.da)||m){var F={google_conversion_id:l,google_remarketing_only:!m,onload_callback:d.F,gtm_onFailure:d.D,google_conversion_format:"3",google_conversion_color:"ffffff",google_conversion_domain:"",google_conversion_label:n,google_conversion_language:r(C.Qa),google_conversion_value:r(C.ka),
google_conversion_currency:r(C.qa),google_conversion_order_id:r(C.qb),google_user_id:r(C.sb),google_conversion_page_url:r(C.nb),google_conversion_referrer_url:r(C.ob),google_gtm:bi()};m&&(F.google_transport_url=Nh(x,"/"));F.google_restricted_data_processing=r(C.Ec);zg()&&(F.opt_image_generator=function(){return new Image},F.google_enable_display_cookie_match=!1);!1===r(C.da)&&(F.google_allow_ad_personalization_signals=!1);F.google_read_gcl_cookie_opt_out=!q;q&&u&&(F.google_gcl_cookie_prefix=u);var L=
function(){var T={event:b},Q=d.eventModel;if(!Q)return null;p(Q,T);for(var M=0;M<C.Ld.length;++M)delete T[C.Ld[M]];return T}();L&&(F.google_custom_params=L);!m&&r(C.U)&&(F.google_gtag_event_data={items:r(C.U),value:r(C.ka)});if(m&&b==C.ra){F.google_conversion_merchant_id=r(C.Vd);F.google_basket_feed_country=r(C.Rd);F.google_basket_feed_language=r(C.Td);F.google_basket_discount=r(C.Qd);F.google_basket_transaction_type=b;F.google_disable_merchant_reported_conversions=!0===r(C.ae);zg()&&(F.google_disable_merchant_reported_conversions=
!0);var O=Pi(r(C.U));O&&(F.google_conversion_items=O)}var P=function(T,Q){void 0!=Q&&""!==Q&&(F.google_additional_conversion_params=F.google_additional_conversion_params||{},F.google_additional_conversion_params[T]=Q)},Y=function(T,Q){void 0!=Q&&""!==Q&&(F.google_additional_params=F.google_additional_params||{},F.google_additional_params[T]=Q)};"1"===Kf(!1)._up&&P("gtm_up","1");m&&(P("vdnc",r(C.ke)),P("vdltv",r(C.Wd)));e();F.google_gtm_url_processor=function(T){t&&(T=Pg(T));return T};(function(){hd()?
qd(function(){e();var T=od(C.m);if(m)P("gcs",pd()),T||x||!t||(F.google_transport_url="https://pagead2.googlesyndication.com/"),f(T);else if(T){f(T);return}T||kd(function(){F=p(F);!x&&F.google_transport_url&&delete F.google_transport_url;e();m&&(P("gcs",pd()),P("gcu","1"));f(!0)},C.m)},[C.m]):f(!0)})()}Oi(A)};
var Ri=function(a){return!(void 0===a||null===a||0===(a+"").length)},Si=function(a,b){var c;if(2===b.X)return a("ord",Aa(1E11,1E13)),!0;if(3===b.X)return a("ord","1"),a("num",Aa(1E11,1E13)),!0;if(4===b.X)return Ri(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.X)c="1";else if(6===b.X)c=b.ld;else return!1;Ri(c)&&a("qty",c);Ri(b.Xb)&&a("cost",b.Xb);Ri(b.transactionId)&&a("ord",b.transactionId);return!0},Ui=function(a,b,c){function d(x,A,B){m.hasOwnProperty(x)||(A=String(A),n.push(";"+x+"="+(B?A:Ti(A))))}
var e=a.Oc,f=a.qd,h=a.protocol;h+=f?"//"+e+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";var k=";",l=!od(C.m)&&a.Cb;l&&(h="https://ade.googlesyndication.com/ddm/activity",k="/",f=!1);var n=[k,"src="+Ti(e),";type="+Ti(a.Rc),";cat="+Ti(a.ub)],m=a.ig||{};Da(m,function(x,A){n.push(";"+Ti(x)+"="+Ti(A+""))});if(Si(d,a)){Ri(a.yc)&&d("u",a.yc);Ri(a.xc)&&d("tran",a.xc);d("gtm",bi());hd()&&(d("gcs",pd()),c&&d("gcu","1"));(function(x,A){A&&d(x,A)})("gdpr_consent",
Ei());"1"===Kf(!1)._up&&d("gtm_up","1");!1===a.Nf&&d("npa","1");if(a.Nc){var r=void 0===a.Cb?!0:!!a.Cb,t=rg("dc",a.Ra,r);t&&t.length&&d("gcldc",t.join("."));var q=rg("aw",a.Ra,r);q&&q.length&&d("gclaw",q.join("."));var u=sg(r);u&&d("gac",u);nf({prefix:a.Ra,zb:a.fg,domain:a.eg,flags:a.Qh});var w=jf[kf(a.Ra)];w&&d("auiddc",w)}Ri(a.fd)&&d("prd",a.fd,!0);Da(a.ud,function(x,A){d(x,A)});n.push(b||"");if(Ri(a.mc)){var v=a.mc||"";l&&(v=Ne(v));d("~oref",v)}var y=h+
n.join("")+"?";f?Nc(y,a.F):Oc(y,a.F,a.D)}else I(a.D)},Ti=encodeURIComponent,Vi=function(a,b){hd()?qd(function(){Ui(a,b);od(C.m)||kd(function(){Ui(a,b,!0)},C.m)},[C.m]):Ui(a,b)};
var Wi=function(a,b,c,d){function e(){var f={config:a,gtm:bi()};c&&(nf(d),f.auiddc=jf[kf(d.prefix)]);b&&(f.loadInsecure=b);void 0===G.__dc_ns_processor&&(G.__dc_ns_processor=[]);G.__dc_ns_processor.push(f);Lc((b?"http":"https")+"://www.googletagmanager.com/dclk/ns/v1.js")}od(C.m)?e():kd(e,C.m)},Xi=function(a){var b=/^u([1-9]\d?|100)$/,c=a.getWithConfig(C.Zd)||{},d=Yh(a),e={},f={};if(Ua(c))for(var h in c)if(c.hasOwnProperty(h)&&b.test(h)){var k=c[h];g(k)&&(e[h]=k)}for(var l=0;l<d.length;l++){var n=
d[l];b.test(n)&&(e[n]=n)}for(var m in e)e.hasOwnProperty(m)&&(f[m]=a.getWithConfig(e[m]));return f},Yi=function(a){function b(l,n,m){void 0!==m&&0!==(m+"").length&&d.push(l+n+":"+c(m+""))}var c=encodeURIComponent,d=[],e=a(C.U)||[];if(xa(e))for(var f=0;f<e.length;f++){var h=e[f],k=f+1;b("i",k,h.id);b("p",k,h.price);b("q",k,h.quantity);b("c",k,a(C.yh));b("l",k,a(C.Qa))}return d.join("|")},Zi=function(a){var b=/^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);if(b){var c={standard:2,unique:3,per_session:4,
transactions:5,items_sold:6,"":1}[(b[5]||"").toLowerCase()];if(c)return{containerId:"DC-"+b[1],ba:b[3]?a:"",Hf:b[1],Gf:b[3]||"",ub:b[4]||"",X:c}}},aj=function(a,b,c,d){var e=Zi(a);if(e){var f=function(Y){return d.getWithConfig(Y)},h=!1!==f(C.Oa),k=f(C.Na)||f(C.Z),l=f(C.Y),n=f(C.fa),m=f(C.ia),r=f(C.Eh),t=3===Ag();if(b===C.ca){var q={prefix:k,domain:l,zb:n,flags:m},u=f(C.sa)||{},w=f(C.Lb),v=void 0===w?!0:!!w;h&&(Sf(u[C.kb],!!u[C.K])&&ig($i,q),fg(q),kg($i,q),tg(v,q));u[C.K]&&jg($i,u[C.K],u[C.mb],!!u[C.lb],
k);f(C.rb)&&mg();if(r&&r.exclusion_parameters&&r.engines)if(zg()){}else Wi(r,t,h,q);var y=void 0!=f(C.O)&&!1!==f(C.O);Gi(!0,y,a);I(d.F)}else{var x={},A=f(C.Ah);if(Ua(A))for(var B in A)if(A.hasOwnProperty(B)){var z=A[B];void 0!==z&&null!==z&&(x[B]=z)}var D="";if(5===e.X||6===e.X)D=Yi(f);var F=Xi(d),L=!0===f(C.oh);if(zg()&&L){L=!1}var O=
void 0!=f(C.O)&&!1!==f(C.O),P={ub:e.ub,Nc:h,eg:l,fg:n,Ra:k,Xb:f(C.ka),X:e.X,ig:x,Oc:e.Hf,Rc:e.Gf,D:d.D,F:d.F,mc:Le(Me(G.location.href)),fd:D,protocol:t?"http:":"https:",ld:f(C.pf),qd:L,sessionId:f(C.jc),xc:void 0,transactionId:f(C.qb),yc:void 0,ud:F,Nf:!1!==f(C.da),eventId:d.eventId,Cb:O};Vi(P)}}else I(d.D)},$i=["aw","dc"];
var cj=function(a){function b(){var d=c,e=bj(JSON.stringify(a[d])),f="https://www.google.com/travel/flights/click/conversion/"+bj(a.conversion_id)+"/?"+d+"="+e;if(a.conversionLinkerEnabled){var h=rg("gf",a.cookiePrefix,void 0);if(h&&h.length)for(var k=0;k<h.length;k++)f+="&gclgf="+bj(h[k])}Oc(f,a.onSuccess,a.onFailure)}var c;if(a.hasOwnProperty("conversion_data"))c="conversion_data";else if(a.hasOwnProperty("price"))c="price";else return;od(C.m)?b():kd(b,C.m)},bj=function(a){return null===a||void 0===
a||0===String(a).length?"":encodeURIComponent(String(a))};
var dj=/.*\.google\.com(:\d+)?\/booking\/flights.*/,fj=function(a,b,c,d){var e=function(y){return d.getWithConfig(y)},f=wg(a).B[0],h=!1!==e(C.Oa),k=e(C.Na)||e(C.Z),l=e(C.Y),n=e(C.fa),m=e(C.ia);if(b===C.ca){if(h){var r={prefix:k,domain:l,flags:m,zb:n};fg(r);kg(["aw","dc"],r)}I(d.F)}else{var t={conversion_id:f,onFailure:d.D,onSuccess:d.F,conversionLinkerEnabled:h,cookiePrefix:k},q=dj.test(G.location.href);if(b===C.La){var u={partner_id:f,is_direct_booking:q,
total_price:e(C.ka),currency:e(C.qa)};t.price=u;cj(t);return}if(b!==C.ra)I(d.D);else{var w={partner_id:f,trip_type:e(C.wf),total_price:e(C.ka),currency:e(C.qa),is_direct_booking:q,flight_segment:ej(e(C.U))},v=e(C.me);v&&"object"===typeof v&&(w.passengers_total=Ea(v.total),w.passengers_adult=Ea(v.adult),w.passengers_child=Ea(v.child),w.passengers_infant_in_seat=Ea(v.infant_in_seat),w.passengers_infant_in_lap=Ea(v.infant_in_lap));t.conversion_data=
w;cj(t)}}},ej=function(a){if(a){for(var b=[],c=0,d=0;d<a.length;++d){var e=a[d];!e||void 0!==e.category&&""!==e.category&&"FlightSegment"!==e.category||(b[c]={cabin:e.travel_class,fare_product:e.fare_product,booking_code:e.booking_code,flight_number:e.flight_number,origin:e.origin,destination:e.destination,departure_date:e.start_date},c++)}return b}};
var kj=function(a,b,c,d){function e(){if(k){var x=b===C.La?rg("aw",l,void 0):rg("ha",l,void 0);w+=x.map(function(A){return"&gclha="+encodeURIComponent(A)}).join("")}Oc(w,d.F,d.D)}var f=wg(a),h=function(x){return d.getWithConfig(x)},k=!1!==h(C.Oa),l=h(C.Na)||h(C.Z),n=h(C.Y),m=h(C.fa),r=h(C.ia);if(b===C.ca){var t=h(C.sa)||{};if(k){var q={prefix:l,domain:n,flags:r,zb:m};Sf(t[C.kb],!!t[C.K])&&ig(gj,q);fg(q);kg(["aw","dc"],q)}t[C.K]&&jg(gj,t[C.K],t[C.mb],!!t[C.lb],l);I(d.F)}else{var u=f.B[0];if(/^\d+$/.test(u)){var w=
"https://www.googletraveladservices.com/travel/clk/pagead/conversion/"+encodeURIComponent(u)+"/";if(b===C.ra){var v=hj(h(C.qb),h(C.ka),h(C.qa),h(C.U));v=encodeURIComponent(ij(v));w+="?data="+v}else if(b===C.La){var y=jj(u,h(C.ka),h(C.ie),h(C.qa),h(C.U));y=encodeURIComponent(ij(y));w+="?label=FH&guid=ON&script=0&ord="+Aa(0,4294967295)+("&price="+y)}else{I(d.D);return}od(C.m)?e():kd(e,C.m)}else I(d.D)}},hj=function(a,b,c,d){var e={};lj(a)&&(e.hct_booking_xref=a);g(c)&&(e.hct_currency_code=c);lj(b)&&
(e.hct_total_price=b,e.hct_base_price=b);if(!xa(d)||0===d.length)return e;var f=d[0];if(!Ua(f))return e;lj(f[mj.Ba])&&(e.hct_partner_hotel_id=f[mj.Ba]);g(f[mj.va])&&(e.hct_checkin_date=f[mj.va]);g(f[mj.Za])&&(e.hct_checkout_date=f[mj.Za]);return e},jj=function(a,b,c,d,e){function f(m){void 0===m&&(m=0);if(lj(m))return l+m}function h(m,r,t){t(r)&&(k[m]=r)}var k={};k.partner_id=a;var l="USD";g(d)&&(l=k.currency=d);lj(b)&&(k.base_price_value_string=f(b),k.display_price_value_string=f(b));lj(c)&&(k.tax_price_value_string=
f(c));g("LANDING_PAGE")&&(k.page_type="LANDING_PAGE");if(!xa(e)||0==e.length)return k;var n=e[0];if(!Ua(n))return k;lj(n[mj.Ud])&&(k.total_price_value_string=f(n[mj.Ud]));h("partner_hotel_id",n[mj.Ba],lj);h("check_in_date",n[mj.va],g);h("check_out_date",n[mj.Za],g);h("adults",n[mj.xf],nj);h(mj.Yd,n[mj.Yd],g);h(mj.Xd,n[mj.Xd],g);return k},ij=function(a){var b=[];Da(a,function(c,d){b.push(c+"="+d)});return b.join(";")},lj=function(a){return g(a)||nj(a)},nj=function(a){return"number"===typeof a},mj=
{Ba:"id",Ud:"price",va:"start_date",Za:"end_date",xf:"occupancy",Yd:"room_id",Xd:"rate_rule_id"},gj=["ha"];
var qj=function(a,b,c,d){var e=wg(a),f=!1!==d.getWithConfig(C.Oa),h=d.getWithConfig(C.Na)||d.getWithConfig(C.Z),k=d.getWithConfig(C.ia);if(b===C.ca){if(f){var l={prefix:h,flags:k};fg(l);kg(["aw","dc"],l)}I(d.F)}else if(b===C.ra){var n=d.getWithConfig(C.ka),m=d.getWithConfig(C.qa),r=d.getWithConfig(C.me),t=d.getWithConfig(C.U),q={};if(g(n)||"number"===typeof n)q.base_price_value_string=""+m+n,q.tax_price_value_string=m+"0";Ua(r)&&"number"===typeof r.adult&&(q.adult_count=r.adult);if(xa(t)&&0!==t.length){var u=
t[0];if(Ua(u)){if(g(u[oj.Ba])||"number"===typeof u[oj.Ba])q.partner_hotel_id=u[oj.Ba];g(u[oj.va])&&(q.hotel_checkin_date=u[oj.va]);var w=u[oj.Za];g(w)&&(q.hotel_checkout_date=w,q.return_date=w);if(1!==t.length){var v=t[1];if(Ua(v)){q.origin_airport=v[oj.zf];q.departure_date=v[oj.va];for(var y=[v[oj.de]],x=[v[oj.Dd]],A=[v[oj.Jd]],B=null!==w&&g(w),z=1,D=2;D<t.length;D++){var F=t[D];Ua(F)&&(y.push(F[oj.de]),x.push(F[oj.Dd]),A.push(F[oj.Jd]),B&&F[oj.va]<w&&(z=D))}B&&(q.destination_airport=t[z][oj.df]);
q.cabins=y.join(",");q.booking_codes=x.join(",");q.flight_numbers=A.join(",")}}}}pj(e.B[0],q,f,h,d.F,d.D)}else I(d.D)},pj=function(a,b,c,d,e,f){function h(){c&&(n+=rg("gp",d,void 0).map(function(m){return"&gclgp="+encodeURIComponent(m)}).join(""));Oc(n,e,f)}if(/^\d+$/.test(a)){var k=encodeURIComponent(a),l=encodeURIComponent(rj(b)),n="https://www.googletraveladservices.com/travel/vacations/clk/pagead/conversion/"+k+"/?data="+l;od(C.m)?h():kd(h,C.m)}else I(f)},rj=function(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&
b.push(c+"="+a[c]);return b.join(";")},oj={Ba:"id",va:"start_date",Za:"end_date",zf:"origin",de:"travel_class",Dd:"booking_code",Jd:"flight_number",df:"destination"};var sj=function(){var a=!0;Fi(7)&&Fi(9)&&Fi(10)||(a=!1);var b=!0;b&&!Fi(3)&&(a=!1);return a},tj=function(){var a=!0;Fi(3)||(a=!1);return a};
var wj=function(a,b,c){if(hd()){var d=function(){var e=rh(),f=uj(a,b,"",c);vj(b,f.wa)&&(e(function(){e.remove(b)}),e("create",a,f.wa))};kd(d,C.J);kd(d,C.m)}},Ej=function(a,b,c){var d="https://www.google-analytics.com/analytics.js",e=th();if(ua(e)){var f="gtag_"+a.split("-").join("_"),h=function(v){var y=[].slice.call(arguments,0);y[0]=f+"."+y[0];e.apply(window,y)},k=function(){var v=function(B,z){for(var D=0;z&&D<z.length;D++)h(B,z[D])},y=xj(b,c);if(y){var x=y.action;if("impressions"===x)v("ec:addImpression",
y.Ag);else if("promo_click"===x||"promo_view"===x){var A=y.gd;v("ec:addPromo",y.gd);A&&0<A.length&&"promo_click"===x&&h("ec:setAction",x)}else v("ec:addProduct",y.Va),h("ec:setAction",x,y.tb)}},l=function(){if(zg()){}else{var v=c.getWithConfig(C.jf);v&&(h("require",v,{dataLayer:"dataLayer"}),h("require","render"))}},n=uj(a,f,b,c),m=function(v,y,x){x&&(y=""+y);n.xa[v]=y};vj(f,n.wa)&&(e(function(){rh()&&rh().remove(f)}),
yj[f]=!1);e("create",a,n.wa);if(n.wa._x_19){var r=Oh(n.wa._x_19,"/analytics.js");r&&(d=r);n.wa._x_20&&!yj[f]&&(yj[f]=!0,e(xh(f,n.wa._x_20)))}(function(){var v=c.getWithConfig("custom_map");e(function(){if(Ua(v)){var y=n.xa,x=rh().getByName(f),A;for(A in v)if(v.hasOwnProperty(A)&&/^(dimension|metric)\d+$/.test(A)&&void 0!=v[A]){var B=x.get(zj(v[A]));Aj(y,A,B)}}})})();(function(v){if(v){var y={};if(Ua(v))for(var x in Bj)Bj.hasOwnProperty(x)&&
Cj(Bj[x],x,v[x],y);h("require","linkid",y)}})(n.linkAttribution);var t=n[C.sa];if(t&&t[C.K]){var q=t[C.mb];uh(f+".",t[C.K],void 0===q?!!t.use_anchor:"fragment"===q,!!t[C.lb])}b===C.md?(l(),h("send","pageview",n.xa)):b===C.ca?(l(),Mg(a,c),c.getWithConfig(C.rb)&&mg(),0!=n.sendPageView&&h("send","pageview",n.xa),wj(a,f,c)):"screen_view"===b?h("send","screenview",n.xa):"timing_complete"===b?(m("timingCategory",n.eventCategory,!0),m("timingVar",n.name,!0),m("timingValue",Ea(n.value)),void 0!==n.eventLabel&&
m("timingLabel",n.eventLabel,!0),h("send","timing",n.xa)):"exception"===b?h("send","exception",n.xa):"optimize.callback"!==b&&(0<=ya([C.kd,"select_content",C.La,C.Tb,C.Vb,C.hb,"set_checkout_option",C.ra,C.Wb,"view_promotion","checkout_progress"],b)&&(h("require","ec","ec.js"),k()),m("eventCategory",n.eventCategory,!0),m("eventAction",n.eventAction||b,!0),void 0!==n.eventLabel&&m("eventLabel",n.eventLabel,!0),void 0!==n.value&&m("eventValue",Ea(n.value)),h("send","event",n.xa));if(!Dj){Dj=!0;mh();
var u=c.D,w=function(){rh().loaded||u()};zg()?I(w):Lc(d,w,u)}}else I(c.D)},Fj=function(a,b,c,d){qd(function(){Ej(a,b,d)},[C.J,C.m])},Dj,yj={},Gj={client_id:1,client_storage:"storage",cookie_name:1,cookie_domain:1,cookie_expires:1,cookie_path:1,cookie_update:1,cookie_flags:1,sample_rate:1,site_speed_sample_rate:1,use_amp_client_id:1,store_gac:1,conversion_linker:"storeGac"},Hj={anonymize_ip:1,app_id:1,app_installer_id:1,app_name:1,app_version:1,campaign:{name:"campaignName",source:"campaignSource",
medium:"campaignMedium",term:"campaignKeyword",content:"campaignContent",id:"campaignId"},currency:"currencyCode",description:"exDescription",fatal:"exFatal",language:1,non_interaction:1,page_hostname:"hostname",page_referrer:"referrer",page_path:"page",page_location:"location",page_title:"title",screen_name:1,transport_type:"transport",user_id:1},Ij={content_id:1,event_category:1,event_action:1,event_label:1,link_attribution:1,linker:1,method:1,name:1,send_page_view:1,value:1},Bj={cookie_name:1,
cookie_expires:"duration",levels:1},Jj={anonymize_ip:1,fatal:1,non_interaction:1,use_amp_client_id:1,send_page_view:1,store_gac:1,conversion_linker:1},Cj=function(a,b,c,d){if(void 0!==c)if(Jj[b]&&(c=Fa(c)),"anonymize_ip"!==b||c||(c=void 0),1===a)d[zj(b)]=c;else if(g(a))d[a]=c;else for(var e in a)a.hasOwnProperty(e)&&void 0!==c[e]&&(d[a[e]]=c[e])},zj=function(a){return a&&g(a)?a.replace(/(_[a-z])/g,function(b){return b[1].toUpperCase()}):a},Kj=function(a){var b="general";0<=ya([C.Md,C.Tb,C.Nd,C.hb,
"checkout_progress",C.ra,C.Wb,C.Vb,"set_checkout_option"],a)?b="ecommerce":0<=ya("generate_lead login search select_content share sign_up view_item view_item_list view_promotion view_search_results".split(" "),a)?b="engagement":"exception"===a&&(b="error");return b},Aj=function(a,b,c){a.hasOwnProperty(b)||(a[b]=c)},Lj=function(a){if(xa(a)){for(var b=[],c=0;c<a.length;c++){var d=a[c];if(void 0!=d){var e=d.id,f=d.variant;void 0!=e&&void 0!=f&&b.push(String(e)+"."+String(f))}}return 0<b.length?b.join("!"):
void 0}},uj=function(a,b,c,d){function e(F,L){void 0!==L&&(k[F]=L)}var f=function(F){return d.getWithConfig(F)},h={},k={},l={},n=Lj(f(C.cf));n&&Aj(k,"exp",n);var m=f("custom_map");if(Ua(m))for(var r in m)if(m.hasOwnProperty(r)&&/^(dimension|metric)\d+$/.test(r)&&void 0!=m[r]){var t=f(String(m[r]));void 0!==t&&Aj(k,r,t)}for(var q=Yh(d),u=0;u<q.length;++u){var w=q[u],v=f(w);if(Ij.hasOwnProperty(w))Cj(Ij[w],w,v,h);else if(Hj.hasOwnProperty(w))Cj(Hj[w],w,v,k);else if(Gj.hasOwnProperty(w))Cj(Gj[w],w,v,
l);else if(/^(dimension|metric|content_group)\d+$/.test(w))Cj(1,w,v,k);else if("developer_id"===w){var y=Pa(v);y&&(k["&did"]=y)}else w===C.Z&&0>ya(q,C.bc)&&(l.cookieName=v+"_ga")}Aj(l,"cookieDomain","auto");Aj(k,"forceSSL",!0);Aj(h,"eventCategory",Kj(c));0<=ya(["view_item","view_item_list","view_promotion","view_search_results"],c)&&Aj(k,"nonInteraction",!0);"login"===c||"sign_up"===c||"share"===c?Aj(h,"eventLabel",f(C.hf)):"search"===c||"view_search_results"===c?Aj(h,"eventLabel",f(C.sf)):"select_content"===
c&&Aj(h,"eventLabel",f(C.xh));var x=h[C.sa]||{},A=x[C.kb];A||0!=A&&x[C.K]?l.allowLinker=!0:!1===A&&Aj(l,"useAmpClientId",!1);!1!==f(C.uh)&&!1!==f(C.$a)&&sj()||(k.allowAdFeatures=!1);if(!1===f(C.da)||!tj()){var B="allowAdFeatures";k[B]=!1}l.name=b;k["&gtm"]=bi(!0);
k.hitCallback=d.F;hd()&&(k["&gcs"]=pd(),od(C.J)||(l.storage="none"),od(C.m)||(k.allowAdFeatures=!1,l.storeGac=!1));var z=f(C.za)||f(C.ff)||xe("gtag.remote_config."+a+".url",2),D=f(C.ef)||xe("gtag.remote_config."+a+".dualId",2);if(z&&null!=Ic){l._x_19=z;}D&&(l._x_20=D);h.xa=k;h.wa=l;return h},xj=function(a,b){function c(w){var v=p(w);v.list=w.list_name;v.listPosition=w.list_position;
v.position=w.list_position||w.creative_slot;v.creative=w.creative_name;return v}function d(w){for(var v=[],y=0;w&&y<w.length;y++)w[y]&&v.push(c(w[y]));return v.length?v:void 0}function e(w){return{id:f(C.qb),affiliation:f(C.Fh),revenue:f(C.ka),tax:f(C.ie),shipping:f(C.$e),coupon:f(C.Gh),list:f(C.wd)||w}}for(var f=function(w){return b.getWithConfig(w)},h=f(C.U),k,l=0;h&&l<h.length&&!(k=h[l][C.wd]);l++);var n=f("custom_map");if(Ua(n))for(var m=0;h&&m<h.length;++m){var r=h[m],t;for(t in n)n.hasOwnProperty(t)&&
/^(dimension|metric)\d+$/.test(t)&&void 0!=n[t]&&Aj(r,t,r[n[t]])}var q=null,u=f(C.Ye);a===C.ra||a===C.Wb?q={action:a,tb:e(),Va:d(h)}:a===C.Tb?q={action:"add",Va:d(h)}:a===C.Vb?q={action:"remove",Va:d(h)}:a===C.La?q={action:"detail",tb:e(k),Va:d(h)}:a===C.kd?q={action:"impressions",Ag:d(h)}:"view_promotion"===a?q={action:"promo_view",gd:d(u)}:"select_content"===a&&u&&0<u.length?q={action:"promo_click",gd:d(u)}:"select_content"===a?q={action:"click",tb:{list:f(C.wd)||k},Va:d(h)}:a===C.hb||"checkout_progress"===
a?q={action:"checkout",Va:d(h),tb:{step:a===C.hb?1:f(C.fe),option:f(C.ee)}}:"set_checkout_option"===a&&(q={action:"checkout_option",tb:{step:f(C.fe),option:f(C.ee)}});q&&(q.Rh=f(C.qa));return q},Mj={},vj=function(a,b){var c=Mj[a];Mj[a]=p(b);if(!c)return!1;for(var d in b)if(b.hasOwnProperty(d)&&b[d]!==c[d])return!0;for(var e in c)if(c.hasOwnProperty(e)&&c[e]!==b[e])return!0;return!1};function Nj(){var a=K;return a.gcq=a.gcq||new Oj}
var Pj=function(a,b,c){Nj().register(a,b,c)},Qj=function(a,b,c,d){Nj().push("event",[b,a],c,d)},Rj=function(a,b){Nj().push("config",[a],b)},Sj={},Tj=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.o=null;this.h=!1},Uj=function(a,b,c,d,e){this.type=a;this.o=b;this.ba=c||"";this.h=d;this.i=e},Oj=function(){this.o={};this.i={};this.h=[]},Vj=function(a,b){var c=wg(b);return a.o[c.containerId]=a.o[c.containerId]||new Tj},Wj=function(a,b,c){if(b){var d=wg(b);if(d&&1===
Vj(a,b).status){Vj(a,b).status=2;var e={};ne&&(e.timeoutId=G.setTimeout(function(){E(38);$d()},3E3));a.push("require",[e],d.containerId);Sj[d.containerId]=Ia();if(zg()){
}else{var h="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=G.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=Oh(c,h)||k;Lc(l)}}}},Xj=function(a,b,c,d){if(d.ba){var e=Vj(a,d.ba),f=e.o;if(f){var h=p(c),k=p(e.targetConfig[d.ba]),l=p(e.containerConfig),n=p(e.i),m=p(a.i),r=xe("gtm.uniqueEventId"),t=wg(d.ba).prefix,q=Xh(Wh(Vh(Uh(Th(Sh(Rh(h),k),l),n),m),function(){
re(r,t,"2");}),function(){re(r,t,"3");});try{re(r,t,"1");f(d.ba,b,d.o,q)}catch(u){re(r,t,"4");}}}};
Oj.prototype.register=function(a,b,c){if(3!==Vj(this,a).status){Vj(this,a).o=b;Vj(this,a).status=3;c&&(Vj(this,a).i=c);var d=wg(a),e=Sj[d.containerId];if(void 0!==e){var f=K[d.containerId].bootstrap,h=d.prefix.toUpperCase();K[d.containerId]._spx&&(h=h.toLowerCase());var k=xe("gtm.uniqueEventId"),l=h,n=Ia()-f;if(ne&&!ee[k]){k!==ae&&(Zd(),ae=k);var m=l+"."+Math.floor(f-e)+"."+Math.floor(n);je=je?je+","+m:"&cl="+m}delete Sj[d.containerId]}this.flush()}};
Oj.prototype.push=function(a,b,c,d){var e=Math.floor(Ia()/1E3);Wj(this,c,b[0][C.za]||this.i[C.za]);this.h.push(new Uj(a,e,c,b,d));d||this.flush()};
Oj.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Vj(this,c.ba).status&&!a)return;ne&&G.clearTimeout(c.h[0].timeoutId);break;case "set":Da(c.h[0],function(l,n){p(Oa(l,n),b.i)});break;case "config":var d=c.h[0],e=!!d[C.kc];delete d[C.kc];var f=Vj(this,c.ba),h=wg(c.ba),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.ba]={});f.h&&e||Xj(this,C.ca,d,c);f.h=!0;delete d[C.cb];k?p(d,f.containerConfig):
p(d,f.targetConfig[c.ba]);break;case "event":Xj(this,c.h[1],c.h[0],c)}this.h.shift()}};var Yj="HA GF GP G UA AW DC".split(" "),Zj=!1,ak={},bk=!1;function ck(a,b){var c={event:a};b&&(c.eventModel=p(b),b[C.Dc]&&(c.eventCallback=b[C.Dc]),b[C.Mb]&&(c.eventTimeout=b[C.Mb]));return c}var ek=function(){Zj=Zj||!K.gtagRegistered,K.gtagRegistered=!0,Zj&&(K.addTargetToGroup=function(a){dk(a,"default")});return Zj};
var fk=function(a){Da(ak,function(b,c){var d=ya(c,a);0<=d&&c.splice(d,1)})},dk=function(a,b){b=b.toString().split(",");for(var c=0;c<b.length;c++)ak[b[c]]=ak[b[c]]||[],ak[b[c]].push(a)};
var gk={config:function(a){var b=a[2]||{};if(2>a.length||!g(a[1])||!Ua(b))return;var c=wg(a[1]);if(!c)return;fk(c.id);dk(c.id,b[C.zc]||"default");delete b[C.zc];bk||E(43);Wd();if(ek()&&-1!==ya(Yj,c.prefix)){"G"===c.prefix&&(b[C.cb]=!0);Rj(b,c.id);return}Ae("gtag.targets."+c.id,void 0);Ae("gtag.targets."+c.id,p(b));var d={};d[C.Aa]=c.id;return ck(C.ca,d);},event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ua(a[2])&&
void 0!=a[2])return;c=a[2]}var d=ck(b,c);var e;var f=c&&c[C.Aa];void 0===f&&(f=xe(C.Aa,2),void 0===f&&(f="default"));if(g(f)||xa(f)){for(var h=f.toString().replace(/\s+/g,"").split(","),k=[],l=0;l<h.length;l++)0<=h[l].indexOf("-")?k.push(h[l]):k=k.concat(ak[h[l]]||[]);e=yg(k)}else e=void 0;var n=e;if(!n)return;var m=ek();Wd();for(var r=[],t=0;m&&t<n.length;t++){var q=n[t];if(-1!==ya(Yj,q.prefix)){var u=p(c);"G"===q.prefix&&(u[C.cb]=!0);Qj(b,u,q.id)}r.push(q.id)}d.eventModel=
d.eventModel||{};0<n.length?d.eventModel[C.Aa]=r.join():delete d.eventModel[C.Aa];bk||E(43);return d}},js:function(a){if(2==a.length&&a[1].getTime)return bk=!0,ek(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Ua(a[1])?b=p(a[1]):3==a.length&&g(a[1])&&(b={},Ua(a[2])||xa(a[2])?b[a[1]]=p(a[2]):b[a[1]]=a[2]);if(b){if(Wd(),ek()){p(b);var c=p(b);Nj().push("set",[c])}
b._clear=!0;return b}},consent:function(a){if(3===a.length){var b=function(){ek()&&p(a[2],{subcommand:a[1]})};E(39);var c=a[1];"default"===c?(b(),md(a[2])):"update"===c&&(b(),nd(a[2]))}}},hk={policy:!0};var ik=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},kk=function(a){var b=jk(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var lk=!1,mk=[];function nk(){if(!lk){lk=!0;for(var a=0;a<mk.length;a++)I(mk[a])}}var ok=function(a){lk?I(a):mk.push(a)};var Hk=function(a){if(Gk(a))return a;this.h=a};Hk.prototype.xg=function(){return this.h};var Gk=function(a){return!a||"object"!==Ra(a)||Ua(a)?!1:"getUntrustedUpdateValue"in a};Hk.prototype.getUntrustedUpdateValue=Hk.prototype.xg;var Ik=[],Jk=!1,Kk=function(a){return G["dataLayer"].push(a)},Lk=function(a){var b=K["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Mk(a){var b=a._clear;Da(a,function(f,h){"_clear"!==f&&(b&&Ae(f,void 0),Ae(f,h))});Rd||(Rd=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=Wd(),a["gtm.uniqueEventId"]=d,Ae("gtm.uniqueEventId",d));var e=Nk(a);switch(c){case "gtm.init":E(19),e&&E(20)}return e}
function Nk(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=K.zones;d=e?e.checkState(Md.C,c):Wg;return d.active?Mh(c,b,d.isAllowed||d.isWhitelist,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Ok(){for(var a=!1;!Jk&&0<Ik.length;){Jk=!0;delete ue.eventModel;we();var b=Ik.shift();if(null!=b){var c=Gk(b);if(c){var d=b;b=Gk(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=xe(h,1);if(xa(k)||Ua(k))k=p(k);ve[h]=k}}try{if(ua(b))try{b.call(ye)}catch(v){}else if(xa(b)){var l=
b;if(g(l[0])){var n=l[0].split("."),m=n.pop(),r=l.slice(1),t=xe(n.join("."),2);if(void 0!==t&&null!==t)try{t[m].apply(t,r)}catch(v){}}}else{var q=b;if(q&&("[object Arguments]"==Object.prototype.toString.call(q)||Object.prototype.hasOwnProperty.call(q,"callee"))){a:{var u=b;if(u.length&&g(u[0])){var w=gk[u[0]];if(w&&(!c||!hk[u[0]])){b=w(u);break a}}b=void 0}if(!b){Jk=!1;continue}}a=Mk(b)||a}}finally{c&&we(!0)}}Jk=!1}
return!a}function Pk(){var a=Ok();try{ik(G["dataLayer"],Md.C)}catch(b){}return a}
var Rk=function(){var a=Jc("dataLayer",[]),b=Jc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};dh(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});ok(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<K.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Hk(arguments[f])}else e=[].slice.call(arguments,0);var h=c.apply(a,e);Ik.push.apply(Ik,e);if(300<
this.length)for(E(4);300<this.length;)this.shift();var k="boolean"!==typeof h||h;return Ok()&&k};var d=a.slice(0);Ik.push.apply(Ik,d);Qk()&&I(Pk)},Qk=function(){var a=!0;return a};var Sk={};Sk.Nb=new String("undefined");
var Tk=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Sk.Nb?b:a[d]);return c.join("")}};Tk.prototype.toString=function(){return this.h("undefined")};Tk.prototype.valueOf=Tk.prototype.toString;Sk.Ef=Tk;Sk.Gc={};Sk.gg=function(a){return new Tk(a)};var Uk={};Sk.kh=function(a,b){var c=Wd();Uk[c]=[a,b];return c};Sk.ue=function(a){var b=a?0:1;return function(c){var d=Uk[c];if(d&&"function"===typeof d[b])d[b]();Uk[c]=void 0}};Sk.Fg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Sk.$g=function(a){if(a===Sk.Nb)return a;var b=Wd();Sk.Gc[b]=a;return'google_tag_manager["'+Md.C+'"].macro('+b+")"};Sk.Pg=function(a,b,c){a instanceof Sk.Ef&&(a=a.h(Sk.kh(b,c)),b=sa);return{Tc:a,F:b}};var Vk=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Rc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Wk=function(a){K.hasOwnProperty("autoEventsSettings")||(K.autoEventsSettings={});var b=K.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Xk=function(a,b,c){Wk(a)[b]=c},Yk=function(a,b,c,d){var e=Wk(a),f=Ja(e,b,d);e[b]=c(f)},Zk=function(a,b,c){var d=Wk(a);return Ja(d,b,c)};var $k=["input","select","textarea"],al=["button","hidden","image","reset","submit"],bl=function(a){var b=a.tagName.toLowerCase();return!za($k,function(c){return c===b})||"input"===b&&za(al,function(c){return c===a.type.toLowerCase()})?!1:!0},cl=function(a){return a.form?a.form.tagName?a.form:H.getElementById(a.form):Uc(a,["form"],100)},dl=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(bl(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var el=!!G.MutationObserver,fl=void 0,gl=function(a){if(!fl){var b=function(){var c=H.body;if(c)if(el)(new MutationObserver(function(){for(var e=0;e<fl.length;e++)I(fl[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Pc(c,"DOMNodeInserted",function(){d||(d=!0,I(function(){d=!1;for(var e=0;e<fl.length;e++)I(fl[e])}))})}};fl=[];H.body?b():I(b)}fl.push(a)};var Bl=G.clearTimeout,Cl=G.setTimeout,U=function(a,b,c){if(zg()){b&&I(b)}else return Lc(a,b,c)},Dl=function(){return new Date},El=function(){return G.location.href},Fl=function(a){return Ke(Me(a),"fragment")},Gl=function(a){return Le(Me(a))},Hl=function(a,b){return xe(a,b||2)},Il=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Kk(a)):d=Kk(a);return d},Jl=function(a,b){G[a]=b},W=function(a,b,c){b&&
(void 0===G[a]||c&&!G[a])&&(G[a]=b);return G[a]},Kl=function(a,b,c){return Qe(a,b,void 0===c?!0:!!c)},Ll=function(a,b,c){return 0===Ze(a,b,c)},Ml=function(a,b){if(zg()){b&&I(b)}else Nc(a,b)},Nl=function(a){return!!Zk(a,"init",!1)},Ol=function(a){Xk(a,"init",!0)},Pl=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Qd;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";U(N("https://","http://",c))},Ql=function(a,
b){var c=a[b];return c};
var Rl=Sk.Pg;function nm(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var om=new Ba;function pm(a,b){function c(h){var k=Me(h),l=Ke(k,"protocol"),n=Ke(k,"host",!0),m=Ke(k,"port"),r=Ke(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==m||"https"==l&&"443"==m)l="web",m="default";return[l,n,m,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function qm(a){return rm(a)?1:0}
function rm(a){var b=a.arg0,c=a.arg1;if(a.any_of&&xa(c)){for(var d=0;d<c.length;d++)if(qm({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(t){}}e=!1}return e;case "_ew":return nm(b,c);case "_eq":return String(b)==String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var k;k=String(b).split(",");return 0<=ya(k,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var l;var n=a.ignore_case?"i":void 0;try{var m=String(c)+n,r=om.get(m);r||(r=new RegExp(c,n),om.set(m,r));l=r.test(b)}catch(t){l=!1}return l;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return pm(b,c)}return!1};var sm={},tm=encodeURI,X=encodeURIComponent,um=Oc;var vm=function(a,b){if(!a)return!1;var c=Ke(Me(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var wm=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};sm.Gg=function(){var a=!1;return a};function Wn(){return G.gaGlobal=G.gaGlobal||{}}var Xn=function(){var a=Wn();a.hid=a.hid||Aa();return a.hid},Yn=function(a,b){var c=Wn();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var ho=window,io=document,jo=function(a){var b=ho._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ho["ga-disable-"+a])return!0;try{var c=ho.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Oe("AMP_TOKEN",String(io.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return io.getElementById("__gaOptOutExtension")?!0:!1};function mo(a){delete a.eventModel[C.cb];oo(a.eventModel)}var oo=function(a){Da(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[C.la]||{};Da(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var ro=function(a,b,c){Qj(b,c,a)},so=function(a,b,c){Qj(b,c,a,!0)},uo=function(a,b){};
function to(a,b){}var Z={a:{}};

Z.a.gtagha=["google"],function(){(function(a){Z.__gtagha=a;Z.__gtagha.b="gtagha";Z.__gtagha.g=!0;Z.__gtagha.priorityOverride=0})(function(a){I(a.vtp_gtmOnSuccess)})}();

Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Ce(a.vtp_gtmEventId,"event"))})}();

Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Hl(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.rep=["google"],function(){(function(a){Z.__rep=a;Z.__rep.b="rep";Z.__rep.g=!0;Z.__rep.priorityOverride=0})(function(a){var b;switch(wg(a.vtp_containerId).prefix){case "AW":b=Qi;break;case "DC":b=aj;break;case "GF":b=fj;break;case "GP":b=qj;break;case "HA":b=kj;break;case "UA":b=Fj;break;default:I(a.vtp_gtmOnFailure);return}I(a.vtp_gtmOnSuccess);Pj(a.vtp_containerId,b,a.vtp_remoteConfig||{})})}();



Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return Md.C})}();



Z.a.gtagaw=["google"],function(){(function(a){Z.__gtagaw=a;Z.__gtagaw.b="gtagaw";Z.__gtagaw.g=!0;Z.__gtagaw.priorityOverride=0})(function(a){var b="AW-"+String(a.vtp_conversionId);Qj(String(a.vtp_eventName),a.vtp_eventData||{},a.vtp_conversionLabel?b+"/"+String(a.vtp_conversionLabel):b);I(a.vtp_gtmOnSuccess)})}();

Z.a.get=["google"],function(){(function(a){Z.__get=a;Z.__get.b="get";Z.__get.g=!0;Z.__get.priorityOverride=0})(function(a){var b=a.vtp_settings;(a.vtp_deferrable?so:ro)(String(b.streamId),String(a.vtp_eventName),b.eventParameters||{});a.vtp_gtmOnSuccess()})}();


Z.a.gtagfl=[],function(){(function(a){Z.__gtagfl=a;Z.__gtagfl.b="gtagfl";Z.__gtagfl.g=!0;Z.__gtagfl.priorityOverride=0})(function(a){I(a.vtp_gtmOnSuccess)})}();

Z.a.gtaggf=["google"],function(){(function(a){Z.__gtaggf=a;Z.__gtaggf.b="gtaggf";Z.__gtaggf.g=!0;Z.__gtaggf.priorityOverride=0})(function(a){I(a.vtp_gtmOnSuccess)})}();
Z.a.gtaggp=["google"],function(){(function(a){Z.__gtaggp=a;Z.__gtaggp.b="gtaggp";Z.__gtaggp.g=!0;Z.__gtaggp.priorityOverride=0})(function(a){I(a.vtp_gtmOnSuccess)})}();


Z.a.gtagua=["google"],function(){(function(a){Z.__gtagua=a;Z.__gtagua.b="gtagua";Z.__gtagua.g=!0;Z.__gtagua.priorityOverride=0})(function(a){I(a.vtp_gtmOnSuccess)})}();


var vo={};vo.macro=function(a){if(Sk.Gc.hasOwnProperty(a))return Sk.Gc[a]},vo.onHtmlSuccess=Sk.ue(!0),vo.onHtmlFailure=Sk.ue(!1);vo.dataLayer=ye;vo.callback=function(a){Ud.hasOwnProperty(a)&&ua(Ud[a])&&Ud[a]();delete Ud[a]};function wo(){K[Md.C]=vo;La(Vd,Z.a);Ab=Ab||Sk;Bb=Nb}
function xo(){Xc.gtm_3pds=!0;Xc.gtag_cs_api=!0;K=G.google_tag_manager=G.google_tag_manager||{};var a=!1;Ci(),a=!0;if(K[Md.C]){var b=K.zones;b&&b.unregisterChild(Md.C);}else{for(var c=data.resource||{},d=c.macros||[],e=0;e<d.length;e++)tb.push(d[e]);for(var f=c.tags||[],h=0;h<f.length;h++)wb.push(f[h]);for(var k=c.predicates||[],l=0;l<k.length;l++)vb.push(k[l]);for(var n=c.rules||[],m=0;m<n.length;m++){for(var r=n[m],t={},q=0;q<r.length;q++)t[r[q][0]]=Array.prototype.slice.call(r[q],1);ub.push(t)}yb=Z;zb=qm;wo();Rk();Zg=!1;$g=0;if("interactive"==H.readyState&&!H.createEventObject||"complete"==H.readyState)bh();
else{Pc(H,"DOMContentLoaded",bh);Pc(H,"readystatechange",bh);if(H.createEventObject&&H.documentElement.doScroll){var u=!0;try{u=!G.frameElement}catch(x){}u&&ch()}Pc(G,"load",bh)}lk=!1;"complete"===H.readyState?nk():Pc(G,"load",nk);a:{if(!ne)break a;G.setInterval(oe,
864E5);}Sd=(new Date).getTime();vo.bootstrap=Sd;}}
(function(a){
a()})(xo);

})()
/**
 * http://anime-js.com
 * JavaScript animation engine
 * @version v2.0.2
 * @author Julian Garnier
 * @copyright ©2017 Julian Garnier
 * Released under the MIT license
**/

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.anime = factory();
  }
}(this, () => {

  // Defaults

  const defaultInstanceSettings = {
    update: undefined,
    begin: undefined,
    run: undefined,
    complete: undefined,
    loop: 1,
    direction: 'normal',
    autoplay: true,
    offset: 0
  }

  const defaultTweenSettings = {
    duration: 1000,
    delay: 0,
    easing: 'easeOutElastic',
    elasticity: 500,
    round: 0
  }

  const validTransforms = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skewX', 'skewY'];
  let transformString;

  // Utils

  function stringContains(str, text) {
    return str.indexOf(text) > -1;
  }

  const is = {
    arr: a => Array.isArray(a),
    obj: a => stringContains(Object.prototype.toString.call(a), 'Object'),
    svg: a => a instanceof SVGElement,
    dom: a => a.nodeType || is.svg(a),
    str: a => typeof a === 'string',
    fnc: a => typeof a === 'function',
    und: a => typeof a === 'undefined',
    hex: a => /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a),
    rgb: a => /^rgb/.test(a),
    hsl: a => /^hsl/.test(a),
    col: a => (is.hex(a) || is.rgb(a) || is.hsl(a))
  }

  // BezierEasing https://github.com/gre/bezier-easing

  const bezier = (() => {

    const kSplineTableSize = 11;
    const kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

    function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1 };
    function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1 };
    function C (aA1)      { return 3.0 * aA1 };

    function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT };
    function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1) };

    function binarySubdivide (aX, aA, aB, mX1, mX2) {
      let currentX, currentT, i = 0;
      do {
        currentT = aA + (aB - aA) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0.0) { aB = currentT } else { aA = currentT };
      } while (Math.abs(currentX) > 0.0000001 && ++i < 10);
      return currentT;
    }

    function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
      for (let i = 0; i < 4; ++i) {
        const currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0.0) return aGuessT;
        const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
      }
      return aGuessT;
    }

    function bezier(mX1, mY1, mX2, mY2) {

      if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) return;
      let sampleValues = new Float32Array(kSplineTableSize);

      if (mX1 !== mY1 || mX2 !== mY2) {
        for (let i = 0; i < kSplineTableSize; ++i) {
          sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        }
      }

      function getTForX(aX) {

        let intervalStart = 0.0;
        let currentSample = 1;
        const lastSample = kSplineTableSize - 1;

        for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
          intervalStart += kSampleStepSize;
        }

        --currentSample;

        const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        const guessForT = intervalStart + dist * kSampleStepSize;
        const initialSlope = getSlope(guessForT, mX1, mX2);

        if (initialSlope >= 0.001) {
          return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        } else if (initialSlope === 0.0) {
          return guessForT;
        } else {
          return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }

      }

      return x => {
        if (mX1 === mY1 && mX2 === mY2) return x;
        if (x === 0) return 0;
        if (x === 1) return 1;
        return calcBezier(getTForX(x), mY1, mY2);
      }

    }

    return bezier;

  })();

  const easings = (() => {

    const names = ['Quad', 'Cubic', 'Quart', 'Quint', 'Sine', 'Expo', 'Circ', 'Back', 'Elastic'];

    // Elastic easing adapted from jQueryUI http://api.jqueryui.com/easings/

    function elastic(t, p) {
      return t === 0 || t === 1 ? t :
      -Math.pow(2, 10 * (t - 1)) * Math.sin((((t - 1) - (p / (Math.PI * 2.0) * Math.asin(1))) * (Math.PI * 2)) / p );
    }

    // Approximated Penner equations http://matthewlein.com/ceaser/

    const equations = {
      In: [
        [0.550, 0.085, 0.680, 0.530], /* InQuad */
        [0.550, 0.055, 0.675, 0.190], /* InCubic */
        [0.895, 0.030, 0.685, 0.220], /* InQuart */
        [0.755, 0.050, 0.855, 0.060], /* InQuint */
        [0.470, 0.000, 0.745, 0.715], /* InSine */
        [0.950, 0.050, 0.795, 0.035], /* InExpo */
        [0.600, 0.040, 0.980, 0.335], /* InCirc */
        [0.600, -0.280, 0.735, 0.045], /* InBack */
        elastic /* InElastic */
      ], Out: [
        [0.250, 0.460, 0.450, 0.940], /* OutQuad */
        [0.215, 0.610, 0.355, 1.000], /* OutCubic */
        [0.165, 0.840, 0.440, 1.000], /* OutQuart */
        [0.230, 1.000, 0.320, 1.000], /* OutQuint */
        [0.390, 0.575, 0.565, 1.000], /* OutSine */
        [0.190, 1.000, 0.220, 1.000], /* OutExpo */
        [0.075, 0.820, 0.165, 1.000], /* OutCirc */
        [0.175, 0.885, 0.320, 1.275], /* OutBack */
        (t, f) => 1 - elastic(1 - t, f) /* OutElastic */
      ], InOut: [
        [0.455, 0.030, 0.515, 0.955], /* InOutQuad */
        [0.645, 0.045, 0.355, 1.000], /* InOutCubic */
        [0.770, 0.000, 0.175, 1.000], /* InOutQuart */
        [0.860, 0.000, 0.070, 1.000], /* InOutQuint */
        [0.445, 0.050, 0.550, 0.950], /* InOutSine */
        [1.000, 0.000, 0.000, 1.000], /* InOutExpo */
        [0.785, 0.135, 0.150, 0.860], /* InOutCirc */
        [0.680, -0.550, 0.265, 1.550], /* InOutBack */
        (t, f) => t < .5 ? elastic(t * 2, f) / 2 : 1 - elastic(t * -2 + 2, f) / 2 /* InOutElastic */
      ]
    }

    let functions = {
      linear: bezier(0.250, 0.250, 0.750, 0.750)
    }

    for (let type in equations) {
      equations[type].forEach((f, i) => {
        functions['ease'+type+names[i]] = is.fnc(f) ? f : bezier.apply(this, f);
      });
    }

    return functions;

  })();

  // Strings

  function stringToHyphens(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  function selectString(str) {
    if (is.col(str)) return;
    try {
      let nodes = document.querySelectorAll(str);
      return nodes;
    } catch(e) {
      return;
    }
  }

  // Arrays

  function arrayLength(arr) {
    return arr.length;
  }

  function flattenArray(arr) {
    return arr.reduce((a, b) => a.concat(is.arr(b) ? flattenArray(b) : b), []);
  }

  function toArray(o) {
    if (is.arr(o)) return o;
    if (is.str(o)) o = selectString(o) || o;
    if (o instanceof NodeList || o instanceof HTMLCollection) return [].slice.call(o);
    return [o];
  }

  function arrayContains(arr, val) {
    return arr.some(a => a === val);
  }

  // Objects

  function objectHas(obj, prop) {
    return obj.hasOwnProperty(prop);
  }

  function cloneObject(o) {
    let clone = {};
    for (let p in o) clone[p] = o[p];
    return clone;
  }

  function replaceObjectProps(o1, o2) {
    let o = cloneObject(o1);
    for (let p in o1) o[p] = objectHas(o2, p) ? o2[p] : o1[p];
    return o;
  }

  function mergeObjects(o1, o2) {
    let o = cloneObject(o1);
    for (let p in o2) o[p] = is.und(o1[p]) ? o2[p] : o1[p];
    return o;
  }

  // Colors

  function hexToRgb(hexValue) {
    const rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const hex = hexValue.replace(rgx, (m, r, g, b) => r + r + g + g + b + b );
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const r = parseInt(rgb[1], 16);
    const g = parseInt(rgb[2], 16);
    const b = parseInt(rgb[3], 16);
    return `rgb(${r},${g},${b})`;
  }

  function hslToRgb(hslValue) {
    const hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue);
    const h = parseInt(hsl[1]) / 360;
    const s = parseInt(hsl[2]) / 100;
    const l = parseInt(hsl[3]) / 100;
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }
    let r, g, b;
    if (s == 0) {
      r = g = b = l;
    } else {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
    }
    return `rgb(${r * 255},${g * 255},${b * 255})`;
  }

  function colorToRgb(val) {
    if (is.rgb(val)) return val;
    if (is.hex(val)) return hexToRgb(val);
    if (is.hsl(val)) return hslToRgb(val);
  }

  // Units

  function getUnit(val) {
    const split = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(val);
    if (split) return split[2];
  }

  function getTransformUnit(propName) {
    if (stringContains(propName, 'translate')) return 'px';
    if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) return 'deg';
  }

  // Values

  function parseFloatValue(val) {
    return parseFloat(val);
  }

  function minMaxValue(val, min, max) {
    return Math.min(Math.max(val, min), max);
  }

  function getFunctionValue(val, animatable) {
    if (!is.fnc(val)) return val;
    return val(animatable.target, animatable.id, animatable.total);
  }

  function getCSSValue(el, prop) {
    if (prop in el.style) {
      return getComputedStyle(el).getPropertyValue(stringToHyphens(prop)) || '0';
    }
  }

  function getAnimationType(el, prop) {
    if (is.dom(el) && arrayContains(validTransforms, prop)) return 'transform';
    if (is.dom(el) && (el.getAttribute(prop) || (is.svg(el) && el[prop]))) return 'attribute';
    if (is.dom(el) && (prop !== 'transform' && getCSSValue(el, prop))) return 'css';
    if (el[prop] != null) return 'object';
  }

  function getTransformValue(el, propName) {
    const defaultUnit = getTransformUnit(propName);
    const defaultVal = stringContains(propName, 'scale') ? 1 : 0 + defaultUnit;
    const str = el.style.transform;
    if (!str) return defaultVal;
    let match = [];
    let props = [];
    let values = [];
    const rgx = /(\w+)\((.+?)\)/g;
    while (match = rgx.exec(str)) {
      props.push(match[1]);
      values.push(match[2]);
    }
    const value = values.filter((val, i) => props[i] === propName );
    return arrayLength(value) ? value[0] : defaultVal;
  }

  function getOriginalTargetValue(target, propName) {
    switch (getAnimationType(target, propName)) {
      case 'transform': return getTransformValue(target, propName);
      case 'css': return getCSSValue(target, propName);
      case 'attribute': return target.getAttribute(propName);
    }
    return target[propName] || 0;
  }

  function getRelativeValue(to, from) {
    const operator = /^(\*=|\+=|-=)/.exec(to);
    if (!operator) return to;
    const x = parseFloatValue(from);
    const y = parseFloatValue(to.replace(operator[0], ''));
    switch (operator[0][0]) {
      case '+': return x + y;
      case '-': return x - y;
      case '*': return x * y;
    }
  }

  function validateValue(val, unit) {
    if (is.col(val)) return colorToRgb(val);
    const originalUnit = getUnit(val);
    const unitLess = originalUnit ? val.substr(0, arrayLength(val) - arrayLength(originalUnit)) : val;
    return unit ? unitLess + unit : unitLess;
  }

  // Motion path

  function isPath(val) {
    return is.obj(val) && objectHas(val, 'totalLength');
  }

  function setDashoffset(el) {
    const pathLength = el.getTotalLength();
    el.setAttribute('stroke-dasharray', pathLength);
    return pathLength;
  }

  function getPath(path, percent) {
    const el = is.str(path) ? selectString(path)[0] : path;
    const p = percent || 100;
    return function(prop) {
      return {
        el: el,
        property: prop,
        totalLength: el.getTotalLength() * (p / 100)
      }
    }
  }

  function getPathProgress(path, progress) {
    function point(offset = 0) {
      const l = progress + offset >= 1 ? progress + offset : 0;
      return path.el.getPointAtLength(l);
    }
    const p = point();
    const p0 = point(-1);
    const p1 = point(+1);
    switch (path.property) {
      case 'x': return p.x;
      case 'y': return p.y;
      case 'angle': return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
    }
  }

  // Decompose / recompose functions adapted from Animate Plus https://github.com/bendc/animateplus

  function decomposeValue(val, unit) {
    const rgx = /-?\d*\.?\d+/g;
    const value = validateValue((isPath(val) ? val.totalLength : val), unit) + '';
    return {
      original: value,
      numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
      strings: value.split(rgx)
    }
  }

  function recomposeValue(numbers, strings) {
    return strings.reduce((a, b, i) => a + numbers[i - 1] + b);
  }

  // Animatables

  function parseTargets(targets) {
    const targetsArray = targets ? (flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets))) : [];
    return targetsArray.filter((item, pos, self) => self.indexOf(item) === pos);
  }

  function getAnimatables(targets) {
    const parsed = parseTargets(targets);
    return parsed.map((t, i) => {
      return {target: t, id: i, total: arrayLength(parsed)};
    });
  }

  // Properties

  function normalizePropertyTweens(prop, tweenSettings) {
    let settings = cloneObject(tweenSettings);
    if (is.arr(prop)) {
      const l = arrayLength(prop);
      const isFromTo = (l === 2 && !is.obj(prop[0]));
      if (!isFromTo) {
        // Duration divided by the number of tweens
        if (!is.fnc(tweenSettings.duration)) settings.duration = tweenSettings.duration / l;
      } else {
        // Transform [from, to] values shorthand to a valid tween value
        prop = {value: prop};
      }
    }
    return toArray(prop).map((v, i) => {
      // Default delay value should be applied only on the first tween
      const delay = !i ? tweenSettings.delay : 0;
      // Use path object as a tween value
      let obj = is.obj(v) && !isPath(v) ? v : {value: v};
      // Set default delay value
      if (is.und(obj.delay)) obj.delay = delay;
      return obj;
    }).map(k => mergeObjects(k, settings));
  }

  function getProperties(instanceSettings, tweenSettings, params) {
    let properties = [];
    const settings = mergeObjects(instanceSettings, tweenSettings);
    for (let p in params) {
      if (!objectHas(settings, p) && p !== 'targets') {
        properties.push({
          name: p,
          offset: settings['offset'],
          tweens: normalizePropertyTweens(params[p], tweenSettings)
        });
      }
    }
    return properties;
  }

  // Tweens

  function normalizeTweenValues(tween, animatable) {
    let t = {};
    for (let p in tween) {
      let value = getFunctionValue(tween[p], animatable);
      if (is.arr(value)) {
        value = value.map(v => getFunctionValue(v, animatable));
        if (arrayLength(value) === 1) value = value[0];
      }
      t[p] = value;
    }
    t.duration = parseFloatValue(t.duration);
    t.delay = parseFloatValue(t.delay);
    return t;
  }

  function normalizeEasing(val) {
    return is.arr(val) ? bezier.apply(this, val) : easings[val];
  }

  function normalizeTweens(prop, animatable) {
    let previousTween;
    return prop.tweens.map(t => {
      let tween = normalizeTweenValues(t, animatable);
      const tweenValue = tween.value;
      const originalValue = getOriginalTargetValue(animatable.target, prop.name);
      const previousValue = previousTween ? previousTween.to.original : originalValue;
      const from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
      const to = getRelativeValue(is.arr(tweenValue) ? tweenValue[1] : tweenValue, from);
      const unit = getUnit(to) || getUnit(from) || getUnit(originalValue);
      tween.isPath = isPath(tweenValue);
      tween.from = decomposeValue(from, unit);
      tween.to = decomposeValue(to, unit);
      tween.start = previousTween ? previousTween.end : prop.offset;
      tween.end = tween.start + tween.delay + tween.duration;
      tween.easing = normalizeEasing(tween.easing);
      tween.elasticity = (1000 - minMaxValue(tween.elasticity, 1, 999)) / 1000;
      if (is.col(tween.from.original)) tween.round = 1;
      previousTween = tween;
      return tween;
    });
  }

  // Tween progress

  const setTweenProgress = {
    css: (t, p, v) => t.style[p] = v,
    attribute: (t, p, v) => t.setAttribute(p, v),
    object: (t, p, v) => t[p] = v,
    transform: (t, p, v, transforms, id) => {
      if (!transforms[id]) transforms[id] = [];
      transforms[id].push(`${p}(${v})`);
    }
  }

  // Animations

  function createAnimation(animatable, prop) {
    const animType = getAnimationType(animatable.target, prop.name);
    if (animType) {
      const tweens = normalizeTweens(prop, animatable);
      return {
        type: animType,
        property: prop.name,
        animatable: animatable,
        tweens: tweens,
        duration: tweens[arrayLength(tweens) - 1].end,
        delay: tweens[0].delay
      }
    }
  }

  function getAnimations(animatables, properties) {
    return flattenArray(animatables.map(animatable => {
      return properties.map(prop => {
        return createAnimation(animatable, prop);
      });
    })).filter(a => !is.und(a));
  }

  // Create Instance

  function getInstanceTimings(type, animations, tweenSettings) {
    const math = (type === 'delay') ? Math.min : Math.max;
    return arrayLength(animations) ? math.apply(Math, animations.map(anim => anim[type])) : tweenSettings[type];
  }

  function createNewInstance(params) {
    const instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
    const tweenSettings = replaceObjectProps(defaultTweenSettings, params);
    const animatables = getAnimatables(params.targets);
    const properties = getProperties(instanceSettings, tweenSettings, params);
    const animations = getAnimations(animatables, properties);
    return mergeObjects(instanceSettings, {
      children: [],
      animatables: animatables,
      animations: animations,
      duration: getInstanceTimings('duration', animations, tweenSettings),
      delay: getInstanceTimings('delay', animations, tweenSettings)
    });
  }

  // Core

  let activeInstances = [];
  let raf = 0;

  const engine = (() => {
    function play() { raf = requestAnimationFrame(step); };
    function step(t) {
      const activeLength = arrayLength(activeInstances);
      if (activeLength) {
        let i = 0;
        while (i < activeLength) {
          if (activeInstances[i]) activeInstances[i].tick(t);
          i++;
        }
        play();
      } else {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }
    return play;
  })();


  // Public Instance

  function anime(params = {}) {

    let now, startTime, lastTime = 0;

    let resolve = null;

    function makePromise() {
      return window.Promise && new Promise(_resolve => resolve = _resolve);
    }

    let promise = makePromise();

    let instance = createNewInstance(params);

    instance.reset = function() {
      const direction = instance.direction;
      const loops = instance.loop;
      instance.currentTime = 0;
      instance.progress = 0;
      instance.paused = true;
      instance.began = false;
      instance.completed = false;
      instance.reversed = direction === 'reverse';
      instance.remaining = direction === 'alternate' && loops === 1 ? 2 : loops;
      for (let i = arrayLength(instance.children); i--; ){
        const child = instance.children[i];
        child.seek(child.offset); 
        child.reset();
      }
    }

    function toggleInstanceDirection() {
      instance.reversed = !instance.reversed;
    }

    function adjustTime(time) {
      return instance.reversed ? instance.duration - time : time;
    }

    function syncInstanceChildren(time) {
      const children = instance.children;
      if (time >= instance.currentTime) {
        for (let i = 0; i < arrayLength(children); i++) children[i].seek(time);
      } else {
        for (let i = arrayLength(children); i--;) children[i].seek(time);
      }
    }

    function setAnimationsProgress(insTime) {
      let i = 0;
      let transforms = {};
      const animations = instance.animations;
      while (i < arrayLength(animations)) {
        const anim = animations[i];
        const animatable = anim.animatable;
        const tweens = anim.tweens;
        const tween = tweens.filter(t => (insTime < t.end))[0] || tweens[arrayLength(tweens) - 1];
        const isPath = tween.isPath;
        const round = tween.round;
        const elapsed = minMaxValue(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
        const eased = tween.easing(elapsed, tween.elasticity);
        const progress = recomposeValue(tween.to.numbers.map((number, p) => {
          const start = isPath ? 0 : tween.from.numbers[p];
          let value = start + eased * (number - start);
          if (isPath) value = getPathProgress(tween.value, value);
          if (round) value = Math.round(value * round) / round;
          return value;
        }), tween.to.strings);
        setTweenProgress[anim.type](animatable.target, anim.property, progress, transforms, animatable.id);
        anim.currentValue = progress;
        i++;
      }
      if (transforms) {
        let id; for (id in transforms) {
          if (!transformString) {
            const t = 'transform';
            transformString = (getCSSValue(document.body, t) ? t : `-webkit-${t}`);
          }
          instance.animatables[id].target.style[transformString] = transforms[id].join(' ');
        }
      }
      instance.currentTime = insTime;
      instance.progress = (insTime / instance.duration) * 100;
    }

    function setCallback(cb) {
      if (instance[cb]) instance[cb](instance);
    }

    function countIteration() {
      if (instance.remaining && instance.remaining !== true) {
        instance.remaining--;
      }
    }

    function setInstanceProgress(engineTime) {
      const insDuration = instance.duration;
      const insOffset = instance.offset;
      const insDelay = instance.delay;
      const insCurrentTime = instance.currentTime;
      const insReversed = instance.reversed;
      const insTime = minMaxValue(adjustTime(engineTime), 0, insDuration);
      if (instance.children) syncInstanceChildren(insTime);
      if (insTime > insOffset && insTime < insDuration) {
        setAnimationsProgress(insTime);
        if (!instance.began && insTime >= insDelay) {
          instance.began = true;
          setCallback('begin');
        }
        setCallback('run');
      } else {
        if (insTime <= insOffset && insCurrentTime !== 0) {
          setAnimationsProgress(0);
          if (insReversed) countIteration();
        }
        if (insTime >= insDuration && insCurrentTime !== insDuration) {
          setAnimationsProgress(insDuration);
          if (!insReversed) countIteration();
        }
      }
      if (engineTime >= insDuration) {
        if (instance.remaining) {
          startTime = now;
          if (instance.direction === 'alternate') toggleInstanceDirection();
        } else {
          instance.pause();
          if ('Promise' in window) {
            resolve();
            promise = makePromise();
          }
          if (!instance.completed) {
            instance.completed = true;
            setCallback('complete');
          }
        }
        lastTime = 0;
      }
      setCallback('update');
    }

    instance.tick = function(t) {
      now = t;
      if (!startTime) startTime = now;
      const engineTime = (lastTime + now - startTime) * anime.speed;
      setInstanceProgress(engineTime);
    }

    instance.seek = function(time) {
      setInstanceProgress(adjustTime(time));
    }

    instance.pause = function() {
      const i = activeInstances.indexOf(instance);
      if (i > -1) activeInstances.splice(i, 1);
      instance.paused = true;
    }

    instance.play = function() {
      if (!instance.paused) return;
      instance.paused = false;
      startTime = 0;
      lastTime = adjustTime(instance.currentTime);
      activeInstances.push(instance);
      if (!raf) engine();
    }

    instance.reverse = function() {
      toggleInstanceDirection();
      startTime = 0;
      lastTime = adjustTime(instance.currentTime);
    }

    instance.restart = function() {
      instance.pause();
      instance.reset();
      instance.play();
    }

    instance.finished = promise;

    instance.reset();

    if (instance.autoplay) instance.play();

    return instance;

  }

  // Remove targets from animation

  function removeTargets(targets) {
    const targetsArray = parseTargets(targets);
    for (let i = arrayLength(activeInstances); i--;) {
      const instance = activeInstances[i];
      const animations = instance.animations;
      for (let a = arrayLength(animations); a--;) {
        if (arrayContains(targetsArray, animations[a].animatable.target)) {
          animations.splice(a, 1);
          if (!arrayLength(animations)) instance.pause();
        }
      }
    }
  }

  // Timeline

  function timeline(params) {
    let tl = anime(params);
    tl.pause();
    tl.duration = 0;
    tl.add = function(instancesParams) {
      tl.children.forEach( i => { i.began = true; i.completed = true; });
      toArray(instancesParams).forEach(insParams => {
        const tlDuration = tl.duration;
        const insOffset = insParams.offset;
        insParams.autoplay = false;
        insParams.offset = is.und(insOffset) ? tlDuration : getRelativeValue(insOffset, tlDuration);
        tl.seek(insParams.offset);
        const ins = anime(insParams);
        if (ins.duration > tlDuration) tl.duration = ins.duration;
        ins.began = true;
        tl.children.push(ins);
      });
      tl.reset();
      tl.seek(0);
      if (tl.autoplay) tl.restart();
      return tl;
    }
    return tl;
  }

  anime.version = '2.0.2';
  anime.speed = 1;
  anime.running = activeInstances;
  anime.remove = removeTargets;
  anime.getValue = getOriginalTargetValue;
  anime.path = getPath;
  anime.setDashoffset = setDashoffset;
  anime.bezier = bezier;
  anime.easings = easings;
  anime.timeline = timeline;
  anime.random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  return anime;

}));