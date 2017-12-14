webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/pages/lock/lock.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n    <nav class=\"navbar navbar-primary navbar-transparent navbar-fixed-top\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu-example\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"/#/dashboard\">MD Pro Angular</a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"menu-example\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a href=\"/dashboard\">\n                            <i class=\"material-icons\">dashboard</i> Dashboard\n                        </a>\n                    </li>\n                    <li class=\"\">\n                        <a href=\"/pages/register\">\n                            <i class=\"material-icons\">person_add</i> Register\n                        </a>\n                    </li>\n                    <li class=\"\">\n                        <a href=\"/pages/login\">\n                            <i class=\"material-icons\">fingerprint</i> Login\n                        </a>\n                    </li>\n                    <li class=\" active \">\n                        <a href=\"/pages/lock\">\n                            <i class=\"material-icons\">lock_open</i> Lock\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <div class=\"full-page lock-page\" filter-color=\"black\" data-image=\"../assets/img/lock.jpeg\">\n        <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\n        <div class=\"content\">\n            <form method=\"#\" action=\"#\">\n                <div class=\"card card-profile card-hidden\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#pablo\">\n                            <img class=\"avatar\" src=\"../assets/img/faces/avatar.jpg\" alt=\"...\">\n                        </a>\n                    </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Tania Andrew</h4>\n                        <div class=\"form-group label-floating\">\n                            <label class=\"control-label\">Enter Password</label>\n                            <input type=\"password\" class=\"form-control\">\n                        </div>\n                    </div>\n                    <div class=\"card-footer\">\n                        <button type=\"button\" class=\"btn btn-rose btn-round\">Unlock</button>\n                    </div>\n                </div>\n            </form>\n        </div>\n        <footer class=\"footer\">\n            <div class=\"container\">\n                <nav class=\"pull-left\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                Home\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Company\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Portfolio\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Blog\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n                <p class=\"copyright pull-right\">\n                    &copy;\n                    {{test | date: 'yyyy'}}\n                    <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n                </p>\n            </div>\n        </footer>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/lock/lock.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LockComponent = /** @class */ (function () {
    function LockComponent() {
        this.test = new Date();
    }
    LockComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    LockComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    LockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'lock-cmp',
            template: __webpack_require__("../../../../../src/app/pages/lock/lock.component.html")
        })
    ], LockComponent);
    return LockComponent;
}());

//# sourceMappingURL=lock.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n    <nav class=\"navbar navbar-primary navbar-transparent navbar-fixed-top\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu-example\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"/\">MSF</a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"menu-example\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a href=\"/\">\n                            <i class=\"material-icons\">dashboard</i> Forum\n                        </a>\n                    </li>\n                    <li class=\"\">\n                        <a href=\"/pages/register\">\n                            <i class=\"material-icons\">person_add</i> Register\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <div class=\"full-page login-page\" filter-color=\"black\" data-image=\"../../../assets/img/login.jpeg\">\n        <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\n        <div class=\"content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3\">\n                        <form #f2=\"ngForm\" (ngSubmit)=login(f2)>\n                            <div class=\"card card-login card-hidden\">\n                                <div class=\"card-header text-center\" data-background-color=\"rose\">\n                                    <h4 class=\"card-title\">Login</h4>\n                                    <div class=\"social-line\">\n                                        <a (click)=\"auth0.login()\"  class=\"btn btn-just-icon btn-simple\">\n                                            <i class=\"fa fa-facebook-square\"></i>\n                                        </a>\n                                        <a (click)=\"auth0.login()\" class=\"btn btn-just-icon btn-simple\">\n                                            <i class=\"fa fa-google-plus\"></i>\n                                        </a>\n                                    </div>\n                                </div>\n                                <div class=\"card-content\">\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"material-icons\">email</i>\n                                        </span>\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">Email/Username</label>\n                                            <input name=\"username\" ngModel #username=\"ngModel\" type=\"text\" class=\"form-control\" required>\n                                            <small [hidden]=\"username.valid||!username.touched\" class=\"text-danger\">\n                                                    required\n                                                  </small>\n                                        </div>\n                                    </div>\n                                    <div class=\"input-group\">\n                                        <span class=\"input-group-addon\">\n                                            <i class=\"material-icons\">lock_outline</i>\n                                        </span>\n                                        <div class=\"form-group label-floating\">\n                                            <label class=\"control-label\">Password</label>\n                                            <input name=\"password\" ngModel #password=\"ngModel\" type=\"password\" class=\"form-control\" required >\n                                            <small [hidden]=\"password.valid||!password.touched\" class=\"text-danger\">\n                                                    required\n                                                  </small>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"footer text-center\">\n                                    <button [disabled]=\"!f2.valid\" type=\"submit\" class=\"btn btn-rose btn-simple btn-wd btn-lg\">Let's go</button>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <footer class=\"footer\">\n            <div class=\"container\">\n                <p class=\"copyright pull-right\">\n                    &copy;\n                    {{test | date: 'yyyy'}}\n                     made with no name for a better web\n                </p>\n            </div>\n        </footer>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_services_authentification_service__ = __webpack_require__("../../../../../src/services/authentification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_services_auth0_service__ = __webpack_require__("../../../../../src/services/auth0.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, auth0) {
        this.authService = authService;
        this.router = router;
        this.auth0 = auth0;
        this.test = new Date();
        this.authService = authService;
        this.auth0 = auth0;
    }
    LoginComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    LoginComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    LoginComponent.prototype.login = function (f) {
        var _this = this;
        console.log(f);
        this.authService.login(f.value.username, f.value.password).subscribe(function (value) {
            if (value.error) {
                _this.showNotification(value.error);
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent.prototype.showNotification = function (html) {
        console.log(html);
        $.notify({
            icon: "notifications",
            message: html
        }, {
            type: 'rose',
            timer: 3000,
            placement: {
                from: 'top',
                align: 'right'
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'login-cmp',
            template: __webpack_require__("../../../../../src/app/pages/login/login.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_services_authentification_service__["a" /* AuthentificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_services_authentification_service__["a" /* AuthentificationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_services_auth0_service__["a" /* Auth0Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_services_auth0_service__["a" /* Auth0Service */]) === "function" && _c || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_routing__ = __webpack_require__("../../../../../src/app/pages/pages.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pricing_pricing_component__ = __webpack_require__("../../../../../src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lock_lock_component__ = __webpack_require__("../../../../../src/app/pages/lock/lock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_services_authentification_service__ = __webpack_require__("../../../../../src/services/authentification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_services_auth0_service__ = __webpack_require__("../../../../../src/services/auth0.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_services_authGard_service__ = __webpack_require__("../../../../../src/services/authGard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { MdIconModule, MdCardModule, MdInputModule, MdCheckboxModule, MdButtonModule } from '@angular/material';

// import { FlexLayoutModule } from '@angular/flex-layout';









var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__pages_routing__["a" /* PagesRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pricing_pricing_component__["a" /* PricingComponent */],
                __WEBPACK_IMPORTED_MODULE_7__lock_lock_component__["a" /* LockComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10_services_authentification_service__["a" /* AuthentificationService */],
                __WEBPACK_IMPORTED_MODULE_11_services_auth0_service__["a" /* Auth0Service */],
                __WEBPACK_IMPORTED_MODULE_12_services_authGard_service__["a" /* AuthGuard */]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());

//# sourceMappingURL=pages.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_register_component__ = __webpack_require__("../../../../../src/app/pages/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pricing_pricing_component__ = __webpack_require__("../../../../../src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lock_lock_component__ = __webpack_require__("../../../../../src/app/pages/lock/lock.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/pages/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_services_authGard_service__ = __webpack_require__("../../../../../src/services/authGard.service.ts");





var PagesRoutes = [
    {
        path: '',
        children: [{
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_4_services_authGard_service__["a" /* AuthGuard */]]
            }, {
                path: 'lock',
                component: __WEBPACK_IMPORTED_MODULE_2__lock_lock_component__["a" /* LockComponent */]
            }, {
                path: 'register',
                component: __WEBPACK_IMPORTED_MODULE_0__register_register_component__["a" /* RegisterComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_4_services_authGard_service__["a" /* AuthGuard */]]
            }, {
                path: 'pricing',
                component: __WEBPACK_IMPORTED_MODULE_1__pricing_pricing_component__["a" /* PricingComponent */]
            }]
    }
];
//# sourceMappingURL=pages.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n    <nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu-example\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"/#/dashboard\">MD Pro Angular</a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"menu-example\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a href=\"/dashboard\">\n                            <i class=\"material-icons\">dashboard</i> Dashboard\n                        </a>\n                    </li>\n                    <li class=\"\">\n                        <a href=\"/pages/register\">\n                            <i class=\"material-icons\">person_add</i> Register\n                        </a>\n                    </li>\n                    <li class=\"\">\n                        <a href=\"/pages/login\">\n                            <i class=\"material-icons\">fingerprint</i> Login\n                        </a>\n                    </li>\n                    <li class=\"\">\n                        <a href=\"/pages/lock\">\n                            <i class=\"material-icons\">lock_open</i> Lock\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <div class=\"full-page pricing-page\" data-image=\"../assets/img/bg-pricing.jpeg\">\n        <div class=\"content\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-md-offset-3 text-center\">\n                        <h2 class=\"title\">Pick the best plan for you</h2>\n                        <h5 class=\"description\">You have Free Unlimited Updates and Premium Support on each package.</h5>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-3\">\n                        <div class=\"card card-pricing card-plain\">\n                            <div class=\"card-content\">\n                                <h6 class=\"category\">Freelancer</h6>\n                                <div class=\"icon\">\n                                    <i class=\"material-icons\">weekend</i>\n                                </div>\n                                <h3 class=\"card-title\">FREE</h3>\n                                <p class=\"card-description\">\n                                    This is good if your company size is between 2 and 10 Persons.\n                                </p>\n                                <a href=\"#pablo\" class=\"btn btn-white btn-round\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"card card-pricing card-raised\">\n                            <div class=\"card-content\">\n                                <h6 class=\"category\">Small Company</h6>\n                                <div class=\"icon icon-rose\">\n                                    <i class=\"material-icons\">home</i>\n                                </div>\n                                <h3 class=\"card-title\">$29</h3>\n                                <p class=\"card-description\">\n                                    This is good if your company size is between 2 and 10 Persons.\n                                </p>\n                                <a href=\"#pablo\" class=\"btn btn-rose btn-round\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"card card-pricing card-plain\">\n                            <div class=\"card-content\">\n                                <h6 class=\"category\">Medium Company</h6>\n                                <div class=\"icon\">\n                                    <i class=\"material-icons\">business</i>\n                                </div>\n                                <h3 class=\"card-title\">$69</h3>\n                                <p class=\"card-description\">\n                                    This is good if your company size is between 11 and 99 Persons.\n                                </p>\n                                <a href=\"#pablo\" class=\"btn btn-white btn-round\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-3\">\n                        <div class=\"card card-pricing card-plain\">\n                            <div class=\"card-content\">\n                                <h6 class=\"category\">Enterprise</h6>\n                                <div class=\"icon\">\n                                    <i class=\"material-icons\">account_balance</i>\n                                </div>\n                                <h3 class=\"card-title\">$159</h3>\n                                <p class=\"card-description\">\n                                    This is good if your company size is 99+ persons.\n                                </p>\n                                <a href=\"#pablo\" class=\"btn btn-white btn-round\">Choose Plan</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <footer class=\"footer\">\n            <div class=\"container\">\n                <nav class=\"pull-left\">\n                    <ul>\n                        <li>\n                            <a href=\"#\">\n                                Home\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Company\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Portfolio\n                            </a>\n                        </li>\n                        <li>\n                            <a href=\"#\">\n                                Blog\n                            </a>\n                        </li>\n                    </ul>\n                </nav>\n                <p class=\"copyright pull-right\">\n                    &copy;\n                    {{test | date: 'yyyy'}}\n                    <a href=\"https://www.creative-tim.com\">Creative Tim</a>, made with love for a better web\n                </p>\n            </div>\n        </footer>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/pricing/pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
        this.test = new Date();
    }
    PricingComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    PricingComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
    };
    PricingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'pricing-cmp',
            template: __webpack_require__("../../../../../src/app/pages/pricing/pricing.component.html")
        })
    ], PricingComponent);
    return PricingComponent;
}());

//# sourceMappingURL=pricing.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n    <nav class=\"navbar navbar-primary navbar-transparent navbar-absolute\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#menu-example\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a class=\"navbar-brand\" href=\"/\">MSF</a>\n            </div>\n            <div class=\"collapse navbar-collapse\" id=\"menu-example\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a href=\"/\">\n                            <i class=\"material-icons\">dashboard</i> Forum\n                        </a>\n                    </li>\n                    <li class=\"\">\n                        <a href=\"/pages/login\">\n                            <i class=\"material-icons\">fingerprint</i> Login\n                        </a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </nav>\n    <div class=\"full-page register-page\" filter-color=\"black\" data-image=\"../assets/img/register.jpeg\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-10 col-md-offset-1\">\n                    <div class=\"card card-signup\">\n                        <h2 class=\"card-title text-center\">Register</h2>\n                        <div class=\"row\">\n                            <div class=\"col-md-5 col-md-offset-1\">\n                                <div class=\"card-content\">\n                                    <div class=\"info info-horizontal\">\n                                        <div class=\"icon icon-rose\">\n                                            <i class=\"material-icons\">timeline</i>\n                                        </div>\n                                        <div class=\"description\">\n                                            <h4 class=\"info-title\">Marketing</h4>\n                                            <p class=\"description\">\n                                                We've created the marketing campaign of the website. It was a very interesting collaboration.\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"info info-horizontal\">\n                                        <div class=\"icon icon-primary\">\n                                            <i class=\"material-icons\">code</i>\n                                        </div>\n                                        <div class=\"description\">\n                                            <h4 class=\"info-title\">Fully Coded in HTML5</h4>\n                                            <p class=\"description\">\n                                                We've developed the website with HTML5 and CSS3. The client has access to the code using GitHub.\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div class=\"info info-horizontal\">\n                                        <div class=\"icon icon-info\">\n                                            <i class=\"material-icons\">group</i>\n                                        </div>\n                                        <div class=\"description\">\n                                            <h4 class=\"info-title\">Built Audience</h4>\n                                            <p class=\"description\">\n                                                There is also a Fully Customizable CMS Admin Dashboard for this product.\n                                            </p>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-5\">\n                                <div class=\"social text-center\">\n                                    <button (click)=\"auth0.login()\" class=\"btn btn-just-icon btn-round btn-twitter\">\n                                        <i class=\"fa fa-twitter\"></i>\n                                    </button>\n                                    <button (click)=\"auth0.login()\" class=\"btn btn-just-icon btn-round btn-google\">\n                                        <i class=\"fa fa-google\"></i>\n                                    </button>\n                                    <button (click)=\"auth0.login()\" class=\"btn btn-just-icon btn-round btn-facebook\">\n                                        <i class=\"fa fa-facebook\"> </i>\n                                    </button>\n                                </div>\n                                <form class=\"form\" #f=\"ngForm\" (ngSubmit)=\"register(f)\">\n                                    <div class=\"card-content\">\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">face</i>\n                                            </span>\n                                            <input type=\"text\" class=\"form-control\" ngModel #username=\"ngModel\" name=\"username\" placeholder=\"Username...\" minlength=\"5\" required>\n                                            <small [hidden]=\"username.valid || (username.pristine && !f.submitted)\" class=\"text-danger\">\n                                                    Username is required\n                                                  </small>\n                                        </div>\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">email</i>\n                                            </span>\n                                            <input type=\"email\" class=\"form-control\" ngModel #email=\"ngModel\" name=\"email\" placeholder=\"Email...\" required pattern=\"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$\">\n                                            <small [hidden]=\"email.valid || (email.pristine && !f.submitted)\" class=\"text-danger\">\n                                                    Email is required and format should be <i>john@doe.com</i>.\n                                                  </small>\n                                        </div>\n                                        <div class=\"input-group\">\n                                            <span class=\"input-group-addon\">\n                                                <i class=\"material-icons\">lock_outline</i>\n                                            </span>\n                                            <input type=\"password\" ngModel #password=\"ngModel\" name=\"password\" placeholder=\"Password...\" minlength=\"5\" class=\"form-control\" required />\n                                            <small [hidden]=\"password.valid || (password.pristine && !f.submitted)\" class=\"text-danger\">\n                                                    Password is required\n                                                  </small>\n                                        </div>\n                                        <!-- If you want to add a checkbox to this form, uncomment this code -->\n                                        <!-- <div class=\"checkbox\">\n                                            <label>\n                                                <input type=\"checkbox\" name=\"optionsCheckboxes\" checked> I agree to the\n                                                <a href=\"#something\">terms and conditions</a>.\n                                            </label>\n                                        </div> -->\n                                    </div>\n                                    <div class=\"footer text-center\">\n                                        <button class=\"btn btn-primary btn-round\">Get Started</button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <footer class=\"footer\">\n                <div class=\"container\">\n                    <p class=\"copyright pull-right\">\n                        &copy;\n                        {{test | date: 'yyyy'}}\n                         made with no name for a better web\n                    </p>\n                </div>\n            </footer>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_services_auth0_service__ = __webpack_require__("../../../../../src/services/auth0.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_services_authentification_service__ = __webpack_require__("../../../../../src/services/authentification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth0, as) {
        this.auth0 = auth0;
        this.as = as;
        this.test = new Date();
        this.auth0 = auth0;
    }
    RegisterComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    RegisterComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
    };
    RegisterComponent.prototype.register = function (f) {
        if (f.valid) {
            this.as.addUser(f.value.email, f.value.username, f.value.password);
        }
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'register-cmp',
            template: __webpack_require__("../../../../../src/app/pages/register/register.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_services_auth0_service__["a" /* Auth0Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_services_auth0_service__["a" /* Auth0Service */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_services_authentification_service__["a" /* AuthentificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_services_authentification_service__["a" /* AuthentificationService */]) === "function" && _b || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/services/authGard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_services_authentification_service__ = __webpack_require__("../../../../../src/services/authentification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.auth.isLoggedIn()) {
            this.router.navigate(['/home']);
            this.showNotification("You are already logged in!");
            return false;
        }
        return true;
    };
    AuthGuard.prototype.showNotification = function (html) {
        console.log(html);
        $.notify({
            icon: "notifications",
            message: html
        }, {
            type: 'rose',
            timer: 3000,
            placement: {
                from: 'top',
                align: 'left'
            }
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_services_authentification_service__["a" /* AuthentificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_services_authentification_service__["a" /* AuthentificationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _b || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());

//# sourceMappingURL=authGard.service.js.map

/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map