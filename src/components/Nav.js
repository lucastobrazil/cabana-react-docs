import { Box, CaptionText, LeadText } from 'cabana-react';
import { borderBottom, borderColor, color, fontFamily, fontWeight, space } from 'styled-system';

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
    ${borderBottom};
    ${borderColor};
    ${color};
    a {
        ${space};
        color: inherit;
        text-decoration: none;
        display: block;

        &:hover {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
`;

ListItem.defaultProps = {
    p: 1,
};

const items = [
    'Buttons',
    'Cards',
    'Forms',
    'Icons',
    'Notification Bar',
    'Pagination',
    'Progress Bar',
    'Tabs',
    'Text',
    'Tooltips',
];

const todoItems = [
    'Chips',
    'DatePickers',
    'Dropdowns',
    'Map',
    'Menus',
    'Modal',
    'Sliders',
    'Tables',
    'Tags',
    'Video Player',
];

export default function Nav() {
    return (
        <Box position="fixed" width={216} mr={2} bg="primary" height="100%">
            <Box color="white" p={1}>
                <LeadText fontWeight="bold">Cabana Design System</LeadText>
            </Box>
            <CaptionText fontWeight="bold" px={1} color="warning">
                Components
            </CaptionText>
            <List fontFamily="default" m={0}>
                {items.map(item => (
                    <ListItem key={item} color="white">
                        <a href={`#${item.split(' ').join('')}`}>{item}</a>
                    </ListItem>
                ))}
            </List>
            <List fontFamily="default" m={0} mt={2}>
                <CaptionText fontWeight="bold" px={1} color="white">
                    Not yet done:
                </CaptionText>
                {todoItems.map(item => (
                    <ListItem key={item} color="tertiary">
                        <a href={`#${item.split(' ').join('')}`}>{item}</a>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
