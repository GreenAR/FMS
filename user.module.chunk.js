webpackJsonp(["user.module"],{

/***/ "../../../../../src/app/userpage/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div style=\"text-align: inherit !important;\" class=\"card\">\n\n                    <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\n                        <i class=\"material-icons\">perm_identity</i>\n                    </div>\n                        <div class=\"wizard-arbi\">\n                            <div class=\"picture-container\">\n                                <div class=\"picture\">\n                                    <img [src]=\"As.currentUser().image!='null'?As.currentUser().image:'../assets/img/placeholder.jpg'\" class=\"picture-src\" id=\"wizardPicturePreview\" title=\"\" />\n                                    <input type=\"file\" id=\"wizard-picture\" title=\"update picture\">\n                                </div>\n                            </div>\n                        </div>\n                    <div class=\"card-content\">\n                        <h4 class=\"card-title\">Profile -\n                            <small class=\"category\">Edit your profile</small>\n                        </h4>\n                        <br>\n                        <form #f=\"ngForm\" (ngSubmit)=\"updateUser(f)\">\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">First Name</label>\n                                        <input ngModel #firstname=\"ngModel\" name=\"firstname\" type=\"text\" class=\"form-control\" [ngModel]=\"As.currentUser().firstName!='null'?As.currentUser().firstName:null\">\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group label-floating\">\n                                        <label class=\"control-label\">Last Name</label>\n                                        <input ngModel #lastname=\"ngModel\" name=\"lastname\" type=\"text\" class=\"form-control\" [ngModel]=\"As.currentUser().lastName!='null'?As.currentUser().lastName:null\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                            <div class=\"form-group\">\n                                                  <label class=\"label-control\">Phone number</label>\n                                                  <input ngModel #phonenumber=\"ngModel\" name=\"phonenumber\" type=\"number\" class=\"form-control\" [ngModel]=\"As.currentUser().phoneNumber!='null'?As.currentUser().phoneNumber:null\" />\n                                            </div>\n                                        </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"form-group\">\n                                          <label class=\"label-control\">Birthdate</label>\n                                          <input type=\"text\" class=\"form-control datepicker\" name=\"birthdate\" [ngModel]=\"As.currentUser().birthDate!='null'?As.currentUser().birthDate:null\" />\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                    <div class=\"col-md-6\">\n                                            <select ngModel #gender=\"ngModel\" name=\"gender\" class=\"selectpicker\" data-style=\"btn btn-primary btn-round\" data-size=\"7\">\n                                                    <option disabled >Gender</option>\n                                                    <option value=\"male\">Male</option>\n                                                    <option value=\"female\">Female</option>\n                                            </select>                                                                        \n                                    </div>\n                                    <!-- <div class=\"col-md-6\">\n                                        <div class=\"progress\" style=\"margin-top: 20px;\">\n                                            <div class=\"progress-bar progress-bar-primary progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\"\n                                                aria-valuemax=\"100\" [ngStyle]=\"style\">\n                                                {{pp}}% Complete\n                                            </div>\n                                        </div>\n                                    </div> -->\n                                                                   \n                            </div>\n                            \n                            <button class=\"btn btn-rose pull-right\">Update Profile</button>\n                            <a href=\"/profile?id={{As.currentUser().user_id}}\" class=\"btn btn-primary pull-right\">Show Profile</a>\n                            <div class=\"clearfix\"></div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userpage/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_services_authentification_service__ = __webpack_require__("../../../../../src/services/authentification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_services_data_service__ = __webpack_require__("../../../../../src/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = /** @class */ (function () {
    function UserComponent(authservice, dataService) {
        this.authservice = authservice;
        this.dataService = dataService;
        this.pp = 0;
        this.object = {
            'width': '0%',
            'animation': 'progress-bar-stripes 2s linear infinite',
            'background-color': '#9c27b0'
        };
    }
    UserComponent.prototype.ngOnInit = function () {
        var user = this.authservice.currentUser();
        if (user.firstName && user.firstName != 'null' && user.firstName != '') {
            this.pp = this.pp + 20;
        }
        if (user.lastName && user.lastName != 'null' && user.lastName != '') {
            this.pp = this.pp + 20;
        }
        if (user.phoneNumber && user.phoneNumber != 'null' && user.phoneNumber != '') {
            this.pp = this.pp + 20;
        }
        if (user.birthDate && user.birthDate != 'null' && user.birthDate != '') {
            this.pp = this.pp + 20;
        }
        if (user.gender && user.gender != 'null' && user.gender != '') {
            this.pp = this.pp + 20;
        }
        this.object = {
            'width': this.pp + '%',
            'animation': 'progress-bar-stripes 2s linear infinite',
            'background-color': '#9c27b0'
        };
        if (!user.gender || user.gender != 'null') {
            $('.selectpicker').selectpicker('val', user.gender.toLocaleLowerCase());
        }
        $('.datepicker').datetimepicker({
            format: 'YYYY/MM/DD',
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove',
                inline: true
            }
        });
        // Prepare the preview for profile picture
        $("#wizard-picture").change(function () {
            var input = this;
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
                };
                reader.readAsDataURL(input.files[0]);
            }
        });
    };
    UserComponent.prototype.ngOnChanges = function () {
        var input = $(this);
        var target;
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            };
            reader.readAsDataURL(input.files[0]);
        }
    };
    UserComponent.prototype.updateUser = function (formData) {
        var _this = this;
        console.log(formData.value);
        var user = this.authservice.currentUser();
        var newUser = formData.value;
        if (user.lastName == 'null') {
            user.lastName = null;
        }
        if (newUser.lastname != user.lastName) {
            var url = "http://139.99.107.8/forum-ms-web/v0/user/updateLastname?lastname=" + newUser.lastname;
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Authorization', 'Bearer ' + user.token);
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.dataService.update(url, null, options).subscribe(function (val) {
                if (val.succes) {
                    _this.authservice.refreshUser(user.user_id, user.token);
                    _this.showNotification("Your lastname updated successfuly", 'success');
                }
                else {
                    _this.showNotification("error when updateting lastname", 'danger');
                }
            }, function (err) {
                _this.showNotification("error when updateting lastname", 'danger');
            });
        }
        if (user.gender == 'null') {
            user.gender = null;
        }
        if (newUser.gender == "") { }
        else if (user.gender) {
            if (newUser.gender != user.gender.toLocaleLowerCase) {
                var url = "http://139.99.107.8/forum-ms-web/v0/user/updateGender?userGender=" + newUser.gender.toLocaleUpperCase();
                var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                headers.append('Authorization', 'Bearer ' + user.token);
                var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                this.dataService.update(url, null, options).subscribe(function (val) {
                    if (val.succes) {
                        _this.authservice.refreshUser(user.user_id, user.token);
                        _this.showNotification("Your gender updated successfuly", 'success');
                    }
                    else {
                        _this.showNotification("error when updateting gender", 'danger');
                    }
                }, function (err) {
                    _this.showNotification("error when updateting gender", 'danger');
                });
            }
        }
        else {
            var url = "http://139.99.107.8/forum-ms-web/v0/user/updateGender?userGender=" + newUser.gender.toLocaleUpperCase();
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Authorization', 'Bearer ' + user.token);
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.dataService.update(url, null, options).subscribe(function (val) {
                if (val.succes) {
                    _this.authservice.refreshUser(user.user_id, user.token);
                    _this.showNotification("Your gender updated successfuly", 'success');
                }
                else {
                    _this.showNotification("error when updateting gender", 'danger');
                }
            }, function (err) {
                _this.showNotification("error when updateting gender", 'danger');
            });
        }
        if (user.birthDate == 'null') {
            user.birthDate = null;
        }
        if ($('.datepicker').val() == "")
            newUser.birthdate = null;
        else
            newUser.birthdate = $('.datepicker').val();
        if (newUser.birthdate != user.birthDate) {
            var url = "http://139.99.107.8/forum-ms-web/v0/user/updateBirthDate?BirthDate=" + newUser.birthdate;
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Authorization', 'Bearer ' + user.token);
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.dataService.update(url, null, options).subscribe(function (val) {
                if (val.succes) {
                    _this.authservice.refreshUser(user.user_id, user.token);
                    _this.showNotification("Your birthdate updated successfuly", 'success');
                }
                else {
                    _this.showNotification("error when updateting birthdate", 'danger');
                }
            }, function (err) {
                _this.showNotification("error when updateting birthdate", 'danger');
            });
        }
        if (user.phoneNumber == 'null') {
            user.phoneNumber = null;
        }
        if (newUser.phonenumber != user.phoneNumber) {
            var url = "http://139.99.107.8/forum-ms-web/v0/user/updatePhoneNumber?phoneNumber=" + newUser.phonenumber;
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Authorization', 'Bearer ' + user.token);
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.dataService.update(url, null, options).subscribe(function (val) {
                if (val.succes) {
                    _this.authservice.refreshUser(user.user_id, user.token);
                    _this.showNotification("Your phone number updated successfuly", 'success');
                }
                else {
                    _this.showNotification("error when updateting phone number", 'danger');
                }
            }, function (err) {
                _this.showNotification("error when updateting phone number", 'danger');
            });
        }
        if (user.firstName == 'null') {
            user.firstName = null;
        }
        if ((newUser.firstname != user.firstName)) {
            var url = "http://139.99.107.8/forum-ms-web/v0/user/updateFirstname?firstname=" + newUser.firstname;
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Authorization', 'Bearer ' + user.token);
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            this.dataService.update(url, null, options).subscribe(function (val) {
                if (val.succes) {
                    _this.authservice.refreshUser(user.user_id, user.token);
                    _this.showNotification("Your firstname updated successfuly", 'success');
                }
                else {
                    _this.showNotification("error when updateting firstname", 'danger');
                }
            }, function (err) {
                _this.showNotification("error when updateting firstname", 'danger');
            });
        }
        var file = $('#wizard-picture')[0].files[0];
        if (typeof (file) !== 'undefined') {
            var data = new FormData();
            data.append('uploadedFile', file);
            data.append('id', user.user_id);
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.set('Accept', 'application/json');
            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var url = "http://139.99.107.8/forum-ms-web/v0/user/changePicture";
            this.dataService.Create(url, data, options)
                .subscribe(function (val) {
                $('#wizard-picture').val("");
                if (val.succes) {
                    _this.authservice.refreshUser(user.user_id, user.token);
                    _this.showNotification("Your picture updated successfuly", 'success');
                }
                else {
                    _this.showNotification("error when uploading picture to the server", 'danger');
                }
            }, function (err) {
                _this.showNotification("error when uploading picture to the server", 'danger');
            });
        }
        this.pp = 0;
        var user2 = this.authservice.currentUser();
        if (user2.firstName && user2.firstName != 'null' && user2.firstName != '') {
            this.pp = this.pp + 20;
        }
        if (user2.lastName && user2.lastName != 'null' && user2.lastName != '') {
            this.pp = this.pp + 20;
        }
        if (user2.phoneNumber && user2.phoneNumber != 'null' && user2.phoneNumber != '') {
            this.pp = this.pp + 20;
        }
        if (user2.birthDate && user2.birthDate != 'null' && user2.birthDate != '') {
            this.pp = this.pp + 20;
        }
        if (user2.gender && user2.gender != 'null' && user2.gender != '') {
            this.pp = this.pp + 20;
        }
        this.object = {
            'width': this.pp + '%',
            'animation': 'progress-bar-stripes 2s linear infinite',
            'background-color': '#9c27b0'
        };
    };
    UserComponent.prototype.showNotification = function (html, color) {
        console.log(html);
        $.notify({
            icon: "notifications",
            message: html
        }, {
            type: color,
            timer: 3000,
            placement: {
                from: 'top',
                align: 'right'
            }
        });
    };
    Object.defineProperty(UserComponent.prototype, "As", {
        get: function () {
            return this.authservice;
        },
        enumerable: true,
        configurable: true
    });
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'user-cmp',
            template: __webpack_require__("../../../../../src/app/userpage/user.component.html"),
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* trigger */])('carduserprofile', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({
                        '-ms-transform': 'translate3D(0px, 0px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                        '-moz-transform': 'translate3D(0px, 0px, 0px)',
                        '-o-transform': 'translate3D(0px, 0px, 0px)',
                        transform: 'translate3D(0px, 0px, 0px)',
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({ opacity: 0,
                            '-ms-transform': 'translate3D(0px, 150px, 0px)',
                            '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                            '-moz-transform': 'translate3D(0px, 150px, 0px)',
                            '-o-transform': 'translate3D(0px, 150px, 0px)',
                            transform: 'translate3D(0px, 150px, 0px)',
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* animate */])('0.3s 0s ease-out'),
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_36" /* trigger */])('cardprofile', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_33" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({
                        '-ms-transform': 'translate3D(0px, 0px, 0px)',
                        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
                        '-moz-transform': 'translate3D(0px, 0px, 0px)',
                        '-o-transform': 'translate3D(0px, 0px, 0px)',
                        transform: 'translate3D(0px, 0px, 0px)',
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_35" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_34" /* style */])({ opacity: 0,
                            '-ms-transform': 'translate3D(0px, 150px, 0px)',
                            '-webkit-transform': 'translate3D(0px, 150px, 0px)',
                            '-moz-transform': 'translate3D(0px, 150px, 0px)',
                            '-o-transform': 'translate3D(0px, 150px, 0px)',
                            transform: 'translate3D(0px, 150px, 0px)',
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* animate */])('0.3s 0.25s ease-out')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_services_authentification_service__["a" /* AuthentificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_services_authentification_service__["a" /* AuthentificationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_services_data_service__["a" /* DataService */]) === "function" && _b || Object])
    ], UserComponent);
    return UserComponent;
    var _a, _b;
}());

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/userpage/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_component__ = __webpack_require__("../../../../../src/app/userpage/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_routing__ = __webpack_require__("../../../../../src/app/userpage/user.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_services_authentification_service__ = __webpack_require__("../../../../../src/services/authentification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_services_data_service__ = __webpack_require__("../../../../../src/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_services_authGard1_service__ = __webpack_require__("../../../../../src/services/authGard1.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__user_routing__["a" /* UserRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__user_component__["a" /* UserComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6_services_authentification_service__["a" /* AuthentificationService */],
                __WEBPACK_IMPORTED_MODULE_7_services_data_service__["a" /* DataService */],
                __WEBPACK_IMPORTED_MODULE_8_services_authGard1_service__["a" /* AuthGuard1 */]
            ]
        })
    ], UserModule);
    return UserModule;
}());

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/userpage/user.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_component__ = __webpack_require__("../../../../../src/app/userpage/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_services_authGard1_service__ = __webpack_require__("../../../../../src/services/authGard1.service.ts");


var UserRoutes = [
    {
        path: '',
        children: [{
                path: 'user',
                component: __WEBPACK_IMPORTED_MODULE_0__user_component__["a" /* UserComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1_services_authGard1_service__["a" /* AuthGuard1 */]]
            }]
    }
];
//# sourceMappingURL=user.routing.js.map

/***/ })

});
//# sourceMappingURL=user.module.chunk.js.map