import React from 'react';
import { Box } from 'cabana-react';
import { Intro, DevDesigners, BlogPosts, Story, GetStarted } from './sections';
export default function Home() {
    return (
        <Box>
            <Intro />
            <GetStarted />
            <DevDesigners />
            <BlogPosts />
            <Story />
        </Box>
    );
}
