import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers' // this search index by default
import './index.css'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Game from './components/Game.js'
import NotFound from './components/NotFound.js'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

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

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

/*
  All imgs tooked from https://www.gameart2d.com.html
*/
