(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{HnZm:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return c}));var i=n("fXoL");function o(t,e,n){this.x=t,this.y=e,this.time=n||(new Date).getTime()}function s(t,e,n,i){this.startPoint=t,this.control1=e,this.control2=n,this.endPoint=i}function a(t,e){var n=this,i=e||{};this.velocityFilterWeight=i.velocityFilterWeight||.7,this.minWidth=i.minWidth||.5,this.maxWidth=i.maxWidth||2.5,this.throttle="throttle"in i?i.throttle:16,this.minDistance="minDistance"in i?i.minDistance:5,this._strokeMoveUpdate=this.throttle?function(t,e,n){var i,o,s,a=null,r=0;n||(n={});var h=function(){r=!1===n.leading?0:Date.now(),a=null,s=t.apply(i,o),a||(i=o=null)};return function(){var c=Date.now();r||!1!==n.leading||(r=c);var d=e-(c-r);return i=this,o=arguments,d<=0||d>e?(a&&(clearTimeout(a),a=null),r=c,s=t.apply(i,o),a||(i=o=null)):a||!1===n.trailing||(a=setTimeout(h,d)),s}}(a.prototype._strokeUpdate,this.throttle):a.prototype._strokeUpdate,this.dotSize=i.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=i.penColor||"black",this.backgroundColor=i.backgroundColor||"rgba(0,0,0,0)",this.onBegin=i.onBegin,this.onEnd=i.onEnd,this._canvas=t,this._ctx=t.getContext("2d"),this.clear(),this._handleMouseDown=function(t){1===t.which&&(n._mouseButtonDown=!0,n._strokeBegin(t))},this._handleMouseMove=function(t){n._mouseButtonDown&&n._strokeMoveUpdate(t)},this._handleMouseUp=function(t){1===t.which&&n._mouseButtonDown&&(n._mouseButtonDown=!1,n._strokeEnd(t))},this._handleTouchStart=function(t){1===t.targetTouches.length&&n._strokeBegin(t.changedTouches[0])},this._handleTouchMove=function(t){t.preventDefault(),n._strokeMoveUpdate(t.targetTouches[0])},this._handleTouchEnd=function(t){t.target===n._canvas&&(t.preventDefault(),n._strokeEnd(t))},this.on()}o.prototype.velocityFrom=function(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):1},o.prototype.distanceTo=function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))},o.prototype.equals=function(t){return this.x===t.x&&this.y===t.y&&this.time===t.time},s.prototype.length=function(){for(var t=0,e=void 0,n=void 0,i=0;i<=10;i+=1){var o=i/10,s=this._point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),a=this._point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){var r=s-e,h=a-n;t+=Math.sqrt(r*r+h*h)}e=s,n=a}return t},s.prototype._point=function(t,e,n,i,o){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*i*(1-t)*t*t+o*t*t*t},a.prototype.clear=function(){var t=this._ctx,e=this._canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,e.width,e.height),t.fillRect(0,0,e.width,e.height),this._data=[],this._reset(),this._isEmpty=!0},a.prototype.fromDataURL=function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=new Image,o=n.ratio||window.devicePixelRatio||1,s=n.width||this._canvas.width/o,a=n.height||this._canvas.height/o;this._reset(),i.src=t,i.onload=function(){e._ctx.drawImage(i,0,0,s,a)},this._isEmpty=!1},a.prototype.toDataURL=function(t){var e;switch(t){case"image/svg+xml":return this._toSVG();default:for(var n=arguments.length,i=Array(n>1?n-1:0),o=1;o<n;o++)i[o-1]=arguments[o];return(e=this._canvas).toDataURL.apply(e,[t].concat(i))}},a.prototype.on=function(){this._handleMouseEvents(),this._handleTouchEvents()},a.prototype.off=function(){this._canvas.removeEventListener("mousedown",this._handleMouseDown),this._canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this._canvas.removeEventListener("touchstart",this._handleTouchStart),this._canvas.removeEventListener("touchmove",this._handleTouchMove),this._canvas.removeEventListener("touchend",this._handleTouchEnd)},a.prototype.isEmpty=function(){return this._isEmpty},a.prototype._strokeBegin=function(t){this._data.push([]),this._reset(),this._strokeUpdate(t),"function"==typeof this.onBegin&&this.onBegin(t)},a.prototype._strokeUpdate=function(t){var e=this._createPoint(t.clientX,t.clientY),n=this._data[this._data.length-1],i=n&&n[n.length-1],o=i&&e.distanceTo(i)<this.minDistance;if(!i||!o){var s=this._addPoint(e),a=s.curve,r=s.widths;a&&r&&this._drawCurve(a,r.start,r.end),this._data[this._data.length-1].push({x:e.x,y:e.y,time:e.time,color:this.penColor})}},a.prototype._strokeEnd=function(t){var e=this.points[0];if(!(this.points.length>2)&&e&&this._drawDot(e),e){var n=this._data[this._data.length-1];e.equals(n[n.length-1])||n.push({x:e.x,y:e.y,time:e.time,color:this.penColor})}"function"==typeof this.onEnd&&this.onEnd(t)},a.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)},a.prototype._handleTouchEvents=function(){this._canvas.style.msTouchAction="none",this._canvas.style.touchAction="none",this._canvas.addEventListener("touchstart",this._handleTouchStart),this._canvas.addEventListener("touchmove",this._handleTouchMove),this._canvas.addEventListener("touchend",this._handleTouchEnd)},a.prototype._reset=function(){this.points=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor},a.prototype._createPoint=function(t,e,n){var i=this._canvas.getBoundingClientRect();return new o(t-i.left,e-i.top,n||(new Date).getTime())},a.prototype._addPoint=function(t){var e=this.points,n=void 0;if(e.push(t),e.length>2){3===e.length&&e.unshift(e[0]);var i=(n=this._calculateCurveControlPoints(e[0],e[1],e[2])).c2;n=this._calculateCurveControlPoints(e[1],e[2],e[3]);var o=new s(e[1],i,n.c1,e[2]),a=this._calculateCurveWidths(o);return e.shift(),{curve:o,widths:a}}return{}},a.prototype._calculateCurveControlPoints=function(t,e,n){var i=t.x-e.x,s=t.y-e.y,a=e.x-n.x,r=e.y-n.y,h=(t.x+e.x)/2,c=(t.y+e.y)/2,d=(e.x+n.x)/2,u=(e.y+n.y)/2,l=Math.sqrt(i*i+s*s),p=Math.sqrt(a*a+r*r),v=p/(l+p),g=e.x-(d+(h-d)*v),f=e.y-(u+(c-u)*v);return{c1:new o(h+g,c+f),c2:new o(d+g,u+f)}},a.prototype._calculateCurveWidths=function(t){var e={start:null,end:null},n=this.velocityFilterWeight*t.endPoint.velocityFrom(t.startPoint)+(1-this.velocityFilterWeight)*this._lastVelocity,i=this._strokeWidth(n);return e.start=this._lastWidth,e.end=i,this._lastVelocity=n,this._lastWidth=i,e},a.prototype._strokeWidth=function(t){return Math.max(this.maxWidth/(t+1),this.minWidth)},a.prototype._drawPoint=function(t,e,n){var i=this._ctx;i.moveTo(t,e),i.arc(t,e,n,0,2*Math.PI,!1),this._isEmpty=!1},a.prototype._drawCurve=function(t,e,n){var i=this._ctx,o=n-e,s=Math.floor(t.length());i.beginPath();for(var a=0;a<s;a+=1){var r=a/s,h=r*r,c=h*r,d=1-r,u=d*d,l=u*d,p=l*t.startPoint.x;p+=3*u*r*t.control1.x,p+=3*d*h*t.control2.x;var v=l*t.startPoint.y;v+=3*u*r*t.control1.y,v+=3*d*h*t.control2.y,this._drawPoint(p+=c*t.endPoint.x,v+=c*t.endPoint.y,e+c*o)}i.closePath(),i.fill()},a.prototype._drawDot=function(t){var e=this._ctx,n="function"==typeof this.dotSize?this.dotSize():this.dotSize;e.beginPath(),this._drawPoint(t.x,t.y,n),e.closePath(),e.fill()},a.prototype._fromData=function(t,e,n){for(var i=0;i<t.length;i+=1){var s=t[i];if(s.length>1)for(var a=0;a<s.length;a+=1){var r=s[a],h=new o(r.x,r.y,r.time),c=r.color;if(0===a)this.penColor=c,this._reset(),this._addPoint(h);else if(a!==s.length-1){var d=this._addPoint(h),u=d.curve,l=d.widths;u&&l&&e(u,l,c)}}else this._reset(),n(s[0])}},a.prototype._toSVG=function(){var t=this,e=this._data,n=this._canvas,i=Math.max(window.devicePixelRatio||1,1),o=n.width/i,s=n.height/i,a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttributeNS(null,"width",n.width),a.setAttributeNS(null,"height",n.height),this._fromData(e,(function(t,e,n){var i=document.createElement("path");if(!(isNaN(t.control1.x)||isNaN(t.control1.y)||isNaN(t.control2.x)||isNaN(t.control2.y))){var o="M "+t.startPoint.x.toFixed(3)+","+t.startPoint.y.toFixed(3)+" C "+t.control1.x.toFixed(3)+","+t.control1.y.toFixed(3)+" "+t.control2.x.toFixed(3)+","+t.control2.y.toFixed(3)+" "+t.endPoint.x.toFixed(3)+","+t.endPoint.y.toFixed(3);i.setAttribute("d",o),i.setAttribute("stroke-width",(2.25*e.end).toFixed(3)),i.setAttribute("stroke",n),i.setAttribute("fill","none"),i.setAttribute("stroke-linecap","round"),a.appendChild(i)}}),(function(e){var n=document.createElement("circle"),i="function"==typeof t.dotSize?t.dotSize():t.dotSize;n.setAttribute("r",i),n.setAttribute("cx",e.x),n.setAttribute("cy",e.y),n.setAttribute("fill",e.color),a.appendChild(n)}));var r='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 '+o+" "+s+'" width="'+o+'" height="'+s+'">',h=a.innerHTML;if(void 0===h){var c=document.createElement("dummy"),d=a.childNodes;c.innerHTML="";for(var u=0;u<d.length;u+=1)c.appendChild(d[u].cloneNode(!0));h=c.innerHTML}return"data:image/svg+xml;base64,"+btoa(r+h+"</svg>")},a.prototype.fromData=function(t){var e=this;this.clear(),this._fromData(t,(function(t,n){return e._drawCurve(t,n.start,n.end)}),(function(t){return e._drawDot(t)})),this._data=t},a.prototype.toData=function(){return this._data};var r=a;let h=(()=>{class t{constructor(t){this.elementRef=t,this.options=this.options||{},this.onBeginEvent=new i.n,this.onEndEvent=new i.n}ngAfterContentInit(){const t=this.elementRef.nativeElement.querySelector("canvas");this.options.canvasHeight&&(t.height=this.options.canvasHeight),this.options.canvasWidth&&(t.width=this.options.canvasWidth),this.signaturePad=new r(t,this.options),this.signaturePad.onBegin=this.onBegin.bind(this),this.signaturePad.onEnd=this.onEnd.bind(this)}ngOnDestroy(){const t=this.elementRef.nativeElement.querySelector("canvas");t.width=0,t.height=0}resizeCanvas(){const t=Math.max(window.devicePixelRatio||1,1),e=this.signaturePad.canvas;e.width=e.offsetWidth*t,e.height=e.offsetHeight*t,e.getContext("2d").scale(t,t),this.signaturePad.clear()}toData(){return this.signaturePad?this.signaturePad.toData():[]}fromData(t){this.signaturePad.fromData(t)}toDataURL(t,e){return this.signaturePad.toDataURL(t,e)}fromDataURL(t,e={}){!e.hasOwnProperty("height")&&this.options.canvasHeight&&(e.height=this.options.canvasHeight),!e.hasOwnProperty("width")&&this.options.canvasWidth&&(e.width=this.options.canvasWidth),this.signaturePad.fromDataURL(t,e)}clear(){this.signaturePad.clear()}isEmpty(){return this.signaturePad.isEmpty()}off(){this.signaturePad.off()}on(){this.signaturePad.on()}set(t,e){switch(t){case"canvasHeight":this.signaturePad.canvas.height=e;break;case"canvasWidth":this.signaturePad.canvas.width=e;break;default:this.signaturePad[t]=e}}onBegin(){this.onBeginEvent.emit(!0)}onEnd(){this.onEndEvent.emit(!0)}queryPad(){return this.signaturePad}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(i.l))},t.\u0275cmp=i.Bb({type:t,selectors:[["signature-pad"]],inputs:{options:"options"},outputs:{onBeginEvent:"onBeginEvent",onEndEvent:"onEndEvent"},decls:1,vars:0,template:function(t,e){1&t&&i.Ib(0,"canvas")},encapsulation:2}),t})(),c=(()=>{class t{}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)},imports:[[]]}),t})()},ONSf:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("ofXK"),o=n("HnZm"),s=n("fXoL");let a=(()=>{class t{}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(e){return new(e||t)},imports:[[i.b,o.b]]}),t})()},cs1D:function(t,e,n){"use strict";n.r(e),n.d(e,"MenuPrincipalPageModule",(function(){return v}));var i=n("ofXK"),o=n("3Pt+"),s=n("TEn/"),a=n("tyNb"),r=n("ool6"),h=n("fXoL"),c=n("6uu6"),d=n("Gdqo");const u=[{path:"",component:(()=>{class t{constructor(t,e,n,i){this.AuthService=t,this.SweetalertService=e,this.MenuController=n,this.Router=i,this.usuarioAvatar="assets/profile.jpg"}ngOnInit(){this.MenuController.enable(!0,"menu");let t=this.AuthService.getUsuario().usuarioAvatar;t&&(this.usuarioAvatar=r.a.ARCHIVO_BASE+t)}irRuta(t){"listado-oxigem/entregar"==t?this.SweetalertService.modal("info","En construcci\xf3n...."):this.Router.navigateByUrl(t)}}return t.\u0275fac=function(e){return new(e||t)(h.Hb(c.a),h.Hb(d.a),h.Hb(s.S),h.Hb(a.g))},t.\u0275cmp=h.Bb({type:t,selectors:[["app-menu-principal"]],decls:37,vars:2,consts:[[1,"ion-no-border"],["lines","none"],["slot","end",2,"margin-right","10px"],[3,"src"],["fill","clear","color","light",2,"padding-left","0%","margin-left","0%"],[3,"fullscreen"],[1,"ion-padding"],[3,"click"],[1,"ion-align-items-center"],["size","9"],["color","success","mode","ios"],["src","https://siom.oximeiser.com/libs/media/btn_recoger_app.png",2,"width","100%"],["src","https://siom.oximeiser.com/libs/media/btn_entregar_app.png",2,"width","100%"],["src","https://siom.oximeiser.com/libs/media/btn_historial_app.png",2,"width","100%"],["mode","ios",1,"ion-text-center",2,"background","rgb(148, 148, 148)"]],template:function(t,e){1&t&&(h.Mb(0,"ion-header",0),h.Mb(1,"ion-item",1),h.Mb(2,"ion-avatar",2),h.Ib(3,"img",3),h.Lb(),h.Ib(4,"ion-menu-button",4),h.Mb(5,"ion-label"),h.Mb(6,"h2"),h.kc(7,"Oximed"),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(8,"ion-content",5),h.Mb(9,"div",6),h.Mb(10,"ion-card",7),h.Ub("click",(function(){return e.irRuta("escaneo-qr-oxigem/recoger")})),h.Mb(11,"ion-card-header"),h.Mb(12,"ion-row",8),h.Mb(13,"ion-col",9),h.Mb(14,"ion-badge",10),h.kc(15," De click aqu\xed para recoger equipos "),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(16,"ion-card-content"),h.Ib(17,"ion-img",11),h.Lb(),h.Lb(),h.Mb(18,"ion-card",7),h.Ub("click",(function(){return e.irRuta("escaneo-qr-oxigem/entregar")})),h.Mb(19,"ion-card-header"),h.Mb(20,"ion-row",8),h.Mb(21,"ion-col",9),h.Mb(22,"ion-badge",10),h.kc(23," De click aqu\xed para entregar equipos "),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(24,"ion-card-content"),h.Ib(25,"ion-img",12),h.Lb(),h.Lb(),h.Mb(26,"ion-card"),h.Mb(27,"ion-card-header"),h.Mb(28,"ion-row",8),h.Mb(29,"ion-col",9),h.Mb(30,"ion-badge",10),h.kc(31," De click aqu\xed para ver historial de equipos "),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(32,"ion-card-content"),h.Ib(33,"ion-img",13),h.Lb(),h.Lb(),h.Lb(),h.Lb(),h.Mb(34,"div",6),h.Mb(35,"ion-badge",14),h.kc(36,"OXIMED-2021"),h.Lb(),h.Lb()),2&t&&(h.xb(3),h.ac("src",e.usuarioAvatar,h.hc),h.xb(5),h.Zb("fullscreen",!0))},directives:[s.r,s.x,s.c,s.C,s.y,s.p,s.i,s.k,s.I,s.o,s.f,s.j,s.t],styles:["ion-item[_ngcontent-%COMP%]{--background:#003f7f}ion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:20px;color:#fff}ion-item[_ngcontent-%COMP%]:last-of-type{border-radius:0 0 20% 20%}ion-item[_ngcontent-%COMP%]:last-of-type   div[_ngcontent-%COMP%]{padding-bottom:20px;text-align:center;width:100%}ion-searchbar[_ngcontent-%COMP%]{--box-shadow:none;--border-radius:10px;opacity:.96;padding:0;margin:12px 0}ion-col[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]{--background:#f6f6f6}ion-card[_ngcontent-%COMP%]{padding:6px;box-shadow:none;box-shadow:0 3px 45px 0 rgba(0,0,0,.16);border-radius:30px}ion-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:200px;margin:0 auto}"]}),t})()}];let l=(()=>{class t{}return t.\u0275mod=h.Fb({type:t}),t.\u0275inj=h.Eb({factory:function(e){return new(e||t)},imports:[[a.i.forChild(u)],a.i]}),t})();var p=n("ONSf");let v=(()=>{class t{}return t.\u0275mod=h.Fb({type:t}),t.\u0275inj=h.Eb({factory:function(e){return new(e||t)},imports:[[i.b,o.e,s.P,l,p.a]]}),t})()},ool6:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));const i={API_BASE:"https://siom.oximeiser.com/api.php",ARCHIVO_BASE:"https://siom.oximeiser.com/"}}}]);