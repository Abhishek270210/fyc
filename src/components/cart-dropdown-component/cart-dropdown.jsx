import React, { Component } from 'react'
import Custombuttoncomponent from '../custom-button/custom-button-component'
import './cart-dropdown-style.css'
import Cartitem from '../cart-item-component/cart-item'
import {connect} from 'react-redux'

 class Cartdropdown extends Component {
    render() {
        const {cartitems}=this.props;
        return (
            <div className="cart-dropdown">
                <div className="cart-items ">
                    {
                         cartitems.map(cartitem=> <Cartitem key={cartitem.id} {...cartitem} />)
                    }
                </div>
                <Custombuttoncomponent>GO TO CHECKOUT</Custombuttoncomponent>
            </div>
        )
    }
}

const mapStateToProps=({cart:{cartitems}})=>({
    cartitems
})

export default connect(mapStateToProps)(Cartdropdown);
