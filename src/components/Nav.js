import React from 'react';
import { Box, TextPrimitive, BodyText, SmallText } from 'cabana-react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

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

const Logo = props => (
    <svg width={props.size} height={props.size} {...props} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <g id="👁-Preview" fill="none" fillRule="evenodd">
            <g id="Library-Preview" transform="translate(-36 -16)">
                <g id="Logo" transform="translate(36 16)">
                    <circle id="Oval" fill="#5450F7" cx="64" cy="64" r="64" />
                    <g
                        id="Icon"
                        transform="translate(39.61 33.355)"
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="6.254"
                    >
                        <path
                            d="M0,19.5309358 L0,5.58026738 C0,2.49716965 2.49949417,0 5.58546183,0 L33.512771,0 L50.2691565,16.7408022 L50.2691565,19.5309358"
                            id="Shape"
                        />
                        <polygon
                            id="Shape"
                            points="16.7563855 21.5949037 33.512771 21.5949037 41.8909637 29.9653047 25.1345782 46.7061069 8.37819275 29.9653047"
                        />
                        <path
                            d="M49.5207046,58.5928075 C48.5544197,60.2613075 46.7503155,61.3829412 44.6836947,61.3829412 L5.58546183,61.3829412 C3.51884095,61.3829412 1.71473678,60.2613075 0.748451886,58.5928075"
                            id="Shape"
                        />
                    </g>
                </g>
            </g>
        </g>
    </svg>
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
                <SmallText>Theme:</SmallText>
                <select onChange={onThemeChange} defaultValue="default">
                    <option value="default">Default</option>
                    <option value="telco">Telco</option>
                    <option value="bain">Bain</option>
                </select>
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
