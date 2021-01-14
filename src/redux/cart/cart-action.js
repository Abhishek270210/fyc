import cartActionTypes from './cart-action-types'

export const cartAction=()=>({
    type:cartActionTypes.TOGGLE_DROPDOWN
})

export const additem=(item)=>({
    type:cartActionTypes.ADD_ITEM,
    payload:item
})

export const removeitem=(item)=>({
    type:cartActionTypes.REMOVE_ITEM,
    payload:item
})

export const clearitem=(item)=>({
    type:cartActionTypes.CLEAR_ITEM,
    payload:item
})



