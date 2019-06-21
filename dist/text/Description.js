import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  font-size: ", "rem;\n  font-weight: 400;\n  margin-bottom: ", "em;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import { colours, fonts, ratio } from '../Theme';
var Description = styled.p(_templateObject(), fonts.header, ratio.two, ratio.two, colours.text);
export default Description;