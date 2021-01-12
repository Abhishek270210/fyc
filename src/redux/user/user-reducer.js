import  useractiontype from './user-action-types'
const initialstate={
    current_user:null
}

const userReducer=(state=initialstate,action)=>{
    switch(action.type){
        case useractiontype.SET_CURRENT_USER:
        return {
            ...state,
            current_user:action.payload
        };
        default :
        return state;
    }
}

export default userReducer;