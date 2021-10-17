import React from 'react';
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import PageNotFound from './PageNotFound'

const App = () => {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="*" >
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  )
}

export default App;