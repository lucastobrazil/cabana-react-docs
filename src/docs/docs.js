import { HeadingOne } from 'cabana-react';
import React from 'react';
export default function Docs({ title, children, style }) {
    return (
        <div style={style}>
            <HeadingOne
                fontWeight="bold"
                mt={8}
                mb={2}
                style={{ display: 'block', borderBottom: '1px solid lightgrey' }}
            >
                {title}
            </HeadingOne>
            {children}
        </div>
    );
}
