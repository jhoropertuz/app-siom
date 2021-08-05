(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginasInternas-detalles-usuario-detalles-usuario-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/paginasInternas/detalles-usuario/detalles-usuario.page.html":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginasInternas/detalles-usuario/detalles-usuario.page.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPaginasInternasDetallesUsuarioDetallesUsuarioPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"menu-principal\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"ion-padding\">\r\n\r\n    <ion-card class=\"ion-margin-bottom\">\r\n      <ion-img src=\"assets\\img\\ilustraciones\\personal_data__monochromatic.svg\"></ion-img>\r\n      <ion-card-content>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"ion-text-center ion-margin-bottom\">\r\n            <ion-card-title>Jonathan Romero</ion-card-title>\r\n            <ion-card-subtitle>1151200181</ion-card-subtitle>\r\n            <!-- <ion-card-subtitle>\r\n              <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n              <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n              <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n              <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n              <ion-icon name=\"star-outline\" color=\"warning\"></ion-icon>\r\n              <span> (12.5K)</span>\r\n            </ion-card-subtitle> -->\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-text-center\">\r\n            <ion-button fill=\"clear\" color=\"dark\"  (click)=\"cambiarContenido('userEstadistica')\">\r\n              <ion-icon slot=\"icon-only\" name=\"speedometer-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-text-center\">\r\n            <ion-button fill=\"clear\" color=\"dark\"  (click)=\"cambiarContenido('detallesProducto')\">\r\n              <ion-icon slot=\"icon-only\" name=\"home\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-text-center\">\r\n            <ion-button fill=\"clear\" color=\"dark\" (click)=\"cambiarContenido('userMapa')\">\r\n              <ion-icon slot=\"icon-only\" name=\"person-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  <div *ngIf=\"userEstadistica\" >\r\n    <h6>Estadistica de cliente</h6>\r\n        <ion-item>\r\n          <app-firma></app-firma>\r\n       </ion-item>\r\n  </div>\r\n  \r\n   <div *ngIf=\"userMapa\" >\r\n    <h6>Ubicacion y Contacto</h6>\r\n        <ion-item>\r\n          <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.3063567878776!2d-74.21651428587997!3d11.23885915356239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef4f50651303e0b%3A0x5a27bcd2ca4d38d8!2sCamara%20de%20comercio%20Santa%20Marta!5e0!3m2!1ses!2sco!4v1602886941562!5m2!1ses!2sco\" width=\"100%\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\r\n       </ion-item>\r\n   </div>\r\n   <div *ngIf=\"detallesProducto\">\r\n    <h6>Detalles de Pedidos</h6>\r\n    <ion-item lines=\"none\"  (click)=\"irRuta('escaneo-qr-oxigem')\">\r\n      <ion-icon name=\"calendar-outline\" slot=\"start\" style=\"background:#57ed95 ;\" ></ion-icon>\r\n      <ion-label>\r\n        <ion-label  >\r\n          <strong>Oxigem-2899</strong>  <br>\r\n          Retener : $40.000 <br>\r\n          <h6> 23-07-2020</h6><br>\r\n        </ion-label>\r\n      </ion-label>\r\n      <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" (click)=\"irRuta('escaneo-qr-oxigem')\">\r\n      <ion-icon name=\"calendar-outline\"  slot=\"start\" style=\"background: #ed576b\" ></ion-icon>\r\n      <ion-label >\r\n        <strong>Oxigem-2899</strong>  <br>\r\n        Deposito: $50.000<br>\r\n        <h6> 23-07-2020</h6> <br>\r\n      </ion-label>\r\n      <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" (click)=\"irRuta('escaneo-qr-oxigem')\">\r\n      <ion-icon name=\"calendar-outline\"  slot=\"start\" style=\"background: #ed576b\" ></ion-icon>\r\n      <ion-label >\r\n        <strong>Oxigem-2499</strong>  <br>\r\n        Deposito: $20.000<br>\r\n        <h6> 23-07-2020</h6> <br>\r\n      </ion-label>\r\n      <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" (click)=\"irRuta('escaneo-qr-oxigem')\">\r\n      <ion-icon name=\"calendar-outline\"  slot=\"start\" style=\"background: #ed576b\" ></ion-icon>\r\n      <ion-label >\r\n        <strong>Oxigem-2499</strong>  <br>\r\n        Deposito: $20.000<br>\r\n        <h6> 23-07-2020</h6> <br>\r\n      </ion-label>\r\n      <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" (click)=\"irRuta('escaneo-qr-oxigem')\">\r\n      <ion-icon name=\"calendar-outline\"  slot=\"start\" style=\"background: #ed576b\" ></ion-icon>\r\n      <ion-label >\r\n        <strong>Oxigem-2499</strong>  <br>\r\n        Deposito: $20.000<br>\r\n        <h6> 23-07-2020</h6> <br>\r\n      </ion-label>\r\n      <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item lines=\"none\" (click)=\"irRuta('escaneo-qr-oxigem')\">\r\n      <ion-icon name=\"calendar-outline\"  slot=\"start\" style=\"background: #ed576b\" ></ion-icon>\r\n      <ion-label >\r\n        <strong>Oxigem-2499</strong>  <br>\r\n        Deposito: $20.000<br>\r\n        <h6> 23-07-2020</h6> <br>\r\n      </ion-label>\r\n      <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n    <!-- <h6>Pickup Location</h6>\r\n    <ion-item lines=\"none\">\r\n      <ion-icon name=\"location-outline\" slot=\"start\"></ion-icon>\r\n      <ion-label>\r\n        <ion-input placeholder=\"Muscat\"></ion-input>\r\n      </ion-label>\r\n      <ion-icon name=\"chevron-forward\" slot=\"end\"></ion-icon>\r\n    </ion-item> -->\r\n\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- <div class=\"ion-padding\">\r\n  <ion-badge color=\"danger\" mode=\"ios\">\r\n    Oxigem-2020\r\n  </ion-badge>\r\n</div> -->";
      /***/
    },

    /***/
    "./src/app/paginasInternas/detalles-usuario/detalles-usuario-routing.module.ts":
    /*!*************************************************************************************!*\
      !*** ./src/app/paginasInternas/detalles-usuario/detalles-usuario-routing.module.ts ***!
      \*************************************************************************************/

    /*! exports provided: DetallesUsuarioPageRoutingModule */

    /***/
    function srcAppPaginasInternasDetallesUsuarioDetallesUsuarioRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetallesUsuarioPageRoutingModule", function () {
        return DetallesUsuarioPageRoutingModule;
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


      var _detalles_usuario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./detalles-usuario.page */
      "./src/app/paginasInternas/detalles-usuario/detalles-usuario.page.ts");

      var routes = [{
        path: '',
        component: _detalles_usuario_page__WEBPACK_IMPORTED_MODULE_3__["DetallesUsuarioPage"]
      }];

      var DetallesUsuarioPageRoutingModule = function DetallesUsuarioPageRoutingModule() {
        _classCallCheck(this, DetallesUsuarioPageRoutingModule);
      };

      DetallesUsuarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetallesUsuarioPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/paginasInternas/detalles-usuario/detalles-usuario.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/paginasInternas/detalles-usuario/detalles-usuario.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: DetallesUsuarioPageModule */

    /***/
    function srcAppPaginasInternasDetallesUsuarioDetallesUsuarioModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetallesUsuarioPageModule", function () {
        return DetallesUsuarioPageModule;
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


      var _detalles_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./detalles-usuario-routing.module */
      "./src/app/paginasInternas/detalles-usuario/detalles-usuario-routing.module.ts");
      /* harmony import */


      var _detalles_usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./detalles-usuario.page */
      "./src/app/paginasInternas/detalles-usuario/detalles-usuario.page.ts");
      /* harmony import */


      var src_app_shareds_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shareds/shared.module */
      "./src/app/shareds/shared.module.ts");

      var DetallesUsuarioPageModule = function DetallesUsuarioPageModule() {
        _classCallCheck(this, DetallesUsuarioPageModule);
      };

      DetallesUsuarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detalles_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetallesUsuarioPageRoutingModule"], src_app_shareds_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_detalles_usuario_page__WEBPACK_IMPORTED_MODULE_6__["DetallesUsuarioPage"]]
      })], DetallesUsuarioPageModule);
      /***/
    },

    /***/
    "./src/app/paginasInternas/detalles-usuario/detalles-usuario.page.scss":
    /*!*****************************************************************************!*\
      !*** ./src/app/paginasInternas/detalles-usuario/detalles-usuario.page.scss ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPaginasInternasDetallesUsuarioDetallesUsuarioPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: #003f7f;\n  color: #FFFFFF;\n  padding-bottom: 200px;\n  border-radius: 0 0 20% 20%;\n}\n\nion-col {\n  padding: 0;\n}\n\nion-content {\n  --background: #f6f6f6;\n}\n\nion-card {\n  margin-top: -180px;\n  z-index: 10;\n  padding: 6px;\n  box-shadow: none;\n  box-shadow: 0px 3px 45px 0px rgba(0, 0, 0, 0.16);\n  border-radius: 40px;\n  overflow: visible;\n}\n\nion-card ion-img {\n  width: 240px;\n  margin: -60px auto auto auto;\n}\n\nion-item {\n  z-index: 10;\n  border-radius: 14px;\n  box-shadow: 0px 3px 45px 0px rgba(0, 0, 0, 0.08);\n  color: #949494;\n  margin-bottom: 10px;\n}\n\nion-item ion-icon:first-of-type {\n  color: #FFFFFF;\n  padding: 4px;\n  border-radius: 12px;\n}\n\nion-item ion-icon:last-of-type {\n  background: #949494;\n  color: #FFFFFF;\n  padding: 4px;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hc0ludGVybmFzL2RldGFsbGVzLXVzdWFyaW8vZGV0YWxsZXMtdXN1YXJpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxZQUFBO0VBQ0EsNEJBQUE7QUFDUjs7QUFJQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdEQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBREo7O0FBRUk7RUFFSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRFI7O0FBSUk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFGUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXNJbnRlcm5hcy9kZXRhbGxlcy11c3VhcmlvL2RldGFsbGVzLXVzdWFyaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDAzZjdmO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjAlIDIwJTtcclxufVxyXG5cclxuaW9uLWNvbCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmNmY2ZjY7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IC0xODBweDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuXHJcbiAgICBpb24taW1nIHtcclxuICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAtNjBweCBhdXRvIGF1dG8gYXV0bztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzcHggNDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcclxuICAgIGNvbG9yOiByZ2IoMTQ4LCAxNDgsIDE0OCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgaW9uLWljb246Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWljb246bGFzdC1vZi10eXBlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTQ4LCAxNDgsIDE0OCk7XHJcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB9XHJcblxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/paginasInternas/detalles-usuario/detalles-usuario.page.ts":
    /*!***************************************************************************!*\
      !*** ./src/app/paginasInternas/detalles-usuario/detalles-usuario.page.ts ***!
      \***************************************************************************/

    /*! exports provided: DetallesUsuarioPage */

    /***/
    function srcAppPaginasInternasDetallesUsuarioDetallesUsuarioPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetallesUsuarioPage", function () {
        return DetallesUsuarioPage;
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

      var DetallesUsuarioPage = /*#__PURE__*/function () {
        function DetallesUsuarioPage(Router) {
          _classCallCheck(this, DetallesUsuarioPage);

          this.Router = Router;
          this.userMapa = false;
          this.userEstadistica = false;
          this.detallesProducto = true;
        }

        _createClass(DetallesUsuarioPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "cambiarContenido",
          value: function cambiarContenido(nombreContenido) {
            this.cerrarContenido();

            switch (nombreContenido) {
              case 'userMapa':
                this.userMapa = true;
                break;

              case 'detallesProducto':
                this.detallesProducto = true;
                break;

              case 'userEstadistica':
                this.userEstadistica = true;
                break;

              default:
                break;
            }
          }
        }, {
          key: "cerrarContenido",
          value: function cerrarContenido() {
            this.userMapa = false;
            this.detallesProducto = false;
            this.userEstadistica = false;
          }
        }, {
          key: "irRuta",
          value: function irRuta(ruta) {
            this.Router.navigateByUrl(ruta);
          }
        }]);

        return DetallesUsuarioPage;
      }();

      DetallesUsuarioPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      DetallesUsuarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detalles-usuario',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./detalles-usuario.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/paginasInternas/detalles-usuario/detalles-usuario.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./detalles-usuario.page.scss */
        "./src/app/paginasInternas/detalles-usuario/detalles-usuario.page.scss"))["default"]]
      })], DetallesUsuarioPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=paginasInternas-detalles-usuario-detalles-usuario-module-es5.js.map