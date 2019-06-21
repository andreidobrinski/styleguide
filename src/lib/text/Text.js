import styled from 'styled-components';
import { colours, fonts, ratio } from '../Theme';

const Text = styled.p`
  font-family: ${fonts.body};
  line-height: ${ratio.one};
  font-size: ${ratio.one}rem;
  color: ${colours.text};
`;

export default Text;
