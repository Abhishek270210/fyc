import {createSelector} from 'reselect'

const MAP_STRING_TO_NUM={
    hats:1,
    jackets:3,
    sneakers:2,
    womens:4,
    mens:5
}

export const selectCollection=state=>state.collection

export const selectcollectiondata=createSelector(
    [selectCollection],
    collection=>collection.collection_data
)

export const selectCategorydata=urlprop=>
    createSelector(
        [selectcollectiondata],
        collection_data=>collection_data.find(collectionitem=>collectionitem.id===MAP_STRING_TO_NUM[urlprop])
    )