import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer'
import collectionReducer from './shop/collection-reducer'
import {combineReducers}  from  'redux';

const rootReducer=combineReducers({
    user:userReducer,
    cart:cartReducer,
    collection:collectionReducer
})

export default rootReducer;