import { ThemeProvider, injectGlobal } from 'styled-components';

import React from 'react';
import theme from './theme';
import Home from './pages/Home';
import StyleGuide from './pages/Styleguide';
import Nav from './components/Nav';
import Examples from './pages/Examples';
import { Box } from 'cabana-react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

injectGlobal`
body {
    margin: 0;
}`;

class App extends React.Component {
    render() {
        return (
            <Router>
                <ThemeProvider theme={theme}>
                    <Box is="main" pt={56}>
                        <Nav />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/examples" component={Examples} />
                            <Route path="/components" component={StyleGuide} />
                        </Switch>
                    </Box>
                </ThemeProvider>
            </Router>
        );
    }
}
export default App;
