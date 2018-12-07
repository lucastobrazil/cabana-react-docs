import { Avatar } from 'cabana-react';

import Docs from './docs';
import DocLabel from '../components/DocLabel';
import React from 'react';

export default function ChipsDocs() {
  const demoSrc =
    'https://images.pexels.com/photos/109243/pexels-photo-109243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

  const Label = props => <DocLabel mr={1} mt={2} {...props} />;
  return (
    <Docs title="Avatars">
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <div>
          <Avatar mx={2} size="jumbo" src={demoSrc} />
          <Label>Jumbo</Label>
        </div>
        <div>
          <Avatar mx={2} size="large" src={demoSrc} />
          <Label>Large</Label>
        </div>
        <div>
          <Avatar mx={2} size="medium" src={demoSrc} />
          <Label>Medium</Label>
        </div>
        <div>
          <Avatar mx={2} size="small" src={demoSrc} />
          <Label>Small</Label>
        </div>
      </div>
    </Docs>
  );
}
