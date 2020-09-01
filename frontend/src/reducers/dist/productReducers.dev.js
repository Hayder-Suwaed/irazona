"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productListReducer = productListReducer;
exports.productDetailsReducer = productDetailsReducer;
exports.productSaveReducer = productSaveReducer;
exports.productDeleteReducer = productDeleteReducer;

var _productConstants = require("../constants/productConstants");

function productListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    products: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _productConstants.PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: []
      };

    case _productConstants.PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload
      };

    case _productConstants.PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}

function productDetailsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    product: {}
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _productConstants.PRODUCT_DETAILS_REQUEST:
      return {
        loading: true
      };

    case _productConstants.PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload
      };

    case _productConstants.PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}

function productDeleteReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    product: {}
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _productConstants.PRODUCT_DELETE_REQUEST:
      return {
        loading: true
      };

    case _productConstants.PRODUCT_DELETE_SUCCESS:
      return {
        loading: false,
        product: action.payload,
        success: true
      };

    case _productConstants.PRODUCT_DELETE_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}

function productSaveReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    product: {}
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _productConstants.PRODUCT_SAVE_REQUEST:
      return {
        loading: true
      };

    case _productConstants.PRODUCT_SAVE_SUCCESS:
      return {
        loading: false,
        success: true,
        product: action.payload
      };

    case _productConstants.PRODUCT_SAVE_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}