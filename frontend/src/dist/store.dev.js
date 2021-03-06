"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _productReducers = require("./reducers/productReducers");

var _cartReducers = require("./reducers/cartReducers");

var _userReducers = require("./reducers/userReducers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cartItems = _jsCookie["default"].getJSON("cartItems") || [];
var userInfo = _jsCookie["default"].getJSON("userInfo") || null;
var initialState = {
  cart: {
    cartItems: cartItems,
    shipping: {},
    payment: {}
  },
  userSignin: {
    userInfo: userInfo
  }
};
var reducer = (0, _redux.combineReducers)({
  productList: _productReducers.productListReducer,
  productDetails: _productReducers.productDetailsReducer,
  cart: _cartReducers.cartReducer,
  userSignin: _userReducers.userSigninReducer,
  userRegister: _userReducers.userRegisterReducer,
  productSave: _productReducers.productSaveReducer,
  productDelete: _productReducers.productDeleteReducer
});
var composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var store = (0, _redux.createStore)(reducer, initialState, composeEnhancer((0, _redux.applyMiddleware)(_reduxThunk["default"])));
var _default = store;
exports["default"] = _default;