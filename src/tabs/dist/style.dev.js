"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vertical = exports.Horizontal = exports.ControlStateTabC = exports.StatusTabC = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _horizont = require("../assets/icon/horizont.svg");

var _vertical = require("../assets/icon/vertical.svg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nz-index: 3;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nz-index: 3;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nwidth: 160px;\nheight: 100%;\npadding: 0px;\nbox-sizing: border-box;\nbackground: #FFFFFF;\nborder-left: 1px solid #E5E5E5;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n.tabs{\n    width: 97px;\n    height: 48px;\n    background: #EDEFF3;\n    border-radius: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 10px;\n}\n.css-1t4lqmc-MuiButtonBase-root-MuiTab-root{\nmin-width: 0px;\nmin-height: 0px;\nwidth: 36px;\nheight: 36px;\npadding: 10px;\nborder: none;\nborder-radius: 18px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ncursor: pointer;\nbackground-color: #EDEFF3;\nbox-sizing: border-box;\n}\n.css-1aquho2-MuiTabs-indicator{\n    width: 100%;\n    height: 100%;\n    box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);\n    border-radius: 18px;\n    background-color: #fff;\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nwidth: 50%;\nheight: 45px;\nbackground: #EDEFF3;\nborder-radius: 24px;\nmargin: 0px auto;\n.tabs{\n    width: 100%;\n    height: 100%;\n    padding: 15px !important;\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.css-1h9z7r5-MuiButtonBase-root-MuiTab-root{\nmin-width: 0px;\nmin-height: 0px;\nwidth: 24%;\nheight: 100%;\npadding: 8px;\nmargin: auto 3px;\nbox-sizing: border-box;\nborder: none;\nborder-radius: 18px;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\ncursor: pointer;\nbackground-color: #EDEFF3;\nfont-style: none;\nline-height: 16px;\n}\n.text{\n    font-family: 'SFProDisplay';\n    font-size: 12px;\n    text-transform: capitalize;\n    line-height: 16px;\n    color: #2D3A45;\n    mix-blend-mode: normal;\n    opacity: 0.9;\n    z-index: 10;\n}\n.css-1aquho2-MuiTabs-indicator{\n    width: 100%;\n    height: 100%;\n    box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);\n    border-radius: 18px;\n    background-color: #fff;\n    z-index: 3;\n    color: #2D3A45;\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StatusTabC = _styledComponents["default"].div(_templateObject());

exports.StatusTabC = StatusTabC;

var ControlStateTabC = _styledComponents["default"].div(_templateObject2());

exports.ControlStateTabC = ControlStateTabC;
var Horizontal = (0, _styledComponents["default"])(_horizont.ReactComponent)(_templateObject3());
exports.Horizontal = Horizontal;
var Vertical = (0, _styledComponents["default"])(_vertical.ReactComponent)(_templateObject4());
exports.Vertical = Vertical;