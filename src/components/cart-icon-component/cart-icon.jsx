import React, { Component } from 'react'
import { ReactComponent as ShoppingIcon } from '../../required-things/shopping-bag.svg.svg'
import './cart-icon-style.css'
import {connect} from 'react-redux'
import cartAction from '../../redux/cart/cart-action'

 class Carticon extends Component {
    render() {
        const {toggledropdown}=this.props;
        return (
            <div className="cart-icon">
                <ShoppingIcon className="shopping-icon" onClick={toggledropdown} />
                <span className="item-count">0</span>
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    toggledropdown:()=>dispatch(cartAction())
})

export default connect(null,mapDispatchToProps)(Carticon);
