"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BranchesItemC = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   :hover{\n    cursor: pointer;\n   }\n\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 25px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width:100%;\n  height: 60px;\n  padding: 10px 20px;\n  background-color: #fff;\n  margin: 5px 0px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  text-align: left; \n  font-size: 13px;\n  line-height: 15px;\n  color: #2D3A45;  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BranchesItemC = _styledComponents["default"].div(_templateObject());

exports.BranchesItemC = BranchesItemC;
BranchesItemC.Name = _styledComponents["default"].p(_templateObject2());
BranchesItemC.Branches = _styledComponents["default"].p(_templateObject3());
BranchesItemC.Target = _styledComponents["default"].p(_templateObject4());
BranchesItemC.Time = _styledComponents["default"].p(_templateObject5());
BranchesItemC.Action = _styledComponents["default"].div(_templateObject6());