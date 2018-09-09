/* global tw */
import React from "react"
import styled from 'react-emotion';

const Heading = styled('h1')`
  ${tw('font-sans my-0 text-xl leading-tight')};
`;

export default () => (
  <Heading>Page 2</Heading>
)

