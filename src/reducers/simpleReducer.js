export default (state = {}, action) => {

 switch (action.type) {
  case 'APPLY_PROMOCODE':
   return {
    result: action.payload
   }
   case 'GET_PRODUCT':
    return {
     products: action.payload
    }
  default:
   return state
 }
}
