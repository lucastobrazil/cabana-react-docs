import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { Box } from 'cabana-react';
import ButtonDocs from './docs/Button';
import CardDocs from './docs/Card';
import IconDocs from './docs/Icon';
import Nav from './components/Nav';
import NotificationBarDocs from './docs/NotificationBar';
import PaginationDocs from './docs/Pagination';
import ProgressBarDocs from './docs/ProgressBar';
import React from 'react';
import TabsDocs from './docs/Tabs';
import TextDocs from './docs/Text';
import theme from './theme';

// import TooltipDocs from './docs/Tooltip';
const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
}`;
const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box display="flex">
                <GlobalStyle />
                <Nav />
                <Box flexShrink={2}>
                    {/* <TooltipDocs /> */}
                    <ButtonDocs />
                    <CardDocs />
                    <IconDocs />
                    <NotificationBarDocs />
                    <PaginationDocs />
                    <ProgressBarDocs />
                    <TabsDocs />
                    <TextDocs />
                </Box>
            </Box>
        </ThemeProvider>
    );
};
export default App;
