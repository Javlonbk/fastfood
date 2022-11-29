"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsC = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n   width: 200px;\n    display: flex;\n    align-items: center;\n    height: 100%;\n    padding-left:30px;\n    box-sizing: border-box;\n    border-left: 1px solid #E5E5E5;\n    border-right: 1px solid #E5E5E5;\n    p{\n      font-size: 12px;\n      line-height: 16px;\n      color: #2D3A45;\n      margin-left: 12px;\n    }\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width:100%;\n    height: 70px;\n    background-color: #fff;\n    display: flex;\n    align-items: center;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n   width: 100%;\n   height: 35px;\n   margin: 20px 0px;\n   background-color: #fff;\n   display: flex;\n   justify-content: space-around;\n   align-items: baseline; \n   font-size: 11px;\n   padding: 7px 10px;\n   box-sizing: border-box;   \n   box-shadow: 0px  3px 6px rgba(141, 155, 168, 0.35895);\n   p{\n      color: #2D3A45;\n   }\n   "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n   width: calc(100% - 300px);\n   margin: 0px;\n   box-sizing: border-box;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductsC = _styledComponents["default"].div(_templateObject());

exports.ProductsC = ProductsC;
ProductsC.Menu = _styledComponents["default"].div(_templateObject2());
ProductsC.Header = _styledComponents["default"].div(_templateObject3());
ProductsC.Add = _styledComponents["default"].div(_templateObject4());