import Docs from './docs';
import { BodyText } from 'cabana-react';
import { IconHeart, IconCart } from 'cabanaico';
import React from 'react';
export default function IconDocs() {
  return (
    <Docs title="Icons">
      <BodyText>We use the cabanaico library</BodyText>
      <IconHeart />
      <IconCart />
    </Docs>
  );
}
