(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["paginasInternas-entrega-oxigem-entrega-oxigem-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginasInternas/entrega-oxigem/entrega-oxigem.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/paginasInternas/entrega-oxigem/entrega-oxigem.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\"  >\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Entregar Equipos</ion-title>\r\n    \r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content [fullscreen]=\"true\">\r\n  <ng-container >\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\" style=\"text-align: center;\" >\r\n          {{equipos.length}} Equipos a Entregar\r\n        </ion-col>\r\n      </ion-row> \r\n      <ion-row >\r\n        <ion-col size=\"12\" >\r\n          <strong>Persona a quien se le entrega.</strong>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row >\r\n        <ion-col size=\"12\"  class=\"text-center\">\r\n          <form [formGroup]=\"form_persona_entrega\"\r\n          (ngSubmit)=\"buscarPersona(form_persona_entrega.value)\">\r\n            <ion-item>\r\n              <ion-label position=\"floating\" color=\"primary\">Tipo identificación</ion-label>\r\n              <ion-select  formControlName=\"personaTipoIdentificacion\" placeholder=\"Seleccione\">\r\n                    <ion-select-option value=\"1\">CC</ion-select-option>\r\n                    <ion-select-option value=\"2\">NIT</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n            <div class=\"validation-errors\">\r\n              <ng-container *ngFor=\"let validation of\r\n                validation_messages.personaTipoIdentificacion\">\r\n                <ion-text color=\"danger\" style=\"display:block;float: none;\r\n                  width: 100%\" class=\"error-message\"\r\n                  *ngIf=\"form_persona_entrega.get('personaTipoIdentificacion').hasError(validation.type)\r\n                  && (form_persona_entrega.get('personaTipoIdentificacion').dirty ||\r\n                  form_persona_entrega.get('personaTipoIdentificacion').touched)\">\r\n                  <ion-icon name=\"information-circle-outline\"></ion-icon> {{\r\n                  validation.message }}\r\n                </ion-text>\r\n              </ng-container>\r\n            </div>\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"primary\">Identificación</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"personaIdentificacion\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of\r\n              validation_messages.personaIdentificacion\">\r\n              <ion-text color=\"danger\" style=\"display:block;float: none;\r\n                width: 100%\" class=\"error-message\"\r\n                *ngIf=\"form_persona_entrega.get('personaIdentificacion').hasError(validation.type)\r\n                && (form_persona_entrega.get('personaIdentificacion').dirty ||\r\n                form_persona_entrega.get('personaIdentificacion').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{\r\n                validation.message }}\r\n              </ion-text>\r\n            </ng-container>\r\n          </div>\r\n            <ion-button color=\"primary\" style=\"margin-top: 50px;\"\r\n              class=\"submit-btn\"expand=\"full\" type=\"submit\"\r\n              [disabled]=\"!form_persona_entrega.valid\">Buscar</ion-button>\r\n          </form>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  \r\n    <ion-grid  *ngIf=\"registrarPersona\" >\r\n      <ion-row >\r\n        <ion-col size=\"12\" >\r\n          <strong>Datos Persona </strong>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row >\r\n        <ion-col size=\"12\"  class=\"text-center\">\r\n          <form [formGroup]=\"form_registrar_persona_entrega\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"primary\">Nombres</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"personaNombres\"></ion-input>\r\n          </ion-item>\r\n         <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of\r\n              validation_messages.personaNombres\">\r\n              <ion-text color=\"danger\" style=\"display:block;float: none;\r\n                width: 100%\" class=\"error-message\"\r\n                *ngIf=\"form_registrar_persona_entrega.get('personaNombres').hasError(validation.type)\r\n                && (form_registrar_persona_entrega.get('personaNombres').dirty ||\r\n                form_registrar_persona_entrega.get('personaNombres').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{\r\n                validation.message }}\r\n              </ion-text>\r\n            </ng-container>\r\n          </div> \r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"primary\">Apellidos</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"personaApellidos\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of\r\n              validation_messages.personaApellidos\">\r\n              <ion-text color=\"danger\" style=\"display:block;float: none;\r\n                width: 100%\" class=\"error-message\"\r\n                *ngIf=\"form_registrar_persona_entrega.get('personaApellidos').hasError(validation.type)\r\n                && (form_registrar_persona_entrega.get('personaApellidos').dirty ||\r\n                form_registrar_persona_entrega.get('personaApellidos').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{\r\n                validation.message }}\r\n              </ion-text>\r\n            </ng-container>\r\n          </div> \r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"primary\">Numero celular</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"personaCelular\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of\r\n              validation_messages.personaCelular\">\r\n              <ion-text color=\"danger\" style=\"display:block;float: none;\r\n                width: 100%\" class=\"error-message\"\r\n                *ngIf=\"form_registrar_persona_entrega.get('personaCelular').hasError(validation.type)\r\n                && (form_registrar_persona_entrega.get('personaCelular').dirty ||\r\n                form_registrar_persona_entrega.get('personaCelular').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{\r\n                validation.message }}\r\n              </ion-text>\r\n            </ng-container>\r\n          </div> \r\n  \r\n          <ion-item>\r\n            <ion-label position=\"floating\" color=\"primary\">Correo electronico</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"personaCorreoElectronico\"></ion-input>\r\n          </ion-item>\r\n          <div class=\"validation-errors\">\r\n            <ng-container *ngFor=\"let validation of\r\n              validation_messages.personaCorreoElectronico\">\r\n              <ion-text color=\"danger\" style=\"display:block;float: none;\r\n                width: 100%\" class=\"error-message\"\r\n                *ngIf=\"form_registrar_persona_entrega.get('personaCorreoElectronico').hasError(validation.type)\r\n                && (form_registrar_persona_entrega.get('personaCorreoElectronico').dirty ||\r\n                form_registrar_persona_entrega.get('personaCorreoElectronico').touched)\">\r\n                <ion-icon name=\"information-circle-outline\"></ion-icon> {{\r\n                validation.message }}\r\n              </ion-text>\r\n            </ng-container>\r\n          </div> \r\n          </form>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n   \r\n    <ion-grid *ngIf=\"formularioCompleto\">\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <p>Firma</p>\r\n          <app-firma (firmaBase64Event)=\"firmaBase64Event($event)\"></app-firma>\r\n        </ion-col>\r\n        <!-- <ion-col size=\"12\">\r\n          <img src=\"{{firmaBase64}}\" />\r\n        </ion-col> -->\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-label>Nos autoriza para utilizar su firma en los procesos necesarios del servicio.</ion-label>\r\n              <ion-checkbox slot=\"start\" color=\"success\" [(ngModel)]=\"permisosFirma\" (ionChange)=\"permisoFirma()\"></ion-checkbox>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row style=\"margin-bottom: 20%;\">\r\n        <ion-col size=\"12\">\r\n          <ion-button (click)=\"entregar()\" [disabled]=\"!form_registrar_persona_entrega.valid\" expand=\"block\"  shape=\"round\" color=\"success\" >\r\n             Entregar\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ng-container>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/paginasInternas/entrega-oxigem/entrega-oxigem-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/paginasInternas/entrega-oxigem/entrega-oxigem-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: EntregaOxigemPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregaOxigemPageRoutingModule", function() { return EntregaOxigemPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _entrega_oxigem_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entrega-oxigem.page */ "./src/app/paginasInternas/entrega-oxigem/entrega-oxigem.page.ts");




const routes = [
    {
        path: '',
        component: _entrega_oxigem_page__WEBPACK_IMPORTED_MODULE_3__["EntregaOxigemPage"]
    }
];
let EntregaOxigemPageRoutingModule = class EntregaOxigemPageRoutingModule {
};
EntregaOxigemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EntregaOxigemPageRoutingModule);



/***/ }),

/***/ "./src/app/paginasInternas/entrega-oxigem/entrega-oxigem.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/paginasInternas/entrega-oxigem/entrega-oxigem.module.ts ***!
  \*************************************************************************/
/*! exports provided: EntregaOxigemPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregaOxigemPageModule", function() { return EntregaOxigemPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _entrega_oxigem_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entrega-oxigem-routing.module */ "./src/app/paginasInternas/entrega-oxigem/entrega-oxigem-routing.module.ts");
/* harmony import */ var _entrega_oxigem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entrega-oxigem.page */ "./src/app/paginasInternas/entrega-oxigem/entrega-oxigem.page.ts");
/* harmony import */ var src_app_shareds_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shareds/shared.module */ "./src/app/shareds/shared.module.ts");








let EntregaOxigemPageModule = class EntregaOxigemPageModule {
};
EntregaOxigemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _entrega_oxigem_routing_module__WEBPACK_IMPORTED_MODULE_5__["EntregaOxigemPageRoutingModule"],
            src_app_shareds_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_entrega_oxigem_page__WEBPACK_IMPORTED_MODULE_6__["EntregaOxigemPage"]]
    })
], EntregaOxigemPageModule);



/***/ }),

/***/ "./src/app/paginasInternas/entrega-oxigem/entrega-oxigem.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/paginasInternas/entrega-oxigem/entrega-oxigem.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXNJbnRlcm5hcy9lbnRyZWdhLW94aWdlbS9lbnRyZWdhLW94aWdlbS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/paginasInternas/entrega-oxigem/entrega-oxigem.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/paginasInternas/entrega-oxigem/entrega-oxigem.page.ts ***!
  \***********************************************************************/
/*! exports provided: EntregaOxigemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntregaOxigemPage", function() { return EntregaOxigemPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/base.service */ "./src/app/service/base.service.ts");
/* harmony import */ var src_app_service_datos_equipos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/datos-equipos.service */ "./src/app/service/datos-equipos.service.ts");
/* harmony import */ var src_app_service_sweetalert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/sweetalert.service */ "./src/app/service/sweetalert.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var src_app_service_datos_servicio_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/datos-servicio.service */ "./src/app/service/datos-servicio.service.ts");










let EntregaOxigemPage = class EntregaOxigemPage {
    constructor(DatosServicioService, AuthService, formBuilder, DatosEquiposService, Router, BaseService, Sweetalert, ActivatedRoute) {
        this.DatosServicioService = DatosServicioService;
        this.AuthService = AuthService;
        this.formBuilder = formBuilder;
        this.DatosEquiposService = DatosEquiposService;
        this.Router = Router;
        this.BaseService = BaseService;
        this.Sweetalert = Sweetalert;
        this.ActivatedRoute = ActivatedRoute;
        this.codigo = "xxxx";
        this.coordenadas = { lat: 0, lng: 0 };
        this.registrarPersona = false;
        this.formularioCompleto = false;
        this.personaId = "";
        this.permisosFirma = false;
        this.validation_messages = {
            'personaTipoIdentificacion': [
                { type: 'required', message: 'Tipo de identificación es requerido.' }
            ],
            'personaIdentificacion': [
                { type: 'required', message: 'Identificación es requerida.' }
            ],
            'personaNombres': [
                { type: 'required', message: 'Nombres es requerida.' }
            ],
            'personaApellidos': [
                { type: 'required', message: 'Apellidos es requerida.' }
            ],
            'personaCelular': [
                { type: 'required', message: 'Celular es requerida.' }
            ],
            'personaCorreoElectronico': [
                { type: 'required', message: 'Correo es requerida.' }
            ]
        };
    }
    ngOnInit() {
        this.equipos = this.DatosEquiposService.getEquipos();
        if (this.equipos.length) {
            if (this.equipos[0].otrosPendientes) {
                this.equipos[0].otrosPendientes.forEach(equipo => {
                    this.equipos.push(equipo);
                });
            }
            console.log("ingresando a recoger");
            console.log(this.equipos);
        }
        else {
            this.Sweetalert.notificacion("info", "Datos Insuficientes.");
            this.Router.navigateByUrl("menu-principal");
        }
        this.form_persona_entrega = this.formBuilder.group({
            personaTipoIdentificacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            personaIdentificacion: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
        this.form_registrar_persona_entrega = this.formBuilder.group({
            personaNombres: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            personaApellidos: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            personaCelular: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            personaCorreoElectronico: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
        _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].Geolocation.getCurrentPosition().then(result => {
            console.log(result);
            this.coordenadas.lat = result.coords.latitude;
            this.coordenadas.lng = result.coords.longitude;
        });
        /* this.takePicture(); */
        this.form_persona_entrega.get("personaIdentificacion").valueChanges.subscribe(x => {
            this.registrarPersona = false;
            this.formularioCompleto = false;
        });
    }
    irRuta(ruta) {
        this.Router.navigateByUrl(ruta);
    }
    buscarPersona(value) {
        this.registrarPersona = false;
        this.formularioCompleto = false;
        let loading = this.BaseService.presentLoading();
        this.BaseService.postJson('personas', 'directorio', "validarExistenciaPersonaApi", value).subscribe(res => {
            console.log(res);
            if (res.RESPUESTA == "EXITO") {
                this.formularioCompleto = true;
                this.registrarPersona = true;
                this.personaId = res.DATOS.personaId;
                this.form_registrar_persona_entrega.controls['personaNombres'].setValue(res.DATOS.personaNombres);
                this.form_registrar_persona_entrega.controls['personaApellidos'].setValue(res.DATOS.personaApellidos);
                this.form_registrar_persona_entrega.controls['personaCelular'].setValue(res.DATOS.personaCelular);
                this.form_registrar_persona_entrega.controls['personaCorreoElectronico'].setValue(res.DATOS.personaCorreoElectronico);
            }
            else if (res.RESPUESTA == "INFO") {
                this.formularioCompleto = true;
                this.registrarPersona = true;
                this.personaId = "";
                this.form_registrar_persona_entrega.controls['personaNombres'].setValue("");
                this.form_registrar_persona_entrega.controls['personaApellidos'].setValue("");
                this.form_registrar_persona_entrega.controls['personaCelular'].setValue("");
                this.form_registrar_persona_entrega.controls['personaCorreoElectronico'].setValue("");
            }
            else {
                this.Sweetalert.modal("error", res.MENSAJE);
                this.personaId = "";
            }
            loading.then(e => {
                e.dismiss();
            });
        });
    }
    takePicture() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let image = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"].CameraResultType.Uri
            });
            /*  alert("ok"); */
            let imageUrl = image.webPath;
            console.log(image);
        });
    }
    entregar() {
        if (this.permisosFirma && this.firmaBase64 && this.equipos.length > 0) {
            let persona = Object.assign(this.form_registrar_persona_entrega.value, this.form_persona_entrega.value);
            persona.personaId = this.personaId;
            let reciboID = this.equipos[0].reciboId;
            let equiposID = this.equipos.map(res => { return { equipoID: res.equipoId, clienteID: res.clienteId, clientePersona: res.clientePersona, estadoEntregaEquipo: res.estadoEntregaEquipo, reciboReferencia: res.reciboReferencia }; });
            let datos = {
                reciboID: reciboID,
                firmaBase64: this.firmaBase64,
                coordenadas: this.coordenadas,
                equipos: equiposID,
                persona: persona
            };
            console.log(datos);
            let loading = this.BaseService.presentLoading();
            this.BaseService.postJson('repartidores', 'entregarEquipos', "registrarEntregaEquiposPorRecibo", datos).subscribe(res => {
                console.log(res);
                if (res.RESPUESTA = "EXITO") {
                    this.DatosEquiposService.deleteEquipos();
                    this.Sweetalert.notificacion("success", "Recolección exitosa");
                    this.DatosServicioService.setRecibosServico(res.DATOS);
                    this.Router.navigateByUrl("recibos-servicios");
                }
                else {
                    this.Sweetalert.modal("error", res.MENSAJE);
                }
                loading.then(e => {
                    e.dismiss();
                });
            });
        }
        else {
            this.Sweetalert.modal("info", "Datos insuficientes para la operación.");
        }
    }
    firmaBase64Event($event) {
        this.firmaBase64 = $event;
    }
    permisoFirma() {
        console.log(this.permisosFirma);
    }
};
EntregaOxigemPage.ctorParameters = () => [
    { type: src_app_service_datos_servicio_service__WEBPACK_IMPORTED_MODULE_9__["DatosServicioService"] },
    { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_datos_equipos_service__WEBPACK_IMPORTED_MODULE_5__["DatosEquiposService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_service_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseService"] },
    { type: src_app_service_sweetalert_service__WEBPACK_IMPORTED_MODULE_6__["SweetalertService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EntregaOxigemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-entrega-oxigem',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./entrega-oxigem.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/paginasInternas/entrega-oxigem/entrega-oxigem.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./entrega-oxigem.page.scss */ "./src/app/paginasInternas/entrega-oxigem/entrega-oxigem.page.scss")).default]
    })
], EntregaOxigemPage);



/***/ })

}]);
//# sourceMappingURL=paginasInternas-entrega-oxigem-entrega-oxigem-module-es2015.js.map