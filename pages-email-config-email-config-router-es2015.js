(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-email-config-email-config-router"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/email-config/email-config.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/email-config/email-config.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n        \n    <div class=\"col-md-12\">\n        \n        \n        \n            <div class=\"box\">\n                <div class=\"box-header with-border\">\n                    <h3 class=\"box-title\">{{ title }}</h3>\n                </div>\n\n                <div class=\"box-body\">\n                    <div class=\"col-md-6\">\n                        \n                        <form [formGroup]=\"formCad\" (ngSubmit)=\"submit()\">\n    \n                            <app-input [showTip]=\"false\">\n                                <label for=\"observacao\">Nome</label>\n                                <input class=\"form-control\" formControlName=\"name\" />\n                            </app-input>\n                            <app-input [showTip]=\"false\">\n                                <label for=\"observacao\">Nome de usuário</label>\n                                <input class=\"form-control\" formControlName=\"username\" />\n                            </app-input>\n        \n                            <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                                <label for=\"minimo\">E-mail</label>\n                                <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"name@email.com\" >\n                            </app-input>\n        \n        \n                            <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                                <label for=\"minimo\">Senha</label>\n                                <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Senha\" >\n                            </app-input>\n\n                            <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                                <label for=\"minimo\">Porta</label>\n                                <input class=\"form-control\" formControlName=\"port\" placeholder=\"587\" >\n                            </app-input>\n\n                            <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                                <label for=\"minimo\">Servidor de E-mail</label>\n                                <input class=\"form-control\" formControlName=\"host\" placeholder=\"stmp.gmail.com\" >\n                            </app-input>\n\n                            <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                                <label for=\"minimo\">Email Com Cópia</label>\n                                <input class=\"form-control\" formControlName=\"copy\" placeholder=\"email1@email.com;email2@email.com;email3@email.com ...\" >\n                            </app-input>\n\n                            <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                                <label for=\"minimo\">Assunto para Envio</label>\n                                <input class=\"form-control\" formControlName=\"subject_send\" placeholder=\"Novo Contato\" >\n                            </app-input>\n\n                            <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                                <label for=\"minimo\">Texto do E-mail Para Envio</label>\n                                <textarea class=\"form-control\" #textSend  formControlName=\"text_send\" placeholder=\"Recebemos um contato de \" rows=\"5\" ></textarea>\n                            </app-input>\n\n                            <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                                <label for=\"minimo\">Assunto para resposta</label>\n                                <input class=\"form-control\" formControlName=\"subject_response\" placeholder=\"Obrigado!\" >\n                            </app-input>\n\n                            <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                                <label for=\"minimo\">Texto do E-mail Para Resposta</label>\n                                <textarea class=\"form-control\" #textResponse formControlName=\"text_response\" placeholder=\"Obrigado por entrar em contato\" rows=\"5\" ></textarea>\n                            </app-input>\n\n                            <app-input errorMessage=\"Este campo é obrigatório\" [showTip]=\"false\">\n                                <label for=\"minimo\">Logo no corpo do e-mail</label>\n                                <input type=\"file\" class=\"form-control\" formControlName=\"file\" (change)=\"fileChangeEvent($event)\">\n                                <span *ngIf=\"imgLogo\" (click)=\"removerImagem()\" class=\"text-red\"><strong>Remover Imagem</strong> </span>\n                            </app-input>\n                            <div class=\"box-footer clearfix\">\n                                <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"formCad.invalid\"> <i class=\"fa fa-save\"></i> Salvar</button>\n                            </div>\n                        </form>    \n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"row col-md-12\">\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\">Exemplo de Email de Envio</div>\n                                <div class=\"panel-body\">\n                                    <!-- <div class=\"container\"> -->\n                                        <h1 style='color:#fff;background:#8263ff;padding: 10px;margin:0; vertical-align:bottom;border-left: 10px solid #422f90;font-family:Arial;'>\n                                            <img [src]=\"imgLogo\" width=\"250\" *ngIf=\"imgLogo\">\n                                        </h1>\n                                        <blockquote style='font-size:14pt;margin:0;padding: 40px 30px;border-left: 10px solid #8263ff;font-family:Arial;'>\n                                            <strong>Nome:</strong> Fulano de tal<br>\n                                            <strong>email:</strong> fulano@email.com <br>\n                                            <hr>\n                                             {{ textSend.value }}\n                                        \n                                            <hr>\n                                            <div style=\"padding: 0px\">\n                                                <strong>Mensagem</strong>\n                                                <p style=\"white-space: pre-line; \">\n                                                    <i>\n                                                        [Aqui é conteúdo enviado]\n                                                    </i>\n                                                </p>\n                                            </div>\n\n                                            <br>\n                                            \n                                            \n                                            <br>\n                                            \n                                            <p>Atenciosamente,</p>\n\n\n                                            <p>Equipe da Corrente do Bem</p>\n                                            <span style=\"font-size: 9px\">Esse e-mail é gerado automaticamente, não precisa respondê-lo</span> \n                                        </blockquote>\n                                    <!-- </div> -->\n                                </div>\n                                \n                            </div>\n                        </div>\n                        <div class=\"row col-md-12\">\n                            <div class=\"panel panel-default\">\n                                <div class=\"panel-heading\">Exemplo de Email de Resposta</div>\n                                <div class=\"panel-body\">\n\n                                    <h1 style='color:#fff;background:#8263ff;padding: 10px;margin:0; vertical-align:bottom;border-left: 10px solid #422f90;font-family:Arial;'>\n                                        <img [src]=\"imgLogo\" width=\"250\" *ngIf=\"imgLogo\">\n                                    </h1>\n                                    <blockquote style='font-size:14pt;margin:0;padding: 40px 30px;border-left: 10px solid #8263ff;font-family:Arial;'>\n                                        Olá, Fulano\n                                        \n                                        <hr>\n\n                                        {{ textResponse.value }}\n                                        <br>\n\n                                        <br>\n                                        \n                                        <p>Atenciosamente,</p>\n\n\n                                        <p>Equipe da Corrente do Bem</p>\n                                        <span style=\"font-size: 9px\">Esse e-mail é gerado automaticamente, não precisa respondê-lo</span> \n                                    </blockquote>\n\n                                </div>\n                                \n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n\n            </div>\n           \n\n    </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/pages/email-config/email-config.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/email-config/email-config.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content{\r\n    overflow-x: hidden;\r\n    overflow-y: auto;\r\n    max-height: 890px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW1haWwtY29uZmlnL2VtYWlsLWNvbmZpZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lbWFpbC1jb25maWcvZW1haWwtY29uZmlnLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA4OTBweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/email-config/email-config.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/email-config/email-config.component.ts ***!
  \**************************************************************/
/*! exports provided: EmailConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailConfigComponent", function() { return EmailConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_service_email_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/email-config.service */ "./src/app/service/email-config.service.ts");
/* harmony import */ var src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/notification.service */ "./src/app/service/notification.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






let EmailConfigComponent = class EmailConfigComponent {
    constructor(_emailConfigService, _notificationService) {
        this._emailConfigService = _emailConfigService;
        this._notificationService = _notificationService;
        this.id = 0;
    }
    ngOnInit() {
        this.formCad = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            port: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            host: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            secure: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            copy: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            text_send: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            subject_send: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            subject_response: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            text_response: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            logo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.get();
    }
    submit() {
        delete this.formCad.value.file;
        if (this.id == 0) {
            this.novo();
        }
        else {
            this.update();
        }
    }
    update() {
        if (this.imgLogo) {
            if (!this.imgLogo.includes('http')) {
                this.formCad.controls.logo.setValue(this.imgLogo);
            }
            else {
                delete this.formCad.value.logo;
            }
        }
        this._emailConfigService
            .update(this.id, this.formCad.value)
            .subscribe((response) => {
            let obj = {
                message: 'Item salvo com sucesso',
                status: true
            };
            this._notificationService.notify(obj);
        });
    }
    fileChangeEvent(event) {
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
    removerImagem() {
        this.formCad.controls.logo.setValue('');
        this.imgLogo = null;
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
    novo() {
        this._emailConfigService
            .save(this.formCad.value)
            .subscribe((response) => {
            this.id = response.insertId;
            this.title = 'Editar dados de Email';
            let obj = {
                message: 'Item salvo com sucesso',
                status: true
            };
            this._notificationService.notify(obj);
        });
    }
    get() {
        this._emailConfigService
            .getAll()
            .subscribe((response) => {
            this.title = 'Cadastrar dados de Email';
            if (response.length > 0) {
                let dados = response[0];
                this.id = response[0].id;
                this.title = 'Editar dados de Email';
                this.formCad.controls.name.setValue(dados.name);
                this.formCad.controls.username.setValue(dados.username);
                this.formCad.controls.email.setValue(dados.email);
                this.formCad.controls.password.setValue(dados.password);
                this.formCad.controls.port.setValue(dados.port);
                this.formCad.controls.host.setValue(dados.host);
                this.formCad.controls.secure.setValue(dados.secure == 0 ? false : true);
                this.formCad.controls.copy.setValue(dados.copy);
                this.formCad.controls.text_send.setValue(dados.text_send);
                this.formCad.controls.text_response.setValue(dados.text_response);
                //this.formCad.controls.logo.setValue( dados.logo )
                this.imgLogo = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].host}/foto/${dados.logo}`;
            }
        });
    }
};
EmailConfigComponent.ctorParameters = () => [
    { type: src_app_service_email_config_service__WEBPACK_IMPORTED_MODULE_3__["EmailConfigService"] },
    { type: src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_4__["NotificationService"] }
];
EmailConfigComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-config',
        template: __webpack_require__(/*! raw-loader!./email-config.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/email-config/email-config.component.html"),
        styles: [__webpack_require__(/*! ./email-config.component.css */ "./src/app/pages/email-config/email-config.component.css")]
    })
], EmailConfigComponent);



/***/ }),

/***/ "./src/app/pages/email-config/email-config.router.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/email-config/email-config.router.ts ***!
  \***********************************************************/
/*! exports provided: EmaiLConfigRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmaiLConfigRoutes", function() { return EmaiLConfigRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _email_config_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-config.component */ "./src/app/pages/email-config/email-config.component.ts");





const ROUTES = [
    { path: '', component: _email_config_component__WEBPACK_IMPORTED_MODULE_4__["EmailConfigComponent"] }
];
let EmaiLConfigRoutes = class EmaiLConfigRoutes {
};
EmaiLConfigRoutes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_email_config_component__WEBPACK_IMPORTED_MODULE_4__["EmailConfigComponent"]],
        imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)]
    })
], EmaiLConfigRoutes);



/***/ }),

/***/ "./src/app/service/email-config.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/email-config.service.ts ***!
  \*************************************************/
/*! exports provided: EmailConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailConfigService", function() { return EmailConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let EmailConfigService = class EmailConfigService {
    constructor(_http) {
        this._http = _http;
        this.webService = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api}/email-config`;
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
EmailConfigService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
EmailConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], EmailConfigService);



/***/ })

}]);
//# sourceMappingURL=pages-email-config-email-config-router-es2015.js.map