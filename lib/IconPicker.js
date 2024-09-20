"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = _interopRequireDefault(require("react-dom"));
var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");
var _freeRegularSvgIcons = require("@fortawesome/free-regular-svg-icons");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _propTypes = _interopRequireDefault(require("prop-types"));
require("@fortawesome/fontawesome-svg-core/styles.css");
var _fontawesomeSvgCore = require("@fortawesome/fontawesome-svg-core");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
_fontawesomeSvgCore.library.add(_freeBrandsSvgIcons.fab, _freeSolidSvgIcons.fas, _freeRegularSvgIcons.far);
var IconPicker = function IconPicker(_ref) {
  var _ref$icons = _ref.icons,
    icons = _ref$icons === void 0 ? {} : _ref$icons,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$adjustPosition = _ref.adjustPosition,
    adjustPosition = _ref$adjustPosition === void 0 ? {
      top: 0,
      left: 0
    } : _ref$adjustPosition,
    _ref$showCategory = _ref.showCategory,
    showCategory = _ref$showCategory === void 0 ? true : _ref$showCategory,
    _ref$showSearch = _ref.showSearch,
    showSearch = _ref$showSearch === void 0 ? true : _ref$showSearch,
    _ref$closeOnSelect = _ref.closeOnSelect,
    closeOnSelect = _ref$closeOnSelect === void 0 ? true : _ref$closeOnSelect,
    _ref$isMulti = _ref.isMulti,
    isMulti = _ref$isMulti === void 0 ? false : _ref$isMulti,
    noSelectedPlaceholder = _ref.noSelectedPlaceholder,
    _ref$buttonStyle = _ref.buttonStyle,
    buttonStyle = _ref$buttonStyle === void 0 ? "flex items-center justify-center h-[35px] w-[35px] rounded-l-[8px] border border-[#eaecf0]" : _ref$buttonStyle,
    _ref$zIndexPopup = _ref.zIndexPopup,
    zIndexPopup = _ref$zIndexPopup === void 0 ? 50 : _ref$zIndexPopup,
    _ref$popupStyle = _ref.popupStyle,
    popupStyle = _ref$popupStyle === void 0 ? "bg-white border border-gray-300 shadow-lg rounded popup-container min-w-[367px]" : _ref$popupStyle,
    _ref$gridColumns = _ref.gridColumns,
    gridColumns = _ref$gridColumns === void 0 ? 5 : _ref$gridColumns,
    _ref$gridRows = _ref.gridRows,
    gridRows = _ref$gridRows === void 0 ? 4 : _ref$gridRows,
    _ref$iconBgColor = _ref.iconBgColor,
    iconBgColor = _ref$iconBgColor === void 0 ? "bg-gray-200" : _ref$iconBgColor,
    _ref$iconSelectedBgCo = _ref.iconSelectedBgColor,
    iconSelectedBgColor = _ref$iconSelectedBgCo === void 0 ? "bg-blue-200" : _ref$iconSelectedBgCo,
    _ref$iconHeight = _ref.iconHeight,
    iconHeight = _ref$iconHeight === void 0 ? 65 : _ref$iconHeight,
    _ref$iconWidth = _ref.iconWidth,
    iconWidth = _ref$iconWidth === void 0 ? 65 : _ref$iconWidth;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isPopupVisible = _useState2[0],
    setIsPopupVisible = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isPositionSet = _useState4[0],
    setIsPositionSet = _useState4[1];
  var _useState5 = (0, _react.useState)({
      top: (adjustPosition === null || adjustPosition === void 0 ? void 0 : adjustPosition.top) || 0,
      left: (adjustPosition === null || adjustPosition === void 0 ? void 0 : adjustPosition.left) || 0
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    popupPosition = _useState6[0],
    setPopupPosition = _useState6[1];
  var _useState7 = (0, _react.useState)([value]),
    _useState8 = _slicedToArray(_useState7, 2),
    selectedIcons = _useState8[0],
    setSelectedIcons = _useState8[1];
  var buttonRef = (0, _react.useRef)(null);
  var popupRef = (0, _react.useRef)(null);
  var IconsPerPage = gridColumns * gridRows;
  // Function to update the popup position based on button's position
  var updatePopupPosition = function updatePopupPosition() {
    var _buttonRef$current, _popupRef$current, _window, _window2, _window3, _window6;
    if (!(buttonRef !== null && buttonRef !== void 0 && buttonRef.current)) {
      return;
    }
    var buttonRect = buttonRef === null || buttonRef === void 0 || (_buttonRef$current = buttonRef.current) === null || _buttonRef$current === void 0 ? void 0 : _buttonRef$current.getBoundingClientRect();
    var popupRect = popupRef === null || popupRef === void 0 || (_popupRef$current = popupRef.current) === null || _popupRef$current === void 0 ? void 0 : _popupRef$current.getBoundingClientRect();
    var windowHeight = (_window = window) === null || _window === void 0 ? void 0 : _window.innerHeight;
    var windowWidth = (_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.innerWidth;
    var newPosition = {
      top: buttonRect.bottom + window.scrollY + ((adjustPosition === null || adjustPosition === void 0 ? void 0 : adjustPosition.top) || 0),
      left: buttonRect.left + window.scrollX + ((adjustPosition === null || adjustPosition === void 0 ? void 0 : adjustPosition.left) || 0)
    };
    if (!popupRect || !buttonRect || !windowHeight || !windowWidth) {
      return;
    }
    // Check if the popup will fit below the viewport
    if (buttonRect.bottom + popupRect.height > windowHeight + ((_window3 = window) === null || _window3 === void 0 ? void 0 : _window3.scrollY)) {
      var _window4, _window5;
      // Move popup to above the button if it goes out of view
      newPosition.top = buttonRect.top + ((_window4 = window) === null || _window4 === void 0 ? void 0 : _window4.scrollY) - popupRect.height - ((adjustPosition === null || adjustPosition === void 0 ? void 0 : adjustPosition.top) || 0);
      // hide the popup if the click element out of the viewport.
      if (buttonRect.bottom > windowHeight + ((_window5 = window) === null || _window5 === void 0 ? void 0 : _window5.scrollY)) {
        setIsPopupVisible(false);
        setIsPositionSet(false);
        return;
      }
    }
    if (buttonRect.right + popupRect.width > windowWidth + ((_window6 = window) === null || _window6 === void 0 ? void 0 : _window6.scrollX)) {
      var _window7;
      // Move popup on the button's left if no view space on the right.
      newPosition.left = buttonRect.left + ((_window7 = window) === null || _window7 === void 0 ? void 0 : _window7.scrollX) - popupRect.width - ((adjustPosition === null || adjustPosition === void 0 ? void 0 : adjustPosition.left) || 0);
    }
    setPopupPosition(newPosition);
    setIsPositionSet(true);
  };
  var handleClosePopup = function handleClosePopup() {
    setIsPopupVisible(false);
    setIsPositionSet(false);
  };
  (0, _react.useEffect)(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (buttonRef.current && !buttonRef.current.contains(event === null || event === void 0 ? void 0 : event.target) && !event.target.closest('.popup-container')) {
        handleClosePopup();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  (0, _react.useEffect)(function () {
    // Update popup position when scrolling
    if (!isPopupVisible) return;
    updatePopupPosition();
    window.addEventListener('wheel', handleClosePopup, {
      passive: true
    });
    return function () {
      window.removeEventListener('wheel', handleClosePopup);
    };
  }, [isPopupVisible]);
  var categories = Object.keys(icons);
  var filterIcons = function filterIcons(searchQuery, selectedCategory) {
    var allIcons = selectedCategory === 'All' ? Object.values(icons).flat() : icons[selectedCategory] || [];
    return allIcons.filter(function (icon) {
      var _icon$toLowerCase;
      return icon === null || icon === void 0 || (_icon$toLowerCase = icon.toLowerCase()) === null || _icon$toLowerCase === void 0 ? void 0 : _icon$toLowerCase.includes(searchQuery === null || searchQuery === void 0 ? void 0 : searchQuery.toLowerCase());
    });
  };
  var _useState9 = (0, _react.useState)(1),
    _useState10 = _slicedToArray(_useState9, 2),
    currentPage = _useState10[0],
    setCurrentPage = _useState10[1];
  var _useState11 = (0, _react.useState)('All'),
    _useState12 = _slicedToArray(_useState11, 2),
    selectedCategory = _useState12[0],
    setSelectedCategory = _useState12[1];
  var _useState13 = (0, _react.useState)(''),
    _useState14 = _slicedToArray(_useState13, 2),
    searchQuery = _useState14[0],
    setSearchQuery = _useState14[1];
  var filteredIcons = filterIcons(searchQuery, selectedCategory);
  var totalPages = Math.ceil(filteredIcons.length / IconsPerPage);
  var handlePageChange = function handlePageChange(direction) {
    setCurrentPage(function (prevPage) {
      return Math.max(1, Math.min(totalPages, prevPage + direction));
    });
  };
  var startIdx = (currentPage - 1) * IconsPerPage;
  var endIdx = startIdx + IconsPerPage;
  var iconsToDisplay = filteredIcons.slice(startIdx, endIdx);
  var handleIconClick = function handleIconClick(icon) {
    if (isMulti) {
      var updatedSelection = selectedIcons !== null && selectedIcons !== void 0 && selectedIcons.includes(icon) ? selectedIcons.filter(function (i) {
        return i !== icon;
      }) : [].concat(_toConsumableArray(selectedIcons), [icon]);
      setSelectedIcons(updatedSelection);
      onChange(updatedSelection);
    } else {
      var isSelected = selectedIcons === null || selectedIcons === void 0 ? void 0 : selectedIcons.includes(icon);
      var _updatedSelection = isSelected ? [] : [icon];
      setSelectedIcons(_updatedSelection);
      onChange(_updatedSelection[0] || null);
      if (closeOnSelect) {
        setIsPopupVisible(false);
      }
    }
  };
  var classNames = function classNames() {
    for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
      classes[_key] = arguments[_key];
    }
    return classes.filter(Boolean).join(' ');
  };
  // Portal popup rendering function
  var renderPopup = function renderPopup() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      ref: popupRef,
      className: classNames("absolute ".concat(popupStyle, " ").concat(isPositionSet ? '' : 'invisible')),
      style: {
        top: "".concat(popupPosition === null || popupPosition === void 0 ? void 0 : popupPosition.top, "px"),
        left: "".concat(popupPosition === null || popupPosition === void 0 ? void 0 : popupPosition.left, "px"),
        zIndex: zIndexPopup
      }
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex flex-col items-center p-4"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex flex-col mb-5 w-full"
    }, showSearch && /*#__PURE__*/_react["default"].createElement("input", {
      type: "text",
      placeholder: "Search icons...",
      value: searchQuery,
      onChange: function onChange(e) {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
      },
      className: "mb-2 py-2 text-base border-gray-300 border-b outline-none"
    }), showCategory && /*#__PURE__*/_react["default"].createElement("select", {
      value: selectedCategory,
      onChange: function onChange(e) {
        setSelectedCategory(e.target.value);
        setCurrentPage(1);
      },
      className: "py-2 text-base border-gray-300 border-b bg-transparent outline-none"
    }, /*#__PURE__*/_react["default"].createElement("option", {
      value: "All"
    }, "All Categories"), categories.map(function (category, index) {
      return /*#__PURE__*/_react["default"].createElement("option", {
        key: index,
        value: category
      }, category);
    }))), (iconsToDisplay === null || iconsToDisplay === void 0 ? void 0 : iconsToDisplay.length) > 0 && /*#__PURE__*/_react["default"].createElement("div", {
      className: "w-full flex justify-between items-center mb-2"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex items-center gap-2"
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "border-gray-300 border-b w-8 text-right"
    }, currentPage), /*#__PURE__*/_react["default"].createElement("span", null, "/ ", totalPages)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex items-center"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return handlePageChange(-1);
      },
      disabled: currentPage === 1,
      className: "border-none bg-gray-200 text-gray-600 rounded cursor-pointer mx-2 px-2 transition-colors duration-300 hover:bg-gray-200 disabled:opacity-50 outline-none",
      type: "button"
    }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: "angle-left"
    })), /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return handlePageChange(1);
      },
      disabled: currentPage === totalPages,
      className: "border-none bg-gray-200 text-gray-600 rounded cursor-pointer px-2 transition-colors duration-300 hover:bg-gray-200 disabled:opacity-50 outline-none",
      type: "button"
    }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: "angle-right"
    })))), (iconsToDisplay === null || iconsToDisplay === void 0 ? void 0 : iconsToDisplay.length) === 0 ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "text-gray-500"
    }, "No icons found") : /*#__PURE__*/_react["default"].createElement("div", {
      className: "grid gap-[2px] w-fit",
      style: {
        gridTemplateColumns: "repeat(".concat(gridColumns, ", 1fr)"),
        gridTemplateRows: "repeat(".concat(gridRows, ", 1fr)")
      }
    }, iconsToDisplay.map(function (icon, index) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: index,
        className: classNames("flex justify-center items-center cursor-pointer group overflow-hidden rounded-[4px]\n                   hover:bg-gray-300 hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-gray-500 hover:rounded-[10px] ".concat(selectedIcons !== null && selectedIcons !== void 0 && selectedIcons.includes(icon) ? iconSelectedBgColor : iconBgColor, " hover:bg-gray-300")),
        style: {
          height: "".concat(iconHeight, "px"),
          width: "".concat(iconWidth, "px")
        },
        onClick: function onClick() {
          return handleIconClick(icon);
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: icon,
        className: classNames("text-[20px] transform transition duration-200 group-hover:text-gray-600 group-hover:scale-200 ".concat(selectedIcons !== null && selectedIcons !== void 0 && selectedIcons.includes(icon) ? 'text-blue-800' : 'text-gray-800'))
      }));
    }))));
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return setIsPopupVisible(!isPopupVisible);
    },
    className: buttonStyle,
    style: {
      outline: 'none'
    },
    ref: buttonRef,
    type: "button"
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: selectedIcons[0] || noSelectedPlaceholder || 'arrow-up-from-bracket',
    size: "lg",
    className: "".concat(selectedIcons !== null && selectedIcons !== void 0 && selectedIcons[0] ? 'text-gray-800' : 'text-gray-500')
  })), isPopupVisible && /*#__PURE__*/_reactDom["default"].createPortal(renderPopup(), document.body));
};
IconPicker.propTypes = {
  icons: _propTypes["default"].object,
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  adjustPosition: _propTypes["default"].shape({
    top: _propTypes["default"].number,
    left: _propTypes["default"].number
  }),
  showCategory: _propTypes["default"].bool,
  showSearch: _propTypes["default"].bool,
  closeOnSelect: _propTypes["default"].bool,
  isMulti: _propTypes["default"].bool,
  noSelectedPlaceholder: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  buttonStyle: _propTypes["default"].string,
  zIndex: _propTypes["default"].number
};
var _default = exports["default"] = IconPicker;