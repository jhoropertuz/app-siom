(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginasInternas-menu-principal-menu-principal-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/paginasInternas/menu-principal/menu-principal.page.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginasInternas/menu-principal/menu-principal.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPaginasInternasMenuPrincipalMenuPrincipalPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-item lines=\"none\">\r\n    <ion-avatar slot=\"end\" style=\"margin-right: 10px ;\">\r\n      <img src=\"{{usuarioAvatar}}\">\r\n    </ion-avatar>\r\n    <!-- <ion-button fill=\"clear\" color=\"light\">\r\n      <ion-icon slot=\"icon-only\" name=\"menu\"></ion-icon>\r\n    </ion-button> -->\r\n    <ion-menu-button style=\"padding-left:0%; margin-left: 0%;\" fill=\"clear\" color=\"light\"></ion-menu-button>\r\n    <ion-label  >\r\n      <h2>Oximed</h2>\r\n    </ion-label>\r\n  </ion-item>\r\n  <!-- <ion-item lines=\"none\"  class=\"ion-align-items-cente ion-text-right\">\r\n      \r\n          \r\n           <div style=\"padding: 0%;\">\r\n            <ion-button   color=\"light\" size=\"small\" >\r\n                <img  src=\"assets\\img\\accessibility-outline.svg\" width=\"25px\">\r\n            </ion-button>\r\n             <ion-button   color=\"light\" size=\"small\" (click)=\"irRuta('escaneo-qr-oxigem/todos')\"> \r\n                <img src=\"assets\\img\\qr-code-outline.svg\" width=\"25px\"> \r\n            </ion-button> \r\n          </div> \r\n    \r\n  </ion-item> -->\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div class=\"ion-padding\">\r\n    <ion-card (click)=\"irRuta('escaneo-qr-oxigem/recoger')\">\r\n      <ion-card-header>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"9\">\r\n            <ion-badge color=\"success\" mode=\"ios\">\r\n              <!-- <ion-icon name=\"checkmark-outline\"></ion-icon> -->\r\n               De click aquí para recoger equipos\r\n            </ion-badge>\r\n          </ion-col>\r\n          <!-- <ion-col size=\"6\" class=\"ion-text-right\">\r\n            <ion-card-subtitle color=\"danger\"></ion-card-subtitle>\r\n          </ion-col> -->\r\n        </ion-row>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-img src=\"https://siom.oximeiser.com/libs/media/btn_recoger_app.png\" style=\"width: 100%;\"></ion-img>\r\n       <!--  <ion-row>\r\n          <ion-col size=\"12\" class=\"text-center\">\r\n            <ion-card-title class=\"text-center\"><strong>RECOGER</strong></ion-card-title>\r\n            \r\n          </ion-col>\r\n          \r\n          <ion-col size=\"4\" class=\"ion-text-right\">\r\n            <ion-button fill=\"clear\" color=\"dark\" size=\"large\" routerLink=\"/details\">\r\n              <ion-icon slot=\"icon-only\" name=\"chevron-forward-circle-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row> -->\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card (click)=\"irRuta('escaneo-qr-oxigem/entregar')\">\r\n      <ion-card-header>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"9\">\r\n            <ion-badge color=\"success\" mode=\"ios\">\r\n             <!--  <ion-icon name=\"checkmark-outline\"></ion-icon> -->\r\n              De click aquí para entregar equipos\r\n            </ion-badge>\r\n          </ion-col>\r\n          <!-- <ion-col size=\"6\" class=\"ion-text-right\">\r\n            <ion-card-subtitle color=\"danger\">30</ion-card-subtitle>\r\n          </ion-col> -->\r\n        </ion-row>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-img src=\"https://siom.oximeiser.com/libs/media/btn_entregar_app.png\" style=\"width: 100%;\" ></ion-img>\r\n        <!-- <ion-row>\r\n          <ion-col size=\"12\" class=\"text-center\">\r\n            <ion-card-title><strong>ENTREGAR</strong></ion-card-title>\r\n            \r\n          </ion-col>\r\n          \r\n          <ion-col size=\"4\" class=\"ion-text-right\">\r\n            <ion-button fill=\"clear\" color=\"dark\" size=\"large\" routerLink=\"/details\">\r\n              <ion-icon slot=\"icon-only\" name=\"chevron-forward-circle-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row> -->\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n    <ion-card (click)=\"irRuta('historial-reparto')\">\r\n      <ion-card-header>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"9\">\r\n            <ion-badge color=\"success\" mode=\"ios\">\r\n               De click aquí para ver historial de equipos\r\n            </ion-badge>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n        <ion-img src=\"https://siom.oximeiser.com/libs/media/btn_historial_app.png\" style=\"width: 100%;\"></ion-img>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    \r\n    <!-- <app-document-viewer></app-document-viewer> -->\r\n  </div>\r\n \r\n</ion-content>\r\n\r\n<div class=\"ion-padding\">\r\n  <ion-badge class=\"ion-text-center\" style=\"background:  rgb(148, 148, 148);\" mode=\"ios\">OXIMED-2021</ion-badge>\r\n</div>\r\n";
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
    "./src/app/paginasInternas/menu-principal/menu-principal-routing.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/paginasInternas/menu-principal/menu-principal-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: MenuPrincipalPageRoutingModule */

    /***/
    function srcAppPaginasInternasMenuPrincipalMenuPrincipalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPrincipalPageRoutingModule", function () {
        return MenuPrincipalPageRoutingModule;
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


      var _menu_principal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./menu-principal.page */
      "./src/app/paginasInternas/menu-principal/menu-principal.page.ts");

      var routes = [{
        path: '',
        component: _menu_principal_page__WEBPACK_IMPORTED_MODULE_3__["MenuPrincipalPage"]
      }];

      var MenuPrincipalPageRoutingModule = function MenuPrincipalPageRoutingModule() {
        _classCallCheck(this, MenuPrincipalPageRoutingModule);
      };

      MenuPrincipalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MenuPrincipalPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/paginasInternas/menu-principal/menu-principal.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/paginasInternas/menu-principal/menu-principal.module.ts ***!
      \*************************************************************************/

    /*! exports provided: MenuPrincipalPageModule */

    /***/
    function srcAppPaginasInternasMenuPrincipalMenuPrincipalModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPrincipalPageModule", function () {
        return MenuPrincipalPageModule;
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


      var _menu_principal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./menu-principal-routing.module */
      "./src/app/paginasInternas/menu-principal/menu-principal-routing.module.ts");
      /* harmony import */


      var _menu_principal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./menu-principal.page */
      "./src/app/paginasInternas/menu-principal/menu-principal.page.ts");
      /* harmony import */


      var src_app_shareds_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shareds/shared.module */
      "./src/app/shareds/shared.module.ts");

      var MenuPrincipalPageModule = function MenuPrincipalPageModule() {
        _classCallCheck(this, MenuPrincipalPageModule);
      };

      MenuPrincipalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _menu_principal_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPrincipalPageRoutingModule"], src_app_shareds_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
        declarations: [_menu_principal_page__WEBPACK_IMPORTED_MODULE_6__["MenuPrincipalPage"]]
      })], MenuPrincipalPageModule);
      /***/
    },

    /***/
    "./src/app/paginasInternas/menu-principal/menu-principal.page.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/paginasInternas/menu-principal/menu-principal.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPaginasInternasMenuPrincipalMenuPrincipalPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-item {\n  --background: #003f7f;\n}\nion-item h2 {\n  font-weight: bold;\n  font-size: 20px;\n  color: #ffffff;\n}\nion-item:last-of-type {\n  border-radius: 0 0 20% 20%;\n}\nion-item:last-of-type div {\n  padding-bottom: 20px;\n  text-align: center;\n  width: 100%;\n}\nion-searchbar {\n  --box-shadow: none;\n  --border-radius: 10px;\n  opacity: 0.96;\n  padding: 0;\n  margin: 12px 0;\n}\nion-col {\n  padding: 0;\n}\nion-content {\n  --background: #f6f6f6;\n}\nion-card {\n  padding: 6px;\n  box-shadow: none;\n  box-shadow: 0px 3px 45px 0px rgba(0, 0, 0, 0.16);\n  border-radius: 30px;\n}\nion-card ion-img {\n  width: 200px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnaW5hc0ludGVybmFzL21lbnUtcHJpbmNpcGFsL21lbnUtcHJpbmNpcGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7QUFBSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFFTjtBQUVFO0VBTUUsMEJBQUE7QUFKSjtBQURJO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFHTjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQUNKO0FBRUU7RUFDRSxVQUFBO0FBQ0o7QUFNRTtFQUNFLHFCQUFBO0FBSEo7QUFNRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7QUFISjtBQUtJO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFITiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXNJbnRlcm5hcy9tZW51LXByaW5jaXBhbC9tZW51LXByaW5jaXBhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDNmN2Y7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBpb24taXRlbTpsYXN0LW9mLXR5cGUge1xyXG4gICAgZGl2IHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMjAlIDIwJTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvcGFjaXR5OiAuOTY7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAxMnB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1jb2wge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbiAgXHJcbiAgLy8gOjpuZy1kZWVwIC5zZWFyY2hiYXItc2VhcmNoLWljb24ge1xyXG4gIC8vICAgY29sb3I6ICMzMTZkZDAgIWltcG9ydGFudDtcclxuICAvLyB9XHJcbiAgXHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG4gIH1cclxuICBcclxuICBpb24tY2FyZCB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDNweCA0NXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBcclxuICAgIGlvbi1pbWcge1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gIH0iXX0= */";
      /***/
    },

    /***/
    "./src/app/paginasInternas/menu-principal/menu-principal.page.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/paginasInternas/menu-principal/menu-principal.page.ts ***!
      \***********************************************************************/

    /*! exports provided: MenuPrincipalPage */

    /***/
    function srcAppPaginasInternasMenuPrincipalMenuPrincipalPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MenuPrincipalPage", function () {
        return MenuPrincipalPage;
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


      var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/service/auth.service */
      "./src/app/service/auth.service.ts");
      /* harmony import */


      var src_app_service_sweetalert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/service/sweetalert.service */
      "./src/app/service/sweetalert.service.ts");
      /* harmony import */


      var _endpoind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../endpoind */
      "./src/app/endpoind.ts");

      var MenuPrincipalPage = /*#__PURE__*/function () {
        function MenuPrincipalPage(AuthService, SweetalertService, MenuController, Router) {
          _classCallCheck(this, MenuPrincipalPage);

          this.AuthService = AuthService;
          this.SweetalertService = SweetalertService;
          this.MenuController = MenuController;
          this.Router = Router;
          this.usuarioAvatar = "assets/profile.jpg";
        }

        _createClass(MenuPrincipalPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.MenuController.enable(true, 'menu');
            var avatarCliente = this.AuthService.getUsuario().usuarioAvatar;

            if (avatarCliente) {
              this.usuarioAvatar = _endpoind__WEBPACK_IMPORTED_MODULE_6__["Endpoind"].ARCHIVO_BASE + avatarCliente;
            }
            /* var url="https://siom.oximeiser.com/archivos/oximeiser/servicios/280521123638/recibos-equipos/008777-60b12a266ab45.pdf";
            window.open(url, 'Download'); */

          }
        }, {
          key: "irRuta",
          value: function irRuta(ruta) {
            if (ruta == "listado-oxigem/entregar") {
              this.SweetalertService.modal("info", "En construcción....");
            } else {
              this.Router.navigateByUrl(ruta);
            }
          }
        }]);

        return MenuPrincipalPage;
      }();

      MenuPrincipalPage.ctorParameters = function () {
        return [{
          type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: src_app_service_sweetalert_service__WEBPACK_IMPORTED_MODULE_5__["SweetalertService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      MenuPrincipalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-principal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./menu-principal.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/paginasInternas/menu-principal/menu-principal.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./menu-principal.page.scss */
        "./src/app/paginasInternas/menu-principal/menu-principal.page.scss"))["default"]]
      })], MenuPrincipalPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=paginasInternas-menu-principal-menu-principal-module-es5.js.map