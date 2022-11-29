"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogOutIcon = exports.NavItems = exports.SidebarC = void 0;

var _reactRouterDom = require("react-router-dom");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _logo = require("../../assets/icon/logo.svg");

var _logOut = require("../../assets/icon/log-out.svg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject11() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  margin-right: 24px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  color: black;\n  padding: 8px;\n  box-sizing: border-box;\n  background: #F6F6F6;\n  border-radius: 6px;\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n   font-family: 'SFProDisplay';\n   height: 50px;\n   font-size: 15px;\n   line-height: 18px;\n   color: #2D3A45;\n   padding: 10px 40px;\n   display: flex;\n   align-items: center;\n   box-sizing: border-box;\n   \n   :hover{\n     cursor: pointer;\n     background: #FCB600;\n     border-radius: 0px 6px 6px 0px;\n     color: #fff;\n   }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n   margin-right: 24px;\n   margin-top: 38px;\n   display: flex;\n   flex-direction: column;\n   border-left:2px solid #FCB600;;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n   font-family: 'SFProDisplay';\n   font-size: 12px;\n   line-height: 14px;\n   text-align: center;\n   color: #2D3A45;\n   mix-blend-mode: normal;\n   opacity: 0.5;\n   display: block;\n   margin-top: 5px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n   font-family: 'SFProDisplay';\n   font-size: 16px;   \n   line-height: 19px;\n   color: #2D3A45;\n   margin-left: 20px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n   width: 70px;\n   height: 70px;\n   border-radius: 50%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n display: flex;\n align-items: center;\n margin: 0px 24px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width:300px;\n  min-height:100vh;\n  box-sizing:border-box;\n  background-color:#fff;\n  padding:28px 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  .active{\n      cursor: pointer;\n     background: #FCB600;\n     border-radius: 0px 6px 6px 0px;\n     color: #fff;\n   }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SidebarC = _styledComponents["default"].div(_templateObject());

exports.SidebarC = SidebarC;
SidebarC.Menus = _styledComponents["default"].div(_templateObject2());
SidebarC.LogoName = _styledComponents["default"].div(_templateObject3());
SidebarC.LogoName.Logo = (0, _styledComponents["default"])(_logo.ReactComponent)(_templateObject4());
SidebarC.LogoName.Name = _styledComponents["default"].h3(_templateObject5());
SidebarC.LogoName.Name.NameDef = _styledComponents["default"].span(_templateObject6());
SidebarC.Navbar = _styledComponents["default"].div(_templateObject7());
var NavItems = (0, _styledComponents["default"])(_reactRouterDom.NavLink)(_templateObject8());
exports.NavItems = NavItems;
NavItems.Icon = _styledComponents["default"].div(_templateObject9());
SidebarC.LogOut = _styledComponents["default"].div(_templateObject10());
var LogOutIcon = (0, _styledComponents["default"])(_logOut.ReactComponent)(_templateObject11());
exports.LogOutIcon = LogOutIcon;