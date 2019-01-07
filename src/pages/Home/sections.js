import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
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
      src={props.imageSrc || 'https://media-cdn.tripadvisor.com/media/photo-s/0f/d6/9f/af/sunscape-dominican-beach.jpg'}
    />
    <CardTitle fontWeight="normal" is="a" textDecoration="none" href={props.href} target="_blank">
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
      alignItems="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      // height="calc(100vh - 362px)"
      mt={-12}
    >
      <HeadingOne
        color="darkGrey"
        fontSize={['h2', 'h1']}
        fontWeight="bold"
        letterSpacing="-0.05em"
        maxWidth={680}
        my={8}
        textAlign="center"
      >
        A design system built especially for <span style={{ textDecoration: 'underline' }}>both</span> Sketch and React.
      </HeadingOne>
      <BodyText textAlign="center" mb={4}>
        Built with{' '}
        <TextLink is="a" href="http://reactjs.com">
          React,
        </TextLink>{' '}
        <TextLink is="a" href="https://www.styled-components.com">
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
      <Box display="flex" flexWrap={['wrap', 'nowrap']}>
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
    <Section display="flex" flexWrap={['wrap', 'nowrap']}>
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
    <Section display="flex" flexWrap={['wrap', 'nowrap']}>
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
      <StyledLink to="/guides">Check out the guides</StyledLink>
    </Button>
  </Box>
);

const BlogPosts = () => (
  <Box bg="tertiary">
    <Section>
      <SubHeading mb={2} textAlign="center" color="white">
        Relevant Blog Posts
      </SubHeading>
      <Box display="flex">
        <BlogPostCard title="Introducing Cabana for React" imageSrc="" />
        <BlogPostCard title="Patterns for Style Composition in React" imageSrc="" href="http://jxnblk.com/writing/posts/patterns-for-style-composition-in-react/"/>
        <BlogPostCard title="Introducing Cabana for React" imageSrc="" />
      </Box>
    </Section>
  </Box>
);

const Install = () => <CodeExample>{`npm install --save cabana-react`}</CodeExample>;

const GetStarted = () => (
  <Box py={4}>
    <SectionHeading textAlign="center">Get Started</SectionHeading>
    <Section display="flex" flexWrap={['wrap', 'nowrap']}>
      <SectionGrid>
        <HeadingThree mb={1}>Sketch</HeadingThree>
        <TextLink href="https://cabanadesignsystem.com/">Check out the Sketch Library</TextLink>
      </SectionGrid>
      <SectionGrid>
        <HeadingThree mb={1}>React</HeadingThree>
        <Install />
        <StyledLink to="/guides" mt={2} color="primary">
          Getting started guide
        </StyledLink>
      </SectionGrid>
    </Section>
  </Box>
);

const Story = () => (
  <Section>
    <SectionHeading textAlign="center">Concept</SectionHeading>
    <BodyText mb={1}>
      At its heart, Cabana is a powerful Sketch-driven design system. It utilises some of Sketch's core features like
      symbols, layer and text styles, overrides and libraries to deliver a user-friendly, maintainable design system
      that speeds up your process - especially when starting a completely new project.
    </BodyText>
    <BodyText>
      Before Cabana-React - your designs had no clear way of being translated into code. Cabana React is basically the
      React equivalent of the Cabana Sketch Library, and they are intended to work together... just like designers and
      developers 😇
    </BodyText>
    <ul>
      <ListItem>Speaking the same language (constraints-based)</ListItem>
      <ListItem>Rapid prototyping </ListItem>
      <ListItem>Theme-based design system </ListItem>
      <ListItem>DRY from the beginning</ListItem>
    </ul>
  </Section>
);

export { Intro, MoreExamples, BlogPosts, Story, GetStarted, Install, WhyCabana };
