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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BudgetItem.js":
/*!**********************************!*\
  !*** ./components/BudgetItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/bradydouthit/Desktop/Projects/next-budget/components/BudgetItem.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst BudgetItem = props => {\n  console.log(props);\n  return __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 9\n    }\n  }, \"test\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BudgetItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1ZGdldEl0ZW0uanM/OGE2MiJdLCJuYW1lcyI6WyJCdWRnZXRJdGVtIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsVUFBVSxHQUFJQyxLQUFELElBQVc7QUFDMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFLSCxDQVBEOztBQVNlRCx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQnVkZ2V0SXRlbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEJ1ZGdldEl0ZW0gPSAocHJvcHMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHRlc3RcbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWRnZXRJdGVtOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BudgetItem.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_BudgetItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BudgetItem */ \"./components/BudgetItem.js\");\nvar _jsxFileName = \"/Users/bradydouthit/Desktop/Projects/next-budget/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"addItem\", event => {\n      event.preventDefault();\n\n      if (typeof parseFloat(this.state.itemValue) === NaN) {} else {\n        let itemArr = this.state.budgetedItems;\n        itemArr.push({\n          name: this.state.itemName,\n          monthlyCost: this.state.itemValue\n        });\n        this.getMonthlyTotal();\n        this.setState({\n          budgetedItems: itemArr,\n          itemValue: '',\n          itemName: ''\n        });\n      }\n    });\n\n    _defineProperty(this, \"getMonthlyTotal\", () => {\n      let monthlyTotal = 0;\n      this.state.budgetedItems.map(item => {\n        monthlyTotal = monthlyTotal + parseFloat(item.monthlyCost);\n      });\n      this.setState({\n        monthlyTotal: monthlyTotal\n      });\n    });\n\n    this.state = {\n      budgetedItems: [],\n      itemValue: 0,\n      itemName: '',\n      monthlyTotal: 0,\n      errorMessage: ''\n    };\n    this.handleValueChange = this.handleValueChange.bind(this);\n    this.handleNameChange = this.handleNameChange.bind(this);\n  }\n\n  handleValueChange(event) {\n    this.setState({\n      itemValue: event.target.value\n    });\n  }\n\n  handleNameChange(event) {\n    this.setState({\n      itemName: event.target.value\n    });\n  }\n\n  render() {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 13\n      }\n    }, __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }\n    }, \"Next Budget\"), __jsx(\"form\", {\n      onSubmit: this.addItem,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 17\n      }\n    }, __jsx(\"label\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 21\n      }\n    }, \"Name:\", __jsx(\"input\", {\n      type: \"text\",\n      placeholder: \"Mortgage\",\n      value: this.state.itemName,\n      onChange: this.handleNameChange,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 25\n      }\n    })), __jsx(\"br\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 21\n      }\n    }), __jsx(\"label\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 21\n      }\n    }, \"Monthly Cost: $\", __jsx(\"input\", {\n      type: \"text\",\n      placeholder: \"1200\",\n      value: this.state.itemValue,\n      onChange: this.handleValueChange,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 25\n      }\n    })), __jsx(\"input\", {\n      type: \"submit\",\n      value: \"Submit\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 21\n      }\n    })), __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 17\n      }\n    }, \"Your monthly expenses:\"), __jsx(\"ul\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 17\n      }\n    }, this.state.budgetedItems.map((item, index) => __jsx(\"li\", {\n      key: index,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 25\n      }\n    }, item.name, \": $\", item.monthlyCost))), __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 17\n      }\n    }, \"Monthly total: $\", this.state.monthlyTotal));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicGFyc2VGbG9hdCIsInN0YXRlIiwiaXRlbVZhbHVlIiwiTmFOIiwiaXRlbUFyciIsImJ1ZGdldGVkSXRlbXMiLCJwdXNoIiwibmFtZSIsIml0ZW1OYW1lIiwibW9udGhseUNvc3QiLCJnZXRNb250aGx5VG90YWwiLCJzZXRTdGF0ZSIsIm1vbnRobHlUb3RhbCIsIm1hcCIsIml0ZW0iLCJlcnJvck1lc3NhZ2UiLCJoYW5kbGVWYWx1ZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVOYW1lQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJyZW5kZXIiLCJhZGRJdGVtIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBTixTQUFtQkMsNENBQUssQ0FBQ0MsU0FBekIsQ0FBbUM7QUFDL0JDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2YsVUFBTUEsS0FBTjs7QUFEZSxxQ0F1QlJDLEtBQUQsSUFBVztBQUNqQkEsV0FBSyxDQUFDQyxjQUFOOztBQUNBLFVBQUksT0FBT0MsVUFBVSxDQUFDLEtBQUtDLEtBQUwsQ0FBV0MsU0FBWixDQUFqQixLQUE0Q0MsR0FBaEQsRUFBcUQsQ0FFcEQsQ0FGRCxNQUdLO0FBQ0QsWUFBSUMsT0FBTyxHQUFHLEtBQUtILEtBQUwsQ0FBV0ksYUFBekI7QUFFQUQsZUFBTyxDQUFDRSxJQUFSLENBQWE7QUFDVEMsY0FBSSxFQUFFLEtBQUtOLEtBQUwsQ0FBV08sUUFEUjtBQUVUQyxxQkFBVyxFQUFFLEtBQUtSLEtBQUwsQ0FBV0M7QUFGZixTQUFiO0FBS0EsYUFBS1EsZUFBTDtBQUNBLGFBQUtDLFFBQUwsQ0FBYztBQUFFTix1QkFBYSxFQUFFRCxPQUFqQjtBQUEwQkYsbUJBQVMsRUFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUFxQixLQUFLUixLQUFMLENBQVdXLFlBQWhDLENBdkJKLENBREo7QUE0Qkg7O0FBakY4Qjs7QUFvRnBCbkIsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnVkZ2V0SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL0J1ZGdldEl0ZW0nO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYnVkZ2V0ZWRJdGVtczogW10sXG4gICAgICAgICAgICBpdGVtVmFsdWU6IDAsXG4gICAgICAgICAgICBpdGVtTmFtZTogJycsXG4gICAgICAgICAgICBtb250aGx5VG90YWw6IDAsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICcnXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlID0gdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UgPSB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVWYWx1ZUNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbVZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlTmFtZUNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbU5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG5cbiAgICBhZGRJdGVtID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0eXBlb2YgcGFyc2VGbG9hdCh0aGlzLnN0YXRlLml0ZW1WYWx1ZSkgPT09IE5hTikge1xuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgaXRlbUFyciA9IHRoaXMuc3RhdGUuYnVkZ2V0ZWRJdGVtcztcblxuICAgICAgICAgICAgaXRlbUFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLml0ZW1OYW1lLFxuICAgICAgICAgICAgICAgIG1vbnRobHlDb3N0OiB0aGlzLnN0YXRlLml0ZW1WYWx1ZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5nZXRNb250aGx5VG90YWwoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBidWRnZXRlZEl0ZW1zOiBpdGVtQXJyLCBpdGVtVmFsdWU6ICcnLCBpdGVtTmFtZTogJycgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE1vbnRobHlUb3RhbCA9ICgpID0+IHtcbiAgICAgICAgbGV0IG1vbnRobHlUb3RhbCA9IDA7XG5cbiAgICAgICAgdGhpcy5zdGF0ZS5idWRnZXRlZEl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIG1vbnRobHlUb3RhbCA9IG1vbnRobHlUb3RhbCArIHBhcnNlRmxvYXQoaXRlbS5tb250aGx5Q29zdCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vbnRobHlUb3RhbDogbW9udGhseVRvdGFsIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+TmV4dCBCdWRnZXQ8L2gxPlxuXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuYWRkSXRlbX0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWU6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1vcnRnYWdlXCIgdmFsdWU9e3RoaXMuc3RhdGUuaXRlbU5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBNb250aGx5IENvc3Q6ICRcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiMTIwMFwiIHZhbHVlPXt0aGlzLnN0YXRlLml0ZW1WYWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVmFsdWVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgICAgIDxoMT5Zb3VyIG1vbnRobHkgZXhwZW5zZXM6PC9oMT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJ1ZGdldGVkSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntpdGVtLm5hbWV9OiAke2l0ZW0ubW9udGhseUNvc3R9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgIDxoMT5Nb250aGx5IHRvdGFsOiAke3RoaXMuc3RhdGUubW9udGhseVRvdGFsfTwvaDE+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
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

/***/ })

/******/ });