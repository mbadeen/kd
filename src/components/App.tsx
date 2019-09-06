import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Header from './layout/Header'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Cart from './pages/Cart'
import '../styles/base.css'

const App: React.FC = (): JSX.Element => (
  <>
    <Router history={createBrowserHistory()}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/cart" component={Cart} />
      </Switch>
    </Router>
  </>
)

export default App
