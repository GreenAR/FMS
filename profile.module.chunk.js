webpackJsonp(["profile.module"],{

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card card-profile\">\r\n                    <div class=\"card-avatar\">\r\n                        <a href=\"#pablo\">\r\n                            <img class=\"img\" [src]=\"user?.image!=null?user.image:'assets/img/placeholder.jpg'\" />\r\n                        </a>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <h6 class=\"category text-gray\">{{user?.role}}</h6>\r\n                        <h4 class=\"card-title\">{{user?.username}}</h4>\r\n                        <p class=\"description\">\r\n                            Firstname: {{user?.firstName?user?.firstName:'N/D'}}\r\n                        </p>\r\n                        <p class=\"description\">\r\n                                Lastname:  {{user?.lastName?user?.lastName:'N/D'}}\r\n                        </p>\r\n                        <p class=\"description\">\r\n                                Gender:  {{user?.gender?user?.gender:'N/D'}}\r\n                        </p>\r\n\r\n                        <a *ngIf=\"!showbtn()\" href=\"/chat?id={{user?.idMember}}\" class=\"btn btn-rose btn-round\">Send Message</a>\r\n                        <a *ngIf=\"showbtn()\" href=\"/user\" class=\"btn btn-rose btn-round\">Update profile</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_services_data_service__ = __webpack_require__("../../../../../src/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_services_authentification_service__ = __webpack_require__("../../../../../src/services/authentification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(activatedRoute, ds, auth) {
        this.activatedRoute = activatedRoute;
        this.ds = ds;
        this.auth = auth;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (queryParams) {
            _this.userId = queryParams['id'];
            var url = "http://139.99.107.8/forum-ms-web/v0/user/" + _this.userId;
            _this.ds.getAll(url).subscribe(function (val) {
                _this.user = val;
                _this.user.image = _this.traitPic(val.image);
            });
        });
    };
    ProfileComponent.prototype.traitPic = function (pic) {
        var path = null;
        if (pic) {
            if (pic.indexOf("/opt/wildfly/welcome-content") !== -1) {
                path = pic.replace("/opt/wildfly/welcome-content", "139.99.107.8");
                path = "http://" + path;
            }
            else {
                path = pic;
            }
        }
        return path;
    };
    ProfileComponent.prototype.showbtn = function () {
        return this.auth.currentUser().user_id == this.userId;
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'profile-cmp',
            template: __webpack_require__("../../../../../src/app/profile/profile.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_services_data_service__["a" /* DataService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_services_authentification_service__["a" /* AuthentificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_services_authentification_service__["a" /* AuthentificationService */]) === "function" && _c || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_services_authentification_service__ = __webpack_require__("../../../../../src/services/authentification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_services_data_service__ = __webpack_require__("../../../../../src/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_services_authGard1_service__ = __webpack_require__("../../../../../src/services/authGard1.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_profile_profile_routing__ = __webpack_require__("../../../../../src/app/profile/profile.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_8_app_profile_profile_routing__["a" /* ProfileRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_9_app_profile_profile_component__["a" /* ProfileComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4_services_authentification_service__["a" /* AuthentificationService */],
                __WEBPACK_IMPORTED_MODULE_6_services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_7_services_authGard1_service__["a" /* AuthGuard1 */]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_services_authGard1_service__ = __webpack_require__("../../../../../src/services/authGard1.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");


var ProfileRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_1_app_profile_profile_component__["a" /* ProfileComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_0_services_authGard1_service__["a" /* AuthGuard1 */]]
            }]
    }
];
//# sourceMappingURL=profile.routing.js.map

/***/ })

});
//# sourceMappingURL=profile.module.chunk.js.map