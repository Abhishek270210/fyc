import React, { Component } from 'react'
import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import Shop from './Pages/Shoppage/Shop-page'
import Header from './components/header-component'
import Signinandsingnup from './Pages/Sin-in-and-Sin-up/sign-in-and-sign-up'
import { Route,Switch } from "react-router-dom";
import { auth } from './firebase/firebase.utils'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       current_user:null
    }
  }
   unsubscribefromauth=null;
  componentDidMount(){
    this.unsubscribefromauth=auth.onAuthStateChanged(user=>{
      this.setState({current_user:user})
    })
  }

  componentWillUnmount(){
    this.unsubscribefromauth();
  }
  
  render() {
    return (
      <div>
        <Header curruser={this.state.current_user} />
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

