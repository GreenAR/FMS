webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./calendar/calendar.module": [
		"../../../../../src/app/calendar/calendar.module.ts",
		"calendar.module"
	],
	"./charts/charts.module": [
		"../../../../../src/app/charts/charts.module.ts",
		"charts.module"
	],
	"./chat/chat.module": [
		"../../../../../src/app/chat/chat.module.ts",
		"chat.module",
		"common"
	],
	"./components/components.module": [
		"../../../../../src/app/components/components.module.ts",
		"components.module"
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/dashboard/dashboard.module.ts",
		"dashboard.module"
	],
	"./forms/forms.module": [
		"../../../../../src/app/forms/forms.module.ts",
		"forms.module"
	],
	"./groupes/group.module": [
		"../../../../../src/app/groupes/group.module.ts",
		"group.module",
		"common"
	],
	"./maps/maps.module": [
		"../../../../../src/app/maps/maps.module.ts",
		"maps.module"
	],
	"./pages/pages.module": [
		"../../../../../src/app/pages/pages.module.ts",
		"pages.module"
	],
	"./profile/profile.module": [
		"../../../../../src/app/profile/profile.module.ts",
		"profile.module",
		"common"
	],
	"./tables/tables.module": [
		"../../../../../src/app/tables/tables.module.ts",
		"tables.module"
	],
	"./timeline/timeline.module": [
		"../../../../../src/app/timeline/timeline.module.ts",
		"timeline.module"
	],
	"./userpage/user.module": [
		"../../../../../src/app/userpage/user.module.ts",
		"user.module",
		"common"
	],
	"./widgets/widgets.module": [
		"../../../../../src/app/widgets/widgets.module.ts",
		"widgets.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent(elRef) {
        this.elRef = elRef;
    }
    AppComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            body.classList.add("perfect-scrollbar-on");
        }
        else {
            body.classList.add("perfect-scrollbar-off");
        }
        $.material.init();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_footer_footer_module__ = __webpack_require__("../../../../../src/app/shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_navbar_navbar_module__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__layouts_admin_admin_layout_component__ = __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layouts_auth_auth_layout_component__ = __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_routing__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__sidebar_sidebar_module__["a" /* SidebarModule */],
                __WEBPACK_IMPORTED_MODULE_11__shared_navbar_navbar_module__["a" /* NavbarModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_15_environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["b" /* AngularFirestoreModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_13__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__ = __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__ = __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.ts");


var AppRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
        children: [
            {
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }, {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#Forms'
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule'
            }, {
                path: 'widgets',
                loadChildren: './widgets/widgets.module#WidgetsModule'
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            },
            {
                path: 'chat',
                loadChildren: './chat/chat.module#ChatModule'
            },
            {
                path: 'group',
                loadChildren: './groupes/group.module#GroupModule'
            },
            {
                path: 'profile',
                loadChildren: './profile/profile.module#ProfileModule'
            },
            {
                path: 'calendar',
                loadChildren: './calendar/calendar.module#CalendarModule'
            }, {
                path: '',
                loadChildren: './userpage/user.module#UserModule'
            }, {
                path: '',
                loadChildren: './timeline/timeline.module#TimelineModule'
            }
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
        children: [{
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }]
    }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/admin/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n    <!-- <div class=\"sidebar\" data-active-color=\"white\" data-background-color=\"red\" data-image=\"../assets/img/sidebar-1.jpg\"> -->\n        <!-- <div class=\"sidebar\" data-color=\"red\" data-image=\"\"> -->\n        <!-- <sidebar-cmp></sidebar-cmp> -->\n        <!-- <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-1.jpg)\"></div> -->\n    <!-- </div> -->\n    <div class=\"main-panel\">\n        <navbar-cmp></navbar-cmp>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"!isMap()\">\n            <footer-cmp></footer-cmp>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/admin/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__md_md_module__ = __webpack_require__("../../../../../src/app/md/md.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(location) {
        this.location = location;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            var $main_panel = $('.main-panel');
            $main_panel.perfectScrollbar();
        }
        this.navItems = [
            { type: __WEBPACK_IMPORTED_MODULE_1__md_md_module__["a" /* NavItemType */].NavbarLeft, title: 'Dashboard', iconClass: 'fa fa-dashboard' },
            {
                type: __WEBPACK_IMPORTED_MODULE_1__md_md_module__["a" /* NavItemType */].NavbarRight,
                title: '',
                iconClass: 'fa fa-bell-o',
                numNotifications: 5,
                dropdownItems: [
                    { title: 'Notification 1' },
                    { title: 'Notification 2' },
                    { title: 'Notification 3' },
                    { title: 'Notification 4' },
                    { title: 'Another Notification' }
                ]
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_1__md_md_module__["a" /* NavItemType */].NavbarRight,
                title: '',
                iconClass: 'fa fa-list',
                dropdownItems: [
                    { iconClass: "pe-7s-mail", title: 'Messages' },
                    { iconClass: "pe-7s-help1", title: 'Help Center' },
                    { iconClass: "pe-7s-tools", title: 'Settings' },
                    'separator',
                    { iconClass: "pe-7s-lock", title: 'Lock Screen' },
                    { iconClass: "pe-7s-close-circle", title: 'Log Out' }
                ]
            },
            { type: __WEBPACK_IMPORTED_MODULE_1__md_md_module__["a" /* NavItemType */].NavbarLeft, title: 'Search', iconClass: 'fa fa-search' },
            { type: __WEBPACK_IMPORTED_MODULE_1__md_md_module__["a" /* NavItemType */].NavbarLeft, title: 'Account' },
            {
                type: __WEBPACK_IMPORTED_MODULE_1__md_md_module__["a" /* NavItemType */].NavbarLeft,
                title: 'Dropdown',
                dropdownItems: [
                    { title: 'Action' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    'separator',
                    { title: 'Separated link' },
                ]
            },
            { type: __WEBPACK_IMPORTED_MODULE_1__md_md_module__["a" /* NavItemType */].NavbarLeft, title: 'Log out' }
        ];
    };
    AdminLayoutComponent.prototype.isMap = function () {
        // console.log(this.location.prepareExternalUrl(this.location.path()));
        if (this.location.prepareExternalUrl(this.location.path()) == '/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    AdminLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */]) === "function" && _a || Object])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
    var _a;
}());

//# sourceMappingURL=admin-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/auth/auth-layout.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/auth/auth-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.html")
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());

//# sourceMappingURL=auth-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/md/md-table/md-table.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"content table-responsive\">\n    <table class=\"table\">\n      <tbody>\n          <tr *ngFor=\"let row of data.dataRows\">\n            <!-- <td *ngFor=\"let cell of row\">{{ cell }}</td> -->\n            <td>\n                <div class=\"flag\">\n                    <img src=\"../../../assets/img/flags/{{row[0]}}.png\" alt=\"\">\n                </div>\n            </td>\n            <td>\n                {{row[1]}}\n            </td>\n            <td class=\"text-right\">\n                {{row[2]}}\n            </td>\n            <td class=\"text-right\">\n                {{row[3]}}\n            </td>\n          </tr>\n      </tbody>\n    </table>\n\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/md/md-table/md-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MdTableComponent = /** @class */ (function () {
    function MdTableComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "cardClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MdTableComponent.prototype, "data", void 0);
    MdTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'md-table',
            template: __webpack_require__("../../../../../src/app/md/md-table/md-table.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], MdTableComponent);
    return MdTableComponent;
}());

//# sourceMappingURL=md-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/md/md.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavItemType; });
/* unused harmony export LbdModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__md_table_md_table_component__ = __webpack_require__("../../../../../src/app/md/md-table/md-table.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavItemType;
(function (NavItemType) {
    NavItemType[NavItemType["Sidebar"] = 1] = "Sidebar";
    NavItemType[NavItemType["NavbarLeft"] = 2] = "NavbarLeft";
    NavItemType[NavItemType["NavbarRight"] = 3] = "NavbarRight"; // Right-aligned link on navbar in desktop mode, shown above sidebar items on collapsed sidebar in mobile mode
})(NavItemType || (NavItemType = {}));
var LbdModule = /** @class */ (function () {
    function LbdModule() {
    }
    LbdModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__md_table_md_table_component__["a" /* MdTableComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__md_table_md_table_component__["a" /* MdTableComponent */],
            ]
        })
    ], LbdModule);
    return LbdModule;
}());

//# sourceMappingURL=md.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container-fluid\">\n        <p class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}\n             made with no name for a better web\n        </p>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'footer-cmp',
            template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
        })
    ], FooterModule);
    return FooterModule;
}());

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <!--\n        <div class=\"navbar-minimize\">\n            <button id=\"minimizeSidebar\" class=\"btn btn-round btn-white btn-fill btn-just-icon\">\n                <i class=\"material-icons visible-on-sidebar-regular\">more_vert</i>\n                <i class=\"material-icons visible-on-sidebar-mini\">view_list</i>\n            </button>\n        </div>\n        -->\n\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"/\"> MSF </a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <div *ngIf=\"!As.isLoggedIn()\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <li>\n                        <a href=\"pages/register\">\n                            <i class=\"material-icons\">person_add</i>\n                            Register\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"pages/login\">\n                            <i class=\"material-icons\">fingerprint</i>\n                            Login\n                        </a>\n                    </li>\n                </ul>\n            </div>\n\n            <div *ngIf=\"As.isLoggedIn()\">\n                <ul class=\"nav navbar-nav navbar-right\">\n                    <!-- <li>\n                        <div style=\"width:400px;padding-top: 10px;padding-left: 15‒;padding-left: 15px;padding-right: 15px;\">\n                            <div class=\"progress\">\n                                <div class=\"progress-bar progress-bar-warning progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\"\n                                    aria-valuemax=\"100\" style=\"width:60%;animation: progress-bar-stripes 2s linear infinite;\">\n                                    60% Complete\n                                </div>\n                            </div>\n                        </div>\n                    </li> -->\n                    <li class=\"dropdown\" title=\"groups\">\n                        <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" >\n                            <i class=\"fa fa-users\" aria-hidden=\"true\"></i>                            \n                        </a>\n                        <ul class=\"dropdown-menu\">\n                                <li>\n                                    <a href=\"/group/add\">Create</a>\n                                </li>\n                                <li class=\"divider\"></li>\n                                <li>\n                                   <a href=\"/group/list\">Show groups</a>\n                                </li>\n                            </ul>\n                    </li>\n                    <li title=\"chat\">\n                            <a href=\"/chat\">\n                                <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n                            </a>\n                    </li>\n\n                    <li class=\"dropdown\">\n                        <a style=\"padding-top: 0px !important;text-transform: none !important;\" href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                            <img height=\"50\" width=\"50\" [src]=\"As.currentUser().image!='null'?As.currentUser().image:'../assets/img/placeholder.jpg'\" class=\"profile-image img-circle\"> {{As.currentUser().username}}\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                            <li>\n                                <a href=\"/user\">\n                                    <i class=\"fa fa-cog\"></i> Account</a>\n                            </li>\n                            <li class=\"divider\"></li>\n                            <li>\n                                <a (click)=\"logout()\">\n                                    <i class=\"fa fa-sign-out\"></i> Sign-out</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"separator hidden-lg hidden-md\"></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_routes_config__ = __webpack_require__("../../../../../src/app/sidebar/sidebar-routes.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_services_authentification_service__ = __webpack_require__("../../../../../src/services/authentification.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(as, router, location, renderer, element) {
        this.as = as;
        this.router = router;
        this.renderer = renderer;
        this.element = element;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_routes_config__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        if ($('body').hasClass('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        $('#minimizeSidebar').click(function () {
            var $btn = $(this);
            if (misc.sidebar_mini_active == true) {
                $('body').removeClass('sidebar-mini');
                misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    misc.sidebar_mini_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    };
    NavbarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() < 991) {
            return false;
        }
        return true;
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'MSF';
    };
    NavbarComponent.prototype.getPath = function () {
        // console.log(this.location);
        return this.location.prepareExternalUrl(this.location.path());
    };
    Object.defineProperty(NavbarComponent.prototype, "As", {
        get: function () {
            return this.as;
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.prototype.logout = function () {
        this.as.logout();
        console.log("okk");
        this.router.navigate(['/']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])("navbar-cmp"),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'navbar-cmp',
            template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_services_authentification_service__["a" /* AuthentificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_services_authentification_service__["a" /* AuthentificationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* Location */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _e || Object])
    ], NavbarComponent);
    return NavbarComponent;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_services_authentification_service__ = __webpack_require__("../../../../../src/services/authentification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_services_auth0_service__ = __webpack_require__("../../../../../src/services/auth0.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4_services_authentification_service__["a" /* AuthentificationService */],
                __WEBPACK_IMPORTED_MODULE_5_services_auth0_service__["a" /* Auth0Service */]
            ]
        })
    ], NavbarModule);
    return NavbarModule;
}());

//# sourceMappingURL=navbar.module.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar-routes.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'material-icons' },
    { path: '/pages/timeline', title: 'Timeline Page', icon: 'material-icons' },
    { path: '/pages/user', title: 'User Page', icon: 'material-icons' },
    { path: '/components/buttons', title: 'Buttons', icon: 'pe-7s-plugin' },
    { path: '/components/grid', title: 'Grid System', icon: 'pe-7s-plugin' },
    { path: '/components/panels', title: 'Panels', icon: 'pe-7s-plugin' },
    { path: '/components/sweet-alert', title: 'Sweet Alert', icon: 'pe-7s-plugin' },
    { path: '/components/notifications', title: 'Notifications', icon: 'pe-7s-plugin' },
    { path: '/components/icons', title: 'Icons', icon: 'pe-7s-plugin' },
    { path: '/components/typography', title: 'Typography', icon: 'pe-7s-plugin' },
    { path: '/forms/regular', title: 'Regular Forms', icon: 'pe-7s-note2' },
    { path: '/forms/extended', title: 'Extended Forms', icon: 'pe-7s-note2' },
    { path: '/forms/validation', title: 'Validation Forms', icon: 'pe-7s-note2' },
    { path: '/forms/wizard', title: 'Wizard', icon: 'pe-7s-note2' },
    { path: '/tables/regular', title: 'Regular Tables', icon: 'pe-7s-news-paper' },
    { path: '/tables/extended', title: 'Extended Tables', icon: 'pe-7s-news-paper' },
    { path: '/tables/datatables.net', title: 'DataTables.net', icon: 'pe-7s-news-paper' },
    { path: '/maps/google', title: 'Google Maps', icon: 'pe-7s-map-marker' },
    { path: '/maps/fullscreen', title: 'Full Screen Map', icon: 'pe-7s-map-marker' },
    { path: '/maps/vector', title: 'Vector Map', icon: 'pe-7s-map-marker' },
    { path: '/widgets', title: 'Widgets', icon: 'material-icons' },
    { path: '/charts', title: 'Charts', icon: 'material-icons' },
    { path: '/calendar', title: 'Calendar', icon: 'material-icons' },
    { path: '/pages/pricing', title: 'Pricing', icon: 'material-icons' },
    { path: '/pages/login', title: 'Login Page', icon: 'material-icons' },
    { path: '/pages/register', title: 'Register Page', icon: 'material-icons' },
    { path: '/pages/lock', title: 'Lock Screen Page', icon: 'material-icons' },
];
//# sourceMappingURL=sidebar-routes.config.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n        <div class=\"logo\">\n            <div class=\"logo-normal\">\n                <a href=\"https://www.creative-tim.com\" class=\"simple-text\">\n                    Creative Tim\n                </a>\n            </div>\n\n            <div class=\"logo-img\">\n                <img src=\"/assets/img/angular2-logo-white.png\"/>\n            </div>\n        </div>\n\n\n        <div class=\"sidebar-wrapper\">\n\n            <div class=\"user\">\n                <div class=\"photo\">\n                    <img src=\"../assets/img/faces/avatar.jpg\" />\n                </div>\n                <div class=\"info\">\n                    <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\n                        <span>\n                            Tania Andrew\n                            <b class=\"caret\"></b>\n                        </span>\n                    </a>\n                    <div class=\"collapse\" id=\"collapseExample\">\n                        <ul class=\"nav\">\n                            <li>\n                                <a href=\"javascript:void(0)\">\n                                    <span class=\"sidebar-mini\">MP</span>\n                                    <span class=\"sidebar-normal\">My Profile</span>\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0)\">\n                                    <span class=\"sidebar-mini\">EP</span>\n                                    <span class=\"sidebar-normal\">Edit Profile</span>\n                                </a>\n                            </li>\n                            <li>\n                                <a href=\"javascript:void(0)\">\n                                    <span class=\"sidebar-mini\">S</span>\n                                    <span class=\"sidebar-normal\">Settings</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"isNotMobileMenu()\">\n                <form class=\"navbar-form navbar-right\" role=\"search\">\n                    <div class=\"form-group form-search is-empty\">\n                        <input class=\"form-control\" placeholder=\"Search\" type=\"text\">\n                        <span class=\"material-input\"></span>\n                        <span class=\"material-input\"></span>\n                    </div>\n                    <button class=\"btn btn-white btn-round btn-just-icon\" type=\"submit\">\n                        <i class=\"material-icons\">search</i>\n                        <div class=\"ripple-container\"></div>\n                    </button>\n                </form>\n                <ul class=\"nav nav-mobile-menu\">\n                    <li class=\"\">\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#pablo\" aria-expanded=\"false\">\n                            <i class=\"material-icons\">dashboard</i>\n                            <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                        <div class=\"ripple-container\"></div></a>\n                    </li>\n                    <li class=\"dropdown\">\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" aria-expanded=\"false\">\n                            <i class=\"material-icons\">notifications</i>\n                            <span class=\"notification\">5</span>\n                            <p class=\"hidden-lg hidden-md\">\n                                Notifications\n                                <b class=\"caret\"></b>\n                            </p>\n                        <div class=\"ripple-container\"></div></a>\n                        <ul class=\"dropdown-menu\">\n                            <li>\n                                <a href=\"#\">Mike John responded to your email</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">You have 5 new tasks</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">You're now friend with Andrew</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">Another Notification</a>\n                            </li>\n                            <li>\n                                <a href=\"#\">Another One</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"\">\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#pablo\" aria-expanded=\"false\">\n                            <i class=\"material-icons\">person</i>\n                            <p class=\"hidden-lg hidden-md\">Profile</p>\n                        <div class=\"ripple-container\"></div></a>\n                    </li>\n                    <li class=\"separator hidden-lg hidden-md\"></li>\n                </ul>\n            </div>\n            <div class=\"nav-container\">\n                <ul class=\"nav\">\n                    <li routerLinkActive=\"active\">\n                        <a  [routerLink]=\"[menuItems[0].path]\">\n                            <i class=\"{{menuItems[0].icon}}\">dashboard</i>\n                            <p>{{menuItems[0].title}}</p>\n                        </a>\n                    </li>\n                    <li routerLinkActive=\"active\">\n                        <a data-toggle=\"collapse\" href=\"#componentsExamples\">\n                            <i class=\"material-icons\">apps</i>\n                            <p>Components\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <div class=\"collapse\" id=\"componentsExamples\">\n                            <ul class=\"nav\">\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[3].path]\">\n                                        <span class=\"sidebar-mini\">B</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[3].title}}</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[4].path]\">\n\n                                        <span class=\"sidebar-mini\">GS</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[4].title}}</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[5].path]\">\n                                        <span class=\"sidebar-mini\">P</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[5].title}}</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[6].path]\">\n                                        <span class=\"sidebar-mini\">SA</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[6].title}}</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[7].path]\">\n                                        <span class=\"sidebar-mini\">N</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[7].title}}</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[8].path]\">\n                                        <span class=\"sidebar-mini\">I</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[8].title}}</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[9].path]\">\n                                        <span class=\"sidebar-mini\">T</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[9].title}}</span>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n\n                    <li routerLinkActive=\"active\">\n                        <a data-toggle=\"collapse\" href=\"#formsExamples\">\n                            <i class=\"material-icons\">content_paste</i>\n                            <p>Forms\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <div class=\"collapse\" id=\"formsExamples\">\n                            <ul class=\"nav\">\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[10].path]\">\n                                        <span class=\"sidebar-mini\">RF</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[10].title}}</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[11].path]\">\n                                        <span class=\"sidebar-mini\">EF</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[11].title}}</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[12].path]\">\n                                        <span class=\"sidebar-mini\">EF</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[12].title}}</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[13].path]\">\n                                        <span class=\"sidebar-mini\">W</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[13].title}}</span>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n\n                    <li routerLinkActive=\"active\">\n                        <a data-toggle=\"collapse\" href=\"#tablesExamples\">\n                            <i class=\"material-icons\">grid_on</i>\n                            <p>Tables\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <div class=\"collapse\" id=\"tablesExamples\">\n                            <ul class=\"nav\">\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[14].path]\">\n                                        <span class=\"sidebar-mini\">RT</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[14].title}}</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[15].path]\">\n                                        <span class=\"sidebar-mini\">ET</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[15].title}}</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[16].path]\">\n                                        <span class=\"sidebar-mini\">DT</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[16].title}}</span>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n\n                    <li routerLinkActive=\"active\">\n                        <a data-toggle=\"collapse\" href=\"#mapsExamples\">\n                            <i class=\"material-icons\">place</i>\n                            <p>Maps\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <div class=\"collapse\" id=\"mapsExamples\">\n                            <ul class=\"nav\">\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[17].path]\">\n                                        <span class=\"sidebar-mini\">GM</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[17].title}}</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[18].path]\">\n                                        <span class=\"sidebar-mini\">FSM</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[18].title}}</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[19].path]\">\n                                        <span class=\"sidebar-mini\">VM</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[19].title}}</span>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n\n                    <li routerLinkActive=\"active\">\n                        <a  [routerLink]=\"[menuItems[20].path]\">\n                            <i class=\"{{menuItems[20].icon}}\">widgets</i>\n\n                            <p>{{menuItems[20].title}}</p>\n                        </a>\n                    </li>\n\n                    <li routerLinkActive=\"active\">\n                        <a  [routerLink]=\"[menuItems[21].path]\">\n                            <i class=\"{{menuItems[21].icon}}\">timeline</i>\n\n                            <p>{{menuItems[21].title}}</p>\n                        </a>\n                    </li>\n                    <li routerLinkActive=\"active\">\n                        <a  [routerLink]=\"[menuItems[22].path]\">\n                            <i class=\"{{menuItems[22].icon}}\">date_range</i>\n\n                            <p>{{menuItems[22].title}}</p>\n                        </a>\n                    </li>\n\n                    <li routerLinkActive=\"active\">\n                        <a data-toggle=\"collapse\" href=\"#pagesExamples\">\n                            <i class=\"material-icons\">image</i>\n                            <p>Pages\n                                <b class=\"caret\"></b>\n                            </p>\n                        </a>\n                        <div class=\"collapse\" id=\"pagesExamples\">\n                            <ul class=\"nav\">\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[23].path]\">\n                                        <span class=\"sidebar-mini\">P</span>\n                                        <span class=\"sidebar-normal\">Pricing</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a [routerLink]=\"[menuItems[1].path]\">\n                                        <span class=\"sidebar-mini\">T</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[1].title}}</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[24].path]\">\n                                        <span class=\"sidebar-mini\">LP</span>\n                                        <span class=\"sidebar-normal\">Login Page</span>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a  [routerLink]=\"[menuItems[25].path]\">\n                                        <span class=\"sidebar-mini\">RP</span>\n                                        <span class=\"sidebar-normal\">Register Page</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[26].path]\">\n                                        <span class=\"sidebar-mini\">LSP</span>\n                                        <span class=\"sidebar-normal\">Lock Screen Page</span>\n                                    </a>\n                                </li>\n                                <li routerLinkActive=\"active\">\n                                    <a  [routerLink]=\"[menuItems[2].path]\">\n                                        <span class=\"sidebar-mini\">UP</span>\n                                        <span class=\"sidebar-normal\">{{menuItems[2].title}}</span>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                    </li>\n\n                </ul>\n            </div>\n\n        </div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_routes_config__ = __webpack_require__("../../../../../src/app/sidebar/sidebar-routes.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var sidebarTimer;
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.isNotMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    SidebarComponent.prototype.ngOnInit = function () {
        var isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            var $sidebar = $('.sidebar-wrapper');
            $sidebar.perfectScrollbar();
        }
        this.menuItems = __WEBPACK_IMPORTED_MODULE_1__sidebar_routes_config__["a" /* ROUTES */].filter(function (menuItem) { return menuItem; });
        isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows) {
            // if we are on windows OS we activate the perfectScrollbar function
            $('.sidebar .sidebar-wrapper, .main-panel').perfectScrollbar();
            $('html').addClass('perfect-scrollbar-on');
        }
        else {
            $('html').addClass('perfect-scrollbar-off');
        }
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        // init Moving Tab after the view is initialisez
        setTimeout(function () {
            if (mda.movingTabInitialised == false) {
                mda.initMovingTab();
                mda.movingTabInitialised = true;
            }
        }, 10);
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'sidebar-cmp',
            template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
        })
    ], SidebarComponent);
    return SidebarComponent;
}());

// The Moving Tab (the element that is moving on the sidebar, when you switch the pages) is depended on jQuery because it is doing a lot of calculations and changes based on Bootstrap collapse elements. If you have a better suggestion please send it to hello@creative-tim.com and we would be glad to talk more about this improvement. Thank you!
var mda = {
    movingTab: '<div class="sidebar-moving-tab"/>',
    isChild: false,
    sidebarMenuActive: '',
    movingTabInitialised: false,
    distance: 0,
    setMovingTabPosition: function ($currentActive) {
        $currentActive = mda.sidebarMenuActive;
        if ($currentActive.parent().position()) {
            mda.distance = $currentActive.parent().position().top - 10;
        }
        if ($currentActive.closest('.collapse').length != 0) {
            if ($currentActive.closest('.collapse').parent().position()) {
                var parent_distance = $currentActive.closest('.collapse').parent().position().top;
                mda.distance = mda.distance + parent_distance;
            }
        }
        mda.moveTab();
    },
    initMovingTab: function () {
        mda.movingTab = $(mda.movingTab);
        mda.sidebarMenuActive = $('.sidebar .nav-container > .nav > li.active > a:not([data-toggle="collapse"]');
        if (mda.sidebarMenuActive.length != 0) {
            mda.setMovingTabPosition(mda.sidebarMenuActive);
        }
        else {
            mda.sidebarMenuActive = $('.sidebar .nav-container .nav > li.active .collapse li.active > a');
            mda.isChild = true;
            this.setParentCollapse();
        }
        mda.sidebarMenuActive.parent().addClass('visible');
        var button_text = mda.sidebarMenuActive.html();
        mda.movingTab.html(button_text);
        $('.sidebar .nav-container').append(mda.movingTab);
        if (window.history && window.history.pushState) {
            $(window).on('popstate', function () {
                setTimeout(function () {
                    mda.sidebarMenuActive = $('.sidebar .nav-container .nav li.active a:not([data-toggle="collapse"])');
                    if (mda.isChild == true) {
                        this.setParentCollapse();
                    }
                    clearTimeout(sidebarTimer);
                    var $currentActive = mda.sidebarMenuActive;
                    $('.sidebar .nav-container .nav li').removeClass('visible');
                    var $movingTab = mda.movingTab;
                    $movingTab.addClass('moving');
                    $movingTab.css('padding-left', $currentActive.css('padding-left'));
                    var button_text = $currentActive.html();
                    mda.setMovingTabPosition($currentActive);
                    sidebarTimer = setTimeout(function () {
                        $movingTab.removeClass('moving');
                        $currentActive.parent().addClass('visible');
                    }, 650);
                    setTimeout(function () {
                        $movingTab.html(button_text);
                    }, 10);
                }, 10);
            });
        }
        $('.sidebar .nav .collapse').on('hidden.bs.collapse', function () {
            var $currentActive = mda.sidebarMenuActive;
            mda.distance = $currentActive.parent().position().top - 10;
            if ($currentActive.closest('.collapse').length != 0) {
                var parent_distance = $currentActive.closest('.collapse').parent().position().top;
                mda.distance = mda.distance + parent_distance;
            }
            mda.moveTab();
        });
        $('.sidebar .nav .collapse').on('shown.bs.collapse', function () {
            var $currentActive = mda.sidebarMenuActive;
            mda.distance = $currentActive.parent().position().top - 10;
            if ($currentActive.closest('.collapse').length != 0) {
                var parent_distance = $currentActive.closest('.collapse').parent().position().top;
                mda.distance = mda.distance + parent_distance;
            }
            mda.moveTab();
        });
        $('.sidebar .nav-container .nav > li > a:not([data-toggle="collapse"])').click(function () {
            mda.sidebarMenuActive = $(this);
            var $parent = $(this).parent();
            if (mda.sidebarMenuActive.closest('.collapse').length == 0) {
                mda.isChild = false;
            }
            // we call the animation of the moving tab
            clearTimeout(sidebarTimer);
            var $currentActive = mda.sidebarMenuActive;
            $('.sidebar .nav-container .nav li').removeClass('visible');
            var $movingTab = mda.movingTab;
            $movingTab.addClass('moving');
            $movingTab.css('padding-left', $currentActive.css('padding-left'));
            var button_text = $currentActive.html();
            var $currentActive = mda.sidebarMenuActive;
            mda.distance = $currentActive.parent().position().top - 10;
            if ($currentActive.closest('.collapse').length != 0) {
                var parent_distance = $currentActive.closest('.collapse').parent().position().top;
                mda.distance = mda.distance + parent_distance;
            }
            mda.moveTab();
            sidebarTimer = setTimeout(function () {
                $movingTab.removeClass('moving');
                $currentActive.parent().addClass('visible');
            }, 650);
            setTimeout(function () {
                $movingTab.html(button_text);
            }, 10);
        });
    },
    setParentCollapse: function () {
        if (mda.isChild == true) {
            var $sidebarParent = mda.sidebarMenuActive.parent().parent().parent();
            var collapseId = $sidebarParent.siblings('a').attr("href");
            $(collapseId).collapse("show");
            $(collapseId).collapse()
                .on('shown.bs.collapse', function () {
                mda.setMovingTabPosition();
            })
                .on('hidden.bs.collapse', function () {
                mda.setMovingTabPosition();
            });
        }
    },
    animateMovingTab: function () {
        clearTimeout(sidebarTimer);
        var $currentActive = mda.sidebarMenuActive;
        $('.sidebar .nav-container .nav li').removeClass('visible');
        var $movingTab = mda.movingTab;
        $movingTab.addClass('moving');
        $movingTab.css('padding-left', $currentActive.css('padding-left'));
        var button_text = $currentActive.html();
        mda.setMovingTabPosition($currentActive);
        sidebarTimer = setTimeout(function () {
            $movingTab.removeClass('moving');
            $currentActive.parent().addClass('visible');
        }, 650);
        setTimeout(function () {
            $movingTab.html(button_text);
        }, 10);
    },
    moveTab: function () {
        mda.movingTab.css({
            'transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
            '-webkit-transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
            '-moz-transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
            '-ms-transform': 'translate3d(0px,' + mda.distance + 'px, 0)',
            '-o-transform': 'translate3d(0px,' + mda.distance + 'px, 0)'
        });
    }
};
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["a" /* SidebarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["a" /* SidebarComponent */]]
        })
    ], SidebarModule);
    return SidebarModule;
}());

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ "../../../../../src/entities/User.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(user_id, token, email, username, role, firstName, lastName, birthDate, image, phoneNumber, gender, points) {
        this.user_id = user_id;
        this.token = token;
        this.email = email;
        this.username = username;
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.image = image;
        this.phoneNumber = phoneNumber;
        this.gender = gender;
        this.points = points;
    }
    return User;
}());

//# sourceMappingURL=User.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCBciToJyC8WrAlpgsVetdh1iOv8YGmTxs",
        authDomain: "chat-5ef9d.firebaseapp.com",
        databaseURL: "https://chat-5ef9d.firebaseio.com",
        projectId: "chat-5ef9d",
        storageBucket: "chat-5ef9d.appspot.com",
        messagingSenderId: "358232798058"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/services/auth0.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth0Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js__ = __webpack_require__("../../../../auth0-js/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Auth0Service = /** @class */ (function () {
    function Auth0Service(router, http, datePipe) {
        this.router = router;
        this.http = http;
        this.datePipe = datePipe;
        this.auth0 = new __WEBPACK_IMPORTED_MODULE_3_auth0_js__["WebAuth"]({
            clientID: 'bxzIQa54fVd929YmVXmDcFZ2LzANJnFh',
            domain: 'ng-fms.auth0.com',
            responseType: 'token id_token',
            audience: 'https://ng-fms.auth0.com/userinfo',
            redirectUri: 'http://localhost:4200/pages/login',
            scope: 'openid profile email'
        });
        this.handleAuthentication();
    }
    Auth0Service.prototype.login = function () {
        this.auth0.authorize();
    };
    Auth0Service.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                window.location.hash = '';
                var user_1 = {
                    email: authResult.idTokenPayload.email,
                    username: authResult.idTokenPayload.email,
                    provider: authResult.idTokenPayload.sub.substring(0, authResult.idTokenPayload.sub.indexOf("|")),
                    firstname: authResult.idTokenPayload.family_name,
                    lastname: authResult.idTokenPayload.given_name,
                    gender: authResult.idTokenPayload.gender,
                    picture: authResult.idTokenPayload.picture
                };
                var url = "http://139.99.107.8/forum-ms-web/v0/user/addUserAuth?" + _this.toPath(user_1);
                _this.http.post(url, null).subscribe(function (resulat) {
                    if (resulat.json().user_id) {
                        _this.setConnectedUser(resulat.json().user_id, resulat.json().token);
                        _this.router.navigate(['/home']);
                    }
                    else if (resulat.json().error) {
                        if ("the email address is allready exist" == resulat.json().error) {
                            _this.setConnectedUserByEmail(user_1.email);
                            _this.router.navigate(['/home']);
                        }
                        else
                            _this.showNotification(resulat.json().error);
                    }
                });
            }
            else if (err) {
                console.log(err);
            }
        });
    };
    Auth0Service.prototype.setConnectedUserByEmail = function (email) {
        var _this = this;
        var url = "http://139.99.107.8/forum-ms-web/v0/user/getUserByEmail/" + email;
        this.http.get(url).map(function (res) {
            return res.json();
        }).subscribe(function (value) {
            localStorage.setItem("user_id", value.idMember);
            localStorage.setItem("token", value.jwt);
            localStorage.setItem("email", value.email);
            localStorage.setItem("username", value.username);
            localStorage.setItem("role", value.role);
            localStorage.setItem("firstName", value.firstName);
            localStorage.setItem("lastName", value.lastName);
            localStorage.setItem("birthDate", _this.datePipe.transform(value.birthDate, 'yyyy/MM/dd'));
            localStorage.setItem("image", _this.traitPic(value.image));
            localStorage.setItem("phoneNumber", value.phoneNumber);
            localStorage.setItem("gender", value.gender);
            localStorage.setItem("points", value.points);
        });
    };
    Auth0Service.prototype.setConnectedUser = function (user_id, token) {
        var _this = this;
        var url = "http://139.99.107.8/forum-ms-web/v0/user/" + user_id;
        this.http.get(url).map(function (res) {
            return res.json();
        }).subscribe(function (value) {
            localStorage.setItem("user_id", value.idMember);
            localStorage.setItem("token", token);
            localStorage.setItem("email", value.email);
            localStorage.setItem("username", value.username);
            localStorage.setItem("role", value.role);
            localStorage.setItem("firstName", value.firstName);
            localStorage.setItem("lastName", value.lastName);
            localStorage.setItem("birthDate", _this.datePipe.transform(value.birthDate, 'yyyy/MM/dd'));
            localStorage.setItem("image", _this.traitPic(value.image));
            localStorage.setItem("phoneNumber", value.phoneNumber);
            localStorage.setItem("gender", value.gender);
            localStorage.setItem("points", value.points);
        });
    };
    Auth0Service.prototype.showNotification = function (html) {
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
    Auth0Service.prototype.toPath = function (obj) {
        var str = "";
        for (var key in obj) {
            if (str != "") {
                str += "&";
            }
            str += key + "=" + encodeURIComponent(obj[key]);
        }
        return str;
    };
    Auth0Service.prototype.traitPic = function (pic) {
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
    Auth0Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_common__["d" /* DatePipe */]) === "function" && _c || Object])
    ], Auth0Service);
    return Auth0Service;
    var _a, _b, _c;
}());

//# sourceMappingURL=auth0.service.js.map

/***/ }),

/***/ "../../../../../src/services/authentification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthentificationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_entities_User__ = __webpack_require__("../../../../../src/entities/User.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthentificationService = /** @class */ (function () {
    function AuthentificationService(router, http, datePipe) {
        this.router = router;
        this.http = http;
        this.datePipe = datePipe;
        this.URL = "http://139.99.107.8/forum-ms-web/v0/user/login?usernameOrEmail=";
    }
    AuthentificationService.prototype.refreshUser = function (user_id, token) {
        var _this = this;
        var url = "http://139.99.107.8/forum-ms-web/v0/user/" + user_id;
        this.http.get(url).map(function (res) {
            return res.json();
        }).subscribe(function (value) {
            localStorage.setItem("image", _this.traitPic(value.image));
            localStorage.setItem("token", token);
            localStorage.setItem("user_id", value.idMember);
            localStorage.setItem("email", value.email);
            localStorage.setItem("username", value.username);
            localStorage.setItem("role", value.role);
            localStorage.setItem("firstName", value.firstName);
            localStorage.setItem("lastName", value.lastName);
            localStorage.setItem("birthDate", _this.datePipe.transform(value.birthDate, 'yyyy/MM/dd'));
            localStorage.setItem("phoneNumber", value.phoneNumber);
            localStorage.setItem("gender", value.gender);
            localStorage.setItem("points", value.points);
        });
    };
    AuthentificationService.prototype.login = function (username, password) {
        var _this = this;
        var url = this.URL + username + "&password=" + password;
        return this.http.post(url, null).map(function (res) {
            var reslt = res.json();
            if (reslt && reslt.token) {
                localStorage.setItem("token", reslt.token);
                var url_1 = "http://139.99.107.8/forum-ms-web/v0/user/" + reslt.user_id;
                _this.http.get(url_1).map(function (res) {
                    return res.json();
                }).subscribe(function (value) {
                    localStorage.setItem("image", _this.traitPic(value.image));
                    localStorage.setItem("user_id", value.idMember);
                    localStorage.setItem("email", value.email);
                    localStorage.setItem("username", value.username);
                    localStorage.setItem("role", value.role);
                    localStorage.setItem("firstName", value.firstName);
                    localStorage.setItem("lastName", value.lastName);
                    localStorage.setItem("birthDate", _this.datePipe.transform(value.birthDate, 'yyyy/MM/dd'));
                    localStorage.setItem("phoneNumber", value.phoneNumber);
                    localStorage.setItem("gender", value.gender);
                    localStorage.setItem("points", value.points);
                });
            }
            return reslt;
        });
    };
    AuthentificationService.prototype.logout = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("email");
        localStorage.removeItem("username");
        localStorage.removeItem("role");
        localStorage.removeItem("firstName");
        localStorage.removeItem("lastName");
        localStorage.removeItem("birthDate");
        localStorage.removeItem("image");
        localStorage.removeItem("phoneNumber");
        localStorage.removeItem("gender");
        localStorage.removeItem("points");
        console.log("logout");
    };
    AuthentificationService.prototype.isLoggedIn = function () {
        var token = localStorage.getItem("token");
        if (token)
            return true;
        return false;
    };
    AuthentificationService.prototype.currentUser = function () {
        var token = localStorage.getItem("token");
        var userId = localStorage.getItem("user_id");
        var email = localStorage.getItem("email");
        var username = localStorage.getItem("username");
        var role = localStorage.getItem("role");
        var firstName = localStorage.getItem("firstName");
        var lastName = localStorage.getItem("lastName");
        var birthDate = localStorage.getItem("birthDate");
        var image = localStorage.getItem("image");
        var phoneNumber = localStorage.getItem("phoneNumber");
        var gender = localStorage.getItem("gender");
        var points = localStorage.getItem("points");
        if (!token)
            return null;
        else {
            return new __WEBPACK_IMPORTED_MODULE_3_entities_User__["a" /* User */](userId, token, email, username, role, firstName, lastName, birthDate, image, phoneNumber, gender, points);
        }
    };
    AuthentificationService.prototype.addUser = function (email, username, password) {
        var _this = this;
        var url = "http://139.99.107.8/forum-ms-web/v0/user/addUser?email="
            + email + "&username=" + username + "&password=" + password;
        this.http.post(url, null).subscribe(function (resulat) {
            if (resulat.json().user_id) {
                _this.setConnectedUser(resulat.json().user_id, resulat.json().token);
                _this.router.navigate(['/home']);
            }
            else if (resulat.json().error) {
                _this.showNotification(resulat.json().error);
            }
        });
    };
    AuthentificationService.prototype.traitPic = function (pic) {
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
    AuthentificationService.prototype.setConnectedUser = function (user_id, token) {
        var _this = this;
        var url = "http://139.99.107.8/forum-ms-web/v0/user/" + user_id;
        this.http.get(url).map(function (res) {
            return res.json();
        }).subscribe(function (value) {
            localStorage.setItem("user_id", value.idMember);
            localStorage.setItem("token", token);
            localStorage.setItem("email", value.email);
            localStorage.setItem("username", value.username);
            localStorage.setItem("role", value.role);
            localStorage.setItem("firstName", value.firstName);
            localStorage.setItem("lastName", value.lastName);
            localStorage.setItem("birthDate", _this.datePipe.transform(value.birthDate, 'yyyy/MM/dd'));
            localStorage.setItem("image", _this.traitPic(value.image));
            localStorage.setItem("phoneNumber", value.phoneNumber);
            localStorage.setItem("gender", value.gender);
            localStorage.setItem("points", value.points);
        });
    };
    AuthentificationService.prototype.showNotification = function (html) {
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
    AuthentificationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */]) === "function" && _c || Object])
    ], AuthentificationService);
    return AuthentificationService;
    var _a, _b, _c;
}());

//# sourceMappingURL=authentification.service.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map