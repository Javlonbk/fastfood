"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CategoryListC = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px 40px;\n  min-height: calc(100vh - 150px);\n  box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var CategoryListC = _styledComponents["default"].div(_templateObject());

exports.CategoryListC = CategoryListC;