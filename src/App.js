import { ThemeProvider, injectGlobal } from 'styled-components';

import React from 'react';
import defaultTheme, { bainTheme, telcoTheme } from './theme';
import Home from './pages/Home/index';
import StyleGuide from './pages/Styleguide';
import Nav from './components/Nav';
import Examples from './pages/Examples';
import Guides from './pages/Guides/index';
import Footer from './components/Footer';
import { Box } from 'cabana-react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

injectGlobal`
body {
    margin: 0;
}`;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            theme: defaultTheme,
        };
    }

    chooseTheme(value) {
        switch (value) {
            case 'bain':
                return bainTheme;
            case 'telco':
                return telcoTheme;
            default:
                return defaultTheme;
        }
    }

    toggleTheme(e) {
        const value = e.target.value;
        this.setState({ theme: this.chooseTheme(value) });
    }

    render() {
        return (
            <Router>
                <ThemeProvider theme={this.state.theme}>
                    <Box is="main" pt={72}>
                        <Nav onThemeChange={this.toggleTheme.bind(this)} />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/guides" component={Guides} />
                            <Route path="/examples" component={Examples} />
                            <Route path="/components" component={StyleGuide} />
                        </Switch>
                        <Footer />
                    </Box>
                </ThemeProvider>
            </Router>
        );
    }
}
export default App;
