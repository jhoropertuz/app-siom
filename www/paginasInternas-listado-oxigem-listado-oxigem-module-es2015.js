(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginasInternas-listado-oxigem-listado-oxigem-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginasInternas/listado-oxigem/listado-oxigem.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginasInternas/listado-oxigem/listado-oxigem.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-header class=\"ion-no-border\"  >\r\n  <ion-toolbar>\r\n    <!-- <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons> -->\r\n    <ion-title>{{titulo}}</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button icon=\"chevron-back\" ></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\" >\r\n     <!--  <ion-button size=\"small\" (click)=\"irRuta('escaneo-qr-oxigem')\" >\r\n        <ion-icon name=\"qr-code-outline\"  ></ion-icon>\r\n      </ion-button> -->\r\n      <ion-button *ngIf=\"!mostrarSeleccionados && !mostrarSeleccionado\" (click)=\"buscador()\" size=\"small\" >\r\n        <ion-icon *ngIf=\"buscar\" name=\"search-circle\"></ion-icon>\r\n        <ion-icon *ngIf=\"!buscar\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button *ngIf=\"mostrarSeleccionados && !mostrarSeleccionado\" (click)=\"inicioLista()\" size=\"small\" >\r\n        <ion-icon name=\"list-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-searchbar color=\"primary\" placeholder=\"Buscar\" style=\"margin-bottom: 40%;\"  (ionChange)=\"ChangeSearchbar($event.target.value)\" autocomplete=\"On\" style=\"position:fixed; z-index: 100;\" *ngIf=\"buscar\" [ngClass]=\"{'animate__backInRight': buscarAnimacion, 'animate__backOutRight': !buscarAnimacion }\" class=\"animate__animated  \" ></ion-searchbar>\r\n \r\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n      <ion-refresher-content></ion-refresher-content>\r\n    </ion-refresher>\r\n    <div class=\"ion-padding\">\r\n        <ion-row *ngIf=\"!mostrarSeleccionados && !mostrarSeleccionado\" >\r\n          <ion-col>\r\n            <ion-item lines=\"none\" *ngIf=\"equiposSeleccionados.length>0\">\r\n            \r\n              <ion-label class=\"text-center\">\r\n                <p>Equipos Seleccionados {{equiposSeleccionados.length}}</p>\r\n                <ion-button  (click)=\"mostrarListaSeleccionados()\" color=\"success\" size=\"small\" >Finalizar</ion-button>\r\n                <ion-button  (click)=\"reiniciarSeleccionados()\" color=\"primary\" size=\"small\" >Reiniciar</ion-button>\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-col>\r\n          \r\n          <ion-col  *ngFor=\"let item of listado\" size-lg=\"6\"  size=\"12\">\r\n            <ion-item lines=\"none\" style=\"margin: 2px;\" class=\"animate__animated animate__fadeInUpBig\">\r\n              <ion-grid>\r\n                <ion-row class=\"ion-align-items-center\">\r\n                  <!-- <ion-col size=\"2\">\r\n                    <ion-icon name=\"calendar-outline\" style=\"background: #ed576b\" ></ion-icon> \r\n                  </ion-col>  -->\r\n                  <ion-col size=\"9\"  >\r\n                    \r\n                      <h4><strong> SN : {{item.equipoSerial}}</strong><br> Código : {{item.equipoCodigo}}</h4>\r\n                      <span> {{item.equipoTitulo}} </span><br>\r\n                      <span>  Cliente : <strong>{{item.personaIdentificacion}} | {{item.personaRazonSocial}}</strong></span>\r\n                      <span *ngIf=\"item.referenciaIdentificacion\" > <br> Refe :  <strong>{{item.referenciaIdentificacion}} | {{item.referenciaRazonSocial}}</strong> </span>\r\n                    \r\n                   <!--  <ion-buttons>\r\n                      <ion-button fill=\"clear\" size=\"small\" disabled (click)=\"irRuta('detalles-usuario/'+7)\"><ion-icon name=\"person-outline\" class=\"ion-icon-b\"></ion-icon></ion-button>\r\n                      <ion-button fill=\"clear\" size=\"small\" disabled (click)=\"irRuta('recoger-oxigem/21')\"><ion-icon name=\"map-outline\" class=\"ion-icon-b\"></ion-icon></ion-button>\r\n                    </ion-buttons> -->\r\n                  </ion-col>\r\n                  <ion-col class=\"text-right\" size=\"3\" >\r\n                    <ion-button fill=\"clear\" size=\"large\" (click)=\"seleccionarEquipo(item)\" ><ion-icon name=\"chevron-forward\" slot=\"end\" class=\"ion-icon-a\"></ion-icon></ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n            <ion-infinite-scroll-content\r\n              loadingSpinner=\"bubbles\"\r\n              loadingText=\"Loading more data...\">\r\n          </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"mostrarSeleccionado\" >\r\n          <ion-col size=\"12\">\r\n            <ion-item lines=\"none\" style=\"margin: 2px;\" class=\"animate__animated animate__fadeInUpBig\">\r\n              <ion-grid>\r\n                <ion-row class=\"ion-align-items-center\">\r\n                  <ion-col size=\"12\" style=\"margin-bottom: 5%;\">\r\n                    <ion-label >\r\n                      <ion-button  color=\"danger\" (click)=\"cancelarSeleccion()\">Cancelar</ion-button>\r\n                    </ion-label>\r\n                  </ion-col> \r\n                  <ion-col size=\"12\">\r\n                    <ion-label class=\"ion-text-wrap text-center\">   \r\n                      <ion-text color=\"primary\"><h2>Equipo</h2></ion-text>\r\n                      <strong>equipo:</strong> {{equipoSeleccionado.equipoTitulo}}<br>\r\n                      <strong>Serie:</strong> {{equipoSeleccionado.equipoSerial}}<br>\r\n                      <strong>Codigo Equipo:</strong> {{equipoSeleccionado.equipoCodigo}}<br>\r\n                      <strong>Tipo Equipo:</strong> {{equipoSeleccionado.tipoEquipoTitulo}}<br>\r\n                      <strong>Capacidad:</strong> {{equipoSeleccionado.equipoCapacidad}}<br><br>\r\n                      <ion-text color=\"primary\"><h2>Cliente</h2></ion-text>\r\n                      <strong>Nombre:</strong> {{equipoSeleccionado.personaRazonSocial}}<br>\r\n                      <strong>CC:</strong> {{equipoSeleccionado.personaIdentificacion}}<br>\r\n                      <strong>Codigo Cliente:</strong> {{equipoSeleccionado.clienteCodigo}}<br>\r\n                      <strong>Correo:</strong> {{equipoSeleccionado.personaCorreoElectronico}}<br>\r\n                      <span  *ngIf=\"equipoSeleccionado.referenciaIdentificacion\"><strong> Referencia :  </strong> <br> {{equipoSeleccionado.referenciaIdentificacion}} | {{equipoSeleccionado.referenciaRazonSocial}} </span>\r\n\r\n                      <br><br>\r\n                      <ion-text color=\"primary\"><h2>Recibo</h2></ion-text>\r\n                      <strong>Numero:</strong> {{equipoSeleccionado.reciboNumero}}<br>\r\n                      <strong>Servicio:</strong> {{equipoSeleccionado.reciboServicio}}<br>\r\n                      <strong>Fecha Servicio:</strong> {{equipoSeleccionado.reciboFechaServicio}}<br>\r\n                      <strong>Fecha recogida:</strong> {{equipoSeleccionado.reciboFechaRecogida}}<br><br>\r\n\r\n                      <ng-container *ngIf=\"equipoSeleccionado.otrosPendientes\">\r\n                        <ion-text color=\"primary\"><h2>Otros Pendientes</h2></ion-text>\r\n                          <ng-container *ngFor=\"let otro of equipoSeleccionado.otrosPendientes\" >\r\n                            <ion-label style=\"border: solid red;\" >\r\n                              <strong>equipo:</strong> {{otro.equipoTitulo}}<br>\r\n                              <strong>Codigo:</strong> {{otro.equipoCodigo}}<br>\r\n                            </ion-label>\r\n                          </ng-container>\r\n                      </ng-container>\r\n                      \r\n                      \r\n                      \r\n                      <br><br>\r\n                      <ion-button *ngIf=\"listadoTipo=='recoger'\" color=\"success\" size=\"small\" slot=\"end\" (click)=\"guardarSeleccion('buen_estado')\">Buen estado</ion-button>\r\n                      <ion-button *ngIf=\"listadoTipo=='recoger'\" color=\"warning\" size=\"small\" slot=\"end\" (click)=\"guardarSeleccion('perdido')\">Perdido</ion-button>\r\n                      <ion-button *ngIf=\"listadoTipo=='recoger'\" color=\"primary\" size=\"small\" slot=\"end\" (click)=\"guardarSeleccion('devuelto')\">Devuelto</ion-button>\r\n                      <ion-button *ngIf=\"listadoTipo=='entregar'\" color=\"success\" size=\"small\" slot=\"end\" (click)=\"guardarSeleccion()\">Aceptar</ion-button>\r\n                    </ion-label>\r\n                  </ion-col> \r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"mostrarSeleccionados && !mostrarSeleccionado\" >\r\n          <ion-col size=\"12\" *ngFor=\"let equipo of equiposSeleccionados ;let index = index\" size-lg=\"6\"  size=\"12\">\r\n            <ion-item lines=\"none\" style=\"margin: 2px;\" class=\"\">\r\n              <ion-grid>\r\n                <ion-row class=\"ion-align-items-center\">\r\n                  <!-- <ion-col size=\"2\" style=\"margin: 0%; padding: 0%;\">\r\n                      <ion-icon name=\"checkmark-outline\"  style=\"background: #57ed95;margin: 0%; padding: 0%;\" ></ion-icon>\r\n                  </ion-col>  --> \r\n                  <ion-col size=\"10\">\r\n                    <ion-label (click)=\"openIndex=openIndex === index ? -1 : index\" >\r\n                      <strong>{{equipo.equipoTitulo}}</strong>  <br>\r\n                      <strong> Codigo Cliente:</strong> {{equipo.clienteCodigo}}<br>\r\n                      <strong> CC: </strong> {{equipo.personaIdentificacion}}<br>\r\n                      <strong>nombre:</strong> {{equipo.personaRazonSocial}}<br>\r\n                      <ion-label *ngIf=\"openIndex === index\"   >\r\n                        <strong>Correo:</strong> {{equipo.personaCorreoElectronico}}<br>\r\n                        <strong>Numero:</strong> {{equipo.reciboNumero}}<br>\r\n                        <strong>Servicio:</strong> {{equipo.reciboServicio}}<br>\r\n                        <strong>Fecha Servicio:</strong> {{equipo.reciboFechaServicio}}<br>\r\n                        <strong>Fecha recogida:</strong> {{equipo.reciboFechaRecogida}}<br>\r\n                      </ion-label>\r\n                    </ion-label>\r\n                  </ion-col>\r\n                  <ion-col class=\"text-right\" size=\"2\" >\r\n                    <ion-button (click)=\"eliminarSeleccion(index)\" size=\"small\" fill=\"clear\" ><ion-icon style=\"background: white\"  name=\"close-outline\" color=\"danger\"></ion-icon></ion-button>\r\n                  </ion-col>\r\n                </ion-row>\r\n              </ion-grid>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col size=\"12\" style=\"margin-top: 5%;\">\r\n            <ion-label >\r\n              <ion-item lines=\"none\">\r\n                <ion-label class=\"text-center\">\r\n                  <ion-button color=\"success\" *ngIf=\"listadoTipo!='recoger' && listadoTipo!='entregar'\" style=\"width: 100%;\" size=\"large\" slot=\"start\" (click)=\"finalizarSelecciones('entrega-oxigem')\">Entregar</ion-button><br>\r\n                  <ion-button color=\"primary\" *ngIf=\"listadoTipo!='recoger' && listadoTipo!='entregar'\" style=\"width: 100%;\" size=\"large\" slot=\"end\" (click)=\"finalizarSelecciones('recoger-oxigem')\">Recoger</ion-button>\r\n                  <ion-button color=\"success\" *ngIf=\"listadoTipo=='entregar'\" style=\"width: 100%;\" size=\"large\" slot=\"start\" (click)=\"finalizarSelecciones('entrega-oxigem')\">Continuar Entregar</ion-button><br>\r\n                  <ion-button color=\"primary\" *ngIf=\"listadoTipo=='recoger'\" style=\"width: 100%;\" size=\"large\" slot=\"end\" (click)=\"finalizarSelecciones('recoger-oxigem')\">Continuar Recogida</ion-button>\r\n                </ion-label>\r\n              </ion-item>\r\n            </ion-label>\r\n          </ion-col> \r\n        </ion-row>\r\n</div>\r\n</ion-content>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/endpoind.ts":
/*!*****************************!*\
  !*** ./src/app/endpoind.ts ***!
  \*****************************/
/*! exports provided: Endpoind */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Endpoind", function() { return Endpoind; });
const Endpoind = {
    API_BASE: "https://siom.oximeiser.com/api.php",
    ARCHIVO_BASE: "https://siom.oximeiser.com/"
};


/***/ }),

/***/ "./src/app/paginasInternas/listado-oxigem/listado-oxigem-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/paginasInternas/listado-oxigem/listado-oxigem-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ListadoOxigemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoOxigemPageRoutingModule", function() { return ListadoOxigemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _listado_oxigem_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./listado-oxigem.page */ "./src/app/paginasInternas/listado-oxigem/listado-oxigem.page.ts");




const routes = [
    {
        path: '',
        component: _listado_oxigem_page__WEBPACK_IMPORTED_MODULE_3__["ListadoOxigemPage"]
    }
];
let ListadoOxigemPageRoutingModule = class ListadoOxigemPageRoutingModule {
};
ListadoOxigemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListadoOxigemPageRoutingModule);



/***/ }),

/***/ "./src/app/paginasInternas/listado-oxigem/listado-oxigem.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/paginasInternas/listado-oxigem/listado-oxigem.module.ts ***!
  \*************************************************************************/
/*! exports provided: ListadoOxigemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoOxigemPageModule", function() { return ListadoOxigemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _listado_oxigem_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./listado-oxigem-routing.module */ "./src/app/paginasInternas/listado-oxigem/listado-oxigem-routing.module.ts");
/* harmony import */ var _listado_oxigem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listado-oxigem.page */ "./src/app/paginasInternas/listado-oxigem/listado-oxigem.page.ts");







let ListadoOxigemPageModule = class ListadoOxigemPageModule {
};
ListadoOxigemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _listado_oxigem_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListadoOxigemPageRoutingModule"]
        ],
        declarations: [_listado_oxigem_page__WEBPACK_IMPORTED_MODULE_6__["ListadoOxigemPage"]]
    })
], ListadoOxigemPageModule);



/***/ }),

/***/ "./src/app/paginasInternas/listado-oxigem/listado-oxigem.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/paginasInternas/listado-oxigem/listado-oxigem.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #003f7f;\n  color: #FFFFFF;\n  border-radius: 0 0 20% 20%;\n}\n\nion-col {\n  padding: 0;\n}\n\nion-content {\n  --background: #f6f6f6;\n}\n\nion-card {\n  margin-top: -180px;\n  z-index: 10;\n  padding: 6px;\n  box-shadow: none;\n  box-shadow: 0px 3px 45px 0px rgba(0, 0, 0, 0.16);\n  border-radius: 40px;\n  overflow: visible;\n}\n\nion-card ion-img {\n  width: 240px;\n  margin: -60px auto auto auto;\n}\n\nion-item {\n  border-radius: 14px;\n  box-shadow: 0px 3px 45px 0px rgba(0, 0, 0, 0.08);\n  color: #949494;\n  margin-bottom: 10px;\n}\n\nion-item ion-icon:first-of-type {\n  color: #FFFFFF;\n  padding: 4px;\n  border-radius: 12px;\n}\n\n.ion-icon-a {\n  background: #31d039;\n  color: #FFFFFF;\n}\n\n.ion-icon-b {\n  background: #316dd0;\n  color: #FFFFFF;\n  padding: 4px;\n  border-radius: 12px;\n}\n\n.sato-lineas {\n  line-height: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hc0ludGVybmFzL2xpc3RhZG8tb3hpZ2VtL2xpc3RhZG8tb3hpZ2VtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUVBLDBCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUk7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7QUFBUjs7QUFLQTtFQUNJLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFHSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFPQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQUpKOztBQU9BO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0E7RUFDSSxnQkFBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hc0ludGVybmFzL2xpc3RhZG8tb3hpZ2VtL2xpc3RhZG8tb3hpZ2VtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwM2Y3ZjtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjAlIDIwJTtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IC0xODBweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuXHJcbiAgICBpb24taW1nIHtcclxuICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAtNjBweCBhdXRvIGF1dG8gYXV0bztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDQ1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICBjb2xvcjogcmdiKDE0OCwgMTQ4LCAxNDgpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGlvbi1pY29uOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuXHJcbi5pb24taWNvbi1hIHtcclxuICAgIGJhY2tncm91bmQ6ICMzMWQwMzk7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLmlvbi1pY29uLWIge1xyXG4gICAgYmFja2dyb3VuZDogIzMxNmRkMDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLnNhdG8tbGluZWFze1xyXG4gICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/paginasInternas/listado-oxigem/listado-oxigem.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/paginasInternas/listado-oxigem/listado-oxigem.page.ts ***!
  \***********************************************************************/
/*! exports provided: ListadoOxigemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListadoOxigemPage", function() { return ListadoOxigemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_service_datos_equipos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/datos-equipos.service */ "./src/app/service/datos-equipos.service.ts");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/base.service */ "./src/app/service/base.service.ts");
/* harmony import */ var _service_sweetalert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/sweetalert.service */ "./src/app/service/sweetalert.service.ts");








let ListadoOxigemPage = class ListadoOxigemPage {
    constructor(DatosEquiposService, Router, ActivatedRoute, BaseService, Sweetalert, MenuController) {
        this.DatosEquiposService = DatosEquiposService;
        this.Router = Router;
        this.ActivatedRoute = ActivatedRoute;
        this.BaseService = BaseService;
        this.Sweetalert = Sweetalert;
        this.MenuController = MenuController;
        this.cantidadItemLista = 10;
        this.inicioItemLista = 0;
        this.buscadorActivo = false;
        this.buscar = false;
        this.buscarAnimacion = false;
        this.listado = [];
        this.listadoFilter = [];
        this.listadoTodos = [];
        this.equiposSeleccionados = [];
        this.mostrarSeleccionados = false;
        this.mostrarSeleccionado = false;
        this.active = true;
        this.RECOGER = false;
        this.ENTREGAR = false;
    }
    ngOnInit() {
        this.MenuController.enable(true, 'menu');
        this.listadoTipo = this.ActivatedRoute.snapshot.params.tipo;
        if (this.listadoTipo == 'recoger') {
            this.titulo = "Recoger";
            this.RECOGER = true;
            this.configLista = {
                'operacionBusqueda': ["recogerEquipos", "buscarEquipos"],
                'operacionListado': ["recogerEquipos", "listaPendientesPaginado"],
                'operacionOtrosPendientes': ["recogerEquipos", "otrosPendientesPorCliente"]
            };
        }
        else if (this.listadoTipo == 'entregar') {
            this.titulo = "Entregar";
            this.ENTREGAR = true;
            this.configLista = {
                'operacionBusqueda': ["entregarEquipos", "buscarEquipos"],
                'operacionListado': ["entregarEquipos", "listaPendientesPaginado"],
                'operacionOtrosPendientes': ["entregarEquipos", "otrosPendientesPorRecibo"]
            };
        }
        this.getListado();
    }
    irRuta(ruta) {
        this.Router.navigateByUrl(ruta);
    }
    guardarSeleccion(estado = null) {
        this.equipoSeleccionado.estadoEntregaEquipo = estado;
        this.equiposSeleccionados.push(this.equipoSeleccionado);
        if (this.ENTREGAR) {
            this.finalizarSelecciones('entrega-oxigem');
        }
        else {
            this.inicioLista();
        }
    }
    cancelarSeleccion() {
        this.inicioLista();
    }
    inicioLista() {
        this.mostrarSeleccionado = false;
        this.mostrarSeleccionados = false;
    }
    seleccionarEquipo(equipo) {
        equipo.otrosPendientes = [];
        let data;
        if (this.ENTREGAR) {
            data = { reciboID: equipo.reciboId, equipoID: equipo.equipoId };
        }
        else {
            data = { clienteID: equipo.clienteId, equipoID: equipo.equipoId };
        }
        this.BaseService.postJson('repartidores', this.configLista.operacionOtrosPendientes[0], this.configLista.operacionOtrosPendientes[1], data).subscribe(res => {
            if (res.RESPUESTA = "EXITO") {
                if (res.DATOS) {
                    equipo.otrosPendientes = res.DATOS;
                }
                this.equipoSeleccionado = equipo;
                if (this.buscadorActivo) {
                    this.buscador();
                }
                this.mostrarSeleccionado = true;
            }
            else {
                this.Sweetalert.modal("error", "No se a cargado correctamente la info del equipo.");
            }
        });
        /*  }else{
           this.equipoSeleccionado=equipo;
           if(this.buscadorActivo){this.buscador();}
           this.mostrarSeleccionado=true;
         } */
    }
    eliminarSeleccion(index) {
        console.log("eliminar:" + index);
        this.equiposSeleccionados.splice(index, 1);
        if (this.equiposSeleccionados.length == 0) {
            this.mostrarSeleccionados = false;
        }
    }
    finalizarSelecciones(ruta) {
        let loading = this.BaseService.presentLoading();
        this.DatosEquiposService.setEquipos(this.equiposSeleccionados).then((val) => {
            setTimeout(() => {
                loading.then(e => {
                    e.dismiss();
                });
                this.reiniciarSeleccionados();
                this.Router.navigateByUrl(ruta);
            }, 500);
        }).catch(e => {
            console.log(e);
        });
    }
    mostrarListaSeleccionados() {
        this.mostrarSeleccionados = true;
    }
    reiniciarSeleccionados() {
        this.equiposSeleccionados = [];
    }
    loadData(event) {
        if (!this.buscadorActivo) {
            this.inicioItemLista = this.inicioItemLista + 10;
            this.eventCargandoLista = event;
            if (this.listado.length < 10) {
                this.eventCargandoLista.target.disabled = true;
            }
            this.getListado();
        }
        /* setTimeout(() => {
          console.log('Done');
          event.target.complete();
           if (this.listado.length == 1000) {
            event.target.disabled = true;
          }
        }, 500); */
    }
    toggleInfiniteScroll() {
        console.log("jdhkfjkj");
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    buscador() {
        if (this.buscar) {
            this.buscarAnimacion = false;
            setTimeout(() => {
                this.buscar = false;
                this.ChangeSearchbar('');
            }, 900);
        }
        else {
            this.buscar = true;
            this.buscarAnimacion = true;
        }
    }
    getListado() {
        this.BaseService.postJson('repartidores', this.configLista.operacionListado[0], this.configLista.operacionListado[1], { inicioEquiposRecoger: this.inicioItemLista, mostrarEquiposRecoger: this.cantidadItemLista }).subscribe(res => {
            if (res.RESPUESTA = "EXITO") {
                if (res.DATOS) {
                    this.listadoTodos = [].concat(this.listadoTodos, res.DATOS);
                    this.listado = this.listadoTodos;
                    this.listadoFilter = this.listadoTodos;
                    console.log(this.listadoTodos);
                }
                else {
                    this.Sweetalert.notificacion("info", "No se encontraron servicios.");
                }
            }
            else {
                this.Sweetalert.modal("error", res.mensaje);
            }
            if (this.eventCargandoLista) {
                this.eventCargandoLista.target.complete();
            }
        });
    }
    reiniciar() {
        this.listadoTodos = [];
        this.listado = [];
        this.listadoFilter = [];
    }
    doRefresh(event) {
        this.inicioItemLista = 0;
        this.reiniciar();
        this.getListado();
        setTimeout(() => {
            event.target.complete();
        }, 1000);
    }
    ChangeSearchbar(value) {
        let val = value;
        if (val && val.trim() !== '' && val.length > 3) {
            this.buscadorActivo = true;
            this.BaseService.postJson('repartidores', this.configLista.operacionBusqueda[0], this.configLista.operacionBusqueda[1], { datoBusqueda: value }).subscribe(res => {
                if (res.RESPUESTA = "EXITO") {
                    if (res.DATOS) {
                        this.listado = res.DATOS;
                    }
                    else {
                        this.listado = [];
                        this.Sweetalert.notificacion("info", "No se encontraron equipos.");
                    }
                }
                else {
                    this.Sweetalert.modal("error", res.mensaje);
                }
            });
        }
        else {
            this.buscadorActivo = false;
            this.listado = this.listadoTodos;
        }
    }
};
ListadoOxigemPage.ctorParameters = () => [
    { type: src_app_service_datos_equipos_service__WEBPACK_IMPORTED_MODULE_4__["DatosEquiposService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"] },
    { type: _service_sweetalert_service__WEBPACK_IMPORTED_MODULE_6__["SweetalertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
ListadoOxigemPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"],] }]
};
ListadoOxigemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-listado-oxigem',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./listado-oxigem.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginasInternas/listado-oxigem/listado-oxigem.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./listado-oxigem.page.scss */ "./src/app/paginasInternas/listado-oxigem/listado-oxigem.page.scss")).default]
    })
], ListadoOxigemPage);



/***/ }),

/***/ "./src/app/service/base.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/base.service.ts ***!
  \*****************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _endpoind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endpoind */ "./src/app/endpoind.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth.service.ts");






let BaseService = class BaseService {
    constructor(AuthService, http, loadingController) {
        this.AuthService = AuthService;
        this.http = http;
        this.loadingController = loadingController;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'aplication/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers,Content-Type,Access-Control-All-Methods'
        });
    }
    presentLoading(mensaje = "Cargando...", clase = 'my-custom-class') {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this.loadingController.create({
                cssClass: clase,
                message: mensaje
            });
            loading.present();
            return loading;
        });
    }
    getJson(url) {
        return this.http.get(_endpoind__WEBPACK_IMPORTED_MODULE_3__["Endpoind"].API_BASE + url);
    }
    postJson(componente, controlador, operacion, Data = {}, loading = true) {
        Data.componente = componente;
        Data.controlador = controlador;
        Data.accion = operacion;
        Data.authUsuarioID = this.AuthService.getUsuario().usuarioId;
        return this.http.post(_endpoind__WEBPACK_IMPORTED_MODULE_3__["Endpoind"].API_BASE, Data);
    }
    putJson(Data, url) {
        return this.http.patch(_endpoind__WEBPACK_IMPORTED_MODULE_3__["Endpoind"].API_BASE + url, Data);
    }
    login(componente, controlador, operacion, Data = {}) {
        Data.componente = componente;
        Data.controlador = controlador;
        Data.accion = operacion;
        return this.http.post(_endpoind__WEBPACK_IMPORTED_MODULE_3__["Endpoind"].API_BASE, Data);
    }
};
BaseService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
BaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BaseService);



/***/ }),

/***/ "./src/app/service/datos-equipos.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/datos-equipos.service.ts ***!
  \**************************************************/
/*! exports provided: DatosEquiposService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosEquiposService", function() { return DatosEquiposService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DatosEquiposService = class DatosEquiposService {
    constructor() {
        this.equipos = [];
        this.cliente = [];
    }
    setEquipos(equipos) {
        return new Promise((resolve, reject) => {
            this.equipos = equipos;
            console.log("promesa set eqipo");
            return resolve(true);
        });
    }
    getEquipos() {
        return this.equipos;
    }
    deleteEquipos() {
        this.equipos = [];
    }
};
DatosEquiposService.ctorParameters = () => [];
DatosEquiposService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DatosEquiposService);



/***/ })

}]);
//# sourceMappingURL=paginasInternas-listado-oxigem-listado-oxigem-module-es2015.js.map