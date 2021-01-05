import React, { Component } from 'react'
import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import Shop from './Pages/Shoppage/Shop-page'
import { Route,Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        </Switch>
      </div>
    )
  }
}

export default App

