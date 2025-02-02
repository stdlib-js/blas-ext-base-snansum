"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=n(function(g,u){
var y=require('@stdlib/blas-ext-base-snansumkbn/dist').ndarray;function f(e,r,a,d){return y(e,r,a,d)}u.exports=f
});var v=n(function(h,t){
var p=require('@stdlib/strided-base-stride2offset/dist'),x=s();function j(e,r,a){return x(e,r,a,p(e,a))}t.exports=j
});var m=n(function(w,o){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=v(),R=s();l(q,"ndarray",R);o.exports=q
});var _=require("path").join,b=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),E=m(),i,c=b(_(__dirname,"./native.js"));k(c)?i=E:i=c;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
