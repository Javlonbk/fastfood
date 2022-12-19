"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderListC = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n   width: 100%;\n   height: calc(100vh - 150px);\n   padding: 30px 35px;\n   display: flex;\n   flex-wrap: wrap;\n   flex-direction: ", ";\n   justify-content: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrderListC = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.direction ? 'row' : 'comumn';
}, function (props) {
  return !props.direction ? 'space-between' : null;
});

exports.OrderListC = OrderListC;