import { Box, LeadText } from 'cabana-react';
import { borderBottom, fontFamily, fontWeight, space } from 'styled-system';

import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
    ${fontFamily};
    padding: 0;
    ${space};
`;
const ListItem = styled.li`
    list-style-type: none;
    ${fontWeight};
    ${space};
    ${borderBottom};
`;

ListItem.defaultProps = {
    borderBottom: '1px solid lightgrey',
    py: 1,
};

const items = [
    'Buttons',
    'Cards',
    'Icons',
    'Notification Bars',
    'Pagination',
    'Progress Bar',
    'Tabs',
    'Text',
    'Tooltips',
];

export default function Nav() {
    return (
        <Box position="fixed" width={400} flexShrink={0} mr={2}>
            <Box bg="primary" color="white" p={1}>
                <LeadText fontWeight="bold">Cabana Design System</LeadText>
            </Box>
            <List fontFamily="default" p={1}>
                <ListItem fontWeight="bold">Components</ListItem>
                <List>
                    {items.map(item => (
                        <ListItem key={item}>{item}</ListItem>
                    ))}
                </List>
            </List>
        </Box>
    );
}
