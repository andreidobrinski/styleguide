import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-weight: 700;\n  font-size: ", "rem;\n  color: ", ";\n  margin-bottom: 4px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import { colours, fonts, ratio } from '../Theme';
var Subheading = styled.h2(_templateObject(), fonts.header, ratio.two, colours.text);
export default Subheading;