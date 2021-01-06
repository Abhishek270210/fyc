 import React, { Component } from 'react'
 import {Link} from 'react-router-dom';
 import './header-component-style.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
             <Link to='/' >FYC</Link>
             <div className="nav-items">
                 <Link className="nav-item" to='/shop'>Shop</Link>
                 <Link className="nav-item" to='./signin'>Signin</Link>
                 <Link className="nav-item" to='/shop'>Contact</Link>
            </div>   
            </div>
        )
    }
}

export default Header
