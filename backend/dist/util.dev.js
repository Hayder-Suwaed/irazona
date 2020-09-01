"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAuth = exports.isAdmin = exports.getToken = void 0;

var _jsonwebtoken = _interopRequireWildcard(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getToken = function getToken(user) {
  return _jsonwebtoken["default"].sign({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin
  }, _config["default"].JWT_SECRET, {
    expiresIn: "48h"
  });
};

exports.getToken = getToken;

var isAuth = function isAuth(req, res, next) {
  var token = req.headers.authorization;

  if (token) {
    var onlyToken = token.slice(7, token.length);

    _jsonwebtoken["default"].verify(onlyToken, _config["default"].JWT_SECRET, function (err, decode) {
      if (err) {
        return res.status(401).send({
          msg: "Invalid Token"
        });
      }

      req.user = token;
      next();
      return;
    });
  }

  return res.status(401).send({
    msg: "Token is not supplied."
  });
};

exports.isAuth = isAuth;

var isAdmin = function isAdmin(req, res, next) {
  if (req.user && req.user.isAdmin) {
    return next();
  }

  return res.status(401).send({
    msg: "Admin Token is not valid."
  });
};

exports.isAdmin = isAdmin;