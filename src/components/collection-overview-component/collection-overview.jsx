import React, { Component } from 'react'
import {connect} from 'react-redux'
import {selectcollectiondata} from '../../redux/shop/shop-selector'
import './collection-overview-style.css'

import Collectionpreview from '../collection-preview-component/collection-preview'

class Collectionoverview extends Component {
    render() {
        const {collections}=this.props;
        return (
            <div className="collections-overview">
                  {
                    collections.map(({id,...otherCollectionprops})=>(
                    <Collectionpreview key={id} {...otherCollectionprops} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    collections:selectcollectiondata(state)
})

export default connect(mapStateToProps)(Collectionoverview)
