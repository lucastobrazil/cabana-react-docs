import React from 'react';
import styled from 'styled-components';
import { Box, Button, Card, CardBodyText, CardImage, LeadText, HeadingThree, HeadingFive } from 'cabana-react';

export default function Examples() {
  return (
    <Box>
      <LeadText>Built with Cabana</LeadText>
      <PhoneExampleOne />
    </Box>
  );
}

const items = [
  {
    id: 0,
    name: 'Audio-Technica',
    description: 'AT-406 The best all-round Headphones money can buy. Ask your boss to buy you a few pairs.',
    price: 899,
  },
  {
    id: 1,
    name: 'BT Funzone',
    description: 'AT-406 The best all-round Headphones money can buy. Ask your boss to buy you a few pairs.',
    price: 699,
  },
];

const Item = ({ name, description, price }) => (
  <Box flex="0 0 110%" mx={3}>
    <Card textAlign="left">
      <CardImage src={require('../../images/audio_tech.png')} />
      <HeadingFive fontWeight="bold">{name}</HeadingFive>
      <CardBodyText>{description}</CardBodyText>
    </Card>
    <Box display="flex" my={3}>
      <LeadText color="white" fontWeight="bold">{`$${price} + VAT`}</LeadText>
      <Button bg="primary" color="white">
        Buy Now
      </Button>
    </Box>
  </Box>
);
function PhoneExampleOne() {
  return (
    <Box position="relative" maxWidth={375} borderColor="primary" borders="0px solid" borderTop={333} bg="darkGrey">
      <Box mt={-333} mb={72}>
        <HeadingThree fontWeight="bold" color="white" mb={3} p={3}>
          Discover
        </HeadingThree>
        <Box display="flex" style={{ overflowY: 'scroll' }} width="100%">
          {items.map(item => (
            <Item key={item.id} {...item} />
          ))}
        </Box>
      </Box>

      <Box position="absolute" bottom={0} left={0} bg="primary" width="100%" height={72}>
        FOOTER
      </Box>
    </Box>
  );
}
