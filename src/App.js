import ButtonDocs from './docs/Button';
import CardDocs from './docs/Card';
import IconDocs from './docs/Icon';
import NotificationBarDocs from './docs/NotificationBar';
import PaginationDocs from './docs/Pagination';
import ProgressBarDocs from './docs/ProgressBar';
import React from 'react';
import TabsDocs from './docs/Tabs';
import TextDocs from './docs/Text';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
// import TooltipDocs from './docs/Tooltip';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                {/* <TooltipDocs /> */}
                <TabsDocs />
                <ProgressBarDocs />
                <PaginationDocs />
                <CardDocs />
                <NotificationBarDocs />
                <TextDocs />
                <ButtonDocs />
                <IconDocs />
            </div>
        </ThemeProvider>
    );
};
export default App;
