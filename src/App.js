import { ThemeProvider, injectGlobal } from 'styled-components';

import React from 'react';
import cabanaDefaultTheme, { bainTheme, darkTheme } from './docsTheme';
import Home from './pages/Home';
import StyleGuide from './pages/Styleguide';
import Nav from './components/Nav';
import Examples from './pages/Examples';
import Guides from './pages/Guides';
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
      theme: cabanaDefaultTheme,
    };
  }

  chooseTheme(value) {
    switch (value) {
      case 'bain':
        return bainTheme;
      case 'dark':
        return darkTheme;
      default:
        return cabanaDefaultTheme;
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
          <Box is="main" bg="background" pt={72}>
            <Nav onThemeChange={this.toggleTheme.bind(this)} />
            <Switch>
              <Route component={Home} exact path="/" />
              <Route component={Guides} path="/guides" />
              <Route component={Examples} path="/examples" />
              <Route component={StyleGuide} path="/components" />
            </Switch>
            <Footer />
          </Box>
        </ThemeProvider>
      </Router>
    );
  }
}
export default App;
