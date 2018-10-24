import { Chip } from 'cabana-react';

import Docs from './docs';
import React from 'react';

export default function ChipsDocs() {
    return (
        <Docs title="Chips">
            <Chip mr={1} text="Jack White" />
            <Chip mr={1} text="Adele" dismissable={true} />
            <Chip mr={1} bg="secondary" text="Freddie Mercury" dismissable={true} />
            <Chip mr={1} bg="tertiary" text="Thom Yorke" />
            <Chip
                mr={1}
                text="Duran Duran"
                avatarUrl="https://images.pexels.com/photos/109243/pexels-photo-109243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            />
        </Docs>
    );
}
