"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = void 0;

var _checkCircle = require("../assets/icon/check-circle.svg");

var _users = require("../assets/icon/users.svg");

var _layers = require("../assets/icon/layers.svg");

var _barChart = require("../assets/icon/bar-chart.svg");

var _settings = require("../assets/icon/settings.svg");

var _archive = require("../assets/icon/archive.svg");

var _mapPin = require("../assets/icon/map-pin.svg");

var Navbar = [{
  id: 1,
  name: 'Buyurtmalar',
  link: "/order",
  icon: _checkCircle.ReactComponent
}, {
  id: 2,
  name: 'Mahsulotlar',
  link: "/products",
  icon: _archive.ReactComponent
}, {
  id: 3,
  name: 'Kategoriyalar',
  link: "/categories",
  icon: _layers.ReactComponent
}, {
  id: 4,
  name: 'Filiallar',
  link: "/branches",
  icon: _mapPin.ReactComponent
}, {
  id: 5,
  name: 'Mijozlar',
  link: "/customers",
  icon: _users.ReactComponent
}, {
  id: 6,
  name: 'Hisobot',
  link: "/report",
  icon: _barChart.ReactComponent
}, {
  id: 7,
  name: 'Katalog',
  link: "/catolog",
  icon: _settings.ReactComponent
}];
exports.Navbar = Navbar;