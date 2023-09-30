import React from 'react'

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin-top: 60px;
`;

const Pane = styled.div<{ weight: string }>`
  width: ${(props) => props.weight};
`;


export const SplitScreen: React.FC<{
  left: React.ReactElement;
  right:React.ReactElement;
  lWeight: string;
  rWeight: string;
}> = ({ left, right, lWeight = '50%', rWeight = '50%' }) => (
  <Container>
    <Pane weight={lWeight}>{left}</Pane>
    <Pane weight={rWeight}>{right}</Pane>
  </Container>
);
