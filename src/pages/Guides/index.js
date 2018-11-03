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
                        <Link to="#getting">Getting Started</Link>
                    </Item>
                    <Item>Styling</Item>
                    <Item>Theming</Item>
                    <Item>Best Practices</Item>
                </div>
            </Section>
            <GettingStarted />
            <Styling />
            <Theming />
            <BestPractices />
        </React.Fragment>
    );
}
