!function(){function o(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")}function i(o,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}function n(o,n,e){return n&&i(o.prototype,n),e&&i(o,e),o}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{aOlj:function(i,e,t){"use strict";t.d(e,"a",(function(){return u}));var r=t("mrSG"),c=t("tk/3"),a=t("ool6"),s=t("fXoL"),b=t("6uu6"),l=t("TEn/"),u=function(){var i=function(){function i(n,e,t){o(this,i),this.AuthService=n,this.http=e,this.loadingController=t,this.headers=new c.c({"Content-Type":"aplication/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH, OPTIONS","Access-Control-Allow-Headers":"Access-Control-Allow-Headers,Content-Type,Access-Control-All-Methods"})}return n(i,[{key:"presentLoading",value:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Cargando...",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"my-custom-class";return Object(r.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loadingController.create({cssClass:i,message:o});case 2:return e=n.sent,n.abrupt("return",(e.present(),e));case 4:case"end":return n.stop()}}),n,this)})))}},{key:"getJson",value:function(o){return this.http.get(a.a.API_BASE+o)}},{key:"postJson",value:function(o,i,n){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return e.componente=o,e.controlador=i,e.accion=n,e.authUsuarioID=this.AuthService.getUsuario().usuarioId,this.http.post(a.a.API_BASE,e)}},{key:"putJson",value:function(o,i){return this.http.patch(a.a.API_BASE+i,o)}},{key:"login",value:function(o,i,n){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return e.componente=o,e.controlador=i,e.accion=n,this.http.post(a.a.API_BASE,e)}}]),i}();return i.\u0275fac=function(o){return new(o||i)(s.Qb(b.a),s.Qb(c.a),s.Qb(l.R))},i.\u0275prov=s.Db({token:i,factory:i.\u0275fac,providedIn:"root"}),i}()},fBZb:function(i,e,t){"use strict";t.d(e,"a",(function(){return c}));var r=t("fXoL"),c=function(){var i=function(){function i(){o(this,i),this.equipos=[],this.cliente=[]}return n(i,[{key:"setEquipos",value:function(o){var i=this;return new Promise((function(n,e){return i.equipos=o,console.log("promesa set eqipo"),n(!0)}))}},{key:"getEquipos",value:function(){return this.equipos}},{key:"deleteEquipos",value:function(){this.equipos=[]}}]),i}();return i.\u0275fac=function(o){return new(o||i)},i.\u0275prov=r.Db({token:i,factory:i.\u0275fac,providedIn:"root"}),i}()},ool6:function(o,i,n){"use strict";n.d(i,"a",(function(){return e}));var e={API_BASE:"https://siom.oximeiser.com/api.php",ARCHIVO_BASE:"https://siom.oximeiser.com/"}},zECf:function(i,e,t){"use strict";t.r(e),t.d(e,"HistorialRepartoPageModule",(function(){return x}));var r=t("ofXK"),c=t("3Pt+"),a=t("TEn/"),s=t("tyNb"),b=t("fXoL"),l=t("fBZb"),u=t("aOlj"),d=t("Gdqo"),f=function(o,i){return{animate__backInRight:o,animate__backOutRight:i}};function h(o,i){if(1&o){var n=b.Nb();b.Mb(0,"ion-searchbar",9),b.Ub("ionChange",(function(o){return b.gc(n),b.Wb().ChangeSearchbar(o.target.value)})),b.Lb()}if(2&o){var e=b.Wb();b.Zb("ngClass",b.dc(1,f,e.buscarAnimacion,!e.buscarAnimacion))}}function p(o,i){if(1&o){var n=b.Nb();b.Mb(0,"ion-col",13),b.Mb(1,"ion-item",14),b.Mb(2,"ion-grid"),b.Mb(3,"ion-row",15),b.Mb(4,"ion-col",16),b.Mb(5,"h4"),b.Mb(6,"strong"),b.kc(7),b.Lb(),b.Lb(),b.Mb(8,"span"),b.kc(9),b.Lb(),b.Ib(10,"br"),b.Mb(11,"span"),b.kc(12,"Cliente : "),b.Mb(13,"strong"),b.kc(14),b.Lb(),b.Lb(),b.Lb(),b.Mb(15,"ion-col",17),b.Mb(16,"ion-button",18),b.Ub("click",(function(){b.gc(n);var o=i.$implicit;return b.Wb(2).seleccionarEquipo(o)})),b.Ib(17,"ion-icon",19),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()}if(2&o){var e=i.$implicit;b.xb(7),b.mc(" Servicio : ",e.reciboServicio,""),b.xb(2),b.mc("Estado : ",e.reciboEstadoReparto," "),b.xb(5),b.nc("",e.personaIdentificacion," | ",e.personaRazonSocial,"")}}function g(o,i){if(1&o){var n=b.Nb();b.Mb(0,"ion-row"),b.jc(1,p,18,4,"ion-col",10),b.Mb(2,"ion-infinite-scroll",11),b.Ub("ionInfinite",(function(o){return b.gc(n),b.Wb().loadData(o)})),b.Ib(3,"ion-infinite-scroll-content",12),b.Lb(),b.Lb()}if(2&o){var e=b.Wb();b.xb(1),b.Zb("ngForOf",e.listado)}}function m(o,i){if(1&o){var n=b.Nb();b.Mb(0,"ion-row"),b.Mb(1,"ion-col",20),b.Mb(2,"ion-item",14),b.Mb(3,"ion-grid"),b.Mb(4,"ion-row",15),b.Mb(5,"ion-col",21),b.Mb(6,"ion-label"),b.Mb(7,"ion-button",22),b.Ub("click",(function(){return b.gc(n),b.Wb().cancelarSeleccion()})),b.kc(8,"Listado"),b.Lb(),b.Lb(),b.Lb(),b.Mb(9,"ion-col",20),b.Mb(10,"ion-label",23),b.Mb(11,"ion-text",24),b.Mb(12,"h2"),b.kc(13,"Cliente"),b.Lb(),b.Lb(),b.Mb(14,"strong"),b.kc(15,"Nombre:"),b.Lb(),b.kc(16),b.Ib(17,"br"),b.Mb(18,"strong"),b.kc(19,"CC:"),b.Lb(),b.kc(20),b.Ib(21,"br"),b.Mb(22,"strong"),b.kc(23,"Codigo Cliente:"),b.Lb(),b.kc(24),b.Ib(25,"br"),b.Mb(26,"strong"),b.kc(27,"Correo:"),b.Lb(),b.kc(28),b.Ib(29,"br"),b.Ib(30,"br"),b.Mb(31,"ion-text",24),b.Mb(32,"h2"),b.kc(33,"Recibo"),b.Lb(),b.Lb(),b.Mb(34,"strong"),b.kc(35,"Numero:"),b.Lb(),b.kc(36),b.Ib(37,"br"),b.Mb(38,"strong"),b.kc(39,"Servicio:"),b.Lb(),b.kc(40),b.Ib(41,"br"),b.Mb(42,"strong"),b.kc(43,"Fecha Servicio:"),b.Lb(),b.kc(44),b.Ib(45,"br"),b.Mb(46,"strong"),b.kc(47,"Fecha recogida:"),b.Lb(),b.kc(48),b.Ib(49,"br"),b.Ib(50,"br"),b.Mb(51,"ion-item",14),b.Mb(52,"ion-grid"),b.Mb(53,"ion-row",15),b.Mb(54,"ion-col",25),b.Ib(55,"img",26),b.Lb(),b.Mb(56,"ion-col",27),b.Mb(57,"ion-label"),b.Mb(58,"strong"),b.kc(59),b.Lb(),b.Ib(60,"br"),b.Mb(61,"a",28),b.kc(62),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb(),b.Lb()}if(2&o){var e=b.Wb();b.xb(16),b.mc(" ",e.equipoSeleccionado.personaRazonSocial,""),b.xb(4),b.mc(" ",e.equipoSeleccionado.personaIdentificacion,""),b.xb(4),b.mc(" ",e.equipoSeleccionado.clienteCodigo,""),b.xb(4),b.mc(" ",e.equipoSeleccionado.personaCorreoElectronico,""),b.xb(8),b.mc(" ",e.equipoSeleccionado.reciboNumero,""),b.xb(4),b.mc(" ",e.equipoSeleccionado.reciboServicio,""),b.xb(4),b.mc(" ",e.equipoSeleccionado.reciboFechaServicio,""),b.xb(4),b.mc(" ",e.equipoSeleccionado.reciboFechaRecogida,""),b.xb(11),b.lc(e.equipoSeleccionado.documentoTITULO),b.xb(2),b.ac("href",e.equipoSeleccionado.documentoURL,b.hc),b.bc("download","",e.equipoSeleccionado.servicioCODIGO,".pdf"),b.xb(1),b.mc(" Decargar recibo de Servicio ",e.equipoSeleccionado.servicioCODIGO,"")}}var v,M,L,S=[{path:"",component:(v=function(){function i(n,e,t,r,c,a){o(this,i),this.DatosEquiposService=n,this.Router=e,this.ActivatedRoute=t,this.BaseService=r,this.Sweetalert=c,this.MenuController=a,this.cantidadItemLista=10,this.inicioItemLista=0,this.buscadorActivo=!1,this.buscar=!1,this.buscarAnimacion=!1,this.listado=[],this.listadoFilter=[],this.listadoTodos=[],this.mostrarSeleccionado=!1}return n(i,[{key:"ngOnInit",value:function(){this.MenuController.enable(!0,"menu"),this.getListado()}},{key:"cancelarSeleccion",value:function(){this.inicioLista()}},{key:"inicioLista",value:function(){this.mostrarSeleccionado=!1}},{key:"seleccionarEquipo",value:function(o){o.otrosPendientes=[],this.equipoSeleccionado=o,this.buscadorActivo&&this.buscador(),this.mostrarSeleccionado=!0}},{key:"loadData",value:function(o){}},{key:"toggleInfiniteScroll",value:function(){this.infiniteScroll.disabled=!this.infiniteScroll.disabled}},{key:"buscador",value:function(){var o=this;this.buscar?(this.buscarAnimacion=!1,setTimeout((function(){o.buscar=!1,o.ChangeSearchbar("")}),900)):(this.buscar=!0,this.buscarAnimacion=!0)}},{key:"getListado",value:function(){var o=this;this.BaseService.postJson("repartidores","repartosUsuario","historialApi",{}).subscribe((function(i){(i.RESPUESTA="EXITO")?i.DATOS?(o.listadoTodos=[].concat(o.listadoTodos,i.DATOS),o.listado=o.listadoTodos,o.listadoFilter=o.listadoTodos,console.log(o.listadoTodos)):o.Sweetalert.notificacion("info",i.MENSAJE):o.Sweetalert.modal("error",i.MENSAJE),o.eventCargandoLista&&o.eventCargandoLista.target.complete()}))}},{key:"reiniciar",value:function(){this.listadoTodos=[],this.listado=[],this.listadoFilter=[]}},{key:"doRefresh",value:function(o){this.inicioItemLista=0,this.reiniciar(),this.getListado(),setTimeout((function(){o.target.complete()}),1e3)}},{key:"ChangeSearchbar",value:function(o){var i=this,n=o;n&&""!==n.trim()&&n.length>3?(this.buscadorActivo=!0,this.BaseService.postJson("repartidores","","",{datoBusqueda:o}).subscribe((function(o){(o.RESPUESTA="EXITO")?o.DATOS?i.listado=o.DATOS:(i.listado=[],i.Sweetalert.notificacion("info","No se encontraron equipos.")):i.Sweetalert.modal("error",o.mensaje)}))):(this.buscadorActivo=!1,this.listado=this.listadoTodos)}}]),i}(),v.\u0275fac=function(o){return new(o||v)(b.Hb(l.a),b.Hb(s.g),b.Hb(s.a),b.Hb(u.a),b.Hb(d.a),b.Hb(a.S))},v.\u0275cmp=b.Bb({type:v,selectors:[["app-historial-reparto"]],viewQuery:function(o,i){var n;1&o&&b.oc(a.u,!0),2&o&&b.ec(n=b.Vb())&&(i.infiniteScroll=n.first)},decls:14,vars:4,consts:[[1,"ion-no-border"],["slot","start"],["icon","chevron-back"],["slot","end"],[3,"fullscreen"],["color","primary","placeholder","Buscar","style","margin-bottom: 40%;","autocomplete","On","style","position:fixed; z-index: 100;","class","animate__animated  ",3,"ngClass","ionChange",4,"ngIf"],["slot","fixed",3,"ionRefresh"],[1,"ion-padding"],[4,"ngIf"],["color","primary","placeholder","Buscar","autocomplete","On",1,"animate__animated",2,"position","fixed","z-index","100",3,"ngClass","ionChange"],["size-lg","6","size","12",4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Cargando..."],["size-lg","6","size","12"],["lines","none",1,"animate__animated","animate__fadeInUpBig",2,"margin","2px"],[1,"ion-align-items-center"],["size","9"],["size","3",1,"text-right"],["fill","clear","size","large",3,"click"],["name","chevron-forward","slot","end",1,"ion-icon-a"],["size","12"],["size","12",2,"margin-bottom","5%"],["color","primary",3,"click"],[1,"ion-text-wrap","text-center"],["color","primary"],["size","4"],["src","https://siom.oximeiser.com/libs/media/PDF-logo.png","alt","iconPDF",2,"width","100%"],["size","8"],["ion-button","","size","small","target","_blank",3,"href","download"]],template:function(o,i){1&o&&(b.Mb(0,"ion-header",0),b.Mb(1,"ion-toolbar"),b.Mb(2,"ion-title"),b.kc(3,"Historial"),b.Lb(),b.Mb(4,"ion-buttons",1),b.Ib(5,"ion-back-button",2),b.Lb(),b.Ib(6,"ion-buttons",3),b.Lb(),b.Lb(),b.Mb(7,"ion-content",4),b.jc(8,h,1,4,"ion-searchbar",5),b.Mb(9,"ion-refresher",6),b.Ub("ionRefresh",(function(o){return i.doRefresh(o)})),b.Ib(10,"ion-refresher-content"),b.Lb(),b.Mb(11,"div",7),b.jc(12,g,4,1,"ion-row",8),b.jc(13,m,63,12,"ion-row",8),b.Lb(),b.Lb()),2&o&&(b.xb(7),b.Zb("fullscreen",!0),b.xb(1),b.Zb("ngIf",i.buscar),b.xb(4),b.Zb("ngIf",!i.mostrarSeleccionado),b.xb(1),b.Zb("ngIf",i.mostrarSeleccionado))},directives:[a.r,a.O,a.N,a.h,a.d,a.e,a.p,r.j,a.F,a.G,a.J,a.W,r.h,a.I,r.i,a.u,a.v,a.o,a.x,a.q,a.g,a.s,a.y,a.M],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:#003f7f;color:#fff;border-radius:0 0 20% 20%}ion-col[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]{--background:#f6f6f6}ion-card[_ngcontent-%COMP%]{margin-top:-180px;z-index:10;padding:6px;box-shadow:none;box-shadow:0 3px 45px 0 rgba(0,0,0,.16);border-radius:40px;overflow:visible}ion-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:240px;margin:-60px auto auto}ion-item[_ngcontent-%COMP%]{border-radius:14px;box-shadow:0 3px 45px 0 rgba(0,0,0,.08);color:#949494;margin-bottom:10px}ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:first-of-type{color:#fff;padding:4px;border-radius:12px}.ion-icon-a[_ngcontent-%COMP%]{background:#31d039;color:#fff}.ion-icon-b[_ngcontent-%COMP%]{background:#316dd0;color:#fff;padding:4px;border-radius:12px}.sato-lineas[_ngcontent-%COMP%]{line-height:1px}"]}),v)}],k=((L=function i(){o(this,i)}).\u0275mod=b.Fb({type:L}),L.\u0275inj=b.Eb({factory:function(o){return new(o||L)},imports:[[s.i.forChild(S)],s.i]}),L),x=((M=function i(){o(this,i)}).\u0275mod=b.Fb({type:M}),M.\u0275inj=b.Eb({factory:function(o){return new(o||M)},imports:[[r.b,c.e,a.P,k]]}),M)}}])}();