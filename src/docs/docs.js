import { HeadingThree } from 'cabana-react';
import React from 'react';
export default function Docs({ title, children, style }) {
    return (
        <div style={style}>
            <a name={title.split(' ').join('')} />
            <HeadingThree is="h1" mt={8} mb={2} style={{ display: 'block', borderBottom: '1px solid lightgrey' }}>
                {title}
            </HeadingThree>
            {children}
        </div>
    );
}
