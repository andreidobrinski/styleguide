import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  line-height: ", ";\n  font-size: ", "rem;\n  color: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import styled from 'styled-components';
import { colours, fonts, ratio } from '../Theme';
var Text = styled.p(_templateObject(), fonts.body, ratio.one, ratio.one, colours.text);
export default Text;