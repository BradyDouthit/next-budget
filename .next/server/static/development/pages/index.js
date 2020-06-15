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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_BudgetItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BudgetItem */ \"./components/BudgetItem.js\");\nvar _jsxFileName = \"/Users/bradydouthit/Desktop/Projects/next-budget/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"addItem\", event => {\n      event.preventDefault(); //if parsed value from user is not a number\n\n      if (isNaN(parseFloat(this.state.itemValue)) || this.state.itemValue === 0) {\n        //set error message\n        this.setState({\n          valueErrorMessage: \"Please enter a number.\"\n        });\n      }\n\n      if (!this.state.itemName.length) {\n        this.setState({\n          nameErrorMessage: \"Please enter a name.\"\n        });\n      }\n\n      if (!isNaN(parseFloat(this.state.itemValue)) && this.state.itemValue != 0 && this.state.itemName.length) {\n        let itemArr = this.state.budgetedItems;\n        itemArr.push({\n          name: this.state.itemName,\n          monthlyCost: this.state.itemValue\n        });\n        this.getMonthlyTotal();\n        this.setState({\n          budgetedItems: itemArr,\n          itemValue: '',\n          itemName: '',\n          valueErrorMessage: '',\n          nameErrorMessage: ''\n        });\n      }\n    });\n\n    _defineProperty(this, \"getMonthlyTotal\", () => {\n      let monthlyTotal = 0;\n      this.state.budgetedItems.map(item => {\n        monthlyTotal = monthlyTotal + parseFloat(item.monthlyCost);\n      });\n      this.setState({\n        monthlyTotal: monthlyTotal\n      });\n    });\n\n    this.state = {\n      budgetedItems: [],\n      itemValue: 0,\n      itemName: '',\n      monthlyTotal: 0,\n      valueErrorMessage: '',\n      nameErrorMessage: ''\n    };\n    this.handleValueChange = this.handleValueChange.bind(this);\n    this.handleNameChange = this.handleNameChange.bind(this);\n  }\n\n  handleValueChange(event) {\n    this.setState({\n      itemValue: event.target.value\n    });\n  }\n\n  handleNameChange(event) {\n    this.setState({\n      itemName: event.target.value\n    });\n  }\n\n  render() {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 13\n      }\n    }, __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }\n    }, \"Next Budget\"), __jsx(\"form\", {\n      onSubmit: this.addItem,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 17\n      }\n    }, __jsx(\"label\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 21\n      }\n    }, \"Name:\", __jsx(\"input\", {\n      type: \"text\",\n      placeholder: \"Mortgage\",\n      value: this.state.itemName,\n      onChange: this.handleNameChange,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 25\n      }\n    }), __jsx(\"div\", {\n      style: {\n        color: \"red\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 25\n      }\n    }, this.state.nameErrorMessage || '')), __jsx(\"br\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 21\n      }\n    }), __jsx(\"label\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 21\n      }\n    }, \"Monthly Cost: $\", __jsx(\"input\", {\n      type: \"text\",\n      placeholder: \"1200\",\n      value: this.state.itemValue,\n      onChange: this.handleValueChange,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 25\n      }\n    })), __jsx(\"input\", {\n      type: \"submit\",\n      value: \"Submit\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 21\n      }\n    }), __jsx(\"div\", {\n      style: {\n        color: \"red\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 21\n      }\n    }, this.state.valueErrorMessage || '')), __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 17\n      }\n    }, \"Your monthly expenses:\"), __jsx(\"ul\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 17\n      }\n    }, this.state.budgetedItems.map((item, index) => __jsx(\"li\", {\n      key: index,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 25\n      }\n    }, item.name, \": $\", item.monthlyCost))), __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 17\n      }\n    }, \"Monthly total: $\", this.state.monthlyTotal));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaXNOYU4iLCJwYXJzZUZsb2F0Iiwic3RhdGUiLCJpdGVtVmFsdWUiLCJzZXRTdGF0ZSIsInZhbHVlRXJyb3JNZXNzYWdlIiwiaXRlbU5hbWUiLCJsZW5ndGgiLCJuYW1lRXJyb3JNZXNzYWdlIiwiaXRlbUFyciIsImJ1ZGdldGVkSXRlbXMiLCJwdXNoIiwibmFtZSIsIm1vbnRobHlDb3N0IiwiZ2V0TW9udGhseVRvdGFsIiwibW9udGhseVRvdGFsIiwibWFwIiwiaXRlbSIsImhhbmRsZVZhbHVlQ2hhbmdlIiwiYmluZCIsImhhbmRsZU5hbWVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbmRlciIsImFkZEl0ZW0iLCJjb2xvciIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLElBQU4sU0FBbUJDLDRDQUFLLENBQUNDLFNBQXpCLENBQW1DO0FBQy9CQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47O0FBRGUscUNBd0JSQyxLQUFELElBQVc7QUFDakJBLFdBQUssQ0FBQ0MsY0FBTixHQURpQixDQUVqQjs7QUFDQSxVQUFJQyxLQUFLLENBQUNDLFVBQVUsQ0FBQyxLQUFLQyxLQUFMLENBQVdDLFNBQVosQ0FBWCxDQUFMLElBQTRDLEtBQUtELEtBQUwsQ0FBV0MsU0FBWCxLQUF5QixDQUF6RSxFQUE2RTtBQUN6RTtBQUNBLGFBQUtDLFFBQUwsQ0FBYztBQUFFQywyQkFBaUIsRUFBRTtBQUFyQixTQUFkO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDLEtBQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkMsTUFBekIsRUFBaUM7QUFDN0IsYUFBS0gsUUFBTCxDQUFjO0FBQUVJLDBCQUFnQixF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ICdyZWFjdCc7XG5pbXBvcnQgQnVkZ2V0SXRlbSBmcm9tICcuLi9jb21wb25lbnRzL0J1ZGdldEl0ZW0nO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYnVkZ2V0ZWRJdGVtczogW10sXG4gICAgICAgICAgICBpdGVtVmFsdWU6IDAsXG4gICAgICAgICAgICBpdGVtTmFtZTogJycsXG4gICAgICAgICAgICBtb250aGx5VG90YWw6IDAsXG4gICAgICAgICAgICB2YWx1ZUVycm9yTWVzc2FnZTogJycsXG4gICAgICAgICAgICBuYW1lRXJyb3JNZXNzYWdlOiAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZSA9IHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVOYW1lQ2hhbmdlID0gdGhpcy5oYW5kbGVOYW1lQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlVmFsdWVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1WYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZU5hbWVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1OYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuXG4gICAgYWRkSXRlbSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvL2lmIHBhcnNlZCB2YWx1ZSBmcm9tIHVzZXIgaXMgbm90IGEgbnVtYmVyXG4gICAgICAgIGlmIChpc05hTihwYXJzZUZsb2F0KHRoaXMuc3RhdGUuaXRlbVZhbHVlKSkgfHwgKHRoaXMuc3RhdGUuaXRlbVZhbHVlID09PSAwKSkge1xuICAgICAgICAgICAgLy9zZXQgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlRXJyb3JNZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhIG51bWJlci5cIiB9KVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pdGVtTmFtZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lRXJyb3JNZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhIG5hbWUuXCIgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodGhpcy5zdGF0ZS5pdGVtVmFsdWUpKSAmJiAodGhpcy5zdGF0ZS5pdGVtVmFsdWUgIT0gMCkgJiYgdGhpcy5zdGF0ZS5pdGVtTmFtZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBpdGVtQXJyID0gdGhpcy5zdGF0ZS5idWRnZXRlZEl0ZW1zO1xuXG4gICAgICAgICAgICBpdGVtQXJyLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUuaXRlbU5hbWUsXG4gICAgICAgICAgICAgICAgbW9udGhseUNvc3Q6IHRoaXMuc3RhdGUuaXRlbVZhbHVlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLmdldE1vbnRobHlUb3RhbCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJ1ZGdldGVkSXRlbXM6IGl0ZW1BcnIsIGl0ZW1WYWx1ZTogJycsIGl0ZW1OYW1lOiAnJywgdmFsdWVFcnJvck1lc3NhZ2U6ICcnLCBuYW1lRXJyb3JNZXNzYWdlOiAnJyB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TW9udGhseVRvdGFsID0gKCkgPT4ge1xuICAgICAgICBsZXQgbW9udGhseVRvdGFsID0gMDtcblxuICAgICAgICB0aGlzLnN0YXRlLmJ1ZGdldGVkSXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgbW9udGhseVRvdGFsID0gbW9udGhseVRvdGFsICsgcGFyc2VGbG9hdChpdGVtLm1vbnRobHlDb3N0KTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9udGhseVRvdGFsOiBtb250aGx5VG90YWwgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5OZXh0IEJ1ZGdldDwvaDE+XG5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5hZGRJdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgTmFtZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTW9ydGdhZ2VcIiB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtTmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlTmFtZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjogXCJyZWRcIn19Pnt0aGlzLnN0YXRlLm5hbWVFcnJvck1lc3NhZ2UgfHwgJyd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBNb250aGx5IENvc3Q6ICRcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiMTIwMFwiIHZhbHVlPXt0aGlzLnN0YXRlLml0ZW1WYWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVmFsdWVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y29sb3I6IFwicmVkXCJ9fT57dGhpcy5zdGF0ZS52YWx1ZUVycm9yTWVzc2FnZSB8fCAnJ308L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgICAgICA8aDE+WW91ciBtb250aGx5IGV4cGVuc2VzOjwvaDE+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5idWRnZXRlZEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57aXRlbS5uYW1lfTogJHtpdGVtLm1vbnRobHlDb3N0fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICA8aDE+TW9udGhseSB0b3RhbDogJHt0aGlzLnN0YXRlLm1vbnRobHlUb3RhbH08L2gxPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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