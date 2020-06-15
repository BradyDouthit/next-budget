webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/index.css */ \"./css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/bradydouthit/Desktop/Projects/next-budget/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar Home = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Home, _React$Component);\n\n  var _super = _createSuper(Home);\n\n  function Home(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Home);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"addItem\", function (event) {\n      event.preventDefault(); //if parsed value from user is not a number\n\n      if (isNaN(parseFloat(_this.state.itemValue)) || _this.state.itemValue === 0) {\n        //set error message\n        _this.setState({\n          valueErrorMessage: \"Please enter a number (greater than 0).\"\n        });\n      } //if the value is an empty string\n\n\n      if (!_this.state.itemName.length) {\n        _this.setState({\n          nameErrorMessage: \"Please enter a name.\"\n        });\n      } //if value is a number and greater than 0, and name is not an empty string\n\n\n      if (!isNaN(parseFloat(_this.state.itemValue)) && _this.state.itemValue > 0 && _this.state.itemName.length) {\n        var itemArr = _this.state.budgetedItems;\n        itemArr.push({\n          name: _this.state.itemName,\n          monthlyCost: _this.state.itemValue\n        });\n\n        _this.getMonthlyTotal();\n\n        _this.setState({\n          budgetedItems: itemArr,\n          itemValue: '',\n          itemName: '',\n          valueErrorMessage: '',\n          nameErrorMessage: ''\n        });\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"getMonthlyTotal\", function () {\n      var monthlyTotal = 0;\n\n      _this.state.budgetedItems.map(function (item) {\n        monthlyTotal = monthlyTotal + parseFloat(item.monthlyCost);\n      });\n\n      _this.setState({\n        monthlyTotal: monthlyTotal\n      });\n    });\n\n    _this.state = {\n      budgetedItems: [],\n      itemValue: 0,\n      itemName: '',\n      monthlyTotal: 0,\n      valueErrorMessage: '',\n      nameErrorMessage: ''\n    };\n    _this.handleValueChange = _this.handleValueChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.handleNameChange = _this.handleNameChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Home, [{\n    key: \"handleValueChange\",\n    value: function handleValueChange(event) {\n      this.setState({\n        itemValue: event.target.value\n      });\n    }\n  }, {\n    key: \"handleNameChange\",\n    value: function handleNameChange(event) {\n      this.setState({\n        itemName: event.target.value\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(\"div\", {\n        id: \"main-content\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 13\n        }\n      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__[\"Jumbotron\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 17\n        }\n      }, __jsx(\"h1\", {\n        className: \"display-3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 21\n        }\n      }, \"Next Budget\"), __jsx(\"p\", {\n        className: \"lead\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 21\n        }\n      }, \"Simply enter your monthly expenses and names, the app will figure out the total cost of your bills.\"), __jsx(\"hr\", {\n        className: \"my-2\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 21\n        }\n      }), __jsx(\"form\", {\n        onSubmit: this.addItem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }\n      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__[\"Label\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 25\n        }\n      }, \"Name:\", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n        type: \"text\",\n        placeholder: \"Mortgage\",\n        value: this.state.itemName,\n        onChange: this.handleNameChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 29\n        }\n      }), __jsx(\"div\", {\n        style: {\n          color: \"red\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 29\n        }\n      }, this.state.nameErrorMessage || '')), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 25\n        }\n      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__[\"Label\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 25\n        }\n      }, \"Monthly Cost: $\", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n        type: \"text\",\n        placeholder: \"1200\",\n        value: this.state.itemValue,\n        onChange: this.handleValueChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 29\n        }\n      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__[\"Button\"], {\n        color: \"primary\",\n        type: \"submit\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 25\n        }\n      }, \"Submit\"), __jsx(\"div\", {\n        style: {\n          color: \"red\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 25\n        }\n      }, this.state.valueErrorMessage || ''))), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 17\n        }\n      }, \"Your monthly expenses:\"), __jsx(\"ul\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 17\n        }\n      }, this.state.budgetedItems.map(function (item, index) {\n        return __jsx(\"li\", {\n          key: index,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 92,\n            columnNumber: 25\n          }\n        }, item.name, \": $\", item.monthlyCost);\n      })), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 17\n        }\n      }, \"Monthly total: $\", this.state.monthlyTotal));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJzdGF0ZSIsIml0ZW1WYWx1ZSIsInNldFN0YXRlIiwidmFsdWVFcnJvck1lc3NhZ2UiLCJpdGVtTmFtZSIsImxlbmd0aCIsIm5hbWVFcnJvck1lc3NhZ2UiLCJpdGVtQXJyIiwiYnVkZ2V0ZWRJdGVtcyIsInB1c2giLCJuYW1lIiwibW9udGhseUNvc3QiLCJnZXRNb250aGx5VG90YWwiLCJtb250aGx5VG90YWwiLCJtYXAiLCJpdGVtIiwiaGFuZGxlVmFsdWVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlTmFtZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiYWRkSXRlbSIsImNvbG9yIiwiaW5kZXgiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsSTs7Ozs7QUFDRixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLGtOQXdCVCxVQUFDQyxLQUFELEVBQVc7QUFDakJBLFdBQUssQ0FBQ0MsY0FBTixHQURpQixDQUVqQjs7QUFDQSxVQUFJQyxLQUFLLENBQUNDLFVBQVUsQ0FBQyxNQUFLQyxLQUFMLENBQVdDLFNBQVosQ0FBWCxDQUFMLElBQTRDLE1BQUtELEtBQUwsQ0FBV0MsU0FBWCxLQUF5QixDQUF6RSxFQUE2RTtBQUN6RTtBQUNBLGNBQUtDLFFBQUwsQ0FBYztBQUFFQywyQkFBaUIsRUFBRTtBQUFyQixTQUFkO0FBQ0gsT0FOZ0IsQ0FPakI7OztBQUNBLFVBQUksQ0FBQyxNQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0JDLE1BQXpCLEVBQWlDO0FBQzdCLGNBQUtILFFBQUwsQ0FBYztBQUFFSSwwQkFBZ0IsRUFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBaUJSLElBQUksQ0FBQ0wsSUFBdEIsU0FBK0JLLElBQUksQ0FBQ0osV0FBcEMsQ0FEMEI7QUFBQSxPQUE3QixDQURMLENBdEJKLEVBNEJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQXFCLEtBQUtYLEtBQUwsQ0FBV2EsWUFBaEMsQ0E1QkosQ0FESjtBQWlDSDs7OztFQTlGY1csNENBQUssQ0FBQ0MsUzs7QUFpR1YvQixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEp1bWJvdHJvbiwgQnV0dG9uLCBJbnB1dCwgTGFiZWwgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCAnLi4vY3NzL2luZGV4LmNzcyc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGJ1ZGdldGVkSXRlbXM6IFtdLFxuICAgICAgICAgICAgaXRlbVZhbHVlOiAwLFxuICAgICAgICAgICAgaXRlbU5hbWU6ICcnLFxuICAgICAgICAgICAgbW9udGhseVRvdGFsOiAwLFxuICAgICAgICAgICAgdmFsdWVFcnJvck1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgbmFtZUVycm9yTWVzc2FnZTogJydcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UgPSB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlTmFtZUNoYW5nZSA9IHRoaXMuaGFuZGxlTmFtZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZVZhbHVlQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtVmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVOYW1lQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpdGVtTmFtZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cblxuICAgIGFkZEl0ZW0gPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy9pZiBwYXJzZWQgdmFsdWUgZnJvbSB1c2VyIGlzIG5vdCBhIG51bWJlclxuICAgICAgICBpZiAoaXNOYU4ocGFyc2VGbG9hdCh0aGlzLnN0YXRlLml0ZW1WYWx1ZSkpIHx8ICh0aGlzLnN0YXRlLml0ZW1WYWx1ZSA9PT0gMCkpIHtcbiAgICAgICAgICAgIC8vc2V0IGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZUVycm9yTWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgYSBudW1iZXIgKGdyZWF0ZXIgdGhhbiAwKS5cIiB9KVxuICAgICAgICB9XG4gICAgICAgIC8vaWYgdGhlIHZhbHVlIGlzIGFuIGVtcHR5IHN0cmluZ1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXRlbU5hbWUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZUVycm9yTWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgYSBuYW1lLlwiIH0pXG4gICAgICAgIH1cbiAgICAgICAgLy9pZiB2YWx1ZSBpcyBhIG51bWJlciBhbmQgZ3JlYXRlciB0aGFuIDAsIGFuZCBuYW1lIGlzIG5vdCBhbiBlbXB0eSBzdHJpbmdcbiAgICAgICAgaWYgKCFpc05hTihwYXJzZUZsb2F0KHRoaXMuc3RhdGUuaXRlbVZhbHVlKSkgJiYgKHRoaXMuc3RhdGUuaXRlbVZhbHVlID4gMCkgJiYgdGhpcy5zdGF0ZS5pdGVtTmFtZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBpdGVtQXJyID0gdGhpcy5zdGF0ZS5idWRnZXRlZEl0ZW1zO1xuXG4gICAgICAgICAgICBpdGVtQXJyLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc3RhdGUuaXRlbU5hbWUsXG4gICAgICAgICAgICAgICAgbW9udGhseUNvc3Q6IHRoaXMuc3RhdGUuaXRlbVZhbHVlXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLmdldE1vbnRobHlUb3RhbCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJ1ZGdldGVkSXRlbXM6IGl0ZW1BcnIsIGl0ZW1WYWx1ZTogJycsIGl0ZW1OYW1lOiAnJywgdmFsdWVFcnJvck1lc3NhZ2U6ICcnLCBuYW1lRXJyb3JNZXNzYWdlOiAnJyB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TW9udGhseVRvdGFsID0gKCkgPT4ge1xuICAgICAgICBsZXQgbW9udGhseVRvdGFsID0gMDtcblxuICAgICAgICB0aGlzLnN0YXRlLmJ1ZGdldGVkSXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgbW9udGhseVRvdGFsID0gbW9udGhseVRvdGFsICsgcGFyc2VGbG9hdChpdGVtLm1vbnRobHlDb3N0KTtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9udGhseVRvdGFsOiBtb250aGx5VG90YWwgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFpbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPEp1bWJvdHJvbj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktM1wiPk5leHQgQnVkZ2V0PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlNpbXBseSBlbnRlciB5b3VyIG1vbnRobHkgZXhwZW5zZXMgYW5kIG5hbWVzLCB0aGUgYXBwIHdpbGwgZmlndXJlIG91dCB0aGUgdG90YWwgY29zdCBvZiB5b3VyIGJpbGxzLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cIm15LTJcIj48L2hyPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5hZGRJdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYW1lOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTW9ydGdhZ2VcIiB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtTmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlTmFtZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19Pnt0aGlzLnN0YXRlLm5hbWVFcnJvck1lc3NhZ2UgfHwgJyd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9udGhseSBDb3N0OiAkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIxMjAwXCIgdmFsdWU9e3RoaXMuc3RhdGUuaXRlbVZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVWYWx1ZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+e3RoaXMuc3RhdGUudmFsdWVFcnJvck1lc3NhZ2UgfHwgJyd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L0p1bWJvdHJvbj5cblxuICAgICAgICAgICAgICAgIDxoMT5Zb3VyIG1vbnRobHkgZXhwZW5zZXM6PC9oMT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJ1ZGdldGVkSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntpdGVtLm5hbWV9OiAke2l0ZW0ubW9udGhseUNvc3R9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgIDxoMT5Nb250aGx5IHRvdGFsOiAke3RoaXMuc3RhdGUubW9udGhseVRvdGFsfTwvaDE+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})