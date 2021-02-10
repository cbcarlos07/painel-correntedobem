(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-redes-sociais-redes-sociais-router"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/redes-sociais/redes-form/redes-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/redes-sociais/redes-form/redes-form.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n        \n    <div class=\"col-md-12\">\n        \n        <form [formGroup]=\"formCad\" (ngSubmit)=\"submit()\">\n\n            <div class=\"box\">\n                <div class=\"box-header with-border\">\n                    <h3 class=\"box-title\">{{ title }}</h3>\n                    <div class=\"box-tools\">\n                        <a [routerLink]=\"[]\" class=\"btn btn-success\" (click)=\"voltar()\" >\n                            <i class=\"fa fa-mail-reply\"></i> Voltar\n                        </a>\n                    </div>\n                </div>\n\n                <div class=\"box-body\">\n                    <div class=\"col-md-6\">\n    \n                        <app-input [showTip]=\"false\">\n                            <label for=\"observacao\">Rede</label>\n                            <input class=\"form-control\" formControlName=\"rede\" />\n                        </app-input>\n    \n                        <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                            <label for=\"minimo\">URL</label>\n                            <input class=\"form-control\" formControlName=\"url\">\n                        </app-input>\n\n                    </div>\n\n                </div>\n\n                <div class=\"box-footer clearfix\">\n                    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"formCad.invalid\"> <i class=\"fa fa-save\"></i> Salvar</button>\n                </div>\n\n\n            </div>\n        </form>    \n\n    </div>\n\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/redes-sociais/redes-sociais.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/redes-sociais/redes-sociais.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"col-md-12\">\n        <div class=\"box\">\n            <div class=\"box-header with-border\">\n                <h3 class=\"box-title\">Gerenciamento de Redes Sociais</h3>\n                <div class=\"row\"></div>\n               \n\n                <div class=\"box-tools\">\n                    <a [routerLink]=\"['/redes-sociais/cad']\" class=\"btn btn-success\"  >\n                        <i class=\"fa fa-plus\"></i> Novo \n                    </a>\n                </div>\n            </div>\n            \n            <!-- /.box-header -->\n            <div class=\"box-body\">\n                <table class=\"table table-hover\" >\n                    <thead>\n                        <th>Rede</th>\n                        <th>URL</th>\n                        <th style=\"width: 80px\">Ação</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let obj of items\">\n                            <td>{{ obj.rede }}</td>\n                            <td>{{ obj.url }}</td>                            \n                            <td>\n                                <a [routerLink]=\"['/redes-sociais/edit', obj.id]\" title=\"Editar\" >\n                                    <i class=\"fa  fa-edit\"></i>\n                                </a>\n                                &nbsp;\n                                <a [routerLink]=\"[]\" title=\"Remover\" (click)=\"perguntaRemover( obj )\">\n                                    <i class=\"fa  fa-remove text-danger\"></i>\n                                </a>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n            <!-- /.box-body -->\n            <div class=\"box-footer clearfix\">\n              \n            </div>\n        </div>\n        <!-- /.box -->\n\n        \n        \n        \n        <!-- /.col -->\n    </div>\n</section>\n<!-- content -->\n"

/***/ }),

/***/ "./src/app/pages/redes-sociais/redes-form/redes-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/redes-sociais/redes-form/redes-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZGVzLXNvY2lhaXMvcmVkZXMtZm9ybS9yZWRlcy1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/redes-sociais/redes-form/redes-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/redes-sociais/redes-form/redes-form.component.ts ***!
  \************************************************************************/
/*! exports provided: RedesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedesFormComponent", function() { return RedesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/notification.service */ "./src/app/service/notification.service.ts");
/* harmony import */ var src_app_service_redes_sociais_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/redes-sociais.service */ "./src/app/service/redes-sociais.service.ts");







let RedesFormComponent = class RedesFormComponent {
    constructor(_activatedRoute, _redesSociaisService, _notificationService, _location) {
        this._activatedRoute = _activatedRoute;
        this._redesSociaisService = _redesSociaisService;
        this._notificationService = _notificationService;
        this._location = _location;
    }
    ngOnInit() {
        this.id = this._activatedRoute.snapshot.params['id'] || 0;
        this.title = this.id > 0 ? 'Alterar Cadastro de Rede Social' : 'Cadastrar Rede Social';
        this.formCad = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            rede: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] })
        });
        if (this.id > 0)
            this.buscar();
    }
    buscar() {
        this._redesSociaisService
            .getById(this.id)
            .subscribe((response) => {
            this.formCad.controls.rede.setValue(response.rede);
            this.formCad.controls.url.setValue(response.url);
        });
    }
    submit() {
        if (this.id == 0) {
            this.novo();
        }
        else {
            this.update();
        }
    }
    novo() {
        this._redesSociaisService
            .save(this.formCad.value)
            .subscribe((response) => {
            this.alerta();
        });
    }
    update() {
        this._redesSociaisService
            .update(this.id, this.formCad.value)
            .subscribe((response) => {
            this.alerta();
        });
    }
    alerta() {
        let obj = {
            message: 'Item salvo com sucesso',
            status: true
        };
        this._notificationService.notify(obj);
        this.voltar();
    }
    voltar() {
        this._location.back();
    }
};
RedesFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_service_redes_sociais_service__WEBPACK_IMPORTED_MODULE_6__["RedesSociaisService"] },
    { type: src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
];
RedesFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-redes-form',
        template: __webpack_require__(/*! raw-loader!./redes-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/redes-sociais/redes-form/redes-form.component.html"),
        styles: [__webpack_require__(/*! ./redes-form.component.css */ "./src/app/pages/redes-sociais/redes-form/redes-form.component.css")]
    })
], RedesFormComponent);



/***/ }),

/***/ "./src/app/pages/redes-sociais/redes-sociais.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/redes-sociais/redes-sociais.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZGVzLXNvY2lhaXMvcmVkZXMtc29jaWFpcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/redes-sociais/redes-sociais.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/redes-sociais/redes-sociais.component.ts ***!
  \****************************************************************/
/*! exports provided: RedesSociaisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedesSociaisComponent", function() { return RedesSociaisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_redes_sociais_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/redes-sociais.service */ "./src/app/service/redes-sociais.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




let RedesSociaisComponent = class RedesSociaisComponent {
    constructor(_redesSociaisService) {
        this._redesSociaisService = _redesSociaisService;
    }
    ngOnInit() {
        this.get();
    }
    get() {
        this._redesSociaisService
            .get()
            .subscribe((response) => {
            this.items = response;
        });
    }
    perguntaRemover(parametro) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Atenção!',
            text: `Deseja realmente remover ${parametro.rede}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, quero remover!',
            cancelButtonText: 'Não',
            preConfirm: () => {
                const r = this.remover(parametro);
                return r;
            },
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.isLoading()
        }).then((result) => {
            if (result.value) {
                if (result.value) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Removido!', `${parametro.descricao} removido com sucesso`, 'success').then(() => {
                        this.get();
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Oops!', `<strong>${parametro.descricao}</strong> não foi removido(a)`, 'error').then(() => {
                        this.get();
                    });
                }
            }
        });
    }
    remover(obj) {
        return new Promise((resolve, reject) => {
            this._redesSociaisService
                .delete(obj.id)
                .subscribe(() => {
                resolve(true);
            }, err => {
                console.error(err);
                reject({ log: err });
            });
        });
    }
};
RedesSociaisComponent.ctorParameters = () => [
    { type: src_app_service_redes_sociais_service__WEBPACK_IMPORTED_MODULE_2__["RedesSociaisService"] }
];
RedesSociaisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redes-sociais',
        template: __webpack_require__(/*! raw-loader!./redes-sociais.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/redes-sociais/redes-sociais.component.html"),
        styles: [__webpack_require__(/*! ./redes-sociais.component.css */ "./src/app/pages/redes-sociais/redes-sociais.component.css")]
    })
], RedesSociaisComponent);



/***/ }),

/***/ "./src/app/pages/redes-sociais/redes-sociais.router.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/redes-sociais/redes-sociais.router.ts ***!
  \*************************************************************/
/*! exports provided: RedesSociaisRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedesSociaisRoutes", function() { return RedesSociaisRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _redes_form_redes_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redes-form/redes-form.component */ "./src/app/pages/redes-sociais/redes-form/redes-form.component.ts");
/* harmony import */ var _redes_sociais_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./redes-sociais.component */ "./src/app/pages/redes-sociais/redes-sociais.component.ts");






const ROUTES = [
    { path: '', component: _redes_sociais_component__WEBPACK_IMPORTED_MODULE_5__["RedesSociaisComponent"] },
    { path: 'cad', component: _redes_form_redes_form_component__WEBPACK_IMPORTED_MODULE_4__["RedesFormComponent"] },
    { path: 'edit/:id', component: _redes_form_redes_form_component__WEBPACK_IMPORTED_MODULE_4__["RedesFormComponent"] },
];
let RedesSociaisRoutes = class RedesSociaisRoutes {
};
RedesSociaisRoutes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_redes_sociais_component__WEBPACK_IMPORTED_MODULE_5__["RedesSociaisComponent"], _redes_form_redes_form_component__WEBPACK_IMPORTED_MODULE_4__["RedesFormComponent"]],
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)]
    })
], RedesSociaisRoutes);



/***/ }),

/***/ "./src/app/service/redes-sociais.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/redes-sociais.service.ts ***!
  \**************************************************/
/*! exports provided: RedesSociaisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedesSociaisService", function() { return RedesSociaisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let RedesSociaisService = class RedesSociaisService {
    constructor(_http) {
        this._http = _http;
        this.webService = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api}/redes`;
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
RedesSociaisService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
RedesSociaisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], RedesSociaisService);



/***/ })

}]);
//# sourceMappingURL=pages-redes-sociais-redes-sociais-router-es2015.js.map