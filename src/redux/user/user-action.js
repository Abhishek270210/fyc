 import  useractiontype from './user-action-types'
 const setCurrentUser=(user)=>{
   return ({
       type:useractiontype.SET_CURRENT_USER,
       payload:user
   })
}
export default setCurrentUser