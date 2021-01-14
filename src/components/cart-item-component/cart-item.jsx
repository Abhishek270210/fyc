import React, { Component } from 'react'
import './cart-item-style.css';

 class Cartitem extends Component {
    render() {
        const {imageUrl,price,name,quantity}=this.props;
        return (
            <div className="cart-item">
               <img className="cart-img" src={imageUrl} alt="item"/>
               <div className="item-details">
                   <span className="cart-item-name">{name}</span>
                   <span className="cart-item-price">${price}x{quantity}</span>
               </div>
            </div>
        )
    }
}

export default Cartitem;
