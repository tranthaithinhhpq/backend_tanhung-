"use strict";

require("dotenv/config");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var nonSecurePaths = ['/logout', '/login', '/register'];
var createJWT = function createJWT(payload) {
  var key = process.env.JWT_SECRET;
  var token = null;
  try {
    token = _jsonwebtoken["default"].sign(payload, key, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });
  } catch (err) {
    console.log(err);
  }
  return token;
};
var verifyToken = function verifyToken(token) {
  var key = process.env.JWT_SECRET;
  var decoded = null;
  try {
    decoded = _jsonwebtoken["default"].verify(token, key);
  } catch (err) {
    console.log(err);
  }
  return decoded;
};
var extractToken = function extractToken(req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }
  return null;
};
var checkUserJWT = function checkUserJWT(req, res, next) {
  if (nonSecurePaths.includes(req.path)) return next();
  var cookies = req.cookies;
  var tokenFromHeader = extractToken(req);
  if (cookies && cookies.jwt || tokenFromHeader) {
    var token = cookies && cookies.jwt ? cookies.jwt : tokenFromHeader;
    var decoded = verifyToken(token);
    if (decoded) {
      req.user = decoded;
      req.token = token;
      next();
    } else {
      return res.status(401).json({
        EC: -1,
        DT: '',
        EM: 'Not authenticated the user'
      });
    }
  } else {
    return res.status(401).json({
      EC: -1,
      DT: '',
      EM: 'Not authenticated the user'
    });
  }
};
var checkUserPermission = function checkUserPermission(req, res, next) {
  if (nonSecurePaths.includes(req.path) || req.path === '/account') return next();
  if (nonSecurePaths.includes(req.path)) return next();
  if (req.user) {
    var email = req.user.email;
    var roles = req.user.groupWithRoles.Roles;
    var currentUrl = req.path;
    if (!roles || roles.length === 0) {
      return res.status(403).json({
        EC: -1,
        DT: '',
        EM: 'You don\'t have permission to access this resource...'
      });
    }
    var canAccess = roles.some(function (item) {
      return item.url === currentUrl || currentUrl.includes(item.url);
    });
    if (canAccess === true) {
      next();
    } else {
      return res.status(403).json({
        EC: -1,
        DT: '',
        EM: 'You don\'t have permission to access this resource...'
      });
    }
  } else {
    return res.status(401).json({
      EC: -1,
      DT: '',
      EM: 'Not authenticated the user'
    });
  }
};
module.exports = {
  createJWT: createJWT,
  verifyToken: verifyToken,
  checkUserJWT: checkUserJWT,
  checkUserPermission: checkUserPermission
};