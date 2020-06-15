module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/index.css":
/*!***********************!*\
  !*** ./css/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2Nzcy9pbmRleC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./css/index.css\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9ib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/bootstrap/dist/css/bootstrap.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"reactstrap\");\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/index.css */ \"./css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/bradydouthit/Desktop/Projects/next-budget/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"addItem\", event => {\n      event.preventDefault(); //if parsed value from user is not a number\n\n      if (isNaN(parseFloat(this.state.itemValue)) || this.state.itemValue === 0) {\n        //set error message\n        this.setState({\n          valueErrorMessage: true\n        });\n      } //if the value is an empty string\n\n\n      if (!this.state.itemName.length) {\n        this.setState({\n          nameErrorMessage: true\n        });\n      } //if value is a number and greater than 0, and name is not an empty string\n\n\n      if (!isNaN(parseFloat(this.state.itemValue)) && this.state.itemValue > 0 && this.state.itemName.length) {\n        let itemArr = this.state.budgetedItems;\n        itemArr.push({\n          name: this.state.itemName,\n          monthlyCost: this.state.itemValue\n        });\n        this.getMonthlyTotal();\n        this.setState({\n          budgetedItems: itemArr,\n          itemValue: '',\n          itemName: '',\n          valueErrorMessage: false,\n          nameErrorMessage: false\n        });\n      }\n    });\n\n    _defineProperty(this, \"getMonthlyTotal\", () => {\n      let monthlyTotal = 0;\n      this.state.budgetedItems.map(item => {\n        monthlyTotal = monthlyTotal + parseFloat(item.monthlyCost);\n      });\n      this.setState({\n        monthlyTotal: monthlyTotal\n      });\n    });\n\n    this.state = {\n      budgetedItems: [],\n      itemValue: 0,\n      itemName: '',\n      monthlyTotal: 0,\n      valueErrorMessage: false,\n      nameErrorMessage: false,\n      nameValid: true,\n      valueValid: true\n    };\n    this.handleValueChange = this.handleValueChange.bind(this);\n    this.handleNameChange = this.handleNameChange.bind(this);\n  }\n\n  handleValueChange(event) {\n    //if parsed value from user is not a number\n    if (isNaN(parseFloat(this.state.itemValue)) || this.state.itemValue === 0) {\n      //set error message\n      this.setState({\n        valueErrorMessage: true\n      });\n    } else {\n      this.setState({\n        valueErrorMessage: false\n      });\n    }\n\n    this.setState({\n      itemValue: event.target.value\n    });\n  }\n\n  handleNameChange(event) {\n    //if the value is an empty string\n    if (this.state.itemName.length) {\n      this.setState({\n        nameErrorMessage: false\n      });\n    } else {\n      this.setState({\n        nameErrorMessage: true\n      });\n    }\n\n    this.setState({\n      itemName: event.target.value\n    });\n  }\n\n  render() {\n    return __jsx(\"div\", {\n      id: \"main-content\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 13\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Jumbotron\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 17\n      }\n    }, __jsx(\"h1\", {\n      className: \"display-3\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 21\n      }\n    }, \"Next Budget\"), __jsx(\"p\", {\n      className: \"lead\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 21\n      }\n    }, \"Simply enter your monthly expenses and names, the app will figure out the total cost of your bills.\"), __jsx(\"hr\", {\n      className: \"my-2\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 21\n      }\n    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n      onSubmit: this.addItem,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 21\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 25\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 29\n      }\n    }, \"Name:\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n      type: \"text\",\n      placeholder: \"Mortgage\",\n      value: this.state.itemName,\n      onChange: this.handleNameChange,\n      valid: !this.state.nameErrorMessage,\n      invalid: this.state.nameErrorMessage,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 29\n      }\n    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 25\n      }\n    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Label\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 29\n      }\n    }, \"Monthly Cost: $\", this.state.monthlyTotal), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n      type: \"text\",\n      placeholder: \"1200\",\n      value: this.state.itemValue,\n      onChange: this.handleValueChange,\n      valid: !this.state.valueErrorMessage,\n      invalid: this.state.valueErrorMessage,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 29\n      }\n    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      color: \"primary\",\n      type: \"submit\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 25\n      }\n    }, \"Submit\"), __jsx(\"hr\", {\n      className: \"my-2\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 25\n      }\n    })), __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 21\n      }\n    }, \"Your monthly expenses:\"), __jsx(\"ul\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 21\n      }\n    }, this.state.budgetedItems.map((item, index) => __jsx(\"li\", {\n      key: index,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 29\n      }\n    }, item.name, \": $\", item.monthlyCost))), __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 21\n      }\n    }, \"Monthly total: $\", this.state.monthlyTotal)));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaXNOYU4iLCJwYXJzZUZsb2F0Iiwic3RhdGUiLCJpdGVtVmFsdWUiLCJzZXRTdGF0ZSIsInZhbHVlRXJyb3JNZXNzYWdlIiwiaXRlbU5hbWUiLCJsZW5ndGgiLCJuYW1lRXJyb3JNZXNzYWdlIiwiaXRlbUFyciIsImJ1ZGdldGVkSXRlbXMiLCJwdXNoIiwibmFtZSIsIm1vbnRobHlDb3N0IiwiZ2V0TW9udGhseVRvdGFsIiwibW9udGhseVRvdGFsIiwibWFwIiwiaXRlbSIsIm5hbWVWYWxpZCIsInZhbHVlVmFsaWQiLCJoYW5kbGVWYWx1ZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVOYW1lQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJyZW5kZXIiLCJhZGRJdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBTixTQUFtQkMsNENBQUssQ0FBQ0MsU0FBekIsQ0FBbUM7QUFDL0JDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2YsVUFBTUEsS0FBTjs7QUFEZSxxQ0EwQ1JDLEtBQUQsSUFBVztBQUNqQkEsV0FBSyxDQUFDQyxjQUFOLEdBRGlCLENBRWpCOztBQUNBLFVBQUlDLEtBQUssQ0FBQ0MsVUFBVSxDQUFDLEtBQUtDLEtBQUwsQ0FBV0MsU0FBWixDQUFYLENBQUwsSUFBNEMsS0FBS0QsS0FBTCxDQUFXQyxTQUFYLEtBQXlCLENBQXpFLEVBQTZFO0FBQ3pFO0FBQ0EsYUFBS0MsUUFBTCxDQUFjO0FBQUVDLDJCQUFpQixFQUFFO0FBQXJCLFNBQWQ7QUFDSCxPQU5nQixDQU9qQjs7O0FBQ0EsVUFBSSxDQUFDLEtBQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkMsTUFB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QUFDLGdEQUFEO0FBQU8sVUFBSSxFQUFDLE1BQVo7QUFDUSxpQkFBVyxFQUFDLE1BRHBCO0FBRVEsV0FBSyxFQUFFLEtBQUtiLEtBQUwsQ0FBV0MsU0FGMUI7QUFHUSxjQUFRLEVBQUUsS0FBS2lCLGlCQUh2QjtBQUlRLFdBQUssRUFBRSxDQUFDLEtBQUtsQixLQUFMLENBQVdHLGlCQUozQjtBQUtRLGFBQU8sRUFBRSxLQUFLSCxLQUFMLENBQVdHLGlCQUw1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosQ0FWSixFQW1CSSxNQUFDLGlEQUFEO0FBQVEsV0FBSyxFQUFDLFNBQWQ7QUFBd0IsVUFBSSxFQUFDLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbkJKLEVBb0JJO0FBQUksZUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXBCSixDQUpKLEVBMEJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBMUJKLEVBMkJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSyxLQUFLSCxLQUFMLENBQVdRLGFBQVgsQ0FBeUJNLEdBQXpCLENBQTZCLENBQUNDLElBQUQsRUFBT1UsS0FBUCxLQUMxQjtBQUFJLFNBQUcsRUFBRUEsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWlCVixJQUFJLENBQUNMLElBQXRCLFNBQStCSyxJQUFJLENBQUNKLFdBQXBDLENBREgsQ0FETCxDQTNCSixFQWdDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFxQixLQUFLWCxLQUFMLENBQVdhLFlBQWhDLENBaENKLENBREosQ0FESjtBQXNDSDs7QUFySDhCOztBQXdIcEJ0QixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEp1bWJvdHJvbiwgQnV0dG9uLCBJbnB1dCwgTGFiZWwsIEZvcm0sIEZvcm1Hcm91cCwgRm9ybUZlZWRiYWNrLCBGb3JtVGV4dCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0ICcuLi9jc3MvaW5kZXguY3NzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYnVkZ2V0ZWRJdGVtczogW10sXG4gICAgICAgICAgICBpdGVtVmFsdWU6IDAsXG4gICAgICAgICAgICBpdGVtTmFtZTogJycsXG4gICAgICAgICAgICBtb250aGx5VG90YWw6IDAsXG4gICAgICAgICAgICB2YWx1ZUVycm9yTWVzc2FnZTogZmFsc2UsXG4gICAgICAgICAgICBuYW1lRXJyb3JNZXNzYWdlOiBmYWxzZSxcbiAgICAgICAgICAgIG5hbWVWYWxpZDogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlVmFsaWQ6IHRydWVcblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZSA9IHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVOYW1lQ2hhbmdlID0gdGhpcy5oYW5kbGVOYW1lQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlVmFsdWVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgLy9pZiBwYXJzZWQgdmFsdWUgZnJvbSB1c2VyIGlzIG5vdCBhIG51bWJlclxuICAgICAgICBpZiAoaXNOYU4ocGFyc2VGbG9hdCh0aGlzLnN0YXRlLml0ZW1WYWx1ZSkpIHx8ICh0aGlzLnN0YXRlLml0ZW1WYWx1ZSA9PT0gMCkpIHtcbiAgICAgICAgICAgIC8vc2V0IGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZUVycm9yTWVzc2FnZTogdHJ1ZSB9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWVFcnJvck1lc3NhZ2U6IGZhbHNlIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1WYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZU5hbWVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgLy9pZiB0aGUgdmFsdWUgaXMgYW4gZW1wdHkgc3RyaW5nXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLml0ZW1OYW1lLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWVFcnJvck1lc3NhZ2U6IGZhbHNlIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtuYW1lRXJyb3JNZXNzYWdlOiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1OYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuXG4gICAgYWRkSXRlbSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvL2lmIHBhcnNlZCB2YWx1ZSBmcm9tIHVzZXIgaXMgbm90IGEgbnVtYmVyXG4gICAgICAgIGlmIChpc05hTihwYXJzZUZsb2F0KHRoaXMuc3RhdGUuaXRlbVZhbHVlKSkgfHwgKHRoaXMuc3RhdGUuaXRlbVZhbHVlID09PSAwKSkge1xuICAgICAgICAgICAgLy9zZXQgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlRXJyb3JNZXNzYWdlOiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICAgICAgLy9pZiB0aGUgdmFsdWUgaXMgYW4gZW1wdHkgc3RyaW5nXG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pdGVtTmFtZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lRXJyb3JNZXNzYWdlOiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICAgICAgLy9pZiB2YWx1ZSBpcyBhIG51bWJlciBhbmQgZ3JlYXRlciB0aGFuIDAsIGFuZCBuYW1lIGlzIG5vdCBhbiBlbXB0eSBzdHJpbmdcbiAgICAgICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHRoaXMuc3RhdGUuaXRlbVZhbHVlKSkgJiYgKHRoaXMuc3RhdGUuaXRlbVZhbHVlID4gMCkgJiYgdGhpcy5zdGF0ZS5pdGVtTmFtZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBpdGVtQXJyID0gdGhpcy5zdGF0ZS5idWRnZXRlZEl0ZW1zO1xuXG4gICAgICAgICAgICBpdGVtQXJyLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUuaXRlbU5hbWUsXG4gICAgICAgICAgICAgICAgbW9udGhseUNvc3Q6IHRoaXMuc3RhdGUuaXRlbVZhbHVlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLmdldE1vbnRobHlUb3RhbCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJ1ZGdldGVkSXRlbXM6IGl0ZW1BcnIsIGl0ZW1WYWx1ZTogJycsIGl0ZW1OYW1lOiAnJywgdmFsdWVFcnJvck1lc3NhZ2U6IGZhbHNlLCBuYW1lRXJyb3JNZXNzYWdlOiBmYWxzZSB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TW9udGhseVRvdGFsID0gKCkgPT4ge1xuICAgICAgICBsZXQgbW9udGhseVRvdGFsID0gMDtcblxuICAgICAgICB0aGlzLnN0YXRlLmJ1ZGdldGVkSXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgbW9udGhseVRvdGFsID0gbW9udGhseVRvdGFsICsgcGFyc2VGbG9hdChpdGVtLm1vbnRobHlDb3N0KTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9udGhseVRvdGFsOiBtb250aGx5VG90YWwgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPEp1bWJvdHJvbj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktM1wiPk5leHQgQnVkZ2V0PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlNpbXBseSBlbnRlciB5b3VyIG1vbnRobHkgZXhwZW5zZXMgYW5kIG5hbWVzLCB0aGUgYXBwIHdpbGwgZmlndXJlIG91dCB0aGUgdG90YWwgY29zdCBvZiB5b3VyIGJpbGxzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm15LTJcIj48L2hyPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5hZGRJdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsPk5hbWU6PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTW9ydGdhZ2VcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLml0ZW1OYW1lfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZD17IXRoaXMuc3RhdGUubmFtZUVycm9yTWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ9e3RoaXMuc3RhdGUubmFtZUVycm9yTWVzc2FnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWw+TW9udGhseSBDb3N0OiAke3RoaXMuc3RhdGUubW9udGhseVRvdGFsfTwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjEyMDBcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLml0ZW1WYWx1ZX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVWYWx1ZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkPXshdGhpcy5zdGF0ZS52YWx1ZUVycm9yTWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmFsaWQ9e3RoaXMuc3RhdGUudmFsdWVFcnJvck1lc3NhZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm15LTJcIj48L2hyPlxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5Zb3VyIG1vbnRobHkgZXhwZW5zZXM6PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYnVkZ2V0ZWRJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntpdGVtLm5hbWV9OiAke2l0ZW0ubW9udGhseUNvc3R9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8aDE+TW9udGhseSB0b3RhbDogJHt0aGlzLnN0YXRlLm1vbnRobHlUb3RhbH08L2gxPlxuICAgICAgICAgICAgICAgIDwvSnVtYm90cm9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bradydouthit/Desktop/Projects/next-budget/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reactstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCI/MjQ5MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdHN0cmFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///reactstrap\n");

/***/ })

/******/ });