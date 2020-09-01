"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _productModel = _interopRequireDefault(require("../models/productModel"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get("/", function _callee(req, res) {
  var products;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_productModel["default"].find({}));

        case 2:
          products = _context.sent;
          res.send(products);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.put("/:id", _util.isAuth, _util.isAdmin, function _callee2(req, res) {
  var productId, product, updatedProduct;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          productId = req.params.id;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_productModel["default"].findById(productId));

        case 3:
          product = _context2.sent;

          if (!product) {
            _context2.next = 17;
            break;
          }

          product.name = req.body.name;
          product.price = req.body.price;
          product.image = req.body.image;
          product.brand = req.body.brand;
          product.category = req.body.category;
          product.countInStock = req.body.countInStock;
          product.description = req.body.description;
          _context2.next = 14;
          return regeneratorRuntime.awrap(product.save());

        case 14:
          updatedProduct = _context2.sent;

          if (!updatedProduct) {
            _context2.next = 17;
            break;
          }

          return _context2.abrupt("return", res.status(200).send({
            message: 'Product Updated',
            data: updatedProduct
          }));

        case 17:
          return _context2.abrupt("return", res.status(500).send({
            message: ' Error in Updating Product.'
          }));

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router["delete"]("/:id", _util.isAuth, _util.isAdmin, function _callee3(req, res) {
  var deletedProduct;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_productModel["default"].findById(req.params.id));

        case 2:
          deletedProduct = _context3.sent;

          if (!deletedProduct) {
            _context3.next = 9;
            break;
          }

          _context3.next = 6;
          return regeneratorRuntime.awrap(deletedProduct.remove());

        case 6:
          res.send({
            message: "Product Deleted"
          });
          _context3.next = 10;
          break;

        case 9:
          res.send("Error in Deletion.");

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.post("/", _util.isAuth, _util.isAdmin, function _callee4(req, res) {
  var product, newProduct;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          product = new _productModel["default"]({
            name: req.body.name,
            price: req.body.price,
            image: req.body.image,
            brand: req.body.brand,
            category: req.body.category,
            countInStock: req.body.countInStock,
            description: req.body.description,
            rating: req.body.rating,
            numReviews: req.body.numReviews
          });
          _context4.next = 3;
          return regeneratorRuntime.awrap(product.save());

        case 3:
          newProduct = _context4.sent;

          if (!newProduct) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return", res.status(201).send({
            message: 'New Product Created',
            data: newProduct
          }));

        case 6:
          return _context4.abrupt("return", res.status(500).send({
            message: ' Error in Creating Product.'
          }));

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
});
var _default = router;
exports["default"] = _default;