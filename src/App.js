import { ThemeProvider, injectGlobal } from 'styled-components';

import { Box } from 'cabana-react';
import ButtonDocs from './docs/Button';
import CardDocs from './docs/Card';
import FormsDocs from './docs/Forms/index';
import IconDocs from './docs/Icon';
import Nav from './components/Nav';
import NotificationBarDocs from './docs/NotificationBar';
import PaginationDocs from './docs/Pagination';
import ProgressBarDocs from './docs/ProgressBar';
import React from 'react';
import TabsDocs from './docs/Tabs';
import TextDocs from './docs/Text';
import TooltipDocs from './docs/Tooltip';
import theme from './theme';

injectGlobal`
body {
    margin: 0;
}`;
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box display="flex">
                {/* <GlobalStyle /> */}
                <Nav />
                <Box ml={216} maxWidth={900} px={4}>
                    <ButtonDocs />
                    <CardDocs />
                    <FormsDocs />
                    <IconDocs />
                    <NotificationBarDocs />
                    <PaginationDocs />
                    <ProgressBarDocs />
                    <TabsDocs />
                    <TextDocs />
                    <TooltipDocs />
                </Box>
            </Box>
        </ThemeProvider>
    );
};
export default App;
