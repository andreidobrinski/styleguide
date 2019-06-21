import styled from 'styled-components';
import { colours, fonts, ratio } from '../Theme';

const Description = styled.p`
  font-family: ${fonts.header};
  font-size: ${ratio.two}rem;
  font-weight: 400;
  margin-bottom: ${ratio.two}em;
  color: ${colours.text};
`;

export default Description;
