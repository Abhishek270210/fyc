import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './header-component-style.css'
import { connect } from 'react-redux'
import Carticon from '../cart-icon-component/cart-icon'
import Cartdropdown from '../cart-dropdown-component/cart-dropdown'
import { selectCurrentUser } from '../../redux/user/user-selector'
import { selectToggleDropdown } from '../../redux/cart/cart-selector'
import { Nav, Navbar, Badge } from 'react-bootstrap'

class Header extends Component {
  render() {
    const { curruser, iscartdropdown } = this.props
    return (

      <>

        <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand><h3><Badge variant="secondary"> <Link to='/' className="nav-item" >FYC</Link></Badge> </h3></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link> <h4><Badge variant="secondary"><Link to='/' className="nav-item" >Home</Link></Badge> </h4></Nav.Link>
            <Nav.Link > <h4><Badge variant="secondary"> <Link className="nav-item" to='/shop'>Shop</Link></Badge> </h4></Nav.Link>
            {
              curruser ?  <Nav.Link onClick={() => auth.signOut()} > <h4><Badge variant="secondary"><Link to='/' className="nav-item" >Sign out</Link></Badge> </h4></Nav.Link>: 
              <Nav.Link > <h4><Badge variant="secondary"><Link className="nav-item" to='/signin'>Sign in</Link></Badge> </h4></Nav.Link>
            }
            <Nav.Link> <h4><Badge variant="secondary"> <Link className="nav-item" to='/contact'>Contact</Link></Badge> </h4></Nav.Link>
          </Nav>
          <h6>
           <Badge variant="secondary"> <Carticon></Carticon></Badge>
          </h6>
          {
            iscartdropdown ? null : <Cartdropdown />
          }
        </Navbar>
        
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    curruser: selectCurrentUser(state),
    iscartdropdown: selectToggleDropdown(state)
  })
}


export default connect(mapStateToProps)(Header);
