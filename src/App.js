import { ThemeProvider, injectGlobal } from 'styled-components';

import React from 'react';
import theme from './theme';
import Home from './pages/Home';
import StyleGuide from './pages/Styleguide';
import Nav from './components/Nav';
import Examples from './pages/Examples';
injectGlobal`
body {
    margin: 0;
}`;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 'home',
        };
    }
    handleNavChange(page) {
        this.setState({ page: page });
    }

    renderPage(page) {
        switch (page) {
            case 'components':
                return <StyleGuide />;
            case 'examples':
                return <Examples />;
            default:
                return <Home />;
        }
    }

    render() {
        const { page } = this.state;
        return (
            <ThemeProvider theme={theme}>
                <main>
                    <Nav onClick={this.handleNavChange.bind(this)}>Nav</Nav>
                    {this.renderPage(page)}
                </main>
            </ThemeProvider>
        );
    }
}
export default App;
