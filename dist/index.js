"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var i=s(function(O,u){
var p=require('@stdlib/blas-ext-base-snansumkbn/dist');function y(e,r,n){return p(e,r,n)}u.exports=y
});var v=s(function(g,t){
var x=require('@stdlib/blas-ext-base-snansumkbn/dist').ndarray;function f(e,r,n,d){return x(e,r,n,d)}t.exports=f
});var o=s(function(h,m){
var j=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=i(),b=v();j(q,"ndarray",b);m.exports=q
});var k=require("path").join,l=require('@stdlib/utils-try-require/dist'),R=require('@stdlib/assert-is-error/dist'),_=o(),a,c=l(k(__dirname,"./native.js"));R(c)?a=_:a=c;module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
