import { ThemeProvider, injectGlobal } from 'styled-components';

import React, { Suspense, lazy } from 'react';
import cabanaDefaultTheme, { bainTheme, darkTheme } from './docsTheme';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Box } from 'cabana-react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';

const Components = lazy(() => import('./pages/Styleguide'));
const Home = lazy(() => import('./pages/Home'));
const Guides = lazy(() => import('./pages/Guides'));
const Examples = lazy(() => import('./pages/Examples'));

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
              <Suspense fallback={<Loading />}>
                <Route component={props => <Home {...props} />} exact path="/" />
                <Route component={props => <Guides {...props} />} path="/guides" />
                <Route component={props => <Examples {...props} />} path="/examples" />
                <Route component={props => <Components {...props} />} path="/components" />
              </Suspense>
            </Switch>
            <Footer />
          </Box>
        </ThemeProvider>
      </Router>
    );
  }
}
export default App;
