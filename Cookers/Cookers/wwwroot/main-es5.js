function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/add-recipe/add-recipe.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-recipe/add-recipe.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAddRecipeAddRecipeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"add-recipe-container\">\n    <div class=\"back-container\">\n        <div class=\"back-block\" (click)=\"goToPreviousPage()\">\n            <img src=\"assets/images/back.png\">\n            <p>Назад</p>\n        </div>\n    </div>\n    <div class=\"publish-block\">\n        <h5>Добавить новый рецепт</h5>\n        <button class=\"addrecipe\">\n            <p>Опубликовать</p>\n        </button>\n    </div>\n    <div class=\"general-information-block\">\n        <div class=\"photo-block\">\n            <div class=\"photo-frame\">\n                    <img src=\"assets/images/download.png\">\n                    <p>Загрузите фото <br> готового блюда </p>\n            </div>\n        </div>\n        <form class=\"fields-to-fill-block\">\n                <input class=\"fields-input\" type=\"text\" placeholder=\"Название рецепта\">\n                <textarea class=\"fields-textarea\" placeholder=\"Краткое описание рецепта (150 символов)\"></textarea>\n                <input class=\"fields-input\" type=\"text\" placeholder=\"Добавить теги\">\n                <div class=\"select-block\">\n                    <div class=\"cooking-time-portions-dish\">\n                        <select> \n                            <option disabled><p> Время готовки </p></option>\n                        </select>\n                        <p>Минут</p>\n                    </div>\n                    <div class=\"cooking-time-portions-dish\">\n                        <select> \n                            <option disabled>Порций в блюде</option>\n                        </select>\n                        <p>Персон</p>\n                    </div>\n                </div>\n        </form>\n    </div>\n    <div class=\"ingredients-step-block\">\n        <div class=\"ingredients-block\">\n            <div class=\"ingredients-title\">\n                <h4>Ингридиенты</h4>\n            </div>\n            <div class=\"close-img\">\n                <img src=\"assets/images/close.png\">\n            </div>\n            <form class=\"ingredients-info\">\n                <input class=\"fields-input\" type=\"text\" placeholder=\"Заголовок для ингридиентов\">\n                <textarea class=\"fields-textarea\" placeholder=\"Список подуктов для категории\"></textarea>\n            </form>\n            <button>\n                <p>Добавить заголовок</p>\n            </button>\n        </div>\n        <div class=\"step-block\">\n            <form class=\"step-form\">\n                <div class=\"step-title\">\n                   <h4>Шаг 1</h4>\n                    <img src=\"assets/images/close.png\">\n                </div>\n                <textarea class=\"fields-textarea\" placeholder=\"Описание шага\"></textarea>\n            </form>\n            <div class=\"step-addbutton\">\n                <button>\n                    <p>Добавить заголовок</p>\n                </button>\n            </div>\n        </div>\n    </div>\n    \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page\">\r\n    <div class=\"centered-container\">\r\n        <app-top-bar></app-top-bar>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n    <div class=\"footer-block\">\r\n        <app-fot-bar></app-fot-bar>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authorization/authorization.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authorization/authorization.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthorizationAuthorizationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"authorization-form\">\n    <div class=\"close-block\">\n        <img src=\"assets/images/close.png\" (click)=\"onAuthClick()\">\n    </div>\n    <h4>Войти</h4>\n    <input class=\"fields-input\" type=\"text\" placeholder=\"Логин\">\n    <input class=\"fields-input\" type=\"password\" placeholder=\"Пароль\">\n    <div class=\"control-buttons\">\n        <button class=\"addrecipe\">\n            <p>Войти</p>\n        </button>\n        <button class=\"authorise\" (click)=\"onAuthClick()\">\n            <p>Отмена</p>\n        </button>\n    </div>\n    <a class=\"transition-hrev\" (click)=\"onSignInClick()\">У меня еще нет аккаунта</a>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites-page/favorites-page.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites-page/favorites-page.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFavoritesPageFavoritesPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/fot-bar/fot-bar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fot-bar/fot-bar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFotBarFotBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer>\r\n    <h1>Recipes</h1>\r\n    <p>© Recipes 2021</p>\r\n</footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainPageMainPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-pagecontainer\">\r\n    <div *ngIf=\"buttonAuthState\">\r\n        <div class=\"background-fon\">\r\n            <app-authorization class=\"auth-reg-form\" (buttonAuthClick)=\"closeAuthForm()\" (buttonRegClick)=\"closeAuthForm(); btnRegClick()\"></app-authorization>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"buttonRegState\">\r\n        <div class=\"background-fon\">\r\n            <app-registration class=\"auth-reg-form\" (buttonRegClick)=\"closeRegForm()\" (buttonAuthClick)=\"closeRegForm(); btnAuthClick()\"></app-registration>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"addrecipe-authorise-block\">\r\n        <h6>Готовь и делись <br> рецептами</h6>\r\n        <p>Никаких кулинарных книг и блокнотов! Храни все <br> любимые рецепты в одном месте.</p>\r\n        <div class=\"addrecipe-authorise\">\r\n            <button class=\"addrecipe\" [routerLink] = \"['/addnewrecipe', {'paramId': pageId}]\">\r\n                <p>+ &nbsp; &nbsp; Добавить рецепт</p>\r\n            </button>\r\n            <button class=\"authorise\" (click)=\"btnAuthClick()\">\r\n                <p>Войти</p>\r\n            </button>\r\n        </div>\r\n        \r\n    </div>\r\n\r\n    <div class=\"sortingbytags-block\">\r\n        <h5>Умная сортировка по тегам</h5>\r\n        <p>Добавляй рецепты и указывай наиболее популярные теги. Это позволит <br> быстро находить любые категории.</p>\r\n        <app-tag-list [pageId]=\"pageId\"></app-tag-list>\r\n    </div>\r\n\r\n    <div class=\"day-recipe-block\" *ngIf=\"recipe !== undefined\">\r\n        <img class=\"day-recipe-block-img\" src=\"{{recipe.photo}}\">\r\n        <div class=\"recipe-info-block\">\r\n            <div class=\"likes-time-block\">\r\n                <img src=\"assets/images/like1.png\">\r\n                <p>{{recipe.likes}}</p>\r\n                <img src=\"assets/images/clock1.png\">\r\n                <p>{{recipe.cookingTime}} минут</p>\r\n            </div>\r\n            <img class=\"day-recipe-img\" src=\"assets/images/day-recipe.png\">\r\n            <h5>{{recipe.name}}</h5>\r\n            <p>{{(recipe.description.length>maxLength)? (recipe.description | slice:0:maxLength)+'...':(recipe.description)}}</p>\r\n            <div class=\"about-button-block\">\r\n                <button class=\"addrecipe\" [routerLink] = \"['/recipeinfo', {'paramId': pageId}]\"  (click)=\"onPushDataInServiceClick()\">\r\n                    <p>Подробнее</p>\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"findrecipe-title-block\">\r\n        <h5>Поиск рецептов</h5>\r\n        <p>Введите примерное название блюда, а мы по тегам найдем его</p>\r\n    </div>\r\n\r\n    <div class=\"findrecipe-block\">\r\n        <div class=\"searchbar-button-hyperlinkbar-block\">\r\n            <div class=\"searchbar-button-block\">\r\n                <input type=\"text\" placeholder=\"Название блюда...\">\r\n                <button class=\"seachbutton\">\r\n                    <p>Поиск</p>\r\n                </button>\r\n            </div> \r\n            <div class=\"hyperlinkbar\">\r\n                <a>Мясо</a>\r\n                <a>Деликатесы</a>\r\n                <a>Пироги</a>\r\n                <a>Рыба</a>\r\n            </div>\r\n        </div>   \r\n    </div>\r\n    \r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe-info/recipe-info.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipe-info/recipe-info.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipeInfoRecipeInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"recipe-info-container\">\n    <div class=\"back-container\">\n        <div class=\"back-block\" (click) = \"returnBackPageClick()\">\n            <img src=\"assets/images/back.png\">\n            <p>Назад</p>\n        </div>\n    </div>\n\n    <div class=\"recipe-title-block\">\n        <h5>{{recipe.name}}</h5>\n        <div class=\"remove-edit-block\">\n            <button class=\"addrecipe\">\n                <p>Редактировать</p>\n            </button>\n        </div>\n    </div>\n\n    <div class=\"recipes-block\" *ngIf=\"recipe !== undefined\">\n        <div class=\"list-recipes-block\">\n            <app-recipe [parentPageId]=\"pageId\" [recipe]=\"recipe\"></app-recipe>\n        </div>\n    </div>\n\n    <div class=\"ingridients-steps-block\">\n        <div class=\"ingridients-block\">\n            <h3 class=\"ingridients-title\">Ингридиенты</h3>\n            <div class=\"ingridients-list-block\" *ngIf=\"recipe !== undefined\">    \n                <div class=\"ingridients-list\" *ngFor=\"let ingridient of recipe.ingridients\">\n                    <p class=\"list-title\">{{ingridient.name}}</p>\n                    <div class=\"description-list\" *ngFor=\"let item of ingridient.descriptions\">\n                        <p>{{item}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"steps-block\">\n            <div class=\"steps-block\" *ngFor=\"let step of recipe.steps\">\n                <div class=\"step-list\">\n                    <p class=\"list-title\">{{step.name}}</p>\n                    <p>{{step.description}}</p>\n                </div>\n            </div>\n            <h4>Приятного Аппетита!</h4>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/recipe.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/recipe.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipeRecipeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"recipe-block\">\n    <img class=\"recipe-img\" src=\"{{recipe.photo}}\">\n    <div class=\"description-block\">\n        <div class=\"likes-favotites-block\">\n            <div class=\"likes-or-favotites-button\">\n                <img src=\"assets/images/star1.png\">\n                <p>{{recipe.favorites}}</p>\n            </div>\n            <div class=\"likes-or-favotites-button\">\n                <img src=\"assets/images/like3.png\">\n                <p>{{recipe.likes}}</p>\n            </div>\n        </div>\n        <div class=\"text-block\">\n            <h4>{{recipe.name}}</h4>\n            <div *ngIf=\"parentPageId == 4; then thenMainBlock else elseMainBlock\"></div>\n            <ng-template #thenMainBlock>\n                <p>{{recipe.description}}</p>\n            </ng-template>\n            <ng-template #elseMainBlock>\n                <p>{{(recipe.description.length>maxLength)? (recipe.description | slice:0:maxLength)+'...':(recipe.description)}}</p>\n            </ng-template>\n        </div>\n        <div class=\"cooking-portions-button-block\">\n            <div class=\"cooking-portions-block\">\n                <div class=\"cooking-or-portions-container\">\n                    <img src=\"assets/images/clock2.png\">\n                    <div class=\"illustrate-information-block\">\n                        <p>Время приготовления:</p>\n                        <p>{{recipe.cookingTime}} минут</p>\n                    </div>\n                </div>\n                <div class=\"cooking-or-portions-container\">\n                    <img src=\"assets/images/peoples.png\">\n                    <div class=\"illustrate-information-block\">\n                        <p>Рецепт на:</p>\n                        <p>{{recipe.peoples}} персон</p>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"parentPageId !== 4\">\n                <button class=\"addrecipe\" [routerLink] = \"['/recipeinfo', {'paramId': parentPageId}]\" (click)=\"onPushDataInServiceClick()\">\n                    <p>Подробнее</p>\n                </button>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes-page/recipes-page.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes-page/recipes-page.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipesPageRecipesPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-pagecontainer\">\n    <div class=\"add-recipe-block\">\n        <h4>Рецепты</h4>\n        <button class=\"addrecipe\" [routerLink] = \"['/addnewrecipe', {'paramId': pageId}]\">\n            <p style=\"color: #FFFFFF; font-weight: 600;\">+ &nbsp; &nbsp; Добавить рецепт</p>\n        </button>\n    </div>\n\n    <app-tag-list></app-tag-list>\n\n    <div class=\"find-recipe-with-title-block\">\n        <h4>Поиск рецепта</h4>\n        <div class=\"searchbar-button-hyperlinkbar-block\">\n            <div class=\"searchbar-button-block\">\n                <input type=\"text\" placeholder=\"Название блюда...\">\n                <button class=\"seachbutton\">\n                    <p>Поиск</p>\n                </button>\n            </div>\n            <div class=\"hyperlinkbar\">\n                <a>Мясо</a>\n                <a>Деликатесы</a>\n                <a>Пироги</a>\n                <a>Рыба</a>\n                <a>Пост</a>\n                <a>Пасха2021</a>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"recipes-block\" *ngIf=\"recipes !== undefined\">\n        <div class=\"list-recipes-block\" *ngFor=\"let recipe of recipes\">\n            <app-recipe [parentPageId]=\"pageId\" [recipe]=\"recipe\"></app-recipe>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistrationRegistrationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"authorization-form\">\n    <div class=\"close-block\">\n        <img src=\"assets/images/close.png\" (click)=\"onRegClick()\">\n    </div>\n    <h4>Регистрация</h4>\n    <input class=\"fields-input\" type=\"text\" placeholder=\"Имя\">\n    <input class=\"fields-input\" type=\"text\" placeholder=\"Логин\">\n    <div class=\"password-block\">\n        <input class=\"fields-input\" type=\"password\" placeholder=\"Пароль\">\n        <input class=\"fields-input\" type=\"password\" placeholder=\"Повторите пароль\">\n    </div>\n    <p class=\"suggesting-text\">Минимум 8 символов</p>\n    <div class=\"control-buttons\">\n        <button class=\"addrecipe\">\n            <p>Зарегистрироваться</p>\n        </button>\n        <button class=\"authorise\" (click)=\"onRegClick()\">\n            <p>Отмена</p>\n        </button>\n    </div>\n    <a class=\"transition-hrev\" (click)=\"onAuthClick()\">У меня есть аккаунт</a>\n</form>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tag-list/tag-list.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tag-list/tag-list.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTagListTagListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"tag-container\">\r\n    <button class=\"tag-box\">\r\n        <img src=\"assets/images/menu-icon.png\">\r\n        <h4>Простые блюда</h4>\r\n        <p *ngIf=\"pageId == 1\">Время приготвления таких блюд не более 1 часа</p>\r\n    </button>\r\n    <button class=\"tag-box\">\r\n        <img src=\"assets/images/child-icon.png\">\r\n        <h4>Детское</h4>\r\n        <p *ngIf=\"pageId == 1\">Самые полезные блюда которые можно детям любого возраста</p>\r\n    </button>\r\n    <button class=\"tag-box\">\r\n        <img src=\"assets/images/chef-icon.png\">\r\n        <h4>От шеф-поваров</h4>\r\n        <p *ngIf=\"pageId == 1\">Требуют умения, времени и терпения, зато как в ресторане</p>\r\n    </button>\r\n    <button class=\"tag-box\">\r\n        <img src=\"assets/images/holiday-icon.png\">\r\n        <h4>На праздник</h4>\r\n        <p *ngIf=\"pageId == 1\">Чем удивить гостей, чтобы все были сыты за праздничным столом</p>\r\n    </button>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTopBarTopBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header\">\r\n    <div class=\"nav-panel\">\r\n        <h1>Recipes</h1>\r\n        <div class=\"menu\">\r\n            <div *ngIf=\"pageId == 1; then thenMainBlock else elseMainBlock\"></div>\r\n                <ng-template #thenMainBlock>\r\n                    <a style=\"color: black;\" [routerLink]=\"['/']\" (click)=\"onClickMain(1)\"> \r\n                        Главная        \r\n                    </a>\r\n                </ng-template>\r\n                <ng-template #elseMainBlock>\r\n                    <a [routerLink]=\"['/']\" (click)=\"onClickMain(1)\"> \r\n                        Главная        \r\n                    </a>\r\n                </ng-template>\r\n            <div *ngIf=\"pageId == 2; then thenRecipesBlock else elseRecipesBlock\"></div>\r\n                <ng-template #thenRecipesBlock>\r\n                    <a style=\"color: black;\" [routerLink]=\"['/recipes']\" (click)=\"onClickMain(2)\"> \r\n                        Рецепты        \r\n                    </a>\r\n                </ng-template>\r\n                <ng-template #elseRecipesBlock>\r\n                    <a [routerLink]=\"['/recipes']\" (click)=\"onClickMain(2)\"> \r\n                        Рецепты        \r\n                    </a>\r\n                </ng-template>\r\n            <div *ngIf=\"pageId == 3; then thenFavoritesBlock else elseFavoritesBlock\"></div>\r\n                <ng-template #thenFavoritesBlock>\r\n                    <a style=\"color: black;\"[routerLink]=\"['/favorites']\" (click)=\"onClickMain(3)\"> \r\n                        Избранное        \r\n                    </a>\r\n                </ng-template>\r\n                <ng-template #elseFavoritesBlock>\r\n                    <a [routerLink]=\"['/favorites']\" (click)=\"onClickMain(3)\"> \r\n                        Избранное        \r\n                    </a>\r\n                </ng-template>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"buttonAuthState\">\r\n        <div class=\"background-fon\">\r\n            <app-authorization class=\"auth-reg-form\" (buttonAuthClick)=\"closeAuthForm()\" (buttonRegClick)=\"closeAuthForm(); btnRegClick()\"></app-authorization>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"buttonRegState\">\r\n        <div class=\"background-fon\">\r\n            <app-registration class=\"auth-reg-form\" (buttonRegClick)=\"closeRegForm()\" (buttonAuthClick)=\"closeRegForm(); nAuthClick()\"></app-registration>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"authorise-panel\">\r\n        <img src=\"assets/images/autorise-icon.png\">\r\n        <a class=\"enter-profile\" (click)=\"onAuthClick()\">\r\n            Войти\r\n        </a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/add-recipe/add-recipe.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/add-recipe/add-recipe.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAddRecipeAddRecipeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".add-recipe-container\r\n{\r\n    padding: 0px 120px;\r\n}\r\n\r\n.publish-block\r\n{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.general-information-block\r\n{\r\n    display: flex;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 16px 72px rgba(34, 39, 47, 0.05);\r\n    border-radius: 24px;\r\n}\r\n\r\n.publish-block + .general-information-block\r\n{\r\n    margin-top: 50px;\r\n}\r\n\r\n.fields-to-fill-block\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 50px 50px;\r\n}\r\n\r\n.fields-to-fill-block .fields-input + .fields-input\r\n{\r\n    margin-top: 20px;\r\n}\r\n\r\n.fields-to-fill-block .fields-textarea\r\n{\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.select-block\r\n{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.fields-to-fill-block .fields-input + .select-block\r\n{\r\n    margin-top: 20px;\r\n}\r\n\r\n.cooking-time-portions-dish\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.select-block p\r\n{\r\n    font-size: 16px;\r\n}\r\n\r\n.fields-to-fill-block select\r\n{\r\n    text-indent: 32px;\r\n    outline: none;\r\n    width: 220px;\r\n    height: 50px;\r\n    border: 1px solid rgba(145, 150, 161, 0.4);\r\n    box-sizing: border-box;\r\n    color: rgba(37, 41, 45, 0.5);\r\n    -webkit-appearance: none;\r\n       -moz-appearance: none;\r\n            appearance: none;\r\n    border-radius: 16px;\r\n}\r\n\r\n.fields-to-fill-block option\r\n{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    background: inherit;\r\n    font-size: 16px;\r\n    color: rgba(37, 41, 45, 0.5);\r\n}\r\n\r\n.select-block select + p\r\n{\r\n    margin-left: 11px;\r\n}\r\n\r\n.photo-block\r\n{\r\n    background: linear-gradient(0deg, #FFEFCC, #FFEFCC), #FFFCF7;\r\n    border-radius: 72px 0px;\r\n    width: 430px;\r\n    display: flex;\r\n    padding: 83px;\r\n}\r\n\r\n.photo-frame\r\n{\r\n    border: 1px dashed #F29E1F;\r\n    box-sizing: border-box;\r\n    border-radius: 20px;\r\n    flex-grow: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\nh4\r\n{\r\n    font-size: 20px;\r\n}\r\n\r\n.ingredients-step-block\r\n{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n    margin-bottom: 106px;\r\n}\r\n\r\n.general-information-block + .ingredients-step-block\r\n{\r\n    margin-top: 40px;\r\n}\r\n\r\n.ingredients-block\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.ingredients-title\r\n{\r\n    display: flex; \r\n    justify-content: flex-start;\r\n}\r\n\r\n.close-img\r\n{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.ingredients-info\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    width: 380px;\r\n    padding: 36px 30px;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 16px 72px rgba(34, 39, 47, 0.05);\r\n    border-radius: 24px;\r\n}\r\n\r\n.close-img + .ingredients-info\r\n{\r\n    margin-top: 15px;\r\n}\r\n\r\n.ingredients-info .fields-input\r\n{\r\n    width: auto;\r\n}\r\n\r\n.ingredients-info .fields-textarea\r\n{\r\n    width: auto;\r\n    height: 229px;\r\n}\r\n\r\n.ingredients-info .fields-input + .fields-textarea\r\n{\r\n    margin-top: 20px;\r\n}\r\n\r\n.ingredients-step-block button\r\n{\r\n    border: 1px solid #FDB100;\r\n    background: inherit;\r\n    box-sizing: border-box;\r\n    border-radius: 16px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.ingredients-step-block button:hover\r\n{\r\n    background-image: radial-gradient(ellipse farthest-corner at 50% 50%, rgb(253, 211, 133), rgb(253, 211, 133));\r\n}\r\n\r\n.ingredients-info + button\r\n{\r\n    margin-top: 40px;\r\n}\r\n\r\n.ingredients-step-block button p\r\n{\r\n    font-weight: 600;\r\n    color: #FDB100;\r\n}\r\n\r\n.step-block\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.step-form\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    width: 790px;\r\n    padding: 50px 70px;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 16px 72px rgba(34, 39, 47, 0.05);\r\n    border-radius: 24px;\r\n}\r\n\r\n.step-title\r\n{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.step-form h4\r\n{\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n}\r\n\r\n.step-form .fields-textarea\r\n{\r\n    width: auto;\r\n    height: 229px;\r\n}\r\n\r\n.step-form .step-title + .fields-textarea\r\n{\r\n    margin-top: 21px;\r\n}\r\n\r\n.step-addbutton\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.step-addbutton button\r\n{\r\n    width: 380px;\r\n}\r\n\r\n.step-form + .step-addbutton\r\n{\r\n    margin-top: 40px;\r\n}\r\n\r\n.photo-frame p\r\n{\r\n    font-size: 16px; \r\n    color: #F29E1F; \r\n    text-align: center;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXJlY2lwZS9hZGQtcmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnREFBZ0Q7SUFDaEQsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0lBQ1osWUFBWTtJQUNaLDBDQUEwQztJQUMxQyxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLHdCQUFnQjtPQUFoQixxQkFBZ0I7WUFBaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDRCQUE0QjtBQUNoQzs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksNERBQTREO0lBQzVELHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksMEJBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtBQUN4Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0RBQWdEO0lBQ2hELG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSw2R0FBNkc7QUFDakg7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdEQUFnRDtJQUNoRCxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksV0FBVztJQUNYLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hZGQtcmVjaXBlL2FkZC1yZWNpcGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtcmVjaXBlLWNvbnRhaW5lclxyXG57XHJcbiAgICBwYWRkaW5nOiAwcHggMTIwcHg7XHJcbn1cclxuXHJcbi5wdWJsaXNoLWJsb2NrXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5nZW5lcmFsLWluZm9ybWF0aW9uLWJsb2NrXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE2cHggNzJweCByZ2JhKDM0LCAzOSwgNDcsIDAuMDUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxufVxyXG5cclxuLnB1Ymxpc2gtYmxvY2sgKyAuZ2VuZXJhbC1pbmZvcm1hdGlvbi1ibG9ja1xyXG57XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uZmllbGRzLXRvLWZpbGwtYmxvY2tcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiA1MHB4IDUwcHg7XHJcbn1cclxuXHJcbi5maWVsZHMtdG8tZmlsbC1ibG9jayAuZmllbGRzLWlucHV0ICsgLmZpZWxkcy1pbnB1dFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZmllbGRzLXRvLWZpbGwtYmxvY2sgLmZpZWxkcy10ZXh0YXJlYVxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnNlbGVjdC1ibG9ja1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZmllbGRzLXRvLWZpbGwtYmxvY2sgLmZpZWxkcy1pbnB1dCArIC5zZWxlY3QtYmxvY2tcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmNvb2tpbmctdGltZS1wb3J0aW9ucy1kaXNoXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VsZWN0LWJsb2NrIHBcclxue1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZmllbGRzLXRvLWZpbGwtYmxvY2sgc2VsZWN0XHJcbntcclxuICAgIHRleHQtaW5kZW50OiAzMnB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTQ1LCAxNTAsIDE2MSwgMC40KTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBjb2xvcjogcmdiYSgzNywgNDEsIDQ1LCAwLjUpO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbi5maWVsZHMtdG8tZmlsbC1ibG9jayBvcHRpb25cclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMzcsIDQxLCA0NSwgMC41KTtcclxufVxyXG5cclxuLnNlbGVjdC1ibG9jayBzZWxlY3QgKyBwXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMXB4O1xyXG59XHJcblxyXG4ucGhvdG8tYmxvY2tcclxue1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICNGRkVGQ0MsICNGRkVGQ0MpLCAjRkZGQ0Y3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNzJweCAwcHg7XHJcbiAgICB3aWR0aDogNDMwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGFkZGluZzogODNweDtcclxufVxyXG5cclxuLnBob3RvLWZyYW1lXHJcbntcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjRjI5RTFGO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuaDRcclxue1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uaW5ncmVkaWVudHMtc3RlcC1ibG9ja1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDZweDtcclxufVxyXG5cclxuLmdlbmVyYWwtaW5mb3JtYXRpb24tYmxvY2sgKyAuaW5ncmVkaWVudHMtc3RlcC1ibG9ja1xyXG57XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uaW5ncmVkaWVudHMtYmxvY2tcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5pbmdyZWRpZW50cy10aXRsZVxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmNsb3NlLWltZ1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmluZ3JlZGllbnRzLWluZm9cclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzODBweDtcclxuICAgIHBhZGRpbmc6IDM2cHggMzBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTZweCA3MnB4IHJnYmEoMzQsIDM5LCA0NywgMC4wNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG59XHJcblxyXG4uY2xvc2UtaW1nICsgLmluZ3JlZGllbnRzLWluZm9cclxue1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmluZ3JlZGllbnRzLWluZm8gLmZpZWxkcy1pbnB1dFxyXG57XHJcbiAgICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuLmluZ3JlZGllbnRzLWluZm8gLmZpZWxkcy10ZXh0YXJlYVxyXG57XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGhlaWdodDogMjI5cHg7XHJcbn1cclxuXHJcbi5pbmdyZWRpZW50cy1pbmZvIC5maWVsZHMtaW5wdXQgKyAuZmllbGRzLXRleHRhcmVhXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5pbmdyZWRpZW50cy1zdGVwLWJsb2NrIGJ1dHRvblxyXG57XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkRCMTAwO1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uaW5ncmVkaWVudHMtc3RlcC1ibG9jayBidXR0b246aG92ZXJcclxue1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IDUwJSA1MCUsIHJnYigyNTMsIDIxMSwgMTMzKSwgcmdiKDI1MywgMjExLCAxMzMpKTtcclxufVxyXG5cclxuLmluZ3JlZGllbnRzLWluZm8gKyBidXR0b25cclxue1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLmluZ3JlZGllbnRzLXN0ZXAtYmxvY2sgYnV0dG9uIHBcclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjRkRCMTAwO1xyXG59XHJcblxyXG4uc3RlcC1ibG9ja1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc3RlcC1mb3JtXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNzkwcHg7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE2cHggNzJweCByZ2JhKDM0LCAzOSwgNDcsIDAuMDUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjRweDtcclxufVxyXG5cclxuLnN0ZXAtdGl0bGVcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdGVwLWZvcm0gaDRcclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnN0ZXAtZm9ybSAuZmllbGRzLXRleHRhcmVhXHJcbntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAyMjlweDtcclxufVxyXG5cclxuLnN0ZXAtZm9ybSAuc3RlcC10aXRsZSArIC5maWVsZHMtdGV4dGFyZWFcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMjFweDtcclxufVxyXG5cclxuLnN0ZXAtYWRkYnV0dG9uXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN0ZXAtYWRkYnV0dG9uIGJ1dHRvblxyXG57XHJcbiAgICB3aWR0aDogMzgwcHg7XHJcbn1cclxuXHJcbi5zdGVwLWZvcm0gKyAuc3RlcC1hZGRidXR0b25cclxue1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLnBob3RvLWZyYW1lIHBcclxue1xyXG4gICAgZm9udC1zaXplOiAxNnB4OyBcclxuICAgIGNvbG9yOiAjRjI5RTFGOyBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/add-recipe/add-recipe.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/add-recipe/add-recipe.component.ts ***!
    \****************************************************/

  /*! exports provided: AddRecipeComponent */

  /***/
  function srcAppAddRecipeAddRecipeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddRecipeComponent", function () {
      return AddRecipeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AddRecipeComponent = /*#__PURE__*/function () {
      function AddRecipeComponent(router, route) {
        _classCallCheck(this, AddRecipeComponent);

        this.router = router;
        this.route = route;
        this.targetRoute = '/recipes';
      }

      _createClass(AddRecipeComponent, [{
        key: "goToPreviousPage",
        value: function goToPreviousPage() {
          this.router.navigateByUrl(this.targetRoute);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.params.subscribe(function (params) {
            return _this.pageId = Number.parseInt(params['paramId']);
          });

          switch (this.pageId) {
            case 1:
              this.targetRoute = '/';
              break;

            case 3:
              this.targetRoute = '/recipes';
              break;
          }
        }
      }]);

      return AddRecipeComponent;
    }();

    AddRecipeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }];
    };

    AddRecipeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-add-recipe',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./add-recipe.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/add-recipe/add-recipe.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./add-recipe.component.css */
      "./src/app/add-recipe/add-recipe.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])], AddRecipeComponent);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page\r\n{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  min-height: 100vh;\r\n}\r\n\r\n.centered-container\r\n{\r\n  width: 1440px;\r\n  background: #FEFEFB;\r\n  flex-grow: 1;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n.footer-block\r\n{\r\n  background: #FBF9F4;\r\n  display: flex;\r\n  justify-content: center;\r\n  min-width: 1440px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZVxyXG57XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uY2VudGVyZWQtY29udGFpbmVyXHJcbntcclxuICB3aWR0aDogMTQ0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGRUZFRkI7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmZvb3Rlci1ibG9ja1xyXG57XHJcbiAgYmFja2dyb3VuZDogI0ZCRjlGNDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi13aWR0aDogMTQ0MHB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _recipes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./recipes.service */
    "./src/app/recipes.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(recipesService, http) {
        _classCallCheck(this, AppComponent);

        this.recipesService = recipesService;
        this.http = http;
        this._http = http;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.t0 = this.recipesService;
                    _context.next = 3;
                    return this._http.get('/api/recipes').toPromise();

                  case 3:
                    _context.t1 = _context.sent;

                    _context.t0.pushDataToRecipe.call(_context.t0, _context.t1);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _recipes_service__WEBPACK_IMPORTED_MODULE_1__["RecipesService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-root',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_recipes_service__WEBPACK_IMPORTED_MODULE_1__["RecipesService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./top-bar/top-bar.component */
    "./src/app/top-bar/top-bar.component.ts");
    /* harmony import */


    var _fot_bar_fot_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./fot-bar/fot-bar.component */
    "./src/app/fot-bar/fot-bar.component.ts");
    /* harmony import */


    var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./main-page/main-page.component */
    "./src/app/main-page/main-page.component.ts");
    /* harmony import */


    var _tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./tag-list/tag-list.component */
    "./src/app/tag-list/tag-list.component.ts");
    /* harmony import */


    var _recipes_page_recipes_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./recipes-page/recipes-page.component */
    "./src/app/recipes-page/recipes-page.component.ts");
    /* harmony import */


    var _favorites_page_favorites_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./favorites-page/favorites-page.component */
    "./src/app/favorites-page/favorites-page.component.ts");
    /* harmony import */


    var _add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./add-recipe/add-recipe.component */
    "./src/app/add-recipe/add-recipe.component.ts");
    /* harmony import */


    var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./recipe/recipe.component */
    "./src/app/recipe/recipe.component.ts");
    /* harmony import */


    var _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./authorization/authorization.component */
    "./src/app/authorization/authorization.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");
    /* harmony import */


    var _recipe_info_recipe_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./recipe-info/recipe-info.component */
    "./src/app/recipe-info/recipe-info.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_6__["TopBarComponent"], _fot_bar_fot_bar_component__WEBPACK_IMPORTED_MODULE_7__["FotBarComponent"], _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"], _tag_list_tag_list_component__WEBPACK_IMPORTED_MODULE_9__["TagListComponent"], _recipes_page_recipes_page_component__WEBPACK_IMPORTED_MODULE_10__["RecipesPageComponent"], _favorites_page_favorites_page_component__WEBPACK_IMPORTED_MODULE_11__["FavoritesPageComponent"], _add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_12__["AddRecipeComponent"], _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_13__["RecipeComponent"], _authorization_authorization_component__WEBPACK_IMPORTED_MODULE_14__["AuthorizationComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_15__["RegistrationComponent"], _recipe_info_recipe_info_component__WEBPACK_IMPORTED_MODULE_16__["RecipeInfoComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
        appId: 'ng-cli-universal'
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([{
        path: '',
        component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"]
      }, {
        path: 'recipes',
        component: _recipes_page_recipes_page_component__WEBPACK_IMPORTED_MODULE_10__["RecipesPageComponent"]
      }, {
        path: 'favorites',
        component: _favorites_page_favorites_page_component__WEBPACK_IMPORTED_MODULE_11__["FavoritesPageComponent"]
      }, {
        path: 'addnewrecipe',
        component: _add_recipe_add_recipe_component__WEBPACK_IMPORTED_MODULE_12__["AddRecipeComponent"]
      }, {
        path: 'recipeinfo',
        component: _recipe_info_recipe_info_component__WEBPACK_IMPORTED_MODULE_16__["RecipeInfoComponent"]
      }])],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/authorization/authorization.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/authorization/authorization.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthorizationAuthorizationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcml6YXRpb24vYXV0aG9yaXphdGlvbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/authorization/authorization.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/authorization/authorization.component.ts ***!
    \**********************************************************/

  /*! exports provided: AuthorizationComponent */

  /***/
  function srcAppAuthorizationAuthorizationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorizationComponent", function () {
      return AuthorizationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthorizationComponent = /*#__PURE__*/function () {
      function AuthorizationComponent() {
        _classCallCheck(this, AuthorizationComponent);

        this.buttonAuthClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buttonRegClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(AuthorizationComponent, [{
        key: "onAuthClick",
        value: function onAuthClick() {
          this.buttonAuthClick.emit();
        }
      }, {
        key: "onSignInClick",
        value: function onSignInClick() {
          this.buttonRegClick.emit();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AuthorizationComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], AuthorizationComponent.prototype, "buttonAuthClick", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], AuthorizationComponent.prototype, "buttonRegClick", void 0);

    AuthorizationComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-authorization',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./authorization.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authorization/authorization.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./authorization.component.css */
      "./src/app/authorization/authorization.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], AuthorizationComponent);
    /***/
  },

  /***/
  "./src/app/favorites-page/favorites-page.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/favorites-page/favorites-page.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFavoritesPageFavoritesPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlcy1wYWdlL2Zhdm9yaXRlcy1wYWdlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/favorites-page/favorites-page.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/favorites-page/favorites-page.component.ts ***!
    \************************************************************/

  /*! exports provided: FavoritesPageComponent */

  /***/
  function srcAppFavoritesPageFavoritesPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesPageComponent", function () {
      return FavoritesPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FavoritesPageComponent = /*#__PURE__*/function () {
      function FavoritesPageComponent() {
        _classCallCheck(this, FavoritesPageComponent);

        this.pageId = 2;
      }

      _createClass(FavoritesPageComponent, [{
        key: "returnPage",
        value: function returnPage() {
          return this.pageId;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FavoritesPageComponent;
    }();

    FavoritesPageComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-favorites-page',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./favorites-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites-page/favorites-page.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./favorites-page.component.css */
      "./src/app/favorites-page/favorites-page.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], FavoritesPageComponent);
    /***/
  },

  /***/
  "./src/app/fot-bar/fot-bar.component.css":
  /*!***********************************************!*\
    !*** ./src/app/fot-bar/fot-bar.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFotBarFotBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "footer\r\n{\r\n    display: flex;\r\n    width: 1440px;\r\n    padding: 37px 120px;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\nh1\r\n{\r\n    font-style: Montserrat;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 32px;\r\n    color: #FDB100;\r\n}\r\n\r\np\r\n{\r\n    font-weight: 500;\r\n    font-size: 20px;\r\n    color: #4A525A;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm90LWJhci9mb3QtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mb3QtYmFyL2ZvdC1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlclxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDE0NDBweDtcclxuICAgIHBhZGRpbmc6IDM3cHggMTIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oMVxyXG57XHJcbiAgICBmb250LXN0eWxlOiBNb250c2VycmF0O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBjb2xvcjogI0ZEQjEwMDtcclxufVxyXG5cclxucFxyXG57XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICM0QTUyNUE7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/fot-bar/fot-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/fot-bar/fot-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: FotBarComponent */

  /***/
  function srcAppFotBarFotBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FotBarComponent", function () {
      return FotBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var FotBarComponent = /*#__PURE__*/function () {
      function FotBarComponent() {
        _classCallCheck(this, FotBarComponent);
      }

      _createClass(FotBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FotBarComponent;
    }();

    FotBarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-fot-bar',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./fot-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/fot-bar/fot-bar.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./fot-bar.component.css */
      "./src/app/fot-bar/fot-bar.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], FotBarComponent);
    /***/
  },

  /***/
  "./src/app/main-page/main-page.component.css":
  /*!***************************************************!*\
    !*** ./src/app/main-page/main-page.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainPageMainPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".addrecipe-authorise-block\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.addrecipe-authorise\r\n{\r\n    display: flex;\r\n}\r\n\r\n.addrecipe + .authorise\r\n{\r\n    margin-left: 24px;\r\n}\r\n\r\n.sortingbytags-block\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.addrecipe-authorise-block + .sortingbytags-block\r\n{\r\n    margin-top: 352px;\r\n}\r\n\r\n.day-recipe-block\r\n{\r\n    display: flex;\r\n}\r\n\r\n.day-recipe-block-img\r\n{\r\n    width: 543px;\r\n    height: 543px;\r\n}\r\n\r\n.recipe-info-block\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0px 62px;\r\n}\r\n\r\n.likes-time-block\r\n{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n}\r\n\r\n.likes-time-block p\r\n{\r\n    font-size: 16px;\r\n}\r\n\r\n.likes-time-block img + p\r\n{\r\n    margin-left: 9px;\r\n}\r\n\r\n.likes-time-block p + img\r\n{\r\n    margin-left: 30px;\r\n}\r\n\r\n.day-recipe-img\r\n{\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n\r\n.recipe-info-block .day-recipe-img + h5\r\n{\r\n    margin-top: 32px;\r\n}\r\n\r\n.sortingbytags-block + .day-recipe-block\r\n{\r\n    margin-top: 150px;\r\n}\r\n\r\n.findrecipe-title-block\r\n{\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.day-recipe-block + .findrecipe-title-block\r\n{\r\n    margin-top: 150px;\r\n}\r\n\r\n.findrecipe-block\r\n{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 106px;\r\n}\r\n\r\n.findrecipe-title-block + .findrecipe-block\r\n{\r\n    margin-top: 64px;\r\n}\r\n\r\n.about-button-block\r\n{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.recipe-info-block p + .about-button-block\r\n{\r\n    margin-top: 30px;\r\n}\r\n\r\n.about-button-block .addrecipe\r\n{\r\n    width: 180px;\r\n}\r\n\r\n.seachbutton p\r\n{\r\n    color: #FFFFFF; \r\n    font-weight: 600;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxlQUFlO0FBQ25COztBQUVBOztJQUVJLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksY0FBYztJQUNkLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRyZWNpcGUtYXV0aG9yaXNlLWJsb2NrXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYWRkcmVjaXBlLWF1dGhvcmlzZVxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYWRkcmVjaXBlICsgLmF1dGhvcmlzZVxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcclxufVxyXG5cclxuLnNvcnRpbmdieXRhZ3MtYmxvY2tcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5hZGRyZWNpcGUtYXV0aG9yaXNlLWJsb2NrICsgLnNvcnRpbmdieXRhZ3MtYmxvY2tcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMzUycHg7XHJcbn1cclxuXHJcbi5kYXktcmVjaXBlLWJsb2NrXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5kYXktcmVjaXBlLWJsb2NrLWltZ1xyXG57XHJcbiAgICB3aWR0aDogNTQzcHg7XHJcbiAgICBoZWlnaHQ6IDU0M3B4O1xyXG59XHJcblxyXG4ucmVjaXBlLWluZm8tYmxvY2tcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAwcHggNjJweDtcclxufVxyXG5cclxuLmxpa2VzLXRpbWUtYmxvY2tcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubGlrZXMtdGltZS1ibG9jayBwXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLmxpa2VzLXRpbWUtYmxvY2sgaW1nICsgcFxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogOXB4O1xyXG59XHJcblxyXG4ubGlrZXMtdGltZS1ibG9jayBwICsgaW1nXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uZGF5LXJlY2lwZS1pbWdcclxue1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLnJlY2lwZS1pbmZvLWJsb2NrIC5kYXktcmVjaXBlLWltZyArIGg1XHJcbntcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuXHJcbi5zb3J0aW5nYnl0YWdzLWJsb2NrICsgLmRheS1yZWNpcGUtYmxvY2tcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbn1cclxuXHJcbi5maW5kcmVjaXBlLXRpdGxlLWJsb2NrXHJcbntcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmRheS1yZWNpcGUtYmxvY2sgKyAuZmluZHJlY2lwZS10aXRsZS1ibG9ja1xyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxufVxyXG5cclxuLmZpbmRyZWNpcGUtYmxvY2tcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTA2cHg7XHJcbn1cclxuXHJcbi5maW5kcmVjaXBlLXRpdGxlLWJsb2NrICsgLmZpbmRyZWNpcGUtYmxvY2tcclxue1xyXG4gICAgbWFyZ2luLXRvcDogNjRweDtcclxufVxyXG5cclxuLmFib3V0LWJ1dHRvbi1ibG9ja1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLnJlY2lwZS1pbmZvLWJsb2NrIHAgKyAuYWJvdXQtYnV0dG9uLWJsb2NrXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5hYm91dC1idXR0b24tYmxvY2sgLmFkZHJlY2lwZVxyXG57XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbn1cclxuXHJcbi5zZWFjaGJ1dHRvbiBwXHJcbntcclxuICAgIGNvbG9yOiAjRkZGRkZGOyBcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main-page/main-page.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/main-page/main-page.component.ts ***!
    \**************************************************/

  /*! exports provided: MainPageComponent */

  /***/
  function srcAppMainPageMainPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainPageComponent", function () {
      return MainPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../recipes.service */
    "./src/app/recipes.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MainPageComponent = /*#__PURE__*/function () {
      function MainPageComponent(router, recipesService) {
        _classCallCheck(this, MainPageComponent);

        this.router = router;
        this.recipesService = recipesService;
        this.pageId = null;
        this.recipes = [];
        this.buttonAuthState = false;
        this.buttonRegState = false;
        this.maxLength = 151;
      }

      _createClass(MainPageComponent, [{
        key: "btnAuthClick",
        value: function btnAuthClick() {
          this.buttonAuthState = true;
        }
      }, {
        key: "closeAuthForm",
        value: function closeAuthForm() {
          this.buttonAuthState = false;
        }
      }, {
        key: "btnRegClick",
        value: function btnRegClick() {
          this.buttonRegState = true;
        }
      }, {
        key: "closeRegForm",
        value: function closeRegForm() {
          this.buttonRegState = false;
        }
      }, {
        key: "onPushDataInServiceClick",
        value: function onPushDataInServiceClick() {
          this.recipesService.pushDataInService(this.recipe);
        }
      }, {
        key: "getRecipes",
        value: function getRecipes() {
          var _this2 = this;

          this.recipesService.getStubbedInfo().subscribe(function (data) {
            return _this2.recipes = data;
          });
          this.recipe = this.recipes[0];

          var _iterator = _createForOfIteratorHelper(this.recipes),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;

              if (this.recipe.likes < item.likes) {
                this.recipe = item;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pageId = 1;
          this.getRecipes();
        }
      }]);

      return MainPageComponent;
    }();

    MainPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"]
      }];
    };

    MainPageComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-main-page',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./main-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main-page/main-page.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./main-page.component.css */
      "./src/app/main-page/main-page.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"]])], MainPageComponent);
    /***/
  },

  /***/
  "./src/app/recipe-info/recipe-info.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/recipe-info/recipe-info.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipeInfoRecipeInfoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".recipe-info-container\r\n{\r\n    padding: 0px 120px;\r\n}\r\n\r\n.recipe-title-block\r\n{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.remove-edit-block\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.recipe-title-block .addrecipe\r\n{\r\n    width: 278px;\r\n}\r\n\r\n.recipes-block\r\n{\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.ingridients-steps-block\r\n{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin-bottom: 103px;\r\n}\r\n\r\n.recipes-block + .ingridients-steps-block \r\n{\r\n    margin-top: 40px;\r\n}\r\n\r\n.ingridients-block\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.ingridients-title\r\n{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n    color: #FDB100;\r\n}\r\n\r\n.ingridients-list-block\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.ingridients-list-block p\r\n{\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.ingridients-list\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.ingridients-list + .ingridients-list\r\n{\r\n    margin-top: 20px;\r\n}\r\n\r\n.list-title\r\n{\r\n    font-weight: 600; \r\n    color: #4A525A;\r\n}\r\n\r\n.description-list\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n}\r\n\r\n.steps-block\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.step-list\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    padding: 50px 73px;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 16px 72px rgba(34, 39, 47, 0.05);\r\n    border-radius: 24px;\r\n    width: 790px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.steps-block h4\r\n{\r\n    color: #FDB100;\r\n    margin-top: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlLWluZm8vcmVjaXBlLWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBOztJQUVJLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnREFBZ0Q7SUFDaEQsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksY0FBYztJQUNkLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS1pbmZvL3JlY2lwZS1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjaXBlLWluZm8tY29udGFpbmVyXHJcbntcclxuICAgIHBhZGRpbmc6IDBweCAxMjBweDtcclxufVxyXG5cclxuLnJlY2lwZS10aXRsZS1ibG9ja1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnJlbW92ZS1lZGl0LWJsb2NrXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucmVjaXBlLXRpdGxlLWJsb2NrIC5hZGRyZWNpcGVcclxue1xyXG4gICAgd2lkdGg6IDI3OHB4O1xyXG59XHJcblxyXG4ucmVjaXBlcy1ibG9ja1xyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5pbmdyaWRpZW50cy1zdGVwcy1ibG9ja1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAzcHg7XHJcbn1cclxuXHJcbi5yZWNpcGVzLWJsb2NrICsgLmluZ3JpZGllbnRzLXN0ZXBzLWJsb2NrIFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uaW5ncmlkaWVudHMtYmxvY2tcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi5pbmdyaWRpZW50cy10aXRsZVxyXG57XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI0ZEQjEwMDtcclxufVxyXG5cclxuLmluZ3JpZGllbnRzLWxpc3QtYmxvY2tcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5pbmdyaWRpZW50cy1saXN0LWJsb2NrIHBcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uaW5ncmlkaWVudHMtbGlzdFxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmluZ3JpZGllbnRzLWxpc3QgKyAuaW5ncmlkaWVudHMtbGlzdFxyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubGlzdC10aXRsZVxyXG57XHJcbiAgICBmb250LXdlaWdodDogNjAwOyBcclxuICAgIGNvbG9yOiAjNEE1MjVBO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tbGlzdFxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLnN0ZXBzLWJsb2NrXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnN0ZXAtbGlzdFxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIHBhZGRpbmc6IDUwcHggNzNweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTZweCA3MnB4IHJnYmEoMzQsIDM5LCA0NywgMC4wNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgd2lkdGg6IDc5MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLnN0ZXBzLWJsb2NrIGg0XHJcbntcclxuICAgIGNvbG9yOiAjRkRCMTAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/recipe-info/recipe-info.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/recipe-info/recipe-info.component.ts ***!
    \******************************************************/

  /*! exports provided: RecipeInfoComponent */

  /***/
  function srcAppRecipeInfoRecipeInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeInfoComponent", function () {
      return RecipeInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _recipes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../recipes.service */
    "./src/app/recipes.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var RecipeInfoComponent = /*#__PURE__*/function () {
      function RecipeInfoComponent(router, route, recipeService) {
        _classCallCheck(this, RecipeInfoComponent);

        this.router = router;
        this.route = route;
        this.recipeService = recipeService;
        this.pageId = 4;
      }

      _createClass(RecipeInfoComponent, [{
        key: "returnBackPageClick",
        value: function returnBackPageClick() {
          this.router.navigateByUrl(this.routerLinkString);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.recipeService.getStubbedCurrentRecipe().subscribe(function (data) {
            return _this3.recipe = data;
          });
          this.route.params.subscribe(function (params) {
            return _this3.parentPageId = Number.parseInt(params['paramId']);
          });

          switch (this.parentPageId) {
            case 1:
              this.routerLinkString = '/';
              break;

            case 3:
              this.routerLinkString = '/recipes';
              break;
          }
        }
      }]);

      return RecipeInfoComponent;
    }();

    RecipeInfoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _recipes_service__WEBPACK_IMPORTED_MODULE_1__["RecipesService"]
      }];
    };

    RecipeInfoComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-recipe-info',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./recipe-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe-info/recipe-info.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./recipe-info.component.css */
      "./src/app/recipe-info/recipe-info.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _recipes_service__WEBPACK_IMPORTED_MODULE_1__["RecipesService"]])], RecipeInfoComponent);
    /***/
  },

  /***/
  "./src/app/recipe/recipe.component.css":
  /*!*********************************************!*\
    !*** ./src/app/recipe/recipe.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipeRecipeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".recipe-block\r\n{ \r\n    margin-top: 40px;\r\n    background: #FFFFFF;\r\n    box-shadow: 0px 16px 72px rgba(34, 39, 47, 0.05);\r\n    border-radius: 72px 24px 24px 0px;\r\n    display: flex;\r\n}\r\n\r\n.recipe-img\r\n{\r\n    width: 430px;\r\n    height: 430px;\r\n    border-radius: 72px 0px;\r\n}\r\n\r\n.description-block\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-grow: 1;\r\n    padding: 30px 36px;\r\n}\r\n\r\n.likes-favotites-block\r\n{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.likes-or-favotites-button\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n    border: 1px solid #FDB100;\r\n    box-sizing: border-box;\r\n    border-radius: 16px;\r\n    padding: 11px 26px;\r\n}\r\n\r\n.likes-or-favotites-button p\r\n{\r\n    font-weight: 600;\r\n    color: #FDB100;\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.likes-or-favotites-button img + p\r\n{\r\n    margin-left: 14px;\r\n}\r\n\r\n.likes-or-favotites-button + .likes-or-favotites-button\r\n{\r\n    margin-left: 15px;\r\n}\r\n\r\n.text-block\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    width: 571px;;\r\n}\r\n\r\n.likes-favotites-block + .text-block\r\n{\r\n    margin-top: 34px;\r\n}\r\n\r\n.cooking-portions-button-block\r\n{\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.cooking-portions-block\r\n{\r\n    display: flex;\r\n}\r\n\r\n.cooking-portions-block p\r\n{\r\n    margin-top: 0px;\r\n    margin-bottom: 0px;\r\n    font-size: 14px;\r\n}\r\n\r\n.cooking-or-portions-container\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.illustrate-information-block\r\n{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\n.cooking-or-portions-container img + .illustrate-information-block\r\n{\r\n    margin-left: 20px;\r\n}\r\n\r\n.cooking-or-portions-container + .cooking-or-portions-container\r\n{\r\n    margin-left: 71px;\r\n}\r\n\r\n.cooking-portions-button-block .addrecipe\r\n{\r\n    width: 180px;\r\n}\r\n\r\n.text-block + .cooking-portions-button-block\r\n{\r\n    margin-top: 34px;\r\n}\r\n\r\n.illustrate-information-block p\r\n{\r\n    font-size: 18px; \r\n    color: #25292D;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlL3JlY2lwZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0RBQWdEO0lBQ2hELGlDQUFpQztJQUNqQyxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGVBQWU7SUFDZixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlL3JlY2lwZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2lwZS1ibG9ja1xyXG57IFxyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTZweCA3MnB4IHJnYmEoMzQsIDM5LCA0NywgMC4wNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA3MnB4IDI0cHggMjRweCAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ucmVjaXBlLWltZ1xyXG57XHJcbiAgICB3aWR0aDogNDMwcHg7XHJcbiAgICBoZWlnaHQ6IDQzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNzJweCAwcHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi1ibG9ja1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIHBhZGRpbmc6IDMwcHggMzZweDtcclxufVxyXG5cclxuLmxpa2VzLWZhdm90aXRlcy1ibG9ja1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmxpa2VzLW9yLWZhdm90aXRlcy1idXR0b25cclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkRCMTAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxMXB4IDI2cHg7XHJcbn1cclxuXHJcbi5saWtlcy1vci1mYXZvdGl0ZXMtYnV0dG9uIHBcclxue1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjRkRCMTAwO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4ubGlrZXMtb3ItZmF2b3RpdGVzLWJ1dHRvbiBpbWcgKyBwXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG59XHJcblxyXG4ubGlrZXMtb3ItZmF2b3RpdGVzLWJ1dHRvbiArIC5saWtlcy1vci1mYXZvdGl0ZXMtYnV0dG9uXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4udGV4dC1ibG9ja1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDU3MXB4OztcclxufVxyXG5cclxuLmxpa2VzLWZhdm90aXRlcy1ibG9jayArIC50ZXh0LWJsb2NrXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDM0cHg7XHJcbn1cclxuXHJcbi5jb29raW5nLXBvcnRpb25zLWJ1dHRvbi1ibG9ja1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY29va2luZy1wb3J0aW9ucy1ibG9ja1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uY29va2luZy1wb3J0aW9ucy1ibG9jayBwXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNvb2tpbmctb3ItcG9ydGlvbnMtY29udGFpbmVyXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaWxsdXN0cmF0ZS1pbmZvcm1hdGlvbi1ibG9ja1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29va2luZy1vci1wb3J0aW9ucy1jb250YWluZXIgaW1nICsgLmlsbHVzdHJhdGUtaW5mb3JtYXRpb24tYmxvY2tcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jb29raW5nLW9yLXBvcnRpb25zLWNvbnRhaW5lciArIC5jb29raW5nLW9yLXBvcnRpb25zLWNvbnRhaW5lclxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogNzFweDtcclxufVxyXG5cclxuLmNvb2tpbmctcG9ydGlvbnMtYnV0dG9uLWJsb2NrIC5hZGRyZWNpcGVcclxue1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG59XHJcblxyXG4udGV4dC1ibG9jayArIC5jb29raW5nLXBvcnRpb25zLWJ1dHRvbi1ibG9ja1xyXG57XHJcbiAgICBtYXJnaW4tdG9wOiAzNHB4O1xyXG59XHJcblxyXG4uaWxsdXN0cmF0ZS1pbmZvcm1hdGlvbi1ibG9jayBwXHJcbntcclxuICAgIGZvbnQtc2l6ZTogMThweDsgXHJcbiAgICBjb2xvcjogIzI1MjkyRDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/recipe/recipe.component.ts":
  /*!********************************************!*\
    !*** ./src/app/recipe/recipe.component.ts ***!
    \********************************************/

  /*! exports provided: RecipeComponent */

  /***/
  function srcAppRecipeRecipeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipeComponent", function () {
      return RecipeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _recipes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../recipes.service */
    "./src/app/recipes.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var RecipeComponent = /*#__PURE__*/function () {
      function RecipeComponent(recipesService) {
        _classCallCheck(this, RecipeComponent);

        this.recipesService = recipesService;
        this.maxLength = 151;
      }

      _createClass(RecipeComponent, [{
        key: "onPushDataInServiceClick",
        value: function onPushDataInServiceClick() {
          this.recipesService.pushDataInService(this.recipe);
        }
      }]);

      return RecipeComponent;
    }();

    RecipeComponent.ctorParameters = function () {
      return [{
        type: _recipes_service__WEBPACK_IMPORTED_MODULE_1__["RecipesService"]
      }];
    };

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Object)], RecipeComponent.prototype, "recipe", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], RecipeComponent.prototype, "parentPageId", void 0);

    RecipeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-recipe',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./recipe.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipe/recipe.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./recipe.component.css */
      "./src/app/recipe/recipe.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_recipes_service__WEBPACK_IMPORTED_MODULE_1__["RecipesService"]])], RecipeComponent);
    /***/
  },

  /***/
  "./src/app/recipes-page/recipes-page.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/recipes-page/recipes-page.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipesPageRecipesPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".add-recipe-block\r\n{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    text-align: center;\r\n    align-items: center;\r\n}\r\n\r\n.find-recipe-with-title-block\r\n{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\napp-tag-list + .find-recipe-with-title-block\r\n{\r\n    margin-top: 50px;\r\n}\r\n\r\n.searchbar-button-block + .hyperlinkbar\r\n{\r\n    margin-top: 10px;\r\n}\r\n\r\n.searchbar-button-block input\r\n{\r\n    width: 779px;\r\n}\r\n\r\n.seachbutton p\r\n{\r\n    color: #FFFFFF; \r\n    font-weight: 600;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaXBlcy1wYWdlL3JlY2lwZXMtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUksY0FBYztJQUNkLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMtcGFnZS9yZWNpcGVzLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtcmVjaXBlLWJsb2NrXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmluZC1yZWNpcGUtd2l0aC10aXRsZS1ibG9ja1xyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuYXBwLXRhZy1saXN0ICsgLmZpbmQtcmVjaXBlLXdpdGgtdGl0bGUtYmxvY2tcclxue1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLnNlYXJjaGJhci1idXR0b24tYmxvY2sgKyAuaHlwZXJsaW5rYmFyXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2hiYXItYnV0dG9uLWJsb2NrIGlucHV0XHJcbntcclxuICAgIHdpZHRoOiA3NzlweDtcclxufVxyXG5cclxuLnNlYWNoYnV0dG9uIHBcclxue1xyXG4gICAgY29sb3I6ICNGRkZGRkY7IFxyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/recipes-page/recipes-page.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/recipes-page/recipes-page.component.ts ***!
    \********************************************************/

  /*! exports provided: RecipesPageComponent */

  /***/
  function srcAppRecipesPageRecipesPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipesPageComponent", function () {
      return RecipesPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _recipes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../recipes.service */
    "./src/app/recipes.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var RecipesPageComponent = /*#__PURE__*/function () {
      function RecipesPageComponent(router, recipesService) {
        _classCallCheck(this, RecipesPageComponent);

        this.router = router;
        this.recipesService = recipesService;
        this.pageId = 3;
        this.recipes = [];
      }

      _createClass(RecipesPageComponent, [{
        key: "returnPage",
        value: function returnPage() {
          return this.pageId;
        }
      }, {
        key: "btnClick",
        value: function btnClick() {
          this.router.navigateByUrl('/addnewrecipe');
        }
      }, {
        key: "getRecipes",
        value: function getRecipes() {
          var _this4 = this;

          this.recipesService.getStubbedInfo().subscribe(function (data) {
            return _this4.recipes = data;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getRecipes();
        }
      }]);

      return RecipesPageComponent;
    }();

    RecipesPageComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"]
      }];
    };

    RecipesPageComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-recipes-page',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./recipes-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes-page/recipes-page.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./recipes-page.component.css */
      "./src/app/recipes-page/recipes-page.component.css"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _recipes_service__WEBPACK_IMPORTED_MODULE_2__["RecipesService"]])], RecipesPageComponent);
    /***/
  },

  /***/
  "./src/app/recipes.service.ts":
  /*!************************************!*\
    !*** ./src/app/recipes.service.ts ***!
    \************************************/

  /*! exports provided: RecipesService */

  /***/
  function srcAppRecipesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipesService", function () {
      return RecipesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var RecipesService = /*#__PURE__*/function () {
      function RecipesService() {
        _classCallCheck(this, RecipesService);

        this.recipes = [{
          id: 1,
          name: 'Клубничная Панна-Котта',
          description: 'Десерт, который невероятно легко и быстро готовится. Советую подавать его порционно в красивых бокалах, украсив взбитыми сливками, свежими ягодами и мятой.',
          photo: 'assets/images/panna-kotta.png',
          cookingTime: 35,
          peoples: 6,
          favorites: 10,
          likes: 10,
          steps: [{
            name: "Шаг 1",
            description: 'Приготовим панна котту: Зальем желатин молоком и поставим на 30 минут для набухания. В сливки добавим сахар и ванильный сахар. Доводим до кипения (не кипятим!'
          }, {
            name: "Шаг 2",
            description: 'Добавим в сливки набухший в молоке желатин. Перемешаем до полного растворения. Огонь отключаем. Охладим до комнатной температуры.'
          }, {
            name: "Шаг 3",
            description: 'Разольем охлажденные сливки по креманкам и поставим в холодильник до полного застывания. Это около 3-5 часов.'
          }, {
            name: "Шаг 4",
            description: 'Приготовим клубничное желе: Клубнику помоем, очистим от плодоножек. Добавим сахар. Взбиваем клубнику с помощью блендера в пюре.'
          }, {
            name: "Шаг 5",
            description: 'Добавим в миску с желатином 2ст.ложки холодной воды и сок лимона. Перемешаем и поставим на 30 минут для набухания. Доведем клубничное пюре до кипения. Добавим набухший желатин, перемешаем до полного растворения. Огонь отключаем. Охладим до комнатной температуры.'
          }, {
            name: "Шаг 6",
            description: 'Сверху на застывшие сливки добавим охлажденное клубничное желе. Поставим в холодильник до полного застывания клубничного желе. Готовую панна коту подаем с фруктами.'
          }],
          ingridients: [{
            name: "Для панна котты",
            descriptions: ['Сливки-20-30% - 500 мл.', 'Молоко - 100 мл.', 'Желатин - 2 ч.л.', 'Сахар - 3 ст.л.', 'Ванильный сахар - 2 ч.л.']
          }, {
            name: "Для клубничного желе",
            descriptions: ['Сливки-20-30% - 500 мл.', 'Молоко - 100 мл.', 'Желатин - 3 ч.л.', 'Сахар - 3 ст.л.', 'Ванильный сахар - 2 ч.л.']
          }]
        }, {
          id: 2,
          name: 'Панкейки',
          description: 'Панкейки: меньше, чем блины, но больше, чем оладьи. Основное отличие — в тесте, оно должно быть воздушным, чтобы панкейки не растекались по сковородке.',
          photo: 'assets/images/pancake.png',
          cookingTime: 40,
          peoples: 3,
          favorites: 24,
          likes: 256,
          steps: [{
            name: "Шаг 1",
            description: 'Приготовим панна котту: Зальем желатин молоком и поставим на 30 минут для набухания. В сливки добавим сахар и ванильный сахар. Доводим до кипения (не кипятим!'
          }, {
            name: "Шаг 2",
            description: 'Добавим в сливки набухший в молоке желатин. Перемешаем до полного растворения. Огонь отключаем. Охладим до комнатной температуры.'
          }, {
            name: "Шаг 3",
            description: 'Разольем охлажденные сливки по креманкам и поставим в холодильник до полного застывания. Это около 3-5 часов.'
          }, {
            name: "Шаг 4",
            description: 'Приготовим клубничное желе: Клубнику помоем, очистим от плодоножек. Добавим сахар. Взбиваем клубнику с помощью блендера в пюре.'
          }, {
            name: "Шаг 5",
            description: 'Добавим в миску с желатином 2ст.ложки холодной воды и сок лимона. Перемешаем и поставим на 30 минут для набухания. Доведем клубничное пюре до кипения. Добавим набухший желатин, перемешаем до полного растворения. Огонь отключаем. Охладим до комнатной температуры.'
          }, {
            name: "Шаг 6",
            description: 'Сверху на застывшие сливки добавим охлажденное клубничное желе. Поставим в холодильник до полного застывания клубничного желе. Готовую панна коту подаем с фруктами.'
          }],
          ingridients: [{
            name: "Для панна котты",
            descriptions: ['Сливки-20-30% - 500 мл.', 'Молоко - 100 мл.', 'Желатин - 2 ч.л.', 'Сахар - 3 ст.л.', 'Ванильный сахар - 2 ч.л.']
          }, {
            name: "Для клубничного желе",
            descriptions: ['Сливки-20-30% - 500 мл.', 'Молоко - 100 мл.', 'Желатин - 3 ч.л.', 'Сахар - 3 ст.л.', 'Ванильный сахар - 2 ч.л.']
          }]
        }, {
          id: 3,
          name: 'Мясные фрикадельки',
          description: 'Мясные фрикадельки в томатном соусе - несложное и вкусное блюдо, которым можно порадовать своих близких.',
          photo: 'assets/images/meatballs.png',
          cookingTime: 90,
          peoples: 4,
          favorites: 4,
          likes: 7,
          steps: [{
            name: "Шаг 1",
            description: 'Приготовим панна котту: Зальем желатин молоком и поставим на 30 минут для набухания. В сливки добавим сахар и ванильный сахар. Доводим до кипения (не кипятим!'
          }, {
            name: "Шаг 2",
            description: 'Добавим в сливки набухший в молоке желатин. Перемешаем до полного растворения. Огонь отключаем. Охладим до комнатной температуры.'
          }, {
            name: "Шаг 3",
            description: 'Разольем охлажденные сливки по креманкам и поставим в холодильник до полного застывания. Это около 3-5 часов.'
          }, {
            name: "Шаг 4",
            description: 'Приготовим клубничное желе: Клубнику помоем, очистим от плодоножек. Добавим сахар. Взбиваем клубнику с помощью блендера в пюре.'
          }, {
            name: "Шаг 5",
            description: 'Добавим в миску с желатином 2ст.ложки холодной воды и сок лимона. Перемешаем и поставим на 30 минут для набухания. Доведем клубничное пюре до кипения. Добавим набухший желатин, перемешаем до полного растворения. Огонь отключаем. Охладим до комнатной температуры.'
          }, {
            name: "Шаг 6",
            description: 'Сверху на застывшие сливки добавим охлажденное клубничное желе. Поставим в холодильник до полного застывания клубничного желе. Готовую панна коту подаем с фруктами.'
          }],
          ingridients: [{
            name: "Для панна котты",
            descriptions: ['Сливки-20-30% - 500 мл.', 'Молоко - 100 мл.', 'Желатин - 2 ч.л.', 'Сахар - 3 ст.л.', 'Ванильный сахар - 2 ч.л.']
          }, {
            name: "Для клубничного желе",
            descriptions: ['Сливки-20-30% - 500 мл.', 'Молоко - 100 мл.', 'Желатин - 3 ч.л.', 'Сахар - 3 ст.л.', 'Ванильный сахар - 2 ч.л.']
          }]
        }];
      }

      _createClass(RecipesService, [{
        key: "pushDataInService",
        value: function pushDataInService(data) {
          this.currentRecipe = data;
        }
      }, {
        key: "getStubbedCurrentRecipe",
        value: function getStubbedCurrentRecipe() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.currentRecipe);
        }
      }, {
        key: "getStubbedInfo",
        value: function getStubbedInfo() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.recipes);
        }
      }, {
        key: "pushDataToRecipe",
        value: function pushDataToRecipe(backRecipes) {
          var _iterator2 = _createForOfIteratorHelper(backRecipes),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var item = _step2.value;
              this.recipes.push(item);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }]);

      return RecipesService;
    }();

    RecipesService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [])], RecipesService);
    /***/
  },

  /***/
  "./src/app/registration/registration.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/registration/registration.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRegistrationRegistrationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/registration/registration.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/registration/registration.component.ts ***!
    \********************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var RegistrationComponent = /*#__PURE__*/function () {
      function RegistrationComponent() {
        _classCallCheck(this, RegistrationComponent);

        this.buttonAuthClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.buttonRegClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(RegistrationComponent, [{
        key: "onAuthClick",
        value: function onAuthClick() {
          this.buttonAuthClick.emit();
        }
      }, {
        key: "onRegClick",
        value: function onRegClick() {
          this.buttonRegClick.emit();
        }
      }]);

      return RegistrationComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], RegistrationComponent.prototype, "buttonAuthClick", void 0);

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(), __metadata("design:type", Object)], RegistrationComponent.prototype, "buttonRegClick", void 0);

    RegistrationComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-registration',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./registration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./registration.component.css */
      "./src/app/registration/registration.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], RegistrationComponent);
    /***/
  },

  /***/
  "./src/app/tag-list/tag-list.component.css":
  /*!*************************************************!*\
    !*** ./src/app/tag-list/tag-list.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTagListTagListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tag-container\r\n{\r\n    margin-top: 42px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.tag-box\r\n{\r\n    flex-basis: 278px;\r\n    background: #FFFFFF;\r\n    border-style: hidden;\r\n    box-shadow: 0px 16px 72px rgba(34, 39, 47, 0.05);\r\n    border-radius: 24px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 24px;\r\n}\r\n\r\n.tag-box p\r\n{\r\n    text-align: left;\r\n}\r\n\r\nimg + h4\r\n{\r\n    margin-top: 24px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFnLWxpc3QvdGFnLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixnREFBZ0Q7SUFDaEQsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvdGFnLWxpc3QvdGFnLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWctY29udGFpbmVyXHJcbntcclxuICAgIG1hcmdpbi10b3A6IDQycHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4udGFnLWJveFxyXG57XHJcbiAgICBmbGV4LWJhc2lzOiAyNzhweDtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItc3R5bGU6IGhpZGRlbjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxNnB4IDcycHggcmdiYSgzNCwgMzksIDQ3LCAwLjA1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbn1cclxuXHJcbi50YWctYm94IHBcclxue1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuaW1nICsgaDRcclxue1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tag-list/tag-list.component.ts":
  /*!************************************************!*\
    !*** ./src/app/tag-list/tag-list.component.ts ***!
    \************************************************/

  /*! exports provided: TagListComponent */

  /***/
  function srcAppTagListTagListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TagListComponent", function () {
      return TagListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var TagListComponent = /*#__PURE__*/function () {
      function TagListComponent() {
        _classCallCheck(this, TagListComponent);
      }

      _createClass(TagListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TagListComponent;
    }();

    __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), __metadata("design:type", Number)], TagListComponent.prototype, "pageId", void 0);

    TagListComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-tag-list',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./tag-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tag-list/tag-list.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./tag-list.component.css */
      "./src/app/tag-list/tag-list.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], TagListComponent);
    /***/
  },

  /***/
  "./src/app/top-bar/top-bar.component.css":
  /*!***********************************************!*\
    !*** ./src/app/top-bar/top-bar.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTopBarTopBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header\r\n{\r\n    padding: 44px 120px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.nav-panel\r\n{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\nh1\r\n{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    font-size: 24px;\r\n    color: #FDB100;\r\n}\r\n\r\n.menu\r\n{\r\n    display: flex;\r\n}\r\n\r\nh1 + .menu\r\n{\r\n    margin-left: 80px;\r\n}\r\n\r\n.nav-panel a\r\n{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n    color: #808080;\r\n}\r\n\r\n.nav-panel a + a\r\n{\r\n    margin-left: 40px;\r\n}\r\n\r\n.authorise-panel\r\n{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n}\r\n\r\n.enter-profile\r\n{\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    font-size: 18px;\r\n    color: #FDB100;\r\n}\r\n\r\nimg + a\r\n{\r\n    margin-left: 14px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLWJhci90b3AtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUkscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUkscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBOztJQUVJLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBOztJQUVJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlclxyXG57XHJcbiAgICBwYWRkaW5nOiA0NHB4IDEyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXYtcGFuZWxcclxue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmgxXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjRkRCMTAwO1xyXG59XHJcblxyXG4ubWVudVxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5oMSArIC5tZW51XHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG59XHJcblxyXG4ubmF2LXBhbmVsIGFcclxue1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogIzgwODA4MDtcclxufVxyXG5cclxuLm5hdi1wYW5lbCBhICsgYVxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxufVxyXG5cclxuLmF1dGhvcmlzZS1wYW5lbFxyXG57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lbnRlci1wcm9maWxlXHJcbntcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNGREIxMDA7XHJcbn1cclxuXHJcbmltZyArIGFcclxue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/top-bar/top-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/top-bar/top-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: TopBarComponent */

  /***/
  function srcAppTopBarTopBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
      return TopBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var TopBarComponent = /*#__PURE__*/function () {
      function TopBarComponent() {
        _classCallCheck(this, TopBarComponent);

        this.pageId = null;
        this.buttonAuthState = false;
        this.buttonRegState = false;
      }

      _createClass(TopBarComponent, [{
        key: "onAuthClick",
        value: function onAuthClick() {
          this.buttonAuthState = true;
        }
      }, {
        key: "closeAuthForm",
        value: function closeAuthForm() {
          this.buttonAuthState = false;
        }
      }, {
        key: "btnRegClick",
        value: function btnRegClick() {
          this.buttonRegState = true;
        }
      }, {
        key: "closeRegForm",
        value: function closeRegForm() {
          this.buttonRegState = false;
        }
      }, {
        key: "onClickMain",
        value: function onClickMain(id) {
          if (id >= 1 && id <= 3) {
            this.pageId = id;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pageId = 1;
        }
      }]);

      return TopBarComponent;
    }();

    TopBarComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-top-bar',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./top-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./top-bar.component.css */
      "./src/app/top-bar/top-bar.component.css"))["default"]]
    }), __metadata("design:paramtypes", [])], TopBarComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var environment = {
      production: false
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! exports provided: getBaseUrl */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
      return getBaseUrl;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    function getBaseUrl() {
      return document.getElementsByTagName('base')[0].href;
    }

    var providers = [{
      provide: 'BASE_URL',
      useFactory: getBaseUrl,
      deps: []
    }];

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Admin\Desktop\Project\Cookers\Cookers\Cookers\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map