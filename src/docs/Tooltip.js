import Docs from './docs';
import React from 'react';
import { Tooltip } from 'cabana-react';

export default function TooltipDocs() {
    const baseProps = {
        fontFamily: 'default',
        content: 'Here is my tooltip!',
        bg: 'primary',
        color: 'papayawhip',
        mx: 2,
        my: 8,
    };

    const BaseTooltip = otherProps => <Tooltip {...baseProps} {...otherProps} />;
    return (
        <Docs title="Tooltip">
            <BaseTooltip>
                <a>Default</a>
            </BaseTooltip>
            <BaseTooltip placement="top" bg="warning" color="secondary">
                <a>Top</a>
            </BaseTooltip>
            <BaseTooltip placement="right">
                <a>Right</a>
            </BaseTooltip>
            <BaseTooltip placement="bottom">
                <a>Bottom</a>
            </BaseTooltip>
            <BaseTooltip placement="left">
                <a>Left</a>
            </BaseTooltip>
        </Docs>
    );
}
