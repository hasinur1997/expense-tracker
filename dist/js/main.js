/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");
/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context/GlobalState */ "./src/context/GlobalState.js");
/* harmony import */ var _components_Balance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Balance */ "./src/components/Balance.js");
/* harmony import */ var _components_IncomeExpenses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/IncomeExpenses */ "./src/components/IncomeExpenses.js");
/* harmony import */ var _components_TransactionList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/TransactionList */ "./src/components/TransactionList.js");
/* harmony import */ var _components_AddTransaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/AddTransaction */ "./src/components/AddTransaction.js");








function App() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__["GlobalProvider"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_Balance__WEBPACK_IMPORTED_MODULE_3__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_IncomeExpenses__WEBPACK_IMPORTED_MODULE_4__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_TransactionList__WEBPACK_IMPORTED_MODULE_5__["default"], null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_AddTransaction__WEBPACK_IMPORTED_MODULE_6__["default"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/AddTransaction.js":
/*!******************************************!*\
  !*** ./src/components/AddTransaction.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ "./src/context/GlobalState.js");




function AddTransaction() {
  const [text, setText] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const [amount, setAmount] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    addTransaction
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]);

  const onSubmit = e => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount
    };
    addTransaction(newTransaction);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Add New Transaction"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("form", {
    action: "",
    onSubmit: onSubmit
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("table", {
    className: "form-table"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tbody", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    htmlFor: "text"
  }, "Text")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "text",
    id: "text",
    className: "regular-text",
    value: text,
    onChange: e => setText(e.target.value)
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("tr", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("th", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    htmlFor: "amount"
  }, "Amount")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("td", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "text",
    id: "amount",
    className: "regular-text",
    value: amount,
    onChange: e => setAmount(e.target.value)
  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "submit"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "submit",
    value: "Add Transaction",
    className: "button button-primary"
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (AddTransaction);

/***/ }),

/***/ "./src/components/Balance.js":
/*!***********************************!*\
  !*** ./src/components/Balance.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ "./src/context/GlobalState.js");




function Balance() {
  const {
    transactions,
    moneyFormatter
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => acc += item, 0);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", null, "Your Balance"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, moneyFormatter(total)));
}

/* harmony default export */ __webpack_exports__["default"] = (Balance);

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


function Header() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h2", null, "Expense Tracker");
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/IncomeExpenses.js":
/*!******************************************!*\
  !*** ./src/components/IncomeExpenses.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ "./src/context/GlobalState.js");




function IncomeExpenses() {
  const {
    transactions,
    moneyFormatter
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]);
  const amounts = transactions.map(transaction => transaction.amount);
  const income = amounts.filter(item => item > 0).reduce((acc, item) => acc += item, 0);
  const expense = amounts.filter(item => item < 0).reduce((acc, item) => acc += item, 0) * -1;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "inc-exp-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", null, "Income"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "money plus"
  }, moneyFormatter(income))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", null, "Expense"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "money minus"
  }, moneyFormatter(expense))));
}

/* harmony default export */ __webpack_exports__["default"] = (IncomeExpenses);

/***/ }),

/***/ "./src/components/Transaction.js":
/*!***************************************!*\
  !*** ./src/components/Transaction.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/GlobalState */ "./src/context/GlobalState.js");




function Transaction({
  transaction
}) {
  const {
    deleteTransaction
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalState__WEBPACK_IMPORTED_MODULE_2__["GlobalContext"]);
  const sign = transaction.amount < 0 ? '-' : '+';
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
    className: "{ transaction.amount < 0 ? 'minus' : 'plus  }"
  }, transaction.text, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, sign, transaction.amount), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    onClick: () => deleteTransaction(transaction.id)
  }, "X"));
}

/* harmony default export */ __webpack_exports__["default"] = (Transaction);

/***/ }),

/***/ "./src/components/TransactionList.js":
/*!*******************************************!*\
  !*** ./src/components/TransactionList.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Transaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Transaction */ "./src/components/Transaction.js");
/* harmony import */ var _context_GlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/GlobalState */ "./src/context/GlobalState.js");





function TransactionList() {
  const {
    transactions
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_GlobalState__WEBPACK_IMPORTED_MODULE_3__["GlobalContext"]);
  console.log(transactions);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "History"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    className: "list"
  }, transactions.map(transaction => Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_Transaction__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: transaction.id,
    transaction: transaction
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (TransactionList);

/***/ }),

/***/ "./src/context/AppReducer.js":
/*!***********************************!*\
  !*** ./src/context/AppReducer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return { ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      };

    case 'ADD_TRANSACTION':
      return { ...state,
        transactions: [action.payload, ...state.transactions]
      };

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/context/GlobalState.js":
/*!************************************!*\
  !*** ./src/context/GlobalState.js ***!
  \************************************/
/*! exports provided: GlobalContext, GlobalProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalContext", function() { return GlobalContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalProvider", function() { return GlobalProvider; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AppReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AppReducer */ "./src/context/AppReducer.js");



const initialState = {
  transactions: []
};
const GlobalContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(initialState);

const GlobalProvider = ({
  children
}) => {
  const [state, dispatch] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_AppReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState);

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  function moneyFormatter(num) {
    let p = num.toFixed(2).split('.');
    return '$ ' + p[0].split('').reverse().reduce(function (acc, num, i, orig) {
      return num === '-' ? acc : num + (i && !(i % 3) ? ', ' : '') + acc;
    }, '') + '.' + p[1];
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(GlobalContext.Provider, {
    value: {
      transactions: state.transactions,
      deleteTransaction,
      addTransaction,
      moneyFormatter
    }
  }, children);
};



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.js");



Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_App__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById('expense-tracker'));

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=main.js.map