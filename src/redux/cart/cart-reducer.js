import cartActionTypes from './cart-action-types'

const initialstate={
    hidden:true
}

const cartReducer=(state=initialstate,action)=>{
      switch(action.type)
      {
          case cartActionTypes.TOGGLE_DROPDOWN:
              return ({
                  ...state,
                  hidden:!state.hidden
              });
              default:
                  return state;
      }
}

export default cartReducer;