import React, { Component } from 'react'
import { ReactComponent as ShoppingIcon } from '../../required-things/shopping-bag.svg.svg'
import './cart-icon-style.css'
import {connect} from 'react-redux'
import {cartAction} from '../../redux/cart/cart-action'

 class Carticon extends Component {
    render() {
        const {cartitems,toggledropdown}=this.props;
        let no_of_items=0;
        cartitems.map(cartitem=>no_of_items+=cartitem.quantity);
        return (
            <div className="cart-icon">
                <ShoppingIcon className="shopping-icon" onClick={toggledropdown} />
                <span className="item-count">{no_of_items}</span>
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    toggledropdown:()=>dispatch(cartAction())
})

const mapStateToProps=({cart:{cartitems}})=>({
    cartitems
})

export default connect(mapStateToProps,mapDispatchToProps)(Carticon);
