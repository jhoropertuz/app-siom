!function(){function o(o,i){if(!(o instanceof i))throw new TypeError("Cannot call a class as a function")}function i(o,i){for(var n=0;n<i.length;n++){var e=i[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(o,e.key,e)}}function n(o,n,e){return n&&i(o.prototype,n),e&&i(o,e),o}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{TsPm:function(i,e,t){"use strict";t.r(e),t.d(e,"ListadoOxigemPageModule",(function(){return D}));var c=t("ofXK"),r=t("3Pt+"),a=t("TEn/"),s=t("tyNb"),b=t("fXoL"),l=t("fBZb"),u=t("aOlj"),d=t("Gdqo");function f(o,i){1&o&&b.Jb(0,"ion-icon",13)}function g(o,i){1&o&&b.Jb(0,"ion-icon",14)}function p(o,i){if(1&o){var n=b.Ob();b.Nb(0,"ion-button",10),b.Vb("click",(function(){return b.hc(n),b.Xb().buscador()})),b.kc(1,f,1,0,"ion-icon",11),b.kc(2,g,1,0,"ion-icon",12),b.Mb()}if(2&o){var e=b.Xb();b.xb(1),b.ac("ngIf",e.buscar),b.xb(1),b.ac("ngIf",!e.buscar)}}function h(o,i){if(1&o){var n=b.Ob();b.Nb(0,"ion-button",10),b.Vb("click",(function(){return b.hc(n),b.Xb().inicioLista()})),b.Jb(1,"ion-icon",15),b.Mb()}}var m=function(o,i){return{animate__backInRight:o,animate__backOutRight:i}};function v(o,i){if(1&o){var n=b.Ob();b.Nb(0,"ion-searchbar",16),b.Vb("ionChange",(function(o){return b.hc(n),b.Xb().ChangeSearchbar(o.target.value)})),b.Mb()}if(2&o){var e=b.Xb();b.ac("ngClass",b.ec(1,m,e.buscarAnimacion,!e.buscarAnimacion))}}function S(o,i){if(1&o){var n=b.Ob();b.Nb(0,"ion-item",21),b.Nb(1,"ion-label",22),b.Nb(2,"p"),b.lc(3),b.Mb(),b.Nb(4,"ion-button",23),b.Vb("click",(function(){return b.hc(n),b.Xb(2).mostrarListaSeleccionados()})),b.lc(5,"Finalizar"),b.Mb(),b.Nb(6,"ion-button",24),b.Vb("click",(function(){return b.hc(n),b.Xb(2).reiniciarSeleccionados()})),b.lc(7,"Reiniciar"),b.Mb(),b.Mb(),b.Mb()}if(2&o){var e=b.Xb(2);b.xb(3),b.nc("Equipos Seleccionados ",e.equiposSeleccionados.length,"")}}function M(o,i){if(1&o&&(b.Nb(0,"span"),b.Jb(1,"br"),b.lc(2," Refe : "),b.Nb(3,"strong"),b.lc(4),b.Mb(),b.Mb()),2&o){var n=b.Xb().$implicit;b.xb(4),b.oc("",n.referenciaIdentificacion," | ",n.referenciaRazonSocial,"")}}function N(o,i){if(1&o){var n=b.Ob();b.Nb(0,"ion-col",25),b.Nb(1,"ion-item",26),b.Nb(2,"ion-grid"),b.Nb(3,"ion-row",27),b.Nb(4,"ion-col",28),b.Nb(5,"h4"),b.Nb(6,"strong"),b.lc(7),b.Mb(),b.Jb(8,"br"),b.lc(9),b.Mb(),b.Nb(10,"span"),b.lc(11),b.Mb(),b.Jb(12,"br"),b.Nb(13,"span"),b.lc(14," Cliente : "),b.Nb(15,"strong"),b.lc(16),b.Mb(),b.Mb(),b.kc(17,M,5,2,"span",9),b.Mb(),b.Nb(18,"ion-col",29),b.Nb(19,"ion-button",30),b.Vb("click",(function(){b.hc(n);var o=i.$implicit;return b.Xb(2).seleccionarEquipo(o)})),b.Jb(20,"ion-icon",31),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb()}if(2&o){var e=i.$implicit;b.xb(7),b.nc(" SN : ",e.equipoSerial,""),b.xb(2),b.nc(" C\xf3digo : ",e.equipoCodigo,""),b.xb(2),b.nc(" ",e.equipoTitulo," "),b.xb(5),b.oc("",e.personaIdentificacion," | ",e.personaRazonSocial,""),b.xb(1),b.ac("ngIf",e.referenciaIdentificacion)}}function x(o,i){if(1&o){var n=b.Ob();b.Nb(0,"ion-row"),b.Nb(1,"ion-col"),b.kc(2,S,8,1,"ion-item",17),b.Mb(),b.kc(3,N,21,6,"ion-col",18),b.Nb(4,"ion-infinite-scroll",19),b.Vb("ionInfinite",(function(o){return b.hc(n),b.Xb().loadData(o)})),b.Jb(5,"ion-infinite-scroll-content",20),b.Mb(),b.Mb()}if(2&o){var e=b.Xb();b.xb(2),b.ac("ngIf",e.equiposSeleccionados.length>0),b.xb(1),b.ac("ngForOf",e.listado)}}function k(o,i){if(1&o&&(b.Nb(0,"span"),b.Nb(1,"strong"),b.lc(2," Referencia : "),b.Mb(),b.Jb(3,"br"),b.lc(4),b.Mb()),2&o){var n=b.Xb(2);b.xb(4),b.oc(" ",n.equipoSeleccionado.referenciaIdentificacion," | ",n.equipoSeleccionado.referenciaRazonSocial," ")}}function q(o,i){if(1&o&&(b.Lb(0),b.Nb(1,"ion-label",41),b.Nb(2,"strong"),b.lc(3,"equipo:"),b.Mb(),b.lc(4),b.Jb(5,"br"),b.Nb(6,"strong"),b.lc(7,"Codigo:"),b.Mb(),b.lc(8),b.Jb(9,"br"),b.Mb(),b.Kb()),2&o){var n=i.$implicit;b.xb(4),b.nc(" ",n.equipoTitulo,""),b.xb(4),b.nc(" ",n.equipoCodigo,"")}}function I(o,i){if(1&o&&(b.Lb(0),b.Nb(1,"ion-text",36),b.Nb(2,"h2"),b.lc(3,"Otros Pendientes"),b.Mb(),b.Mb(),b.kc(4,q,10,2,"ng-container",40),b.Kb()),2&o){var n=b.Xb(2);b.xb(4),b.ac("ngForOf",n.equipoSeleccionado.otrosPendientes)}}function C(o,i){if(1&o){var n=b.Ob();b.Nb(0,"ion-button",42),b.Vb("click",(function(){return b.hc(n),b.Xb(2).guardarSeleccion("buen_estado")})),b.lc(1,"Buen estado"),b.Mb()}}function E(o,i){if(1&o){var n=b.Ob();b.Nb(0,"ion-button",43),b.Vb("click",(function(){return b.hc(n),b.Xb(2).guardarSeleccion("perdido")})),b.lc(1,"Perdido"),b.Mb()}}function O(o,i){if(1&o){var n=b.Ob();b.Nb(0,"ion-button",44),b.Vb("click",(function(){return b.hc(n),b.Xb(2).guardarSeleccion("devuelto")})),b.lc(1,"Devuelto"),b.Mb()}}function T(o,i){if(1&o){var n=b.Ob();b.Nb(0,"ion-button",42),b.Vb("click",(function(){return b.hc(n),b.Xb(2).guardarSeleccion()})),b.lc(1,"Aceptar"),b.Mb()}}function y(o,i){if(1&o){var n=b.Ob();b.Nb(0,"ion-row"),b.Nb(1,"ion-col",32),b.Nb(2,"ion-item",26),b.Nb(3,"ion-grid"),b.Nb(4,"ion-row",27),b.Nb(5,"ion-col",33),b.Nb(6,"ion-label"),b.Nb(7,"ion-button",34),b.Vb("click",(function(){return b.hc(n),b.Xb().cancelarSeleccion()})),b.lc(8,"Cancelar"),b.Mb(),b.Mb(),b.Mb(),b.Nb(9,"ion-col",32),b.Nb(10,"ion-label",35),b.Nb(11,"ion-text",36),b.Nb(12,"h2"),b.lc(13,"Equipo"),b.Mb(),b.Mb(),b.Nb(14,"strong"),b.lc(15,"equipo:"),b.Mb(),b.lc(16),b.Jb(17,"br"),b.Nb(18,"strong"),b.lc(19,"Serie:"),b.Mb(),b.lc(20),b.Jb(21,"br"),b.Nb(22,"strong"),b.lc(23,"Codigo Equipo:"),b.Mb(),b.lc(24),b.Jb(25,"br"),b.Nb(26,"strong"),b.lc(27,"Tipo Equipo:"),b.Mb(),b.lc(28),b.Jb(29,"br"),b.Nb(30,"strong"),b.lc(31,"Capacidad:"),b.Mb(),b.lc(32),b.Jb(33,"br"),b.Jb(34,"br"),b.Nb(35,"ion-text",36),b.Nb(36,"h2"),b.lc(37,"Cliente"),b.Mb(),b.Mb(),b.Nb(38,"strong"),b.lc(39,"Nombre:"),b.Mb(),b.lc(40),b.Jb(41,"br"),b.Nb(42,"strong"),b.lc(43,"CC:"),b.Mb(),b.lc(44),b.Jb(45,"br"),b.Nb(46,"strong"),b.lc(47,"Codigo Cliente:"),b.Mb(),b.lc(48),b.Jb(49,"br"),b.Nb(50,"strong"),b.lc(51,"Correo:"),b.Mb(),b.lc(52),b.Jb(53,"br"),b.kc(54,k,5,2,"span",9),b.Jb(55,"br"),b.Jb(56,"br"),b.Nb(57,"ion-text",36),b.Nb(58,"h2"),b.lc(59,"Recibo"),b.Mb(),b.Mb(),b.Nb(60,"strong"),b.lc(61,"Numero:"),b.Mb(),b.lc(62),b.Jb(63,"br"),b.Nb(64,"strong"),b.lc(65,"Servicio:"),b.Mb(),b.lc(66),b.Jb(67,"br"),b.Nb(68,"strong"),b.lc(69,"Fecha Servicio:"),b.Mb(),b.lc(70),b.Jb(71,"br"),b.Nb(72,"strong"),b.lc(73,"Fecha recogida:"),b.Mb(),b.lc(74),b.Jb(75,"br"),b.Jb(76,"br"),b.kc(77,I,5,1,"ng-container",9),b.Jb(78,"br"),b.Jb(79,"br"),b.kc(80,C,2,0,"ion-button",37),b.kc(81,E,2,0,"ion-button",38),b.kc(82,O,2,0,"ion-button",39),b.kc(83,T,2,0,"ion-button",37),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb()}if(2&o){var e=b.Xb();b.xb(16),b.nc(" ",e.equipoSeleccionado.equipoTitulo,""),b.xb(4),b.nc(" ",e.equipoSeleccionado.equipoSerial,""),b.xb(4),b.nc(" ",e.equipoSeleccionado.equipoCodigo,""),b.xb(4),b.nc(" ",e.equipoSeleccionado.tipoEquipoTitulo,""),b.xb(4),b.nc(" ",e.equipoSeleccionado.equipoCapacidad,""),b.xb(8),b.nc(" ",e.equipoSeleccionado.personaRazonSocial,""),b.xb(4),b.nc(" ",e.equipoSeleccionado.personaIdentificacion,""),b.xb(4),b.nc(" ",e.equipoSeleccionado.clienteCodigo,""),b.xb(4),b.nc(" ",e.equipoSeleccionado.personaCorreoElectronico,""),b.xb(2),b.ac("ngIf",e.equipoSeleccionado.referenciaIdentificacion),b.xb(8),b.nc(" ",e.equipoSeleccionado.reciboNumero,""),b.xb(4),b.nc(" ",e.equipoSeleccionado.reciboServicio,""),b.xb(4),b.nc(" ",e.equipoSeleccionado.reciboFechaServicio,""),b.xb(4),b.nc(" ",e.equipoSeleccionado.reciboFechaRecogida,""),b.xb(3),b.ac("ngIf",e.equipoSeleccionado.otrosPendientes),b.xb(3),b.ac("ngIf","recoger"==e.listadoTipo),b.xb(1),b.ac("ngIf","recoger"==e.listadoTipo),b.xb(1),b.ac("ngIf","recoger"==e.listadoTipo),b.xb(1),b.ac("ngIf","entregar"==e.listadoTipo)}}function J(o,i){if(1&o&&(b.Nb(0,"ion-label"),b.Nb(1,"strong"),b.lc(2,"Correo:"),b.Mb(),b.lc(3),b.Jb(4,"br"),b.Nb(5,"strong"),b.lc(6,"Numero:"),b.Mb(),b.lc(7),b.Jb(8,"br"),b.Nb(9,"strong"),b.lc(10,"Servicio:"),b.Mb(),b.lc(11),b.Jb(12,"br"),b.Nb(13,"strong"),b.lc(14,"Fecha Servicio:"),b.Mb(),b.lc(15),b.Jb(16,"br"),b.Nb(17,"strong"),b.lc(18,"Fecha recogida:"),b.Mb(),b.lc(19),b.Jb(20,"br"),b.Mb()),2&o){var n=b.Xb().$implicit;b.xb(3),b.nc(" ",n.personaCorreoElectronico,""),b.xb(4),b.nc(" ",n.reciboNumero,""),b.xb(4),b.nc(" ",n.reciboServicio,""),b.xb(4),b.nc(" ",n.reciboFechaServicio,""),b.xb(4),b.nc(" ",n.reciboFechaRecogida,"")}}function w(o,i){if(1&o){var n=b.Ob();b.Nb(0,"ion-col",49),b.Nb(1,"ion-item",50),b.Nb(2,"ion-grid"),b.Nb(3,"ion-row",27),b.Nb(4,"ion-col",51),b.Nb(5,"ion-label",52),b.Vb("click",(function(){b.hc(n);var o=i.index,e=b.Xb(2);return e.openIndex=e.openIndex===o?-1:o})),b.Nb(6,"strong"),b.lc(7),b.Mb(),b.Jb(8,"br"),b.Nb(9,"strong"),b.lc(10," Codigo Cliente:"),b.Mb(),b.lc(11),b.Jb(12,"br"),b.Nb(13,"strong"),b.lc(14," CC: "),b.Mb(),b.lc(15),b.Jb(16,"br"),b.Nb(17,"strong"),b.lc(18,"nombre:"),b.Mb(),b.lc(19),b.Jb(20,"br"),b.kc(21,J,21,5,"ion-label",9),b.Mb(),b.Mb(),b.Nb(22,"ion-col",53),b.Nb(23,"ion-button",54),b.Vb("click",(function(){b.hc(n);var o=i.index;return b.Xb(2).eliminarSeleccion(o)})),b.Jb(24,"ion-icon",55),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb()}if(2&o){var e=i.$implicit,t=i.index,c=b.Xb(2);b.xb(7),b.mc(e.equipoTitulo),b.xb(4),b.nc(" ",e.clienteCodigo,""),b.xb(4),b.nc(" ",e.personaIdentificacion,""),b.xb(4),b.nc(" ",e.personaRazonSocial,""),b.xb(2),b.ac("ngIf",c.openIndex===t)}}function A(o,i){if(1&o){var n=b.Ob();b.Nb(0,"ion-button",56),b.Vb("click",(function(){return b.hc(n),b.Xb(2).finalizarSelecciones("entrega-oxigem")})),b.lc(1,"Entregar"),b.Mb()}}function R(o,i){if(1&o){var n=b.Ob();b.Nb(0,"ion-button",57),b.Vb("click",(function(){return b.hc(n),b.Xb(2).finalizarSelecciones("recoger-oxigem")})),b.lc(1,"Recoger"),b.Mb()}}function z(o,i){if(1&o){var n=b.Ob();b.Nb(0,"ion-button",56),b.Vb("click",(function(){return b.hc(n),b.Xb(2).finalizarSelecciones("entrega-oxigem")})),b.lc(1,"Continuar Entregar"),b.Mb()}}function P(o,i){if(1&o){var n=b.Ob();b.Nb(0,"ion-button",57),b.Vb("click",(function(){return b.hc(n),b.Xb(2).finalizarSelecciones("recoger-oxigem")})),b.lc(1,"Continuar Recogida"),b.Mb()}}function L(o,i){if(1&o&&(b.Nb(0,"ion-row"),b.kc(1,w,25,5,"ion-col",45),b.Nb(2,"ion-col",46),b.Nb(3,"ion-label"),b.Nb(4,"ion-item",21),b.Nb(5,"ion-label",22),b.kc(6,A,2,0,"ion-button",47),b.Jb(7,"br"),b.kc(8,R,2,0,"ion-button",48),b.kc(9,z,2,0,"ion-button",47),b.Jb(10,"br"),b.kc(11,P,2,0,"ion-button",48),b.Mb(),b.Mb(),b.Mb(),b.Mb(),b.Mb()),2&o){var n=b.Xb();b.xb(1),b.ac("ngForOf",n.equiposSeleccionados),b.xb(5),b.ac("ngIf","recoger"!=n.listadoTipo&&"entregar"!=n.listadoTipo),b.xb(2),b.ac("ngIf","recoger"!=n.listadoTipo&&"entregar"!=n.listadoTipo),b.xb(1),b.ac("ngIf","entregar"==n.listadoTipo),b.xb(2),b.ac("ngIf","recoger"==n.listadoTipo)}}var X,_,B,F=[{path:"",component:(X=function(){function i(n,e,t,c,r,a){o(this,i),this.DatosEquiposService=n,this.Router=e,this.ActivatedRoute=t,this.BaseService=c,this.Sweetalert=r,this.MenuController=a,this.cantidadItemLista=10,this.inicioItemLista=0,this.buscadorActivo=!1,this.buscar=!1,this.buscarAnimacion=!1,this.listado=[],this.listadoFilter=[],this.listadoTodos=[],this.equiposSeleccionados=[],this.mostrarSeleccionados=!1,this.mostrarSeleccionado=!1,this.active=!0,this.RECOGER=!1,this.ENTREGAR=!1}return n(i,[{key:"ngOnInit",value:function(){this.MenuController.enable(!0,"menu"),this.listadoTipo=this.ActivatedRoute.snapshot.params.tipo,"recoger"==this.listadoTipo?(this.titulo="Recoger",this.RECOGER=!0,this.configLista={operacionBusqueda:["recogerEquipos","buscarEquipos"],operacionListado:["recogerEquipos","listaPendientesPaginado"],operacionOtrosPendientes:["recogerEquipos","otrosPendientesPorCliente"]}):"entregar"==this.listadoTipo&&(this.titulo="Entregar",this.ENTREGAR=!0,this.configLista={operacionBusqueda:["entregarEquipos","buscarEquipos"],operacionListado:["entregarEquipos","listaPendientesPaginado"],operacionOtrosPendientes:["entregarEquipos","otrosPendientesPorRecibo"]}),this.getListado()}},{key:"irRuta",value:function(o){this.Router.navigateByUrl(o)}},{key:"guardarSeleccion",value:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.equipoSeleccionado.estadoEntregaEquipo=o,this.equiposSeleccionados.push(this.equipoSeleccionado),this.ENTREGAR?this.finalizarSelecciones("entrega-oxigem"):this.inicioLista()}},{key:"cancelarSeleccion",value:function(){this.inicioLista()}},{key:"inicioLista",value:function(){this.mostrarSeleccionado=!1,this.mostrarSeleccionados=!1}},{key:"seleccionarEquipo",value:function(o){var i,n=this;o.otrosPendientes=[],i=this.ENTREGAR?{reciboID:o.reciboId,equipoID:o.equipoId}:{clienteID:o.clienteId,equipoID:o.equipoId},this.BaseService.postJson("repartidores",this.configLista.operacionOtrosPendientes[0],this.configLista.operacionOtrosPendientes[1],i).subscribe((function(i){(i.RESPUESTA="EXITO")?(i.DATOS&&(o.otrosPendientes=i.DATOS),n.equipoSeleccionado=o,n.buscadorActivo&&n.buscador(),n.mostrarSeleccionado=!0):n.Sweetalert.modal("error","No se a cargado correctamente la info del equipo.")}))}},{key:"eliminarSeleccion",value:function(o){console.log("eliminar:"+o),this.equiposSeleccionados.splice(o,1),0==this.equiposSeleccionados.length&&(this.mostrarSeleccionados=!1)}},{key:"finalizarSelecciones",value:function(o){var i=this,n=this.BaseService.presentLoading();this.DatosEquiposService.setEquipos(this.equiposSeleccionados).then((function(e){setTimeout((function(){n.then((function(o){o.dismiss()})),i.reiniciarSeleccionados(),i.Router.navigateByUrl(o)}),500)})).catch((function(o){console.log(o)}))}},{key:"mostrarListaSeleccionados",value:function(){this.mostrarSeleccionados=!0}},{key:"reiniciarSeleccionados",value:function(){this.equiposSeleccionados=[]}},{key:"loadData",value:function(o){this.buscadorActivo||(this.inicioItemLista=this.inicioItemLista+10,this.eventCargandoLista=o,this.listado.length<10&&(this.eventCargandoLista.target.disabled=!0),this.getListado())}},{key:"toggleInfiniteScroll",value:function(){console.log("jdhkfjkj"),this.infiniteScroll.disabled=!this.infiniteScroll.disabled}},{key:"buscador",value:function(){var o=this;this.buscar?(this.buscarAnimacion=!1,setTimeout((function(){o.buscar=!1,o.ChangeSearchbar("")}),900)):(this.buscar=!0,this.buscarAnimacion=!0)}},{key:"getListado",value:function(){var o=this;this.BaseService.postJson("repartidores",this.configLista.operacionListado[0],this.configLista.operacionListado[1],{inicioEquiposRecoger:this.inicioItemLista,mostrarEquiposRecoger:this.cantidadItemLista}).subscribe((function(i){(i.RESPUESTA="EXITO")?i.DATOS?(o.listadoTodos=[].concat(o.listadoTodos,i.DATOS),o.listado=o.listadoTodos,o.listadoFilter=o.listadoTodos,console.log(o.listadoTodos)):o.Sweetalert.notificacion("info","No se encontraron servicios."):o.Sweetalert.modal("error",i.mensaje),o.eventCargandoLista&&o.eventCargandoLista.target.complete()}))}},{key:"reiniciar",value:function(){this.listadoTodos=[],this.listado=[],this.listadoFilter=[]}},{key:"doRefresh",value:function(o){this.inicioItemLista=0,this.reiniciar(),this.getListado(),setTimeout((function(){o.target.complete()}),1e3)}},{key:"ChangeSearchbar",value:function(o){var i=this,n=o;n&&""!==n.trim()&&n.length>3?(this.buscadorActivo=!0,this.BaseService.postJson("repartidores",this.configLista.operacionBusqueda[0],this.configLista.operacionBusqueda[1],{datoBusqueda:o}).subscribe((function(o){(o.RESPUESTA="EXITO")?o.DATOS?i.listado=o.DATOS:(i.listado=[],i.Sweetalert.notificacion("info","No se encontraron equipos.")):i.Sweetalert.modal("error",o.mensaje)}))):(this.buscadorActivo=!1,this.listado=this.listadoTodos)}}]),i}(),X.\u0275fac=function(o){return new(o||X)(b.Ib(l.a),b.Ib(s.g),b.Ib(s.a),b.Ib(u.a),b.Ib(d.a),b.Ib(a.S))},X.\u0275cmp=b.Cb({type:X,selectors:[["app-listado-oxigem"]],viewQuery:function(o,i){var n;1&o&&b.pc(a.u,!0),2&o&&b.fc(n=b.Wb())&&(i.infiniteScroll=n.first)},decls:17,vars:8,consts:[[1,"ion-no-border"],["slot","start"],["icon","chevron-back"],["slot","end"],["size","small",3,"click",4,"ngIf"],[3,"fullscreen"],["color","primary","placeholder","Buscar","style","margin-bottom: 40%;","autocomplete","On","style","position:fixed; z-index: 100;","class","animate__animated  ",3,"ngClass","ionChange",4,"ngIf"],["slot","fixed",3,"ionRefresh"],[1,"ion-padding"],[4,"ngIf"],["size","small",3,"click"],["name","search-circle",4,"ngIf"],["name","search",4,"ngIf"],["name","search-circle"],["name","search"],["name","list-outline"],["color","primary","placeholder","Buscar","autocomplete","On",1,"animate__animated",2,"position","fixed","z-index","100",3,"ngClass","ionChange"],["lines","none",4,"ngIf"],["size-lg","6","size","12",4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading more data..."],["lines","none"],[1,"text-center"],["color","success","size","small",3,"click"],["color","primary","size","small",3,"click"],["size-lg","6","size","12"],["lines","none",1,"animate__animated","animate__fadeInUpBig",2,"margin","2px"],[1,"ion-align-items-center"],["size","9"],["size","3",1,"text-right"],["fill","clear","size","large",3,"click"],["name","chevron-forward","slot","end",1,"ion-icon-a"],["size","12"],["size","12",2,"margin-bottom","5%"],["color","danger",3,"click"],[1,"ion-text-wrap","text-center"],["color","primary"],["color","success","size","small","slot","end",3,"click",4,"ngIf"],["color","warning","size","small","slot","end",3,"click",4,"ngIf"],["color","primary","size","small","slot","end",3,"click",4,"ngIf"],[4,"ngFor","ngForOf"],[2,"border","solid red"],["color","success","size","small","slot","end",3,"click"],["color","warning","size","small","slot","end",3,"click"],["color","primary","size","small","slot","end",3,"click"],["size","12","size-lg","6","size","12",4,"ngFor","ngForOf"],["size","12",2,"margin-top","5%"],["color","success","style","width: 100%;","size","large","slot","start",3,"click",4,"ngIf"],["color","primary","style","width: 100%;","size","large","slot","end",3,"click",4,"ngIf"],["size","12","size-lg","6","size","12"],["lines","none",1,"",2,"margin","2px"],["size","10"],[3,"click"],["size","2",1,"text-right"],["size","small","fill","clear",3,"click"],["name","close-outline","color","danger",2,"background","white"],["color","success","size","large","slot","start",2,"width","100%",3,"click"],["color","primary","size","large","slot","end",2,"width","100%",3,"click"]],template:function(o,i){1&o&&(b.Nb(0,"ion-header",0),b.Nb(1,"ion-toolbar"),b.Nb(2,"ion-title"),b.lc(3),b.Mb(),b.Nb(4,"ion-buttons",1),b.Jb(5,"ion-back-button",2),b.Mb(),b.Nb(6,"ion-buttons",3),b.kc(7,p,3,2,"ion-button",4),b.kc(8,h,2,0,"ion-button",4),b.Mb(),b.Mb(),b.Mb(),b.Nb(9,"ion-content",5),b.kc(10,v,1,4,"ion-searchbar",6),b.Nb(11,"ion-refresher",7),b.Vb("ionRefresh",(function(o){return i.doRefresh(o)})),b.Jb(12,"ion-refresher-content"),b.Mb(),b.Nb(13,"div",8),b.kc(14,x,6,2,"ion-row",9),b.kc(15,y,84,19,"ion-row",9),b.kc(16,L,12,5,"ion-row",9),b.Mb(),b.Mb()),2&o&&(b.xb(3),b.mc(i.titulo),b.xb(4),b.ac("ngIf",!i.mostrarSeleccionados&&!i.mostrarSeleccionado),b.xb(1),b.ac("ngIf",i.mostrarSeleccionados&&!i.mostrarSeleccionado),b.xb(1),b.ac("fullscreen",!0),b.xb(1),b.ac("ngIf",i.buscar),b.xb(4),b.ac("ngIf",!i.mostrarSeleccionados&&!i.mostrarSeleccionado),b.xb(1),b.ac("ngIf",i.mostrarSeleccionado),b.xb(1),b.ac("ngIf",i.mostrarSeleccionados&&!i.mostrarSeleccionado))},directives:[a.r,a.O,a.N,a.h,a.d,a.e,c.j,a.p,a.F,a.G,a.g,a.s,a.J,a.W,c.h,a.I,a.o,c.i,a.u,a.v,a.x,a.y,a.q,a.M],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:#003f7f;color:#fff;border-radius:0 0 20% 20%}ion-col[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]{--background:#f6f6f6}ion-card[_ngcontent-%COMP%]{margin-top:-180px;z-index:10;padding:6px;box-shadow:none;box-shadow:0 3px 45px 0 rgba(0,0,0,.16);border-radius:40px;overflow:visible}ion-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:240px;margin:-60px auto auto}ion-item[_ngcontent-%COMP%]{border-radius:14px;box-shadow:0 3px 45px 0 rgba(0,0,0,.08);color:#949494;margin-bottom:10px}ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:first-of-type{color:#fff;padding:4px;border-radius:12px}.ion-icon-a[_ngcontent-%COMP%]{background:#31d039;color:#fff}.ion-icon-b[_ngcontent-%COMP%]{background:#316dd0;color:#fff;padding:4px;border-radius:12px}.sato-lineas[_ngcontent-%COMP%]{line-height:1px}"]}),X)}],V=((B=function i(){o(this,i)}).\u0275mod=b.Gb({type:B}),B.\u0275inj=b.Fb({factory:function(o){return new(o||B)},imports:[[s.i.forChild(F)],s.i]}),B),D=((_=function i(){o(this,i)}).\u0275mod=b.Gb({type:_}),_.\u0275inj=b.Fb({factory:function(o){return new(o||_)},imports:[[c.b,r.e,a.P,V]]}),_)},aOlj:function(i,e,t){"use strict";t.d(e,"a",(function(){return u}));var c=t("mrSG"),r=t("tk/3"),a=t("ool6"),s=t("fXoL"),b=t("6uu6"),l=t("TEn/"),u=function(){var i=function(){function i(n,e,t){o(this,i),this.AuthService=n,this.http=e,this.loadingController=t,this.headers=new r.c({"Content-Type":"aplication/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH, OPTIONS","Access-Control-Allow-Headers":"Access-Control-Allow-Headers,Content-Type,Access-Control-All-Methods"})}return n(i,[{key:"presentLoading",value:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Cargando...",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"my-custom-class";return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.loadingController.create({cssClass:i,message:o});case 2:return e=n.sent,n.abrupt("return",(e.present(),e));case 4:case"end":return n.stop()}}),n,this)})))}},{key:"getJson",value:function(o){return this.http.get(a.a.API_BASE+o)}},{key:"postJson",value:function(o,i,n){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return e.componente=o,e.controlador=i,e.accion=n,e.authUsuarioID=this.AuthService.getUsuario().usuarioId,this.http.post(a.a.API_BASE,e)}},{key:"putJson",value:function(o,i){return this.http.patch(a.a.API_BASE+i,o)}},{key:"login",value:function(o,i,n){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return e.componente=o,e.controlador=i,e.accion=n,this.http.post(a.a.API_BASE,e)}}]),i}();return i.\u0275fac=function(o){return new(o||i)(s.Rb(b.a),s.Rb(r.a),s.Rb(l.R))},i.\u0275prov=s.Eb({token:i,factory:i.\u0275fac,providedIn:"root"}),i}()},fBZb:function(i,e,t){"use strict";t.d(e,"a",(function(){return r}));var c=t("fXoL"),r=function(){var i=function(){function i(){o(this,i),this.equipos=[],this.cliente=[]}return n(i,[{key:"setEquipos",value:function(o){var i=this;return new Promise((function(n,e){return i.equipos=o,console.log("promesa set eqipo"),n(!0)}))}},{key:"getEquipos",value:function(){return this.equipos}},{key:"deleteEquipos",value:function(){this.equipos=[]}}]),i}();return i.\u0275fac=function(o){return new(o||i)},i.\u0275prov=c.Eb({token:i,factory:i.\u0275fac,providedIn:"root"}),i}()},ool6:function(o,i,n){"use strict";n.d(i,"a",(function(){return e}));var e={API_BASE:"https://siom.oximeiser.com/api.php",ARCHIVO_BASE:"https://siom.oximeiser.com/"}}}])}();