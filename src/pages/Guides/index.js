import React from 'react';
import { Box, LeadText } from 'cabana-react';
import Section from '../../components/Section';
import styled from 'styled-components';
import GettingStarted from './GettingStarted';
import Styling from './Styling';
import BestPractices from './BestPractices';
import Theming from './Theming';
import { HashLink as Link } from 'react-router-hash-link';

const TopNavItem = styled(Box)`
  transition: all 350ms;
  text-decoration: none;
  &:hover {
    background-color: #fafafa;
    box-shadow: 0 16px 24px rgba(48, 49, 51, 0.2);
  }
`;

TopNavItem.defaultProps = {
  boxShadow: 100,
  bg: 'white',
  border: '1px solid',
  borderColor: 'transparent',
  borderRadius: 'small',
  color: 'primary',
  py: 2,
  textAlign: 'center',
  is: Link,
  fontWeight: 'bold'
};

const sections = [
  { url: 'GettingStarted', name: 'Getting Started' },
  { url: 'Styling', name: 'Styling' },
  { url: 'Theming', name: 'Theming' },
  { url: 'BestPractices', name: 'Best Practices' },
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
            <TopNavItem key={key} to={`#${item.url}`} children={item.name} />
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
