import React from 'react';
import { Box, HeadingOne, HeadingThree, HeadingFive, BodyText } from 'cabana-react';
import Button from '../docs/Button.mdx';
import Card from '../docs/Card.mdx';
import Forms from '../docs/Forms/index.mdx';
import Icon from '../docs/Icon.mdx';
import DocsNav from '../components/DocsNav';
import NotificationBar from '../docs/NotificationBar.mdx';
import Pagination from '../docs/Pagination.mdx';
import ProgressBar from '../docs/ProgressBar/index.mdx';
import Tabs from '../docs/Tabs.mdx';
import Text from '../docs/Text.mdx';
import Tooltip from '../docs/Tooltip.mdx';
import Chip from '../docs/Chip.mdx';
import Tags from '../docs/Tags.mdx';
import Avatars from '../docs/Avatars.mdx';

import { MDXProvider } from '@mdx-js/tag';

const H1 = props => <HeadingThree is="h1" pt={12} mb={2} style={{ display: 'block', borderBottom: '1px solid lightgrey' }} {...props} />;
const H2 = props => <HeadingFive is="h2"  my={2} {...props} />;
const DocsText = props => <BodyText pb={2} {...props} />;

const components = {
    h1: H1,
    h2: H2,
    p: DocsText,
  //   // ...
  //   code: Pre,
  //   inlineCode: Code
};

export default function StyleGuide() {
  return (
    <MDXProvider components={components}>
      <Box display="flex">
        <DocsNav />
        <Box ml={246} maxWidth={1000} px={4}>
        <HeadingOne mt={3}>Component Library</HeadingOne>
          <Avatars />
          <Button />
          <Card />
          <Chip />
          <Forms />
          <Icon />
          <NotificationBar />
          <Pagination />
          <ProgressBar />
          <Tabs />
          <Tags />
          <Text />
          <Tooltip />
        </Box>
      </Box>
    </MDXProvider>
  );
}
