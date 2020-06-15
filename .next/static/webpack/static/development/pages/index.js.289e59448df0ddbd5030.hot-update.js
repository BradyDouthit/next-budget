webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_BudgetItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BudgetItem */ \"./components/BudgetItem.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/bradydouthit/Desktop/Projects/next-budget/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Home = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Home, _React$Component);\n\n  var _super = _createSuper(Home);\n\n  function Home(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Home);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"addItem\", function (event) {\n      event.preventDefault();\n\n      if (typeof parseInt(_this.state.itemValue) != \"number\") {\n        console.log(typeof _this.state.itemValue); //alert(\"Please enter a number.\")\n      } else {\n        var itemArr = _this.state.budgetedItems;\n        itemArr.push({\n          name: _this.state.itemName,\n          monthlyCost: _this.state.itemValue\n        });\n\n        _this.getMonthlyTotal();\n\n        _this.setState({\n          budgetedItems: itemArr,\n          itemValue: '',\n          itemName: ''\n        });\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"getMonthlyTotal\", function () {\n      var monthlyTotal = 0;\n\n      _this.state.budgetedItems.map(function (item) {\n        console.log(typeof item.monthlyCost);\n        monthlyTotal = monthlyTotal + item.monthlyCost;\n      });\n\n      _this.setState({\n        monthlyTotal: monthlyTotal\n      });\n    });\n\n    _this.state = {\n      budgetedItems: [],\n      itemValue: 0,\n      itemName: '',\n      monthlyTotal: 0\n    };\n    _this.handleValueChange = _this.handleValueChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.handleNameChange = _this.handleNameChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Home, [{\n    key: \"handleValueChange\",\n    value: function handleValueChange(event) {\n      this.setState({\n        itemValue: event.target.value\n      });\n    }\n  }, {\n    key: \"handleNameChange\",\n    value: function handleNameChange(event) {\n      this.setState({\n        itemName: event.target.value\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }\n      }, __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 17\n        }\n      }, \"Next Budget\"), __jsx(\"form\", {\n        onSubmit: this.addItem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 17\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 21\n        }\n      }, \"Name:\", __jsx(\"input\", {\n        type: \"text\",\n        placeholder: \"Mortgage\",\n        value: this.state.itemName,\n        onChange: this.handleNameChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 25\n        }\n      })), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }\n      }), __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 21\n        }\n      }, \"Monthly Cost: $\", __jsx(\"input\", {\n        type: \"text\",\n        placeholder: \"1200\",\n        value: this.state.itemValue,\n        onChange: this.handleValueChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 25\n        }\n      })), __jsx(\"input\", {\n        type: \"submit\",\n        value: \"Submit\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 21\n        }\n      })), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 17\n        }\n      }, \"Your monthly expenses:\"), __jsx(\"ul\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 17\n        }\n      }, this.state.budgetedItems.map(function (item, index) {\n        return __jsx(\"li\", {\n          key: index,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 25\n          }\n        }, item.name, \": $\", item.monthlyCost);\n      })), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 17\n        }\n      }, \"Monthly total: $\", this.state.monthlyTotal));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwYXJzZUludCIsInN0YXRlIiwiaXRlbVZhbHVlIiwiY29uc29sZSIsImxvZyIsIml0ZW1BcnIiLCJidWRnZXRlZEl0ZW1zIiwicHVzaCIsIm5hbWUiLCJpdGVtTmFtZSIsIm1vbnRobHlDb3N0IiwiZ2V0TW9udGhseVRvdGFsIiwic2V0U3RhdGUiLCJtb250aGx5VG90YWwiLCJtYXAiLCJpdGVtIiwiaGFuZGxlVmFsdWVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlTmFtZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiYWRkSXRlbSIsImluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxJOzs7OztBQUNGLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsa05Bc0JULFVBQUNDLEtBQUQsRUFBVztBQUNqQkEsV0FBSyxDQUFDQyxjQUFOOztBQUNBLFVBQUksT0FBT0MsUUFBUSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0MsU0FBWixDQUFmLElBQXlDLFFBQTdDLEVBQXVEO0FBQ25EQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFPLE1BQUtILEtBQUwsQ0FBV0MsU0FBOUIsRUFEbUQsQ0FFbkQ7QUFDSCxPQUhELE1BSUs7QUFDRCxZQUFJRyxPQUFPLEdBQUcsTUFBS0osS0FBTCxDQUFXSyxhQUF6QjtBQUVBRCxlQUFPLENBQUNFLElBQVIsQ0FBYTtBQUNUQyxjQUFJLEVBQUUsTUFBS1AsS0FBTCxDQUFXUSxRQURSO0FBRVRDLHFCQUFXLEVBQUUsTUFBS1QsS0FBTCxDQUFXQztBQUZmLFNBQWI7O0FBS0EsY0FBS1MsZUFBTDs7QUFDQSxjQUFLQyxRQUFMLENBQWM7QUFBRU4sdUJB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LENBREwsQ0FqQkosRUF1Qkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBcUIsS0FBS1QsS0FBTCxDQUFXWSxZQUFoQyxDQXZCSixDQURKO0FBNEJIOzs7O0VBbEZjVSw0Q0FBSyxDQUFDQyxTOztBQXFGVjVCLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJ1ZGdldEl0ZW0gZnJvbSAnLi4vY29tcG9uZW50cy9CdWRnZXRJdGVtJztcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGJ1ZGdldGVkSXRlbXM6IFtdLFxuICAgICAgICAgICAgaXRlbVZhbHVlOiAwLFxuICAgICAgICAgICAgaXRlbU5hbWU6ICcnLFxuICAgICAgICAgICAgbW9udGhseVRvdGFsOiAwXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlID0gdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UgPSB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVWYWx1ZUNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbVZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlTmFtZUNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbU5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG5cbiAgICBhZGRJdGVtID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh0eXBlb2YgcGFyc2VJbnQodGhpcy5zdGF0ZS5pdGVtVmFsdWUpICE9IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiB0aGlzLnN0YXRlLml0ZW1WYWx1ZSlcbiAgICAgICAgICAgIC8vYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSBudW1iZXIuXCIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgaXRlbUFyciA9IHRoaXMuc3RhdGUuYnVkZ2V0ZWRJdGVtcztcblxuICAgICAgICAgICAgaXRlbUFyci5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLml0ZW1OYW1lLFxuICAgICAgICAgICAgICAgIG1vbnRobHlDb3N0OiB0aGlzLnN0YXRlLml0ZW1WYWx1ZVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgdGhpcy5nZXRNb250aGx5VG90YWwoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBidWRnZXRlZEl0ZW1zOiBpdGVtQXJyLCBpdGVtVmFsdWU6ICcnLCBpdGVtTmFtZTogJycgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldE1vbnRobHlUb3RhbCA9ICgpID0+IHtcbiAgICAgICAgbGV0IG1vbnRobHlUb3RhbCA9IDA7XG5cbiAgICAgICAgdGhpcy5zdGF0ZS5idWRnZXRlZEl0ZW1zLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBpdGVtLm1vbnRobHlDb3N0KVxuICAgICAgICAgICAgbW9udGhseVRvdGFsID0gbW9udGhseVRvdGFsICsgaXRlbS5tb250aGx5Q29zdDtcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbW9udGhseVRvdGFsOiBtb250aGx5VG90YWwgfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoMT5OZXh0IEJ1ZGdldDwvaDE+XG5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5hZGRJdGVtfT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgTmFtZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTW9ydGdhZ2VcIiB2YWx1ZT17dGhpcy5zdGF0ZS5pdGVtTmFtZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlTmFtZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1vbnRobHkgQ29zdDogJFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIxMjAwXCIgdmFsdWU9e3RoaXMuc3RhdGUuaXRlbVZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVWYWx1ZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuXG4gICAgICAgICAgICAgICAgPGgxPllvdXIgbW9udGhseSBleHBlbnNlczo8L2gxPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYnVkZ2V0ZWRJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+e2l0ZW0ubmFtZX06ICR7aXRlbS5tb250aGx5Q29zdH08L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgPGgxPk1vbnRobHkgdG90YWw6ICR7dGhpcy5zdGF0ZS5tb250aGx5VG90YWx9PC9oMT5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})