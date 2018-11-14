import React from 'react';
import { Button, LeadText } from 'cabana-react';
import Section from '../../components/Section';

import GettingStarted from './GettingStarted';
import Styling from './Styling';
import BestPractices from './BestPractices';
import Theming from './Theming';
import { HashLink as Link } from 'react-router-hash-link';

const Item = props => (
    <Button boxShadow={100} bg="white" borderRadius="small" color="primary" py={2} textAlign="center" {...props} />
);

const sections = {
    theming: 'Theming',
    styling: 'Styling',
    bestPractices: 'Best Practices',
    gettingStarted: 'Getting Started',
};

const InnerLink = ({ to }) => <Link to={`#${to}`} children={to} />;

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
                    <Item>
                        <InnerLink to={sections.gettingStarted} />
                    </Item>
                    <Item>
                        <InnerLink to={sections.styling} />
                    </Item>
                    <Item>
                        <InnerLink to={sections.theming} />
                    </Item>
                    <Item>
                        <InnerLink to={sections.bestPractices} />
                    </Item>
                </div>
            </Section>
            <GettingStarted title={sections.gettingStarted} />
            <Styling title={sections.styling} />
            <Theming title={sections.theming} />
            <BestPractices title={sections.bestPractices} />
        </React.Fragment>
    );
}
