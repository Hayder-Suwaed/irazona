"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFromCart = exports.addToCart = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _cartConstants = require("../constants/cartConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addToCart = function addToCart(productId, qty) {
  return function _callee(dispatch, getState) {
    var _ref, data, _getState, cartItems;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].get("/api/products/" + productId));

          case 3:
            _ref = _context.sent;
            data = _ref.data;
            dispatch({
              type: _cartConstants.CART_ADD_ITEM,
              payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty: qty
              }
            });
            _getState = getState(), cartItems = _getState.cart.cartItems;

            _jsCookie["default"].set("cartItems", JSON.stringify(cartItems));

            _context.next = 12;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 10]]);
  };
};

exports.addToCart = addToCart;

var removeFromCart = function removeFromCart(productId) {
  return function (dispatch, getState) {
    dispatch({
      type: _cartConstants.CART_REMOVE_ITEM,
      payload: productId
    });

    var _getState2 = getState(),
        cartItems = _getState2.cart.cartItems;

    _jsCookie["default"].set("cartItems", JSON.stringify(cartItems));
  };
};

exports.removeFromCart = removeFromCart;