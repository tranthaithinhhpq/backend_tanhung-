"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _clientApiRoutes = _interopRequireDefault(require("./clientApiRoutes.js"));
var _adminApiRoutes = _interopRequireDefault(require("./adminApiRoutes"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var initApiRoutes = function initApiRoutes(app) {
  var router = _express["default"].Router();

  // Mount client routes (public)
  router.use('/', _clientApiRoutes["default"]);

  // Mount admin routes (protected inside admin file)
  router.use('/', _adminApiRoutes["default"]);
  app.use('/api/v1', router);
};
var _default = exports["default"] = initApiRoutes;