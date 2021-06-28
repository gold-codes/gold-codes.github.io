(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/ID6":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/cart/cart-item/cart-item.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cart-item\">\n  <span>{{ cartItem.productName }}</span> x\n  <span>{{ cartItem.qty }}</span>:\n  <strong>{{ (cartItem.qty * cartItem.price) | currency:'INR' }}</strong>\n</div>\n");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Subhadeep\Desktop\part2\src\main.ts */"zUnb");


/***/ }),

/***/ "9Kpo":
/*!***************************************************************************!*\
  !*** ./src/app/components/shopping-cart/product-list/filter-pipe.pipe.ts ***!
  \***************************************************************************/
/*! exports provided: FilterPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipePipe", function() { return FilterPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/product */ "yHTb");



let FilterPipePipe = class FilterPipePipe {
    transform(productFinalList, searchTerm) {
        if (!productFinalList || !searchTerm) {
            return productFinalList;
        }
        return productFinalList.filter(productList => src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"].name.toLocaleLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
    }
};
FilterPipePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterPipe'
    })
], FilterPipePipe);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "AytR":
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
    production: false
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

/***/ "CmJa":
/*!*********************************************************!*\
  !*** ./src/app/components/shared/nav/nav.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "E8lZ":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/register/register.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    <a [routerLink]=\"['/login']\">Move to Login</a>\n</p>\n\n\n<div class=\"row\">\n    <div class=\"col-md-4 offset-md-4\">\n        <div class=\"guest-form-card card\">\n\n            <div class=\"card-header text-centered\">\n                <h4>Register Here</h4>\n            </div>\n            <div class=\"card-body\">\n                <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n                    <div class=\"form-group\">\n                        <label for=\"name\">Name</label>\n                        <input id=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': formErrors.name}\"\n                            formControlName=\"name\" (blur)=\"logValidationErrors()\">\n                        <span class=\"invalid-feedback\" *ngIf=\"formErrors.name\">\n                            {{formErrors.name}}\n                        </span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"email\">Email</label>\n                        <input type=\"email\" id=\"email\" class=\"form-control\"\n                            [ngClass]=\"{ 'is-invalid': formErrors.email}\" formControlName=\"email\"\n                            (blur)=\"logValidationErrors()\">\n                        <span class=\"invalid-feedback\">\n                            <span *ngIf=\"formErrors.email\">{{formErrors.email}}</span>\n                        </span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"number\">Mobile number</label>\n                        <input type=\"tel\" id=\"number\" class=\"form-control\"\n                            [ngClass]=\"{ 'is-invalid': formErrors.number}\" formControlName=\"number\"\n                            (blur)=\"logValidationErrors()\">\n                        <span class=\"invalid-feedback\">\n                            <span *ngIf=\"formErrors.number\">{{formErrors.number}}</span>\n                        </span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"username\">Username</label>\n                        <input id=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': formErrors.username}\"\n                            formControlName=\"username\" (blur)=\"logValidationErrors()\">\n                        <span class=\"invalid-feedback\" *ngIf=\"formErrors.username\">{{formErrors.username}}</span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" id=\"password\" class=\"form-control\"\n                            [ngClass]=\"{ 'is-invalid': formErrors.password}\" formControlName=\"password\"\n                            (blur)=\"logValidationErrors()\">\n\n                        <span class=\"invalid-feedback\">\n                            <span *ngIf=\"formErrors.password\">{{formErrors.password}}</span>\n                        </span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"confirmPassword\">Confirm Password</label>\n                        <input type=\"password\" id=\"confirmPassword\" class=\"form-control\"\n                            [ngClass]=\"{ 'is-invalid': registerForm.get('confirmPassword').touched && registerForm.get('confirmPassword').invalid}\"\n                            formControlName=\"confirmPassword\">\n                        <span class=\"invalid-feedback\">Passwords not matching!</span>\n                    </div>\n\n\n                    <div class=\"form-group\">\n                        <div class=\"col-md-offset-2 col-md-4\">\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"addAddressButtonClick()\"\n                            [disabled]=\"registerForm.get('address').invalid\">\n                                Add address\n                            </button>\n                        </div>\n                    </div>\n\n                    <div formArrayName=\"address\"\n                        *ngFor=\"let addCheck of registerForm.get('address').controls; let i = index\">\n                        <hr *ngIf=\"i>0\">\n                        <div [formGroupName]=\"i\">\n                            <div class=\"form-group\">\n                                <label [attr.for]=\"'street'+i\">\n                                    Street\n                                </label>\n                                <input [id]=\"'street'+i\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': addCheck.get('street').invalid && addCheck.get('street').touched}\"\n                                    formControlName=\"street\">\n                                <span class=\"invalid-feedback d-block\"\n                                    *ngIf=\"addCheck.get('street').errors?.required && addCheck.get('street').touched\">\n                                    Street name can't be blank.\n                                </span>\n                            </div>\n                            <div>\n                                <div class=\"col-sm-4\" *ngIf=\"registerForm.get('address').length>1\">\n                                    <button type=\"button\" class=\"btn btn-danger btn-sm\"\n                                            title=\"Delete Address Group\" (click)=\"removeAddressButtonClick(i)\">\n                                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-x-circle-fill\" viewBox=\"0 0 16 16\">\n                                            <path d=\"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z\"/>\n                                          </svg>\n                                    </button>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <label [attr.for]=\"'city'+i\">\n                                    City\n                                </label>\n                                <input [id]=\"'city'+i\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': addCheck.get('city').invalid && addCheck.get('city').touched}\"\n                                    formControlName=\"city\">\n                                <span class=\"invalid-feedback d-block\"\n                                    *ngIf=\"addCheck.get('city').errors?.required && addCheck.get('city').touched\">\n                                    City name can't be blank.\n                                </span>\n                            </div>\n\n                            <div class=\"form-group\">\n                                <label [attr.for]=\"'pincode'+i\">\n                                    Pincode\n                                </label>\n                                <input [id]=\"'pincode'+i\" class=\"form-control\"\n                                    [ngClass]=\"{ 'is-invalid': addCheck.get('pincode').invalid && addCheck.get('pincode').touched}\"\n                                    formControlName=\"pincode\">\n                                <span class=\"invalid-feedback d-block\"\n                                    *ngIf=\"addCheck.get('pincode').errors?.required && addCheck.get('pincode').touched\">\n                                    Pincode can't be blank.\n                                </span>\n                                <span class=\"invalid-feedback d-block\"\n                                    *ngIf=\"addCheck.get('pincode').errors?.pattern && addCheck.get('pincode').touched\">\n                                    Pincode must be 6 digits.\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n\n\n\n\n\n\n\n                    <button class=\"btn btn-primary btn-block\" [disabled]=\"registerForm.invalid\"\n                        (click)=\"register()\">Register</button>\n                   \n\n                </form>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "FezY":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "M9yH");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.css */ "iEmP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterComponent);



/***/ }),

/***/ "G56M":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/product-list/product-list.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"row\">\n  \n  <div class=\"col-md-4\" *ngFor=\"let product of productList | filterPipe: finalSearchString\" >\n  \n    <app-product-item [productItem]=\"product\"></app-product-item> \n    \n  </div>\n</div>\n");

/***/ }),

/***/ "G6/a":
/*!******************************************************************!*\
  !*** ./src/app/components/shopping-cart/cart/cart.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "Gdn9":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/product */ "yHTb");



let ProductService = class ProductService {
    constructor() {
        this.products = [
            new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"](1, 'Product 1', 'This is the product 1 description. The product is really cool!', 100),
            new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"](2, 'Product 2', 'This is the product 2 description. The product is really cool!', 150),
            new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"](3, 'Product 3', 'This is the product 3 description. The product is really cool!', 50),
            new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"](4, 'Product 4', 'This is the product 4 description. The product is really cool!', 200),
            new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"](5, 'Product 5', 'This is the product 5 description. The product is really cool!', 100),
            new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"](6, 'Product 6', 'This is the product 6 description. The product is really cool!', 150),
            new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"](7, 'Product 7', 'This is the product 7 description. The product is really cool!', 250),
            new src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["Product"](8, 'Product 8', 'This is the product 8 description. The product is really cool!', 300),
        ];
    }
    getProducts() {
        //TODO: Populate products from an API 
        return this.products;
    }
};
ProductService.ctorParameters = () => [];
ProductService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "M9yH":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<hr>\n<small>&copy; Subhadeep.C</small>\n");

/***/ }),

/***/ "N29g":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/shopping-cart/product-list/product-item/product-item.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "N4eq":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/page-not-found/page-not-found.component.ts ***!
  \******************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_page_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "YqO2");
/* harmony import */ var _page_not_found_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found.component.css */ "snyT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PageNotFoundComponent = class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
PageNotFoundComponent.ctorParameters = () => [];
PageNotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-page-not-found',
        template: _raw_loader_page_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_page_not_found_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PageNotFoundComponent);



/***/ }),

/***/ "N9qp":
/*!*********************************************************************************!*\
  !*** ./src/app/components/shopping-cart/cart/cart-item/cart-item.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "O5bD":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<p>\n    <a [routerLink]=\"['/register']\">Move To Register</a>\n</p>\n\n<div class=\"row\">\n    <div class=\"col-md-4 offset-md-4\">\n        <div class=\"guest-form-card card\">\n\n            <div class=\"card-header text-centered\">\n                <h4>Login Here</h4>\n            </div>\n            <div class=\"card-body\">\n                <form #loginForm = \"ngForm\" (ngSubmit)=\"loginForm.valid && login( )\">\n                    <div class=\"form-group\">\n                        <label for=\"username\">Username</label>\n                        <input id=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': loginForm.submitted && username.invalid }\" name=\"username\" #username=\"ngModel\" [(ngModel)]=\"model.username\" required>\n                        <span class=\"invalid-feedback\">Username can't be blank.</span>\n                    </div>\n                \n                    <div class=\"form-group\">\n                        <label for=\"password\">Password</label>\n                        <input type=\"password\" id=\"password\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': loginForm.submitted && password.invalid }\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"model.password\" required>\n                        <span class=\"invalid-feedback\">Password can't be blank.</span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <input type=\"checkbox\" id=\"remember\" name=\"remember\" #remember=\"ngModel\" [(ngModel)]=\"model.remember\">\n                        <label  for=\"remember\">Remember Me</label>\n                    </div>\n                \n                    <button class=\"btn btn-primary btn-block\" >Login</button>\n                      \n                </form>\n            </div>\n        </div>\n    </div>\n</div>  ");

/***/ }),

/***/ "OVmk":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "OtH3":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/nav/nav.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm\">\n  <h5 class=\"my-0 mr-md-auto font-weight-normal\">\n    <app-header></app-header>\n  </h5>\n  <nav class=\"d-inline-flex mt-2 mt-md-0 ms-md-auto\">\n    <a class=\"me-3 py-2 text-dark text-decoration-none\" [routerLink]=\"['/shop']\">Shop</a>\n    <a class=\"me-3 py-2 text-dark text-decoration-none\" href=\"#\">Enterprise</a>\n    <a class=\"me-3 py-2 text-dark text-decoration-none\" href=\"#\">Support</a>\n    \n  </nav>\n  <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">Register</a>\n  <a class=\"btn btn-outline-secondary\" [routerLink]=\"['/login']\">Login</a>\n</div>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'shopping-cart';
        this.sendToList = '';
    }
    searchInputReceiver(searchValue) {
        this.sendToList = searchValue;
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VFLz":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span>Shirt World</span>\n\n\n");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col\">\n      <app-footer (sendSearchValue)=\"searchInputReceiver($event)\"></app-footer>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "O5bD");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "mDuy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let LoginComponent = class LoginComponent {
    constructor() {
        this.model = {};
    }
    ngOnInit() {
    }
    login() {
        var usr = JSON.parse(localStorage.getItem('usrname'));
        var pass = JSON.parse(localStorage.getItem('password'));
        console.log(this.model.username);
        if (usr !== this.model.username || pass !== this.model.password) {
            alert('Username not found, Please register User first !');
        }
        else {
            alert('Login Successful !!');
            window.location.href = 'http://localhost:4200/shop';
        }
    }
};
LoginComponent.ctorParameters = () => [];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "XC3f":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "E8lZ");
/* harmony import */ var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.css */ "woRh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





/**
 *
 * @param form
 */
function symbolValidator(control) {
    if (control.hasError('required'))
        return null;
    if (control.value.indexOf('@') > -1) {
        return null;
    }
    else {
        return { symbol: true };
    }
}
function passwordMatch(form) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ passwordMatch: true });
    }
    else {
        confirmPassword.setErrors(null);
    }
}
let RegisterComponent = class RegisterComponent {
    constructor(builder) {
        this.builder = builder;
        this.validationMessages = {
            'name': {
                'required': "Name can't be blank",
                'minLength': " Name should be atleast 4 characters",
                'maxLength': "Name should be maximum 12 characters",
            },
            'email': {
                'required': 'Email is required',
                'email': 'Email must be valid'
            },
            'number': {
                'required': "Ph No can't be blank",
                'pattern': 'Ph No must be 10 digits'
            },
            'username': {
                'required': "Username can't be blank",
            },
            'password': {
                'required': "Password can't be blank.",
                'symbol': "Password must contain @",
                'minlength': "Password must be 8 characters long"
            }
        };
        this.formErrors = {};
    }
    logValidationErrors(group = this.registerForm) {
        Object.keys(group.controls).forEach((key) => {
            const abstractControl = group.get(key);
            this.formErrors[key] = '';
            if (abstractControl && !abstractControl.valid &&
                (abstractControl.touched || abstractControl.dirty)) {
                const messages = this.validationMessages[key];
                for (const errorKey in abstractControl.errors) {
                    if (errorKey) {
                        this.formErrors[key] += messages[errorKey] + ' ';
                    }
                }
            }
            if (abstractControl instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]) {
                this.logValidationErrors(abstractControl);
            }
        });
    }
    register() {
        localStorage.setItem('usrname', JSON.stringify(this.registerForm.value.username)),
            localStorage.setItem('password', JSON.stringify(this.registerForm.value.password)),
            console.log(this.registerForm.value);
        alert("User registered ! ");
    }
    ngOnInit() {
        this.registerForm = this.builder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(12)],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[0-9 ]{10}")]],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, symbolValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8)]],
            address: this.builder.array([
                this.addAddressFormGroup()
            ]),
            confirmPassword: '',
        }, {
            validators: passwordMatch
        });
        this.registerForm.valueChanges.subscribe((data) => {
            this.logValidationErrors(this.registerForm);
        });
    }
    removeAddressButtonClick(addressGroupIndex) {
        this.registerForm.get('address').removeAt(addressGroupIndex);
    }
    addAddressFormGroup() {
        return this.builder.group({
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            pincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern("[0-9]{6}")]]
        });
    }
    addAddressButtonClick() {
        this.registerForm.get('address').push(this.addAddressFormGroup());
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterComponent);



/***/ }),

/***/ "YKFl":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/shopping-cart/product-list/product-item/product-item.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-item.component.html */ "YbD7");
/* harmony import */ var _product_item_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-item.component.css */ "N29g");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/messenger.service */ "muQR");





let ProductItemComponent = class ProductItemComponent {
    constructor(msg) {
        this.msg = msg;
    }
    ngOnInit() {
    }
    handleAddToCart() {
        this.msg.sendMsg(this.productItem);
    }
};
ProductItemComponent.ctorParameters = () => [
    { type: src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_4__["MessengerService"] }
];
ProductItemComponent.propDecorators = {
    productItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProductItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-item',
        template: _raw_loader_product_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_item_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductItemComponent);



/***/ }),

/***/ "YbD7":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/product-list/product-item/product-item.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mb-4 shadow-sm\">\n  <img class=\"bd-placeholder-img card-img-top p-2\" width=\"100%\" [src]=\"productItem.imageUrl\" />\n\n  <div class=\"card-body\">\n    <p class=\"card-text\">\n      <strong>{{ productItem.price | currency:'INR' }}</strong>\n    </p>\n    <p class=\"card-text\">{{ productItem.description }}</p>\n    <div class=\"d-flex justify-content-between align-items-center\">\n      <div class=\"btn-group\">\n        <button type=\"button\" class=\"btn btn-sm btn-primary product-btn\" (click)=\"handleAddToCart()\">Add to\n          Cart</button>\n        <button type=\"button\" class=\"btn btn-sm btn-outline-secondary product-btn\">View Details</button>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "YgCv":
/*!********************************************************************************!*\
  !*** ./src/app/components/shopping-cart/cart/cart-item/cart-item.component.ts ***!
  \********************************************************************************/
/*! exports provided: CartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemComponent", function() { return CartItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart-item.component.html */ "/ID6");
/* harmony import */ var _cart_item_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart-item.component.css */ "N9qp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CartItemComponent = class CartItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
CartItemComponent.ctorParameters = () => [];
CartItemComponent.propDecorators = {
    cartItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
CartItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart-item',
        template: _raw_loader_cart_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_item_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartItemComponent);



/***/ }),

/***/ "YqO2":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/page-not-found/page-not-found.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"col-md-4 offset-md-4\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h3>404- Page Not Found</h3>\n            </div>\n            <div class=\"card-body\">\n                <p>Oops! The page that you were looking for is not found</p>\n                <p>\n                    <a routerLink=\"/\">Back to Home </a>\n                </p>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app-routing.module */ "dFAl");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shared/header/header.component */ "j/Fd");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "FezY");
/* harmony import */ var _components_shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shared/nav/nav.component */ "cXpk");
/* harmony import */ var _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shopping-cart/shopping-cart.component */ "gypT");
/* harmony import */ var _components_shopping_cart_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/shopping-cart/product-list/product-list.component */ "u5ur");
/* harmony import */ var _components_shopping_cart_cart_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/shopping-cart/cart/cart.component */ "qqtL");
/* harmony import */ var _components_shopping_cart_cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shopping-cart/cart/cart-item/cart-item.component */ "YgCv");
/* harmony import */ var _components_shopping_cart_product_list_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/shopping-cart/product-list/product-item/product-item.component */ "YKFl");
/* harmony import */ var src_app_components_shopping_cart_product_list_filter_pipe_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/components/shopping-cart/product-list/filter-pipe.pipe */ "9Kpo");
/* harmony import */ var _components_shopping_cart_filters_filters_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/shopping-cart/filters/filters.component */ "p4v1");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/register/register.component */ "XC3f");
/* harmony import */ var _components_shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/shared/page-not-found/page-not-found.component */ "N4eq");




















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _components_shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
            _components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_9__["ShoppingCartComponent"],
            _components_shopping_cart_filters_filters_component__WEBPACK_IMPORTED_MODULE_15__["FiltersComponent"],
            _components_shopping_cart_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"],
            _components_shopping_cart_cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"],
            _components_shopping_cart_cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_12__["CartItemComponent"],
            _components_shopping_cart_product_list_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_13__["ProductItemComponent"],
            src_app_components_shopping_cart_product_list_filter_pipe_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterPipePipe"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
            _components_register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"],
            _components_shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_18__["PageNotFoundComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _components_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "cXpk":
/*!********************************************************!*\
  !*** ./src/app/components/shared/nav/nav.component.ts ***!
  \********************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./nav.component.html */ "OtH3");
/* harmony import */ var _nav_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.component.css */ "CmJa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavComponent.ctorParameters = () => [];
NavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-nav',
        template: _raw_loader_nav_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_nav_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavComponent);



/***/ }),

/***/ "dFAl":
/*!**************************************************!*\
  !*** ./src/app/components/app-routing.module.ts ***!
  \**************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "W3Zi");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "XC3f");
/* harmony import */ var _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shopping-cart/shopping-cart.component */ "gypT");
/* harmony import */ var _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/page-not-found/page-not-found.component */ "N4eq");







const routes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'shop', component: _shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_5__["ShoppingCartComponent"] },
    { path: '**', component: _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "etgG":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/cart/cart.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"cartItems.length === 0\" class=\"alert alert-info\">Your Cart is Empty.</div>\n\n<ul *ngIf=\"cartItems.length > 0\" class=\"list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let item of cartItems\">\n    <app-cart-item [cartItem]=\"item\"></app-cart-item>\n  </li>\n\n  <li class=\"list-group-item active\">\n    <strong>Total</strong> {{ cartTotal | currency:'INR' }}\n  </li>\n</ul>\n<div>\n  <button class=\"btn btn-secondary btn-block\" button (click)=\"clearcart()\" >Clear Cart</button>\n</div>");

/***/ }),

/***/ "gypT":
/*!*********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.ts ***!
  \*********************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_shopping_cart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./shopping-cart.component.html */ "zNyM");
/* harmony import */ var _shopping_cart_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shopping-cart.component.css */ "lUqx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ShoppingCartComponent = class ShoppingCartComponent {
    constructor() { }
    ngOnInit() {
    }
};
ShoppingCartComponent.ctorParameters = () => [];
ShoppingCartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-shopping-cart',
        template: _raw_loader_shopping_cart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_shopping_cart_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ShoppingCartComponent);



/***/ }),

/***/ "iEmP":
/*!***************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "j/Fd":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "VFLz");
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.css */ "OVmk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "lUqx":
/*!**********************************************************************!*\
  !*** ./src/app/components/shopping-cart/shopping-cart.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "mDuy":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "muQR":
/*!***********************************************!*\
  !*** ./src/app/services/messenger.service.ts ***!
  \***********************************************/
/*! exports provided: MessengerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessengerService", function() { return MessengerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "41Ph");



let MessengerService = class MessengerService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    sendMsg(product) {
        this.subject.next(product); //Triggering an event
    }
    getMsg() {
        return this.subject.asObservable();
    }
};
MessengerService.ctorParameters = () => [];
MessengerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessengerService);



/***/ }),

/***/ "p4v1":
/*!***********************************************************************!*\
  !*** ./src/app/components/shopping-cart/filters/filters.component.ts ***!
  \***********************************************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_filters_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./filters.component.html */ "zYpx");
/* harmony import */ var _filters_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.component.css */ "wpNf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FiltersComponent = class FiltersComponent {
    //searchword: String;
    constructor() { }
    ngOnInit() {
        //throw new Error('Method not implemented.');
    }
};
FiltersComponent.ctorParameters = () => [];
FiltersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-filters',
        template: _raw_loader_filters_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_filters_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FiltersComponent);



/***/ }),

/***/ "qqtL":
/*!*****************************************************************!*\
  !*** ./src/app/components/shopping-cart/cart/cart.component.ts ***!
  \*****************************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cart_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cart.component.html */ "etgG");
/* harmony import */ var _cart_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart.component.css */ "G6/a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/messenger.service */ "muQR");





let CartComponent = class CartComponent {
    constructor(msg) {
        this.msg = msg;
        this.cartItems = [];
        this.cartTotal = 0;
    }
    ngOnInit() {
        this.msg.getMsg().subscribe((product) => {
            this.addProductToCart(product);
        });
    }
    addProductToCart(product) {
        let productExists = false;
        for (let i in this.cartItems) {
            if (this.cartItems[i].productId === product.id) {
                this.cartItems[i].qty++;
                productExists = true;
                break;
            }
        }
        if (!productExists) {
            this.cartItems.push({
                productId: product.id,
                productName: product.name,
                qty: 1,
                price: product.price
            });
        }
        this.cartTotal = 0;
        this.cartItems.forEach(item => {
            this.cartTotal += (item.qty * item.price);
        });
    }
    clearcart() {
        this.cartItems = [0];
        this.cartTotal = 0;
        // window.location.reload();
    }
};
CartComponent.ctorParameters = () => [
    { type: src_app_services_messenger_service__WEBPACK_IMPORTED_MODULE_4__["MessengerService"] }
];
CartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cart',
        template: _raw_loader_cart_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cart_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CartComponent);



/***/ }),

/***/ "snyT":
/*!*******************************************************************************!*\
  !*** ./src/app/components/shared/page-not-found/page-not-found.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "u5ur":
/*!*********************************************************************************!*\
  !*** ./src/app/components/shopping-cart/product-list/product-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./product-list.component.html */ "G56M");
/* harmony import */ var _product_list_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list.component.css */ "ur8w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product.service */ "Gdn9");





let ProductListComponent = class ProductListComponent {
    constructor(productService) {
        this.productService = productService;
        this.productList = [];
    }
    ngOnInit() {
        this.productList = this.productService.getProducts();
    }
};
ProductListComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
ProductListComponent.propDecorators = {
    finalSearchString: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ProductListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-product-list',
        template: _raw_loader_product_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_product_list_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProductListComponent);



/***/ }),

/***/ "ur8w":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shopping-cart/product-list/product-list.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "woRh":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("hr{\r\n    border: 3px solid #07006e\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtBQUNKIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJocntcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICMwNzAwNmVcclxufSJdfQ== */");

/***/ }),

/***/ "wpNf":
/*!************************************************************************!*\
  !*** ./src/app/components/shopping-cart/filters/filters.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWx0ZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "yHTb":
/*!***********************************!*\
  !*** ./src/app/models/product.ts ***!
  \***********************************/
/*! exports provided: Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
class Product {
    constructor(id, name, description = '', price = 0, imageUrl = 'https://djsoulchildac.com/wp-content/uploads/2020/08/Royal-Blue-Casual-Check-Shirt-1-min.jpg') {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}


/***/ }),

/***/ "zNyM":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/shopping-cart.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-md-2\">\n    <app-filters></app-filters>\n  </div>\n\n  <div class=\"col-md-8\">\n    <app-product-list [finalSearchString]=\"sendToList\"></app-product-list>\n  </div>\n\n  <div class=\"col\">\n    <app-cart></app-cart>\n  </div>\n</div>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zYpx":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shopping-cart/filters/filters.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"form-group\">\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchword\"(input)=\"searchThis()\" width=\"300%\">\n</div>");

/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map