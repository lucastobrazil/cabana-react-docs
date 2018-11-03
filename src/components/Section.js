import React from 'react';
import { Box, BodyText, HeadingTwo, HeadingThree, TextPrimitive } from 'cabana-react';
import styled from 'styled-components';

const Section = props => <Box is="section" maxWidth={900} py={4} mx="auto" {...props} />;
const SectionHeading = props => <HeadingTwo mb={3} mt={4} {...props} />;
const SubHeading = props => <HeadingThree mb={2} mt={6} {...props} />;
const SectionGrid = props => <Box width="50%" p={2} {...props} />;

const Code = props => (
    <Box
        is="code"
        fontFamily="monospace"
        color="tertiary"
        bg="white"
        borderRadius="small"
        border="1px solid"
        borderColor="lightGrey"
        py="2px"
        px="4px"
        {...props}
    />
);

const P = props => <BodyText pb={2} {...props} />;

const TextLink = styled(TextPrimitive)`
    &:hover {
        text-decoration: underline;
    }
`;

TextLink.defaultProps = {
    css: 'text-decoration: none',
    color: 'primary',
    is: 'a',
};

export default Section;
export { SectionHeading, SubHeading, SectionGrid, Code, P, TextLink };
