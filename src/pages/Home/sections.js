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
// import { IconHeart } from 'cabanaico';
import IconHeart from '../../components/TempIcon';
import { Gradient } from '../../components/Svg';
import styled from 'styled-components';
import Section, { SectionGrid, TextLink, SectionHeading, SubHeading } from '../../components/Section';
import CodeExample from '../../components/CodeExample';
import { CardBodyText } from 'cabana-react/build/components/Card';
import Logo from '../../components/Logo';

const ListItem = props => <TextPrimitive color="inherit" is="li" {...props} />;

const GradientBg = styled(Gradient)`
    transform: scaleY(-1);
    width: 100%;
    vertical-align: bottom;
`;

const StyledCard = styled(Card)`
    a:hover {
        text-decoration: underline;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
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
        <Box width="100%" height="100%">
            <GradientBg />
        </Box>
        <Section
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            // height="calc(100vh - 362px)"
            mt={-12}
        >
            <HeadingOne
                fontSize={['h2', 'h1']}
                my={8}
                letterSpacing="-0.05em"
                color="darkGrey"
                textAlign="center"
                fontWeight="bold"
                maxWidth={680}
            >
                A design system built especially for Sketch and React.
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
                <Button bg="white" color="primary" display="block" border="1px solid" borderColor="primary">
                    <StyledLink to="/guides">Guides</StyledLink>
                </Button>
            </Box>
        </Section>
        <Section>
            <Box display="flex">
                <SectionGrid>
                    <HeadingFour textAlign="center" mt={0}>
                        Sketch
                    </HeadingFour>
                    <ul>
                        <ListItem>Symbol overrides allow you to select pre-set layer styles etc.</ListItem>
                        <ListItem>Full control over content / iconography etc.</ListItem>
                    </ul>
                    <img style={{ maxWidth: '100%' }} src={require('../../images/example_button.png')} />
                </SectionGrid>
                <SectionGrid>
                    <HeadingFour textAlign="center" mt={0}>
                        React
                    </HeadingFour>
                    <ul>
                        <ListItem>Import named components that match the Sketch symbols.</ListItem>
                        <ListItem>Create instances for your app.</ListItem>
                    </ul>
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
                    <Button bg="primary" color="white" mt={1}>
                        <IconHeart /> Like
                    </Button>
                </SectionGrid>
            </Box>
        </Section>
    </React.Fragment>
);

const WhyCabana = () => (
    <Box bg="primary" color="white" pb={3} display="flex" flexWrap="wrap" justifyContent="center">
        <Logo width={80} height={80} />
        <SectionHeading mt={0} textAlign="center" flex="0 0 100%">
            Why Cabana?
        </SectionHeading>
        <Section display="flex">
            <SectionGrid>
                <HeadingThree>For Designers</HeadingThree>
                <ul>
                    <ListItem>Sketch Library with powerful customisation</ListItem>
                    <ListItem>Flexible visual style, whilst also keeping design system ‘rules’ under control</ListItem>
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
);

const MoreExamples = () => (
    <Box bg="#fafafa" py={3}>
        <SectionHeading textAlign="center">Sketch Library and Theme</SectionHeading>
        <Section display="flex">
            <SectionGrid>
                <HeadingThree mb={1}>Sketch Layer Styles</HeadingThree>
                <img style={{ maxWidth: 300 }} src={require('../../images/colors_sketch.png')} />
            </SectionGrid>
            <SectionGrid>
                <HeadingThree mb={1}>Theme JS object</HeadingThree>
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
    </Box>
);

const BlogPosts = () => (
    <Box bg="tertiary">
        <Section>
            <SubHeading mb={2} textAlign="center" color="white">
                Blog Posts
            </SubHeading>
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
        <SectionHeading textAlign="center">Get Started</SectionHeading>
        <Section display="flex">
            <SectionGrid>
                <HeadingThree mb={1}>Sketch</HeadingThree>
                <TextLink href="https://cabanadesignsystem.com/">Download Sketch Library</TextLink>
            </SectionGrid>
            <SectionGrid>
                <HeadingThree mb={1}>React</HeadingThree>
                <Install />
                <Button mt={2} color="primary">
                    Getting started guide
                </Button>
            </SectionGrid>
        </Section>
    </Box>
);

const Story = () => (
    <Section>
        <SectionHeading textAlign="center">Concept</SectionHeading>
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

export { Intro, MoreExamples, BlogPosts, Story, GetStarted, Install, WhyCabana };
