 import React, { Component } from 'react'
 import {Link} from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
 import './header-component-style.css'
 import {connect}  from 'react-redux'
 import Carticon from '../cart-icon-component/cart-icon'
 import Cartdropdown from '../cart-dropdown-component/cart-dropdown'
 import {selectCurrentUser} from '../../redux/user/user-selector'
 import {selectToggleDropdown} from '../../redux/cart/cart-selector'

class Header extends Component {
    render() {
        const { curruser,iscartdropdown }=this.props
        return (
            <div className="header">
             <Link to='/' className="nav-item" >FYC</Link>
             <div className="nav-items">
                 <Link className="nav-item" to='/shop'>Shop</Link>
                 {
                     curruser ? <div className="nav-item" onClick={()=>auth.signOut()}>sign out</div>:<Link className="nav-item" to='/signin'>sign in</Link>
                 }
                 <Link className="nav-item" to='/shop'>Contact</Link>
                <Carticon></Carticon>
            </div> 
            {
              iscartdropdown ?  null:<Cartdropdown />
            }
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return ({
        curruser:selectCurrentUser(state),
        iscartdropdown:selectToggleDropdown(state)
    })
}


export default connect(mapStateToProps)(Header);
