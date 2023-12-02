// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("path")):"function"==typeof define&&define.amd?define(["path"],e):(r="undefined"!=typeof globalThis?globalThis:r||self).snansum=e(r.require$$0)}(this,(function(r){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty;function n(r){return"number"==typeof r}function o(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+o(i):o(i)+r,n&&(r="-"+r)),r}var a=String.prototype.toLowerCase,c=String.prototype.toUpperCase;function u(r){var e,t,o;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==e)&&(o=4294967295+o+1),o<0?(t=(-o).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(e),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===c.call(r.specifier)?c.call(t):a.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function f(r){return"string"==typeof r}var l=Math.abs,s=String.prototype.toLowerCase,p=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,y=/e-(\d)$/,h=/^(\d+)$/,b=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,m=/(\..*[^0])0*e/;function j(r){var e,t,o=parseFloat(r.arg);if(!isFinite(o)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);o=r.arg}switch(r.specifier){case"e":case"E":t=o.toExponential(r.precision);break;case"f":case"F":t=o.toFixed(r.precision);break;case"g":case"G":l(o)<1e-4?((e=r.precision)>0&&(e-=1),t=o.toExponential(e)):t=o.toPrecision(r.precision),r.alternate||(t=g.call(t,m,"$1e"),t=g.call(t,w,"e"),t=g.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=g.call(t,d,"e+0$1"),t=g.call(t,y,"e-0$1"),r.alternate&&(t=g.call(t,h,"$1."),t=g.call(t,b,"$1.e")),o>=0&&r.sign&&(t=r.sign+t),t=r.specifier===p.call(r.specifier)?p.call(t):s.call(t)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function E(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var S=String.fromCharCode,A=isNaN,x=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function O(r){var e,t,n,o,a,c,l,s,p;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",l=1,s=0;s<r.length;s++)if(f(n=r[s]))c+=n;else{if(e=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(o=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,A(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,A(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!A(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=A(a)?String(n.arg):S(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=j(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=E(n.arg,n.width,n.padRight)),c+=n.arg||"",l+=1}return c}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,o;for(t=[],o=0,n=F.exec(r);n;)(e=r.slice(o,F.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),o=F.lastIndex,n=F.exec(r);return(e=r.slice(o)).length&&t.push(e),t}function V(r){return"string"==typeof r}function P(r){var e,t,n;if(!V(r))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=I(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return O.apply(null,t)}var $,C=Object.prototype,R=C.toString,B=C.__defineGetter__,N=C.__defineSetter__,q=C.__lookupGetter__,L=C.__lookupSetter__;$=function(){try{return e({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===R.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((o="value"in t)&&(q.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&B&&B.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var M=$;function G(r,e,t){M(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var Z=Object,W=/./;function U(r){return"boolean"==typeof r}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function z(){return X&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;var Y,H="function"==typeof Symbol?Symbol:void 0,K="function"==typeof H?H.toStringTag:"";Y=z()?function(r){var e,t,n,o,i;if(null==r)return D.call(r);t=r[K],i=K,e=null!=(o=r)&&J.call(o,i);try{r[K]=void 0}catch(e){return D.call(r)}return n=D.call(r),e?r[K]=t:delete r[K],n}:function(r){return D.call(r)};var Q=Y,rr=Boolean,er=Boolean.prototype.toString;var tr=z();function nr(r){return"object"==typeof r&&(r instanceof rr||(tr?function(r){try{return er.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===Q(r)))}function or(r){return U(r)||nr(r)}function ir(){return new Function("return this;")()}G(or,"isPrimitive",U),G(or,"isObject",nr);var ar="object"==typeof self?self:null,cr="object"==typeof window?window:null,ur="object"==typeof global?global:null,fr="object"==typeof globalThis?globalThis:null;var lr=function(r){if(arguments.length){if(!U(r))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return ir()}if(fr)return fr;if(ar)return ar;if(cr)return cr;if(ur)return ur;throw new Error("unexpected error. Unable to resolve global object.")}(),sr=lr.document&&lr.document.childNodes,pr=Int8Array;function gr(){return/^\s*function\s*([^(]*)/i}var dr,yr=/^\s*function\s*([^(]*)/i;G(gr,"REGEXP",yr),dr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Q(r)};var hr=dr;function br(r){return null!==r&&"object"==typeof r}var vr=function(r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!hr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(br);function wr(r){var e,t,n,o;if(("Object"===(t=Q(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return br(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}G(br,"isObjectLikeArray",vr);var mr="function"==typeof W||"object"==typeof pr||"function"==typeof sr?function(r){return wr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?wr(r).toLowerCase():e};var jr,_r,Er=Object.getPrototypeOf;_r=Object.getPrototypeOf,jr="function"===mr(_r)?Er:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===Q(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Sr=jr;function Ar(r){return null==r?null:(r=Z(r),Sr(r))}function xr(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===Q(r))return!0;r=Ar(r)}return!1}var kr="function"==typeof Math.fround?Math.fround:null,Or="function"==typeof Float32Array;var Fr=Number.POSITIVE_INFINITY,Tr="function"==typeof Float32Array?Float32Array:null;var Ir,Vr="function"==typeof Float32Array?Float32Array:void 0;Ir=function(){var r,e;if("function"!=typeof Tr)return!1;try{r=function(r){return Or&&r instanceof Float32Array||"[object Float32Array]"===Q(r)}(e=new Tr([1,3.14,-3.14,5e40]))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Fr}catch(e){r=!1}return r}()?Vr:function(){throw new Error("not implemented")};var Pr=new Ir(1);var $r="function"==typeof kr?kr:function(r){return Pr[0]=r,Pr[0]};function Cr(r){return r!=r}function Rr(r){return Math.abs(r)}function Br(r,e,t){var n,o,i,a,c,u;if(r<=0)return 0;if(1===r||0===t)return Cr(e[0])?0:e[0];for(o=t<0?(1-r)*t:0,n=0,c=0,u=0;u<r;u++)!1===Cr(i=e[o])&&(a=n+i,c=Rr(n)>=Rr(i)?$r(c+$r($r(n-a)+i)):$r(c+$r($r(i-a)+n)),n=a),o+=t;return $r(n+c)}G(Br,"ndarray",(function(r,e,t,n){var o,i,a,c,u,f;if(r<=0)return 0;if(1===r||0===t)return Cr(e[n])?0:e[n];for(i=n,o=0,u=0,f=0;f<r;f++)!1===Cr(a=e[i])&&(c=o+a,u=Rr(o)>=Rr(a)?$r(u+$r($r(o-c)+a)):$r(u+$r($r(a-c)+o)),o=c),i+=t;return $r(o+u)}));var Nr,qr=function(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return xr(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}((0,r.join)(__dirname,"./native.js")),Lr=Nr=xr(qr)?Br:qr;const{ndarray:Mr}=Nr;function Gr(r,e,t){return Lr(r,e,t)}return G(Gr,"ndarray",(function(r,e,t,n){return Mr(r,e,t,n)})),Gr}));
//# sourceMappingURL=index.js.map
