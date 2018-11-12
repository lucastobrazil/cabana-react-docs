import { HeadingThree } from 'cabana-react';
import React from 'react';
import { makeHashLink } from '../services';
export default function Docs({ title, children, style }) {
    return (
        <article style={style} id={makeHashLink(title)}>
            <HeadingThree is="h1" pt={9} mb={2} style={{ display: 'block', borderBottom: '1px solid lightgrey' }}>
                {title}
            </HeadingThree>
            {children}
        </article>
    );
}
