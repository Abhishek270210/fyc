import React, { Component } from 'react'
import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import Shop from './Pages/Shoppage/Shop-page'
import Header from './components/header-component/header-component'
import Signinandsingnup from './Pages/Sin-in-and-Sin-up/sign-in-and-sign-up'
import { Route,Switch } from "react-router-dom";
import { auth,createnewprofile } from './firebase/firebase.utils'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       current_user:null
    }
  }
   unsubscribefromauth=null;
  componentDidMount(){
    this.unsubscribefromauth=auth.onAuthStateChanged(async(user)=>{

      if(user)
      {
            const userref=await createnewprofile(user);
            userref.onSnapshot(snapshot=>{
              this.setState({
                current_user:{
                  id:snapshot.id,
                  ...snapshot.data()
                }
              },()=>console.log(this.state))
            })
      }
      else
      this.setState({current_user:null})
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

