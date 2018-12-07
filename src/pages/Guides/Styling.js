import React from 'react';
import { BodyText } from 'cabana-react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Section, { SectionHeading, SubHeading } from '../../components/Section';

export default function Styling(props) {
  return (
    <Section id={props.title}>
      <SectionHeading>Styling</SectionHeading>
      <BodyText>
        Usually most style decisions will be made by your designer - and if they're also using the{' '}
        <a href="https://cabanadesignsystem.com">Cabana Sketch Library</a>, these styles will have been set up in the
        library. The library file is similar to a 'config' file for developers. It contains most of the main definitions
        of visual styles including:
        <ul>
          <li>Color pallete</li>
          <li>Fonts, sizes, weights and colors</li>
          <li>Different drop shadow styles</li>
        </ul>
        These are set in the <HashLink to="#Theming">theme file</HashLink>
      </BodyText>
    </Section>
  );
}
