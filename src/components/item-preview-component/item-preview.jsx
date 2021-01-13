import React, { Component } from 'react'
// import Custombuttoncomponent from '../custom-button/custom-button-component'
import './item-preview-style.css'
import {connect} from 'react-redux'
import { additem } from '../../redux/cart/cart-action'

class Itempreview extends Component {
    render() {
        const {item,addToCart}=this.props;
        const {name,imageUrl,price}=item;
        const style={
            backgroundImage:`url(${imageUrl})`
        }
        return (
            <div className="item-preview">
                <div style={style} className="background-image-collection-preview">
                </div>
                <div className="item-footer">
                   <span className="name">{name}</span>
                   <span className="price">{price}</span>
                </div>
                {/* <Custombuttoncomponent inverted >Add to cart</Custombuttoncomponent> */}
                 <button onClick={()=>addToCart(item)} className="custom-button-in-collection" >Add to cart</button>
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>({
    addToCart:item=>dispatch(additem(item))
})

export default connect(null,mapDispatchToProps)(Itempreview)
