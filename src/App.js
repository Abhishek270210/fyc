import React, { Component } from 'react'
import './App.css'
import Homepage from './Pages/Homepage/Homepage'
import Shop from './Pages/Shoppage/Shop-page'
import Header from './components/header-component/header-component'
import Footercomp from './components/footer-component/footer-component'
import Signinandsingnup from './Pages/Sin-in-and-Sin-up/sign-in-and-sign-up'
import { Route,Switch,Redirect } from "react-router-dom";
import { auth,createnewprofile } from './firebase/firebase.utils'
import {connect} from 'react-redux';
import setCurrentUser from './redux/user/user-action'
import Checkout from './Pages/checkout/checkout'
import Contact from './Pages/Contact-page/contact'
import {selectCurrentUser} from './redux/user/user-selector'


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
        <Route  path='/shop' component={Shop} />
        <Route exact path='/signin' render={()=>this.props.isuser ? (<Redirect to='/' />):( <Signinandsingnup /> )}       />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/checkout' component={Checkout} />
        </Switch>
        <Footercomp/>
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  isuser:selectCurrentUser(state)
})

const mapDispatchToProps=(dispatch)=>{
  return({
     currentUser:user=>dispatch(setCurrentUser(user))
  })
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

