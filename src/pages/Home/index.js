import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box } from 'cabana-react';
import { themeGet } from 'styled-system';
import styled from 'styled-components';
import Section from '../../components/Section';
import { Intro, MoreExamples, BlogPosts, Story, GetStarted, WhyCabana } from './sections';

const ContinueLink = styled(Link)`
    color: ${props => themeGet('colors.primary', 'red')(props)};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

export default function Home() {
    return (
        <Box>
            <Intro />
            <WhyCabana />
            <GetStarted />
            <MoreExamples />
            <BlogPosts />
            <Story />
            <Section textAlign="right" fontSize="h5">
                <ContinueLink to="/guides">Continue to Getting Started ></ContinueLink>
            </Section>
        </Box>
    );
}
