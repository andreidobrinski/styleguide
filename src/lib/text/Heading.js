import styled from 'styled-components';
import { colours, fonts, ratio } from '../Theme';

const Heading = styled.h1`
  font-family: ${fonts.header};
  font-weight: 700;
  font-size: ${ratio.three}rem;
  color: ${colours.text};
`;

export default Heading;
