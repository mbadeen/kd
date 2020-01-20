import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './layout/Header';
import Main from './layout/Main';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import '../styles/base.css';

const App: React.FC = (): JSX.Element => (
  <>
    <Router history={createBrowserHistory()}>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Main>
    </Router>
  </>
);

export default App;
