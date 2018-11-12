import React from 'react';
import { BodyText } from 'cabana-react';

import Section, { SectionHeading, SubHeading } from '../../components/Section';

export default function Styling(props) {
    return (
        <Section id={props.title}>
            <SectionHeading>Styling</SectionHeading>
            <BodyText>
                With Cabana in your project, you're completely free to build components how ever you like. That said, if
                you would like to access Cabana's core theme in a conve
            </BodyText>
            <ul>
                <li>Bg, color, </li>
            </ul>
        </Section>
    );
}
