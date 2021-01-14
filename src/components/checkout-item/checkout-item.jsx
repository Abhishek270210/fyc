import React, { Component } from 'react'
import './checkout-item-style.css'
import {connect} from 'react-redux'
import { additem, clearitem, removeitem } from '../../redux/cart/cart-action';

class Checkoutitem extends Component {
    render() {
        const { cartitem,increaseitem,decreseitem,clearitem } = this.props;
        const { imageUrl, name, price, quantity } = cartitem;
        return (
            <div className="checkout-item">
                <div className="checkout-image-container">
                    <img className="checkout-img" src={imageUrl} alt="" />
                </div>
                <span className="checkout-item-name">{name}</span>
                <span className="checkout-item-quantity">
                    <div className="checkout-arrow" onClick={()=>decreseitem(cartitem)}>&#10094;</div>
                    <span className="checkout-quantity-value">{quantity}</span>
                    <div className="checkout-arrow" onClick={()=>increaseitem(cartitem)}>&#10095;</div>
                </span>
                <span className="checkout-item-price">${price}</span>
                <span className="checkout-item-remove" onClick={()=>clearitem(cartitem)} >&#10008;</span>
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    increaseitem:item=>dispatch(additem(item)),
    decreseitem:item=>dispatch(removeitem(item)),
    clearitem:item=>dispatch(clearitem(item))
})

export default connect(null,mapDispatchToProps)(Checkoutitem)
