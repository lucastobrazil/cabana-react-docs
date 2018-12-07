import React from 'react';
import { Box, TextInput, Card, CardBodyText, CardImage, Button, HeadingFour, SmallText } from 'cabana-react';

import Section, { SectionHeading, SubHeading, SectionGrid, P, TextLink, Blockquote } from '../../components/Section';
import CodeExample from '../../components/CodeExample';

const ButtonPrimary = props => <Button bg="tertiary" fontWeight="bold" {...props} />;
const AdBox = props => <Box p={1} border="1px solid" borderColor="tertiary" {...props} />;
const Callout = props => (
  <P
    border="1px solid"
    borderColor="tertiary"
    px={2}
    py={2}
    borderRadius="small"
    bg="tertiary"
    color="white"
    {...props}
  />
);

export default function BestPractices(props) {
  return (
    <Section id={props.title}>
      <SectionHeading>Best Practices</SectionHeading>
      <SubHeading my={1}>1. Communicate with your Designer!</SubHeading>
      <P color="grey" mb={2}>
        (...or designers - communicate with your devs... early!)
      </P>
      <P>
        The beauty of Cabana is that the system is built in a way that brings the designer and the developer closer
        together. Instead of speaking in <em>attributes</em> (like font size, color value, pixel widths), you speak in{' '}
        <em>components</em> and <em>units</em> (like Hero text, Body text, primary color, and units of padding).
      </P>
      <P>
        Spacing is a good example - Cabana is built on the{' '}
        <TextLink href="https://spec.fm/specifics/8-pt-grid" target="_blank">
          8pt grid system
        </TextLink>{' '}
        and is set up in code to measure units in multiples of 8. In this way, a designer who may choose to use 32px of
        padding can easily communicate that it's "4 units" of padding.
      </P>
      <Card display="flex">
        <SectionGrid>
          <CodeExample>{`const theme = {
    space: [0, 8, 16, 24, 32],
};
// 32px padding
<TextInput p={4} />`}</CodeExample>
          <TextInput p={3} placeholder="Input Text" mt={2} width="150px" />
        </SectionGrid>
        <SectionGrid>
          <img src={require('../../images/input_metrics.png')} style={{ maxWidth: '100%' }} />
        </SectionGrid>
      </Card>
      <Callout my={2}>
        Tip: you can also change the pixel units to be based on any scale you want. They don't even need to be multiples
        of the same number.
      </Callout>
      <P>
        In early stages of design – Designers and Devs should keep an open dialogue about the product's overall visual
        style, metaphors and heirarchy of components.
      </P>
      <Blockquote>
        Here's the color palette, here are the base font sizes for each level, here are the different border radii and
        here is the spacing scale.
      </Blockquote>
      <SubHeading>2. Define your own components</SubHeading>
      <P>
        In many cases, you'll end up customising the Cabana components to have a certain visual style. To save yourself
        from duplicating the props that define the visual style, it's recommended that you create your own instances of
        Cabana's base "Primitives" and then use these in your apps.
      </P>

      <HeadingFour>Example:</HeadingFour>
      <Card display="flex" bg="darkGrey">
        <SectionGrid>
          <CodeExample>{`import { Box, Button, SmallText } from 'cabana-react';

const ButtonPrimary = props => <Button bg="tertiary" fontWeight="bold" color="white" {...props} />;
const AdBox = props => <Box p={1} border="1px solid" borderColor="tertiary" {...props} />;

const App = () => (
    <AdBox display="flex">
        <SmallText color="tertiary">Please click this button to see a jack in the box.</SmallText>
        <ButtonPrimary>Boinggg!</ButtonPrimary>
    </AdBox>
)
            `}</CodeExample>
        </SectionGrid>
        <SectionGrid>
          <AdBox display="flex">
            <SmallText color="tertiary">Please click this button to see a jack in the box.</SmallText>
            <ButtonPrimary ml={1}>Boinggg!</ButtonPrimary>
          </AdBox>
        </SectionGrid>
      </Card>
      <HeadingFour my={4}>Core styles inside, variant styles outside</HeadingFour>
      <P>
        Remember that Cabana is a design system. The system is based around <em>constraints</em>. A good way of
        'enforcing' those constraints is to internally set the 'core' or 'fixed' style properties. Of course, to not be{' '}
        <em>too restrictive</em>, you can still let the developer override / customise props easily from the outside.
      </P>
      <Callout>
        When deciding which props to set in your component definition and which to pass in as props, try to think about
        your component's API from the perspective of <em>"which props are fixed?"</em> and{' '}
        <em>which props will our design system let the designer/developer decide case-by-case?"</em>
      </Callout>
      <Blockquote>
        Designer: Our cards can have one alternative background color - the default is white and when it's inactive, it
        is grey.
      </Blockquote>

      <CodeExample>
        {`import { Card } from 'cabana-react'; 

const MyCard = props => <Card boxShadow="large" bg={props.bg} />;

MyCard.defaultProps = {
    bg: "white",
};

// Now the developer can set the bg color based on the isInactive prop
<MyCard bg={isInactive && 'lightGrey'} />

// Alternative - here the card would need to handle the isActive prop internally
<MyCard isActive={false} />
            `}
      </CodeExample>
      <Box display="grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap: '20px' }} mt={2}>
        <Card>
          <CardImage src="https://tinyurl.com/yc9dz9xu" />
          <CardBodyText>Active (default)</CardBodyText>
        </Card>
        <Card bg="lightGrey">
          <CardImage src="https://tinyurl.com/yc9dz9xu" />
          <CardBodyText>Inactive</CardBodyText>
        </Card>
      </Box>
      <P mt={4}>
        This is a simplified example, but it illustrates the recommended practice of choosing what options to 'expose'
        in your component's API and how that relates to the rules set in the design system.
      </P>
    </Section>
  );
}
