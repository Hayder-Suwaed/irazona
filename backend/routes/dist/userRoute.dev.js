"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userModel = _interopRequireDefault(require("../models/userModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/createadmin", function _callee(req, res) {
  var user, newUser;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          user = new _userModel["default"]({
            name: "Haider",
            email: "haidersuwaed@gmail.com",
            password: "1234",
            isAdmin: true
          });
          _context.next = 4;
          return regeneratorRuntime.awrap(user.save());

        case 4:
          newUser = _context.sent;
          res.send(newUser);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          res.send({
            msg: _context.t0.message
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
var _default = router;
exports["default"] = _default;