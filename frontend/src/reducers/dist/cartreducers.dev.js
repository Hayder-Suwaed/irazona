"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cartReducer = cartReducer;

var _cartConstants = require("../constants/cartConstants");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function cartReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    cartItems: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _cartConstants.CART_ADD_ITEM:
      var item = action.payload;
      var product = state.cartItems.find(function (x) {
        return x.product === item.product;
      });

      if (product) {
        return {
          cartItems: state.cartItems.map(function (x) {
            return x.product === product.product ? item : x;
          })
        };
      }

      return {
        cartItems: [].concat(_toConsumableArray(state.cartItems), [item])
      };

    case _cartConstants.CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter(function (x) {
          return x.product !== action.payload;
        })
      };

    default:
      return state;
  }
}