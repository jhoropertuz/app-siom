(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginasInternas-historial-reparto-historial-reparto-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/paginasInternas/historial-reparto/historial-reparto.page.html":
    /*!*********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginasInternas/historial-reparto/historial-reparto.page.html ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPaginasInternasHistorialRepartoHistorialRepartoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-header class=\"ion-no-border\"  >\n  <ion-toolbar>\n    <ion-title>Historial</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\" ></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" >\n     <!--  <ion-button *ngIf=\"!mostrarSeleccionados && !mostrarSeleccionado\" (click)=\"buscador()\" size=\"small\" >\n        <ion-icon *ngIf=\"buscar\" name=\"search-circle\"></ion-icon>\n        <ion-icon *ngIf=\"!buscar\" name=\"search\"></ion-icon>\n      </ion-button> -->\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content [fullscreen]=\"true\">\n  <ion-searchbar color=\"primary\" placeholder=\"Buscar\" style=\"margin-bottom: 40%;\"  (ionChange)=\"ChangeSearchbar($event.target.value)\" autocomplete=\"On\" style=\"position:fixed; z-index: 100;\" *ngIf=\"buscar\" [ngClass]=\"{'animate__backInRight': buscarAnimacion, 'animate__backOutRight': !buscarAnimacion }\" class=\"animate__animated  \" ></ion-searchbar>\n \n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <div class=\"ion-padding\">\n        <ion-row *ngIf=\"!mostrarSeleccionado\" >\n          <ion-col  *ngFor=\"let item of listado\" size-lg=\"6\"  size=\"12\">\n            <ion-item lines=\"none\" style=\"margin: 2px;\"  [ngClass]=\"{'ENREPARTO': 'EN REPARTO'== item.reciboEstadoReparto}\"  class=\"animate__animated animate__fadeInUpBig  {{item.reciboEstadoReparto}}\">\n              <ion-grid >\n                <ion-row class=\"ion-align-items-center\">\n                  <ion-col size=\"9\"  >\n                      <h4><strong> Servicio : {{item.reciboNumero}}</strong></h4>\n                      <span>Estado : {{item.reciboEstadoReparto}} </span><br>\n                      <span>Cliente : <strong>{{item.personaIdentificacion}} | {{item.personaRazonSocial}}</strong></span>\n                  </ion-col>\n                  <ion-col class=\"text-right\" size=\"3\" >\n                    <ion-button fill=\"clear\" size=\"large\" (click)=\"seleccionarEquipo(item)\" ><ion-icon name=\"chevron-forward\" slot=\"end\" class=\"ion-icon-a\"></ion-icon></ion-button>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-item>\n          </ion-col>\n          <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n            <ion-infinite-scroll-content\n              loadingSpinner=\"bubbles\"\n              loadingText=\"Cargando...\">\n          </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n        </ion-row>\n        <ion-row *ngIf=\"mostrarSeleccionado\" >\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\" style=\"margin: 2px;\" class=\"animate__animated animate__fadeInUpBig\">\n              <ion-grid>\n                <ion-row class=\"ion-align-items-center\">\n                  <ion-col size=\"12\" style=\"margin-bottom: 5%;\">\n                    <ion-label >\n                      <ion-button  color=\"primary\" (click)=\"cancelarSeleccion()\">Listado</ion-button>\n                    </ion-label>\n                  </ion-col> \n                  <ion-col size=\"12\">\n                    <ion-label class=\"ion-text-wrap text-center\">   \n                      <ion-text color=\"primary\"><h2>Cliente</h2></ion-text>\n                      <strong>Nombre:</strong> {{equipoSeleccionado.personaRazonSocial}}<br>\n                      <strong>CC:</strong> {{equipoSeleccionado.personaIdentificacion}}<br>\n                      <strong>Codigo Cliente:</strong> {{equipoSeleccionado.clienteCodigo}}<br>\n                      <strong>Correo:</strong> {{equipoSeleccionado.personaCorreoElectronico}}<br><br>\n                      <ion-text color=\"primary\"><h2>Recibo</h2></ion-text>\n                      <strong>Numero:</strong> {{equipoSeleccionado.reciboNumero}}<br>\n                      <strong>Servicio:</strong> {{equipoSeleccionado.reciboServicio}}<br>\n                      <strong>Fecha Servicio:</strong> {{equipoSeleccionado.reciboFechaServicio}}<br>\n                      <strong>Fecha recogida:</strong> {{equipoSeleccionado.reciboFechaRecogida}}<br><br>\n\n                      <ion-item lines=\"none\" style=\"margin: 2px;\" class=\"animate__animated animate__fadeInUpBig\">\n                        <ion-grid>\n                          <ion-row class=\"ion-align-items-center\">\n                            <ion-col size=\"4\">\n                              <img src=\"https://siom.oximeiser.com/libs/media/PDF-logo.png\" alt=\"iconPDF\" style=\"width: 100%;\">\n                           </ion-col>\n                           <ion-col size=\"8\">\n                             <ion-label >\n                               <strong>{{equipoSeleccionado.documentoTITULO}}</strong><br>\n                               <a ion-button size=\"small\"  href=\"{{equipoSeleccionado.documentoURL}}\" download=\"{{equipoSeleccionado.servicioCODIGO}}.pdf\" target=\"_blank\"> Decargar recibo de Servicio {{equipoSeleccionado.servicioCODIGO}}</a>\n                             </ion-label>\n                           </ion-col>\n                          </ion-row>\n                        </ion-grid>\n                      </ion-item>\n\n                      <!-- <ng-container *ngIf=\"equipoSeleccionado.otrosPendientes\">\n                        <ion-text color=\"primary\"><h2>Equipos</h2></ion-text>\n                          <ng-container *ngFor=\"let otro of equipoSeleccionado.otrosPendientes\" >\n                            <ion-label style=\"border: solid red;\" >\n                              <strong>equipo:</strong> {{otro.equipoTitulo}}<br>\n                              <strong>Codigo:</strong> {{otro.equipoCodigo}}<br>\n                            </ion-label>\n                          </ng-container>\n                      </ng-container> -->\n                    </ion-label>\n                  </ion-col> \n                </ion-row>\n              </ion-grid>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n</div>\n</ion-content>\n\n\n";
      /***/
    },

    /***/
    "./src/app/endpoind.ts":
    /*!*****************************!*\
      !*** ./src/app/endpoind.ts ***!
      \*****************************/

    /*! exports provided: Endpoind */

    /***/
    function srcAppEndpoindTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Endpoind", function () {
        return Endpoind;
      });

      var Endpoind = {
        API_BASE: "https://siom.oximeiser.com/api.php",
        ARCHIVO_BASE: "https://siom.oximeiser.com/"
      };
      /***/
    },

    /***/
    "./src/app/paginasInternas/historial-reparto/historial-reparto-routing.module.ts":
    /*!***************************************************************************************!*\
      !*** ./src/app/paginasInternas/historial-reparto/historial-reparto-routing.module.ts ***!
      \***************************************************************************************/

    /*! exports provided: HistorialRepartoPageRoutingModule */

    /***/
    function srcAppPaginasInternasHistorialRepartoHistorialRepartoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistorialRepartoPageRoutingModule", function () {
        return HistorialRepartoPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _historial_reparto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./historial-reparto.page */
      "./src/app/paginasInternas/historial-reparto/historial-reparto.page.ts");

      var routes = [{
        path: '',
        component: _historial_reparto_page__WEBPACK_IMPORTED_MODULE_3__["HistorialRepartoPage"]
      }];

      var HistorialRepartoPageRoutingModule = function HistorialRepartoPageRoutingModule() {
        _classCallCheck(this, HistorialRepartoPageRoutingModule);
      };

      HistorialRepartoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HistorialRepartoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/paginasInternas/historial-reparto/historial-reparto.module.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/paginasInternas/historial-reparto/historial-reparto.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: HistorialRepartoPageModule */

    /***/
    function srcAppPaginasInternasHistorialRepartoHistorialRepartoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistorialRepartoPageModule", function () {
        return HistorialRepartoPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _historial_reparto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./historial-reparto-routing.module */
      "./src/app/paginasInternas/historial-reparto/historial-reparto-routing.module.ts");
      /* harmony import */


      var _historial_reparto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./historial-reparto.page */
      "./src/app/paginasInternas/historial-reparto/historial-reparto.page.ts");

      var HistorialRepartoPageModule = function HistorialRepartoPageModule() {
        _classCallCheck(this, HistorialRepartoPageModule);
      };

      HistorialRepartoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _historial_reparto_routing_module__WEBPACK_IMPORTED_MODULE_5__["HistorialRepartoPageRoutingModule"]],
        declarations: [_historial_reparto_page__WEBPACK_IMPORTED_MODULE_6__["HistorialRepartoPage"]]
      })], HistorialRepartoPageModule);
      /***/
    },

    /***/
    "./src/app/paginasInternas/historial-reparto/historial-reparto.page.scss":
    /*!*******************************************************************************!*\
      !*** ./src/app/paginasInternas/historial-reparto/historial-reparto.page.scss ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPaginasInternasHistorialRepartoHistorialRepartoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #003f7f;\n  color: #FFFFFF;\n  border-radius: 0 0 20% 20%;\n}\n\nion-col {\n  padding: 0;\n}\n\nion-content {\n  --background: #f6f6f6;\n}\n\nion-card {\n  margin-top: -180px;\n  z-index: 10;\n  padding: 6px;\n  box-shadow: none;\n  box-shadow: 0px 3px 45px 0px rgba(0, 0, 0, 0.16);\n  border-radius: 40px;\n  overflow: visible;\n}\n\nion-card ion-img {\n  width: 240px;\n  margin: -60px auto auto auto;\n}\n\nion-item {\n  border-radius: 14px;\n  box-shadow: 0px 3px 45px 0px rgba(0, 0, 0, 0.08);\n  color: #949494;\n  margin-bottom: 10px;\n}\n\nion-item ion-icon:first-of-type {\n  color: #FFFFFF;\n  padding: 4px;\n  border-radius: 12px;\n}\n\n.ion-icon-a {\n  background: #31d039;\n  color: #FFFFFF;\n}\n\n.ion-icon-b {\n  background: #316dd0;\n  color: #FFFFFF;\n  padding: 4px;\n  border-radius: 12px;\n}\n\n.sato-lineas {\n  line-height: 1px;\n}\n\n.ENSERVICIO {\n  border: solid #6AD64D;\n}\n\n.RECOGIDA {\n  border: solid #6AE4FC;\n}\n\n.PERDIDA {\n  border: solid #FC588F;\n}\n\n.NOFUNCIONO {\n  border: solid #FC588F;\n}\n\n.PORENTREGAR {\n  border: solid #F90244;\n}\n\n.ENREPARTO {\n  border: solid #F99C2A;\n}\n\n.ENTREGADO {\n  border: solid #6AE4FC;\n}\n\n.PENDIENTE {\n  border: solid #FC588F;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hc0ludGVybmFzL2hpc3RvcmlhbC1yZXBhcnRvL2hpc3RvcmlhbC1yZXBhcnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUVBLDBCQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0FBQUo7O0FBR0E7RUFDSSxxQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUk7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7QUFBUjs7QUFLQTtFQUNJLG1CQUFBO0VBQ0EsZ0RBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFHSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFPQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQUpKOztBQU9BO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSko7O0FBT0E7RUFDSSxnQkFBQTtBQUpKOztBQU9BO0VBQ0kscUJBQUE7QUFKSjs7QUFNQTtFQUNJLHFCQUFBO0FBSEo7O0FBTUE7RUFDSSxxQkFBQTtBQUhKOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFJQTtFQUNFLHFCQUFBO0FBREY7O0FBR0E7RUFDSSxxQkFBQTtBQUFKOztBQUdBO0VBQ0kscUJBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdpbmFzSW50ZXJuYXMvaGlzdG9yaWFsLXJlcGFydG8vaGlzdG9yaWFsLXJlcGFydG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAzZjdmO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAyMCUgMjAlO1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogI2Y2ZjZmNjtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogLTE4MHB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA0NXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG5cclxuICAgIGlvbi1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICBtYXJnaW46IC02MHB4IGF1dG8gYXV0byBhdXRvO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgIGNvbG9yOiByZ2IoMTQ4LCAxNDgsIDE0OCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgaW9uLWljb246Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB9XHJcbiAgIFxyXG59XHJcblxyXG5cclxuLmlvbi1pY29uLWEge1xyXG4gICAgYmFja2dyb3VuZDogIzMxZDAzOTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4uaW9uLWljb24tYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzE2ZGQwO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcblxyXG4uc2F0by1saW5lYXN7XHJcbiAgICBsaW5lLWhlaWdodDogMXB4O1xyXG4gIH1cclxuXHJcbi5FTlNFUlZJQ0lPe1xyXG4gICAgYm9yZGVyOnNvbGlkICM2QUQ2NERcclxufVxyXG4uUkVDT0dJREF7IFxyXG4gICAgYm9yZGVyOnNvbGlkICM2QUU0RkNcclxufVxyXG5cclxuLlBFUkRJREF7XHJcbiAgICBib3JkZXI6c29saWQgI0ZDNTg4RlxyXG59IFxyXG4uTk9GVU5DSU9OT3tcclxuICBib3JkZXI6IHNvbGlkICNGQzU4OEY7ICBcclxufSBcclxuLlBPUkVOVFJFR0FSe1xyXG4gIGJvcmRlcjogc29saWQgI0Y5MDI0NDtcclxufVxyXG4uRU5SRVBBUlRPe1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjRjk5QzJBO1xyXG59XHJcblxyXG4uRU5UUkVHQURPe1xyXG4gICAgYm9yZGVyOnNvbGlkICM2QUU0RkNcclxufVxyXG5cclxuLlBFTkRJRU5URXtcclxuICAgIGJvcmRlcjogc29saWQgI0ZDNTg4RjsgXHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "./src/app/paginasInternas/historial-reparto/historial-reparto.page.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/paginasInternas/historial-reparto/historial-reparto.page.ts ***!
      \*****************************************************************************/

    /*! exports provided: HistorialRepartoPage */

    /***/
    function srcAppPaginasInternasHistorialRepartoHistorialRepartoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HistorialRepartoPage", function () {
        return HistorialRepartoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_service_datos_equipos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/datos-equipos.service */
      "./src/app/service/datos-equipos.service.ts");
      /* harmony import */


      var _service_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../service/base.service */
      "./src/app/service/base.service.ts");
      /* harmony import */


      var _service_sweetalert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../service/sweetalert.service */
      "./src/app/service/sweetalert.service.ts");

      var HistorialRepartoPage = /*#__PURE__*/function () {
        function HistorialRepartoPage(DatosEquiposService, Router, ActivatedRoute, BaseService, Sweetalert, MenuController) {
          _classCallCheck(this, HistorialRepartoPage);

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
          this.mostrarSeleccionado = false;
          this.COLORES_ESTADOS = {
            "ENSERVICIO": "#6AD64D",
            "RECOGIDO": "#6AE4FC",
            "PERDIDA": "#FC588F",
            "NOFUNCIONO": "#FC588F",
            "PORENTREGAR": "#F90244",
            "ENREPARTO": "#F99C2A"
          };
        }

        _createClass(HistorialRepartoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.MenuController.enable(true, 'menu');
            this.getListado();
          }
        }, {
          key: "cancelarSeleccion",
          value: function cancelarSeleccion() {
            this.inicioLista();
          }
        }, {
          key: "inicioLista",
          value: function inicioLista() {
            this.mostrarSeleccionado = false;
          }
        }, {
          key: "seleccionarEquipo",
          value: function seleccionarEquipo(equipo) {
            equipo.otrosPendientes = [];
            this.equipoSeleccionado = equipo;

            if (this.buscadorActivo) {
              this.buscador();
            }

            this.mostrarSeleccionado = true;
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            /* if(!this.buscadorActivo){
              this.inicioItemLista=this.inicioItemLista+10;
              this.eventCargandoLista=event;
              if (this.listado.length<10) {
                this.eventCargandoLista.target.disabled = true;
              }
              this.getListado();
            } */
          }
        }, {
          key: "toggleInfiniteScroll",
          value: function toggleInfiniteScroll() {
            this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
          }
        }, {
          key: "buscador",
          value: function buscador() {
            var _this = this;

            if (this.buscar) {
              this.buscarAnimacion = false;
              setTimeout(function () {
                _this.buscar = false;

                _this.ChangeSearchbar('');
              }, 900);
            } else {
              this.buscar = true;
              this.buscarAnimacion = true;
            }
          }
        }, {
          key: "getListado",
          value: function getListado() {
            var _this2 = this;

            this.BaseService.postJson('repartidores', 'repartosUsuario', 'historialApi', {}).subscribe(function (res) {
              if (res.RESPUESTA = "EXITO") {
                if (res.DATOS) {
                  _this2.listadoTodos = [].concat(_this2.listadoTodos, res.DATOS);
                  _this2.listado = _this2.listadoTodos;
                  _this2.listadoFilter = _this2.listadoTodos;
                  console.log(_this2.listadoTodos);
                } else {
                  _this2.Sweetalert.notificacion("info", res.MENSAJE);
                }
              } else {
                _this2.Sweetalert.modal("error", res.MENSAJE);
              }

              if (_this2.eventCargandoLista) {
                _this2.eventCargandoLista.target.complete();
              }
            });
          }
        }, {
          key: "reiniciar",
          value: function reiniciar() {
            this.listadoTodos = [];
            this.listado = [];
            this.listadoFilter = [];
          }
        }, {
          key: "doRefresh",
          value: function doRefresh(event) {
            this.inicioItemLista = 0;
            this.reiniciar();
            this.getListado();
            setTimeout(function () {
              event.target.complete();
            }, 1000);
          }
        }, {
          key: "ChangeSearchbar",
          value: function ChangeSearchbar(value) {
            var _this3 = this;

            var val = value;

            if (val && val.trim() !== '' && val.length > 3) {
              this.buscadorActivo = true;
              this.BaseService.postJson('repartidores', '', '', {
                datoBusqueda: value
              }).subscribe(function (res) {
                if (res.RESPUESTA = "EXITO") {
                  if (res.DATOS) {
                    _this3.listado = res.DATOS;
                  } else {
                    _this3.listado = [];

                    _this3.Sweetalert.notificacion("info", "No se encontraron equipos.");
                  }
                } else {
                  _this3.Sweetalert.modal("error", res.mensaje);
                }
              });
            } else {
              this.buscadorActivo = false;
              this.listado = this.listadoTodos;
            }
          }
        }]);

        return HistorialRepartoPage;
      }();

      HistorialRepartoPage.ctorParameters = function () {
        return [{
          type: src_app_service_datos_equipos_service__WEBPACK_IMPORTED_MODULE_4__["DatosEquiposService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _service_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseService"]
        }, {
          type: _service_sweetalert_service__WEBPACK_IMPORTED_MODULE_6__["SweetalertService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }];
      };

      HistorialRepartoPage.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"]]
        }]
      };
      HistorialRepartoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-historial-reparto',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./historial-reparto.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/paginasInternas/historial-reparto/historial-reparto.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./historial-reparto.page.scss */
        "./src/app/paginasInternas/historial-reparto/historial-reparto.page.scss"))["default"]]
      })], HistorialRepartoPage);
      /***/
    },

    /***/
    "./src/app/service/base.service.ts":
    /*!*****************************************!*\
      !*** ./src/app/service/base.service.ts ***!
      \*****************************************/

    /*! exports provided: BaseService */

    /***/
    function srcAppServiceBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BaseService", function () {
        return BaseService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _endpoind__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../endpoind */
      "./src/app/endpoind.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/service/auth.service.ts");

      var BaseService = /*#__PURE__*/function () {
        function BaseService(AuthService, http, loadingController) {
          _classCallCheck(this, BaseService);

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

        _createClass(BaseService, [{
          key: "presentLoading",
          value: function presentLoading() {
            var mensaje = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Cargando...";
            var clase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'my-custom-class';
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingController.create({
                        cssClass: clase,
                        message: mensaje
                      });

                    case 2:
                      loading = _context.sent;
                      loading.present();
                      return _context.abrupt("return", loading);

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getJson",
          value: function getJson(url) {
            return this.http.get(_endpoind__WEBPACK_IMPORTED_MODULE_3__["Endpoind"].API_BASE + url);
          }
        }, {
          key: "postJson",
          value: function postJson(componente, controlador, operacion) {
            var Data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            var loading = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
            Data.componente = componente;
            Data.controlador = controlador;
            Data.accion = operacion;
            Data.authUsuarioID = this.AuthService.getUsuario().usuarioId;
            return this.http.post(_endpoind__WEBPACK_IMPORTED_MODULE_3__["Endpoind"].API_BASE, Data);
          }
        }, {
          key: "putJson",
          value: function putJson(Data, url) {
            return this.http.patch(_endpoind__WEBPACK_IMPORTED_MODULE_3__["Endpoind"].API_BASE + url, Data);
          }
        }, {
          key: "login",
          value: function login(componente, controlador, operacion) {
            var Data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
            Data.componente = componente;
            Data.controlador = controlador;
            Data.accion = operacion;
            return this.http.post(_endpoind__WEBPACK_IMPORTED_MODULE_3__["Endpoind"].API_BASE, Data);
          }
        }]);

        return BaseService;
      }();

      BaseService.ctorParameters = function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }];
      };

      BaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], BaseService);
      /***/
    },

    /***/
    "./src/app/service/datos-equipos.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/service/datos-equipos.service.ts ***!
      \**************************************************/

    /*! exports provided: DatosEquiposService */

    /***/
    function srcAppServiceDatosEquiposServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatosEquiposService", function () {
        return DatosEquiposService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var DatosEquiposService = /*#__PURE__*/function () {
        function DatosEquiposService() {
          _classCallCheck(this, DatosEquiposService);

          this.equipos = [];
          this.cliente = [];
        }

        _createClass(DatosEquiposService, [{
          key: "setEquipos",
          value: function setEquipos(equipos) {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              _this4.equipos = equipos;
              console.log("promesa set eqipo");
              return resolve(true);
            });
          }
        }, {
          key: "getEquipos",
          value: function getEquipos() {
            return this.equipos;
          }
        }, {
          key: "deleteEquipos",
          value: function deleteEquipos() {
            this.equipos = [];
          }
        }]);

        return DatosEquiposService;
      }();

      DatosEquiposService.ctorParameters = function () {
        return [];
      };

      DatosEquiposService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DatosEquiposService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=paginasInternas-historial-reparto-historial-reparto-module-es5.js.map