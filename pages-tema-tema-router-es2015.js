(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tema-tema-router"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/tema/tema.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/tema/tema.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n        \n    <div class=\"col-md-12\">\n        \n        <form [formGroup]=\"formCad\" (ngSubmit)=\"submit()\">\n\n            <div class=\"box\">\n                <div class=\"box-header with-border\">\n                    <h3 class=\"box-title\">{{ title }}</h3>\n                </div>\n\n                <div class=\"box-body\">\n\n                    <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                        <label for=\"minimo\">Tema</label>\n                        <input formControlName=\"tema\" class=\"form-control\">\n                    </app-input>\n\n                    <app-input [showTip]=\"false\">\n                        <label for=\"observacao\">Descrição</label>\n                        <textarea class=\"form-control\" formControlName=\"description\" rows=\"10\"></textarea>\n                    </app-input>\n                    \n\n                    \n\n                    <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                        <label for=\"minimo\">Logo</label>\n                        <input type=\"file\"  formControlName=\"img\" (change)=\"fileChangeEventLogo($event)\" accept=\"image/x-png,image/gif,image/jpeg\">\n                    </app-input>\n\n                    <div class=\"col-md-12\">\n                        <img [src]=\"imgLogo\" *ngIf=\"imgLogo\" width=\"250\">\n                    </div>\n                \n\n                </div>\n\n                <div class=\"box-footer clearfix\">\n                    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"formCad.invalid\"> <i class=\"fa fa-save\"></i> Salvar</button>\n                </div>\n\n\n            </div>\n        </form>    \n\n    </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/pages/tema/tema.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/tema/tema.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlbWEvdGVtYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/tema/tema.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/tema/tema.component.ts ***!
  \**********************************************/
/*! exports provided: TemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemaComponent", function() { return TemaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/notification.service */ "./src/app/service/notification.service.ts");
/* harmony import */ var src_app_service_tema_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/tema.service */ "./src/app/service/tema.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let TemaComponent = class TemaComponent {
    constructor(_temaService, _notificationService) {
        this._temaService = _temaService;
        this._notificationService = _notificationService;
        this.id = 0;
    }
    ngOnInit() {
        this.formCad = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            logo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            img: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            tema: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
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
                this.formCad.controls.logo.setValue(this.imgLogo);
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
        delete this.formCad.value.img;
        if (this.id == 0) {
            this.novo();
        }
        else {
            this.edit();
        }
    }
    novo() {
        this._temaService
            .save(this.formCad.value)
            .subscribe((response) => {
            console.log('response', response);
            this.id = response.insertId;
            let obj = {
                message: 'Item salvo com sucesso',
                status: true
            };
            this._notificationService.notify(obj);
            this.get();
        });
    }
    edit() {
        if (this.imgLogo) {
            if (!this.imgLogo.includes('http')) {
                this.formCad.controls.logo.setValue(this.imgLogo);
            }
        }
        this._temaService
            .update(this.id, this.formCad.value)
            .subscribe((response) => {
            let obj = {
                message: 'Item salvo com sucesso',
                status: true
            };
            this._notificationService.notify(obj);
        });
    }
    get() {
        this._temaService
            .get()
            .subscribe((response) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (response.length > 0) {
                this.title = 'Editar Cadastro do Tema';
                let dados = response[0];
                this.id = dados.id;
                let host = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].host;
                if (dados.logo) {
                    this.imgLogo = `${host}/foto/${dados.logo}`;
                }
                this.formCad.controls.description.setValue(dados.description);
                this.formCad.controls.tema.setValue(dados.tema);
            }
            else {
                this.title = 'Cadastrar Tema';
            }
        }));
    }
};
TemaComponent.ctorParameters = () => [
    { type: src_app_service_tema_service__WEBPACK_IMPORTED_MODULE_4__["TemaService"] },
    { type: src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }
];
TemaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tema',
        template: __webpack_require__(/*! raw-loader!./tema.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/tema/tema.component.html"),
        styles: [__webpack_require__(/*! ./tema.component.css */ "./src/app/pages/tema/tema.component.css")]
    })
], TemaComponent);



/***/ }),

/***/ "./src/app/pages/tema/tema.router.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tema/tema.router.ts ***!
  \*******************************************/
/*! exports provided: TemaRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemaRoutes", function() { return TemaRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _tema_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tema.component */ "./src/app/pages/tema/tema.component.ts");





const ROUTES = [
    { path: '', component: _tema_component__WEBPACK_IMPORTED_MODULE_4__["TemaComponent"] }
];
let TemaRoutes = class TemaRoutes {
};
TemaRoutes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_tema_component__WEBPACK_IMPORTED_MODULE_4__["TemaComponent"]],
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)]
    })
], TemaRoutes);



/***/ }),

/***/ "./src/app/service/tema.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/tema.service.ts ***!
  \*****************************************/
/*! exports provided: TemaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemaService", function() { return TemaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let TemaService = class TemaService {
    constructor(_http) {
        this._http = _http;
        this.webService = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api}/tema`;
    }
    get() {
        return this._http.get(this.webService);
    }
    save(obj) {
        return this._http.post(this.webService, obj);
    }
    getById(id) {
        return this._http.get(`${this.webService}/${id}`);
    }
    update(id, obj) {
        return this._http.put(`${this.webService}/${id}`, obj);
    }
    delete(id) {
        return this._http.delete(`${this.webService}/${id}`);
    }
};
TemaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
TemaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TemaService);



/***/ })

}]);
//# sourceMappingURL=pages-tema-tema-router-es2015.js.map