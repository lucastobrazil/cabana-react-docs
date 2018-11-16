import React from 'react';

export default function Icon3D(props) {
    return React.createElement(
        'svg',
        { style: props.customStyle, className: props.className, width: '24', height: '24', viewBox: '0 0 24 24', fill: 'currentColor', stroke: 'none', preserveAspectRatio: 'xMaxYMid slice', focusable: 'false', 'data-cabanaico': true },
        React.createElement('path', { d: 'm10.396 8.314c-.438-1.973-2.287-3.314-4.307-3.314h-2.589c-.828 0-1.5.671-1.5 1.5 0 .828.672 1.5 1.5 1.5h2.75c.689 0 1.25.561 1.25 1.25s-.561 1.25-1.25 1.25h-2.75c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5h2.75c.689 0 1.25.561 1.25 1.25s-.561 1.25-1.25 1.25h-2.75c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5h2.589c2.02 0 3.87-1.341 4.307-3.314.315-1.421-.111-2.728-.933-3.686.822-.958 1.248-2.265.933-3.686zm7.604-3.314h-6v14h6c2.209 0 4-1.791 4-4v-6c0-2.209-1.791-4-4-4zm1 10c0 .551-.449 1-1 1h-3v-8h3c.551 0 1 .449 1 1z' })
    );
}