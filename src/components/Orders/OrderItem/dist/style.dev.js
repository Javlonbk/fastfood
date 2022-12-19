"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderItemC = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _bookmark = require("../../../assets/icon/bookmark.svg");

var _clock = require("../../../assets/icon/clock.svg");

var _user = require("../../../assets/icon/user.svg");

var _Path = require("../../../assets/icon/Path.svg");

var _truck = require("../../../assets/icon/truck.svg");

var _clipboard = require("../../../assets/icon/clipboard.svg");

var _x = require("../../../assets/icon/x.svg");

var _tick = require("../../../assets/icon/tick.svg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject12() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n        position: absolute;\n        width: 40px;\n        height: 40px;\n        right: -20px;\n        top: ", ";\n        background: #FFFFFF;\n        box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);\n        border-radius: 20px;  \n        display:flex;\n        justify-content:center;\n        align-items: center;\n        :hover{\n          cursor: pointer;\n        }\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n     margin-right: 12px;\n     display: ", ";\n "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n     margin-right: 20px;\n "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    margin-right: ", ";\n    width: ", ";\n    height: ", ";\n "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    width: ", ";\n    height: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    background: #EDEFF3;\n    border-radius: 18px;\n    width: ", ";\n    height: ", ";\n    display: flex;\n    justify-content: center;\n    align-items: center !important;\n    margin: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: ", ";\n  width: ", ";\n  padding: 15px 0px;\n  padding-top: ", ";\n  color: #2D3A45;\n  padding-left: ", ";\n  display: ", ";\n  flex-wrap: wrap;\n  align-items: center;\n  border-top: ", ";\n  border-right: ", ";\n  :nth-child(4){\n    border: none;\n    border-top:  ", ";;\n  }\n  :nth-child(1){\n     width: ", ";\n     border-top:  ", ";\n     flex-wrap: nowrap;\n     padding-top: ", ";\n    }\n  .id{\n    padding:  5px 12px;\n    background: #20D472;\n    border-radius: 18px;\n    letter-spacing: 0.6px;\n    color: #FFFFFF;\n    font-size: ", ";\n  }\n  .container{\n    margin-left: 0px;\n    display: flex;\n    align-items: ", ";\n    padding: 0px;\n  }\n  p{\n    font-size: ", ";\n    color: #2D3A45;\n    display: flex;\n    align-items: center;\n  }\n  .time{\n    margin: 0px;\n    margin-top: ", "; \n    align-items: center;\n    display: flex;\n  }\n  .customer{\n    width: 100%;\n    display: flex;\n  }\n  .customer p{\n    font-size: ", ";\n    font-weight: bold;\n    line-height: 19px;\n  }\n  .phone{\n    font-size: ", ";\n    letter-spacing: 0.5px;\n    margin-top: ", ";\n    margin-left: ", ";\n    display: flex;\n    align-items: center;\n  }\n  .price span{\n    margin-left: 10px;\n  }\n  .price{\n    margin-bottom: 10px;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    letter-spacing: 0.5px;\n     display: ", ";\n  }\n  .allPrice{\n    margin-top: ", ";\n    display: block;\n    font-size: ", ";\n    font-weight: bold;\n    margin-bottom: 0px;\n  }\n  .allPrice span, .operator span{\n    letter-spacing: 0.366667px;\n    color: #8D9BA8;\n    font-size: ", ";\n    display: block;\n    font-weight: normal;\n  }\n  .operator{\n    display: block;\n    font-size: ", ";\n    font-weight: bold;\n    :nth-child(1){\n    margin-bottom: ", ";\n    } \n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n   width: ", ";\n   height: ", ";\n   margin: 12px 0px;\n   background-color: #fff;\n   box-sizing: border-box;\n   box-shadow: 0px 2px 2px rgba(174, 176, 181, 0.314986);\n   border-radius: 6px;\n   display: flex;\n   flex-wrap: wrap;\n   flex-direction: ", ";\n   position: relative;\n   padding: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var OrderItemC = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.direction ? '230px' : '100%';
}, function (props) {
  return props.direction ? '350px' : '150px';
}, function (props) {
  return props.direction ? 'column' : 'row';
}, function (props) {
  return props.direction ? '20px' : null;
});

exports.OrderItemC = OrderItemC;
OrderItemC.Column = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.direction ? 'auto' : '100%';
}, function (props) {
  return props.direction ? '100%' : '25%';
}, function (props) {
  return props.direction ? '15px' : '15px';
}, function (props) {
  return props.direction ? '0px' : '35px';
}, function (props) {
  return props.direction ? 'flex' : null;
}, function (props) {
  return props.direction ? '1px solid #EDEFF3' : null;
}, function (props) {
  return !props.direction ? '1px solid #EDEFF3' : null;
}, function (props) {
  return props.direction ? '1px solid #EDEFF3' : null;
}, function (props) {
  return props.direction ? '100%' : '20%';
}, function (props) {
  return props.direction ? 'none' : null;
}, function (props) {
  return props.direction ? '0px' : '15px';
}, function (props) {
  return props.direction ? '12px' : '16px';
}, function (props) {
  return props.direction ? 'center' : null;
}, function (props) {
  return props.direction ? '12px' : '16px';
}, function (props) {
  return props.direction ? null : '30px';
}, function (props) {
  return props.direction ? '14px' : '18px';
}, function (props) {
  return props.direction ? '10px' : '12px';
}, function (props) {
  return props.direction ? '-10px' : '10px';
}, function (props) {
  return props.direction ? '30px' : '0px';
}, function (props) {
  return !props.direction ? 'block' : 'none';
}, function (props) {
  return props.direction ? '0px' : '15px';
}, function (props) {
  return props.direction ? '14px' : '18px';
}, function (props) {
  return props.direction ? '10px' : '11px';
}, function (props) {
  return props.direction ? '12px' : '14px';
}, function (props) {
  return props.direction ? '10px' : '30px';
});
OrderItemC.BookmarkIconDiv = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.direction ? '30px' : '36px';
}, function (props) {
  return props.direction ? '30px' : '36px';
}, function (props) {
  return props.direction ? '0px 10px' : '0px 0px  0px 20px';
});
OrderItemC.BookmarkIcon = (0, _styledComponents["default"])(_bookmark.ReactComponent)(_templateObject4(), function (props) {
  return props.direction ? '12px' : '15px';
}, function (props) {
  return props.direction ? '14px' : ' 18px';
});
OrderItemC.ClockIcon = (0, _styledComponents["default"])(_clock.ReactComponent)(_templateObject5(), function (props) {
  return props.direction ? '5px' : '12px';
}, function (props) {
  return props.direction ? '14px' : '18px';
}, function (props) {
  return props.direction ? '14px' : '18px';
});
OrderItemC.UserIcon = (0, _styledComponents["default"])(_user.ReactComponent)(_templateObject6());
OrderItemC.PathIcon = (0, _styledComponents["default"])(_Path.ReactComponent)(_templateObject7(), function (props) {
  return props.direction ? 'none' : 'block';
});
OrderItemC.TruckIcon = (0, _styledComponents["default"])(_truck.ReactComponent)(_templateObject8());
OrderItemC.ClipboardIcon = (0, _styledComponents["default"])(_clipboard.ReactComponent)(_templateObject9());
OrderItemC.Action = _styledComponents["default"].div(_templateObject10(), function (props) {
  return props.deleter ? "25px" : "85px";
});
OrderItemC.DeleteOrderIcon = (0, _styledComponents["default"])(_x.ReactComponent)(_templateObject11());
OrderItemC.SaveOrderIcon = (0, _styledComponents["default"])(_tick.ReactComponent)(_templateObject12());