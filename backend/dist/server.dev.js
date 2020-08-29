"use strict";

var _express = _interopRequireDefault(require("express"));

var _data = _interopRequireDefault(require("./data"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _config = _interopRequireDefault(require("./config"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var mongodbUrl = _config["default"].MONGODB_URL;

_mongoose["default"].connect(mongodbUrl, {
  useNewUrlParser: true
})["catch"](function (error) {
  return console.log(error.reason);
});

var app = (0, _express["default"])();
app.get("/api/products/:id", function (req, res) {
  var productId = req.params.id;

  var product = _data["default"].products.find(function (x) {
    return x._id === productId;
  });

  if (product) res.send(product);else res.status(404).send({
    msg: "Product Not Found."
  });
});
app.get("/api/products", function (req, res) {
  res.send(_data["default"].products);
});
app.listen(5000, function () {
  return console.log("Server started at http://localhost:5000");
});