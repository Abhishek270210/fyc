import React, { Component } from 'react'
import Custombuttoncomponent from '../custom-button/custom-button-component'
import './cart-dropdown-style.css'

 class Cartdropdown extends Component {
    render() {
        return (
            <div className="cart-dropdown">
                <div className="cart-items "/>
                <Custombuttoncomponent>GO TO CHECKOUT</Custombuttoncomponent>
            </div>
        )
    }
}

export default Cartdropdown;
