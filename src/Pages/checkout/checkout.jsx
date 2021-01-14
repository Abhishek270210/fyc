import React, { Component } from 'react'
import './checkout-style.css'
import Checkoutitem from  '../../components/checkout-item/checkout-item'
import {connect} from 'react-redux'


class Checkout extends Component {
    render() {
        const {cartitems}=this.props;
        let totalprice=0;
        cartitems.map(cartitem=>totalprice=totalprice+cartitem.quantity*cartitem.price)
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

const mapStateToProps=({cart:{cartitems}})=>({
    cartitems
})

export default connect(mapStateToProps)(Checkout)
