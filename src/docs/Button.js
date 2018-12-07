import { Button, ButtonLarge, ButtonSmall } from 'cabana-react';
// import { IconCabanaTwitter, IconHeart } from 'cabanaico';
import IconCabanaTwitter from '../components/TempIcon';
import Docs from './docs';
import DocLabel from '../components/DocLabel';
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
              <DocLabel>Small</DocLabel>
            </td>
            <td>
              <ButtonSmall {...primaryProps}>Button</ButtonSmall>
            </td>
            <td>
              <ButtonSmall {...primaryProps}>
                <IconCabanaTwitter /> Button
              </ButtonSmall>
            </td>
            <td>
              <ButtonSmall {...primaryProps}>
                Button <IconCabanaTwitter />
              </ButtonSmall>
            </td>
          </tr>
          <tr>
            <td>
              <DocLabel>Normal</DocLabel>
            </td>
            <td>
              <Button {...primaryProps}>Button</Button>
            </td>
            <td>
              <Button {...primaryProps}>
                <IconCabanaTwitter /> Button
              </Button>
            </td>
            <td>
              <Button {...primaryProps}>
                Button <IconCabanaTwitter />
              </Button>
            </td>
          </tr>
          <tr>
            <td>
              <DocLabel>Large</DocLabel>
            </td>
            <td>
              <ButtonLarge {...primaryProps} fontWeight="bold">
                Button
              </ButtonLarge>
            </td>
            <td>
              <ButtonLarge {...primaryProps} fontWeight="bold">
                <IconCabanaTwitter /> Button
              </ButtonLarge>
            </td>
            <td>
              <ButtonLarge {...primaryProps} fontWeight="bold">
                Button <IconCabanaTwitter />
              </ButtonLarge>
            </td>
          </tr>

          <tr>
            <td>
              <DocLabel>Colourful</DocLabel>
            </td>
            <td>
              <ButtonSmall bg="error" borderRadius="large" color="white">
                Button
              </ButtonSmall>
            </td>
            <td>
              <Button bg="success" color="error">
                <IconCabanaTwitter /> Button
              </Button>
            </td>
            <td>
              <ButtonLarge bg="tertiary" color="warning">
                <IconCabanaTwitter /> Button
              </ButtonLarge>
            </td>
          </tr>
        </tbody>
      </table>
    </Docs>
  );
}
