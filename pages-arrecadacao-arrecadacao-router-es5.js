(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-arrecadacao-arrecadacao-router"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/arrecadacao/arrecadacao.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/arrecadacao/arrecadacao.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n        \n    <div class=\"col-md-12\">\n        \n        <form [formGroup]=\"formCad\" (ngSubmit)=\"submit()\">\n\n            <div class=\"box\">\n                <div class=\"box-header with-border\">\n                    <h3 class=\"box-title\">{{ title }}</h3>\n                </div>\n\n                <div class=\"box-body\">\n                    <div class=\"col-md-6\">\n    \n                        <app-input [showTip]=\"false\">\n                            <label for=\"observacao\">Descrição</label>\n                            <textarea class=\"form-control\" formControlName=\"description\" rows=\"10\"></textarea>\n                        </app-input>\n    \n                        <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                            <label for=\"minimo\">Valor Arrecadado</label>\n                            <input  currencyMask class=\"form-control\" formControlName=\"value\" placeholder=\"0,00\" [options]=\"options\">\n                        </app-input>\n    \n    \n                        <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                            <label for=\"minimo\">Despesa</label>\n                            <input currencyMask class=\"form-control\" formControlName=\"spent\" placeholder=\"0,00\" [options]=\"options\">\n                        </app-input>                   \n\n                    </div>\n\n                </div>\n\n                <div class=\"box-footer clearfix\">\n                    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"formCad.invalid\"> <i class=\"fa fa-save\"></i> Salvar</button>\n                </div>\n\n\n            </div>\n        </form>    \n\n    </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/pages/arrecadacao/arrecadacao.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/arrecadacao/arrecadacao.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FycmVjYWRhY2FvL2FycmVjYWRhY2FvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/arrecadacao/arrecadacao.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/arrecadacao/arrecadacao.component.ts ***!
  \************************************************************/
/*! exports provided: ArrecadacaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrecadacaoComponent", function() { return ArrecadacaoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_arrecadacao_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/arrecadacao.service */ "./src/app/service/arrecadacao.service.ts");
/* harmony import */ var src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/notification.service */ "./src/app/service/notification.service.ts");





var ArrecadacaoComponent = /** @class */ (function () {
    function ArrecadacaoComponent(_notificationService, _arrecadacaoService) {
        this._notificationService = _notificationService;
        this._arrecadacaoService = _arrecadacaoService;
        this.id = 0;
        this.options = { prefix: 'R$ ', thousands: '.', decimal: ',' };
    }
    ArrecadacaoComponent.prototype.ngOnInit = function () {
        this.formCad = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            value: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            spent: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.get();
    };
    ArrecadacaoComponent.prototype.submit = function () {
        if (this.id == 0) {
            this.novo();
        }
        else {
            this.update();
        }
    };
    ArrecadacaoComponent.prototype.update = function () {
        var _this = this;
        this._arrecadacaoService
            .update(this.id, this.formCad.value)
            .subscribe(function (response) {
            var obj = {
                message: 'Item salvo com sucesso',
                status: true
            };
            _this._notificationService.notify(obj);
        });
    };
    ArrecadacaoComponent.prototype.novo = function () {
        var _this = this;
        this._arrecadacaoService
            .save(this.formCad.value)
            .subscribe(function (response) {
            _this.id = response.insertId;
            _this.title = 'Editar dados de Transparência';
            var obj = {
                message: 'Item salvo com sucesso',
                status: true
            };
            _this._notificationService.notify(obj);
        });
    };
    ArrecadacaoComponent.prototype.get = function () {
        var _this = this;
        this._arrecadacaoService
            .get()
            .subscribe(function (response) {
            _this.title = 'Cadastrar dados de Transparência';
            if (response.length > 0) {
                var dados = response[0];
                _this.id = response[0].id;
                _this.title = 'Editar dados de Transparência';
                _this.formCad.controls.description.setValue(dados.description);
                _this.formCad.controls.value.setValue(dados.value);
                _this.formCad.controls.spent.setValue(dados.spent);
            }
        });
    };
    ArrecadacaoComponent.ctorParameters = function () { return [
        { type: src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] },
        { type: src_app_service_arrecadacao_service__WEBPACK_IMPORTED_MODULE_3__["ArrecadacaoService"] }
    ]; };
    ArrecadacaoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-arrecadacao',
            template: __webpack_require__(/*! raw-loader!./arrecadacao.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/arrecadacao/arrecadacao.component.html"),
            styles: [__webpack_require__(/*! ./arrecadacao.component.css */ "./src/app/pages/arrecadacao/arrecadacao.component.css")]
        })
    ], ArrecadacaoComponent);
    return ArrecadacaoComponent;
}());



/***/ }),

/***/ "./src/app/pages/arrecadacao/arrecadacao.router.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/arrecadacao/arrecadacao.router.ts ***!
  \*********************************************************/
/*! exports provided: ArrecadacaoRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrecadacaoRoutes", function() { return ArrecadacaoRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _arrecadacao_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./arrecadacao.component */ "./src/app/pages/arrecadacao/arrecadacao.component.ts");





var ROUTES = [
    { path: '', component: _arrecadacao_component__WEBPACK_IMPORTED_MODULE_4__["ArrecadacaoComponent"] }
];
var ArrecadacaoRoutes = /** @class */ (function () {
    function ArrecadacaoRoutes() {
    }
    ArrecadacaoRoutes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_arrecadacao_component__WEBPACK_IMPORTED_MODULE_4__["ArrecadacaoComponent"]],
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)]
        })
    ], ArrecadacaoRoutes);
    return ArrecadacaoRoutes;
}());



/***/ }),

/***/ "./src/app/service/arrecadacao.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/arrecadacao.service.ts ***!
  \************************************************/
/*! exports provided: ArrecadacaoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrecadacaoService", function() { return ArrecadacaoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ArrecadacaoService = /** @class */ (function () {
    function ArrecadacaoService(_http) {
        this._http = _http;
        this.webService = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/arrecadacao";
    }
    ArrecadacaoService.prototype.get = function () {
        return this._http.get(this.webService);
    };
    ArrecadacaoService.prototype.save = function (data) {
        return this._http.post(this.webService, data);
    };
    ArrecadacaoService.prototype.update = function (id, data) {
        return this._http.put(this.webService + "/" + id, data);
    };
    ArrecadacaoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ArrecadacaoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], ArrecadacaoService);
    return ArrecadacaoService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-arrecadacao-arrecadacao-router-es5.js.map