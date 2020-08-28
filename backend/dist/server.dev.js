"use strict";

var _express = _interopRequireDefault(require("express"));

var _data = _interopRequireDefault(require("./data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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