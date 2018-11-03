import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Tabs,
    Card,
    CardTitle,
    CardImage,
    HeadingOne,
    HeadingThree,
    BodyText,
    TextPrimitive,
    HeadingFour,
    Button,
} from 'cabana-react';
import { IconHeart } from 'cabanaico';
import { Gradient } from '../../components/Svg';
import styled from 'styled-components';
import Section, { SectionGrid, TextLink } from '../../components/Section';
import CodeExample from '../../components/CodeExample';
import { CardBodyText } from 'cabana-react/build/components/Card';

const ListItem = props => <TextPrimitive color="inherit" is="li" {...props} />;
const H4 = props => <HeadingFour mb={2} {...props} />;

const GradientBg = styled(Gradient)`
    transform: scaley(-1);
    width: 100%;
    height: 250px;
    vertical-align: bottom;
`;

const StyledCard = styled(Card)`
    a:hover {
        text-decoration: underline;
    }
`;
const BlogPostCard = props => (
    <StyledCard m={2} borderColor="transparent">
        <CardImage
            src={
                props.imageSrc ||
                'https://media-cdn.tripadvisor.com/media/photo-s/0f/d6/9f/af/sunscape-dominican-beach.jpg'
            }
        />
        <CardTitle fontWeight="normal" is="a" textDecoration="none" href="foo">
            {props.title}
        </CardTitle>
        <CardBodyText>5 min read</CardBodyText>
    </StyledCard>
);
const Intro = () => (
    <React.Fragment>
        <Section>
            <HeadingOne
                fontSize={['h2', 'h1']}
                my={8}
                letterSpacing="-0.05em"
                color="darkGrey"
                textAlign="center"
                fontWeight="bold"
            >
                A design system built especially for React and Sketch.
            </HeadingOne>
            <BodyText textAlign="center" mb={4}>
                Built with React,{' '}
                <TextLink is="a" href="https://www.styled-components.com/">
                    styled-components
                </TextLink>{' '}
                and <TextLink href="https://github.com/jxnblk/styled-system">styled-system</TextLink>.
            </BodyText>
            <Box display="flex" justifyContent="center">
                <Button
                    is="a"
                    href="https://github.com/lucastobrazil/cabana-react"
                    bg="primary"
                    color="white"
                    display="block"
                    mr={2}
                >
                    GitHub
                </Button>
                <Button bg="white" color="primary" display="block">
                    <Link to="/guides">Guides</Link>
                </Button>
            </Box>
        </Section>
        <Box width="100%" height="100%">
            <GradientBg />
        </Box>
    </React.Fragment>
);

const DevDesigners = () => (
    <React.Fragment>
        <Box bg="primary" color="white">
            <Section display="flex">
                <SectionGrid>
                    <HeadingThree>For Designers</HeadingThree>
                    <ul>
                        <ListItem>Sketch Library with powerful customisation</ListItem>
                        <ListItem>
                            Flexible visual style, whilst also keeping design system ‘rules’ under control
                        </ListItem>
                    </ul>
                </SectionGrid>
                <SectionGrid>
                    <HeadingThree>For Developers</HeadingThree>
                    <ul>
                        <ListItem>Build your own React components or use the default</ListItem>
                        <ListItem>Works out of the box</ListItem>
                        <ListItem>Flexible and Composable</ListItem>
                    </ul>
                </SectionGrid>
            </Section>
        </Box>
        <Section>
            <HeadingThree mb={2} textAlign="center" fontWeight="bold">
                Sketch ↔️ React
            </HeadingThree>
            <Box display="flex">
                <SectionGrid>
                    <H4>Configure Sketch Symbol</H4>
                    <ul>
                        <ListItem>Symbol overrides allow you to select pre-set layer styles etc</ListItem>
                        <ListItem>Full control over content / iconography etc.</ListItem>
                    </ul>
                    <img style={{ maxWidth: '100%' }} src={require('../../images/example_button.png')} />
                </SectionGrid>
                <SectionGrid>
                    <H4>Configure Component Instance</H4>
                    <CodeExample>
                        {`
// Reads from theme.js file
const MyButton = (
    <Button 
        color="white" 
        borderRadius="large"
        bg="primary" 
        fontWeight="bold" 
    >
        <IconHeart /> Like
    </Button>
);
        `}
                    </CodeExample>
                    <Button bg="primary" color="white">
                        <IconHeart /> Like
                    </Button>
                </SectionGrid>
            </Box>
        </Section>
        <Section display="flex">
            <SectionGrid>
                <H4>Sketch Layer Styles</H4>
                <img style={{ maxWidth: 300 }} src={require('../../images/colors_sketch.png')} />
            </SectionGrid>
            <SectionGrid>
                <H4>Theme JS object</H4>
                <CodeExample>
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
                </CodeExample>
            </SectionGrid>
        </Section>
        <Button bg="primary" color="white" display="block" my={8} mx="auto">
            Check out the guides
        </Button>
    </React.Fragment>
);

const BlogPosts = () => (
    <Box bg="tertiary">
        <Section>
            <HeadingFour mb={2} textAlign="center" color="white">
                Blog Posts
            </HeadingFour>
            <Box display="flex">
                <BlogPostCard title="Introducing Cabana for React" imageSrc="" />
                <BlogPostCard title="Getting started with Styled-System" imageSrc="" />
                <BlogPostCard title="Introducing Cabana for React" imageSrc="" />
            </Box>
        </Section>
    </Box>
);

const Install = () => <CodeExample>{`npm install --save cabana-react`}</CodeExample>;

const GetStarted = () => (
    <Box py={4}>
        <HeadingThree textAlign="center" fontWeight="bold">
            Get Started
        </HeadingThree>
        <Section display="flex">
            <SectionGrid>
                <H4 mb={1}>React</H4>
                <Install />
                <Button mt={2} color="primary">
                    Getting started guide
                </Button>
            </SectionGrid>
            <SectionGrid>
                <H4 mb={1}>Sketch</H4>
                <TextLink href="https://cabanadesignsystem.com/">Download Sketch Library</TextLink>
            </SectionGrid>
        </Section>
    </Box>
);

const Story = () => (
    <Section>
        <HeadingThree textAlign="center" fontWeight="bold">
            Concept
        </HeadingThree>
        <BodyText>
            Coming up with a design system takes a lot of work, but once you're up and running, how do you execute it?
        </BodyText>
        <BodyText>
            As your system grows, you'll notice that your language changes from 'box', 'text' etc and into more
            metaphoric terms Like 'Card' and 'Hero Heading'. Cabana is a system that connects this language across
            design (Sketch) and development (React).
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
);

export { Intro, DevDesigners, BlogPosts, Story, GetStarted, Install };
