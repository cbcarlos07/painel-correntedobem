(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contato-dados-dados-router"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contato-dados/contato-dados.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contato-dados/contato-dados.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n        \n    <div class=\"col-md-12\">\n        \n        <form [formGroup]=\"formCad\" (ngSubmit)=\"submit()\">\n\n            <div class=\"box\">\n                <div class=\"box-header with-border\">\n                    <h3 class=\"box-title\">{{ title }}</h3>\n                </div>\n\n                <div class=\"box-body\">\n                    <div class=\"col-md-6\">\n\n                        <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                            <label for=\"minimo\">Email</label>\n                            <input  type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"email@email.com\" >\n                        </app-input>\n\n                        <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                            <label for=\"minimo\">Telefone</label>\n                            <input class=\"form-control\" formControlName=\"telefone\" placeholder=\"92 9999-9999\" >\n                        </app-input> \n    \n                        <app-input [showTip]=\"false\">\n                            <label for=\"observacao\">Endereço</label>\n                            <textarea class=\"form-control\" formControlName=\"endereco\" rows=\"5\"></textarea>\n                        </app-input>\n    \n                        \n    \n    \n                                          \n\n                    </div>\n\n                </div>\n\n                <div class=\"box-footer clearfix\">\n                    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"formCad.invalid\"> <i class=\"fa fa-save\"></i> Salvar</button>\n                </div>\n\n\n            </div>\n        </form>    \n\n    </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/pages/contato-dados/contato-dados.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/contato-dados/contato-dados.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhdG8tZGFkb3MvY29udGF0by1kYWRvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/contato-dados/contato-dados.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/contato-dados/contato-dados.component.ts ***!
  \****************************************************************/
/*! exports provided: ContatoDadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContatoDadosComponent", function() { return ContatoDadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_dados_contato_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/dados-contato.service */ "./src/app/service/dados-contato.service.ts");
/* harmony import */ var src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/notification.service */ "./src/app/service/notification.service.ts");





var ContatoDadosComponent = /** @class */ (function () {
    function ContatoDadosComponent(_contatoService, _notificationService) {
        this._contatoService = _contatoService;
        this._notificationService = _notificationService;
    }
    ContatoDadosComponent.prototype.ngOnInit = function () {
        this.formCad = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            telefone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            endereco: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
        });
        this.get();
    };
    ContatoDadosComponent.prototype.get = function () {
        var _this = this;
        this._contatoService
            .get()
            .subscribe(function (response) {
            _this.id = 0;
            _this.title = 'Cadastrar Contato';
            if (response.length) {
                var dados = response[0];
                _this.title = 'Editar dados de contato';
                _this.id = dados.id;
                _this.formCad.controls.email.setValue(dados.email);
                _this.formCad.controls.telefone.setValue(dados.telefone);
                _this.formCad.controls.endereco.setValue(dados.endereco.replace('<br />', '\n'));
            }
        });
    };
    ContatoDadosComponent.prototype.submit = function () {
        this.formCad.value.endereco = this.formCad.value.endereco.replace(/\r?\n/g, '<br />');
        if (this.id == 0)
            this.novo();
        else
            this.update();
    };
    ContatoDadosComponent.prototype.novo = function () {
        var _this = this;
        this._contatoService
            .save(this.formCad.value)
            .subscribe(function (response) {
            _this.title = 'Editar dados de contato';
            _this.id = response.insertId;
            _this.alerta();
        });
    };
    ContatoDadosComponent.prototype.update = function () {
        var _this = this;
        this._contatoService
            .update(this.id, this.formCad.value)
            .subscribe(function (response) {
            _this.alerta();
        });
    };
    ContatoDadosComponent.prototype.alerta = function () {
        var obj = {
            message: 'Item salvo com sucesso!',
            status: true
        };
        this._notificationService.notify(obj);
    };
    ContatoDadosComponent.ctorParameters = function () { return [
        { type: src_app_service_dados_contato_service__WEBPACK_IMPORTED_MODULE_3__["DadosContatoService"] },
        { type: src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
    ]; };
    ContatoDadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contato-dados',
            template: __webpack_require__(/*! raw-loader!./contato-dados.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contato-dados/contato-dados.component.html"),
            styles: [__webpack_require__(/*! ./contato-dados.component.css */ "./src/app/pages/contato-dados/contato-dados.component.css")]
        })
    ], ContatoDadosComponent);
    return ContatoDadosComponent;
}());



/***/ }),

/***/ "./src/app/pages/contato-dados/dados.router.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/contato-dados/dados.router.ts ***!
  \*****************************************************/
/*! exports provided: DadosRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosRoutes", function() { return DadosRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _contato_dados_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contato-dados.component */ "./src/app/pages/contato-dados/contato-dados.component.ts");





var ROUTES = [
    { path: '', component: _contato_dados_component__WEBPACK_IMPORTED_MODULE_4__["ContatoDadosComponent"] }
];
var DadosRoutes = /** @class */ (function () {
    function DadosRoutes() {
    }
    DadosRoutes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_contato_dados_component__WEBPACK_IMPORTED_MODULE_4__["ContatoDadosComponent"]],
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)]
        })
    ], DadosRoutes);
    return DadosRoutes;
}());



/***/ }),

/***/ "./src/app/service/dados-contato.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/dados-contato.service.ts ***!
  \**************************************************/
/*! exports provided: DadosContatoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosContatoService", function() { return DadosContatoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var DadosContatoService = /** @class */ (function () {
    function DadosContatoService(_http) {
        this._http = _http;
        this.webService = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/contato";
    }
    DadosContatoService.prototype.save = function (data) {
        return this._http.post(this.webService, data);
    };
    DadosContatoService.prototype.get = function () {
        return this._http.get(this.webService);
    };
    DadosContatoService.prototype.update = function (id, obj) {
        return this._http.put(this.webService + "/" + id, obj);
    };
    DadosContatoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    DadosContatoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], DadosContatoService);
    return DadosContatoService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-contato-dados-dados-router-es5.js.map