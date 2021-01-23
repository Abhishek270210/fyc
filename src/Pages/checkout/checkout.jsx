import React, { Component } from 'react'
import './checkout-style.css'
import Checkoutitem from  '../../components/checkout-item/checkout-item'
import {connect} from 'react-redux'
import {selectCartTotal} from '../../redux/cart/cart-selector'


class Checkout extends Component {
    render() {
        const {cartitems,totalprice}=this.props;
        return (
            <div className="checkout-page">
                <div className="checkout-header">
                  <div className="header-block">
                   <span>Product</span>
                  </div>
                  <div className="header-block">
                   <span>Description</span>
                  </div>
                  <div className="header-block">
                   <span>Quantity</span>
                  </div>
                  <div className="header-block">
                   <span>Price</span>
                  </div>
                  <div className="header-block">
                   <span>Remove</span>
                  </div>
                </div>

                 {
                     cartitems.map(cartitem=> <Checkoutitem key={cartitem.id} cartitem={cartitem} />)
                 }

                <div className="total">Total:${totalprice}</div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    cartitems:state.cart.cartitems,
    totalprice:selectCartTotal(state)
})

export default connect(mapStateToProps)(Checkout)
