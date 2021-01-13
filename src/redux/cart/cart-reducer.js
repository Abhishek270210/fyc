import cartActionTypes from './cart-action-types'
import {additemtocart} from './cart-util'

const initialstate={
    hidden:true,
    cartitems:[]
}

const cartReducer=(state=initialstate,action)=>{
      switch(action.type)
      {
          case cartActionTypes.TOGGLE_DROPDOWN:
              return ({
                  ...state,
                  hidden:!state.hidden
              });
              case cartActionTypes.ADD_ITEM:
                  return ({
                      ...state,
                      cartitems:additemtocart(state.cartitems,action.payload)
                  })
              default:
                  return state;
      }
}

export default cartReducer;