import React from 'react';
import { themeGet } from 'styled-system';
import styled, { keyframes } from 'styled-components';
import { IconLifeRing } from 'cabanaico';
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Container = styled.div`
  margin: auto;
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  top: 0;
  left: 0;
`;
const LoadingSpinner = styled.div`
  animation: ${rotate} 2s linear infinite;
  display: inline-block;
  color: ${props => themeGet('colors.primary', 'purple')(props)};
`;

LoadingSpinner.defaultProps = {
  children: <IconLifeRing />,
};
export default function Loading() {
  return (
    <Container>
      <LoadingSpinner />
    </Container>
  );
}
