import React from 'react';
import { Box, TextPrimitive, BodyText, SmallText } from 'cabana-react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Logo from './Logo';

const StyledNavButton = styled(NavLink)`
    text-decoration: none;
    color: ${themeGet('colors.grey', 'grey')};
    padding: ${themeGet('space.1')}px;

    &.is-active {
        color: ${themeGet('colors.primary')};
        border-bottom: 2px solid ${themeGet('colors.primary')};
    }
    &:hover {
        color: ${themeGet('colors.darkGrey')};
    }
`;

const NavButton = props => (
    <StyledNavButton activeClassName="is-active" to={props.to}>
        <BodyText is="span">{props.children}</BodyText>
    </StyledNavButton>
);

export default function Home({ onThemeChange }) {
    return (
        <Box
            bg="white"
            p={2}
            top={0}
            boxShadow={20}
            position="fixed"
            height="40px"
            zIndex={2}
            width={'calc(100% - 32px)'}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
        >
            <BodyText display="inline-block" color="grey" m={0} flex="1 0 auto">
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
            <div>
                <a href="https://spectrum.chat/cabana-designsystem" target="_blank">
                    Join the Community
                </a>
            </div>
            <div>
                <SmallText>Theme:</SmallText>
                {process.env !== 'production' && (
                    <select onChange={onThemeChange} defaultValue="default">
                        <option value="default">Default</option>
                        <option value="telco">Telco</option>
                        <option value="bain">Bain</option>
                    </select>
                )}
            </div>
            <div>
                <NavButton to="/guides" mr={2}>
                    Guides
                </NavButton>
                <NavButton to="/examples" mr={2}>
                    Examples
                </NavButton>
                <NavButton to="/components">Components</NavButton>
            </div>
        </Box>
    );
}
