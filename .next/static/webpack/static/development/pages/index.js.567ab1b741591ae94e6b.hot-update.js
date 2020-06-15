webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_BudgetItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BudgetItem */ \"./components/BudgetItem.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/bradydouthit/Desktop/Projects/next-budget/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Home = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Home, _React$Component);\n\n  var _super = _createSuper(Home);\n\n  function Home(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Home);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"addItem\", function (event) {\n      event.preventDefault();\n\n      if (typeof parseInt(_this.state.itemValue) != \"number\") {\n        console.log(typeof _this.state.itemValue); //alert(\"Please enter a number.\")\n      } else {\n        var itemArr = _this.state.budgetedItems;\n        itemArr.push({\n          name: _this.state.itemName,\n          monthlyCost: _this.state.itemValue\n        });\n\n        _this.getMonthlyTotal();\n\n        _this.setState({\n          budgetedItems: itemArr,\n          itemValue: '',\n          itemName: ''\n        });\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"getMonthlyTotal\", function () {\n      var monthlyTotal = 0;\n\n      _this.state.budgetedItems.map(function (item) {\n        console.log(typeof item);\n        monthlyTotal = monthlyTotal + item.monthlyCost;\n      });\n\n      _this.setState({\n        monthlyTotal: monthlyTotal\n      });\n    });\n\n    _this.state = {\n      budgetedItems: [],\n      itemValue: 0,\n      itemName: '',\n      monthlyTotal: 0\n    };\n    _this.handleValueChange = _this.handleValueChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.handleNameChange = _this.handleNameChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Home, [{\n    key: \"handleValueChange\",\n    value: function handleValueChange(event) {\n      this.setState({\n        itemValue: event.target.value\n      });\n    }\n  }, {\n    key: \"handleNameChange\",\n    value: function handleNameChange(event) {\n      this.setState({\n        itemName: event.target.value\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }\n      }, __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 17\n        }\n      }, \"Next Budget\"), __jsx(\"form\", {\n        onSubmit: this.addItem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 17\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 21\n        }\n      }, \"Name:\", __jsx(\"input\", {\n        type: \"text\",\n        placeholder: \"Mortgage\",\n        value: this.state.itemName,\n        onChange: this.handleNameChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 25\n        }\n      })), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }\n      }), __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 21\n        }\n      }, \"Monthly Cost: $\", __jsx(\"input\", {\n        type: \"text\",\n        placeholder: \"1200\",\n        value: this.state.itemValue,\n        onChange: this.handleValueChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 25\n        }\n      })), __jsx(\"input\", {\n        type: \"submit\",\n        value: \"Submit\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 21\n        }\n      })), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 17\n        }\n      }, \"Your monthly expenses:\"), __jsx(\"ul\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 17\n        }\n      }, this.state.budgetedItems.map(function (item, index) {\n        return __jsx(\"li\", {\n          key: index,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 25\n          }\n        }, item.name, \": $\", item.monthlyCost);\n      })), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 17\n        }\n      }, \"Monthly total: $\", this.state.monthlyTotal));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwYXJzZUludCIsInN0YXRlIiwiaXRlbVZhbHVlIiwiY29uc29sZSIsImxvZyIsIml0ZW1BcnIiLCJidWRnZXRlZEl0ZW1zIiwicHVzaCIsIm5hbWUiLCJpdGVtTmFtZSIsIm1vbnRobHlDb3N0IiwiZ2V0TW9udGhseVRvdGFsIiwic2V0U3RhdGUiLCJtb250aGx5VG90YWwiLCJtYXAiLCJpdGVtIiwiaGFuZGxlVmFsdWVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlTmFtZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiYWRkSXRlbSIsImluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxJOzs7OztBQUNGLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsa05Bc0JULFVBQUNDLEtBQUQsRUFBVztBQUNqQkEsV0FBSyxDQUFDQyxjQUFOOztBQUNBLFVBQUksT0FBT0MsUUFBUSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0MsU0FBWixDQUFmLElBQXlDLFFBQTdDLEVBQXVEO0FBQ25EQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFPLE1BQUtILEtBQUwsQ0FBV0MsU0FBOUIsRUFEbUQsQ0FFbkQ7QUFDSCxPQUhELE1BSUs7QUFDRCxZQUFJRyxPQUFPLEdBQUcsTUFBS0osS0FBTCxDQUFXSyxhQUF6QjtBQUVBRCxlQUFPLENBQUNFLElBQVIsQ0FBYTtBQUNUQyxjQUFJLEVBQUUsTUFBS1AsS0FBTCxDQUFXUSxRQURSO0FBRVRDLHFCQUFXLEVBQUUsTUFBS1QsS0FBTCxDQUFXQztBQUZmLFNBQWI7O0FBS0EsY0FBS1MsZUFBTDs7QUFDQSxjQUFLQyxRQUFMLENBQWM7QUFBRU4sdUJB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LEVBdUJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQXFCLEtBQUtULEtBQUwsQ0FBV1ksWUFBaEMsQ0F2QkosQ0FESjtBQTRCSDs7OztFQWxGY1UsNENBQUssQ0FBQ0MsUzs7QUFxRlY1QixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdWRnZXRJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvQnVkZ2V0SXRlbSc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBidWRnZXRlZEl0ZW1zOiBbXSxcbiAgICAgICAgICAgIGl0ZW1WYWx1ZTogMCxcbiAgICAgICAgICAgIGl0ZW1OYW1lOiAnJyxcbiAgICAgICAgICAgIG1vbnRobHlUb3RhbDogMFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZSA9IHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVOYW1lQ2hhbmdlID0gdGhpcy5oYW5kbGVOYW1lQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlVmFsdWVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1WYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZU5hbWVDaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGl0ZW1OYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuXG4gICAgYWRkSXRlbSA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodHlwZW9mIHBhcnNlSW50KHRoaXMuc3RhdGUuaXRlbVZhbHVlKSAhPSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgdGhpcy5zdGF0ZS5pdGVtVmFsdWUpXG4gICAgICAgICAgICAvL2FsZXJ0KFwiUGxlYXNlIGVudGVyIGEgbnVtYmVyLlwiKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGl0ZW1BcnIgPSB0aGlzLnN0YXRlLmJ1ZGdldGVkSXRlbXM7XG5cbiAgICAgICAgICAgIGl0ZW1BcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5pdGVtTmFtZSxcbiAgICAgICAgICAgICAgICBtb250aGx5Q29zdDogdGhpcy5zdGF0ZS5pdGVtVmFsdWVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMuZ2V0TW9udGhseVRvdGFsKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnVkZ2V0ZWRJdGVtczogaXRlbUFyciwgaXRlbVZhbHVlOiAnJywgaXRlbU5hbWU6ICcnIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNb250aGx5VG90YWwgPSAoKSA9PiB7XG4gICAgICAgIGxldCBtb250aGx5VG90YWwgPSAwO1xuXG4gICAgICAgIHRoaXMuc3RhdGUuYnVkZ2V0ZWRJdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgaXRlbSlcbiAgICAgICAgICAgIG1vbnRobHlUb3RhbCA9IG1vbnRobHlUb3RhbCArIGl0ZW0ubW9udGhseUNvc3Q7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vbnRobHlUb3RhbDogbW9udGhseVRvdGFsIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDE+TmV4dCBCdWRnZXQ8L2gxPlxuXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuYWRkSXRlbX0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWU6XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk1vcnRnYWdlXCIgdmFsdWU9e3RoaXMuc3RhdGUuaXRlbU5hbWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU5hbWVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBNb250aGx5IENvc3Q6ICRcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiMTIwMFwiIHZhbHVlPXt0aGlzLnN0YXRlLml0ZW1WYWx1ZX0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlVmFsdWVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgICAgIDxoMT5Zb3VyIG1vbnRobHkgZXhwZW5zZXM6PC9oMT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJ1ZGdldGVkSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntpdGVtLm5hbWV9OiAke2l0ZW0ubW9udGhseUNvc3R9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgIDxoMT5Nb250aGx5IHRvdGFsOiAke3RoaXMuc3RhdGUubW9udGhseVRvdGFsfTwvaDE+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})