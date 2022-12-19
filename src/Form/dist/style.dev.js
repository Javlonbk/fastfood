"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddNew = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n   width: 100%;\n   height: 100%;\n   padding: 10px;\n   overflow-y: hidden;\n   padding-top: 0px;\n   box-sizing: border-box;\n   position: relative;\n   label{\n    display: block;\n    margin-bottom: 5px; \n    margin-top: 15px;\n    font-size: 16px;\n    line-height: 18px;\n    letter-spacing: 0.4px;\n    color: #2D3A45;\n    opacity: 0.6;     \n   }\n   input, select{\n    width: 100%;\n    border: 1px solid #EDEFF3;\n    border-radius: 6px;\n    padding: 10px 14px;\n    box-sizing: border-box;\n    font-size: 12px;\n    line-height: 18px;\n    letter-spacing: 0.4px;\n    color: #2D3A45;\n    ::placeholder{\n        font-size: 12px;\n        line-height: 18px;\n        letter-spacing: 0.4px;\n        opacity: 0.6;\n        color: #2D3A45;\n    }\n   }\n   button{\n    width: 115px;\n    height: 35px;\n    background: #20D472;\n    border-radius: 4px;\n    font-size: 14px;\n    line-height: 18px;\n    color: #fff;\n    letter-spacing: 0.5px;\n    border: none;\n    position: absolute;\n    bottom: 10px;\n    left: 20px;\n   }\n   .workingTime{\n    display: flex;\n    align-items: center;\n    input{\n        width: 80px;\n        height: 35px;\n        border: 1px solid #EDEFF3;\n        border-radius: 5px;\n        outline: none;\n        font-size: 12px;\n        line-height: 18px;\n        letter-spacing: 0.4px;\n        color: #2D3A45;\n\n    }\n    .line{\n        width: 22px;\n        height: 1px;\n        opacity: 0.3;\n        border: 1px solid #979797;        \n    }\n   }\n   \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AddNew = _styledComponents["default"].div(_templateObject());

exports.AddNew = AddNew;