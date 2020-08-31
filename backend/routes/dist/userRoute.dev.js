"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userModel = _interopRequireDefault(require("../models/userModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post("/signin", function _callee(req, res) {
  var signinUser;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            email: req.body.email,
            password: req.body.password
          }));

        case 2:
          signinUser = _context.sent;

          if (signinUser) {
            res.send({
              _id: signinUser.id,
              name: signinUser.name,
              email: signinUser.email,
              isAdmin: signinUser.isAdmin,
              token: getToken(user)
            });
          } else {
            res.status(401).send({
              msg: "Invalid Email or Password."
            });
          }

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.get("/createadmin", function _callee2(req, res) {
  var _user, newUser;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _user = new _userModel["default"]({
            name: "Haider",
            email: "haidersuwaed@gmail.com",
            password: "1234",
            isAdmin: true
          });
          _context2.next = 4;
          return regeneratorRuntime.awrap(_user.save());

        case 4:
          newUser = _context2.sent;
          res.send(newUser);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.send({
            msg: _context2.t0.message
          });

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
});
var _default = router;
exports["default"] = _default;