import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Game from './components/Game.js'
import NotFound from './components/NotFound.js'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/FightGame' component={Game} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

/*
  All imgs tooked from https://www.gameart2d.com.html
*/
