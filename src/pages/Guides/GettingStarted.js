import React from 'react';
import { Box, BodyText, Card, CardTitle, CardImage, Button } from 'cabana-react';
import { Install } from '../Home/sections';
import CodeExample from '../../components/CodeExample';
import Section, { SectionHeading, SubHeading, Code } from '../../components/Section';
import { HashLink as Link } from 'react-router-hash-link';
export default function GettingStarted(props) {
    return (
        <Section id={props.title}>
            <SectionHeading>Getting Started</SectionHeading>
            <SubHeading>Install</SubHeading>
            <Install />
            <BodyText mt={2}>Now you're good to go! 🎉</BodyText>
            <SubHeading>Your first Cabana component</SubHeading>
            <Box mb={4}>
                <CodeExample mr={2} showLineNumbers={true}>{`import { ThemeProvider } from 'styled-components';
import { Button } from 'cabana-react';
import myTheme from './theme.js';

const App = () => (
    <ThemeProvider theme={myTheme}>
        <Button bg="primary" color="white">Hi!</Button>
    </ThemeProvider>
);`}</CodeExample>
                <Button mt={1} bg="primary" color="white">
                    Hi!
                </Button>
            </Box>
            <BodyText is="span">
                What's happening?
                <ol>
                    <li>
                        We're importing our <Code>Button</Code> component from the <Code>cabana-react</Code> library and
                        the <Code>ThemeProvider</Code> from styled-components to apply our{' '}
                        <Link to="#Theming">theme</Link>.
                    </li>
                    <li>
                        Creating an instance of the <Code>Button</Code> component
                    </li>
                    <li>Configuring the background and text color. It's up to you how many props you customise.</li>
                </ol>
            </BodyText>
            <SubHeading mt={3}>Let's try another one</SubHeading>
            <Box display="flex" alignItems="flex-start" mb={4}>
                <CodeExample showLineNumbers={true}>{`import { Card, CardTitle, CardImage } from 'cabana-react';

const imageUrl = "https://tinyurl.com/yc9dz9xu";
const App = () => (
    <Card 
        is="article" 
        textAlign="center"
        boxShadow={60} // defined in theme.js
    >
        <CardImage src={imageUrl} />
        <CardTitle>Spacious Cabana!</CardTitle>
    </Card>
);`}</CodeExample>
                <Card is="article" textAlign="center" ml={2} boxShadow={60}>
                    <CardImage src="https://tinyurl.com/yc9dz9xu" />
                    <CardTitle>Spacious Cabana!</CardTitle>
                </Card>
            </Box>
            <BodyText is="span">
                What's happening?
                <ol>
                    <li>
                        Creating an instance of the <Code>Card</Code> component and its children
                    </li>
                    <li>
                        Configuring the HTML element type using the <Code>is</Code> prop, the text alignment and the box
                        shadow. It's up to you how many props you customise - the cool thing about react-cabana is that
                        all components come pre-styled too!
                    </li>
                </ol>
                
            </BodyText>
        </Section>
    );
}
