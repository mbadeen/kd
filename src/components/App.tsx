import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Header from './layout/Header'
import Home from './pages/Home'
import Menu from './pages/Menu'
import '../styles/base.css'

const App: React.FC = (): JSX.Element => (
  <>
    <Header />
    <Router history={createBrowserHistory()}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
      </Switch>
    </Router>
  </>
)

export default App
