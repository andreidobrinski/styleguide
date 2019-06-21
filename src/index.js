import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import './lib/index.css';

import { Outer, Inner, AdLogo, Heading, Description, Subheading, Text } from './lib';
import { linkStyles } from './lib/Theme';

const Link = styled(Text)`
  ${linkStyles}
`;

const App = () => (
  <Outer>
    <Inner>
      <AdLogo />
      <Heading>Styleguide</Heading>
      <hr/>
      <Heading>Heading</Heading>
      <Description>Description</Description>
      <Subheading>Subheading</Subheading>
      <Text>Text</Text>
      <Link as="a">Link</Link>
    </Inner>
  </Outer>
);

ReactDOM.render(<App />, document.getElementById('root'));
