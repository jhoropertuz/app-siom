(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{TsPm:function(o,i,n){"use strict";n.r(i),n.d(i,"ListadoOxigemPageModule",(function(){return y}));var e=n("ofXK"),t=n("3Pt+"),c=n("TEn/"),r=n("tyNb"),s=n("fXoL"),b=n("fBZb"),a=n("aOlj"),l=n("Gdqo");function u(o,i){1&o&&s.Ib(0,"ion-icon",13)}function d(o,i){1&o&&s.Ib(0,"ion-icon",14)}function g(o,i){if(1&o){const o=s.Nb();s.Mb(0,"ion-button",10),s.Ub("click",(function(){return s.gc(o),s.Wb().buscador()})),s.jc(1,u,1,0,"ion-icon",11),s.jc(2,d,1,0,"ion-icon",12),s.Lb()}if(2&o){const o=s.Wb();s.xb(1),s.Zb("ngIf",o.buscar),s.xb(1),s.Zb("ngIf",!o.buscar)}}function f(o,i){if(1&o){const o=s.Nb();s.Mb(0,"ion-button",10),s.Ub("click",(function(){return s.gc(o),s.Wb().inicioLista()})),s.Ib(1,"ion-icon",15),s.Lb()}}const p=function(o,i){return{animate__backInRight:o,animate__backOutRight:i}};function h(o,i){if(1&o){const o=s.Nb();s.Mb(0,"ion-searchbar",16),s.Ub("ionChange",(function(i){return s.gc(o),s.Wb().ChangeSearchbar(i.target.value)})),s.Lb()}if(2&o){const o=s.Wb();s.Zb("ngClass",s.dc(1,p,o.buscarAnimacion,!o.buscarAnimacion))}}function m(o,i){if(1&o){const o=s.Nb();s.Mb(0,"ion-item",21),s.Mb(1,"ion-label",22),s.Mb(2,"p"),s.kc(3),s.Lb(),s.Mb(4,"ion-button",23),s.Ub("click",(function(){return s.gc(o),s.Wb(2).mostrarListaSeleccionados()})),s.kc(5,"Finalizar"),s.Lb(),s.Mb(6,"ion-button",24),s.Ub("click",(function(){return s.gc(o),s.Wb(2).reiniciarSeleccionados()})),s.kc(7,"Reiniciar"),s.Lb(),s.Lb(),s.Lb()}if(2&o){const o=s.Wb(2);s.xb(3),s.mc("Equipos Seleccionados ",o.equiposSeleccionados.length,"")}}function k(o,i){if(1&o){const o=s.Nb();s.Mb(0,"ion-col",25),s.Mb(1,"ion-item",26),s.Mb(2,"ion-grid"),s.Mb(3,"ion-row",27),s.Mb(4,"ion-col",28),s.Mb(5,"h4"),s.Mb(6,"strong"),s.kc(7),s.Lb(),s.Lb(),s.Mb(8,"p"),s.kc(9),s.Ib(10,"br"),s.kc(11),s.Lb(),s.Mb(12,"ion-buttons"),s.Mb(13,"ion-button",29),s.Ub("click",(function(){return s.gc(o),s.Wb(2).irRuta("detalles-usuario/7")})),s.Ib(14,"ion-icon",30),s.Lb(),s.Mb(15,"ion-button",29),s.Ub("click",(function(){return s.gc(o),s.Wb(2).irRuta("recoger-oxigem/21")})),s.Ib(16,"ion-icon",31),s.Lb(),s.Lb(),s.Lb(),s.Mb(17,"ion-col",32),s.Mb(18,"ion-button",33),s.Ub("click",(function(){s.gc(o);const n=i.$implicit;return s.Wb(2).seleccionarEquipo(n)})),s.Ib(19,"ion-icon",34),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb()}if(2&o){const o=i.$implicit;s.xb(7),s.lc(o.servicioCodigo),s.xb(2),s.mc(" Cliente : ",o.personaRazonSocial," "),s.xb(2),s.mc(" Recogida : ",o.reciboFechaRecogida," ")}}function L(o,i){if(1&o){const o=s.Nb();s.Mb(0,"ion-row"),s.Mb(1,"ion-col"),s.jc(2,m,8,1,"ion-item",17),s.Lb(),s.jc(3,k,20,3,"ion-col",18),s.Mb(4,"ion-infinite-scroll",19),s.Ub("ionInfinite",(function(i){return s.gc(o),s.Wb().loadData(i)})),s.Ib(5,"ion-infinite-scroll-content",20),s.Lb(),s.Lb()}if(2&o){const o=s.Wb();s.xb(2),s.Zb("ngIf",o.equiposSeleccionados.length>0),s.xb(1),s.Zb("ngForOf",o.listado)}}function M(o,i){if(1&o){const o=s.Nb();s.Mb(0,"ion-button",43),s.Ub("click",(function(){return s.gc(o),s.Wb(2).guardarSeleccion("buen_estado")})),s.kc(1,"Buen estado"),s.Lb()}}function S(o,i){if(1&o){const o=s.Nb();s.Mb(0,"ion-button",44),s.Ub("click",(function(){return s.gc(o),s.Wb(2).guardarSeleccion("perdido")})),s.kc(1,"Perdido"),s.Lb()}}function x(o,i){if(1&o){const o=s.Nb();s.Mb(0,"ion-button",45),s.Ub("click",(function(){return s.gc(o),s.Wb(2).guardarSeleccion("devuelto")})),s.kc(1,"Devuelto"),s.Lb()}}function I(o,i){if(1&o){const o=s.Nb();s.Mb(0,"ion-button",43),s.Ub("click",(function(){return s.gc(o),s.Wb(2).guardarSeleccion()})),s.kc(1,"Aceptar"),s.Lb()}}function C(o,i){if(1&o){const o=s.Nb();s.Mb(0,"ion-row"),s.Mb(1,"ion-col",35),s.Mb(2,"ion-item",26),s.Mb(3,"ion-grid"),s.Mb(4,"ion-row",27),s.Mb(5,"ion-col",36),s.Mb(6,"ion-label"),s.Mb(7,"ion-button",37),s.Ub("click",(function(){return s.gc(o),s.Wb().cancelarSeleccion()})),s.kc(8,"Cancelar"),s.Lb(),s.Lb(),s.Lb(),s.Mb(9,"ion-col",35),s.Mb(10,"ion-label",38),s.Mb(11,"ion-text",39),s.Mb(12,"h2"),s.kc(13,"Equipo"),s.Lb(),s.Lb(),s.Mb(14,"strong"),s.kc(15,"equipo:"),s.Lb(),s.kc(16),s.Ib(17,"br"),s.Mb(18,"strong"),s.kc(19,"Serie:"),s.Lb(),s.kc(20),s.Ib(21,"br"),s.Mb(22,"strong"),s.kc(23,"Codigo Equipo:"),s.Lb(),s.kc(24),s.Ib(25,"br"),s.Ib(26,"br"),s.Mb(27,"ion-text",39),s.Mb(28,"h2"),s.kc(29,"Cliente"),s.Lb(),s.Lb(),s.Mb(30,"strong"),s.kc(31,"Nombre:"),s.Lb(),s.kc(32),s.Ib(33,"br"),s.Mb(34,"strong"),s.kc(35,"CC:"),s.Lb(),s.kc(36),s.Ib(37,"br"),s.Mb(38,"strong"),s.kc(39,"Codigo Cliente:"),s.Lb(),s.kc(40),s.Ib(41,"br"),s.Mb(42,"strong"),s.kc(43,"Correo:"),s.Lb(),s.kc(44),s.Ib(45,"br"),s.Ib(46,"br"),s.Mb(47,"ion-text",39),s.Mb(48,"h2"),s.kc(49,"Recibo"),s.Lb(),s.Lb(),s.Mb(50,"strong"),s.kc(51,"Numero:"),s.Lb(),s.kc(52),s.Ib(53,"br"),s.Mb(54,"strong"),s.kc(55,"Servicio:"),s.Lb(),s.kc(56),s.Ib(57,"br"),s.Mb(58,"strong"),s.kc(59,"Fecha Servicio:"),s.Lb(),s.kc(60),s.Ib(61,"br"),s.Mb(62,"strong"),s.kc(63,"Fecha recogida:"),s.Lb(),s.kc(64),s.Ib(65,"br"),s.Ib(66,"br"),s.Ib(67,"br"),s.jc(68,M,2,0,"ion-button",40),s.jc(69,S,2,0,"ion-button",41),s.jc(70,x,2,0,"ion-button",42),s.jc(71,I,2,0,"ion-button",40),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb()}if(2&o){const o=s.Wb();s.xb(16),s.mc(" ",o.equipoSeleccionado.equipoTitulo,""),s.xb(4),s.mc(" ",o.equipoSeleccionado.equipoSerial,""),s.xb(4),s.mc(" ",o.equipoSeleccionado.equipoCodigo,""),s.xb(8),s.mc(" ",o.equipoSeleccionado.personaRazonSocial,""),s.xb(4),s.mc(" ",o.equipoSeleccionado.personaIdentificacion,""),s.xb(4),s.mc(" ",o.equipoSeleccionado.clienteCodigo,""),s.xb(4),s.mc(" ",o.equipoSeleccionado.personaCorreoElectronico,""),s.xb(8),s.mc(" ",o.equipoSeleccionado.reciboNumero,""),s.xb(4),s.mc(" ",o.equipoSeleccionado.reciboServicio,""),s.xb(4),s.mc(" ",o.equipoSeleccionado.reciboFechaServicio,""),s.xb(4),s.mc(" ",o.equipoSeleccionado.reciboFechaRecogida,""),s.xb(4),s.Zb("ngIf","recoger"==o.listadoTipo),s.xb(1),s.Zb("ngIf","recoger"==o.listadoTipo),s.xb(1),s.Zb("ngIf","recoger"==o.listadoTipo),s.xb(1),s.Zb("ngIf","entregar"==o.listadoTipo)}}function q(o,i){if(1&o&&(s.Mb(0,"ion-label"),s.Mb(1,"strong"),s.kc(2,"Correo:"),s.Lb(),s.kc(3),s.Ib(4,"br"),s.Mb(5,"strong"),s.kc(6,"Numero:"),s.Lb(),s.kc(7),s.Ib(8,"br"),s.Mb(9,"strong"),s.kc(10,"Servicio:"),s.Lb(),s.kc(11),s.Ib(12,"br"),s.Mb(13,"strong"),s.kc(14,"Fecha Servicio:"),s.Lb(),s.kc(15),s.Ib(16,"br"),s.Mb(17,"strong"),s.kc(18,"Fecha recogida:"),s.Lb(),s.kc(19),s.Ib(20,"br"),s.Lb()),2&o){const o=s.Wb().$implicit;s.xb(3),s.mc(" ",o.personaCorreoElectronico,""),s.xb(4),s.mc(" ",o.reciboNumero,""),s.xb(4),s.mc(" ",o.reciboServicio,""),s.xb(4),s.mc(" ",o.reciboFechaServicio,""),s.xb(4),s.mc(" ",o.reciboFechaRecogida,"")}}function v(o,i){if(1&o){const o=s.Nb();s.Mb(0,"ion-col",50),s.Mb(1,"ion-item",51),s.Mb(2,"ion-grid"),s.Mb(3,"ion-row",27),s.Mb(4,"ion-col",52),s.Mb(5,"ion-label",53),s.Ub("click",(function(){s.gc(o);const n=i.index,e=s.Wb(2);return e.openIndex=e.openIndex===n?-1:n})),s.Mb(6,"strong"),s.kc(7),s.Lb(),s.Ib(8,"br"),s.Mb(9,"strong"),s.kc(10," Codigo Cliente:"),s.Lb(),s.kc(11),s.Ib(12,"br"),s.Mb(13,"strong"),s.kc(14," CC: "),s.Lb(),s.kc(15),s.Ib(16,"br"),s.Mb(17,"strong"),s.kc(18,"nombre:"),s.Lb(),s.kc(19),s.Ib(20,"br"),s.jc(21,q,21,5,"ion-label",9),s.Lb(),s.Lb(),s.Mb(22,"ion-col",54),s.Mb(23,"ion-button",55),s.Ub("click",(function(){s.gc(o);const n=i.index;return s.Wb(2).eliminarSeleccion(n)})),s.Ib(24,"ion-icon",56),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb()}if(2&o){const o=i.$implicit,n=i.index,e=s.Wb(2);s.xb(7),s.lc(o.equipoTitulo),s.xb(4),s.mc(" ",o.clienteCodigo,""),s.xb(4),s.mc(" ",o.personaIdentificacion,""),s.xb(4),s.mc(" ",o.personaRazonSocial,""),s.xb(2),s.Zb("ngIf",e.openIndex===n)}}function T(o,i){if(1&o){const o=s.Nb();s.Mb(0,"ion-button",57),s.Ub("click",(function(){return s.gc(o),s.Wb(2).finalizarSelecciones("entrega-oxigem")})),s.kc(1,"Entregar"),s.Lb()}}function w(o,i){if(1&o){const o=s.Nb();s.Mb(0,"ion-button",58),s.Ub("click",(function(){return s.gc(o),s.Wb(2).finalizarSelecciones("recoger-oxigem")})),s.kc(1,"Recoger"),s.Lb()}}function z(o,i){if(1&o){const o=s.Nb();s.Mb(0,"ion-button",57),s.Ub("click",(function(){return s.gc(o),s.Wb(2).finalizarSelecciones("entrega-oxigem")})),s.kc(1,"Continuar Entregar"),s.Lb()}}function E(o,i){if(1&o){const o=s.Nb();s.Mb(0,"ion-button",58),s.Ub("click",(function(){return s.gc(o),s.Wb(2).finalizarSelecciones("recoger-oxigem")})),s.kc(1,"Continuar Recogida"),s.Lb()}}function O(o,i){if(1&o&&(s.Mb(0,"ion-row"),s.jc(1,v,25,5,"ion-col",46),s.Mb(2,"ion-col",47),s.Mb(3,"ion-label"),s.Mb(4,"ion-item",21),s.Mb(5,"ion-label",22),s.jc(6,T,2,0,"ion-button",48),s.Ib(7,"br"),s.jc(8,w,2,0,"ion-button",49),s.jc(9,z,2,0,"ion-button",48),s.Ib(10,"br"),s.jc(11,E,2,0,"ion-button",49),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&o){const o=s.Wb();s.xb(1),s.Zb("ngForOf",o.equiposSeleccionados),s.xb(5),s.Zb("ngIf","recoger"!=o.listadoTipo&&"entregar"!=o.listadoTipo),s.xb(2),s.Zb("ngIf","recoger"!=o.listadoTipo&&"entregar"!=o.listadoTipo),s.xb(1),s.Zb("ngIf","entregar"==o.listadoTipo),s.xb(2),s.Zb("ngIf","recoger"==o.listadoTipo)}}const R=[{path:"",component:(()=>{class o{constructor(o,i,n,e,t,c){this.DatosEquiposService=o,this.Router=i,this.ActivatedRoute=n,this.BaseService=e,this.Sweetalert=t,this.MenuController=c,this.buscar=!1,this.buscarAnimacion=!1,this.listado=[],this.listadoFilter=[],this.listadoTodos=[],this.equiposSeleccionados=[],this.mostrarSeleccionados=!1,this.mostrarSeleccionado=!1,this.active=!0}ngOnInit(){this.MenuController.enable(!0,"menu"),this.listadoTipo=this.ActivatedRoute.snapshot.params.tipo,"recoger"==this.listadoTipo?(this.titulo="Recoger",this.getListadoRecoger()):"entregar"==this.listadoTipo&&(this.titulo="Entregar",this.getListadoEntregar())}irRuta(o){this.Router.navigateByUrl(o)}guardarSeleccion(o=null){this.equipoSeleccionado.estadoEntregaEquipo=o,this.equiposSeleccionados.push(this.equipoSeleccionado),this.inicioLista()}cancelarSeleccion(){this.inicioLista()}inicioLista(){this.mostrarSeleccionado=!1,this.mostrarSeleccionados=!1}seleccionarEquipo(o){this.equipoSeleccionado=o,this.mostrarSeleccionado=!0}eliminarSeleccion(o){console.log("eliminar:"+o),this.equiposSeleccionados.splice(o,1),0==this.equiposSeleccionados.length&&(this.mostrarSeleccionados=!1)}finalizarSelecciones(o){this.DatosEquiposService.setEquipos(this.equiposSeleccionados),this.Router.navigateByUrl(o)}mostrarListaSeleccionados(){this.mostrarSeleccionados=!0}reiniciarSeleccionados(){this.equiposSeleccionados=[]}loadData(o){setTimeout(()=>{console.log("Done"),o.target.complete(),1e3==this.listado.length&&(o.target.disabled=!0)},500)}toggleInfiniteScroll(){console.log("jdhkfjkj"),this.infiniteScroll.disabled=!this.infiniteScroll.disabled}buscador(){this.buscar?(this.buscarAnimacion=!1,setTimeout(()=>{this.buscar=!1,this.ChangeSearchbar("")},900)):(this.buscar=!0,this.buscarAnimacion=!0)}buscando(){}getListadoEntregar(){this.BaseService.postJson("repartidores","movimientosEquipos","mostrarEntregadosAPI").subscribe(o=>{(o.RESPUESTA="EXITO")?o.DATOS?(this.listadoTodos=o.DATOS,this.listado=this.listadoTodos,this.listadoFilter=this.listadoTodos,console.log(this.listadoTodos)):this.Sweetalert.notificacion("info","No se encontraron servicios."):this.Sweetalert.modal("error",o.mensaje)})}getListadoRecoger(){this.BaseService.postJson("repartidores","movimientosEquipos","mostrarRecogidosAPI").subscribe(o=>{(o.RESPUESTA="EXITO")?o.DATOS?(this.listadoTodos=o.DATOS,this.listado=this.listadoTodos,this.listadoFilter=this.listadoTodos,console.log(this.listadoTodos)):this.Sweetalert.notificacion("info","No se encontraron servicios."):this.Sweetalert.modal("error",o.mensaje)})}doRefresh(o){this.getListadoRecoger(),setTimeout(()=>{o.target.complete()},1e3)}ChangeSearchbar(o){let i=o;console.log(i),this.listado=i&&""!==i.trim()?this.listadoFilter.filter(o=>o.personaRazonSocial.toString().toLowerCase().indexOf(i.toString().toLowerCase())>-1):this.listadoTodos}}return o.\u0275fac=function(i){return new(i||o)(s.Hb(b.a),s.Hb(r.g),s.Hb(r.a),s.Hb(a.a),s.Hb(l.a),s.Hb(c.S))},o.\u0275cmp=s.Bb({type:o,selectors:[["app-listado-oxigem"]],viewQuery:function(o,i){var n;1&o&&s.oc(c.u,!0),2&o&&s.ec(n=s.Vb())&&(i.infiniteScroll=n.first)},decls:17,vars:8,consts:[[1,"ion-no-border"],["slot","start"],["icon","chevron-back"],["slot","end"],["size","small",3,"click",4,"ngIf"],[3,"fullscreen"],["color","primary","placeholder","Buscar","style","margin-bottom: 40%;","autocomplete","On","style","position:fixed; z-index: 100;","class","animate__animated  ",3,"ngClass","ionChange",4,"ngIf"],["slot","fixed",3,"ionRefresh"],[1,"ion-padding"],[4,"ngIf"],["size","small",3,"click"],["name","search-circle",4,"ngIf"],["name","search",4,"ngIf"],["name","search-circle"],["name","search"],["name","list-outline"],["color","primary","placeholder","Buscar","autocomplete","On",1,"animate__animated",2,"position","fixed","z-index","100",3,"ngClass","ionChange"],["lines","none",4,"ngIf"],["size-lg","6","size","12",4,"ngFor","ngForOf"],["threshold","100px",3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Loading more data..."],["lines","none"],[1,"text-center"],["color","success","size","small",3,"click"],["color","primary","size","small",3,"click"],["size-lg","6","size","12"],["lines","none",1,"animate__animated","animate__fadeInUpBig",2,"margin","2px"],[1,"ion-align-items-center"],["size","9"],["fill","clear","size","small","disabled","",3,"click"],["name","person-outline",1,"ion-icon-b"],["name","map-outline",1,"ion-icon-b"],["size","3",1,"text-right"],["fill","clear","size","large",3,"click"],["name","chevron-forward","slot","end",1,"ion-icon-a"],["size","12"],["size","12",2,"margin-bottom","5%"],["color","danger",3,"click"],[1,"ion-text-wrap","text-center"],["color","primary"],["color","success","size","small","slot","end",3,"click",4,"ngIf"],["color","warning","size","small","slot","end",3,"click",4,"ngIf"],["color","primary","size","small","slot","end",3,"click",4,"ngIf"],["color","success","size","small","slot","end",3,"click"],["color","warning","size","small","slot","end",3,"click"],["color","primary","size","small","slot","end",3,"click"],["size","12","size-lg","6","size","12",4,"ngFor","ngForOf"],["size","12",2,"margin-top","5%"],["color","success","style","width: 100%;","size","large","slot","start",3,"click",4,"ngIf"],["color","primary","style","width: 100%;","size","large","slot","end",3,"click",4,"ngIf"],["size","12","size-lg","6","size","12"],["lines","none",1,"",2,"margin","2px"],["size","10"],[3,"click"],["size","2",1,"text-right"],["size","small","fill","clear",3,"click"],["name","close-outline","color","danger",2,"background","white"],["color","success","size","large","slot","start",2,"width","100%",3,"click"],["color","primary","size","large","slot","end",2,"width","100%",3,"click"]],template:function(o,i){1&o&&(s.Mb(0,"ion-header",0),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-title"),s.kc(3),s.Lb(),s.Mb(4,"ion-buttons",1),s.Ib(5,"ion-back-button",2),s.Lb(),s.Mb(6,"ion-buttons",3),s.jc(7,g,3,2,"ion-button",4),s.jc(8,f,2,0,"ion-button",4),s.Lb(),s.Lb(),s.Lb(),s.Mb(9,"ion-content",5),s.jc(10,h,1,4,"ion-searchbar",6),s.Mb(11,"ion-refresher",7),s.Ub("ionRefresh",(function(o){return i.doRefresh(o)})),s.Ib(12,"ion-refresher-content"),s.Lb(),s.Mb(13,"div",8),s.jc(14,L,6,2,"ion-row",9),s.jc(15,C,72,15,"ion-row",9),s.jc(16,O,12,5,"ion-row",9),s.Lb(),s.Lb()),2&o&&(s.xb(3),s.lc(i.titulo),s.xb(4),s.Zb("ngIf",!i.mostrarSeleccionados&&!i.mostrarSeleccionado),s.xb(1),s.Zb("ngIf",i.mostrarSeleccionados&&!i.mostrarSeleccionado),s.xb(1),s.Zb("fullscreen",!0),s.xb(1),s.Zb("ngIf",i.buscar),s.xb(4),s.Zb("ngIf",!i.mostrarSeleccionados&&!i.mostrarSeleccionado),s.xb(1),s.Zb("ngIf",i.mostrarSeleccionado),s.xb(1),s.Zb("ngIf",i.mostrarSeleccionados&&!i.mostrarSeleccionado))},directives:[c.r,c.O,c.N,c.h,c.d,c.e,e.j,c.p,c.F,c.G,c.g,c.s,c.J,c.W,e.h,c.I,c.o,e.i,c.u,c.v,c.x,c.y,c.q,c.M],styles:["ion-toolbar[_ngcontent-%COMP%]{--background:#003f7f;color:#fff;border-radius:0 0 20% 20%}ion-col[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]{--background:#f6f6f6}ion-card[_ngcontent-%COMP%]{margin-top:-180px;z-index:10;padding:6px;box-shadow:none;box-shadow:0 3px 45px 0 rgba(0,0,0,.16);border-radius:40px;overflow:visible}ion-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:240px;margin:-60px auto auto}ion-item[_ngcontent-%COMP%]{border-radius:14px;box-shadow:0 3px 45px 0 rgba(0,0,0,.08);color:#949494;margin-bottom:10px}ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:first-of-type{color:#fff;padding:4px;border-radius:12px}.ion-icon-a[_ngcontent-%COMP%]{background:#31d039;color:#fff}.ion-icon-b[_ngcontent-%COMP%]{background:#316dd0;color:#fff;padding:4px;border-radius:12px}"]}),o})()}];let j=(()=>{class o{}return o.\u0275mod=s.Fb({type:o}),o.\u0275inj=s.Eb({factory:function(i){return new(i||o)},imports:[[r.i.forChild(R)],r.i]}),o})(),y=(()=>{class o{}return o.\u0275mod=s.Fb({type:o}),o.\u0275inj=s.Eb({factory:function(i){return new(i||o)},imports:[[e.b,t.e,c.P,j]]}),o})()},aOlj:function(o,i,n){"use strict";n.d(i,"a",(function(){return a}));var e=n("mrSG"),t=n("tk/3");const c="https://siom.oximeiser.com/api.php";var r=n("fXoL"),s=n("6uu6"),b=n("TEn/");let a=(()=>{class o{constructor(o,i,n){this.AuthService=o,this.http=i,this.loadingController=n,this.headers=new t.c({"Content-Type":"aplication/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, PATCH, OPTIONS","Access-Control-Allow-Headers":"Access-Control-Allow-Headers,Content-Type,Access-Control-All-Methods"})}presentLoading(o="Cargando...",i="my-custom-class"){return Object(e.a)(this,void 0,void 0,(function*(){let n=yield this.loadingController.create({cssClass:i,message:o});return n.present(),n}))}getJson(o){return this.http.get(c+o)}postJson(o,i,n,e={},t=!0){return e.componente=o,e.controlador=i,e.accion=n,e.authUsuarioID=this.AuthService.getUsuario().usuarioId,this.http.post(c,e)}putJson(o,i){return this.http.patch(c+i,o)}login(o,i,n,e={}){return e.componente=o,e.controlador=i,e.accion=n,this.http.post(c,e)}}return o.\u0275fac=function(i){return new(i||o)(r.Qb(s.a),r.Qb(t.a),r.Qb(b.R))},o.\u0275prov=r.Db({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},fBZb:function(o,i,n){"use strict";n.d(i,"a",(function(){return t}));var e=n("fXoL");let t=(()=>{class o{constructor(){this.equipos=[],this.cliente=[]}setEquipos(o){this.equipos=o}getEquipos(){return this.equipos}deleteEquipos(){this.equipos=[]}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275prov=e.Db({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);