import Docs from './docs';
import React from 'react';
import { Tooltip } from 'cabana-react';

export default function TooltipDocs() {
    return (
        <Docs title="Tooltip">
            <Tooltip content="Here is my tooltip!" bg="primary" color="papayawhip">
                <a>Tooltip here.</a>
            </Tooltip>
        </Docs>
    );
}
