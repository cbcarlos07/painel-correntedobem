(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-area-area-router"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/area/area-form/area-form.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/area/area-form/area-form.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n        \n    <div class=\"col-md-12\">\n        \n        <form [formGroup]=\"formCad\">\n\n            <div class=\"box\">\n                <div class=\"box-header with-border\">\n                    <h3 class=\"box-title\">{{ title }}</h3>\n                    <div class=\"box-tools\">\n                        <a [routerLink]=\"[]\" class=\"btn btn-success\" (click)=\"voltar()\" >\n                            <i class=\"fa fa-mail-reply\"></i> Voltar\n                        </a>\n                    </div>\n                </div>\n\n                <div class=\"box-body\">\n                    \n                    <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                        <label for=\"descricao\">Titulo</label>\n                        <input class=\"form-control\" placeholder=\"Título\" formControlName=\"title\" min=\"0\">\n                    </app-input>\n\n                    \n\n                    <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                        <label for=\"ordem\">Ordem</label>\n                        <input type=\"number\" min=\"0\" class=\"form-control\" placeholder=\"Ordem\" formControlName=\"order_area\"/>\n                    </app-input>\n\n                    <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                        <label for=\"maximo\">URL</label>\n                        <input  class=\"form-control\" placeholder=\"URL\" formControlName=\"url\"  />\n                    </app-input>\n\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"minimo\">Logo</label>\n                            <input type=\"file\"  (change)=\"fileChangeEvent($event)\" accept=\"image/x-png,image/gif,image/jpeg\">\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-6\">\n                        <img [src]=\"imgImage\" width=\"150\" *ngIf=\"imgImage\" />\n                    </div>\n\n                    <div class=\"row\"></div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group\">\n                            <label for=\"minimo\">Ícone</label>\n                            <input type=\"file\"  (change)=\"fileChangeEvent1($event)\" accept=\"image/x-png,image/gif,image/jpeg\">\n                        </div>\n                    </div>\n\n                    <div class=\"col-md-6\">\n                        <img [src]=\"imgIcon\" width=\"50\" *ngIf=\"imgIcon\" />\n                    </div>\n                    <div class=\"row\"></div>\n\n                    <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                        <label for=\"minimo\">Pai</label>\n                        <select  formControlName=\"parent_id\"  class=\"form-control\">\n                            <option *ngFor=\"let item of items\" [value]=\"item.id\">{{ item.title }}</option>\n                        </select>\n                    </app-input>\n\n                    <app-input [showTip]=\"false\">\n                        <label for=\"observacao\">Descrição</label>\n                        <textarea class=\"form-control\" formControlName=\"description\" rows=\"10\"></textarea>\n                    </app-input>\n\n                </div>\n\n                <div class=\"box-footer clearfix\">\n                    <button class=\"btn btn-primary\" (click)=\"salvar()\" [disabled]=\"formCad.invalid\"> <i class=\"fa fa-save\"></i> Salvar</button>\n                </div>\n\n\n            </div>\n        </form>    \n\n    </div>\n\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/area/area.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/area/area.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"col-md-12\">\n        <div class=\"box\">\n            <div class=\"box-header with-border\">\n                <h3 class=\"box-title\">Gerenciamento de Área</h3>\n                <div class=\"row\"></div>\n               \n\n                <div class=\"box-tools\">\n                    <a [routerLink]=\"['/area/cad']\" class=\"btn btn-success\"  >\n                        <i class=\"fa fa-plus\"></i> Novo \n                    </a>\n                </div>\n            </div>\n            \n            <!-- /.box-header -->\n            <div class=\"box-body\">\n                <table class=\"table table-hover\" >\n                    <thead>\n                        <th>Título</th>                          \n                        <th>Ordem</th>                          \n                        <th>URL</th>                          \n                        <th>Ícone</th>                          \n                        <th>Pai</th>                          \n                        <th style=\"width: 80px\">Ação</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let obj of items\">\n                            <td>{{ obj.title }}</td>\n                            <td>{{ obj.order_area }}</td>\n                            <td>{{ obj.url }}</td>\n                            <td>\n                                \n                                <img *ngIf=\"obj.icon\" [src]=\"host +'/'+obj.icon\" width=\"25\">\n                            </td>\n                            <td>{{ obj.pai }}</td>\n                            <td>\n                                <a [routerLink]=\"['/area/edit', obj.id]\" title=\"Editar\" >\n                                    <i class=\"fa  fa-edit\"></i>\n                                </a>\n                                &nbsp;\n                                <a [routerLink]=\"[]\" title=\"Remover\" (click)=\"perguntaRemover( obj )\">\n                                    <i class=\"fa  fa-remove text-danger\"></i>\n                                </a>\n                                &nbsp;\n                                <a [routerLink]=\"['/area/equipe', obj.id]\" title=\"Equipe\" >\n                                    <i class=\"fa  fa-bars text-danger\"></i>\n                                </a>\n                              \n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n            <!-- /.box-body -->\n            <div class=\"box-footer clearfix\">\n              \n            </div>\n        </div>\n        <!-- /.box -->\n\n        \n        \n        \n        <!-- /.col -->\n    </div>\n</section>\n<!-- content -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/area/equipe/equipe-form/equipe-form.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/area/equipe/equipe-form/equipe-form.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n        \n    <div class=\"col-md-12\">\n        \n        <form [formGroup]=\"formCad\">\n\n            <div class=\"box\">\n                <div class=\"box-header with-border\">\n                    <h3 class=\"box-title\">{{ title }}</h3>\n                    <div class=\"box-tools\">\n                        <a [routerLink]=\"[]\" class=\"btn btn-success\" (click)=\"voltar()\" >\n                            <i class=\"fa fa-mail-reply\"></i> Voltar\n                        </a>\n                    </div>\n                </div>\n\n                <div class=\"box-body\">\n                    \n                    <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                        <label for=\"descricao\">Nome / Equipe</label>\n                        <input class=\"form-control\" placeholder=\"Nome\" formControlName=\"name\" >\n                    </app-input>\n\n                    \n\n                    <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                        <label for=\"ordem\">Ordem</label>\n                        <input type=\"number\" min=\"0\" class=\"form-control\" placeholder=\"Ordem\" formControlName=\"order_item\"/>\n                    </app-input>\n\n                    <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                        <label for=\"minimo\">Pai</label>\n                        <select  formControlName=\"parent_id\"  class=\"form-control\">\n                            <option *ngFor=\"let item of items\" [value]=\"item.id\">{{ item.name }}</option>\n                        </select>\n                    </app-input>\n\n                </div>\n\n                <div class=\"box-footer clearfix\">\n                    <button class=\"btn btn-primary\" (click)=\"salvar()\" [disabled]=\"formCad.invalid\"> <i class=\"fa fa-save\"></i> Salvar</button>\n                </div>\n\n\n            </div>\n        </form>    \n\n    </div>\n\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/area/equipe/equipe.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/area/equipe/equipe.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"col-md-12\">\n        <div class=\"box\">\n            <div class=\"box-header with-border\">\n                <h3 class=\"box-title\">Gerenciamento de Área</h3>\n                <div class=\"row\"></div>\n               \n\n                <div class=\"box-tools\">\n                    <a [routerLink]=\"['/area/equipe',id,'cad']\" class=\"btn btn-success\"  >\n                        <i class=\"fa fa-plus\"></i> Novo \n                    </a>\n                    &nbsp;\n                    <a [routerLink]=\"[]\" class=\"btn btn-primary\" (click)=\"voltar()\" >\n                        <i class=\"fa fa-reply\"></i> Voltar \n                    </a>\n                </div>\n            </div>\n            \n            <!-- /.box-header -->\n            <div class=\"box-body\">\n                <table class=\"table table-hover\" >\n                    <thead>\n                        <th>Nome / Equipe</th>                          \n                        <th>Ordem</th>                          \n                        <th>Equipe</th>                                                  \n                        <th style=\"width: 80px\">Ação</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let obj of items\">\n                            <td>{{ obj.name }}</td>\n                            <td>{{ obj.order_item }}</td>\n                            <td>{{ obj.team }}</td>                            \n                            <td>\n                                <a [routerLink]=\"['/area/equipe', id,'edit',obj.id]\" title=\"Editar\" >\n                                    <i class=\"fa  fa-edit\"></i>\n                                </a>\n                                &nbsp;\n                                <a [routerLink]=\"[]\" title=\"Remover\" (click)=\"perguntaRemover( obj )\">\n                                    <i class=\"fa  fa-remove text-danger\"></i>\n                                </a>\n                                &nbsp;\n                                <a [routerLink]=\"[]\" title=\"equipe\" (click)=\"equipe( obj )\">\n                                    <i class=\"fa  fa-bars text-danger\"></i>\n                                </a>\n                              \n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n            <!-- /.box-body -->\n            <div class=\"box-footer clearfix\">\n              \n            </div>\n        </div>\n        <!-- /.box -->\n\n        \n        \n        \n        <!-- /.col -->\n    </div>\n</section>\n<!-- content -->\n"

/***/ }),

/***/ "./src/app/pages/area/area-form/area-form.component.css":
/*!**************************************************************!*\
  !*** ./src/app/pages/area/area-form/area-form.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FyZWEvYXJlYS1mb3JtL2FyZWEtZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/area/area-form/area-form.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/area/area-form/area-form.component.ts ***!
  \*************************************************************/
/*! exports provided: AreaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaFormComponent", function() { return AreaFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_area_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/area.service */ "./src/app/service/area.service.ts");
/* harmony import */ var src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/notification.service */ "./src/app/service/notification.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









let AreaFormComponent = class AreaFormComponent {
    constructor(_location, _areaService, _notificationService, _activateRoute) {
        this._location = _location;
        this._areaService = _areaService;
        this._notificationService = _notificationService;
        this._activateRoute = _activateRoute;
        this.id = 0;
        this.items = [];
    }
    ngOnInit() {
        this.id = this._activateRoute.snapshot.params['id'] || 0;
        this.title = this.id != 0 ? 'Alterar Cadastro' : 'Cadastrar';
        this.formCad = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            order_area: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            logo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            icon: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
        this.getAll();
        if (this.id > 0) {
            this.getById();
        }
    }
    getById() {
        this._areaService
            .getById(this.id)
            .subscribe((response) => {
            var regex = /<br\s*[\/]?>/gi;
            this.formCad.controls.title.setValue(response.title);
            this.formCad.controls.order_area.setValue(response.order_area);
            this.formCad.controls.url.setValue(response.url);
            this.formCad.controls.description.setValue(response.description.replace(regex, '\n'));
            let index = this.items.findIndex(f => f.id == response.parent_id);
            this.formCad.controls.parent_id.setValue(this.items[index].id);
            if (response.logo)
                this.imgImage = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].host}/foto/${response.logo}`;
            if (response.icon)
                this.imgIcon = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].host}/foto/${response.icon}`;
        });
    }
    getAll() {
        this._areaService
            .get()
            .subscribe((response) => {
            this.items = response;
            this.items.unshift({ id: 0, title: 'Principal' });
            this.formCad.controls.parent_id.setValue(this.items[0].id);
        });
    }
    voltar() {
        this._location.back();
    }
    fileChangeEvent(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var files = event.target.files;
            var file = files[0];
            if (files && file) {
                let retorno = yield this.convertToBa64(file);
                this.imgImage = `data:image/png;base64,${retorno}`;
                this.formCad.controls.logo.setValue(this.imgImage);
            }
        });
    }
    fileChangeEvent1(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var files = event.target.files;
            var file = files[0];
            if (files && file) {
                let retorno = yield this.convertToBa64(file);
                this.imgIcon = `data:image/png;base64,${retorno}`;
                this.formCad.controls.icon.setValue(this.imgIcon);
            }
        });
    }
    salvar() {
        if (!this.imgImage || this.imgImage.includes('http')) {
            delete this.formCad.value.logo;
        }
        if (!this.imgIcon || this.imgIcon.includes('http')) {
            delete this.formCad.value.icon;
        }
        this.formCad.value.description = this.formCad.value.description.replace(/\r?\n/g, '<br />');
        if (this.id == 0) {
            this.novo();
        }
        else {
            this.atualizar();
        }
    }
    novo() {
        delete this.formCad.value.id;
        this._areaService
            .save(this.formCad.value)
            .subscribe((response) => {
            let obj = {
                message: 'Item salvo com sucesso',
                status: true
            };
            this._notificationService.notify(obj);
            this.voltar();
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
    atualizar() {
        this._areaService
            .update(this.id, this.formCad.value)
            .subscribe((response) => {
            let obj = {
                message: 'Item salvo com sucesso',
                status: true
            };
            this._notificationService.notify(obj);
            this.voltar();
        });
    }
};
AreaFormComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: src_app_service_area_service__WEBPACK_IMPORTED_MODULE_5__["AreaService"] },
    { type: src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
AreaFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-area-form',
        template: __webpack_require__(/*! raw-loader!./area-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/area/area-form/area-form.component.html"),
        styles: [__webpack_require__(/*! ./area-form.component.css */ "./src/app/pages/area/area-form/area-form.component.css")]
    })
], AreaFormComponent);



/***/ }),

/***/ "./src/app/pages/area/area.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/area/area.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FyZWEvYXJlYS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/area/area.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/area/area.component.ts ***!
  \**********************************************/
/*! exports provided: AreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaComponent", function() { return AreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_area_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/area.service */ "./src/app/service/area.service.ts");
/* harmony import */ var src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/usuario.service */ "./src/app/service/usuario.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let AreaComponent = class AreaComponent {
    constructor(_areaService, _userService) {
        this._areaService = _areaService;
        this._userService = _userService;
        this.items = [];
        this.host = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host}/foto`;
        //	this.escutaLogin()
    }
    ngOnInit() {
        this.getAll();
    }
    getAll() {
        this._areaService
            .get()
            .subscribe((response) => {
            this.items = response;
        });
    }
    escutaLogin() {
        this._userService
            .notifierLogin
            .subscribe(load => {
            setTimeout(() => {
                window.location.reload();
            }, 500);
        });
    }
    perguntaRemover(parametro) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Atenção!',
            text: `Deseja realmente remover ${parametro.title}`,
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
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.isLoading()
        }).then((result) => {
            if (result.value) {
                if (result.value) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Removido!', `${parametro.descricao} removido com sucesso`, 'success').then(() => {
                        this.getAll();
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Oops!', `<strong>${parametro.descricao}</strong> não foi removido(a)`, 'error').then(() => {
                        this.getAll();
                    });
                }
            }
        });
    }
    remover(obj) {
        return new Promise((resolve, reject) => {
            this._areaService
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
AreaComponent.ctorParameters = () => [
    { type: src_app_service_area_service__WEBPACK_IMPORTED_MODULE_2__["AreaService"] },
    { type: src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] }
];
AreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-area',
        template: __webpack_require__(/*! raw-loader!./area.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/area/area.component.html"),
        styles: [__webpack_require__(/*! ./area.component.css */ "./src/app/pages/area/area.component.css")]
    })
], AreaComponent);



/***/ }),

/***/ "./src/app/pages/area/area.router.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/area/area.router.ts ***!
  \*******************************************/
/*! exports provided: AreaRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaRoutes", function() { return AreaRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _area_form_area_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./area-form/area-form.component */ "./src/app/pages/area/area-form/area-form.component.ts");
/* harmony import */ var _area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./area.component */ "./src/app/pages/area/area.component.ts");
/* harmony import */ var _equipe_equipe_form_equipe_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./equipe/equipe-form/equipe-form.component */ "./src/app/pages/area/equipe/equipe-form/equipe-form.component.ts");
/* harmony import */ var _equipe_equipe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./equipe/equipe.component */ "./src/app/pages/area/equipe/equipe.component.ts");








const ROUTES = [
    { path: '', component: _area_component__WEBPACK_IMPORTED_MODULE_5__["AreaComponent"] },
    { path: 'cad', component: _area_form_area_form_component__WEBPACK_IMPORTED_MODULE_4__["AreaFormComponent"] },
    { path: 'edit/:id', component: _area_form_area_form_component__WEBPACK_IMPORTED_MODULE_4__["AreaFormComponent"] },
    { path: 'equipe/:id', component: _equipe_equipe_component__WEBPACK_IMPORTED_MODULE_7__["EquipeComponent"] },
    { path: 'equipe/:area/cad', component: _equipe_equipe_form_equipe_form_component__WEBPACK_IMPORTED_MODULE_6__["EquipeFormComponent"] },
    { path: 'equipe/:area/edit/:id', component: _equipe_equipe_form_equipe_form_component__WEBPACK_IMPORTED_MODULE_6__["EquipeFormComponent"] }
];
let AreaRoutes = class AreaRoutes {
};
AreaRoutes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_area_component__WEBPACK_IMPORTED_MODULE_5__["AreaComponent"], _area_form_area_form_component__WEBPACK_IMPORTED_MODULE_4__["AreaFormComponent"], _equipe_equipe_component__WEBPACK_IMPORTED_MODULE_7__["EquipeComponent"], _equipe_equipe_form_equipe_form_component__WEBPACK_IMPORTED_MODULE_6__["EquipeFormComponent"]],
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)]
    })
], AreaRoutes);



/***/ }),

/***/ "./src/app/pages/area/equipe/equipe-form/equipe-form.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/area/equipe/equipe-form/equipe-form.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FyZWEvZXF1aXBlL2VxdWlwZS1mb3JtL2VxdWlwZS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/area/equipe/equipe-form/equipe-form.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/area/equipe/equipe-form/equipe-form.component.ts ***!
  \************************************************************************/
/*! exports provided: EquipeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipeFormComponent", function() { return EquipeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_equipe_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/equipe.service */ "./src/app/service/equipe.service.ts");
/* harmony import */ var src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/notification.service */ "./src/app/service/notification.service.ts");







let EquipeFormComponent = class EquipeFormComponent {
    constructor(_location, _notificationService, _activateRoute, _equipeService) {
        this._location = _location;
        this._notificationService = _notificationService;
        this._activateRoute = _activateRoute;
        this._equipeService = _equipeService;
        this.id = 0;
        this.items = [];
    }
    ngOnInit() {
        this.id = this._activateRoute.snapshot.params['id'] || 0;
        this.area = this._activateRoute.snapshot.params['area'];
        this.title = this.id != 0 ? 'Alterar Cadastro' : 'Cadastrar';
        this.formCad = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.id),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            order_item: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](0, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            parent_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            area_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.area)
        });
        this.getEquipe();
        if (this.id > 0)
            this.getById();
    }
    getEquipe() {
        this._equipeService
            .getArea(this.area)
            .subscribe((response) => {
            this.items = response;
            this.items.unshift({ id: 0, name: 'É Equipe' });
            this.formCad.controls.parent_id.setValue(this.items[0].id);
        });
    }
    getById() {
        this._equipeService
            .getById(this.id)
            .subscribe((response) => {
            this.formCad.controls.name.setValue(response.name);
            this.formCad.controls.order_item.setValue(response.order_item);
            let index = this.items.findIndex((i) => i.id == response.parent_id);
            this.formCad.controls.parent_id.setValue(this.items[index].id);
        });
    }
    voltar() {
        this._location.back();
    }
    salvar() {
        delete this.formCad.value.id;
        if (this.id == 0) {
            this.novo(this.formCad.value);
        }
        else {
            this.update();
        }
    }
    update() {
        this._equipeService
            .update(this.id, this.formCad.value)
            .subscribe((response) => {
            this.retorno();
        });
    }
    novo(dados) {
        this._equipeService
            .save(dados)
            .subscribe((response) => {
            this.retorno();
        });
    }
    retorno() {
        let obj = {
            message: 'Item salvo com sucesso',
            status: true
        };
        this._notificationService.notify(obj);
        this.voltar();
    }
};
EquipeFormComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotificationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_service_equipe_service__WEBPACK_IMPORTED_MODULE_5__["EquipeService"] }
];
EquipeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-equipe-form',
        template: __webpack_require__(/*! raw-loader!./equipe-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/area/equipe/equipe-form/equipe-form.component.html"),
        styles: [__webpack_require__(/*! ./equipe-form.component.css */ "./src/app/pages/area/equipe/equipe-form/equipe-form.component.css")]
    })
], EquipeFormComponent);



/***/ }),

/***/ "./src/app/pages/area/equipe/equipe.component.css":
/*!********************************************************!*\
  !*** ./src/app/pages/area/equipe/equipe.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FyZWEvZXF1aXBlL2VxdWlwZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/area/equipe/equipe.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/area/equipe/equipe.component.ts ***!
  \*******************************************************/
/*! exports provided: EquipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipeComponent", function() { return EquipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_equipe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/equipe.service */ "./src/app/service/equipe.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let EquipeComponent = class EquipeComponent {
    constructor(_equipeService, _activatedRoute, _location) {
        this._equipeService = _equipeService;
        this._activatedRoute = _activatedRoute;
        this._location = _location;
        this.items = [];
        this.id = 0;
    }
    ngOnInit() {
        this.id = this._activatedRoute.snapshot.params['id'] || 0;
        this.getEquipe();
    }
    getEquipe() {
        this._equipeService
            .getArea(this.id)
            .subscribe((response) => {
            this.items = response;
        });
    }
    voltar() {
        this._location.back();
    }
    perguntaRemover(parametro) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Atenção!',
            text: `Deseja realmente remover ${parametro.title}`,
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
            allowOutsideClick: () => !sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.isLoading()
        }).then((result) => {
            if (result.value) {
                if (result.value) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Removido!', `${parametro.descricao} removido com sucesso`, 'success').then(() => {
                        this.getEquipe();
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Oops!', `<strong>${parametro.descricao}</strong> não foi removido(a)`, 'error').then(() => {
                        this.getEquipe();
                    });
                }
            }
        });
    }
    remover(obj) {
        return new Promise((resolve, reject) => {
            this._equipeService
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
EquipeComponent.ctorParameters = () => [
    { type: src_app_service_equipe_service__WEBPACK_IMPORTED_MODULE_4__["EquipeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
];
EquipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-equipe',
        template: __webpack_require__(/*! raw-loader!./equipe.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/area/equipe/equipe.component.html"),
        styles: [__webpack_require__(/*! ./equipe.component.css */ "./src/app/pages/area/equipe/equipe.component.css")]
    })
], EquipeComponent);



/***/ }),

/***/ "./src/app/service/area.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/area.service.ts ***!
  \*****************************************/
/*! exports provided: AreaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaService", function() { return AreaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let AreaService = class AreaService {
    constructor(_http) {
        this._http = _http;
        this.webService = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api}/area`;
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
AreaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AreaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AreaService);



/***/ }),

/***/ "./src/app/service/equipe.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/equipe.service.ts ***!
  \*******************************************/
/*! exports provided: EquipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipeService", function() { return EquipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let EquipeService = class EquipeService {
    constructor(_http) {
        this._http = _http;
        this.webService = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api}/equipe`;
    }
    getArea(id) {
        return this._http.get(`${this.webService}/team/area/${id}`);
    }
    save(dados) {
        return this._http.post(`${this.webService}`, dados);
    }
    getById(id) {
        return this._http.get(`${this.webService}/${id}`);
    }
    update(id, dados) {
        return this._http.put(`${this.webService}/${id}`, dados);
    }
    delete(id) {
        return this._http.delete(`${this.webService}/${id}`);
    }
};
EquipeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
EquipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], EquipeService);



/***/ })

}]);
//# sourceMappingURL=pages-area-area-router-es2015.js.map