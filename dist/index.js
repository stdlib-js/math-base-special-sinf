"use strict";var q=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var E=q(function(p,P){
var t=require('@stdlib/math-base-special-kernel-cosf/dist'),u=require('@stdlib/math-base-special-kernel-sinf/dist'),c=require('@stdlib/math-base-special-rempio2f/dist'),A=require('@stdlib/number-float32-base-to-word/dist'),r=require('@stdlib/number-float64-base-to-float32/dist'),R=require('@stdlib/constants-float32-abs-mask/dist'),W=require('@stdlib/constants-float32-exponent-mask/dist'),n=require('@stdlib/constants-float64-half-pi/dist'),d=1061752794,o=1075235811,N=1081824209,T=1085271519,D=1088565717,L=964689920,O=n,_=2*n,s=3*n,I=4*n,f=[0];function S(e){var a,i,v;if(a=A(r(e))|0,i=a&R|0,i<=d)return i<L?r(e):u(e);if(i<=N)return i<=o?a>0?r(t(e-O)):r(-t(e+O)):a>0?r(u(_-e)):r(-u(_+e));if(i<=D)return i<=T?a>0?r(-t(e-s)):r(t(e+s)):a>0?r(u(e-I)):r(u(e+I));if(i>=W)return NaN;switch(v=c(r(e),f),v&3){case 0:return r(u(f[0]));case 1:return r(t(f[0]));case 2:return r(-u(f[0]));default:return r(-t(f[0]))}}P.exports=S
});var F=E();module.exports=F;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
