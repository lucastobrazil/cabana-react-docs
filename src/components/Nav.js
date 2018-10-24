import React from 'react';
import { Box, TextPrimitive, BodyText } from 'cabana-react';

const NavButton = props => <BodyText is="a" borderRadius="none" borderColor="red" {...props} />;

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
export default function Home({ onClick }) {
    return (
        <Box bg="white" p={2} boxShadow={20} display="flex" justifyContent="space-between" alignItems="center">
            <BodyText display="inline-block" color="grey" m={0}>
                <NavButton onClick={onClick.bind(this, 'home')}>
                    <Logo size="20" style={{ verticalAlign: 'sub' }} />{' '}
                    <TextPrimitive fontWeight="bold" color="darkGrey">
                        Cabana
                    </TextPrimitive>{' '}
                    React
                </NavButton>
            </BodyText>
            <div>
                <NavButton onClick={onClick.bind(this, 'examples')} mr={2}>
                    Examples
                </NavButton>
                <NavButton onClick={onClick.bind(this, 'components')}>Components</NavButton>
            </div>
        </Box>
    );
}
