(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-usuario-usuario-router"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/usuario/user-form/user-form.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/usuario/user-form/user-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n        \n    <div class=\"col-md-12\">        \n        <form [formGroup]=\"formCad\" (ngSubmit)=\"submit()\">\n\n            <div class=\"box\">\n                <div class=\"box-header with-border\">\n                    <h3 class=\"box-title\">{{ title }}</h3>\n                    <div class=\"box-tools\">\n                        <a [routerLink]=\"[]\" class=\"btn btn-success\" (click)=\"voltar()\" >\n                            <i class=\"fa fa-mail-reply\"></i> Voltar\n                        </a>\n                    </div>\n                </div>\n\n                <div class=\"box-body\">\n                    \n                    <div class=\"col-md-6\">\n\n                        \n                        <div class=\"col-md-12 form-group\">\n                            <app-input [showTip]=\"false\">\n                                <label for=\"observacao\">Nome</label>\n                                <input class=\"form-control\" formControlName=\"name\" />\n                            </app-input>\n                        \n                        </div>\n                    \n                        <div class=\"col-md-12\">\n                            <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                                <label for=\"minimo\">E-mail</label>\n                                <input class=\"form-control\" formControlName=\"email\">\n                            </app-input>\n                        \n                        </div>\n                        \n                        <div class=\"col-md-6\">\n                            <label for=\"\">Senha</label>\n                            <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                                <div class=\"input-group\">\n                                    <input [type]=\"type1\" class=\"form-control\" placeholder=\"Digite uma senha\" minlength=\"6\" formControlName=\"password\"  >\n                                    <span class=\"input-group-addon\" (click)=\"changeType()\"><i class=\"fa fa-eye-slash\"></i></span>\n                                </div>\n                            </app-input>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <label for=\"\">Confirme sua Senha</label>\n                            <div class=\"input-group has-feedback\" [class.has-error]=\"formCad.hasError('passwordNotMatch')\" [class.has-success]=\"validarSenha()\">\n                                <input [type]=\"type2\" class=\"form-control\" placeholder=\"Digite uma senha\" minlength=\"6\" formControlName=\"confirmPassword\"  >\n                                <span class=\"input-group-addon\" (click)=\"changeType1()\"><i class=\"fa fa-eye-slash\"></i></span>\n                            </div>\n                            \n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"box-footer clearfix\">\n                    <div class=\"col-md-6\">\n                        <div class=\"col-md-12\">\n                            <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"formCad.invalid\"> <i class=\"fa fa-save\"></i> Salvar</button>\n                        </div>\n                    </div>\n                </div>\n\n\n            </div>\n        </form>    \n\n    </div>\n\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/usuario/usuario.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/usuario/usuario.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"col-md-12\">\n        <div class=\"box\">\n            <div class=\"box-header with-border\">\n                <h3 class=\"box-title\">Gerenciamento de Usuários</h3>\n                <div class=\"row\"></div>\n               \n\n                <div class=\"box-tools\">\n                    <a [routerLink]=\"['/usuario/cad']\" class=\"btn btn-success\"  >\n                        <i class=\"fa fa-plus\"></i> Novo \n                    </a>\n                </div>\n            </div>\n            \n            <!-- /.box-header -->\n            <div class=\"box-body\">\n                <table class=\"table table-hover\" >\n                    <thead>\n                        <th>Nome</th>\n                        <th>E-mail</th>                        \n                        <th style=\"width: 80px\">Ação</th>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let obj of items\">\n                            <td>{{ obj.name }}</td>\n                            <td>{{ obj.email }}</td>                            \n                            <td>\n                                <a [routerLink]=\"['/usuario/edit', obj.id]\" title=\"Editar\" >\n                                    <i class=\"fa  fa-edit\"></i>\n                                </a>\n                                &nbsp;\n                                <a [routerLink]=\"[]\" title=\"Remover\" (click)=\"perguntaRemover( obj )\">\n                                    <i class=\"fa  fa-remove text-danger\"></i>\n                                </a>\n                            </td>\n                        </tr>\n\n                    </tbody>\n                </table>\n            </div>\n            <!-- /.box-body -->\n            <div class=\"box-footer clearfix\">\n              \n            </div>\n        </div>\n        <!-- /.box -->\n\n        \n        \n        \n        <!-- /.col -->\n    </div>\n</section>\n<!-- content -->\n"

/***/ }),

/***/ "./src/app/pages/usuario/user-form/user-form.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/usuario/user-form/user-form.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW8vdXNlci1mb3JtL3VzZXItZm9ybS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/usuario/user-form/user-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/usuario/user-form/user-form.component.ts ***!
  \****************************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/notification.service */ "./src/app/service/notification.service.ts");
/* harmony import */ var src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/usuario.service */ "./src/app/service/usuario.service.ts");







var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(_activatedRouter, _userService, _location, _notificationService) {
        this._activatedRouter = _activatedRouter;
        this._userService = _userService;
        this._location = _location;
        this._notificationService = _notificationService;
        this.type1 = 'password';
        this.type2 = 'password';
    }
    UserFormComponent.prototype.ngOnInit = function () {
        this.id = this._activatedRouter.snapshot.params['id'] || 0;
        this.title = this.id == 0 ? 'Cadastrar Usuário' : 'Editar usuário';
        var minLength = 6;
        this.formCad = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email] }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(minLength)] }),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(minLength)] })
        }, {
            validators: this.password.bind(this)
        });
    };
    UserFormComponent.prototype.password = function (formGroup) {
        var password = formGroup.get('password').value;
        var confirmPassword = formGroup.get('confirmPassword').value;
        return password === confirmPassword ? null : { passwordNotMatch: true };
    };
    UserFormComponent.prototype.validarSenha = function () {
        return !this.formCad.hasError('passwordNotMatch') && this.formCad.get('password').valid;
    };
    UserFormComponent.prototype.changeType = function () {
        this.type1 = this.type1 == 'password' ? 'text' : 'password';
    };
    UserFormComponent.prototype.changeType1 = function () {
        this.type2 = this.type2 == 'password' ? 'text' : 'password';
    };
    UserFormComponent.prototype.submit = function () {
        delete this.formCad.value.confirmPassword;
        if (this.id == 0)
            this.novo();
        else
            this.update();
    };
    UserFormComponent.prototype.novo = function () {
        var _this = this;
        this._userService
            .save(this.formCad.value)
            .subscribe(function (response) {
            _this.alerta();
        });
    };
    UserFormComponent.prototype.update = function () {
        var _this = this;
        this._userService
            .update(this.id, this.formCad.value)
            .subscribe(function (response) {
            _this.alerta();
        });
    };
    UserFormComponent.prototype.alerta = function () {
        var obj = {
            message: 'Items salvo com sucesso!',
            status: true
        };
        this._notificationService.notify(obj);
        this.voltar();
    };
    UserFormComponent.prototype.voltar = function () {
        this._location.back();
    };
    UserFormComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
    ]; };
    UserFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user-form',
            template: __webpack_require__(/*! raw-loader!./user-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/usuario/user-form/user-form.component.html"),
            styles: [__webpack_require__(/*! ./user-form.component.css */ "./src/app/pages/usuario/user-form/user-form.component.css")]
        })
    ], UserFormComponent);
    return UserFormComponent;
}());



/***/ }),

/***/ "./src/app/pages/usuario/usuario.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/usuario/usuario.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzdWFyaW8vdXN1YXJpby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/usuario/usuario.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/usuario/usuario.component.ts ***!
  \****************************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/usuario.service */ "./src/app/service/usuario.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(_usuarioService) {
        this._usuarioService = _usuarioService;
        this.items = [];
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        this.get();
    };
    UsuarioComponent.prototype.get = function () {
        var _this = this;
        this._usuarioService
            .getAll()
            .subscribe(function (response) {
            _this.items = response;
        });
    };
    UsuarioComponent.prototype.perguntaRemover = function (parametro) {
        var _this = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Atenção!',
            text: "Deseja realmente remover " + parametro.name,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, quero remover!',
            cancelButtonText: 'Não',
            preConfirm: function () {
                var r = _this.remover(parametro);
                return r;
            },
            allowOutsideClick: function () { return !sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.isLoading(); }
        }).then(function (result) {
            if (result.value) {
                if (result.value) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Removido!', parametro.descricao + " removido com sucesso", 'success').then(function () {
                        _this.get();
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Oops!', "<strong>" + parametro.descricao + "</strong> n\u00E3o foi removido(a)", 'error').then(function () {
                        _this.get();
                    });
                }
            }
        });
    };
    UsuarioComponent.prototype.remover = function (obj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._usuarioService
                .delete(obj.id)
                .subscribe(function () {
                resolve(true);
            }, function (err) {
                console.error(err);
                reject({ log: err });
            });
        });
    };
    UsuarioComponent.ctorParameters = function () { return [
        { type: src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] }
    ]; };
    UsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! raw-loader!./usuario.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/usuario/usuario.component.html"),
            styles: [__webpack_require__(/*! ./usuario.component.css */ "./src/app/pages/usuario/usuario.component.css")]
        })
    ], UsuarioComponent);
    return UsuarioComponent;
}());



/***/ }),

/***/ "./src/app/pages/usuario/usuario.router.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/usuario/usuario.router.ts ***!
  \*************************************************/
/*! exports provided: UsuarioRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioRoutes", function() { return UsuarioRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/pages/usuario/user-form/user-form.component.ts");
/* harmony import */ var _usuario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuario.component */ "./src/app/pages/usuario/usuario.component.ts");






var ROUTES = [
    { path: '', component: _usuario_component__WEBPACK_IMPORTED_MODULE_5__["UsuarioComponent"] },
    { path: 'cad', component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__["UserFormComponent"] },
    { path: 'edit/:id', component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__["UserFormComponent"] },
];
var UsuarioRoutes = /** @class */ (function () {
    function UsuarioRoutes() {
    }
    UsuarioRoutes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_usuario_component__WEBPACK_IMPORTED_MODULE_5__["UsuarioComponent"], _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_4__["UserFormComponent"]],
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)]
        })
    ], UsuarioRoutes);
    return UsuarioRoutes;
}());



/***/ })

}]);
//# sourceMappingURL=pages-usuario-usuario-router-es5.js.map