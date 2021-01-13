import cartActionTypes from './cart-action-types'

export const cartAction=()=>({
    type:cartActionTypes.TOGGLE_DROPDOWN
})

export const additem=(item)=>({
    type:cartActionTypes.ADD_ITEM,
    payload:item
})



