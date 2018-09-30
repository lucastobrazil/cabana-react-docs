import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import TextDocs from './docs/Text';
import ButtonDocs from './docs/Button';
import IconDocs from './docs/Icon';
import NotificationBarDocs from './docs/NotificationBar';
import CardDocs from './docs/Card';
import PaginationDocs from './docs/Pagination';
import ProgressBarDocs from './docs/ProgressBar';
import TabsDocs from './docs/Tabs';
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
