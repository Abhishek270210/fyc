import {createSelector} from 'reselect'

export const selectCart=state=>state.cart

export const selectCartItems=createSelector(
    [selectCart],
    (cart)=>cart.cartitems
)

export const selectCartItemCount=createSelector(
    [selectCartItems],
    (cartitems)=>cartitems.reduce((totalitems,cartitem)=>totalitems+cartitem.quantity,0)
)

export const selectToggleDropdown=createSelector(
    [selectCart],
    cart=>cart.hidden
)

export const selectCartTotal=createSelector(
    [selectCartItems],
    cartitems=>cartitems.reduce((totalprice,cartitem)=>totalprice+cartitem.quantity*cartitem.price,0)
)