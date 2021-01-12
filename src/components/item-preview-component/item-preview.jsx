import React, { Component } from 'react'
// import Custombuttoncomponent from '../custom-button/custom-button-component'
import './item-preview-style.css'

class Itempreview extends Component {
    render() {
        const {name,imageUrl,price}=this.props;
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
                 <button className="custom-button-in-collection" >Add to cart</button>
            </div>
        )
    }
}

export default Itempreview
