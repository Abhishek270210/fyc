import React, { Component } from 'react'
import { ReactComponent as ShoppingIcon } from '../../required-things/shopping-bag.svg.svg'
import './cart-icon-style.css'
import {connect} from 'react-redux'
import {cartAction} from '../../redux/cart/cart-action'
import {selectCartItemCount} from '../../redux/cart/cart-selector'

 class Carticon extends Component {
    render() {
        const {itemCount,toggledropdown}=this.props;
        return (
            <div className="cart-icon">
                <ShoppingIcon className="shopping-icon" onClick={toggledropdown} />
                <span className="item-count">{itemCount}</span>
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    toggledropdown:()=>dispatch(cartAction())
})

const mapStateToProps=(state)=>({
    itemCount:selectCartItemCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(Carticon);
