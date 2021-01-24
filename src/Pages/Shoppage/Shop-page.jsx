import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import './Shop-page-style.css'
import Categorypage from '../category-page/category-page'
import Collectionoverview from '../../components/collection-overview-component/collection-overview'

class Shop extends Component {
    render() {
        // console.log(this.state.collection);
        const {match}=this.props;
        // console.log(match);
        return (
            <div className="shop-page">
                <h1>Collection</h1>
                <Route exact path={`${match.path}`} component={Collectionoverview} />
                <Route  path={`${match.path}/:categoryId`} component={Categorypage} />
            </div>
        )
    }
}

export default Shop
