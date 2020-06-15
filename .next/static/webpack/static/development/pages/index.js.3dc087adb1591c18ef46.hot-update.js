webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/index.css */ \"./css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/bradydouthit/Desktop/Projects/next-budget/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar Home = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Home, _React$Component);\n\n  var _super = _createSuper(Home);\n\n  function Home(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Home);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"addItem\", function (event) {\n      event.preventDefault(); //if parsed value from user is not a number\n\n      if (isNaN(parseFloat(_this.state.itemValue)) || _this.state.itemValue === 0) {\n        //set error message\n        _this.setState({\n          valueErrorMessage: true\n        });\n      } //if the value is an empty string\n\n\n      if (!_this.state.itemName.length) {\n        _this.setState({\n          nameErrorMessage: true\n        });\n      } //if value is a number and greater than 0, and name is not an empty string\n\n\n      if (!isNaN(parseFloat(_this.state.itemValue)) && _this.state.itemValue > 0 && _this.state.itemName.length) {\n        var itemArr = _this.state.budgetedItems;\n        itemArr.push({\n          name: _this.state.itemName,\n          monthlyCost: _this.state.itemValue\n        });\n\n        _this.getMonthlyTotal();\n\n        _this.setState({\n          budgetedItems: itemArr,\n          itemValue: '',\n          itemName: '',\n          valueErrorMessage: false,\n          nameErrorMessage: false\n        });\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"getMonthlyTotal\", function () {\n      var monthlyTotal = 0;\n\n      _this.state.budgetedItems.map(function (item) {\n        monthlyTotal = monthlyTotal + parseFloat(item.monthlyCost);\n      });\n\n      _this.setState({\n        monthlyTotal: monthlyTotal\n      });\n    });\n\n    _this.state = {\n      budgetedItems: [],\n      itemValue: 0,\n      itemName: '',\n      monthlyTotal: 0,\n      valueErrorMessage: false,\n      nameErrorMessage: true,\n      nameValid: true,\n      valueValid: true\n    };\n    _this.handleValueChange = _this.handleValueChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.handleNameChange = _this.handleNameChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Home, [{\n    key: \"handleValueChange\",\n    value: function handleValueChange(event) {\n      //if parsed value from user is not a number\n      if (isNaN(parseFloat(this.state.itemValue)) || this.state.itemValue === 0) {\n        //set error message\n        this.setState({\n          valueErrorMessage: true\n        });\n      } else {\n        this.setState({\n          valueErrorMessage: false\n        });\n      }\n\n      this.setState({\n        itemValue: event.target.value\n      });\n    }\n  }, {\n    key: \"handleNameChange\",\n    value: function handleNameChange(event) {\n      //if the value is an empty string\n      if (this.state.itemName.length) {\n        this.setState({\n          nameErrorMessage: false\n        });\n      } else {\n        this.setState({\n          nameErrorMessage: true\n        });\n      }\n\n      this.setState({\n        itemName: event.target.value\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(\"div\", {\n        id: \"main-content\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 13\n        }\n      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__[\"Jumbotron\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 17\n        }\n      }, __jsx(\"h1\", {\n        className: \"display-3\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 21\n        }\n      }, \"Next Budget\"), __jsx(\"p\", {\n        className: \"lead\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }\n      }, \"Simply enter your monthly expenses and names, the app will figure out the total cost of your bills.\"), __jsx(\"hr\", {\n        className: \"my-2\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 90,\n          columnNumber: 21\n        }\n      }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__[\"Form\"], {\n        onSubmit: this.addItem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 21\n        }\n      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__[\"FormGroup\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 25\n        }\n      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__[\"Label\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 29\n        }\n      }, \"Name:\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n        type: \"text\",\n        placeholder: \"Mortgage\",\n        value: this.state.itemName,\n        onChange: this.handleNameChange,\n        valid: !this.state.nameErrorMessage,\n        invalid: this.state.nameErrorMessage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 29\n        }\n      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__[\"FormGroup\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 25\n        }\n      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__[\"Label\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 29\n        }\n      }, \"Monthly Cost: $\", this.state.monthlyTotal), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__[\"Input\"], {\n        type: \"text\",\n        placeholder: \"1200\",\n        value: this.state.itemValue,\n        onChange: this.handleValueChange,\n        valid: this.state.valueErrorMessage,\n        invalid: !this.state.valueErrorMessage,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 29\n        }\n      })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__[\"Button\"], {\n        color: \"primary\",\n        type: \"submit\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 25\n        }\n      }, \"Submit\"), __jsx(\"hr\", {\n        className: \"my-2\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 25\n        }\n      })), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 21\n        }\n      }, \"Your monthly expenses:\"), __jsx(\"ul\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 21\n        }\n      }, this.state.budgetedItems.map(function (item, index) {\n        return __jsx(\"li\", {\n          key: index,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 29\n          }\n        }, item.name, \": $\", item.monthlyCost);\n      })), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 21\n        }\n      }, \"Monthly total: $\", this.state.monthlyTotal)));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJzdGF0ZSIsIml0ZW1WYWx1ZSIsInNldFN0YXRlIiwidmFsdWVFcnJvck1lc3NhZ2UiLCJpdGVtTmFtZSIsImxlbmd0aCIsIm5hbWVFcnJvck1lc3NhZ2UiLCJpdGVtQXJyIiwiYnVkZ2V0ZWRJdGVtcyIsInB1c2giLCJuYW1lIiwibW9udGhseUNvc3QiLCJnZXRNb250aGx5VG90YWwiLCJtb250aGx5VG90YWwiLCJtYXAiLCJpdGVtIiwibmFtZVZhbGlkIiwidmFsdWVWYWxpZCIsImhhbmRsZVZhbHVlQ2hhbmdlIiwiYmluZCIsImhhbmRsZU5hbWVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFkZEl0ZW0iLCJpbmRleCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxJOzs7OztBQUNGLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsa05BMENULFVBQUNDLEtBQUQsRUFBVztBQUNqQkEsV0FBSyxDQUFDQyxjQUFOLEdBRGlCLENBRWpCOztBQUNBLFVBQUlDLEtBQUssQ0FBQ0MsVUFBVSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0MsU0FBWixDQUFYLENBQUwsSUFBNEMsTUFBS0QsS0FBTCxDQUFXQyxTQUFYLEtBQXlCLENBQXpFLEVBQTZFO0FBQ3pFO0FBQ0EsY0FBS0MsUUFBTCxDQUFjO0FBQUVDLDJCQUFpQixFQUFFO0FBQXJCLFNBQWQ7QUFDSCxPQU5nQixDQU9qQjs7O0FBQ0EsVUFBSSxDQUFDLE1BQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkMsTUFBekIsRUFBaUM7QUFDN0IsY0FBS0gsUUFBTCxDQUFj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USxhQUFLLEVBQUUsS0FBS2IsS0FBTCxDQUFXQyxTQUYxQjtBQUdRLGdCQUFRLEVBQUUsS0FBS2lCLGlCQUh2QjtBQUlRLGFBQUssRUFBRSxLQUFLbEIsS0FBTCxDQUFXRyxpQkFKMUI7QUFLUSxlQUFPLEVBQUUsQ0FBQyxLQUFLSCxLQUFMLENBQVdHLGlCQUw3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosQ0FWSixFQW1CSSxNQUFDLGlEQUFEO0FBQVEsYUFBSyxFQUFDLFNBQWQ7QUFBd0IsWUFBSSxFQUFDLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbkJKLEVBb0JJO0FBQUksaUJBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFwQkosQ0FKSixFQTBCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQTFCSixFQTJCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ssS0FBS0gsS0FBTCxDQUFXUSxhQUFYLENBQXlCTSxHQUF6QixDQUE2QixVQUFDQyxJQUFELEVBQU9TLEtBQVA7QUFBQSxlQUMxQjtBQUFJLGFBQUcsRUFBRUEsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWlCVCxJQUFJLENBQUNMLElBQXRCLFNBQStCSyxJQUFJLENBQUNKLFdBQXBDLENBRDBCO0FBQUEsT0FBN0IsQ0FETCxDQTNCSixFQWdDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUFxQixLQUFLWCxLQUFMLENBQVdhLFlBQWhDLENBaENKLENBREosQ0FESjtBQXNDSDs7OztFQXJIY1ksNENBQUssQ0FBQ0MsUzs7QUF3SFZoQyxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEp1bWJvdHJvbiwgQnV0dG9uLCBJbnB1dCwgTGFiZWwsIEZvcm0sIEZvcm1Hcm91cCwgRm9ybUZlZWRiYWNrLCBGb3JtVGV4dCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0ICcuLi9jc3MvaW5kZXguY3NzJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5jc3MnO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcblxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYnVkZ2V0ZWRJdGVtczogW10sXG4gICAgICAgICAgICBpdGVtVmFsdWU6IDAsXG4gICAgICAgICAgICBpdGVtTmFtZTogJycsXG4gICAgICAgICAgICBtb250aGx5VG90YWw6IDAsXG4gICAgICAgICAgICB2YWx1ZUVycm9yTWVzc2FnZTogZmFsc2UsXG4gICAgICAgICAgICBuYW1lRXJyb3JNZXNzYWdlOiB0cnVlLFxuICAgICAgICAgICAgbmFtZVZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgdmFsdWVWYWxpZDogdHJ1ZVxuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlID0gdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UgPSB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVWYWx1ZUNoYW5nZShldmVudCkge1xuICAgICAgICAvL2lmIHBhcnNlZCB2YWx1ZSBmcm9tIHVzZXIgaXMgbm90IGEgbnVtYmVyXG4gICAgICAgIGlmIChpc05hTihwYXJzZUZsb2F0KHRoaXMuc3RhdGUuaXRlbVZhbHVlKSkgfHwgKHRoaXMuc3RhdGUuaXRlbVZhbHVlID09PSAwKSkge1xuICAgICAgICAgICAgLy9zZXQgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlRXJyb3JNZXNzYWdlOiB0cnVlIH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZUVycm9yTWVzc2FnZTogZmFsc2UgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbVZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlTmFtZUNoYW5nZShldmVudCkge1xuICAgICAgICAvL2lmIHRoZSB2YWx1ZSBpcyBhbiBlbXB0eSBzdHJpbmdcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaXRlbU5hbWUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbmFtZUVycm9yTWVzc2FnZTogZmFsc2UgfSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe25hbWVFcnJvck1lc3NhZ2U6IHRydWUgfSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbU5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG5cbiAgICBhZGRJdGVtID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vaWYgcGFyc2VkIHZhbHVlIGZyb20gdXNlciBpcyBub3QgYSBudW1iZXJcbiAgICAgICAgaWYgKGlzTmFOKHBhcnNlRmxvYXQodGhpcy5zdGF0ZS5pdGVtVmFsdWUpKSB8fCAodGhpcy5zdGF0ZS5pdGVtVmFsdWUgPT09IDApKSB7XG4gICAgICAgICAgICAvL3NldCBlcnJvciBtZXNzYWdlXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdmFsdWVFcnJvck1lc3NhZ2U6IHRydWUgfSlcbiAgICAgICAgfVxuICAgICAgICAvL2lmIHRoZSB2YWx1ZSBpcyBhbiBlbXB0eSBzdHJpbmdcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLml0ZW1OYW1lLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG5hbWVFcnJvck1lc3NhZ2U6IHRydWUgfSlcbiAgICAgICAgfVxuICAgICAgICAvL2lmIHZhbHVlIGlzIGEgbnVtYmVyIGFuZCBncmVhdGVyIHRoYW4gMCwgYW5kIG5hbWUgaXMgbm90IGFuIGVtcHR5IHN0cmluZ1xuICAgICAgICBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodGhpcy5zdGF0ZS5pdGVtVmFsdWUpKSAmJiAodGhpcy5zdGF0ZS5pdGVtVmFsdWUgPiAwKSAmJiB0aGlzLnN0YXRlLml0ZW1OYW1lLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGl0ZW1BcnIgPSB0aGlzLnN0YXRlLmJ1ZGdldGVkSXRlbXM7XG5cbiAgICAgICAgICAgIGl0ZW1BcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5pdGVtTmFtZSxcbiAgICAgICAgICAgICAgICBtb250aGx5Q29zdDogdGhpcy5zdGF0ZS5pdGVtVmFsdWVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMuZ2V0TW9udGhseVRvdGFsKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnVkZ2V0ZWRJdGVtczogaXRlbUFyciwgaXRlbVZhbHVlOiAnJywgaXRlbU5hbWU6ICcnLCB2YWx1ZUVycm9yTWVzc2FnZTogZmFsc2UsIG5hbWVFcnJvck1lc3NhZ2U6IGZhbHNlIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNb250aGx5VG90YWwgPSAoKSA9PiB7XG4gICAgICAgIGxldCBtb250aGx5VG90YWwgPSAwO1xuXG4gICAgICAgIHRoaXMuc3RhdGUuYnVkZ2V0ZWRJdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICBtb250aGx5VG90YWwgPSBtb250aGx5VG90YWwgKyBwYXJzZUZsb2F0KGl0ZW0ubW9udGhseUNvc3QpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb250aGx5VG90YWw6IG1vbnRobHlUb3RhbCB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8SnVtYm90cm9uPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS0zXCI+TmV4dCBCdWRnZXQ8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+U2ltcGx5IGVudGVyIHlvdXIgbW9udGhseSBleHBlbnNlcyBhbmQgbmFtZXMsIHRoZSBhcHAgd2lsbCBmaWd1cmUgb3V0IHRoZSB0b3RhbCBjb3N0IG9mIHlvdXIgYmlsbHMuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktMlwiPjwvaHI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLmFkZEl0ZW19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWw+TmFtZTo8L0xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJNb3J0Z2FnZVwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaXRlbU5hbWV9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTmFtZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkPXshdGhpcy5zdGF0ZS5uYW1lRXJyb3JNZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52YWxpZD17dGhpcy5zdGF0ZS5uYW1lRXJyb3JNZXNzYWdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbD5Nb250aGx5IENvc3Q6ICR7dGhpcy5zdGF0ZS5tb250aGx5VG90YWx9PC9MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiMTIwMFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuaXRlbVZhbHVlfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQ9e3RoaXMuc3RhdGUudmFsdWVFcnJvck1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnZhbGlkPXshdGhpcy5zdGF0ZS52YWx1ZUVycm9yTWVzc2FnZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktMlwiPjwvaHI+XG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPllvdXIgbW9udGhseSBleHBlbnNlczo8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5idWRnZXRlZEl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0+e2l0ZW0ubmFtZX06ICR7aXRlbS5tb250aGx5Q29zdH08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5Nb250aGx5IHRvdGFsOiAke3RoaXMuc3RhdGUubW9udGhseVRvdGFsfTwvaDE+XG4gICAgICAgICAgICAgICAgPC9KdW1ib3Ryb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})