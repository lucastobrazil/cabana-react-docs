import React from 'react';
import { Box, Tabs, HeroText, LeadText, BodyText, TextPrimitive, CaptionText } from 'cabana-react';
import SyntaxHighLighter from 'react-syntax-highlighter/prism';
import { tomorrow } from 'react-syntax-highlighter/styles/prism';

const Section = props => <Box maxWidth={900} py={4} mx="auto" {...props} />;
const ListItem = props => <TextPrimitive is="li" {...props} />;
export default function Home() {
    return (
        <Box>
            <Section>
                <HeroText letterSpacing="-0.05em" color="coyGrey" textAlign="center" fontWeight="bold">
                    Design & Build Better, Smarter, and Faster in Sketch and React.
                </HeroText>
                <BodyText textAlign="center">
                    <TextPrimitive fontWeight="bold">Cabana</TextPrimitive> is a{' '}
                    <TextPrimitive fontWeight="bold">Design System for Sketch and React</TextPrimitive> that will help
                    you create amazing products faster than ever before. Supercharge your Design Workflow today! 🏆
                </BodyText>
            </Section>
            <Box bg="primary">
                <Section py={4}>
                    <LeadText textAlign="center" color="white" fontWeight="bold">
                        A practical way to implement your design system in both Sketch and React
                    </LeadText>
                </Section>
            </Box>
            <Section display="flex">
                <Box>
                    <LeadText>For Designers</LeadText>
                    <ul>
                        <ListItem>Sketch Library with powerful customisation</ListItem>
                        <ListItem>
                            Flexible visual style, whilst also keeping design system ‘rules’ under control
                        </ListItem>
                    </ul>
                    <CaptionText display="block" fontWeight="bold">
                        Sketch Layer Styles
                    </CaptionText>
                    <img style={{ maxWidth: 300 }} src={require('../images/colors_sketch.png')} />
                </Box>
                <Box flex="0 0 50%">
                    <LeadText>For Developers</LeadText>
                    <ul>
                        <ListItem>React</ListItem>
                        <ListItem>Works out of the box</ListItem>
                        <ListItem>Flexible and Composable</ListItem>
                        <ListItem>Separation of Concerns</ListItem>
                    </ul>
                    <CaptionText display="block" fontWeight="bold">
                        Theme JS object
                    </CaptionText>
                    <SyntaxHighLighter customStyle={{ fontSize: '12px' }} style={tomorrow} language="javascript">
                        {`
const theme = {
    colors: {
        primary: '#5450F7',
        secondary: '#25a9ce',
        tertiary: '#EF476F',
        black: '#303133',
        grey: '#8D8D8F',
        LightGrey: '#DADADA',
        success: '#44A45F',
        warning: '#FCEB3B',
        error: '#E6173E',
    }   
};
                        `}
                    </SyntaxHighLighter>
                </Box>
            </Section>
            <Box bg="tertiary">
                <Section>
                    <LeadText fontWeight="bold" color="white">
                        Blog Posts
                    </LeadText>
                </Section>
            </Box>
            <Section>
                <LeadText textAlign="center" fontWeight="bold">
                    Concept
                </LeadText>
                <BodyText>
                    Coming up with a design system takes a lot of work, but once you're up and running, how do you
                    execute it?
                </BodyText>
                <BodyText>
                    As your system grows, you'll notice that your language changes from 'box', 'text' etc and into more
                    metaphoric terms Like 'Card' and 'Hero Heading'. Cabana is a system that connects this language
                    across design (Sketch) and development (React).
                </BodyText>
                <ul>
                    <ListItem>Speaking the same language (constraints-based)</ListItem>
                    <ListItem>Rapid prototyping </ListItem>
                    <ListItem>Rapid prototyping </ListItem>
                    <ListItem>Theme-based design system </ListItem>
                    <ListItem>DRY from the beginning</ListItem>
                </ul>
                <Tabs>
                    <Box fontWeight="normal" fontSize="body" label="Sketch">
                        Constraint-based design
                    </Box>
                    <Box fontWeight="normal" fontSize="body" label="React">
                        Constraint-based
                    </Box>
                </Tabs>
            </Section>
        </Box>
    );
}
