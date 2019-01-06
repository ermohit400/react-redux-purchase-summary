import { actionTypes } from "../actions/actionTypes";
export default function (state = {
  products: {},
  promocodes: {}
}, action) {

const newState = state;
  switch (action.type) {
    case actionTypes.GET_PRODUCT:
      state.products = action.payload;
      return Object.assign({}, state, newState);
    case actionTypes.APPLY_PROMOCODE:
      state.promocodes = action.payload;
      return Object.assign({}, state, newState)
    default:
      return state;
   }
}
