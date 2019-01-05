import sampleData from '../sampleData/index.json';

export const getProduct = payload => ({
  type: 'GET_PRODUCT',
  payload: sampleData.products
})

export const applyPromoCode = payload => ({
  type: 'APPLY_PROMOCODE',
  payload: sampleData.productPromoCodes
})

export function applyPromoCodes(promoCode){
  return function (dispatch) {
    if(promoCode !== undefined){
      let promoCodesArray = sampleData.productPromoCodes;
      let response = checkIfPromoCodeExists(promoCodesArray, promoCode);
      console.log('response: ',response);
      dispatch({
        type: 'APPLY_PROMOCODE',
        payload: response
      });
    }
  };
}

/*function to check promocode to json array*/
function checkIfPromoCodeExists(promoCodesArray, promoCode){
  var hasMatch = false;
  var percent = 0;
  for (var index = 0; index < promoCodesArray.length; ++index) {
   var promoList = promoCodesArray[index];
   if(promoList.promoCode === promoCode){
     hasMatch = true;
     percent = promoList.discountPercentage
     break;
   }
  }
  return {hasMatch,percent};
}
