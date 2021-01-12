import React, { Component } from 'react'
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

            </div>
        )
    }
}

export default Itempreview
