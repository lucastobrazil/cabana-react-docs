import React from 'react';
import Section, { SectionHeading, P, Code, TextLink } from '../../components/Section';
import CodeExample from '../../components/CodeExample';

export default function Theming() {
    return (
        <Section>
            <SectionHeading>Theming</SectionHeading>
            <P>
                Most visual style properties are set in one central location of your code; the <Code>theme.js</Code>{' '}
                file. This file is the code equivalent of your Cabana Sketch Library file.
            </P>
            <P>
                Under the hood, Cabana uses the <Code>ThemeProvider</Code> from styled-components and the theme
                properties set in <TextLink href="https://github.com/jxnblk/styled-system">styled-system</TextLink>.
                You're free to expand upon this how ever you like though!
            </P>
            <CodeExample>{`import { ThemeProvider } from 'styled-components';

const myTheme = {
    space: [0, 8, 15, 24, 32],
    colors: {
        primary: '#5450F7',
        secondary: '#25a9ce',
        tertiary: '#EF476F',
        black: '#303133',
        grey: '#8D8D8F',
        lightGrey: '#DADADA',
        darkGrey: '#303133',
        success: '#44A45F',
        warning: '#FCEB3B',
        error: '#E6173E',
        white: '#ffffff',
    },
}

const App = () => (
    <ThemeProvider theme={myTheme}>
        <Button bg="primary" color="secondary" p={2}>Styled Button!</Button>
    </ThemeProvider>
);
`}</CodeExample>
            <ul>
                <li>Bg, color, </li>
            </ul>
        </Section>
    );
}
