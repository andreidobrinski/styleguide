import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-weight: 700;\n  font-size: ", "rem;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import { colours, fonts, ratio } from '../Theme';
var Heading = styled.h1(_templateObject(), fonts.header, ratio.three, colours.text);
export default Heading;