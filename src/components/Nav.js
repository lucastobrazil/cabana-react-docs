import React from 'react';
import { Box, TextPrimitive, BodyText, Button } from 'cabana-react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Logo from './Logo';
import { SpectrumLogo, GitHubLogo } from './Svg';
import { IconCaretDown } from 'cabanaico';

const StyledNavButton = styled(NavLink)`
  text-decoration: none;
  color: ${themeGet('colors.grey', 'grey')};
  padding: ${themeGet('space.1')}px;
  display: inline-block;

  &.is-active {
    color: ${themeGet('colors.primary')};
    border-bottom: 2px solid ${themeGet('colors.primary')};
  }
  &:hover {
    color: ${themeGet('colors.primary')};
  }
`;

const NavButton = props => (
  <StyledNavButton activeClassName="is-active" to={props.to} exact={props.exact}>
    <BodyText is="span" fontSize={["caption", "body"]}>{props.children}</BodyText>
  </StyledNavButton>
);

const IconLink = styled(Box)`
  &:hover {
    color: ${props => themeGet('colors.primary', 'purple')(props)};
  }
`;

IconLink.defaultProps = {
  is: 'a',
  color: 'grey',
};

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

const NavItems = () => (
  <React.Fragment>
    <NavButton to="/" exact mr={2}>
      Home
    </NavButton>
    <NavButton to="/guides" mr={2}>
      Guides
    </NavButton>
    <NavButton to="/examples" mr={2}>
      Examples
    </NavButton>
    <NavButton to="/components">Components</NavButton>
  </React.Fragment>
);

export default function Home({ onThemeChange }) {
  return (
    <Box
      bg="background"
      style={{ boxSizing: 'border-box' }}
      p={2}
      top={0}
      boxShadow={20}
      position="fixed"
      height="72px"
      zIndex={2}
      width="100%"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      is="nav"
    >
      <BodyText display="inline-block" color="grey" m={0} flex="1 2 auto">
        <NavLink style={{ textDecoration: 'none', color: 'inherit' }} to="/">
          <Logo size="20" style={{ verticalAlign: 'sub' }} />{' '}
          <TextPrimitive fontWeight="bold" color="darkGrey">
            Cabana
          </TextPrimitive>{' '}
          React
          <TextPrimitive color="tertiary" fontSize="tiny" fontWeight="bold">
            ALPHA
          </TextPrimitive>
        </NavLink>
      </BodyText>

      {/* {process.env.NODE_ENV !== 'production' ? (
        <div>
          <SmallText>Theme:</SmallText>
          <select onChange={onThemeChange} defaultValue="default">
            <option value="default">Default</option>
            <option value="dark">Dark</option>
            <option value="bain">Bain</option>
          </select>
        </div>
      ) : null} */}
      <Box display={['none', 'block']}>
        <NavItems />
      </Box>
      <IconLink mx={1} href="https://spectrum.chat/cabana-designsystem" target="_blank">
        <SpectrumLogo />
      </IconLink>
      <IconLink style={{ lineHeight: 1 }} href="https://github.com/lucastobrazil/cabana-react" target="_blank">
        <GitHubLogo />
      </IconLink>
      <ToggleNav />
    </Box>
  );
}

class ToggleNav extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    return this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <Box display={['block', 'none']}>
        <Hamburger onClick={this.toggleOpen} isOpen={isOpen} />
        <Box display={isOpen ? 'block' : 'none'} boxShadow={100} position="fixed" top="72px" left="0" bg="white" width="100%" pb={1}>
          <NavItems />
        </Box>
      </Box>
    );
  }
}
