"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSigninReducer = userSigninReducer;
exports.userRegisterReducer = userRegisterReducer;

var _userConstants = require("../constants/userConstants");

function userSigninReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _userConstants.USER_SIGNIN_REQUEST:
      return {
        loading: true
      };

    case _userConstants.USER_SIGNIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload
      };

    case _userConstants.USER_SIGNIN_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}

function userRegisterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _userConstants.USER_REGISTER_REQUEST:
      return {
        loading: true
      };

    case _userConstants.USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload
      };

    case _userConstants.USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
}