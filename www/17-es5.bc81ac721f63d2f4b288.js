!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function e(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{HnZm:function(n,i,o){"use strict";o.d(i,"a",(function(){return l})),o.d(i,"b",(function(){return v}));var s=o("fXoL");function a(t,n,e){this.x=t,this.y=n,this.time=e||(new Date).getTime()}function r(t,n,e,i){this.startPoint=t,this.control1=n,this.control2=e,this.endPoint=i}function h(t,n){var e=this,i=n||{};this.velocityFilterWeight=i.velocityFilterWeight||.7,this.minWidth=i.minWidth||.5,this.maxWidth=i.maxWidth||2.5,this.throttle="throttle"in i?i.throttle:16,this.minDistance="minDistance"in i?i.minDistance:5,this._strokeMoveUpdate=this.throttle?function(t,n,e){var i,o,s,a=null,r=0;e||(e={});var h=function(){r=!1===e.leading?0:Date.now(),a=null,s=t.apply(i,o),a||(i=o=null)};return function(){var c=Date.now();r||!1!==e.leading||(r=c);var u=n-(c-r);return i=this,o=arguments,u<=0||u>n?(a&&(clearTimeout(a),a=null),r=c,s=t.apply(i,o),a||(i=o=null)):a||!1===e.trailing||(a=setTimeout(h,u)),s}}(h.prototype._strokeUpdate,this.throttle):h.prototype._strokeUpdate,this.dotSize=i.dotSize||function(){return(this.minWidth+this.maxWidth)/2},this.penColor=i.penColor||"black",this.backgroundColor=i.backgroundColor||"rgba(0,0,0,0)",this.onBegin=i.onBegin,this.onEnd=i.onEnd,this._canvas=t,this._ctx=t.getContext("2d"),this.clear(),this._handleMouseDown=function(t){1===t.which&&(e._mouseButtonDown=!0,e._strokeBegin(t))},this._handleMouseMove=function(t){e._mouseButtonDown&&e._strokeMoveUpdate(t)},this._handleMouseUp=function(t){1===t.which&&e._mouseButtonDown&&(e._mouseButtonDown=!1,e._strokeEnd(t))},this._handleTouchStart=function(t){1===t.targetTouches.length&&e._strokeBegin(t.changedTouches[0])},this._handleTouchMove=function(t){t.preventDefault(),e._strokeMoveUpdate(t.targetTouches[0])},this._handleTouchEnd=function(t){t.target===e._canvas&&(t.preventDefault(),e._strokeEnd(t))},this.on()}a.prototype.velocityFrom=function(t){return this.time!==t.time?this.distanceTo(t)/(this.time-t.time):1},a.prototype.distanceTo=function(t){return Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))},a.prototype.equals=function(t){return this.x===t.x&&this.y===t.y&&this.time===t.time},r.prototype.length=function(){for(var t=0,n=void 0,e=void 0,i=0;i<=10;i+=1){var o=i/10,s=this._point(o,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),a=this._point(o,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y);if(i>0){var r=s-n,h=a-e;t+=Math.sqrt(r*r+h*h)}n=s,e=a}return t},r.prototype._point=function(t,n,e,i,o){return n*(1-t)*(1-t)*(1-t)+3*e*(1-t)*(1-t)*t+3*i*(1-t)*t*t+o*t*t*t},h.prototype.clear=function(){var t=this._ctx,n=this._canvas;t.fillStyle=this.backgroundColor,t.clearRect(0,0,n.width,n.height),t.fillRect(0,0,n.width,n.height),this._data=[],this._reset(),this._isEmpty=!0},h.prototype.fromDataURL=function(t){var n=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=new Image,o=e.ratio||window.devicePixelRatio||1,s=e.width||this._canvas.width/o,a=e.height||this._canvas.height/o;this._reset(),i.src=t,i.onload=function(){n._ctx.drawImage(i,0,0,s,a)},this._isEmpty=!1},h.prototype.toDataURL=function(t){var n;switch(t){case"image/svg+xml":return this._toSVG();default:for(var e=arguments.length,i=Array(e>1?e-1:0),o=1;o<e;o++)i[o-1]=arguments[o];return(n=this._canvas).toDataURL.apply(n,[t].concat(i))}},h.prototype.on=function(){this._handleMouseEvents(),this._handleTouchEvents()},h.prototype.off=function(){this._canvas.removeEventListener("mousedown",this._handleMouseDown),this._canvas.removeEventListener("mousemove",this._handleMouseMove),document.removeEventListener("mouseup",this._handleMouseUp),this._canvas.removeEventListener("touchstart",this._handleTouchStart),this._canvas.removeEventListener("touchmove",this._handleTouchMove),this._canvas.removeEventListener("touchend",this._handleTouchEnd)},h.prototype.isEmpty=function(){return this._isEmpty},h.prototype._strokeBegin=function(t){this._data.push([]),this._reset(),this._strokeUpdate(t),"function"==typeof this.onBegin&&this.onBegin(t)},h.prototype._strokeUpdate=function(t){var n=this._createPoint(t.clientX,t.clientY),e=this._data[this._data.length-1],i=e&&e[e.length-1],o=i&&n.distanceTo(i)<this.minDistance;if(!i||!o){var s=this._addPoint(n),a=s.curve,r=s.widths;a&&r&&this._drawCurve(a,r.start,r.end),this._data[this._data.length-1].push({x:n.x,y:n.y,time:n.time,color:this.penColor})}},h.prototype._strokeEnd=function(t){var n=this.points[0];if(!(this.points.length>2)&&n&&this._drawDot(n),n){var e=this._data[this._data.length-1];n.equals(e[e.length-1])||e.push({x:n.x,y:n.y,time:n.time,color:this.penColor})}"function"==typeof this.onEnd&&this.onEnd(t)},h.prototype._handleMouseEvents=function(){this._mouseButtonDown=!1,this._canvas.addEventListener("mousedown",this._handleMouseDown),this._canvas.addEventListener("mousemove",this._handleMouseMove),document.addEventListener("mouseup",this._handleMouseUp)},h.prototype._handleTouchEvents=function(){this._canvas.style.msTouchAction="none",this._canvas.style.touchAction="none",this._canvas.addEventListener("touchstart",this._handleTouchStart),this._canvas.addEventListener("touchmove",this._handleTouchMove),this._canvas.addEventListener("touchend",this._handleTouchEnd)},h.prototype._reset=function(){this.points=[],this._lastVelocity=0,this._lastWidth=(this.minWidth+this.maxWidth)/2,this._ctx.fillStyle=this.penColor},h.prototype._createPoint=function(t,n,e){var i=this._canvas.getBoundingClientRect();return new a(t-i.left,n-i.top,e||(new Date).getTime())},h.prototype._addPoint=function(t){var n=this.points,e=void 0;if(n.push(t),n.length>2){3===n.length&&n.unshift(n[0]);var i=(e=this._calculateCurveControlPoints(n[0],n[1],n[2])).c2;e=this._calculateCurveControlPoints(n[1],n[2],n[3]);var o=new r(n[1],i,e.c1,n[2]),s=this._calculateCurveWidths(o);return n.shift(),{curve:o,widths:s}}return{}},h.prototype._calculateCurveControlPoints=function(t,n,e){var i=t.x-n.x,o=t.y-n.y,s=n.x-e.x,r=n.y-e.y,h=(t.x+n.x)/2,c=(t.y+n.y)/2,u=(n.x+e.x)/2,d=(n.y+e.y)/2,l=Math.sqrt(i*i+o*o),v=Math.sqrt(s*s+r*r),p=v/(l+v),f=n.x-(u+(h-u)*p),g=n.y-(d+(c-d)*p);return{c1:new a(h+f,c+g),c2:new a(u+f,d+g)}},h.prototype._calculateCurveWidths=function(t){var n={start:null,end:null},e=this.velocityFilterWeight*t.endPoint.velocityFrom(t.startPoint)+(1-this.velocityFilterWeight)*this._lastVelocity,i=this._strokeWidth(e);return n.start=this._lastWidth,n.end=i,this._lastVelocity=e,this._lastWidth=i,n},h.prototype._strokeWidth=function(t){return Math.max(this.maxWidth/(t+1),this.minWidth)},h.prototype._drawPoint=function(t,n,e){var i=this._ctx;i.moveTo(t,n),i.arc(t,n,e,0,2*Math.PI,!1),this._isEmpty=!1},h.prototype._drawCurve=function(t,n,e){var i=this._ctx,o=e-n,s=Math.floor(t.length());i.beginPath();for(var a=0;a<s;a+=1){var r=a/s,h=r*r,c=h*r,u=1-r,d=u*u,l=d*u,v=l*t.startPoint.x;v+=3*d*r*t.control1.x,v+=3*u*h*t.control2.x;var p=l*t.startPoint.y;p+=3*d*r*t.control1.y,p+=3*u*h*t.control2.y,this._drawPoint(v+=c*t.endPoint.x,p+=c*t.endPoint.y,n+c*o)}i.closePath(),i.fill()},h.prototype._drawDot=function(t){var n=this._ctx,e="function"==typeof this.dotSize?this.dotSize():this.dotSize;n.beginPath(),this._drawPoint(t.x,t.y,e),n.closePath(),n.fill()},h.prototype._fromData=function(t,n,e){for(var i=0;i<t.length;i+=1){var o=t[i];if(o.length>1)for(var s=0;s<o.length;s+=1){var r=o[s],h=new a(r.x,r.y,r.time),c=r.color;if(0===s)this.penColor=c,this._reset(),this._addPoint(h);else if(s!==o.length-1){var u=this._addPoint(h),d=u.curve,l=u.widths;d&&l&&n(d,l,c)}}else this._reset(),e(o[0])}},h.prototype._toSVG=function(){var t=this,n=this._data,e=this._canvas,i=Math.max(window.devicePixelRatio||1,1),o=e.width/i,s=e.height/i,a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttributeNS(null,"width",e.width),a.setAttributeNS(null,"height",e.height),this._fromData(n,(function(t,n,e){var i=document.createElement("path");if(!(isNaN(t.control1.x)||isNaN(t.control1.y)||isNaN(t.control2.x)||isNaN(t.control2.y))){var o="M "+t.startPoint.x.toFixed(3)+","+t.startPoint.y.toFixed(3)+" C "+t.control1.x.toFixed(3)+","+t.control1.y.toFixed(3)+" "+t.control2.x.toFixed(3)+","+t.control2.y.toFixed(3)+" "+t.endPoint.x.toFixed(3)+","+t.endPoint.y.toFixed(3);i.setAttribute("d",o),i.setAttribute("stroke-width",(2.25*n.end).toFixed(3)),i.setAttribute("stroke",e),i.setAttribute("fill","none"),i.setAttribute("stroke-linecap","round"),a.appendChild(i)}}),(function(n){var e=document.createElement("circle"),i="function"==typeof t.dotSize?t.dotSize():t.dotSize;e.setAttribute("r",i),e.setAttribute("cx",n.x),e.setAttribute("cy",n.y),e.setAttribute("fill",n.color),a.appendChild(e)}));var r='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 '+o+" "+s+'" width="'+o+'" height="'+s+'">',h=a.innerHTML;if(void 0===h){var c=document.createElement("dummy"),u=a.childNodes;c.innerHTML="";for(var d=0;d<u.length;d+=1)c.appendChild(u[d].cloneNode(!0));h=c.innerHTML}return"data:image/svg+xml;base64,"+btoa(r+h+"</svg>")},h.prototype.fromData=function(t){var n=this;this.clear(),this._fromData(t,(function(t,e){return n._drawCurve(t,e.start,e.end)}),(function(t){return n._drawDot(t)})),this._data=t},h.prototype.toData=function(){return this._data};var c,u,d=h,l=((u=function(){function n(e){t(this,n),this.elementRef=e,this.options=this.options||{},this.onBeginEvent=new s.n,this.onEndEvent=new s.n}return e(n,[{key:"ngAfterContentInit",value:function(){var t=this.elementRef.nativeElement.querySelector("canvas");this.options.canvasHeight&&(t.height=this.options.canvasHeight),this.options.canvasWidth&&(t.width=this.options.canvasWidth),this.signaturePad=new d(t,this.options),this.signaturePad.onBegin=this.onBegin.bind(this),this.signaturePad.onEnd=this.onEnd.bind(this)}},{key:"ngOnDestroy",value:function(){var t=this.elementRef.nativeElement.querySelector("canvas");t.width=0,t.height=0}},{key:"resizeCanvas",value:function(){var t=Math.max(window.devicePixelRatio||1,1),n=this.signaturePad.canvas;n.width=n.offsetWidth*t,n.height=n.offsetHeight*t,n.getContext("2d").scale(t,t),this.signaturePad.clear()}},{key:"toData",value:function(){return this.signaturePad?this.signaturePad.toData():[]}},{key:"fromData",value:function(t){this.signaturePad.fromData(t)}},{key:"toDataURL",value:function(t,n){return this.signaturePad.toDataURL(t,n)}},{key:"fromDataURL",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!n.hasOwnProperty("height")&&this.options.canvasHeight&&(n.height=this.options.canvasHeight),!n.hasOwnProperty("width")&&this.options.canvasWidth&&(n.width=this.options.canvasWidth),this.signaturePad.fromDataURL(t,n)}},{key:"clear",value:function(){this.signaturePad.clear()}},{key:"isEmpty",value:function(){return this.signaturePad.isEmpty()}},{key:"off",value:function(){this.signaturePad.off()}},{key:"on",value:function(){this.signaturePad.on()}},{key:"set",value:function(t,n){switch(t){case"canvasHeight":this.signaturePad.canvas.height=n;break;case"canvasWidth":this.signaturePad.canvas.width=n;break;default:this.signaturePad[t]=n}}},{key:"onBegin",value:function(){this.onBeginEvent.emit(!0)}},{key:"onEnd",value:function(){this.onEndEvent.emit(!0)}},{key:"queryPad",value:function(){return this.signaturePad}}]),n}()).\u0275fac=function(t){return new(t||u)(s.Hb(s.l))},u.\u0275cmp=s.Bb({type:u,selectors:[["signature-pad"]],inputs:{options:"options"},outputs:{onBeginEvent:"onBeginEvent",onEndEvent:"onEndEvent"},decls:1,vars:0,template:function(t,n){1&t&&s.Ib(0,"canvas")},encapsulation:2}),u),v=((c=function n(){t(this,n)}).\u0275mod=s.Fb({type:c}),c.\u0275inj=s.Eb({factory:function(t){return new(t||c)},imports:[[]]}),c)},ONSf:function(n,e,i){"use strict";i.d(e,"a",(function(){return r}));var o=i("ofXK"),s=i("HnZm"),a=i("fXoL"),r=function(){var n=function n(){t(this,n)};return n.\u0275mod=a.Fb({type:n}),n.\u0275inj=a.Eb({factory:function(t){return new(t||n)},imports:[[o.b,s.b]]}),n}()},cs1D:function(n,i,o){"use strict";o.r(i),o.d(i,"MenuPrincipalPageModule",(function(){return b}));var s,a,r,h=o("ofXK"),c=o("3Pt+"),u=o("TEn/"),d=o("tyNb"),l=o("fXoL"),v=o("Gdqo"),p=[{path:"",component:(s=function(){function n(e,i,o){t(this,n),this.SweetalertService=e,this.MenuController=i,this.Router=o}return e(n,[{key:"ngOnInit",value:function(){this.MenuController.enable(!0,"menu")}},{key:"irRuta",value:function(t){"listado-oxigem/entregar"==t?this.SweetalertService.modal("info","En construcci\xf3n...."):this.Router.navigateByUrl(t)}}]),n}(),s.\u0275fac=function(t){return new(t||s)(l.Hb(v.a),l.Hb(u.S),l.Hb(d.g))},s.\u0275cmp=l.Bb({type:s,selectors:[["app-menu-principal"]],decls:51,vars:1,consts:[[1,"ion-no-border"],["lines","none"],["slot","end",2,"margin-right","10px"],["src","assets/profile.jpg"],["fill","clear","color","light",2,"padding-left","0%","margin-left","0%"],["lines","none",1,"ion-align-items-cente","ion-text-right"],[2,"padding","0%"],["color","light","size","small"],["src","assets\\img\\accessibility-outline.svg","width","25px"],[3,"fullscreen"],[1,"ion-padding"],[3,"click"],[1,"ion-align-items-center"],["size","6"],["color","success","mode","ios"],["name","checkmark-outline"],["size","6",1,"ion-text-right"],["color","danger"],["src","assets\\img\\ilustraciones\\carroCamino.svg",2,"width","50%"],["size","12",1,"text-center"],["src","assets\\img\\ilustraciones\\card-multiples.svg",2,"width","50%"],[1,"text-center"],["mode","ios",1,"ion-text-center",2,"background","rgb(148, 148, 148)"]],template:function(t,n){1&t&&(l.Mb(0,"ion-header",0),l.Mb(1,"ion-item",1),l.Mb(2,"ion-avatar",2),l.Ib(3,"img",3),l.Lb(),l.Ib(4,"ion-menu-button",4),l.Mb(5,"ion-label"),l.Mb(6,"h2"),l.kc(7,"Oximed"),l.Lb(),l.Lb(),l.Lb(),l.Mb(8,"ion-item",5),l.Mb(9,"div",6),l.Mb(10,"ion-button",7),l.Ib(11,"img",8),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(12,"ion-content",9),l.Mb(13,"div",10),l.Mb(14,"ion-card",11),l.Ub("click",(function(){return n.irRuta("escaneo-qr-oxigem/entregar")})),l.Mb(15,"ion-card-header"),l.Mb(16,"ion-row",12),l.Mb(17,"ion-col",13),l.Mb(18,"ion-badge",14),l.Ib(19,"ion-icon",15),l.kc(20," 25 "),l.Lb(),l.Lb(),l.Mb(21,"ion-col",16),l.Mb(22,"ion-card-subtitle",17),l.kc(23,"30"),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(24,"ion-card-content"),l.Ib(25,"ion-img",18),l.Mb(26,"ion-row"),l.Mb(27,"ion-col",19),l.Mb(28,"ion-card-title"),l.Mb(29,"strong"),l.kc(30,"ENTREGAR"),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(31,"ion-card",11),l.Ub("click",(function(){return n.irRuta("escaneo-qr-oxigem/recoger")})),l.Mb(32,"ion-card-header"),l.Mb(33,"ion-row",12),l.Mb(34,"ion-col",13),l.Mb(35,"ion-badge",14),l.Ib(36,"ion-icon",15),l.kc(37," 3 "),l.Lb(),l.Lb(),l.Mb(38,"ion-col",16),l.Mb(39,"ion-card-subtitle",17),l.kc(40,"10"),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(41,"ion-card-content"),l.Ib(42,"ion-img",20),l.Mb(43,"ion-row"),l.Mb(44,"ion-col",19),l.Mb(45,"ion-card-title",21),l.Mb(46,"strong"),l.kc(47,"RECOGER"),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Lb(),l.Mb(48,"div",10),l.Mb(49,"ion-badge",22),l.kc(50,"OXIMED-2021"),l.Lb(),l.Lb()),2&t&&(l.xb(12),l.Zb("fullscreen",!0))},directives:[u.r,u.x,u.c,u.C,u.y,u.g,u.p,u.i,u.k,u.I,u.o,u.f,u.s,u.l,u.j,u.t,u.m],styles:["ion-item[_ngcontent-%COMP%]{--background:#003f7f}ion-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:20px;color:#fff}ion-item[_ngcontent-%COMP%]:last-of-type{border-radius:0 0 20% 20%}ion-item[_ngcontent-%COMP%]:last-of-type   div[_ngcontent-%COMP%]{padding-bottom:20px;text-align:center;width:100%}ion-searchbar[_ngcontent-%COMP%]{--box-shadow:none;--border-radius:10px;opacity:.96;padding:0;margin:12px 0}ion-col[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]{--background:#f6f6f6}ion-card[_ngcontent-%COMP%]{padding:6px;box-shadow:none;box-shadow:0 3px 45px 0 rgba(0,0,0,.16);border-radius:30px}ion-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:200px;margin:0 auto}"]}),s)}],f=((a=function n(){t(this,n)}).\u0275mod=l.Fb({type:a}),a.\u0275inj=l.Eb({factory:function(t){return new(t||a)},imports:[[d.i.forChild(p)],d.i]}),a),g=o("ONSf"),b=((r=function n(){t(this,n)}).\u0275mod=l.Fb({type:r}),r.\u0275inj=l.Eb({factory:function(t){return new(t||r)},imports:[[h.b,c.e,u.P,f,g.a]]}),r)}}])}();