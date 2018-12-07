import React from 'react';
import { Button, LeadText } from 'cabana-react';
import Section from '../../components/Section';
import styled from 'styled-components';
import GettingStarted from './GettingStarted';
import Styling from './Styling';
import BestPractices from './BestPractices';
import Theming from './Theming';
import { HashLink as Link } from 'react-router-hash-link';

const Item = styled(Button)`
  transition: all 350ms;
  &:hover {
    border-color: grey;
    box-shadow: 0 16px 24px rgba(48, 49, 51, 0.2);
  }
`;

Item.defaultProps = {
  boxShadow: 100,
  bg: 'white',
  border: '1px solid',
  borderColor: 'lightGrey',
  borderRadius: 'small',
  color: 'primary',
  py: 2,
  textAlign: 'center',
  is: Link,
};

const sections = [
  { url: 'gettingStarted', name: 'Getting Started' },
  { url: 'styling', name: 'Styling' },
  { url: 'theming', name: 'Theming' },
  { url: 'bestPractices', name: 'Best Practices' },
];

export default function Guides() {
  return (
    <React.Fragment>
      <Section>
        <LeadText mb={4}>Guides</LeadText>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gridColumnGap: 16,
            gridRowGap: 16,
          }}
        >
          {sections.map((item, key) => (
            <Item key={key} to={`#${item.url}`} children={item.name} />
          ))}
        </div>
      </Section>
      <GettingStarted title={sections[0].url} />
      <Styling title={sections[1].url} />
      <Theming title={sections[2].url} />
      <BestPractices title={sections[3].url} />
    </React.Fragment>
  );
}
