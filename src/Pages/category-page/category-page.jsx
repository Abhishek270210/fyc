import React, { Component } from 'react'
import { connect } from 'react-redux';
import {selectCategorydata} from '../../redux/shop/shop-selector'
import ItemPreview from '../../components/item-preview-component/item-preview'


import './category-page-style.css'

class Categorypage extends Component {
    render() {
        const {categoryitem}=this.props;
        const {title,items}=categoryitem;
        // console.log(match);
        // console.log(categoryitem);
        return (
            <div className="category-page">
              <h1 className="category-title">{title}</h1>
              <div className="category-items">
               {
                   items.map(item=><ItemPreview key={item.id} item={item} />)
               }
              </div>  

            </div>
        )
    }
}

const mapStateToProps=(state,ownprops)=>({
   categoryitem:selectCategorydata(ownprops.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(Categorypage)
