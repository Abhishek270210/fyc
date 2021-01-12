 import React, { Component } from 'react'
 import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
 import './header-component-style.css'
 import {connect}  from 'react-redux'

class Header extends Component {
    render() {
        const { curruser }=this.props
        return (
            <div className="header">
             <Link to='/' className="nav-item" >FYC</Link>
             <div className="nav-items">
                 <Link className="nav-item" to='/shop'>Shop</Link>
                 {
                     curruser ? <div className="nav-item" onClick={()=>auth.signOut()}>sign out</div>:<Link className="nav-item" to='/signin'>sign in</Link>
                 }
                 <Link className="nav-item" to='/shop'>Contact</Link>
            </div>   
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return ({
        curruser:state.user.current_user
    })
}

export default connect(mapStateToProps)(Header);
