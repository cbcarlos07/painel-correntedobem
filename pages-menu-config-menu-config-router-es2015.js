(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-config-menu-config-router"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/menu-config/menu-config.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/menu-config/menu-config.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"col-md-12\">\n        <div class=\"box\">\n            <div class=\"box-header with-border\">\n                <h3 class=\"box-title\">Gerenciamento de Menu</h3>\n                <div class=\"row\"></div>\n               \n\n                <div class=\"box-tools\">\n                    <a [routerLink]=\"['/menu-config/cad']\" class=\"btn btn-success\"  >\n                        <i class=\"fa fa-plus\"></i> Novo \n                    </a>\n                </div>\n            </div>\n            \n            <!-- /.box-header -->\n            <div class=\"box-body\">\n                <table class=\"table table-hover\" >\n                    <thead>\n                        <th>Nome</th>\n                        <th>URL</th>\n                        <th>Ordem</th>\n                        <th style=\"width: 80px\">Ação</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let obj of items\">\n                            <td>{{ obj.name }}</td>\n                            <td>{{ obj.url }}</td>\n                            <td>{{ obj.order_item }}</td>\n                            <td>\n                                <a [routerLink]=\"['/menu-config/edit', obj.id]\" title=\"Editar\" >\n                                    <i class=\"fa  fa-edit\"></i>\n                                </a>\n                                &nbsp;\n                                <a [routerLink]=\"[]\" title=\"Remover\" (click)=\"perguntaRemover( obj )\">\n                                    <i class=\"fa  fa-remove text-danger\"></i>\n                                </a>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n            <!-- /.box-body -->\n            <div class=\"box-footer clearfix\">\n              \n            </div>\n        </div>\n        <!-- /.box -->\n\n        \n        \n        \n        <!-- /.col -->\n    </div>\n</section>\n<!-- content -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/menu-config/menu-form/menu-form.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/menu-config/menu-form/menu-form.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n        \n    <div class=\"col-md-12\">\n        \n        <form [formGroup]=\"formCad\" (ngSubmit)=\"submit()\">\n\n            <div class=\"box\">\n                <div class=\"box-header with-border\">\n                    <h3 class=\"box-title\">{{ title }}</h3>\n                    <div class=\"box-tools\">\n                        <a [routerLink]=\"[]\" class=\"btn btn-success\" (click)=\"voltar()\" >\n                            <i class=\"fa fa-mail-reply\"></i> Voltar\n                        </a>\n                    </div>\n                </div>\n\n                <div class=\"box-body\">\n                    <div class=\"col-md-6\">\n    \n                        <app-input [showTip]=\"false\">\n                            <label for=\"observacao\">Nome</label>\n                            <input class=\"form-control\" formControlName=\"name\" />\n                        </app-input>\n    \n                        <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                            <label for=\"minimo\">URL</label>\n                            <input class=\"form-control\" formControlName=\"url\">\n                        </app-input>\n\n                        <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                            <label for=\"minimo\">Ordem</label>\n                            <input type=\"number\" class=\"form-control\" formControlName=\"order_item\" min=\"0\">\n                        </app-input>   \n\n                    </div>\n\n                </div>\n\n                <div class=\"box-footer clearfix\">\n                    <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"formCad.invalid\"> <i class=\"fa fa-save\"></i> Salvar</button>\n                </div>\n\n\n            </div>\n        </form>    \n\n    </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/pages/menu-config/menu-config.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/menu-config/menu-config.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtY29uZmlnL21lbnUtY29uZmlnLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/menu-config/menu-config.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/menu-config/menu-config.component.ts ***!
  \************************************************************/
/*! exports provided: MenuConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuConfigComponent", function() { return MenuConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/menu.service */ "./src/app/service/menu.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




let MenuConfigComponent = class MenuConfigComponent {
    constructor(_menuService) {
        this._menuService = _menuService;
    }
    ngOnInit() {
        this.get();
    }
    get() {
        this._menuService
            .get()
            .subscribe((response) => {
            this.items = response;
        });
    }
    perguntaRemover(parametro) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Atenção!',
            text: `Deseja realmente remover ${parametro.name}`,
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
            this._menuService
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
MenuConfigComponent.ctorParameters = () => [
    { type: src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_2__["MenuService"] }
];
MenuConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-config',
        template: __webpack_require__(/*! raw-loader!./menu-config.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/menu-config/menu-config.component.html"),
        styles: [__webpack_require__(/*! ./menu-config.component.css */ "./src/app/pages/menu-config/menu-config.component.css")]
    })
], MenuConfigComponent);



/***/ }),

/***/ "./src/app/pages/menu-config/menu-config.router.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/menu-config/menu-config.router.ts ***!
  \*********************************************************/
/*! exports provided: MenuConfigRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuConfigRoutes", function() { return MenuConfigRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _menu_config_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-config.component */ "./src/app/pages/menu-config/menu-config.component.ts");
/* harmony import */ var _menu_form_menu_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-form/menu-form.component */ "./src/app/pages/menu-config/menu-form/menu-form.component.ts");






const ROUTES = [
    { path: '', component: _menu_config_component__WEBPACK_IMPORTED_MODULE_4__["MenuConfigComponent"] },
    { path: 'cad', component: _menu_form_menu_form_component__WEBPACK_IMPORTED_MODULE_5__["MenuFormComponent"] },
    { path: 'edit/:id', component: _menu_form_menu_form_component__WEBPACK_IMPORTED_MODULE_5__["MenuFormComponent"] }
];
let MenuConfigRoutes = class MenuConfigRoutes {
};
MenuConfigRoutes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_menu_config_component__WEBPACK_IMPORTED_MODULE_4__["MenuConfigComponent"], _menu_form_menu_form_component__WEBPACK_IMPORTED_MODULE_5__["MenuFormComponent"]],
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)]
    })
], MenuConfigRoutes);



/***/ }),

/***/ "./src/app/pages/menu-config/menu-form/menu-form.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/menu-config/menu-form/menu-form.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtY29uZmlnL21lbnUtZm9ybS9tZW51LWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/menu-config/menu-form/menu-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/menu-config/menu-form/menu-form.component.ts ***!
  \********************************************************************/
/*! exports provided: MenuFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuFormComponent", function() { return MenuFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/menu.service */ "./src/app/service/menu.service.ts");
/* harmony import */ var src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/notification.service */ "./src/app/service/notification.service.ts");







let MenuFormComponent = class MenuFormComponent {
    constructor(_activatedRoute, _menuService, _notificationService, _location) {
        this._activatedRoute = _activatedRoute;
        this._menuService = _menuService;
        this._notificationService = _notificationService;
        this._location = _location;
    }
    ngOnInit() {
        this.id = this._activatedRoute.snapshot.params['id'] || 0;
        this.title = this.id > 0 ? 'Alterar Cadastro de Menu' : 'Cadastrar Menu';
        this.formCad = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            order_item: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] })
        });
        if (this.id > 0)
            this.buscar();
    }
    buscar() {
        this._menuService
            .getById(this.id)
            .subscribe((response) => {
            this.formCad.controls.name.setValue(response.name);
            this.formCad.controls.url.setValue(response.url);
            this.formCad.controls.order_item.setValue(response.order_item);
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
        this._menuService
            .save(this.formCad.value)
            .subscribe((response) => {
            this.alerta();
        });
    }
    update() {
        this._menuService
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
MenuFormComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_service_menu_service__WEBPACK_IMPORTED_MODULE_5__["MenuService"] },
    { type: src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
];
MenuFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-menu-form',
        template: __webpack_require__(/*! raw-loader!./menu-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/menu-config/menu-form/menu-form.component.html"),
        styles: [__webpack_require__(/*! ./menu-form.component.css */ "./src/app/pages/menu-config/menu-form/menu-form.component.css")]
    })
], MenuFormComponent);



/***/ }),

/***/ "./src/app/service/menu.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/menu.service.ts ***!
  \*****************************************/
/*! exports provided: MenuService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuService", function() { return MenuService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let MenuService = class MenuService {
    constructor(_http) {
        this._http = _http;
        this.webService = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api}/menu`;
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
MenuService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MenuService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], MenuService);



/***/ })

}]);
//# sourceMappingURL=pages-menu-config-menu-config-router-es2015.js.map