import Docs from './docs';
import React from 'react';
import { Tooltip } from 'cabana-react';
import DocLabel from '../components/DocLabel';

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
                <DocLabel>Default</DocLabel>
            </BaseTooltip>
            <BaseTooltip placement="top" bg="warning" color="secondary">
                <DocLabel>Top</DocLabel>
            </BaseTooltip>
            <BaseTooltip placement="right">
                <DocLabel>Right</DocLabel>
            </BaseTooltip>
            <BaseTooltip placement="bottom">
                <DocLabel>Bottom</DocLabel>
            </BaseTooltip>
            <BaseTooltip placement="left">
                <DocLabel>Left</DocLabel>
            </BaseTooltip>
        </Docs>
    );
}
