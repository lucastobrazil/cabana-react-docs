import Docs from './docs';
import { BodyText } from 'cabana-react';
// import { IconHeart, IconCabanaTwitter } from 'cabanaico';
import IconCabanaTwitter from '../components/TempIcon';
import React from 'react';
export default function IconDocs() {
  return (
    <Docs title="Icons">
      <BodyText>We use the cabanaico library</BodyText>
      {/* <IconHeart /> */}
      <IconCabanaTwitter />
    </Docs>
  );
}
