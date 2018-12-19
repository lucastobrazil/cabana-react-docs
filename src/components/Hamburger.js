import React from 'react';
import styled from 'styled-components';
import { Button } from 'cabana-react';
import { themeGet } from 'styled-system';
import { IconCaretDown } from 'cabanaico';

const Hamburger = styled(Button)`
  color: ${props => themeGet('colors.primary', 'purple')(props)};
  opacity: 0.8;
  transition: all 350ms ease;
  transform: ${props => (props.isOpen ? `rotate(180deg)` : null)};

  &:hover {
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
`;

Hamburger.defaultProps = {
  bg: 'transparent',
  boxShadow: 'none',
  px: 1,
  children: <IconCaretDown />,
};

export default Hamburger;