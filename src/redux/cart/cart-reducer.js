import cartActionTypes from './cart-action-types'
import {additemtocart,deleteitem} from './cart-util'

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
                  case cartActionTypes.REMOVE_ITEM:
                      return{
                          ...state,
                          cartitems:deleteitem(state.cartitems,action.payload)
                      }
                      case cartActionTypes.CLEAR_ITEM:
                          return {
                              ...state,
                              cartitems:state.cartitems.filter(cartitem=> cartitem.id!==action.payload.id)
                          }
              default:
                  return state;
      }
}

export default cartReducer;