import { Button, ButtonLarge, ButtonSmall, SmallText } from 'cabana-react';

import Docs from './docs';
import React from 'react';

/* 
    In the real world you would probably define your own Primary Buttons
    eg. const PrimaryButton = props => <Button bg="primary" color="white" />

    But out of the box we don't want to define that. 
    The buttons are just designed to be configured stylistically
    how you want.
*/

const primaryProps = {
    bg: 'primary',
    color: 'white',
};
export default function ButtonDocs() {
    return (
        <Docs title="Buttons">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <SmallText>Plain</SmallText>
                        </td>
                        <td>
                            <ButtonSmall>Small</ButtonSmall>
                        </td>
                        <td>
                            <Button>Button</Button>
                        </td>
                        <td>
                            <ButtonLarge>Large</ButtonLarge>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <SmallText>Primary</SmallText>
                        </td>
                        <td>
                            <ButtonSmall {...primaryProps}>Small</ButtonSmall>
                        </td>
                        <td>
                            <Button {...primaryProps}>Button</Button>
                        </td>
                        <td>
                            <ButtonLarge {...primaryProps}>Large</ButtonLarge>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <SmallText>Icon</SmallText>
                        </td>
                        <td>
                            <ButtonSmall {...primaryProps} iconLeft={true}>
                                Small
                            </ButtonSmall>
                        </td>
                        <td>
                            <Button {...primaryProps} iconLeft={true}>
                                Button
                            </Button>
                        </td>
                        <td>
                            <ButtonLarge {...primaryProps} iconLeft={true} iconRight={true}>
                                Button
                            </ButtonLarge>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <SmallText>Colourful</SmallText>
                        </td>
                        <td>
                            <ButtonSmall bg="error" borderRadius="large" color="white">
                                Small
                            </ButtonSmall>
                        </td>
                        <td>
                            <Button bg="success" color="error" iconLeft={true}>
                                Button
                            </Button>
                        </td>
                        <td>
                            <ButtonLarge bg="tertiary" color="warning" iconLeft={true}>
                                Button
                            </ButtonLarge>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Docs>
    );
}
