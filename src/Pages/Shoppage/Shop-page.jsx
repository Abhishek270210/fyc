import React, { Component } from 'react'
import './Shop-page-style.css'
import collection_data from './collection-preview-data'
import Collectionpreview from '../../components/collection-preview'

class Shop extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collections:collection_data
        }
    }
    
    render() {
        // console.log(this.state.collection);
        const {collections}=this.state;
        return (
            <div className="shop-page">
                <h1>Collection</h1>
                {
                    collections.map(({id,...otherCollectionprops})=>(
                    <Collectionpreview key={id} {...otherCollectionprops} />
                    ))
                }
            </div>
        )
    }
}

export default Shop
