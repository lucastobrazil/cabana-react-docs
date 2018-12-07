import React from 'react';
import { Box } from 'cabana-react';
import ButtonDocs from '../docs/Button';
import CardDocs from '../docs/Card';
import FormsDocs from '../docs/Forms/index';
import IconDocs from '../docs/Icon';
import DocsNav from '../components/DocsNav';
import NotificationBarDocs from '../docs/NotificationBar';
import PaginationDocs from '../docs/Pagination';
import ProgressBarDocs from '../docs/ProgressBar';
import TabsDocs from '../docs/Tabs';
import TextDocs from '../docs/Text';
import TooltipDocs from '../docs/Tooltip';
import ChipsDocs from '../docs/Chips';
import AvatarDocs from '../docs/Avatars';
import TagsDocs from '../docs/Tags';

export default function StyleGuide() {
  return (
    <Box display="flex">
      <DocsNav />
      <Box ml={246} maxWidth={900} px={4}>
        <AvatarDocs />
        <ButtonDocs />
        <CardDocs />
        <ChipsDocs />
        <FormsDocs />
        <IconDocs />
        <NotificationBarDocs />
        <PaginationDocs />
        <ProgressBarDocs />
        <TabsDocs />
        <TagsDocs />
        <TextDocs />
        <TooltipDocs />
      </Box>
    </Box>
  );
}
