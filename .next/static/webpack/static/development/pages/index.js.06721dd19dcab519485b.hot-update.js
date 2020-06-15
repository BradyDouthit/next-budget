webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_BudgetItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BudgetItem */ \"./components/BudgetItem.js\");\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/bradydouthit/Desktop/Projects/next-budget/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Home = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Home, _React$Component);\n\n  var _super = _createSuper(Home);\n\n  function Home(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Home);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"addItem\", function (event) {\n      event.preventDefault(); //if parsed value from user is not a number\n\n      if (isNaN(parseFloat(_this.state.itemValue))) {\n        //set error message\n        _this.setState({\n          valueErrorMessage: \"Please enter a number.\"\n        });\n      }\n\n      if (!_this.state.itemName.length) {\n        _this.setState({\n          nameErrorMessage: \"Please enter a name.\"\n        });\n      }\n\n      if (!isNaN(parseFloat(_this.state.itemValue)) && _this.state.itemName.length) {\n        var itemArr = _this.state.budgetedItems;\n        itemArr.push({\n          name: _this.state.itemName,\n          monthlyCost: _this.state.itemValue\n        });\n\n        _this.getMonthlyTotal();\n\n        _this.setState({\n          budgetedItems: itemArr,\n          itemValue: '',\n          itemName: ''\n        });\n      }\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"getMonthlyTotal\", function () {\n      var monthlyTotal = 0;\n\n      _this.state.budgetedItems.map(function (item) {\n        monthlyTotal = monthlyTotal + parseFloat(item.monthlyCost);\n      });\n\n      _this.setState({\n        monthlyTotal: monthlyTotal\n      });\n    });\n\n    _this.state = {\n      budgetedItems: [],\n      itemValue: 0,\n      itemName: '',\n      monthlyTotal: 0,\n      valueErrorMessage: '',\n      nameErrorMessage: ''\n    };\n    _this.handleValueChange = _this.handleValueChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    _this.handleNameChange = _this.handleNameChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this));\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Home, [{\n    key: \"handleValueChange\",\n    value: function handleValueChange(event) {\n      this.setState({\n        itemValue: event.target.value\n      });\n    }\n  }, {\n    key: \"handleNameChange\",\n    value: function handleNameChange(event) {\n      this.setState({\n        itemName: event.target.value\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 13\n        }\n      }, __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 17\n        }\n      }, \"Next Budget\"), __jsx(\"form\", {\n        onSubmit: this.addItem,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 17\n        }\n      }, __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 21\n        }\n      }, \"Name:\", __jsx(\"input\", {\n        type: \"text\",\n        placeholder: \"Mortgage\",\n        value: this.state.itemName,\n        onChange: this.handleNameChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 25\n        }\n      }), __jsx(\"div\", {\n        style: {\n          color: \"red\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 25\n        }\n      }, this.state.nameErrorMessage || '')), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 21\n        }\n      }), __jsx(\"label\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 21\n        }\n      }, \"Monthly Cost: $\", __jsx(\"input\", {\n        type: \"text\",\n        placeholder: \"1200\",\n        value: this.state.itemValue,\n        onChange: this.handleValueChange,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 25\n        }\n      })), __jsx(\"input\", {\n        type: \"submit\",\n        value: \"Submit\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 21\n        }\n      }), __jsx(\"div\", {\n        style: {\n          color: \"red\"\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 21\n        }\n      }, this.state.valueErrorMessage || '')), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 17\n        }\n      }, \"Your monthly expenses:\"), __jsx(\"ul\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 17\n        }\n      }, this.state.budgetedItems.map(function (item, index) {\n        return __jsx(\"li\", {\n          key: index,\n          __self: _this2,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 25\n          }\n        }, item.name, \": $\", item.monthlyCost);\n      })), __jsx(\"h1\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 17\n        }\n      }, \"Monthly total: $\", this.state.monthlyTotal));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJzdGF0ZSIsIml0ZW1WYWx1ZSIsInNldFN0YXRlIiwidmFsdWVFcnJvck1lc3NhZ2UiLCJpdGVtTmFtZSIsImxlbmd0aCIsIm5hbWVFcnJvck1lc3NhZ2UiLCJpdGVtQXJyIiwiYnVkZ2V0ZWRJdGVtcyIsInB1c2giLCJuYW1lIiwibW9udGhseUNvc3QiLCJnZXRNb250aGx5VG90YWwiLCJtb250aGx5VG90YWwiLCJtYXAiLCJpdGVtIiwiaGFuZGxlVmFsdWVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlTmFtZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiYWRkSXRlbSIsImNvbG9yIiwiaW5kZXgiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLEk7Ozs7O0FBQ0YsZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxrTkF3QlQsVUFBQ0MsS0FBRCxFQUFXO0FBQ2pCQSxXQUFLLENBQUNDLGNBQU4sR0FEaUIsQ0FFakI7O0FBQ0EsVUFBSUMsS0FBSyxDQUFDQyxVQUFVLENBQUMsTUFBS0MsS0FBTCxDQUFXQyxTQUFaLENBQVgsQ0FBVCxFQUE2QztBQUN6QztBQUNBLGNBQUtDLFFBQUwsQ0FBYztBQUFFQywyQkFBaUIsRUFBRTtBQUFyQixTQUFkO0FBQ0g7O0FBQ0QsVUFBSSxDQUFDLE1BQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkMsTUFBekIsRUFBaUM7QUFDN0IsY0FBS0gsUUFBTCxDQUFjO0FBQUVJLDBCQUFnQixFQUFFO0FBQXBCLFNBQWQ7QUFDSDs7QUFDRCxVQUFJLENBQUNSLEtBQUssQ0FBQ0MsVUFBVSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0MsU0FBWixDQUFYLENBQU4sSUFBNEMsTUFBS0QsS0FBTCxDQUFXSSxRQUFYLENBQW9CQyxNQUFwRSxFQUE0RTtBQUN4RSxZQUFJRSxPQUFPLEdBQUcsTUFBS1AsS0FBTCxDQUFXUSxhQUF6QjtBQUVBRCxlQUFPLENBQUNFLElBQVIsQ0FBYTtBQUNUQyxjQUFJLEVBQUUsTUFBS1YsS0FBTCxDQUFXSSxRQURSO0FBRVRPLHFCQUFXLEVBQUUsTUFBS1gsS0FBTCxDQUFXQztBQUZmLFNBQWI7O0FBS0EsY0FBS1csZUFBTDs7QUFDQSxjQUFLVixRQUFMLENBQWM7QUFBRU0sdUJBQWEsRUFBRUQsT0FBakI7QUFBMEJOLG1CQUFTLEVBQUUsRUFBckM7QUFBeUNHLGtCQUFRLEVBQUU7QUFBbkQsU0FBZDtBQUNIO0FBQ0osS0E3Q2tCOztBQUFBLDBOQStDRCxZQUFNO0FBQ3BCLFVBQUlTLFlBQVksR0FBRyxDQUFuQjs7QUFFQSxZQUFLYixLQUFMLENBQVdRLGFBQVgsQ0FBeUJNLEdBQXpCLENBQTZCLFVBQUFDLElBQUksRUFBSTtBQUNqQ0Ysb0JBQVksR0FBR0EsWUFBWSxHQUFHZCxVQUFVLENBQUNnQixJQUFJLENBQUNKLFdBQU4sQ0FBeEM7QUFDSCxPQUZEOztBQUlBLFlBQUtULFFBQUwsQ0FBYztBQUFFVyxvQkFBWSxFQUFFQTtBQUFoQixPQUFkO0FBQ0gsS0F2RGtCOztBQUdmLFVBQUtiLEtBQUwsR0FBYTtBQUNUUSxtQkFBYSxFQUFFLEVBRE47QUFFVFAsZUFBUyxFQUFFLENBRkY7QUFHVEcsY0FBUSxFQUFFLEVBSEQ7QUFJVFMsa0JBQVksRUFBRSxDQUpMO0FBS1RWLHVCQUFpQixFQUFFLEVBTFY7QUFNVEcsc0JBQWdCLEVBQUU7QUFOVCxLQUFiO0FBU0EsVUFBS1UsaUJBQUwsR0FBeUIsTUFBS0EsaUJBQUwsQ0FBdUJDLElBQXZCLHlHQUF6QjtBQUNBLFVBQUtDLGdCQUFMLEdBQXdCLE1BQUtBLGdCQUFMLENBQXNCRCxJQUF0Qix5R0FBeEI7QUFiZTtBQWNsQjs7OztzQ0FFaUJyQixLLEVBQU87QUFDckIsV0FBS00sUUFBTCxDQUFjO0FBQUVELGlCQUFTLEVBQUVMLEtBQUssQ0FBQ3VCLE1BQU4sQ0FBYUM7QUFBMUIsT0FBZDtBQUNIOzs7cUNBRWdCeEIsSyxFQUFPO0FBQ3BCLFdBQUtNLFFBQUwsQ0FBYztBQUFFRSxnQkFBUSxFQUFFUixLQUFLLENBQUN1QixNQUFOLENBQWFDO0FBQXpCLE9BQWQ7QUFDSDs7OzZCQW1DUTtBQUFBOztBQUNMLGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosRUFHSTtBQUFNLGdCQUFRLEVBQUUsS0FBS0MsT0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixtQkFBVyxFQUFDLFVBQS9CO0FBQTBDLGFBQUssRUFBRSxLQUFLckIsS0FBTCxDQUFXSSxRQUE1RDtBQUFzRSxnQkFBUSxFQUFFLEtBQUtjLGdCQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkosRUFHSTtBQUFLLGFBQUssRUFBRTtBQUFDSSxlQUFLLEVBQUU7QUFBUixTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBNkIsS0FBS3RCLEtBQUwsQ0FBV00sZ0JBQVgsSUFBK0IsRUFBNUQsQ0FISixDQURKLEVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU5KLEVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFFSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFXLEVBQUMsTUFBL0I7QUFBc0MsYUFBSyxFQUFFLEtBQUtOLEtBQUwsQ0FBV0MsU0FBeEQ7QUFBbUUsZ0JBQVEsRUFBRSxLQUFLZSxpQkFBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUZKLENBUEosRUFXSTtBQUFPLFlBQUksRUFBQyxRQUFaO0FBQXFCLGFBQUssRUFBQyxRQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBWEosRUFZSTtBQUFLLGFBQUssRUFBRTtBQUFDTSxlQUFLLEVBQUU7QUFBUixTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBNkIsS0FBS3RCLEtBQUwsQ0FBV0csaUJBQVgsSUFBZ0MsRUFBN0QsQ0FaSixDQUhKLEVBa0JJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBbEJKLEVBbUJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSyxLQUFLSCxLQUFMLENBQVdRLGFBQVgsQ0FBeUJNLEdBQXpCLENBQTZCLFVBQUNDLElBQUQsRUFBT1EsS0FBUDtBQUFBLGVBQzFCO0FBQUksYUFBRyxFQUFFQSxLQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBaUJSLElBQUksQ0FBQ0wsSUFBdEIsU0FBK0JLLElBQUksQ0FBQ0osV0FBcEMsQ0FEMEI7QUFBQSxPQUE3QixDQURMLENBbkJKLEVBeUJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBQXFCLEtBQUtYLEtBQUwsQ0FBV2EsWUFBaEMsQ0F6QkosQ0FESjtBQThCSDs7OztFQXpGY1csNENBQUssQ0FBQ0MsUzs7QUE0RlYvQixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdWRnZXRJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvQnVkZ2V0SXRlbSc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBidWRnZXRlZEl0ZW1zOiBbXSxcbiAgICAgICAgICAgIGl0ZW1WYWx1ZTogMCxcbiAgICAgICAgICAgIGl0ZW1OYW1lOiAnJyxcbiAgICAgICAgICAgIG1vbnRobHlUb3RhbDogMCxcbiAgICAgICAgICAgIHZhbHVlRXJyb3JNZXNzYWdlOiAnJyxcbiAgICAgICAgICAgIG5hbWVFcnJvck1lc3NhZ2U6ICcnXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlID0gdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UgPSB0aGlzLmhhbmRsZU5hbWVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVWYWx1ZUNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbVZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlTmFtZUNoYW5nZShldmVudCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXRlbU5hbWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICB9XG5cbiAgICBhZGRJdGVtID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vaWYgcGFyc2VkIHZhbHVlIGZyb20gdXNlciBpcyBub3QgYSBudW1iZXJcbiAgICAgICAgaWYgKGlzTmFOKHBhcnNlRmxvYXQodGhpcy5zdGF0ZS5pdGVtVmFsdWUpKSkge1xuICAgICAgICAgICAgLy9zZXQgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlRXJyb3JNZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhIG51bWJlci5cIiB9KVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pdGVtTmFtZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBuYW1lRXJyb3JNZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhIG5hbWUuXCIgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTmFOKHBhcnNlRmxvYXQodGhpcy5zdGF0ZS5pdGVtVmFsdWUpKSAmJiB0aGlzLnN0YXRlLml0ZW1OYW1lLmxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGl0ZW1BcnIgPSB0aGlzLnN0YXRlLmJ1ZGdldGVkSXRlbXM7XG5cbiAgICAgICAgICAgIGl0ZW1BcnIucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zdGF0ZS5pdGVtTmFtZSxcbiAgICAgICAgICAgICAgICBtb250aGx5Q29zdDogdGhpcy5zdGF0ZS5pdGVtVmFsdWVcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRoaXMuZ2V0TW9udGhseVRvdGFsKCk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYnVkZ2V0ZWRJdGVtczogaXRlbUFyciwgaXRlbVZhbHVlOiAnJywgaXRlbU5hbWU6ICcnIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNb250aGx5VG90YWwgPSAoKSA9PiB7XG4gICAgICAgIGxldCBtb250aGx5VG90YWwgPSAwO1xuXG4gICAgICAgIHRoaXMuc3RhdGUuYnVkZ2V0ZWRJdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICBtb250aGx5VG90YWwgPSBtb250aGx5VG90YWwgKyBwYXJzZUZsb2F0KGl0ZW0ubW9udGhseUNvc3QpO1xuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb250aGx5VG90YWw6IG1vbnRobHlUb3RhbCB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGgxPk5leHQgQnVkZ2V0PC9oMT5cblxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmFkZEl0ZW19PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBOYW1lOlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJNb3J0Z2FnZVwiIHZhbHVlPXt0aGlzLnN0YXRlLml0ZW1OYW1lfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVOYW1lQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e2NvbG9yOiBcInJlZFwifX0+e3RoaXMuc3RhdGUubmFtZUVycm9yTWVzc2FnZSB8fCAnJ308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIE1vbnRobHkgQ29zdDogJFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIxMjAwXCIgdmFsdWU9e3RoaXMuc3RhdGUuaXRlbVZhbHVlfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVWYWx1ZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjogXCJyZWRcIn19Pnt0aGlzLnN0YXRlLnZhbHVlRXJyb3JNZXNzYWdlIHx8ICcnfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgICAgIDxoMT5Zb3VyIG1vbnRobHkgZXhwZW5zZXM6PC9oMT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmJ1ZGdldGVkSXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PntpdGVtLm5hbWV9OiAke2l0ZW0ubW9udGhseUNvc3R9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgIDxoMT5Nb250aGx5IHRvdGFsOiAke3RoaXMuc3RhdGUubW9udGhseVRvdGFsfTwvaDE+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})