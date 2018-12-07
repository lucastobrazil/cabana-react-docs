import { Button, ButtonSmall, Card, CardBodyText, CardFooter, CardImage, CardTitle, TinyText } from 'cabana-react';
// import { IconCabanaTwitter } from 'cabanaico';
import IconCabanaTwitter from '../components/TempIcon';
import Docs from './docs';
import React from 'react';

const SampleBodyText = `Hey there! I'm Tom. A singer, who's well known for my various awesome jams, and other amazing thangs.`;
export default function CardDocs() {
  return (
    <Docs title="Cards">
      <div
        style={{
          maxWidth: 1024,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridColumnGap: 10,
          gridRowGap: 30,
          alignItems: 'start',
        }}
      >
        <Card is="article" textAlign="center">
          <CardImage />
          <CardTitle>Tom Jones</CardTitle>
          <CardBodyText mb={4} display="inline-block">
            {SampleBodyText}
          </CardBodyText>
          <Button bg="primary" color="white" borderRadius="large">
            <IconCabanaTwitter />
            Follow me on Twitter
          </Button>
        </Card>

        <Card is="article" textAlign="center">
          <CardImage height="240px" />
          <CardTitle>Tom Jones</CardTitle>
          <CardBodyText mb={4} display="inline-block">
            {SampleBodyText}
          </CardBodyText>
          <Button bg="primary" color="white">
            View Full Profile
          </Button>
        </Card>

        <Card is="article">
          <CardImage />
          <CardTitle>Tom Jones</CardTitle>
          <CardBodyText>{SampleBodyText}</CardBodyText>
          <CardFooter>
            <TinyText color="grey">23 Friends</TinyText>
          </CardFooter>
        </Card>
        <Card is="article" p={8}>
          <CardTitle>More Padding</CardTitle>
          <CardBodyText>{SampleBodyText}</CardBodyText>
        </Card>
        <Card is="article" bg="secondary" borderRadius="small" boxShadow={60}>
          <CardTitle color="warning" fontWeight="normal">
            Fancy secondary one
          </CardTitle>
          <CardBodyText color="white"> {SampleBodyText}</CardBodyText>
        </Card>
        <Card is="article" borderRadius="small" boxShadow={60}>
          <CardTitle color="success" fontWeight="normal" mb={0}>
            Success!
          </CardTitle>
        </Card>
      </div>
    </Docs>
  );
}
