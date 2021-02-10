(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/area/area.router": [
		"./src/app/pages/area/area.router.ts",
		"default~pages-area-area-router~pages-menu-config-menu-config-router~pages-redes-sociais-redes-sociai~4ee5ad99",
		"pages-area-area-router"
	],
	"./pages/arrecadacao/arrecadacao.router": [
		"./src/app/pages/arrecadacao/arrecadacao.router.ts",
		"pages-arrecadacao-arrecadacao-router"
	],
	"./pages/contato-dados/dados.router": [
		"./src/app/pages/contato-dados/dados.router.ts",
		"pages-contato-dados-dados-router"
	],
	"./pages/contatos/contatos.router": [
		"./src/app/pages/contatos/contatos.router.ts",
		"pages-contatos-contatos-router"
	],
	"./pages/email-config/email-config.router": [
		"./src/app/pages/email-config/email-config.router.ts",
		"pages-email-config-email-config-router"
	],
	"./pages/menu-config/menu-config.router": [
		"./src/app/pages/menu-config/menu-config.router.ts",
		"default~pages-area-area-router~pages-menu-config-menu-config-router~pages-redes-sociais-redes-sociai~4ee5ad99",
		"pages-menu-config-menu-config-router"
	],
	"./pages/meta-dados/meta.router": [
		"./src/app/pages/meta-dados/meta.router.ts",
		"pages-meta-dados-meta-router"
	],
	"./pages/redes-sociais/redes-sociais.router": [
		"./src/app/pages/redes-sociais/redes-sociais.router.ts",
		"default~pages-area-area-router~pages-menu-config-menu-config-router~pages-redes-sociais-redes-sociai~4ee5ad99",
		"pages-redes-sociais-redes-sociais-router"
	],
	"./pages/tema/tema.router": [
		"./src/app/pages/tema/tema.router.ts",
		"pages-tema-tema-router"
	],
	"./pages/usuario/usuario.router": [
		"./src/app/pages/usuario/usuario.router.ts",
		"default~pages-area-area-router~pages-menu-config-menu-config-router~pages-redes-sociais-redes-sociai~4ee5ad99",
		"pages-usuario-usuario-router"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n\n    \n    <app-header *ngIf=\"verifySession()\"></app-header>\n    \n    <app-menu *ngIf=\"verifySession()\"></app-menu>\n    \n    <div class=\"content-wrapper\" *ngIf=\"verifySession(); else login\">\n        <router-outlet></router-outlet>\n    </div>\n\n    <ng-template #login>\n        <router-outlet></router-outlet>\n    </ng-template>\n    \n    \n\n    <app-snackbar></app-snackbar>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/header/header.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/header/header.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n    <a href=\"#\" class=\"logo\">\n        <!-- mini logo for sidebar mini 50x50 pixels -->\n        <span class=\"logo-mini\"><b>C</b>B</span>\n        <!-- logo for regular state and mobile devices -->\n        <span class=\"logo-lg\">Corrente do Bem</span>\n    </a>\n    \n    <nav class=\"navbar navbar-static-top\">\n        <!-- Sidebar toggle button-->\n        <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n            <span class=\"sr-only\">Toggle navigation</span>\n        </a>\n    \n        <div class=\"navbar-custom-menu\">\n            <ul class=\"nav navbar-nav\">\n                        <!-- User Account: style can be found in dropdown.less -->\n                <li class=\"dropdown user user-menu\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                    \n                        <span class=\"hidden-xs\">{{ getReducedName() }}</span>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <!-- User image -->\n                        <li class=\"user-header\">\n                            \n            \n                            <p>\n                             {{ getName() }}   \n                            \n                            </p>\n                        </li>\n                        <!-- Menu Body -->\n                        \n                        <!-- Menu Footer-->\n                        <li class=\"user-footer\">\n                            \n                            <div class=\"pull-right\">\n                            <a [routerLink]=\"[]\" class=\"btn btn-default btn-flat\" (click)=\"logout()\">Sign out</a>\n                            </div>\n                        </li>\n                    </ul>\n                </li>\n                <!-- Control Sidebar Toggle Button -->   \n            </ul>\n        </div>\n    </nav>\n</header>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/common/menu/menu.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/common/menu/menu.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\" [hidden]=\"!verificaSessao()\">\n    <div class=\"user-panel\">\n        <div class=\"pull-left image\">\n            <img [src]=\"foto\" class=\"img-circle\" alt=\"User Image\">\n        </div>\n        <div class=\"pull-left info\">\n            <p>{{ nome }}</p>\n            <a [routerLink]=\"[]\"><i class=\"fa fa-circle {{ classeStatus }}\"></i> {{ status }}</a>\n        </div>\n    </div>\n        \n    <section class=\"sidebar\">\n            <ul class=\"sidebar-menu\" data-widget=\"tree\">\n                <li routerLinkActive=\"active\" *ngFor=\"let menu of menus\">\n                    <a [routerLink]=\"menu.url\">\n                        <i class=\"fa {{ menu.icone }}\" ></i><span>{{ menu.menu }}</span>\n                    </a>\n                </li>\n            </ul>\n        </section>\n</aside>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"login-box\">\n        <div class=\"login-logo\">\n          <a [routerLink]=\"['']\"> \n            <img src=\"assets/correntedobem.png\"  width=\"250\">\n          </a>\n        </div>\n        <!-- /.login-logo -->\n        <div class=\"login-box-body\">\n          <p class=\"login-box-msg\"></p>\n      \n          <form [formGroup]=\"formLogin\" (ngSubmit)=\"onSubmit()\">\n            <div style=\"text-align: center\" *ngIf=\"isError\">\n                <span class=\"help-block has-error\" >\n                        <div style=\"text-align: center\">\n                            <span class=\"help-block has-error\" >\n                                <strong>{{ msgError }}</strong>\n                            </span>\n                        </div> \n                </span>\n            </div>\n\n            <div class=\"input-group form-group has-feedback\">\n              <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\">\n              <span class=\"input-group-addon glyphicon glyphicon-envelope\"></span>\n            </div>\n\n            <div class=\"input-group form-group has-feedback\">\n              <input [type]=\"type\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\">\n              <span class=\"input-group-addon \" (click)=\"changeType()\">\n                  <i class=\"glyphicon glyphicon-lock\"></i>\n              </span>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <button type=\"submit\" class=\"btn btn-logar btn-block btn-flat\">Efetua Login</button>\n                  </div>\n            </div>\n          </form>\n      \n          <div class=\"social-auth-links text-center\">\n            \n            \n          </div>\n          <!-- /.social-auth-links -->\n          <!-- <div class=\"col-md-6 col-sm-6\">\n              <a href=\"#\">Esqueci a senha</a><br>\n          </div> -->\n          <!-- <div class=\"col-md-6 col-sm-6\">\n              <a [routerLink]=\"['/subscribe']\" class=\"text-center pull-right\">Cadastre-se</a>\n          </div> -->\n      \n        </div>\n        <!-- /.login-box-body -->\n      </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/input/input.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/input/input.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group has-feedback \" [class.has-success]=\"hasSuccess()\"\n                                      [class.has-error]=\"hasError()\">\n\n    <ng-content></ng-content>\n    <span class=\"help-block pull-left\" *ngIf=\"showTip && hasError()\" >\n        <i class=\"fa fa-remove\"></i><strong>{{errorMessage}}</strong>\n    </span>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/snackbar/snackbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/snackbar/snackbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"snackbar {{ tipAlert }}\" [@snack-visibility]=\"snackVisibility\" >\n    {{ message }}\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./security/loggedIn.guard */ "./src/app/security/loggedIn.guard.ts");





const routes = [
    {
        path: '',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'area',
        canLoad: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        canActivate: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        children: [
            { path: '', loadChildren: './pages/area/area.router#AreaRoutes' }
        ]
    },
    {
        path: 'meta',
        canLoad: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        canActivate: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        children: [
            { path: '', loadChildren: './pages/meta-dados/meta.router#MetaRoutes' }
        ]
    },
    {
        path: 'arrecadacao',
        canLoad: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        canActivate: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        children: [
            { path: '', loadChildren: './pages/arrecadacao/arrecadacao.router#ArrecadacaoRoutes' }
        ]
    },
    {
        path: 'menu-config',
        canLoad: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        canActivate: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        children: [
            { path: '', loadChildren: './pages/menu-config/menu-config.router#MenuConfigRoutes' }
        ]
    },
    {
        path: 'usuario',
        canLoad: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        canActivate: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        children: [
            { path: '', loadChildren: './pages/usuario/usuario.router#UsuarioRoutes' }
        ]
    },
    {
        path: 'tema',
        canLoad: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        canActivate: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        children: [
            { path: '', loadChildren: './pages/tema/tema.router#TemaRoutes' }
        ]
    },
    {
        path: 'email-config',
        canLoad: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        canActivate: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        children: [
            { path: '', loadChildren: './pages/email-config/email-config.router#EmaiLConfigRoutes' }
        ]
    },
    {
        path: 'contato',
        canLoad: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        canActivate: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        children: [
            { path: '', loadChildren: './pages/contatos/contatos.router#ContatoRoutes' }
        ]
    },
    {
        path: 'dados-contato',
        canLoad: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        canActivate: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        children: [
            { path: '', loadChildren: './pages/contato-dados/dados.router#DadosRoutes' }
        ]
    },
    {
        path: 'redes-sociais',
        canLoad: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        canActivate: [_security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_4__["LoggedInGuard"]],
        children: [
            { path: '', loadChildren: './pages/redes-sociais/redes-sociais.router#RedesSociaisRoutes' }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/usuario.service */ "./src/app/service/usuario.service.ts");



let AppComponent = class AppComponent {
    constructor(_userService) {
        this._userService = _userService;
        this.title = 'panel';
    }
    verifySession() {
        return this._userService.verifySession();
    }
};
AppComponent.ctorParameters = () => [
    { type: _service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"].forRoot()
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/common/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/common/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/common/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/usuario.service */ "./src/app/service/usuario.service.ts");



let HeaderComponent = class HeaderComponent {
    constructor(_userService) {
        this._userService = _userService;
        this.nome = '';
    }
    ngOnInit() {
    }
    verificaSessao() {
        return true;
    }
    getReducedName() {
        let name = this._userService.carregarNome().split(' ');
        return `${name[0].slice(0, 1)}${name[name.length - 1].slice(0, 1)}`;
    }
    getName() {
        return this._userService.carregarNome();
    }
    logout() {
        this._userService
            .sair();
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/common/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/common/menu/menu.component.css":
/*!************************************************!*\
  !*** ./src/app/common/menu/menu.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-sidebar{\r\n    overflow:hidden !important; \r\n    position:absolute !important;\r\n    \r\n}\r\n[hidden]{\r\n    display: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL21lbnUvbWVudS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLDRCQUE0Qjs7QUFFaEM7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21tb24vbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1zaWRlYmFye1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuICFpbXBvcnRhbnQ7IFxyXG4gICAgcG9zaXRpb246YWJzb2x1dGUgIWltcG9ydGFudDtcclxuICAgIFxyXG59XHJcbltoaWRkZW5de1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/common/menu/menu.component.ts":
/*!***********************************************!*\
  !*** ./src/app/common/menu/menu.component.ts ***!
  \***********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/usuario.service */ "./src/app/service/usuario.service.ts");



let MenuComponent = class MenuComponent {
    constructor(_usuarioService) {
        this._usuarioService = _usuarioService;
        this.nome = "Nome";
        this.status = "Online";
        this.classeStatus = "text-success";
        this.menus = [];
        this.semfoto = 'assets/icon.png';
    }
    ngOnInit() {
        this.foto = 'assets/icon.png';
        this.getName();
    }
    getName() {
        this.nome = this._usuarioService.carregarNome();
        this.getMenu();
    }
    getMenu() {
        this.menus = [
            { url: 'area', icone: ' fa-filter', menu: 'Área' },
            { url: 'meta', icone: ' fa-pencil-square-o', menu: 'Meta' },
            { url: 'arrecadacao', icone: ' fa-money', menu: 'Transparência' },
            { url: 'menu-config', icone: ' fa-bars', menu: 'Menu' },
            { url: 'usuario', icone: ' fa-user', menu: 'Usuário' },
            { url: 'tema', icone: ' fa-heartbeat', menu: 'Tema' },
            { url: 'email-config', icone: 'fa-envelope', menu: 'Configuração de Email' },
            { url: 'contato', icone: 'fa-bell', menu: 'Contatos' },
            { url: 'dados-contato', icone: 'fa-map-pin', menu: 'Dado de Contato' },
            { url: 'redes-sociais', icone: 'fa-twitter', menu: 'Redes Sociais' },
        ];
    }
    verificaSessao() {
        return true;
    }
};
MenuComponent.ctorParameters = () => [
    { type: src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/common/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/common/menu/menu.component.css")]
    })
], MenuComponent);



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-logar{\r\n    background-color: #8263ff;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tbG9nYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODI2M2ZmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/usuario.service */ "./src/app/service/usuario.service.ts");





let LoginComponent = class LoginComponent {
    constructor(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.type = 'password';
    }
    ngOnInit() {
        this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] })
        });
    }
    onSubmit() {
        this.logar();
    }
    logar() {
        this._userService
            .auth(this.formLogin.value)
            .subscribe((response) => {
            if (response.status) {
                this._router.navigate(['/area']);
                this._userService.notifyLogin();
            }
            else {
                this.isError = true;
                this.msgError = 'Login ou senha incorretos';
            }
        });
    }
    changeType() {
        console.log('changeType');
        this.type = this.type == 'password' ? 'text' : 'password';
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_service_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/security/auth.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/security/auth.interceptor.ts ***!
  \**********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/usuario.service */ "./src/app/service/usuario.service.ts");



let AuthInterceptor = class AuthInterceptor {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(request, next) {
        const userService = this.injector.get(_service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]);
        if (userService.verifySession()) {
            const authRequest = request.clone({
                setHeaders: { 'x-access-token': userService.getToken() }
            });
            return next.handle(authRequest);
        }
        return next.handle(request);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/security/loggedIn.guard.ts":
/*!********************************************!*\
  !*** ./src/app/security/loggedIn.guard.ts ***!
  \********************************************/
/*! exports provided: LoggedInGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function() { return LoggedInGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/usuario.service */ "./src/app/service/usuario.service.ts");



let LoggedInGuard = class LoggedInGuard {
    constructor(_userService) {
        this._userService = _userService;
    }
    checkAuthentication(path) {
        const loggedIn = this._userService.verifySession();
        if (!loggedIn) {
            this._userService.handleLogin();
        }
        return loggedIn;
    }
    canLoad(route) {
        return this.checkAuthentication(`${route.path}`);
    }
    canActivate(activatedRouter, routerState) {
        return this.checkAuthentication(`${activatedRouter.routeConfig.path}`);
    }
};
LoggedInGuard.ctorParameters = () => [
    { type: _service_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] }
];
LoggedInGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoggedInGuard);



/***/ }),

/***/ "./src/app/service/notification.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/notification.service.ts ***!
  \*************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotificationService = class NotificationService {
    constructor() {
        this.notifier = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    notify(obj) {
        this.notifier.emit(obj);
    }
};
NotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotificationService);



/***/ }),

/***/ "./src/app/service/usuario.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/usuario.service.ts ***!
  \********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let UsuarioService = class UsuarioService {
    constructor(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.notifierLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.notifierLogout = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.webService = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api}/usuario`;
        this.host = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].host;
    }
    carregarNome() {
        return localStorage.getItem('name');
    }
    verifySession() {
        return localStorage.getItem('name') != undefined;
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
    getById(id) {
        return this._http.get(`${this.webService}/${id}`);
    }
    delete(id) {
        return this._http.delete(`${this.webService}/${id}`);
    }
    auth(obj) {
        return this._http.post(`${this.host}/auth`, obj)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((result) => {
            if (result.status) {
                localStorage.setItem('token', result.token);
                localStorage.setItem('email', result.email);
                localStorage.setItem('name', result.name);
            }
        }));
    }
    notifyLogin() {
        this.notifierLogin.emit(true);
    }
    sair() {
        localStorage.clear();
        this.notifierLogout.emit();
        this._router.navigate(['/']);
    }
    handleLogin() {
        this._router.navigate(['/']);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    setToken(token) {
        localStorage.setItem('token', token);
    }
    handleForbiden() {
        this._router.navigate(['/forbiden']);
    }
};
UsuarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UsuarioService);



/***/ }),

/***/ "./src/app/shared/CustomCurrencyMaskConfig.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/CustomCurrencyMaskConfig.ts ***!
  \****************************************************/
/*! exports provided: CustomCurrencyMaskConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomCurrencyMaskConfig", function() { return CustomCurrencyMaskConfig; });
const CustomCurrencyMaskConfig = {
    align: "right",
    allowNegative: false,
    allowZero: true,
    decimal: ',',
    precision: 2,
    prefix: 'R$ ',
    suffix: "",
    thousands: ".",
    nullable: true
};


/***/ }),

/***/ "./src/app/shared/input/input.component.css":
/*!**************************************************!*\
  !*** ./src/app/shared/input/input.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pbnB1dC9pbnB1dC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/input/input.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/input/input.component.ts ***!
  \*************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let InputComponent = class InputComponent {
    constructor() {
        this.showTip = true;
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
        this.input = this.model || this.control;
        if (this.input === undefined) {
            throw new Error('Este componente precisar ser usado com a diretiva ngModel ou formControlName');
        }
    }
    hasSuccess() {
        return this.input.valid && (this.input.dirty || this.input.touched || !this.input.empty);
    }
    hasError() {
        return this.input.invalid && (this.input.dirty || this.input.touched);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InputComponent.prototype, "errorMessage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InputComponent.prototype, "label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], InputComponent.prototype, "showTip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], { static: false })
], InputComponent.prototype, "model", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], { static: false })
], InputComponent.prototype, "control", void 0);
InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-input',
        template: __webpack_require__(/*! raw-loader!./input.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/input/input.component.html"),
        styles: [__webpack_require__(/*! ./input.component.css */ "./src/app/shared/input/input.component.css")]
    })
], InputComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-currency */ "./node_modules/ngx-currency/fesm2015/ngx-currency.js");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/header/header.component */ "./src/app/common/header/header.component.ts");
/* harmony import */ var _common_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/menu/menu.component */ "./src/app/common/menu/menu.component.ts");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./input/input.component */ "./src/app/shared/input/input.component.ts");
/* harmony import */ var _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./snackbar/snackbar.component */ "./src/app/shared/snackbar/snackbar.component.ts");
/* harmony import */ var _CustomCurrencyMaskConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CustomCurrencyMaskConfig */ "./src/app/shared/CustomCurrencyMaskConfig.ts");
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../service/notification.service */ "./src/app/service/notification.service.ts");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _security_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../security/auth.interceptor */ "./src/app/security/auth.interceptor.ts");
/* harmony import */ var _security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../security/loggedIn.guard */ "./src/app/security/loggedIn.guard.ts");

var SharedModule_1;















Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_13___default.a, 'pt-BR');
let SharedModule = SharedModule_1 = class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule_1,
            providers: [
                _service_notification_service__WEBPACK_IMPORTED_MODULE_12__["NotificationService"],
                _security_loggedIn_guard__WEBPACK_IMPORTED_MODULE_15__["LoggedInGuard"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"], useValue: 'pt-BR' },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _security_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"], multi: true }
            ]
        };
    }
};
SharedModule = SharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _common_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _common_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
            _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_10__["SnackbarComponent"],
            _input_input_component__WEBPACK_IMPORTED_MODULE_9__["InputComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_currency__WEBPACK_IMPORTED_MODULE_6__["NgxCurrencyModule"].forRoot(_CustomCurrencyMaskConfig__WEBPACK_IMPORTED_MODULE_11__["CustomCurrencyMaskConfig"]),
        ],
        exports: [
            _common_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _common_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
            _snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_10__["SnackbarComponent"],
            _input_input_component__WEBPACK_IMPORTED_MODULE_9__["InputComponent"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ngx_currency__WEBPACK_IMPORTED_MODULE_6__["NgxCurrencyModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/snackbar/snackbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/snackbar/snackbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zbmFja2Jhci9zbmFja2Jhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/snackbar/snackbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/snackbar/snackbar.component.ts ***!
  \*******************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/notification.service */ "./src/app/service/notification.service.ts");






let SnackbarComponent = class SnackbarComponent {
    constructor(_notificationService) {
        this._notificationService = _notificationService;
        this.message = 'Hello There!';
        this.snackVisibility = 'hidden';
    }
    ngOnInit() {
        this._notificationService
            .notifier
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((obj) => {
            console.log(obj);
            this.tipAlert = obj.status == true ? 'alert-success' : 'alert-danger';
            this.message = obj.message;
            this.snackVisibility = 'visible';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(message => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(3000))).subscribe(timer => this.snackVisibility = 'hidden');
    }
};
SnackbarComponent.ctorParameters = () => [
    { type: src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_5__["NotificationService"] }
];
SnackbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-snackbar',
        template: __webpack_require__(/*! raw-loader!./snackbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/snackbar/snackbar.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('snack-visibility', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    opacity: 0,
                    bottom: '0px'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    opacity: 1,
                    bottom: '60px'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('hidden => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms 0s ease-in')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('visible => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('500ms 0s ease-out'))
            ])
        ],
        styles: [__webpack_require__(/*! ./snackbar.component.css */ "./src/app/shared/snackbar/snackbar.component.css")]
    })
], SnackbarComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    host: 'http://localhost:3006',
    api: 'http://localhost:3006/api/v1'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Brito\Documents\Projetos\corrente-do-bem\projeto\panel\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map