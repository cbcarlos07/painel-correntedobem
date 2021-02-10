(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-meta-dados-meta-router"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/meta-dados/meta.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/meta-dados/meta.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n        \n    <div class=\"col-md-12\">\n        \n        <form [formGroup]=\"formCad\" (ngSubmit)=\"submit()\">\n\n            <div class=\"box\">\n                <div class=\"box-header with-border\">\n                    <h3 class=\"box-title\">{{ title }}</h3>\n                </div>\n\n                <div class=\"box-body\">\n\n                    <app-input [showTip]=\"false\">\n                        <label for=\"observacao\">Descrição</label>\n                        <textarea class=\"form-control\" formControlName=\"description\" rows=\"10\"></textarea>\n                    </app-input>\n                    \n\n                    \n\n                    <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                        <label for=\"minimo\">Logo</label>\n                        <input type=\"file\"  formControlName=\"logo\" (change)=\"fileChangeEventLogo($event)\" accept=\"image/x-png,image/gif,image/jpeg\">\n                    </app-input>\n\n                    <div class=\"col-md-12\">\n                        <img [src]=\"imgLogo\" *ngIf=\"imgLogo\" width=\"250\">\n                    </div>\n                \n\n                    <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                        <label for=\"minimo\">Imagem</label>\n                        <input type=\"file\"  formControlName=\"image\" (change)=\"fileChangeEventImg($event)\" accept=\"image/x-png,image/gif,image/jpeg\">\n                    </app-input>\n\n                    <div class=\"col-md-12\">\n                        <img [src]=\"imgImage\" *ngIf=\"imgImage\" width=\"250\">\n                    </div>\n\n\n                   \n\n                </div>\n\n                <div class=\"box-footer clearfix\">\n                    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"formCad.invalid\"> <i class=\"fa fa-save\"></i> Salvar</button>\n                </div>\n\n\n            </div>\n        </form>    \n\n    </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/pages/meta-dados/meta.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/meta-dados/meta.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21ldGEtZGFkb3MvbWV0YS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/meta-dados/meta.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/meta-dados/meta.component.ts ***!
  \****************************************************/
/*! exports provided: MetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaComponent", function() { return MetaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_service_meta_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/meta-data.service */ "./src/app/service/meta-data.service.ts");
/* harmony import */ var src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/notification.service */ "./src/app/service/notification.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






var MetaComponent = /** @class */ (function () {
    function MetaComponent(_metaService, _notificationService) {
        this._metaService = _metaService;
        this._notificationService = _notificationService;
        this.id = 0;
    }
    MetaComponent.prototype.ngOnInit = function () {
        this.formCad = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            logo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.get();
    };
    MetaComponent.prototype.fileChangeEventLogo = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var files, file, retorno;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        files = event.target.files;
                        file = files[0];
                        if (!(files && file)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.convertToBa64(file)];
                    case 1:
                        retorno = _a.sent();
                        this.imgLogo = "data:image/png;base64," + retorno;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MetaComponent.prototype.fileChangeEventImg = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var files, file, retorno;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        files = event.target.files;
                        file = files[0];
                        if (!(files && file)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.convertToBa64(file)];
                    case 1:
                        retorno = _a.sent();
                        this.imgImage = "data:image/png;base64," + retorno;
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    MetaComponent.prototype.convertToBa64 = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var binaryString = event.target.result;
                var base64 = btoa(binaryString);
                resolve(base64);
            };
            reader.readAsBinaryString(file);
        });
    };
    MetaComponent.prototype.submit = function () {
        console.log('submit', this.id);
        if (this.id == 0) {
            this.novo();
        }
        else {
            this.edit();
        }
    };
    MetaComponent.prototype.novo = function () {
        var _this = this;
        var obj = {
            description: this.formCad.value.description
        };
        if (this.imgLogo)
            obj.logo = this.imgLogo;
        if (this.imgImage)
            obj.image = this.imgImage;
        this._metaService
            .save(obj)
            .subscribe(function (response) {
            console.log('response', response);
            _this.id = response.insertId;
            var obj = {
                message: 'Item salvo com sucesso',
                status: true
            };
            _this._notificationService.notify(obj);
        });
    };
    MetaComponent.prototype.edit = function () {
        var _this = this;
        var obj = {
            description: this.formCad.value.description
        };
        if (this.imgLogo) {
            if (!this.imgLogo.includes('http')) {
                obj.logo = this.imgLogo;
            }
        }
        if (this.imgImage) {
            if (!this.imgImage.includes('http')) {
                obj.image = this.imgImage;
            }
        }
        this._metaService
            .update(this.id, obj)
            .subscribe(function (response) {
            console.log('update', response);
            var obj = {
                message: 'Item salvo com sucesso',
                status: true
            };
            _this._notificationService.notify(obj);
        });
    };
    MetaComponent.prototype.get = function () {
        var _this = this;
        this._metaService
            .getAll()
            .subscribe(function (response) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var dados, host;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (response.length > 0) {
                    this.title = 'Editar texto da meta';
                    dados = response[0];
                    this.id = dados.id;
                    host = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].host;
                    if (dados.logo) {
                        this.imgLogo = host + "/foto/" + dados.logo;
                    }
                    if (dados.image) {
                        this.imgImage = host + "/foto/" + dados.image;
                    }
                    this.formCad.controls.description.setValue(dados.description);
                }
                return [2 /*return*/];
            });
        }); });
    };
    MetaComponent.ctorParameters = function () { return [
        { type: src_app_service_meta_data_service__WEBPACK_IMPORTED_MODULE_3__["MetaDataService"] },
        { type: src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
    ]; };
    MetaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-meta',
            template: __webpack_require__(/*! raw-loader!./meta.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/meta-dados/meta.component.html"),
            styles: [__webpack_require__(/*! ./meta.component.css */ "./src/app/pages/meta-dados/meta.component.css")]
        })
    ], MetaComponent);
    return MetaComponent;
}());



/***/ }),

/***/ "./src/app/pages/meta-dados/meta.router.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/meta-dados/meta.router.ts ***!
  \*************************************************/
/*! exports provided: MetaRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaRoutes", function() { return MetaRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _meta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meta.component */ "./src/app/pages/meta-dados/meta.component.ts");





var ROUTES = [
    { path: '', component: _meta_component__WEBPACK_IMPORTED_MODULE_4__["MetaComponent"] }
];
var MetaRoutes = /** @class */ (function () {
    function MetaRoutes() {
    }
    MetaRoutes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_meta_component__WEBPACK_IMPORTED_MODULE_4__["MetaComponent"]],
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)]
        })
    ], MetaRoutes);
    return MetaRoutes;
}());



/***/ }),

/***/ "./src/app/service/meta-data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/meta-data.service.ts ***!
  \**********************************************/
/*! exports provided: MetaDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaDataService", function() { return MetaDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var MetaDataService = /** @class */ (function () {
    function MetaDataService(_http) {
        this._http = _http;
        this.webService = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api + "/meta";
    }
    MetaDataService.prototype.save = function (data) {
        return this._http.post(this.webService, data);
    };
    MetaDataService.prototype.getAll = function () {
        return this._http.get(this.webService);
    };
    MetaDataService.prototype.update = function (id, obj) {
        return this._http.put(this.webService + "/" + id, obj);
    };
    MetaDataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    MetaDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], MetaDataService);
    return MetaDataService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-meta-dados-meta-router-es5.js.map