(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var d="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},f;if("function"==typeof Object.setPrototypeOf)f=Object.setPrototypeOf;else{var g;a:{var h={L:!0},l={};try{l.__proto__=h;g=l.L;break a}catch(a){}g=!1}f=g?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var m=f;var n=function(a){a=parseFloat(a.getAttribute("time-limit"));isFinite(a)||(a=-1);return 0<a?a:-1},p=function(a,b,c){return a.hasAttribute(b)?a.getAttribute(b):c};var q=function(a,b){var c=void 0===c?null:c;var e=document.createEvent("CustomEvent");e.initCustomEvent(a,!0,!0,c);b.dispatchEvent(e)};var r=["gwd-before-and-after","gwd-breathe","gwd-reveal","gwd-wave"];var t=function(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")},u=function(a){if(t(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&t(a))return a;return null},v=function(a){return(a=p(a,"images",""))?a.split(",").map(function(b){return b.trim()}):[]};var w=function(){var a=HTMLElement.call(this)||this;a.images=[];a.o=!1;a.G=0;a.i=1;a.j=-1;a.F=a.C.bind(a);a.D=a.M.bind(a);a.K=a.P.bind(a);a.J=a.O.bind(a);a.I=a.N.bind(a);a.f=!1;a.l=0;a.u=!1;a.b=null;a.m=null;return a},x=HTMLElement;w.prototype=d(x.prototype);w.prototype.constructor=w;if(m)m(w,x);else for(var y in x)if("prototype"!=y)if(Object.defineProperties){var z=Object.getOwnPropertyDescriptor(x,y);z&&Object.defineProperty(w,y,z)}else w[y]=x[y];
w.prototype.connectedCallback=function(){var a=this;this.u=!0;this.A=this.clientWidth;this.s=this.clientHeight;this.h=v(this);this.v=p(this,"scaling","cover");this.j=1E3*n(this);setTimeout(function(){a.firstElementChild&&-1!==r.indexOf(a.firstElementChild.tagName.toLowerCase())&&(a.a=a.firstElementChild);void 0===a.c&&(a.c=a.ownerDocument.createElement("canvas"),a.appendChild(a.c));A(a,a.c);void 0===a.g&&(a.g=a.ownerDocument.createElement("gwd-gesture"),a.appendChild(a.g));if(a.a){var b=a.g;b.addEventListener("pointerover",
a.K,!1);b.addEventListener("pointerout",a.J,!1);b.addEventListener("pointermove",a.I,!1)}a.gwdIsLoaded()&&a.a?(a.b&&(cancelAnimationFrame(a.b),a.b=null),B(a)):a.gwdIsLoaded()||((b=u(a))?b.gwdIsLoaded()&&a.gwdLoad():a.gwdLoad())})};w.prototype.P=function(a){void 0===a.offsetX&&(this.m=this.getBoundingClientRect());C(this,a)};w.prototype.O=function(){this.a.handlePointerOut()};w.prototype.N=function(a){C(this,a);this.f&&this.a.shouldRenderOnHoverWhilePaused()&&this.a.render(this.H-this.l-this.B)};
var C=function(a,b){void 0!==b.offsetX?a.a.handlePointerUpdate(b.offsetX/a.A,b.offsetY/a.s):a.a.handlePointerUpdate((b.clientX-a.m.left)/a.A,(b.clientY-a.m.top)/a.s)};w.prototype.disconnectedCallback=function(){this.u=!1;if(this.g){var a=this.g;a.removeEventListener("pointerover",this.K,!1);a.removeEventListener("pointerout",this.J,!1);a.removeEventListener("pointermove",this.I,!1)}};
w.prototype.gwdLoad=function(){if(this.h.length){this.G=0;this.images=[];for(var a=0;a<this.h.length;a++){var b=this.ownerDocument.createElement("img");b.addEventListener("load",this.F,!1);b.addEventListener("error",this.D,!1);this.images.push(b);this.h[a]?b.src=this.h[a]:this.C()}}else this.o=!0,q("ready",this)};w.prototype.gwdIsLoaded=function(){return this.o};
w.prototype.C=function(){var a=this;if(++this.G===this.h.length){D(this);for(var b=[],c=0;c<this.images.length;c++){var e=E(this,this.images[c]);b.push(e)}this.a?(this.a.initialize(b,this.images,this.i),this.b=requestAnimationFrame(function(){a.B=Date.now();B(a)})):this.c.getContext("2d").drawImage(b[0],0,0,this.c.width,this.c.height)}};w.prototype.M=function(){D(this);this.images=[]};
var D=function(a){for(var b=0;b<a.images.length;b++){var c=a.images[b];c.removeEventListener("load",a.F,!1);c.removeEventListener("error",a.D,!1)}a.o=!0;q("ready",a)},B=function(a){if(!a.f&&!1!==a.u){var b=Date.now()-a.B-a.l;0<a.j&&b>a.j?(a.pause(),q("autoplayended",a)):(a.a.render(b),a.b=requestAnimationFrame(function(){B(a)}))}},A=function(a,b){a.i=window.devicePixelRatio;b.width=a.A*a.i;b.height=a.s*a.i},E=function(a,b){var c=a.ownerDocument.createElement("canvas");A(a,c);var e=c.getContext("2d");
switch(a.v){case "stretch":e.drawImage(b,0,0,c.width,c.height);break;default:var k=1;"contain"===a.v?k=Math.min(c.width/b.naturalWidth,c.height/b.naturalHeight):"none"!==a.v&&(k=Math.max(c.width/b.naturalWidth,c.height/b.naturalHeight));e.save();e.translate(c.width/2,c.height/2);e.scale(k,k);e.drawImage(b,-b.naturalWidth/2,-b.naturalHeight/2);e.restore()}return c};w.prototype.pause=function(){this.f||(this.H=Date.now(),this.f=!0,this.j=-1)};
w.prototype.play=function(){var a=this;this.f&&(this.f=!1,this.b=requestAnimationFrame(function(){a.l+=Date.now()-a.H;B(a)}))};customElements.define("gwd-image-effect",w);}).call(this);