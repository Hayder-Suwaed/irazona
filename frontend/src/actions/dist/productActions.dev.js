"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProdcut = exports.saveProduct = exports.detailsProduct = exports.listProducts = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _productConstants = require("../constants/productConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _require = require("axios"),
    Axios = _require["default"];

var _require2 = require("../constants/productConstants"),
    PRODUCT_LIST_REQUEST = _require2.PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS = _require2.PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL = _require2.PRODUCT_LIST_FAIL;

var listProducts = function listProducts() {
  return function _callee(dispatch) {
    var _ref, data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            dispatch({
              type: PRODUCT_LIST_REQUEST
            });
            _context.next = 4;
            return regeneratorRuntime.awrap(Axios.get("/api/products"));

          case 4:
            _ref = _context.sent;
            data = _ref.data;
            dispatch({
              type: PRODUCT_LIST_SUCCESS,
              payload: data
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: PRODUCT_LIST_FAIL,
              payload: _context.t0.message
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.listProducts = listProducts;

var saveProduct = function saveProduct(product) {
  return function _callee2(dispatch, getState) {
    var _getState, userInfo, _ref2, data, _ref3, _data;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            dispatch({
              type: _productConstants.PRODUCT_SAVE_REQUEST,
              payload: product
            });
            _getState = getState(), userInfo = _getState.userSignin.userInfo;

            if (product._id) {
              _context2.next = 11;
              break;
            }

            _context2.next = 6;
            return regeneratorRuntime.awrap(Axios.post('/api/products', product, {
              headers: {
                'Authorization': 'Bearer ' + userInfo.token
              }
            }));

          case 6:
            _ref2 = _context2.sent;
            data = _ref2.data;
            dispatch({
              type: _productConstants.PRODUCT_SAVE_SUCCESS,
              payload: data
            });
            _context2.next = 16;
            break;

          case 11:
            _context2.next = 13;
            return regeneratorRuntime.awrap(Axios.put('/api/products/' + product._id, product, {
              headers: {
                'Authorization': 'Bearer ' + userInfo.token
              }
            }));

          case 13:
            _ref3 = _context2.sent;
            _data = _ref3.data;
            dispatch({
              type: _productConstants.PRODUCT_SAVE_SUCCESS,
              payload: _data
            });

          case 16:
            _context2.next = 21;
            break;

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](0);
            dispatch({
              type: _productConstants.PRODUCT_SAVE_FAIL,
              payload: _context2.t0.message
            });

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 18]]);
  };
};

exports.saveProduct = saveProduct;

var detailsProduct = function detailsProduct(productId) {
  return function _callee3(dispatch) {
    var _ref4, data;

    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            dispatch({
              type: _productConstants.PRODUCT_DETAILS_REQUEST,
              payload: productId
            });
            _context3.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("/api/products/" + productId));

          case 4:
            _ref4 = _context3.sent;
            data = _ref4.data;
            dispatch({
              type: _productConstants.PRODUCT_DETAILS_SUCCESS,
              payload: data
            });
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            dispatch({
              type: PRODUCT_LIST_FAIL,
              payoad: _context3.t0.message
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 9]]);
  };
};

exports.detailsProduct = detailsProduct;

var deleteProdcut = function deleteProdcut(productId) {
  return function _callee4(dispatch, getState) {
    var _getState2, userInfo, _ref5, data;

    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _getState2 = getState(), userInfo = _getState2.userSignin.userInfo;
            dispatch({
              type: _productConstants.PRODUCT_DELETE_REQUEST,
              payload: productId
            });
            _context4.next = 5;
            return regeneratorRuntime.awrap(_axios["default"]["delete"]("/api/products/" + productId, {
              headers: {
                Authorization: 'Bearer ' + userInfo.token
              }
            }));

          case 5:
            _ref5 = _context4.sent;
            data = _ref5.data;
            dispatch({
              type: _productConstants.PRODUCT_DELETE_SUCCESS,
              payload: data,
              success: true
            });
            _context4.next = 13;
            break;

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            dispatch({
              type: _productConstants.PRODUCT_DELETE_FAIL,
              payload: _context4.t0.message
            });

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 10]]);
  };
};

exports.deleteProdcut = deleteProdcut;