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
            color: black;
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
`;

ListItem.defaultProps = {
    p: 1,
};

const items = [
    'Avatars',
    'Buttons',
    'Cards',
    'Chips',
    'Forms',
    'Icons',
    'Notification Bar',
    'Pagination',
    'Progress Bar',
    'Tabs',
    'Tags',
    'Text',
    'Tooltips',
];

const todoItems = ['DatePickers', 'Dropdowns', 'Map', 'Menus', 'Modal', 'Sliders', 'Tables', 'Video Player'];

export default function DocsNav() {
    return (
        <Box
            position="fixed"
            width={246}
            pt={2}
            mr={2}
            borderColor="lightGrey"
            borderRight="1px dotted"
            height="100%"
            css="overflow: auto"
        >
            <CaptionText fontWeight="bold" px={1} color="lightGrey">
                Components
            </CaptionText>
            <List fontFamily="default" m={0}>
                {items.map(item => (
                    <ListItem key={item} color="grey">
                        <a href={`#${item.split(' ').join('')}`}>{item}</a>
                    </ListItem>
                ))}
            </List>
            <List fontFamily="default" m={0} mt={2}>
                <CaptionText fontWeight="bold" px={1} color="grey">
                    Not yet done:
                </CaptionText>
                {todoItems.map(item => (
                    <ListItem key={item} color="grey">
                        <a href={`#${item.split(' ').join('')}`}>{item}</a>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}
