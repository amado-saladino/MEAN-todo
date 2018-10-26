webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/AddTask/add-task.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Add TODO</h2>"

/***/ }),

/***/ "../../../../../src/app/AddTask/add-task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddTODOComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddTODOComponent = (function () {
    function AddTODOComponent() {
    }
    AddTODOComponent.prototype.ngOnInit = function () { };
    return AddTODOComponent;
}());
AddTODOComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-task',
        template: __webpack_require__("../../../../../src/app/AddTask/add-task.component.html")
    }),
    __metadata("design:paramtypes", [])
], AddTODOComponent);

//# sourceMappingURL=add-task.component.js.map

/***/ }),

/***/ "../../../../../src/app/NotFound/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n    Oops, Invalid URL\r\n</h1>"

/***/ }),

/***/ "../../../../../src/app/NotFound/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () { };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/NotFound/page-not-found.component.html")
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!!\n  </h1>\n</div>\n<flash-messages></flash-messages>\n<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\">My Todos</a>\n        </div>\n        <ul class=\"nav navbar-nav\">\n          <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a routerLink=\"tasks\">Home</a>\n          </li>\n          <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n            <a routerLink=\"tasks/add\">Add</a>\n          </li>\n        </ul>\n      </div>\n  </nav>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'TODO';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks_task_module__ = __webpack_require__("../../../../../src/app/tasks/task.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__NotFound_page_not_found_component__ = __webpack_require__("../../../../../src/app/NotFound/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__task_route_module__ = __webpack_require__("../../../../../src/app/task-route.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_5__NotFound_page_not_found_component__["a" /* PageNotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesModule"], __WEBPACK_IMPORTED_MODULE_6__task_route_module__["a" /* TaskRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__tasks_task_module__["a" /* TaskModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/task-route.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks_task_component__ = __webpack_require__("../../../../../src/app/tasks/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NotFound_page_not_found_component__ = __webpack_require__("../../../../../src/app/NotFound/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AddTask_add_task_component__ = __webpack_require__("../../../../../src/app/AddTask/add-task.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var taskRoutes = [
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    { path: 'tasks', children: [
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_4__AddTask_add_task_component__["a" /* AddTODOComponent */] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__tasks_task_component__["a" /* TaskComponent */] }
        ] },
    { path: 'pagenotfound', component: __WEBPACK_IMPORTED_MODULE_3__NotFound_page_not_found_component__["a" /* PageNotFoundComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_3__NotFound_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var TaskRoutingModule = (function () {
    function TaskRoutingModule() {
    }
    return TaskRoutingModule;
}());
TaskRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(taskRoutes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], TaskRoutingModule);

//# sourceMappingURL=task-route.module.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_service__ = __webpack_require__("../../../../../src/app/tasks/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskComponent = (function () {
    function TaskComponent(taskService, _flashMessagesService) {
        this.taskService = taskService;
        this._flashMessagesService = _flashMessagesService;
        this.isLoaded = false;
        this.viewMode = true;
        this.updatedTitle = '';
        this.TaskIndex = 0;
        this.searchFilter = { title: '' };
    }
    TaskComponent.prototype.loadTasks = function () {
        var _this = this;
        this.isLoaded = false;
        this.taskService.getTasks()
            .subscribe(function (tasks) {
            _this.isLoaded = true;
            _this.tasks = tasks;
        }, function (error) {
            console.log(error);
        });
    };
    TaskComponent.prototype.addTask = function (form) {
        var _this = this;
        var newTask = {
            title: form.controls['title'].value,
            isDone: false
        };
        if (!newTask.title) {
            this._flashMessagesService.show('Please fill in title', { cssClass: 'alert-danger', timeout: 2000 });
            return false;
        }
        this.isLoaded = false;
        this.taskService.addTask(newTask)
            .subscribe(function (response) {
            _this._flashMessagesService.show(response.message + ' done!', { cssClass: 'alert-success', timeout: 2000 });
            _this.loadTasks();
            _this.isLoaded = true;
        }, function (error) {
            console.log(error);
        });
        form.reset();
    };
    TaskComponent.prototype.deleteTask = function (id) {
        var _this = this;
        this.isLoaded = false;
        this.taskService.deleteTask(id)
            .subscribe(function (response) {
            _this.isLoaded = true;
            _this._flashMessagesService.show(response.message + ' done!', { cssClass: 'alert-success', timeout: 2000 });
            if (response.message.toLowerCase() == 'ok') {
                for (var i = 0; i < _this.tasks.length; i++) {
                    if (_this.tasks[i]._id == id) {
                        _this.tasks.splice(i, 1);
                    }
                }
            }
        }, function (error) {
            console.log(error);
        });
    };
    TaskComponent.prototype.updateStatus = function (task) {
        var _task = {
            _id: task._id,
            title: task.title,
            isDone: !task.isDone
        };
        this.taskService.updateTask(_task)
            .subscribe(function (response) {
            task.isDone = !task.isDone;
        }, function (error) {
            console.log(error);
        });
    };
    TaskComponent.prototype.editTitle = function (e, task, index) {
        this.viewMode = false;
        this.updatedTitle = task.title;
        this.TaskIndex = index;
    };
    TaskComponent.prototype.cancelEdit = function () {
        this.viewMode = true;
    };
    TaskComponent.prototype.saveTitle = function (task, newTitle) {
        var _this = this;
        this.viewMode = true;
        task.title = newTitle;
        this.taskService.updateTask(task)
            .subscribe(function (response) {
            _this._flashMessagesService.show(response.message + ' done!', { cssClass: 'alert-success', timeout: 2000 });
        }, function (error) {
            console.log(error);
        });
    };
    TaskComponent.prototype.ngOnInit = function () {
        this.loadTasks();
        this._flashMessagesService.grayOut(true);
    };
    return TaskComponent;
}());
TaskComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tasks',
        template: __webpack_require__("../../../../../src/app/tasks/tasks.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tasks/tasks.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], TaskComponent);

var _a, _b;
//# sourceMappingURL=task.component.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/task.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_component__ = __webpack_require__("../../../../../src/app/tasks/task.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__task_service__ = __webpack_require__("../../../../../src/app/tasks/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_filter_pipe__ = __webpack_require__("../../../../ngx-filter-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_filter_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_filter_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AddTask_add_task_component__ = __webpack_require__("../../../../../src/app/AddTask/add-task.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TaskModule = TaskModule_1 = (function () {
    function TaskModule() {
    }
    TaskModule.forRoot = function () {
        return {
            ngModule: TaskModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_5__task_service__["a" /* TaskService */]]
        };
    };
    return TaskModule;
}());
TaskModule = TaskModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__task_component__["a" /* TaskComponent */], __WEBPACK_IMPORTED_MODULE_7__AddTask_add_task_component__["a" /* AddTODOComponent */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_6_ngx_filter_pipe__["FilterPipeModule"]
        ],
        providers: [],
        exports: [__WEBPACK_IMPORTED_MODULE_4__task_component__["a" /* TaskComponent */]]
    })
], TaskModule);

var TaskModule_1;
//# sourceMappingURL=task.module.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskService = (function () {
    function TaskService(http) {
        this.http = http;
    }
    TaskService.prototype.getTasks = function () {
        return this.http.get("api/tasks")
            .map(function (response) { return response.json(); })
            .catch(function (error) { return error; });
    };
    TaskService.prototype.addTask = function (newTask) {
        return this.http.post("api/task", newTask)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return error; });
    };
    TaskService.prototype.deleteTask = function (id) {
        return this.http.delete("api/tasks/" + id)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return error; });
    };
    TaskService.prototype.updateTask = function (task) {
        return this.http.put("api/tasks/" + task._id, task)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return error; });
    };
    return TaskService;
}());
TaskService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TaskService);

var _a;
//# sourceMappingURL=task.service.js.map

/***/ }),

/***/ "../../../../../src/app/tasks/tasks.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".link{\r\n    cursor: pointer;\r\n}\r\n\r\n.edit-title{\r\n    width: 30%;\r\n    background: navajowhite;\r\n    transition: width 2s;\r\n}\r\n\r\n.edit-title:hover{\r\n    width: 60%\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tasks/tasks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <form class=\"well\" #taskForm=\"ngForm\"\n     (ngSubmit)=\"addTask(taskForm)\">\n        <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\"\n            name=\"title\" placeholder=\"Add Task\" ngModel>\n        </div>\n    </form>\n\n    <div *ngIf=\"!isLoaded\">\n        <i class=\"fa fa-cog fa-spin fa-3x fa-fw\"></i>\n    </div>\n\n    <div *ngIf=\"isLoaded\">\n        <input type=\"text\" placeholder=\"Search TODOs\" \n        [(ngModel)]=\"searchFilter.title\" class=\"form-control\">\n        <table class=\"table table-striped table-inverse\">\n            <tbody>\n                <tr *ngFor=\"let task of tasks |\n                 filterBy: searchFilter; let i=index\">\n                    <th scope=\"row\">{{i+1}}</th>\n                    <td><input type=\"checkbox\"\n                        [checked]=\"task.isDone\"\n                        (change)=\"updateStatus(task)\"></td>\n                    <td (dblclick)=\"editTitle($event,task,i)\">\n                        <span *ngIf=\"viewMode || TaskIndex!=i\"\n                         >\n                            {{task.title}}</span>\n                        <span *ngIf=\"!viewMode && TaskIndex==i\">\n                            <input type=\"text\" class=\"edit-title\" [(ngModel)]=\"updatedTitle\">\n                            <input [disabled]=\"!updatedTitle\" type=\"button\"\n                             class=\"btn btn-info\" value=\"save\" \n                             (click)=\"saveTitle(task,updatedTitle)\" >\n                            <input type=\"button\" class=\"btn btn-warning\"\n                             value=\"cancel\" (click)=\"cancelEdit()\" >\n                        </span> \n                    </td>\n                    <td><input type=\"button\" \n                        value=\"Delete\" class=\"btn btn-danger\"\n                        (click)=\"deleteTask(task._id)\"></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
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




__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map