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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_service_meta_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/meta-data.service */ "./src/app/service/meta-data.service.ts");
/* harmony import */ var src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/notification.service */ "./src/app/service/notification.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let MetaComponent = class MetaComponent {
    constructor(_metaService, _notificationService) {
        this._metaService = _metaService;
        this._notificationService = _notificationService;
        this.id = 0;
    }
    ngOnInit() {
        this.formCad = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            logo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.get();
    }
    fileChangeEventLogo(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var files = event.target.files;
            var file = files[0];
            if (files && file) {
                let retorno = yield this.convertToBa64(file);
                this.imgLogo = `data:image/png;base64,${retorno}`;
            }
        });
    }
    fileChangeEventImg(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var files = event.target.files;
            var file = files[0];
            if (files && file) {
                let retorno = yield this.convertToBa64(file);
                this.imgImage = `data:image/png;base64,${retorno}`;
            }
        });
    }
    convertToBa64(file) {
        return new Promise((resolve, reject) => {
            var reader = new FileReader();
            reader.onload = (event) => {
                const binaryString = event.target.result;
                let base64 = btoa(binaryString);
                resolve(base64);
            };
            reader.readAsBinaryString(file);
        });
    }
    submit() {
        console.log('submit', this.id);
        if (this.id == 0) {
            this.novo();
        }
        else {
            this.edit();
        }
    }
    novo() {
        let obj = {
            description: this.formCad.value.description
        };
        if (this.imgLogo)
            obj.logo = this.imgLogo;
        if (this.imgImage)
            obj.image = this.imgImage;
        this._metaService
            .save(obj)
            .subscribe((response) => {
            console.log('response', response);
            this.id = response.insertId;
            let obj = {
                message: 'Item salvo com sucesso',
                status: true
            };
            this._notificationService.notify(obj);
        });
    }
    edit() {
        let obj = {
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
            .subscribe((response) => {
            console.log('update', response);
            let obj = {
                message: 'Item salvo com sucesso',
                status: true
            };
            this._notificationService.notify(obj);
        });
    }
    get() {
        this._metaService
            .getAll()
            .subscribe((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (response.length > 0) {
                this.title = 'Editar texto da meta';
                let dados = response[0];
                this.id = dados.id;
                let host = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].host;
                if (dados.logo) {
                    this.imgLogo = `${host}/foto/${dados.logo}`;
                }
                if (dados.image) {
                    this.imgImage = `${host}/foto/${dados.image}`;
                }
                this.formCad.controls.description.setValue(dados.description);
            }
        }));
    }
};
MetaComponent.ctorParameters = () => [
    { type: src_app_service_meta_data_service__WEBPACK_IMPORTED_MODULE_3__["MetaDataService"] },
    { type: src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
];
MetaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-meta',
        template: __webpack_require__(/*! raw-loader!./meta.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/meta-dados/meta.component.html"),
        styles: [__webpack_require__(/*! ./meta.component.css */ "./src/app/pages/meta-dados/meta.component.css")]
    })
], MetaComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _meta_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meta.component */ "./src/app/pages/meta-dados/meta.component.ts");





const ROUTES = [
    { path: '', component: _meta_component__WEBPACK_IMPORTED_MODULE_4__["MetaComponent"] }
];
let MetaRoutes = class MetaRoutes {
};
MetaRoutes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_meta_component__WEBPACK_IMPORTED_MODULE_4__["MetaComponent"]],
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)]
    })
], MetaRoutes);



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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let MetaDataService = class MetaDataService {
    constructor(_http) {
        this._http = _http;
        this.webService = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api}/meta`;
    }
    save(data) {
        return this._http.post(this.webService, data);
    }
    getAll() {
        return this._http.get(this.webService);
    }
    update(id, obj) {
        return this._http.put(`${this.webService}/${id}`, obj);
    }
};
MetaDataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MetaDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], MetaDataService);



/***/ })

}]);
//# sourceMappingURL=pages-meta-dados-meta-router-es2015.js.map