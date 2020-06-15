webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_BudgetItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BudgetItem */ \"./components/BudgetItem.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/bradydouthit/Desktop/Projects/next-budget/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Home = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Home, _React$Component);\n\n  var _super = _createSuper(Home);\n\n  function Home(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Home);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"addItem\", function (event) {\n      event.preventDefault(); //if parsed value from user is not a number\n\n      if (isNaN(parseFloat(_this.state.itemValue))) {\n        console.log(\"test\");\n      } else {\n        var itemArr = _this.state.budgetedItems;\n        itemArr.push({\n          name: _this.state.itemName,\n          monthlyCost: _this.state.itemValue\n        });\n\n        _this.getMonthlyTotal();\n\n        _this.setState({\n          budgetedItems: itemArr,\n          itemValue: '',\n          itemName: ''\n        });\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"getMonthlyTotal\", function () {\n      var monthlyTotal = 0;\n\n      _this.state.budgetedItems.map(function (item) {\n        monthlyTotal = monthlyTotal + parseFloat(item.monthlyCost);\n      });\n\n      _this.setState({\n        monthlyTotal: monthlyTotal\n      });\n    });\n\n    _this.state = {\n      budgetedItems: [],\n      itemValue: 0,\n      itemName: '',\n      monthlyTotal: 0,\n      errorMessage: ''\n    };\n    _this.handleValueChange = _this.handleValueChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.handleNameChange = _this.handleNameChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Home, [{\n    key: \"handleValueChange\",\n    value: function handleValueChange(event) {\n      this.setState({\n        itemValue: event.target.value\n      });\n    }\n  }, {\n    key: \"handleNameChange\",\n    value: function handleNameChange(event) {\n      this.setState({\n        itemName: event.target.value\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }\n      }, __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 17\n        }\n      }, \"Next Budget\"), __jsx(\"form\", {\n        onSubmit: this.addItem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 17\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 21\n        }\n      }, \"Name:\", __jsx(\"input\", {\n        type: \"text\",\n        placeholder: \"Mortgage\",\n        value: this.state.itemName,\n        onChange: this.handleNameChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 25\n        }\n      })), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }\n      }), __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 21\n        }\n      }, \"Monthly Cost: $\", __jsx(\"input\", {\n        type: \"text\",\n        placeholder: \"1200\",\n        value: this.state.itemValue,\n        onChange: this.handleValueChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 25\n        }\n      })), __jsx(\"input\", {\n        type: \"submit\",\n        value: \"Submit\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 21\n        }\n      }), __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }\n      }, this.state.errorMessage)), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 17\n        }\n      }, \"Your monthly expenses:\"), __jsx(\"ul\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 17\n        }\n      }, this.state.budgetedItems.map(function (item, index) {\n        return __jsx(\"li\", {\n          key: index,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 25\n          }\n        }, item.name, \": $\", item.monthlyCost);\n      })), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 17\n        }\n      }, \"Monthly total: $\", this.state.monthlyTotal));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJzdGF0ZSIsIml0ZW1WYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJpdGVtQXJyIiwiYnVkZ2V0ZWRJdGVtcyIsInB1c2giLCJuYW1lIiwiaXRlbU5hbWUiLCJtb250aGx5Q29zdCIsImdldE1vbnRobHlUb3RhbCIsInNldFN0YXRlIiwibW9udGhseVRvdGFsIiwibWFwIiwiaXRlbSIsImVycm9yTWVzc2FnZSIsImhhbmRsZVZhbHVlQ2hhbmdlIiwiYmluZCIsImhhbmRsZU5hbWVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFkZEl0ZW0iLCJpbmRleCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFTUEsSTs7Ozs7QUFDRixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLGtOQXVCVCxVQUFDQyxLQUFELEVBQVc7QUFDakJBLFdBQUssQ0FBQ0MsY0FBTixHQURpQixDQUVqQjs7QUFDQSxVQUFJQyxLQUFLLENBQUNDLFVBQVUsQ0FBQyxNQUFLQyxLQUFMLENBQVdDLFNBQVosQ0FBWCxDQUFULEVBQTZDO0FBQ3pDQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsWUFBSUMsT0FBTyxHQUFHLE1BQUtKLEtBQUwsQ0FBV0ssYUFBekI7QUFFQUQsZUFBTyxDQUFDRSxJQUFSLENBQWE7QUFDVEMsY0FBSSxFQUFFLE1BQUtQLEtBQUwsQ0FBV1EsUUFEUjtBQUVUQyxxQkFBVyxFQUFFLE1BQUtULEtBQUwsQ0FBV0M7QUFGZixTQUFiOztBQUtBLGNBQUtTLGVBQUw7O0FBQ0EsY0FBS0MsUUFBTCxDQUFjO0FBQUVOLHVC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QUFpQlIsSUFBSSxDQUFDUCxJQUF0QixTQUErQk8sSUFBSSxDQUFDTCxXQUFwQyxDQUQwQjtBQUFBLE9BQTdCLENBREwsQ0FsQkosRUF3Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBcUIsS0FBS1QsS0FBTCxDQUFXWSxZQUFoQyxDQXhCSixDQURKO0FBNkJIOzs7O0VBbkZjVyw0Q0FBSyxDQUFDQyxTOztBQXNGVjlCLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1ZGdldEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9CdWRnZXRJdGVtJztcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGJ1ZGdldGVkSXRlbXM6IFtdLFxuICAgICAgICAgICAgaXRlbVZhbHVlOiAwLFxuICAgICAgICAgICAgaXRlbU5hbWU6ICcnLFxuICAgICAgICAgICAgbW9udGhseVRvdGFsOiAwLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZSA9IHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVOYW1lQ2hhbmdlID0gdGhpcy5oYW5kbGVOYW1lQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlVmFsdWVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1WYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZU5hbWVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1OYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuXG4gICAgYWRkSXRlbSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAvL2lmIHBhcnNlZCB2YWx1ZSBmcm9tIHVzZXIgaXMgbm90IGEgbnVtYmVyXG4gICAgICAgIGlmIChpc05hTihwYXJzZUZsb2F0KHRoaXMuc3RhdGUuaXRlbVZhbHVlKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGVzdFwiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGl0ZW1BcnIgPSB0aGlzLnN0YXRlLmJ1ZGdldGVkSXRlbXM7XG5cbiAgICAgICAgICAgIGl0ZW1BcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5pdGVtTmFtZSxcbiAgICAgICAgICAgICAgICBtb250aGx5Q29zdDogdGhpcy5zdGF0ZS5pdGVtVmFsdWVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMuZ2V0TW9udGhseVRvdGFsKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnVkZ2V0ZWRJdGVtczogaXRlbUFyciwgaXRlbVZhbHVlOiAnJywgaXRlbU5hbWU6ICcnIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNb250aGx5VG90YWwgPSAoKSA9PiB7XG4gICAgICAgIGxldCBtb250aGx5VG90YWwgPSAwO1xuXG4gICAgICAgIHRoaXMuc3RhdGUuYnVkZ2V0ZWRJdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICBtb250aGx5VG90YWwgPSBtb250aGx5VG90YWwgKyBwYXJzZUZsb2F0KGl0ZW0ubW9udGhseUNvc3QpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb250aGx5VG90YWw6IG1vbnRobHlUb3RhbCB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPk5leHQgQnVkZ2V0PC9oMT5cblxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmFkZEl0ZW19PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNb3J0Z2FnZVwiIHZhbHVlPXt0aGlzLnN0YXRlLml0ZW1OYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVOYW1lQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgTW9udGhseSBDb3N0OiAkXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIjEyMDBcIiB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtVmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj57dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICAgICAgPGgxPllvdXIgbW9udGhseSBleHBlbnNlczo8L2gxPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYnVkZ2V0ZWRJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+e2l0ZW0ubmFtZX06ICR7aXRlbS5tb250aGx5Q29zdH08L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgPGgxPk1vbnRobHkgdG90YWw6ICR7dGhpcy5zdGF0ZS5tb250aGx5VG90YWx9PC9oMT5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})