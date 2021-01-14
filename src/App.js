import React, { Component } from 'react'
import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import Shop from './Pages/Shoppage/Shop-page'
import Header from './components/header-component/header-component'
import Signinandsingnup from './Pages/Sin-in-and-Sin-up/sign-in-and-sign-up'
import { Route,Switch,Redirect } from "react-router-dom";
import { auth,createnewprofile } from './firebase/firebase.utils'
import {connect} from 'react-redux';
import setCurrentUser from './redux/user/user-action'
import Checkout from './Pages/checkout/checkout'


class App extends Component {
   unsubscribefromauth=null;
  componentDidMount(){
    const {currentUser}=this.props;
    this.unsubscribefromauth=auth.onAuthStateChanged(async(user)=>{
      if(user)
      {
            const userref=await createnewprofile(user);
            userref.onSnapshot(snapshot=>{
              currentUser({
                id:snapshot.id,
                ...snapshot.data()
              })
            }) ;
      }
      else
      currentUser(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribefromauth();
  }
  
  render() {
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' render={()=>this.props.isuser ? (<Redirect to='/' />):( <Signinandsingnup /> )}       />
        <Route exact path='/checkout' component={Checkout} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps=({user})=>({
  isuser:user.current_user
})

const mapDispatchToProps=(dispatch)=>{
  return({
     currentUser:user=>dispatch(setCurrentUser(user))
  })
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

