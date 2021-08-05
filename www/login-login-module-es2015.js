(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content padding >\r\n  <div class=\"centrado-padre \" *ngIf=\"esperar\">\r\n    <ion-grid  class=\"centrado-hijo\" >\r\n      <ion-row >\r\n        <ion-col size=\"12\" >\r\n          <img src=\"https://siom.oximeiser.com/libs/media/OXIMED-splash.gif\" style=\"width: 100%;margin: 0%;\"  alt=\"entrada\">\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n<div class=\"centrado-padre\" *ngIf=\"!esperar\" >\r\n    <ion-card  class=\" sombra-primary text-center  animate__animated animate__backInLeft\" style=\"margin-top:30px\" >\r\n      <ion-card-header class=\"text-center \">\r\n        <img src=\"assets/logos/logo_oximed.png\" style=\" max-width:100px; max-height:150px\" >\r\n      </ion-card-header>\r\n      <ion-card-content>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"text-center\">\r\n            <form [formGroup]=\"validations_form\"\r\n              (ngSubmit)=\"onSubmitLogin(validations_form.value)\">\r\n\r\n              <ion-item>\r\n                <ion-label position=\"floating\" color=\"primary\">Usuario</ion-label>\r\n                <ion-input type=\"text\" formControlName=\"usuarioName\"></ion-input>\r\n              </ion-item>\r\n              <div class=\"validation-errors\">\r\n                <ng-container *ngFor=\"let validation of\r\n                  validation_messages.usuarioName\">\r\n                  <ion-text color=\"danger\" style=\"display:block;float: none;\r\n                    width: 100%\" class=\"error-message\"\r\n                    *ngIf=\"validations_form.get('usuarioName').hasError(validation.type)\r\n                    && (validations_form.get('usuarioName').dirty ||\r\n                    validations_form.get('usuarioName').touched)\">\r\n                    <ion-icon name=\"information-circle-outline\"></ion-icon> {{\r\n                    validation.message }}\r\n                  </ion-text>\r\n                </ng-container>\r\n              </div>\r\n\r\n             <ion-item>\r\n              <ion-label position=\"floating\" color=\"primary\">Contraseña</ion-label>\r\n              <ion-input type=\"password\" formControlName=\"password\"></ion-input>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n              <ng-container *ngFor=\"let validation of\r\n                validation_messages.password\">\r\n                <ion-text color=\"danger\" style=\"display:block;float: none;\r\n                  width: 100%\" class=\"error-message\"\r\n                  *ngIf=\"validations_form.get('password').hasError(validation.type)\r\n                  && (validations_form.get('password').dirty ||\r\n                  validations_form.get('password').touched)\">\r\n                  <ion-icon name=\"information-circle-outline\"></ion-icon> {{\r\n                  validation.message }}\r\n                </ion-text>\r\n              </ng-container>\r\n            </div>\r\n              <ion-button color=\"primary\" style=\"margin-top: 50px;\"\r\n                class=\"submit-btn\"expand=\"full\" type=\"submit\"\r\n                [disabled]=\"!validations_form.valid\">Ingresar</ion-button>\r\n            </form>\r\n\r\n          </ion-col>\r\n\r\n\r\n        </ion-row>\r\n      </ion-card-content>\r\n    </ion-card>\r\n  </div>\r\n\r\n</ion-content>\r\n");

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

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".centrado-padre {\n  display: grid;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n  justify-items: center;\n}\n\n.centrado-hijo {\n  width: 50%;\n  margin: 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUdFO0VBQ0UsVUFBQTtFQUNBLFVBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50cmFkby1wYWRyZSB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIFxyXG4gIH1cclxuXHJcbiAgLmNlbnRyYWRvLWhpam8ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMSU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_base_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/base.service */ "./src/app/service/base.service.ts");
/* harmony import */ var _service_sweetalert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/sweetalert.service */ "./src/app/service/sweetalert.service.ts");








let LoginPage = class LoginPage {
    constructor(formBuilder, router, BaseService, Sweetalert, MenuController, AuthService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.BaseService = BaseService;
        this.Sweetalert = Sweetalert;
        this.MenuController = MenuController;
        this.AuthService = AuthService;
        this.esperar = true;
        this.validation_messages = {
            'usuarioName': [
                { type: 'required', message: 'Usuario es requerido.' }
            ],
            'password': [
                { type: 'required', message: 'Contraseña es requerida.' }
            ]
        };
    }
    ngOnInit() {
        this.MenuController.enable(false, 'menu');
        this.validations_form = this.formBuilder.group({
            usuarioName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                /* , Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$') */
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
        });
        setTimeout(() => {
            this.esperar = false;
        }, 3000);
    }
    onSubmitLogin(values) {
        console.log(values);
        this.BaseService.login('sistema', 'sesion', 'ApiValidarUsuario', values).subscribe(res => {
            console.log(res);
            if (res.RESPUESTA == 'EXITO') {
                this.AuthService.DatosUsuario(res.DATOS);
                this.Sweetalert.notificacion('success', res.MENSAJE);
                this.router.navigateByUrl("menu-principal");
            }
            else {
                let tipoModal = (res.RESPUESTA == 'INFO') ? 'info' : 'error';
                this.Sweetalert.modal(tipoModal, res.MENSAJE);
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _service_base_service__WEBPACK_IMPORTED_MODULE_6__["BaseService"] },
    { type: _service_sweetalert_service__WEBPACK_IMPORTED_MODULE_7__["SweetalertService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



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



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map