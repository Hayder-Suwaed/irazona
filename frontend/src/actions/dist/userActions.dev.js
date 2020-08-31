"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = exports.signin = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _jsCookie = _interopRequireDefault(require("js-cookie"));

var _userConstants = require("../constants/userConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var signin = function signin(email, password) {
  return function _callee(dispatch) {
    var _ref, data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch({
              type: _userConstants.USER_SIGNIN_REQUEST,
              payload: {
                email: email,
                password: password
              }
            });
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post("/api/users/signin", {
              email: email,
              password: password
            }));

          case 4:
            _ref = _context.sent;
            data = _ref.data;
            dispatch({
              type: _userConstants.USER_SIGNIN_SUCCESS,
              payload: data
            });

            _jsCookie["default"].set("userInfo", JSON.stringify(data));

            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            dispatch({
              type: _userConstants.USER_SIGNIN_FAIL,
              payload: _context.t0.message
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 10]]);
  };
};

exports.signin = signin;

var register = function register(name, email, password) {
  return function _callee2(dispatch) {
    var _ref2, data;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch({
              type: _userConstants.USER_REGISTER_REQUEST,
              payload: {
                name: name,
                email: email,
                password: password
              }
            });
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post("/api/users/register", {
              name: name,
              email: email,
              password: password
            }));

          case 4:
            _ref2 = _context2.sent;
            data = _ref2.data;
            dispatch({
              type: _userConstants.USER_REGISTER_SUCCESS,
              payload: data
            });

            _jsCookie["default"].set("userInfo", JSON.stringify(data));

            _context2.next = 13;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](1);
            dispatch({
              type: _userConstants.USER_REGISTER_FAIL,
              payload: _context2.t0.message
            });

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 10]]);
  };
};

exports.register = register;