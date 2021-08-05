(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginasInternas-recibos-servicios-recibos-servicios-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginasInternas/recibos-servicios/recibos-servicios.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginasInternas/recibos-servicios/recibos-servicios.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\"  >\r\n  <ion-toolbar>\r\n    <ion-title>Recibos de Servicio</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <ion-grid>\r\n    <ion-row >\r\n      <ion-col>\r\n        <ion-item>\r\n          <ion-label class=\"text-center\">\r\n            <ion-button  (click)=\"irRuta('menu-principal')\" color=\"primary\" size=\"small\" >Ir a inicio</ion-button>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col  *ngFor=\"let documentoServicio of documentosServicios\" size-lg=\"6\"  size=\"12\">\r\n        <ion-item lines=\"none\" style=\"margin: 2px;\" class=\"animate__animated animate__fadeInUpBig\">\r\n          <ion-grid>\r\n            <ion-row class=\"ion-align-items-center\">\r\n              <ion-col size=\"4\">\r\n                <img src=\"https://siom.oximeiser.com/libs/media/PDF-logo.png\" alt=\"iconPDF\" style=\"width: 100%;\">\r\n             </ion-col>\r\n             <ion-col size=\"8\">\r\n               <ion-label >\r\n                 <strong>{{documentoServicio.documentoTITULO}}</strong><br>\r\n                 <a ion-button size=\"small\"  href=\"{{documentoServicio.documentoURL}}\" download=\"{{documentoServicio.servicioCODIGO}}.pdf\" target=\"_blank\" >Decargar recibo de Servicio {{documentoServicio.servicioCODIGO}}</a>\r\n               </ion-label>\r\n             </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/paginasInternas/recibos-servicios/recibos-servicios-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/paginasInternas/recibos-servicios/recibos-servicios-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: RecibosServiciosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecibosServiciosPageRoutingModule", function() { return RecibosServiciosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _recibos_servicios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recibos-servicios.page */ "./src/app/paginasInternas/recibos-servicios/recibos-servicios.page.ts");




const routes = [
    {
        path: '',
        component: _recibos_servicios_page__WEBPACK_IMPORTED_MODULE_3__["RecibosServiciosPage"]
    }
];
let RecibosServiciosPageRoutingModule = class RecibosServiciosPageRoutingModule {
};
RecibosServiciosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RecibosServiciosPageRoutingModule);



/***/ }),

/***/ "./src/app/paginasInternas/recibos-servicios/recibos-servicios.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/paginasInternas/recibos-servicios/recibos-servicios.module.ts ***!
  \*******************************************************************************/
/*! exports provided: RecibosServiciosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecibosServiciosPageModule", function() { return RecibosServiciosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _recibos_servicios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recibos-servicios-routing.module */ "./src/app/paginasInternas/recibos-servicios/recibos-servicios-routing.module.ts");
/* harmony import */ var _recibos_servicios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recibos-servicios.page */ "./src/app/paginasInternas/recibos-servicios/recibos-servicios.page.ts");







let RecibosServiciosPageModule = class RecibosServiciosPageModule {
};
RecibosServiciosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _recibos_servicios_routing_module__WEBPACK_IMPORTED_MODULE_5__["RecibosServiciosPageRoutingModule"]
        ],
        declarations: [_recibos_servicios_page__WEBPACK_IMPORTED_MODULE_6__["RecibosServiciosPage"]]
    })
], RecibosServiciosPageModule);



/***/ }),

/***/ "./src/app/paginasInternas/recibos-servicios/recibos-servicios.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/paginasInternas/recibos-servicios/recibos-servicios.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #003f7f;\n  color: #FFFFFF;\n  border-radius: 0 0 20% 20%;\n}\n\nion-col {\n  padding: 0;\n}\n\nion-content {\n  --background: #f6f6f6;\n}\n\nion-card {\n  margin-top: -180px;\n  z-index: 10;\n  padding: 6px;\n  box-shadow: none;\n  box-shadow: 0px 3px 45px 0px rgba(0, 0, 0, 0.16);\n  border-radius: 40px;\n  overflow: visible;\n}\n\nion-card ion-img {\n  width: 240px;\n  margin: -60px auto auto auto;\n}\n\nion-item {\n  border-radius: 14px;\n  box-shadow: 0px 3px 45px 0px rgba(0, 0, 0, 0.08);\n  color: #949494;\n  margin-bottom: 10px;\n}\n\nion-item ion-icon:first-of-type {\n  color: #FFFFFF;\n  padding: 4px;\n  border-radius: 12px;\n}\n\n.ion-icon-a {\n  background: #31d039;\n  color: #FFFFFF;\n}\n\n.ion-icon-b {\n  background: #316dd0;\n  color: #FFFFFF;\n  padding: 4px;\n  border-radius: 12px;\n}\n\n.sato-lineas {\n  line-height: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hc0ludGVybmFzL3JlY2lib3Mtc2VydmljaW9zL3JlY2lib3Mtc2VydmljaW9zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUVBLDBCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUk7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7QUFBUjs7QUFLQTtFQUNJLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFHSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFPQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQUpKOztBQU9BO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0E7RUFDSSxnQkFBQTtBQUpKIiwiZmlsZSI6InNyYy9hcHAvcGFnaW5hc0ludGVybmFzL3JlY2lib3Mtc2VydmljaW9zL3JlY2lib3Mtc2VydmljaW9zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAwM2Y3ZjtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjAlIDIwJTtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IC0xODBweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuXHJcbiAgICBpb24taW1nIHtcclxuICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAtNjBweCBhdXRvIGF1dG8gYXV0bztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDQ1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcbiAgICBjb2xvcjogcmdiKDE0OCwgMTQ4LCAxNDgpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGlvbi1pY29uOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuXHJcbi5pb24taWNvbi1hIHtcclxuICAgIGJhY2tncm91bmQ6ICMzMWQwMzk7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxufVxyXG5cclxuLmlvbi1pY29uLWIge1xyXG4gICAgYmFja2dyb3VuZDogIzMxNmRkMDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG5cclxuLnNhdG8tbGluZWFze1xyXG4gICAgbGluZS1oZWlnaHQ6IDFweDtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/paginasInternas/recibos-servicios/recibos-servicios.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/paginasInternas/recibos-servicios/recibos-servicios.page.ts ***!
  \*****************************************************************************/
/*! exports provided: RecibosServiciosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecibosServiciosPage", function() { return RecibosServiciosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_datos_servicio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/datos-servicio.service */ "./src/app/service/datos-servicio.service.ts");
/* harmony import */ var src_app_service_sweetalert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/sweetalert.service */ "./src/app/service/sweetalert.service.ts");





let RecibosServiciosPage = class RecibosServiciosPage {
    constructor(Router, SweetalertService, DatosServicioService) {
        this.Router = Router;
        this.SweetalertService = SweetalertService;
        this.DatosServicioService = DatosServicioService;
        this.documentosServicios = [];
    }
    ngOnInit() {
        this.documentosServicios = this.DatosServicioService.getRecibosServico();
        /* =[
          {
            "documentoURL": "https://siom.oximeiser.com:443/archivos/oximeiser/servicios/60b87fe813ae1/recibos-equipos/008781-60b87fe8158f7.pdf",
            "documentoTITULO": "Recibo de Equipos #008781",
            "servicioCODIGO": "60b87fe813ae1",
            "reciboNUMERO": "008781"
          },
          {
            "documentoURL": "https://siom.oximeiser.com:443/archivos/oximeiser/servicios/60b87fe813ae1/recibos-equipos/008781-60b87fe8158f7.pdf",
            "documentoTITULO": "Recibo de Equipos #008781",
            "servicioCODIGO": "60b87fe813ae1",
            "reciboNUMERO": "008781"
          }
        ]; */
        if (this.documentosServicios.length == 0) {
            this.SweetalertService.modal("info", "No se recibieron los recibos generados.");
            this.Router.navigateByUrl("menu-principal");
        }
    }
    irRuta(ruta) {
        this.Router.navigateByUrl(ruta);
    }
    ngOnDestroy() {
        this.DatosServicioService.deleteRecibosServico();
    }
};
RecibosServiciosPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_sweetalert_service__WEBPACK_IMPORTED_MODULE_4__["SweetalertService"] },
    { type: src_app_service_datos_servicio_service__WEBPACK_IMPORTED_MODULE_3__["DatosServicioService"] }
];
RecibosServiciosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recibos-servicios',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./recibos-servicios.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginasInternas/recibos-servicios/recibos-servicios.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./recibos-servicios.page.scss */ "./src/app/paginasInternas/recibos-servicios/recibos-servicios.page.scss")).default]
    })
], RecibosServiciosPage);



/***/ }),

/***/ "./src/app/service/datos-servicio.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/datos-servicio.service.ts ***!
  \***************************************************/
/*! exports provided: DatosServicioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosServicioService", function() { return DatosServicioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DatosServicioService = class DatosServicioService {
    constructor() {
        this.recibosServico = [];
    }
    setRecibosServico(recibosServico) {
        this.recibosServico = recibosServico;
    }
    getRecibosServico() {
        return this.recibosServico;
    }
    deleteRecibosServico() {
        this.recibosServico = [];
    }
};
DatosServicioService.ctorParameters = () => [];
DatosServicioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DatosServicioService);



/***/ })

}]);
//# sourceMappingURL=paginasInternas-recibos-servicios-recibos-servicios-module-es2015.js.map