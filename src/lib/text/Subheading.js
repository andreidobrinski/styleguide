import styled from 'styled-components';
import { colours, fonts, ratio } from '../Theme';

const Subheading = styled.h2`
  font-family: ${fonts.header};
  font-weight: 700;
  font-size: ${ratio.two}rem;
  color: ${colours.text};
  margin-bottom: 4px;
`;

export default Subheading;
