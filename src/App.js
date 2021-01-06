import React, { Component } from 'react'
import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import Shop from './Pages/Shoppage/Shop-page'
import Header from './components/header-component'
import Signinandsingnup from './Pages/Sin-in-and-Sin-up/sign-in-and-sign-up'
import { Route,Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' component={Signinandsingnup} />
        </Switch>
      </div>
    )
  }
}

export default App

