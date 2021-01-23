import React, { Component } from 'react'
import Custombuttoncomponent from '../custom-button/custom-button-component'
import './cart-dropdown-style.css'
import Cartitem from '../cart-item-component/cart-item'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { cartAction } from '../../redux/cart/cart-action'
import {selectCartItems} from '../../redux/cart/cart-selector'

 class Cartdropdown extends Component {
    render() {
        const {cartitems,history,dispatch}=this.props;
        return (
            <div className="cart-dropdown">
                <div className="cart-items ">
                    {
                        cartitems.length ?
                         cartitems.map(cartitem=> <Cartitem key={cartitem.id} {...cartitem} />)
                         : <span className="empty-message">Add items to cart</span>
                    }
                </div>
                <Custombuttoncomponent onClick={()=>{
                    history.push('/checkout');
                    dispatch(cartAction());
                 }} > GO TO CHECKOUT </Custombuttoncomponent>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    cartitems:selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(Cartdropdown));
