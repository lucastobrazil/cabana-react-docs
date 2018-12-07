import Docs from './docs';
import React from 'react';
import { Tabs, HeadingTwo } from 'cabana-react';
// import { IconHeart, IconCabanaTwitter } from 'cabanaico';
import IconCabanaTwitter from '../components/TempIcon';
export default function TabsDocs() {
  return (
    <Docs title="Tabs">
      <Tabs>
        <div label="News">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Store">
          After 'while, <em>Crocodile</em>!
        </div>
        <div label="Videos">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
        <div label="Photos">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Tabs>
      <HeadingTwo fontSize="h5" mt={6}>
        With Icon
      </HeadingTwo>
      <Tabs>
        {/* <div label="News" tabIcon={<IconHeart />}>
                    I like a lot of things
                </div> */}
        <div label="Store" tabIcon={<IconCabanaTwitter />}>
          Connected: Twitter account
        </div>
        <div label="Videos" tabIcon={<IconCabanaTwitter />}>
          Connected: Twitter account
        </div>
        <div label="Photos" tabIcon={<IconCabanaTwitter />}>
          Connected: Twitter account
        </div>
      </Tabs>
    </Docs>
  );
}
