import React, { Component } from 'react'
import Itempreview from '../item-preview-component/item-preview'
import './collection-preview-style.css'


class Collectionpreview extends Component {
    render() {
        // console.log(this.props);
        const {title,items}=this.props;
        return (
            <div className="collection-preview">
                <h2 className="collection-preview-title">{title}</h2>
                <div className="preview">
                {
                    items.filter((item,id)=>id<4).map(({id,...otherProps})=>(
                         <Itempreview key={id} {...otherProps} />
                    ))
                }
                </div>
            </div>
        )
    }
}

export default Collectionpreview
