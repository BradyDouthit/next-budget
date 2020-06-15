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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/bradydouthit/Desktop/Projects/next-budget/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"addItem\", event => {\n      event.preventDefault(); //if parsed value from user is not a number\n\n      if (isNaN(parseFloat(this.state.itemValue)) || this.state.itemValue === 0) {\n        //set error message\n        this.setState({\n          valueErrorMessage: \"Please enter a number (greater than 0).\"\n        });\n      } //if the value is an empty string\n\n\n      if (!this.state.itemName.length) {\n        this.setState({\n          nameErrorMessage: \"Please enter a name.\"\n        });\n      } //if value is a number and greater than 0, and name is not an empty string\n\n\n      if (!isNaN(parseFloat(this.state.itemValue)) && this.state.itemValue > 0 && this.state.itemName.length) {\n        let itemArr = this.state.budgetedItems;\n        itemArr.push({\n          name: this.state.itemName,\n          monthlyCost: this.state.itemValue\n        });\n        this.getMonthlyTotal();\n        this.setState({\n          budgetedItems: itemArr,\n          itemValue: '',\n          itemName: '',\n          valueErrorMessage: '',\n          nameErrorMessage: ''\n        });\n      }\n    });\n\n    _defineProperty(this, \"getMonthlyTotal\", () => {\n      let monthlyTotal = 0;\n      this.state.budgetedItems.map(item => {\n        monthlyTotal = monthlyTotal + parseFloat(item.monthlyCost);\n      });\n      this.setState({\n        monthlyTotal: monthlyTotal\n      });\n    });\n\n    this.state = {\n      budgetedItems: [],\n      itemValue: 0,\n      itemName: '',\n      monthlyTotal: 0,\n      valueErrorMessage: '',\n      nameErrorMessage: ''\n    };\n    this.handleValueChange = this.handleValueChange.bind(this);\n    this.handleNameChange = this.handleNameChange.bind(this);\n  }\n\n  handleValueChange(event) {\n    this.setState({\n      itemValue: event.target.value\n    });\n  }\n\n  handleNameChange(event) {\n    this.setState({\n      itemName: event.target.value\n    });\n  }\n\n  render() {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 13\n      }\n    }, __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }\n    }, \"Next Budget\"), __jsx(\"form\", {\n      onSubmit: this.addItem,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 17\n      }\n    }, __jsx(\"label\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 21\n      }\n    }, \"Name:\", __jsx(\"input\", {\n      type: \"text\",\n      placeholder: \"Mortgage\",\n      value: this.state.itemName,\n      onChange: this.handleNameChange,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 25\n      }\n    }), __jsx(\"div\", {\n      style: {\n        color: \"red\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 25\n      }\n    }, this.state.nameErrorMessage || '')), __jsx(\"br\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 21\n      }\n    }), __jsx(\"label\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 21\n      }\n    }, \"Monthly Cost: $\", __jsx(\"input\", {\n      type: \"text\",\n      placeholder: \"1200\",\n      value: this.state.itemValue,\n      onChange: this.handleValueChange,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 25\n      }\n    })), __jsx(\"input\", {\n      type: \"submit\",\n      value: \"Submit\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 21\n      }\n    }), __jsx(\"div\", {\n      style: {\n        color: \"red\"\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 21\n      }\n    }, this.state.valueErrorMessage || '')), __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 17\n      }\n    }, \"Your monthly expenses:\"), __jsx(\"ul\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 17\n      }\n    }, this.state.budgetedItems.map((item, index) => __jsx(\"li\", {\n      key: index,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 25\n      }\n    }, item.name, \": $\", item.monthlyCost))), __jsx(\"h1\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 17\n      }\n    }, \"Monthly total: $\", this.state.monthlyTotal));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaXNOYU4iLCJwYXJzZUZsb2F0Iiwic3RhdGUiLCJpdGVtVmFsdWUiLCJzZXRTdGF0ZSIsInZhbHVlRXJyb3JNZXNzYWdlIiwiaXRlbU5hbWUiLCJsZW5ndGgiLCJuYW1lRXJyb3JNZXNzYWdlIiwiaXRlbUFyciIsImJ1ZGdldGVkSXRlbXMiLCJwdXNoIiwibmFtZSIsIm1vbnRobHlDb3N0IiwiZ2V0TW9udGhseVRvdGFsIiwibW9udGhseVRvdGFsIiwibWFwIiwiaXRlbSIsImhhbmRsZVZhbHVlQ2hhbmdlIiwiYmluZCIsImhhbmRsZU5hbWVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJlbmRlciIsImFkZEl0ZW0iLCJjb2xvciIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLElBQU4sU0FBbUJDLDRDQUFLLENBQUNDLFNBQXpCLENBQW1DO0FBQy9CQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47O0FBRGUscUNBd0JSQyxLQUFELElBQVc7QUFDakJBLFdBQUssQ0FBQ0MsY0FBTixHQURpQixDQUVqQjs7QUFDQSxVQUFJQyxLQUFLLENBQUNDLFVBQVUsQ0FBQyxLQUFLQyxLQUFMLENBQVdDLFNBQVosQ0FBWCxDQUFMLElBQTRDLEtBQUtELEtBQUwsQ0FBV0MsU0FBWCxLQUF5QixDQUF6RSxFQUE2RTtBQUN6RTtBQUNBLGFBQUtDLFFBQUwsQ0FBYztBQUFFQywyQkFBaUIsRUFBRTtBQUFyQixTQUFkO0FBQ0gsT0FOZ0IsQ0FPakI7OztBQUNBLFVBQUksQ0FBQyxLQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0JDLE1BQXpCLEVBQWlDO0FBQzdCLGFBQUtILFFBQUwsQ0FBYztBQUFFSSww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OlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGJ1ZGdldGVkSXRlbXM6IFtdLFxuICAgICAgICAgICAgaXRlbVZhbHVlOiAwLFxuICAgICAgICAgICAgaXRlbU5hbWU6ICcnLFxuICAgICAgICAgICAgbW9udGhseVRvdGFsOiAwLFxuICAgICAgICAgICAgdmFsdWVFcnJvck1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgbmFtZUVycm9yTWVzc2FnZTogJydcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UgPSB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlTmFtZUNoYW5nZSA9IHRoaXMuaGFuZGxlTmFtZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZVZhbHVlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtVmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVOYW1lQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtTmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cblxuICAgIGFkZEl0ZW0gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9pZiBwYXJzZWQgdmFsdWUgZnJvbSB1c2VyIGlzIG5vdCBhIG51bWJlclxuICAgICAgICBpZiAoaXNOYU4ocGFyc2VGbG9hdCh0aGlzLnN0YXRlLml0ZW1WYWx1ZSkpIHx8ICh0aGlzLnN0YXRlLml0ZW1WYWx1ZSA9PT0gMCkpIHtcbiAgICAgICAgICAgIC8vc2V0IGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZUVycm9yTWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgYSBudW1iZXIgKGdyZWF0ZXIgdGhhbiAwKS5cIiB9KVxuICAgICAgICB9XG4gICAgICAgIC8vaWYgdGhlIHZhbHVlIGlzIGFuIGVtcHR5IHN0cmluZ1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXRlbU5hbWUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZUVycm9yTWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgYSBuYW1lLlwiIH0pXG4gICAgICAgIH1cbiAgICAgICAgLy9pZiB2YWx1ZSBpcyBhIG51bWJlciBhbmQgZ3JlYXRlciB0aGFuIDAsIGFuZCBuYW1lIGlzIG5vdCBhbiBlbXB0eSBzdHJpbmdcbiAgICAgICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHRoaXMuc3RhdGUuaXRlbVZhbHVlKSkgJiYgKHRoaXMuc3RhdGUuaXRlbVZhbHVlID4gMCkgJiYgdGhpcy5zdGF0ZS5pdGVtTmFtZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBpdGVtQXJyID0gdGhpcy5zdGF0ZS5idWRnZXRlZEl0ZW1zO1xuXG4gICAgICAgICAgICBpdGVtQXJyLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUuaXRlbU5hbWUsXG4gICAgICAgICAgICAgICAgbW9udGhseUNvc3Q6IHRoaXMuc3RhdGUuaXRlbVZhbHVlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLmdldE1vbnRobHlUb3RhbCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJ1ZGdldGVkSXRlbXM6IGl0ZW1BcnIsIGl0ZW1WYWx1ZTogJycsIGl0ZW1OYW1lOiAnJywgdmFsdWVFcnJvck1lc3NhZ2U6ICcnLCBuYW1lRXJyb3JNZXNzYWdlOiAnJyB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TW9udGhseVRvdGFsID0gKCkgPT4ge1xuICAgICAgICBsZXQgbW9udGhseVRvdGFsID0gMDtcblxuICAgICAgICB0aGlzLnN0YXRlLmJ1ZGdldGVkSXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgbW9udGhseVRvdGFsID0gbW9udGhseVRvdGFsICsgcGFyc2VGbG9hdChpdGVtLm1vbnRobHlDb3N0KTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9udGhseVRvdGFsOiBtb250aGx5VG90YWwgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5OZXh0IEJ1ZGdldDwvaDE+XG5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5hZGRJdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgTmFtZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTW9ydGdhZ2VcIiB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtTmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlTmFtZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjogXCJyZWRcIn19Pnt0aGlzLnN0YXRlLm5hbWVFcnJvck1lc3NhZ2UgfHwgJyd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBNb250aGx5IENvc3Q6ICRcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiMTIwMFwiIHZhbHVlPXt0aGlzLnN0YXRlLml0ZW1WYWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVmFsdWVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7Y29sb3I6IFwicmVkXCJ9fT57dGhpcy5zdGF0ZS52YWx1ZUVycm9yTWVzc2FnZSB8fCAnJ308L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgICAgICA8aDE+WW91ciBtb250aGx5IGV4cGVuc2VzOjwvaDE+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5idWRnZXRlZEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57aXRlbS5uYW1lfTogJHtpdGVtLm1vbnRobHlDb3N0fTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICA8aDE+TW9udGhseSB0b3RhbDogJHt0aGlzLnN0YXRlLm1vbnRobHlUb3RhbH08L2gxPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ })

/******/ });