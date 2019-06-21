import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  text-decoration: none;\n  padding: 0 1px;\n  box-shadow: inset 0 -6px 0 0 ", ";\n  transition: box-shadow 0.3s ease-in;\n\n  &:hover {\n    box-shadow: inset 0 -30px 0 0 ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      @media (min-width: ", "em) {\n        ", "\n      }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import { css } from 'styled-components';
var sizes = {
  smallTablet: 630,
  mediumTablet: 712,
  tablet: 880,
  desktop: 992
}; // iterate through the sizes and create a media template

export var media = Object.keys(sizes).reduce(function (accumulator, label) {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  var emSize = sizes[label] / 16;
  return _objectSpread({}, accumulator, _defineProperty({}, label, function () {
    return css(_templateObject(), emSize, css.apply(void 0, arguments));
  }));
}, {});
export var colours = {
  link: '#61DBFF',
  cta: '#062F70',
  support: '#FFFFFF',
  text: 'rgba(0,0,0,0.85)',
  background: 'rgba(0,0,0,0.02)'
};
export var fonts = {
  header: '"Oxygen", "sans-serif"',
  body: '"Open Sans", "serif"'
};
export var spacer = '16px';
export var borderRadius = '16px 0px 16px 0px';
export var ratio = {
  one: '1.618',
  two: '2.618',
  three: '4.236'
};
export var linkStyles = css(_templateObject2(), colours.text, colours.link, colours.link);
export default {
  media: media,
  colours: colours,
  fonts: fonts,
  spacer: spacer,
  borderRadius: borderRadius,
  ratio: ratio,
  linkStyles: linkStyles
};