(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{pWFr:function(i,e,o){"use strict";o.r(e),o.d(e,"RecibosServiciosPageModule",(function(){return p}));var n=o("ofXK"),t=o("3Pt+"),r=o("TEn/"),c=o("tyNb"),s=o("fXoL"),b=o("Gdqo"),a=o("qMNJ");function l(i,e){if(1&i&&(s.Mb(0,"ion-col",5),s.Mb(1,"ion-item",6),s.Mb(2,"ion-grid"),s.Mb(3,"ion-row",7),s.Mb(4,"ion-col",8),s.Mb(5,"a",9),s.kc(6),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.Lb()),2&i){const i=e.$implicit;s.xb(5),s.ac("href",i.documentoURL,s.hc),s.bc("download","",i.servicioCODIGO,".pdf"),s.xb(1),s.mc("Decargar recibo de Servicio ",i.servicioCODIGO,"")}}const u=[{path:"",component:(()=>{class i{constructor(i,e,o){this.Router=i,this.SweetalertService=e,this.DatosServicioService=o,this.documentosServicios=[]}ngOnInit(){this.documentosServicios=this.DatosServicioService.getRecibosServico(),0==this.documentosServicios.length&&(this.SweetalertService.modal("info","No se recibieron los recibos generados."),this.Router.navigateByUrl("menu-principal"))}irRuta(i){this.Router.navigateByUrl(i)}ngOnDestroy(){this.DatosServicioService.deleteRecibosServico()}}return i.\u0275fac=function(e){return new(e||i)(s.Hb(c.g),s.Hb(b.a),s.Hb(a.a))},i.\u0275cmp=s.Bb({type:i,selectors:[["app-recibos-servicios"]],decls:13,vars:2,consts:[[1,"ion-no-border"],[3,"fullscreen"],[1,"text-center"],["color","primary","size","small",3,"click"],["size-lg","6","size","12",4,"ngFor","ngForOf"],["size-lg","6","size","12"],["lines","none",1,"animate__animated","animate__fadeInUpBig",2,"margin","2px"],[1,"ion-align-items-center"],["size","12"],["ion-button","","target","_blank",3,"href","download"]],template:function(i,e){1&i&&(s.Mb(0,"ion-header",0),s.Mb(1,"ion-toolbar"),s.Mb(2,"ion-title"),s.kc(3,"Recibos de Servicio"),s.Lb(),s.Lb(),s.Lb(),s.Mb(4,"ion-content",1),s.Mb(5,"ion-grid"),s.Mb(6,"ion-row"),s.Mb(7,"ion-col"),s.Mb(8,"ion-item"),s.Mb(9,"ion-label",2),s.Mb(10,"ion-button",3),s.Ub("click",(function(){return e.irRuta("menu-principal")})),s.kc(11,"Ir a inicio"),s.Lb(),s.Lb(),s.Lb(),s.Lb(),s.jc(12,l,7,3,"ion-col",4),s.Lb(),s.Lb(),s.Lb()),2&i&&(s.xb(4),s.Zb("fullscreen",!0),s.xb(8),s.Zb("ngForOf",e.documentosServicios))},directives:[r.r,r.M,r.L,r.p,r.q,r.G,r.o,r.v,r.w,r.g,n.i],styles:[""]}),i})()}];let d=(()=>{class i{}return i.\u0275mod=s.Fb({type:i}),i.\u0275inj=s.Eb({factory:function(e){return new(e||i)},imports:[[c.i.forChild(u)],c.i]}),i})(),p=(()=>{class i{}return i.\u0275mod=s.Fb({type:i}),i.\u0275inj=s.Eb({factory:function(e){return new(e||i)},imports:[[n.b,t.e,r.N,d]]}),i})()}}]);